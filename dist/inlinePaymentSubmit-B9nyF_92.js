/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { l as e, s as t } from "./observeThemeChanges-BpFOlKgy.js";
import { CashierLayoutListType as n, CashierMethods as r } from "./types/CashierConfig.js";
import "./defaults-ujtlFfus.js";
import { B as i, Dt as a, H as o, Mt as s, N as c, P as l, St as u, Vt as d, _t as f, ct as p, dt as m, ft as h, mt as g, pt as _, rt as v, vt as y, wt as b, yt as x } from "./purchase-CcLuoaCq.js";
import { $n as S, $r as C, $t as w, Bt as T, Cn as E, Cr as D, Dr as O, Dt as k, En as A, F as j, Fi as ee, Gi as M, Gt as te, H as N, Hi as P, Ht as F, Ii as I, It as ne, Jr as L, Jt as R, K as re, Kr as ie, Kt as z, Li as ae, Ln as B, M as oe, Mn as se, Nt as ce, O as le, Or as ue, Ot as de, P as fe, Pi as pe, Qi as me, Qr as he, Qt as ge, Ri as _e, Rn as ve, Rt as ye, S as be, Sn as xe, Ti as Se, Tn as V, Tr as Ce, U as we, Ui as Te, Un as Ee, Ut as De, Vi as Oe, W as ke, Wi as Ae, Wt as H, Xn as je, Xr as Me, Xt as Ne, Yi as Pe, Yn as Fe, Yr as Ie, Yt as Le, Zi as Re, Zr as ze, Zt as Be, _ as Ve, _n as He, _r as Ue, _t as We, a as U, ai as Ge, an as Ke, ar as qe, bn as Je, br as Ye, bt as Xe, dn as Ze, ei as Qe, en as $e, g as et, gn as tt, gt as nt, h as rt, hn as it, ht as at, ii as ot, ir as st, j as ct, jn as lt, ki as ut, kn as dt, kr as ft, kt as pt, ln as mt, lr as ht, mn as gt, mt as _t, n as vt, ni as yt, nn as bt, nt as xt, o as St, pt as Ct, qr as wt, qt as W, ri as Tt, rn as Et, rt as Dt, sr as Ot, ti as kt, tr as At, un as jt, ur as Mt, ut as Nt, vn as Pt, vr as G, w as Ft, wt as It, x as Lt, xn as Rt, xt as zt, yn as Bt, yr as Vt, yt as Ht, zi as Ut, zn as Wt, zt as Gt } from "./usePaymentSelection-BT8H9hee.js";
import { Children as Kt, Component as qt, Fragment as Jt, cloneElement as Yt, createContext as Xt, createElement as Zt, forwardRef as Qt, isValidElement as $t, startTransition as en, useCallback as K, useContext as tn, useEffect as q, useId as nn, useImperativeHandle as rn, useLayoutEffect as an, useMemo as J, useReducer as on, useRef as Y, useState as X } from "react";
import { Fragment as sn, jsx as Z, jsxs as Q } from "react/jsx-runtime";
import { createPortal as cn } from "react-dom";
//#region src/headless/admission.ts
var ln = /* @__PURE__ */ new Set([
	"text",
	"email",
	"tel",
	"number",
	"password",
	"select",
	"checkbox",
	"display",
	"qrcode"
]), un = /* @__PURE__ */ new Set([
	"pan",
	"expiryDate",
	"csc",
	"token",
	"securityCode"
]), dn = (e) => e?.method === "payin" && e.type === "crypto" && e.service === "select" && (!("hfFields" in e) || e.hfFields === void 0 || Array.isArray(e.hfFields) && e.hfFields.length === 0) && (e.fields ?? []).every((e) => ln.has(e.type ?? "text") && (!e.id || !un.has(e.id))), fn = (e) => {
	try {
		fetch(e, {
			method: "POST",
			mode: "no-cors",
			keepalive: !0
		}).catch(() => void 0);
	} catch {}
}, pn = (e) => typeof e == "string" ? e : typeof e == "boolean" ? String(e) : "", mn = (e, t) => {
	let n = e.variantKeyFields, r = e.variants;
	if (!n?.length || !r?.length) return;
	let i = n.map((e) => pn(t[e]));
	if (!i.some((e) => e === "")) return r.find((e) => e.match.length === i.length && e.match.every((e, t) => e === i[t]));
}, hn = (e, t) => {
	if (!e.variantKeyFields?.length) return e;
	let n = mn(e, t);
	return {
		...e,
		defaultValue: n?.defaultValue ?? e.defaultValue,
		notification: n?.notification ?? e.notification
	};
}, gn = (e, t) => (e ?? []).map((e) => hn(e, t)), _n = (e, t) => Qe(B(gn(ie(e, t), t), t), L(e, t), kt(e, t)), vn = (e, t) => {
	let n = t;
	for (let t = 0; t <= e.length; t++) {
		let t = _n(e, n);
		if (!t.length) return n;
		n = {
			...n,
			...Object.fromEntries(t.map((e) => [e.fieldId, e.value]))
		};
	}
	throw Error("Cyclic field reconciliation");
}, yn = [
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
], bn = (e) => typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.trunc(e)) : void 0, xn = (e) => {
	if (!e) return [];
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = r.trim();
		e && !n.has(e) && (n.add(e), t.push(e));
	}
	return t;
}, Sn = () => {
	if (typeof navigator > "u") return;
	let { language: e } = navigator;
	return e?.trim() || xn(Array.isArray(navigator.languages) ? navigator.languages : [])[0];
}, Cn = () => {
	if (typeof navigator > "u") return;
	let e = xn(Array.isArray(navigator.languages) ? navigator.languages : []);
	if (e.length > 0) return e;
	let { language: t } = navigator, n = t?.trim();
	return n ? [n] : void 0;
}, wn = (e) => typeof e == "number" && Number.isFinite(e) ? String(Math.trunc(e)) : void 0, Tn = (e, t) => yn.find(({ width: n, height: r }) => e >= n && t >= r)?.code ?? "05", En = () => {
	if (typeof window > "u" || typeof navigator > "u") return;
	let { screen: e, innerWidth: t, innerHeight: n } = window, r = t || e.width || 0, i = n || e.height || 0, a = bn(e.colorDepth), o = wn(e.height), s = wn(e.width), c = Cn(), l = Sn(), u = String((/* @__PURE__ */ new Date()).getTimezoneOffset()), d = {
		browserJavascriptEnabled: !0,
		challengeWindowSize: Tn(r, i)
	};
	a && (d.browserColorDepth = a), c?.length && (d.browserAcceptLanguage = c), d.browserJavaEnabled = !1, l && (d.browserLanguage = l), o && (d.browserScreenHeight = o), s && (d.browserScreenWidth = s), u && (d.browserTZ = u);
	let f = navigator.userAgent || void 0;
	return f && (d.browserUserAgent = f), d;
}, Dn = () => {
	if (typeof window < "u") try {
		let e = window.nSureSDK?.getDeviceId?.();
		return typeof e == "string" && e.trim() !== "" ? e : void 0;
	} catch {
		return;
	}
}, On = (e, t) => e?.toLowerCase() === "card" && t?.toLowerCase() === "payin", kn = (e, t) => {
	if (On(e, t)) return En();
}, An = (e, t, n) => {
	if (On(e, t)) {
		if (n?.coinflow) {
			jn({
				type: e,
				method: t,
				values: {},
				hostRiskContext: n
			});
			let { deviceId: r } = n.coinflow;
			return r;
		}
		return Dn();
	}
}, jn = ({ type: e, method: t, values: n, hostRiskContext: r }) => {
	if (!On(e, t) || !r?.coinflow || "coinflowDeviceId" in ot(n)) return;
	let { deviceId: i, expiresAt: a } = r.coinflow, o = Date.parse(a);
	if (typeof i != "string" || !i.trim() || i.length > 2048 || !Number.isFinite(o) || o <= Date.now()) throw Error("error.host_risk_context_expired");
}, Mn = (e, t) => {
	if (e) try {
		return JSON.parse(e);
	} catch (e) {
		d.error(t, "[Cashier] Failed to parse override payload", e);
		return;
	}
}, Nn = async (e, t, n) => {
	if (!n) return e;
	let r = await t(yt(e.saveAccount));
	return {
		...e,
		...r
	};
}, Pn = async (e, t, n) => {
	let { amount: r, merchantRequestId: i, ...a } = e;
	return In(e, await Nn(a, t, n));
}, Fn = (e) => {
	let { amount: t, merchantRequestId: n, ...r } = e;
	return In(e, r);
}, In = (e, t) => {
	let { amount: n, merchantRequestId: r } = e, i = { ...t };
	return Object.prototype.hasOwnProperty.call(e, "amount") && (i.amount = n), Object.prototype.hasOwnProperty.call(e, "merchantRequestId") && (i.merchantRequestId = r), i;
}, Ln = (e) => {
	let { values: t, merchantId: n, userId: r, sessionId: i, accountId: a, currency: o, service: s, bonusCode: c, locales: l, extra: u, returnUrl: d, method: p, type: m, debug: h, overrideRaw: g, hostRiskContext: _ } = e, { amount: v, merchantRequestId: y, ...b } = t, x = ot(b);
	if (!("coinflowDeviceId" in x)) {
		let e = An(m, p, _);
		e && (x.coinflowDeviceId = e);
	}
	let S = {
		merchantId: n,
		userId: r,
		sessionId: i,
		amount: Tt(v),
		accountId: a,
		currency: o,
		service: f(s) ?? void 0,
		input: x
	}, C = f(c);
	C && (S.bonusCode = C), l?.length && (S.locales = l), u && Object.keys(u).length > 0 && (S.extra = u);
	let w = f(d);
	w && (S.returnUrl = w);
	let T = f(y);
	T && (S.merchantRequestId = T);
	let E = kn(m, p);
	E && (S.threeds = E);
	let D = Mn(g, h);
	return D && Object.assign(S, D), S;
}, Rn = function(e) {
	return zn(e) && !Bn(e);
};
function zn(e) {
	return !!e && typeof e == "object";
}
function Bn(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Hn(e);
}
var Vn = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Hn(e) {
	return e.$$typeof === Vn;
}
function Un(e) {
	return Array.isArray(e) ? [] : {};
}
function Wn(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? qn(Un(e), e, t) : e;
}
function Gn(e, t, n) {
	return e.concat(t).map(function(e) {
		return Wn(e, n);
	});
}
function Kn(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Wn(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		r[i] = !n.isMergeableObject(t[i]) || !e[i] ? Wn(t[i], n) : qn(e[i], t[i], n);
	}), r;
}
function qn(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Gn, n.isMergeableObject = n.isMergeableObject || Rn;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Kn(e, t, n) : Wn(t, n);
}
qn.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return qn(e, n, t);
	}, {});
};
var Jn = qn, Yn = typeof global == "object" && global && global.Object === Object && global, Xn = typeof self == "object" && self && self.Object === Object && self, Zn = Yn || Xn || Function("return this")(), Qn = Zn.Symbol, $n = Object.prototype, er = $n.hasOwnProperty, tr = $n.toString, nr = Qn ? Qn.toStringTag : void 0;
function rr(e) {
	var t = er.call(e, nr), n = e[nr];
	try {
		e[nr] = void 0;
		var r = !0;
	} catch {}
	var i = tr.call(e);
	return r && (t ? e[nr] = n : delete e[nr]), i;
}
//#endregion
//#region ../../node_modules/lodash-es/_objectToString.js
var ir = Object.prototype.toString;
function ar(e) {
	return ir.call(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetTag.js
var or = "[object Null]", sr = "[object Undefined]", cr = Qn ? Qn.toStringTag : void 0;
function lr(e) {
	return e == null ? e === void 0 ? sr : or : cr && cr in Object(e) ? rr(e) : ar(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_overArg.js
function ur(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_getPrototype.js
var dr = ur(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/lodash-es/isObjectLike.js
function fr(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/lodash-es/isPlainObject.js
var pr = "[object Object]", mr = Function.prototype, hr = Object.prototype, gr = mr.toString, _r = hr.hasOwnProperty, vr = gr.call(Object);
function yr(e) {
	if (!fr(e) || lr(e) != pr) return !1;
	var t = dr(e);
	if (t === null) return !0;
	var n = _r.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && gr.call(n) == vr;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheClear.js
function br() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/eq.js
function xr(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/lodash-es/_assocIndexOf.js
function Sr(e, t) {
	for (var n = e.length; n--;) if (xr(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheDelete.js
var Cr = Array.prototype.splice;
function wr(e) {
	var t = this.__data__, n = Sr(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Cr.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheGet.js
function Tr(e) {
	var t = this.__data__, n = Sr(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheHas.js
function Er(e) {
	return Sr(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheSet.js
function Dr(e, t) {
	var n = this.__data__, r = Sr(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_ListCache.js
function Or(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Or.prototype.clear = br, Or.prototype.delete = wr, Or.prototype.get = Tr, Or.prototype.has = Er, Or.prototype.set = Dr;
//#endregion
//#region ../../node_modules/lodash-es/_stackClear.js
function kr() {
	this.__data__ = new Or(), this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackDelete.js
function Ar(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackGet.js
function jr(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_stackHas.js
function Mr(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/isObject.js
function Nr(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/lodash-es/isFunction.js
var Pr = "[object AsyncFunction]", Fr = "[object Function]", Ir = "[object GeneratorFunction]", Lr = "[object Proxy]";
function Rr(e) {
	if (!Nr(e)) return !1;
	var t = lr(e);
	return t == Fr || t == Ir || t == Pr || t == Lr;
}
//#endregion
//#region ../../node_modules/lodash-es/_coreJsData.js
var zr = Zn["__core-js_shared__"], Br = function() {
	var e = /[^.]+$/.exec(zr && zr.keys && zr.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Vr(e) {
	return !!Br && Br in e;
}
//#endregion
//#region ../../node_modules/lodash-es/_toSource.js
var Hr = Function.prototype.toString;
function Ur(e) {
	if (e != null) {
		try {
			return Hr.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsNative.js
var Wr = /[\\^$.*+?()[\]{}|]/g, Gr = /^\[object .+?Constructor\]$/, Kr = Function.prototype, qr = Object.prototype, Jr = Kr.toString, Yr = qr.hasOwnProperty, Xr = RegExp("^" + Jr.call(Yr).replace(Wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Zr(e) {
	return !Nr(e) || Vr(e) ? !1 : (Rr(e) ? Xr : Gr).test(Ur(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getValue.js
function Qr(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/lodash-es/_getNative.js
function $r(e, t) {
	var n = Qr(e, t);
	return Zr(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_Map.js
var ei = $r(Zn, "Map"), ti = $r(Object, "create");
//#endregion
//#region ../../node_modules/lodash-es/_hashClear.js
function ni() {
	this.__data__ = ti ? ti(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashDelete.js
function ri(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashGet.js
var ii = "__lodash_hash_undefined__", ai = Object.prototype.hasOwnProperty;
function oi(e) {
	var t = this.__data__;
	if (ti) {
		var n = t[e];
		return n === ii ? void 0 : n;
	}
	return ai.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashHas.js
var si = Object.prototype.hasOwnProperty;
function ci(e) {
	var t = this.__data__;
	return ti ? t[e] !== void 0 : si.call(t, e);
}
//#endregion
//#region ../../node_modules/lodash-es/_hashSet.js
var li = "__lodash_hash_undefined__";
function ui(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = ti && t === void 0 ? li : t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Hash.js
function di(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
di.prototype.clear = ni, di.prototype.delete = ri, di.prototype.get = oi, di.prototype.has = ci, di.prototype.set = ui;
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheClear.js
function fi() {
	this.size = 0, this.__data__ = {
		hash: new di(),
		map: new (ei || Or)(),
		string: new di()
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_isKeyable.js
function pi(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/lodash-es/_getMapData.js
function mi(e, t) {
	var n = e.__data__;
	return pi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheDelete.js
function hi(e) {
	var t = mi(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheGet.js
function gi(e) {
	return mi(this, e).get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheHas.js
function _i(e) {
	return mi(this, e).has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheSet.js
function vi(e, t) {
	var n = mi(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_MapCache.js
function yi(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
yi.prototype.clear = fi, yi.prototype.delete = hi, yi.prototype.get = gi, yi.prototype.has = _i, yi.prototype.set = vi;
//#endregion
//#region ../../node_modules/lodash-es/_stackSet.js
var bi = 200;
function xi(e, t) {
	var n = this.__data__;
	if (n instanceof Or) {
		var r = n.__data__;
		if (!ei || r.length < bi - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new yi(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Stack.js
function Si(e) {
	var t = this.__data__ = new Or(e);
	this.size = t.size;
}
Si.prototype.clear = kr, Si.prototype.delete = Ar, Si.prototype.get = jr, Si.prototype.has = Mr, Si.prototype.set = xi;
//#endregion
//#region ../../node_modules/lodash-es/_arrayEach.js
function Ci(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_defineProperty.js
var wi = function() {
	try {
		var e = $r(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignValue.js
function Ti(e, t, n) {
	t == "__proto__" && wi ? wi(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/lodash-es/_assignValue.js
var Ei = Object.prototype.hasOwnProperty;
function Di(e, t, n) {
	var r = e[t];
	(!(Ei.call(e, t) && xr(r, n)) || n === void 0 && !(t in e)) && Ti(e, t, n);
}
//#endregion
//#region ../../node_modules/lodash-es/_copyObject.js
function Oi(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Ti(n, s, c) : Di(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseTimes.js
function ki(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsArguments.js
var Ai = "[object Arguments]";
function ji(e) {
	return fr(e) && lr(e) == Ai;
}
//#endregion
//#region ../../node_modules/lodash-es/isArguments.js
var Mi = Object.prototype, Ni = Mi.hasOwnProperty, Pi = Mi.propertyIsEnumerable, Fi = ji(function() {
	return arguments;
}()) ? ji : function(e) {
	return fr(e) && Ni.call(e, "callee") && !Pi.call(e, "callee");
}, Ii = Array.isArray;
//#endregion
//#region ../../node_modules/lodash-es/stubFalse.js
function Li() {
	return !1;
}
//#endregion
//#region ../../node_modules/lodash-es/isBuffer.js
var Ri = typeof exports == "object" && exports && !exports.nodeType && exports, zi = Ri && typeof module == "object" && module && !module.nodeType && module, Bi = zi && zi.exports === Ri ? Zn.Buffer : void 0, Vi = (Bi ? Bi.isBuffer : void 0) || Li, Hi = 9007199254740991, Ui = /^(?:0|[1-9]\d*)$/;
function Wi(e, t) {
	var n = typeof e;
	return t ??= Hi, !!t && (n == "number" || n != "symbol" && Ui.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/lodash-es/isLength.js
var Gi = 9007199254740991;
function Ki(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gi;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsTypedArray.js
var qi = "[object Arguments]", Ji = "[object Array]", Yi = "[object Boolean]", Xi = "[object Date]", Zi = "[object Error]", Qi = "[object Function]", $i = "[object Map]", ea = "[object Number]", ta = "[object Object]", na = "[object RegExp]", ra = "[object Set]", ia = "[object String]", aa = "[object WeakMap]", oa = "[object ArrayBuffer]", sa = "[object DataView]", ca = "[object Float32Array]", la = "[object Float64Array]", ua = "[object Int8Array]", da = "[object Int16Array]", fa = "[object Int32Array]", pa = "[object Uint8Array]", ma = "[object Uint8ClampedArray]", ha = "[object Uint16Array]", ga = "[object Uint32Array]", _a = {};
_a[ca] = _a[la] = _a[ua] = _a[da] = _a[fa] = _a[pa] = _a[ma] = _a[ha] = _a[ga] = !0, _a[qi] = _a[Ji] = _a[oa] = _a[Yi] = _a[sa] = _a[Xi] = _a[Zi] = _a[Qi] = _a[$i] = _a[ea] = _a[ta] = _a[na] = _a[ra] = _a[ia] = _a[aa] = !1;
function va(e) {
	return fr(e) && Ki(e.length) && !!_a[lr(e)];
}
//#endregion
//#region ../../node_modules/lodash-es/isTypedArray.js
var ya = va, ba = Object.prototype.hasOwnProperty;
function xa(e, t) {
	var n = Ii(e), r = !n && Fi(e), i = !n && !r && Vi(e), a = !n && !r && !i && ya(e), o = n || r || i || a, s = o ? ki(e.length, String) : [], c = s.length;
	for (var l in e) (t || ba.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Wi(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/lodash-es/_isPrototype.js
var Sa = Object.prototype;
function Ca(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Sa);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeys.js
var wa = ur(Object.keys, Object), Ta = Object.prototype.hasOwnProperty;
function Ea(e) {
	if (!Ca(e)) return wa(e);
	var t = [];
	for (var n in Object(e)) Ta.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/isArrayLike.js
function Da(e) {
	return e != null && Ki(e.length) && !Rr(e);
}
//#endregion
//#region ../../node_modules/lodash-es/keys.js
function Oa(e) {
	return Da(e) ? xa(e) : Ea(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssign.js
function ka(e, t) {
	return e && Oi(t, Oa(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeysIn.js
function Aa(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseKeysIn.js
var ja = Object.prototype.hasOwnProperty;
function Ma(e) {
	if (!Nr(e)) return Aa(e);
	var t = Ca(e), n = [];
	for (var r in e) (r != "constructor" || !t && ja.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/keysIn.js
function Na(e) {
	return Da(e) ? xa(e, !0) : Ma(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignIn.js
function Pa(e, t) {
	return e && Oi(t, Na(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneBuffer.js
var Fa = typeof exports == "object" && exports && !exports.nodeType && exports, Ia = Fa && typeof module == "object" && module && !module.nodeType && module, La = Ia && Ia.exports === Fa ? Zn.Buffer : void 0, Ra = La ? La.allocUnsafe : void 0;
function za(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Ra ? Ra(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/lodash-es/_copyArray.js
function Ba(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayFilter.js
function Va(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/lodash-es/stubArray.js
function Ha() {
	return [];
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbols.js
var Ua = Object.prototype.propertyIsEnumerable, Wa = Object.getOwnPropertySymbols, Ga = Wa ? function(e) {
	return e == null ? [] : (e = Object(e), Va(Wa(e), function(t) {
		return Ua.call(e, t);
	}));
} : Ha;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbols.js
function Ka(e, t) {
	return Oi(e, Ga(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayPush.js
function qa(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbolsIn.js
var Ja = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) qa(t, Ga(e)), e = dr(e);
	return t;
} : Ha;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbolsIn.js
function Ya(e, t) {
	return Oi(e, Ja(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetAllKeys.js
function Xa(e, t, n) {
	var r = t(e);
	return Ii(e) ? r : qa(r, n(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeys.js
function Za(e) {
	return Xa(e, Oa, Ga);
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeysIn.js
function Qa(e) {
	return Xa(e, Na, Ja);
}
//#endregion
//#region ../../node_modules/lodash-es/_DataView.js
var $a = $r(Zn, "DataView"), eo = $r(Zn, "Promise"), to = $r(Zn, "Set"), no = $r(Zn, "WeakMap"), ro = "[object Map]", io = "[object Object]", ao = "[object Promise]", oo = "[object Set]", so = "[object WeakMap]", co = "[object DataView]", lo = Ur($a), uo = Ur(ei), fo = Ur(eo), po = Ur(to), mo = Ur(no), ho = lr;
($a && ho(new $a(/* @__PURE__ */ new ArrayBuffer(1))) != co || ei && ho(new ei()) != ro || eo && ho(eo.resolve()) != ao || to && ho(new to()) != oo || no && ho(new no()) != so) && (ho = function(e) {
	var t = lr(e), n = t == io ? e.constructor : void 0, r = n ? Ur(n) : "";
	if (r) switch (r) {
		case lo: return co;
		case uo: return ro;
		case fo: return ao;
		case po: return oo;
		case mo: return so;
	}
	return t;
});
var go = ho, _o = Object.prototype.hasOwnProperty;
function vo(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && _o.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/lodash-es/_Uint8Array.js
var yo = Zn.Uint8Array;
//#endregion
//#region ../../node_modules/lodash-es/_cloneArrayBuffer.js
function bo(e) {
	var t = new e.constructor(e.byteLength);
	return new yo(t).set(new yo(e)), t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneDataView.js
function xo(e, t) {
	var n = t ? bo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneRegExp.js
var So = /\w*$/;
function Co(e) {
	var t = new e.constructor(e.source, So.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneSymbol.js
var wo = Qn ? Qn.prototype : void 0, To = wo ? wo.valueOf : void 0;
function Eo(e) {
	return To ? Object(To.call(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneTypedArray.js
function Do(e, t) {
	var n = t ? bo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/lodash-es/_initCloneByTag.js
var Oo = "[object Boolean]", ko = "[object Date]", Ao = "[object Map]", jo = "[object Number]", Mo = "[object RegExp]", No = "[object Set]", Po = "[object String]", Fo = "[object Symbol]", Io = "[object ArrayBuffer]", Lo = "[object DataView]", Ro = "[object Float32Array]", zo = "[object Float64Array]", Bo = "[object Int8Array]", Vo = "[object Int16Array]", Ho = "[object Int32Array]", Uo = "[object Uint8Array]", Wo = "[object Uint8ClampedArray]", Go = "[object Uint16Array]", Ko = "[object Uint32Array]";
function qo(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Io: return bo(e);
		case Oo:
		case ko: return new r(+e);
		case Lo: return xo(e, n);
		case Ro:
		case zo:
		case Bo:
		case Vo:
		case Ho:
		case Uo:
		case Wo:
		case Go:
		case Ko: return Do(e, n);
		case Ao: return new r();
		case jo:
		case Po: return new r(e);
		case Mo: return Co(e);
		case No: return new r();
		case Fo: return Eo(e);
	}
}
//#endregion
//#region ../../node_modules/lodash-es/_baseCreate.js
var Jo = Object.create, Yo = function() {
	function e() {}
	return function(t) {
		if (!Nr(t)) return {};
		if (Jo) return Jo(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/lodash-es/_initCloneObject.js
function Xo(e) {
	return typeof e.constructor == "function" && !Ca(e) ? Yo(dr(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsMap.js
var Zo = "[object Map]";
function Qo(e) {
	return fr(e) && go(e) == Zo;
}
//#endregion
//#region ../../node_modules/lodash-es/isMap.js
var $o = Qo, es = "[object Set]";
function ts(e) {
	return fr(e) && go(e) == es;
}
//#endregion
//#region ../../node_modules/lodash-es/isSet.js
var ns = ts, rs = 1, is = 2, as = 4, os = "[object Arguments]", ss = "[object Array]", cs = "[object Boolean]", ls = "[object Date]", us = "[object Error]", ds = "[object Function]", fs = "[object GeneratorFunction]", ps = "[object Map]", ms = "[object Number]", hs = "[object Object]", gs = "[object RegExp]", _s = "[object Set]", vs = "[object String]", ys = "[object Symbol]", bs = "[object WeakMap]", xs = "[object ArrayBuffer]", Ss = "[object DataView]", Cs = "[object Float32Array]", ws = "[object Float64Array]", Ts = "[object Int8Array]", Es = "[object Int16Array]", Ds = "[object Int32Array]", Os = "[object Uint8Array]", ks = "[object Uint8ClampedArray]", As = "[object Uint16Array]", js = "[object Uint32Array]", Ms = {};
Ms[os] = Ms[ss] = Ms[xs] = Ms[Ss] = Ms[cs] = Ms[ls] = Ms[Cs] = Ms[ws] = Ms[Ts] = Ms[Es] = Ms[Ds] = Ms[ps] = Ms[ms] = Ms[hs] = Ms[gs] = Ms[_s] = Ms[vs] = Ms[ys] = Ms[Os] = Ms[ks] = Ms[As] = Ms[js] = !0, Ms[us] = Ms[ds] = Ms[bs] = !1;
function Ns(e, t, n, r, i, a) {
	var o, s = t & rs, c = t & is, l = t & as;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Nr(e)) return e;
	var u = Ii(e);
	if (u) {
		if (o = vo(e), !s) return Ba(e, o);
	} else {
		var d = go(e), f = d == ds || d == fs;
		if (Vi(e)) return za(e, s);
		if (d == hs || d == os || f && !i) {
			if (o = c || f ? {} : Xo(e), !s) return c ? Ya(e, Pa(o, e)) : Ka(e, ka(o, e));
		} else {
			if (!Ms[d]) return i ? e : {};
			o = qo(e, d, s);
		}
	}
	a ||= new Si();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), ns(e) ? e.forEach(function(r) {
		o.add(Ns(r, t, n, r, e, a));
	}) : $o(e) && e.forEach(function(r, i) {
		o.set(i, Ns(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Qa : Za : c ? Na : Oa)(e);
	return Ci(m || e, function(r, i) {
		m && (i = r, r = e[i]), Di(o, i, Ns(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/lodash-es/cloneDeep.js
var Ps = 1, Fs = 4;
function Is(e) {
	return Ns(e, Ps | Fs);
}
//#endregion
//#region ../../node_modules/tiny-warning/dist/tiny-warning.esm.js
var Ls = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), Rs = process.env.NODE_ENV === "production";
function zs(e, t) {
	if (!Rs) {
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
var Bs = 4;
function Vs(e) {
	return Ns(e, Bs);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayMap.js
function Hs(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/lodash-es/isSymbol.js
var Us = "[object Symbol]";
function Ws(e) {
	return typeof e == "symbol" || fr(e) && lr(e) == Us;
}
//#endregion
//#region ../../node_modules/lodash-es/memoize.js
var Gs = "Expected a function";
function Ks(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Gs);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Ks.Cache || yi)(), n;
}
Ks.Cache = yi;
//#endregion
//#region ../../node_modules/lodash-es/_memoizeCapped.js
var qs = 500;
function Js(e) {
	var t = Ks(e, function(e) {
		return n.size === qs && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_stringToPath.js
var Ys = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xs = /\\(\\)?/g, Zs = Js(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ys, function(e, n, r, i) {
		t.push(r ? i.replace(Xs, "$1") : n || e);
	}), t;
}), Qs = 1 / 0;
function $s(e) {
	if (typeof e == "string" || Ws(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Qs ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseToString.js
var ec = 1 / 0, tc = Qn ? Qn.prototype : void 0, nc = tc ? tc.toString : void 0;
function rc(e) {
	if (typeof e == "string") return e;
	if (Ii(e)) return Hs(e, rc) + "";
	if (Ws(e)) return nc ? nc.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -ec ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/toString.js
function ic(e) {
	return e == null ? "" : rc(e);
}
//#endregion
//#region ../../node_modules/lodash-es/toPath.js
function ac(e) {
	return Ii(e) ? Hs(e, $s) : Ws(e) ? [e] : Ba(Zs(ic(e)));
}
//#endregion
//#region ../../node_modules/react-is/cjs/react-is.production.min.js
var oc = /* @__PURE__ */ t(((e) => {
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
})), sc = /* @__PURE__ */ t(((e) => {
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
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, ee = o, M = a, te = f, N = !1;
		function P(e) {
			return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(e) || x(e) === l;
		}
		function F(e) {
			return x(e) === u;
		}
		function I(e) {
			return x(e) === c;
		}
		function ne(e) {
			return x(e) === s;
		}
		function L(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function R(e) {
			return x(e) === d;
		}
		function re(e) {
			return x(e) === i;
		}
		function ie(e) {
			return x(e) === h;
		}
		function z(e) {
			return x(e) === m;
		}
		function ae(e) {
			return x(e) === r;
		}
		function B(e) {
			return x(e) === o;
		}
		function oe(e) {
			return x(e) === a;
		}
		function se(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = ee, e.StrictMode = M, e.Suspense = te, e.isAsyncMode = P, e.isConcurrentMode = F, e.isContextConsumer = I, e.isContextProvider = ne, e.isElement = L, e.isForwardRef = R, e.isFragment = re, e.isLazy = ie, e.isMemo = z, e.isPortal = ae, e.isProfiler = B, e.isStrictMode = oe, e.isSuspense = se, e.isValidElementType = b, e.typeOf = x;
	})();
})), cc = /* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? oc() : sc();
}));
(/* @__PURE__ */ t(((e, t) => {
	var n = cc(), r = {
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
function $() {
	return $ = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $.apply(this, arguments);
}
function lc(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function uc(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function dc(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var fc = /*#__PURE__*/ Xt(void 0);
fc.displayName = "FormikContext";
var pc = fc.Provider;
fc.Consumer;
function mc() {
	var e = tn(fc);
	return !e && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.")), e;
}
var hc = function(e) {
	return Array.isArray(e) && e.length === 0;
}, gc = function(e) {
	return typeof e == "function";
}, _c = function(e) {
	return typeof e == "object" && !!e;
}, vc = function(e) {
	return String(Math.floor(Number(e))) === e;
}, yc = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, bc = function(e) {
	return Kt.count(e) === 0;
}, xc = function(e) {
	return _c(e) && gc(e.then);
};
function Sc(e) {
	if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Cc(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = ac(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function wc(e, t, n) {
	for (var r = Vs(e), i = r, a = 0, o = ac(t); a < o.length - 1; a++) {
		var s = o[a], c = Cc(e, o.slice(0, a + 1));
		if (c && (_c(c) || Array.isArray(c))) i = i[s] = Vs(c);
		else {
			var l = o[a + 1];
			i = i[s] = vc(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Tc(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		_c(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Tc(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Ec(e, t) {
	switch (t.type) {
		case "SET_VALUES": return $({}, e, { values: t.payload });
		case "SET_TOUCHED": return $({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Ls.default)(e.errors, t.payload) ? e : $({}, e, { errors: t.payload });
		case "SET_STATUS": return $({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return $({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return $({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return $({}, e, { values: wc(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return $({}, e, { touched: wc(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return $({}, e, { errors: wc(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return $({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return $({}, e, {
			touched: Tc(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return $({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return $({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Dc = {}, Oc = {};
function kc(e) {
	var t = e.validateOnChange, n = t === void 0 || t, r = e.validateOnBlur, i = r === void 0 || r, a = e.validateOnMount, o = a !== void 0 && a, s = e.isInitialValid, c = e.enableReinitialize, l = c !== void 0 && c, u = e.onSubmit, d = uc(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = $({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = Y(f.initialValues), m = Y(f.initialErrors || Dc), h = Y(f.initialTouched || Oc), g = Y(f.initialStatus), _ = Y(!1), v = Y({});
	process.env.NODE_ENV !== "production" && q(function() {
		s !== void 0 && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead."));
	}, []), q(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = X(0)[1], b = Y({
		values: Is(f.initialValues),
		errors: Is(f.initialErrors) || Dc,
		touched: Is(f.initialTouched) || Oc,
		status: Is(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = K(function(e) {
		var t = b.current;
		b.current = Ec(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = K(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Dc) : xc(i) ? i.then(function(e) {
				n(e || Dc);
			}, function(e) {
				process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", e), r(e);
			}) : n(i);
		});
	}, [f.validate]), w = K(function(e, t) {
		var n = f.validationSchema, r = gc(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Nc(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Dc);
			}, function(n) {
				n.name === "ValidationError" ? e(Mc(n)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", n), t(n));
			});
		});
	}, [f.validationSchema]), T = K(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = K(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return gc(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, Cc(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = wc(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = K(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Jn.all([
				t,
				n,
				r
			], { arrayMerge: Fc });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = zc(function(e) {
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
	q(function() {
		o && _.current === !0 && (0, Ls.default)(p.current, f.initialValues) && O(p.current);
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
			var o = f.onReset(x.values, se);
			xc(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	q(function() {
		_.current === !0 && !(0, Ls.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), q(function() {
		l && _.current === !0 && !(0, Ls.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Dc, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Dc
		}));
	}, [l, f.initialErrors]), q(function() {
		l && _.current === !0 && !(0, Ls.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Oc, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Oc
		}));
	}, [l, f.initialTouched]), q(function() {
		l && _.current === !0 && !(0, Ls.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var A = zc(function(e) {
		if (v.current[e] && gc(v.current[e].validate)) {
			var t = Cc(x.values, e), n = v.current[e].validate(t);
			return xc(n) ? (S({
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
					value: Cc(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		})) : Promise.resolve();
	}), j = K(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), ee = K(function(e) {
		delete v.current[e];
	}, []), M = zc(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), te = K(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), N = zc(function(e, t) {
		var r = gc(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? O(r) : Promise.resolve();
	}), P = K(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), F = zc(function(e, t, r) {
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: t
			}
		}), (r === void 0 ? n : r) ? O(wc(x.values, e, t)) : Promise.resolve();
	}), I = K(function(e, t) {
		var n = t, r = e, i;
		if (!yc(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked, d = a.outerHTML, f = a.options, p = a.multiple;
			n = t || s || c, !n && process.env.NODE_ENV !== "production" && jc({
				htmlContent: d,
				documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
				handlerName: "handleChange"
			}), r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Lc(Cc(x.values, n), u, l) : f && p ? Ic(f) : l;
		}
		n && F(n, r);
	}, [F, x.values]), ne = zc(function(e) {
		if (yc(e)) return function(t) {
			return I(t, e);
		};
		I(e);
	}), L = zc(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? O(x.values) : Promise.resolve();
	}), R = K(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id, a = n.outerHTML, o = t || r || i;
		!o && process.env.NODE_ENV !== "production" && jc({
			htmlContent: a,
			documentationAnchorLink: "handleblur-e-any--void",
			handlerName: "handleBlur"
		}), L(o, !0);
	}, [L]), re = zc(function(e) {
		if (yc(e)) return function(t) {
			return R(t, e);
		};
		R(e);
	}), ie = K(function(e) {
		gc(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), z = K(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), ae = K(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), B = zc(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), O().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = ce(), n === void 0) return;
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
	}), oe = zc(function(e) {
		if (e && e.preventDefault && gc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && gc(e.stopPropagation) && e.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
			var t = Sc();
			t !== null && t instanceof HTMLButtonElement && !(t.attributes && t.attributes.getNamedItem("type")) && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type=\"submit\"`. If this is not a submit button, please add `type=\"button\"`."));
		}
		B().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), se = {
		resetForm: k,
		validateForm: O,
		validateField: A,
		setErrors: te,
		setFieldError: P,
		setFieldTouched: L,
		setFieldValue: F,
		setStatus: z,
		setSubmitting: ae,
		setTouched: M,
		setValues: N,
		setFormikState: ie,
		submitForm: B
	}, ce = zc(function() {
		return u(x.values, se);
	}), le = zc(function(e) {
		e && e.preventDefault && gc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && gc(e.stopPropagation) && e.stopPropagation(), k();
	}), ue = K(function(e) {
		return {
			value: Cc(x.values, e),
			error: Cc(x.errors, e),
			touched: !!Cc(x.touched, e),
			initialValue: Cc(p.current, e),
			initialTouched: !!Cc(h.current, e),
			initialError: Cc(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), de = K(function(e) {
		return {
			setValue: function(t, n) {
				return F(e, t, n);
			},
			setTouched: function(t, n) {
				return L(e, t, n);
			},
			setError: function(t) {
				return P(e, t);
			}
		};
	}, [
		F,
		L,
		P
	]), fe = K(function(e) {
		var t = _c(e), n = t ? e.name : e, r = Cc(x.values, n), i = {
			name: n,
			value: r,
			onChange: ne,
			onBlur: re
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		re,
		ne,
		x.values
	]), pe = J(function() {
		return !(0, Ls.default)(p.current, x.values);
	}, [p.current, x.values]), me = J(function() {
		return s === void 0 || pe ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && gc(s) ? s(f) : s;
	}, [
		s,
		pe,
		x.errors,
		f
	]);
	return $({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: re,
		handleChange: ne,
		handleReset: le,
		handleSubmit: oe,
		resetForm: k,
		setErrors: te,
		setFormikState: ie,
		setFieldTouched: L,
		setFieldValue: F,
		setFieldError: P,
		setStatus: z,
		setSubmitting: ae,
		setTouched: M,
		setValues: N,
		submitForm: B,
		validateForm: O,
		validateField: A,
		isValid: me,
		dirty: pe,
		unregisterField: ee,
		registerField: j,
		getFieldProps: fe,
		getFieldMeta: ue,
		getFieldHelpers: de,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Ac(e) {
	var t = kc(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return rn(a, function() {
		return t;
	}), process.env.NODE_ENV !== "production" && q(function() {
		e.render && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>"));
	}, []), Zt(pc, { value: t }, n ? Zt(n, t) : i ? i(t) : r ? gc(r) ? r(t) : bc(r) ? null : Kt.only(r) : null);
}
function jc(e) {
	var t = e.htmlContent, n = e.documentationAnchorLink, r = e.handlerName;
	console.warn("Warning: Formik called `" + r + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + n + "\n  ");
}
function Mc(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return wc(t, e.path, e.message);
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
			Cc(t, o.path) || (t = wc(t, o.path, o.message));
		}
	}
	return t;
}
function Nc(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Pc(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Pc(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		t[r] = Array.isArray(e[r]) === !0 ? e[r].map(function(e) {
			return Array.isArray(e) === !0 || yr(e) ? Pc(e) : e === "" ? void 0 : e;
		}) : yr(e[r]) ? Pc(e[r]) : e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Fc(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Jn(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Jn(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Ic(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Lc(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Rc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? an : q;
function zc(e) {
	var t = Y(e);
	return Rc(function() {
		t.current = e;
	}), K(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function Bc(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = uc(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = uc(mc(), ["validate", "validationSchema"]);
	process.env.NODE_ENV !== "production" && q(function() {
		r && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + n + "\" render={({field, form}) => ...} /> with <Field name=\"" + n + "\">{({field, form, meta}) => ...}</Field>")), a && i && gc(i) && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.")), o && i && gc(i) && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.")), r && i && !bc(i) && (process.env.NODE_ENV === "production" ? zs(!1) : zs(!1, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored"));
	}, []);
	var u = l.registerField, d = l.unregisterField;
	q(function() {
		return u(n, { validate: t }), function() {
			d(n);
		};
	}, [
		u,
		d,
		n,
		t
	]);
	var f = l.getFieldProps($({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r($({}, m, { meta: p }));
	if (gc(i)) return i($({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = uc(c, ["innerRef"]);
			return Zt(o, $({ ref: h }, f, g, { className: s }), i);
		}
		return Zt(o, $({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = uc(c, ["innerRef"]);
		return Zt(_, $({ ref: v }, f, y, { className: s }), i);
	}
	return Zt(_, $({}, f, c, { className: s }), i);
}
var Vc = /*#__PURE__*/ Qt(function(e, t) {
	var n = e.action, r = uc(e, ["action"]), i = n ?? "#", a = mc(), o = a.handleReset, s = a.handleSubmit;
	return Zt("form", $({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Vc.displayName = "Form";
var Hc = function(e, t, n) {
	var r = Kc(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Uc = function(e, t, n) {
	var r = Kc(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Wc = function(e, t, n) {
	var r = Kc(e);
	return r.splice(t, 0, n), r;
}, Gc = function(e, t, n) {
	var r = Kc(e);
	return r[t] = n, r;
}, Kc = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from($({}, e, { length: t + 1 }));
}, qc = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || _c(e) ? n(Kc(e)) : e;
	};
}, Jc = /*#__PURE__*/ function(e) {
	lc(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = qc(r, e), o = qc(t, e), s = wc(n.values, a, e(Cc(n.values, a))), c = r ? i(Cc(n.errors, a)) : void 0, l = t ? o(Cc(n.touched, a)) : void 0;
				return hc(c) && (c = void 0), hc(l) && (l = void 0), $({}, n, {
					values: s,
					errors: r ? wc(n.errors, a, c) : n.errors,
					touched: t ? wc(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Kc(t), [Is(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Uc(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Hc(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Wc(n, e, t);
			}, function(t) {
				return Wc(t, e, null);
			}, function(t) {
				return Wc(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Gc(n, e, t);
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
		}, n.remove = n.remove.bind(dc(n)), n.pop = n.pop.bind(dc(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Ls.default)(Cc(e.formik.values, e.name), Cc(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Kc(n) : [];
			return t ||= r[e], gc(r.splice) && r.splice(e, 1), gc(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = uc(o, ["validate", "validationSchema"]), c = $({}, e, {
			form: s,
			name: a
		});
		return n ? Zt(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : bc(i) ? null : Kt.only(i) : null;
	}, t;
}(qt);
Jc.defaultProps = { validateOnChange: !0 };
//#endregion
//#region ../ui/src/lib/layout/stickyBoundary.ts
var Yc = /* @__PURE__ */ new Set([
	"auto",
	"overlay",
	"scroll"
]), Xc = (e) => Yc.has(e.overflowY) || Yc.has(e.overflow), Zc = (e) => {
	let t = e.parentElement;
	for (; t;) {
		if (Xc(window.getComputedStyle(t))) return t;
		t = t.parentElement;
	}
	return null;
}, Qc = (e) => ({
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
})[e], $c = (e) => e?.orientation === "top", el = "mb-2.5 flex flex-col gap-2", tl = "mt-3 flex flex-col gap-2", nl = [
	"[&_p]:!text-sm",
	"[&_p]:!leading-snug",
	"[&_li]:!text-sm",
	"[&_li]:!leading-snug"
].join(" ");
function rl({ notification: e, role: t, translateKeys: n, tone: r = "status" }) {
	let i = de(), a = f(n(e.keys ?? e.key));
	if (!a) return null;
	let o = r === "status" ? Qc(e.type) : void 0;
	return /* @__PURE__ */ Z("div", {
		...i.attrs("payment-notification-section", { slug: e.type }),
		role: t,
		children: /* @__PURE__ */ Z(pt, {
			content: Vt({ value: a }, e.params).value,
			variant: o,
			inheritTheme: o === void 0,
			size: "sm",
			markdownClassName: nl
		})
	});
}
//#endregion
//#region src/utils/entranceAnimation.ts
var il = "pc-enter-rise", al = "pc-enter-rise-item", ol = "pc-enter-sweep", sl = "pc-enter-sweep-item", cl = 70, ll = 45, ul = 100, dl = 360, fl = 3, pl = 36, ml = 12, hl = 80, gl = (e) => Number.isFinite(e) ? Math.max(0, e) : 0, _l = (e, t) => t <= 1 ? 0 : e / (t - 1), vl = (e, t) => {
	switch (t) {
		case "linear": return e;
		case "ease-out": return 1 - (1 - e) ** 1.35;
		default: return e;
	}
}, yl = ({ index: e, total: t, direction: n = "forward", baseDelayMs: r = cl, staggerMs: i = ll, maxAdditionalDelayMs: a, distribution: o = "step" }) => {
	let s = Math.trunc(gl(e)), c = Math.max(s + 1, Math.trunc(gl(t ?? s + 1))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = (() => {
		if (a !== void 0) {
			let e = vl(_l(l, c), o);
			return Math.round(r + e * a);
		}
		return Math.round(r + l * i);
	})();
	return { animationDelay: `${String(u)}ms` };
}, bl = (e, t, n = "forward", { baseDelayMs: r = ul, maxAdditionalDelayMs: i = dl, distribution: a = "linear", staggerMode: o = "distributed" } = {}) => {
	if (o === "distributed") return yl({
		index: e,
		total: t,
		direction: n,
		baseDelayMs: r,
		maxAdditionalDelayMs: i,
		distribution: a
	});
	let s = Math.trunc(gl(e)), c = Math.max(s + 1, Math.trunc(gl(t))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = Math.min(c, fl), d = Math.max(0, (u - 1) * pl), f = Math.min(gl(i), d), p = u > 1 ? f / (u - 1) : 0, m = (() => {
		if (l < u) return Math.round(r + l * p);
		let e = Math.max(gl(i) - f, 0);
		if (e <= 0 || c - u <= 0) return Math.round(r + f);
		let t = Math.min(ml, e);
		return Math.round(r + f + t);
	})();
	return { animationDelay: `${String(m)}ms` };
}, xl = ({ baseDelayMs: e = ul } = {}) => ({ animationDelay: `${String(Math.max(0, Math.round(e - hl)))}ms` }), Sl = [
	"w-full",
	"border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]",
	"last:border-b-0"
].join(" "), Cl = [
	"flex w-full items-baseline justify-between gap-x-2",
	"text-[var(--pc-color-payment-summary-row-text,var(--pc-color-payment-summary-text,var(--pc-color-text)))]",
	"text-xs @xs:text-sm @md:text-base"
].join(" "), wl = ["font-normal", "text-[var(--pc-color-payment-summary-label-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text)))]"].join(" "), Tl = [
	"min-w-0 break-words",
	"text-[var(--pc-color-payment-summary-value-text,var(--pc-color-text-muted))]",
	"text-right"
].join(" ");
function El({ summaryFields: e, variant: t = "neutral", rowVariants: n, className: r, children: i, panelBorderEdges: a = "all", surfaceChrome: o = "panel", animationDirection: s, animationStyleOptions: c, animateEntrance: l = !1, merchantElements: u = !1, onlyMerchantElements: d = !1, presentationSlot: f = !1 }) {
	let p = tn(Nt), { hasPendingInitialSurface: m } = _t(), h = u && p.hasContent && !m, g = de(), { resolveTextKey: _ } = dt(), { formatSummaryValue: v } = It(), y = t === null, b = t === null ? void 0 : E(t), x = Kt.count(i) > 0 || h || !!p.selectedOffer, S = e.length > 0, C = Ue(e, _, v), w = s ?? (x ? "forward" : "reverse"), T = +!!x + (x && S ? 1 : 0) + e.length, D = +!!x, O = +!!x + (x && S ? 1 : 0), k = {
		staggerMode: "compressed-tail",
		...c
	}, j = A("w-full", o === "panel" && a === "without-top" && "border-t-0", l && "pc-enter-panel", r), ee = g.attrs("payment-summary"), M = g.attrs("payment-summary-children", { part: "children" }), te = g.attrs("payment-summary-divider", { part: "divider" }), N = S ? /* @__PURE__ */ Q("div", {
		className: "flex w-full flex-col",
		children: [x && /* @__PURE__ */ Z("div", {
			"data-pc-slot": te["data-pc-slot"],
			"data-pc-part": te["data-pc-part"],
			"data-payment-summary-divider": "true",
			className: V(te.className, "border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]", l && "pc-enter-panel-item"),
			style: l ? bl(D, T, w, k) : void 0
		}), C.map(({ id: t, label: r, value: i }, a) => {
			let o = r.value, s = t === "amount" && p.orderPricing && G(e[a].value, p.orderPricing.current) ? p.orderPricing : void 0, c = a === 0, u = a === e.length - 1, d = n?.[t], f = d ? E(d) : void 0, m = g.attrs("payment-summary-row", { slug: t }), h = g.attrs("payment-summary-row-content", { slug: t }), _ = g.attrs("payment-summary-label", { slug: t }), v = g.attrs("payment-summary-value", { slug: t });
			return /* @__PURE__ */ Z("div", {
				"data-pc-slot": m["data-pc-slot"],
				"data-pc-slug": m["data-pc-slug"],
				"data-payment-summary-row": t,
				className: V(m.className, Sl, l && "pc-enter-panel-item", !x && c ? "pt-0" : "pt-1.5", u ? "pb-0" : "pb-1.5"),
				style: l ? bl(O + a, T, w, k) : void 0,
				children: /* @__PURE__ */ Z("div", {
					"data-pc-slot": h["data-pc-slot"],
					"data-pc-slug": h["data-pc-slug"],
					"data-payment-summary-row-content": t,
					"data-theme": f,
					className: V(h.className, Cl),
					children: /* @__PURE__ */ Z(Ht, {
						compact: !0,
						baseline: !0,
						wrapTrailing: "narrow",
						trailing: /* @__PURE__ */ Z("span", {
							"data-pc-slot": v["data-pc-slot"],
							"data-pc-slug": v["data-pc-slug"],
							className: V(v.className, Tl),
							children: s ? /* @__PURE__ */ Z(zt, {
								price: s,
								showAdvertisedDiscount: !1
							}) : i
						}),
						children: /* @__PURE__ */ Z("span", {
							"data-pc-slot": _["data-pc-slot"],
							"data-pc-slug": _["data-pc-slug"],
							className: V(_.className, wl),
							children: o
						})
					})
				})
			}, `${t}:${String(a)}`);
		})]
	}) : null;
	return d && !h ? null : /* @__PURE__ */ Z(Rt, {
		as: "div",
		size: "lg",
		"data-pc-slot": ee["data-pc-slot"],
		dataTheme: b,
		inheritTheme: y,
		chrome: o === "panel",
		spacing: o === "plain" ? "flush" : void 0,
		className: V(ee.className, j),
		style: l ? xl(k) : void 0,
		children: /* @__PURE__ */ Q("div", {
			className: "flex w-full flex-col gap-0",
			children: [x && /* @__PURE__ */ Q("div", {
				"data-pc-slot": M["data-pc-slot"],
				"data-pc-part": M["data-pc-part"],
				"data-payment-summary-children": "true",
				className: V(M.className, l && "pc-enter-panel-item"),
				style: l ? bl(0, T, w, k) : void 0,
				children: [
					i,
					p.selectedOffer && /* @__PURE__ */ Z("div", {
						className: "py-2.5",
						"data-pc-selected-offer": p.selectedOffer.id,
						children: /* @__PURE__ */ Z(We, {
							title: p.selectedOffer.title.value,
							description: p.selectedOffer.description.value,
							wrap: !0
						})
					}),
					h && p.content
				]
			}), f ? /* @__PURE__ */ Z(xt, {
				id: "summaryDetails",
				model: { fields: C },
				actions: Dt,
				children: N
			}) : N]
		})
	});
}
//#endregion
//#region src/components/NavigationShellRail.tsx
var Dl = "sticky left-0 right-0 top-0 z-20 flex-shrink-0 w-full", Ol = "relative z-20 w-full", kl = "sticky bottom-0 z-40 h-0 overflow-visible", Al = "-translate-y-full transform-gpu will-change-transform", jl = (e) => e === "top" ? "grid gap-3 justify-center @lg:justify-start" : "grid gap-3", Ml = (e) => e === "top" ? "" : "pb-4", Nl = (e) => we, Pl = (e, t) => ({ gridTemplateColumns: "repeat(" + t.toString() + ", minmax(0, 1fr))" }), Fl = (e) => "flex w-full justify-center";
function Il({ placement: e, items: t, showFade: n = !0, reserveSpace: r = !0 }) {
	let i = de(), a = t.length, o = k(), s = Pl(e, a), c = Fl(e), l = jl(e), u = e === "top" ? Dl : Ol, d = Ml(e), f = Nl(e), p = i.attrs("navigation-rail-wrapper"), m = i.attrs("navigation-rail-inner");
	if (a === 0) return null;
	let h = i.attrs(`navigation-rail-grid-${e}`), g = /* @__PURE__ */ Z("div", {
		id: i.id(`navigation-rail-grid-${e}`),
		...h,
		className: V(h.className, l),
		style: s,
		children: t.map((t, n) => {
			let r = `navigation-shell-item-${e}-${n.toString()}`, a = o(r, "action"), s = i.attrs("navigation-item", { slug: a });
			return /* @__PURE__ */ Z("div", {
				id: i.id("navigation-item", { slug: a }),
				...s,
				className: V(s.className, c),
				children: t
			}, r);
		})
	});
	if (e === "bottom") {
		let t = i.attrs(`navigation-rail-${e}`), a = r === "compact", o = a || r === !0;
		return /* @__PURE__ */ Q("div", {
			id: i.id(`navigation-rail-${e}`),
			...t,
			className: V(t.className, u),
			children: [o && /* @__PURE__ */ Z("div", {
				"aria-hidden": "true",
				inert: !0,
				"data-slot": "navigation-rail-bottom-spacer",
				"data-reserve-space": a ? "compact" : "full",
				className: "invisible pointer-events-none w-full",
				children: /* @__PURE__ */ Z("div", {
					...p,
					className: V(p.className, d),
					children: /* @__PURE__ */ Z("div", {
						...m,
						className: V(m.className, f),
						children: g
					})
				})
			}), /* @__PURE__ */ Z("div", {
				className: kl,
				children: /* @__PURE__ */ Q("div", {
					"data-slot": "navigation-rail-bottom-surface",
					"data-pc-scroll-obstruction": "bottom",
					className: V("pointer-events-none relative w-full bg-[var(--pc-color-surface)]", Al),
					children: [n && /* @__PURE__ */ Z("div", {
						"aria-hidden": "true",
						"data-slot": "navigation-rail-bottom-fade",
						"data-pc-scroll-obstruction": "bottom",
						style: ke,
						className: "pointer-events-none absolute inset-x-0 bottom-full"
					}), /* @__PURE__ */ Z("div", {
						className: "pointer-events-auto",
						children: /* @__PURE__ */ Z("div", {
							...p,
							className: V(p.className, d),
							children: /* @__PURE__ */ Z("div", {
								...m,
								className: V(m.className, f),
								children: g
							})
						})
					})]
				})
			})]
		});
	}
	let _ = i.attrs(`navigation-rail-${e}`);
	return /* @__PURE__ */ Z("div", {
		id: i.id(`navigation-rail-${e}`),
		..._,
		"data-pc-scroll-obstruction": "top",
		className: V(_.className, u),
		children: /* @__PURE__ */ Z("div", {
			...p,
			className: V(p.className, d),
			children: /* @__PURE__ */ Z("div", {
				...m,
				className: V(m.className, f),
				children: g
			})
		})
	});
}
//#endregion
//#region src/context/navigationShell.tsx
var Ll = () => ({
	top: {},
	bottom: {}
}), Rl = "default", zl = (e) => !!e, Bl = (e) => Object.values(e).filter(zl), Vl = (e) => Bl(e).sort((e, t) => e.order - t.order).flatMap((e) => e.items), Hl = (e) => {
	let t = Bl(e);
	return t.length === 0 || t.some((e) => e.reserveSpace === !0) ? !0 : t.some((e) => e.reserveSpace === "compact") ? "compact" : !1;
}, Ul = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), Wl = (e, t) => Object.hasOwn(e, t) ? Object.fromEntries(Object.entries(e).filter(([e]) => e !== t)) : null, Gl = Xt(void 0), Kl = Xt(void 0), ql = Xt(void 0);
function Jl({ children: e, beforeTopRail: t, themeStyles: n }) {
	let [r, i] = X(() => Ll()), a = Y(0), [o, s] = X(null), [c, l] = X(null), [u, d] = X(null), [f, p] = X(0), [m, h] = X(!1), g = K((e) => {
		s(e);
	}, []), _ = K((e) => {
		d(e), e || p(0);
	}, []), v = J(() => ({
		top: Vl(r.top),
		bottom: Vl(r.bottom)
	}), [r]), y = J(() => ({
		top: Hl(r.top),
		bottom: Hl(r.bottom)
	}), [r]), b = K((e, t, n) => {
		let r = n?.reserveSpace ?? !0, o = n?.source ?? Rl;
		i((n) => {
			let i = n[e], s = i[o];
			if (t.length === 0) {
				let t = Wl(i, o);
				return t ? {
					...n,
					[e]: t
				} : n;
			}
			return s && Ul(s.items, t) && s.reserveSpace === r ? n : {
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
				let r = Wl(n[e], t.source);
				return r ? {
					...n,
					[e]: r
				} : n;
			}
			return Object.keys(n[e]).length === 0 ? n : {
				...n,
				[e]: {}
			};
		}) : (i(Ll()), s(null));
	}, []), S = J(() => ({
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
	]), C = J(() => ({
		setItems: b,
		clearItems: x
	}), [x, b]);
	return /* @__PURE__ */ Z(Kl.Provider, {
		value: C,
		children: /* @__PURE__ */ Z(ql.Provider, {
			value: u,
			children: /* @__PURE__ */ Z(Gl.Provider, {
				value: S,
				children: /* @__PURE__ */ Z($l, {
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
function Yl() {
	let e = tn(Gl);
	if (!e) throw Error("useNavigationShell must be used within a NavigationShellProvider");
	return e;
}
function Xl() {
	let e = tn(Kl);
	if (!e) throw Error("useNavigationItems must be used within a NavigationShellProvider");
	return e;
}
function Zl() {
	let e = tn(ql);
	if (e === void 0) throw Error("useNavigationShellContentNode must be used within a NavigationShellProvider");
	return e;
}
function Ql(e, t, n = !0, r) {
	let { setItems: i, clearItems: a } = Xl(), o = nn(), s = r?.source ?? o, c = r?.reserveSpace ?? !0;
	an(() => {
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
	]), an(() => () => {
		a(e, { source: s });
	}, [
		a,
		e,
		s
	]);
}
function $l({ itemsByPlacement: e, reserveSpaceByPlacement: t, overlay: n, onShellNodeChange: r, onContentNodeChange: i, contentInset: a, bottomRailFadeSuppressed: o, beforeTopRail: s, themeStyles: c, children: l }) {
	let u = de(), d = 16 + Math.max(a, 0), f = a > 0 && !o ? { paddingBottom: a } : void 0, p = e.bottom.length > 0 && !o, m = u.attrs("navigation-shell"), h = u.attrs("navigation-main"), g = u.attrs("navigation-content"), _ = u.attrs("navigation-overlay"), v = u.attrs("navigation-overlay-content");
	return /* @__PURE__ */ Q("div", {
		ref: r,
		id: u.id("navigation-shell"),
		...m,
		"data-pc-bottom-rail-fade": p ? "true" : void 0,
		className: V(m.className, "relative flex h-full min-h-0 w-full flex-col overflow-hidden"),
		style: c,
		children: [
			s,
			/* @__PURE__ */ Z(Il, {
				placement: "top",
				items: e.top
			}),
			/* @__PURE__ */ Q("div", {
				id: u.id("navigation-main"),
				...h,
				className: V(h.className, "relative flex min-h-0 flex-1 flex-col"),
				children: [/* @__PURE__ */ Z("div", {
					ref: i,
					id: u.id("navigation-content"),
					...g,
					className: V(g.className, "relative flex min-h-0 flex-1 flex-col overflow-hidden"),
					style: f,
					children: l
				}), n && /* @__PURE__ */ Z("div", {
					id: u.id("navigation-overlay"),
					..._,
					className: V(_.className, "pointer-events-none absolute inset-0 z-60"),
					children: /* @__PURE__ */ Z("div", {
						...v,
						className: V(v.className, "pointer-events-auto absolute right-4"),
						style: { bottom: d },
						children: n
					})
				})]
			}),
			/* @__PURE__ */ Z(Il, {
				placement: "bottom",
				items: e.bottom,
				showFade: !o,
				reserveSpace: t.bottom
			})
		]
	});
}
var eu = {
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
}, tu = JSON.stringify({
	sessionId: "session_example",
	amount: "91038501",
	accountId: "",
	input: {
		holderName: "X'Æon-Júliën Þørnßon-Smith Jr.",
		expiryDate: "0825",
		transactionToken: "12a2ab5daf8ab37b0d6724b23ff8765f"
	},
	userId: "kalle_kula"
}), nu = Xt(void 0), ru = () => void 0, iu = {
	overridePayload: "",
	setOverridePayload: ru,
	resetOverridePayload: ru,
	isLocked: !1,
	setLocked: ru
}, au = (() => {
	let e = !1;
	return () => {
		process.env.NODE_ENV !== "production" && (e ||= (console.warn("useOverridePayload was accessed outside an OverridePayloadProvider. Falling back to a no-op implementation."), !0));
	};
})();
function ou({ children: e }) {
	let [t, n] = X(""), [r, i] = X(!1), a = K(() => {
		n("");
	}, []), o = K((e) => {
		i(e);
	}, []), s = J(() => ({
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
	return /* @__PURE__ */ Z(nu.Provider, {
		value: s,
		children: e
	});
}
function su() {
	return tn(nu) || (au(), iu);
}
//#endregion
//#region src/context/paymentFormReset.tsx
var cu = Xt(void 0);
function lu({ children: e }) {
	let t = Y(null), n = Y(!1), [r, i] = X(!1), a = K((e) => {
		let r = !!e;
		(t.current !== e || n.current !== r) && (t.current = e, n.current !== r && (n.current = r, i(r)));
	}, []), o = K(() => {
		t.current?.();
	}, []), s = J(() => ({
		reset: o,
		registerReset: a,
		hasResetHandler: r
	}), [
		r,
		a,
		o
	]);
	return /* @__PURE__ */ Z(cu.Provider, {
		value: s,
		children: e
	});
}
function uu() {
	let e = tn(cu);
	if (!e) throw Error("usePaymentFormReset must be used within a PaymentFormResetProvider");
	return e;
}
//#endregion
//#region src/context/theme.tsx
var du = Xt({ portalContainer: null }), fu = du.Provider, pu = () => tn(du), mu = (e) => e?.parentElement?.parentElement ?? e?.parentElement ?? e ?? void 0, hu = () => {
	let { portalContainer: e } = pu();
	return mu(e);
}, gu = "bottom", _u = "cta.close";
function vu({ isOpen: e, onClose: t, side: n = gu, title: r, children: i, portalContainer: a, closeButtonLabel: o, overlayClassName: s, contentClassName: c, variant: l, contentRef: u }) {
	let { translateKey: d } = dt(), f = hu(), p = a ?? f, m = o ?? d(_u);
	return /* @__PURE__ */ Z(ne, {
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
var yu = Object.freeze({
	getAccess: () => null,
	setAccess: () => void 0,
	clearAccess: () => void 0,
	getProgress: () => null,
	setProgress: () => void 0,
	clearProgress: () => void 0,
	hasProviderStep: () => !1
}), bu = Xt(yu);
function xu({ children: e, state: t }) {
	return /* @__PURE__ */ Z(bu.Provider, {
		value: t,
		children: e
	});
}
var Su = () => tn(bu), Cu = () => {
	let e = Se(), t = re(), n = N(), r = Su(), i = j(), { clearPaymentState: a, payment: o, status: s } = oe(), { merchantId: c, method: l, userId: u, sessionId: d, currency: f, fetchConfig: p, extraAttributes: m, selectedBonusCode: h, setCashierState: g } = tn(se);
	return K((_) => {
		let v = _?.paymentId ?? void 0, y = _?.merchantId ?? void 0, b = _?.replace ?? !1, x = _?.reachedSummaryViaProvider ?? !1, S = o, C = _?.userFlowDoneUrl ?? (S?.paymentId === v ? S?.redirect?.userFlowDoneUrl : void 0);
		if (v && C && !Ee(s) && fn(C), !v || !y) {
			a(), c && u && d && n.invalidateQueries({ queryKey: Ye({
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
}, wu = ["method"], Tu = (e, t, n, r) => (r?.plainTokens ?? wu).includes(e) ? t : Zt("strong", {
	key: `template-value-${e}-${String(n)}`,
	className: "font-semibold text-[color:inherit]"
}, t), Eu = (e, t, n) => {
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
				r && s.push(r), a < c.length - 1 && s.push(Tu(e, t, i + o + a, n));
			});
		}), r = s, o || (r = [
			...r,
			" ",
			Tu(e, t, i, n)
		]);
	}), r;
}, Du = (e, t, n) => {
	let r = [e];
	return Object.entries(t).forEach(([e, t], i) => {
		t.length !== 0 && (r = r.flatMap((r, a) => {
			if (typeof r != "string" || !r.includes(t)) return [r];
			let o = r.split(t);
			return o.flatMap((r, s) => {
				let c = [];
				return r && c.push(r), s < o.length - 1 && c.push(Tu(e, t, i + a + s, n)), c;
			});
		}));
	}), r;
}, Ou = ".pc-cashier__root", ku = Xt(null);
function Au({ children: e, rootRef: t }) {
	return /* @__PURE__ */ Z(ku.Provider, {
		value: t,
		children: e
	});
}
var ju = () => tn(ku), Mu = /* @__PURE__ */ new Set(["Backspace"]), Nu = (e) => {
	let t = e.querySelectorAll(Ou);
	return t.length === 1 ? t[0] : null;
}, Pu = (e) => e instanceof Node ? e.ownerDocument : typeof document > "u" ? null : document, Fu = (e, t) => (typeof e.composedPath == "function" ? e.composedPath() : []).includes(t) ? !0 : e.target instanceof Node && t.contains(e.target), Iu = (e, t, n) => {
	if (n?.current) return n.current;
	let r = t?.current?.closest(".pc-cashier__root") ?? null;
	if (r) return r;
	let i = Pu(e.target);
	return i ? Nu(i) : null;
}, Lu = (e, t, n) => {
	let r = Iu(e, t, n);
	return !r || Fu(e, r);
}, Ru = (e) => (t) => {
	let { key: n } = t;
	return Mu.has(n) ? !0 : e === "numeric" ? b.test(n) : e === "decimal" ? n === "." || n === "," || b.test(n) : e === "alphanumeric" ? y.test(n) : e === "alphabetic" ? x.test(n) : n.length === 1;
}, zu = (e, t) => e instanceof HTMLElement && !!(t?.current && e === t.current || e.isContentEditable || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement), Bu = ({ inputRef: e, onType: t, shouldHandleKey: n, isEventTargetInteractive: r, inputType: i = "text", onBack: a, backKey: o }) => {
	let s = e !== void 0 && t !== void 0, c = o ?? "Escape", l = ju(), u = J(() => {
		if (s) return n || Ru(i);
	}, [
		s,
		i,
		n
	]);
	q(() => {
		if (!s && !a) return;
		let n = (n) => {
			if (!Lu(n, e, l)) return;
			let i = e?.current ?? null, o = r ? r(n.target) : zu(n.target, e);
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
}, Vu = /* @__PURE__ */ new Set([
	"auto",
	"scroll",
	"overlay"
]), Hu = 60, Uu = (e) => {
	let t = window.getComputedStyle(e);
	return Vu.has(t.overflowY) || Vu.has(t.overflow);
}, Wu = (e, t) => {
	let n = e.parentElement;
	for (; n && n !== t;) {
		if (Uu(n)) return n;
		n = n.parentElement;
	}
	return t;
}, Gu = (e) => ({ gridTemplateColumns: `repeat(${e.toString()}, minmax(0, 1fr))` }), Ku = (e) => e ? e.getBoundingClientRect() : {
	top: 0,
	right: window.innerWidth,
	bottom: window.innerHeight,
	left: 0
}, qu = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && Number(t.opacity) !== 0;
}, Ju = (e, t) => {
	let n = Ku(e), r = t.ownerDocument, i = Array.from(r.querySelectorAll("[data-pc-scroll-obstruction=\"bottom\"]")), a = null;
	return i.forEach((e) => {
		if (e === t || e.contains(t) || t.contains(e) || !qu(e)) return;
		let r = e.getBoundingClientRect(), i = r.left < n.right && r.right > n.left, o = r.top < n.bottom && r.bottom > n.top;
		r.height <= 0 || r.width <= 0 || !i || !o || (a = a === null ? r.top : Math.min(a, r.top));
	}), a;
}, Yu = (e, t, n = 0) => {
	let r = e.getBoundingClientRect(), i = Ku(t), a = Ju(t, e), o = a === null ? i.bottom : Math.min(i.bottom, a), s = Math.max(i.top, o - n);
	return r.top >= i.top && r.left >= i.left && r.bottom <= s && r.right <= i.right;
}, Xu = (e) => Math.max(0, e.scrollHeight - e.clientHeight), Zu = (e, t) => {
	let n = /* @__PURE__ */ new Set([e, t]), r = e.parentElement;
	for (; r && r !== t;) n.add(r), r = r.parentElement;
	return Array.from(n);
}, Qu = (e, t) => {
	let n = e.getBoundingClientRect(), r = Ku(t);
	return n.width > 0 && n.height > 0 && r.right > r.left && r.bottom > r.top;
}, $u = (e, t, n = 0) => !Yu(e, t, n + Xu(e)), ed = (e, t, n, r) => {
	let i = $u(t, n, r);
	return Qu(t, n) ? i : !e.isIntersecting || e.intersectionRatio < 1 || i;
}, td = ({ enabled: e, target: t, bottomMarginPx: n = 0, onFallbackActiveChange: r }) => {
	let i = Zl(), [a, o] = X(!1), s = Y(!0), c = Y(null), l = Y(r), u = t !== null, d = t && i ? Wu(t, i) : null, f = e && u && d !== null, p = f && typeof IntersectionObserver > "u", m = f && Qu(t, d) ? $u(t, d, n) : null, h = p || f && (m ?? a);
	an(() => {
		l.current = r;
	}, [r]), an(() => {
		c.current !== h && (c.current = h, l.current?.(h));
	}, [h]), q(() => (s.current = !0, () => {
		s.current = !1;
	}), []);
	let g = K(() => {
		if (!f || p || !s.current || !Qu(t, d)) return;
		let e = $u(t, d, n);
		o((t) => t === e ? t : e);
	}, [
		d,
		n,
		f,
		p,
		t
	]);
	return an(() => {
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
	]), q(() => {
		if (!f || p) return;
		let e = new IntersectionObserver(([e]) => {
			o(ed(e, t, d, n));
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
	]), q(() => {
		if (!f || p) return;
		window.addEventListener("resize", g), d.addEventListener("scroll", g, { passive: !0 });
		let e = typeof ResizeObserver > "u" ? null : new ResizeObserver(g);
		return Zu(t, d).forEach((t) => {
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
function nd({ domScope: e, items: t, enabled: n = !0, adaptive: r = !0, onFallbackActiveChange: i }) {
	let a = de(), [o, s] = X(null), c = n && t.length > 0, l = td({
		enabled: c && r,
		target: o,
		bottomMarginPx: Hu,
		onFallbackActiveChange: i
	}), u = J(() => Gu(t.length), [t.length]);
	return c ? /* @__PURE__ */ Z("div", {
		ref: s,
		"data-slot": `${e}-adaptive-controls-inline`,
		"aria-hidden": l ? "true" : void 0,
		inert: l ? !0 : void 0,
		className: V(a.className("adaptive-controls-inline", { slug: e }), "w-full", l && "h-px overflow-hidden opacity-0 pointer-events-none"),
		children: /* @__PURE__ */ Z("div", {
			"data-slot": `${e}-adaptive-controls-grid`,
			className: "grid gap-3",
			style: u,
			children: t.map((t, n) => /* @__PURE__ */ Z("div", {
				"data-slot": `${e}-adaptive-control`,
				className: "flex w-full justify-center",
				children: t
			}, `${e}-adaptive-control-${n.toString()}`))
		})
	}) : null;
}
function rd({ domScope: e, items: t, fixed: n, enabled: r = !0, onFallbackActiveChange: i }) {
	let a = r && t.length > 0, [o, s] = X(!1), c = Y(!1);
	Ql("bottom", t, a && (n || o), { reserveSpace: n ? !0 : "compact" });
	let l = K((e) => {
		c.current !== e && (c.current = e, s(e), i?.(e));
	}, [i]);
	return n ? null : /* @__PURE__ */ Z(nd, {
		domScope: e,
		items: t,
		enabled: a,
		onFallbackActiveChange: l
	});
}
//#endregion
//#region src/hooks/useBonusSelection.ts
var id = () => {
	let e = lt()?.checkout, { selectedBonusCode: t, setCashierState: n, offers: r, selectedOfferId: i, selectOffer: a, checkoutState: o } = tn(se), s = K((e) => {
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
}, ad = (e, t) => {
	if (!e) return {
		min: "",
		max: ""
	};
	let n = (e) => e === void 0 ? "" : t(e) || e;
	return {
		min: n(e.min),
		max: n(e.max)
	};
}, od = (e, t, n) => {
	if (!e || !Pe(e)) return "";
	let r = Re(e.direction), i = e.value || "", a = t(i) || i;
	if (e.feeType === "percentage") {
		let e = `${i}%`;
		return r ? `${r}${e}` : e;
	}
	let o = M(e, 0, {
		feeCurrencyFormatter: n,
		formatCurrencyValue: t
	});
	return r && o ? o : r ? o || `${r}${a}` : a;
}, sd = ({ min: e, max: t }) => e && t ? `${e} - ${t}` : e || t || "";
function cd({ limits: e, fee: t, extraItems: n = [], rowGap: r = "tight", align: i = "center", truncate: a = !1, className: o }) {
	let { uiShowFees: s } = tn(se), { translateKey: c } = dt(), { currencyFormatter: l, formatCurrencyValue: u, formatDisplayValue: d } = It(), f = d ?? (() => ""), p = u ?? d, m = a, h = Ae(l ?? null), g = ad(e, f), _ = od(t, p ?? f, h), v = sd(g), y = c("field.fee.label"), b = s && _ ? `${_} ${y}` : "", x = [
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
	return x.length === 0 ? null : /* @__PURE__ */ Z("div", {
		className: V(m ? "min-w-0 line-clamp-2 leading-tight @md:leading-snug" : "flex flex-wrap items-center leading-tight @md:leading-snug", !m && (r === "normal" ? "gap-y-1.5" : "gap-y-0.5"), i === "left" ? "justify-start text-left" : "justify-center text-center", o),
		children: x.map((e, t) => {
			let n = m && t > 0, r = !m && t < x.length - 1, i = /* @__PURE__ */ Q(sn, { children: [e.label && /* @__PURE__ */ Q(sn, { children: [/* @__PURE__ */ Z("span", {
				className: "font-medium",
				children: e.label
			}), ": "] }), /* @__PURE__ */ Z("span", { children: e.value })] });
			return /* @__PURE__ */ Q("span", {
				"data-payment-meta-item": e.id,
				"data-theme": e.id === "bonus" ? "success" : void 0,
				className: V("inline-flex items-center whitespace-nowrap", e.id === "bonus" && "text-[var(--pc-color-text)]"),
				children: [
					n ? /* @__PURE__ */ Z("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null,
					i,
					r ? /* @__PURE__ */ Z("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null
				]
			}, e.id);
		})
	});
}
function ld({ limits: e, fee: t, extraItems: n, align: r = "left", rowGap: i, truncate: a, className: o }) {
	return /* @__PURE__ */ Z(cd, {
		limits: e,
		fee: t,
		extraItems: n,
		align: r,
		rowGap: i,
		truncate: a,
		className: V(["text-xs @sm:text-sm text-[var(--pc-color-text-muted)]"].join(" "), o)
	});
}
//#endregion
//#region src/ui/PaymentTypeListItem.tsx
function ud({ children: e, placement: t = "item", isGrid: n = !1, id: r, dataSlot: i = "payment-list-item-actions", domClassName: a, onClick: o, onKeyDown: s }) {
	let c = Kt.toArray(e).filter(Boolean);
	return c.length === 0 ? null : /* @__PURE__ */ Z("div", {
		id: r,
		"data-slot": i,
		className: V(a, "flex items-center justify-end gap-1", n ? "absolute right-2 top-2" : (() => {
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
var dd = (e, t) => !t || e == null ? e : Kt.map(e, (e) => {
	if (!$t(e)) return e;
	let n = e.props, r = n.children === void 0 ? n.children : dd(n.children, t);
	return e.type === xe ? Yt(e, {
		appearance: "ghost",
		children: r
	}) : r === n.children ? e : Yt(e, { children: r });
});
function fd({ name: e, nameKeys: t, selectionId: r, presentationPaymentType: i, domSlug: a, logo: o, logoContent: s, logoContentPresentation: u = "mark", logoCompact: d, logoSurface: f = "paymentTypeLogo", limits: p, fee: m, onSelect: h, listStyle: g, compact: _, variant: v = "neutral", appearance: y = "solid", shape: b = "default", showMeta: x = !1, title: S, description: C, descriptionPresentation: w = "description", meta: T, metaPlacement: D = "content", isSelected: O = !1, showSelectedIndicator: k = !0, bonusLabel: A = null, badges: j, hasAvailableBonuses: ee, interactive: M = !0, includeDataTheme: te = !0, hoverMode: N = "self", themeSlot: P, isDisabled: F = !1, isUnavailable: I = !1, balanceLogo: ne = !0, density: L = "default", embedded: R = !1, embeddedSurfacePosition: ie = "middle", actions: z, actionsAlignment: ae = "item", interactiveSurface: B = "item", section: oe, actionStopsPropagation: ce = !0, ariaLabel: ue, ariaExpanded: fe, ariaControls: pe, className: me, animationClassName: he, animationStyle: ge, infoDrawer: _e }) {
	let ve = de(), ye = re(), { resolveTextKey: be, resolveTextKeys: Se, translateKey: Ce, translateKeys: we } = dt(), { formatCurrencyValue: Te } = It(), { uiListStyle: Ee, bonuses: De, uiBonuses: Oe, uiBonusesStyle: ke, uiBonusesAvailable: Ae, uiShowFees: H, currency: je } = tn(se), { selectPaymentType: Me } = vt(), [Ne, Pe] = X(!1), Fe = M && !F, Ie = S ?? e, Le = S === void 0 ? we(t ?? e) : Ce(S), Re = Ie.trim().length > 0, ze = C ? Ce(C) : null, Be = typeof C == "string" && C.trim().length > 0, Ve = Ce("aria.logo"), Ue = g ?? Ee, U = Ue === n.GRID, Ge = !!_, qe = d ?? Ge, Je = L === "compact", Ye = b === "rounded", Ze = E(v), Qe = te && !R, $e = !Qe || Ze === void 0, et = ve.token(a ?? e, "item"), it = r ?? e, ot = i ? l({
		paymentType: i,
		id: it,
		label: S === void 0 ? Se(t ?? e) : c(Le),
		description: C ? be(C) : void 0,
		currency: je,
		formatMoney: Te,
		minimumLabel: be("field.limits.min.label"),
		maximumLabel: be("field.limits.max.label"),
		selected: O,
		disabled: F,
		unavailable: I
	}) : null, ct = K(() => {
		Fe && (h ? h(it) : (Me(it), Oe && rt(ke) && (ee ?? st(De)) ? ye({ to: "/bonus" }) : ye({
			to: "/pt/$id",
			params: { id: it }
		})));
	}, [
		De,
		ee,
		Fe,
		ye,
		h,
		it,
		Me,
		Oe,
		ke
	]), lt = (e) => {
		Fe && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ct());
	}, ut = K((e) => {
		e.stopPropagation(), Pe(!0);
	}, []), ft = K(() => {
		Pe(!1);
	}, []), pt = Ae ? A : null, mt = U ? [...j ?? [], ...pt ? [{
		id: "bonus",
		label: pt
	}] : []] : [], ht = Ge ? "gap-2.5 @md:gap-3" : Ye ? "gap-2 @lg:gap-2.5" : "gap-3", gt = Ge ? "py-2 px-2 @md:px-3" : Ye ? V(Je ? "py-2" : "py-2.5", Je ? "px-3" : "px-3.5") : "p-2", _t = (() => {
		switch (ie) {
			case "first": return "pt-0 pb-2.5";
			case "last": return "pt-2.5 pb-0";
			case "only": return "py-0";
			default: return "py-2.5";
		}
	})(), yt = U ? "p-2 gap-0.5" : R && !Ge && !Ye ? V("px-0", _t, "gap-2.5") : V(R ? V("px-0", _t) : gt, ht), bt = U ? null : Ge ? ["[--pc-payment-list-item-content-inset:3.125rem]", "@md:[--pc-payment-list-item-content-inset:3.25rem]"].join(" ") : Ye ? [
		"[--pc-payment-list-item-content-inset:2.75rem]",
		"@sm:[--pc-payment-list-item-content-inset:3.5rem]",
		"@lg:[--pc-payment-list-item-content-inset:3.625rem]",
		"@xl:[--pc-payment-list-item-content-inset:4.625rem]"
	].join(" ") : ["[--pc-payment-list-item-content-inset:3rem]", "@sm:[--pc-payment-list-item-content-inset:3.75rem]"].join(" "), St = U ? "aspect-square flex-col justify-around" : Ge ? "items-center justify-between" : "justify-between @md:justify-around", Ct = x || !!A, wt = Fe || N === "group" ? "transition-[background-color] duration-[250ms] ease-out" : null, W = P === "payment-types-accordion-header", Tt = P === "payment-type-picker", Et = P === "bonus-picker", Ot = W ? "hover:text-[var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : Tt ? "hover:text-[var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : Et ? "hover:text-[var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "hover:text-[var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))]", kt = W ? "active:text-[var(--pc-color-accordion-header-text-active,var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Tt ? "active:text-[var(--pc-color-payment-type-picker-text-active,var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Et ? "active:text-[var(--pc-color-bonus-picker-text-active,var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : "active:text-[var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))]", At = Ot.replace(/^hover:/u, "group-hover:"), jt = kt.replace(/^active:/u, "group-active:"), Mt = W ? O ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : Tt ? O ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : Et ? O ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : O ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))]", Nt = W ? O ? "[background:var(--pc-color-accordion-header-background-selected,var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : Tt ? O ? "[background:var(--pc-color-payment-type-picker-background-selected,var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : Et ? O ? "[background:var(--pc-color-bonus-picker-background-selected,var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : O ? "[background:var(--pc-color-list-item-background-selected,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : "[background:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", Pt = W ? "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : Tt ? "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : Et ? "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : "bg-[var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent)))]", G = W ? "[background:var(--pc-color-accordion-header-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : Tt ? "[background:var(--pc-color-payment-type-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : Et ? "[background:var(--pc-color-bonus-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : "[background:var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest)))]", Ft = W ? "border-[var(--pc-color-accordion-header-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : Tt ? "border-[var(--pc-color-payment-type-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : Et ? "border-[var(--pc-color-bonus-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : "border-[var(--pc-color-list-item-border,var(--pc-color-border))]", Lt = W ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : Tt ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : Et ? "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-list-item,var(--pc-radius-lg))]", zt = W ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-payment-picker,var(--pc-radius-full)))]" : "rounded-[var(--pc-radius-payment-picker,var(--pc-radius-full))]", Bt = null;
	!R && W ? Bt = "[--pc-radius-panel:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !R && Tt ? Bt = "[--pc-radius-panel:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !R && Et ? Bt = "[--pc-radius-panel:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : R || (Bt = "[--pc-radius-panel:var(--pc-radius-list-item,var(--pc-radius-lg))]");
	let Vt = W ? "outline-3 outline-[var(--pc-color-accordion-header-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : Tt ? "outline-3 outline-[var(--pc-color-payment-type-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : Et ? "outline-3 outline-[var(--pc-color-bonus-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : "outline-3 outline-[var(--pc-color-list-item-border-selected,var(--pc-color-secondary))]", Ut = W ? O ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Tt ? O ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Et ? O ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : O ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))]", Wt = W ? "text-[var(--pc-color-accordion-header-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : Tt ? "text-[var(--pc-color-payment-type-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : Et ? "text-[var(--pc-color-bonus-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted))]", Gt = W ? O ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : Tt ? O ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : Et ? O ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : O ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-description-text,var(--pc-color-text-muted))]", Kt = N === "group" ? W ? [
		"group-hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		At,
		"group-active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		jt
	].join(" ") : Tt ? [
		"group-hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		At,
		"group-active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		jt
	].join(" ") : Et ? [
		"group-hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		At,
		"group-active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		jt
	].join(" ") : [
		"group-hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		At,
		"group-active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		jt
	].join(" ") : N === "self" && Fe ? W ? [
		"hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : Tt ? [
		"hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : Et ? [
		"hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot,
		"active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		kt
	].join(" ") : [
		"hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		Ot,
		"active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		kt
	].join(" ") : null, qt = (() => {
		if (R) return V("bg-transparent", Mt);
		switch (y) {
			case "ghost": return V("bg-transparent", Mt);
			case "outline": return V("border", Ft, Pt, Mt);
			case "muted": return V(G, Mt);
			default: return V(Nt, Mt);
		}
	})(), Jt = !!(z || _e), Yt = !(!T || D !== "full-row" || U), Xt = !!oe?.content && !U, Zt = Xt && B === "main", Qt = Xt && B === "content", $t = Fe && !Zt && !Qt, en = $t || N === "group", q = Fe && Zt, nn = Fe && Qt, rn = (F || I) && Ze !== "danger", an = I && !F && Xt && Ze !== "danger", J = U ? "[--pc-payment-list-item-inline-padding:0.5rem]" : R && !Ge && !Ye ? "[--pc-payment-list-item-inline-padding:0rem]" : Ge ? ["[--pc-payment-list-item-inline-padding:0.5rem]", "@md:[--pc-payment-list-item-inline-padding:0.75rem]"].join(" ") : Ye ? Je ? "[--pc-payment-list-item-inline-padding:0.75rem]" : "[--pc-payment-list-item-inline-padding:0.875rem]" : "[--pc-payment-list-item-inline-padding:0.75rem]", on = V("flex w-full min-w-0 overflow-hidden", Xt ? "flex-col" : U ? "flex-col items-center" : "flex-row items-center", Bt, qt, Jt && "relative", !R && (Ye ? zt : Lt), $t && "group cursor-pointer", !Fe && "cursor-default", !Xt && Yt && "flex-wrap", Xt && "gap-y-0", en && wt, en && Kt, bt, J, Qt && ["[--pc-payment-list-item-panel-action-inset:1.25rem]"], rn && !an && [
		"opacity-55",
		"[filter:saturate(0.72)_grayscale(0.18)]",
		"[--pc-enter-final-opacity:0.55]"
	].join(" "), !Xt && yt, !Xt && St, he, me), Y = V(Xt && [
		"flex w-full min-w-0",
		Qt ? "p-2" : "overflow-hidden items-center",
		q && "group cursor-pointer",
		q && wt,
		q && Kt,
		!Qt && yt,
		!Qt && St,
		an && ["opacity-55", "[filter:saturate(0.72)_grayscale(0.18)]"].join(" ")
	]), cn = V(U ? "p-2 gap-0.5" : "py-2 px-3 gap-2 @lg:gap-2.5"), ln = Tt ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]", un = Tt ? "border-t border-[var(--pc-color-payment-type-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : Et ? "border-t border-[var(--pc-color-bonus-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : "border-t border-[var(--pc-color-list-item-divider,var(--pc-color-depth-3))]", dn = V(Qt && [
		"flex w-full min-w-0 overflow-hidden items-center",
		Ye ? zt : ln,
		nn && "group cursor-pointer",
		nn && wt,
		nn && Kt,
		cn,
		St
	]), fn = U ? "text-center" : "text-left", pn = V("w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", F || I ? Wt : Ut, !F && !I && At, !F && !I && jt, U ? "break-words" : "truncate", fn), mn = V("flex min-w-0 flex-col", U ? "items-center w-full" : "items-start flex-1"), hn = Ct ? /* @__PURE__ */ Z(ld, {
		limits: p,
		fee: m,
		align: U ? "center" : "left",
		rowGap: U ? void 0 : "normal",
		extraItems: pt && !U ? [{
			id: "bonus",
			value: pt
		}] : void 0
	}) : null, gn = !!(x && (p?.min || p?.max || H && m?.value)), _n = !!(Be || gn || T), vn = U && mt.length > 0 ? /* @__PURE__ */ Z("div", {
		className: V("flex flex-wrap justify-center gap-1 text-center", _n && "-mt-0.5"),
		children: mt.map((e) => /* @__PURE__ */ Z("span", {
			"data-theme": E(e.variant ?? "success"),
			className: V("inline-flex items-center rounded-[var(--pc-radius-full)] px-2.5 py-1 text-xs font-medium leading-tight", e.variant === "neutral" ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", e.id !== "bonus" && "italic"),
			children: e.label
		}, e.id))
	}) : null, yn = !!(Be || hn || D === "content" && T || vn), bn = w === "lone-body" && Be && !Re && !(gn || pt !== null && !U) && !(D === "content" && T) && !vn, xn = null;
	yn ? xn = /* @__PURE__ */ Q(Xe, {
		className: mn,
		children: [
			Re && /* @__PURE__ */ Z("h3", {
				className: V(ve.className("payment-list-item-title", { slug: et }), pn),
				children: /* @__PURE__ */ Z(le, { children: Le })
			}),
			Be && /* @__PURE__ */ Z("p", {
				className: V(ve.className("payment-list-item-description", { slug: et }), bn ? "text-sm @sm:text-base @md:leading-tight" : "text-xs @sm:text-sm @md:leading-tight", Gt, At, jt, fn),
				children: /* @__PURE__ */ Z(le, { children: ze })
			}),
			hn,
			D === "content" && T,
			vn
		]
	}) : Re && (xn = /* @__PURE__ */ Z("h3", {
		className: V(ve.className("payment-list-item-title", { slug: et }), pn),
		children: /* @__PURE__ */ Z(le, { children: Le })
	}));
	let Sn = _e ? {
		label: Ce(_e.ariaLabelKey ?? _e.titleKey),
		title: /* @__PURE__ */ Z(le, { children: Ce(_e.titleKey) }),
		icon: _e.icon ?? /* @__PURE__ */ Z(Ke, {})
	} : null, Cn = Sn ? /* @__PURE__ */ Z(xe, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Sn.label,
		onClick: ut,
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		iconOnly: !0,
		label: Sn.label,
		leadingIcon: Sn.icon
	}) : null, wn = dd(z, Ge), Tn = K((e) => {
		ce && e.stopPropagation();
	}, [ce]), En = K((e) => {
		ce && e.stopPropagation();
	}, [ce]), Dn = /* @__PURE__ */ Q(ud, {
		id: ve.id("payment-list-item-actions", { slug: et }),
		domClassName: ve.className("payment-list-item-actions", { slug: et }),
		isGrid: U,
		placement: ae,
		onClick: Tn,
		onKeyDown: En,
		children: [Cn, wn]
	}), On = Yt ? /* @__PURE__ */ Z("div", {
		"data-slot": "payment-list-item-full-row-meta",
		className: V(ve.className("payment-list-item-full-row-meta", { slug: et }), "basis-full min-w-0"),
		children: T
	}) : null, kn = Xt ? /* @__PURE__ */ Z("div", {
		"data-slot": "payment-list-item-section",
		onClick: (e) => {
			e.stopPropagation();
		},
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		className: V(ve.className("payment-list-item-section", { slug: et }), "basis-full min-w-0", (oe?.width ?? "content-aligned") === "full" ? ["w-full", Qt ? ["pl-[var(--pc-payment-list-item-panel-action-inset)]", "pr-[var(--pc-payment-list-item-panel-action-inset)]"] : "px-[var(--pc-payment-list-item-inline-padding)]"] : ["ml-[var(--pc-payment-list-item-content-inset)]", "w-[calc(100%-var(--pc-payment-list-item-content-inset))]"], oe?.border && [un, "py-3"]),
		children: oe?.content
	}) : null, An = Sn ? /* @__PURE__ */ Z(vu, {
		isOpen: Ne,
		onClose: ft,
		title: Sn.title,
		children: /* @__PURE__ */ Z("div", {
			className: "px-5 pb-5 pt-2",
			children: _e?.content
		})
	}) : null, jn = U ? "grid" : "list", Mn = [Le, Ve].filter((e) => typeof e == "string" && e.length > 0).join(" "), Nn = ve.attrs("payment-type-logo", { slug: et }), Pn = ve.attrs("payment-type-logo-content", { slug: et }), Fn = u === "inline-control", In = s ? /* @__PURE__ */ Z("div", {
		id: ve.id("payment-type-logo", { slug: et }),
		...Nn,
		className: V(Nn.className, Fn ? "flex shrink-0 items-center justify-center" : [nt(f, jn), He({
			layout: jn,
			compact: qe
		})]),
		children: /* @__PURE__ */ Z("span", {
			...Pn,
			className: V(Pn.className, "flex items-center justify-center", !Fn && tt({
				layout: jn,
				compact: qe
			})),
			children: s
		})
	}) : /* @__PURE__ */ Z(at, {
		id: ve.id("payment-type-logo", { slug: et }),
		logo: o,
		alt: Mn,
		seed: e,
		rootAttributes: Nn,
		contentClassName: Pn.className,
		surface: f,
		listStyle: Ue,
		compact: qe,
		balanceLogo: ne
	}), Ln = (e) => ({
		onClick: e ? ct : void 0,
		onKeyDown: e ? lt : void 0,
		role: e ? "button" : void 0,
		tabIndex: e ? 0 : void 0,
		"aria-label": e ? ue : void 0,
		"aria-expanded": e ? fe : void 0,
		"aria-controls": e ? pe : void 0,
		"aria-disabled": e && F ? !0 : void 0
	}), Rn = R && !U && !Fe && !Ge && !Ye && !F && !I && !O && !P && !Xt && Re && w === "description", zn;
	zn = Rn ? /* @__PURE__ */ Z(We, {
		leading: In,
		title: /* @__PURE__ */ Z(le, { children: Le }),
		description: Be ? /* @__PURE__ */ Z(le, { children: ze }) : void 0,
		meta: /* @__PURE__ */ Q(sn, { children: [
			hn,
			D === "content" && T,
			vn
		] }),
		domSlug: et
	}) : R && !U ? /* @__PURE__ */ Z(Ht, {
		leading: In,
		children: xn
	}) : /* @__PURE__ */ Q(sn, { children: [In, xn] });
	let Bn = /* @__PURE__ */ Q(sn, { children: [
		ot ? /* @__PURE__ */ Z(xt, {
			id: "paymentTypeItem",
			model: ot,
			actions: Dt,
			children: zn
		}) : zn,
		Dn,
		On
	] }), Vn = ve.attrs("payment-list-item", { slug: et }), Hn = ve.attrs("payment-list-item-main", { slug: et }), Un = ve.attrs("payment-list-item-main-trigger", { slug: et }), Wn = Ln($t), Gn = Ln(q), Kn = Ln(nn);
	return /* @__PURE__ */ Q(sn, { children: [/* @__PURE__ */ Q(Rt, {
		as: "div",
		id: ve.id("payment-list-item", { slug: et }),
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
		inheritTheme: $e,
		appearance: y,
		chrome: !1,
		spacing: "flush",
		style: ge,
		className: V(Vn.className, on, U && "relative", O && k && [
			"[outline-style:solid]",
			Vt,
			"outline-offset-[2.5px]"
		].join(" ")),
		children: [Xt ? /* @__PURE__ */ Z("div", {
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
			className: V(Hn.className, Y),
			children: Qt ? /* @__PURE__ */ Z("div", {
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
				className: V(Un.className, dn),
				children: Bn
			}) : Bn
		}) : Bn, kn]
	}), An] });
}
//#endregion
//#region src/ui/SelectableListLayout.tsx
function pd({ children: e, id: t, className: r, rootAttributes: i, contentClassName: a, contentAttributes: o, contentStyle: s, listStyle: c, compact: l, stacked: u = !1 }) {
	let { uiListStyle: d } = tn(se), f = (c ?? d) === n.GRID, p = u || l || !f;
	return /* @__PURE__ */ Z("div", {
		...i,
		id: t,
		className: V(i?.className, r),
		children: /* @__PURE__ */ Z("div", {
			...o,
			className: V("gap-1.5", p ? "grid grid-cols-1" : "grid grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4", o?.className, a),
			style: s,
			children: e
		})
	});
}
//#endregion
//#region src/ui/BonusTerms.tsx
function md({ termsKey: e }) {
	let { translateKey: t } = dt(), n = t(e);
	return n ? /* @__PURE__ */ Z(W, {
		content: n,
		className: "text-[var(--pc-color-text-muted)]"
	}) : null;
}
//#endregion
//#region src/ui/BonusCloseNotice.tsx
function hd({ reasons: e, align: t = "left", tone: n = "hint" }) {
	let { translateKey: r } = dt(), { formatCurrencyValue: i } = It(), a = J(() => e.map((e, t) => ({
		key: `${e.type}-${"delta" in e ? String(e.delta) : String(t)}`,
		label: At(e, r, i)
	})), [
		i,
		e,
		r
	]);
	return a.length === 0 ? null : /* @__PURE__ */ Z("div", {
		"data-theme": n === "hint" ? "success" : void 0,
		className: ["text-xs @sm:text-sm text-[var(--pc-color-text)] italic", t === "center" ? "text-center" : "text-left"].join(" "),
		children: a.map((e) => /* @__PURE__ */ Z("p", { children: e.label }, e.key))
	});
}
//#endregion
//#region src/ui/BonusesList.tsx
var gd = "bonus.terms.title", _d = "__cashier_bonus_skip__", vd = "skip";
function yd({ bonuses: e, selectedBonusCode: t, onSelect: r, onSkip: i, selectable: a = !0, showSkipOption: o = !1, isSkipSelected: s = !1, listStyle: c, compact: l, stacked: u = !1, itemVariant: d = "neutral", itemAppearance: f = "solid", domScope: p, animateItems: m = !1, closeReasonPlacement: h = "meta", themeSlot: g }) {
	let _ = de(), { uiListStyle: v, checkoutState: y } = tn(se), { translateKey: b } = dt(), { formatCurrencyValue: x } = It(), S = be(c ?? v), C = S === n.GRID, w = p ? _.token(p, "list") : null, T = w ? _.id("bonus-list", { slug: w }) : void 0, E = { staggerMode: "compressed-tail" }, D = [...o && e.some(({ status: e }) => e === "available") ? [{ type: "skip" }] : [], ...e.map((e) => ({
		type: "bonus",
		availability: e
	}))];
	return /* @__PURE__ */ Z(pd, {
		id: T,
		rootAttributes: _.attrs("bonus-list", w ? { slug: w } : void 0),
		className: "w-full",
		contentAttributes: _.attrs("bonus-list-content", w ? { slug: w } : void 0),
		contentClassName: m ? ol : void 0,
		contentStyle: m ? xl(E) : void 0,
		listStyle: S,
		compact: l,
		stacked: u,
		children: D.map((e, n) => {
			if (e.type === "skip") return /* @__PURE__ */ Z(fd, {
				domSlug: vd,
				name: _d,
				title: "",
				description: "bonus.interactive_prompt.no_bonus",
				logoContent: /* @__PURE__ */ Z(mt, { className: "h-full w-full" }),
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
				animationClassName: m ? sl : void 0,
				animationStyle: m ? bl(n, D.length, "forward", E) : void 0
			}, _d);
			let { bonus: o, status: c, reasons: u } = e.availability, p = c !== "available", _ = C && p ? u.map((e, t) => ({
				id: `bonus-reason-${o.code}-${String(t)}`,
				label: At(e, b, x),
				variant: c === "close" ? "success" : "neutral"
			})).filter((e) => !!e.label) : [], v = !C && p && (c === "close" || h === "meta") ? /* @__PURE__ */ Z(hd, {
				reasons: u,
				tone: c === "close" ? "hint" : "neutral"
			}) : null, w = !C && p && c !== "close" && h === "info" ? /* @__PURE__ */ Z(hd, {
				reasons: u,
				tone: "neutral"
			}) : null, T = o.termsAndConditions, O = v ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-1",
				children: v
			}) : null, k = T || w ? {
				titleKey: gd,
				content: /* @__PURE__ */ Q("div", {
					className: "flex flex-col gap-3",
					children: [w, T && /* @__PURE__ */ Z(md, { termsKey: T })]
				})
			} : void 0;
			return /* @__PURE__ */ Z(fd, {
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
				animationClassName: m ? sl : void 0,
				animationStyle: m ? bl(n, D.length, "forward", E) : void 0
			}, o.code);
		})
	});
}
//#endregion
//#region src/utils/interactivePrompt.tsx
function bd(e, t, n) {
	if (!t) return;
	let r = e(t);
	if (r && r !== t) return Object.entries(n ?? {}).reduce((e, [t, n]) => me(e, t, n), r);
}
function xd(e, t, n, r) {
	return bd(e, t, r) ?? n;
}
function Sd(e, t, n, r) {
	if (!t) return n;
	let i = e(t);
	return !i || i === t ? n : r ? Eu(i, r) : i;
}
var Cd = (e) => /* @__PURE__ */ Z(jt, { className: e }), wd = ({ translateKey: e }) => ({
	legacyTitle: e("cta.choose_payment_type"),
	titleKey: "cta.interactive_prompt.choose_payment_type.title",
	bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
	icon: Cd()
}), Td = ({ translateKey: e }) => ({
	legacyTitle: e("payment.enter_details"),
	titleKey: "payment.interactive_prompt.enter_details",
	bodyKey: "interactive_prompt.payment_details.form.body",
	icon: /* @__PURE__ */ Z(Et, {})
}), Ed = (e) => e.toFixed(2).replace(/\.?0+$/, "");
//#endregion
//#region src/components/InteractivePromptHeader.tsx
function Dd({ content: e, forceVisible: t = !1, className: n }) {
	let { uiInteractivePrompts: r, uiPaymentMethodSwitcher: i, uiUserBalance: a, debug: o } = tn(se), { translateKey: s } = dt(), c = J(() => (e?.actions ?? []).flatMap((e) => {
		let t = o && e.labelKey ? e.labelKey : xd(s, e.labelKey, e.legacyLabel);
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
	let l = xd(s, e.titleKey, e.legacyTitle, e.titleValues) ?? e.legacyTitle, u = o && e.titleKey ? e.titleKey : l;
	e.preferLegacyTitle && e.legacyTitle && (l = e.legacyTitle, u = e.legacyTitle), o && e.titleKey && (l = e.titleKey, u = e.titleKey);
	let d = o && e.bodyKey ? e.bodyKey : Sd(s, e.bodyKey, e.legacyBody, e.bodyValues) ?? e.legacyBody;
	return e.preferLegacyBody && e.legacyBody && (d = e.bodyValues ? Du(e.legacyBody, e.bodyValues) : e.legacyBody), /* @__PURE__ */ Z(T, {
		className: V(!i && !a && "pt-1.5 @sm:pt-2", n),
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
var Od = .001, kd = ({ amount: e, fullClaimAmount: t, claimPercentage: n }) => typeof e == "number" && typeof t == "number" ? e >= t - Od : typeof n == "number" && n >= 99.999, Ad = (e) => typeof e != "number" || !Number.isFinite(e) ? "0" : String(Math.min(99, Math.round(e))), jd = (e, t) => {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => e[n] === t[n]);
}, Md = (e, t) => !!e && e?.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount, Nd = (e, t) => e === t ? !0 : !e || !t ? !1 : e.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount && e.hasHostedFields === t.hasHostedFields && jd(e.values, t.values), Pd = (e, t, n) => Md(e, t) ? {
	...e,
	amount: n,
	values: {
		...e.values,
		amount: n
	}
} : e, Fd = (e) => {
	let { payment: t, paymentStatusMessage: n, makePayment: r, isPaymentFailed: i, isPaymentPending: a, isPaymentSuccessful: o } = oe(), s = Cu();
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
}, Id = ({ fieldId: e, label: t, value: n, translateKey: r }) => /* @__PURE__ */ Z("div", {
	"data-payment-field-display": e,
	children: /* @__PURE__ */ Z(Be, {
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
}), Ld = "amount", Rd = (e, t, n, r) => {
	let i = t ?? [], a = r !== void 0 && !i.some((e) => e.value === "") ? [/* @__PURE__ */ Z("option", {
		value: "",
		children: r
	}, `${e}_placeholder`)] : [];
	return i.reduce((t, r, i) => {
		let a = r.value, o = n(r.label || a);
		if (!o && !a) return t;
		let s = `${e}_${String(i)}`;
		return t.push(/* @__PURE__ */ Z("option", {
			value: a,
			children: o || a
		}, s)), t;
	}, a);
}, zd = ({ isAmountField: e, isCheckboxField: t, isInputField: n, isLastRenderableField: r, reserveInputMessageSpace: i, reserveCheckboxMessageSpace: a, reserveLastCheckboxMessageSpace: o, reserveLastAmountMessageSpace: s }) => e ? r && s : t ? r ? o : a : n && i, Bd = ({ fields: e, translateKey: t, translateKeys: n, disabled: r = !1, amountError: i, amountFieldId: a = Ld, renderBelowFieldContent: o, belowFieldContentClassName: s = te, belowFieldContentInheritsTheme: c = !0, renderBeforeField: l, renderAfterField: u, renderAfterFieldRow: d, animateRows: f = !1, animationStartIndex: p = 0, animationTotalCount: m, animationDirection: h = "forward", reserveInputMessageSpace: _ = !1, reserveCheckboxMessageSpace: v = !1, reserveLastCheckboxMessageSpace: y = !1, reserveLastAmountMessageSpace: b = !1, addFirstFieldTopPadding: x = !0, addLastFieldBottomPadding: S = !0, allowReservedLastFieldBottomPadding: w = !1, reserveTrailingActionClearance: T = !1, submitUnrenderedFields: E = !1 }) => {
	let D = de(), { setFieldValue: O, setValues: A, values: j } = mc(), ee = k(), M = gn(ie(e, j), j), N = _n(e, j), P = N.map((e) => `${e.fieldId}=${e.value}`).join("");
	q(() => {
		N.length !== 0 && A((e) => ({
			...e,
			...Object.fromEntries(N.map(({ fieldId: e, value: t }) => [e, t]))
		}), !1);
	}, [P]);
	let F = (e) => !!e.id && !e.hidden && Wt(e, j).visible, I = M.findIndex(F), ne = M.reduce((e, t, n) => F(t) ? n : e, -1);
	return /* @__PURE__ */ Z(sn, { children: M.map((e, k) => {
		let A = e.id;
		if (!A) return null;
		let M = () => !E || !Object.hasOwn(j, A) ? null : /* @__PURE__ */ Z("input", {
			type: "hidden",
			name: A,
			value: Tt(j[A]),
			"data-payment-field-unrendered": A
		}, A);
		if (e.hidden) return M();
		let te = Wt(e, j);
		if (!te.visible) return M();
		let N = ee(A, "field"), P = D.id("payment-field", { slug: N }), F = k === I, L = k === ne, re = d?.(A, { isLastRenderableField: L }), ie = n(e.labelKeys ?? e.label ?? A), z = C(e.validation, n), ae = e.type, B = ae === "checkbox", oe = ae === "select", se = ae === "display", ce = ae === "qrcode", le = A === a, ue = !B && !oe && !se && !ce && !le, de = A === "iban" || !!z?.iban?.value, fe = !B && de ? g : void 0, me = oe || B ? {} : { formattingAdapter: fe }, he = Be;
		B ? he = R : oe && (he = ge);
		let _e = (e) => {
			if (!le) return;
			let t = j[A], n = pe(typeof t == "string" ? t : "", e.currentTarget.value);
			O(A, n, !1);
		}, ve = e.placeholder ? t(e.placeholder) : void 0, ye = oe ? j[A] : void 0, be = oe ? Rd(A, te.options ?? e.options, t, typeof ye == "string" && ye !== "" ? void 0 : ve ?? "") : null, xe = le ? i : void 0, Se = l?.(A), V = o?.(A), Ce = !!re, we = zd({
			isAmountField: le,
			isCheckboxField: B,
			isInputField: ue,
			isLastRenderableField: L,
			reserveInputMessageSpace: _,
			reserveCheckboxMessageSpace: v,
			reserveLastCheckboxMessageSpace: y,
			reserveLastAmountMessageSpace: b
		}) && !(le && Ce), Te = S && L && (!we || w) && !Ce, Ee = T && L && !Ce, De;
		(Ee || Te) && (De = Ee ? "pb-4" : "pb-3");
		let Oe = x && F ? "pt-3" : void 0, ke;
		if (se) ke = /* @__PURE__ */ Z(Id, {
			fieldId: A,
			label: ie,
			value: e.defaultValue ?? "",
			translateKey: t
		});
		else if (ce) {
			let t = e.defaultValue ?? "";
			ke = t ? /* @__PURE__ */ Z("div", {
				"data-payment-field-qrcode": A,
				children: /* @__PURE__ */ Z(Le, {
					label: ie,
					value: t,
					hideLabel: !0,
					reserveMessageSpace: !1
				})
			}) : null;
		} else ke = le ? /* @__PURE__ */ Z(Bc, {
			label: ie,
			id: P,
			name: A,
			validation: z,
			error: xe,
			disabled: r,
			component: he,
			onChange: _e,
			belowFieldContent: V,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			formattingAdapter: fe,
			placeholder: ve,
			reserveMessageSpace: we,
			type: B || oe ? void 0 : "text",
			inputMode: "numeric",
			pattern: "[0-9]*",
			children: oe ? be : void 0
		}) : B ? /* @__PURE__ */ Z(Bc, {
			label: ie,
			id: P,
			name: A,
			validation: z,
			error: xe,
			disabled: r,
			component: he,
			belowFieldContent: V,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			placeholder: ve,
			reserveMessageSpace: we,
			type: void 0
		}) : /* @__PURE__ */ Z(Bc, {
			label: ie,
			id: P,
			name: A,
			validation: z,
			error: xe,
			disabled: r,
			component: he,
			belowFieldContent: V,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			...me,
			placeholder: ve,
			reserveMessageSpace: we,
			type: oe ? void 0 : ae ?? "text",
			children: oe ? be : void 0
		});
		let Ae = D.attrs("payment-field-row", { slug: N }), H = f ? yl({
			index: p + k,
			total: m,
			direction: h
		}) : void 0;
		return /* @__PURE__ */ Q(Jt, { children: [/* @__PURE__ */ Q("div", {
			"data-payment-field-row": A,
			id: D.id("payment-field-row", { slug: N }),
			...Ae,
			className: [
				Ae.className,
				"flex flex-col w-full",
				Oe,
				De,
				f ? al : void 0
			].filter(Boolean).join(" "),
			style: H,
			children: [
				Se,
				ke,
				u?.(A, { isLastRenderableField: L })
			]
		}), re && /* @__PURE__ */ Z("div", {
			className: ["flex min-w-0 w-full flex-col", f ? "pc-enter-rise-item" : void 0].filter(Boolean).join(" "),
			style: H,
			children: re
		}, `${A}-after-row`)] }, A);
	}) });
};
//#endregion
//#region src/components/AmountErrorAlert.tsx
function Vd({ message: e }) {
	return /* @__PURE__ */ Z("div", {
		role: "alert",
		className: "pl-3",
		children: /* @__PURE__ */ Z(Dd, {
			forceVisible: !0,
			content: {
				legacyTitle: e,
				preferLegacyTitle: !0,
				tone: "danger",
				icon: /* @__PURE__ */ Z(mt, {})
			}
		})
	});
}
//#endregion
//#region src/lib/hostedFieldLayout.ts
var Hd = "pan", Ud = "expiryDate", Wd = "csc", Gd = (e) => e === Wd || e === Ud, Kd = (e) => typeof e.id == "string" && e.id.trim().length > 0, qd = (e) => {
	let t = (e.type ?? "text").trim().toLowerCase(), n = (e.options ?? []).length > 0;
	return t === "switcher" ? "switcher" : t === "checkbox" ? "toggle" : t === "select" || n ? "select" : "input";
}, Jd = (e, t, n) => e === Hd || !Gd(e) ? "col-span-2" : t === n ? "col-span-1" : "col-span-2", Yd = (e, t, n) => e === Hd || !Gd(e) ? 2 : t === n ? 1 : 2, Xd = (e) => {
	let t = (e ?? []).filter(Kd);
	if (t.length === 0) return 0;
	let n = t.some((e) => e.id === Wd), r = t.some((e) => e.id === Ud), i = 0, a = 0;
	for (let e of t) {
		let t = Yd(e.id, n, r);
		a + t > 2 && (i += 1, a = 0), a += t, a === 2 && (i += 1, a = 0);
	}
	return a > 0 && (i += 1), i;
}, Zd = (e) => e.label?.trim() || e.id, Qd = () => void 0, $d = (e) => Array.isArray(e), ef = (e) => Array.isArray(e), tf = (e) => {
	if ($d(e)) {
		let t = e.filter(Kd);
		return t.length > 0 ? t : null;
	}
	return Kd(e) ? e : null;
}, nf = (e) => (e.options ?? []).map((t, n) => ({
	value: t.value || `${e.id}-${String(n)}`,
	label: t.label || t.value || `Option ${String(n + 1)}`
})), rf = (e) => {
	let t = qd(e), n = Zd(e);
	if (t === "select") return /* @__PURE__ */ Z(ge, {
		skeleton: !0,
		label: n,
		reserveMessageSpace: e.reserveMessageSpace === !0,
		children: nf(e).map((e) => /* @__PURE__ */ Z("option", {
			value: e.value,
			children: e.label
		}, e.value))
	});
	if (t === "switcher") {
		let t = nf(e);
		return /* @__PURE__ */ Z(ye, {
			skeleton: !0,
			ariaLabel: n,
			value: t[0]?.value ?? e.id,
			onChange: Qd,
			options: t.length > 0 ? t : [{
				value: e.id,
				label: n
			}]
		});
	}
	return t === "toggle" ? /* @__PURE__ */ Z(R, {
		skeleton: !0,
		label: n,
		reserveMessageSpace: e.reserveMessageSpace === !0
	}) : /* @__PURE__ */ Z(Be, {
		skeleton: !0,
		label: n,
		placeholder: e.placeholder,
		inputClassName: e.id === "csc" ? "[&_[data-slot=skeleton]]:max-w-[4ch]" : void 0,
		reserveMessageSpace: e.reserveMessageSpace === !0
	});
}, af = (e, t, n) => /* @__PURE__ */ Z("div", {
	"data-slot": "hosted-fields-layout-skeleton-item",
	"data-field-id": e.id,
	className: V("flex w-full min-w-0 flex-col whitespace-nowrap overflow-hidden", Jd(e.id, t, n)),
	children: rf(e)
}, e.id), of = (e) => {
	switch (e.id) {
		case "expiryDate": return "w-3/5";
		case "csc": return "w-[4ch]";
		default: return "w-4/5";
	}
};
function sf({ fields: e, className: t }) {
	let n = e.map(tf).filter((e) => e !== null), r = n.flatMap((e) => ef(e) ? e : [e]), i = n.some((e) => ef(e) && e.length > 1), a = r.some((e) => e.id === "csc"), o = r.some((e) => e.id === "expiryDate");
	return /* @__PURE__ */ Z("div", {
		"aria-hidden": "true",
		"data-slot": "hosted-fields-layout-skeleton",
		"data-state": "loading",
		className: V("box-border flex h-full w-full min-w-0 flex-col overflow-hidden", t),
		children: /* @__PURE__ */ Z("div", {
			className: V("relative z-10 grid min-w-0 grid-cols-2 items-start gap-x-2 gap-y-1", i ? "p-[var(--pc-size-input-focus-ring,3px)]" : "p-1"),
			children: n.map((e) => {
				if (!ef(e)) return af(e, a, o);
				if (e.length === 1) return af(e[0], a, o);
				let t = e.map((e) => e.id).join("-");
				return /* @__PURE__ */ Z("div", {
					"data-slot": "hosted-fields-layout-skeleton-item",
					"data-field-group-id": t,
					className: "col-span-2 flex w-full min-w-0 flex-col overflow-hidden whitespace-nowrap",
					children: /* @__PURE__ */ Z(Ne, {
						label: Zd(e[0]),
						itemClassName: "[&:first-child]:flex-[1.7_1_10rem] [&:not(:first-child)]:flex-[0.7_1_4.25rem]",
						reserveMessageSpace: !0,
						children: e.map((e) => /* @__PURE__ */ Z("div", {
							"data-slot": "hosted-fields-grouped-skeleton-control",
							"data-field-id": e.id,
							className: "flex min-h-[var(--pc-size-input-height,2.25rem)] w-full min-w-0 items-center",
							children: /* @__PURE__ */ Z(w, { className: V("h-3.5 rounded-full translate-y-0.5", "[background:color-mix(in_srgb,var(--pc-color-input-text,var(--pc-color-text))_32%,var(--pc-color-input-background,var(--pc-color-surface)))]", of(e)) })
						}, e.id))
					})
				}, t);
			})
		})
	});
}
//#endregion
//#region src/components/SuggestedAmountButtons.tsx
var cf = (e) => `repeat(${String(Math.min(e, 4))}, minmax(0, 1fr))`, lf = V("[--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]"), uf = V("[--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]");
function df({ suggestions: e, activeSuggestion: t, onSelect: n, formatLabel: r, amountLimits: i, size: a = "xs", disabled: o = !1, className: s, style: c }) {
	let l = de(), u = K((e) => {
		e.preventDefault();
	}, []), d = r ?? ((e) => e), f = k();
	if (e.length === 0) return null;
	let p = {
		...c,
		gridTemplateColumns: cf(e.length)
	};
	return /* @__PURE__ */ Z("div", {
		id: l.id("amount-suggestions"),
		style: p,
		className: V(l.className("amount-suggestions"), "text-center", "gap-1 @sm:gap-2", "grid", s),
		children: e.map((e) => {
			let r = f(e), s = e === t, c = o || (i ? ae(e, i).isOutOfRange : !1);
			return /* @__PURE__ */ Z(xe, {
				id: l.id("amount-suggestion", { slug: r }),
				variant: s ? "secondary" : "neutral",
				size: a,
				disabled: c,
				className: V(s ? uf : lf, "min-w-0 w-full"),
				onMouseDown: u,
				onClick: () => {
					n(e);
				},
				label: d(e)
			}, `cashier-amount-suggestion-${r}`);
		})
	});
}
//#endregion
//#region src/lib/hostedFields.ts
var ff = /* @__PURE__ */ function(e) {
	return e.INIT = "INIT", e.TOKENIZE = "TOKENIZE", e.LAYOUT = "HF_LAYOUT", e.FORM_DATA = "HF_FORM_DATA", e.FORM_STATE = "HF_FORM_STATE", e.CARD_BRAND = "HF_CARD_BRAND", e.AUTO_FOCUS_NEXT = "HF_AUTO_FOCUS_NEXT", e.CAPABILITIES = "HF_CAPABILITIES", e.READY = "HF_READY", e.ERROR = "HF_ERROR", e.RESET = "RESET", e;
}({}), pf = 5, mf = (e) => ({
	groupedCardInputs: e?.groupedCardInputs === !0,
	fieldOverrides: e?.fieldOverrides === !0,
	expiryDateValidation: e?.expiryDateValidation === !0
}), hf = "hosted_fields.title", gf = Object.freeze(["allow-scripts", "allow-same-origin"]), _f = "error.hosted_fields_error_received", vf = 5e3, yf = 250, bf = 3e4, xf = 20, Sf = 120, Cf = Object.freeze({
	border: "0",
	width: "100%",
	height: "100%",
	display: "block",
	backgroundColor: "transparent",
	colorScheme: "normal"
}), wf = "hf-merchant-fonts", Tf = "--hf-font-family", Ef = [
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Helvetica Neue'",
	"sans-serif"
].join(", "), Df = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !(typeof t.type != "string" || !Object.values(ff).includes(t.type));
}, Of = (e) => {
	let t = e.document ?? (typeof document < "u" ? document : void 0);
	if (!t) throw Error("createHostedFieldsIframe requires a Document instance.");
	let n = t.createElement("iframe");
	n.title = f(e.title) ?? "hosted_fields.title", e.ariaLabel && n.setAttribute("aria-label", e.ariaLabel), n.name = e.name ?? "cashier-hosted-fields", e.className && (n.className = e.className);
	let r = gf.join(" ");
	r && n.setAttribute("sandbox", r);
	let i = f(e.allow);
	i && n.setAttribute("allow", i), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), n.setAttribute("src", e.src), n.setAttribute("loading", "eager");
	let a = {
		...Cf,
		...e.styles ?? {}
	};
	if (Object.assign(n.style, a), n.setAttribute("frameborder", "0"), e.attributes) for (let [t, r] of Object.entries(e.attributes)) r != null && n.setAttribute(t, String(r));
	return n;
}, kf = (e, t, n) => {
	let r = n ?? e.getAttribute("src") ?? e.src, i = f(r) ?? "";
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
}, Af = (e) => {
	let { container: t, iframe: n } = e, r = n.document ?? t.ownerDocument, i = Of({
		...n,
		document: r
	}), a = r.defaultView ?? void 0, o = i.getAttribute("src") ?? n.src;
	i.removeAttribute("src");
	let s = jf({
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
}, jf = (e) => {
	let { iframe: t } = e, n = e.win ?? (typeof window < "u" ? window : void 0);
	if (!n) throw Error("Hosted fields controller requires a Window instance.");
	let r = kf(t, n, e.targetOrigin), i = {}, a = !1, o = !1, s = !1, c = !1, l = 0, u = null, d = null, p = {}, m = null, h = null, g = null, _ = null, v = 0, y = !1, b = !1, x = !1, S = null, C = (e) => {
		S &&= (n.clearTimeout(S.timeoutId), e && S.reject(e), null);
	}, w = (e) => {
		if (a) return;
		let n = t.contentWindow;
		n && n.postMessage(e, r);
	}, T = (e) => {
		if (!o && !e?.force || !m || I()?.URL === "about:blank") return;
		let { fields: t, debugMode: n, fonts: r, uiTheme: i, css: a, autoFocusNextField: s, pciTenantId: c, uiGroupCardInputs: l } = m, u = {
			type: "INIT",
			protocolVersion: m.protocolVersion ?? pf,
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
		l += 1, E(), C(/* @__PURE__ */ Error("Hosted fields document reloaded before response.")), o = !1, s = !1, g = null, u = null, d = null, p = {}, x = !1, b = !1, i.onLoading?.("navigation");
	}, k = () => {
		let e = t.getAttribute("src");
		if (y || !t.isConnected || I()?.URL !== "about:blank" || !e) return !1;
		try {
			if (new URL(e, n.location.href).origin !== r) return !1;
		} catch {
			return !1;
		}
		return y = !0, O(), c = !1, t.setAttribute("src", e), A(), !0;
	}, A = () => {
		if (!m || u || _) return;
		v = s ? xf : Sf;
		let e = () => {
			if (_ = null, !m || u) v = 0;
			else if (v <= 0) {
				if (k()) return;
				x ? _ = n.setTimeout(() => {
					_ = null, D();
				}, bf) : D();
			} else T({
				force: !0,
				bypassSignature: !0
			}), --v, _ = n.setTimeout(e, yf);
		};
		_ = n.setTimeout(e, yf);
	}, j = () => {
		o || (o = !0, i.onReady?.());
	}, ee = () => {
		s || (s = !0, v = xf);
	}, M = () => {
		ee(), j(), g = null, T({ force: !0 }), A();
	}, te = () => {
		I()?.URL !== "about:blank" && (c && O(), c = !0, ee(), u || (g = null), T({ force: !0 }), A());
	}, N = (e) => {
		if (!S) return;
		if (!e) {
			C(/* @__PURE__ */ Error("No form data received from hosted fields iframe."));
			return;
		}
		let { resolve: t } = S;
		C(), t(e);
	}, P = (e) => {
		if (!S) {
			u || D();
			return;
		}
		let t = f(e.message) ?? _f;
		C(Error(t));
	}, F = (e) => {
		p = mf(e.capabilities), i.onCapabilities?.(p, e);
	}, I = () => {
		try {
			let e = t.contentWindow?.document;
			return e?.URL, e ?? null;
		} catch {
			return null;
		}
	}, ne = (e) => {
		let t = I();
		t && Hf(e.fonts, { document: t }), i.onInit?.(e.fonts, e);
	}, L = (e) => {
		if (e.source !== t.contentWindow || e.origin !== r || !Df(e.data)) return;
		let n = e.data;
		x = !0, n.type === "INIT" && ne(n), n.type === "HF_READY" && M(), n.type === "HF_CAPABILITIES" && F(n), n.type === "HF_LAYOUT" && n.layout && Number.isFinite(n.layout.containerHeight) && n.layout.containerHeight > 0 && (E(), j(), u = n.layout, i.onLayout?.(n.layout, n)), n.type === "HF_FORM_DATA" && N(n.formData), n.type === "HF_FORM_STATE" && (d = n.formState ?? null), n.type === "HF_ERROR" && P(n), i.onMessage?.(n);
	};
	return n.addEventListener("message", L), t.addEventListener("load", te), {
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
			let r = e?.timeoutMs ?? vf;
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
			a || (a = !0, o = !1, C(/* @__PURE__ */ Error("Hosted fields controller destroyed before response.")), n.removeEventListener("message", L), t.removeEventListener("load", te), E(), i = {}, m = null, u = null, d = null);
		},
		setCallbacks: (e) => {
			a || (i = e ?? {});
		},
		isReady: () => o,
		getLastLayout: () => u,
		getLastFormState: () => d,
		getCapabilities: () => p,
		reset: () => {
			d = null, w({ type: "RESET" });
		}
	};
}, Mf = /* @__PURE__ */ new Set([
	"woff2",
	"woff",
	"truetype",
	"opentype"
]), Nf = /* @__PURE__ */ new Set([
	"auto",
	"block",
	"swap",
	"fallback",
	"optional"
]), Pf = (e) => {
	let t = e.split(s)[0]?.toLowerCase() ?? "";
	if (t.endsWith(".woff2")) return "woff2";
	if (t.endsWith(".woff")) return "woff";
	if (t.endsWith(".ttf") || t.endsWith(".ttc")) return "truetype";
	if (t.endsWith(".otf")) return "opentype";
	if (t.startsWith("data:font/woff2")) return "woff2";
	if (t.startsWith("data:font/woff")) return "woff";
	if (t.startsWith("data:font/ttf") || t.startsWith("data:font/truetype")) return "truetype";
	if (t.startsWith("data:font/otf") || t.startsWith("data:font/opentype")) return "opentype";
}, Ff = (e) => {
	if (!e) return null;
	let t = f(e);
	return t && (a.test(t) || u.test(t)) ? t : null;
}, If = (e) => {
	if (e) return Mf.has(e) ? e : void 0;
}, Lf = (e) => e && Nf.has(e) ? e : "swap", Rf = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let e = f(n.family) ?? "";
		if (!e) continue;
		let r = [];
		for (let e of n.sources) {
			let t = Ff(e.url);
			if (!t) continue;
			let n = If(e.format) ?? Pf(t);
			r.push({
				url: t,
				format: n,
				weight: e.weight,
				style: e.style === "italic" ? "italic" : "normal",
				display: Lf(e.display)
			});
		}
		r.length !== 0 && t.push({
			family: e,
			sources: r
		});
	}
	return t;
}, zf = (e) => {
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
}, Bf = (e) => {
	let t = e.getElementById(wf);
	t?.parentNode && t.parentNode.removeChild(t);
}, Vf = (e, t) => {
	let n = e.documentElement;
	if (t.length === 0) {
		n.style.setProperty(Tf, Ef);
		return;
	}
	let r = [Array.from(new Set(t.map((e) => e.family))).map((e) => JSON.stringify(e)).join(", "), Ef].join(", ");
	n.style.setProperty(Tf, r);
}, Hf = (e, t) => {
	let n = null;
	if (t?.document) n = t.document;
	else {
		let e = globalThis.document;
		e && (n = e);
	}
	if (!n) return;
	Bf(n);
	let r = Rf(e);
	if (Vf(n, r), r.length === 0) return;
	let i = n.getElementsByTagName("head").item(0);
	if (!i) return;
	let a = zf(r);
	if (!a) return;
	let o = n.createElement("style");
	o.id = wf, o.append(n.createTextNode(a)), i.appendChild(o);
}, Uf = "--hf-font-family", Wf = [
	"background",
	"text",
	"placeholder",
	"label-text"
], Gf = new Set(Wf.map((e) => `--pc-color-input-${e}`)), Kf = /* @__PURE__ */ new Set([
	...Gf,
	"--pc-color-input-background-hover",
	"--pc-color-input-background-active",
	"--pc-color-input-focus-border",
	"--pc-color-input-focus-ring",
	"--pc-color-input-disabled-background",
	"--pc-color-input-disabled-text",
	"--pc-color-input-readonly-background",
	"--pc-color-input-readonly-text",
	"--pc-color-input-autofill-text"
]), qf = (e) => {
	let t = e?.closest(".pc-ui__credit-card-panel"), n = e?.ownerDocument.defaultView;
	if (!e || !t?.dataset.pcInputContext || !n) return;
	let r = new Set(t.dataset.pcInputContext.split(" ")), i = n.getComputedStyle(t), a = n.getComputedStyle(e), o = {
		overrides: {},
		defaults: {}
	};
	for (let e of Wf) {
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
}, Jf = /* @__PURE__ */ new Set([
	"--pc-color-input-error-text",
	"--pc-color-input-helper-text",
	"--pc-color-input-label-text",
	"--pc-color-input-invalid-background",
	"--pc-color-input-invalid-background-hover",
	"--pc-color-input-invalid-border",
	"--pc-color-input-invalid-focus-ring",
	"--pc-opacity-input-invalid-background"
]), Yf = /* @__PURE__ */ RegExp("^(?:--pc-(?:color|space|size|radius|shadow|font|motion|opacity|z)-input(?:-|$)|--pc-font-(?:size|line-height)-input$)", "u"), Xf = (e) => {
	if (typeof e == "string") return e.trim() || void 0;
}, Zf = (e) => {
	if (!e) return;
	let t = e;
	return Xf(t.fontFamily) ?? Xf(t[Uf]) ?? Xf(t["hf-font-family"]);
}, Qf = (e) => {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!n.startsWith("--pc-") || Jf.has(n)) continue;
		if (typeof r == "number") {
			t[n] = r;
			continue;
		}
		if (typeof r != "string") continue;
		let e = r.trim();
		e && (t[n] = e);
	}
	return t;
}, $f = (e) => e.startsWith("--pc-") ? e : e.startsWith("pc-") ? `--${e}` : null, ep = (e) => typeof e == "number" || typeof e == "string" && e.trim().length > 0, tp = (e, t, n) => {
	let r = {}, i = {}, a = Zf(t);
	if (t) for (let [e, n] of Object.entries(t)) {
		let t = $f(e);
		t && ep(n) && (i[t] = n);
	}
	let o = t;
	if (o?.variables) for (let [e, t] of Object.entries(o.variables)) {
		let n = $f(e);
		n && ep(t) && (i[n] = t);
	}
	Object.assign(r, i), Object.assign(r, Qf(e?.()));
	for (let [e, t] of Object.entries(i)) Yf.test(e) && (r[e] = t);
	for (let [e, t] of Object.entries(n?.defaults ?? {})) Kf.has(e) && !(e in i) && ep(t) && (r[e] = t);
	for (let [e, t] of Object.entries(n?.overrides ?? {})) Gf.has(e) && ep(t) && (r[e] = t);
	return a && (r[Uf] = a), r;
}, np = (e, t) => {
	if (e) for (let n = 0; n < e.length; n += 1) {
		let r = e.item(n);
		r.startsWith("--pc-") && t.add(r);
	}
}, rp = (e, t) => {
	"style" in e && np(e.style, t), "cssRules" in e && ip(e.cssRules, t);
}, ip = (e, t) => {
	if (e) for (let n of Array.from(e)) rp(n, t);
}, ap = (e, t) => {
	for (let n of Array.from(e.styleSheets)) try {
		ip(n.cssRules, t);
	} catch {}
}, op = (e) => {
	let t = e?.ownerDocument.defaultView;
	if (!e || !t) return;
	let n = t.getComputedStyle(e), r = /* @__PURE__ */ new Set();
	np(n, r), np(e.ownerDocument.documentElement.style, r), np(e.style, r), ap(e.ownerDocument, r);
	let i = {};
	for (let e of r) {
		let t = f(n.getPropertyValue(e));
		t && (i[e] = t);
	}
	return i;
}, sp = "/logos/payment-types/", cp = "/assets/payment-type-logos/", lp = (e) => e.replace(/\/+$/, ""), up = (e, t, n) => {
	let r = t?.trim();
	if (r) try {
		let t = new URL(r);
		return !t.pathname.endsWith(cp) && !t.pathname.endsWith(sp) ? void 0 : (t.pathname = `${sp}${n === "dark" ? `${e}-dark.svg` : `${e}.svg`}`, t.search = "", t.hash = "", t.toString());
	} catch {
		return;
	}
}, dp = (e, t) => {
	if (!e) return;
	let n = t?.trim(), r = n ? {
		default: up(e, n, "default") ?? `${lp(n)}/${e}.svg`,
		dark: up(e, n, "dark") ?? `${lp(n)}/${e}-dark.svg`
	} : void 0;
	return {
		brand: e,
		theme: H(e),
		logo: r
	};
}, fp = ({ renderMode: e, hideAmountField: t = !1, lockAmount: n = !1, fields: r }) => e !== "form" || t || n ? !1 : (r ?? []).some((e) => e.id === "amount"), pp = ({ values: e, amountValueOverride: t, initialAmount: n, shouldHideAmountField: r, hasAmountField: i, lockAmount: a = !1 }) => {
	if (!i) return e;
	let o = a ? n : t ?? (r ? n : void 0);
	return o === void 0 || e.amount === o ? e : {
		...e,
		amount: o
	};
}, mp = {
	form: "quick-payment-form-surface",
	"field-panel": "quick-payment-form-field-panel"
};
function hp({ children: e, active: t = !0, kind: n, chrome: r = "contained", fieldEdgeSpacing: i = "default", animateEntrance: a = !1 }) {
	let o = de(), s = mp[n], c = t ? o.attrs(s) : void 0, l = V(c?.className, "w-full min-w-0");
	return n === "form" && (!t || r === "plain") ? /* @__PURE__ */ Z("div", {
		"data-slot": t ? s : void 0,
		"data-pc-slot": c?.["data-pc-slot"],
		"data-pc-slug": c?.["data-pc-slug"],
		"data-pc-part": c?.["data-pc-part"],
		className: t ? V(l, "overflow-visible") : "contents",
		children: e
	}) : /* @__PURE__ */ Z(Rt, {
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
		className: V(t ? l : "!contents", t && r === "plain" && "overflow-visible", n === "form" && "mt-0", a && "pc-enter-panel"),
		children: e
	});
}
//#endregion
//#region src/components/hostedFieldsExitFocus.ts
var gp = /* @__PURE__ */ new Set([
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
]), _p = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&"), vp = (e) => {
	let t = e?.id;
	return typeof t == "string" && t.length > 0 ? t : null;
}, yp = ({ cardLayoutDetailsField: e, cardLayoutFooterField: t, fieldsAfterHosted: n = [] }) => vp(e) || vp(t) || vp(n[0]), bp = (e) => e instanceof HTMLTextAreaElement ? !e.disabled && !e.readOnly : e instanceof HTMLInputElement && !e.disabled && !e.readOnly && !gp.has(e.type.toLowerCase()), xp = (e, t = document) => {
	if (!e) return !1;
	let n = _p(e), r = t.querySelector(`[name="${n}"]`);
	return bp(r) ? (r.focus(), t.activeElement === r) : !1;
}, Sp = /* @__PURE__ */ new Set(["display", "qrcode"]), Cp = (e) => ({
	name: e.name,
	type: e.type,
	typeId: e.typeId,
	method: e.method,
	...e.accountId ? { accountId: e.accountId } : {},
	...e.service ? { service: e.service } : {}
}), wp = (e, t) => !!e.id && !e.hidden && Wt(e, t).visible, Tp = (e, t) => Sp.has(e.type ?? "") ? e.defaultValue ?? "" : t[e.id ?? ""] ?? "", Ep = ({ errors: e, field: t, initialValues: n, value: r }) => {
	let i = t.id ?? "", a = Sp.has(t.type ?? ""), o = !!t.validation?.required?.value, s = a || !Ie(e[i]);
	return {
		type: t.type ?? "text",
		readOnly: a,
		required: o,
		dirty: !a && r !== n[i],
		valid: s,
		complete: a || s && (!o || Me(r))
	};
}, Dp = ({ amount: e, bonusCode: t, canSubmit: n, complete: r, currency: i, dirty: a, errors: o, fields: s, hostedFields: c, initialValues: l, method: u, paymentType: d, submitting: f, valid: p, values: m }) => {
	if (B(s, m).length > 0) return null;
	let h = {}, g = {};
	for (let e of s) {
		let t = e.id;
		if (!t || !wp(e, m)) continue;
		let n = Tp(e, m);
		h[t] = n, g[t] = Ep({
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
		paymentType: Cp(d),
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
}, Op = 200, kp = 2, Ap = 50, jp = 1, Mp = [], Np = (e) => e ? e.isComplete === void 0 ? e.dirty === void 0 ? !!e.isValid : !!(e.isValid && e.dirty) : e.isComplete : !1, Pp = async (e) => {
	if (!e.current) return !0;
	let t = await e.current.validateForm();
	return !Ie(t);
}, Fp = (e, t) => t.reduce((t, n) => {
	let r = n.id;
	return !r || !Object.prototype.hasOwnProperty.call(e, r) || (t[r] = e[r]), t;
}, {}), Ip = [], Lp = mf(), Rp = "pan", zp = "expiryDate", Bp = "csc", Vp = "amount", Hp = (e) => (e ?? []).some((e) => e.id === Vp), Up = (e, t) => {
	let n = [...e ?? Mp];
	return t ? n.filter((e) => e.id !== Vp) : n;
}, Wp = "field.card.pan.luhn_invalid", Gp = "field.card.label", Kp = A(z, "gap-y-1"), qp = "mt-1", Jp = "mt-3", Yp = "mt-0", Xp = "pointer-events-none absolute right-0 bottom-[calc(var(--pc-panel-edge-inset,0px)+var(--pc-panel-extra-inset,0px))] flex justify-end", Zp = "calc(var(--pc-size-input-height,2.25rem) + var(--pc-space-input-label-gap,0.25rem) + var(--pc-space-input-label-gap,0.25rem) + 2.5rem + 2px + var(--pc-size-input-focus-ring,3px) + var(--pc-size-input-focus-ring,3px))", Qp = /* @__PURE__ */ new Set([
	Rp,
	zp,
	Bp
]), $p = (e) => typeof e.id == "string" && Qp.has(e.id), em = (e) => (e ?? []).filter($p).length > 1, tm = (e) => e?.type === "checkbox", nm = (e) => e?.luhn ? e : {
	...e ?? {},
	luhn: {
		value: !0,
		invalidMessage: Wp,
		invalidMessageKeys: [Wp]
	}
}, rm = (e, t, n, r = {}) => {
	let i = n(e.labelKeys ?? e.label), a = e.placeholder ? t(e.placeholder) : void 0, o = e.id === Rp ? nm(e.validation) : e.validation, { overrides: s, ...c } = e, l = r.includeOverrides ? he(s, n) : void 0, u = C(o, n), d = e.id === zp && !r.includeExpiryDateValidation && u?.expiryDate ? (() => {
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
}, im = (e, t) => {
	if (!em(e)) return [...e];
	let n = e.filter($p).map((e, n) => n === 0 ? {
		...e,
		label: t,
		ariaLabel: e.label
	} : e), r = !1;
	return e.reduce((e, t) => $p(t) ? (r ||= (e.push(n), !0), e) : (e.push(t), e), []);
}, am = "Secure card fields are temporarily unavailable", om = "We couldn't verify your card details.", sm = /* @__PURE__ */ new Set([
	"error.hosted_fields_not_ready",
	"Hosted fields iframe is not ready.",
	"Hosted fields iframe window unavailable.",
	"Hosted fields controller destroyed before response."
]), cm = /* @__PURE__ */ new Set([
	"error.hosted_fields_error_received",
	"Hosted fields tokenization already pending.",
	"No response from hosted fields iframe.",
	"No form data received from hosted fields iframe."
]), lm = (e, t, n) => n(f(e) ?? f(t)), um = (e) => {
	let t = f(e);
	return !t || cm.has(t) ? om : sm.has(t) ? am : t;
}, dm = (e) => {
	let t = eu.generate[e];
	return [{
		value: t ? t() : eu.valid[e],
		label: "Valid"
	}, {
		value: eu.invalid[e],
		label: "Invalid"
	}].filter(({ value: e }) => e === void 0 ? !1 : typeof e != "string" || e.length > 0).map(({ value: e, label: t }) => ({
		value: e,
		label: t
	}));
}, fm = (e) => dm(e).length > 0, pm = (e, t) => {
	let n = f(e);
	if (!n) return null;
	try {
		let e = t ? new URL(n, t) : new URL(n);
		if (e.protocol !== "http:" && e.protocol !== "https:" || e.origin === "null") return null;
		let r = e.pathname || "/", i = r.lastIndexOf("/");
		return e.pathname = i >= 0 ? r.slice(0, i + 1) : "/", e.search = "", e.hash = "", e.toString();
	} catch {
		return null;
	}
}, mm = (e) => {
	if (e.length === 0) return;
	let t = typeof window < "u" ? window.location.href : void 0;
	for (let n of e) {
		let e = n.logo;
		if (e) {
			if (typeof e == "string") {
				let n = pm(e, t);
				if (n) return n;
			} else if (!(typeof e != "object" || Array.isArray(e))) for (let n of Object.values(e)) {
				if (typeof n != "string") continue;
				let e = pm(n, t);
				if (e) return e;
			}
		}
	}
}, hm = {
	field: 86,
	gap: 4,
	padding: 8,
	min: 160
}, gm = [
	"var(--pc-size-input-height,2.25rem)",
	"2px",
	"2.5rem",
	"var(--pc-space-input-label-gap,0.25rem)",
	"var(--pc-space-input-label-gap,0.25rem)"
], _m = (e) => {
	let t = Math.max(1, e), n = Array.from({ length: t }, () => gm).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(hm.gap)}px`);
	return n.push(`${String(hm.padding)}px`), `calc(${n.join(" + ")})`;
}, vm = (e) => {
	let t = Math.max(1, e);
	if (t === 1) return Zp;
	let n = Array.from({ length: t }, () => gm).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(hm.gap)}px`);
	return n.push("var(--pc-size-input-focus-ring,3px)", "var(--pc-size-input-focus-ring,3px)"), `calc(${n.join(" + ")})`;
}, ym = 180, bm = "saveAccount", xm = "card", Sm = /* @__PURE__ */ new Set([
	"holderName",
	"accountHolder",
	"cardholderName"
]), Cm = "brandless", wm = ".pc-hosted-fields__root", Tm = /* @__PURE__ */ new Set([
	"--pc-size-input-focus-ring",
	"--pc-size-input-height",
	"--pc-space-input-label-gap"
]);
function Em({ id: e, onActionsChange: t, onPromptStateChange: n, onPreparedValues: a, onValuesChange: s, renderMode: c = "form", hideAmountField: l = !1, presentedAmountError: u, amountValueOverride: d, renderAfterAmountField: g, valueOverrides: y, requireDirtyBeforeSubmit: b = !0, comboViewLayout: x = !1, comboViewSurfaceChrome: C = "contained", formSurfaceChrome: w = "plain", fieldPanelMode: T = "auto", reserveTrailingActionSpace: E = !1, animateEntrance: D = !0, observePublicState: O = !0, onPaymentSubmitted: k }) {
	let A = de(), j = tn(se), M = i(j), te = lt(), N = te?.attempt, { debug: P, method: ne, initialAmount: L, lockAmount: R, currency: re, locale: ie, merchantId: ae, userId: B, user: oe, hostedFieldsUrl: ce, sessionId: le, hostedFieldsFonts: ue, hostedFieldsAutoFocusNextField: fe, uiGroupCardInputs: pe, uiTheme: me, uiThemeCssText: he, uiCardBrand: ge, uiSuggestAmounts: ye, uiComboView: be, uiBonuses: Ce, extraAttributes: we, hostRiskContext: Te, returnUrl: Ee, selectedBonusCode: Oe, setCashierState: ke } = tn(se), Ae = ce || "https://hf.pvault.net", { translateKey: H, translateKeys: Ne, resolveTextKey: Pe } = dt(), { formatCurrencyValue: Le, formatDisplayValue: Re } = It(), Be = J(() => f(v(ie)), [ie]), Ve = J(() => Be ? [Be] : void 0, [Be]), He = J(() => H(hf), [H]), { getPaymentType: Ue, paymentTypesList: We, pciTenantId: Ke } = St(), { getAvailableBonusesForPaymentType: qe } = U(), Ye = J(() => mm(We), [We]), Xe = me ? "neutral" : void 0, [Ze, Qe] = X(null), $e = Bt(Ze) === "dark" ? "secondary" : "secondary-tinted", et = Se(), tt = Ue(e);
	an(() => et?.attachSelection(tt), [et, tt]);
	let nt = et && dn(tt) ? et : null, rt = K((e, t) => nt && tt ? nt.mapFormObserver(e, t) : e, [nt, tt]), it = `payment-form:${e}`, { isSubscribed: at, setSurfacePending: ot, publishInactive: st } = _t(), { fields: ct, hfFields: ut, name: ft, type: pt, method: mt, accountId: gt, service: vt, limits: yt, fee: bt, logo: xt } = tt ?? {}, W = l || R, Tt = ct ?? Mp, Et = Up(Tt, W), Dt = Hp(Tt), Ot = fp({
		renderMode: c,
		hideAmountField: l,
		lockAmount: R,
		fields: Et
	}), kt = J(() => h(ye), [ye]), At = K((e) => Re(e) || e, [Re]), jt = (e) => new Map(gn(Tt, e).flatMap((e) => e.id && e.notification ? [[e.id, e.notification]] : [])), Mt = ut?.flatMap((e) => e.id && e.notification ? [{
		fieldId: e.id,
		notification: e.notification
	}] : []) ?? [], Nt = Mt.filter(({ notification: e }) => $c(e)), Pt = Mt.filter(({ notification: e }) => !$c(e)), G = !!(ut && ut.length > 0), Ft = ut?.some((e) => typeof e.id == "string" && Qp.has(e.id)) ?? !1, Lt = G && Ft && pt?.toLowerCase() === xm, Rt = Lt && ge, zt = Lt && pe && em(ut), Vt = x && C === "plain", Ht = T !== "none", Wt = x && Vt && !Ht, Gt = Lt, { fieldsBeforeHosted: Kt, cardLayoutDetailsField: qt, cardLayoutFooterField: Jt, fieldsAfterHosted: Yt } = J(() => {
		let e = Up(ct, W);
		if (!G) return {
			fieldsBeforeHosted: e,
			cardLayoutDetailsField: null,
			cardLayoutFooterField: null,
			fieldsAfterHosted: []
		};
		let t = [], n = null, r = null, i = [];
		for (let a of e) if (a.id === bm) {
			if (Gt && !r) {
				r = a;
				continue;
			}
			i.push(a);
		} else Lt && !n && typeof a.id == "string" && Sm.has(a.id) ? n = a : t.push(a);
		return {
			fieldsBeforeHosted: t,
			cardLayoutDetailsField: n,
			cardLayoutFooterField: r,
			fieldsAfterHosted: i
		};
	}, [
		ct,
		W,
		Gt,
		Lt,
		G
	]), Xt = J(() => yp({
		cardLayoutDetailsField: qt,
		cardLayoutFooterField: Jt,
		fieldsAfterHosted: Yt
	}), [
		qt,
		Jt,
		Yt
	]), Zt = J(() => {
		let e = Xd(ut);
		if (e === 0) return hm.min;
		let t = e * hm.field + Math.max(e - 1, 0) * hm.gap + hm.padding;
		return Lt ? t : Math.max(t, hm.min);
	}, [ut, Lt]), [Qt, $t] = X(null), [rn, cn] = X(null), [ln, un] = X("pending"), [fn, pn] = X("pending"), [mn, hn] = X(null), [_n, vn] = X(null), [yn, bn] = X({
		formId: e,
		brand: void 0
	}), xn = Y(null), Sn = yn.formId === e ? yn.brand : void 0, [Cn, wn] = X(!1), Tn = ln === "ready", En = nn();
	an(() => (ot(En, O && G && !Tn && mn === null), () => {
		ot(En, !1);
	}), [
		ot,
		En,
		O,
		G,
		Tn,
		mn
	]);
	let Dn = mn === null ? null : lm(mn, am, H), On = fn === "grouped" || fn === "pending" && zt, kn = G ? Qt === null ? G && zt && On ? vm(1 + Xd(ut?.filter((e) => !$p(e)))) : Lt ? _m(Xd(ut)) : Math.max(rn ?? 0, Zt) : Qt : null, An = J(() => ut ? JSON.stringify(ut) : null, [ut]), [Mn, Nn] = X({
		node: null,
		version: 0
	}), [In, Rn] = X(0), zn = Y({
		scope: "",
		attempts: 0
	}), Bn = [
		e,
		Ae,
		An,
		G ? "visible" : "hidden",
		Mn.version
	].join("|"), Vn = `${Bn}|${String(In)}`, Hn = [Vn, "capabilities"].join("|"), [Un, Wn] = on((e, t) => t, {
		scopeKey: Hn,
		capabilities: Lp,
		received: !1
	}), Gn = Un.scopeKey === Hn, Kn = Gn ? Un.capabilities : Lp, qn = Gn && Un.received, Jn = G && ln !== "ready" && mn === null, Yn = G && ln !== "ready" && mn === null, Xn = ln, Zn = zt, Qn = Y(Kn), $n = Y(qn), er = J(() => Object.fromEntries(Object.entries(tp(void 0, me)).filter(([e]) => Tm.has(e))), [me]), tr = Kn.fieldOverrides === !0, nr = Kn.expiryDateValidation === !0, rr = J(() => {
		if (ut) return ut.map((e) => rm(e, H, Ne, {
			reserveMessageSpace: Lt,
			includeOverrides: tr,
			includeExpiryDateValidation: nr
		}));
	}, [
		ut,
		Lt,
		tr,
		nr,
		H,
		Ne
	]), ir = J(() => {
		if (!rr) return;
		if (!Zn) return rr;
		let e = H(Gp);
		return rr.map((t) => t.id === Rp ? {
			...t,
			groupLabel: e
		} : t);
	}, [
		rr,
		Zn,
		H
	]), ar = J(() => JSON.stringify({
		fields: ir ?? null,
		fonts: ue ?? null,
		geometryTheme: er,
		css: he ?? null,
		uiGroupCardInputs: Zn
	}), [
		ir,
		ue,
		er,
		Zn,
		he
	]), or = K((e) => zt && e.groupedCardInputs ? "grouped" : "flat", [zt]), sr = J(() => rr ? On ? im(rr, H(Gp)) : rr : Ip, [
		rr,
		On,
		H
	]), cr = Y(null), lr = Y(null), ur = K((e) => {
		lr.current = e, Nn((t) => t.node === e ? t : {
			node: e,
			version: t.version + 1
		});
	}, []), dr = Y(null), fr = Y(null), pr = Y(He), mr = Y(null), hr = Y(null), gr = Y(fn), _r = Y(ln), vr = Y(!1), yr = Y(null), br = Y(null), xr = Y(null), Sr = Y(null), Cr = K(() => op(lr.current), []), wr = J(() => dp(Sn, Ye), [Sn, Ye]), Tr = J(() => {
		if (pt?.toLowerCase() === xm && gt) return De(ft);
	}, [
		gt,
		ft,
		pt
	]), Er = J(() => dp(Tr, Ye), [Ye, Tr]), Dr = Sn ? wr : Er, Or = (() => {
		if (Sn) return wr?.logo;
		if (Tr) return xt ?? Er?.logo;
	})(), kr = Rt, Ar = $e, jr = kr ? Dr?.theme ?? Ar : Ar, Mr = Dr?.brand ?? Cm, Nr = Y(null), [Pr, Fr] = X(!1), { makePayment: Ir, finishPayment: Lr, paymentStatusMessage: Rr, isPaymentPending: zr, isPaymentSuccessful: Br, isPaymentFailed: Vr } = Fd({
		paymentType: pt ?? "",
		method: mt ?? ""
	}), Hr = zr || Br || Pr && !Vr, { overridePayload: Ur, resetOverridePayload: Wr, setLocked: Gr } = su(), { registerReset: Kr } = uu();
	q(() => {
		Gr(Hr);
	}, [Hr, Gr]), q(() => () => {
		Wr(), Gr(!1);
	}, [Wr, Gr]), q(() => {
		pr.current = He;
		let e = fr.current?.iframe;
		e && He && (e.title = He);
	}, [He]);
	let qr = K((e) => {
		let t = e?.preserveHeight ?? !1;
		$t((e) => t ? e : null), hn(null);
	}, []), Jr = K(() => {
		hr.current?.(), hr.current = null;
	}, []), Yr = K(() => {
		Jr(), vr.current = !1, yr.current = null, _r.current = "pending", gr.current = "pending", un("pending"), pn("pending");
	}, [Jr]), Xr = K(() => {
		Jr();
		let e = mr.current?.isReady() ?? !1, t = "pending";
		$n.current ? t = or(Qn.current) : e && (t = "flat"), vr.current = e, yr.current = null, _r.current = "pending", gr.current = t, un("pending"), pn(t), hn(null);
	}, [Jr, or]);
	an(() => {
		let e = Sr.current;
		e !== ar && (Sr.current = ar, e !== null && G && Xr());
	}, [
		ar,
		Xr,
		G
	]);
	let Zr = K(() => {
		_r.current !== "ready" && (Jr(), _r.current = "ready", un("ready"), hn(null));
	}, [Jr]), Qr = K(() => {
		if (_r.current === "ready") return;
		let e = yr.current;
		if (!vr.current || !e || gr.current === "pending" || e.containerHeight <= 0) return;
		Jr();
		let t = e.containerHeight, n = xr.current, r = kp, i = null, a = !1, o = null, s = null, c = null, l = lr.current?.ownerDocument.defaultView, u = () => {
			if (a) return;
			let e = yr.current;
			if (!(vr.current && gr.current !== "pending" && e?.containerHeight === t && xr.current === n)) return;
			let o = lr.current, s = o?.getBoundingClientRect().height ?? 0, c = Number.parseFloat(o?.style.height ?? ""), l = s > 0 ? s : c, u = typeof o?.getAnimations == "function" && o.getAnimations().some((e) => e.playState === "running"), f = Number.isFinite(l) && l > 0 && i !== null && Math.abs(l - i) <= jp;
			i = l, r = f && !u ? r - 1 : kp, r > 0 ? d() : (hr.current = null, Zr());
		}, d = () => {
			let e = !1, t = () => {
				e || a || (e = !0, o !== null && l?.cancelAnimationFrame && (l.cancelAnimationFrame(o), o = null), s !== null && (clearTimeout(s), s = null), u());
			};
			s = setTimeout(t, Ap), l?.requestAnimationFrame && (o = l.requestAnimationFrame(t));
		};
		hr.current = () => {
			a = !0, o !== null && l?.cancelAnimationFrame && l.cancelAnimationFrame(o), s !== null && clearTimeout(s), c !== null && clearTimeout(c);
		}, c = setTimeout(d, Op);
	}, [Jr, Zr]), $r = K(() => {
		gr.current === "pending" && (Jr(), gr.current = "flat", pn("flat")), vr.current = !0, Qr();
	}, [Jr, Qr]), ei = K(({ containerHeight: e }) => {
		let t = Math.ceil(e);
		t <= 0 || (zn.current.attempts = 0, yr.current?.containerHeight === t ? hr.current || Qr() : (yr.current = { containerHeight: t }, $t((e) => e === t ? e : t), Qr()));
	}, [Qr]);
	q(() => {
		_r.current = ln;
	}, [ln]), q(() => {
		gr.current = fn;
	}, [fn]), q(() => {
		Qn.current = Kn, $n.current = qn;
	}, [qn, Kn]), q(() => Jr, [Jr]), q(() => {
		if (!G) return;
		let e = dr.current;
		if (!e) return;
		let t = () => {
			let t = Math.ceil(e.getBoundingClientRect().height);
			t <= 0 || cn((e) => e === t ? e : t);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(() => {
			t();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [sr, G]);
	let ti = K(() => {
		qr({ preserveHeight: !0 });
	}, [qr]), ni = K(() => {
		let e = xn.current;
		e !== null && (clearTimeout(e), xn.current = null);
	}, []), ri = K((t, n) => {
		ni(), t || !n?.delayedClear ? bn((n) => n.formId === e && n.brand === t ? n : {
			formId: e,
			brand: t
		}) : xn.current = setTimeout(() => {
			xn.current = null, bn((t) => t.formId === e && t.brand === void 0 ? t : {
				formId: e,
				brand: void 0
			});
		}, ym);
	}, [ni, e]);
	q(() => ni, [ni]);
	let ii = K(() => {
		qr({ preserveHeight: !0 }), vn(null), ri(void 0), mr.current?.reset();
	}, [qr, ri]), ai = K(() => {
		Hr || Cn || (Fr(!1), ii(), Nr.current?.resetForm(), Lr(), Wr());
	}, [
		Lr,
		Hr,
		Cn,
		ii,
		Wr
	]), oi = Y(null);
	q(() => {
		oi.current = ai;
	}, [ai]);
	let si = K(() => {
		oi.current?.();
	}, []), ci = Y(!1);
	q(() => {
		if (!P) ci.current &&= (Kr(null), !1);
		else if (!ci.current) return Kr(si), ci.current = !0, () => {
			ci.current &&= (Kr(null), !1);
		};
	}, [
		P,
		Kr,
		si
	]);
	let li = K((e) => {
		if (e.type === ff.CARD_BRAND) ri(e.cardBrand, { delayedClear: e.cardBrand === void 0 });
		else if (e.type === ff.FORM_STATE) vn(e.formState ?? null);
		else if (e.type === ff.AUTO_FOCUS_NEXT) {
			if (!fe || !Xt) return;
			let e = lr.current?.ownerDocument ?? (typeof document < "u" ? document : null), t = e?.defaultView ?? (typeof window < "u" ? window : null);
			if (!e) return;
			let n = fr.current?.iframe;
			if (!n || e.activeElement !== n) return;
			let r = () => {
				fr.current?.iframe === n && n.isConnected && e.activeElement === n && xp(Xt, e);
			};
			if (t && typeof t.requestAnimationFrame == "function") {
				t.requestAnimationFrame(r);
				return;
			}
			setTimeout(r, 0);
		}
	}, [
		fe,
		Xt,
		ri
	]);
	q(() => {
		if (!G) return;
		let e = Mn.node;
		if (!e) return;
		let t = e.ownerDocument.defaultView ?? (typeof window < "u" ? window : void 0), n = br.current, r = Vn;
		if (fr.current && n !== null && n === r) return;
		en(() => {
			Yr(), qr(), vn(null), ri(void 0);
		}), fr.current?.destroy(), fr.current = null, mr.current = null, br.current = r, xr.current = null;
		let i = (() => {
			let e;
			if (t ? e = t.location.href : typeof window < "u" && (e = window.location.href), e) try {
				return new URL(Ae, e).origin;
			} catch {
				return;
			}
		})();
		zn.current.scope !== Bn && (zn.current = {
			scope: Bn,
			attempts: 0
		});
		let a = null, o = Af({
			container: e,
			iframe: {
				src: Ae,
				title: pr.current,
				attributes: { scrolling: "no" },
				styles: {
					minHeight: Lt ? "100%" : `${String(hm.min)}px`,
					overflow: "hidden"
				}
			},
			controller: {
				...i ? { targetOrigin: i } : {},
				onStartupStalled: (e) => {
					a !== null && clearTimeout(a);
					let t = zn.current.attempts, n = Math.min(1e3 * 2 ** Math.min(t, 5), 3e4);
					a = setTimeout(() => {
						a = null, fr.current === o && e() && (zn.current.attempts += 1, Rn((e) => e + 1));
					}, n);
				}
			}
		});
		return fr.current = o, mr.current = o.controller, typeof o.iframe.addEventListener == "function" && o.iframe.addEventListener("pointerdown", ti), () => {
			a !== null && clearTimeout(a), typeof o.iframe.removeEventListener == "function" && o.iframe.removeEventListener("pointerdown", ti), o.destroy(), fr.current === o && (fr.current = null, mr.current = null), Yr(), qr(), vn(null), ri(void 0), br.current = null, xr.current = null;
		};
	}, [
		ti,
		qr,
		Ae,
		Bn,
		Vn,
		Mn.node,
		Yr,
		Lt,
		G,
		ri
	]), q(() => {
		if (!G) return;
		let e = mr.current;
		if (!e) return;
		let t = !1, n = (e) => {
			if (t) return;
			let n = mf(e);
			if ($n.current && Qn.current.groupedCardInputs === n.groupedCardInputs && Qn.current.fieldOverrides === n.fieldOverrides && Qn.current.expiryDateValidation === n.expiryDateValidation) return;
			Qn.current = n, $n.current = !0, Wn({
				scopeKey: Hn,
				capabilities: n,
				received: !0
			});
			let r = or(n);
			gr.current !== r && (Jr(), _r.current === "ready" && (_r.current = "pending", un("pending")), gr.current = r, pn(r), Qr());
		};
		e.setCallbacks({
			onLoading: (e) => {
				t || (qr({ preserveHeight: !0 }), vn(null), e === "navigation" ? (Yr(), Qn.current = Lp, $n.current = !1, Wn({
					scopeKey: Hn,
					capabilities: Lp,
					received: !1
				})) : Xr());
			},
			onReady: $r,
			onLayout: ei,
			onCapabilities: n,
			onMessage: li
		});
		let r = e.getCapabilities();
		r.groupedCardInputs !== void 0 && queueMicrotask(() => {
			n(r);
		});
		let i = e.getLastLayout();
		i && ei(i);
		let a = e.getLastFormState();
		return a && vn(a), e.isReady() && $r(), () => {
			t = !0, e.setCallbacks(null);
		};
	}, [
		$r,
		ei,
		li,
		Jr,
		Qr,
		or,
		An,
		Hn,
		Ae,
		Yr,
		Xr,
		qr,
		G
	]), q(() => {
		if (!G) return;
		let e = () => {
			let e = mr.current;
			if (!e) return;
			let t = tp(Cr, me, qf(lr.current)), n = Object.entries(t).sort(([e], [t]) => e.localeCompare(t)), r = n.length > 0 ? Object.fromEntries(n) : void 0, i = F(me, {
				scopeSelector: wm,
				cssUrlText: he
			}).cssText, a = {
				debugMode: P,
				fields: ir ?? void 0,
				fonts: ue,
				uiTheme: r,
				css: i || void 0,
				autoFocusNextField: fe,
				pciTenantId: Ke,
				uiGroupCardInputs: Zn
			}, o = JSON.stringify({
				...a,
				fields: a.fields ?? null,
				fonts: a.fonts ?? null,
				uiTheme: a.uiTheme ?? null,
				css: a.css ?? null,
				pciTenantId: a.pciTenantId ?? null,
				uiGroupCardInputs: a.uiGroupCardInputs
			});
			if (xr.current === o) return;
			Jr(), _r.current !== "ready" && (yr.current = null), xr.current = o, e.configure(a);
			let s = e.getLastLayout();
			s && ei(s);
		}, t = lr.current?.closest(".pc-ui__credit-card-panel"), n = t && typeof MutationObserver < "u" ? new MutationObserver(e) : null;
		return t && n?.observe(t, {
			attributes: !0,
			attributeFilter: ["data-pc-input-context"]
		}), e(), () => n?.disconnect();
	}, [
		Jr,
		jr,
		ei,
		P,
		ue,
		fe,
		Ae,
		ir,
		Vn,
		Ke,
		Cr,
		Zn,
		G,
		me,
		he
	]);
	let ui = J(() => {
		let e = wt(ct, { amount: L });
		return Object.entries(y ?? {}).forEach(([t, n]) => {
			n !== void 0 && (e[t] = n);
		}), R ? pp({
			values: e,
			amountValueOverride: d,
			initialAmount: L,
			lockAmount: R,
			shouldHideAmountField: W,
			hasAmountField: Dt
		}) : e;
	}, [
		ct,
		L,
		y,
		d,
		R,
		W,
		Dt
	]), di = K((e) => {
		let t = mr.current;
		if (!t) return Promise.reject(/* @__PURE__ */ Error("error.hosted_fields_not_ready"));
		hn(null), wn(!0);
		try {
			let n = t.tokenize({ saveAccount: e });
			return Promise.resolve(n).catch((e) => {
				let t = e instanceof Error ? e : Error(String(e)), n = um(t.message);
				throw hn(n), t;
			}).finally(() => {
				wn(!1);
			});
		} catch (e) {
			wn(!1);
			let t = e instanceof Error ? e : Error(String(e)), n = um(t.message);
			return hn(t.message === "error.payment_context_changed" ? null : n), Promise.reject(t);
		}
	}, []), fi = Y(null);
	an(() => {
		if (fi.current = (t) => {
			let n = pp({
				values: t ?? Nr.current?.values ?? ui,
				amountValueOverride: d,
				initialAmount: L,
				shouldHideAmountField: W,
				hasAmountField: Dt,
				lockAmount: R
			}), r = typeof n.amount == "number" ? String(n.amount) : n.amount, i = je({
				config: j,
				amount: typeof r == "string" ? r : void 0,
				resolveText: (e) => H(e),
				resolveTextKey: Pe,
				formatAmount: (e) => Le(e)
			});
			return {
				capture: i,
				requestId: f(n.merchantRequestId) ?? void 0,
				material: S(j, i, JSON.stringify([
					ae,
					B,
					mt,
					e,
					gt,
					vt,
					Oe,
					f(n.merchantRequestId)
				]))
			};
		}, !nt && N?.getSnapshot().phase === "preparing") try {
			N.observeMaterial(fi.current().material);
		} catch {
			N.observeMaterial("invalid");
		}
	});
	let pi = Y(void 0);
	q(() => () => {
		let e = pi.current;
		e !== void 0 && N?.abandonPreparation(e, "error.payment_context_changed");
	}, [N]);
	let mi = Y(0);
	an(() => (mi.current += 1, () => {
		mi.current += 1;
	}), []);
	let hi = K(async () => {
		let e = mi.current, t = Nr.current;
		if (!nt || !tt || !t) return !1;
		let n = pp({
			values: t.values,
			amountValueOverride: d,
			initialAmount: L,
			shouldHideAmountField: W,
			hasAmountField: Dt,
			lockAmount: R
		});
		if (a) {
			let e = nt.validateWeb(tt, n);
			return t.setErrors({ ...e }), !Object.keys(e).length && (a({
				values: Fn({ ...nt.ordinaryForm.getSnapshot().values }),
				hasHostedFields: !1
			}), !0);
		}
		let r = await nt.submitWeb(tt, n);
		return mi.current === e && (t.setErrors({ ...nt.ordinaryForm.getSnapshot().errors }), r || hn(nt.submissionError() ?? null), r && (k?.(), O && st(it))), r;
	}, [
		nt,
		tt,
		d,
		L,
		W,
		Dt,
		R,
		a,
		k,
		O,
		st,
		it
	]), gi = K(async (e) => {
		if (M && !te?.checkout.canPay()) return;
		if (nt) return hi();
		if (!a && N?.isBlocked()) return;
		let t;
		try {
			if (!a && N && fi.current) {
				let e = fi.current();
				t = N.beginPreparation(e.capture, e.material), pi.current = t;
			}
			return await e();
		} catch (e) {
			hn(e instanceof Error ? e.message : "error.payment_processing_failed");
			return;
		} finally {
			t !== void 0 && N?.abandonPreparation(t, N.getSnapshot().invalidated ? "error.payment_context_changed" : void 0), pi.current === t && (pi.current = void 0);
		}
	}, [
		N,
		te,
		a,
		M,
		nt,
		hi
	]), _i = K(async (e, t) => {
		if (M && !te?.checkout.canPay()) return;
		if (nt) {
			try {
				await hi();
			} finally {
				t.setSubmitting(!1);
			}
			return;
		}
		let n = pi.current, r = P ? Ur : void 0;
		try {
			if (n === void 0 && !a && N && fi.current) {
				let t = fi.current(e);
				n = N.beginPreparation(t.capture, t.material), pi.current = n;
			}
			if (!await Pp(Nr)) return;
			let t = pp({
				values: e,
				amountValueOverride: d,
				initialAmount: L,
				shouldHideAmountField: W,
				hasAmountField: Dt,
				lockAmount: R
			});
			jn({
				type: pt,
				method: mt,
				values: t,
				hostRiskContext: Te
			});
			let i = await Pn(t, di, mr.current);
			if (jn({
				type: pt,
				method: mt,
				values: i,
				hostRiskContext: Te
			}), a) {
				a({
					values: i,
					hasHostedFields: G
				});
				return;
			}
			let s = typeof i.amount == "string" ? Ut(i.amount) : null, c = Oe ? qe(tt, s === null ? void 0 : { amount: s }) : [], l = ht({
				uiBonuses: Ce,
				selectedBonusCode: Oe,
				availableBonuses: c
			});
			if (j.offers !== void 0 && j.selectedOfferId && !c.some((e) => e.code === j.selectedOfferId)) throw Error("error.payment_context_changed");
			let u = Ln({
				values: i,
				merchantId: ae,
				userId: B,
				sessionId: le,
				accountId: gt,
				currency: re,
				service: vt,
				bonusCode: j.offers === void 0 ? l : o(j.offers, j.selectedOfferId),
				locales: Ve,
				extra: we,
				hostRiskContext: Te,
				returnUrl: Ee,
				method: mt,
				type: pt,
				debug: P,
				overrideRaw: r
			});
			if (n !== void 0 && fi.current) {
				let e = fi.current();
				N?.verifyPreparation(n, e.material);
				let t = Fe(u.amount);
				if (t === void 0 != (e.capture.amount === void 0) || t !== void 0 && e.capture.amount !== void 0 && p(t, e.capture.amount) !== 0 || u.currency !== e.capture.currency || u.merchantId !== e.capture.merchantId || u.userId !== B || u.accountId !== gt || u.service !== (f(vt) ?? void 0) || u.merchantRequestId !== e.requestId) throw Error("error.payment_context_changed");
			}
			Fr(!0);
			try {
				if (n === void 0 ? await Ir(u) : await Ir(u, n), n !== void 0 && !N?.acceptsCreation(n)) return;
				k?.(), O && st(it);
			} catch {} finally {
				Fr(!1);
			}
		} catch (e) {
			Fr(!1);
			let t = e instanceof Error ? e : Error(String(e)), r = um(t.message);
			n !== void 0 && N?.abandonPreparation(n, t.message === "error.payment_context_changed" ? t.message : void 0), hn(t.message === "error.payment_context_changed" ? null : r);
		} finally {
			n !== void 0 && N?.abandonPreparation(n), pi.current === n && (pi.current = void 0), t.setSubmitting(!1);
		}
	}, [
		nt,
		hi,
		N,
		te,
		M,
		j.offers,
		j.selectedOfferId,
		ae,
		B,
		gt,
		vt,
		Oe,
		Ce,
		P,
		Ir,
		re,
		le,
		we,
		Te,
		Ee,
		qe,
		L,
		d,
		di,
		a,
		k,
		O,
		mt,
		tt,
		Dt,
		R,
		W,
		G,
		pt,
		Ur,
		Ve,
		it,
		st
	]), vi = K((e) => {
		let t = pp({
			values: e,
			amountValueOverride: d,
			initialAmount: L,
			shouldHideAmountField: W,
			hasAmountField: Dt,
			lockAmount: R
		});
		if (nt && tt) return { ...nt.validateWeb(tt, t) };
		let n = Up(ct, W && !R);
		return c === "confirm" && (n = R ? (ct ?? []).filter((e) => e.id === "amount") : []), Ge(ve(n, t), t, Ne);
	}, [
		nt,
		tt,
		d,
		ct,
		L,
		R,
		Dt,
		c,
		W,
		Ne
	]), yi = (Vr ? lm(Rr, "error.unknown", H) : null) || Dn;
	return !tt || !ct ? null : /* @__PURE__ */ Z(Ac, {
		initialValues: ui,
		onSubmit: _i,
		validate: vi,
		innerRef: Nr,
		validateOnMount: !0,
		children: ({ values: i, errors: a, initialValues: l, submitForm: f, setFieldValue: p, setFieldTouched: h, isValid: v, dirty: y }) => {
			let S = (e, t) => {
				if (h(e, !0, !1), p(e, t, !0), typeof window > "u" || typeof document > "u") return;
				let n = () => {
					let t = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/"/g, "\\\""), n = document.querySelector(`[name="${t}"]`);
					n ? n.focus() : document.getElementById(A.id("payment-field", { slug: e }))?.focus();
				}, r = typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : null;
				r ? r(n) : setTimeout(n, 0);
			}, C = typeof i.amount == "string" ? i.amount : "", T = (R ? L : d ?? (W && Dt ? L : void 0)) ?? C, k = pp({
				values: i,
				amountValueOverride: d,
				initialAmount: L,
				shouldHideAmountField: W,
				hasAmountField: Dt,
				lockAmount: R
			}), te = _e(mt === "payout" ? r.PAYOUT : r.PAYIN, oe, bt), F = I(T, yt, { maxBoundary: te }), ie = ee(F, H, Le), ae = !!F, B = typeof a.amount == "string" && a.amount.length > 0 ? a.amount : void 0, se = B ? void 0 : ie, ce = R ? B || se : void 0, le = Object.values(l).some(Me), ue = b && c !== "confirm" && !le, de = Ie(a), fe = ze(c === "confirm" ? [] : ve(Et, k), k), pe = c === "confirm" || !G || Np(_n), me = y || G && Np(_n), he = !v || de || ae || fe || !pe || !me && ue, ge = M && j.checkoutState?.phase !== "confirmed" || Hr || Cn || he, ye = !he, Se = (!Vr || v) && pt !== "info", Ce = !t, we = Ce && Se, Te = H("payment.submit"), Ee = H("cta.reset"), De = Hr || Cn, Ae = Hr || Cn, je = G ? {
				ready: Tn && mn === null,
				dirty: !!_n?.dirty,
				valid: !!_n?.isValid && mn === null,
				complete: !!_n?.isComplete && mn === null,
				error: mn !== null
			} : null, Pe = v && !de && !ae && !fe && (!je || je.valid), Fe = Pe && pe, Re = at && O && c === "form", Be = Re ? Dp({
				amount: T,
				bonusCode: j.offers === void 0 ? Oe : o(j.offers, j.selectedOfferId) ?? null,
				canSubmit: Se && !ge,
				complete: Fe,
				currency: re,
				dirty: y || !!je?.dirty,
				errors: a,
				fields: Et,
				hostedFields: je,
				initialValues: l,
				method: ne,
				paymentType: tt,
				submitting: Ae,
				valid: Pe,
				values: k
			}) : null, Ve = c !== "confirm", He = Ve && G, Ue = (E || we) && !He && Yt.length === 0, We = (E || we) && Yt.length > 0, U = He && Nt.length > 0, Ge = He && Pt.length > 0, Ke = m(T) || T || void 0, qe = !R && !be && Ve && kt.length > 0 && !!Et.find((e) => e.id === Vp), Ze = Ce && Se ? 1 : 0, $e = Kt.length + +!!U + +!!He + +!!Ge + Yt.length + Ze, et = Kt.length, ot = et + +!!U, st = ot + +!!He, ct = st + +!!Ge, lt = ct + Yt.length, ut = (e) => qe && e === Vp ? /* @__PURE__ */ Z(df, {
				suggestions: kt,
				activeSuggestion: Ke,
				onSelect: (e) => {
					p(Vp, _(e), !1);
				},
				formatLabel: At,
				amountLimits: yt,
				size: "xs"
			}) : null, dt = jt(i), ft = (e) => {
				let t = dt.get(e);
				return $c(t) ? /* @__PURE__ */ Z("div", {
					className: el,
					children: /* @__PURE__ */ Z(rl, {
						notification: t,
						translateKeys: Ne
					})
				}) : null;
			}, ht = (e, { isLastRenderableField: t }) => {
				let n = dt.get(e), r = n && !$c(n) ? n : null, i = P && fm(e);
				return !r && !i ? null : /* @__PURE__ */ Q("div", {
					className: tl,
					children: [r && /* @__PURE__ */ Z(rl, {
						notification: r,
						translateKeys: Ne
					}), i && /* @__PURE__ */ Q("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ Z("span", {
							className: "text-sm font-medium",
							children: "Debug"
						}), dm(e).map(({ value: t, label: n }) => /* @__PURE__ */ Z(xe, {
							variant: "neutral",
							size: "sm",
							disabled: Hr,
							onClick: () => {
								S(e, t);
							},
							label: n
						}, `${e}_${n}`))]
					})]
				});
			}, gt = (e) => e !== Vp || !g ? null : /* @__PURE__ */ Z("div", {
				"data-slot": "payment-form-after-amount",
				className: "flex min-w-0 flex-col gap-2",
				children: g
			}), _t = He && Rt, vt = He && Lt && !_t, xt = x && Lt && !Vt, St = !x && (Kt.length > 0 || Yt.length > 0), wt = vt, Ft = Ht && St && He && w === "contained", It = Ht && St && !He && w === "contained", zt = Ht && Vt, Bt = Ht && x && !Vt || zt || Ft || It, Ut = !He, Gt = vt && (!x || xt) && Ht && w === "contained", Xt = vt && !Gt ? Kp : z, Zt = (e) => !1, Qt = (e) => /* @__PURE__ */ Z(hp, {
				kind: "field-panel",
				fieldEdgeSpacing: Ut ? "balanced" : "default",
				children: e
			}), $t = (e) => Qt(/* @__PURE__ */ Z("div", {
				className: Xt,
				children: e
			})), en = _t ? {
				marginInline: On ? "calc(var(--pc-size-input-focus-ring, 3px) * -1)" : -4,
				...On ? { marginBlock: "calc(var(--pc-size-input-focus-ring, 3px) * -1)" } : {}
			} : void 0, K = {
				margin: -4,
				width: "calc(100% + 8px)"
			}, tn = {
				marginInline: -4,
				width: "calc(100% + 8px)"
			}, q = vt ? tn : K;
			_t && (q = kn === null ? void 0 : { height: kn }), !_t && kn !== null && (q = {
				...vt ? tn : K,
				height: vt || typeof kn != "number" ? kn : kn + 8
			});
			let nn;
			_t || (nn = vt ? { insetInline: -4 } : { inset: -4 });
			let rn = /* @__PURE__ */ Q("div", {
				"data-theme": _t ? void 0 : Xe,
				className: V(A.className("hosted-fields-frame"), "relative", _t ? "overflow-hidden rounded-[var(--pc-radius-lg)] bg-transparent" : "overflow-visible bg-transparent"),
				style: {
					...er,
					...en
				},
				children: [/* @__PURE__ */ Z("div", {
					ref: ur,
					"aria-hidden": !Tn || void 0,
					"data-slot": "hosted-fields-target",
					"data-state": Tn ? "ready" : "loading",
					inert: !Tn || void 0,
					className: V(A.className("hosted-fields-target"), "w-full overflow-hidden", !Tn && "pointer-events-none", D && Tn && "duration-180 ease-out", D && Tn && (_t ? "transition-[height,opacity]" : "transition-opacity"), Tn ? "opacity-100" : "opacity-0"),
					style: q
				}), G && /* @__PURE__ */ Z("div", {
					"aria-hidden": "true",
					"data-testid": "cashier-hosted-fields-skeleton",
					"data-slot": "hosted-fields-skeleton-layer",
					"data-state": Xn,
					className: V(A.className("hosted-fields-skeleton"), "pointer-events-none absolute inset-0 z-10 overflow-hidden", D && "transition-opacity duration-180 ease-out", Jn ? "opacity-100" : "opacity-0"),
					style: nn,
					children: /* @__PURE__ */ Z(sf, {
						fields: sr,
						className: "h-full"
					})
				})]
			}), an = !!(Jt && tm(Jt)), J = kr && Or ? /* @__PURE__ */ Z(Dm, {
				brand: Dr?.brand,
				logo: Or
			}) : null, on = !!(Jt && an), Y = on ? Jt : null, X = !!(Y && J), cn = _t && !!Y, ln = cn, un = [...qt ? [qt] : []], dn = cn ? un : [...un, ...Y ? [Y] : []], fn = Lt, pn = Jp;
			_t && (pn = On ? Yp : qp);
			let hn = un.length > 0 ? /* @__PURE__ */ Z(Bd, {
				fields: un,
				translateKey: H,
				translateKeys: Ne,
				disabled: Hr,
				amountError: se,
				renderBelowFieldContent: ut,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: ft,
				renderAfterField: ht,
				renderAfterFieldRow: gt,
				reserveInputMessageSpace: fn,
				reserveCheckboxMessageSpace: fn,
				reserveLastCheckboxMessageSpace: fn,
				reserveLastAmountMessageSpace: fn,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}) : null, gn = Y ? /* @__PURE__ */ Z("div", {
				"data-slot": "cashier-card-shell-inline-footer-row",
				className: V("w-full min-w-0", ln ? "pr-16" : void 0),
				children: /* @__PURE__ */ Z(Bd, {
					fields: [Y],
					translateKey: H,
					translateKeys: Ne,
					disabled: Hr,
					amountError: se,
					renderBelowFieldContent: ut,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: ht,
					renderAfterFieldRow: gt,
					reserveInputMessageSpace: fn,
					reserveCheckboxMessageSpace: fn,
					reserveLastCheckboxMessageSpace: fn,
					reserveLastAmountMessageSpace: fn,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, vn;
			cn ? vn = /* @__PURE__ */ Q("div", {
				"data-slot": "cashier-card-shell-details-stack",
				className: "relative flex w-full min-w-0 flex-col gap-1",
				children: [
					hn,
					gn,
					ln && /* @__PURE__ */ Z("div", {
						"data-slot": "cashier-card-shell-inline-brand",
						className: Xp,
						"aria-hidden": !X,
						children: X ? J : null
					})
				]
			}) : dn.length > 0 && (vn = /* @__PURE__ */ Z(Bd, {
				fields: dn,
				translateKey: H,
				translateKeys: Ne,
				disabled: Hr,
				amountError: se,
				renderBelowFieldContent: ut,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: ft,
				renderAfterField: ht,
				renderAfterFieldRow: gt,
				reserveInputMessageSpace: fn,
				reserveCheckboxMessageSpace: fn,
				reserveLastCheckboxMessageSpace: fn,
				reserveLastAmountMessageSpace: fn,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}));
			let yn = vn, bn = Jt && !on ? /* @__PURE__ */ Z("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ Z(Bd, {
					fields: [Jt],
					translateKey: H,
					translateKeys: Ne,
					disabled: Hr,
					amountError: se,
					renderBelowFieldContent: ut,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: ht,
					renderAfterFieldRow: gt,
					reserveInputMessageSpace: fn,
					reserveCheckboxMessageSpace: fn,
					reserveLastCheckboxMessageSpace: fn,
					reserveLastAmountMessageSpace: fn,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, xn = X ? null : J, Sn = kr && !Y && !!(Ye || Or), wn = bn || xn ? /* @__PURE__ */ Q("div", {
				"data-slot": "cashier-card-shell-footer-row",
				className: V("flex min-w-0 items-end w-full gap-3 pb-1.5", bn ? "justify-between" : "justify-end px-0.5"),
				children: [bn, xn]
			}) : void 0, En = _t && (!!bn || wn == null && !Sn), Dn = rn;
			Lt && (Dn = /* @__PURE__ */ Z(hp, {
				kind: "field-panel",
				active: Gt,
				children: /* @__PURE__ */ Z(Je, {
					presentation: _t ? "card" : "fields",
					dataTheme: jr,
					brandMotionKey: Mr,
					className: _t ? A.className("hosted-fields-card-shell") : Kp,
					rootAttributes: { "data-slot": vt ? "cashier-unbranded-card-fields" : void 0 },
					cardFields: rn,
					details: yn,
					detailsClassName: _t ? pn : "mt-0",
					footer: wn,
					footerClassName: "w-full",
					reserveFooterSpace: Sn,
					hasReservedTrailingMessageSpace: En
				})
			}));
			let An = Kt.length > 0 ? /* @__PURE__ */ Z("div", {
				className: "contents",
				children: /* @__PURE__ */ Z(Bd, {
					fields: Kt,
					translateKey: H,
					translateKeys: Ne,
					disabled: Hr,
					amountError: se,
					renderBelowFieldContent: ut,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: ht,
					renderAfterFieldRow: gt,
					animateRows: D,
					animationStartIndex: 0,
					animationTotalCount: $e,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !vt && wt,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !vt && (!Bt && !Wt || Zt(Kt)),
					addLastFieldBottomPadding: !vt && !Bt && !Wt && !Ue,
					reserveTrailingActionClearance: Ue
				})
			}) : null, jn = vt ? "relative mb-0 w-full" : xt ? "relative mb-2 @md:mb-3 w-full" : "relative mb-2 w-full", Mn = He ? /* @__PURE__ */ Q(hp, {
				kind: "form",
				chrome: "plain",
				active: x && vt && xt && Kt.length === 0 && Yt.length === 0 && Mt.length === 0,
				children: [Yn && /* @__PURE__ */ Z("span", {
					className: "sr-only",
					role: "status",
					"aria-live": "polite",
					"data-slot": "hosted-fields-loading-status",
					children: H("loading.hosted_fields")
				}), /* @__PURE__ */ Q("div", {
					id: A.id("hosted-fields-container"),
					ref: cr,
					"aria-busy": Yn ? !0 : void 0,
					className: V(A.className("hosted-fields-container"), jn, D && "pc-enter-rise-item"),
					"data-motion": D ? void 0 : "static",
					"data-testid": "cashier-hosted-fields-container",
					style: D ? yl({
						index: ot,
						total: $e,
						direction: "reverse"
					}) : void 0,
					children: [
						/* @__PURE__ */ Z("span", {
							ref: Qe,
							"aria-hidden": "true",
							"data-slot": "cashier-card-shell-theme-probe",
							hidden: !0
						}),
						Dn,
						/* @__PURE__ */ Z("div", {
							"aria-hidden": "true",
							className: "pointer-events-none invisible absolute inset-x-0 top-0 -z-10 overflow-hidden",
							children: /* @__PURE__ */ Z("div", {
								ref: dr,
								className: "w-full min-w-0",
								children: /* @__PURE__ */ Z(sf, { fields: sr })
							})
						})
					]
				})]
			}) : null, Nn = (e, t) => e.length > 0 ? /* @__PURE__ */ Z("div", {
				className: V(A.className("hosted-fields-notifications"), t.placement === "top" ? "mb-2.5 flex flex-col gap-2 @xl:col-span-2" : "mt-3 mb-4 flex flex-col gap-2 @xl:col-span-2", D && "pc-enter-rise-item"),
				style: D ? yl({
					index: t.animationIndex,
					total: $e,
					direction: "reverse"
				}) : void 0,
				children: e.map(({ fieldId: e, notification: t }) => /* @__PURE__ */ Z(rl, {
					notification: t,
					translateKeys: Ne
				}, `${e}-${t.key}-${t.type}`))
			}) : null, Pn = U ? Nn(Nt, {
				placement: "top",
				animationIndex: et
			}) : null, Fn = Ge ? Nn(Pt, {
				placement: "bottom",
				animationIndex: st
			}) : null, In = Yt.length > 0 ? /* @__PURE__ */ Z("div", {
				className: "contents",
				children: /* @__PURE__ */ Z(Bd, {
					fields: Yt,
					translateKey: H,
					translateKeys: Ne,
					disabled: Hr,
					amountError: se,
					renderBelowFieldContent: ut,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: ht,
					renderAfterFieldRow: gt,
					animateRows: D,
					animationStartIndex: ct,
					animationTotalCount: $e,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !vt && wt,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !vt && (!Bt && !Wt || Zt(Yt)),
					addLastFieldBottomPadding: !vt && !Bt && !Wt && !We,
					reserveTrailingActionClearance: !vt && We
				})
			}) : null, Ln = x && (!!An || !!In || !xt && (!!Mn || !!Pn || !!Fn)), Rn = /* @__PURE__ */ Q(sn, { children: [
				An,
				!xt && Pn,
				!xt && Mn,
				!xt && Fn,
				In
			] }), zn = /* @__PURE__ */ Z("div", {
				"data-slot": "quick-payment-form-grid",
				className: V(Xt, Vt && "overflow-visible", Vt && vt ? "pt-3" : Vt || xt ? "pt-0" : _t ? "pt-2" : "pt-0"),
				children: Rn
			}), Bn = zt ? Qt(zn) : zn, Vn = /* @__PURE__ */ Q(sn, { children: [
				xt && Pn,
				xt && Mn,
				xt && Fn,
				Ln && /* @__PURE__ */ Z(hp, {
					kind: "form",
					chrome: Vt ? "plain" : "contained",
					fieldEdgeSpacing: Ut ? "balanced" : "default",
					animateEntrance: D,
					children: Bn
				})
			] }), Hn = /* @__PURE__ */ Q(sn, { children: [
				Ft && An ? $t(An) : An,
				Pn,
				Mn,
				Fn,
				Ft && In ? $t(In) : In
			] }), Un = It ? $t(Hn) : Hn, Wn = A.attrs("payment-form", { slug: e }), Gn = V(Wn.className, x ? "contents" : [
				Xt,
				D && "pc-enter-rise",
				"pt-0"
			]), Kn = x ? Vn : Un;
			return /* @__PURE__ */ Q(sn, { children: [
				Re && /* @__PURE__ */ Z(Ct, {
					sourceId: it,
					state: Be,
					resolveState: nt ? {
						map: rt,
						values: k
					} : void 0
				}),
				!nt && /* @__PURE__ */ Z(Mm, {
					attempt: N,
					values: i,
					readMaterial: fi
				}),
				/* @__PURE__ */ Z(Om, {
					enabled: Ot,
					amountValue: T,
					sharedAmount: L,
					setFieldValue: p,
					setCashierState: ke
				}),
				s && /* @__PURE__ */ Z(km, {
					onValuesChange: s,
					values: k,
					fields: Tt,
					hasHostedFields: G
				}),
				n && /* @__PURE__ */ Z(jm, {
					onPromptStateChange: n,
					isComplete: ye,
					errorMessage: yi
				}),
				t && /* @__PURE__ */ Z(Am, {
					onActionsChange: t,
					submitLabel: Te,
					resetLabel: Ee,
					submitDisabled: ge,
					submitVisible: Se,
					submitLoading: Ae,
					resetDisabled: De,
					resetVisible: P,
					submitForm: () => gi(f),
					onReset: ai
				}),
				ce && ce !== u && /* @__PURE__ */ Z(Vd, { message: ce }),
				Ve && /* @__PURE__ */ Z(Vc, {
					id: A.id("payment-form", { slug: e }),
					className: Gn,
					"data-pc-slot": Wn["data-pc-slot"],
					"data-pc-slug": Wn["data-pc-slug"],
					"data-pc-part": Wn["data-pc-part"],
					noValidate: !0,
					onSubmit: (e) => {
						e.preventDefault(), e.stopPropagation(), gi(f);
					},
					children: Kn
				}),
				Ce && Se && /* @__PURE__ */ Z("div", {
					className: D ? "pc-enter-rise-item" : void 0,
					style: D ? yl({
						index: lt,
						total: $e,
						direction: "reverse"
					}) : void 0,
					children: /* @__PURE__ */ Z(xe, {
						variant: "secondary",
						disabled: ge,
						loading: Ae,
						onClick: () => {
							gi(f);
						},
						label: Te
					})
				})
			] });
		}
	});
}
function Dm({ brand: e, logo: t }) {
	let [n, r] = X(null), [i, a] = X({
		key: "",
		values: []
	}), o = Bt(n, { tokenName: "--pc-color-secondary" }), s = [
		e ?? "",
		o,
		JSON.stringify(t ?? null)
	].join("|"), c = i.key === s ? i.values : [], l = Pt(t, o, !1).find((e) => !c.includes(e));
	return /* @__PURE__ */ Z("div", {
		ref: r,
		"data-slot": "cashier-card-brand-footer",
		className: "flex h-6 w-14 shrink-0 items-center justify-end overflow-hidden pr-0.5",
		children: l && /* @__PURE__ */ Z("img", {
			src: l,
			alt: "",
			"aria-hidden": "true",
			className: V("block h-5 w-12 shrink-0 object-contain object-right", "pc-card-brand-logo-enter"),
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
function Om({ enabled: e, amountValue: t, sharedAmount: n, setFieldValue: r, setCashierState: i }) {
	let a = Y(t), o = Y(n), s = Y(n);
	return q(() => {
		let c = t !== a.current, l = n !== o.current;
		a.current = t, o.current = n, e && (l && !c && t !== n ? (a.current = n, s.current = n, r(Vp, n, !0)) : !c && l ? s.current = n : t !== s.current && (s.current = t, i((e) => e.initialAmount === t ? e : {
			...e,
			initialAmount: t
		})));
	}, [
		t,
		e,
		i,
		r,
		n
	]), null;
}
function km({ onValuesChange: e, values: t, fields: n, hasHostedFields: r }) {
	return q(() => {
		e({
			values: Fp(t, n),
			hasHostedFields: r
		});
	}, [
		n,
		r,
		e,
		t
	]), null;
}
function Am({ onActionsChange: e, submitLabel: t, resetLabel: n, submitDisabled: r, submitVisible: i, submitLoading: a, resetDisabled: o, resetVisible: s, submitForm: c, onReset: l }) {
	let u = Y(c), d = Y(l);
	q(() => {
		u.current = c;
	}, [c]), q(() => {
		d.current = l;
	}, [l]);
	let f = K(() => u.current(), []), p = K(() => {
		d.current();
	}, []), m = J(() => ({
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
	return q(() => {
		e && e(m);
	}, [m, e]), q(() => () => {
		e?.(null);
	}, [e]), null;
}
function jm({ onPromptStateChange: e, isComplete: t, errorMessage: n }) {
	return q(() => (e({
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
function Mm({ attempt: e, values: t, readMaterial: n }) {
	return an(() => {
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
function Nm({ paymentType: e, selectionId: t, amountValue: n, valueOverrides: r, hideAmountField: i = !1, presentedAmountError: a, renderAfterAmountField: o, surfaceChrome: s = "contained", fieldPanelMode: c = "auto", onActionsChange: l, onPromptStateChange: u, onPreparedValues: d, onValuesChange: f, submitMode: p = "prepare", reserveTrailingActionSpace: m = !1, animateEntrance: h = !0, observePublicState: g = !0, onPaymentSubmitted: _ }) {
	let { translateKeys: v } = dt(), y = t ?? O(e), b = Lt(e), x = Ft(e, n), S = b && i, C = K((e) => {
		u(y, e);
	}, [u, y]), w = K((t) => {
		d(e, t);
	}, [d, e]), T = K((t) => {
		f(e, t);
	}, [f, e]), E = e.notifications ?? [], D = E.filter((e) => e.orientation === "top"), k = E.filter((e) => e.orientation !== "top");
	return /* @__PURE__ */ Q(sn, { children: [
		D.length > 0 && /* @__PURE__ */ Z("div", {
			className: "mb-2 flex flex-col gap-2",
			children: D.map((e, t) => /* @__PURE__ */ Z(rl, {
				notification: e,
				translateKeys: v
			}, `${e.key}-${e.type}-${String(t)}`))
		}),
		/* @__PURE__ */ Z(Em, {
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
		k.length > 0 && /* @__PURE__ */ Z("div", {
			className: "mt-3 mb-2 flex flex-col gap-2",
			children: k.map((e, t) => /* @__PURE__ */ Z(rl, {
				notification: e,
				translateKeys: v
			}, `${e.key}-${e.type}-${String(t)}`))
		})
	] });
}
//#endregion
//#region src/components/AccordionSummaryFooter.tsx
function Pm({ summaryFields: e, rowVariants: t, merchantElements: n }) {
	return e.length === 0 && !n ? null : /* @__PURE__ */ Z(El, {
		summaryFields: e,
		merchantElements: n,
		onlyMerchantElements: e.length === 0,
		rowVariants: t,
		variant: null,
		surfaceChrome: "plain",
		animateEntrance: !1
	});
}
//#endregion
//#region src/components/icons/PresentIcon.tsx
var Fm = {
	xxs: "h-2.5 w-2.5 shrink-0",
	xs: "h-3 w-3 shrink-0",
	sm: "h-3.5 w-3.5 shrink-0"
};
function Im({ size: e = "sm" }) {
	return /* @__PURE__ */ Z("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className: Fm[e],
		"aria-hidden": "true",
		children: /* @__PURE__ */ Z("path", {
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
var Lm = (e) => typeof e == "number" && Number.isFinite(e);
function Rm({ count: e, domSlug: t }) {
	let n = de();
	if (!Lm(e) || e <= 0) return null;
	let r = t ? n.id("bonus-count", { slug: t }) : void 0, i = t ? n.id("bonus-count-value", { slug: t }) : void 0;
	return /* @__PURE__ */ Q("span", {
		id: r,
		className: [n.className("bonus-count", t ? { slug: t } : void 0), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
		"data-testid": "cashier-bonus-count",
		children: [/* @__PURE__ */ Z(Im, { size: "xs" }), /* @__PURE__ */ Z("span", {
			id: i,
			className: n.className("bonus-count-value", t ? { slug: t } : void 0),
			"data-testid": "cashier-bonus-count-value",
			children: e
		})]
	});
}
//#endregion
//#region src/ui/PaymentTypesList.tsx
function zm({ paymentTypes: e, onSelect: t, listStyle: n, compact: r, stacked: i = !1, showMeta: a = !1, selectable: o = !1, selectedPaymentType: s, renderActions: c, isPaymentTypeDisabled: l, interactionLocked: u = !1, preserveDisabledSelection: d = !1, itemVariant: f = "neutral", itemAppearance: p = "solid", includeItemDataTheme: m = !0, domScope: h, animateItems: g = !1, bonusEvaluationContext: _, themeSlot: v }) {
	let y = de(), { getBonusCountForPaymentType: b } = U(), x = n, S = h ? y.token(h, "list") : null, C = S ? y.id("payment-types-list", { slug: S }) : void 0, w = y.attrs("payment-types-list", S ? { slug: S } : void 0), T = y.attrs("payment-types-list-content", S ? { slug: S } : void 0), E = J(() => ft(e, s), [e, s]), k = { staggerMode: "compressed-tail" }, A = J(() => e.map((e) => {
		let t = O(e), n = typeof _ == "function" ? _(e) : _, r = b(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Z(Rm, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		_,
		b,
		e
	]);
	return /* @__PURE__ */ Z(pd, {
		id: C,
		rootAttributes: w,
		className: "w-full",
		contentAttributes: T,
		contentClassName: g ? ol : void 0,
		contentStyle: g ? xl(k) : void 0,
		listStyle: x,
		compact: r,
		stacked: i,
		children: A.map(({ paymentTypeKey: e, paymentType: n, count: i, label: s }, h) => {
			let { name: _, nameKeys: y, logo: b, limits: S, fee: C } = n, w = e, T = ue(n), O = !!l?.(n), j = T || O, ee = u || O && !T, M = o && E === n && (!j || d), te = c?.(n), N = Ce(n);
			return /* @__PURE__ */ Z(fd, {
				selectionId: e,
				domSlug: w,
				name: _,
				presentationPaymentType: n,
				nameKeys: y,
				logo: b,
				limits: S,
				fee: C,
				listStyle: x,
				compact: r,
				showMeta: a,
				title: N ?? void 0,
				description: T ? D : void 0,
				bonusLabel: s,
				hasAvailableBonuses: i > 0,
				onSelect: t,
				interactive: !T,
				isSelected: M,
				isDisabled: ee,
				isUnavailable: T,
				hoverMode: o ? "none" : void 0,
				includeDataTheme: m,
				actions: te,
				variant: f,
				appearance: p,
				themeSlot: v,
				animationClassName: g ? sl : void 0,
				animationStyle: g ? bl(h, A.length, "forward", k) : void 0
			}, e);
		})
	});
}
//#endregion
//#region src/hooks/useCashierActionConfirmation.tsx
var Bm = ({ isConfirmDisabled: e = !1 } = {}) => {
	let { translateKey: t } = dt(), n = hu();
	return ce({
		presentation: "drawer",
		renderActions: ({ confirmLabel: t, confirmVariant: n, isSubmitting: r, onConfirm: i }) => /* @__PURE__ */ Z(xe, {
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
			renderFooter: (e) => /* @__PURE__ */ Z(Il, {
				placement: "bottom",
				items: [e]
			})
		}
	});
}, Vm = () => {
	let e = fe(), t = ct(), n = Y(t);
	q(() => {
		n.current = t;
	}, [t]);
	let r = N(), { translateKey: i } = dt(), { uiAccountDelete: a, merchantId: o, userId: s, sessionId: c, method: l, currency: u, fetchConfig: d, extraAttributes: f, onAccountDeleted: p } = tn(se), { selectedPaymentType: m, clearPaymentSelection: h } = vt(), { openActionConfirmation: g, actionConfirmationModal: _ } = Bm({ isConfirmDisabled: t });
	return {
		requestAccountDelete: K((_) => {
			if (!a || t) return;
			let v = _.accountId;
			if (!v) return;
			let y = i(_.name), b = i("account.delete.title"), x = i("account.delete.description"), S = i("cta.delete"), C = i("account.delete.error");
			g({
				title: b,
				description: me(x, "name", y),
				confirmLabel: S,
				confirmVariant: "danger",
				errorMessage: C,
				onConfirm: async () => {
					if (!n.current) {
						if (!o || !s || !c) throw Error("Missing required account context.");
						await ut({
							client: e,
							query: {
								merchantId: o,
								userId: s,
								sessionId: c,
								accountId: v
							},
							parseAs: "text"
						}), (m === O(_) || m === _.name || m === v) && h(), p && p(_), await r.invalidateQueries({ queryKey: Ye({
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
function Hm({ primaryContainer: e, overlayContainer: t, useOverlay: n = !1, bottomGap: r = 16, enabled: i = !0 }) {
	let { contentNode: a, setContentInset: o } = Yl();
	q(() => {
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
var Um = ({ isOpen: e, canShow: t, onClose: n, useOverlayInset: r = !1, enableBackHotkey: i = !0, contentBottomGap: a = 16, reserveContentInset: o = !0 }) => {
	let { contentNode: s } = Yl(), c = s?.parentElement ?? s ?? null, [l, u] = X(null), [d, f] = X(null);
	return Hm({
		primaryContainer: l,
		overlayContainer: d,
		useOverlay: r,
		bottomGap: a,
		enabled: o
	}), Bu({ onBack: e && i ? n : void 0 }), {
		floatingPortalTarget: c,
		showOverlay: !!(e && t && c),
		setFloatingContainer: u,
		setOverlayContainer: f
	};
}, Wm = "max-h-[min(31rem,100%)]", Gm = "pc-enter-tray-item", Km = 12, qm = {
	...ke,
	height: "36px"
};
function Jm({ domScope: e, title: t, triggerLabel: n, canOpen: r, shouldRender: i, triggerContent: a, children: o, animationStyle: s, animateTrigger: c = !0, floating: l = !1, actionContent: u, delegateTriggerInteraction: d = !1 }) {
	let f = de(), { items: p, setBottomRailFadeSuppressed: m } = Yl(), [h, g] = X({
		canOpen: r,
		isOpen: !1
	});
	h.canOpen !== r && g({
		canOpen: r,
		isOpen: !1
	});
	let { isOpen: _ } = h, [v, y] = X(null), b = K(() => {
		g((e) => ({
			...e,
			isOpen: !1
		}));
	}, []), x = K(() => {
		r && g((e) => ({
			canOpen: r,
			isOpen: e.canOpen !== r || !e.isOpen
		}));
	}, [r]), S = _ && r, C = l === "adaptive", w = l === !0, T = C && p.bottom.length > 0, E = td({
		enabled: C && i,
		target: v
	}), D = w || C && E && !T, { floatingPortalTarget: O, showOverlay: k, setFloatingContainer: A, setOverlayContainer: j } = Um({
		isOpen: S,
		canShow: r && D,
		onClose: b,
		contentBottomGap: Km,
		reserveContentInset: D
	}), ee = D ? S && (k || !O) : S, M = D ? O?.parentElement ?? O ?? void 0 : void 0, te = !!(D && O), N = f.id(`${e}-list`);
	if (q(() => {
		if (te) return m(!0), () => {
			m(!1);
		};
	}, [m, te]), !i) return null;
	let P = {
		close: b,
		isOpen: S,
		panelId: N,
		toggle: x
	}, F = (() => {
		if (!d) return r ? 0 : -1;
	})(), I = (t) => {
		let i = C ? f.id(`${e}-trigger-${t}`) : f.id(`${e}-trigger`), o = f.className(C ? `${e}-trigger-${t}` : `${e}-trigger`);
		return /* @__PURE__ */ Z("div", {
			id: i,
			role: d ? void 0 : "button",
			"data-theme": "neutral",
			style: c ? s : void 0,
			className: V(o, c && Gm, "w-full text-left", e === "payment-type-picker" ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]", "transition-colors duration-200", "focus-visible:[outline-style:solid]", "focus-visible:outline-2", "focus-visible:outline-[var(--pc-color-accent)]", "focus-visible:outline-offset-2", !d && "group", r && !d && "cursor-pointer"),
			"aria-label": d ? void 0 : n,
			onClick: d ? void 0 : x,
			onKeyDown: d ? void 0 : (e) => {
				r && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), x());
			},
			"aria-expanded": d ? void 0 : S,
			"aria-controls": d ? void 0 : N,
			"aria-disabled": d ? void 0 : !r,
			tabIndex: F,
			children: a(P)
		});
	}, ne = /* @__PURE__ */ Z(vu, {
		isOpen: ee,
		onClose: b,
		portalContainer: M,
		overlayClassName: "flex flex-col justify-end",
		contentClassName: V("w-full min-h-0 rounded-t-[var(--pc-radius-2xl)]", Wm),
		title: t,
		contentRef: j,
		children: o(P)
	}), L = I("inline"), R = /* @__PURE__ */ Z("div", {
		ref: C ? y : void 0,
		className: V("mt-0", D && "invisible pointer-events-none"),
		"aria-hidden": D ? "true" : void 0,
		inert: D ? !0 : void 0,
		children: L
	}), re = I("floating"), ie = D && O ? cn(/* @__PURE__ */ Z("div", {
		"data-selection-picker-floating": e,
		"data-payment-type-picker-floating": e === "payment-type-picker" ? "true" : void 0,
		className: V("pointer-events-none absolute inset-0 z-10", "flex items-end justify-center"),
		"aria-hidden": k,
		children: /* @__PURE__ */ Q("div", {
			ref: A,
			"data-slot": `${e}-floating-surface`,
			"data-pc-scroll-obstruction": "bottom",
			className: "pointer-events-none relative w-full bg-[var(--pc-color-surface)] pb-4",
			children: [/* @__PURE__ */ Z("div", {
				"aria-hidden": "true",
				"data-slot": `${e}-floating-fade`,
				"data-pc-scroll-obstruction": "bottom",
				style: qm,
				className: "pointer-events-none absolute inset-x-0 bottom-full"
			}), /* @__PURE__ */ Z("div", {
				"data-slot": `${e}-floating-content`,
				className: V("pointer-events-auto", we),
				children: re
			})]
		})
	}), O) : null;
	return /* @__PURE__ */ Q(sn, { children: [
		w ? ie ?? R : R,
		C && ie,
		ne,
		u
	] });
}
//#endregion
//#region src/components/SelectionPickerTriggerListItem.tsx
function Ym({ children: e }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex items-center gap-1.5",
		children: e
	});
}
function Xm({ actionStopsPropagation: e, actions: t, actionsAlignment: r, animationClassName: i, animationStyle: a, ariaControls: o, ariaExpanded: s, ariaLabel: c, badges: l, bonusLabel: u, compact: d = !0, description: f, descriptionPresentation: p, domSlug: m, fee: h, embedded: g = !1, hasAvailableBonuses: _, hoverMode: v, includeDataTheme: y, infoDrawer: b, interactive: x, interactiveSurface: S, isDisabled: C, isUnavailable: w, isSelected: T, limits: E, logo: D, logoCompact: O, logoContent: k, logoContentPresentation: A, logoSurface: j, meta: ee, metaPlacement: M, name: te, nameKeys: N, onSelect: P, presentationPaymentType: F, section: I, selectionId: ne, showMeta: L, showSelectedIndicator: R, spacing: re = "default", themeSlot: ie, title: z }) {
	return /* @__PURE__ */ Z(fd, {
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
		logoSurface: j,
		meta: ee,
		metaPlacement: M,
		name: te,
		nameKeys: N,
		onSelect: P,
		presentationPaymentType: F,
		section: I,
		selectionId: ne,
		showMeta: L,
		showSelectedIndicator: R,
		themeSlot: ie,
		title: z,
		variant: "default",
		appearance: "solid",
		shape: "default",
		balanceLogo: !1,
		density: "compact",
		embedded: g,
		className: V(!g && "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", re === "payment-list" && "mb-3 @md:mb-4")
	});
}
//#endregion
//#region src/components/BonusPicker.tsx
var Zm = [], Qm = (e) => typeof e != "number" || !Number.isFinite(e) ? 0 : Math.max(0, Math.min(99, Math.round(e) - 1)), $m = (e) => {
	let t = (e.conditions?.include ?? []).map((e) => e.minAmount).filter((e) => typeof e == "number" && Number.isFinite(e));
	return t.length === 0 ? 0 : Math.max(0, Math.min(...t));
};
function eh({ paymentType: e, paymentTypes: t = Zm, amount: i, placement: a = "payment-form", onTopUpAccepted: o }) {
	let s = ct(), c = de(), { translateKey: l } = dt(), { formatCurrencyValue: u } = It(), { uiBonuses: d, offers: f, checkoutState: p, uiBonusesStyle: m, initialAmount: h, method: g, locale: _, selectedBonusCode: v, onBonusSelected: y, onBonusDeselected: b, onBonusToppedUp: x, lockAmount: S, setCashierState: C } = tn(se), { getBonusAvailabilityForPaymentType: w, getBonusAvailabilityForPaymentTypes: T } = U(), { selectedBonusCode: E, selectBonusCode: D, ensureDefaultSelection: k } = id(), [A, j] = X(!1), [ee, M] = X(null), [te, N] = X(null), P = J(() => Ut(i ?? h), [i, h]), F = J(() => a === "payment-list" ? T(t, e, { amount: P }) : w(e, { amount: P }), [
		P,
		w,
		T,
		e,
		t,
		a
	]), I = J(() => Mt(F), [F]), ne = J(() => I.filter((e) => e.status === "available").map((e) => e.bonus), [I]), L = J(() => I.filter(qe).map((e) => e.bonus), [I]), R = ne.length, re = R > 0, ie = J(() => E ? I.find((e) => qe(e) && e.bonus.code === E) ?? null : null, [E, I]), z = ie?.bonus ?? null, B = f !== void 0 && p?.phase === "pending", oe = B ? L.find((e) => e.code === p.requestedOfferId) : void 0, ce = B ? oe : z, ue = ie?.status === "available", fe = ie?.status === "close", pe = J(() => z && ue ? Ot(z, P) : null, [
		P,
		ue,
		z
	]), me = pe?.fullClaimAmount ?? null, he = me === null ? null : Ed(me), ge = e ? O(e) : null, _e = z && me !== null ? [
		ge ?? "",
		z.code,
		String(me)
	].join(":") : null, ve = !!(!S && z && pe && P !== null && me !== null && me > P && !kd({
		amount: P,
		fullClaimAmount: pe.fullClaimAmount,
		claimPercentage: pe.claimPercentage
	}) && !ae(he ?? "", e?.limits).isOutOfRange), ye = ve && ee !== _e, be = l(g === r.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(_);
	an(() => {
		e && (v && z || (v && !z ? k(L) : A || k(L)));
	}, [
		v,
		k,
		A,
		e,
		L,
		z
	]);
	let Se = K((e, t) => {
		if (s) return;
		let n = ne.find((t) => t.code === e);
		n && (E === e || (M(null), N(null), j(!0), D(e), y?.(n)), t());
	}, [
		ne,
		s,
		y,
		D,
		E
	]), Ce = K((e) => {
		s || (z && b?.(z), M(null), N(null), j(!0), D(null), e?.());
	}, [
		s,
		b,
		D,
		z
	]), we = K((e) => {
		if (e.stopPropagation(), s || S || !he || !z || me === null || P === null || !_e) return;
		j(!0), M(null), N(_e), C((e) => {
			let t = ge ? {
				paymentTypeName: ge,
				method: g,
				amount: e.initialAmount
			} : null;
			return {
				...e,
				initialAmount: he,
				paymentFormDraft: t ? Pd(e.paymentFormDraft, t, he) : e.paymentFormDraft,
				comboViewFormDraft: t ? Pd(e.comboViewFormDraft, t, he) : e.comboViewFormDraft
			};
		});
		let t = {
			bonus: z,
			previousAmount: P,
			nextAmount: me,
			addedAmount: me - P,
			fullClaimAmount: me
		};
		x?.(t), o?.(t);
	}, [
		P,
		s,
		S,
		g,
		x,
		o,
		z,
		ge,
		C,
		_e,
		me,
		he
	]), Te = K((e) => {
		e.stopPropagation(), !s && _e && (j(!0), M(_e), N(null));
	}, [s, _e]), Ee = a === "payment-list" ? Ve(m) : et(m), De = a === "payment-list";
	if (!d || !Ee || !De && !e || !De && I.length === 0) return null;
	let Oe = l("cta.choose_bonus"), ke = I.length > 0 && !s, Ae = pe?.claimPercentage, H = typeof Ae == "number" && Number.isFinite(Ae) ? Ae : null, je = H !== null, Me = !!(z && pe && kd({
		amount: P,
		fullClaimAmount: pe.fullClaimAmount,
		claimPercentage: H
	})), Ne = P === null ? null : u(P), Pe = z && pe ? {
		min: u($m(z)),
		max: u(pe.fullClaimAmount)
	} : void 0, Fe = !!(z && Ne && !pe), Ie = Me && te === _e, Le = Me || Fe ? "text-[var(--pc-color-success-text)]" : "text-[var(--pc-color-text-muted)]", Re = z && je && (!Me || Ie) && H !== null ? /* @__PURE__ */ Z("div", {
		"data-slot": "bonus-picker-progress",
		className: V("flex w-full min-w-0 flex-col", Le),
		children: /* @__PURE__ */ Z(Gt, {
			size: "xs",
			variant: Ie ? "success" : "secondary",
			stepCount: 100,
			currentStepIndex: Qm(H),
			showInitialFill: !0,
			showPercentageLabel: !0,
			trackTone: "depth",
			rangeLabelsColour: "inherit",
			rangeLabels: Pe,
			ariaLabel: [
				"Bonus claim progress",
				String(Math.round(H)),
				"percent"
			].join(" ")
		})
	}) : null, ze = !z || f !== void 0 || fe ? null : ve && pe && P !== null ? Eu(l("bonus.top_up.desc"), {
		amount: u(pe.fullClaimAmount - P),
		targetAmount: u(pe.fullClaimAmount)
	}) : Ne ? Eu(l("bonus.selected.desc"), {
		amount: Ne,
		method: be
	}) : null, Be = fe ? /* @__PURE__ */ Z(hd, {
		reasons: ie.reasons,
		tone: "hint"
	}) : null, He = ye ? /* @__PURE__ */ Q(ud, {
		placement: "section",
		dataSlot: "bonus-picker-top-up-actions",
		domClassName: "bonus-picker-top-up-actions",
		children: [/* @__PURE__ */ Z(xe, {
			"data-slot": "bonus-picker-top-up-reject",
			variant: "neutral",
			appearance: "ghost",
			size: "sm",
			label: l("cta.deny_topup"),
			"aria-label": l("cta.deny_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Z(mt, {}),
			onClick: Te
		}), /* @__PURE__ */ Z(xe, {
			"data-slot": "bonus-picker-top-up-accept",
			variant: "secondary",
			appearance: "solid",
			size: "sm",
			label: l("cta.confirm_topup"),
			"aria-label": l("cta.confirm_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Z(Ze, {}),
			onClick: we
		})]
	}) : null, Ue = c.attrs("bonus-picker-top-up-section"), We = c.attrs("bonus-picker-top-up-content"), Ge = c.attrs("bonus-picker-top-up-progress"), Ke = Be || ze || Re ? /* @__PURE__ */ Q("div", {
		"data-slot": "bonus-picker-top-up-section",
		"data-pc-slot": Ue["data-pc-slot"],
		className: V(Ue.className, "flex w-full min-w-0 items-center gap-2 @lg:gap-2.5"),
		children: [(Be || ze || Re) && /* @__PURE__ */ Q("div", {
			"data-slot": "bonus-picker-top-up-content",
			"data-pc-slot": We["data-pc-slot"],
			className: V(We.className, "flex min-w-0 flex-1 flex-col gap-1.5"),
			children: [
				Be,
				!Be && ze && /* @__PURE__ */ Z("p", {
					className: V("min-w-0 text-sm @md:leading-tight", Le),
					children: /* @__PURE__ */ Z(le, { children: ze })
				}),
				Re && /* @__PURE__ */ Z("div", {
					"data-slot": "bonus-picker-top-up-progress",
					"data-pc-slot": Ge["data-pc-slot"],
					className: V(Ge.className, "min-w-0 w-full"),
					children: Re
				})
			]
		}), He]
	}) : null, Je = z?.termsAndConditions ? {
		titleKey: "bonus.terms.title",
		content: /* @__PURE__ */ Z("div", {
			className: "flex flex-col gap-3",
			children: /* @__PURE__ */ Z(md, { termsKey: z.termsAndConditions })
		})
	} : void 0, Ye = (e) => /* @__PURE__ */ Z(Ym, { children: ke && /* @__PURE__ */ Z(xe, {
		variant: "neutral",
		appearance: "ghost",
		size: "sm",
		iconOnly: !0,
		showTooltip: !1,
		"aria-label": Oe,
		onClick: e,
		leadingIcon: /* @__PURE__ */ Z($e, {}),
		label: Oe
	}) }), Xe = re ? /* @__PURE__ */ Z(xe, {
		variant: "secondary",
		appearance: "solid",
		size: "sm",
		disabled: s,
		leadingIcon: /* @__PURE__ */ Z(bt, {}),
		label: String(R)
	}) : /* @__PURE__ */ Z(bt, { className: "h-full w-full" });
	return /* @__PURE__ */ Z(Jm, {
		domScope: "bonus-picker",
		title: /* @__PURE__ */ Z(le, { children: Oe }),
		triggerLabel: Oe,
		canOpen: ke,
		shouldRender: !0,
		animateTrigger: !1,
		triggerContent: ({ isOpen: e, panelId: t, toggle: n }) => /* @__PURE__ */ Z("div", {
			className: "w-full",
			"aria-busy": B || void 0,
			"data-pc-checkout-state": B ? "pending" : void 0,
			children: /* @__PURE__ */ Z(Xm, {
				domSlug: ce?.code ?? "choose-bonus",
				name: ce?.code ?? "cta.choose_bonus",
				title: ce ? ce.title : "",
				description: ce ? ce.description : "bonus.no_bonus_selected",
				descriptionPresentation: ce ? void 0 : "lone-body",
				logo: ce?.logo,
				logoSurface: "bonusLogo",
				logoCompact: !0,
				logoContentPresentation: ce || !re ? void 0 : "inline-control",
				logoContent: ce ? void 0 : Xe,
				showMeta: !0,
				interactive: ke,
				isDisabled: s,
				isUnavailable: fe,
				interactiveSurface: "content",
				hoverMode: ke ? "self" : "none",
				themeSlot: "bonus-picker",
				onSelect: n,
				ariaLabel: Oe,
				ariaExpanded: e,
				ariaControls: t,
				spacing: a === "payment-list" ? "payment-list" : "default",
				section: !B && Ke ? {
					border: !0,
					width: "full",
					content: Ke
				} : void 0,
				actions: Ye(n),
				actionStopsPropagation: !0,
				infoDrawer: B ? void 0 : Je
			})
		}),
		delegateTriggerInteraction: !0,
		children: ({ close: e, panelId: t }) => {
			let r = c.attrs("bonus-picker-list");
			return /* @__PURE__ */ Z("div", {
				id: t,
				...r,
				className: V(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ Z(yd, {
					bonuses: I,
					selectedBonusCode: E,
					onSelect: (t) => {
						Se(t, e);
					},
					onSkip: () => {
						Ce(e);
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
var th = "[data-pc-scroll-obstruction=\"top\"]", nh = "[data-pc-scroll-obstruction=\"bottom\"]", rh = ["[data-pc-scroll-obstruction-extent=\"true\"]", "[data-slot=\"interactive-prompt-tail\"]"].join(","), ih = 4, ah = 8, oh = 64, sh = 150, ch = 96, lh = 128, uh = 180, dh = 320, fh = 2, ph = 3, mh = 1, hh = 520, gh = .5, _h = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakSet(), yh = (e) => typeof window < "u" && e === window, bh = (e) => {
	if (yh(e)) return {
		top: 0,
		bottom: window.innerHeight
	};
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom
	};
}, xh = (e) => yh(e) ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : e.scrollTop, Sh = (e) => {
	if (yh(e)) {
		let e = document.documentElement, t = document.body;
		return Math.max(0, Math.max(e.scrollHeight, t.scrollHeight) - window.innerHeight);
	}
	return Math.max(0, e.scrollHeight - e.clientHeight);
}, Ch = (e) => yh(e) ? document.documentElement : e, wh = (e) => {
	let t = Ch(e), n = _h.get(t);
	n?.cleanupManualScrollListeners?.(), n?.element && vh.delete(n.element), _h.delete(t);
}, Th = (e) => {
	let t = Ch(e), n = _h.get(t);
	n && (n.frameId !== void 0 && window.cancelAnimationFrame(n.frameId), n.timeoutId !== void 0 && window.clearTimeout(n.timeoutId), wh(e));
}, Eh = () => typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Dh = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0";
}, Oh = (e) => {
	let t = e.getBoundingClientRect(), n = t.top, r = t.right, i = t.bottom, a = t.left, o = Array.from(e.querySelectorAll(rh));
	for (let e of o) {
		if (!Dh(e)) continue;
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
}, kh = (e) => {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom,
		height: t.height,
		scrollHeight: e.scrollHeight
	};
}, Ah = (e, t) => {
	if (!e) return !1;
	let n = Math.abs(e.top - t.top) <= mh, r = Math.abs(e.bottom - t.bottom) <= mh, i = Math.abs(e.height - t.height) <= mh, a = Math.abs(e.scrollHeight - t.scrollHeight) <= mh;
	return n && r && i && a;
}, jh = (e, t, n, r) => Dh(e) ? t.height > 0 && t.width > 0 && t.bottom > n && t.top < r : !1, Mh = (e) => {
	let t = bh(e), n = t.top, r = Array.from(document.querySelectorAll(th)).map((e) => ({
		element: e,
		rect: Oh(e)
	})).filter(({ element: e, rect: n }) => jh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.max(n, e.bottom);
	return n + ih;
}, Nh = (e) => {
	let t = bh(e), n = t.bottom, r = Array.from(document.querySelectorAll(nh)).map((e) => ({
		element: e,
		rect: Oh(e)
	})).filter(({ element: e, rect: n }) => jh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.min(n, e.top);
	return n - ih;
}, Ph = (e, t = "start", n = {}) => {
	let r = Zc(e) ?? window, i = Mh(r), a = Nh(r), o = e.getBoundingClientRect(), s = xh(r), c = Math.max(o.height, e.scrollHeight), l = o.top + c, u = s + o.top - i, d = s + l - a, f = (e.previousElementSibling instanceof HTMLElement ? e.previousElementSibling : null)?.getBoundingClientRect(), p = n.revealPreviousCollapsedHeader ?? !0, m = (() => {
		if (t === "start") return u;
		if (t === "nearest-fit") {
			let e = a - i;
			return c > e ? Math.abs(o.top - i) <= ah ? null : Math.abs(o.top - i) > ah ? u : null : o.top < i ? u : l > a ? d : null;
		}
		if (t === "accordion-fit") {
			let t = a - i;
			return p && !vh.has(e) && f && f.height > 0 && f.height <= lh && f.top < i && o.top >= i ? s + f.top - i : c > t ? o.top >= i && o.top <= i + ch ? null : u : o.top < i ? u : l > a ? d : (o.top >= i && (o.top, i + ch), null);
		}
		return Math.abs(o.top - i) > ah || l > a ? u : null;
	})();
	return m === null ? null : {
		container: r,
		top: Math.max(0, Math.round(m))
	};
}, Fh = (e, t, n = "auto") => {
	let r = xh(e);
	Math.abs(t - r) <= gh || (yh(e) ? window.scrollTo({
		top: t,
		left: window.scrollX,
		behavior: n
	}) : typeof e.scrollTo == "function" ? e.scrollTo({
		top: t,
		left: e.scrollLeft,
		behavior: n
	}) : e.scrollTop = t);
}, Ih = (e, t) => yh(e) ? Math.max(0, t) : Math.min(Math.max(0, t), Sh(e)), Lh = (e, t) => {
	if (xh(t) <= gh) return null;
	let n = e.getBoundingClientRect(), r = Mh(t), i = Nh(t);
	return n.top < r || n.bottom > i ? null : { top: n.top };
}, Rh = (e, t, n) => {
	if (!n) return;
	let r = t.getBoundingClientRect(), i = xh(e) + r.top - n.top;
	Fh(e, Ih(e, Math.round(i)), "auto");
}, zh = (e, t, n) => {
	if (typeof window.requestAnimationFrame != "function") {
		t(Date.now());
		return;
	}
	let r = Ch(e), i = _h.get(r), a = {
		frameId: window.requestAnimationFrame(t),
		element: n,
		cleanupManualScrollListeners: i?.cleanupManualScrollListeners
	};
	_h.set(r, a);
}, Bh = (e, t, n, r = !0) => {
	let i = yh(e) ? window : e, a = yh(e) ? document : e.ownerDocument, o = !0, s = () => {
		o && t();
	}, c = () => {
		o && n() && t();
	}, l = { passive: !0 };
	return i.addEventListener("wheel", s, l), i.addEventListener("touchmove", s, l), r && i.addEventListener("scroll", c, l), a.addEventListener("keydown", s), () => {
		o = !1, i.removeEventListener("wheel", s), i.removeEventListener("touchmove", s), r && i.removeEventListener("scroll", c), a.removeEventListener("keydown", s);
	};
}, Vh = (e) => {
	if (typeof window > "u") return;
	let t = Zc(e) ?? window, n = null, r = 0, i = 0, a = null, o = Lh(e, t), s = !1;
	Th(t);
	let c = Bh(t, () => {
		Th(t);
	}, () => !0, !1);
	if (typeof window.requestAnimationFrame != "function") {
		c();
		let t = Ph(e, "nearest-fit");
		t && Fh(t.container, t.top, Eh() ? "auto" : "smooth");
		return;
	}
	let l = (u) => {
		if (!e.isConnected) {
			wh(t);
			return;
		}
		if (n ??= u, !(u - n >= sh)) {
			Rh(t, e, o), zh(t, l, e);
			return;
		}
		r += 1;
		let d = kh(e);
		i = Ah(a, d) ? i + 1 : 1, a = d;
		let f = r >= fh && i >= ph;
		if (!o && !s && u - n >= uh && xh(t) > gh) {
			let n = e.getBoundingClientRect().top > Mh(t) + 192 ? Ph(e, "nearest-fit") : null;
			n && (s = !0, Fh(n.container, Ih(n.container, n.top), Eh() ? "auto" : "smooth"));
		}
		if (Eh()) {
			if (f) {
				let r = Ph(e, "accordion-fit");
				if (r) {
					wh(t), Fh(r.container, Ih(r.container, r.top), "auto");
					return;
				}
				if (u - n >= dh) {
					wh(t);
					return;
				}
			}
			zh(t, l, e);
		} else {
			if (f) {
				let r = Ph(e, "accordion-fit");
				if (r) {
					let n = Ih(r.container, r.top);
					c(), Fh(r.container, n, "smooth");
					let i = Bh(t, () => {
						Th(t);
					}, () => !1, !1), a = window.setTimeout(() => {
						if (!e.isConnected) {
							wh(t);
							return;
						}
						let n = Ph(e, "accordion-fit");
						n && Fh(n.container, Ih(n.container, n.top), "auto"), wh(t);
					}, hh);
					_h.set(Ch(t), {
						element: e,
						timeoutId: a,
						cleanupManualScrollListeners: i
					});
					return;
				}
				if (u - n >= dh) {
					wh(t);
					return;
				}
			}
			zh(t, l, e);
		}
	};
	vh.add(e), _h.set(Ch(t), {
		element: e,
		cleanupManualScrollListeners: c
	}), zh(t, l, e);
};
function Hh(e) {
	typeof window < "u" && Vh(e);
}
function Uh(e) {
	if (typeof window > "u" || !e.isConnected || vh.has(e)) return !1;
	let t = Ph(e, "nearest-fit");
	return t ? Math.abs(t.top - xh(t.container)) > oh : !1;
}
//#endregion
//#region src/ui/PaymentTypesAccordion.tsx
function Wh({ paymentTypes: e, selectedPaymentType: t, onSelect: r, renderPanel: i, renderFooter: a, hasPanel: o, hasPanelBody: s, collapsible: c = !1, showMeta: l = !1, compact: u = !1, renderActions: d, isPaymentTypeDisabled: f, interactionLocked: p = !1, preserveDisabledSelection: m = !1, itemVariant: h = "neutral", itemAppearance: g = "solid", includeItemDataTheme: _ = !0, hoverMode: v = "group", domScope: y, animateItems: b = !1, bonusEvaluationContext: x }) {
	let S = de(), { getBonusCountForPaymentType: C } = U(), w = y ? S.token(y, "accordion") : null, T = w ? S.id("payment-types-accordion", { slug: w }) : void 0, k = S.attrs("payment-types-accordion", w ? { slug: w } : void 0), A = S.attrs("payment-types-accordion-content", w ? { slug: w } : void 0), j = J(() => ft(e, t ?? null), [e, t]), ee = { staggerMode: "compressed-tail" }, M = J(() => e.map((e) => {
		let t = O(e), n = typeof x == "function" ? x(e) : x, r = C(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Z(Rm, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		x,
		C,
		e
	]);
	return /* @__PURE__ */ Z("div", {
		id: T,
		...k,
		className: V(k.className, "w-full"),
		children: /* @__PURE__ */ Z("div", {
			...A,
			className: V("grid grid-cols-1 gap-1.5", A.className, b && "pc-enter-sweep"),
			style: b ? xl(ee) : void 0,
			children: M.map(({ paymentTypeKey: e, paymentType: t, count: y, label: x }, C) => {
				let { name: w, nameKeys: T, logo: O, limits: k, fee: A } = t, te = e, N = S.token(te, "accordion-item"), P = S.id("payment-types-accordion-header", { slug: N }), F = S.id("payment-types-accordion-panel", { slug: N }), I = ue(t), ne = !!f?.(t), L = I || ne, R = p || ne && !I, re = L || p, ie = j === t && (!L || m), z = o?.(t) ?? !0, ae = ie && !L && z, B;
				I || (B = R ? -1 : 0);
				let oe = Ce(t), se = d?.(t), ce = ae ? a?.(t) : null, le = s?.(t) ?? !0, de = _ ? E(h) : void 0, fe = S.attrs("payment-types-accordion-item", { slug: N }), pe = b ? bl(C, M.length, "forward", ee) : void 0, me = (e) => e.closest("[data-pc-slot=\"payment-types-accordion-item\"]"), he = (e) => {
					let t = me(e);
					t && Hh(t);
				}, ge = (t) => {
					if (re) return;
					r?.(e);
					let n = me(t), i = !!(ae && n && Uh(n));
					(!ae || i) && he(t);
				}, _e = (e) => {
					re || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ge(e.currentTarget));
				}, ve = (e) => {
					ge(e.currentTarget);
				}, ye = c && z && !re ? /* @__PURE__ */ Z(xe, {
					variant: "neutral",
					appearance: "ghost",
					size: "sm",
					iconOnly: !0,
					showTooltip: !1,
					label: `${ae ? "Collapse" : "Expand"} ${oe ?? w}`,
					"aria-controls": F,
					"data-slot": "payment-types-accordion-toggle",
					className: V("[--pc-color-button-text:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]"),
					leadingIcon: /* @__PURE__ */ Z(gt, { className: it({ isOpen: ae }) }),
					onClick: (e) => {
						e.stopPropagation(), ge(e.currentTarget);
					}
				}) : null, be = ye ? /* @__PURE__ */ Q(sn, { children: [se, ye] }) : se;
				return /* @__PURE__ */ Q(Rt, {
					as: "div",
					"data-pc-slot": fe["data-pc-slot"],
					"data-pc-slug": fe["data-pc-slug"],
					dataTheme: de,
					inheritTheme: de === void 0,
					"data-selected": ie ? "true" : void 0,
					chrome: !1,
					spacing: "flush",
					style: pe,
					className: V(fe.className, "rounded-[var(--pc-radius-accordion-item,var(--pc-radius-panel,var(--pc-radius-xl)))]", ae || ie ? "overflow-visible" : "overflow-hidden", "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "[background:var(--pc-color-accordion-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", ie && [
						"[outline-style:solid]",
						"outline-3 outline-[var(--pc-color-accordion-item-border-selected,var(--pc-color-secondary))]",
						"outline-offset-[2.5px]"
					], b && "pc-enter-sweep-item"),
					children: [/* @__PURE__ */ Z("div", {
						id: P,
						role: I ? void 0 : "button",
						tabIndex: B,
						"aria-disabled": I ? void 0 : R || void 0,
						"aria-expanded": z && !I ? ae : void 0,
						"aria-controls": z && !I ? F : void 0,
						onClick: I ? void 0 : ve,
						onKeyDown: I ? void 0 : _e,
						className: V(v === "group" && "group", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-accent)]", "focus-visible:ring-offset-2", "focus-visible:ring-offset-transparent", !re && "cursor-pointer"),
						children: /* @__PURE__ */ Z(fd, {
							selectionId: e,
							domSlug: te,
							name: w,
							presentationPaymentType: t,
							nameKeys: T,
							logo: O,
							limits: k,
							fee: A,
							listStyle: n.LIST,
							compact: u,
							showMeta: l,
							title: oe ?? void 0,
							description: I ? D : void 0,
							bonusLabel: x,
							hasAvailableBonuses: y > 0,
							isSelected: ie,
							showSelectedIndicator: !1,
							isDisabled: R,
							isUnavailable: I,
							interactive: !1,
							hoverMode: v,
							themeSlot: "payment-types-accordion-header",
							includeDataTheme: !1,
							actions: be,
							variant: h,
							appearance: g
						})
					}), z && !I && /* @__PURE__ */ Z("div", {
						id: F,
						role: "region",
						"aria-labelledby": P,
						"aria-hidden": !ae,
						className: V("grid", ae ? "overflow-visible" : "overflow-hidden", ae ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"),
						children: /* @__PURE__ */ Z("div", {
							className: "min-h-0 min-w-0",
							children: ae ? /* @__PURE__ */ Q(sn, { children: [/* @__PURE__ */ Z("div", {
								"data-slot": "payment-types-accordion-body",
								hidden: !le,
								className: "min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))] px-1.5 py-2 @md:px-2 @md:py-2",
								children: i(t)
							}), ce ? /* @__PURE__ */ Z("div", {
								"data-slot": "payment-types-accordion-footer",
								className: V("empty:hidden min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))]", "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]", "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]", "px-3 py-2.5 @md:px-3.5"),
								children: ce
							}) : null] }) : null
						})
					})]
				}, e);
			})
		})
	});
}
//#endregion
//#region src/utils/withdrawalSummary.ts
var Gh = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, Kh = (e, t, n, i = {}) => {
	if (e !== r.PAYOUT || !n) return [];
	let a = Gh(n.balance), o = Te(e, n), s = P(e, n, i.fee);
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
		let e = Ut(i.amount ?? "") ?? 0;
		l.push({
			id: "remaining-balance",
			label: "field.remaining_balance.label",
			value: {
				value: Math.max(o - Oe(e, i.fee), 0),
				currency: t
			}
		});
	}
	return l;
}, qh = ({ uiPaymentConfirmView: e, hasPendingStep: t, hasVisibleInlineContent: n, hasConfirmOnlyContent: r }) => !e && !t && (n || !r) ? {
	action: "submit",
	submitMode: "submit",
	buttonLabel: "pay"
} : {
	action: "confirm",
	submitMode: "prepare",
	buttonLabel: "continue"
};
//#endregion
export { El as $, yd as A, Cu as B, Ad as C, Cd as D, wd as E, rd as F, lu as G, Su as H, nd as I, su as J, uu as K, Bu as L, fd as M, ld as N, Td as O, id as P, Yl as Q, Au as R, Pd as S, Dd as T, vu as U, xu as V, fu as W, Jl as X, tu as Y, Ql as Z, df as _, Ym as a, rl as at, Nd as b, Vm as c, Ln as ct, Rm as d, gn as dt, al as et, Pm as f, fn as ft, fp as g, Dp as h, un as ht, eh as i, tl as it, md as j, Ed as k, Bm as l, Fn as lt, Em as m, ln as mt, Kh as n, yl as nt, Xm as o, $c as ot, Nm as p, dn as pt, ou as q, Wh as r, el as rt, Jm as s, Ac as st, qh as t, il as tt, zm as u, vn as ut, Vd as v, kd as w, Md as x, Bd as y, Eu as z };
