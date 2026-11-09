/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { l as e, s as t } from "./observeThemeChanges-BpFOlKgy.js";
import { CashierLayoutListType as n, CashierMethods as r } from "./types/CashierConfig.js";
import "./defaults-WuSrnsSc.js";
import { B as i, Bt as a, Ct as o, Et as s, H as c, N as l, P as u, _t as d, ct as f, dt as p, ft as m, jt as h, mt as g, pt as _, rt as v, vt as y, xt as b, yt as x } from "./purchase-Bc_pT4mi.js";
import { $ as S, $i as C, $t as w, A as T, Ar as E, At as D, B as O, Ci as k, Cr as A, Ct as ee, D as te, Dt as ne, E as j, En as M, Fr as re, Ft as N, Hn as P, Ht as F, In as I, It as ie, J as ae, Ji as L, Jn as R, Jt as oe, Kn as z, Lt as se, Mn as ce, Mr as le, Mt as ue, Nn as de, Nt as fe, O as pe, Or as me, Ot as he, Pr as ge, Pt as _e, Q as ve, Qn as ye, Rn as be, Rr as xe, Rt as Se, Si as Ce, Ti as we, Tr as Te, Tt as Ee, V as De, Vn as Oe, Vt as B, Wi as ke, Wn as Ae, Wt as je, Xn as Me, Xt as Ne, Yt as Pe, Z as Fe, _n as Ie, _r as Le, _t as Re, a as ze, aa as Be, ai as Ve, an as He, at as Ue, bi as V, br as We, ca as Ge, cn as Ke, cr as qe, ct as Je, di as Ye, dn as H, dt as Xe, ea as Ze, en as Qe, et as $e, f as U, fa as W, fi as et, fn as tt, ft as nt, g as rt, gi as it, h as at, hi as ot, hn as st, hr as ct, i as lt, ia as ut, ii as dt, in as ft, it as pt, jt as mt, kt as ht, lr as gt, ma as _t, mi as vt, mr as yt, n as bt, na as xt, nn as St, nr as Ct, oa as wt, oi as Tt, on as Et, pi as Dt, pt as Ot, qn as kt, ri as At, rn as jt, rt as Mt, sa as Nt, sn as Pt, tn as Ft, tr as It, tt as Lt, ui as Rt, ur as zt, v as Bt, vi as Vt, vn as Ht, vt as Ut, wi as Wt, wr as Gt, wt as G, xi as Kt, xr as qt, xt as Jt, y as Yt, yi as Xt, yr as Zt, zt as Qt } from "./usePaymentSelection-ikQnuCZA.js";
import { Children as $t, Component as en, Fragment as tn, cloneElement as nn, createContext as rn, createElement as an, forwardRef as on, isValidElement as sn, startTransition as cn, useCallback as K, useContext as q, useEffect as J, useId as ln, useImperativeHandle as un, useLayoutEffect as dn, useMemo as Y, useReducer as fn, useRef as X, useState as Z, useSyncExternalStore as pn } from "react";
import { Fragment as mn, jsx as Q, jsxs as $ } from "react/jsx-runtime";
import { createPortal as hn } from "react-dom";
//#region ../cashier-core/src/fields/paymentFieldReconciliation.ts
var gn = (e, t) => V(dt(At(Ye(e, t), t), t), Dt(e, t), Kt(e, t)), _n = (e, t) => {
	let n = t;
	for (let t = 0; t <= e.length; t++) {
		let t = gn(e, n);
		if (!t.length) return n;
		n = {
			...n,
			...Object.fromEntries(t.map((e) => [e.fieldId, e.value]))
		};
	}
	throw Error("Cyclic field reconciliation");
}, vn = /* @__PURE__ */ new Set([
	"text",
	"email",
	"tel",
	"number",
	"password",
	"select",
	"checkbox",
	"display",
	"qrcode"
]), yn = /* @__PURE__ */ new Set([
	"pan",
	"expiryDate",
	"csc",
	"token",
	"securityCode"
]), bn = (e) => e?.method === "payin" && e.type === "crypto" && e.service === "select" && (!("hfFields" in e) || e.hfFields === void 0 || Array.isArray(e.hfFields) && e.hfFields.length === 0) && (e.fields ?? []).every((e) => vn.has(e.type ?? "text") && (!e.id || !yn.has(e.id))), xn = (e) => {
	try {
		fetch(e, {
			method: "POST",
			mode: "no-cors",
			keepalive: !0
		}).catch(() => void 0);
	} catch {}
}, Sn = ({ renderMode: e, hideAmountField: t = !1, lockAmount: n = !1, fields: r }) => e !== "form" || t || n ? !1 : (r ?? []).some((e) => e.id === "amount"), Cn = ({ values: e, amountValueOverride: t, initialAmount: n, shouldHideAmountField: r, hasAmountField: i, lockAmount: a = !1 }) => {
	if (!i) {
		if (!Object.hasOwn(e, "amount")) return e;
		let { amount: t, ...n } = e;
		return n;
	}
	let o = a ? n : t ?? (r ? n : void 0);
	return o === void 0 || e.amount === o ? e : {
		...e,
		amount: o
	};
}, wn = (e, t, n, r) => {
	if (e.some((e) => !/^\d+(?:\.\d+)?$/.test(e))) return null;
	let i = Math.max(...e.map((e) => e.split(".")[1]?.replace(/0+$/, "").length ?? 0)), a = Me(t, n, r);
	return i <= (a?.resolvedOptions().maximumFractionDigits ?? 2) ? a : i > 20 ? null : Me(t, n, {
		...r,
		maximumFractionDigits: i
	});
}, Tn = (e, t, n, r) => {
	let i = e.trim(), a = wn([i], t, n, r);
	return ye(i, a) || `${i} ${t}`.trim();
}, En = (e, t, n, r, i) => {
	let a = wn([e, t], n, r, i);
	if (e === t) return Tn(e, n, r, i);
	if (a instanceof Intl.NumberFormat && typeof a.formatRangeToParts == "function") {
		let n = a.formatRangeToParts(e, t);
		if (n.some((e) => e.source === "startRange") && n.some((e) => e.source === "endRange")) return n.map((e) => e.value).join("");
	}
	return `${Tn(e, n, r, i)}–${Tn(t, n, r, i)}`;
}, Dn = [
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
], On = (e) => typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.trunc(e)) : void 0, kn = (e) => {
	if (!e) return [];
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = r.trim();
		e && !n.has(e) && (n.add(e), t.push(e));
	}
	return t;
}, An = () => {
	if (typeof navigator > "u") return;
	let { language: e } = navigator;
	return e?.trim() || kn(Array.isArray(navigator.languages) ? navigator.languages : [])[0];
}, jn = () => {
	if (typeof navigator > "u") return;
	let e = kn(Array.isArray(navigator.languages) ? navigator.languages : []);
	if (e.length > 0) return e;
	let { language: t } = navigator, n = t?.trim();
	return n ? [n] : void 0;
}, Mn = (e) => typeof e == "number" && Number.isFinite(e) ? String(Math.trunc(e)) : void 0, Nn = (e, t) => Dn.find(({ width: n, height: r }) => e >= n && t >= r)?.code ?? "05", Pn = () => {
	if (typeof window > "u" || typeof navigator > "u") return;
	let { screen: e, innerWidth: t, innerHeight: n } = window, r = t || e.width || 0, i = n || e.height || 0, a = On(e.colorDepth), o = Mn(e.height), s = Mn(e.width), c = jn(), l = An(), u = String((/* @__PURE__ */ new Date()).getTimezoneOffset()), d = {
		browserJavascriptEnabled: !0,
		challengeWindowSize: Nn(r, i)
	};
	a && (d.browserColorDepth = a), c?.length && (d.browserAcceptLanguage = c), d.browserJavaEnabled = !1, l && (d.browserLanguage = l), o && (d.browserScreenHeight = o), s && (d.browserScreenWidth = s), u && (d.browserTZ = u);
	let f = navigator.userAgent || void 0;
	return f && (d.browserUserAgent = f), d;
}, Fn = () => {
	if (typeof window < "u") try {
		let e = window.nSureSDK?.getDeviceId?.();
		return typeof e == "string" && e.trim() !== "" ? e : void 0;
	} catch {
		return;
	}
}, In = (e, t) => e?.toLowerCase() === "card" && t?.toLowerCase() === "payin", Ln = (e, t) => {
	if (In(e, t)) return Pn();
}, Rn = (e, t, n) => {
	if (In(e, t)) {
		if (n?.coinflow) {
			zn({
				type: e,
				method: t,
				values: {},
				hostRiskContext: n
			});
			let { deviceId: r } = n.coinflow;
			return r;
		}
		return Fn();
	}
}, zn = ({ type: e, method: t, values: n, hostRiskContext: r }) => {
	if (!In(e, t) || !r?.coinflow || "coinflowDeviceId" in Wt(n)) return;
	let { deviceId: i, expiresAt: a } = r.coinflow, o = Date.parse(a);
	if (typeof i != "string" || !i.trim() || i.length > 2048 || !Number.isFinite(o) || o <= Date.now()) throw Error("error.host_risk_context_expired");
}, Bn = (e, t) => {
	if (e) try {
		return JSON.parse(e);
	} catch (e) {
		a.error(t, "[Cashier] Failed to parse override payload", e);
		return;
	}
}, Vn = async (e, t, n) => {
	if (!n) return e;
	let r = await t(Ce(e.saveAccount));
	return {
		...e,
		...r
	};
}, Hn = async (e, t, n) => {
	let { amount: r, merchantRequestId: i, ...a } = e;
	return Wn(e, await Vn(a, t, n));
}, Un = (e) => {
	let { amount: t, merchantRequestId: n, ...r } = e;
	return Wn(e, r);
}, Wn = (e, t) => {
	let { amount: n, merchantRequestId: r } = e, i = { ...t };
	return Object.prototype.hasOwnProperty.call(e, "amount") && (i.amount = n), Object.prototype.hasOwnProperty.call(e, "merchantRequestId") && (i.merchantRequestId = r), i;
}, Gn = (e) => {
	let { values: t, merchantId: n, userId: r, sessionId: i, accountId: a, currency: o, service: s, bonusCode: c, locales: l, extra: u, returnUrl: f, method: p, type: m, debug: h, overrideRaw: g, hostRiskContext: _, hasAmountField: v } = e, { amount: y, merchantRequestId: b, ...x } = t, S = Wt(x);
	if (!("coinflowDeviceId" in S)) {
		let e = Rn(m, p, _);
		e && (S.coinflowDeviceId = e);
	}
	let C = {
		merchantId: n,
		userId: r,
		sessionId: i,
		...v ? { amount: k(y) } : {},
		accountId: a,
		currency: o,
		service: d(s) ?? void 0,
		input: S
	}, w = d(c);
	w && (C.bonusCode = w), l?.length && (C.locales = l), u && Object.keys(u).length > 0 && (C.extra = u);
	let T = d(f);
	T && (C.returnUrl = T);
	let E = d(b);
	E && (C.merchantRequestId = E);
	let D = Ln(m, p);
	D && (C.threeds = D);
	let O = Bn(g, h);
	if (O && Object.assign(C, O), v) {
		let e = Rt(k(C.amount));
		if (!e.isValid) throw Error("error.presentation_intent_invalid_input");
		C.amount = e.amount;
	} else delete C.amount;
	return C;
}, Kn = function(e) {
	return qn(e) && !Jn(e);
};
function qn(e) {
	return !!e && typeof e == "object";
}
function Jn(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Xn(e);
}
var Yn = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Xn(e) {
	return e.$$typeof === Yn;
}
function Zn(e) {
	return Array.isArray(e) ? [] : {};
}
function Qn(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? tr(Zn(e), e, t) : e;
}
function $n(e, t, n) {
	return e.concat(t).map(function(e) {
		return Qn(e, n);
	});
}
function er(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Qn(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		r[i] = !n.isMergeableObject(t[i]) || !e[i] ? Qn(t[i], n) : tr(e[i], t[i], n);
	}), r;
}
function tr(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || $n, n.isMergeableObject = n.isMergeableObject || Kn;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : er(e, t, n) : Qn(t, n);
}
tr.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return tr(e, n, t);
	}, {});
};
var nr = tr, rr = typeof global == "object" && global && global.Object === Object && global, ir = typeof self == "object" && self && self.Object === Object && self, ar = rr || ir || Function("return this")(), or = ar.Symbol, sr = Object.prototype, cr = sr.hasOwnProperty, lr = sr.toString, ur = or ? or.toStringTag : void 0;
function dr(e) {
	var t = cr.call(e, ur), n = e[ur];
	try {
		e[ur] = void 0;
		var r = !0;
	} catch {}
	var i = lr.call(e);
	return r && (t ? e[ur] = n : delete e[ur]), i;
}
//#endregion
//#region ../../node_modules/lodash-es/_objectToString.js
var fr = Object.prototype.toString;
function pr(e) {
	return fr.call(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetTag.js
var mr = "[object Null]", hr = "[object Undefined]", gr = or ? or.toStringTag : void 0;
function _r(e) {
	return e == null ? e === void 0 ? hr : mr : gr && gr in Object(e) ? dr(e) : pr(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_overArg.js
function vr(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_getPrototype.js
var yr = vr(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/lodash-es/isObjectLike.js
function br(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/lodash-es/isPlainObject.js
var xr = "[object Object]", Sr = Function.prototype, Cr = Object.prototype, wr = Sr.toString, Tr = Cr.hasOwnProperty, Er = wr.call(Object);
function Dr(e) {
	if (!br(e) || _r(e) != xr) return !1;
	var t = yr(e);
	if (t === null) return !0;
	var n = Tr.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && wr.call(n) == Er;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheClear.js
function Or() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/eq.js
function kr(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/lodash-es/_assocIndexOf.js
function Ar(e, t) {
	for (var n = e.length; n--;) if (kr(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheDelete.js
var jr = Array.prototype.splice;
function Mr(e) {
	var t = this.__data__, n = Ar(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : jr.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheGet.js
function Nr(e) {
	var t = this.__data__, n = Ar(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheHas.js
function Pr(e) {
	return Ar(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheSet.js
function Fr(e, t) {
	var n = this.__data__, r = Ar(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_ListCache.js
function Ir(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ir.prototype.clear = Or, Ir.prototype.delete = Mr, Ir.prototype.get = Nr, Ir.prototype.has = Pr, Ir.prototype.set = Fr;
//#endregion
//#region ../../node_modules/lodash-es/_stackClear.js
function Lr() {
	this.__data__ = new Ir(), this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackDelete.js
function Rr(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackGet.js
function zr(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_stackHas.js
function Br(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/isObject.js
function Vr(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/lodash-es/isFunction.js
var Hr = "[object AsyncFunction]", Ur = "[object Function]", Wr = "[object GeneratorFunction]", Gr = "[object Proxy]";
function Kr(e) {
	if (!Vr(e)) return !1;
	var t = _r(e);
	return t == Ur || t == Wr || t == Hr || t == Gr;
}
//#endregion
//#region ../../node_modules/lodash-es/_coreJsData.js
var qr = ar["__core-js_shared__"], Jr = function() {
	var e = /[^.]+$/.exec(qr && qr.keys && qr.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Yr(e) {
	return !!Jr && Jr in e;
}
//#endregion
//#region ../../node_modules/lodash-es/_toSource.js
var Xr = Function.prototype.toString;
function Zr(e) {
	if (e != null) {
		try {
			return Xr.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsNative.js
var Qr = /[\\^$.*+?()[\]{}|]/g, $r = /^\[object .+?Constructor\]$/, ei = Function.prototype, ti = Object.prototype, ni = ei.toString, ri = ti.hasOwnProperty, ii = RegExp("^" + ni.call(ri).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function ai(e) {
	return !Vr(e) || Yr(e) ? !1 : (Kr(e) ? ii : $r).test(Zr(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getValue.js
function oi(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/lodash-es/_getNative.js
function si(e, t) {
	var n = oi(e, t);
	return ai(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_Map.js
var ci = si(ar, "Map"), li = si(Object, "create");
//#endregion
//#region ../../node_modules/lodash-es/_hashClear.js
function ui() {
	this.__data__ = li ? li(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashDelete.js
function di(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashGet.js
var fi = "__lodash_hash_undefined__", pi = Object.prototype.hasOwnProperty;
function mi(e) {
	var t = this.__data__;
	if (li) {
		var n = t[e];
		return n === fi ? void 0 : n;
	}
	return pi.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashHas.js
var hi = Object.prototype.hasOwnProperty;
function gi(e) {
	var t = this.__data__;
	return li ? t[e] !== void 0 : hi.call(t, e);
}
//#endregion
//#region ../../node_modules/lodash-es/_hashSet.js
var _i = "__lodash_hash_undefined__";
function vi(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = li && t === void 0 ? _i : t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Hash.js
function yi(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
yi.prototype.clear = ui, yi.prototype.delete = di, yi.prototype.get = mi, yi.prototype.has = gi, yi.prototype.set = vi;
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheClear.js
function bi() {
	this.size = 0, this.__data__ = {
		hash: new yi(),
		map: new (ci || Ir)(),
		string: new yi()
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_isKeyable.js
function xi(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/lodash-es/_getMapData.js
function Si(e, t) {
	var n = e.__data__;
	return xi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheDelete.js
function Ci(e) {
	var t = Si(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheGet.js
function wi(e) {
	return Si(this, e).get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheHas.js
function Ti(e) {
	return Si(this, e).has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheSet.js
function Ei(e, t) {
	var n = Si(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_MapCache.js
function Di(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Di.prototype.clear = bi, Di.prototype.delete = Ci, Di.prototype.get = wi, Di.prototype.has = Ti, Di.prototype.set = Ei;
//#endregion
//#region ../../node_modules/lodash-es/_stackSet.js
var Oi = 200;
function ki(e, t) {
	var n = this.__data__;
	if (n instanceof Ir) {
		var r = n.__data__;
		if (!ci || r.length < Oi - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Di(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Stack.js
function Ai(e) {
	var t = this.__data__ = new Ir(e);
	this.size = t.size;
}
Ai.prototype.clear = Lr, Ai.prototype.delete = Rr, Ai.prototype.get = zr, Ai.prototype.has = Br, Ai.prototype.set = ki;
//#endregion
//#region ../../node_modules/lodash-es/_arrayEach.js
function ji(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_defineProperty.js
var Mi = function() {
	try {
		var e = si(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignValue.js
function Ni(e, t, n) {
	t == "__proto__" && Mi ? Mi(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/lodash-es/_assignValue.js
var Pi = Object.prototype.hasOwnProperty;
function Fi(e, t, n) {
	var r = e[t];
	(!(Pi.call(e, t) && kr(r, n)) || n === void 0 && !(t in e)) && Ni(e, t, n);
}
//#endregion
//#region ../../node_modules/lodash-es/_copyObject.js
function Ii(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Ni(n, s, c) : Fi(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseTimes.js
function Li(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsArguments.js
var Ri = "[object Arguments]";
function zi(e) {
	return br(e) && _r(e) == Ri;
}
//#endregion
//#region ../../node_modules/lodash-es/isArguments.js
var Bi = Object.prototype, Vi = Bi.hasOwnProperty, Hi = Bi.propertyIsEnumerable, Ui = zi(function() {
	return arguments;
}()) ? zi : function(e) {
	return br(e) && Vi.call(e, "callee") && !Hi.call(e, "callee");
}, Wi = Array.isArray;
//#endregion
//#region ../../node_modules/lodash-es/stubFalse.js
function Gi() {
	return !1;
}
//#endregion
//#region ../../node_modules/lodash-es/isBuffer.js
var Ki = typeof exports == "object" && exports && !exports.nodeType && exports, qi = Ki && typeof module == "object" && module && !module.nodeType && module, Ji = qi && qi.exports === Ki ? ar.Buffer : void 0, Yi = (Ji ? Ji.isBuffer : void 0) || Gi, Xi = 9007199254740991, Zi = /^(?:0|[1-9]\d*)$/;
function Qi(e, t) {
	var n = typeof e;
	return t ??= Xi, !!t && (n == "number" || n != "symbol" && Zi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/lodash-es/isLength.js
var $i = 9007199254740991;
function ea(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $i;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsTypedArray.js
var ta = "[object Arguments]", na = "[object Array]", ra = "[object Boolean]", ia = "[object Date]", aa = "[object Error]", oa = "[object Function]", sa = "[object Map]", ca = "[object Number]", la = "[object Object]", ua = "[object RegExp]", da = "[object Set]", fa = "[object String]", pa = "[object WeakMap]", ma = "[object ArrayBuffer]", ha = "[object DataView]", ga = "[object Float32Array]", _a = "[object Float64Array]", va = "[object Int8Array]", ya = "[object Int16Array]", ba = "[object Int32Array]", xa = "[object Uint8Array]", Sa = "[object Uint8ClampedArray]", Ca = "[object Uint16Array]", wa = "[object Uint32Array]", Ta = {};
Ta[ga] = Ta[_a] = Ta[va] = Ta[ya] = Ta[ba] = Ta[xa] = Ta[Sa] = Ta[Ca] = Ta[wa] = !0, Ta[ta] = Ta[na] = Ta[ma] = Ta[ra] = Ta[ha] = Ta[ia] = Ta[aa] = Ta[oa] = Ta[sa] = Ta[ca] = Ta[la] = Ta[ua] = Ta[da] = Ta[fa] = Ta[pa] = !1;
function Ea(e) {
	return br(e) && ea(e.length) && !!Ta[_r(e)];
}
//#endregion
//#region ../../node_modules/lodash-es/isTypedArray.js
var Da = Ea, Oa = Object.prototype.hasOwnProperty;
function ka(e, t) {
	var n = Wi(e), r = !n && Ui(e), i = !n && !r && Yi(e), a = !n && !r && !i && Da(e), o = n || r || i || a, s = o ? Li(e.length, String) : [], c = s.length;
	for (var l in e) (t || Oa.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Qi(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/lodash-es/_isPrototype.js
var Aa = Object.prototype;
function ja(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Aa);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeys.js
var Ma = vr(Object.keys, Object), Na = Object.prototype.hasOwnProperty;
function Pa(e) {
	if (!ja(e)) return Ma(e);
	var t = [];
	for (var n in Object(e)) Na.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/isArrayLike.js
function Fa(e) {
	return e != null && ea(e.length) && !Kr(e);
}
//#endregion
//#region ../../node_modules/lodash-es/keys.js
function Ia(e) {
	return Fa(e) ? ka(e) : Pa(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssign.js
function La(e, t) {
	return e && Ii(t, Ia(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeysIn.js
function Ra(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseKeysIn.js
var za = Object.prototype.hasOwnProperty;
function Ba(e) {
	if (!Vr(e)) return Ra(e);
	var t = ja(e), n = [];
	for (var r in e) (r != "constructor" || !t && za.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/keysIn.js
function Va(e) {
	return Fa(e) ? ka(e, !0) : Ba(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignIn.js
function Ha(e, t) {
	return e && Ii(t, Va(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneBuffer.js
var Ua = typeof exports == "object" && exports && !exports.nodeType && exports, Wa = Ua && typeof module == "object" && module && !module.nodeType && module, Ga = Wa && Wa.exports === Ua ? ar.Buffer : void 0, Ka = Ga ? Ga.allocUnsafe : void 0;
function qa(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Ka ? Ka(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/lodash-es/_copyArray.js
function Ja(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayFilter.js
function Ya(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/lodash-es/stubArray.js
function Xa() {
	return [];
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbols.js
var Za = Object.prototype.propertyIsEnumerable, Qa = Object.getOwnPropertySymbols, $a = Qa ? function(e) {
	return e == null ? [] : (e = Object(e), Ya(Qa(e), function(t) {
		return Za.call(e, t);
	}));
} : Xa;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbols.js
function eo(e, t) {
	return Ii(e, $a(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayPush.js
function to(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbolsIn.js
var no = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) to(t, $a(e)), e = yr(e);
	return t;
} : Xa;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbolsIn.js
function ro(e, t) {
	return Ii(e, no(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetAllKeys.js
function io(e, t, n) {
	var r = t(e);
	return Wi(e) ? r : to(r, n(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeys.js
function ao(e) {
	return io(e, Ia, $a);
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeysIn.js
function oo(e) {
	return io(e, Va, no);
}
//#endregion
//#region ../../node_modules/lodash-es/_DataView.js
var so = si(ar, "DataView"), co = si(ar, "Promise"), lo = si(ar, "Set"), uo = si(ar, "WeakMap"), fo = "[object Map]", po = "[object Object]", mo = "[object Promise]", ho = "[object Set]", go = "[object WeakMap]", _o = "[object DataView]", vo = Zr(so), yo = Zr(ci), bo = Zr(co), xo = Zr(lo), So = Zr(uo), Co = _r;
(so && Co(new so(/* @__PURE__ */ new ArrayBuffer(1))) != _o || ci && Co(new ci()) != fo || co && Co(co.resolve()) != mo || lo && Co(new lo()) != ho || uo && Co(new uo()) != go) && (Co = function(e) {
	var t = _r(e), n = t == po ? e.constructor : void 0, r = n ? Zr(n) : "";
	if (r) switch (r) {
		case vo: return _o;
		case yo: return fo;
		case bo: return mo;
		case xo: return ho;
		case So: return go;
	}
	return t;
});
var wo = Co, To = Object.prototype.hasOwnProperty;
function Eo(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && To.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/lodash-es/_Uint8Array.js
var Do = ar.Uint8Array;
//#endregion
//#region ../../node_modules/lodash-es/_cloneArrayBuffer.js
function Oo(e) {
	var t = new e.constructor(e.byteLength);
	return new Do(t).set(new Do(e)), t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneDataView.js
function ko(e, t) {
	var n = t ? Oo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneRegExp.js
var Ao = /\w*$/;
function jo(e) {
	var t = new e.constructor(e.source, Ao.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneSymbol.js
var Mo = or ? or.prototype : void 0, No = Mo ? Mo.valueOf : void 0;
function Po(e) {
	return No ? Object(No.call(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneTypedArray.js
function Fo(e, t) {
	var n = t ? Oo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/lodash-es/_initCloneByTag.js
var Io = "[object Boolean]", Lo = "[object Date]", Ro = "[object Map]", zo = "[object Number]", Bo = "[object RegExp]", Vo = "[object Set]", Ho = "[object String]", Uo = "[object Symbol]", Wo = "[object ArrayBuffer]", Go = "[object DataView]", Ko = "[object Float32Array]", qo = "[object Float64Array]", Jo = "[object Int8Array]", Yo = "[object Int16Array]", Xo = "[object Int32Array]", Zo = "[object Uint8Array]", Qo = "[object Uint8ClampedArray]", $o = "[object Uint16Array]", es = "[object Uint32Array]";
function ts(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Wo: return Oo(e);
		case Io:
		case Lo: return new r(+e);
		case Go: return ko(e, n);
		case Ko:
		case qo:
		case Jo:
		case Yo:
		case Xo:
		case Zo:
		case Qo:
		case $o:
		case es: return Fo(e, n);
		case Ro: return new r();
		case zo:
		case Ho: return new r(e);
		case Bo: return jo(e);
		case Vo: return new r();
		case Uo: return Po(e);
	}
}
//#endregion
//#region ../../node_modules/lodash-es/_baseCreate.js
var ns = Object.create, rs = function() {
	function e() {}
	return function(t) {
		if (!Vr(t)) return {};
		if (ns) return ns(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/lodash-es/_initCloneObject.js
function is(e) {
	return typeof e.constructor == "function" && !ja(e) ? rs(yr(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsMap.js
var as = "[object Map]";
function os(e) {
	return br(e) && wo(e) == as;
}
//#endregion
//#region ../../node_modules/lodash-es/isMap.js
var ss = os, cs = "[object Set]";
function ls(e) {
	return br(e) && wo(e) == cs;
}
//#endregion
//#region ../../node_modules/lodash-es/isSet.js
var us = ls, ds = 1, fs = 2, ps = 4, ms = "[object Arguments]", hs = "[object Array]", gs = "[object Boolean]", _s = "[object Date]", vs = "[object Error]", ys = "[object Function]", bs = "[object GeneratorFunction]", xs = "[object Map]", Ss = "[object Number]", Cs = "[object Object]", ws = "[object RegExp]", Ts = "[object Set]", Es = "[object String]", Ds = "[object Symbol]", Os = "[object WeakMap]", ks = "[object ArrayBuffer]", As = "[object DataView]", js = "[object Float32Array]", Ms = "[object Float64Array]", Ns = "[object Int8Array]", Ps = "[object Int16Array]", Fs = "[object Int32Array]", Is = "[object Uint8Array]", Ls = "[object Uint8ClampedArray]", Rs = "[object Uint16Array]", zs = "[object Uint32Array]", Bs = {};
Bs[ms] = Bs[hs] = Bs[ks] = Bs[As] = Bs[gs] = Bs[_s] = Bs[js] = Bs[Ms] = Bs[Ns] = Bs[Ps] = Bs[Fs] = Bs[xs] = Bs[Ss] = Bs[Cs] = Bs[ws] = Bs[Ts] = Bs[Es] = Bs[Ds] = Bs[Is] = Bs[Ls] = Bs[Rs] = Bs[zs] = !0, Bs[vs] = Bs[ys] = Bs[Os] = !1;
function Vs(e, t, n, r, i, a) {
	var o, s = t & ds, c = t & fs, l = t & ps;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Vr(e)) return e;
	var u = Wi(e);
	if (u) {
		if (o = Eo(e), !s) return Ja(e, o);
	} else {
		var d = wo(e), f = d == ys || d == bs;
		if (Yi(e)) return qa(e, s);
		if (d == Cs || d == ms || f && !i) {
			if (o = c || f ? {} : is(e), !s) return c ? ro(e, Ha(o, e)) : eo(e, La(o, e));
		} else {
			if (!Bs[d]) return i ? e : {};
			o = ts(e, d, s);
		}
	}
	a ||= new Ai();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), us(e) ? e.forEach(function(r) {
		o.add(Vs(r, t, n, r, e, a));
	}) : ss(e) && e.forEach(function(r, i) {
		o.set(i, Vs(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? oo : ao : c ? Va : Ia)(e);
	return ji(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fi(o, i, Vs(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/lodash-es/cloneDeep.js
var Hs = 1, Us = 4;
function Ws(e) {
	return Vs(e, Hs | Us);
}
//#endregion
//#region ../../node_modules/tiny-warning/dist/tiny-warning.esm.js
var Gs = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), Ks = process.env.NODE_ENV === "production";
function qs(e, t) {
	if (!Ks) {
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
var Js = 4;
function Ys(e) {
	return Vs(e, Js);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayMap.js
function Xs(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/lodash-es/isSymbol.js
var Zs = "[object Symbol]";
function Qs(e) {
	return typeof e == "symbol" || br(e) && _r(e) == Zs;
}
//#endregion
//#region ../../node_modules/lodash-es/memoize.js
var $s = "Expected a function";
function ec(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError($s);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (ec.Cache || Di)(), n;
}
ec.Cache = Di;
//#endregion
//#region ../../node_modules/lodash-es/_memoizeCapped.js
var tc = 500;
function nc(e) {
	var t = ec(e, function(e) {
		return n.size === tc && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_stringToPath.js
var rc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ic = /\\(\\)?/g, ac = nc(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(rc, function(e, n, r, i) {
		t.push(r ? i.replace(ic, "$1") : n || e);
	}), t;
}), oc = 1 / 0;
function sc(e) {
	if (typeof e == "string" || Qs(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -oc ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseToString.js
var cc = 1 / 0, lc = or ? or.prototype : void 0, uc = lc ? lc.toString : void 0;
function dc(e) {
	if (typeof e == "string") return e;
	if (Wi(e)) return Xs(e, dc) + "";
	if (Qs(e)) return uc ? uc.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -cc ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/toString.js
function fc(e) {
	return e == null ? "" : dc(e);
}
//#endregion
//#region ../../node_modules/lodash-es/toPath.js
function pc(e) {
	return Wi(e) ? Xs(e, sc) : Qs(e) ? [e] : Ja(ac(fc(e)));
}
//#endregion
//#region ../../node_modules/react-is/cjs/react-is.production.min.js
var mc = /* @__PURE__ */ t(((e) => {
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
})), hc = /* @__PURE__ */ t(((e) => {
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
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, ee = r, te = o, ne = a, j = f, M = !1;
		function re(e) {
			return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(e) || x(e) === l;
		}
		function N(e) {
			return x(e) === u;
		}
		function P(e) {
			return x(e) === c;
		}
		function F(e) {
			return x(e) === s;
		}
		function I(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function ie(e) {
			return x(e) === d;
		}
		function ae(e) {
			return x(e) === i;
		}
		function L(e) {
			return x(e) === h;
		}
		function R(e) {
			return x(e) === m;
		}
		function oe(e) {
			return x(e) === r;
		}
		function z(e) {
			return x(e) === o;
		}
		function se(e) {
			return x(e) === a;
		}
		function ce(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = ee, e.Profiler = te, e.StrictMode = ne, e.Suspense = j, e.isAsyncMode = re, e.isConcurrentMode = N, e.isContextConsumer = P, e.isContextProvider = F, e.isElement = I, e.isForwardRef = ie, e.isFragment = ae, e.isLazy = L, e.isMemo = R, e.isPortal = oe, e.isProfiler = z, e.isStrictMode = se, e.isSuspense = ce, e.isValidElementType = b, e.typeOf = x;
	})();
})), gc = /* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? mc() : hc();
}));
(/* @__PURE__ */ t(((e, t) => {
	var n = gc(), r = {
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
function _c() {
	return _c = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _c.apply(this, arguments);
}
function vc(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function yc(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function bc(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var xc = /*#__PURE__*/ rn(void 0);
xc.displayName = "FormikContext";
var Sc = xc.Provider;
xc.Consumer;
function Cc() {
	var e = q(xc);
	return !e && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.")), e;
}
var wc = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Tc = function(e) {
	return typeof e == "function";
}, Ec = function(e) {
	return typeof e == "object" && !!e;
}, Dc = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Oc = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, kc = function(e) {
	return $t.count(e) === 0;
}, Ac = function(e) {
	return Ec(e) && Tc(e.then);
};
function jc(e) {
	if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Mc(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = pc(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Nc(e, t, n) {
	for (var r = Ys(e), i = r, a = 0, o = pc(t); a < o.length - 1; a++) {
		var s = o[a], c = Mc(e, o.slice(0, a + 1));
		if (c && (Ec(c) || Array.isArray(c))) i = i[s] = Ys(c);
		else {
			var l = o[a + 1];
			i = i[s] = Dc(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Pc(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Ec(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Pc(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Fc(e, t) {
	switch (t.type) {
		case "SET_VALUES": return _c({}, e, { values: t.payload });
		case "SET_TOUCHED": return _c({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Gs.default)(e.errors, t.payload) ? e : _c({}, e, { errors: t.payload });
		case "SET_STATUS": return _c({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return _c({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return _c({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return _c({}, e, { values: Nc(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return _c({}, e, { touched: Nc(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return _c({}, e, { errors: Nc(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return _c({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return _c({}, e, {
			touched: Pc(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return _c({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return _c({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Ic = {}, Lc = {};
function Rc(e) {
	var t = e.validateOnChange, n = t === void 0 || t, r = e.validateOnBlur, i = r === void 0 || r, a = e.validateOnMount, o = a !== void 0 && a, s = e.isInitialValid, c = e.enableReinitialize, l = c !== void 0 && c, u = e.onSubmit, d = yc(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = _c({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = X(f.initialValues), m = X(f.initialErrors || Ic), h = X(f.initialTouched || Lc), g = X(f.initialStatus), _ = X(!1), v = X({});
	process.env.NODE_ENV !== "production" && J(function() {
		s !== void 0 && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead."));
	}, []), J(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = Z(0)[1], b = X({
		values: Ws(f.initialValues),
		errors: Ws(f.initialErrors) || Ic,
		touched: Ws(f.initialTouched) || Lc,
		status: Ws(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = K(function(e) {
		var t = b.current;
		b.current = Fc(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = K(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Ic) : Ac(i) ? i.then(function(e) {
				n(e || Ic);
			}, function(e) {
				process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", e), r(e);
			}) : n(i);
		});
	}, [f.validate]), w = K(function(e, t) {
		var n = f.validationSchema, r = Tc(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Hc(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Ic);
			}, function(n) {
				n.name === "ValidationError" ? e(Vc(n)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", n), t(n));
			});
		});
	}, [f.validationSchema]), T = K(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = K(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Tc(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, Mc(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Nc(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = K(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return nr.all([
				t,
				n,
				r
			], { arrayMerge: Wc });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = Jc(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), D(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	J(function() {
		o && _.current === !0 && (0, Gs.default)(p.current, f.initialValues) && O(p.current);
	}, [o, O]);
	var k = K(function(e) {
		var t = e && e.values ? e.values : p.current, n = e && e.errors ? e.errors : m.current ? m.current : f.initialErrors || {}, r = e && e.touched ? e.touched : h.current ? h.current : f.initialTouched || {}, i = e && e.status ? e.status : g.current ? g.current : f.initialStatus;
		p.current = t, m.current = n, h.current = r, g.current = i;
		var a = function() {
			S({
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
			var o = f.onReset(x.values, ce);
			Ac(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	J(function() {
		_.current === !0 && !(0, Gs.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), J(function() {
		l && _.current === !0 && !(0, Gs.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Ic, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Ic
		}));
	}, [l, f.initialErrors]), J(function() {
		l && _.current === !0 && !(0, Gs.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Lc, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Lc
		}));
	}, [l, f.initialTouched]), J(function() {
		l && _.current === !0 && !(0, Gs.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var A = Jc(function(e) {
		if (v.current[e] && Tc(v.current[e].validate)) {
			var t = Mc(x.values, e), n = v.current[e].validate(t);
			return Ac(n) ? (S({
				type: "SET_ISVALIDATING",
				payload: !0
			}), n.then(function(e) {
				return e;
			}).then(function(t) {
				S({
					type: "SET_FIELD_ERROR",
					payload: {
						field: e,
						value: t
					}
				}), S({
					type: "SET_ISVALIDATING",
					payload: !1
				});
			})) : (S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: n
				}
			}), Promise.resolve(n));
		}
		return f.validationSchema ? (S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), w(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Mc(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		})) : Promise.resolve();
	}), ee = K(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), te = K(function(e) {
		delete v.current[e];
	}, []), ne = Jc(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), j = K(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), M = Jc(function(e, t) {
		var r = Tc(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? O(r) : Promise.resolve();
	}), re = K(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), N = Jc(function(e, t, r) {
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: t
			}
		}), (r === void 0 ? n : r) ? O(Nc(x.values, e, t)) : Promise.resolve();
	}), P = K(function(e, t) {
		var n = t, r = e, i;
		if (!Oc(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked, d = a.outerHTML, f = a.options, p = a.multiple;
			n = t || s || c, !n && process.env.NODE_ENV !== "production" && Bc({
				htmlContent: d,
				documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
				handlerName: "handleChange"
			}), r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Kc(Mc(x.values, n), u, l) : f && p ? Gc(f) : l;
		}
		n && N(n, r);
	}, [N, x.values]), F = Jc(function(e) {
		if (Oc(e)) return function(t) {
			return P(t, e);
		};
		P(e);
	}), I = Jc(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? O(x.values) : Promise.resolve();
	}), ie = K(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id, a = n.outerHTML, o = t || r || i;
		!o && process.env.NODE_ENV !== "production" && Bc({
			htmlContent: a,
			documentationAnchorLink: "handleblur-e-any--void",
			handlerName: "handleBlur"
		}), I(o, !0);
	}, [I]), ae = Jc(function(e) {
		if (Oc(e)) return function(t) {
			return ie(t, e);
		};
		ie(e);
	}), L = K(function(e) {
		Tc(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), R = K(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), oe = K(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), z = Jc(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), O().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = le(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return _.current && S({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (_.current) throw S({ type: "SUBMIT_FAILURE" }), e;
				});
			}
			if (_.current && (S({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), se = Jc(function(e) {
		if (e && e.preventDefault && Tc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Tc(e.stopPropagation) && e.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
			var t = jc();
			t !== null && t instanceof HTMLButtonElement && !(t.attributes && t.attributes.getNamedItem("type")) && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type=\"submit\"`. If this is not a submit button, please add `type=\"button\"`."));
		}
		z().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ce = {
		resetForm: k,
		validateForm: O,
		validateField: A,
		setErrors: j,
		setFieldError: re,
		setFieldTouched: I,
		setFieldValue: N,
		setStatus: R,
		setSubmitting: oe,
		setTouched: ne,
		setValues: M,
		setFormikState: L,
		submitForm: z
	}, le = Jc(function() {
		return u(x.values, ce);
	}), ue = Jc(function(e) {
		e && e.preventDefault && Tc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Tc(e.stopPropagation) && e.stopPropagation(), k();
	}), de = K(function(e) {
		return {
			value: Mc(x.values, e),
			error: Mc(x.errors, e),
			touched: !!Mc(x.touched, e),
			initialValue: Mc(p.current, e),
			initialTouched: !!Mc(h.current, e),
			initialError: Mc(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), fe = K(function(e) {
		return {
			setValue: function(t, n) {
				return N(e, t, n);
			},
			setTouched: function(t, n) {
				return I(e, t, n);
			},
			setError: function(t) {
				return re(e, t);
			}
		};
	}, [
		N,
		I,
		re
	]), pe = K(function(e) {
		var t = Ec(e), n = t ? e.name : e, r = Mc(x.values, n), i = {
			name: n,
			value: r,
			onChange: F,
			onBlur: ae
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		ae,
		F,
		x.values
	]), me = Y(function() {
		return !(0, Gs.default)(p.current, x.values);
	}, [p.current, x.values]), he = Y(function() {
		return s === void 0 || me ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Tc(s) ? s(f) : s;
	}, [
		s,
		me,
		x.errors,
		f
	]);
	return _c({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: ae,
		handleChange: F,
		handleReset: ue,
		handleSubmit: se,
		resetForm: k,
		setErrors: j,
		setFormikState: L,
		setFieldTouched: I,
		setFieldValue: N,
		setFieldError: re,
		setStatus: R,
		setSubmitting: oe,
		setTouched: ne,
		setValues: M,
		submitForm: z,
		validateForm: O,
		validateField: A,
		isValid: he,
		dirty: me,
		unregisterField: te,
		registerField: ee,
		getFieldProps: pe,
		getFieldMeta: de,
		getFieldHelpers: fe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function zc(e) {
	var t = Rc(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return un(a, function() {
		return t;
	}), process.env.NODE_ENV !== "production" && J(function() {
		e.render && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>"));
	}, []), an(Sc, { value: t }, n ? an(n, t) : i ? i(t) : r ? Tc(r) ? r(t) : kc(r) ? null : $t.only(r) : null);
}
function Bc(e) {
	var t = e.htmlContent, n = e.documentationAnchorLink, r = e.handlerName;
	console.warn("Warning: Formik called `" + r + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + n + "\n  ");
}
function Vc(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Nc(t, e.path, e.message);
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
			Mc(t, o.path) || (t = Nc(t, o.path, o.message));
		}
	}
	return t;
}
function Hc(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Uc(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Uc(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		t[r] = Array.isArray(e[r]) === !0 ? e[r].map(function(e) {
			return Array.isArray(e) === !0 || Dr(e) ? Uc(e) : e === "" ? void 0 : e;
		}) : Dr(e[r]) ? Uc(e[r]) : e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Wc(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? nr(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = nr(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Gc(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Kc(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var qc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? dn : J;
function Jc(e) {
	var t = X(e);
	return qc(function() {
		t.current = e;
	}), K(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function Yc(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = yc(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = yc(Cc(), ["validate", "validationSchema"]);
	process.env.NODE_ENV !== "production" && J(function() {
		r && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + n + "\" render={({field, form}) => ...} /> with <Field name=\"" + n + "\">{({field, form, meta}) => ...}</Field>")), a && i && Tc(i) && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.")), o && i && Tc(i) && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.")), r && i && !kc(i) && (process.env.NODE_ENV === "production" ? qs(!1) : qs(!1, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored"));
	}, []);
	var u = l.registerField, d = l.unregisterField;
	J(function() {
		return u(n, { validate: t }), function() {
			d(n);
		};
	}, [
		u,
		d,
		n,
		t
	]);
	var f = l.getFieldProps(_c({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r(_c({}, m, { meta: p }));
	if (Tc(i)) return i(_c({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = yc(c, ["innerRef"]);
			return an(o, _c({ ref: h }, f, g, { className: s }), i);
		}
		return an(o, _c({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = yc(c, ["innerRef"]);
		return an(_, _c({ ref: v }, f, y, { className: s }), i);
	}
	return an(_, _c({}, f, c, { className: s }), i);
}
var Xc = /*#__PURE__*/ on(function(e, t) {
	var n = e.action, r = yc(e, ["action"]), i = n ?? "#", a = Cc(), o = a.handleReset, s = a.handleSubmit;
	return an("form", _c({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Xc.displayName = "Form";
var Zc = function(e, t, n) {
	var r = tl(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Qc = function(e, t, n) {
	var r = tl(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, $c = function(e, t, n) {
	var r = tl(e);
	return r.splice(t, 0, n), r;
}, el = function(e, t, n) {
	var r = tl(e);
	return r[t] = n, r;
}, tl = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(_c({}, e, { length: t + 1 }));
}, nl = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Ec(e) ? n(tl(e)) : e;
	};
}, rl = /*#__PURE__*/ function(e) {
	vc(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = nl(r, e), o = nl(t, e), s = Nc(n.values, a, e(Mc(n.values, a))), c = r ? i(Mc(n.errors, a)) : void 0, l = t ? o(Mc(n.touched, a)) : void 0;
				return wc(c) && (c = void 0), wc(l) && (l = void 0), _c({}, n, {
					values: s,
					errors: r ? Nc(n.errors, a, c) : n.errors,
					touched: t ? Nc(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(tl(t), [Ws(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Qc(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Zc(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return $c(n, e, t);
			}, function(t) {
				return $c(t, e, null);
			}, function(t) {
				return $c(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return el(n, e, t);
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
		}, n.remove = n.remove.bind(bc(n)), n.pop = n.pop.bind(bc(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Gs.default)(Mc(e.formik.values, e.name), Mc(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? tl(n) : [];
			return t ||= r[e], Tc(r.splice) && r.splice(e, 1), Tc(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = yc(o, ["validate", "validationSchema"]), c = _c({}, e, {
			form: s,
			name: a
		});
		return n ? an(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : kc(i) ? null : $t.only(i) : null;
	}, t;
}(en);
rl.defaultProps = { validateOnChange: !0 };
//#endregion
//#region ../ui/src/lib/layout/stickyBoundary.ts
var il = /* @__PURE__ */ new Set([
	"auto",
	"overlay",
	"scroll"
]), al = (e) => il.has(e.overflowY) || il.has(e.overflow), ol = (e) => {
	let t = e.parentElement;
	for (; t;) {
		if (al(window.getComputedStyle(t))) return t;
		t = t.parentElement;
	}
	return null;
}, sl = (e) => ({
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
})[e], cl = (e) => e?.orientation === "top", ll = "mb-2.5 flex flex-col gap-2", ul = "mt-3 flex flex-col gap-2", dl = [
	"[&_p]:!text-sm",
	"[&_p]:!leading-snug",
	"[&_li]:!text-sm",
	"[&_li]:!leading-snug"
].join(" ");
function fl({ notification: e, resolvedContent: t, role: n, translateKeys: r, tone: i = "status" }) {
	let a = nt(), o = d(t ?? r(e.keys ?? e.key));
	if (!o) return null;
	let s = i === "status" ? sl(e.type) : void 0;
	return /* @__PURE__ */ Q("div", {
		...a.attrs("payment-notification-section", { slug: e.type }),
		role: n,
		children: /* @__PURE__ */ Q(Ot, {
			content: t ?? Gt({ value: o }, e.params).value,
			variant: s,
			inheritTheme: s === void 0,
			size: "sm",
			markdownClassName: dl
		})
	});
}
//#endregion
//#region src/utils/entranceAnimation.ts
var pl = "pc-enter-rise", ml = "pc-enter-rise-item", hl = "pc-enter-sweep", gl = "pc-enter-sweep-item", _l = 70, vl = 45, yl = 100, bl = 360, xl = 3, Sl = 36, Cl = 12, wl = 80, Tl = (e) => Number.isFinite(e) ? Math.max(0, e) : 0, El = (e, t) => t <= 1 ? 0 : e / (t - 1), Dl = (e, t) => {
	switch (t) {
		case "linear": return e;
		case "ease-out": return 1 - (1 - e) ** 1.35;
		default: return e;
	}
}, Ol = ({ index: e, total: t, direction: n = "forward", baseDelayMs: r = _l, staggerMs: i = vl, maxAdditionalDelayMs: a, distribution: o = "step" }) => {
	let s = Math.trunc(Tl(e)), c = Math.max(s + 1, Math.trunc(Tl(t ?? s + 1))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = (() => {
		if (a !== void 0) {
			let e = Dl(El(l, c), o);
			return Math.round(r + e * a);
		}
		return Math.round(r + l * i);
	})();
	return { animationDelay: `${String(u)}ms` };
}, kl = (e, t, n = "forward", { baseDelayMs: r = yl, maxAdditionalDelayMs: i = bl, distribution: a = "linear", staggerMode: o = "distributed" } = {}) => {
	if (o === "distributed") return Ol({
		index: e,
		total: t,
		direction: n,
		baseDelayMs: r,
		maxAdditionalDelayMs: i,
		distribution: a
	});
	let s = Math.trunc(Tl(e)), c = Math.max(s + 1, Math.trunc(Tl(t))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = Math.min(c, xl), d = Math.max(0, (u - 1) * Sl), f = Math.min(Tl(i), d), p = u > 1 ? f / (u - 1) : 0, m = (() => {
		if (l < u) return Math.round(r + l * p);
		let e = Math.max(Tl(i) - f, 0);
		if (e <= 0 || c - u <= 0) return Math.round(r + f);
		let t = Math.min(Cl, e);
		return Math.round(r + f + t);
	})();
	return { animationDelay: `${String(m)}ms` };
}, Al = ({ baseDelayMs: e = yl } = {}) => ({ animationDelay: `${String(Math.max(0, Math.round(e - wl)))}ms` }), jl = [
	"w-full",
	"border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]",
	"last:border-b-0"
].join(" "), Ml = [
	"flex w-full items-baseline justify-between gap-x-2",
	"text-[var(--pc-color-payment-summary-row-text,var(--pc-color-payment-summary-text,var(--pc-color-text)))]",
	"text-xs @xs:text-sm @md:text-base"
].join(" "), Nl = ["font-normal", "text-[var(--pc-color-payment-summary-label-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text)))]"].join(" "), Pl = [
	"min-w-0 break-words",
	"text-[var(--pc-color-payment-summary-value-text,var(--pc-color-text-muted))]",
	"text-right"
].join(" ");
function Fl({ summaryFields: e, amountDisplay: t, variant: n = "neutral", rowVariants: r, className: i, children: a, panelBorderEdges: o = "all", surfaceChrome: s = "panel", animationDirection: c, animationStyleOptions: l, animateEntrance: u = !1, merchantElements: d = !1, onlyMerchantElements: f = !1, presentationSlot: p = !1 }) {
	let m = q(ae), { hasPendingInitialSurface: h } = ve(), g = d && m.hasContent && !h, _ = nt(), { resolveTextKey: v } = st(), { formatSummaryValue: y } = Je(), b = n === null, x = n === null ? void 0 : Ke(n), S = $t.count(a) > 0 || g || !!m.selectedOffer, C = e.length > 0, w = It(e, v, y).map((e) => e.id === "amount" && t !== void 0 ? {
		...e,
		value: t
	} : e), T = c ?? (S ? "forward" : "reverse"), E = +!!S + (S && C ? 1 : 0) + e.length, D = +!!S, k = +!!S + (S && C ? 1 : 0), A = {
		staggerMode: "compressed-tail",
		...l
	}, ee = tt("w-full", s === "panel" && o === "without-top" && "border-t-0", u && "pc-enter-panel", i), te = _.attrs("payment-summary"), ne = _.attrs("payment-summary-children", { part: "children" }), j = _.attrs("payment-summary-divider", { part: "divider" }), M = C ? /* @__PURE__ */ $("div", {
		className: "flex w-full flex-col",
		children: [S && /* @__PURE__ */ Q("div", {
			"data-pc-slot": j["data-pc-slot"],
			"data-pc-part": j["data-pc-part"],
			"data-payment-summary-divider": "true",
			className: H(j.className, "border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]", u && "pc-enter-panel-item"),
			style: u ? kl(D, E, T, A) : void 0
		}), w.map(({ id: t, label: n, value: i }, a) => {
			let o = n.value, s = t === "amount" && m.orderPricing && Ct(e[a].value, m.orderPricing.current) ? m.orderPricing : void 0, c = a === 0, l = a === e.length - 1, d = r?.[t], f = d ? Ke(d) : void 0, p = _.attrs("payment-summary-row", { slug: t }), h = _.attrs("payment-summary-row-content", { slug: t }), g = _.attrs("payment-summary-label", { slug: t }), v = _.attrs("payment-summary-value", { slug: t });
			return /* @__PURE__ */ Q("div", {
				"data-pc-slot": p["data-pc-slot"],
				"data-pc-slug": p["data-pc-slug"],
				"data-payment-summary-row": t,
				className: H(p.className, jl, u && "pc-enter-panel-item", !S && c ? "pt-0" : "pt-1.5", l ? "pb-0" : "pb-1.5"),
				style: u ? kl(k + a, E, T, A) : void 0,
				children: /* @__PURE__ */ Q("div", {
					"data-pc-slot": h["data-pc-slot"],
					"data-pc-slug": h["data-pc-slug"],
					"data-payment-summary-row-content": t,
					"data-theme": f,
					className: H(h.className, Ml),
					children: /* @__PURE__ */ Q(Mt, {
						compact: !0,
						baseline: !0,
						wrapTrailing: "narrow",
						trailing: /* @__PURE__ */ Q("span", {
							"data-pc-slot": v["data-pc-slot"],
							"data-pc-slug": v["data-pc-slug"],
							className: H(v.className, Pl),
							children: s ? /* @__PURE__ */ Q(Ue, {
								price: s,
								showAdvertisedDiscount: !1
							}) : i
						}),
						children: /* @__PURE__ */ Q("span", {
							"data-pc-slot": g["data-pc-slot"],
							"data-pc-slug": g["data-pc-slug"],
							className: H(g.className, Nl),
							children: o
						})
					})
				})
			}, `${t}:${String(a)}`);
		})]
	}) : null;
	return f && !g ? null : /* @__PURE__ */ Q(Et, {
		as: "div",
		size: "lg",
		"data-pc-slot": te["data-pc-slot"],
		dataTheme: x,
		inheritTheme: b,
		chrome: s === "panel",
		spacing: s === "plain" ? "flush" : void 0,
		className: H(te.className, ee),
		style: u ? Al(A) : void 0,
		children: /* @__PURE__ */ $("div", {
			className: "flex w-full flex-col gap-0",
			children: [S && /* @__PURE__ */ $("div", {
				"data-pc-slot": ne["data-pc-slot"],
				"data-pc-part": ne["data-pc-part"],
				"data-payment-summary-children": "true",
				className: H(ne.className, u && "pc-enter-panel-item"),
				style: u ? kl(0, E, T, A) : void 0,
				children: [
					a,
					m.selectedOffer && /* @__PURE__ */ Q("div", {
						className: "py-2.5",
						"data-pc-selected-offer": m.selectedOffer.id,
						children: /* @__PURE__ */ Q(Lt, {
							title: m.selectedOffer.title.value,
							description: m.selectedOffer.description.value,
							wrap: !0
						})
					}),
					g && m.content
				]
			}), p ? /* @__PURE__ */ Q(O, {
				id: "summaryDetails",
				model: { fields: w },
				actions: De,
				children: M
			}) : M]
		})
	});
}
//#endregion
//#region src/components/NavigationShellRail.tsx
var Il = "sticky left-0 right-0 top-0 z-20 flex-shrink-0 w-full", Ll = "relative z-20 w-full", Rl = "sticky bottom-0 z-40 h-0 overflow-visible", zl = "-translate-y-full transform-gpu will-change-transform", Bl = (e) => e === "top" ? "grid gap-3 justify-center @lg:justify-start" : "grid gap-3", Vl = (e) => e === "top" ? "" : "pb-4", Hl = (e) => te, Ul = (e, t) => ({ gridTemplateColumns: "repeat(" + t.toString() + ", minmax(0, 1fr))" }), Wl = (e) => "flex w-full justify-center";
function Gl({ placement: e, items: t, showFade: n = !0, reserveSpace: r = !0 }) {
	let i = nt(), a = t.length, o = Xe(), s = Ul(e, a), c = Wl(e), l = Bl(e), u = e === "top" ? Il : Ll, d = Vl(e), f = Hl(e), p = i.attrs("navigation-rail-wrapper"), m = i.attrs("navigation-rail-inner");
	if (a === 0) return null;
	let h = i.attrs(`navigation-rail-grid-${e}`), g = /* @__PURE__ */ Q("div", {
		id: i.id(`navigation-rail-grid-${e}`),
		...h,
		className: H(h.className, l),
		style: s,
		children: t.map((t, n) => {
			let r = `navigation-shell-item-${e}-${n.toString()}`, a = o(r, "action"), s = i.attrs("navigation-item", { slug: a });
			return /* @__PURE__ */ Q("div", {
				id: i.id("navigation-item", { slug: a }),
				...s,
				className: H(s.className, c),
				children: t
			}, r);
		})
	});
	if (e === "bottom") {
		let t = i.attrs(`navigation-rail-${e}`), a = r === "compact", o = a || r === !0;
		return /* @__PURE__ */ $("div", {
			id: i.id(`navigation-rail-${e}`),
			...t,
			className: H(t.className, u),
			children: [o && /* @__PURE__ */ Q("div", {
				"aria-hidden": "true",
				inert: !0,
				"data-slot": "navigation-rail-bottom-spacer",
				"data-reserve-space": a ? "compact" : "full",
				className: "invisible pointer-events-none w-full",
				children: /* @__PURE__ */ Q("div", {
					...p,
					className: H(p.className, d),
					children: /* @__PURE__ */ Q("div", {
						...m,
						className: H(m.className, f),
						children: g
					})
				})
			}), /* @__PURE__ */ Q("div", {
				className: Rl,
				children: /* @__PURE__ */ $("div", {
					"data-slot": "navigation-rail-bottom-surface",
					"data-pc-scroll-obstruction": "bottom",
					className: H("pointer-events-none relative w-full bg-[var(--pc-color-surface)]", zl),
					children: [n && /* @__PURE__ */ Q("div", {
						"aria-hidden": "true",
						"data-slot": "navigation-rail-bottom-fade",
						"data-pc-scroll-obstruction": "bottom",
						style: pe,
						className: "pointer-events-none absolute inset-x-0 bottom-full"
					}), /* @__PURE__ */ Q("div", {
						className: "pointer-events-auto",
						children: /* @__PURE__ */ Q("div", {
							...p,
							className: H(p.className, d),
							children: /* @__PURE__ */ Q("div", {
								...m,
								className: H(m.className, f),
								children: g
							})
						})
					})]
				})
			})]
		});
	}
	let _ = i.attrs(`navigation-rail-${e}`);
	return /* @__PURE__ */ Q("div", {
		id: i.id(`navigation-rail-${e}`),
		..._,
		"data-pc-scroll-obstruction": "top",
		className: H(_.className, u),
		children: /* @__PURE__ */ Q("div", {
			...p,
			className: H(p.className, d),
			children: /* @__PURE__ */ Q("div", {
				...m,
				className: H(m.className, f),
				children: g
			})
		})
	});
}
//#endregion
//#region src/context/navigationShell.tsx
var Kl = () => ({
	top: {},
	bottom: {}
}), ql = "default", Jl = (e) => !!e, Yl = (e) => Object.values(e).filter(Jl), Xl = (e) => Yl(e).sort((e, t) => e.order - t.order).flatMap((e) => e.items), Zl = (e) => {
	let t = Yl(e);
	return t.length === 0 || t.some((e) => e.reserveSpace === !0) ? !0 : t.some((e) => e.reserveSpace === "compact") ? "compact" : !1;
}, Ql = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), $l = (e, t) => Object.hasOwn(e, t) ? Object.fromEntries(Object.entries(e).filter(([e]) => e !== t)) : null, eu = rn(void 0), tu = rn(void 0), nu = rn(void 0);
function ru({ children: e, beforeTopRail: t, themeStyles: n }) {
	let [r, i] = Z(() => Kl()), a = X(0), [o, s] = Z(null), [c, l] = Z(null), [u, d] = Z(null), [f, p] = Z(0), [m, h] = Z(!1), g = K((e) => {
		s(e);
	}, []), _ = K((e) => {
		d(e), e || p(0);
	}, []), v = Y(() => ({
		top: Xl(r.top),
		bottom: Xl(r.bottom)
	}), [r]), y = Y(() => ({
		top: Zl(r.top),
		bottom: Zl(r.bottom)
	}), [r]), b = K((e, t, n) => {
		let r = n?.reserveSpace ?? !0, o = n?.source ?? ql;
		i((n) => {
			let i = n[e], s = i[o];
			if (t.length === 0) {
				let t = $l(i, o);
				return t ? {
					...n,
					[e]: t
				} : n;
			}
			return s && Ql(s.items, t) && s.reserveSpace === r ? n : {
				...n,
				[e]: {
					...i,
					[o]: {
						items: t,
						reserveSpace: r,
						order: s?.order ?? a.current++
					}
				}
			};
		});
	}, []), x = K((e, t) => {
		e ? i((n) => {
			if (t?.source) {
				let r = $l(n[e], t.source);
				return r ? {
					...n,
					[e]: r
				} : n;
			}
			return Object.keys(n[e]).length === 0 ? n : {
				...n,
				[e]: {}
			};
		}) : (i(Kl()), s(null));
	}, []), S = Y(() => ({
		items: v,
		setItems: b,
		clearItems: x,
		registerOverlay: g,
		shellNode: c,
		contentNode: u,
		contentInset: f,
		setContentInset: p,
		setBottomRailFadeSuppressed: h
	}), [
		v,
		x,
		u,
		f,
		g,
		c,
		b
	]), C = Y(() => ({
		setItems: b,
		clearItems: x
	}), [x, b]);
	return /* @__PURE__ */ Q(tu.Provider, {
		value: C,
		children: /* @__PURE__ */ Q(nu.Provider, {
			value: u,
			children: /* @__PURE__ */ Q(eu.Provider, {
				value: S,
				children: /* @__PURE__ */ Q(cu, {
					itemsByPlacement: v,
					reserveSpaceByPlacement: y,
					overlay: o,
					onShellNodeChange: l,
					onContentNodeChange: _,
					contentInset: f,
					bottomRailFadeSuppressed: m,
					beforeTopRail: t,
					themeStyles: n,
					children: e
				})
			})
		})
	});
}
function iu() {
	let e = q(eu);
	if (!e) throw Error("useNavigationShell must be used within a NavigationShellProvider");
	return e;
}
function au() {
	let e = q(tu);
	if (!e) throw Error("useNavigationItems must be used within a NavigationShellProvider");
	return e;
}
function ou() {
	let e = q(nu);
	if (e === void 0) throw Error("useNavigationShellContentNode must be used within a NavigationShellProvider");
	return e;
}
function su(e, t, n = !0, r) {
	let { setItems: i, clearItems: a } = au(), o = ln(), s = r?.source ?? o, c = r?.reserveSpace ?? !0;
	dn(() => {
		n ? t.length === 0 ? a(e, { source: s }) : i(e, t, {
			reserveSpace: c,
			source: s
		}) : a(e, { source: s });
	}, [
		a,
		n,
		t,
		e,
		c,
		i,
		s
	]), dn(() => () => {
		a(e, { source: s });
	}, [
		a,
		e,
		s
	]);
}
function cu({ itemsByPlacement: e, reserveSpaceByPlacement: t, overlay: n, onShellNodeChange: r, onContentNodeChange: i, contentInset: a, bottomRailFadeSuppressed: o, beforeTopRail: s, themeStyles: c, children: l }) {
	let u = nt(), d = 16 + Math.max(a, 0), f = a > 0 && !o ? { paddingBottom: a } : void 0, p = e.bottom.length > 0 && !o, m = u.attrs("navigation-shell"), h = u.attrs("navigation-main"), g = u.attrs("navigation-content"), _ = u.attrs("navigation-overlay"), v = u.attrs("navigation-overlay-content");
	return /* @__PURE__ */ $("div", {
		ref: r,
		id: u.id("navigation-shell"),
		...m,
		"data-pc-bottom-rail-fade": p ? "true" : void 0,
		className: H(m.className, "relative flex h-full min-h-0 w-full flex-col overflow-hidden"),
		style: c,
		children: [
			s,
			/* @__PURE__ */ Q(Gl, {
				placement: "top",
				items: e.top
			}),
			/* @__PURE__ */ $("div", {
				id: u.id("navigation-main"),
				...h,
				className: H(h.className, "relative flex min-h-0 flex-1 flex-col"),
				children: [/* @__PURE__ */ Q("div", {
					ref: i,
					id: u.id("navigation-content"),
					...g,
					className: H(g.className, "relative flex min-h-0 flex-1 flex-col overflow-hidden"),
					style: f,
					children: l
				}), n && /* @__PURE__ */ Q("div", {
					id: u.id("navigation-overlay"),
					..._,
					className: H(_.className, "pointer-events-none absolute inset-0 z-60"),
					children: /* @__PURE__ */ Q("div", {
						...v,
						className: H(v.className, "pointer-events-auto absolute right-4"),
						style: { bottom: d },
						children: n
					})
				})]
			}),
			/* @__PURE__ */ Q(Gl, {
				placement: "bottom",
				items: e.bottom,
				showFade: !o,
				reserveSpace: t.bottom
			})
		]
	});
}
var lu = {
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
}, uu = JSON.stringify({
	sessionId: "session_example",
	amount: "91038501",
	accountId: "",
	input: {
		holderName: "X'Æon-Júliën Þørnßon-Smith Jr.",
		expiryDate: "0825",
		transactionToken: "12a2ab5daf8ab37b0d6724b23ff8765f"
	},
	userId: "kalle_kula"
}), du = rn(void 0), fu = () => void 0, pu = {
	overridePayload: "",
	setOverridePayload: fu,
	resetOverridePayload: fu,
	isLocked: !1,
	setLocked: fu
}, mu = (() => {
	let e = !1;
	return () => {
		process.env.NODE_ENV !== "production" && (e ||= (console.warn("useOverridePayload was accessed outside an OverridePayloadProvider. Falling back to a no-op implementation."), !0));
	};
})();
function hu({ children: e }) {
	let [t, n] = Z(""), [r, i] = Z(!1), a = K(() => {
		n("");
	}, []), o = K((e) => {
		i(e);
	}, []), s = Y(() => ({
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
	return /* @__PURE__ */ Q(du.Provider, {
		value: s,
		children: e
	});
}
function gu() {
	return q(du) || (mu(), pu);
}
//#endregion
//#region src/context/paymentFormReset.tsx
var _u = rn(void 0);
function vu({ children: e }) {
	let t = X(null), n = X(!1), [r, i] = Z(!1), a = K((e) => {
		let r = !!e;
		(t.current !== e || n.current !== r) && (t.current = e, n.current !== r && (n.current = r, i(r)));
	}, []), o = K(() => {
		t.current?.();
	}, []), s = Y(() => ({
		reset: o,
		registerReset: a,
		hasResetHandler: r
	}), [
		r,
		a,
		o
	]);
	return /* @__PURE__ */ Q(_u.Provider, {
		value: s,
		children: e
	});
}
function yu() {
	let e = q(_u);
	if (!e) throw Error("usePaymentFormReset must be used within a PaymentFormResetProvider");
	return e;
}
//#endregion
//#region src/context/theme.tsx
var bu = rn({ portalContainer: null }), xu = bu.Provider, Su = () => q(bu), Cu = (e) => e?.parentElement?.parentElement ?? e?.parentElement ?? e ?? void 0, wu = () => {
	let { portalContainer: e } = Su();
	return Cu(e);
}, Tu = "bottom", Eu = "cta.close";
function Du({ isOpen: e, onClose: t, side: n = Tu, title: r, children: i, portalContainer: a, closeButtonLabel: o, overlayClassName: s, contentClassName: c, variant: l, contentRef: u }) {
	let { translateKey: d } = st(), f = wu(), p = a ?? f, m = o ?? d(Eu);
	return /* @__PURE__ */ Q(Jt, {
		isOpen: e,
		onClose: t,
		side: n,
		title: r,
		closeButtonLabel: m,
		portalContainer: p,
		overlayClassName: s,
		contentClassName: c,
		variant: l,
		contentRef: u,
		children: i
	});
}
//#endregion
//#region src/context/summaryState.tsx
var Ou = Object.freeze({
	getAccess: () => null,
	setAccess: () => void 0,
	clearAccess: () => void 0,
	getProgress: () => null,
	setProgress: () => void 0,
	clearProgress: () => void 0,
	hasProviderStep: () => !1
}), ku = rn(Ou);
function Au({ children: e, state: t }) {
	return /* @__PURE__ */ Q(ku.Provider, {
		value: t,
		children: e
	});
}
var ju = () => q(ku), Mu = () => {
	let e = ke(), t = T(), n = j(), r = ju(), i = Yt(), { clearPaymentState: a, payment: o, status: s } = rt(), { merchantId: c, method: l, userId: u, sessionId: d, currency: f, fetchConfig: p, extraAttributes: m, selectedBonusCode: h, setCashierState: g } = q(Ht);
	return K((_) => {
		let v = _?.paymentId ?? void 0, y = _?.merchantId ?? void 0, b = _?.replace ?? !1, x = _?.reachedSummaryViaProvider ?? !1, S = o, C = _?.userFlowDoneUrl ?? (S?.paymentId === v ? S?.redirect?.userFlowDoneUrl : void 0);
		if (v && C && !M(s) && xn(C), !v || !y) {
			a(), c && u && d && n.invalidateQueries({ queryKey: Te({
				merchantId: c,
				method: l,
				userId: u,
				sessionId: d,
				currency: f,
				fetchConfig: p,
				extraAttributes: m
			}) }), r.clearProgress(), g((e) => !e.selectedBonusCode && !e.resetFlowOnBack && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
				...e,
				selectedBonusCode: null,
				resetFlowOnBack: !1,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
			return;
		}
		e?.finishWebFlow(v), r.setAccess({
			paymentId: v,
			merchantId: y,
			selectedBonusCode: h ?? null
		}), r.setProgress({
			paymentId: v,
			reachedSummaryViaProvider: x
		}), i(v);
		let w = {
			to: "/summary/$id",
			params: { id: v },
			search: { merchantId: y },
			...b ? { replace: b } : {}
		};
		t(w);
	}, [
		a,
		i,
		e,
		f,
		m,
		p,
		c,
		l,
		t,
		o,
		n,
		h,
		d,
		g,
		s,
		r,
		u
	]);
}, Nu = ["method"], Pu = (e, t, n, r) => (r?.plainTokens ?? Nu).includes(e) ? t : an("strong", {
	key: `template-value-${e}-${String(n)}`,
	className: "font-semibold text-[color:inherit]"
}, t), Fu = (e, t, n) => {
	let r = [e];
	return Object.entries(t).forEach(([e, t], i) => {
		let a = `{${e}}`, o = r.some((e) => typeof e == "string" && e.includes(a)), s = [];
		r.forEach((r, o) => {
			if (typeof r != "string" || !r.includes(a)) {
				s.push(r);
				return;
			}
			let c = r.split(a);
			c.forEach((r, a) => {
				r && s.push(r), a < c.length - 1 && s.push(Pu(e, t, i + o + a, n));
			});
		}), r = s, o || (r = [
			...r,
			" ",
			Pu(e, t, i, n)
		]);
	}), r;
}, Iu = (e, t, n) => {
	let r = [e];
	return Object.entries(t).forEach(([e, t], i) => {
		t.length !== 0 && (r = r.flatMap((r, a) => {
			if (typeof r != "string" || !r.includes(t)) return [r];
			let o = r.split(t);
			return o.flatMap((r, s) => {
				let c = [];
				return r && c.push(r), s < o.length - 1 && c.push(Pu(e, t, i + a + s, n)), c;
			});
		}));
	}), r;
}, Lu = ".pc-cashier__root", Ru = rn(null);
function zu({ children: e, rootRef: t }) {
	return /* @__PURE__ */ Q(Ru.Provider, {
		value: t,
		children: e
	});
}
var Bu = () => q(Ru), Vu = /* @__PURE__ */ new Set(["Backspace"]), Hu = (e) => {
	let t = e.querySelectorAll(Lu);
	return t.length === 1 ? t[0] : null;
}, Uu = (e) => e instanceof Node ? e.ownerDocument : typeof document > "u" ? null : document, Wu = (e, t) => (typeof e.composedPath == "function" ? e.composedPath() : []).includes(t) ? !0 : e.target instanceof Node && t.contains(e.target), Gu = (e, t, n) => {
	if (n?.current) return n.current;
	let r = t?.current?.closest(".pc-cashier__root") ?? null;
	if (r) return r;
	let i = Uu(e.target);
	return i ? Hu(i) : null;
}, Ku = (e, t, n) => {
	let r = Gu(e, t, n);
	return !r || Wu(e, r);
}, qu = (e) => (t) => {
	let { key: n } = t;
	return Vu.has(n) ? !0 : e === "numeric" ? o.test(n) : e === "decimal" ? n === "." || n === "," || o.test(n) : e === "alphanumeric" ? y.test(n) : e === "alphabetic" ? x.test(n) : n.length === 1;
}, Ju = (e, t) => e instanceof HTMLElement && !!(t?.current && e === t.current || e.isContentEditable || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement), Yu = ({ inputRef: e, onType: t, shouldHandleKey: n, isEventTargetInteractive: r, inputType: i = "text", onBack: a, backKey: o }) => {
	let s = e !== void 0 && t !== void 0, c = o ?? "Escape", l = Bu(), u = Y(() => {
		if (s) return n || qu(i);
	}, [
		s,
		i,
		n
	]);
	J(() => {
		if (!s && !a) return;
		let n = (n) => {
			if (!Ku(n, e, l)) return;
			let i = e?.current ?? null, o = r ? r(n.target) : Ju(n.target, e);
			if (n.key === "Escape" && i && document.activeElement === i) n.preventDefault(), i.blur();
			else if (n.key === c) {
				if (o) return;
				a && (n.preventDefault(), a());
			} else s && i && u && (n.defaultPrevented || n.metaKey || n.ctrlKey || n.altKey || u(n) && (o || (n.preventDefault(), i.focus(), t(n))));
		};
		return window.addEventListener("keydown", n, { capture: !0 }), () => {
			window.removeEventListener("keydown", n, { capture: !0 });
		};
	}, [
		s,
		e,
		l,
		r,
		u,
		a,
		t,
		c
	]);
}, Xu = /* @__PURE__ */ new Set([
	"auto",
	"scroll",
	"overlay"
]), Zu = 60, Qu = (e) => {
	let t = window.getComputedStyle(e);
	return Xu.has(t.overflowY) || Xu.has(t.overflow);
}, $u = (e, t) => {
	let n = e.parentElement;
	for (; n && n !== t;) {
		if (Qu(n)) return n;
		n = n.parentElement;
	}
	return t;
}, ed = (e) => ({ gridTemplateColumns: `repeat(${e.toString()}, minmax(0, 1fr))` }), td = (e) => e ? e.getBoundingClientRect() : {
	top: 0,
	right: window.innerWidth,
	bottom: window.innerHeight,
	left: 0
}, nd = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && Number(t.opacity) !== 0;
}, rd = (e, t) => {
	let n = td(e), r = t.ownerDocument, i = Array.from(r.querySelectorAll("[data-pc-scroll-obstruction=\"bottom\"]")), a = null;
	return i.forEach((e) => {
		if (e === t || e.contains(t) || t.contains(e) || !nd(e)) return;
		let r = e.getBoundingClientRect(), i = r.left < n.right && r.right > n.left, o = r.top < n.bottom && r.bottom > n.top;
		r.height <= 0 || r.width <= 0 || !i || !o || (a = a === null ? r.top : Math.min(a, r.top));
	}), a;
}, id = (e, t, n = 0) => {
	let r = e.getBoundingClientRect(), i = td(t), a = rd(t, e), o = a === null ? i.bottom : Math.min(i.bottom, a), s = Math.max(i.top, o - n);
	return r.top >= i.top && r.left >= i.left && r.bottom <= s && r.right <= i.right;
}, ad = (e) => Math.max(0, e.scrollHeight - e.clientHeight), od = (e, t) => {
	let n = /* @__PURE__ */ new Set([e, t]), r = e.parentElement;
	for (; r && r !== t;) n.add(r), r = r.parentElement;
	return Array.from(n);
}, sd = (e, t) => {
	let n = e.getBoundingClientRect(), r = td(t);
	return n.width > 0 && n.height > 0 && r.right > r.left && r.bottom > r.top;
}, cd = (e, t, n = 0) => !id(e, t, n + ad(e)), ld = (e, t, n, r) => {
	let i = cd(t, n, r);
	return sd(t, n) ? i : !e.isIntersecting || e.intersectionRatio < 1 || i;
}, ud = ({ enabled: e, target: t, bottomMarginPx: n = 0, onFallbackActiveChange: r }) => {
	let i = ou(), [a, o] = Z(!1), s = X(!0), c = X(null), l = X(r), u = t !== null, d = t && i ? $u(t, i) : null, f = e && u && d !== null, p = f && typeof IntersectionObserver > "u", m = f && sd(t, d) ? cd(t, d, n) : null, h = p || f && (m ?? a);
	dn(() => {
		l.current = r;
	}, [r]), dn(() => {
		c.current !== h && (c.current = h, l.current?.(h));
	}, [h]), J(() => (s.current = !0, () => {
		s.current = !1;
	}), []);
	let g = K(() => {
		if (!f || p || !s.current || !sd(t, d)) return;
		let e = cd(t, d, n);
		o((t) => t === e ? t : e);
	}, [
		d,
		n,
		f,
		p,
		t
	]);
	return dn(() => {
		if (!f || p) return;
		let e = [], t = () => {
			let t = window.requestAnimationFrame(() => {
				g();
			});
			e.push(t);
		};
		t();
		let n = window.requestAnimationFrame(t);
		return e.push(n), () => {
			e.forEach((e) => {
				window.cancelAnimationFrame(e);
			});
		};
	}, [
		f,
		p,
		g
	]), J(() => {
		if (!f || p) return;
		let e = new IntersectionObserver(([e]) => {
			o(ld(e, t, d, n));
		}, {
			root: d,
			rootMargin: `0px 0px -${n.toString()}px 0px`,
			threshold: [1]
		});
		return e.observe(t), () => {
			e.disconnect();
		};
	}, [
		d,
		n,
		f,
		p,
		t
	]), J(() => {
		if (!f || p) return;
		window.addEventListener("resize", g), d.addEventListener("scroll", g, { passive: !0 });
		let e = typeof ResizeObserver > "u" ? null : new ResizeObserver(g);
		return od(t, d).forEach((t) => {
			e?.observe(t);
		}), () => {
			window.removeEventListener("resize", g), d.removeEventListener("scroll", g), e?.disconnect();
		};
	}, [
		d,
		f,
		p,
		t,
		g
	]), h;
};
function dd({ domScope: e, items: t, enabled: n = !0, adaptive: r = !0, onFallbackActiveChange: i }) {
	let a = nt(), [o, s] = Z(null), c = n && t.length > 0, l = ud({
		enabled: c && r,
		target: o,
		bottomMarginPx: Zu,
		onFallbackActiveChange: i
	}), u = Y(() => ed(t.length), [t.length]);
	return c ? /* @__PURE__ */ Q("div", {
		ref: s,
		"data-slot": `${e}-adaptive-controls-inline`,
		"aria-hidden": l ? "true" : void 0,
		inert: l ? !0 : void 0,
		className: H(a.className("adaptive-controls-inline", { slug: e }), "w-full", l && "h-px overflow-hidden opacity-0 pointer-events-none"),
		children: /* @__PURE__ */ Q("div", {
			"data-slot": `${e}-adaptive-controls-grid`,
			className: "grid gap-3",
			style: u,
			children: t.map((t, n) => /* @__PURE__ */ Q("div", {
				"data-slot": `${e}-adaptive-control`,
				className: "flex w-full justify-center",
				children: t
			}, `${e}-adaptive-control-${n.toString()}`))
		})
	}) : null;
}
function fd({ domScope: e, items: t, fixed: n, enabled: r = !0, onFallbackActiveChange: i }) {
	let a = r && t.length > 0, [o, s] = Z(!1), c = X(!1);
	su("bottom", t, a && (n || o), { reserveSpace: n ? !0 : "compact" });
	let l = K((e) => {
		c.current !== e && (c.current = e, s(e), i?.(e));
	}, [i]);
	return n ? null : /* @__PURE__ */ Q(dd, {
		domScope: e,
		items: t,
		enabled: a,
		onFallbackActiveChange: l
	});
}
//#endregion
//#region src/hooks/useBonusSelection.ts
var pd = () => {
	let e = Ie()?.checkout, { selectedBonusCode: t, setCashierState: n, offers: r, selectedOfferId: i, selectOffer: a, checkoutState: o } = q(Ht), s = K((e) => {
		r === void 0 ? n((t) => (t.selectedBonusCode ?? null) === e ? t : {
			...t,
			selectedBonusCode: e
		}) : a?.(e);
	}, [
		n,
		r,
		a
	]), c = K(() => {
		s(null);
	}, [s]), l = K((t) => {
		if (r !== void 0) {
			if (i || o?.phase !== "confirmed") return;
			let n = t.find((e) => e.preselected);
			n && e?.ensureDefault(n.code, (e) => a?.(e));
		} else n((e) => {
			let n = e.selectedBonusCode ?? null;
			if (n && t.some((e) => e.code === n)) return e;
			let r = t.find((e) => e.preselected)?.code ?? null;
			return n === r ? e : {
				...e,
				selectedBonusCode: r
			};
		});
	}, [
		n,
		r,
		i,
		a,
		o,
		e
	]);
	return {
		selectedBonusCode: t ?? null,
		selectBonusCode: s,
		clearBonusSelection: c,
		ensureDefaultSelection: l
	};
}, md = (e, t) => {
	if (!e) return {
		min: "",
		max: ""
	};
	let n = (e) => e === void 0 ? "" : t(e) || e;
	return {
		min: n(e.min),
		max: n(e.max)
	};
}, hd = (e, t, n) => {
	if (!e || !W(e)) return "";
	let r = _t(e.direction), i = e.value || "", a = t(i) || i;
	if (e.feeType === "percentage") {
		let e = `${i}%`;
		return r ? `${r}${e}` : e;
	}
	let o = Ge(e, 0, {
		feeCurrencyFormatter: n,
		formatCurrencyValue: t
	});
	return r && o ? o : r ? o || `${r}${a}` : a;
}, gd = ({ min: e, max: t }) => e && t ? `${e} - ${t}` : e || t || "";
function _d({ limits: e, fee: t, extraItems: n = [], rowGap: r = "tight", align: i = "center", truncate: a = !1, className: o }) {
	let { uiShowFees: s } = q(Ht), { translateKey: c } = st(), { currencyFormatter: l, formatCurrencyValue: u, formatDisplayValue: d } = Je(), f = d ?? (() => ""), p = u ?? d, m = a, h = Nt(l ?? null), g = md(e, f), _ = hd(t, p ?? f, h), v = gd(g), y = c("field.fee.label"), b = s && _ ? `${_} ${y}` : "", x = [
		v ? {
			id: "limits",
			value: v
		} : null,
		b ? {
			id: "fee",
			value: b
		} : null,
		...n
	].filter((e) => !!e);
	return x.length === 0 ? null : /* @__PURE__ */ Q("div", {
		className: H(m ? "min-w-0 line-clamp-2 leading-tight @md:leading-snug" : "flex flex-wrap items-center leading-tight @md:leading-snug", !m && (r === "normal" ? "gap-y-1.5" : "gap-y-0.5"), i === "left" ? "justify-start text-left" : "justify-center text-center", o),
		children: x.map((e, t) => {
			let n = m && t > 0, r = !m && t < x.length - 1, i = /* @__PURE__ */ $(mn, { children: [e.label && /* @__PURE__ */ $(mn, { children: [/* @__PURE__ */ Q("span", {
				className: "font-medium",
				children: e.label
			}), ": "] }), /* @__PURE__ */ Q("span", { children: e.value })] });
			return /* @__PURE__ */ $("span", {
				"data-payment-meta-item": e.id,
				"data-theme": e.id === "bonus" ? "success" : void 0,
				className: H("inline-flex items-center whitespace-nowrap", e.id === "bonus" && "text-[var(--pc-color-text)]"),
				children: [
					n ? /* @__PURE__ */ Q("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null,
					i,
					r ? /* @__PURE__ */ Q("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null
				]
			}, e.id);
		})
	});
}
function vd({ limits: e, fee: t, extraItems: n, align: r = "left", rowGap: i, truncate: a, className: o }) {
	return /* @__PURE__ */ Q(_d, {
		limits: e,
		fee: t,
		extraItems: n,
		align: r,
		rowGap: i,
		truncate: a,
		className: H(["text-xs @sm:text-sm text-[var(--pc-color-text-muted)]"].join(" "), o)
	});
}
//#endregion
//#region src/ui/PaymentTypeListItem.tsx
function yd({ children: e, placement: t = "item", isGrid: n = !1, id: r, dataSlot: i = "payment-list-item-actions", domClassName: a, onClick: o, onKeyDown: s }) {
	let c = $t.toArray(e).filter(Boolean);
	return c.length === 0 ? null : /* @__PURE__ */ Q("div", {
		id: r,
		"data-slot": i,
		className: H(a, "flex items-center justify-end gap-1", n ? "absolute right-2 top-2" : (() => {
			switch (t) {
				case "content-start": return "ml-auto self-start translate-y-px";
				case "section": return "shrink-0 self-center";
				default: return "ml-auto self-center";
			}
		})()),
		onClick: o,
		onKeyDown: s,
		children: c
	});
}
var bd = (e, t) => !t || e == null ? e : $t.map(e, (e) => {
	if (!sn(e)) return e;
	let n = e.props, r = n.children === void 0 ? n.children : bd(n.children, t);
	return e.type === Pt ? nn(e, {
		appearance: "ghost",
		children: r
	}) : r === n.children ? e : nn(e, { children: r });
});
function xd({ name: e, nameKeys: t, selectionId: r, presentationPaymentType: i, domSlug: a, logo: o, logoContent: s, logoContentPresentation: c = "mark", logoCompact: d, logoSurface: f = "paymentTypeLogo", limits: p, fee: m, onSelect: h, listStyle: g, compact: _, variant: v = "neutral", appearance: y = "solid", shape: b = "default", showMeta: x = !1, title: C, description: w, descriptionPresentation: E = "description", meta: D, metaPlacement: k = "content", isSelected: A = !1, showSelectedIndicator: ee = !0, bonusLabel: te = null, badges: ne, hasAvailableBonuses: j, interactive: M = !0, includeDataTheme: re = !0, hoverMode: N = "self", themeSlot: P, isDisabled: F = !1, isUnavailable: I = !1, balanceLogo: ie = !0, density: ae = "default", embedded: L = !1, embeddedSurfacePosition: R = "middle", actions: oe, actionsAlignment: z = "item", interactiveSurface: se = "item", section: ce, actionStopsPropagation: le = !0, ariaLabel: ue, ariaExpanded: de, ariaControls: fe, className: pe, animationClassName: me, animationStyle: he, infoDrawer: ge }) {
	let _e = nt(), ve = T(), { resolveTextKey: ye, resolveTextKeys: be, translateKey: xe, translateKeys: Se } = st(), { formatCurrencyValue: Ce } = Je(), { uiListStyle: we, bonuses: Te, uiBonuses: Ee, uiBonusesStyle: B, uiBonusesAvailable: ke, uiShowFees: Ae, currency: Me } = q(Ht), { selectPaymentType: Ne } = bt(), [Pe, Fe] = Z(!1), Ie = M && !F, Le = C ?? e, Re = C === void 0 ? Se(t ?? e) : xe(C), ze = Le.trim().length > 0, Be = w ? xe(w) : null, Ve = typeof w == "string" && w.trim().length > 0, He = xe("aria.logo"), Ue = g ?? we, V = Ue === n.GRID, We = !!_, Ge = d ?? We, Ye = ae === "compact", Xe = b === "rounded", Ze = Ke(v), Qe = re && !L, W = !Qe || Ze === void 0, et = _e.token(a ?? e, "item"), tt = r ?? e, rt = i ? u({
		paymentType: i,
		id: tt,
		label: C === void 0 ? be(t ?? e) : l(Re),
		description: w ? ye(w) : void 0,
		currency: Me,
		formatMoney: Ce,
		minimumLabel: ye("field.limits.min.label"),
		maximumLabel: ye("field.limits.max.label"),
		selected: A,
		disabled: F,
		unavailable: I
	}) : null, it = K(() => {
		Ie && (h ? h(tt) : (Ne(tt), Ee && qe(B) && (j ?? Oe(Te)) ? ve({ to: "/bonus" }) : ve({
			to: "/pt/$id",
			params: { id: tt }
		})));
	}, [
		Te,
		j,
		Ie,
		ve,
		h,
		tt,
		Ne,
		Ee,
		B
	]), at = (e) => {
		Ie && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), it());
	}, ot = K((e) => {
		e.stopPropagation(), Fe(!0);
	}, []), ct = K(() => {
		Fe(!1);
	}, []), lt = ke ? te : null, ut = [...ne ?? [], ...V && lt ? [{
		id: "bonus",
		label: lt
	}] : []], dt = We ? "gap-2.5 @md:gap-3" : Xe ? "gap-2 @lg:gap-2.5" : "gap-3", ft = We ? "py-2 px-2 @md:px-3" : Xe ? H(Ye ? "py-2" : "py-2.5", Ye ? "px-3" : "px-3.5") : "p-2", mt = (() => {
		switch (R) {
			case "first": return "pt-0 pb-2.5";
			case "last": return "pt-2.5 pb-0";
			case "only": return "py-0";
			default: return "py-2.5";
		}
	})(), ht = V ? "p-2 gap-0.5" : L && !We && !Xe ? H("px-0", mt, "gap-2.5") : H(L ? H("px-0", mt) : ft, dt), gt = V ? null : We ? ["[--pc-payment-list-item-content-inset:3.125rem]", "@md:[--pc-payment-list-item-content-inset:3.25rem]"].join(" ") : Xe ? [
		"[--pc-payment-list-item-content-inset:2.75rem]",
		"@sm:[--pc-payment-list-item-content-inset:3.5rem]",
		"@lg:[--pc-payment-list-item-content-inset:3.625rem]",
		"@xl:[--pc-payment-list-item-content-inset:4.625rem]"
	].join(" ") : ["[--pc-payment-list-item-content-inset:3rem]", "@sm:[--pc-payment-list-item-content-inset:3.75rem]"].join(" "), _t = V ? "aspect-square flex-col justify-around" : We ? "items-center justify-between" : "justify-between @md:justify-around", vt = x || !!te, yt = Ie || N === "group" ? "transition-[background-color] duration-[250ms] ease-out" : null, xt = P === "payment-types-accordion-header", Ct = P === "payment-type-picker", wt = P === "bonus-picker", Tt = xt ? "hover:text-[var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : Ct ? "hover:text-[var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : wt ? "hover:text-[var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "hover:text-[var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))]", Dt = xt ? "active:text-[var(--pc-color-accordion-header-text-active,var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Ct ? "active:text-[var(--pc-color-payment-type-picker-text-active,var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : wt ? "active:text-[var(--pc-color-bonus-picker-text-active,var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : "active:text-[var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))]", Ot = Tt.replace(/^hover:/u, "group-hover:"), kt = Dt.replace(/^active:/u, "group-active:"), At = xt ? A ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : Ct ? A ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : wt ? A ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : A ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))]", jt = xt ? A ? "[background:var(--pc-color-accordion-header-background-selected,var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : Ct ? A ? "[background:var(--pc-color-payment-type-picker-background-selected,var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : wt ? A ? "[background:var(--pc-color-bonus-picker-background-selected,var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : A ? "[background:var(--pc-color-list-item-background-selected,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : "[background:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", Nt = xt ? "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : Ct ? "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : wt ? "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : "bg-[var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent)))]", It = xt ? "[background:var(--pc-color-accordion-header-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : Ct ? "[background:var(--pc-color-payment-type-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : wt ? "[background:var(--pc-color-bonus-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : "[background:var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest)))]", Rt = xt ? "border-[var(--pc-color-accordion-header-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : Ct ? "border-[var(--pc-color-payment-type-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : wt ? "border-[var(--pc-color-bonus-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : "border-[var(--pc-color-list-item-border,var(--pc-color-border))]", zt = xt ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : Ct ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : wt ? "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-list-item,var(--pc-radius-lg))]", Bt = xt ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-payment-picker,var(--pc-radius-full)))]" : "rounded-[var(--pc-radius-payment-picker,var(--pc-radius-full))]", Vt = null;
	!L && xt ? Vt = "[--pc-radius-panel:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !L && Ct ? Vt = "[--pc-radius-panel:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !L && wt ? Vt = "[--pc-radius-panel:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : L || (Vt = "[--pc-radius-panel:var(--pc-radius-list-item,var(--pc-radius-lg))]");
	let Wt = xt ? "outline-3 outline-[var(--pc-color-accordion-header-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : Ct ? "outline-3 outline-[var(--pc-color-payment-type-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : wt ? "outline-3 outline-[var(--pc-color-bonus-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : "outline-3 outline-[var(--pc-color-list-item-border-selected,var(--pc-color-secondary))]", Gt = xt ? A ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Ct ? A ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : wt ? A ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : A ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))]", G = xt ? "text-[var(--pc-color-accordion-header-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : Ct ? "text-[var(--pc-color-payment-type-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : wt ? "text-[var(--pc-color-bonus-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted))]", Kt = xt ? A ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : Ct ? A ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : wt ? A ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : A ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-description-text,var(--pc-color-text-muted))]", qt = N === "group" ? xt ? [
		"group-hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"group-active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : Ct ? [
		"group-hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"group-active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : wt ? [
		"group-hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"group-active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : [
		"group-hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		Ot,
		"group-active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		kt
	].join(" ") : N === "self" && Ie ? xt ? [
		"hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Tt,
		"active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Dt
	].join(" ") : Ct ? [
		"hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Tt,
		"active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Dt
	].join(" ") : wt ? [
		"hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Tt,
		"active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Dt
	].join(" ") : [
		"hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		Tt,
		"active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Dt
	].join(" ") : null, Jt = (() => {
		if (L) return H("bg-transparent", At);
		switch (y) {
			case "ghost": return H("bg-transparent", At);
			case "outline": return H("border", Rt, Nt, At);
			case "muted": return H(It, At);
			default: return H(jt, At);
		}
	})(), Yt = !!(oe || ge), Xt = !(!D || k !== "full-row" || V), Zt = !!ce?.content && !V, Qt = Zt && se === "main", $t = Zt && se === "content", en = Ie && !Qt && !$t, tn = en || N === "group", nn = Ie && Qt, rn = Ie && $t, an = (F || I) && Ze !== "danger", on = I && !F && Zt && Ze !== "danger", sn = V ? "[--pc-payment-list-item-inline-padding:0.5rem]" : L && !We && !Xe ? "[--pc-payment-list-item-inline-padding:0rem]" : We ? ["[--pc-payment-list-item-inline-padding:0.5rem]", "@md:[--pc-payment-list-item-inline-padding:0.75rem]"].join(" ") : Xe ? Ye ? "[--pc-payment-list-item-inline-padding:0.75rem]" : "[--pc-payment-list-item-inline-padding:0.875rem]" : "[--pc-payment-list-item-inline-padding:0.75rem]", cn = H("flex w-full min-w-0 overflow-hidden", Zt ? "flex-col" : V ? "flex-col items-center" : "flex-row items-center", Vt, Jt, Yt && "relative", !L && (Xe ? Bt : zt), en && "group cursor-pointer", en && [
		"focus-visible:[outline-style:solid]",
		"focus-visible:outline-2",
		"focus-visible:outline-[var(--pc-color-accent)]",
		"focus-visible:outline-offset-2"
	], !Ie && "cursor-default", !Zt && Xt && "flex-wrap", Zt && "gap-y-0", tn && yt, tn && qt, gt, sn, $t && ["[--pc-payment-list-item-panel-action-inset:1.25rem]"], an && !on && [
		"opacity-55",
		"[filter:saturate(0.72)_grayscale(0.18)]",
		"[--pc-enter-final-opacity:0.55]"
	].join(" "), !Zt && ht, !Zt && _t, me, pe), J = H(Zt && [
		"flex w-full min-w-0",
		$t ? "p-2" : "overflow-hidden items-center",
		nn && "group cursor-pointer",
		nn && [
			"focus-visible:[outline-style:solid]",
			"focus-visible:outline-2",
			"focus-visible:outline-[var(--pc-color-accent)]",
			"focus-visible:-outline-offset-2"
		],
		nn && yt,
		nn && qt,
		!$t && ht,
		!$t && _t,
		on && ["opacity-55", "[filter:saturate(0.72)_grayscale(0.18)]"].join(" ")
	]), ln = H(V ? "p-2 gap-0.5" : "py-2 px-3 gap-2 @lg:gap-2.5"), un = Ct ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]", dn = Ct ? "border-t border-[var(--pc-color-payment-type-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : wt ? "border-t border-[var(--pc-color-bonus-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : "border-t border-[var(--pc-color-list-item-divider,var(--pc-color-depth-3))]", Y = H($t && [
		"flex w-full min-w-0 overflow-hidden items-center",
		Xe ? Bt : un,
		rn && "group cursor-pointer",
		rn && [
			"focus-visible:[outline-style:solid]",
			"focus-visible:outline-2",
			"focus-visible:outline-[var(--pc-color-accent)]",
			"focus-visible:outline-offset-2"
		],
		rn && yt,
		rn && qt,
		ln,
		_t
	]), fn = V ? "text-center" : "text-left", X = H("w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", F || I ? G : Gt, !F && !I && Ot, !F && !I && kt, V ? "break-words" : "truncate", fn), pn = H("flex min-w-0 flex-col", V ? "items-center w-full" : "items-start flex-1"), hn = vt ? /* @__PURE__ */ Q(vd, {
		limits: p,
		fee: m,
		align: V ? "center" : "left",
		rowGap: V ? void 0 : "normal",
		extraItems: lt && !V ? [{
			id: "bonus",
			value: lt
		}] : void 0
	}) : null, gn = !!(x && (p?.min || p?.max || Ae && m?.value)), _n = !!(Ve || gn || D), vn = ut.length > 0 ? /* @__PURE__ */ Q("div", {
		className: H("flex flex-wrap gap-1", V ? "justify-center text-center" : "justify-start text-left", V && _n && "-mt-0.5"),
		children: ut.map((e) => e.status ? /* @__PURE__ */ Q(Ut, {
			tone: e.status.tone,
			statusLabel: e.status.statusLabel,
			showMarker: e.status.showMarker,
			label: e.label,
			size: "sm"
		}, e.id) : /* @__PURE__ */ Q("span", {
			"data-theme": Ke(e.variant ?? "success"),
			className: H("inline-flex items-center rounded-[var(--pc-radius-full)] px-2.5 py-1 text-xs font-medium leading-tight", e.variant === "neutral" ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", e.id !== "bonus" && "italic"),
			children: e.label
		}, e.id))
	}) : null, yn = !!(Ve || hn || k === "content" && D || vn), bn = E === "lone-body" && Ve && !ze && !(gn || lt !== null && !V) && !(k === "content" && D) && !vn, xn = null;
	yn ? xn = /* @__PURE__ */ $(pt, {
		className: pn,
		children: [
			ze && /* @__PURE__ */ Q("h3", {
				className: H(_e.className("payment-list-item-title", { slug: et }), X),
				children: /* @__PURE__ */ Q(U, { children: Re })
			}),
			Ve && /* @__PURE__ */ Q("p", {
				className: H(_e.className("payment-list-item-description", { slug: et }), bn ? "text-sm @sm:text-base @md:leading-tight" : "text-xs @sm:text-sm @md:leading-tight", Kt, Ot, kt, fn),
				children: /* @__PURE__ */ Q(U, { children: Be })
			}),
			hn,
			k === "content" && D,
			vn
		]
	}) : ze && (xn = /* @__PURE__ */ Q("h3", {
		className: H(_e.className("payment-list-item-title", { slug: et }), X),
		children: /* @__PURE__ */ Q(U, { children: Re })
	}));
	let Sn = ge ? {
		label: xe(ge.ariaLabelKey ?? ge.titleKey),
		title: /* @__PURE__ */ Q(U, { children: xe(ge.titleKey) }),
		icon: ge.icon ?? /* @__PURE__ */ Q(je, {})
	} : null, Cn = Sn ? /* @__PURE__ */ Q(Pt, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Sn.label,
		onClick: ot,
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		iconOnly: !0,
		label: Sn.label,
		leadingIcon: Sn.icon
	}) : null, wn = bd(oe, We), Tn = K((e) => {
		le && e.stopPropagation();
	}, [le]), En = K((e) => {
		le && e.stopPropagation();
	}, [le]), Dn = /* @__PURE__ */ $(yd, {
		id: _e.id("payment-list-item-actions", { slug: et }),
		domClassName: _e.className("payment-list-item-actions", { slug: et }),
		isGrid: V,
		placement: z,
		onClick: Tn,
		onKeyDown: En,
		children: [Cn, wn]
	}), On = Xt ? /* @__PURE__ */ Q("div", {
		"data-slot": "payment-list-item-full-row-meta",
		className: H(_e.className("payment-list-item-full-row-meta", { slug: et }), "basis-full min-w-0"),
		children: D
	}) : null, kn = Zt ? /* @__PURE__ */ Q("div", {
		"data-slot": "payment-list-item-section",
		onClick: (e) => {
			e.stopPropagation();
		},
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		className: H(_e.className("payment-list-item-section", { slug: et }), "basis-full min-w-0", (ce?.width ?? "content-aligned") === "full" ? ["w-full", $t ? ["pl-[var(--pc-payment-list-item-panel-action-inset)]", "pr-[var(--pc-payment-list-item-panel-action-inset)]"] : "px-[var(--pc-payment-list-item-inline-padding)]"] : ["ml-[var(--pc-payment-list-item-content-inset)]", "w-[calc(100%-var(--pc-payment-list-item-content-inset))]"], ce?.border && [dn, "py-3"]),
		children: ce?.content
	}) : null, An = Sn ? /* @__PURE__ */ Q(Du, {
		isOpen: Pe,
		onClose: ct,
		title: Sn.title,
		children: /* @__PURE__ */ Q("div", {
			className: "px-5 pb-5 pt-2",
			children: ge?.content
		})
	}) : null, jn = V ? "grid" : "list", Mn = [Re, He].filter((e) => typeof e == "string" && e.length > 0).join(" "), Nn = _e.attrs("payment-type-logo", { slug: et }), Pn = _e.attrs("payment-type-logo-content", { slug: et }), Fn = c === "inline-control", In = s ? /* @__PURE__ */ Q("div", {
		id: _e.id("payment-type-logo", { slug: et }),
		...Nn,
		className: H(Nn.className, Fn ? "flex shrink-0 items-center justify-center" : [$e(f, jn), St({
			layout: jn,
			compact: Ge
		})]),
		children: /* @__PURE__ */ Q("span", {
			...Pn,
			className: H(Pn.className, "flex items-center justify-center", !Fn && Ft({
				layout: jn,
				compact: Ge
			})),
			children: s
		})
	}) : /* @__PURE__ */ Q(S, {
		id: _e.id("payment-type-logo", { slug: et }),
		logo: o,
		alt: Mn,
		seed: e,
		rootAttributes: Nn,
		contentClassName: Pn.className,
		surface: f,
		listStyle: Ue,
		compact: Ge,
		balanceLogo: ie
	}), Ln = (e) => ({
		onClick: e ? it : void 0,
		onKeyDown: e ? at : void 0,
		role: e ? "button" : void 0,
		tabIndex: e ? 0 : void 0,
		"aria-label": e ? ue : void 0,
		"aria-expanded": e ? de : void 0,
		"aria-controls": e ? fe : void 0,
		"aria-disabled": e && F ? !0 : void 0
	}), Rn = L && !V && !Ie && !We && !Xe && !F && !I && !A && !P && !Zt && ze && E === "description", zn;
	zn = Rn ? /* @__PURE__ */ Q(Lt, {
		leading: In,
		title: /* @__PURE__ */ Q(U, { children: Re }),
		description: Ve ? /* @__PURE__ */ Q(U, { children: Be }) : void 0,
		meta: /* @__PURE__ */ $(mn, { children: [
			hn,
			k === "content" && D,
			vn
		] }),
		domSlug: et
	}) : L && !V ? /* @__PURE__ */ Q(Mt, {
		leading: In,
		children: xn
	}) : /* @__PURE__ */ $(mn, { children: [In, xn] });
	let Bn = /* @__PURE__ */ $(mn, { children: [
		rt ? /* @__PURE__ */ Q(O, {
			id: "paymentTypeItem",
			model: rt,
			actions: De,
			children: zn
		}) : zn,
		Dn,
		On
	] }), Vn = _e.attrs("payment-list-item", { slug: et }), Hn = _e.attrs("payment-list-item-main", { slug: et }), Un = _e.attrs("payment-list-item-main-trigger", { slug: et }), Wn = Ln(en), Gn = Ln(nn), Kn = Ln(rn);
	return /* @__PURE__ */ $(mn, { children: [/* @__PURE__ */ $(Et, {
		as: "div",
		id: _e.id("payment-list-item", { slug: et }),
		"data-pc-slot": Vn["data-pc-slot"],
		"data-pc-slug": Vn["data-pc-slug"],
		onClick: Wn.onClick,
		onKeyDown: Wn.onKeyDown,
		role: Wn.role,
		tabIndex: Wn.tabIndex,
		"aria-label": Wn["aria-label"],
		"aria-expanded": Wn["aria-expanded"],
		"aria-controls": Wn["aria-controls"],
		"aria-disabled": F || void 0,
		dataTheme: Qe ? Ze : void 0,
		inheritTheme: W,
		appearance: y,
		chrome: !1,
		spacing: "flush",
		style: he,
		className: H(Vn.className, cn, V && "relative", A && ee && [
			"[outline-style:solid]",
			Wt,
			"outline-offset-[2.5px]"
		].join(" ")),
		children: [Zt ? /* @__PURE__ */ Q("div", {
			"data-slot": "payment-list-item-main",
			"data-pc-slot": Hn["data-pc-slot"],
			"data-pc-slug": Hn["data-pc-slug"],
			onClick: Gn.onClick,
			onKeyDown: Gn.onKeyDown,
			role: Gn.role,
			tabIndex: Gn.tabIndex,
			"aria-label": Gn["aria-label"],
			"aria-expanded": Gn["aria-expanded"],
			"aria-controls": Gn["aria-controls"],
			"aria-disabled": Gn["aria-disabled"],
			className: H(Hn.className, J),
			children: $t ? /* @__PURE__ */ Q("div", {
				"data-slot": "payment-list-item-main-trigger",
				"data-pc-slot": Un["data-pc-slot"],
				"data-pc-slug": Un["data-pc-slug"],
				onClick: Kn.onClick,
				onKeyDown: Kn.onKeyDown,
				role: Kn.role,
				tabIndex: Kn.tabIndex,
				"aria-label": Kn["aria-label"],
				"aria-expanded": Kn["aria-expanded"],
				"aria-controls": Kn["aria-controls"],
				"aria-disabled": Kn["aria-disabled"],
				className: H(Un.className, Y),
				children: Bn
			}) : Bn
		}) : Bn, kn]
	}), An] });
}
//#endregion
//#region src/ui/SelectableListLayout.tsx
function Sd({ children: e, id: t, className: r, rootAttributes: i, contentClassName: a, contentAttributes: o, contentStyle: s, listStyle: c, compact: l, stacked: u = !1 }) {
	let { uiListStyle: d } = q(Ht), f = (c ?? d) === n.GRID, p = u || l || !f;
	return /* @__PURE__ */ Q("div", {
		...i,
		id: t,
		className: H(i?.className, r),
		children: /* @__PURE__ */ Q("div", {
			...o,
			className: H("gap-1.5", p ? "grid grid-cols-1" : "grid grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4", o?.className, a),
			style: s,
			children: e
		})
	});
}
//#endregion
//#region src/ui/BonusTerms.tsx
function Cd({ termsKey: e }) {
	let { translateKey: t } = st(), n = t(e);
	return n ? /* @__PURE__ */ Q(ue, {
		content: n,
		className: "text-[var(--pc-color-text-muted)]"
	}) : null;
}
//#endregion
//#region src/ui/BonusCloseNotice.tsx
function wd({ reasons: e, align: t = "left", tone: n = "hint" }) {
	let { translateKey: r } = st(), { formatCurrencyValue: i } = Je(), a = Y(() => e.map((e, t) => ({
		key: `${e.type}-${"delta" in e ? String(e.delta) : String(t)}`,
		label: be(e, r, i)
	})), [
		i,
		e,
		r
	]);
	return a.length === 0 ? null : /* @__PURE__ */ Q("div", {
		"data-theme": n === "hint" ? "success" : void 0,
		className: ["text-xs @sm:text-sm text-[var(--pc-color-text)] italic", t === "center" ? "text-center" : "text-left"].join(" "),
		children: a.map((e) => /* @__PURE__ */ Q("p", { children: e.label }, e.key))
	});
}
//#endregion
//#region src/ui/BonusesList.tsx
var Td = "bonus.terms.title", Ed = "__cashier_bonus_skip__", Dd = "skip";
function Od({ bonuses: e, selectedBonusCode: t, onSelect: r, onSkip: i, selectable: a = !0, showSkipOption: o = !1, isSkipSelected: s = !1, listStyle: c, compact: l, stacked: u = !1, itemVariant: d = "neutral", itemAppearance: f = "solid", domScope: p, animateItems: m = !1, closeReasonPlacement: h = "meta", themeSlot: g }) {
	let _ = nt(), { uiListStyle: v, checkoutState: y } = q(Ht), { translateKey: b } = st(), { formatCurrencyValue: x } = Je(), S = ct(c ?? v), C = S === n.GRID, w = p ? _.token(p, "list") : null, T = w ? _.id("bonus-list", { slug: w }) : void 0, E = { staggerMode: "compressed-tail" }, D = [...o && e.some(({ status: e }) => e === "available") ? [{ type: "skip" }] : [], ...e.map((e) => ({
		type: "bonus",
		availability: e
	}))];
	return /* @__PURE__ */ Q(Sd, {
		id: T,
		rootAttributes: _.attrs("bonus-list", w ? { slug: w } : void 0),
		className: "w-full",
		contentAttributes: _.attrs("bonus-list-content", w ? { slug: w } : void 0),
		contentClassName: m ? hl : void 0,
		contentStyle: m ? Al(E) : void 0,
		listStyle: S,
		compact: l,
		stacked: u,
		children: D.map((e, n) => {
			if (e.type === "skip") return /* @__PURE__ */ Q(xd, {
				domSlug: Dd,
				name: Ed,
				title: "",
				description: "bonus.interactive_prompt.no_bonus",
				logoContent: /* @__PURE__ */ Q(oe, { className: "h-full w-full" }),
				logoSurface: "bonusLogo",
				listStyle: S,
				compact: l,
				onSelect: i ? () => {
					i();
				} : void 0,
				isSelected: a && s,
				interactive: !!i,
				hoverMode: a ? "none" : void 0,
				variant: d,
				appearance: f,
				themeSlot: g,
				animationClassName: m ? gl : void 0,
				animationStyle: m ? kl(n, D.length, "forward", E) : void 0
			}, Ed);
			let { bonus: o, status: c, reasons: u } = e.availability, p = c !== "available", _ = C && p ? u.map((e, t) => ({
				id: `bonus-reason-${o.code}-${String(t)}`,
				label: be(e, b, x),
				variant: c === "close" ? "success" : "neutral"
			})).filter((e) => !!e.label) : [], v = !C && p && (c === "close" || h === "meta") ? /* @__PURE__ */ Q(wd, {
				reasons: u,
				tone: c === "close" ? "hint" : "neutral"
			}) : null, w = !C && p && c !== "close" && h === "info" ? /* @__PURE__ */ Q(wd, {
				reasons: u,
				tone: "neutral"
			}) : null, T = o.termsAndConditions, O = v ? /* @__PURE__ */ Q("div", {
				className: "flex flex-col gap-1",
				children: v
			}) : null, k = T || w ? {
				titleKey: Td,
				content: /* @__PURE__ */ $("div", {
					className: "flex flex-col gap-3",
					children: [w, T && /* @__PURE__ */ Q(Cd, { termsKey: T })]
				})
			} : void 0;
			return /* @__PURE__ */ Q(xd, {
				domSlug: o.code,
				name: o.code,
				title: o.title,
				description: o.description,
				logo: o.logo,
				logoSurface: "bonusLogo",
				listStyle: S,
				compact: l,
				onSelect: p ? void 0 : r,
				isSelected: a && (y?.phase === "pending" ? y.requestedOfferId : t) === o.code,
				interactive: !p,
				isDisabled: p,
				hoverMode: a ? "none" : void 0,
				meta: O,
				badges: _.length > 0 ? _ : void 0,
				infoDrawer: k,
				variant: d,
				appearance: f,
				themeSlot: g,
				animationClassName: m ? gl : void 0,
				animationStyle: m ? kl(n, D.length, "forward", E) : void 0
			}, o.code);
		})
	});
}
//#endregion
//#region src/utils/interactivePrompt.tsx
function kd(e, t, n) {
	if (!t) return;
	let r = e(t);
	if (r && r !== t) return Object.entries(n ?? {}).reduce((e, [t, n]) => R(e, t, n), r);
}
function Ad(e, t, n, r) {
	return kd(e, t, r) ?? n;
}
function jd(e, t, n, r) {
	if (!t) return n;
	let i = e(t);
	return !i || i === t ? n : r ? Fu(i, r) : i;
}
var Md = (e) => /* @__PURE__ */ Q(Pe, { className: e }), Nd = ({ translateKey: e }) => ({
	legacyTitle: e("cta.choose_payment_type"),
	titleKey: "cta.interactive_prompt.choose_payment_type.title",
	bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
	icon: Md()
}), Pd = ({ translateKey: e }) => ({
	legacyTitle: e("payment.enter_details"),
	titleKey: "payment.interactive_prompt.enter_details",
	bodyKey: "interactive_prompt.payment_details.form.body",
	icon: /* @__PURE__ */ Q(F, {})
}), Fd = ({ translateKey: e }) => ({
	legacyTitle: e("payment.info_details"),
	titleKey: "payment.interactive_prompt.info_details",
	bodyKey: "interactive_prompt.payment_details.info.body",
	icon: /* @__PURE__ */ Q(je, {})
}), Id = (e) => e.toFixed(2).replace(/\.?0+$/, "");
//#endregion
//#region src/components/InteractivePromptHeader.tsx
function Ld({ content: e, forceVisible: t = !1, className: n }) {
	let { uiInteractivePrompts: r, uiPaymentMethodSwitcher: i, uiUserBalance: a, debug: o } = q(Ht), { translateKey: s } = st(), c = Y(() => (e?.actions ?? []).flatMap((e) => {
		let t = o && e.labelKey ? e.labelKey : Ad(s, e.labelKey, e.legacyLabel);
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
	let l = Ad(s, e.titleKey, e.legacyTitle, e.titleValues) ?? e.legacyTitle, u = o && e.titleKey ? e.titleKey : l;
	e.preferLegacyTitle && e.legacyTitle && (l = e.legacyTitle, u = e.legacyTitle), o && e.titleKey && (l = e.titleKey, u = e.titleKey);
	let d = o && e.bodyKey ? e.bodyKey : jd(s, e.bodyKey, e.legacyBody, e.bodyValues) ?? e.legacyBody;
	return e.preferLegacyBody && e.legacyBody && (d = e.bodyValues ? Iu(e.legacyBody, e.bodyValues) : e.legacyBody), /* @__PURE__ */ Q(Ee, {
		className: H(!i && !a && "pt-1.5 @sm:pt-2", n),
		title: u,
		titleText: l,
		body: d,
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
//#region src/utils/bonusInteraction.ts
var Rd = .001, zd = ({ amount: e, fullClaimAmount: t, claimPercentage: n }) => typeof e == "number" && typeof t == "number" ? e >= t - Rd : typeof n == "number" && n >= 99.999, Bd = (e) => typeof e != "number" || !Number.isFinite(e) ? "0" : String(Math.min(99, Math.round(e))), Vd = (e, t) => {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => e[n] === t[n]);
}, Hd = (e, t, n = (e, t) => e === t) => !!e && e?.paymentTypeName === t.paymentTypeName && e.method === t.method && n(e.amount, t.amount), Ud = (e, t) => e === t ? !0 : !e || !t ? !1 : e.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount && e.hasHostedFields === t.hasHostedFields && Vd(e.values, t.values), Wd = (e, t, n) => Hd(e, t) ? {
	...e,
	amount: n,
	values: {
		...e.values,
		amount: n
	}
} : e, Gd = ({ runtime: e }) => {
	let t = pn(e.ordinaryForm.subscribe, e.ordinaryForm.getSnapshot, e.ordinaryForm.getSnapshot), n = pn(e.subscribe, e.getSnapshot, e.getSnapshot), { values: r, setValues: i } = Cc();
	return dn(() => {
		if (!["paymentDetails", "paymentConfirmation"].includes(n.presentation.screen)) return;
		let e = t.values;
		(Object.keys(r).length !== Object.keys(e).length || Object.entries(e).some(([e, t]) => r[e] !== t)) && i({ ...e }, !1);
	}, [
		t.values,
		n.presentation.screen,
		r,
		i
	]), null;
}, Kd = {
	before: "top",
	after: "bottom"
}, qd = (e, t) => e.screen !== "paymentDetails" && e.screen !== "paymentConfirmation" ? t : [...e.fields, ...e.resultFields].map((e) => {
	let n = t?.find((t) => t.id === e.id);
	return {
		id: e.id,
		type: e.kind === "text" ? e.inputType : e.kind,
		label: e.label.value,
		labelKeys: [e.label.value],
		validation: { required: { value: e.required } },
		...e.placeholder ? { placeholder: e.placeholder.value } : {},
		...e.options ? { options: e.options.map((e) => ({
			value: e.value,
			label: e.label.value
		})) } : {},
		...["display", "qrcode"].includes(e.kind) ? { defaultValue: String(e.value) } : {},
		...e.description ? { notification: {
			key: e.description.value,
			keys: [e.description.value],
			type: e.description.tone ?? n?.notification?.type ?? "info",
			orientation: e.description.placement ? Kd[e.description.placement] : n?.notification?.orientation
		} } : {}
	};
}), Jd = (e) => {
	let { payment: t, paymentStatusMessage: n, makePayment: r, isPaymentFailed: i, isPaymentPending: a, isPaymentSuccessful: o } = rt(), s = Mu();
	return {
		makePayment: K((t, n) => r({
			body: t,
			path: e,
			attemptGeneration: n
		}), [r, e]),
		finishPayment: s,
		paymentResponse: t,
		paymentStatusMessage: n,
		isPaymentSuccessful: o,
		isPaymentFailed: i,
		isPaymentPending: a
	};
}, Yd = ({ fieldId: e, label: t, value: n, translateKey: r }) => /* @__PURE__ */ Q("div", {
	"data-payment-field-display": e,
	children: /* @__PURE__ */ Q(ie, {
		label: t,
		value: n,
		readOnly: !0,
		copyValue: n,
		copyLabel: r("cta.copy"),
		copiedLabel: r("cta.copied"),
		copyButtonProps: { "data-payment-field-display-copy": e },
		"data-payment-field-display-value": e,
		inputClassName: "font-mono"
	})
}), Xd = "amount", Zd = (e, t, n, r) => {
	let i = t ?? [], a = r !== void 0 && !i.some((e) => e.value === "") ? [/* @__PURE__ */ Q("option", {
		value: "",
		children: r
	}, `${e}_placeholder`)] : [];
	return i.reduce((t, r, i) => {
		let a = r.value, o = n(r.label || a);
		if (!o && !a) return t;
		let s = `${e}_${String(i)}`;
		return t.push(/* @__PURE__ */ Q("option", {
			value: a,
			children: o || a
		}, s)), t;
	}, a);
}, Qd = ({ isAmountField: e, isCheckboxField: t, isInputField: n, isLastRenderableField: r, reserveInputMessageSpace: i, reserveCheckboxMessageSpace: a, reserveLastCheckboxMessageSpace: o, reserveLastAmountMessageSpace: s }) => e ? r && s : t ? r ? o : a : n && i, $d = ({ fields: e, validationMode: t = "local", amountValidationMode: n = t, textMode: r = "keys", translateKey: i, translateKeys: a, disabled: o = !1, amountError: s, amountFieldId: c = Xd, renderBelowFieldContent: l, belowFieldContentClassName: u = D, belowFieldContentInheritsTheme: d = !0, renderBeforeField: f, renderAfterField: p, renderAfterFieldRow: m, animateRows: h = !1, animationStartIndex: _ = 0, animationTotalCount: v, animationDirection: y = "forward", reserveInputMessageSpace: b = !1, reserveCheckboxMessageSpace: x = !1, reserveLastCheckboxMessageSpace: S = !1, reserveLastAmountMessageSpace: w = !1, addFirstFieldTopPadding: T = !0, addLastFieldBottomPadding: E = !0, allowReservedLastFieldBottomPadding: O = !1, reserveTrailingActionClearance: A = !1, submitUnrenderedFields: ee = !1 }) => {
	let te = r === "resolved" ? (e) => e ?? "" : i, ne = r === "resolved" ? (e) => typeof e == "string" ? e : e?.[0] ?? "" : a, j = nt(), { setFieldValue: M, setValues: re, values: N } = Cc(), P = Xe(), F = At(Ye(e, N), N), I = gn(e, N), ae = I.map((e) => `${e.fieldId}=${e.value}`).join("");
	J(() => {
		I.length !== 0 && re((e) => ({
			...e,
			...Object.fromEntries(I.map(({ fieldId: e, value: t }) => [e, t]))
		}), !1);
	}, [ae]);
	let L = (e) => !!e.id && !e.hidden && Tt(e, N).visible, R = F.findIndex(L), oe = F.reduce((e, t, n) => L(t) ? n : e, -1);
	return /* @__PURE__ */ Q(mn, { children: F.map((e, r) => {
		let D = e.id;
		if (!D) return null;
		let re = () => !ee || !Object.hasOwn(N, D) ? null : /* @__PURE__ */ Q("input", {
			type: "hidden",
			name: D,
			value: k(N[D]),
			"data-payment-field-unrendered": D
		}, D);
		if (e.hidden) return re();
		let F = Tt(e, N);
		if (!F.visible) return re();
		let I = P(D, "field"), ae = j.id("payment-field", { slug: I }), L = r === R, z = r === oe, ce = m?.(D, { isLastRenderableField: z }), le = e.labelKeys ?? e.label ?? D, ue = ne(le), de = t === "external" ? e.validation : Xt(e.validation, a), pe = e.type, me = pe === "checkbox", he = pe === "select", ge = pe === "display", ve = pe === "qrcode", ye = D === c, be = !me && !he && !ge && !ve && !ye, xe = D === "iban" || !!de?.iban?.value, Se = !me && xe ? g : void 0, Ce = he || me ? {} : { formattingAdapter: Se }, we = ie;
		me ? we = fe : he && (we = se);
		let Te = (e) => {
			if (!ye) return;
			let t = N[D], r = C(typeof t == "string" ? t : "", e.currentTarget.value);
			M(D, r, n === "external");
		}, Ee = e.placeholder ? te(e.placeholder) : void 0, De = he ? N[D] : void 0, Oe = he ? Zd(D, F.options ?? e.options, te, typeof De == "string" && De !== "" ? void 0 : Ee ?? "") : null, B = ye ? s : void 0, ke = f?.(D), Ae = l?.(D), je = !!ce, Me = Qd({
			isAmountField: ye,
			isCheckboxField: me,
			isInputField: be,
			isLastRenderableField: z,
			reserveInputMessageSpace: b,
			reserveCheckboxMessageSpace: x,
			reserveLastCheckboxMessageSpace: S,
			reserveLastAmountMessageSpace: w
		}) && !(ye && je), Ne = E && z && (!Me || O) && !je, Pe = A && z && !je, Fe;
		(Pe || Ne) && (Fe = Pe ? "pb-4" : "pb-3");
		let Ie = T && L ? "pt-3" : void 0, Le;
		if (ge) Le = /* @__PURE__ */ Q(Yd, {
			fieldId: D,
			label: ue,
			value: e.defaultValue ?? "",
			translateKey: i
		});
		else if (ve) {
			let t = e.defaultValue ?? "";
			Le = t ? /* @__PURE__ */ Q("div", {
				"data-payment-field-qrcode": D,
				children: /* @__PURE__ */ Q(_e, {
					label: ue,
					value: t,
					hideLabel: !0,
					reserveMessageSpace: !1
				})
			}) : null;
		} else Le = ye ? /* @__PURE__ */ Q(Yc, {
			label: ue,
			id: ae,
			name: D,
			validation: de,
			validationMode: n,
			error: B,
			disabled: o,
			component: we,
			onChange: Te,
			belowFieldContent: Ae,
			belowFieldContentClassName: u,
			belowFieldContentInheritsTheme: d,
			formattingAdapter: Se,
			placeholder: Ee,
			reserveMessageSpace: Me,
			type: me || he ? void 0 : "text",
			inputMode: "numeric",
			pattern: "[0-9]*",
			children: he ? Oe : void 0
		}) : me ? /* @__PURE__ */ Q(Yc, {
			label: ue,
			id: ae,
			name: D,
			validation: de,
			validationMode: t,
			error: B,
			disabled: o,
			component: we,
			belowFieldContent: Ae,
			belowFieldContentClassName: u,
			belowFieldContentInheritsTheme: d,
			placeholder: Ee,
			reserveMessageSpace: Me,
			type: void 0
		}) : /* @__PURE__ */ Q(Yc, {
			label: ue,
			id: ae,
			name: D,
			validation: de,
			validationMode: t,
			error: B,
			disabled: o,
			component: we,
			belowFieldContent: Ae,
			belowFieldContentClassName: u,
			belowFieldContentInheritsTheme: d,
			...Ce,
			placeholder: Ee,
			reserveMessageSpace: Me,
			type: he ? void 0 : pe ?? "text",
			children: he ? Oe : void 0
		});
		let Re = j.attrs("payment-field-row", { slug: I }), ze = h ? Ol({
			index: _ + r,
			total: v,
			direction: y
		}) : void 0;
		return /* @__PURE__ */ $(tn, { children: [/* @__PURE__ */ $("div", {
			"data-payment-field-row": D,
			id: j.id("payment-field-row", { slug: I }),
			...Re,
			className: [
				Re.className,
				"flex flex-col w-full",
				Ie,
				Fe,
				h ? ml : void 0
			].filter(Boolean).join(" "),
			style: ze,
			children: [
				ke,
				Le,
				p?.(D, { isLastRenderableField: z })
			]
		}), ce && /* @__PURE__ */ Q("div", {
			className: ["flex min-w-0 w-full flex-col", h ? "pc-enter-rise-item" : void 0].filter(Boolean).join(" "),
			style: ze,
			children: ce
		}, `${D}-after-row`)] }, D);
	}) });
};
//#endregion
//#region src/components/AmountErrorAlert.tsx
function ef({ message: e, id: t }) {
	return /* @__PURE__ */ Q("div", {
		id: t,
		role: "alert",
		className: "pl-3",
		children: /* @__PURE__ */ Q(Ld, {
			forceVisible: !0,
			content: {
				legacyTitle: e,
				preferLegacyTitle: !0,
				tone: "danger",
				icon: /* @__PURE__ */ Q(oe, {})
			}
		})
	});
}
//#endregion
//#region src/lib/hostedFieldLayout.ts
var tf = "pan", nf = "expiryDate", rf = "csc", af = (e) => e === rf || e === nf, of = (e) => typeof e.id == "string" && e.id.trim().length > 0, sf = (e) => {
	let t = (e.type ?? "text").trim().toLowerCase(), n = (e.options ?? []).length > 0;
	return t === "switcher" ? "switcher" : t === "checkbox" ? "toggle" : t === "select" || n ? "select" : "input";
}, cf = (e, t, n) => e === tf || !af(e) ? "col-span-2" : t === n ? "col-span-1" : "col-span-2", lf = (e, t, n) => e === tf || !af(e) ? 2 : t === n ? 1 : 2, uf = (e) => {
	let t = (e ?? []).filter(of);
	if (t.length === 0) return 0;
	let n = t.some((e) => e.id === rf), r = t.some((e) => e.id === nf), i = 0, a = 0;
	for (let e of t) {
		let t = lf(e.id, n, r);
		a + t > 2 && (i += 1, a = 0), a += t, a === 2 && (i += 1, a = 0);
	}
	return a > 0 && (i += 1), i;
}, df = (e) => e.label?.trim() || e.id, ff = () => void 0, pf = (e) => Array.isArray(e), mf = (e) => Array.isArray(e), hf = (e) => {
	if (pf(e)) {
		let t = e.filter(of);
		return t.length > 0 ? t : null;
	}
	return of(e) ? e : null;
}, gf = (e) => (e.options ?? []).map((t, n) => ({
	value: t.value || `${e.id}-${String(n)}`,
	label: t.label || t.value || `Option ${String(n + 1)}`
})), _f = (e) => {
	let t = sf(e), n = df(e);
	if (t === "select") return /* @__PURE__ */ Q(se, {
		skeleton: !0,
		label: n,
		reserveMessageSpace: e.reserveMessageSpace === !0,
		children: gf(e).map((e) => /* @__PURE__ */ Q("option", {
			value: e.value,
			children: e.label
		}, e.value))
	});
	if (t === "switcher") {
		let t = gf(e);
		return /* @__PURE__ */ Q(ee, {
			skeleton: !0,
			ariaLabel: n,
			value: t[0]?.value ?? e.id,
			onChange: ff,
			options: t.length > 0 ? t : [{
				value: e.id,
				label: n
			}]
		});
	}
	return t === "toggle" ? /* @__PURE__ */ Q(fe, {
		skeleton: !0,
		label: n,
		reserveMessageSpace: e.reserveMessageSpace === !0
	}) : /* @__PURE__ */ Q(ie, {
		skeleton: !0,
		label: n,
		placeholder: e.placeholder,
		inputClassName: e.id === "csc" ? "[&_[data-slot=skeleton]]:max-w-[4ch]" : void 0,
		reserveMessageSpace: e.reserveMessageSpace === !0
	});
}, vf = (e, t, n) => /* @__PURE__ */ Q("div", {
	"data-slot": "hosted-fields-layout-skeleton-item",
	"data-field-id": e.id,
	className: H("flex w-full min-w-0 flex-col whitespace-nowrap overflow-hidden", cf(e.id, t, n)),
	children: _f(e)
}, e.id), yf = (e) => {
	switch (e.id) {
		case "expiryDate": return "w-3/5";
		case "csc": return "w-[4ch]";
		default: return "w-4/5";
	}
};
function bf({ fields: e, className: t }) {
	let n = e.map(hf).filter((e) => e !== null), r = n.flatMap((e) => mf(e) ? e : [e]), i = n.some((e) => mf(e) && e.length > 1), a = r.some((e) => e.id === "csc"), o = r.some((e) => e.id === "expiryDate");
	return /* @__PURE__ */ Q("div", {
		"aria-hidden": "true",
		"data-slot": "hosted-fields-layout-skeleton",
		"data-state": "loading",
		className: H("box-border flex h-full w-full min-w-0 flex-col overflow-hidden", t),
		children: /* @__PURE__ */ Q("div", {
			className: H("relative z-10 grid min-w-0 grid-cols-2 items-start gap-x-2 gap-y-1", i ? "p-[var(--pc-size-input-focus-ring,3px)]" : "p-1"),
			children: n.map((e) => {
				if (!mf(e)) return vf(e, a, o);
				if (e.length === 1) return vf(e[0], a, o);
				let t = e.map((e) => e.id).join("-");
				return /* @__PURE__ */ Q("div", {
					"data-slot": "hosted-fields-layout-skeleton-item",
					"data-field-group-id": t,
					className: "col-span-2 flex w-full min-w-0 flex-col overflow-hidden whitespace-nowrap",
					children: /* @__PURE__ */ Q(N, {
						label: df(e[0]),
						itemClassName: "[&:first-child]:flex-[1.7_1_10rem] [&:not(:first-child)]:flex-[0.7_1_4.25rem]",
						reserveMessageSpace: !0,
						children: e.map((e) => /* @__PURE__ */ Q("div", {
							"data-slot": "hosted-fields-grouped-skeleton-control",
							"data-field-id": e.id,
							className: "flex min-h-[var(--pc-size-input-height,2.25rem)] w-full min-w-0 items-center",
							children: /* @__PURE__ */ Q(Se, { className: H("h-3.5 rounded-full translate-y-0.5", "[background:color-mix(in_srgb,var(--pc-color-input-text,var(--pc-color-text))_32%,var(--pc-color-input-background,var(--pc-color-surface)))]", yf(e)) })
						}, e.id))
					})
				}, t);
			})
		})
	});
}
//#endregion
//#region src/components/SuggestedAmountButtons.tsx
var xf = (e) => `repeat(${String(Math.min(e, 4))}, minmax(0, 1fr))`, Sf = H("[--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]"), Cf = H("[--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]");
function wf({ suggestions: e, activeSuggestion: t, onSelect: n, formatLabel: r, amountLimits: i, isSuggestionSupported: a, size: o = "xs", disabled: s = !1, className: c, style: l }) {
	let u = nt(), d = K((e) => {
		e.preventDefault();
	}, []), f = r ?? ((e) => e), p = Xe();
	if (e.length === 0) return null;
	let m = {
		...l,
		gridTemplateColumns: xf(e.length)
	};
	return /* @__PURE__ */ Q("div", {
		id: u.id("amount-suggestions"),
		style: m,
		className: H(u.className("amount-suggestions"), "text-center", "gap-1 @sm:gap-2", "grid", c),
		children: e.map((e) => {
			let r = p(e), c = e === t, l = s || (a ? !a(e) : !Rt(e, { limits: i }).isValid);
			return /* @__PURE__ */ Q(Pt, {
				id: u.id("amount-suggestion", { slug: r }),
				variant: c ? "secondary" : "neutral",
				size: o,
				disabled: l,
				className: H(c ? Cf : Sf, "min-w-0 w-full"),
				onMouseDown: d,
				onClick: () => {
					n(e);
				},
				label: f(e)
			}, `cashier-amount-suggestion-${r}`);
		})
	});
}
//#endregion
//#region src/lib/hostedFields.ts
var Tf = /* @__PURE__ */ function(e) {
	return e.INIT = "INIT", e.TOKENIZE = "TOKENIZE", e.LAYOUT = "HF_LAYOUT", e.FORM_DATA = "HF_FORM_DATA", e.FORM_STATE = "HF_FORM_STATE", e.CARD_BRAND = "HF_CARD_BRAND", e.AUTO_FOCUS_NEXT = "HF_AUTO_FOCUS_NEXT", e.CAPABILITIES = "HF_CAPABILITIES", e.READY = "HF_READY", e.ERROR = "HF_ERROR", e.RESET = "RESET", e;
}({}), Ef = 5, Df = (e) => ({
	groupedCardInputs: e?.groupedCardInputs === !0,
	fieldOverrides: e?.fieldOverrides === !0,
	expiryDateValidation: e?.expiryDateValidation === !0
}), Of = "hosted_fields.title", kf = Object.freeze(["allow-scripts", "allow-same-origin"]), Af = "error.hosted_fields_error_received", jf = 5e3, Mf = 250, Nf = 3e4, Pf = 20, Ff = 120, If = Object.freeze({
	border: "0",
	width: "100%",
	height: "100%",
	display: "block",
	backgroundColor: "transparent",
	colorScheme: "normal"
}), Lf = "hf-merchant-fonts", Rf = "--hf-font-family", zf = [
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Helvetica Neue'",
	"sans-serif"
].join(", "), Bf = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !(typeof t.type != "string" || !Object.values(Tf).includes(t.type));
}, Vf = (e) => {
	let t = e.document ?? (typeof document < "u" ? document : void 0);
	if (!t) throw Error("createHostedFieldsIframe requires a Document instance.");
	let n = t.createElement("iframe");
	n.title = d(e.title) ?? "hosted_fields.title", e.ariaLabel && n.setAttribute("aria-label", e.ariaLabel), n.name = e.name ?? "cashier-hosted-fields", e.className && (n.className = e.className);
	let r = kf.join(" ");
	r && n.setAttribute("sandbox", r);
	let i = d(e.allow);
	i && n.setAttribute("allow", i), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), n.setAttribute("src", e.src), n.setAttribute("loading", "eager");
	let a = {
		...If,
		...e.styles ?? {}
	};
	if (Object.assign(n.style, a), n.setAttribute("frameborder", "0"), e.attributes) for (let [t, r] of Object.entries(e.attributes)) r != null && n.setAttribute(t, String(r));
	return n;
}, Hf = (e, t, n) => {
	let r = n ?? e.getAttribute("src") ?? e.src, i = d(r) ?? "";
	if (i.length === 0) throw Error("Hosted fields iframe requires a target origin. Set controller.targetOrigin or iframe src.");
	if (i === "*") throw Error("Hosted fields target origin cannot be a wildcard (*).");
	let a;
	try {
		a = new URL(i, t.location.href);
	} catch {
		throw Error(`Invalid hosted fields target origin: ${i}`);
	}
	if (!a.protocol || a.origin === "null") throw Error(`Hosted fields target origin must resolve to a valid origin. Received: ${i}`);
	return a.origin;
}, Uf = (e) => {
	let { container: t, iframe: n } = e, r = n.document ?? t.ownerDocument, i = Vf({
		...n,
		document: r
	}), a = r.defaultView ?? void 0, o = i.getAttribute("src") ?? n.src;
	i.removeAttribute("src");
	let s = Wf({
		iframe: i,
		targetOrigin: e.controller?.targetOrigin ?? o,
		win: e.controller?.win ?? a,
		onStartupStalled: e.controller?.onStartupStalled
	});
	t.firstChild && t.replaceChildren(), t.appendChild(i), i.setAttribute("src", o);
	let c = !1;
	return {
		iframe: i,
		controller: s,
		destroy: () => {
			c || (c = !0, s.destroy(), i.parentNode === t && t.removeChild(i));
		}
	};
}, Wf = (e) => {
	let { iframe: t } = e, n = e.win ?? (typeof window < "u" ? window : void 0);
	if (!n) throw Error("Hosted fields controller requires a Window instance.");
	let r = Hf(t, n, e.targetOrigin), i = {}, a = !1, o = !1, s = !1, c = !1, l = 0, u = null, f = null, p = {}, m = null, h = null, g = null, _ = null, v = 0, y = !1, b = !1, x = !1, S = null, C = (e) => {
		S &&= (n.clearTimeout(S.timeoutId), e && S.reject(e), null);
	}, w = (e) => {
		if (a) return;
		let n = t.contentWindow;
		n && n.postMessage(e, r);
	}, T = (e) => {
		if (!o && !e?.force || !m || P()?.URL === "about:blank") return;
		let { fields: t, debugMode: n, fonts: r, uiTheme: i, css: a, autoFocusNextField: s, pciTenantId: c, uiGroupCardInputs: l } = m, u = {
			type: "INIT",
			protocolVersion: m.protocolVersion ?? Ef,
			debugMode: !!n,
			fields: t ?? void 0,
			autoFocusNextField: s,
			fonts: r ?? void 0,
			theme: i ?? void 0,
			css: a ?? void 0,
			tenantId: c,
			...l === void 0 ? {} : { uiGroupCardInputs: l }
		}, d = JSON.stringify(u);
		(e?.bypassSignature || g !== d) && (g = d, w(u));
	}, E = () => {
		_ &&= (n.clearTimeout(_), null), v = 0;
	}, D = () => {
		if (a || !m || u || b) return;
		b = !0;
		let t = l;
		e.onStartupStalled?.(() => !a && t === l && m !== null && u === null);
	}, O = () => {
		l += 1, E(), C(/* @__PURE__ */ Error("Hosted fields document reloaded before response.")), o = !1, s = !1, g = null, u = null, f = null, p = {}, x = !1, b = !1, i.onLoading?.("navigation");
	}, k = () => {
		let e = t.getAttribute("src");
		if (y || !t.isConnected || P()?.URL !== "about:blank" || !e) return !1;
		try {
			if (new URL(e, n.location.href).origin !== r) return !1;
		} catch {
			return !1;
		}
		return y = !0, O(), c = !1, t.setAttribute("src", e), A(), !0;
	}, A = () => {
		if (!m || u || _) return;
		v = s ? Pf : Ff;
		let e = () => {
			if (_ = null, !m || u) v = 0;
			else if (v <= 0) {
				if (k()) return;
				x ? _ = n.setTimeout(() => {
					_ = null, D();
				}, Nf) : D();
			} else T({
				force: !0,
				bypassSignature: !0
			}), --v, _ = n.setTimeout(e, Mf);
		};
		_ = n.setTimeout(e, Mf);
	}, ee = () => {
		o || (o = !0, i.onReady?.());
	}, te = () => {
		s || (s = !0, v = Pf);
	}, ne = () => {
		te(), ee(), g = null, T({ force: !0 }), A();
	}, j = () => {
		P()?.URL !== "about:blank" && (c && O(), c = !0, te(), u || (g = null), T({ force: !0 }), A());
	}, M = (e) => {
		if (!S) return;
		if (!e) {
			C(/* @__PURE__ */ Error("No form data received from hosted fields iframe."));
			return;
		}
		let { resolve: t } = S;
		C(), t(e);
	}, re = (e) => {
		if (!S) {
			u || D();
			return;
		}
		let t = d(e.message) ?? Af;
		C(Error(t));
	}, N = (e) => {
		p = Df(e.capabilities), i.onCapabilities?.(p, e);
	}, P = () => {
		try {
			let e = t.contentWindow?.document;
			return e?.URL, e ?? null;
		} catch {
			return null;
		}
	}, F = (e) => {
		let t = P();
		t && tp(e.fonts, { document: t }), i.onInit?.(e.fonts, e);
	}, I = (e) => {
		if (e.source !== t.contentWindow || e.origin !== r || !Bf(e.data)) return;
		let n = e.data;
		x = !0, n.type === "INIT" && F(n), n.type === "HF_READY" && ne(), n.type === "HF_CAPABILITIES" && N(n), n.type === "HF_LAYOUT" && n.layout && Number.isFinite(n.layout.containerHeight) && n.layout.containerHeight > 0 && (E(), ee(), u = n.layout, i.onLayout?.(n.layout, n)), n.type === "HF_FORM_DATA" && M(n.formData), n.type === "HF_FORM_STATE" && (f = n.formState ?? null), n.type === "HF_ERROR" && re(n), i.onMessage?.(n);
	};
	return n.addEventListener("message", I), t.addEventListener("load", j), {
		configure: (e) => {
			if (a) return;
			let t = e ? {
				debugMode: e.debugMode,
				fields: e.fields ?? null,
				fonts: e.fonts ?? null,
				uiTheme: e.uiTheme ?? null,
				css: e.css ?? null,
				protocolVersion: e.protocolVersion,
				pciTenantId: e.pciTenantId,
				autoFocusNextField: e.autoFocusNextField,
				uiGroupCardInputs: e.uiGroupCardInputs
			} : null, n = JSON.stringify(t);
			if (n === h) return;
			let r = (e) => JSON.stringify(e, (e, t) => e === "groupLabel" ? void 0 : t), c = u !== null && r(m?.fields) === r(t?.fields) && m?.pciTenantId === t?.pciTenantId && m?.protocolVersion === t?.protocolVersion;
			if (l += 1, h = n, m = t, b = !1, E(), g = null, !c) {
				let e = u !== null;
				u = null, e && (o = !1, i.onLoading?.("configuration"));
			}
			m && (T({ force: s && !o }), A());
		},
		tokenize: (e) => {
			if (a) return Promise.reject(/* @__PURE__ */ Error("Hosted fields controller destroyed before response."));
			if (!o) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe is not ready."));
			if (S) return Promise.reject(/* @__PURE__ */ Error("Hosted fields tokenization already pending."));
			if (!t.contentWindow) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe window unavailable."));
			let r = e?.timeoutMs ?? jf;
			return new Promise((t, i) => {
				S = {
					resolve: t,
					reject: i,
					timeoutId: n.setTimeout(() => {
						S = null, i(/* @__PURE__ */ Error("No response from hosted fields iframe."));
					}, r)
				}, w({
					type: "TOKENIZE",
					saveAccount: e?.saveAccount
				});
			});
		},
		destroy: () => {
			a || (a = !0, o = !1, C(/* @__PURE__ */ Error("Hosted fields controller destroyed before response.")), n.removeEventListener("message", I), t.removeEventListener("load", j), E(), i = {}, m = null, u = null, f = null);
		},
		setCallbacks: (e) => {
			a || (i = e ?? {});
		},
		isReady: () => o,
		getLastLayout: () => u,
		getLastFormState: () => f,
		getCapabilities: () => p,
		reset: () => {
			f = null, w({ type: "RESET" });
		}
	};
}, Gf = /* @__PURE__ */ new Set([
	"woff2",
	"woff",
	"truetype",
	"opentype"
]), Kf = /* @__PURE__ */ new Set([
	"auto",
	"block",
	"swap",
	"fallback",
	"optional"
]), qf = (e) => {
	let t = e.split(h)[0]?.toLowerCase() ?? "";
	if (t.endsWith(".woff2")) return "woff2";
	if (t.endsWith(".woff")) return "woff";
	if (t.endsWith(".ttf") || t.endsWith(".ttc")) return "truetype";
	if (t.endsWith(".otf")) return "opentype";
	if (t.startsWith("data:font/woff2")) return "woff2";
	if (t.startsWith("data:font/woff")) return "woff";
	if (t.startsWith("data:font/ttf") || t.startsWith("data:font/truetype")) return "truetype";
	if (t.startsWith("data:font/otf") || t.startsWith("data:font/opentype")) return "opentype";
}, Jf = (e) => {
	if (!e) return null;
	let t = d(e);
	return t && (s.test(t) || b.test(t)) ? t : null;
}, Yf = (e) => {
	if (e) return Gf.has(e) ? e : void 0;
}, Xf = (e) => e && Kf.has(e) ? e : "swap", Zf = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let e = d(n.family) ?? "";
		if (!e) continue;
		let r = [];
		for (let e of n.sources) {
			let t = Jf(e.url);
			if (!t) continue;
			let n = Yf(e.format) ?? qf(t);
			r.push({
				url: t,
				format: n,
				weight: e.weight,
				style: e.style === "italic" ? "italic" : "normal",
				display: Xf(e.display)
			});
		}
		r.length !== 0 && t.push({
			family: e,
			sources: r
		});
	}
	return t;
}, Qf = (e) => {
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
}, $f = (e) => {
	let t = e.getElementById(Lf);
	t?.parentNode && t.parentNode.removeChild(t);
}, ep = (e, t) => {
	let n = e.documentElement;
	if (t.length === 0) {
		n.style.setProperty(Rf, zf);
		return;
	}
	let r = [Array.from(new Set(t.map((e) => e.family))).map((e) => JSON.stringify(e)).join(", "), zf].join(", ");
	n.style.setProperty(Rf, r);
}, tp = (e, t) => {
	let n = null;
	if (t?.document) n = t.document;
	else {
		let e = globalThis.document;
		e && (n = e);
	}
	if (!n) return;
	$f(n);
	let r = Zf(e);
	if (ep(n, r), r.length === 0) return;
	let i = n.getElementsByTagName("head").item(0);
	if (!i) return;
	let a = Qf(r);
	if (!a) return;
	let o = n.createElement("style");
	o.id = Lf, o.append(n.createTextNode(a)), i.appendChild(o);
}, np = "--hf-font-family", rp = [
	"background",
	"text",
	"placeholder",
	"label-text"
], ip = new Set(rp.map((e) => `--pc-color-input-${e}`)), ap = /* @__PURE__ */ new Set([
	...ip,
	"--pc-color-input-background-hover",
	"--pc-color-input-background-active",
	"--pc-color-input-focus-border",
	"--pc-color-input-focus-ring",
	"--pc-color-input-disabled-background",
	"--pc-color-input-disabled-text",
	"--pc-color-input-readonly-background",
	"--pc-color-input-readonly-text",
	"--pc-color-input-autofill-text"
]), op = (e) => {
	let t = e?.closest(".pc-ui__credit-card-panel"), n = e?.ownerDocument.defaultView;
	if (!e || !t?.dataset.pcInputContext || !n) return;
	let r = new Set(t.dataset.pcInputContext.split(" ")), i = n.getComputedStyle(t), a = n.getComputedStyle(e), o = {
		overrides: {},
		defaults: {}
	};
	for (let e of rp) {
		if (!r.has(e)) continue;
		let t = `--pc-color-input-${e}`, n = a.getPropertyValue(t).trim();
		if (!n || n.includes("var(--pc-color-credit-card-panel-")) continue;
		let s = i.getPropertyValue(`--pc-color-credit-card-panel-input-${e}`).trim() ? o.overrides : o.defaults;
		s[t] = n;
	}
	let s = [...r.has("background") ? [
		"background-hover",
		"background-active",
		"disabled-background",
		"readonly-background"
	] : [], ...r.has("text") ? [
		"focus-border",
		"focus-ring",
		"disabled-text",
		"readonly-text",
		"autofill-text"
	] : []];
	for (let e of s) {
		let t = `--pc-color-input-${e}`, n = a.getPropertyValue(t).trim();
		n && !n.includes("var(--pc-color-credit-card-panel-") && (o.defaults[t] = n);
	}
	return o;
}, sp = /* @__PURE__ */ new Set([
	"--pc-color-input-error-text",
	"--pc-color-input-helper-text",
	"--pc-color-input-label-text",
	"--pc-color-input-invalid-background",
	"--pc-color-input-invalid-background-hover",
	"--pc-color-input-invalid-border",
	"--pc-color-input-invalid-focus-ring",
	"--pc-opacity-input-invalid-background"
]), cp = /* @__PURE__ */ RegExp("^(?:--pc-(?:color|space|size|radius|shadow|font|motion|opacity|z)-input(?:-|$)|--pc-font-(?:size|line-height)-input$)", "u"), lp = (e) => {
	if (typeof e == "string") return e.trim() || void 0;
}, up = (e) => {
	if (!e) return;
	let t = e;
	return lp(t.fontFamily) ?? lp(t[np]) ?? lp(t["hf-font-family"]);
}, dp = (e) => {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!n.startsWith("--pc-") || sp.has(n)) continue;
		if (typeof r == "number") {
			t[n] = r;
			continue;
		}
		if (typeof r != "string") continue;
		let e = r.trim();
		e && (t[n] = e);
	}
	return t;
}, fp = (e) => e.startsWith("--pc-") ? e : e.startsWith("pc-") ? `--${e}` : null, pp = (e) => typeof e == "number" || typeof e == "string" && e.trim().length > 0, mp = (e, t, n) => {
	let r = {}, i = {}, a = up(t);
	if (t) for (let [e, n] of Object.entries(t)) {
		let t = fp(e);
		t && pp(n) && (i[t] = n);
	}
	let o = t;
	if (o?.variables) for (let [e, t] of Object.entries(o.variables)) {
		let n = fp(e);
		n && pp(t) && (i[n] = t);
	}
	Object.assign(r, i), Object.assign(r, dp(e?.()));
	for (let [e, t] of Object.entries(i)) cp.test(e) && (r[e] = t);
	for (let [e, t] of Object.entries(n?.defaults ?? {})) ap.has(e) && !(e in i) && pp(t) && (r[e] = t);
	for (let [e, t] of Object.entries(n?.overrides ?? {})) ip.has(e) && pp(t) && (r[e] = t);
	return a && (r[np] = a), r;
}, hp = (e, t) => {
	if (e) for (let n = 0; n < e.length; n += 1) {
		let r = e.item(n);
		r.startsWith("--pc-") && t.add(r);
	}
}, gp = (e, t) => {
	"style" in e && hp(e.style, t), "cssRules" in e && _p(e.cssRules, t);
}, _p = (e, t) => {
	if (e) for (let n of Array.from(e)) gp(n, t);
}, vp = (e, t) => {
	for (let n of Array.from(e.styleSheets)) try {
		_p(n.cssRules, t);
	} catch {}
}, yp = (e) => {
	let t = e?.ownerDocument.defaultView;
	if (!e || !t) return;
	let n = t.getComputedStyle(e), r = /* @__PURE__ */ new Set();
	hp(n, r), hp(e.ownerDocument.documentElement.style, r), hp(e.style, r), vp(e.ownerDocument, r);
	let i = {};
	for (let e of r) {
		let t = d(n.getPropertyValue(e));
		t && (i[e] = t);
	}
	return i;
}, bp = "/logos/payment-types/", xp = "/assets/payment-type-logos/", Sp = (e) => e.replace(/\/+$/, ""), Cp = (e, t, n) => {
	let r = t?.trim();
	if (r) try {
		let t = new URL(r);
		return !t.pathname.endsWith(xp) && !t.pathname.endsWith(bp) ? void 0 : (t.pathname = `${bp}${n === "dark" ? `${e}-dark.svg` : `${e}.svg`}`, t.search = "", t.hash = "", t.toString());
	} catch {
		return;
	}
}, wp = (e, t) => {
	if (!e) return;
	let n = t?.trim(), r = n ? {
		default: Cp(e, n, "default") ?? `${Sp(n)}/${e}.svg`,
		dark: Cp(e, n, "dark") ?? `${Sp(n)}/${e}-dark.svg`
	} : void 0;
	return {
		brand: e,
		theme: ht(e),
		logo: r
	};
}, Tp = {
	form: "quick-payment-form-surface",
	"field-panel": "quick-payment-form-field-panel"
};
function Ep({ children: e, active: t = !0, kind: n, chrome: r = "contained", fieldEdgeSpacing: i = "default", animateEntrance: a = !1 }) {
	let o = nt(), s = Tp[n], c = t ? o.attrs(s) : void 0, l = H(c?.className, "w-full min-w-0");
	return n === "form" && (!t || r === "plain") ? /* @__PURE__ */ Q("div", {
		"data-slot": t ? s : void 0,
		"data-pc-slot": c?.["data-pc-slot"],
		"data-pc-slug": c?.["data-pc-slug"],
		"data-pc-part": c?.["data-pc-part"],
		className: t ? H(l, "overflow-visible") : "contents",
		children: e
	}) : /* @__PURE__ */ Q(Et, {
		as: "div",
		size: "lg",
		"data-slot": t ? s : void 0,
		"data-pc-slot": c?.["data-pc-slot"],
		"data-pc-slug": c?.["data-pc-slug"],
		"data-pc-part": c?.["data-pc-part"],
		dataTheme: t && r === "contained" ? "neutral" : void 0,
		inheritTheme: !t || r === "plain",
		chrome: t && r === "contained",
		spacing: !t || r === "plain" ? "flush" : "default",
		inset: t && i === "balanced" ? "block-end" : void 0,
		insetSize: t && i === "balanced" ? "xs" : void 0,
		className: H(t ? l : "!contents", t && r === "plain" && "overflow-visible", n === "form" && "mt-0", a && "pc-enter-panel"),
		children: e
	});
}
//#endregion
//#region src/components/hostedFieldsExitFocus.ts
var Dp = /* @__PURE__ */ new Set([
	"button",
	"checkbox",
	"color",
	"file",
	"hidden",
	"image",
	"radio",
	"range",
	"reset",
	"submit"
]), Op = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&"), kp = (e) => {
	let t = e?.id;
	return typeof t == "string" && t.length > 0 ? t : null;
}, Ap = ({ cardLayoutDetailsField: e, cardLayoutFooterField: t, fieldsAfterHosted: n = [] }) => kp(e) || kp(t) || kp(n[0]), jp = (e) => e instanceof HTMLTextAreaElement ? !e.disabled && !e.readOnly : e instanceof HTMLInputElement && !e.disabled && !e.readOnly && !Dp.has(e.type.toLowerCase()), Mp = (e, t = document) => {
	if (!e) return !1;
	let n = Op(e), r = t.querySelector(`[name="${n}"]`);
	return jp(r) ? (r.focus(), t.activeElement === r) : !1;
}, Np = /* @__PURE__ */ new Set(["display", "qrcode"]), Pp = (e) => ({
	name: e.name,
	type: e.type,
	typeId: e.typeId,
	method: e.method,
	...e.accountId ? { accountId: e.accountId } : {},
	...e.service ? { service: e.service } : {}
}), Fp = (e, t) => !!e.id && !e.hidden && Tt(e, t).visible, Ip = (e, t) => Np.has(e.type ?? "") ? e.defaultValue ?? "" : t[e.id ?? ""] ?? "", Lp = ({ errors: e, field: t, initialValues: n, value: r }) => {
	let i = t.id ?? "", a = Np.has(t.type ?? ""), o = !!t.validation?.required?.value, s = a || !vt(e[i]);
	return {
		type: t.type ?? "text",
		readOnly: a,
		required: o,
		dirty: !a && r !== n[i],
		valid: s,
		complete: a || s && (!o || ot(r))
	};
}, Rp = ({ amount: e, bonusCode: t, canSubmit: n, complete: r, currency: i, dirty: a, errors: o, fields: s, hostedFields: c, initialValues: l, method: u, paymentType: d, submitting: f, valid: p, values: m }) => {
	if (dt(s, m).length > 0) return null;
	let h = {}, g = {};
	for (let e of s) {
		let t = e.id;
		if (!t || !Fp(e, m)) continue;
		let n = Ip(e, m);
		h[t] = n, g[t] = Lp({
			errors: o,
			field: e,
			initialValues: l,
			value: n
		});
	}
	return {
		amount: e,
		currency: i,
		method: u,
		paymentType: Pp(d),
		bonusCode: t,
		values: h,
		fields: g,
		hostedFields: c ? { ...c } : null,
		dirty: a,
		valid: p,
		complete: r,
		submitting: f,
		canSubmit: n
	};
}, zp = 200, Bp = 2, Vp = 50, Hp = 1, Up = [], Wp = /* @__PURE__ */ new WeakMap(), Gp = (e) => e ? e.isComplete === void 0 ? e.dirty === void 0 ? !!e.isValid : !!(e.isValid && e.dirty) : e.isComplete : !1, Kp = async (e) => {
	if (!e.current) return !0;
	let t = await e.current.validateForm();
	return !vt(t);
}, qp = (e, t) => t.reduce((t, n) => {
	let r = n.id;
	return !r || !Object.prototype.hasOwnProperty.call(e, r) || (t[r] = e[r]), t;
}, {}), Jp = [], Yp = Df(), Xp = "pan", Zp = "expiryDate", Qp = "csc", $p = "amount", em = (e) => (e ?? []).some((e) => e.id === $p), tm = (e, t) => {
	let n = [...e ?? Up];
	return t ? n.filter((e) => e.id !== $p) : n;
}, nm = "field.card.pan.luhn_invalid", rm = "field.card.label", im = tt(mt, "gap-y-1"), am = "mt-1", om = "mt-3", sm = "mt-0", cm = "pointer-events-none absolute right-0 bottom-[calc(var(--pc-panel-edge-inset,0px)+var(--pc-panel-extra-inset,0px))] flex justify-end", lm = "calc(var(--pc-size-input-height,2.25rem) + var(--pc-space-input-label-gap,0.25rem) + var(--pc-space-input-label-gap,0.25rem) + 2.5rem + 2px + var(--pc-size-input-focus-ring,3px) + var(--pc-size-input-focus-ring,3px))", um = /* @__PURE__ */ new Set([
	Xp,
	Zp,
	Qp
]), dm = (e) => typeof e.id == "string" && um.has(e.id), fm = (e) => (e ?? []).filter(dm).length > 1, pm = (e) => e?.type === "checkbox", mm = (e) => e?.luhn ? e : {
	...e ?? {},
	luhn: {
		value: !0,
		invalidMessage: nm,
		invalidMessageKeys: [nm]
	}
}, hm = (e, t, n, r = {}) => {
	let i = n(e.labelKeys ?? e.label), a = e.placeholder ? t(e.placeholder) : void 0, o = e.id === Xp ? mm(e.validation) : e.validation, { overrides: s, ...c } = e, l = r.includeOverrides ? Vt(s, n) : void 0, u = Xt(o, n), d = e.id === Zp && !r.includeExpiryDateValidation && u?.expiryDate ? (() => {
		let { expiryDate: e, ...t } = u;
		return Object.keys(t).length > 0 ? t : void 0;
	})() : u;
	return {
		...c,
		label: i,
		...a ? { placeholder: a } : {},
		reserveMessageSpace: r.reserveMessageSpace ?? !1,
		validation: d,
		...l ? { overrides: l } : {}
	};
}, gm = (e, t) => {
	if (!fm(e)) return [...e];
	let n = e.filter(dm).map((e, n) => n === 0 ? {
		...e,
		label: t,
		ariaLabel: e.label
	} : e), r = !1;
	return e.reduce((e, t) => dm(t) ? (r ||= (e.push(n), !0), e) : (e.push(t), e), []);
}, _m = "Secure card fields are temporarily unavailable", vm = "We couldn't verify your card details.", ym = /* @__PURE__ */ new Set([
	"error.hosted_fields_not_ready",
	"Hosted fields iframe is not ready.",
	"Hosted fields iframe window unavailable.",
	"Hosted fields controller destroyed before response."
]), bm = /* @__PURE__ */ new Set([
	"error.hosted_fields_error_received",
	"Hosted fields tokenization already pending.",
	"No response from hosted fields iframe.",
	"No form data received from hosted fields iframe."
]), xm = (e, t, n) => n(d(e) ?? d(t)), Sm = (e) => {
	let t = d(e);
	return !t || bm.has(t) ? vm : ym.has(t) ? _m : t;
}, Cm = (e) => {
	let t = lu.generate[e];
	return [{
		value: t ? t() : lu.valid[e],
		label: "Valid"
	}, {
		value: lu.invalid[e],
		label: "Invalid"
	}].filter(({ value: e }) => e === void 0 ? !1 : typeof e != "string" || e.length > 0).map(({ value: e, label: t }) => ({
		value: e,
		label: t
	}));
}, wm = (e) => Cm(e).length > 0, Tm = (e, t) => {
	let n = d(e);
	if (!n) return null;
	try {
		let e = t ? new URL(n, t) : new URL(n);
		if (e.protocol !== "http:" && e.protocol !== "https:" || e.origin === "null") return null;
		let r = e.pathname || "/", i = r.lastIndexOf("/");
		return e.pathname = i >= 0 ? r.slice(0, i + 1) : "/", e.search = "", e.hash = "", e.toString();
	} catch {
		return null;
	}
}, Em = (e) => {
	if (e.length === 0) return;
	let t = typeof window < "u" ? window.location.href : void 0;
	for (let n of e) {
		let e = n.logo;
		if (e) {
			if (typeof e == "string") {
				let n = Tm(e, t);
				if (n) return n;
			} else if (!(typeof e != "object" || Array.isArray(e))) for (let n of Object.values(e)) {
				if (typeof n != "string") continue;
				let e = Tm(n, t);
				if (e) return e;
			}
		}
	}
}, Dm = {
	field: 86,
	gap: 4,
	padding: 8,
	min: 160
}, Om = [
	"var(--pc-size-input-height,2.25rem)",
	"2px",
	"2.5rem",
	"var(--pc-space-input-label-gap,0.25rem)",
	"var(--pc-space-input-label-gap,0.25rem)"
], km = (e) => {
	let t = Math.max(1, e), n = Array.from({ length: t }, () => Om).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(Dm.gap)}px`);
	return n.push(`${String(Dm.padding)}px`), `calc(${n.join(" + ")})`;
}, Am = (e) => {
	let t = Math.max(1, e);
	if (t === 1) return lm;
	let n = Array.from({ length: t }, () => Om).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(Dm.gap)}px`);
	return n.push("var(--pc-size-input-focus-ring,3px)", "var(--pc-size-input-focus-ring,3px)"), `calc(${n.join(" + ")})`;
}, jm = 180, Mm = "saveAccount", Nm = "card", Pm = /* @__PURE__ */ new Set([
	"holderName",
	"accountHolder",
	"cardholderName"
]), Fm = "brandless", Im = ".pc-hosted-fields__root", Lm = /* @__PURE__ */ new Set([
	"--pc-size-input-focus-ring",
	"--pc-size-input-height",
	"--pc-space-input-label-gap"
]);
function Rm({ id: e, onActionsChange: t, onPromptStateChange: n, onPreparedValues: r, onValuesChange: a, renderMode: o = "form", hideAmountField: s = !1, presentedAmountError: l, amountValueOverride: u, renderAfterAmountField: h, valueOverrides: g, requireDirtyBeforeSubmit: y = !0, comboViewLayout: b = !1, comboViewSurfaceChrome: x = "contained", formSurfaceChrome: S = "plain", fieldPanelMode: C = "auto", reserveTrailingActionSpace: w = !1, animateEntrance: T = !0, observePublicState: E = !0, onPaymentSubmitted: D }) {
	let O = nt(), k = q(Ht), ee = i(k), te = Ie(), j = te?.attempt, { debug: M, method: re, initialAmount: N, lockAmount: P, currency: F, locale: ie, merchantId: ae, userId: L, user: R, hostedFieldsUrl: oe, sessionId: se, hostedFieldsFonts: le, hostedFieldsAutoFocusNextField: ue, uiGroupCardInputs: fe, uiTheme: pe, uiThemeCssText: me, uiCardBrand: _e, uiSuggestAmounts: ye, uiComboView: be, uiBonuses: xe, extraAttributes: Se, hostRiskContext: Ce, returnUrl: Te, selectedBonusCode: Ee, setCashierState: De } = q(Ht), Oe = oe || "https://hf.pvault.net", { translateKey: B, translateKeys: Ae, resolveTextKey: je } = st(), { formatCurrencyValue: Me, formatDisplayValue: Ne } = Je(), Pe = K((e) => Tn(e, F, ie, k.currencyFormatOptions), [
		F,
		ie,
		k.currencyFormatOptions
	]), Le = Y(() => d(v(ie)), [ie]), Re = Y(() => Le ? [Le] : void 0, [Le]), Be = Y(() => B(Of), [B]), { getPaymentType: Ue, paymentTypesList: V, pciTenantId: Ge } = ze(), { getAvailableBonusesForPaymentType: Ke } = lt(), qe = Y(() => Em(V), [V]), Ye = pe ? "neutral" : void 0, [Xe, Ze] = Z(null), Qe = ft(Xe) === "dark" ? "secondary" : "secondary-tinted", $e = ke(), U = Ue(e), W = $e && bn(U) ? $e : null, tt = pn(W?.subscribe ?? (() => () => void 0), W?.getSnapshot ?? (() => null), W?.getSnapshot ?? (() => null)), rt = !!r, at = W && U ? ge(U) : U, ct = Y(() => ({
		sharedRuntime: $e,
		selectionBinding: at,
		preparesFollowingStep: rt
	}), [
		$e,
		at,
		rt
	]), ut = K(() => {
		if (!$e || !at) return;
		let e = typeof at == "string" ? at : ge(at);
		if (W) {
			let t = Wp.get($e);
			if (!t?.delete(ct) || (t.size || Wp.delete($e), [...t.values()].includes(e))) return;
		}
		if (!$e.ownsSelection(e)) return;
		let t = $e.getSnapshot();
		t.phase === "collecting" && !(rt && t.presentation.screen === "paymentConfirmation") && $e.dispatch({
			type: "go-back",
			instanceId: t.instanceId
		});
	}, [
		$e,
		W,
		at,
		ct,
		rt
	]);
	dn(() => {
		if (!$e || !at) return;
		let e = typeof at == "string" ? at : ge(at);
		if (W) {
			let t = Wp.get($e);
			t || (t = /* @__PURE__ */ new Map(), Wp.set($e, t)), t.set(ct, e);
		}
		let t = $e.getSnapshot();
		return t.phase === "collecting" && !$e.ownsSelection(e) && $e.dispatch({
			type: "select-payment-type",
			instanceId: t.instanceId,
			id: e
		}), W ? void 0 : ut;
	}, [
		$e,
		W,
		at,
		ct,
		ut
	]), J(() => {
		if (W && at) return ut;
	}, [
		W,
		at,
		ut
	]);
	let dt = K((e) => {
		if (W) for (let [t, n] of Object.entries(e)) {
			if (W.ordinaryForm.getSnapshot().values[t] === n) continue;
			let e = W.getSnapshot();
			W.dispatch({
				type: "set-field",
				instanceId: e.instanceId,
				presentationRevision: e.revision,
				id: t,
				value: n
			});
		}
	}, [W]), pt = K((e) => W && U ? W.mapFormObserver(e) : e, [W, U]), ht = `payment-form:${e}`, { isSubscribed: gt, setSurfacePending: _t, publishInactive: yt } = ve(), { fields: bt, hfFields: St, name: Ct, type: wt, method: Tt, accountId: Et, service: Dt, limits: Ot, logo: kt } = U ?? {}, jt = tt ? qd(tt.presentation, bt) : bt ?? Up, Mt = new Map(tt && (tt.presentation.screen === "paymentDetails" || tt.presentation.screen === "paymentConfirmation") ? [...tt.presentation.fields, ...tt.presentation.resultFields].map((e) => [e.id, e.description?.value]) : []), Nt = s || P, Ft = jt ?? Up, It = tm(Ft, Nt), Lt = em(bt), Rt = Sn({
		renderMode: o,
		hideAmountField: s,
		lockAmount: P,
		fields: It
	}), zt = Y(() => m(ye), [ye]), Bt = K((e) => Ne(e) || e, [Ne]), Vt = (e) => new Map(At(Ft, e).flatMap((e) => e.id && e.notification ? [[e.id, e.notification]] : [])), Ut = St?.flatMap((e) => e.id && e.notification ? [{
		fieldId: e.id,
		notification: e.notification
	}] : []) ?? [], Wt = Ut.filter(({ notification: e }) => cl(e)), Gt = Ut.filter(({ notification: e }) => !cl(e)), G = !!(St && St.length > 0), Kt = St?.some((e) => typeof e.id == "string" && um.has(e.id)) ?? !1, Jt = G && Kt && wt?.toLowerCase() === Nm, Yt = Jt && _e, Xt = Jt && fe && fm(St), Qt = b && x === "plain", $t = C !== "none", en = b && Qt && !$t, tn = Jt, { fieldsBeforeHosted: nn, cardLayoutDetailsField: rn, cardLayoutFooterField: an, fieldsAfterHosted: on } = Y(() => {
		let e = tm(jt, Nt);
		if (!G) return {
			fieldsBeforeHosted: e,
			cardLayoutDetailsField: null,
			cardLayoutFooterField: null,
			fieldsAfterHosted: []
		};
		let t = [], n = null, r = null, i = [];
		for (let a of e) if (a.id === Mm) {
			if (tn && !r) {
				r = a;
				continue;
			}
			i.push(a);
		} else Jt && !n && typeof a.id == "string" && Pm.has(a.id) ? n = a : t.push(a);
		return {
			fieldsBeforeHosted: t,
			cardLayoutDetailsField: n,
			cardLayoutFooterField: r,
			fieldsAfterHosted: i
		};
	}, [
		jt,
		Nt,
		tn,
		Jt,
		G
	]), sn = Y(() => Ap({
		cardLayoutDetailsField: rn,
		cardLayoutFooterField: an,
		fieldsAfterHosted: on
	}), [
		rn,
		an,
		on
	]), un = Y(() => {
		let e = uf(St);
		if (e === 0) return Dm.min;
		let t = e * Dm.field + Math.max(e - 1, 0) * Dm.gap + Dm.padding;
		return Jt ? t : Math.max(t, Dm.min);
	}, [St, Jt]), [hn, gn] = Z(null), [_n, vn] = Z(null), [yn, xn] = Z("pending"), [wn, En] = Z("pending"), [Dn, On] = Z(null), [kn, An] = Z(null), [jn, Mn] = Z({
		formId: e,
		brand: void 0
	}), Nn = X(null), Pn = jn.formId === e ? jn.brand : void 0, [Fn, In] = Z(!1), Ln = yn === "ready", Rn = ln();
	dn(() => (_t(Rn, E && G && !Ln && Dn === null), () => {
		_t(Rn, !1);
	}), [
		_t,
		Rn,
		E,
		G,
		Ln,
		Dn
	]);
	let Bn = Dn === null ? null : xm(Dn, _m, B), Vn = wn === "grouped" || wn === "pending" && Xt, Wn = G ? hn === null ? G && Xt && Vn ? Am(1 + uf(St?.filter((e) => !dm(e)))) : Jt ? km(uf(St)) : Math.max(_n ?? 0, un) : hn : null, Kn = Y(() => St ? JSON.stringify(St) : null, [St]), [qn, Jn] = Z({
		node: null,
		version: 0
	}), [Yn, Xn] = Z(0), Zn = X({
		scope: "",
		attempts: 0
	}), Qn = [
		e,
		Oe,
		Kn,
		G ? "visible" : "hidden",
		qn.version
	].join("|"), $n = `${Qn}|${String(Yn)}`, er = [$n, "capabilities"].join("|"), [tr, nr] = fn((e, t) => t, {
		scopeKey: er,
		capabilities: Yp,
		received: !1
	}), rr = tr.scopeKey === er, ir = rr ? tr.capabilities : Yp, ar = rr && tr.received, or = G && yn !== "ready" && Dn === null, sr = G && yn !== "ready" && Dn === null, cr = yn, lr = Xt, ur = X(ir), dr = X(ar), fr = Y(() => Object.fromEntries(Object.entries(mp(void 0, pe)).filter(([e]) => Lm.has(e))), [pe]), pr = ir.fieldOverrides === !0, mr = ir.expiryDateValidation === !0, hr = Y(() => {
		if (St) return St.map((e) => hm(e, B, Ae, {
			reserveMessageSpace: Jt,
			includeOverrides: pr,
			includeExpiryDateValidation: mr
		}));
	}, [
		St,
		Jt,
		pr,
		mr,
		B,
		Ae
	]), gr = Y(() => {
		if (!hr) return;
		if (!lr) return hr;
		let e = B(rm);
		return hr.map((t) => t.id === Xp ? {
			...t,
			groupLabel: e
		} : t);
	}, [
		hr,
		lr,
		B
	]), _r = Y(() => JSON.stringify({
		fields: gr ?? null,
		fonts: le ?? null,
		geometryTheme: fr,
		css: me ?? null,
		uiGroupCardInputs: lr
	}), [
		gr,
		le,
		fr,
		lr,
		me
	]), vr = K((e) => Xt && e.groupedCardInputs ? "grouped" : "flat", [Xt]), yr = Y(() => hr ? Vn ? gm(hr, B(rm)) : hr : Jp, [
		hr,
		Vn,
		B
	]), br = X(null), xr = X(null), Sr = K((e) => {
		xr.current = e, Jn((t) => t.node === e ? t : {
			node: e,
			version: t.version + 1
		});
	}, []), Cr = X(null), wr = X(null), Tr = X(Be), Er = X(null), Dr = X(null), Or = X(wn), kr = X(yn), Ar = X(!1), jr = X(null), Mr = X(null), Nr = X(null), Pr = X(null), Fr = K(() => yp(xr.current), []), Ir = Y(() => wp(Pn, qe), [Pn, qe]), Lr = Y(() => {
		if (wt?.toLowerCase() === Nm && Et) return he(Ct);
	}, [
		Et,
		Ct,
		wt
	]), Rr = Y(() => wp(Lr, qe), [qe, Lr]), zr = Pn ? Ir : Rr, Br = (() => {
		if (Pn) return Ir?.logo;
		if (Lr) return kt ?? Rr?.logo;
	})(), Vr = Yt, Hr = Qe, Ur = Vr ? zr?.theme ?? Hr : Hr, Wr = zr?.brand ?? Fm, Gr = X(null), [Kr, qr] = Z(!1), { makePayment: Jr, finishPayment: Yr, paymentStatusMessage: Xr, isPaymentPending: Zr, isPaymentSuccessful: Qr, isPaymentFailed: $r } = Jd({
		paymentType: wt ?? "",
		method: Tt ?? ""
	}), ei = Zr || Qr || Kr && !$r, { overridePayload: ti, resetOverridePayload: ni, setLocked: ri } = gu(), { registerReset: ii } = yu();
	J(() => {
		ri(ei);
	}, [ei, ri]), J(() => () => {
		ni(), ri(!1);
	}, [ni, ri]), J(() => {
		Tr.current = Be;
		let e = wr.current?.iframe;
		e && Be && (e.title = Be);
	}, [Be]);
	let ai = K((e) => {
		let t = e?.preserveHeight ?? !1;
		gn((e) => t ? e : null), On(null);
	}, []), oi = K(() => {
		Dr.current?.(), Dr.current = null;
	}, []), si = K(() => {
		oi(), Ar.current = !1, jr.current = null, kr.current = "pending", Or.current = "pending", xn("pending"), En("pending");
	}, [oi]), ci = K(() => {
		oi();
		let e = Er.current?.isReady() ?? !1, t = "pending";
		dr.current ? t = vr(ur.current) : e && (t = "flat"), Ar.current = e, jr.current = null, kr.current = "pending", Or.current = t, xn("pending"), En(t), On(null);
	}, [oi, vr]);
	dn(() => {
		let e = Pr.current;
		e !== _r && (Pr.current = _r, e !== null && G && ci());
	}, [
		_r,
		ci,
		G
	]);
	let li = K(() => {
		kr.current !== "ready" && (oi(), kr.current = "ready", xn("ready"), On(null));
	}, [oi]), ui = K(() => {
		if (kr.current === "ready") return;
		let e = jr.current;
		if (!Ar.current || !e || Or.current === "pending" || e.containerHeight <= 0) return;
		oi();
		let t = e.containerHeight, n = Nr.current, r = Bp, i = null, a = !1, o = null, s = null, c = null, l = xr.current?.ownerDocument.defaultView, u = () => {
			if (a) return;
			let e = jr.current;
			if (!(Ar.current && Or.current !== "pending" && e?.containerHeight === t && Nr.current === n)) return;
			let o = xr.current, s = o?.getBoundingClientRect().height ?? 0, c = Number.parseFloat(o?.style.height ?? ""), l = s > 0 ? s : c, u = typeof o?.getAnimations == "function" && o.getAnimations().some((e) => e.playState === "running"), f = Number.isFinite(l) && l > 0 && i !== null && Math.abs(l - i) <= Hp;
			i = l, r = f && !u ? r - 1 : Bp, r > 0 ? d() : (Dr.current = null, li());
		}, d = () => {
			let e = !1, t = () => {
				e || a || (e = !0, o !== null && l?.cancelAnimationFrame && (l.cancelAnimationFrame(o), o = null), s !== null && (clearTimeout(s), s = null), u());
			};
			s = setTimeout(t, Vp), l?.requestAnimationFrame && (o = l.requestAnimationFrame(t));
		};
		Dr.current = () => {
			a = !0, o !== null && l?.cancelAnimationFrame && l.cancelAnimationFrame(o), s !== null && clearTimeout(s), c !== null && clearTimeout(c);
		}, c = setTimeout(d, zp);
	}, [oi, li]), di = K(() => {
		Or.current === "pending" && (oi(), Or.current = "flat", En("flat")), Ar.current = !0, ui();
	}, [oi, ui]), fi = K(({ containerHeight: e }) => {
		let t = Math.ceil(e);
		t <= 0 || (Zn.current.attempts = 0, jr.current?.containerHeight === t ? Dr.current || ui() : (jr.current = { containerHeight: t }, gn((e) => e === t ? e : t), ui()));
	}, [ui]);
	J(() => {
		kr.current = yn;
	}, [yn]), J(() => {
		Or.current = wn;
	}, [wn]), J(() => {
		ur.current = ir, dr.current = ar;
	}, [ar, ir]), J(() => oi, [oi]), J(() => {
		if (!G) return;
		let e = Cr.current;
		if (!e) return;
		let t = () => {
			let t = Math.ceil(e.getBoundingClientRect().height);
			t <= 0 || vn((e) => e === t ? e : t);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(() => {
			t();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [yr, G]);
	let pi = K(() => {
		ai({ preserveHeight: !0 });
	}, [ai]), mi = K(() => {
		let e = Nn.current;
		e !== null && (clearTimeout(e), Nn.current = null);
	}, []), hi = K((t, n) => {
		mi(), t || !n?.delayedClear ? Mn((n) => n.formId === e && n.brand === t ? n : {
			formId: e,
			brand: t
		}) : Nn.current = setTimeout(() => {
			Nn.current = null, Mn((t) => t.formId === e && t.brand === void 0 ? t : {
				formId: e,
				brand: void 0
			});
		}, jm);
	}, [mi, e]);
	J(() => mi, [mi]);
	let gi = K(() => {
		ai({ preserveHeight: !0 }), An(null), hi(void 0), Er.current?.reset();
	}, [ai, hi]), _i = K(() => {
		ei || Fn || (qr(!1), gi(), Gr.current?.resetForm(), Yr(), ni());
	}, [
		Yr,
		ei,
		Fn,
		gi,
		ni
	]), vi = X(null);
	J(() => {
		vi.current = _i;
	}, [_i]);
	let yi = K(() => {
		vi.current?.();
	}, []), bi = X(!1);
	J(() => {
		if (!M) bi.current &&= (ii(null), !1);
		else if (!bi.current) return ii(yi), bi.current = !0, () => {
			bi.current &&= (ii(null), !1);
		};
	}, [
		M,
		ii,
		yi
	]);
	let xi = K((e) => {
		if (e.type === Tf.CARD_BRAND) hi(e.cardBrand, { delayedClear: e.cardBrand === void 0 });
		else if (e.type === Tf.FORM_STATE) An(e.formState ?? null);
		else if (e.type === Tf.AUTO_FOCUS_NEXT) {
			if (!ue || !sn) return;
			let e = xr.current?.ownerDocument ?? (typeof document < "u" ? document : null), t = e?.defaultView ?? (typeof window < "u" ? window : null);
			if (!e) return;
			let n = wr.current?.iframe;
			if (!n || e.activeElement !== n) return;
			let r = () => {
				wr.current?.iframe === n && n.isConnected && e.activeElement === n && Mp(sn, e);
			};
			if (t && typeof t.requestAnimationFrame == "function") {
				t.requestAnimationFrame(r);
				return;
			}
			setTimeout(r, 0);
		}
	}, [
		ue,
		sn,
		hi
	]);
	J(() => {
		if (!G) return;
		let e = qn.node;
		if (!e) return;
		let t = e.ownerDocument.defaultView ?? (typeof window < "u" ? window : void 0), n = Mr.current, r = $n;
		if (wr.current && n !== null && n === r) return;
		cn(() => {
			si(), ai(), An(null), hi(void 0);
		}), wr.current?.destroy(), wr.current = null, Er.current = null, Mr.current = r, Nr.current = null;
		let i = (() => {
			let e;
			if (t ? e = t.location.href : typeof window < "u" && (e = window.location.href), e) try {
				return new URL(Oe, e).origin;
			} catch {
				return;
			}
		})();
		Zn.current.scope !== Qn && (Zn.current = {
			scope: Qn,
			attempts: 0
		});
		let a = null, o = Uf({
			container: e,
			iframe: {
				src: Oe,
				title: Tr.current,
				attributes: { scrolling: "no" },
				styles: {
					minHeight: Jt ? "100%" : `${String(Dm.min)}px`,
					overflow: "hidden"
				}
			},
			controller: {
				...i ? { targetOrigin: i } : {},
				onStartupStalled: (e) => {
					a !== null && clearTimeout(a);
					let t = Zn.current.attempts, n = Math.min(1e3 * 2 ** Math.min(t, 5), 3e4);
					a = setTimeout(() => {
						a = null, wr.current === o && e() && (Zn.current.attempts += 1, Xn((e) => e + 1));
					}, n);
				}
			}
		});
		return wr.current = o, Er.current = o.controller, typeof o.iframe.addEventListener == "function" && o.iframe.addEventListener("pointerdown", pi), () => {
			a !== null && clearTimeout(a), typeof o.iframe.removeEventListener == "function" && o.iframe.removeEventListener("pointerdown", pi), o.destroy(), wr.current === o && (wr.current = null, Er.current = null), si(), ai(), An(null), hi(void 0), Mr.current = null, Nr.current = null;
		};
	}, [
		pi,
		ai,
		Oe,
		Qn,
		$n,
		qn.node,
		si,
		Jt,
		G,
		hi
	]), J(() => {
		if (!G) return;
		let e = Er.current;
		if (!e) return;
		let t = !1, n = (e) => {
			if (t) return;
			let n = Df(e);
			if (dr.current && ur.current.groupedCardInputs === n.groupedCardInputs && ur.current.fieldOverrides === n.fieldOverrides && ur.current.expiryDateValidation === n.expiryDateValidation) return;
			ur.current = n, dr.current = !0, nr({
				scopeKey: er,
				capabilities: n,
				received: !0
			});
			let r = vr(n);
			Or.current !== r && (oi(), kr.current === "ready" && (kr.current = "pending", xn("pending")), Or.current = r, En(r), ui());
		};
		e.setCallbacks({
			onLoading: (e) => {
				t || (ai({ preserveHeight: !0 }), An(null), e === "navigation" ? (si(), ur.current = Yp, dr.current = !1, nr({
					scopeKey: er,
					capabilities: Yp,
					received: !1
				})) : ci());
			},
			onReady: di,
			onLayout: fi,
			onCapabilities: n,
			onMessage: xi
		});
		let r = e.getCapabilities();
		r.groupedCardInputs !== void 0 && queueMicrotask(() => {
			n(r);
		});
		let i = e.getLastLayout();
		i && fi(i);
		let a = e.getLastFormState();
		return a && An(a), e.isReady() && di(), () => {
			t = !0, e.setCallbacks(null);
		};
	}, [
		di,
		fi,
		xi,
		oi,
		ui,
		vr,
		Kn,
		er,
		Oe,
		si,
		ci,
		ai,
		G
	]), J(() => {
		if (!G) return;
		let e = () => {
			let e = Er.current;
			if (!e) return;
			let t = mp(Fr, pe, op(xr.current)), n = Object.entries(t).sort(([e], [t]) => e.localeCompare(t)), r = n.length > 0 ? Object.fromEntries(n) : void 0, i = ne(pe, {
				scopeSelector: Im,
				cssUrlText: me
			}).cssText, a = {
				debugMode: M,
				fields: gr ?? void 0,
				fonts: le,
				uiTheme: r,
				css: i || void 0,
				autoFocusNextField: ue,
				pciTenantId: Ge,
				uiGroupCardInputs: lr
			}, o = JSON.stringify({
				...a,
				fields: a.fields ?? null,
				fonts: a.fonts ?? null,
				uiTheme: a.uiTheme ?? null,
				css: a.css ?? null,
				pciTenantId: a.pciTenantId ?? null,
				uiGroupCardInputs: a.uiGroupCardInputs
			});
			if (Nr.current === o) return;
			oi(), kr.current !== "ready" && (jr.current = null), Nr.current = o, e.configure(a);
			let s = e.getLastLayout();
			s && fi(s);
		}, t = xr.current?.closest(".pc-ui__credit-card-panel"), n = t && typeof MutationObserver < "u" ? new MutationObserver(e) : null;
		return t && n?.observe(t, {
			attributes: !0,
			attributeFilter: ["data-pc-input-context"]
		}), e(), () => n?.disconnect();
	}, [
		oi,
		Ur,
		fi,
		M,
		le,
		ue,
		Oe,
		gr,
		$n,
		Ge,
		Fr,
		lr,
		G,
		pe,
		me
	]);
	let Si = Y(() => {
		let e = et(jt, { amount: N });
		return Object.entries(g ?? {}).forEach(([t, n]) => {
			n !== void 0 && (e[t] = n);
		}), !P && Lt ? e : Cn({
			values: e,
			amountValueOverride: u,
			initialAmount: N,
			lockAmount: P,
			shouldHideAmountField: Nt,
			hasAmountField: Lt
		});
	}, [
		jt,
		N,
		g,
		u,
		P,
		Nt,
		Lt
	]), Ci = K((e) => {
		let t = Er.current;
		if (!t) return Promise.reject(/* @__PURE__ */ Error("error.hosted_fields_not_ready"));
		On(null), In(!0);
		try {
			let n = t.tokenize({ saveAccount: e });
			return Promise.resolve(n).catch((e) => {
				let t = e instanceof Error ? e : Error(String(e)), n = Sm(t.message);
				throw On(n), t;
			}).finally(() => {
				In(!1);
			});
		} catch (e) {
			In(!1);
			let t = e instanceof Error ? e : Error(String(e)), n = Sm(t.message);
			return On(t.message === "error.payment_context_changed" ? null : n), Promise.reject(t);
		}
	}, []), wi = X(null);
	dn(() => {
		if (wi.current = (t) => {
			let n = Cn({
				values: t ?? Gr.current?.values ?? Si,
				amountValueOverride: u,
				initialAmount: N,
				shouldHideAmountField: Nt,
				hasAmountField: Lt,
				lockAmount: P
			}), r = typeof n.amount == "number" ? String(n.amount) : n.amount, i = de({
				config: k,
				amount: typeof r == "string" ? r : void 0,
				resolveText: (e) => B(e),
				resolveTextKey: je,
				formatAmount: (e) => Me(e)
			});
			return {
				capture: i,
				requestId: d(n.merchantRequestId) ?? void 0,
				material: I(k, i, JSON.stringify([
					ae,
					L,
					Tt,
					e,
					Et,
					Dt,
					Ee,
					d(n.merchantRequestId)
				]))
			};
		}, !W && j?.getSnapshot().phase === "preparing") try {
			j.observeMaterial(wi.current().material);
		} catch {
			j.observeMaterial("invalid");
		}
	});
	let Ti = X(void 0);
	J(() => () => {
		let e = Ti.current;
		e !== void 0 && j?.abandonPreparation(e, "error.payment_context_changed");
	}, [j]);
	let Ei = X(0);
	dn(() => (Ei.current += 1, () => {
		Ei.current += 1;
	}), []);
	let Di = K(async () => {
		let e = Ei.current, t = Gr.current;
		if (!W || !U || !t) return !1;
		let n = Cn({
			values: t.values,
			amountValueOverride: u,
			initialAmount: N,
			shouldHideAmountField: Nt,
			hasAmountField: Lt,
			lockAmount: P
		}), i = Zt(U, typeof n.amount == "string" ? n.amount : "", {
			method: re,
			user: R,
			values: n
		});
		if (!i.isValid) {
			let e = A(U, i, n, Ae);
			return t.setFieldError("amount", e || We(i, B, Pe) || B("error.presentation_intent_invalid_input")), !1;
		}
		if (r) {
			dt(n);
			let e = W.ordinaryForm.getSnapshot().errors;
			return t.setErrors({ ...e }), Object.keys(e).length || !W.prepareOrdinary() ? !1 : (r({
				values: Un({ ...W.ordinaryForm.getSnapshot().values }),
				hasHostedFields: !1
			}), !0);
		}
		dt(n);
		let a = W.getSnapshot(), o = W.dispatch({
			type: "submit",
			instanceId: a.instanceId,
			presentationRevision: a.revision
		});
		if (o.status !== "accepted" || o.submission !== "creation-admitted") return t.setErrors({ ...W.ordinaryForm.getSnapshot().errors }), !1;
		await W.submitted();
		let s = W.getSnapshot().recovery.kind === "known";
		return Ei.current === e && (t.setErrors({ ...W.ordinaryForm.getSnapshot().errors }), s || On(W.submissionError() ?? null), s && (D?.(), E && yt(ht))), s;
	}, [
		W,
		U,
		dt,
		re,
		R,
		B,
		Ae,
		Pe,
		u,
		N,
		Nt,
		Lt,
		P,
		r,
		D,
		E,
		yt,
		ht
	]), Oi = K(async (e) => {
		if (ee && !te?.checkout.canPay()) return;
		if (W) return Di();
		if (!r && j?.isBlocked()) return;
		let t;
		try {
			if (!r && j && wi.current) {
				let e = wi.current();
				t = j.beginPreparation(e.capture, e.material), Ti.current = t;
			}
			return await e();
		} catch (e) {
			On(e instanceof Error ? e.message : "error.payment_processing_failed");
			return;
		} finally {
			t !== void 0 && j?.abandonPreparation(t, j.getSnapshot().invalidated ? "error.payment_context_changed" : void 0), Ti.current === t && (Ti.current = void 0);
		}
	}, [
		j,
		te,
		r,
		ee,
		W,
		Di
	]), ki = K(async (e, t) => {
		if (ee && !te?.checkout.canPay()) return;
		if (W) {
			try {
				await Di();
			} finally {
				t.setSubmitting(!1);
			}
			return;
		}
		let n = Ti.current, i = M ? ti : void 0;
		try {
			if (n === void 0 && !r && j && wi.current) {
				let t = wi.current(e);
				n = j.beginPreparation(t.capture, t.material), Ti.current = n;
			}
			if (!await Kp(Gr)) return;
			let a = Cn({
				values: e,
				amountValueOverride: u,
				initialAmount: N,
				shouldHideAmountField: Nt,
				hasAmountField: Lt,
				lockAmount: P
			});
			if (!U) return;
			let o = Zt(U, typeof a.amount == "string" ? a.amount : "", {
				method: re,
				user: R,
				values: a
			});
			if (!o.isValid) {
				let e = A(U, o, a, Ae);
				t.setFieldError("amount", e || We(o, B, Pe));
				return;
			}
			zn({
				type: wt,
				method: Tt,
				values: a,
				hostRiskContext: Ce
			});
			let s = await Hn(a, Ci, Er.current);
			if (zn({
				type: wt,
				method: Tt,
				values: s,
				hostRiskContext: Ce
			}), r) {
				r({
					values: s,
					hasHostedFields: G
				});
				return;
			}
			let l = typeof s.amount == "string" ? xt(s.amount) : null, p = Ee ? Ke(U, l === null ? void 0 : { amount: l }) : [], m = z({
				uiBonuses: xe,
				selectedBonusCode: Ee,
				availableBonuses: p
			});
			if (k.offers !== void 0 && k.selectedOfferId && !p.some((e) => e.code === k.selectedOfferId)) throw Error("error.payment_context_changed");
			let h = Gn({
				values: s,
				hasAmountField: Lt,
				merchantId: ae,
				userId: L,
				sessionId: se,
				accountId: Et,
				currency: F,
				service: Dt,
				bonusCode: k.offers === void 0 ? m : c(k.offers, k.selectedOfferId),
				locales: Re,
				extra: Se,
				hostRiskContext: Ce,
				returnUrl: Te,
				method: Tt,
				type: wt,
				debug: M,
				overrideRaw: i
			});
			if (n !== void 0 && wi.current) {
				let e = wi.current();
				j?.verifyPreparation(n, e.material);
				let t = ce(h.amount);
				if (t === void 0 != (e.capture.amount === void 0) || t !== void 0 && e.capture.amount !== void 0 && f(t, e.capture.amount) !== 0 || h.currency !== e.capture.currency || h.merchantId !== e.capture.merchantId || h.userId !== L || h.accountId !== Et || h.service !== (d(Dt) ?? void 0) || h.merchantRequestId !== e.requestId) throw Error("error.payment_context_changed");
			}
			qr(!0);
			try {
				if (n === void 0 ? await Jr(h) : await Jr(h, n), n !== void 0 && !j?.acceptsCreation(n)) return;
				D?.(), E && yt(ht);
			} catch {} finally {
				qr(!1);
			}
		} catch (e) {
			qr(!1);
			let t = e instanceof Error ? e : Error(String(e)), r = Sm(t.message);
			n !== void 0 && j?.abandonPreparation(n, t.message === "error.payment_context_changed" ? t.message : void 0), On(t.message === "error.payment_context_changed" ? null : r);
		} finally {
			n !== void 0 && j?.abandonPreparation(n), Ti.current === n && (Ti.current = void 0), t.setSubmitting(!1);
		}
	}, [
		W,
		Di,
		j,
		te,
		ee,
		k.offers,
		k.selectedOfferId,
		ae,
		L,
		Et,
		Dt,
		Ee,
		xe,
		M,
		Jr,
		F,
		se,
		Se,
		Ce,
		Te,
		Ke,
		N,
		u,
		Ci,
		r,
		D,
		E,
		Tt,
		U,
		re,
		R,
		Pe,
		B,
		Ae,
		Lt,
		P,
		Nt,
		G,
		wt,
		ti,
		Re,
		ht,
		yt
	]), Ai = K((e) => {
		let t = Cn({
			values: e,
			amountValueOverride: u,
			initialAmount: N,
			shouldHideAmountField: Nt,
			hasAmountField: Lt,
			lockAmount: P
		});
		W && U && dt(t);
		let n = tm(jt, Nt && !P);
		o === "confirm" && (n = P ? (jt ?? []).filter((e) => e.id === "amount") : []);
		let r = W && U ? { ...W.ordinaryForm.getSnapshot().errors } : we(Ve(n, t).filter((e) => e.id !== "amount"), t, Ae);
		if (U) {
			let e = Zt(U, typeof t.amount == "string" ? t.amount : "", {
				method: re,
				user: R,
				values: t
			});
			if (!e.isValid) {
				let n = A(U, e, t, Ae);
				r.amount = r.amount || n || We(e, B, Pe) || B("error.presentation_intent_invalid_input");
			}
		}
		return r;
	}, [
		W,
		U,
		dt,
		u,
		jt,
		N,
		P,
		Lt,
		o,
		Nt,
		Ae,
		B,
		Pe,
		re,
		R
	]), ji = ($r ? xm(Xr, "error.unknown", B) : null) || Bn;
	return U ? /* @__PURE__ */ Q(zc, {
		initialValues: Si,
		onSubmit: ki,
		validate: Ai,
		innerRef: Gr,
		onReset: () => {
			if (!W) return;
			let e = W.getSnapshot();
			W.dispatch({
				type: "select-payment-type",
				instanceId: e.instanceId,
				id: ge(U)
			});
		},
		validateOnMount: !0,
		children: ({ values: r, errors: i, initialValues: s, submitForm: d, validateForm: f, setFieldValue: m, setFieldTouched: g, isValid: v, dirty: x }) => {
			let C = (e, t) => {
				if (g(e, !0, !1), m(e, t, !0), typeof window > "u" || typeof document > "u") return;
				let n = () => {
					let t = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/"/g, "\\\""), n = document.querySelector(`[name="${t}"]`);
					n ? n.focus() : document.getElementById(O.id("payment-field", { slug: e }))?.focus();
				}, r = typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : null;
				r ? r(n) : setTimeout(n, 0);
			}, D = typeof r.amount == "string" ? r.amount : "", te = P ? N : u ?? (Nt && Lt ? N : void 0), ne = te ?? D, I = Cn({
				values: r,
				amountValueOverride: u,
				initialAmount: N,
				shouldHideAmountField: Nt,
				hasAmountField: Lt,
				lockAmount: P
			}), ie = Zt(U, ne, {
				method: re,
				user: R,
				values: I
			}), ae = A(U, ie, I, Ae), L = ae || We(ie, B, Pe), oe = !ie.isValid, z = ie.status === "empty" || ie.status === "incomplete" ? void 0 : L, se = P ? qt(ie, B, Pe, ae) : void 0, ce = Object.values(s).some(ot), le = y && o !== "confirm" && !ce && (G || Ve(It, I).some((e) => !e.hidden && e.type !== "display" && e.type !== "qrcode")), ue = vt(i), de = it(o === "confirm" ? [] : Ve(It, I), I), fe = o === "confirm" || !G || Gp(kn), pe = x || G && Gp(kn), me = !v || ue || oe || de || !fe || !pe && le, he = ee && k.checkoutState?.phase !== "confirmed" || ei || Fn || me, ge = !me, _e = (!$r || v) && wt !== "info", ve = !t, ye = ve && _e, xe = B("payment.submit"), Se = B("cta.reset"), Ce = ei || Fn, we = ei || Fn, Te = G ? {
				ready: Ln && Dn === null,
				dirty: !!kn?.dirty,
				valid: !!kn?.isValid && Dn === null,
				complete: !!kn?.isComplete && Dn === null,
				error: Dn !== null
			} : null, Oe = v && !ue && !oe && !de && (!Te || Te.valid), ke = Oe && fe, je = gt && E && o === "form", Me = je ? Rp({
				amount: ne,
				bonusCode: k.offers === void 0 ? Ee : c(k.offers, k.selectedOfferId) ?? null,
				canSubmit: _e && !he,
				complete: ke,
				currency: F,
				dirty: x || !!Te?.dirty,
				errors: i,
				fields: It,
				hostedFields: Te,
				initialValues: s,
				method: re,
				paymentType: U,
				submitting: we,
				valid: Oe,
				values: I
			}) : null, Ne = o !== "confirm", Ie = Ne && G, Le = (w || ye) && !Ie && on.length === 0, Re = (w || ye) && on.length > 0, ze = Ie && Wt.length > 0, Be = Ie && Gt.length > 0, Ue = p(ne) || ne || void 0, V = !P && !be && Ne && zt.length > 0 && !!It.find((e) => e.id === $p), Ge = ve && _e ? 1 : 0, Ke = nn.length + +!!ze + +!!Ie + +!!Be + on.length + Ge, Je = nn.length, Xe = Je + +!!ze, Qe = Xe + +!!Ie, $e = Qe + +!!Be, et = $e + on.length, tt = (e) => V && e === $p ? /* @__PURE__ */ Q(wf, {
				suggestions: zt,
				activeSuggestion: Ue,
				onSelect: (e) => {
					m($p, _(e), !1);
				},
				formatLabel: Bt,
				amountLimits: Ot,
				size: "xs"
			}) : null, nt = Vt(r), rt = (e) => {
				let t = nt.get(e);
				return cl(t) ? /* @__PURE__ */ Q("div", {
					className: ll,
					children: /* @__PURE__ */ Q(fl, {
						notification: t,
						resolvedContent: Mt.get(e),
						translateKeys: Ae
					})
				}) : null;
			}, at = (e, { isLastRenderableField: t }) => {
				let n = nt.get(e), r = n && !cl(n) ? n : null, i = M && wm(e);
				return !r && !i ? null : /* @__PURE__ */ $("div", {
					className: ul,
					children: [r && /* @__PURE__ */ Q(fl, {
						notification: r,
						resolvedContent: Mt.get(e),
						translateKeys: Ae
					}), i && /* @__PURE__ */ $("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ Q("span", {
							className: "text-sm font-medium",
							children: "Debug"
						}), Cm(e).map(({ value: t, label: n }) => /* @__PURE__ */ Q(Pt, {
							variant: "neutral",
							size: "sm",
							disabled: ei,
							onClick: () => {
								C(e, t);
							},
							label: n
						}, `${e}_${n}`))]
					})]
				});
			}, st = (e) => e !== $p || !h ? null : /* @__PURE__ */ Q("div", {
				"data-slot": "payment-form-after-amount",
				className: "flex min-w-0 flex-col gap-2",
				children: h
			}), ct = Ie && Yt, lt = Ie && Jt && !ct, ut = b && Jt && !Qt, dt = !b && (nn.length > 0 || on.length > 0), ft = lt, _t = $t && dt && Ie && S === "contained", yt = $t && dt && !Ie && S === "contained", bt = $t && Qt, xt = $t && b && !Qt || bt || _t || yt, St = !Ie, Ct = lt && (!b || ut) && $t && S === "contained", Tt = lt && !Ct ? im : mt, Et = (e) => !1, Dt = (e) => /* @__PURE__ */ Q(Ep, {
				kind: "field-panel",
				fieldEdgeSpacing: St ? "balanced" : "default",
				children: e
			}), kt = (e) => Dt(/* @__PURE__ */ Q("div", {
				className: Tt,
				children: e
			})), At = ct ? {
				marginInline: Vn ? "calc(var(--pc-size-input-focus-ring, 3px) * -1)" : -4,
				...Vn ? { marginBlock: "calc(var(--pc-size-input-focus-ring, 3px) * -1)" } : {}
			} : void 0, jt = {
				margin: -4,
				width: "calc(100% + 8px)"
			}, Ht = {
				marginInline: -4,
				width: "calc(100% + 8px)"
			}, Kt = lt ? Ht : jt;
			ct && (Kt = Wn === null ? void 0 : { height: Wn }), !ct && Wn !== null && (Kt = {
				...lt ? Ht : jt,
				height: lt || typeof Wn != "number" ? Wn : Wn + 8
			});
			let Xt;
			ct || (Xt = lt ? { insetInline: -4 } : { inset: -4 });
			let tn = /* @__PURE__ */ $("div", {
				"data-theme": ct ? void 0 : Ye,
				className: H(O.className("hosted-fields-frame"), "relative", ct ? "overflow-hidden rounded-[var(--pc-radius-lg)] bg-transparent" : "overflow-visible bg-transparent"),
				style: {
					...fr,
					...At
				},
				children: [/* @__PURE__ */ Q("div", {
					ref: Sr,
					"aria-hidden": !Ln || void 0,
					"data-slot": "hosted-fields-target",
					"data-state": Ln ? "ready" : "loading",
					inert: !Ln || void 0,
					className: H(O.className("hosted-fields-target"), "w-full overflow-hidden", !Ln && "pointer-events-none", T && Ln && "duration-180 ease-out", T && Ln && (ct ? "transition-[height,opacity]" : "transition-opacity"), Ln ? "opacity-100" : "opacity-0"),
					style: Kt
				}), G && /* @__PURE__ */ Q("div", {
					"aria-hidden": "true",
					"data-testid": "cashier-hosted-fields-skeleton",
					"data-slot": "hosted-fields-skeleton-layer",
					"data-state": cr,
					className: H(O.className("hosted-fields-skeleton"), "pointer-events-none absolute inset-0 z-10 overflow-hidden", T && "transition-opacity duration-180 ease-out", or ? "opacity-100" : "opacity-0"),
					style: Xt,
					children: /* @__PURE__ */ Q(bf, {
						fields: yr,
						className: "h-full"
					})
				})]
			}), sn = !!(an && pm(an)), cn = Vr && Br ? /* @__PURE__ */ Q(zm, {
				brand: zr?.brand,
				logo: Br
			}) : null, K = !!(an && sn), q = K ? an : null, J = !!(q && cn), ln = ct && !!q, un = ln, dn = [...rn ? [rn] : []], Y = ln ? dn : [...dn, ...q ? [q] : []], fn = Jt, X = om;
			ct && (X = Vn ? sm : am);
			let Z = dn.length > 0 ? /* @__PURE__ */ Q($d, {
				validationMode: W ? "external" : "local",
				amountValidationMode: "external",
				textMode: W ? "resolved" : "keys",
				fields: dn,
				translateKey: B,
				translateKeys: Ae,
				disabled: ei,
				amountError: z,
				renderBelowFieldContent: tt,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: rt,
				renderAfterField: at,
				renderAfterFieldRow: st,
				reserveInputMessageSpace: fn,
				reserveCheckboxMessageSpace: fn,
				reserveLastCheckboxMessageSpace: fn,
				reserveLastAmountMessageSpace: fn,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}) : null, pn = q ? /* @__PURE__ */ Q("div", {
				"data-slot": "cashier-card-shell-inline-footer-row",
				className: H("w-full min-w-0", un ? "pr-16" : void 0),
				children: /* @__PURE__ */ Q($d, {
					validationMode: W ? "external" : "local",
					amountValidationMode: "external",
					textMode: W ? "resolved" : "keys",
					fields: [q],
					translateKey: B,
					translateKeys: Ae,
					disabled: ei,
					amountError: z,
					renderBelowFieldContent: tt,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: rt,
					renderAfterField: at,
					renderAfterFieldRow: st,
					reserveInputMessageSpace: fn,
					reserveCheckboxMessageSpace: fn,
					reserveLastCheckboxMessageSpace: fn,
					reserveLastAmountMessageSpace: fn,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, hn;
			ln ? hn = /* @__PURE__ */ $("div", {
				"data-slot": "cashier-card-shell-details-stack",
				className: "relative flex w-full min-w-0 flex-col gap-1",
				children: [
					Z,
					pn,
					un && /* @__PURE__ */ Q("div", {
						"data-slot": "cashier-card-shell-inline-brand",
						className: cm,
						"aria-hidden": !J,
						children: J ? cn : null
					})
				]
			}) : Y.length > 0 && (hn = /* @__PURE__ */ Q($d, {
				validationMode: W ? "external" : "local",
				amountValidationMode: "external",
				textMode: W ? "resolved" : "keys",
				fields: Y,
				translateKey: B,
				translateKeys: Ae,
				disabled: ei,
				amountError: z,
				renderBelowFieldContent: tt,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: rt,
				renderAfterField: at,
				renderAfterFieldRow: st,
				reserveInputMessageSpace: fn,
				reserveCheckboxMessageSpace: fn,
				reserveLastCheckboxMessageSpace: fn,
				reserveLastAmountMessageSpace: fn,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}));
			let gn = hn, _n = an && !K ? /* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ Q($d, {
					validationMode: W ? "external" : "local",
					amountValidationMode: "external",
					textMode: W ? "resolved" : "keys",
					fields: [an],
					translateKey: B,
					translateKeys: Ae,
					disabled: ei,
					amountError: z,
					renderBelowFieldContent: tt,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: rt,
					renderAfterField: at,
					renderAfterFieldRow: st,
					reserveInputMessageSpace: fn,
					reserveCheckboxMessageSpace: fn,
					reserveLastCheckboxMessageSpace: fn,
					reserveLastAmountMessageSpace: fn,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, vn = J ? null : cn, yn = Vr && !q && !!(qe || Br), bn = _n || vn ? /* @__PURE__ */ $("div", {
				"data-slot": "cashier-card-shell-footer-row",
				className: H("flex min-w-0 items-end w-full gap-3 pb-1.5", _n ? "justify-between" : "justify-end px-0.5"),
				children: [_n, vn]
			}) : void 0, xn = ct && (!!_n || bn == null && !yn), Sn = tn;
			Jt && (Sn = /* @__PURE__ */ Q(Ep, {
				kind: "field-panel",
				active: Ct,
				children: /* @__PURE__ */ Q(He, {
					presentation: ct ? "card" : "fields",
					dataTheme: Ur,
					brandMotionKey: Wr,
					className: ct ? O.className("hosted-fields-card-shell") : im,
					rootAttributes: { "data-slot": lt ? "cashier-unbranded-card-fields" : void 0 },
					cardFields: tn,
					details: gn,
					detailsClassName: ct ? X : "mt-0",
					footer: bn,
					footerClassName: "w-full",
					reserveFooterSpace: yn,
					hasReservedTrailingMessageSpace: xn
				})
			}));
			let wn = nn.length > 0 ? /* @__PURE__ */ Q("div", {
				className: "contents",
				children: /* @__PURE__ */ Q($d, {
					validationMode: W ? "external" : "local",
					amountValidationMode: "external",
					textMode: W ? "resolved" : "keys",
					fields: nn,
					translateKey: B,
					translateKeys: Ae,
					disabled: ei,
					amountError: z,
					renderBelowFieldContent: tt,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: rt,
					renderAfterField: at,
					renderAfterFieldRow: st,
					animateRows: T,
					animationStartIndex: 0,
					animationTotalCount: Ke,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !lt && ft,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !lt && (!xt && !en || Et(nn)),
					addLastFieldBottomPadding: !lt && !xt && !en && !Le,
					reserveTrailingActionClearance: Le
				})
			}) : null, Tn = lt ? "relative mb-0 w-full" : ut ? "relative mb-2 @md:mb-3 w-full" : "relative mb-2 w-full", En = Ie ? /* @__PURE__ */ $(Ep, {
				kind: "form",
				chrome: "plain",
				active: b && lt && ut && nn.length === 0 && on.length === 0 && Ut.length === 0,
				children: [sr && /* @__PURE__ */ Q("span", {
					className: "sr-only",
					role: "status",
					"aria-live": "polite",
					"data-slot": "hosted-fields-loading-status",
					children: B("loading.hosted_fields")
				}), /* @__PURE__ */ $("div", {
					id: O.id("hosted-fields-container"),
					ref: br,
					"aria-busy": sr ? !0 : void 0,
					className: H(O.className("hosted-fields-container"), Tn, T && "pc-enter-rise-item"),
					"data-motion": T ? void 0 : "static",
					"data-testid": "cashier-hosted-fields-container",
					style: T ? Ol({
						index: Xe,
						total: Ke,
						direction: "reverse"
					}) : void 0,
					children: [
						/* @__PURE__ */ Q("span", {
							ref: Ze,
							"aria-hidden": "true",
							"data-slot": "cashier-card-shell-theme-probe",
							hidden: !0
						}),
						Sn,
						/* @__PURE__ */ Q("div", {
							"aria-hidden": "true",
							className: "pointer-events-none invisible absolute inset-x-0 top-0 -z-10 overflow-hidden",
							children: /* @__PURE__ */ Q("div", {
								ref: Cr,
								className: "w-full min-w-0",
								children: /* @__PURE__ */ Q(bf, { fields: yr })
							})
						})
					]
				})]
			}) : null, On = (e, t) => e.length > 0 ? /* @__PURE__ */ Q("div", {
				className: H(O.className("hosted-fields-notifications"), t.placement === "top" ? "mb-2.5 flex flex-col gap-2 @xl:col-span-2" : "mt-3 mb-4 flex flex-col gap-2 @xl:col-span-2", T && "pc-enter-rise-item"),
				style: T ? Ol({
					index: t.animationIndex,
					total: Ke,
					direction: "reverse"
				}) : void 0,
				children: e.map(({ fieldId: e, notification: t }) => /* @__PURE__ */ Q(fl, {
					notification: t,
					resolvedContent: Mt.get(e),
					translateKeys: Ae
				}, `${e}-${t.key}-${t.type}`))
			}) : null, An = ze ? On(Wt, {
				placement: "top",
				animationIndex: Je
			}) : null, jn = Be ? On(Gt, {
				placement: "bottom",
				animationIndex: Qe
			}) : null, Mn = on.length > 0 ? /* @__PURE__ */ Q("div", {
				className: "contents",
				children: /* @__PURE__ */ Q($d, {
					validationMode: W ? "external" : "local",
					amountValidationMode: "external",
					textMode: W ? "resolved" : "keys",
					fields: on,
					translateKey: B,
					translateKeys: Ae,
					disabled: ei,
					amountError: z,
					renderBelowFieldContent: tt,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: rt,
					renderAfterField: at,
					renderAfterFieldRow: st,
					animateRows: T,
					animationStartIndex: $e,
					animationTotalCount: Ke,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !lt && ft,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !lt && (!xt && !en || Et(on)),
					addLastFieldBottomPadding: !lt && !xt && !en && !Re,
					reserveTrailingActionClearance: !lt && Re
				})
			}) : null, Nn = b && (!!wn || !!Mn || !ut && (!!En || !!An || !!jn)), Pn = /* @__PURE__ */ $(mn, { children: [
				wn,
				!ut && An,
				!ut && En,
				!ut && jn,
				Mn
			] }), In = /* @__PURE__ */ Q("div", {
				"data-slot": "quick-payment-form-grid",
				className: H(Tt, Qt && "overflow-visible", Qt && lt ? "pt-3" : Qt || ut ? "pt-0" : ct ? "pt-2" : "pt-0"),
				children: Pn
			}), Rn = bt ? Dt(In) : In, zn = /* @__PURE__ */ $(mn, { children: [
				ut && An,
				ut && En,
				ut && jn,
				Nn && /* @__PURE__ */ Q(Ep, {
					kind: "form",
					chrome: Qt ? "plain" : "contained",
					fieldEdgeSpacing: St ? "balanced" : "default",
					animateEntrance: T,
					children: Rn
				})
			] }), Bn = /* @__PURE__ */ $(mn, { children: [
				_t && wn ? kt(wn) : wn,
				An,
				En,
				jn,
				_t && Mn ? kt(Mn) : Mn
			] }), Hn = yt ? kt(Bn) : Bn, Un = O.attrs("payment-form", { slug: e }), Gn = H(Un.className, b ? "contents" : [
				Tt,
				T && "pc-enter-rise",
				"pt-0"
			]), Kn = b ? zn : Hn;
			return /* @__PURE__ */ $(mn, { children: [
				W && /* @__PURE__ */ Q(Gd, { runtime: W }),
				je && /* @__PURE__ */ Q(Fe, {
					sourceId: ht,
					state: Me,
					resolveState: W ? {
						map: pt,
						values: I
					} : void 0
				}),
				!W && /* @__PURE__ */ Q(Wm, {
					attempt: j,
					values: r,
					readMaterial: wi
				}),
				/* @__PURE__ */ Q(Bm, {
					enabled: Rt,
					externalAmountValue: te,
					hasAmountField: Lt,
					amountValue: ne,
					sharedAmount: N,
					setFieldValue: m,
					validateForm: f,
					setCashierState: De
				}),
				a && /* @__PURE__ */ Q(Vm, {
					onValuesChange: a,
					values: I,
					fields: Ft,
					hasHostedFields: G
				}),
				n && /* @__PURE__ */ Q(Um, {
					onPromptStateChange: n,
					isComplete: ge,
					errorMessage: ji
				}),
				t && /* @__PURE__ */ Q(Hm, {
					onActionsChange: t,
					submitLabel: xe,
					resetLabel: Se,
					submitDisabled: he,
					submitVisible: _e,
					submitLoading: we,
					resetDisabled: Ce,
					resetVisible: M,
					submitForm: () => Oi(d),
					onReset: _i
				}),
				se && se !== l && /* @__PURE__ */ Q(ef, { message: se }),
				Ne && /* @__PURE__ */ Q(Xc, {
					id: O.id("payment-form", { slug: e }),
					className: Gn,
					"data-pc-slot": Un["data-pc-slot"],
					"data-pc-slug": Un["data-pc-slug"],
					"data-pc-part": Un["data-pc-part"],
					noValidate: !0,
					onSubmit: (e) => {
						e.preventDefault(), e.stopPropagation(), Oi(d);
					},
					children: Kn
				}),
				ve && _e && /* @__PURE__ */ Q("div", {
					className: T ? "pc-enter-rise-item" : void 0,
					style: T ? Ol({
						index: et,
						total: Ke,
						direction: "reverse"
					}) : void 0,
					children: /* @__PURE__ */ Q(Pt, {
						variant: "secondary",
						disabled: he,
						loading: we,
						onClick: () => {
							Oi(d);
						},
						label: xe
					})
				})
			] });
		}
	}) : null;
}
function zm({ brand: e, logo: t }) {
	let [n, r] = Z(null), [i, a] = Z({
		key: "",
		values: []
	}), o = ft(n, { tokenName: "--pc-color-secondary" }), s = [
		e ?? "",
		o,
		JSON.stringify(t ?? null)
	].join("|"), c = i.key === s ? i.values : [], l = jt(t, o, !1).find((e) => !c.includes(e));
	return /* @__PURE__ */ Q("div", {
		ref: r,
		"data-slot": "cashier-card-brand-footer",
		className: "flex h-6 w-14 shrink-0 items-center justify-end overflow-hidden pr-0.5",
		children: l && /* @__PURE__ */ Q("img", {
			src: l,
			alt: "",
			"aria-hidden": "true",
			className: H("block h-5 w-12 shrink-0 object-contain object-right", "pc-card-brand-logo-enter"),
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
function Bm({ enabled: e, externalAmountValue: t, hasAmountField: n, amountValue: r, sharedAmount: i, setFieldValue: a, validateForm: o, setCashierState: s }) {
	let c = X(r), l = X(i), u = X(i), d = X({
		externalAmountValue: t,
		hasAmountField: n
	});
	return J(() => {
		let e = d.current;
		(e.externalAmountValue !== t || e.hasAmountField !== n) && (d.current = {
			externalAmountValue: t,
			hasAmountField: n
		}, o());
	}, [
		t,
		n,
		o
	]), J(() => {
		let t = r !== c.current, n = i !== l.current;
		c.current = r, l.current = i, e && (n && !t && r !== i ? (c.current = i, u.current = i, a($p, i, !0)) : !t && n ? u.current = i : r !== u.current && (u.current = r, s((e) => e.initialAmount === r ? e : {
			...e,
			initialAmount: r
		})));
	}, [
		r,
		e,
		s,
		a,
		i
	]), null;
}
function Vm({ onValuesChange: e, values: t, fields: n, hasHostedFields: r }) {
	return J(() => {
		e({
			values: qp(t, n),
			hasHostedFields: r
		});
	}, [
		n,
		r,
		e,
		t
	]), null;
}
function Hm({ onActionsChange: e, submitLabel: t, resetLabel: n, submitDisabled: r, submitVisible: i, submitLoading: a, resetDisabled: o, resetVisible: s, submitForm: c, onReset: l }) {
	let u = X(c), d = X(l);
	J(() => {
		u.current = c;
	}, [c]), J(() => {
		d.current = l;
	}, [l]);
	let f = K(() => u.current(), []), p = K(() => {
		d.current();
	}, []), m = Y(() => ({
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
	return J(() => {
		e && e(m);
	}, [m, e]), J(() => () => {
		e?.(null);
	}, [e]), null;
}
function Um({ onPromptStateChange: e, isComplete: t, errorMessage: n }) {
	return J(() => (e({
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
function Wm({ attempt: e, values: t, readMaterial: n }) {
	return dn(() => {
		if (e?.getSnapshot().phase === "preparing" && n.current) try {
			e.observeMaterial(n.current(t).material);
		} catch {
			e.observeMaterial("invalid");
		}
	}, [
		e,
		n,
		t
	]), null;
}
//#endregion
//#region src/components/PaymentTypeInlineForm.tsx
function Gm({ paymentType: e, selectionId: t, amountValue: n, valueOverrides: r, hideAmountField: i = !1, presentedAmountError: a, renderAfterAmountField: o, surfaceChrome: s = "contained", fieldPanelMode: c = "auto", onActionsChange: l, onPromptStateChange: u, onPreparedValues: d, onValuesChange: f, submitMode: p = "prepare", reserveTrailingActionSpace: m = !1, animateEntrance: h = !0, observePublicState: g = !0, onPaymentSubmitted: _ }) {
	let { translateKeys: v } = st(), y = t ?? ge(e), b = yt(e), x = Le(e, n), S = b && i, C = K((e) => {
		u(y, e);
	}, [u, y]), w = K((t) => {
		d(e, t);
	}, [d, e]), T = K((t) => {
		f(e, t);
	}, [f, e]), E = e.notifications ?? [], D = E.filter((e) => e.orientation === "top"), O = E.filter((e) => e.orientation !== "top");
	return /* @__PURE__ */ $(mn, { children: [
		D.length > 0 && /* @__PURE__ */ Q("div", {
			className: "mb-2 flex flex-col gap-2",
			children: D.map((e, t) => /* @__PURE__ */ Q(fl, {
				notification: e,
				translateKeys: v
			}, `${e.key}-${e.type}-${String(t)}`))
		}),
		/* @__PURE__ */ Q(Rm, {
			id: y,
			onActionsChange: l,
			onPromptStateChange: C,
			onPreparedValues: p === "prepare" ? w : void 0,
			onValuesChange: T,
			hideAmountField: S,
			presentedAmountError: a,
			amountValueOverride: S ? x : void 0,
			renderAfterAmountField: o,
			valueOverrides: r,
			requireDirtyBeforeSubmit: !1,
			comboViewLayout: !0,
			comboViewSurfaceChrome: s,
			fieldPanelMode: c,
			reserveTrailingActionSpace: m,
			animateEntrance: h,
			observePublicState: g,
			onPaymentSubmitted: _
		}),
		O.length > 0 && /* @__PURE__ */ Q("div", {
			className: "mt-3 mb-2 flex flex-col gap-2",
			children: O.map((e, t) => /* @__PURE__ */ Q(fl, {
				notification: e,
				translateKeys: v
			}, `${e.key}-${e.type}-${String(t)}`))
		})
	] });
}
//#endregion
//#region src/components/AccordionSummaryFooter.tsx
function Km({ summaryFields: e, amountDisplay: t, rowVariants: n, merchantElements: r }) {
	return e.length === 0 && !r ? null : /* @__PURE__ */ Q(Fl, {
		summaryFields: e,
		amountDisplay: t,
		merchantElements: r,
		onlyMerchantElements: e.length === 0,
		rowVariants: n,
		variant: null,
		surfaceChrome: "plain",
		animateEntrance: !1
	});
}
//#endregion
//#region src/utils/amountSelection.ts
var qm = (e, t) => !e.isValid && (t || e.status !== "empty" && e.status !== "incomplete"), Jm = (e, t, n, r) => {
	let i = We(e, t, n, r);
	if (i) return r.hasAmountlessAlternative ? `${/[.!?。！？؟]$/u.test(i) ? i : `${i}.`} ${t(r.lockAmount ? "error.amount_locked_amountless_alternative" : "error.amount_amountless_alternative")}` : r.lockAmount ? qt(e, t, n, void 0, r) : i;
};
//#endregion
//#region src/ui/paymentTypeSectionHeadings.tsx
function Ym({ group: e, first: t, scope: n }) {
	let r = nt().attrs("payment-types-section-heading", { slug: `${n ?? "methods"}-${e.id}` });
	return /* @__PURE__ */ Q("h3", {
		...r,
		"data-section-kind": e.kind,
		"data-section-id": e.sectionId,
		"data-i18n-key": e.label.key,
		className: H(r.className, "col-span-full min-w-0 whitespace-normal break-words", "[text-align:var(--pc-text-align-payment-section-heading,start)]", "text-[var(--pc-color-payment-section-heading-text,var(--pc-color-text))]"),
		style: {
			fontSize: "var(--pc-font-payment-section-heading-size, 1rem)",
			fontWeight: "var(--pc-font-payment-section-heading-weight, 600)",
			lineHeight: "var(--pc-font-payment-section-heading-line-height, 1.5rem)",
			letterSpacing: "var(--pc-font-payment-section-heading-letter-spacing, normal)",
			marginBlockStart: t ? 0 : "var(--pc-space-payment-section-gap, 1rem)",
			paddingBlockStart: "var(--pc-space-payment-section-heading-before, 0.5rem)",
			paddingBlockEnd: "var(--pc-space-payment-section-heading-after, 0.5rem)",
			paddingInlineStart: "var(--pc-space-payment-section-heading-inset, 0.25rem)",
			paddingInlineEnd: "0.75rem"
		},
		children: /* @__PURE__ */ Q(U, { children: e.label.value })
	});
}
var Xm = (e, t, n) => {
	if (!t?.length) return e;
	let r = new Map(t.flatMap((e, t) => {
		let n = e.paymentTypeIds[0];
		return n ? [[n, {
			group: e,
			first: t === 0
		}]] : [];
	}));
	return e.flatMap((e) => {
		let t = r.get(String(e.key));
		return t ? [/* @__PURE__ */ Q(Ym, {
			group: t.group,
			first: t.first,
			scope: n
		}, `heading:${t.group.id}`), e] : [e];
	});
}, Zm = {
	xxs: "h-2.5 w-2.5 shrink-0",
	xs: "h-3 w-3 shrink-0",
	sm: "h-3.5 w-3.5 shrink-0"
};
function Qm({ size: e = "sm" }) {
	return /* @__PURE__ */ Q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className: Zm[e],
		"aria-hidden": "true",
		children: /* @__PURE__ */ Q("path", {
			d: "M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region src/components/BonusCountBadge.tsx
var $m = (e) => typeof e == "number" && Number.isFinite(e);
function eh({ count: e, domSlug: t }) {
	let n = nt();
	if (!$m(e) || e <= 0) return null;
	let r = t ? n.id("bonus-count", { slug: t }) : void 0, i = t ? n.id("bonus-count-value", { slug: t }) : void 0;
	return /* @__PURE__ */ $("span", {
		id: r,
		className: [n.className("bonus-count", t ? { slug: t } : void 0), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
		"data-testid": "cashier-bonus-count",
		children: [/* @__PURE__ */ Q(Qm, { size: "xs" }), /* @__PURE__ */ Q("span", {
			id: i,
			className: n.className("bonus-count-value", t ? { slug: t } : void 0),
			"data-testid": "cashier-bonus-count-value",
			children: e
		})]
	});
}
//#endregion
//#region src/ui/PaymentTypesList.tsx
function th({ paymentTypes: e, paymentTypeGroups: t, onSelect: n, listStyle: r, compact: i, stacked: a = !1, showMeta: o = !1, selectable: s = !1, selectedPaymentType: c, renderActions: l, isPaymentTypeDisabled: u, interactionLocked: d = !1, preserveDisabledSelection: f = !1, itemVariant: p = "neutral", itemAppearance: m = "solid", includeItemDataTheme: h = !0, domScope: g, animateItems: _ = !1, bonusEvaluationContext: v, themeSlot: y }) {
	let b = nt(), { translateKey: x } = st(), { getBonusCountForPaymentType: S } = lt(), { uiListStyle: C } = q(Ht), w = r ?? C, T = g ? b.token(g, "list") : null, D = T ? b.id("payment-types-list", { slug: T }) : void 0, O = b.attrs("payment-types-list", T ? { slug: T } : void 0), k = b.attrs("payment-types-list-content", T ? { slug: T } : void 0), A = Y(() => xe(e, c), [e, c]), ee = { staggerMode: "compressed-tail" }, te = Y(() => e.map((e) => {
		let t = ge(e), n = typeof v == "function" ? v(e) : v, r = S(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Q(eh, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		v,
		S,
		e
	]);
	return /* @__PURE__ */ Q(Sd, {
		id: D,
		rootAttributes: O,
		className: "w-full",
		contentAttributes: k,
		contentClassName: _ ? hl : void 0,
		contentStyle: _ ? Al(ee) : void 0,
		listStyle: w,
		compact: i,
		stacked: a,
		children: Xm(te.map(({ paymentTypeKey: e, paymentType: t, count: r, label: a }, c) => {
			let { name: g, nameKeys: v, logo: b, limits: S, fee: C } = t, T = e, D = re(t), O = !!u?.(t), k = D || O, ne = d || O && !D, j = s && A === t && (!k || f), M = l?.(t), N = le(t);
			return /* @__PURE__ */ Q(xd, {
				selectionId: e,
				domSlug: T,
				name: g,
				presentationPaymentType: t,
				nameKeys: v,
				logo: b,
				limits: S,
				fee: C,
				listStyle: w,
				compact: i,
				showMeta: o,
				title: N ?? void 0,
				badges: D ? [{
					id: "unavailable",
					label: x(me),
					status: {
						tone: "neutral",
						showMarker: !1,
						statusLabel: x(E)
					}
				}] : void 0,
				bonusLabel: a,
				hasAvailableBonuses: r > 0,
				onSelect: n,
				interactive: !D,
				isSelected: j,
				isDisabled: ne,
				isUnavailable: D,
				hoverMode: s ? "none" : void 0,
				includeDataTheme: h,
				actions: M,
				variant: p,
				appearance: m,
				themeSlot: y,
				animationClassName: _ ? gl : void 0,
				animationStyle: _ ? kl(c, te.length, "forward", ee) : void 0
			}, e);
		}), t, g)
	});
}
//#endregion
//#region src/hooks/useCashierActionConfirmation.tsx
var nh = ({ isConfirmDisabled: e = !1 } = {}) => {
	let { translateKey: t } = st(), n = wu();
	return Re({
		presentation: "drawer",
		renderActions: ({ confirmLabel: t, confirmVariant: n, isSubmitting: r, onConfirm: i }) => /* @__PURE__ */ Q(Pt, {
			type: "button",
			variant: n,
			size: "xl",
			fullWidth: !0,
			disabled: e,
			loading: r,
			onClick: i,
			label: t
		}),
		drawer: {
			side: "bottom",
			closeButtonLabel: t("cta.close"),
			portalContainer: n,
			actionsPlacement: "footer",
			renderFooter: (e) => /* @__PURE__ */ Q(Gl, {
				placement: "bottom",
				items: [e]
			})
		}
	});
}, rh = () => {
	let e = Bt(), t = at(), n = X(t);
	J(() => {
		n.current = t;
	}, [t]);
	let r = j(), { translateKey: i } = st(), { uiAccountDelete: a, merchantId: o, userId: s, sessionId: c, method: l, currency: u, fetchConfig: d, extraAttributes: f, onAccountDeleted: p } = q(Ht), { selectedPaymentType: m, clearPaymentSelection: h } = bt(), { openActionConfirmation: g, actionConfirmationModal: _ } = nh({ isConfirmDisabled: t });
	return {
		requestAccountDelete: K((_) => {
			if (!a || t) return;
			let v = _.accountId;
			if (!v) return;
			let y = i(_.name), b = i("account.delete.title"), x = i("account.delete.description"), S = i("cta.delete"), C = i("account.delete.error");
			g({
				title: b,
				description: R(x, "name", y),
				confirmLabel: S,
				confirmVariant: "danger",
				errorMessage: C,
				onConfirm: async () => {
					if (!n.current) {
						if (!o || !s || !c) throw Error("Missing required account context.");
						await L({
							client: e,
							query: {
								merchantId: o,
								userId: s,
								sessionId: c,
								accountId: v
							},
							parseAs: "text"
						}), (m === ge(_) || m === _.name || m === v) && h(), p && p(_), await r.invalidateQueries({ queryKey: Te({
							merchantId: o,
							method: l,
							userId: s,
							sessionId: c,
							currency: u,
							fetchConfig: d,
							extraAttributes: f
						}) });
					}
				}
			});
		}, [
			a,
			e,
			t,
			i,
			g,
			o,
			s,
			c,
			m,
			h,
			p,
			r,
			l,
			u,
			d,
			f
		]),
		actionConfirmationModal: _
	};
};
//#endregion
//#region src/hooks/useContentInset.ts
function ih({ primaryContainer: e, overlayContainer: t, useOverlay: n = !1, bottomGap: r = 16, enabled: i = !0 }) {
	let { contentNode: a, setContentInset: o } = iu();
	J(() => {
		if (!i) return;
		if (!a || !e && !t) {
			o(0);
			return;
		}
		let s = n && t ? t : e;
		if (!s) {
			o(0);
			return;
		}
		let c = () => {
			let e = s.getBoundingClientRect().height, t = Math.max(Math.ceil(e + r), 0);
			o(t);
		};
		c();
		let l = null;
		typeof ResizeObserver < "u" && (l = new ResizeObserver(() => {
			c();
		}), e && l.observe(e), t && l.observe(t));
		let u = () => {
			c();
		};
		return typeof window < "u" && window.addEventListener("resize", u), () => {
			l?.disconnect(), typeof window < "u" && window.removeEventListener("resize", u), o(0);
		};
	}, [
		a,
		i,
		r,
		t,
		e,
		o,
		n
	]);
}
//#endregion
//#region src/hooks/useFloatingSheet.ts
var ah = ({ isOpen: e, canShow: t, onClose: n, useOverlayInset: r = !1, enableBackHotkey: i = !0, contentBottomGap: a = 16, reserveContentInset: o = !0 }) => {
	let { contentNode: s } = iu(), c = s?.parentElement ?? s ?? null, [l, u] = Z(null), [d, f] = Z(null);
	return ih({
		primaryContainer: l,
		overlayContainer: d,
		useOverlay: r,
		bottomGap: a,
		enabled: o
	}), Yu({ onBack: e && i ? n : void 0 }), {
		floatingPortalTarget: c,
		showOverlay: !!(e && t && c),
		setFloatingContainer: u,
		setOverlayContainer: f
	};
}, oh = "max-h-[min(31rem,100%)]", sh = "pc-enter-tray-item", ch = 12, lh = {
	...pe,
	height: "36px"
};
function uh({ domScope: e, title: t, triggerLabel: n, canOpen: r, shouldRender: i, triggerContent: a, children: o, animationStyle: s, animateTrigger: c = !0, floating: l = !1, actionContent: u, delegateTriggerInteraction: d = !1 }) {
	let f = nt(), { items: p, setBottomRailFadeSuppressed: m } = iu(), [h, g] = Z({
		canOpen: r,
		isOpen: !1
	});
	h.canOpen !== r && g({
		canOpen: r,
		isOpen: !1
	});
	let { isOpen: _ } = h, [v, y] = Z(null), b = K(() => {
		g((e) => ({
			...e,
			isOpen: !1
		}));
	}, []), x = K(() => {
		r && g((e) => ({
			canOpen: r,
			isOpen: e.canOpen !== r || !e.isOpen
		}));
	}, [r]), S = _ && r, C = l === "adaptive", w = l === !0, T = C && p.bottom.length > 0, E = ud({
		enabled: C && i,
		target: v
	}), D = w || C && E && !T, { floatingPortalTarget: O, showOverlay: k, setFloatingContainer: A, setOverlayContainer: ee } = ah({
		isOpen: S,
		canShow: r && D,
		onClose: b,
		contentBottomGap: ch,
		reserveContentInset: D
	}), ne = D ? S && (k || !O) : S, j = D ? O?.parentElement ?? O ?? void 0 : void 0, M = !!(D && O), re = f.id(`${e}-list`);
	if (J(() => {
		if (M) return m(!0), () => {
			m(!1);
		};
	}, [m, M]), !i) return null;
	let N = {
		close: b,
		isOpen: S,
		panelId: re,
		toggle: x
	}, P = (() => {
		if (!d) return r ? 0 : -1;
	})(), F = (t) => {
		let i = C ? f.id(`${e}-trigger-${t}`) : f.id(`${e}-trigger`), o = f.className(C ? `${e}-trigger-${t}` : `${e}-trigger`);
		return /* @__PURE__ */ Q("div", {
			id: i,
			role: d ? void 0 : "button",
			"data-theme": "neutral",
			style: c ? s : void 0,
			className: H(o, c && sh, "w-full text-left", e === "payment-type-picker" ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]", "transition-colors duration-200", "focus-visible:[outline-style:solid]", "focus-visible:outline-2", "focus-visible:outline-[var(--pc-color-accent)]", "focus-visible:outline-offset-2", !d && "group", r && !d && "cursor-pointer"),
			"aria-label": d ? void 0 : n,
			onClick: d ? void 0 : x,
			onKeyDown: d ? void 0 : (e) => {
				r && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), x());
			},
			"aria-expanded": d ? void 0 : S,
			"aria-controls": d ? void 0 : re,
			"aria-disabled": d ? void 0 : !r,
			tabIndex: P,
			children: a(N)
		});
	}, I = /* @__PURE__ */ Q(Du, {
		isOpen: ne,
		onClose: b,
		portalContainer: j,
		overlayClassName: "flex flex-col justify-end",
		contentClassName: H("w-full min-h-0 rounded-t-[var(--pc-radius-2xl)]", oh),
		title: /* @__PURE__ */ Q("h2", { children: t }),
		contentRef: ee,
		children: o(N)
	}), ie = F("inline"), ae = /* @__PURE__ */ Q("div", {
		ref: C ? y : void 0,
		className: H("mt-0", D && "invisible pointer-events-none"),
		"aria-hidden": D ? "true" : void 0,
		inert: D ? !0 : void 0,
		children: ie
	}), L = F("floating"), R = D && O ? hn(/* @__PURE__ */ Q("div", {
		"data-selection-picker-floating": e,
		"data-payment-type-picker-floating": e === "payment-type-picker" ? "true" : void 0,
		className: H("pointer-events-none absolute inset-0 z-10", "flex items-end justify-center"),
		"aria-hidden": k,
		children: /* @__PURE__ */ $("div", {
			ref: A,
			"data-slot": `${e}-floating-surface`,
			"data-pc-scroll-obstruction": "bottom",
			className: "pointer-events-none relative w-full bg-[var(--pc-color-surface)] pb-4",
			children: [/* @__PURE__ */ Q("div", {
				"aria-hidden": "true",
				"data-slot": `${e}-floating-fade`,
				"data-pc-scroll-obstruction": "bottom",
				style: lh,
				className: "pointer-events-none absolute inset-x-0 bottom-full"
			}), /* @__PURE__ */ Q("div", {
				"data-slot": `${e}-floating-content`,
				className: H("pointer-events-auto relative", te),
				children: L
			})]
		})
	}), O) : null;
	return /* @__PURE__ */ $(mn, { children: [
		w ? R ?? ae : ae,
		C && R,
		I,
		u
	] });
}
//#endregion
//#region src/components/SelectionPickerTriggerListItem.tsx
function dh({ children: e }) {
	return /* @__PURE__ */ Q("div", {
		className: "flex items-center gap-1.5",
		children: e
	});
}
function fh({ actionStopsPropagation: e, actions: t, actionsAlignment: r, animationClassName: i, animationStyle: a, ariaControls: o, ariaExpanded: s, ariaLabel: c, badges: l, bonusLabel: u, compact: d = !0, description: f, descriptionPresentation: p, domSlug: m, fee: h, embedded: g = !1, hasAvailableBonuses: _, hoverMode: v, includeDataTheme: y, infoDrawer: b, interactive: x, interactiveSurface: S, isDisabled: C, isUnavailable: w, isSelected: T, limits: E, logo: D, logoCompact: O, logoContent: k, logoContentPresentation: A, logoSurface: ee, meta: te, metaPlacement: ne, name: j, nameKeys: M, onSelect: re, presentationPaymentType: N, section: P, selectionId: F, showMeta: I, showSelectedIndicator: ie, spacing: ae = "default", themeSlot: L, title: R }) {
	return /* @__PURE__ */ Q(xd, {
		actionStopsPropagation: e,
		actions: t,
		actionsAlignment: r,
		animationClassName: i,
		animationStyle: a,
		ariaControls: o,
		ariaExpanded: s,
		ariaLabel: c,
		badges: l,
		bonusLabel: u,
		description: f,
		descriptionPresentation: p,
		domSlug: m,
		fee: h,
		hasAvailableBonuses: _,
		hoverMode: v,
		includeDataTheme: y,
		infoDrawer: b,
		interactive: x,
		interactiveSurface: S,
		isDisabled: C,
		isUnavailable: w,
		isSelected: T,
		listStyle: n.LIST,
		compact: d,
		limits: E,
		logo: D,
		logoCompact: O,
		logoContent: k,
		logoContentPresentation: A,
		logoSurface: ee,
		meta: te,
		metaPlacement: ne,
		name: j,
		nameKeys: M,
		onSelect: re,
		presentationPaymentType: N,
		section: P,
		selectionId: F,
		showMeta: I,
		showSelectedIndicator: ie,
		themeSlot: L,
		title: R,
		variant: "default",
		appearance: "solid",
		shape: "default",
		balanceLogo: !1,
		density: "compact",
		embedded: g,
		className: H(!g && "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", ae === "payment-list" && "mb-3 @md:mb-4")
	});
}
//#endregion
//#region src/components/BonusPicker.tsx
var ph = [], mh = (e) => typeof e != "number" || !Number.isFinite(e) ? 0 : Math.max(0, Math.min(99, Math.round(e) - 1)), hh = (e) => {
	let t = (e.conditions?.include ?? []).map((e) => e.minAmount).filter((e) => typeof e == "number" && Number.isFinite(e));
	return t.length === 0 ? 0 : Math.max(0, Math.min(...t));
};
function gh({ paymentType: e, paymentTypes: t = ph, amount: i, placement: a = "payment-form", onTopUpAccepted: o }) {
	let s = at(), c = nt(), { translateKey: l } = st(), { formatCurrencyValue: u } = Je(), { uiBonuses: d, offers: f, checkoutState: p, uiBonusesStyle: m, initialAmount: h, method: g, locale: _, selectedBonusCode: v, onBonusSelected: y, onBonusDeselected: b, onBonusToppedUp: x, lockAmount: S, setCashierState: C } = q(Ht), { getBonusAvailabilityForPaymentType: w, getBonusAvailabilityForPaymentTypes: T } = lt(), { selectedBonusCode: E, selectBonusCode: D, ensureDefaultSelection: O } = pd(), [k, A] = Z(!1), [ee, te] = Z(null), [ne, j] = Z(null), M = Y(() => xt(i ?? h), [i, h]), re = Y(() => a === "payment-list" ? T(t, e, { amount: M }) : w(e, { amount: M }), [
		M,
		w,
		T,
		e,
		t,
		a
	]), N = Y(() => kt(re), [re]), F = Y(() => N.filter((e) => e.status === "available").map((e) => e.bonus), [N]), I = Y(() => N.filter(P).map((e) => e.bonus), [N]), ie = F.length, ae = ie > 0, L = Y(() => E ? N.find((e) => P(e) && e.bonus.code === E) ?? null : null, [E, N]), R = L?.bonus ?? null, z = f !== void 0 && p?.phase === "pending", se = z ? I.find((e) => e.code === p.requestedOfferId) : void 0, ce = z ? se : R, le = L?.status === "available", ue = L?.status === "close", de = Y(() => R && le ? Ae(R, M) : null, [
		M,
		le,
		R
	]), fe = de?.fullClaimAmount ?? null, pe = fe === null ? null : Id(fe), me = e ? ge(e) : null, he = R && fe !== null ? [
		me ?? "",
		R.code,
		String(fe)
	].join(":") : null, _e = !!(!S && R && de && M !== null && fe !== null && fe > M && !zd({
		amount: M,
		fullClaimAmount: de.fullClaimAmount,
		claimPercentage: de.claimPercentage
	}) && !Ze(pe ?? "", e?.limits).isOutOfRange), ve = _e && ee !== he, ye = l(g === r.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(_);
	dn(() => {
		e && (v && R || (v && !R ? O(I) : k || O(I)));
	}, [
		v,
		O,
		k,
		e,
		I,
		R
	]);
	let be = K((e, t) => {
		if (s) return;
		let n = F.find((t) => t.code === e);
		n && (E === e || (te(null), j(null), A(!0), D(e), y?.(n)), t());
	}, [
		F,
		s,
		y,
		D,
		E
	]), xe = K((e) => {
		s || (R && b?.(R), te(null), j(null), A(!0), D(null), e?.());
	}, [
		s,
		b,
		D,
		R
	]), Se = K((e) => {
		if (e.stopPropagation(), s || S || !pe || !R || fe === null || M === null || !he) return;
		A(!0), te(null), j(he), C((e) => {
			let t = me ? {
				paymentTypeName: me,
				method: g,
				amount: e.initialAmount
			} : null;
			return {
				...e,
				initialAmount: pe,
				paymentFormDraft: t ? Wd(e.paymentFormDraft, t, pe) : e.paymentFormDraft,
				comboViewFormDraft: t ? Wd(e.comboViewFormDraft, t, pe) : e.comboViewFormDraft
			};
		});
		let t = {
			bonus: R,
			previousAmount: M,
			nextAmount: fe,
			addedAmount: fe - M,
			fullClaimAmount: fe
		};
		x?.(t), o?.(t);
	}, [
		M,
		s,
		S,
		g,
		x,
		o,
		R,
		me,
		C,
		he,
		fe,
		pe
	]), Ce = K((e) => {
		e.stopPropagation(), !s && he && (A(!0), te(he), j(null));
	}, [s, he]), we = a === "payment-list" ? zt(m) : gt(m), Te = a === "payment-list";
	if (!d || !we || !Te && !e || !Te && N.length === 0) return null;
	let Ee = l("cta.choose_bonus"), De = N.length > 0 && !s, Oe = de?.claimPercentage, ke = typeof Oe == "number" && Number.isFinite(Oe) ? Oe : null, je = ke !== null, Me = !!(R && de && zd({
		amount: M,
		fullClaimAmount: de.fullClaimAmount,
		claimPercentage: ke
	})), Pe = M === null ? null : u(M), Fe = R && de ? {
		min: u(hh(R)),
		max: u(de.fullClaimAmount)
	} : void 0, Ie = !!(R && Pe && !de), Le = Me && ne === he, Re = Me || Ie ? "text-[var(--pc-color-success-text)]" : "text-[var(--pc-color-text-muted)]", ze = R && je && (!Me || Le) && ke !== null ? /* @__PURE__ */ Q("div", {
		"data-slot": "bonus-picker-progress",
		className: H("flex w-full min-w-0 flex-col", Re),
		children: /* @__PURE__ */ Q(G, {
			size: "xs",
			variant: Le ? "success" : "secondary",
			stepCount: 100,
			currentStepIndex: mh(ke),
			showInitialFill: !0,
			showPercentageLabel: !0,
			trackTone: "depth",
			rangeLabelsColour: "inherit",
			rangeLabels: Fe,
			ariaLabel: [
				"Bonus claim progress",
				String(Math.round(ke)),
				"percent"
			].join(" ")
		})
	}) : null, Be = !R || f !== void 0 || ue ? null : _e && de && M !== null ? Fu(l("bonus.top_up.desc"), {
		amount: u(de.fullClaimAmount - M),
		targetAmount: u(de.fullClaimAmount)
	}) : Pe ? Fu(l("bonus.selected.desc"), {
		amount: Pe,
		method: ye
	}) : null, Ve = ue ? /* @__PURE__ */ Q(wd, {
		reasons: L.reasons,
		tone: "hint"
	}) : null, He = ve ? /* @__PURE__ */ $(yd, {
		placement: "section",
		dataSlot: "bonus-picker-top-up-actions",
		domClassName: "bonus-picker-top-up-actions",
		children: [/* @__PURE__ */ Q(Pt, {
			"data-slot": "bonus-picker-top-up-reject",
			variant: "neutral",
			appearance: "ghost",
			size: "sm",
			label: l("cta.deny_topup"),
			"aria-label": l("cta.deny_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Q(oe, {}),
			onClick: Ce
		}), /* @__PURE__ */ Q(Pt, {
			"data-slot": "bonus-picker-top-up-accept",
			variant: "secondary",
			appearance: "solid",
			size: "sm",
			label: l("cta.confirm_topup"),
			"aria-label": l("cta.confirm_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Q(Ne, {}),
			onClick: Se
		})]
	}) : null, Ue = c.attrs("bonus-picker-top-up-section"), V = c.attrs("bonus-picker-top-up-content"), We = c.attrs("bonus-picker-top-up-progress"), Ge = Ve || Be || ze ? /* @__PURE__ */ $("div", {
		"data-slot": "bonus-picker-top-up-section",
		"data-pc-slot": Ue["data-pc-slot"],
		className: H(Ue.className, "flex w-full min-w-0 items-center gap-2 @lg:gap-2.5"),
		children: [(Ve || Be || ze) && /* @__PURE__ */ $("div", {
			"data-slot": "bonus-picker-top-up-content",
			"data-pc-slot": V["data-pc-slot"],
			className: H(V.className, "flex min-w-0 flex-1 flex-col gap-1.5"),
			children: [
				Ve,
				!Ve && Be && /* @__PURE__ */ Q("p", {
					className: H("min-w-0 text-sm @md:leading-tight", Re),
					children: /* @__PURE__ */ Q(U, { children: Be })
				}),
				ze && /* @__PURE__ */ Q("div", {
					"data-slot": "bonus-picker-top-up-progress",
					"data-pc-slot": We["data-pc-slot"],
					className: H(We.className, "min-w-0 w-full"),
					children: ze
				})
			]
		}), He]
	}) : null, Ke = R?.termsAndConditions ? {
		titleKey: "bonus.terms.title",
		content: /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-3",
			children: /* @__PURE__ */ Q(Cd, { termsKey: R.termsAndConditions })
		})
	} : void 0, qe = (e) => /* @__PURE__ */ Q(dh, { children: De && /* @__PURE__ */ Q(Pt, {
		variant: "neutral",
		appearance: "ghost",
		size: "sm",
		iconOnly: !0,
		showTooltip: !1,
		"aria-label": Ee,
		onClick: e,
		leadingIcon: /* @__PURE__ */ Q(Qt, {}),
		label: Ee
	}) }), Ye = ae ? /* @__PURE__ */ Q(Pt, {
		variant: "secondary",
		appearance: "solid",
		size: "sm",
		disabled: s,
		leadingIcon: /* @__PURE__ */ Q(B, {}),
		label: String(ie)
	}) : /* @__PURE__ */ Q(B, { className: "h-full w-full" });
	return /* @__PURE__ */ Q(uh, {
		domScope: "bonus-picker",
		title: /* @__PURE__ */ Q(U, { children: Ee }),
		triggerLabel: Ee,
		canOpen: De,
		shouldRender: !0,
		animateTrigger: !1,
		triggerContent: ({ isOpen: e, panelId: t, toggle: n }) => /* @__PURE__ */ Q("div", {
			className: "w-full",
			"aria-busy": z || void 0,
			"data-pc-checkout-state": z ? "pending" : void 0,
			children: /* @__PURE__ */ Q(fh, {
				domSlug: ce?.code ?? "choose-bonus",
				name: ce?.code ?? "cta.choose_bonus",
				title: ce ? ce.title : "",
				description: ce ? ce.description : "bonus.no_bonus_selected",
				descriptionPresentation: ce ? void 0 : "lone-body",
				logo: ce?.logo,
				logoSurface: "bonusLogo",
				logoCompact: !0,
				logoContentPresentation: ce || !ae ? void 0 : "inline-control",
				logoContent: ce ? void 0 : Ye,
				showMeta: !0,
				interactive: De,
				isDisabled: s,
				isUnavailable: ue,
				interactiveSurface: "content",
				hoverMode: De ? "self" : "none",
				themeSlot: "bonus-picker",
				onSelect: n,
				ariaLabel: Ee,
				ariaExpanded: e,
				ariaControls: t,
				spacing: a === "payment-list" ? "payment-list" : "default",
				section: !z && Ge ? {
					border: !0,
					width: "full",
					content: Ge
				} : void 0,
				actions: qe(n),
				actionStopsPropagation: !0,
				infoDrawer: z ? void 0 : Ke
			})
		}),
		delegateTriggerInteraction: !0,
		children: ({ close: e, panelId: t }) => {
			let r = c.attrs("bonus-picker-list");
			return /* @__PURE__ */ Q("div", {
				id: t,
				...r,
				className: H(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ Q(Od, {
					bonuses: N,
					selectedBonusCode: E,
					onSelect: (t) => {
						be(t, e);
					},
					onSkip: () => {
						xe(e);
					},
					selectable: !1,
					showSkipOption: !0,
					isSkipSelected: E === null,
					listStyle: n.LIST,
					compact: !0,
					stacked: !0,
					itemVariant: "neutral",
					itemAppearance: "ghost",
					domScope: "picker",
					themeSlot: "bonus-picker",
					closeReasonPlacement: a === "payment-list" ? "meta" : "info"
				})
			});
		}
	});
}
//#endregion
//#region src/utils/scrollIntoView.ts
var _h = "[data-pc-scroll-obstruction=\"top\"]", vh = "[data-pc-scroll-obstruction=\"bottom\"]", yh = ["[data-pc-scroll-obstruction-extent=\"true\"]", "[data-slot=\"interactive-prompt-tail\"]"].join(","), bh = 4, xh = 8, Sh = 64, Ch = 150, wh = 96, Th = 128, Eh = 180, Dh = 320, Oh = 2, kh = 3, Ah = 1, jh = 520, Mh = .5, Nh = /* @__PURE__ */ new WeakMap(), Ph = /* @__PURE__ */ new WeakSet(), Fh = (e) => typeof window < "u" && e === window, Ih = (e) => {
	if (Fh(e)) return {
		top: 0,
		bottom: window.innerHeight
	};
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom
	};
}, Lh = (e) => Fh(e) ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : e.scrollTop, Rh = (e) => {
	if (Fh(e)) {
		let e = document.documentElement, t = document.body;
		return Math.max(0, Math.max(e.scrollHeight, t.scrollHeight) - window.innerHeight);
	}
	return Math.max(0, e.scrollHeight - e.clientHeight);
}, zh = (e) => Fh(e) ? document.documentElement : e, Bh = (e) => {
	let t = zh(e), n = Nh.get(t);
	n?.cleanupManualScrollListeners?.(), n?.element && Ph.delete(n.element), Nh.delete(t);
}, Vh = (e) => {
	let t = zh(e), n = Nh.get(t);
	n && (n.frameId !== void 0 && window.cancelAnimationFrame(n.frameId), n.timeoutId !== void 0 && window.clearTimeout(n.timeoutId), Bh(e));
}, Hh = () => typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Uh = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0";
}, Wh = (e) => {
	let t = e.getBoundingClientRect(), n = t.top, r = t.right, i = t.bottom, a = t.left, o = Array.from(e.querySelectorAll(yh));
	for (let e of o) {
		if (!Uh(e)) continue;
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
}, Gh = (e) => {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom,
		height: t.height,
		scrollHeight: e.scrollHeight
	};
}, Kh = (e, t) => {
	if (!e) return !1;
	let n = Math.abs(e.top - t.top) <= Ah, r = Math.abs(e.bottom - t.bottom) <= Ah, i = Math.abs(e.height - t.height) <= Ah, a = Math.abs(e.scrollHeight - t.scrollHeight) <= Ah;
	return n && r && i && a;
}, qh = (e, t, n, r) => Uh(e) ? t.height > 0 && t.width > 0 && t.bottom > n && t.top < r : !1, Jh = (e) => {
	let t = Ih(e), n = t.top, r = Array.from(document.querySelectorAll(_h)).map((e) => ({
		element: e,
		rect: Wh(e)
	})).filter(({ element: e, rect: n }) => qh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.max(n, e.bottom);
	return n + bh;
}, Yh = (e) => {
	let t = Ih(e), n = t.bottom, r = Array.from(document.querySelectorAll(vh)).map((e) => ({
		element: e,
		rect: Wh(e)
	})).filter(({ element: e, rect: n }) => qh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.min(n, e.top);
	return n - bh;
}, Xh = (e, t = "start", n = {}) => {
	let r = ol(e) ?? window, i = Jh(r), a = Yh(r), o = e.getBoundingClientRect(), s = Lh(r), c = Math.max(o.height, e.scrollHeight), l = o.top + c, u = s + o.top - i, d = s + l - a, f = (e.previousElementSibling instanceof HTMLElement ? e.previousElementSibling : null)?.getBoundingClientRect(), p = n.revealPreviousCollapsedHeader ?? !0, m = (() => {
		if (t === "start") return u;
		if (t === "nearest-fit") {
			let e = a - i;
			return c > e ? Math.abs(o.top - i) <= xh ? null : Math.abs(o.top - i) > xh ? u : null : o.top < i ? u : l > a ? d : null;
		}
		if (t === "accordion-fit") {
			let t = a - i;
			return p && !Ph.has(e) && f && f.height > 0 && f.height <= Th && f.top < i && o.top >= i ? s + f.top - i : c > t ? o.top >= i && o.top <= i + wh ? null : u : o.top < i ? u : l > a ? d : (o.top >= i && (o.top, i + wh), null);
		}
		return Math.abs(o.top - i) > xh || l > a ? u : null;
	})();
	return m === null ? null : {
		container: r,
		top: Math.max(0, Math.round(m))
	};
}, Zh = (e, t, n = "auto") => {
	let r = Lh(e);
	Math.abs(t - r) <= Mh || (Fh(e) ? window.scrollTo({
		top: t,
		left: window.scrollX,
		behavior: n
	}) : typeof e.scrollTo == "function" ? e.scrollTo({
		top: t,
		left: e.scrollLeft,
		behavior: n
	}) : e.scrollTop = t);
}, Qh = (e, t) => Fh(e) ? Math.max(0, t) : Math.min(Math.max(0, t), Rh(e)), $h = (e, t) => {
	if (Lh(t) <= Mh) return null;
	let n = e.getBoundingClientRect(), r = Jh(t), i = Yh(t);
	return n.top < r || n.bottom > i ? null : { top: n.top };
}, eg = (e, t, n) => {
	if (!n) return;
	let r = t.getBoundingClientRect(), i = Lh(e) + r.top - n.top;
	Zh(e, Qh(e, Math.round(i)), "auto");
}, tg = (e, t, n) => {
	if (typeof window.requestAnimationFrame != "function") {
		t(Date.now());
		return;
	}
	let r = zh(e), i = Nh.get(r), a = {
		frameId: window.requestAnimationFrame(t),
		element: n,
		cleanupManualScrollListeners: i?.cleanupManualScrollListeners
	};
	Nh.set(r, a);
}, ng = (e, t, n, r = !0) => {
	let i = Fh(e) ? window : e, a = Fh(e) ? document : e.ownerDocument, o = !0, s = () => {
		o && t();
	}, c = () => {
		o && n() && t();
	}, l = { passive: !0 };
	return i.addEventListener("wheel", s, l), i.addEventListener("touchmove", s, l), r && i.addEventListener("scroll", c, l), a.addEventListener("keydown", s), () => {
		o = !1, i.removeEventListener("wheel", s), i.removeEventListener("touchmove", s), r && i.removeEventListener("scroll", c), a.removeEventListener("keydown", s);
	};
}, rg = (e) => {
	if (typeof window > "u") return;
	let t = ol(e) ?? window, n = null, r = 0, i = 0, a = null, o = $h(e, t), s = !1;
	Vh(t);
	let c = ng(t, () => {
		Vh(t);
	}, () => !0, !1);
	if (typeof window.requestAnimationFrame != "function") {
		c();
		let t = Xh(e, "nearest-fit");
		t && Zh(t.container, t.top, Hh() ? "auto" : "smooth");
		return;
	}
	let l = (u) => {
		if (!e.isConnected) {
			Bh(t);
			return;
		}
		if (n ??= u, !(u - n >= Ch)) {
			eg(t, e, o), tg(t, l, e);
			return;
		}
		r += 1;
		let d = Gh(e);
		i = Kh(a, d) ? i + 1 : 1, a = d;
		let f = r >= Oh && i >= kh;
		if (!o && !s && u - n >= Eh && Lh(t) > Mh) {
			let n = e.getBoundingClientRect().top > Jh(t) + 192 ? Xh(e, "nearest-fit") : null;
			n && (s = !0, Zh(n.container, Qh(n.container, n.top), Hh() ? "auto" : "smooth"));
		}
		if (Hh()) {
			if (f) {
				let r = Xh(e, "accordion-fit");
				if (r) {
					Bh(t), Zh(r.container, Qh(r.container, r.top), "auto");
					return;
				}
				if (u - n >= Dh) {
					Bh(t);
					return;
				}
			}
			tg(t, l, e);
		} else {
			if (f) {
				let r = Xh(e, "accordion-fit");
				if (r) {
					let n = Qh(r.container, r.top);
					c(), Zh(r.container, n, "smooth");
					let i = ng(t, () => {
						Vh(t);
					}, () => !1, !1), a = window.setTimeout(() => {
						if (!e.isConnected) {
							Bh(t);
							return;
						}
						let n = Xh(e, "accordion-fit");
						n && Zh(n.container, Qh(n.container, n.top), "auto"), Bh(t);
					}, jh);
					Nh.set(zh(t), {
						element: e,
						timeoutId: a,
						cleanupManualScrollListeners: i
					});
					return;
				}
				if (u - n >= Dh) {
					Bh(t);
					return;
				}
			}
			tg(t, l, e);
		}
	};
	Ph.add(e), Nh.set(zh(t), {
		element: e,
		cleanupManualScrollListeners: c
	}), tg(t, l, e);
};
function ig(e) {
	typeof window < "u" && rg(e);
}
function ag(e) {
	if (typeof window > "u" || !e.isConnected || Ph.has(e)) return !1;
	let t = Xh(e, "nearest-fit");
	return t ? Math.abs(t.top - Lh(t.container)) > Sh : !1;
}
//#endregion
//#region src/ui/PaymentTypesAccordion.tsx
function og({ paymentTypes: e, paymentTypeGroups: t, selectedPaymentType: r, onSelect: i, renderPanel: a, renderFooter: o, hasPanel: s, hasPanelBody: c, collapsible: l = !1, showMeta: u = !1, compact: d = !1, renderActions: f, isPaymentTypeDisabled: p, interactionLocked: m = !1, preserveDisabledSelection: h = !1, itemVariant: g = "neutral", itemAppearance: _ = "solid", includeItemDataTheme: v = !0, hoverMode: y = "group", domScope: b, animateItems: x = !1, bonusEvaluationContext: S }) {
	let C = nt(), { translateKey: T } = st(), { getBonusCountForPaymentType: D } = lt(), O = b ? C.token(b, "accordion") : null, k = O ? C.id("payment-types-accordion", { slug: O }) : void 0, A = C.attrs("payment-types-accordion", O ? { slug: O } : void 0), ee = C.attrs("payment-types-accordion-content", O ? { slug: O } : void 0), te = Y(() => xe(e, r ?? null), [e, r]), ne = { staggerMode: "compressed-tail" }, j = Y(() => e.map((e) => {
		let t = ge(e), n = typeof S == "function" ? S(e) : S, r = D(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Q(eh, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		S,
		D,
		e
	]);
	return /* @__PURE__ */ Q("div", {
		id: k,
		...A,
		className: H(A.className, "w-full"),
		children: /* @__PURE__ */ Q("div", {
			...ee,
			className: H("grid grid-cols-1 gap-1.5", ee.className, x && "pc-enter-sweep"),
			style: x ? Al(ne) : void 0,
			children: Xm(j.map(({ paymentTypeKey: e, paymentType: t, count: r, label: b }, S) => {
				let { name: D, nameKeys: O, logo: k, limits: A, fee: ee } = t, M = e, N = C.token(M, "accordion-item"), P = C.id("payment-types-accordion-header", { slug: N }), F = C.id("payment-types-accordion-panel", { slug: N }), I = re(t), ie = !!p?.(t), ae = I || ie, L = m || ie && !I, R = ae || m, oe = te === t && (!ae || h), z = s?.(t) ?? !0, se = oe && !ae && z, ce;
				I || (ce = L ? -1 : 0);
				let ue = le(t), de = f?.(t), fe = se ? o?.(t) : null, pe = c?.(t) ?? !0, he = v ? Ke(g) : void 0, ge = C.attrs("payment-types-accordion-item", { slug: N }), _e = x ? kl(S, j.length, "forward", ne) : void 0, ve = (e) => e.closest("[data-pc-slot=\"payment-types-accordion-item\"]"), ye = (e) => {
					let t = ve(e);
					t && ig(t);
				}, be = (t) => {
					if (R) return;
					i?.(e);
					let n = ve(t), r = !!(se && n && ag(n));
					(!se || r) && ye(t);
				}, xe = (e) => {
					R || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), be(e.currentTarget));
				}, Se = (e) => {
					be(e.currentTarget);
				}, Ce = l && z && !R ? /* @__PURE__ */ Q(Pt, {
					variant: "neutral",
					appearance: "ghost",
					size: "sm",
					iconOnly: !0,
					showTooltip: !1,
					label: `${se ? "Collapse" : "Expand"} ${ue ?? D}`,
					"aria-controls": F,
					"data-slot": "payment-types-accordion-toggle",
					className: H("[--pc-color-button-text:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]"),
					leadingIcon: /* @__PURE__ */ Q(w, { className: Qe({ isOpen: se }) }),
					onClick: (e) => {
						e.stopPropagation(), be(e.currentTarget);
					}
				}) : null, we = Ce ? /* @__PURE__ */ $(mn, { children: [de, Ce] }) : de;
				return /* @__PURE__ */ $(Et, {
					as: "div",
					"data-pc-slot": ge["data-pc-slot"],
					"data-pc-slug": ge["data-pc-slug"],
					dataTheme: he,
					inheritTheme: he === void 0,
					"data-selected": oe ? "true" : void 0,
					chrome: !1,
					spacing: "flush",
					style: _e,
					className: H(ge.className, "rounded-[var(--pc-radius-accordion-item,var(--pc-radius-panel,var(--pc-radius-xl)))]", se || oe ? "overflow-visible" : "overflow-hidden", "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "[background:var(--pc-color-accordion-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", oe && [
						"[outline-style:solid]",
						"outline-3 outline-[var(--pc-color-accordion-item-border-selected,var(--pc-color-secondary))]",
						"outline-offset-[2.5px]"
					], x && "pc-enter-sweep-item"),
					children: [/* @__PURE__ */ Q("div", {
						id: P,
						role: I ? void 0 : "button",
						tabIndex: ce,
						"aria-disabled": I ? void 0 : L || void 0,
						"aria-expanded": z && !I ? se : void 0,
						"aria-controls": z && !I ? F : void 0,
						onClick: I ? void 0 : Se,
						onKeyDown: I ? void 0 : xe,
						className: H(y === "group" && "group", "rounded-[inherit]", "focus-visible:[outline-style:solid]", "focus-visible:outline-2", "focus-visible:outline-[var(--pc-color-accent)]", "focus-visible:-outline-offset-2", !R && "cursor-pointer"),
						children: /* @__PURE__ */ Q(xd, {
							selectionId: e,
							domSlug: M,
							name: D,
							presentationPaymentType: t,
							nameKeys: O,
							logo: k,
							limits: A,
							fee: ee,
							listStyle: n.LIST,
							compact: d,
							showMeta: u,
							title: ue ?? void 0,
							badges: I ? [{
								id: "unavailable",
								label: T(me),
								status: {
									tone: "neutral",
									showMarker: !1,
									statusLabel: T(E)
								}
							}] : void 0,
							bonusLabel: b,
							hasAvailableBonuses: r > 0,
							isSelected: oe,
							showSelectedIndicator: !1,
							isDisabled: L,
							isUnavailable: I,
							interactive: !1,
							hoverMode: y,
							themeSlot: "payment-types-accordion-header",
							includeDataTheme: !1,
							actions: we,
							variant: g,
							appearance: _
						})
					}), z && !I && /* @__PURE__ */ Q("div", {
						id: F,
						role: "region",
						"aria-labelledby": P,
						"aria-hidden": !se,
						className: H("grid", se ? "overflow-visible" : "overflow-hidden", se ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"),
						children: /* @__PURE__ */ Q("div", {
							className: "min-h-0 min-w-0",
							children: se ? /* @__PURE__ */ $(mn, { children: [/* @__PURE__ */ Q("div", {
								"data-slot": "payment-types-accordion-body",
								hidden: !pe,
								className: "min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))] px-1.5 py-2 @md:px-2 @md:py-2",
								children: a(t)
							}), fe ? /* @__PURE__ */ Q("div", {
								"data-slot": "payment-types-accordion-footer",
								className: H("empty:hidden min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))]", "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]", "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]", "px-3 py-2.5 @md:px-3.5"),
								children: fe
							}) : null] }) : null
						})
					})]
				}, e);
			}), t, b)
		})
	});
}
//#endregion
//#region src/ui/PaymentTypeSelectionNotice.tsx
function sg() {
	let { paymentTypeSelectionInvalidated: e } = q(Ht), { translateKey: t } = st();
	return e ? /* @__PURE__ */ Q("p", {
		role: "status",
		className: "p-3 text-sm",
		"data-i18n-key": "payment.selection_changed",
		children: /* @__PURE__ */ Q(U, { children: t("payment.selection_changed") })
	}) : null;
}
//#endregion
//#region src/utils/withdrawalSummary.ts
var cg = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, lg = (e, t, n, i = {}) => {
	if (e !== r.PAYOUT || !n) return [];
	let a = cg(n.balance), o = wt(e, n), s = Be(e, n, i.fee);
	if (a === null || o === null || s === null) return [];
	let c = Math.max(a - o, 0), l = [];
	if ((i.includeBalanceRows ?? !0) && l.push({
		id: "withdrawable-balance",
		label: "field.withdrawable.label",
		value: {
			value: s,
			currency: t
		}
	}, {
		id: "locked-balance",
		label: "field.locked.label",
		value: {
			value: c,
			currency: t
		}
	}), i.includeRemainingBalance) {
		let e = xt(i.amount ?? "") ?? 0;
		l.push({
			id: "remaining-balance",
			label: "field.remaining_balance.label",
			value: {
				value: Math.max(o - ut(e, i.fee), 0),
				currency: t
			}
		});
	}
	return l;
}, ug = ({ uiPaymentConfirmView: e, hasPendingStep: t, hasVisibleInlineContent: n, hasConfirmOnlyContent: r }) => !e && !t && (n || !r) ? {
	action: "submit",
	submitMode: "submit",
	buttonLabel: "pay"
} : {
	action: "confirm",
	submitMode: "prepare",
	buttonLabel: "continue"
};
//#endregion
export { ru as $, Pd as A, Yu as B, Hd as C, Ld as D, zd as E, xd as F, ju as G, Fu as H, vd as I, vu as J, Du as K, pd as L, Id as M, Od as N, Nd as O, Cd as P, uu as Q, fd as R, Ud as S, Bd as T, Mu as U, zu as V, Au as W, hu as X, yu as Y, gu as Z, Rm as _, xn as _t, gh as a, Ol as at, ef as b, yn as bt, uh as c, fl as ct, th as d, Gn as dt, su as et, eh as f, Un as ft, Gm as g, Cn as gt, Km as h, Sn as ht, og as i, pl as it, Fd as j, Md as k, rh as l, cl as lt, qm as m, En as mt, lg as n, Fl as nt, dh as o, ll as ot, Jm as p, Tn as pt, xu as q, sg as r, ml as rt, fh as s, ul as st, ug as t, iu as tt, nh as u, zc as ut, Rp as v, bn as vt, Wd as w, $d as x, _n as xt, wf as y, vn as yt, dd as z };
