import { r as e, t } from "./rolldown-runtime-B0aSnxlc.js";
import { CashierLayoutListType as n, CashierMethods as r } from "./types/CashierConfig.js";
import "./defaults-BfJqn9g0.js";
import { $ as i, $r as a, Ai as o, An as s, Ar as c, C as l, Di as u, Dr as d, Ei as f, Et as p, Fi as m, G as h, Gn as g, Gr as _, H as v, Hn as y, Ii as b, Jn as x, Jr as S, K as C, Ln as w, M as T, Mi as ee, N as E, Ni as D, Nr as O, Oi as k, Ot as A, P as te, Q as j, Qn as M, Qr as N, R as P, Rn as ne, Rr as re, S as F, Ti as I, Tt as L, U as ie, Un as ae, Ur as R, V as z, Vn as B, Vt as V, W as oe, Wn as se, X as ce, Xn as le, Xr as H, Y as ue, Yr as de, Z as fe, Zn as pe, _ as me, _r as he, _t as ge, a as _e, ai as ve, at as ye, b as be, bi as xe, c as Se, ci as Ce, cr as we, d as Te, dn as U, ei as Ee, f as De, fi as Oe, fr as ke, g as Ae, gr as je, h as Me, hi as Ne, hr as Pe, ht as Fe, ii as Ie, ji as Le, ki as Re, kn as ze, kt as Be, l as Ve, li as He, lr as Ue, lt as We, m as Ge, mr as Ke, n as qe, ni as Je, nr as Ye, o as Xe, oi as Ze, or as Qe, p as $e, pi as et, pn as tt, pt as nt, q as rt, qn as it, qt as at, ri as ot, rr as st, rt as ct, s as lt, si as ut, ti as dt, u as ft, ui as pt, un as mt, ur as ht, ut as gt, v as _t, vt, wi as yt, wr as bt, x as xt, xi as St, y as Ct, yi as wt, yr as Tt, yt as W, z as G } from "./usePaymentSelection-DEVic0G9.js";
import { A as Et, At as K, Dt, Ft as Ot, M as kt, St as At, Tt as jt, U as Mt, W as Nt, _t as Pt, at as Ft, bt as It, dt as Lt, gt as Rt, ht as zt, mt as Bt, ot as Vt, xt as Ht } from "./purchase-Bq2flI3q.js";
import { Children as Ut, Component as Wt, Fragment as Gt, cloneElement as Kt, createContext as qt, createElement as Jt, forwardRef as Yt, isValidElement as Xt, startTransition as Zt, useCallback as q, useContext as Qt, useEffect as J, useId as $t, useImperativeHandle as en, useLayoutEffect as tn, useMemo as Y, useReducer as nn, useRef as X, useState as Z } from "react";
import { createPortal as rn } from "react-dom";
import { Fragment as an, jsx as Q, jsxs as $ } from "react/jsx-runtime";
//#region ../../node_modules/formik/node_modules/deepmerge/dist/es.js
var on = function(e) {
	return sn(e) && !cn(e);
};
function sn(e) {
	return !!e && typeof e == "object";
}
function cn(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || un(e);
}
var ln = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function un(e) {
	return e.$$typeof === ln;
}
function dn(e) {
	return Array.isArray(e) ? [] : {};
}
function fn(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? hn(dn(e), e, t) : e;
}
function pn(e, t, n) {
	return e.concat(t).map(function(e) {
		return fn(e, n);
	});
}
function mn(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = fn(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		r[i] = !n.isMergeableObject(t[i]) || !e[i] ? fn(t[i], n) : hn(e[i], t[i], n);
	}), r;
}
function hn(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || pn, n.isMergeableObject = n.isMergeableObject || on;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : mn(e, t, n) : fn(t, n);
}
hn.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return hn(e, n, t);
	}, {});
};
var gn = hn, _n = typeof global == "object" && global && global.Object === Object && global, vn = typeof self == "object" && self && self.Object === Object && self, yn = _n || vn || Function("return this")(), bn = yn.Symbol, xn = Object.prototype, Sn = xn.hasOwnProperty, Cn = xn.toString, wn = bn ? bn.toStringTag : void 0;
function Tn(e) {
	var t = Sn.call(e, wn), n = e[wn];
	try {
		e[wn] = void 0;
		var r = !0;
	} catch {}
	var i = Cn.call(e);
	return r && (t ? e[wn] = n : delete e[wn]), i;
}
//#endregion
//#region ../../node_modules/lodash-es/_objectToString.js
var En = Object.prototype.toString;
function Dn(e) {
	return En.call(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetTag.js
var On = "[object Null]", kn = "[object Undefined]", An = bn ? bn.toStringTag : void 0;
function jn(e) {
	return e == null ? e === void 0 ? kn : On : An && An in Object(e) ? Tn(e) : Dn(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_overArg.js
function Mn(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_getPrototype.js
var Nn = Mn(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/lodash-es/isObjectLike.js
function Pn(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/lodash-es/isPlainObject.js
var Fn = "[object Object]", In = Function.prototype, Ln = Object.prototype, Rn = In.toString, zn = Ln.hasOwnProperty, Bn = Rn.call(Object);
function Vn(e) {
	if (!Pn(e) || jn(e) != Fn) return !1;
	var t = Nn(e);
	if (t === null) return !0;
	var n = zn.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Rn.call(n) == Bn;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheClear.js
function Hn() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/eq.js
function Un(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/lodash-es/_assocIndexOf.js
function Wn(e, t) {
	for (var n = e.length; n--;) if (Un(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheDelete.js
var Gn = Array.prototype.splice;
function Kn(e) {
	var t = this.__data__, n = Wn(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Gn.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheGet.js
function qn(e) {
	var t = this.__data__, n = Wn(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheHas.js
function Jn(e) {
	return Wn(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheSet.js
function Yn(e, t) {
	var n = this.__data__, r = Wn(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_ListCache.js
function Xn(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Xn.prototype.clear = Hn, Xn.prototype.delete = Kn, Xn.prototype.get = qn, Xn.prototype.has = Jn, Xn.prototype.set = Yn;
//#endregion
//#region ../../node_modules/lodash-es/_stackClear.js
function Zn() {
	this.__data__ = new Xn(), this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackDelete.js
function Qn(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackGet.js
function $n(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_stackHas.js
function er(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/isObject.js
function tr(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/lodash-es/isFunction.js
var nr = "[object AsyncFunction]", rr = "[object Function]", ir = "[object GeneratorFunction]", ar = "[object Proxy]";
function or(e) {
	if (!tr(e)) return !1;
	var t = jn(e);
	return t == rr || t == ir || t == nr || t == ar;
}
//#endregion
//#region ../../node_modules/lodash-es/_coreJsData.js
var sr = yn["__core-js_shared__"], cr = function() {
	var e = /[^.]+$/.exec(sr && sr.keys && sr.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function lr(e) {
	return !!cr && cr in e;
}
//#endregion
//#region ../../node_modules/lodash-es/_toSource.js
var ur = Function.prototype.toString;
function dr(e) {
	if (e != null) {
		try {
			return ur.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsNative.js
var fr = /[\\^$.*+?()[\]{}|]/g, pr = /^\[object .+?Constructor\]$/, mr = Function.prototype, hr = Object.prototype, gr = mr.toString, _r = hr.hasOwnProperty, vr = RegExp("^" + gr.call(_r).replace(fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function yr(e) {
	return !tr(e) || lr(e) ? !1 : (or(e) ? vr : pr).test(dr(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getValue.js
function br(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/lodash-es/_getNative.js
function xr(e, t) {
	var n = br(e, t);
	return yr(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_Map.js
var Sr = xr(yn, "Map"), Cr = xr(Object, "create");
//#endregion
//#region ../../node_modules/lodash-es/_hashClear.js
function wr() {
	this.__data__ = Cr ? Cr(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashDelete.js
function Tr(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashGet.js
var Er = "__lodash_hash_undefined__", Dr = Object.prototype.hasOwnProperty;
function Or(e) {
	var t = this.__data__;
	if (Cr) {
		var n = t[e];
		return n === Er ? void 0 : n;
	}
	return Dr.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashHas.js
var kr = Object.prototype.hasOwnProperty;
function Ar(e) {
	var t = this.__data__;
	return Cr ? t[e] !== void 0 : kr.call(t, e);
}
//#endregion
//#region ../../node_modules/lodash-es/_hashSet.js
var jr = "__lodash_hash_undefined__";
function Mr(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Cr && t === void 0 ? jr : t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Hash.js
function Nr(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Nr.prototype.clear = wr, Nr.prototype.delete = Tr, Nr.prototype.get = Or, Nr.prototype.has = Ar, Nr.prototype.set = Mr;
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheClear.js
function Pr() {
	this.size = 0, this.__data__ = {
		hash: new Nr(),
		map: new (Sr || Xn)(),
		string: new Nr()
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_isKeyable.js
function Fr(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/lodash-es/_getMapData.js
function Ir(e, t) {
	var n = e.__data__;
	return Fr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheDelete.js
function Lr(e) {
	var t = Ir(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheGet.js
function Rr(e) {
	return Ir(this, e).get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheHas.js
function zr(e) {
	return Ir(this, e).has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheSet.js
function Br(e, t) {
	var n = Ir(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_MapCache.js
function Vr(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Vr.prototype.clear = Pr, Vr.prototype.delete = Lr, Vr.prototype.get = Rr, Vr.prototype.has = zr, Vr.prototype.set = Br;
//#endregion
//#region ../../node_modules/lodash-es/_stackSet.js
var Hr = 200;
function Ur(e, t) {
	var n = this.__data__;
	if (n instanceof Xn) {
		var r = n.__data__;
		if (!Sr || r.length < Hr - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Vr(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Stack.js
function Wr(e) {
	var t = this.__data__ = new Xn(e);
	this.size = t.size;
}
Wr.prototype.clear = Zn, Wr.prototype.delete = Qn, Wr.prototype.get = $n, Wr.prototype.has = er, Wr.prototype.set = Ur;
//#endregion
//#region ../../node_modules/lodash-es/_arrayEach.js
function Gr(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_defineProperty.js
var Kr = function() {
	try {
		var e = xr(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignValue.js
function qr(e, t, n) {
	t == "__proto__" && Kr ? Kr(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/lodash-es/_assignValue.js
var Jr = Object.prototype.hasOwnProperty;
function Yr(e, t, n) {
	var r = e[t];
	(!(Jr.call(e, t) && Un(r, n)) || n === void 0 && !(t in e)) && qr(e, t, n);
}
//#endregion
//#region ../../node_modules/lodash-es/_copyObject.js
function Xr(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? qr(n, s, c) : Yr(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseTimes.js
function Zr(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsArguments.js
var Qr = "[object Arguments]";
function $r(e) {
	return Pn(e) && jn(e) == Qr;
}
//#endregion
//#region ../../node_modules/lodash-es/isArguments.js
var ei = Object.prototype, ti = ei.hasOwnProperty, ni = ei.propertyIsEnumerable, ri = $r(function() {
	return arguments;
}()) ? $r : function(e) {
	return Pn(e) && ti.call(e, "callee") && !ni.call(e, "callee");
}, ii = Array.isArray;
//#endregion
//#region ../../node_modules/lodash-es/stubFalse.js
function ai() {
	return !1;
}
//#endregion
//#region ../../node_modules/lodash-es/isBuffer.js
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, si = oi && typeof module == "object" && module && !module.nodeType && module, ci = si && si.exports === oi ? yn.Buffer : void 0, li = (ci ? ci.isBuffer : void 0) || ai, ui = 9007199254740991, di = /^(?:0|[1-9]\d*)$/;
function fi(e, t) {
	var n = typeof e;
	return t ??= ui, !!t && (n == "number" || n != "symbol" && di.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/lodash-es/isLength.js
var pi = 9007199254740991;
function mi(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pi;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsTypedArray.js
var hi = "[object Arguments]", gi = "[object Array]", _i = "[object Boolean]", vi = "[object Date]", yi = "[object Error]", bi = "[object Function]", xi = "[object Map]", Si = "[object Number]", Ci = "[object Object]", wi = "[object RegExp]", Ti = "[object Set]", Ei = "[object String]", Di = "[object WeakMap]", Oi = "[object ArrayBuffer]", ki = "[object DataView]", Ai = "[object Float32Array]", ji = "[object Float64Array]", Mi = "[object Int8Array]", Ni = "[object Int16Array]", Pi = "[object Int32Array]", Fi = "[object Uint8Array]", Ii = "[object Uint8ClampedArray]", Li = "[object Uint16Array]", Ri = "[object Uint32Array]", zi = {};
zi[Ai] = zi[ji] = zi[Mi] = zi[Ni] = zi[Pi] = zi[Fi] = zi[Ii] = zi[Li] = zi[Ri] = !0, zi[hi] = zi[gi] = zi[Oi] = zi[_i] = zi[ki] = zi[vi] = zi[yi] = zi[bi] = zi[xi] = zi[Si] = zi[Ci] = zi[wi] = zi[Ti] = zi[Ei] = zi[Di] = !1;
function Bi(e) {
	return Pn(e) && mi(e.length) && !!zi[jn(e)];
}
//#endregion
//#region ../../node_modules/lodash-es/isTypedArray.js
var Vi = Bi, Hi = Object.prototype.hasOwnProperty;
function Ui(e, t) {
	var n = ii(e), r = !n && ri(e), i = !n && !r && li(e), a = !n && !r && !i && Vi(e), o = n || r || i || a, s = o ? Zr(e.length, String) : [], c = s.length;
	for (var l in e) (t || Hi.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || fi(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/lodash-es/_isPrototype.js
var Wi = Object.prototype;
function Gi(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Wi);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeys.js
var Ki = Mn(Object.keys, Object), qi = Object.prototype.hasOwnProperty;
function Ji(e) {
	if (!Gi(e)) return Ki(e);
	var t = [];
	for (var n in Object(e)) qi.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/isArrayLike.js
function Yi(e) {
	return e != null && mi(e.length) && !or(e);
}
//#endregion
//#region ../../node_modules/lodash-es/keys.js
function Xi(e) {
	return Yi(e) ? Ui(e) : Ji(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssign.js
function Zi(e, t) {
	return e && Xr(t, Xi(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeysIn.js
function Qi(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseKeysIn.js
var $i = Object.prototype.hasOwnProperty;
function ea(e) {
	if (!tr(e)) return Qi(e);
	var t = Gi(e), n = [];
	for (var r in e) (r != "constructor" || !t && $i.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/keysIn.js
function ta(e) {
	return Yi(e) ? Ui(e, !0) : ea(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignIn.js
function na(e, t) {
	return e && Xr(t, ta(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneBuffer.js
var ra = typeof exports == "object" && exports && !exports.nodeType && exports, ia = ra && typeof module == "object" && module && !module.nodeType && module, aa = ia && ia.exports === ra ? yn.Buffer : void 0, oa = aa ? aa.allocUnsafe : void 0;
function sa(e, t) {
	if (t) return e.slice();
	var n = e.length, r = oa ? oa(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/lodash-es/_copyArray.js
function ca(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayFilter.js
function la(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/lodash-es/stubArray.js
function ua() {
	return [];
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbols.js
var da = Object.prototype.propertyIsEnumerable, fa = Object.getOwnPropertySymbols, pa = fa ? function(e) {
	return e == null ? [] : (e = Object(e), la(fa(e), function(t) {
		return da.call(e, t);
	}));
} : ua;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbols.js
function ma(e, t) {
	return Xr(e, pa(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayPush.js
function ha(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbolsIn.js
var ga = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) ha(t, pa(e)), e = Nn(e);
	return t;
} : ua;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbolsIn.js
function _a(e, t) {
	return Xr(e, ga(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetAllKeys.js
function va(e, t, n) {
	var r = t(e);
	return ii(e) ? r : ha(r, n(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeys.js
function ya(e) {
	return va(e, Xi, pa);
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeysIn.js
function ba(e) {
	return va(e, ta, ga);
}
//#endregion
//#region ../../node_modules/lodash-es/_DataView.js
var xa = xr(yn, "DataView"), Sa = xr(yn, "Promise"), Ca = xr(yn, "Set"), wa = xr(yn, "WeakMap"), Ta = "[object Map]", Ea = "[object Object]", Da = "[object Promise]", Oa = "[object Set]", ka = "[object WeakMap]", Aa = "[object DataView]", ja = dr(xa), Ma = dr(Sr), Na = dr(Sa), Pa = dr(Ca), Fa = dr(wa), Ia = jn;
(xa && Ia(new xa(/* @__PURE__ */ new ArrayBuffer(1))) != Aa || Sr && Ia(new Sr()) != Ta || Sa && Ia(Sa.resolve()) != Da || Ca && Ia(new Ca()) != Oa || wa && Ia(new wa()) != ka) && (Ia = function(e) {
	var t = jn(e), n = t == Ea ? e.constructor : void 0, r = n ? dr(n) : "";
	if (r) switch (r) {
		case ja: return Aa;
		case Ma: return Ta;
		case Na: return Da;
		case Pa: return Oa;
		case Fa: return ka;
	}
	return t;
});
var La = Ia, Ra = Object.prototype.hasOwnProperty;
function za(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Ra.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/lodash-es/_Uint8Array.js
var Ba = yn.Uint8Array;
//#endregion
//#region ../../node_modules/lodash-es/_cloneArrayBuffer.js
function Va(e) {
	var t = new e.constructor(e.byteLength);
	return new Ba(t).set(new Ba(e)), t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneDataView.js
function Ha(e, t) {
	var n = t ? Va(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneRegExp.js
var Ua = /\w*$/;
function Wa(e) {
	var t = new e.constructor(e.source, Ua.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneSymbol.js
var Ga = bn ? bn.prototype : void 0, Ka = Ga ? Ga.valueOf : void 0;
function qa(e) {
	return Ka ? Object(Ka.call(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneTypedArray.js
function Ja(e, t) {
	var n = t ? Va(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/lodash-es/_initCloneByTag.js
var Ya = "[object Boolean]", Xa = "[object Date]", Za = "[object Map]", Qa = "[object Number]", $a = "[object RegExp]", eo = "[object Set]", to = "[object String]", no = "[object Symbol]", ro = "[object ArrayBuffer]", io = "[object DataView]", ao = "[object Float32Array]", oo = "[object Float64Array]", so = "[object Int8Array]", co = "[object Int16Array]", lo = "[object Int32Array]", uo = "[object Uint8Array]", fo = "[object Uint8ClampedArray]", po = "[object Uint16Array]", mo = "[object Uint32Array]";
function ho(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case ro: return Va(e);
		case Ya:
		case Xa: return new r(+e);
		case io: return Ha(e, n);
		case ao:
		case oo:
		case so:
		case co:
		case lo:
		case uo:
		case fo:
		case po:
		case mo: return Ja(e, n);
		case Za: return new r();
		case Qa:
		case to: return new r(e);
		case $a: return Wa(e);
		case eo: return new r();
		case no: return qa(e);
	}
}
//#endregion
//#region ../../node_modules/lodash-es/_baseCreate.js
var go = Object.create, _o = function() {
	function e() {}
	return function(t) {
		if (!tr(t)) return {};
		if (go) return go(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/lodash-es/_initCloneObject.js
function vo(e) {
	return typeof e.constructor == "function" && !Gi(e) ? _o(Nn(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsMap.js
var yo = "[object Map]";
function bo(e) {
	return Pn(e) && La(e) == yo;
}
//#endregion
//#region ../../node_modules/lodash-es/isMap.js
var xo = bo, So = "[object Set]";
function Co(e) {
	return Pn(e) && La(e) == So;
}
//#endregion
//#region ../../node_modules/lodash-es/isSet.js
var wo = Co, To = 1, Eo = 2, Do = 4, Oo = "[object Arguments]", ko = "[object Array]", Ao = "[object Boolean]", jo = "[object Date]", Mo = "[object Error]", No = "[object Function]", Po = "[object GeneratorFunction]", Fo = "[object Map]", Io = "[object Number]", Lo = "[object Object]", Ro = "[object RegExp]", zo = "[object Set]", Bo = "[object String]", Vo = "[object Symbol]", Ho = "[object WeakMap]", Uo = "[object ArrayBuffer]", Wo = "[object DataView]", Go = "[object Float32Array]", Ko = "[object Float64Array]", qo = "[object Int8Array]", Jo = "[object Int16Array]", Yo = "[object Int32Array]", Xo = "[object Uint8Array]", Zo = "[object Uint8ClampedArray]", Qo = "[object Uint16Array]", $o = "[object Uint32Array]", es = {};
es[Oo] = es[ko] = es[Uo] = es[Wo] = es[Ao] = es[jo] = es[Go] = es[Ko] = es[qo] = es[Jo] = es[Yo] = es[Fo] = es[Io] = es[Lo] = es[Ro] = es[zo] = es[Bo] = es[Vo] = es[Xo] = es[Zo] = es[Qo] = es[$o] = !0, es[Mo] = es[No] = es[Ho] = !1;
function ts(e, t, n, r, i, a) {
	var o, s = t & To, c = t & Eo, l = t & Do;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!tr(e)) return e;
	var u = ii(e);
	if (u) {
		if (o = za(e), !s) return ca(e, o);
	} else {
		var d = La(e), f = d == No || d == Po;
		if (li(e)) return sa(e, s);
		if (d == Lo || d == Oo || f && !i) {
			if (o = c || f ? {} : vo(e), !s) return c ? _a(e, na(o, e)) : ma(e, Zi(o, e));
		} else {
			if (!es[d]) return i ? e : {};
			o = ho(e, d, s);
		}
	}
	a ||= new Wr();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), wo(e) ? e.forEach(function(r) {
		o.add(ts(r, t, n, r, e, a));
	}) : xo(e) && e.forEach(function(r, i) {
		o.set(i, ts(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? ba : ya : c ? ta : Xi)(e);
	return Gr(m || e, function(r, i) {
		m && (i = r, r = e[i]), Yr(o, i, ts(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/lodash-es/cloneDeep.js
var ns = 1, rs = 4;
function is(e) {
	return ts(e, ns | rs);
}
//#endregion
//#region ../../node_modules/tiny-warning/dist/tiny-warning.esm.js
var as = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), os = process.env.NODE_ENV === "production";
function ss(e, t) {
	if (!os) {
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
var cs = 4;
function ls(e) {
	return ts(e, cs);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayMap.js
function us(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/lodash-es/isSymbol.js
var ds = "[object Symbol]";
function fs(e) {
	return typeof e == "symbol" || Pn(e) && jn(e) == ds;
}
//#endregion
//#region ../../node_modules/lodash-es/memoize.js
var ps = "Expected a function";
function ms(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(ps);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (ms.Cache || Vr)(), n;
}
ms.Cache = Vr;
//#endregion
//#region ../../node_modules/lodash-es/_memoizeCapped.js
var hs = 500;
function gs(e) {
	var t = ms(e, function(e) {
		return n.size === hs && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_stringToPath.js
var _s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /\\(\\)?/g, ys = gs(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(_s, function(e, n, r, i) {
		t.push(r ? i.replace(vs, "$1") : n || e);
	}), t;
}), bs = 1 / 0;
function xs(e) {
	if (typeof e == "string" || fs(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -bs ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseToString.js
var Ss = 1 / 0, Cs = bn ? bn.prototype : void 0, ws = Cs ? Cs.toString : void 0;
function Ts(e) {
	if (typeof e == "string") return e;
	if (ii(e)) return us(e, Ts) + "";
	if (fs(e)) return ws ? ws.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Ss ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/toString.js
function Es(e) {
	return e == null ? "" : Ts(e);
}
//#endregion
//#region ../../node_modules/lodash-es/toPath.js
function Ds(e) {
	return ii(e) ? us(e, xs) : fs(e) ? [e] : ca(ys(Es(e)));
}
//#endregion
//#region ../../node_modules/react-is/cjs/react-is.production.min.js
var Os = /* @__PURE__ */ t(((e) => {
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
})), ks = /* @__PURE__ */ t(((e) => {
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
		var S = l, C = u, w = c, T = s, ee = n, E = d, D = i, O = h, k = m, A = r, te = o, j = a, M = f, N = !1;
		function P(e) {
			return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(e) || x(e) === l;
		}
		function ne(e) {
			return x(e) === u;
		}
		function re(e) {
			return x(e) === c;
		}
		function F(e) {
			return x(e) === s;
		}
		function I(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function L(e) {
			return x(e) === d;
		}
		function ie(e) {
			return x(e) === i;
		}
		function ae(e) {
			return x(e) === h;
		}
		function R(e) {
			return x(e) === m;
		}
		function z(e) {
			return x(e) === r;
		}
		function B(e) {
			return x(e) === o;
		}
		function V(e) {
			return x(e) === a;
		}
		function oe(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = ee, e.ForwardRef = E, e.Fragment = D, e.Lazy = O, e.Memo = k, e.Portal = A, e.Profiler = te, e.StrictMode = j, e.Suspense = M, e.isAsyncMode = P, e.isConcurrentMode = ne, e.isContextConsumer = re, e.isContextProvider = F, e.isElement = I, e.isForwardRef = L, e.isFragment = ie, e.isLazy = ae, e.isMemo = R, e.isPortal = z, e.isProfiler = B, e.isStrictMode = V, e.isSuspense = oe, e.isValidElementType = b, e.typeOf = x;
	})();
})), As = /* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Os() : ks();
}));
(/* @__PURE__ */ t(((e, t) => {
	var n = As(), r = {
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
function js() {
	return js = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, js.apply(this, arguments);
}
function Ms(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Ns(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Ps(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Fs = /*#__PURE__*/ qt(void 0);
Fs.displayName = "FormikContext";
var Is = Fs.Provider;
Fs.Consumer;
function Ls() {
	var e = Qt(Fs);
	return !e && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.")), e;
}
var Rs = function(e) {
	return Array.isArray(e) && e.length === 0;
}, zs = function(e) {
	return typeof e == "function";
}, Bs = function(e) {
	return typeof e == "object" && !!e;
}, Vs = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Hs = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Us = function(e) {
	return Ut.count(e) === 0;
}, Ws = function(e) {
	return Bs(e) && zs(e.then);
};
function Gs(e) {
	if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ks(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Ds(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function qs(e, t, n) {
	for (var r = ls(e), i = r, a = 0, o = Ds(t); a < o.length - 1; a++) {
		var s = o[a], c = Ks(e, o.slice(0, a + 1));
		if (c && (Bs(c) || Array.isArray(c))) i = i[s] = ls(c);
		else {
			var l = o[a + 1];
			i = i[s] = Vs(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Js(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Bs(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Js(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Ys(e, t) {
	switch (t.type) {
		case "SET_VALUES": return js({}, e, { values: t.payload });
		case "SET_TOUCHED": return js({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, as.default)(e.errors, t.payload) ? e : js({}, e, { errors: t.payload });
		case "SET_STATUS": return js({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return js({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return js({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return js({}, e, { values: qs(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return js({}, e, { touched: qs(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return js({}, e, { errors: qs(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return js({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return js({}, e, {
			touched: Js(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return js({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return js({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Xs = {}, Zs = {};
function Qs(e) {
	var t = e.validateOnChange, n = t === void 0 || t, r = e.validateOnBlur, i = r === void 0 || r, a = e.validateOnMount, o = a !== void 0 && a, s = e.isInitialValid, c = e.enableReinitialize, l = c !== void 0 && c, u = e.onSubmit, d = Ns(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = js({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = X(f.initialValues), m = X(f.initialErrors || Xs), h = X(f.initialTouched || Zs), g = X(f.initialStatus), _ = X(!1), v = X({});
	process.env.NODE_ENV !== "production" && J(function() {
		s !== void 0 && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead."));
	}, []), J(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = Z(0)[1], b = X({
		values: is(f.initialValues),
		errors: is(f.initialErrors) || Xs,
		touched: is(f.initialTouched) || Zs,
		status: is(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = q(function(e) {
		var t = b.current;
		b.current = Ys(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = q(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Xs) : Ws(i) ? i.then(function(e) {
				n(e || Xs);
			}, function(e) {
				process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", e), r(e);
			}) : n(i);
		});
	}, [f.validate]), w = q(function(e, t) {
		var n = f.validationSchema, r = zs(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : nc(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Xs);
			}, function(n) {
				n.name === "ValidationError" ? e(tc(n)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", n), t(n));
			});
		});
	}, [f.validationSchema]), T = q(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), ee = q(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return zs(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, Ks(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = qs(e, t[r], n)), e;
			}, {});
		});
	}, [T]), E = q(function(e) {
		return Promise.all([
			ee(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return gn.all([
				t,
				n,
				r
			], { arrayMerge: ic });
		});
	}, [
		f.validate,
		f.validationSchema,
		ee,
		C,
		w
	]), D = cc(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), E(e).then(function(e) {
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
		o && _.current === !0 && (0, as.default)(p.current, f.initialValues) && D(p.current);
	}, [o, D]);
	var O = q(function(e) {
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
			var o = f.onReset(x.values, oe);
			Ws(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	J(function() {
		_.current === !0 && !(0, as.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, O(), o && D(p.current));
	}, [
		l,
		f.initialValues,
		O,
		o,
		D
	]), J(function() {
		l && _.current === !0 && !(0, as.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Xs, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Xs
		}));
	}, [l, f.initialErrors]), J(function() {
		l && _.current === !0 && !(0, as.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Zs, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Zs
		}));
	}, [l, f.initialTouched]), J(function() {
		l && _.current === !0 && !(0, as.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var k = cc(function(e) {
		if (v.current[e] && zs(v.current[e].validate)) {
			var t = Ks(x.values, e), n = v.current[e].validate(t);
			return Ws(n) ? (S({
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
					value: Ks(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		})) : Promise.resolve();
	}), A = q(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), te = q(function(e) {
		delete v.current[e];
	}, []), j = cc(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? D(x.values) : Promise.resolve();
	}), M = q(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), N = cc(function(e, t) {
		var r = zs(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? D(r) : Promise.resolve();
	}), P = q(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), ne = cc(function(e, t, r) {
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: t
			}
		}), (r === void 0 ? n : r) ? D(qs(x.values, e, t)) : Promise.resolve();
	}), re = q(function(e, t) {
		var n = t, r = e, i;
		if (!Hs(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked, d = a.outerHTML, f = a.options, p = a.multiple;
			n = t || s || c, !n && process.env.NODE_ENV !== "production" && ec({
				htmlContent: d,
				documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
				handlerName: "handleChange"
			}), r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? oc(Ks(x.values, n), u, l) : f && p ? ac(f) : l;
		}
		n && ne(n, r);
	}, [ne, x.values]), F = cc(function(e) {
		if (Hs(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), I = cc(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? D(x.values) : Promise.resolve();
	}), L = q(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id, a = n.outerHTML, o = t || r || i;
		!o && process.env.NODE_ENV !== "production" && ec({
			htmlContent: a,
			documentationAnchorLink: "handleblur-e-any--void",
			handlerName: "handleBlur"
		}), I(o, !0);
	}, [I]), ie = cc(function(e) {
		if (Hs(e)) return function(t) {
			return L(t, e);
		};
		L(e);
	}), ae = q(function(e) {
		zs(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), R = q(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), z = q(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), B = cc(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), D().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = se(), n === void 0) return;
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
	}), V = cc(function(e) {
		if (e && e.preventDefault && zs(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && zs(e.stopPropagation) && e.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
			var t = Gs();
			t !== null && t instanceof HTMLButtonElement && !(t.attributes && t.attributes.getNamedItem("type")) && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type=\"submit\"`. If this is not a submit button, please add `type=\"button\"`."));
		}
		B().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), oe = {
		resetForm: O,
		validateForm: D,
		validateField: k,
		setErrors: M,
		setFieldError: P,
		setFieldTouched: I,
		setFieldValue: ne,
		setStatus: R,
		setSubmitting: z,
		setTouched: j,
		setValues: N,
		setFormikState: ae,
		submitForm: B
	}, se = cc(function() {
		return u(x.values, oe);
	}), ce = cc(function(e) {
		e && e.preventDefault && zs(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && zs(e.stopPropagation) && e.stopPropagation(), O();
	}), le = q(function(e) {
		return {
			value: Ks(x.values, e),
			error: Ks(x.errors, e),
			touched: !!Ks(x.touched, e),
			initialValue: Ks(p.current, e),
			initialTouched: !!Ks(h.current, e),
			initialError: Ks(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), H = q(function(e) {
		return {
			setValue: function(t, n) {
				return ne(e, t, n);
			},
			setTouched: function(t, n) {
				return I(e, t, n);
			},
			setError: function(t) {
				return P(e, t);
			}
		};
	}, [
		ne,
		I,
		P
	]), ue = q(function(e) {
		var t = Bs(e), n = t ? e.name : e, r = Ks(x.values, n), i = {
			name: n,
			value: r,
			onChange: F,
			onBlur: ie
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		ie,
		F,
		x.values
	]), de = Y(function() {
		return !(0, as.default)(p.current, x.values);
	}, [p.current, x.values]), fe = Y(function() {
		return s === void 0 || de ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && zs(s) ? s(f) : s;
	}, [
		s,
		de,
		x.errors,
		f
	]);
	return js({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: ie,
		handleChange: F,
		handleReset: ce,
		handleSubmit: V,
		resetForm: O,
		setErrors: M,
		setFormikState: ae,
		setFieldTouched: I,
		setFieldValue: ne,
		setFieldError: P,
		setStatus: R,
		setSubmitting: z,
		setTouched: j,
		setValues: N,
		submitForm: B,
		validateForm: D,
		validateField: k,
		isValid: fe,
		dirty: de,
		unregisterField: te,
		registerField: A,
		getFieldProps: ue,
		getFieldMeta: le,
		getFieldHelpers: H,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function $s(e) {
	var t = Qs(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return en(a, function() {
		return t;
	}), process.env.NODE_ENV !== "production" && J(function() {
		e.render && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>"));
	}, []), Jt(Is, { value: t }, n ? Jt(n, t) : i ? i(t) : r ? zs(r) ? r(t) : Us(r) ? null : Ut.only(r) : null);
}
function ec(e) {
	var t = e.htmlContent, n = e.documentationAnchorLink, r = e.handlerName;
	console.warn("Warning: Formik called `" + r + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + n + "\n  ");
}
function tc(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return qs(t, e.path, e.message);
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
			Ks(t, o.path) || (t = qs(t, o.path, o.message));
		}
	}
	return t;
}
function nc(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = rc(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function rc(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		t[r] = Array.isArray(e[r]) === !0 ? e[r].map(function(e) {
			return Array.isArray(e) === !0 || Vn(e) ? rc(e) : e === "" ? void 0 : e;
		}) : Vn(e[r]) ? rc(e[r]) : e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function ic(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? gn(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = gn(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function ac(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function oc(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var sc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? tn : J;
function cc(e) {
	var t = X(e);
	return sc(function() {
		t.current = e;
	}), q(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function lc(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = Ns(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = Ns(Ls(), ["validate", "validationSchema"]);
	process.env.NODE_ENV !== "production" && J(function() {
		r && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + n + "\" render={({field, form}) => ...} /> with <Field name=\"" + n + "\">{({field, form, meta}) => ...}</Field>")), a && i && zs(i) && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.")), o && i && zs(i) && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.")), r && i && !Us(i) && (process.env.NODE_ENV === "production" ? ss(!1) : ss(!1, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored"));
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
	var f = l.getFieldProps(js({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r(js({}, m, { meta: p }));
	if (zs(i)) return i(js({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = Ns(c, ["innerRef"]);
			return Jt(o, js({ ref: h }, f, g, { className: s }), i);
		}
		return Jt(o, js({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = Ns(c, ["innerRef"]);
		return Jt(_, js({ ref: v }, f, y, { className: s }), i);
	}
	return Jt(_, js({}, f, c, { className: s }), i);
}
var uc = /*#__PURE__*/ Yt(function(e, t) {
	var n = e.action, r = Ns(e, ["action"]), i = n ?? "#", a = Ls(), o = a.handleReset, s = a.handleSubmit;
	return Jt("form", js({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
uc.displayName = "Form";
var dc = function(e, t, n) {
	var r = hc(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, fc = function(e, t, n) {
	var r = hc(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, pc = function(e, t, n) {
	var r = hc(e);
	return r.splice(t, 0, n), r;
}, mc = function(e, t, n) {
	var r = hc(e);
	return r[t] = n, r;
}, hc = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(js({}, e, { length: t + 1 }));
}, gc = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Bs(e) ? n(hc(e)) : e;
	};
}, _c = /*#__PURE__*/ function(e) {
	Ms(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = gc(r, e), o = gc(t, e), s = qs(n.values, a, e(Ks(n.values, a))), c = r ? i(Ks(n.errors, a)) : void 0, l = t ? o(Ks(n.touched, a)) : void 0;
				return Rs(c) && (c = void 0), Rs(l) && (l = void 0), js({}, n, {
					values: s,
					errors: r ? qs(n.errors, a, c) : n.errors,
					touched: t ? qs(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(hc(t), [is(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return fc(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return dc(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return pc(n, e, t);
			}, function(t) {
				return pc(t, e, null);
			}, function(t) {
				return pc(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return mc(n, e, t);
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
		}, n.remove = n.remove.bind(Ps(n)), n.pop = n.pop.bind(Ps(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, as.default)(Ks(e.formik.values, e.name), Ks(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? hc(n) : [];
			return t ||= r[e], zs(r.splice) && r.splice(e, 1), zs(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = Ns(o, ["validate", "validationSchema"]), c = js({}, e, {
			form: s,
			name: a
		});
		return n ? Jt(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Us(i) ? null : Ut.only(i) : null;
	}, t;
}(Wt);
_c.defaultProps = { validateOnChange: !0 };
//#endregion
//#region ../ui/src/lib/layout/stickyBoundary.ts
var vc = /* @__PURE__ */ new Set([
	"auto",
	"overlay",
	"scroll"
]), yc = (e) => vc.has(e.overflowY) || vc.has(e.overflow), bc = (e) => {
	let t = e.parentElement;
	for (; t;) {
		if (yc(window.getComputedStyle(t))) return t;
		t = t.parentElement;
	}
	return null;
}, xc = "pc-enter-rise", Sc = "pc-enter-rise-item", Cc = "pc-enter-sweep", wc = "pc-enter-sweep-item", Tc = 70, Ec = 45, Dc = 100, Oc = 360, kc = 3, Ac = 36, jc = 12, Mc = 80, Nc = (e) => Number.isFinite(e) ? Math.max(0, e) : 0, Pc = (e, t) => t <= 1 ? 0 : e / (t - 1), Fc = (e, t) => {
	switch (t) {
		case "linear": return e;
		case "ease-out": return 1 - (1 - e) ** 1.35;
		default: return e;
	}
}, Ic = ({ index: e, total: t, direction: n = "forward", baseDelayMs: r = Tc, staggerMs: i = Ec, maxAdditionalDelayMs: a, distribution: o = "step" }) => {
	let s = Math.trunc(Nc(e)), c = Math.max(s + 1, Math.trunc(Nc(t ?? s + 1))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = (() => {
		if (a !== void 0) {
			let e = Fc(Pc(l, c), o);
			return Math.round(r + e * a);
		}
		return Math.round(r + l * i);
	})();
	return { animationDelay: `${String(u)}ms` };
}, Lc = (e, t, n = "forward", { baseDelayMs: r = Dc, maxAdditionalDelayMs: i = Oc, distribution: a = "linear", staggerMode: o = "distributed" } = {}) => {
	if (o === "distributed") return Ic({
		index: e,
		total: t,
		direction: n,
		baseDelayMs: r,
		maxAdditionalDelayMs: i,
		distribution: a
	});
	let s = Math.trunc(Nc(e)), c = Math.max(s + 1, Math.trunc(Nc(t))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = Math.min(c, kc), d = Math.max(0, (u - 1) * Ac), f = Math.min(Nc(i), d), p = u > 1 ? f / (u - 1) : 0, m = (() => {
		if (l < u) return Math.round(r + l * p);
		let e = Math.max(Nc(i) - f, 0);
		if (e <= 0 || c - u <= 0) return Math.round(r + f);
		let t = Math.min(jc, e);
		return Math.round(r + f + t);
	})();
	return { animationDelay: `${String(m)}ms` };
}, Rc = ({ baseDelayMs: e = Dc } = {}) => ({ animationDelay: `${String(Math.max(0, Math.round(e - Mc)))}ms` }), zc = [
	"w-full",
	"border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]",
	"last:border-b-0"
].join(" "), Bc = [
	"flex w-full items-baseline justify-between gap-x-2",
	"text-[var(--pc-color-payment-summary-row-text,var(--pc-color-payment-summary-text,var(--pc-color-text)))]",
	"text-xs @xs:text-sm @md:text-base"
].join(" "), Vc = ["font-normal", "text-[var(--pc-color-payment-summary-label-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text)))]"].join(" "), Hc = [
	"min-w-0 break-words",
	"text-[var(--pc-color-payment-summary-value-text,var(--pc-color-text-muted))]",
	"text-right"
].join(" ");
function Uc({ summaryFields: e, variant: t = "neutral", rowVariants: n, className: r, children: i, panelBorderEdges: a = "all", surfaceChrome: o = "panel", animationDirection: l, animationStyleOptions: u, animateEntrance: d = !1, merchantElements: f = !1, onlyMerchantElements: p = !1, presentationSlot: h = !1 }) {
	let _ = Qt(w), { hasPendingInitialSurface: v } = y(), x = f && _.hasContent && !v, S = pe(), { resolveTextKey: C, translateKey: T } = c(), { formatDisplayValue: ee } = Tt(), E = t === null, O = t === null ? void 0 : D(t), k = Ut.count(i) > 0 || x || !!_.selectedOffer, A = e.length > 0, te = e.map(({ id: e, label: t, value: n }) => ({
		id: e,
		label: C(t && t.length > 0 ? t : e),
		value: ee(n)
	})), j = l ?? (k ? "forward" : "reverse"), N = +!!k + (k && A ? 1 : 0) + e.length, P = +!!k, ne = +!!k + (k && A ? 1 : 0), re = {
		staggerMode: "compressed-tail",
		...u
	}, F = b("w-full", o === "panel" && a === "without-top" && "border-t-0", d && "pc-enter-panel", r), I = S.attrs("payment-summary"), L = S.attrs("payment-summary-children", { part: "children" }), ie = S.attrs("payment-summary-divider", { part: "divider" }), ae = A ? /* @__PURE__ */ $("div", {
		className: "flex w-full flex-col",
		children: [k && /* @__PURE__ */ Q("div", {
			"data-pc-slot": ie["data-pc-slot"],
			"data-pc-part": ie["data-pc-part"],
			"data-payment-summary-divider": "true",
			className: m(ie.className, "border-b border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]", d && "pc-enter-panel-item"),
			style: d ? Lc(P, N, j, re) : void 0
		}), e.map(({ id: t, label: r, value: i }, a) => {
			let o = r && r.length > 0 ? r : t, s = T(o), c = ee(i), l = a === 0, u = a === e.length - 1, f = n?.[t], p = f ? D(f) : void 0, h = S.attrs("payment-summary-row", { slug: t }), g = S.attrs("payment-summary-row-content", { slug: t }), v = S.attrs("payment-summary-label", { slug: t }), y = S.attrs("payment-summary-value", { slug: t });
			return /* @__PURE__ */ Q("div", {
				"data-pc-slot": h["data-pc-slot"],
				"data-pc-slug": h["data-pc-slug"],
				"data-payment-summary-row": t,
				className: m(h.className, zc, d && "pc-enter-panel-item", !k && l ? "pt-0" : "pt-1.5", u ? "pb-0" : "pb-1.5"),
				style: d ? Lc(ne + a, N, j, re) : void 0,
				children: /* @__PURE__ */ Q("div", {
					"data-pc-slot": g["data-pc-slot"],
					"data-pc-slug": g["data-pc-slug"],
					"data-payment-summary-row-content": t,
					"data-theme": p,
					className: m(g.className, Bc),
					children: /* @__PURE__ */ Q(it, {
						compact: !0,
						baseline: !0,
						trailing: /* @__PURE__ */ Q("span", {
							"data-pc-slot": y["data-pc-slot"],
							"data-pc-slug": y["data-pc-slug"],
							className: m(y.className, Hc),
							children: t === "amount" && _.orderPricing ? /* @__PURE__ */ Q(M, {
								price: _.orderPricing,
								showAdvertisedDiscount: !1
							}) : c
						}),
						children: /* @__PURE__ */ Q("span", {
							"data-pc-slot": v["data-pc-slot"],
							"data-pc-slug": v["data-pc-slug"],
							className: m(v.className, Vc),
							children: s
						})
					})
				})
			}, t);
		})]
	}) : null;
	return p && !x ? null : /* @__PURE__ */ Q(Le, {
		as: "div",
		size: "lg",
		"data-pc-slot": I["data-pc-slot"],
		dataTheme: O,
		inheritTheme: E,
		chrome: o === "panel",
		spacing: o === "plain" ? "flush" : void 0,
		className: m(I.className, F),
		style: d ? Rc(re) : void 0,
		children: /* @__PURE__ */ $("div", {
			className: "flex w-full flex-col gap-0",
			children: [k && /* @__PURE__ */ $("div", {
				"data-pc-slot": L["data-pc-slot"],
				"data-pc-part": L["data-pc-part"],
				"data-payment-summary-children": "true",
				className: m(L.className, d && "pc-enter-panel-item"),
				style: d ? Lc(0, N, j, re) : void 0,
				children: [
					i,
					_.selectedOffer && /* @__PURE__ */ Q("div", {
						className: "py-2.5",
						"data-pc-selected-offer": _.selectedOffer.id,
						children: /* @__PURE__ */ Q(g, {
							title: _.selectedOffer.title.value,
							description: _.selectedOffer.description.value,
							wrap: !0
						})
					}),
					x && _.content
				]
			}), h ? /* @__PURE__ */ Q(ze, {
				id: "summaryDetails",
				model: { fields: te },
				actions: s,
				children: ae
			}) : ae]
		})
	});
}
//#endregion
//#region src/context/summaryState.tsx
var Wc = () => {
	let e = null, t = null;
	return Object.freeze({
		getAccess: () => e,
		setAccess: (t) => {
			e = t;
		},
		clearAccess: () => {
			e = null;
		},
		getProgress: () => t,
		setProgress: (e) => {
			t = e;
		},
		clearProgress: () => {
			t = null;
		},
		hasProviderStep: (e) => e !== null && t?.paymentId === e && t.reachedSummaryViaProvider
	});
}, Gc = Object.freeze({
	getAccess: () => null,
	setAccess: () => void 0,
	clearAccess: () => void 0,
	getProgress: () => null,
	setProgress: () => void 0,
	clearProgress: () => void 0,
	hasProviderStep: () => !1
}), Kc = qt(Gc);
function qc({ children: e, state: t }) {
	return /* @__PURE__ */ Q(Kc.Provider, {
		value: t,
		children: e
	});
}
var Jc = () => Qt(Kc), Yc = "sticky left-0 right-0 top-0 z-20 flex-shrink-0 w-full", Xc = "relative z-20 w-full", Zc = "sticky bottom-0 z-40 h-0 overflow-visible", Qc = "-translate-y-full transform-gpu will-change-transform", $c = (e) => e === "top" ? "grid gap-3 justify-center @lg:justify-start" : "grid gap-3", el = (e) => e === "top" ? "" : "pb-4", tl = (e) => mt, nl = (e, t) => ({ gridTemplateColumns: "repeat(" + t.toString() + ", minmax(0, 1fr))" }), rl = (e) => "flex w-full justify-center";
function il({ placement: e, items: t, showFade: n = !0, reserveSpace: r = !0 }) {
	let i = pe(), a = t.length, o = le(), s = nl(e, a), c = rl(e), l = $c(e), u = e === "top" ? Yc : Xc, d = el(e), f = tl(e), p = i.attrs("navigation-rail-wrapper"), h = i.attrs("navigation-rail-inner");
	if (a === 0) return null;
	let g = i.attrs(`navigation-rail-grid-${e}`), _ = /* @__PURE__ */ Q("div", {
		id: i.id(`navigation-rail-grid-${e}`),
		...g,
		className: m(g.className, l),
		style: s,
		children: t.map((t, n) => {
			let r = `navigation-shell-item-${e}-${n.toString()}`, a = o(r, "action"), s = i.attrs("navigation-item", { slug: a });
			return /* @__PURE__ */ Q("div", {
				id: i.id("navigation-item", { slug: a }),
				...s,
				className: m(s.className, c),
				children: t
			}, r);
		})
	});
	if (e === "bottom") {
		let t = i.attrs(`navigation-rail-${e}`), a = r === "compact", o = a || r === !0;
		return /* @__PURE__ */ $("div", {
			id: i.id(`navigation-rail-${e}`),
			...t,
			className: m(t.className, u),
			children: [o && /* @__PURE__ */ Q("div", {
				"aria-hidden": "true",
				inert: !0,
				"data-slot": "navigation-rail-bottom-spacer",
				"data-reserve-space": a ? "compact" : "full",
				className: "invisible pointer-events-none w-full",
				children: /* @__PURE__ */ Q("div", {
					...p,
					className: m(p.className, d),
					children: /* @__PURE__ */ Q("div", {
						...h,
						className: m(h.className, f),
						children: _
					})
				})
			}), /* @__PURE__ */ Q("div", {
				className: Zc,
				children: /* @__PURE__ */ $("div", {
					"data-slot": "navigation-rail-bottom-surface",
					"data-pc-scroll-obstruction": "bottom",
					className: m("pointer-events-none relative w-full bg-[var(--pc-color-surface)]", Qc),
					children: [n && /* @__PURE__ */ Q("div", {
						"aria-hidden": "true",
						"data-slot": "navigation-rail-bottom-fade",
						"data-pc-scroll-obstruction": "bottom",
						style: U,
						className: "pointer-events-none absolute inset-x-0 bottom-full"
					}), /* @__PURE__ */ Q("div", {
						className: "pointer-events-auto",
						children: /* @__PURE__ */ Q("div", {
							...p,
							className: m(p.className, d),
							children: /* @__PURE__ */ Q("div", {
								...h,
								className: m(h.className, f),
								children: _
							})
						})
					})]
				})
			})]
		});
	}
	let v = i.attrs(`navigation-rail-${e}`);
	return /* @__PURE__ */ Q("div", {
		id: i.id(`navigation-rail-${e}`),
		...v,
		"data-pc-scroll-obstruction": "top",
		className: m(v.className, u),
		children: /* @__PURE__ */ Q("div", {
			...p,
			className: m(p.className, d),
			children: /* @__PURE__ */ Q("div", {
				...h,
				className: m(h.className, f),
				children: _
			})
		})
	});
}
//#endregion
//#region src/context/navigationShell.tsx
var al = () => ({
	top: {},
	bottom: {}
}), ol = "default", sl = (e) => !!e, cl = (e) => Object.values(e).filter(sl), ll = (e) => cl(e).sort((e, t) => e.order - t.order).flatMap((e) => e.items), ul = (e) => {
	let t = cl(e);
	return t.length === 0 || t.some((e) => e.reserveSpace === !0) ? !0 : t.some((e) => e.reserveSpace === "compact") ? "compact" : !1;
}, dl = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), fl = (e, t) => Object.hasOwn(e, t) ? Object.fromEntries(Object.entries(e).filter(([e]) => e !== t)) : null, pl = qt(void 0), ml = qt(void 0), hl = qt(void 0);
function gl({ children: e, beforeTopRail: t, themeStyles: n }) {
	let [r, i] = Z(() => al()), a = X(0), [o, s] = Z(null), [c, l] = Z(null), [u, d] = Z(null), [f, p] = Z(0), [m, h] = Z(!1), g = q((e) => {
		s(e);
	}, []), _ = q((e) => {
		d(e), e || p(0);
	}, []), v = Y(() => ({
		top: ll(r.top),
		bottom: ll(r.bottom)
	}), [r]), y = Y(() => ({
		top: ul(r.top),
		bottom: ul(r.bottom)
	}), [r]), b = q((e, t, n) => {
		let r = n?.reserveSpace ?? !0, o = n?.source ?? ol;
		i((n) => {
			let i = n[e], s = i[o];
			if (t.length === 0) {
				let t = fl(i, o);
				return t ? {
					...n,
					[e]: t
				} : n;
			}
			return s && dl(s.items, t) && s.reserveSpace === r ? n : {
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
	}, []), x = q((e, t) => {
		if (!e) {
			i(al()), s(null);
			return;
		}
		i((n) => {
			if (t?.source) {
				let r = fl(n[e], t.source);
				return r ? {
					...n,
					[e]: r
				} : n;
			}
			return Object.keys(n[e]).length === 0 ? n : {
				...n,
				[e]: {}
			};
		});
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
	return /* @__PURE__ */ Q(ml.Provider, {
		value: C,
		children: /* @__PURE__ */ Q(hl.Provider, {
			value: u,
			children: /* @__PURE__ */ Q(pl.Provider, {
				value: S,
				children: /* @__PURE__ */ Q(xl, {
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
function _l() {
	let e = Qt(pl);
	if (!e) throw Error("useNavigationShell must be used within a NavigationShellProvider");
	return e;
}
function vl() {
	let e = Qt(ml);
	if (!e) throw Error("useNavigationItems must be used within a NavigationShellProvider");
	return e;
}
function yl() {
	let e = Qt(hl);
	if (e === void 0) throw Error("useNavigationShellContentNode must be used within a NavigationShellProvider");
	return e;
}
function bl(e, t, n = !0, r) {
	let { setItems: i, clearItems: a } = vl(), o = $t(), s = r?.source ?? o, c = r?.reserveSpace ?? !0;
	tn(() => {
		if (!n) {
			a(e, { source: s });
			return;
		}
		if (t.length === 0) {
			a(e, { source: s });
			return;
		}
		i(e, t, {
			reserveSpace: c,
			source: s
		});
	}, [
		a,
		n,
		t,
		e,
		c,
		i,
		s
	]), tn(() => () => {
		a(e, { source: s });
	}, [
		a,
		e,
		s
	]);
}
function xl({ itemsByPlacement: e, reserveSpaceByPlacement: t, overlay: n, onShellNodeChange: r, onContentNodeChange: i, contentInset: a, bottomRailFadeSuppressed: o, beforeTopRail: s, themeStyles: c, children: l }) {
	let u = pe(), d = 16 + Math.max(a, 0), f = a > 0 && !o ? { paddingBottom: a } : void 0, p = e.bottom.length > 0 && !o, h = u.attrs("navigation-shell"), g = u.attrs("navigation-main"), _ = u.attrs("navigation-content"), v = u.attrs("navigation-overlay"), y = u.attrs("navigation-overlay-content");
	return /* @__PURE__ */ $("div", {
		ref: r,
		id: u.id("navigation-shell"),
		...h,
		"data-pc-bottom-rail-fade": p ? "true" : void 0,
		className: m(h.className, "relative flex h-full min-h-0 w-full flex-col overflow-hidden"),
		style: c,
		children: [
			s,
			/* @__PURE__ */ Q(il, {
				placement: "top",
				items: e.top
			}),
			/* @__PURE__ */ $("div", {
				id: u.id("navigation-main"),
				...g,
				className: m(g.className, "relative flex min-h-0 flex-1 flex-col"),
				children: [/* @__PURE__ */ Q("div", {
					ref: i,
					id: u.id("navigation-content"),
					..._,
					className: m(_.className, "relative flex min-h-0 flex-1 flex-col overflow-hidden"),
					style: f,
					children: l
				}), n && /* @__PURE__ */ Q("div", {
					id: u.id("navigation-overlay"),
					...v,
					className: m(v.className, "pointer-events-none absolute inset-0 z-60"),
					children: /* @__PURE__ */ Q("div", {
						...y,
						className: m(y.className, "pointer-events-auto absolute right-4"),
						style: { bottom: d },
						children: n
					})
				})]
			}),
			/* @__PURE__ */ Q(il, {
				placement: "bottom",
				items: e.bottom,
				showFade: !o,
				reserveSpace: t.bottom
			})
		]
	});
}
var Sl = {
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
}, Cl = JSON.stringify({
	sessionId: "session_example",
	amount: "91038501",
	accountId: "",
	input: {
		holderName: "X'Æon-Júliën Þørnßon-Smith Jr.",
		expiryDate: "0825",
		transactionToken: "12a2ab5daf8ab37b0d6724b23ff8765f"
	},
	userId: "kalle_kula"
}), wl = qt(void 0), Tl = () => void 0, El = {
	overridePayload: "",
	setOverridePayload: Tl,
	resetOverridePayload: Tl,
	isLocked: !1,
	setLocked: Tl
}, Dl = (() => {
	let e = !1;
	return () => {
		process.env.NODE_ENV !== "production" && (e ||= (console.warn("useOverridePayload was accessed outside an OverridePayloadProvider. Falling back to a no-op implementation."), !0));
	};
})();
function Ol({ children: e }) {
	let [t, n] = Z(""), [r, i] = Z(!1), a = q(() => {
		n("");
	}, []), o = q((e) => {
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
	return /* @__PURE__ */ Q(wl.Provider, {
		value: s,
		children: e
	});
}
function kl() {
	return Qt(wl) || (Dl(), El);
}
//#endregion
//#region src/context/paymentFormReset.tsx
var Al = qt(void 0);
function jl({ children: e }) {
	let t = X(null), n = X(!1), [r, i] = Z(!1), a = q((e) => {
		let r = !!e;
		(t.current !== e || n.current !== r) && (t.current = e, n.current !== r && (n.current = r, i(r)));
	}, []), o = q(() => {
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
	return /* @__PURE__ */ Q(Al.Provider, {
		value: s,
		children: e
	});
}
function Ml() {
	let e = Qt(Al);
	if (!e) throw Error("usePaymentFormReset must be used within a PaymentFormResetProvider");
	return e;
}
//#endregion
//#region src/context/theme.tsx
var Nl = qt({ portalContainer: null }), Pl = Nl.Provider, Fl = () => Qt(Nl), Il = (e) => e?.parentElement?.parentElement ?? e?.parentElement ?? e ?? void 0, Ll = () => {
	let { portalContainer: e } = Fl();
	return Il(e);
}, Rl = "bottom", zl = "cta.close";
function Bl({ isOpen: e, onClose: t, side: n = Rl, title: r, children: i, portalContainer: a, closeButtonLabel: o, overlayClassName: s, contentClassName: l, variant: u, contentRef: d }) {
	let { translateKey: f } = c(), p = Ll(), m = a ?? p, h = o ?? f(zl);
	return /* @__PURE__ */ Q(_, {
		isOpen: e,
		onClose: t,
		side: n,
		title: r,
		closeButtonLabel: h,
		portalContainer: m,
		overlayClassName: s,
		contentClassName: l,
		variant: u,
		contentRef: d,
		children: i
	});
}
//#endregion
//#region src/utils/userFlowDone.ts
var Vl = (e) => {
	try {
		fetch(e, {
			method: "POST",
			mode: "no-cors",
			keepalive: !0
		}).catch(() => void 0);
	} catch {}
}, Hl = () => {
	let e = tt(), t = at(), n = Jc(), r = Be(), { clearPaymentState: i, payment: a, status: o } = p(), { merchantId: s, method: c, userId: l, sessionId: u, currency: d, fetchConfig: f, extraAttributes: m, selectedBonusCode: h, setCashierState: g } = Qt(re);
	return q((p) => {
		let _ = p?.paymentId ?? void 0, v = p?.merchantId ?? void 0, y = p?.replace ?? !1, b = p?.reachedSummaryViaProvider ?? !1, x = a, S = p?.userFlowDoneUrl ?? (x?.paymentId === _ ? x?.redirect?.userFlowDoneUrl : void 0);
		if (_ && S && !V(o) && Vl(S), !_ || !v) {
			i(), s && l && u && t.invalidateQueries({ queryKey: gt({
				merchantId: s,
				method: c,
				userId: l,
				sessionId: u,
				currency: d,
				fetchConfig: f,
				extraAttributes: m
			}) }), n.clearProgress(), g((e) => !e.selectedBonusCode && !e.resetFlowOnBack && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
				...e,
				selectedBonusCode: null,
				resetFlowOnBack: !1,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
			return;
		}
		n.setAccess({
			paymentId: _,
			merchantId: v,
			selectedBonusCode: h ?? null
		}), n.setProgress({
			paymentId: _,
			reachedSummaryViaProvider: b
		}), r(_);
		let C = {
			to: "/summary/$id",
			params: { id: _ },
			search: { merchantId: v },
			...y ? { replace: y } : {}
		};
		e(C);
	}, [
		i,
		r,
		d,
		m,
		f,
		s,
		c,
		e,
		a,
		t,
		h,
		u,
		g,
		o,
		n,
		l
	]);
}, Ul = (e) => ({
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
})[e], Wl = (e) => e?.orientation === "top", Gl = "mb-2.5 flex flex-col gap-2", Kl = "mt-3 flex flex-col gap-2", ql = [
	"[&_p]:!text-sm",
	"[&_p]:!leading-snug",
	"[&_li]:!text-sm",
	"[&_li]:!leading-snug"
].join(" ");
function Jl({ notification: e, role: t, translateKeys: n, tone: r = "status" }) {
	let i = pe(), a = It(n(e.keys ?? e.key));
	if (!a) return null;
	let o = r === "status" ? Ul(e.type) : void 0;
	return /* @__PURE__ */ Q("div", {
		...i.attrs("payment-notification-section", { slug: e.type }),
		role: t,
		children: /* @__PURE__ */ Q(ne, {
			content: bt({ value: a }, e.params).value,
			variant: o,
			inheritTheme: o === void 0,
			size: "sm",
			markdownClassName: ql
		})
	});
}
//#endregion
//#region src/context/hotkeyScope.tsx
var Yl = ".pc-cashier__root", Xl = qt(null);
function Zl({ children: e, rootRef: t }) {
	return /* @__PURE__ */ Q(Xl.Provider, {
		value: t,
		children: e
	});
}
var Ql = () => Qt(Xl), $l = /* @__PURE__ */ new Set(["Backspace"]), eu = (e) => {
	let t = e.querySelectorAll(Yl);
	return t.length === 1 ? t[0] : null;
}, tu = (e) => e instanceof Node ? e.ownerDocument : typeof document > "u" ? null : document, nu = (e, t) => (typeof e.composedPath == "function" ? e.composedPath() : []).includes(t) ? !0 : e.target instanceof Node && t.contains(e.target), ru = (e, t, n) => {
	if (n?.current) return n.current;
	let r = t?.current?.closest(".pc-cashier__root") ?? null;
	if (r) return r;
	let i = tu(e.target);
	return i ? eu(i) : null;
}, iu = (e, t, n) => {
	let r = ru(e, t, n);
	return !r || nu(e, r);
}, au = (e) => (t) => {
	let { key: n } = t;
	return $l.has(n) ? !0 : e === "numeric" ? Dt.test(n) : e === "decimal" ? n === "." || n === "," || Dt.test(n) : e === "alphanumeric" ? Ht.test(n) : e === "alphabetic" ? At.test(n) : n.length === 1;
}, ou = (e, t) => e instanceof HTMLElement && !!(t?.current && e === t.current || e.isContentEditable || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement), su = ({ inputRef: e, onType: t, shouldHandleKey: n, isEventTargetInteractive: r, inputType: i = "text", onBack: a, backKey: o }) => {
	let s = e !== void 0 && t !== void 0, c = o ?? "Escape", l = Ql(), u = Y(() => {
		if (s) return n || au(i);
	}, [
		s,
		i,
		n
	]);
	J(() => {
		if (!s && !a) return;
		let n = (n) => {
			if (!iu(n, e, l)) return;
			let i = e?.current ?? null, o = r ? r(n.target) : ou(n.target, e);
			if (n.key === "Escape" && i && document.activeElement === i) {
				n.preventDefault(), i.blur();
				return;
			}
			if (n.key === c) {
				if (o) return;
				a && (n.preventDefault(), a());
				return;
			}
			s && i && u && (n.defaultPrevented || n.metaKey || n.ctrlKey || n.altKey || u(n) && (o || (n.preventDefault(), i.focus(), t(n))));
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
}, cu = /* @__PURE__ */ new Set([
	"auto",
	"scroll",
	"overlay"
]), lu = 60, uu = (e) => {
	let t = window.getComputedStyle(e);
	return cu.has(t.overflowY) || cu.has(t.overflow);
}, du = (e, t) => {
	let n = e.parentElement;
	for (; n && n !== t;) {
		if (uu(n)) return n;
		n = n.parentElement;
	}
	return t;
}, fu = (e) => ({ gridTemplateColumns: `repeat(${e.toString()}, minmax(0, 1fr))` }), pu = (e) => e ? e.getBoundingClientRect() : {
	top: 0,
	right: window.innerWidth,
	bottom: window.innerHeight,
	left: 0
}, mu = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && Number(t.opacity) !== 0;
}, hu = (e, t) => {
	let n = pu(e), r = t.ownerDocument, i = Array.from(r.querySelectorAll("[data-pc-scroll-obstruction=\"bottom\"]")), a = null;
	return i.forEach((e) => {
		if (e === t || e.contains(t) || t.contains(e) || !mu(e)) return;
		let r = e.getBoundingClientRect(), i = r.left < n.right && r.right > n.left, o = r.top < n.bottom && r.bottom > n.top;
		r.height <= 0 || r.width <= 0 || !i || !o || (a = a === null ? r.top : Math.min(a, r.top));
	}), a;
}, gu = (e, t, n = 0) => {
	let r = e.getBoundingClientRect(), i = pu(t), a = hu(t, e), o = a === null ? i.bottom : Math.min(i.bottom, a), s = Math.max(i.top, o - n);
	return r.top >= i.top && r.left >= i.left && r.bottom <= s && r.right <= i.right;
}, _u = (e) => Math.max(0, e.scrollHeight - e.clientHeight), vu = (e, t) => {
	let n = /* @__PURE__ */ new Set([e, t]), r = e.parentElement;
	for (; r && r !== t;) n.add(r), r = r.parentElement;
	return Array.from(n);
}, yu = (e, t) => {
	let n = e.getBoundingClientRect(), r = pu(t);
	return n.width > 0 && n.height > 0 && r.right > r.left && r.bottom > r.top;
}, bu = (e, t, n = 0) => !gu(e, t, n + _u(e)), xu = (e, t, n, r) => {
	let i = bu(t, n, r);
	return yu(t, n) ? i : !e.isIntersecting || e.intersectionRatio < 1 || i;
}, Su = ({ enabled: e, target: t, bottomMarginPx: n = 0, onFallbackActiveChange: r }) => {
	let i = yl(), [a, o] = Z(!1), s = X(!0), c = X(null), l = X(r), u = t !== null, d = t && i ? du(t, i) : null, f = e && u && d !== null, p = f && typeof IntersectionObserver > "u", m = f && yu(t, d) ? bu(t, d, n) : null, h = p || f && (m ?? a);
	tn(() => {
		l.current = r;
	}, [r]), tn(() => {
		c.current !== h && (c.current = h, l.current?.(h));
	}, [h]), J(() => (s.current = !0, () => {
		s.current = !1;
	}), []);
	let g = q(() => {
		if (!f || p || !s.current || !yu(t, d)) return;
		let e = bu(t, d, n);
		o((t) => t === e ? t : e);
	}, [
		d,
		n,
		f,
		p,
		t
	]);
	return tn(() => {
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
			o(xu(e, t, d, n));
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
		return vu(t, d).forEach((t) => {
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
function Cu({ domScope: e, items: t, enabled: n = !0, adaptive: r = !0, onFallbackActiveChange: i }) {
	let a = pe(), [o, s] = Z(null), c = n && t.length > 0, l = Su({
		enabled: c && r,
		target: o,
		bottomMarginPx: lu,
		onFallbackActiveChange: i
	}), u = Y(() => fu(t.length), [t.length]);
	return c ? /* @__PURE__ */ Q("div", {
		ref: s,
		"data-slot": `${e}-adaptive-controls-inline`,
		"aria-hidden": l ? "true" : void 0,
		inert: l ? !0 : void 0,
		className: m(a.className("adaptive-controls-inline", { slug: e }), "w-full", l && "h-px overflow-hidden opacity-0 pointer-events-none"),
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
function wu({ domScope: e, items: t, fixed: n, enabled: r = !0, onFallbackActiveChange: i }) {
	let a = r && t.length > 0, [o, s] = Z(!1), c = X(!1);
	bl("bottom", t, a && (n || o), { reserveSpace: n ? !0 : "compact" });
	let l = q((e) => {
		c.current !== e && (c.current = e, s(e), i?.(e));
	}, [i]);
	return n ? null : /* @__PURE__ */ Q(Cu, {
		domScope: e,
		items: t,
		enabled: a,
		onFallbackActiveChange: l
	});
}
//#endregion
//#region src/hooks/useBonusSelection.ts
var Tu = () => {
	let e = d()?.checkout, { selectedBonusCode: t, setCashierState: n, offers: r, selectedOfferId: i, selectOffer: a, checkoutState: o } = Qt(re), s = q((e) => {
		if (r !== void 0) {
			a?.(e);
			return;
		}
		n((t) => (t.selectedBonusCode ?? null) === e ? t : {
			...t,
			selectedBonusCode: e
		});
	}, [
		n,
		r,
		a
	]), c = q(() => {
		s(null);
	}, [s]), l = q((t) => {
		if (r !== void 0) {
			if (i || o?.phase !== "confirmed") return;
			let n = t.find((e) => e.preselected);
			n && e?.ensureDefault(n.code, (e) => a?.(e));
			return;
		}
		n((e) => {
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
}, Eu = (e, t) => {
	if (!e) return {
		min: "",
		max: ""
	};
	let n = (e) => e === void 0 ? "" : t(e) || e;
	return {
		min: n(e.min),
		max: n(e.max)
	};
}, Du = (e, t, n) => {
	if (!e || !ct(e)) return "";
	let r = ye(e.direction), a = e.value || "", o = t(a) || a;
	if (e.feeType === "percentage") {
		let e = `${a}%`;
		return r ? `${r}${e}` : e;
	}
	let s = i(e, 0, {
		feeCurrencyFormatter: n,
		formatCurrencyValue: t
	});
	return r && s ? s : r ? s || `${r}${o}` : o;
}, Ou = ({ min: e, max: t }) => e && t ? `${e} - ${t}` : e || t || "";
function ku({ limits: e, fee: t, extraItems: n = [], rowGap: r = "tight", align: i = "center", truncate: a = !1, className: o }) {
	let { uiShowFees: s } = Qt(re), { translateKey: l } = c(), { currencyFormatter: u, formatCurrencyValue: d, formatDisplayValue: f } = Tt(), p = f ?? (() => ""), h = d ?? f, g = a, _ = j(u ?? null), v = Eu(e, p), y = Du(t, h ?? p, _), b = Ou(v), x = l("field.fee.label"), S = s && y ? `${y} ${x}` : "", C = [
		b ? {
			id: "limits",
			value: b
		} : null,
		S ? {
			id: "fee",
			value: S
		} : null,
		...n
	].filter((e) => !!e);
	return C.length === 0 ? null : /* @__PURE__ */ Q("div", {
		className: m(g ? "min-w-0 line-clamp-2 leading-tight @md:leading-snug" : "flex flex-wrap items-center leading-tight @md:leading-snug", !g && (r === "normal" ? "gap-y-1.5" : "gap-y-0.5"), i === "left" ? "justify-start text-left" : "justify-center text-center", o),
		children: C.map((e, t) => {
			let n = g && t > 0, r = !g && t < C.length - 1, i = /* @__PURE__ */ $(an, { children: [e.label && /* @__PURE__ */ $(an, { children: [/* @__PURE__ */ Q("span", {
				className: "font-medium",
				children: e.label
			}), ": "] }), /* @__PURE__ */ Q("span", { children: e.value })] });
			return /* @__PURE__ */ $("span", {
				"data-payment-meta-item": e.id,
				"data-theme": e.id === "bonus" ? "success" : void 0,
				className: m("inline-flex items-center whitespace-nowrap", e.id === "bonus" && "text-[var(--pc-color-text)]"),
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
function Au({ limits: e, fee: t, extraItems: n, align: r = "left", rowGap: i, truncate: a, className: o }) {
	return /* @__PURE__ */ Q(ku, {
		limits: e,
		fee: t,
		extraItems: n,
		align: r,
		rowGap: i,
		truncate: a,
		className: m(["text-xs @sm:text-sm text-[var(--pc-color-text-muted)]"].join(" "), o)
	});
}
//#endregion
//#region src/ui/PaymentTypeListItem.tsx
function ju({ children: e, placement: t = "item", isGrid: n = !1, id: r, dataSlot: i = "payment-list-item-actions", domClassName: a, onClick: o, onKeyDown: s }) {
	let c = Ut.toArray(e).filter(Boolean);
	return c.length === 0 ? null : /* @__PURE__ */ Q("div", {
		id: r,
		"data-slot": i,
		className: m(a, "flex items-center justify-end gap-1", n ? "absolute right-2 top-2" : (() => {
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
var Mu = (e, t) => !t || e == null ? e : Ut.map(e, (e) => {
	if (!Xt(e)) return e;
	let n = e.props, r = n.children === void 0 ? n.children : Mu(n.children, t);
	return e.type === ee ? Kt(e, {
		appearance: "ghost",
		children: r
	}) : r === n.children ? e : Kt(e, { children: r });
});
function Nu({ name: e, nameKeys: t, selectionId: r, presentationPaymentType: i, domSlug: a, logo: o, logoContent: l, logoContentPresentation: d = "mark", logoCompact: p, logoSurface: h = "paymentTypeLogo", limits: _, fee: v, onSelect: y, listStyle: b, compact: S, variant: C = "neutral", appearance: w = "solid", shape: E = "default", showMeta: O = !1, title: k, description: A, descriptionPresentation: te = "description", meta: j, metaPlacement: M = "content", isSelected: N = !1, showSelectedIndicator: P = !0, bonusLabel: ne = null, badges: F, hasAvailableBonuses: I, interactive: L = !0, includeDataTheme: ie = !0, hoverMode: R = "self", themeSlot: z, isDisabled: B = !1, isUnavailable: V = !1, balanceLogo: oe = !0, density: ce = "default", embedded: le = !1, embeddedSurfacePosition: H = "middle", actions: ue, actionsAlignment: de = "item", interactiveSurface: fe = "item", section: me, actionStopsPropagation: he = !0, ariaLabel: ge, ariaExpanded: _e, ariaControls: ve, className: ye, animationClassName: be, animationStyle: xe, infoDrawer: Se }) {
	let Ce = pe(), we = tt(), { resolveTextKey: Te, resolveTextKeys: U, translateKey: Ee, translateKeys: De } = c(), { formatCurrencyValue: Oe } = Tt(), { uiListStyle: ke, bonuses: Ae, uiBonuses: je, uiBonusesStyle: Me, uiBonusesAvailable: Pe, uiShowFees: Fe, currency: Ie } = Qt(re), { selectPaymentType: Re } = qe(), [Be, Ve] = Z(!1), He = L && !B, Ge = k ?? e, Ke = k === void 0 ? De(t ?? e) : Ee(k), Je = Ge.trim().length > 0, Ye = A ? Ee(A) : null, Xe = typeof A == "string" && A.trim().length > 0, Ze = Ee("aria.logo"), Qe = b ?? ke, $e = Qe === n.GRID, et = !!S, nt = p ?? et, rt = ce === "compact", at = E === "rounded", ot = D(C), st = ie && !le, ct = !st || ot === void 0, lt = Ce.token(a ?? e, "item"), ut = r ?? e, dt = i ? Nt({
		paymentType: i,
		id: ut,
		label: k === void 0 ? U(t ?? e) : Mt(Ke),
		description: A ? Te(A) : void 0,
		currency: Ie,
		formatMoney: Oe,
		minimumLabel: Te("field.limits.min.label"),
		maximumLabel: Te("field.limits.max.label"),
		selected: N,
		disabled: B,
		unavailable: V
	}) : null, ft = q(() => {
		if (He) {
			if (y) {
				y(ut);
				return;
			}
			if (Re(ut), je && T(Me) && (I ?? Ue(Ae))) {
				we({ to: "/bonus" });
				return;
			}
			we({
				to: "/pt/$id",
				params: { id: ut }
			});
		}
	}, [
		Ae,
		I,
		He,
		we,
		y,
		ut,
		Re,
		je,
		Me
	]), pt = (e) => {
		He && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ft());
	}, mt = q((e) => {
		e.stopPropagation(), Ve(!0);
	}, []), ht = q(() => {
		Ve(!1);
	}, []), gt = Pe ? ne : null, _t = $e ? [...F ?? [], ...gt ? [{
		id: "bonus",
		label: gt
	}] : []] : [], vt = et ? "gap-2.5 @md:gap-3" : at ? "gap-2 @lg:gap-2.5" : "gap-3", yt = et ? "py-2 px-2 @md:px-3" : at ? m(rt ? "py-2" : "py-2.5", rt ? "px-3" : "px-3.5") : "p-2", bt = (() => {
		switch (H) {
			case "first": return "pt-0 pb-2.5";
			case "last": return "pt-2.5 pb-0";
			case "only": return "py-0";
			default: return "py-2.5";
		}
	})(), xt = $e ? "p-2 gap-0.5" : le && !et && !at ? m("px-0", bt, "gap-2.5") : m(le ? m("px-0", bt) : yt, vt), St = $e ? null : et ? ["[--pc-payment-list-item-content-inset:3.125rem]", "@md:[--pc-payment-list-item-content-inset:3.25rem]"].join(" ") : at ? [
		"[--pc-payment-list-item-content-inset:2.75rem]",
		"@sm:[--pc-payment-list-item-content-inset:3.5rem]",
		"@lg:[--pc-payment-list-item-content-inset:3.625rem]",
		"@xl:[--pc-payment-list-item-content-inset:4.625rem]"
	].join(" ") : ["[--pc-payment-list-item-content-inset:3rem]", "@sm:[--pc-payment-list-item-content-inset:3.75rem]"].join(" "), Ct = $e ? "aspect-square flex-col justify-around" : et ? "items-center justify-between" : "justify-between @md:justify-around", wt = O || !!ne, W = He || R === "group" ? "transition-[background-color] duration-[250ms] ease-out" : null, G = z === "payment-types-accordion-header", Et = z === "payment-type-picker", K = z === "bonus-picker", Dt = G ? "hover:text-[var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : Et ? "hover:text-[var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : K ? "hover:text-[var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "hover:text-[var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))]", Ot = G ? "active:text-[var(--pc-color-accordion-header-text-active,var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Et ? "active:text-[var(--pc-color-payment-type-picker-text-active,var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : K ? "active:text-[var(--pc-color-bonus-picker-text-active,var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : "active:text-[var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))]", kt = Dt.replace(/^hover:/u, "group-hover:"), At = Ot.replace(/^active:/u, "group-active:"), jt = G ? N ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : Et ? N ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : K ? N ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))]" : "text-[var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : N ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))]", Pt = G ? N ? "[background:var(--pc-color-accordion-header-background-selected,var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : Et ? N ? "[background:var(--pc-color-payment-type-picker-background-selected,var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : K ? N ? "[background:var(--pc-color-bonus-picker-background-selected,var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))]" : "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : N ? "[background:var(--pc-color-list-item-background-selected,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]" : "[background:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", Ft = G ? "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : Et ? "[background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : K ? "[background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))]" : "bg-[var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent)))]", It = G ? "[background:var(--pc-color-accordion-header-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : Et ? "[background:var(--pc-color-payment-type-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : K ? "[background:var(--pc-color-bonus-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))]" : "[background:var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest)))]", Lt = G ? "border-[var(--pc-color-accordion-header-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : Et ? "border-[var(--pc-color-payment-type-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : K ? "border-[var(--pc-color-bonus-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))]" : "border-[var(--pc-color-list-item-border,var(--pc-color-border))]", Rt = G ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : Et ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : K ? "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-list-item,var(--pc-radius-lg))]", zt = G ? "rounded-[var(--pc-radius-accordion-header,var(--pc-radius-payment-picker,var(--pc-radius-full)))]" : "rounded-[var(--pc-radius-payment-picker,var(--pc-radius-full))]", Bt = null;
	!le && G ? Bt = "[--pc-radius-panel:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !le && Et ? Bt = "[--pc-radius-panel:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : !le && K ? Bt = "[--pc-radius-panel:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : le || (Bt = "[--pc-radius-panel:var(--pc-radius-list-item,var(--pc-radius-lg))]");
	let Vt = G ? "outline-3 outline-[var(--pc-color-accordion-header-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : Et ? "outline-3 outline-[var(--pc-color-payment-type-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : K ? "outline-3 outline-[var(--pc-color-bonus-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))]" : "outline-3 outline-[var(--pc-color-list-item-border-selected,var(--pc-color-secondary))]", Ht = G ? N ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : Et ? N ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : K ? N ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))]" : "text-[var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))]" : N ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text))))]" : "text-[var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))]", Ut = G ? "text-[var(--pc-color-accordion-header-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : Et ? "text-[var(--pc-color-payment-type-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : K ? "text-[var(--pc-color-bonus-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted))]", Wt = G ? N ? "text-[var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : Et ? N ? "text-[var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : K ? N ? "text-[var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))]" : "text-[var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : N ? "text-[var(--pc-color-list-item-text-selected,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))]" : "text-[var(--pc-color-list-item-description-text,var(--pc-color-text-muted))]", Gt = R === "group" ? G ? [
		"group-hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		kt,
		"group-active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		At
	].join(" ") : Et ? [
		"group-hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		kt,
		"group-active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		At
	].join(" ") : K ? [
		"group-hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		kt,
		"group-active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		At
	].join(" ") : [
		"group-hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		kt,
		"group-active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		At
	].join(" ") : R === "self" && He ? G ? [
		"hover:[background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Dt,
		"active:[background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Ot
	].join(" ") : Et ? [
		"hover:[background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Dt,
		"active:[background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Ot
	].join(" ") : K ? [
		"hover:[background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Dt,
		"active:[background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))]",
		Ot
	].join(" ") : [
		"hover:[background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))]",
		Dt,
		"active:[background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))]",
		Ot
	].join(" ") : null, Kt = (() => {
		if (le) return m("bg-transparent", jt);
		switch (w) {
			case "ghost": return m("bg-transparent", jt);
			case "outline": return m("border", Lt, Ft, jt);
			case "muted": return m(It, jt);
			default: return m(Pt, jt);
		}
	})(), qt = !!(ue || Se), Jt = !(!j || M !== "full-row" || $e), Yt = !!me?.content && !$e, Xt = Yt && fe === "main", Zt = Yt && fe === "content", J = He && !Xt && !Zt, $t = J || R === "group", en = He && Xt, tn = He && Zt, Y = (B || V) && ot !== "danger", nn = V && !B && Yt && ot !== "danger", X = $e ? "[--pc-payment-list-item-inline-padding:0.5rem]" : le && !et && !at ? "[--pc-payment-list-item-inline-padding:0rem]" : et ? ["[--pc-payment-list-item-inline-padding:0.5rem]", "@md:[--pc-payment-list-item-inline-padding:0.75rem]"].join(" ") : at ? rt ? "[--pc-payment-list-item-inline-padding:0.75rem]" : "[--pc-payment-list-item-inline-padding:0.875rem]" : "[--pc-payment-list-item-inline-padding:0.75rem]", rn = m("flex w-full min-w-0 overflow-hidden", Yt ? "flex-col" : $e ? "flex-col items-center" : "flex-row items-center", Bt, Kt, qt && "relative", !le && (at ? zt : Rt), J && "group cursor-pointer", !He && "cursor-default", !Yt && Jt && "flex-wrap", Yt && "gap-y-0", $t && W, $t && Gt, St, X, Zt && ["[--pc-payment-list-item-panel-action-inset:1.25rem]"], Y && !nn && [
		"opacity-55",
		"[filter:saturate(0.72)_grayscale(0.18)]",
		"[--pc-enter-final-opacity:0.55]"
	].join(" "), !Yt && xt, !Yt && Ct, be, ye), on = m(Yt && [
		"flex w-full min-w-0",
		Zt ? "p-2" : "overflow-hidden items-center",
		en && "group cursor-pointer",
		en && W,
		en && Gt,
		!Zt && xt,
		!Zt && Ct,
		nn && ["opacity-55", "[filter:saturate(0.72)_grayscale(0.18)]"].join(" ")
	]), sn = m($e ? "p-2 gap-0.5" : "py-2 px-3 gap-2 @lg:gap-2.5"), cn = Et ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-panel,var(--pc-radius-lg)))]", ln = Et ? "border-t border-[var(--pc-color-payment-type-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : K ? "border-t border-[var(--pc-color-bonus-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))]" : "border-t border-[var(--pc-color-list-item-divider,var(--pc-color-depth-3))]", un = m(Zt && [
		"flex w-full min-w-0 overflow-hidden items-center",
		at ? zt : cn,
		tn && "group cursor-pointer",
		tn && W,
		tn && Gt,
		sn,
		Ct
	]), dn = $e ? "text-center" : "text-left", fn = m("w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", B || V ? Ut : Ht, !B && !V && kt, !B && !V && At, $e ? "break-words" : "truncate", dn), pn = m("flex min-w-0 flex-col", $e ? "items-center w-full" : "items-start flex-1"), mn = wt ? /* @__PURE__ */ Q(Au, {
		limits: _,
		fee: v,
		align: $e ? "center" : "left",
		rowGap: $e ? void 0 : "normal",
		extraItems: gt && !$e ? [{
			id: "bonus",
			value: gt
		}] : void 0
	}) : null, hn = !!(O && (_?.min || _?.max || Fe && v?.value)), gn = !!(Xe || hn || j), _n = $e && _t.length > 0 ? /* @__PURE__ */ Q("div", {
		className: m("flex flex-wrap justify-center gap-1 text-center", gn && "-mt-0.5"),
		children: _t.map((e) => /* @__PURE__ */ Q("span", {
			"data-theme": D(e.variant ?? "success"),
			className: m("inline-flex items-center rounded-[var(--pc-radius-full)] px-2.5 py-1 text-xs font-medium leading-tight", e.variant === "neutral" ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", e.id !== "bonus" && "italic"),
			children: e.label
		}, e.id))
	}) : null, vn = !!(Xe || mn || M === "content" && j || _n), yn = te === "lone-body" && Xe && !Je && !(hn || gt !== null && !$e) && !(M === "content" && j) && !_n, bn = null;
	vn ? bn = /* @__PURE__ */ $(x, {
		className: pn,
		children: [
			Je && /* @__PURE__ */ Q("h3", {
				className: m(Ce.className("payment-list-item-title", { slug: lt }), fn),
				children: /* @__PURE__ */ Q(We, { children: Ke })
			}),
			Xe && /* @__PURE__ */ Q("p", {
				className: m(Ce.className("payment-list-item-description", { slug: lt }), yn ? "text-sm @sm:text-base @md:leading-tight" : "text-xs @sm:text-sm @md:leading-tight", Wt, kt, At, dn),
				children: /* @__PURE__ */ Q(We, { children: Ye })
			}),
			mn,
			M === "content" && j,
			_n
		]
	}) : Je && (bn = /* @__PURE__ */ Q("h3", {
		className: m(Ce.className("payment-list-item-title", { slug: lt }), fn),
		children: /* @__PURE__ */ Q(We, { children: Ke })
	}));
	let xn = Se ? {
		label: Ee(Se.ariaLabelKey ?? Se.titleKey),
		title: /* @__PURE__ */ Q(We, { children: Ee(Se.titleKey) }),
		icon: Se.icon ?? /* @__PURE__ */ Q(Ne, {})
	} : null, Sn = xn ? /* @__PURE__ */ Q(ee, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": xn.label,
		onClick: mt,
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		iconOnly: !0,
		label: xn.label,
		leadingIcon: xn.icon
	}) : null, Cn = Mu(ue, et), wn = q((e) => {
		he && e.stopPropagation();
	}, [he]), Tn = q((e) => {
		he && e.stopPropagation();
	}, [he]), En = /* @__PURE__ */ $(ju, {
		id: Ce.id("payment-list-item-actions", { slug: lt }),
		domClassName: Ce.className("payment-list-item-actions", { slug: lt }),
		isGrid: $e,
		placement: de,
		onClick: wn,
		onKeyDown: Tn,
		children: [Sn, Cn]
	}), Dn = Jt ? /* @__PURE__ */ Q("div", {
		"data-slot": "payment-list-item-full-row-meta",
		className: m(Ce.className("payment-list-item-full-row-meta", { slug: lt }), "basis-full min-w-0"),
		children: j
	}) : null, On = Yt ? /* @__PURE__ */ Q("div", {
		"data-slot": "payment-list-item-section",
		onClick: (e) => {
			e.stopPropagation();
		},
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		className: m(Ce.className("payment-list-item-section", { slug: lt }), "basis-full min-w-0", (me?.width ?? "content-aligned") === "full" ? ["w-full", Zt ? ["pl-[var(--pc-payment-list-item-panel-action-inset)]", "pr-[var(--pc-payment-list-item-panel-action-inset)]"] : "px-[var(--pc-payment-list-item-inline-padding)]"] : ["ml-[var(--pc-payment-list-item-content-inset)]", "w-[calc(100%-var(--pc-payment-list-item-content-inset))]"], me?.border && [ln, "py-3"]),
		children: me?.content
	}) : null, kn = xn ? /* @__PURE__ */ Q(Bl, {
		isOpen: Be,
		onClose: ht,
		title: xn.title,
		children: /* @__PURE__ */ Q("div", {
			className: "px-5 pb-5 pt-2",
			children: Se?.content
		})
	}) : null, An = $e ? "grid" : "list", jn = [Ke, Ze].filter((e) => typeof e == "string" && e.length > 0).join(" "), Mn = Ce.attrs("payment-type-logo", { slug: lt }), Nn = Ce.attrs("payment-type-logo-content", { slug: lt }), Pn = d === "inline-control", Fn = l ? /* @__PURE__ */ Q("div", {
		id: Ce.id("payment-type-logo", { slug: lt }),
		...Mn,
		className: m(Mn.className, Pn ? "flex shrink-0 items-center justify-center" : [se(h, An), u({
			layout: An,
			compact: nt
		})]),
		children: /* @__PURE__ */ Q("span", {
			...Nn,
			className: m(Nn.className, "flex items-center justify-center", !Pn && f({
				layout: An,
				compact: nt
			})),
			children: l
		})
	}) : /* @__PURE__ */ Q(ae, {
		id: Ce.id("payment-type-logo", { slug: lt }),
		logo: o,
		alt: jn,
		seed: e,
		rootAttributes: Mn,
		contentClassName: Nn.className,
		surface: h,
		listStyle: Qe,
		compact: nt,
		balanceLogo: oe
	}), In = (e) => ({
		onClick: e ? ft : void 0,
		onKeyDown: e ? pt : void 0,
		role: e ? "button" : void 0,
		tabIndex: e ? 0 : void 0,
		"aria-label": e ? ge : void 0,
		"aria-expanded": e ? _e : void 0,
		"aria-controls": e ? ve : void 0,
		"aria-disabled": e && B ? !0 : void 0
	}), Ln = le && !$e && !He && !et && !at && !B && !V && !N && !z && !Yt && Je && te === "description", Rn;
	Rn = Ln ? /* @__PURE__ */ Q(g, {
		leading: Fn,
		title: /* @__PURE__ */ Q(We, { children: Ke }),
		description: Xe ? /* @__PURE__ */ Q(We, { children: Ye }) : void 0,
		meta: /* @__PURE__ */ $(an, { children: [
			mn,
			M === "content" && j,
			_n
		] }),
		domSlug: lt
	}) : le && !$e ? /* @__PURE__ */ Q(it, {
		leading: Fn,
		children: bn
	}) : /* @__PURE__ */ $(an, { children: [Fn, bn] });
	let zn = /* @__PURE__ */ $(an, { children: [
		dt ? /* @__PURE__ */ Q(ze, {
			id: "paymentTypeItem",
			model: dt,
			actions: s,
			children: Rn
		}) : Rn,
		En,
		Dn
	] }), Bn = Ce.attrs("payment-list-item", { slug: lt }), Vn = Ce.attrs("payment-list-item-main", { slug: lt }), Hn = Ce.attrs("payment-list-item-main-trigger", { slug: lt }), Un = In(J), Wn = In(en), Gn = In(tn);
	return /* @__PURE__ */ $(an, { children: [/* @__PURE__ */ $(Le, {
		as: "div",
		id: Ce.id("payment-list-item", { slug: lt }),
		"data-pc-slot": Bn["data-pc-slot"],
		"data-pc-slug": Bn["data-pc-slug"],
		onClick: Un.onClick,
		onKeyDown: Un.onKeyDown,
		role: Un.role,
		tabIndex: Un.tabIndex,
		"aria-label": Un["aria-label"],
		"aria-expanded": Un["aria-expanded"],
		"aria-controls": Un["aria-controls"],
		"aria-disabled": B || void 0,
		dataTheme: st ? ot : void 0,
		inheritTheme: ct,
		appearance: w,
		chrome: !1,
		spacing: "flush",
		style: xe,
		className: m(Bn.className, rn, $e && "relative", N && P && [
			"[outline-style:solid]",
			Vt,
			"outline-offset-[2.5px]"
		].join(" ")),
		children: [Yt ? /* @__PURE__ */ Q("div", {
			"data-slot": "payment-list-item-main",
			"data-pc-slot": Vn["data-pc-slot"],
			"data-pc-slug": Vn["data-pc-slug"],
			onClick: Wn.onClick,
			onKeyDown: Wn.onKeyDown,
			role: Wn.role,
			tabIndex: Wn.tabIndex,
			"aria-label": Wn["aria-label"],
			"aria-expanded": Wn["aria-expanded"],
			"aria-controls": Wn["aria-controls"],
			"aria-disabled": Wn["aria-disabled"],
			className: m(Vn.className, on),
			children: Zt ? /* @__PURE__ */ Q("div", {
				"data-slot": "payment-list-item-main-trigger",
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
				className: m(Hn.className, un),
				children: zn
			}) : zn
		}) : zn, On]
	}), kn] });
}
//#endregion
//#region src/ui/SelectableListLayout.tsx
function Pu({ children: e, id: t, className: r, rootAttributes: i, contentClassName: a, contentAttributes: o, contentStyle: s, listStyle: c, compact: l, stacked: u = !1 }) {
	let { uiListStyle: d } = Qt(re), f = (c ?? d) === n.GRID, p = u || l || !f;
	return /* @__PURE__ */ Q("div", {
		...i,
		id: t,
		className: m(i?.className, r),
		children: /* @__PURE__ */ Q("div", {
			...o,
			className: m("gap-1.5", p ? "grid grid-cols-1" : "grid grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4", o?.className, a),
			style: s,
			children: e
		})
	});
}
//#endregion
//#region src/ui/BonusTerms.tsx
function Fu({ termsKey: e }) {
	let { translateKey: t } = c(), n = t(e);
	return n ? /* @__PURE__ */ Q(ot, {
		content: n,
		className: "text-[var(--pc-color-text-muted)]"
	}) : null;
}
//#endregion
//#region src/ui/BonusCloseNotice.tsx
function Iu({ reasons: e, align: t = "left", tone: n = "hint" }) {
	let { translateKey: r } = c(), { formatCurrencyValue: i } = Tt(), a = Y(() => e.map((e, t) => ({
		key: `${e.type}-${"delta" in e ? String(e.delta) : String(t)}`,
		label: we(e, r, i)
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
var Lu = "bonus.terms.title", Ru = "__cashier_bonus_skip__", zu = "skip";
function Bu({ bonuses: e, selectedBonusCode: t, onSelect: r, onSkip: i, selectable: a = !0, showSkipOption: o = !1, isSkipSelected: s = !1, listStyle: l, compact: u, stacked: d = !1, itemVariant: f = "neutral", itemAppearance: p = "solid", domScope: m, animateItems: h = !1, closeReasonPlacement: g = "meta", themeSlot: _ }) {
	let v = pe(), { uiListStyle: y, checkoutState: b } = Qt(re), { translateKey: x } = c(), { formatCurrencyValue: S } = Tt(), C = G(l ?? y), w = C === n.GRID, T = m ? v.token(m, "list") : null, ee = T ? v.id("bonus-list", { slug: T }) : void 0, E = { staggerMode: "compressed-tail" }, D = [...o && e.some(({ status: e }) => e === "available") ? [{ type: "skip" }] : [], ...e.map((e) => ({
		type: "bonus",
		availability: e
	}))];
	return /* @__PURE__ */ Q(Pu, {
		id: ee,
		rootAttributes: v.attrs("bonus-list", T ? { slug: T } : void 0),
		className: "w-full",
		contentAttributes: v.attrs("bonus-list-content", T ? { slug: T } : void 0),
		contentClassName: h ? Cc : void 0,
		contentStyle: h ? Rc(E) : void 0,
		listStyle: C,
		compact: u,
		stacked: d,
		children: D.map((e, n) => {
			if (e.type === "skip") return /* @__PURE__ */ Q(Nu, {
				domSlug: zu,
				name: Ru,
				title: "",
				description: "bonus.interactive_prompt.no_bonus",
				logoContent: /* @__PURE__ */ Q(wt, { className: "h-full w-full" }),
				logoSurface: "bonusLogo",
				listStyle: C,
				compact: u,
				onSelect: i ? () => {
					i();
				} : void 0,
				isSelected: a && s,
				interactive: !!i,
				hoverMode: a ? "none" : void 0,
				variant: f,
				appearance: p,
				themeSlot: _,
				animationClassName: h ? wc : void 0,
				animationStyle: h ? Lc(n, D.length, "forward", E) : void 0
			}, Ru);
			let { bonus: o, status: c, reasons: l } = e.availability, d = c !== "available", m = w && d ? l.map((e, t) => ({
				id: `bonus-reason-${o.code}-${String(t)}`,
				label: we(e, x, S),
				variant: c === "close" ? "success" : "neutral"
			})).filter((e) => !!e.label) : [], v = !w && d && (c === "close" || g === "meta") ? /* @__PURE__ */ Q(Iu, {
				reasons: l,
				tone: c === "close" ? "hint" : "neutral"
			}) : null, y = !w && d && c !== "close" && g === "info" ? /* @__PURE__ */ Q(Iu, {
				reasons: l,
				tone: "neutral"
			}) : null, T = o.termsAndConditions, ee = v ? /* @__PURE__ */ Q("div", {
				className: "flex flex-col gap-1",
				children: v
			}) : null, O = T || y ? {
				titleKey: Lu,
				content: /* @__PURE__ */ $("div", {
					className: "flex flex-col gap-3",
					children: [y, T && /* @__PURE__ */ Q(Fu, { termsKey: T })]
				})
			} : void 0;
			return /* @__PURE__ */ Q(Nu, {
				domSlug: o.code,
				name: o.code,
				title: o.title,
				description: o.description,
				logo: o.logo,
				logoSurface: "bonusLogo",
				listStyle: C,
				compact: u,
				onSelect: d ? void 0 : r,
				isSelected: a && (b?.phase === "pending" ? b.requestedOfferId : t) === o.code,
				interactive: !d,
				isDisabled: d,
				hoverMode: a ? "none" : void 0,
				meta: ee,
				badges: m.length > 0 ? m : void 0,
				infoDrawer: O,
				variant: f,
				appearance: p,
				themeSlot: _,
				animationClassName: h ? wc : void 0,
				animationStyle: h ? Lc(n, D.length, "forward", E) : void 0
			}, o.code);
		})
	});
}
//#endregion
//#region src/utils/interactivePrompt.tsx
function Vu(e, t, n) {
	if (!t) return;
	let r = e(t);
	if (r && r !== t) return Object.entries(n ?? {}).reduce((e, [t, n]) => je(e, t, n), r);
}
function Hu(e, t, n, r) {
	return Vu(e, t, r) ?? n;
}
function Uu(e, t, n, r) {
	if (!t) return n;
	let i = e(t);
	return !i || i === t ? n : r ? he(i, r) : i;
}
var Wu = (e) => /* @__PURE__ */ Q(xe, { className: e }), Gu = ({ translateKey: e }) => ({
	legacyTitle: e("cta.choose_payment_type"),
	titleKey: "cta.interactive_prompt.choose_payment_type.title",
	bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
	icon: Wu()
}), Ku = ({ translateKey: e }) => ({
	legacyTitle: e("payment.enter_details"),
	titleKey: "payment.interactive_prompt.enter_details",
	bodyKey: "interactive_prompt.payment_details.form.body",
	icon: /* @__PURE__ */ Q(et, {})
}), qu = (e) => e.toFixed(2).replace(/\.?0+$/, "");
//#endregion
//#region src/components/InteractivePromptHeader.tsx
function Ju({ content: e, forceVisible: t = !1, className: n }) {
	let { uiInteractivePrompts: r, uiPaymentMethodSwitcher: i, uiUserBalance: a, debug: o } = Qt(re), { translateKey: s } = c(), l = Y(() => (e?.actions ?? []).flatMap((e) => {
		let t = o && e.labelKey ? e.labelKey : Hu(s, e.labelKey, e.legacyLabel);
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
	let u = Hu(s, e.titleKey, e.legacyTitle, e.titleValues) ?? e.legacyTitle, d = o && e.titleKey ? e.titleKey : u;
	e.preferLegacyTitle && e.legacyTitle && (u = e.legacyTitle, d = e.legacyTitle), o && e.titleKey && (u = e.titleKey, d = e.titleKey);
	let f = o && e.bodyKey ? e.bodyKey : Uu(s, e.bodyKey, e.legacyBody, e.bodyValues) ?? e.legacyBody;
	return e.preferLegacyBody && e.legacyBody && (f = e.bodyValues ? Pe(e.legacyBody, e.bodyValues) : e.legacyBody), /* @__PURE__ */ Q(H, {
		className: m(!i && !a && "pt-1.5 @sm:pt-2", n),
		title: d,
		titleText: u,
		body: f,
		meta: e.meta,
		icon: e.icon,
		iconSlotClassName: e.iconSlotClassName,
		trailingVisual: e.trailingVisual,
		footer: e.footer,
		actions: l,
		actionsOffsetClassName: e.actionsOffsetClassName,
		tone: e.tone,
		appearance: e.appearance,
		size: e.size,
		compact: e.compact
	});
}
//#endregion
//#region src/utils/bonusInteraction.ts
var Yu = .001, Xu = ({ amount: e, fullClaimAmount: t, claimPercentage: n }) => typeof e == "number" && typeof t == "number" ? e >= t - Yu : typeof n == "number" && n >= 99.999, Zu = (e) => typeof e != "number" || !Number.isFinite(e) ? "0" : String(Math.min(99, Math.round(e))), Qu = (e, t) => {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => e[n] === t[n]);
}, $u = (e, t) => !!e && e?.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount, ed = (e, t) => e === t ? !0 : !e || !t ? !1 : e.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount && e.hasHostedFields === t.hasHostedFields && Qu(e.values, t.values), td = (e, t, n) => $u(e, t) ? {
	...e,
	amount: n,
	values: {
		...e.values,
		amount: n
	}
} : e, nd = (e) => {
	let { payment: t, paymentStatusMessage: n, makePayment: r, isPaymentFailed: i, isPaymentPending: a, isPaymentSuccessful: o } = p(), s = Hl();
	return {
		makePayment: q((t, n) => r({
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
}, rd = (e) => typeof e == "string" ? e : typeof e == "boolean" ? String(e) : "", id = (e, t) => {
	let n = e.variantKeyFields, r = e.variants;
	if (!n?.length || !r?.length) return;
	let i = n.map((e) => rd(t[e]));
	if (!i.some((e) => e === "")) return r.find((e) => e.match.length === i.length && e.match.every((e, t) => e === i[t]));
}, ad = (e, t) => {
	if (!e.variantKeyFields?.length) return e;
	let n = id(e, t);
	return {
		...e,
		defaultValue: n?.defaultValue ?? e.defaultValue,
		notification: n?.notification ?? e.notification
	};
}, od = (e, t) => (e ?? []).map((e) => ad(e, t)), sd = ({ fieldId: e, label: t, value: n, translateKey: r }) => /* @__PURE__ */ Q("div", {
	"data-payment-field-display": e,
	children: /* @__PURE__ */ Q(ut, {
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
}), cd = "amount", ld = (e, t, n, r) => {
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
}, ud = ({ isAmountField: e, isCheckboxField: t, isInputField: n, isLastRenderableField: r, reserveInputMessageSpace: i, reserveCheckboxMessageSpace: a, reserveLastCheckboxMessageSpace: o, reserveLastAmountMessageSpace: s }) => e ? r && s : t ? r ? o : a : n && i, dd = ({ fields: e, translateKey: t, translateKeys: n, disabled: r = !1, amountError: i, amountFieldId: a = cd, renderBelowFieldContent: o, belowFieldContentClassName: s = dt, belowFieldContentInheritsTheme: c = !0, renderBeforeField: l, renderAfterField: u, renderAfterFieldRow: d, animateRows: f = !1, animationStartIndex: p = 0, animationTotalCount: m, animationDirection: h = "forward", reserveInputMessageSpace: g = !1, reserveCheckboxMessageSpace: _ = !1, reserveLastCheckboxMessageSpace: y = !1, reserveLastAmountMessageSpace: b = !1, addFirstFieldTopPadding: x = !0, addLastFieldBottomPadding: S = !0, allowReservedLastFieldBottomPadding: C = !1, reserveTrailingActionClearance: w = !1, submitUnrenderedFields: T = !1 }) => {
	let ee = pe(), { setFieldValue: E, setValues: D, values: O } = Ls(), k = le(), A = od(Se(e, O), O), te = Ae(_e(A, O), ft(e, O), me(e, O)), j = te.map((e) => `${e.fieldId}=${e.value}`).join("");
	J(() => {
		te.length !== 0 && D((e) => ({
			...e,
			...Object.fromEntries(te.map(({ fieldId: e, value: t }) => [e, t]))
		}), !1);
	}, [j]);
	let M = (e) => !!e.id && !e.hidden && lt(e, O).visible, N = A.findIndex(M), P = A.reduce((e, t, n) => M(t) ? n : e, -1);
	return /* @__PURE__ */ Q(an, { children: A.map((e, D) => {
		let A = e.id;
		if (!A) return null;
		let te = () => !T || !Object.hasOwn(O, A) ? null : /* @__PURE__ */ Q("input", {
			type: "hidden",
			name: A,
			value: Ct(O[A]),
			"data-payment-field-unrendered": A
		}, A);
		if (e.hidden) return te();
		let j = lt(e, O);
		if (!j.visible) return te();
		let M = k(A, "field"), ne = ee.id("payment-field", { slug: M }), re = D === N, F = D === P, I = d?.(A, { isLastRenderableField: F }), L = n(e.labelKeys ?? e.label ?? A), ie = Me(e.validation, n), ae = e.type, R = ae === "checkbox", z = ae === "select", B = ae === "display", V = ae === "qrcode", oe = A === a, se = !R && !z && !B && !V && !oe, ce = A === "iban" || !!ie?.iban?.value, le = !R && ce ? Pt : void 0, H = z || R ? {} : { formattingAdapter: le }, ue = ut;
		R ? ue = Ie : z && (ue = Ce);
		let de = (e) => {
			if (!oe) return;
			let t = O[A], n = v(typeof t == "string" ? t : "", e.currentTarget.value);
			E(A, n, !1);
		}, fe = e.placeholder ? t(e.placeholder) : void 0, pe = z ? O[A] : void 0, me = z ? ld(A, j.options ?? e.options, t, typeof pe == "string" && pe !== "" ? void 0 : fe ?? "") : null, he = oe ? i : void 0, ge = l?.(A), _e = o?.(A), ye = !!I, be = ud({
			isAmountField: oe,
			isCheckboxField: R,
			isInputField: se,
			isLastRenderableField: F,
			reserveInputMessageSpace: g,
			reserveCheckboxMessageSpace: _,
			reserveLastCheckboxMessageSpace: y,
			reserveLastAmountMessageSpace: b
		}) && !(oe && ye), xe = S && F && (!be || C) && !ye, Se = w && F && !ye, we;
		(Se || xe) && (we = Se ? "pb-4" : "pb-3");
		let Te = x && re ? "pt-3" : void 0, U;
		if (B) U = /* @__PURE__ */ Q(sd, {
			fieldId: A,
			label: L,
			value: e.defaultValue ?? "",
			translateKey: t
		});
		else if (V) {
			let t = e.defaultValue ?? "";
			U = t ? /* @__PURE__ */ Q("div", {
				"data-payment-field-qrcode": A,
				children: /* @__PURE__ */ Q(ve, {
					label: L,
					value: t,
					hideLabel: !0,
					reserveMessageSpace: !1
				})
			}) : null;
		} else U = oe ? /* @__PURE__ */ Q(lc, {
			label: L,
			id: ne,
			name: A,
			validation: ie,
			error: he,
			disabled: r,
			component: ue,
			onChange: de,
			belowFieldContent: _e,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			formattingAdapter: le,
			placeholder: fe,
			reserveMessageSpace: be,
			type: R || z ? void 0 : "text",
			inputMode: "numeric",
			pattern: "[0-9]*",
			children: z ? me : void 0
		}) : R ? /* @__PURE__ */ Q(lc, {
			label: L,
			id: ne,
			name: A,
			validation: ie,
			error: he,
			disabled: r,
			component: ue,
			belowFieldContent: _e,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			placeholder: fe,
			reserveMessageSpace: be,
			type: void 0
		}) : /* @__PURE__ */ Q(lc, {
			label: L,
			id: ne,
			name: A,
			validation: ie,
			error: he,
			disabled: r,
			component: ue,
			belowFieldContent: _e,
			belowFieldContentClassName: s,
			belowFieldContentInheritsTheme: c,
			...H,
			placeholder: fe,
			reserveMessageSpace: be,
			type: z ? void 0 : ae ?? "text",
			children: z ? me : void 0
		});
		let Ee = ee.attrs("payment-field-row", { slug: M }), De = f ? Ic({
			index: p + D,
			total: m,
			direction: h
		}) : void 0;
		return /* @__PURE__ */ $(Gt, { children: [/* @__PURE__ */ $("div", {
			"data-payment-field-row": A,
			id: ee.id("payment-field-row", { slug: M }),
			...Ee,
			className: [
				Ee.className,
				"flex flex-col w-full",
				Te,
				we,
				f ? Sc : void 0
			].filter(Boolean).join(" "),
			style: De,
			children: [
				ge,
				U,
				u?.(A, { isLastRenderableField: F })
			]
		}), I && /* @__PURE__ */ Q("div", {
			className: ["flex min-w-0 w-full flex-col", f ? "pc-enter-rise-item" : void 0].filter(Boolean).join(" "),
			style: De,
			children: I
		}, `${A}-after-row`)] }, A);
	}) });
};
//#endregion
//#region src/components/AmountErrorAlert.tsx
function fd({ message: e }) {
	return /* @__PURE__ */ Q("div", {
		role: "alert",
		className: "pl-3",
		children: /* @__PURE__ */ Q(Ju, {
			forceVisible: !0,
			content: {
				legacyTitle: e,
				preferLegacyTitle: !0,
				tone: "danger",
				icon: /* @__PURE__ */ Q(wt, {})
			}
		})
	});
}
//#endregion
//#region src/lib/hostedFieldLayout.ts
var pd = "pan", md = "expiryDate", hd = "csc", gd = (e) => e === hd || e === md, _d = (e) => typeof e.id == "string" && e.id.trim().length > 0, vd = (e) => {
	let t = (e.type ?? "text").trim().toLowerCase(), n = (e.options ?? []).length > 0;
	return t === "switcher" ? "switcher" : t === "checkbox" ? "toggle" : t === "select" || n ? "select" : "input";
}, yd = (e, t, n) => e === pd || !gd(e) ? "col-span-2" : t === n ? "col-span-1" : "col-span-2", bd = (e, t, n) => e === pd || !gd(e) ? 2 : t === n ? 1 : 2, xd = (e) => {
	let t = (e ?? []).filter(_d);
	if (t.length === 0) return 0;
	let n = t.some((e) => e.id === hd), r = t.some((e) => e.id === md), i = 0, a = 0;
	for (let e of t) {
		let t = bd(e.id, n, r);
		a + t > 2 && (i += 1, a = 0), a += t, a === 2 && (i += 1, a = 0);
	}
	return a > 0 && (i += 1), i;
}, Sd = ["relative z-10 grid min-w-0 grid-cols-2 items-start gap-x-2 gap-y-1 p-1"].join(" "), Cd = ["relative z-10 grid min-w-0 grid-cols-2 items-start gap-x-2 gap-y-1", "p-[var(--pc-size-input-focus-ring,3px)]"].join(" "), wd = ["flex min-h-[var(--pc-size-input-height,2.25rem)]", "w-full min-w-0 items-center"].join(" "), Td = ["[&:first-child]:flex-[1.7_1_10rem]", "[&:not(:first-child)]:flex-[0.7_1_4.25rem]"].join(" "), Ed = ["h-3.5 rounded-full translate-y-0.5", "[background:color-mix(in_srgb,var(--pc-color-input-text,var(--pc-color-text))_32%,var(--pc-color-input-background,var(--pc-color-surface)))]"].join(" "), Dd = ["box-border flex h-full w-full min-w-0 flex-col overflow-hidden"].join(" "), Od = "\xA0", kd = () => void 0, Ad = (e) => e.label?.trim() || e.id, jd = (e) => e.map((e) => e.id).join("-"), Md = (e) => Array.isArray(e), Nd = (e) => Array.isArray(e), Pd = (e) => {
	if (Md(e)) {
		let t = e.filter(_d);
		return t.length > 0 ? t : null;
	}
	return _d(e) ? e : null;
}, Fd = (e) => (e.options ?? []).map((t, n) => ({
	value: t.value || `${e.id}-${String(n)}`,
	label: t.label || t.value || `Option ${String(n + 1)}`
})), Id = (e, t, n) => {
	let r = vd(e), i = n.state === "error", a;
	i && (a = n.showErrorMessage ? n.errorMessage : Od);
	let o = n.showErrorMessage ? "truncate whitespace-nowrap" : "invisible whitespace-nowrap";
	if (r === "select") return /* @__PURE__ */ Q(Ce, {
		skeleton: !i,
		error: a,
		errorClassName: o,
		label: t,
		reserveMessageSpace: e.reserveMessageSpace === !0,
		children: Fd(e).map((e) => /* @__PURE__ */ Q("option", {
			value: e.value,
			children: e.label
		}, e.value))
	});
	if (r === "switcher") {
		let n = Fd(e);
		return /* @__PURE__ */ Q(S, {
			skeleton: !i,
			ariaLabel: t,
			value: n[0]?.value ?? e.id,
			onChange: kd,
			options: n.length > 0 ? n : [{
				value: e.id,
				label: t
			}]
		});
	}
	return r === "toggle" ? /* @__PURE__ */ Q(Ie, {
		skeleton: !i,
		error: a,
		errorClassName: o,
		label: t,
		reserveMessageSpace: e.reserveMessageSpace === !0
	}) : /* @__PURE__ */ Q(ut, {
		skeleton: !i,
		error: a,
		errorClassName: o,
		label: t,
		placeholder: e.placeholder,
		reserveMessageSpace: e.reserveMessageSpace === !0
	});
}, Ld = (e, t) => {
	let n = Ad(e), r = yd(e.id, t.hasCscField, t.hasExpiryField);
	return /* @__PURE__ */ Q("div", {
		"data-slot": "hosted-fields-layout-skeleton-item",
		"data-field-id": e.id,
		className: m("flex w-full min-w-0 flex-col whitespace-nowrap overflow-hidden", r),
		children: Id(e, n, t)
	}, e.id);
}, Rd = (e) => {
	switch (e.id) {
		case "expiryDate": return "w-3/5";
		case "csc": return "w-1/2";
		default: return "w-4/5";
	}
}, zd = (e) => /* @__PURE__ */ Q("div", {
	"data-slot": "hosted-fields-grouped-skeleton-control",
	"data-field-id": e.id,
	className: wd,
	children: /* @__PURE__ */ Q(He, { className: m(Ed, Rd(e)) })
}, e.id), Bd = (e, t) => /* @__PURE__ */ Q(ut, {
	error: t ?? Od,
	label: Ad(e),
	placeholder: e.placeholder
}, e.id);
function Vd({ fields: e, className: t, state: n = "loading", errorMessage: r }) {
	let i = n === "error", a = e.map(Pd).filter((e) => e !== null), o = a.flatMap((e) => Nd(e) ? e : [e]), s = a.some((e) => Nd(e) && e.length > 1), c = o.some((e) => e.id === "csc"), l = o.some((e) => e.id === "expiryDate"), u = i ? o[0]?.id : void 0;
	return /* @__PURE__ */ Q("div", {
		"aria-hidden": !i || void 0,
		"aria-label": i ? r : void 0,
		"data-slot": "hosted-fields-layout-skeleton",
		"data-state": n,
		role: i ? "alert" : void 0,
		className: m(Dd, t),
		children: /* @__PURE__ */ Q("div", {
			"aria-hidden": i ? !0 : void 0,
			inert: i ? !0 : void 0,
			className: s ? Cd : Sd,
			children: a.map((e) => {
				if (Nd(e)) {
					let t = e[0];
					if (e.length === 1) return Ld(t, {
						state: n,
						hasCscField: c,
						hasExpiryField: l,
						errorMessage: t.id === u ? r : void 0,
						showErrorMessage: t.id === u
					});
					let a = Ad(t), o = jd(e);
					return /* @__PURE__ */ Q("div", {
						"data-slot": "hosted-fields-layout-skeleton-item",
						"data-field-group-id": o,
						className: "col-span-2 flex w-full min-w-0 flex-col overflow-hidden whitespace-nowrap",
						children: /* @__PURE__ */ Q(Ze, {
							error: t.id === u ? r : void 0,
							errorClassName: "truncate whitespace-nowrap",
							label: a,
							itemClassName: Td,
							reserveMessageSpace: !0,
							children: i ? e.map((e) => Bd(e, r)) : e.map(zd)
						})
					}, o);
				}
				return Ld(e, {
					state: n,
					hasCscField: c,
					hasExpiryField: l,
					errorMessage: e.id === u ? r : void 0,
					showErrorMessage: e.id === u
				});
			})
		})
	});
}
//#endregion
//#region src/components/SuggestedAmountButtons.tsx
var Hd = (e) => `repeat(${String(Math.min(e, 4))}, minmax(0, 1fr))`, Ud = m("[--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]"), Wd = m("[--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]");
function Gd({ suggestions: e, activeSuggestion: t, onSelect: n, formatLabel: r, amountLimits: i, size: a = "xs", disabled: o = !1, className: s, style: c }) {
	let l = pe(), u = q((e) => {
		e.preventDefault();
	}, []), d = r ?? ((e) => e), f = le();
	if (e.length === 0) return null;
	let p = {
		...c,
		gridTemplateColumns: Hd(e.length)
	};
	return /* @__PURE__ */ Q("div", {
		id: l.id("amount-suggestions"),
		style: p,
		className: m(l.className("amount-suggestions"), "text-center", "gap-1 @sm:gap-2", "grid", s),
		children: e.map((e) => {
			let r = f(e), s = e === t, c = o || (i ? h(e, i).isOutOfRange : !1);
			return /* @__PURE__ */ Q(ee, {
				id: l.id("amount-suggestion", { slug: r }),
				variant: s ? "secondary" : "neutral",
				size: a,
				disabled: c,
				className: m(s ? Wd : Ud, "min-w-0 w-full"),
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
var Kd = /* @__PURE__ */ function(e) {
	return e.INIT = "INIT", e.TOKENIZE = "TOKENIZE", e.LAYOUT = "HF_LAYOUT", e.FORM_DATA = "HF_FORM_DATA", e.FORM_STATE = "HF_FORM_STATE", e.CARD_BRAND = "HF_CARD_BRAND", e.AUTO_FOCUS_NEXT = "HF_AUTO_FOCUS_NEXT", e.CAPABILITIES = "HF_CAPABILITIES", e.READY = "HF_READY", e.ERROR = "HF_ERROR", e.RESET = "RESET", e;
}({}), qd = 5, Jd = (e) => ({
	groupedCardInputs: e?.groupedCardInputs === !0,
	fieldOverrides: e?.fieldOverrides === !0,
	expiryDateValidation: e?.expiryDateValidation === !0
}), Yd = "hosted_fields.title", Xd = Object.freeze(["allow-scripts", "allow-same-origin"]), Zd = "error.hosted_fields_error_received", Qd = 5e3, $d = 250, ef = 20, tf = 120, nf = Object.freeze({
	border: "0",
	width: "100%",
	height: "100%",
	display: "block",
	backgroundColor: "transparent",
	colorScheme: "normal"
}), rf = "hf-merchant-fonts", af = "--hf-font-family", of = [
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Helvetica Neue'",
	"sans-serif"
].join(", "), sf = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !(typeof t.type != "string" || !Object.values(Kd).includes(t.type));
}, cf = (e) => {
	let t = e.document ?? (typeof document < "u" ? document : void 0);
	if (!t) throw Error("createHostedFieldsIframe requires a Document instance.");
	let n = t.createElement("iframe");
	n.title = It(e.title) ?? "hosted_fields.title", e.ariaLabel && n.setAttribute("aria-label", e.ariaLabel), n.name = e.name ?? "cashier-hosted-fields", e.className && (n.className = e.className);
	let r = Xd.join(" ");
	r && n.setAttribute("sandbox", r);
	let i = It(e.allow);
	i && n.setAttribute("allow", i), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), n.setAttribute("src", e.src), n.setAttribute("loading", "eager");
	let a = {
		...nf,
		...e.styles ?? {}
	};
	if (Object.assign(n.style, a), n.setAttribute("frameborder", "0"), e.attributes) for (let [t, r] of Object.entries(e.attributes)) r != null && n.setAttribute(t, String(r));
	return n;
}, lf = (e, t, n) => {
	let r = n ?? e.getAttribute("src") ?? e.src, i = It(r) ?? "";
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
}, uf = (e) => {
	let { container: t, iframe: n } = e, r = n.document ?? t.ownerDocument, i = cf({
		...n,
		document: r
	}), a = r.defaultView ?? void 0, o = i.getAttribute("src") ?? n.src;
	i.removeAttribute("src");
	let s = df({
		iframe: i,
		targetOrigin: e.controller?.targetOrigin ?? o,
		win: e.controller?.win ?? a
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
}, df = (e) => {
	let { iframe: t } = e, n = e.win ?? (typeof window < "u" ? window : void 0);
	if (!n) throw Error("Hosted fields controller requires a Window instance.");
	let r = lf(t, n, e.targetOrigin), i = {}, a = !1, o = !1, s = null, c = null, l = {}, u = null, d = null, f = null, p = 0, m = !1, h = null, g = (e) => {
		h &&= (n.clearTimeout(h.timeoutId), e && h.reject(e), null);
	}, _ = (e) => {
		let n = t.contentWindow;
		n && n.postMessage(e, r);
	}, v = (e) => {
		if (!a && !e?.force || !u || O()?.URL === "about:blank") return;
		let { fields: t, debugMode: n, fonts: r, uiTheme: i, css: o, autoFocusNextField: s, pciTenantId: c, uiGroupCardInputs: l } = u, f = {
			type: "INIT",
			protocolVersion: u.protocolVersion ?? qd,
			debugMode: !!n,
			fields: t ?? void 0,
			autoFocusNextField: s,
			fonts: r ?? void 0,
			theme: i ?? void 0,
			css: o ?? void 0,
			tenantId: c,
			...l === void 0 ? {} : { uiGroupCardInputs: l }
		}, p = JSON.stringify(f);
		(e?.bypassSignature || d !== p) && (d = p, _(f));
	}, y = () => {
		f &&= (n.clearTimeout(f), null), p = 0;
	}, b = () => {
		let e = t.getAttribute("src");
		if (m || !t.isConnected || O()?.URL !== "about:blank" || !e) return !1;
		try {
			if (new URL(e, n.location.href).origin !== r) return !1;
		} catch {
			return !1;
		}
		return m = !0, o = !1, d = null, t.setAttribute("src", e), x(), !0;
	}, x = () => {
		if (!u || s || f) return;
		p = o ? ef : tf;
		let e = () => {
			if (f = null, !u || s) {
				p = 0;
				return;
			}
			if (p <= 0) {
				if (b()) return;
				i.onMessage?.({
					type: "HF_ERROR",
					message: "error.hosted_fields_not_ready"
				});
				return;
			}
			v({
				force: !0,
				bypassSignature: !0
			}), --p, f = n.setTimeout(e, $d);
		};
		f = n.setTimeout(e, $d);
	}, S = () => {
		a || (a = !0, i.onReady?.());
	}, C = () => {
		o || (o = !0, p = ef);
	}, w = () => {
		C(), S(), d = null, v({ force: !0 }), x();
	}, T = () => {
		O()?.URL !== "about:blank" && (C(), s || (d = null), v({ force: !0 }), x());
	}, ee = (e) => {
		if (!h) return;
		if (!e) {
			g(/* @__PURE__ */ Error("No form data received from hosted fields iframe."));
			return;
		}
		let { resolve: t } = h;
		g(), t(e);
	}, E = (e) => {
		if (!h) return;
		let t = It(e.message) ?? Zd;
		g(Error(t));
	}, D = (e) => {
		l = Jd(e.capabilities), i.onCapabilities?.(l, e);
	}, O = () => {
		try {
			let e = t.contentWindow?.document;
			return e?.URL, e ?? null;
		} catch {
			return null;
		}
	}, k = (e) => {
		let t = O();
		t && Sf(e.fonts, { document: t }), i.onInit?.(e.fonts, e);
	}, A = (e) => {
		if (e.source !== t.contentWindow || e.origin !== r || !sf(e.data)) return;
		let n = e.data;
		n.type === "INIT" && k(n), n.type === "HF_READY" && w(), n.type === "HF_CAPABILITIES" && D(n), n.type === "HF_LAYOUT" && n.layout && Number.isFinite(n.layout.containerHeight) && n.layout.containerHeight > 0 && (y(), S(), s = n.layout, i.onLayout?.(n.layout, n)), n.type === "HF_FORM_DATA" && ee(n.formData), n.type === "HF_FORM_STATE" && (c = n.formState ?? null), n.type === "HF_ERROR" && E(n), i.onMessage?.(n);
	};
	return n.addEventListener("message", A), t.addEventListener("load", T), {
		configure: (e) => {
			if (u = e ? {
				debugMode: e.debugMode,
				fields: e.fields ?? null,
				fonts: e.fonts ?? null,
				uiTheme: e.uiTheme ?? null,
				css: e.css ?? null,
				protocolVersion: e.protocolVersion,
				pciTenantId: e.pciTenantId,
				autoFocusNextField: e.autoFocusNextField,
				uiGroupCardInputs: e.uiGroupCardInputs
			} : null, !u) {
				d = null, y();
				return;
			}
			v({ force: o && !a }), x();
		},
		tokenize: (e) => {
			if (!a) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe is not ready."));
			if (h) return Promise.reject(/* @__PURE__ */ Error("Hosted fields tokenization already pending."));
			if (!t.contentWindow) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe window unavailable."));
			let r = e?.timeoutMs ?? Qd;
			return new Promise((t, i) => {
				h = {
					resolve: t,
					reject: i,
					timeoutId: n.setTimeout(() => {
						h = null, i(/* @__PURE__ */ Error("No response from hosted fields iframe."));
					}, r)
				}, _({
					type: "TOKENIZE",
					saveAccount: e?.saveAccount
				});
			});
		},
		destroy: () => {
			g(/* @__PURE__ */ Error("Hosted fields controller destroyed before response.")), n.removeEventListener("message", A), t.removeEventListener("load", T), y();
		},
		setCallbacks: (e) => {
			i = e ?? {};
		},
		isReady: () => a,
		getLastLayout: () => s,
		getLastFormState: () => c,
		getCapabilities: () => l,
		reset: () => {
			c = null, _({ type: "RESET" });
		}
	};
}, ff = /* @__PURE__ */ new Set([
	"woff2",
	"woff",
	"truetype",
	"opentype"
]), pf = /* @__PURE__ */ new Set([
	"auto",
	"block",
	"swap",
	"fallback",
	"optional"
]), mf = (e) => {
	let t = e.split(Ot)[0]?.toLowerCase() ?? "";
	if (t.endsWith(".woff2")) return "woff2";
	if (t.endsWith(".woff")) return "woff";
	if (t.endsWith(".ttf") || t.endsWith(".ttc")) return "truetype";
	if (t.endsWith(".otf")) return "opentype";
	if (t.startsWith("data:font/woff2")) return "woff2";
	if (t.startsWith("data:font/woff")) return "woff";
	if (t.startsWith("data:font/ttf") || t.startsWith("data:font/truetype")) return "truetype";
	if (t.startsWith("data:font/otf") || t.startsWith("data:font/opentype")) return "opentype";
}, hf = (e) => {
	if (!e) return null;
	let t = It(e);
	return t && (K.test(t) || jt.test(t)) ? t : null;
}, gf = (e) => {
	if (e) return ff.has(e) ? e : void 0;
}, _f = (e) => e && pf.has(e) ? e : "swap", vf = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let e = It(n.family) ?? "";
		if (!e) continue;
		let r = [];
		for (let e of n.sources) {
			let t = hf(e.url);
			if (!t) continue;
			let n = gf(e.format) ?? mf(t);
			r.push({
				url: t,
				format: n,
				weight: e.weight,
				style: e.style === "italic" ? "italic" : "normal",
				display: _f(e.display)
			});
		}
		r.length !== 0 && t.push({
			family: e,
			sources: r
		});
	}
	return t;
}, yf = (e) => {
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
}, bf = (e) => {
	let t = e.getElementById(rf);
	t?.parentNode && t.parentNode.removeChild(t);
}, xf = (e, t) => {
	let n = e.documentElement;
	if (t.length === 0) {
		n.style.setProperty(af, of);
		return;
	}
	let r = [Array.from(new Set(t.map((e) => e.family))).map((e) => JSON.stringify(e)).join(", "), of].join(", ");
	n.style.setProperty(af, r);
}, Sf = (e, t) => {
	let n = null;
	if (t?.document) n = t.document;
	else {
		let e = globalThis.document;
		e && (n = e);
	}
	if (!n) return;
	bf(n);
	let r = vf(e);
	if (xf(n, r), r.length === 0) return;
	let i = n.getElementsByTagName("head").item(0);
	if (!i) return;
	let a = yf(r);
	if (!a) return;
	let o = n.createElement("style");
	o.id = rf, o.append(n.createTextNode(a)), i.appendChild(o);
}, Cf = "--hf-font-family", wf = /* @__PURE__ */ new Set([
	"--pc-color-input-error-text",
	"--pc-color-input-helper-text",
	"--pc-color-input-label-text",
	"--pc-color-input-invalid-background",
	"--pc-color-input-invalid-background-hover",
	"--pc-color-input-invalid-border",
	"--pc-color-input-invalid-focus-ring",
	"--pc-opacity-input-invalid-background"
]), Tf = /* @__PURE__ */ RegExp("^(?:--pc-(?:color|space|size|radius|shadow|font|motion|opacity|z)-input(?:-|$)|--pc-font-(?:size|line-height)-input$)", "u"), Ef = (e) => {
	if (typeof e == "string") return e.trim() || void 0;
}, Df = (e) => {
	if (!e) return;
	let t = e;
	return Ef(t.fontFamily) ?? Ef(t[Cf]) ?? Ef(t["hf-font-family"]);
}, Of = (e) => {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!n.startsWith("--pc-") || wf.has(n)) continue;
		if (typeof r == "number") {
			t[n] = r;
			continue;
		}
		if (typeof r != "string") continue;
		let e = r.trim();
		e && (t[n] = e);
	}
	return t;
}, kf = (e) => e.startsWith("--pc-") ? e : e.startsWith("pc-") ? `--${e}` : null, Af = (e) => typeof e == "number" || typeof e == "string" && e.trim().length > 0, jf = (e, t) => {
	let n = {}, r = {}, i = Df(t);
	if (t) for (let [e, n] of Object.entries(t)) {
		let t = kf(e);
		t && Af(n) && (r[t] = n);
	}
	let a = t;
	if (a?.variables) for (let [e, t] of Object.entries(a.variables)) {
		let n = kf(e);
		n && Af(t) && (r[n] = t);
	}
	Object.assign(n, r), Object.assign(n, Of(e?.()));
	for (let [e, t] of Object.entries(r)) Tf.test(e) && (n[e] = t);
	return i && (n[Cf] = i), n;
}, Mf = (e, t) => {
	if (e) for (let n = 0; n < e.length; n += 1) {
		let r = e.item(n);
		r.startsWith("--pc-") && t.add(r);
	}
}, Nf = (e, t) => {
	"style" in e && Mf(e.style, t), "cssRules" in e && Pf(e.cssRules, t);
}, Pf = (e, t) => {
	if (e) for (let n of Array.from(e)) Nf(n, t);
}, Ff = (e, t) => {
	for (let n of Array.from(e.styleSheets)) try {
		Pf(n.cssRules, t);
	} catch {}
}, If = (e) => {
	let t = e?.ownerDocument.defaultView;
	if (!e || !t) return;
	let n = t.getComputedStyle(e), r = /* @__PURE__ */ new Set();
	Mf(n, r), Mf(e.ownerDocument.documentElement.style, r), Mf(e.style, r), Ff(e.ownerDocument, r);
	let i = {};
	for (let e of r) {
		let t = It(n.getPropertyValue(e));
		t && (i[e] = t);
	}
	return i;
}, Lf = "/logos/payment-types/", Rf = "/assets/payment-type-logos/", zf = (e) => e.replace(/\/+$/, ""), Bf = (e, t, n) => {
	let r = t?.trim();
	if (r) try {
		let t = new URL(r);
		return !t.pathname.endsWith(Rf) && !t.pathname.endsWith(Lf) ? void 0 : (t.pathname = `${Lf}${n === "dark" ? `${e}-dark.svg` : `${e}.svg`}`, t.search = "", t.hash = "", t.toString());
	} catch {
		return;
	}
}, Vf = (e, t) => {
	if (!e) return;
	let n = t?.trim(), r = n ? {
		default: Bf(e, n, "default") ?? `${zf(n)}/${e}.svg`,
		dark: Bf(e, n, "dark") ?? `${zf(n)}/${e}-dark.svg`
	} : void 0;
	return {
		brand: e,
		theme: Ee(e),
		logo: r
	};
}, Hf = ({ renderMode: e, hideAmountField: t = !1, lockAmount: n = !1, fields: r }) => e !== "form" || t || n ? !1 : (r ?? []).some((e) => e.id === "amount"), Uf = ({ values: e, amountValueOverride: t, initialAmount: n, shouldHideAmountField: r, hasAmountField: i, lockAmount: a = !1 }) => {
	if (!i) return e;
	let o = a ? n : t ?? (r ? n : void 0);
	return o === void 0 || e.amount === o ? e : {
		...e,
		amount: o
	};
}, Wf = [
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
], Gf = (e) => typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.trunc(e)) : void 0, Kf = (e) => {
	if (!e) return [];
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = r.trim();
		e && !n.has(e) && (n.add(e), t.push(e));
	}
	return t;
}, qf = () => {
	if (typeof navigator > "u") return;
	let { language: e } = navigator;
	return e?.trim() || Kf(Array.isArray(navigator.languages) ? navigator.languages : [])[0];
}, Jf = () => {
	if (typeof navigator > "u") return;
	let e = Kf(Array.isArray(navigator.languages) ? navigator.languages : []);
	if (e.length > 0) return e;
	let { language: t } = navigator, n = t?.trim();
	return n ? [n] : void 0;
}, Yf = (e) => typeof e == "number" && Number.isFinite(e) ? String(Math.trunc(e)) : void 0, Xf = (e, t) => Wf.find(({ width: n, height: r }) => e >= n && t >= r)?.code ?? "05", Zf = () => {
	if (typeof window > "u" || typeof navigator > "u") return;
	let { screen: e, innerWidth: t, innerHeight: n } = window, r = t || e.width || 0, i = n || e.height || 0, a = Gf(e.colorDepth), o = Yf(e.height), s = Yf(e.width), c = Jf(), l = qf(), u = String((/* @__PURE__ */ new Date()).getTimezoneOffset()), d = {
		browserJavascriptEnabled: !0,
		challengeWindowSize: Xf(r, i)
	};
	a && (d.browserColorDepth = a), c?.length && (d.browserAcceptLanguage = c), d.browserJavaEnabled = !1, l && (d.browserLanguage = l), o && (d.browserScreenHeight = o), s && (d.browserScreenWidth = s), u && (d.browserTZ = u);
	let f = navigator.userAgent || void 0;
	return f && (d.browserUserAgent = f), d;
}, Qf = () => {
	if (typeof window < "u") try {
		let e = window.nSureSDK?.getDeviceId?.();
		return typeof e == "string" && e.trim() !== "" ? e : void 0;
	} catch {
		return;
	}
}, $f = (e, t) => e?.toLowerCase() === "card" && t?.toLowerCase() === "payin", ep = (e, t) => {
	if ($f(e, t)) return Zf();
}, tp = (e, t, n) => {
	if ($f(e, t)) {
		if (n?.coinflow) {
			np({
				type: e,
				method: t,
				values: {},
				hostRiskContext: n
			});
			let { deviceId: r } = n.coinflow;
			return r;
		}
		return Qf();
	}
}, np = ({ type: e, method: t, values: n, hostRiskContext: r }) => {
	if (!$f(e, t) || !r?.coinflow || "coinflowDeviceId" in be(n)) return;
	let { deviceId: i, expiresAt: a } = r.coinflow, o = Date.parse(a);
	if (typeof i != "string" || !i.trim() || i.length > 2048 || !Number.isFinite(o) || o <= Date.now()) throw Error("error.host_risk_context_expired");
}, rp = (e, t) => {
	if (e) try {
		return JSON.parse(e);
	} catch (e) {
		Ft.error(t, "[Cashier] Failed to parse override payload", e);
		return;
	}
}, ip = async (e, t, n) => {
	if (!n) return e;
	let r = await t(_t(e.saveAccount));
	return {
		...e,
		...r
	};
}, ap = async (e, t, n) => {
	let { amount: r, merchantRequestId: i, ...a } = e, o = { ...await ip(a, t, n) };
	return Object.prototype.hasOwnProperty.call(e, "amount") && (o.amount = r), Object.prototype.hasOwnProperty.call(e, "merchantRequestId") && (o.merchantRequestId = i), o;
}, op = (e) => {
	let { values: t, merchantId: n, userId: r, sessionId: i, accountId: a, currency: o, service: s, bonusCode: c, locales: l, extra: u, returnUrl: d, method: f, type: p, debug: m, overrideRaw: h, hostRiskContext: g } = e, { amount: _, merchantRequestId: v, ...y } = t, b = be(y);
	if (!("coinflowDeviceId" in b)) {
		let e = tp(p, f, g);
		e && (b.coinflowDeviceId = e);
	}
	let x = {
		merchantId: n,
		userId: r,
		sessionId: i,
		amount: Ct(_),
		accountId: a,
		currency: o,
		service: It(s) ?? void 0,
		input: b
	}, S = It(c);
	S && (x.bonusCode = S), l?.length && (x.locales = l), u && Object.keys(u).length > 0 && (x.extra = u);
	let C = It(d);
	C && (x.returnUrl = C);
	let w = It(v);
	w && (x.merchantRequestId = w);
	let T = ep(p, f);
	T && (x.threeds = T);
	let ee = rp(h, m);
	return ee && Object.assign(x, ee), x;
}, sp = ({ uiBonuses: e, selectedBonusCode: t, availableBonuses: n }) => {
	if (e && t) return n.some((e) => e.code === t) ? t : void 0;
}, cp = {
	form: "quick-payment-form-surface",
	"field-panel": "quick-payment-form-field-panel"
};
function lp({ children: e, kind: t, chrome: n = "contained", fieldEdgeSpacing: r = "default", animateEntrance: i = !1 }) {
	let a = pe(), o = cp[t], s = a.attrs(o), c = m(s.className, "w-full min-w-0");
	return n === "plain" ? /* @__PURE__ */ Q("div", {
		"data-slot": o,
		"data-pc-slot": s["data-pc-slot"],
		"data-pc-slug": s["data-pc-slug"],
		"data-pc-part": s["data-pc-part"],
		className: m(c, "overflow-visible"),
		children: e
	}) : /* @__PURE__ */ Q(Le, {
		as: "div",
		size: "lg",
		"data-slot": o,
		"data-pc-slot": s["data-pc-slot"],
		"data-pc-slug": s["data-pc-slug"],
		"data-pc-part": s["data-pc-part"],
		dataTheme: "neutral",
		inset: r === "balanced" ? "block-end" : void 0,
		insetSize: r === "balanced" ? "xs" : void 0,
		className: m(c, t === "form" && "mt-0", i && "pc-enter-panel"),
		children: e
	});
}
//#endregion
//#region src/components/hostedFieldsExitFocus.ts
var up = /* @__PURE__ */ new Set([
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
]), dp = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&"), fp = (e) => {
	let t = e?.id;
	return typeof t == "string" && t.length > 0 ? t : null;
}, pp = ({ cardLayoutDetailsField: e, cardLayoutFooterField: t, fieldsAfterHosted: n = [] }) => fp(e) || fp(t) || fp(n[0]), mp = (e) => e instanceof HTMLTextAreaElement ? !e.disabled && !e.readOnly : e instanceof HTMLInputElement && !e.disabled && !e.readOnly && !up.has(e.type.toLowerCase()), hp = (e, t = document) => {
	if (!e) return !1;
	let n = dp(e), r = t.querySelector(`[name="${n}"]`);
	return mp(r) ? (r.focus(), t.activeElement === r) : !1;
}, gp = /* @__PURE__ */ new Set(["display", "qrcode"]), _p = (e) => ({
	name: e.name,
	type: e.type,
	typeId: e.typeId,
	method: e.method,
	...e.accountId ? { accountId: e.accountId } : {},
	...e.service ? { service: e.service } : {}
}), vp = (e, t) => !!e.id && !e.hidden && lt(e, t).visible, yp = (e, t) => gp.has(e.type ?? "") ? e.defaultValue ?? "" : t[e.id ?? ""] ?? "", bp = ({ errors: e, field: t, initialValues: n, value: r }) => {
	let i = t.id ?? "", a = gp.has(t.type ?? ""), o = !!t.validation?.required?.value, s = a || !Te(e[i]);
	return {
		type: t.type ?? "text",
		readOnly: a,
		required: o,
		dirty: !a && r !== n[i],
		valid: s,
		complete: a || s && (!o || De(r))
	};
}, xp = ({ amount: e, bonusCode: t, canSubmit: n, complete: r, currency: i, dirty: a, errors: o, fields: s, hostedFields: c, initialValues: l, method: u, paymentType: d, submitting: f, valid: p, values: m }) => {
	if (_e(s, m).length > 0) return null;
	let h = {}, g = {};
	for (let e of s) {
		let t = e.id;
		if (!t || !vp(e, m)) continue;
		let n = yp(e, m);
		h[t] = n, g[t] = bp({
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
		paymentType: _p(d),
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
}, Sp = 200, Cp = 2, wp = 50, Tp = 1, Ep = [], Dp = (e) => e ? e.isComplete === void 0 ? e.dirty === void 0 ? !!e.isValid : !!(e.isValid && e.dirty) : e.isComplete : !1, Op = async (e) => {
	if (!e.current) return !0;
	let t = await e.current.validateForm();
	return !Te(t);
}, kp = (e, t) => t.reduce((t, n) => {
	let r = n.id;
	return !r || !Object.prototype.hasOwnProperty.call(e, r) || (t[r] = e[r]), t;
}, {}), Ap = [], jp = Jd(), Mp = "pan", Np = "expiryDate", Pp = "csc", Fp = "amount", Ip = (e) => (e ?? []).some((e) => e.id === Fp), Lp = (e, t) => {
	let n = [...e ?? Ep];
	return t ? n.filter((e) => e.id !== Fp) : n;
}, Rp = "field.card.pan.luhn_invalid", zp = "field.card.label", Bp = b(Je, "gap-y-1"), Vp = "mt-1", Hp = "mt-3", Up = "mt-0", Wp = "pointer-events-none absolute right-0 bottom-[calc(var(--pc-panel-edge-inset,0px)+var(--pc-panel-extra-inset,0px))] flex justify-end", Gp = "calc(var(--pc-size-input-height,2.25rem) + var(--pc-space-input-label-gap,0.25rem) + var(--pc-space-input-label-gap,0.25rem) + 2.5rem + 2px + var(--pc-size-input-focus-ring,3px) + var(--pc-size-input-focus-ring,3px))", Kp = /* @__PURE__ */ new Set([
	Mp,
	Np,
	Pp
]), qp = (e) => typeof e.id == "string" && Kp.has(e.id), Jp = (e) => (e ?? []).filter(qp).length > 1, Yp = (e) => e?.type === "checkbox", Xp = (e) => e?.luhn ? e : {
	...e ?? {},
	luhn: {
		value: !0,
		invalidMessage: Rp,
		invalidMessageKeys: [Rp]
	}
}, Zp = (e, t, n, r = {}) => {
	let i = n(e.labelKeys ?? e.label), a = e.placeholder ? t(e.placeholder) : void 0, o = e.id === Mp ? Xp(e.validation) : e.validation, { overrides: s, ...c } = e, l = r.includeOverrides ? Ge(s, n) : void 0, u = Me(o, n), d = e.id === Np && !r.includeExpiryDateValidation && u?.expiryDate ? (() => {
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
}, Qp = (e, t) => {
	if (!Jp(e)) return [...e];
	let n = e.filter(qp).map((e, n) => n === 0 ? {
		...e,
		label: t,
		ariaLabel: e.label
	} : e), r = !1;
	return e.reduce((e, t) => qp(t) ? (r ||= (e.push(n), !0), e) : (e.push(t), e), []);
}, $p = "Secure card fields are temporarily unavailable", em = "We couldn't verify your card details.", tm = /* @__PURE__ */ new Set([
	"error.hosted_fields_not_ready",
	"Hosted fields iframe is not ready.",
	"Hosted fields iframe window unavailable.",
	"Hosted fields controller destroyed before response."
]), nm = /* @__PURE__ */ new Set([
	"error.hosted_fields_error_received",
	"Hosted fields tokenization already pending.",
	"No response from hosted fields iframe.",
	"No form data received from hosted fields iframe."
]), rm = (e, t, n) => n(It(e) ?? It(t)), im = (e) => {
	let t = It(e);
	return !t || tm.has(t) ? $p : t;
}, am = (e) => {
	let t = It(e);
	return !t || nm.has(t) ? em : tm.has(t) ? $p : t;
}, om = (e) => {
	let t = Sl.generate[e];
	return [{
		value: t ? t() : Sl.valid[e],
		label: "Valid"
	}, {
		value: Sl.invalid[e],
		label: "Invalid"
	}].filter(({ value: e }) => e === void 0 ? !1 : typeof e != "string" || e.length > 0).map(({ value: e, label: t }) => ({
		value: e,
		label: t
	}));
}, sm = (e) => om(e).length > 0, cm = (e, t) => {
	let n = It(e);
	if (!n) return null;
	try {
		let e = t ? new URL(n, t) : new URL(n);
		if (e.protocol !== "http:" && e.protocol !== "https:" || e.origin === "null") return null;
		let r = e.pathname || "/", i = r.lastIndexOf("/");
		return e.pathname = i >= 0 ? r.slice(0, i + 1) : "/", e.search = "", e.hash = "", e.toString();
	} catch {
		return null;
	}
}, lm = (e) => {
	if (e.length === 0) return;
	let t = typeof window < "u" ? window.location.href : void 0;
	for (let n of e) {
		let e = n.logo;
		if (e) {
			if (typeof e == "string") {
				let n = cm(e, t);
				if (n) return n;
				continue;
			}
			if (!(typeof e != "object" || Array.isArray(e))) for (let n of Object.values(e)) {
				if (typeof n != "string") continue;
				let e = cm(n, t);
				if (e) return e;
			}
		}
	}
}, um = {
	field: 86,
	gap: 4,
	padding: 8,
	min: 160
}, dm = [
	"var(--pc-size-input-height,2.25rem)",
	"2px",
	"2.5rem",
	"var(--pc-space-input-label-gap,0.25rem)",
	"var(--pc-space-input-label-gap,0.25rem)"
], fm = (e) => {
	let t = Math.max(1, e), n = Array.from({ length: t }, () => dm).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(um.gap)}px`);
	return n.push(`${String(um.padding)}px`), `calc(${n.join(" + ")})`;
}, pm = (e) => {
	let t = Math.max(1, e);
	if (t === 1) return Gp;
	let n = Array.from({ length: t }, () => dm).flat();
	for (let e = 1; e < t; e += 1) n.push(`${String(um.gap)}px`);
	return n.push("var(--pc-size-input-focus-ring,3px)", "var(--pc-size-input-focus-ring,3px)"), `calc(${n.join(" + ")})`;
}, mm = 180, hm = "saveAccount", gm = "card", _m = /* @__PURE__ */ new Set([
	"holderName",
	"accountHolder",
	"cardholderName"
]), vm = "brandless", ym = ".pc-hosted-fields__root", bm = /* @__PURE__ */ new Set([
	"--pc-size-input-focus-ring",
	"--pc-size-input-height",
	"--pc-space-input-label-gap"
]);
function xm({ id: e, onActionsChange: t, onPromptStateChange: n, onPreparedValues: i, onValuesChange: s, renderMode: u = "form", hideAmountField: f = !1, presentedAmountError: p, amountValueOverride: h, renderAfterAmountField: g, valueOverrides: _, requireDirtyBeforeSubmit: v = !0, comboViewLayout: b = !1, comboViewSurfaceChrome: x = "contained", formSurfaceChrome: S = "plain", fieldPanelMode: w = "auto", reserveTrailingActionSpace: T = !1, animateEntrance: E = !0, observePublicState: D = !0, onPaymentSubmitted: O }) {
	let k = pe(), A = Qt(re), te = Et(A), j = d(), M = j?.attempt, { debug: P, method: ne, initialAmount: I, lockAmount: L, currency: ae, locale: R, merchantId: z, userId: V, user: se, hostedFieldsUrl: ce, sessionId: le, hostedFieldsFonts: H, hostedFieldsAutoFocusNextField: ue, uiGroupCardInputs: de, uiTheme: fe, uiThemeCssText: me, uiCardBrand: he, uiSuggestAmounts: ge, uiComboView: _e, uiBonuses: ve, extraAttributes: ye, hostRiskContext: be, returnUrl: xe, selectedBonusCode: Se, setCashierState: Ce } = Qt(re), we = ce || "https://hf.pvault.net", { translateKey: U, translateKeys: Ee, resolveTextKey: Oe } = c(), { formatCurrencyValue: ke, formatDisplayValue: Ae } = Tt(), je = Y(() => It(Vt(R)), [R]), Me = Y(() => je ? [je] : void 0, [je]), Ne = Y(() => U(Yd), [U]), { getPaymentType: Pe, paymentTypesList: Fe, pciTenantId: Ie } = l(), { getAvailableBonusesForPaymentType: Le } = F(), ze = Y(() => lm(Fe), [Fe]), Be = fe ? "neutral" : void 0, [He, Ue] = Z(null), We = Re(He) === "dark" ? "secondary" : "secondary-tinted", Ge = Pe(e), Ke = `payment-form:${e}`, { isSubscribed: qe, setSurfacePending: Ze, publishInactive: et } = y(), { fields: tt, hfFields: nt, name: it, type: at, method: ot, accountId: ct, service: lt, limits: ut, fee: dt, logo: ft } = Ge ?? {}, pt = f || L, mt = tt ?? Ep, ht = Lp(mt, pt), gt = Ip(mt), _t = Hf({
		renderMode: u,
		hideAmountField: f,
		lockAmount: L,
		fields: ht
	}), vt = Y(() => zt(ge), [ge]), yt = q((e) => Ae(e) || e, [Ae]), bt = (e) => new Map(od(mt, e).flatMap((e) => e.id && e.notification ? [[e.id, e.notification]] : [])), St = nt?.flatMap((e) => e.id && e.notification ? [{
		fieldId: e.id,
		notification: e.notification
	}] : []) ?? [], Ct = St.filter(({ notification: e }) => Wl(e)), wt = St.filter(({ notification: e }) => !Wl(e)), W = !!(nt && nt.length > 0), G = nt?.some((e) => typeof e.id == "string" && Kp.has(e.id)) ?? !1, K = W && G && at?.toLowerCase() === gm, Dt = K && he, Ot = K && de && Jp(nt), At = b && x === "plain", jt = w !== "none", Mt = b && At && !jt, Nt = K, { fieldsBeforeHosted: Pt, cardLayoutDetailsField: Ft, cardLayoutFooterField: Ht, fieldsAfterHosted: Ut } = Y(() => {
		let e = Lp(tt, pt);
		if (!W) return {
			fieldsBeforeHosted: e,
			cardLayoutDetailsField: null,
			cardLayoutFooterField: null,
			fieldsAfterHosted: []
		};
		let t = [], n = null, r = null, i = [];
		for (let a of e) {
			if (a.id === hm) {
				if (Nt && !r) {
					r = a;
					continue;
				}
				i.push(a);
				continue;
			}
			if (K && !n && typeof a.id == "string" && _m.has(a.id)) {
				n = a;
				continue;
			}
			t.push(a);
		}
		return {
			fieldsBeforeHosted: t,
			cardLayoutDetailsField: n,
			cardLayoutFooterField: r,
			fieldsAfterHosted: i
		};
	}, [
		tt,
		pt,
		Nt,
		K,
		W
	]), Wt = Y(() => pp({
		cardLayoutDetailsField: Ft,
		cardLayoutFooterField: Ht,
		fieldsAfterHosted: Ut
	}), [
		Ft,
		Ht,
		Ut
	]), Gt = Y(() => {
		let e = xd(nt);
		if (e === 0) return um.min;
		let t = e * um.field + Math.max(e - 1, 0) * um.gap + um.padding;
		return K ? t : Math.max(t, um.min);
	}, [nt, K]), [Kt, qt] = Z(null), [Jt, Yt] = Z(null), [Xt, en] = Z("pending"), [rn, on] = Z("pending"), [sn, cn] = Z(null), [ln, un] = Z(null), [dn, fn] = Z(null), [pn, mn] = Z({
		formId: e,
		brand: void 0
	}), hn = X(null), gn = pn.formId === e ? pn.brand : void 0, [_n, vn] = Z(!1), yn = Xt === "ready", bn = $t();
	tn(() => (Ze(bn, D && W && !yn && sn === null), () => {
		Ze(bn, !1);
	}), [
		Ze,
		bn,
		D,
		W,
		yn,
		sn
	]);
	let xn = sn === null ? null : rm(sn, $p, U), Sn = W && xn !== null && ln === "load", Cn = rn === "grouped" || rn === "pending" && Ot, wn = W ? Kt === null ? W && Ot && Cn ? pm(1 + xd(nt?.filter((e) => !qp(e)))) : K ? fm(xd(nt)) : Math.max(Jt ?? 0, Gt) : Kt : null, Tn = Y(() => nt ? JSON.stringify(nt) : null, [nt]), [En, Dn] = Z({
		node: null,
		version: 0
	}), On = [
		e,
		we,
		Tn,
		W ? "visible" : "hidden",
		En.version
	].join("|"), kn = [On, "capabilities"].join("|"), [An, jn] = nn((e, t) => t, {
		scopeKey: kn,
		capabilities: jp,
		received: !1
	}), Mn = An.scopeKey === kn, Nn = Mn ? An.capabilities : jp, Pn = Mn && An.received, Fn = W && Xt !== "ready" && sn === null || Sn, In = W && Xt !== "ready" && sn === null, Ln = Xt, Rn = Ot, zn = X(Nn), Bn = X(Pn), Vn = Y(() => Object.fromEntries(Object.entries(jf(void 0, fe)).filter(([e]) => bm.has(e))), [fe]), Hn = Nn.fieldOverrides === !0, Un = Nn.expiryDateValidation === !0, Wn = Y(() => {
		if (nt) return nt.map((e) => Zp(e, U, Ee, {
			reserveMessageSpace: K,
			includeOverrides: Hn,
			includeExpiryDateValidation: Un
		}));
	}, [
		nt,
		K,
		Hn,
		Un,
		U,
		Ee
	]), Gn = Y(() => {
		if (!Wn) return;
		if (!Rn) return Wn;
		let e = U(zp);
		return Wn.map((t) => t.id === Mp ? {
			...t,
			groupLabel: e
		} : t);
	}, [
		Wn,
		Rn,
		U
	]), Kn = Y(() => JSON.stringify({
		fields: Gn ?? null,
		fonts: H ?? null,
		geometryTheme: Vn,
		css: me ?? null,
		uiGroupCardInputs: Rn
	}), [
		Gn,
		H,
		Vn,
		Rn,
		me
	]), qn = q((e) => Ot && e.groupedCardInputs ? "grouped" : "flat", [Ot]), Jn = Y(() => Wn ? Cn ? Qp(Wn, U(zp)) : Wn : Ap, [
		Wn,
		Cn,
		U
	]), Yn = X(null), Xn = X(null), Zn = q((e) => {
		Xn.current = e, Dn((t) => t.node === e ? t : {
			node: e,
			version: t.version + 1
		});
	}, []), Qn = X(null), $n = X(null), er = X(Ne), tr = X(null), nr = X(null), rr = X(rn), ir = X(Xt), ar = X(!1), or = X(null), sr = X(null), cr = X(null), lr = X(null), ur = q(() => If(Xn.current), []), dr = Y(() => Vf(gn, ze), [gn, ze]), fr = Y(() => {
		if (at?.toLowerCase() === gm && ct) return a(it);
	}, [
		ct,
		it,
		at
	]), pr = Y(() => Vf(fr, ze), [ze, fr]), mr = gn ? dr : pr, hr = (() => {
		if (gn) return dr?.logo;
		if (fr) return ft ?? pr?.logo;
	})(), gr = Dt, _r = We, vr = gr ? mr?.theme ?? _r : _r, yr = mr?.brand ?? vm, br = X(null), [xr, Sr] = Z(!1), { makePayment: Cr, finishPayment: wr, paymentStatusMessage: Tr, isPaymentPending: Er, isPaymentSuccessful: Dr, isPaymentFailed: Or } = nd({
		paymentType: at ?? "",
		method: ot ?? ""
	}), kr = Er || Dr || xr && !Or, { overridePayload: Ar, resetOverridePayload: jr, setLocked: Mr } = kl(), { registerReset: Nr } = Ml();
	J(() => {
		Mr(kr);
	}, [kr, Mr]), J(() => () => {
		jr(), Mr(!1);
	}, [jr, Mr]), J(() => {
		er.current = Ne;
		let e = $n.current?.iframe;
		e && Ne && (e.title = Ne);
	}, [Ne]);
	let Pr = q((e) => {
		let t = e?.preserveHeight ?? !1;
		qt((e) => t ? e : null), cn(null), un(null);
	}, []), Fr = q(() => {
		nr.current?.(), nr.current = null;
	}, []), Ir = q(() => {
		Fr(), ar.current = !1, or.current = null, ir.current = "pending", rr.current = "pending", en("pending"), on("pending");
	}, [Fr]), Lr = q(() => {
		Fr();
		let e = tr.current?.isReady() ?? !1, t = "pending";
		Bn.current ? t = qn(zn.current) : e && (t = "flat"), ar.current = e, or.current = null, ir.current = "pending", rr.current = t, en("pending"), on(t), cn(null), un(null);
	}, [Fr, qn]);
	tn(() => {
		let e = lr.current;
		e !== Kn && (lr.current = Kn, e !== null && W && Lr());
	}, [
		Kn,
		Lr,
		W
	]);
	let Rr = q(() => {
		ir.current !== "ready" && (Fr(), ir.current = "ready", en("ready"), cn(null), un(null));
	}, [Fr]), zr = q(() => {
		let e = or.current;
		if (!ar.current || !e || rr.current === "pending" || e.containerHeight <= 0) return;
		Fr();
		let t = e.containerHeight, n = cr.current, r = Cp, i = null, a = !1, o = null, s = null, c = null, l = Xn.current?.ownerDocument.defaultView, u = () => {
			if (a) return;
			let e = or.current;
			if (!(ar.current && rr.current !== "pending" && e?.containerHeight === t && cr.current === n)) return;
			let o = Xn.current, s = o?.getBoundingClientRect().height ?? 0, c = Number.parseFloat(o?.style.height ?? ""), l = s > 0 ? s : c, u = typeof o?.getAnimations == "function" && o.getAnimations().some((e) => e.playState === "running"), f = Number.isFinite(l) && l > 0 && i !== null && Math.abs(l - i) <= Tp;
			if (i = l, r = f && !u ? r - 1 : Cp, r > 0) {
				d();
				return;
			}
			nr.current = null, Rr();
		}, d = () => {
			let e = !1, t = () => {
				e || a || (e = !0, o !== null && l?.cancelAnimationFrame && (l.cancelAnimationFrame(o), o = null), s !== null && (clearTimeout(s), s = null), u());
			};
			s = setTimeout(t, wp), l?.requestAnimationFrame && (o = l.requestAnimationFrame(t));
		};
		nr.current = () => {
			a = !0, o !== null && l?.cancelAnimationFrame && l.cancelAnimationFrame(o), s !== null && clearTimeout(s), c !== null && clearTimeout(c);
		}, c = setTimeout(d, Sp);
	}, [Fr, Rr]), Br = q(() => {
		rr.current === "pending" && (Fr(), rr.current = "flat", on("flat")), ar.current = !0, zr();
	}, [Fr, zr]), Vr = q(({ containerHeight: e }) => {
		let t = Math.ceil(e);
		t <= 0 || or.current?.containerHeight !== t && (or.current = { containerHeight: t }, qt((e) => e === t ? e : t), zr());
	}, [zr]);
	J(() => {
		ir.current = Xt;
	}, [Xt]), J(() => {
		rr.current = rn;
	}, [rn]), J(() => {
		zn.current = Nn, Bn.current = Pn;
	}, [Pn, Nn]), J(() => Fr, [Fr]), J(() => {
		if (!W) return;
		let e = Qn.current;
		if (!e) return;
		let t = () => {
			let t = Math.ceil(e.getBoundingClientRect().height);
			t <= 0 || Yt((e) => e === t ? e : t);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(() => {
			t();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [Jn, W]);
	let Hr = q(() => {
		Pr({ preserveHeight: !0 });
	}, [Pr]), Ur = q(() => {
		let e = hn.current;
		e !== null && (clearTimeout(e), hn.current = null);
	}, []), Wr = q((t, n) => {
		if (Ur(), t || !n?.delayedClear) {
			mn((n) => n.formId === e && n.brand === t ? n : {
				formId: e,
				brand: t
			});
			return;
		}
		hn.current = setTimeout(() => {
			hn.current = null, mn((t) => t.formId === e && t.brand === void 0 ? t : {
				formId: e,
				brand: void 0
			});
		}, mm);
	}, [Ur, e]);
	J(() => Ur, [Ur]);
	let Gr = q(() => {
		Pr({ preserveHeight: !0 }), fn(null), Wr(void 0), tr.current?.reset();
	}, [Pr, Wr]), Kr = q(() => {
		kr || _n || (Sr(!1), Gr(), br.current?.resetForm(), wr(), jr());
	}, [
		wr,
		kr,
		_n,
		Gr,
		jr
	]), qr = X(null);
	J(() => {
		qr.current = Kr;
	}, [Kr]);
	let Jr = q(() => {
		qr.current?.();
	}, []), Yr = X(!1);
	J(() => {
		if (!P) {
			Yr.current &&= (Nr(null), !1);
			return;
		}
		if (!Yr.current) return Nr(Jr), Yr.current = !0, () => {
			Yr.current &&= (Nr(null), !1);
		};
	}, [
		P,
		Nr,
		Jr
	]);
	let Xr = q((e) => {
		if (e.type === Kd.CARD_BRAND) {
			Wr(e.cardBrand, { delayedClear: e.cardBrand === void 0 });
			return;
		}
		if (e.type === Kd.FORM_STATE) {
			fn(e.formState ?? null);
			return;
		}
		if (e.type === Kd.AUTO_FOCUS_NEXT) {
			if (!ue || !Wt) return;
			let e = Xn.current?.ownerDocument ?? (typeof document < "u" ? document : null), t = e?.defaultView ?? (typeof window < "u" ? window : null);
			if (!e) return;
			let n = () => {
				hp(Wt, e);
			};
			if (t && typeof t.requestAnimationFrame == "function") {
				t.requestAnimationFrame(n);
				return;
			}
			setTimeout(n, 0);
			return;
		}
		if (e.type === Kd.ERROR) {
			let t = im(e.message);
			Fr(), en((e) => e === "ready" ? e : "loading"), cn(t), un(ir.current === "ready" ? "submit" : "load"), vn(!1);
		}
	}, [
		Fr,
		ue,
		Wt,
		Wr
	]);
	J(() => {
		if (!W) return;
		let e = En.node;
		if (!e) return;
		let t = e.ownerDocument.defaultView ?? (typeof window < "u" ? window : void 0), n = sr.current, r = On;
		if ($n.current && n !== null && n === r) return;
		Zt(() => {
			Ir(), Pr(), fn(null), Wr(void 0);
		}), $n.current?.destroy(), $n.current = null, tr.current = null, sr.current = r, cr.current = null;
		let i = (() => {
			let e;
			if (t ? e = t.location.href : typeof window < "u" && (e = window.location.href), e) try {
				return new URL(we, e).origin;
			} catch {
				return;
			}
		})(), a = uf({
			container: e,
			iframe: {
				src: we,
				title: er.current,
				attributes: { scrolling: "no" },
				styles: {
					minHeight: K ? "100%" : `${String(um.min)}px`,
					overflow: "hidden"
				}
			},
			controller: i ? { targetOrigin: i } : void 0
		});
		return $n.current = a, tr.current = a.controller, typeof a.iframe.addEventListener == "function" && a.iframe.addEventListener("pointerdown", Hr), () => {
			typeof a.iframe.removeEventListener == "function" && a.iframe.removeEventListener("pointerdown", Hr), a.destroy(), $n.current === a && ($n.current = null, tr.current = null), Ir(), Pr(), fn(null), Wr(void 0), sr.current = null, cr.current = null;
		};
	}, [
		Hr,
		Pr,
		we,
		On,
		En.node,
		Ir,
		K,
		W,
		Wr
	]), J(() => {
		if (!W) return;
		let e = tr.current;
		if (!e) return;
		let t = !1, n = (e) => {
			if (t) return;
			let n = Jd(e);
			if (Bn.current && zn.current.groupedCardInputs === n.groupedCardInputs && zn.current.fieldOverrides === n.fieldOverrides && zn.current.expiryDateValidation === n.expiryDateValidation) return;
			zn.current = n, Bn.current = !0, jn({
				scopeKey: kn,
				capabilities: n,
				received: !0
			});
			let r = qn(n);
			rr.current !== r && (Fr(), ir.current === "ready" && (ir.current = "pending", en("pending")), rr.current = r, on(r), zr());
		};
		e.setCallbacks({
			onReady: Br,
			onLayout: Vr,
			onCapabilities: n,
			onMessage: Xr
		});
		let r = e.getCapabilities();
		r.groupedCardInputs !== void 0 && queueMicrotask(() => {
			n(r);
		});
		let i = e.getLastLayout();
		i && Vr(i);
		let a = e.getLastFormState();
		return a && fn(a), e.isReady() && Br(), () => {
			t = !0, e.setCallbacks(null);
		};
	}, [
		Br,
		Vr,
		Xr,
		Fr,
		zr,
		qn,
		Tn,
		kn,
		we,
		W
	]), J(() => {
		if (!W) return;
		let e = tr.current;
		if (!e) return;
		let t = jf(ur, fe), n = Object.entries(t).sort(([e], [t]) => e.localeCompare(t)), r = n.length > 0 ? Object.fromEntries(n) : void 0, i = N(fe, {
			scopeSelector: ym,
			cssUrlText: me
		}).cssText, a = {
			debugMode: P,
			fields: Gn ?? void 0,
			fonts: H,
			uiTheme: r,
			css: i || void 0,
			autoFocusNextField: ue,
			pciTenantId: Ie,
			uiGroupCardInputs: Rn
		}, o = JSON.stringify({
			...a,
			fields: a.fields ?? null,
			fonts: a.fonts ?? null,
			uiTheme: a.uiTheme ?? null,
			css: a.css ?? null,
			pciTenantId: a.pciTenantId ?? null,
			uiGroupCardInputs: a.uiGroupCardInputs
		});
		cr.current !== o && (Fr(), ir.current !== "ready" && (or.current = null), cr.current = o, e.configure(a));
	}, [
		Fr,
		vr,
		P,
		H,
		ue,
		we,
		Gn,
		On,
		Ie,
		ur,
		Rn,
		W,
		fe,
		me
	]);
	let Zr = Y(() => {
		let e = Ve(tt, { amount: I });
		return Object.entries(_ ?? {}).forEach(([t, n]) => {
			n !== void 0 && (e[t] = n);
		}), L ? Uf({
			values: e,
			amountValueOverride: h,
			initialAmount: I,
			lockAmount: L,
			shouldHideAmountField: pt,
			hasAmountField: gt
		}) : e;
	}, [
		tt,
		I,
		_,
		h,
		L,
		pt,
		gt
	]), Qr = q((e) => {
		let t = tr.current;
		if (!t) return Promise.reject(/* @__PURE__ */ Error("error.hosted_fields_not_ready"));
		cn(null), un(null), vn(!0);
		try {
			let n = t.tokenize({ saveAccount: e });
			return Promise.resolve(n).catch((e) => {
				let t = e instanceof Error ? e : Error(String(e)), n = am(t.message);
				throw cn(n), un("submit"), t;
			}).finally(() => {
				vn(!1);
			});
		} catch (e) {
			vn(!1);
			let t = e instanceof Error ? e : Error(String(e)), n = am(t.message);
			return cn(t.message === "error.payment_context_changed" ? null : n), un("submit"), Promise.reject(t);
		}
	}, []), $r = X(null);
	tn(() => {
		if ($r.current = (t) => {
			let n = Uf({
				values: t ?? br.current?.values ?? Zr,
				amountValueOverride: h,
				initialAmount: I,
				shouldHideAmountField: pt,
				hasAmountField: gt,
				lockAmount: L
			}), r = typeof n.amount == "number" ? String(n.amount) : n.amount, i = st({
				config: A,
				amount: typeof r == "string" ? r : void 0,
				resolveText: (e) => U(e),
				resolveTextKey: Oe,
				formatAmount: (e) => ke(e)
			});
			return {
				capture: i,
				requestId: It(n.merchantRequestId) ?? void 0,
				material: Qe(A, i, JSON.stringify([
					z,
					V,
					ot,
					e,
					ct,
					lt,
					Se,
					It(n.merchantRequestId)
				]))
			};
		}, M?.getSnapshot().phase === "preparing") try {
			M.observeMaterial($r.current().material);
		} catch {
			M.observeMaterial("invalid");
		}
	});
	let ei = X(void 0);
	J(() => () => {
		let e = ei.current;
		e !== void 0 && M?.abandonPreparation(e, "error.payment_context_changed");
	}, [M]);
	let ti = q(async (e) => {
		if (te && !j?.checkout.canPay() || !i && M?.isBlocked()) return;
		let t;
		try {
			if (!i && M && $r.current) {
				let e = $r.current();
				t = M.beginPreparation(e.capture, e.material), ei.current = t;
			}
			return await e();
		} catch (e) {
			cn(e instanceof Error ? e.message : "error.payment_processing_failed"), un("submit");
			return;
		} finally {
			t !== void 0 && M?.abandonPreparation(t, M.getSnapshot().invalidated ? "error.payment_context_changed" : void 0), ei.current === t && (ei.current = void 0);
		}
	}, [
		M,
		j,
		i,
		te
	]), ni = q(async (e, t) => {
		if (te && !j?.checkout.canPay()) return;
		let n = ei.current, r = P ? Ar : void 0;
		try {
			if (n === void 0 && !i && M && $r.current) {
				let t = $r.current(e);
				n = M.beginPreparation(t.capture, t.material), ei.current = n;
			}
			if (!await Op(br)) return;
			let t = Uf({
				values: e,
				amountValueOverride: h,
				initialAmount: I,
				shouldHideAmountField: pt,
				hasAmountField: gt,
				lockAmount: L
			});
			np({
				type: at,
				method: ot,
				values: t,
				hostRiskContext: be
			});
			let a = await ap(t, Qr, tr.current);
			if (np({
				type: at,
				method: ot,
				values: a,
				hostRiskContext: be
			}), i) {
				i({
					values: a,
					hasHostedFields: W
				});
				return;
			}
			let o = typeof a.amount == "string" ? rt(a.amount) : null, s = Se ? Le(Ge, o === null ? void 0 : { amount: o }) : [], c = sp({
				uiBonuses: ve,
				selectedBonusCode: Se,
				availableBonuses: s
			});
			if (A.offers !== void 0 && A.selectedOfferId && !s.some((e) => e.code === A.selectedOfferId)) throw Error("error.payment_context_changed");
			let l = op({
				values: a,
				merchantId: z,
				userId: V,
				sessionId: le,
				accountId: ct,
				currency: ae,
				service: lt,
				bonusCode: A.offers === void 0 ? c : kt(A.offers, A.selectedOfferId),
				locales: Me,
				extra: ye,
				hostRiskContext: be,
				returnUrl: xe,
				method: ot,
				type: at,
				debug: P,
				overrideRaw: r
			});
			if (n !== void 0 && $r.current) {
				let e = $r.current();
				M?.verifyPreparation(n, e.material);
				let t = Ye(l.amount);
				if (t === void 0 != (e.capture.amount === void 0) || t !== void 0 && e.capture.amount !== void 0 && Lt(t, e.capture.amount) !== 0 || l.currency !== e.capture.currency || l.merchantId !== e.capture.merchantId || l.userId !== V || l.accountId !== ct || l.service !== (It(lt) ?? void 0) || l.merchantRequestId !== e.requestId) throw Error("error.payment_context_changed");
			}
			Sr(!0);
			try {
				if (n === void 0 ? await Cr(l) : await Cr(l, n), n !== void 0 && !M?.acceptsCreation(n)) return;
				O?.(), D && et(Ke);
			} catch {} finally {
				Sr(!1);
			}
		} catch (e) {
			Sr(!1);
			let t = e instanceof Error ? e : Error(String(e)), r = am(t.message);
			n !== void 0 && M?.abandonPreparation(n, t.message === "error.payment_context_changed" ? t.message : void 0), cn(t.message === "error.payment_context_changed" ? null : r), un("submit");
		} finally {
			n !== void 0 && M?.abandonPreparation(n), ei.current === n && (ei.current = void 0), t.setSubmitting(!1);
		}
	}, [
		M,
		j,
		te,
		A.offers,
		A.selectedOfferId,
		z,
		V,
		ct,
		lt,
		Se,
		ve,
		P,
		Cr,
		ae,
		le,
		ye,
		be,
		xe,
		Le,
		I,
		h,
		Qr,
		i,
		O,
		D,
		ot,
		Ge,
		gt,
		L,
		pt,
		W,
		at,
		Ar,
		Me,
		Ke,
		et
	]), ri = q((e) => {
		let t = Uf({
			values: e,
			amountValueOverride: h,
			initialAmount: I,
			shouldHideAmountField: pt,
			hasAmountField: gt,
			lockAmount: L
		}), n = Lp(tt, pt && !L);
		return u === "confirm" && (n = L ? (tt ?? []).filter((e) => e.id === "amount") : []), xt(Xe(n, t), t, Ee);
	}, [
		h,
		tt,
		I,
		L,
		gt,
		u,
		pt,
		Ee
	]), ii = (Or ? rm(Tr, "error.unknown", U) : null) || (Sn ? null : xn);
	return !Ge || !tt ? null : /* @__PURE__ */ Q($s, {
		initialValues: Zr,
		onSubmit: ni,
		validate: ri,
		innerRef: br,
		validateOnMount: !0,
		children: ({ values: i, errors: a, initialValues: c, submitForm: l, setFieldValue: d, setFieldTouched: f, isValid: _, dirty: y }) => {
			let x = (e, t) => {
				if (f(e, !0, !1), d(e, t, !0), typeof window > "u" || typeof document > "u") return;
				let n = () => {
					let t = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/"/g, "\\\""), n = document.querySelector(`[name="${t}"]`);
					if (n) {
						n.focus();
						return;
					}
					document.getElementById(k.id("payment-field", { slug: e }))?.focus();
				}, r = typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : null;
				if (r) {
					r(n);
					return;
				}
				setTimeout(n, 0);
			}, w = typeof i.amount == "string" ? i.amount : "", O = (L ? I : h ?? (pt && gt ? I : void 0)) ?? w, j = Uf({
				values: i,
				amountValueOverride: h,
				initialAmount: I,
				shouldHideAmountField: pt,
				hasAmountField: gt,
				lockAmount: L
			}), N = C(ot === "payout" ? r.PAYOUT : r.PAYIN, se, dt), re = oe(O, ut, { maxBoundary: N }), F = ie(re, U, ke), R = !!re, z = typeof a.amount == "string" && a.amount.length > 0 ? a.amount : void 0, V = z ? void 0 : F, ce = L ? z || V : void 0, le = Object.values(c).some(De), H = v && u !== "confirm" && !le, ue = Te(a), de = $e(u === "confirm" ? [] : Xe(ht, j), j), fe = u === "confirm" || !W || Dp(dn), pe = y || W && Dp(dn), me = !_ || ue || R || de || !fe || !pe && H, he = te && A.checkoutState?.phase !== "confirmed" || kr || _n || me, ge = !me, ve = (!Or || _) && at !== "info", ye = !t, be = ye && ve, xe = U("payment.submit"), we = U("cta.reset"), Oe = kr || _n, Ae = kr || _n, je = W ? {
				ready: yn && sn === null,
				dirty: !!dn?.dirty,
				valid: !!dn?.isValid && sn === null,
				complete: !!dn?.isComplete && sn === null,
				error: sn !== null
			} : null, Me = _ && !ue && !R && !de && (!je || je.valid), Ne = Me && fe, Pe = qe && D && u === "form", Fe = Pe ? xp({
				amount: O,
				bonusCode: A.offers === void 0 ? Se : kt(A.offers, A.selectedOfferId) ?? null,
				canSubmit: ve && !he,
				complete: Ne,
				currency: ae,
				dirty: y || !!je?.dirty,
				errors: a,
				fields: ht,
				hostedFields: je,
				initialValues: c,
				method: ne,
				paymentType: Ge,
				submitting: Ae,
				valid: Me,
				values: j
			}) : null, Ie = u !== "confirm", Le = Ie && W, Re = (T || be) && !Le && Ut.length === 0, Ve = (T || be) && Ut.length > 0, He = Le && Ct.length > 0, We = Le && wt.length > 0, Ye = Bt(O) || O || void 0, Ze = !L && !_e && Ie && vt.length > 0 && !!ht.find((e) => e.id === Fp), Qe = ye && ve ? 1 : 0, et = Pt.length + +!!He + +!!Le + +!!We + Ut.length + Qe, tt = Pt.length, nt = tt + +!!He, rt = nt + +!!Le, it = rt + +!!We, st = it + Ut.length, ct = (e) => Ze && e === Fp ? /* @__PURE__ */ Q(Gd, {
				suggestions: vt,
				activeSuggestion: Ye,
				onSelect: (e) => {
					d(Fp, Rt(e), !1);
				},
				formatLabel: yt,
				amountLimits: ut,
				size: "xs"
			}) : null, lt = bt(i), ft = (e) => {
				let t = lt.get(e);
				return Wl(t) ? /* @__PURE__ */ Q("div", {
					className: Gl,
					children: /* @__PURE__ */ Q(Jl, {
						notification: t,
						translateKeys: Ee
					})
				}) : null;
			}, xt = (e, { isLastRenderableField: t }) => {
				let n = lt.get(e), r = n && !Wl(n) ? n : null, i = P && sm(e);
				return !r && !i ? null : /* @__PURE__ */ $("div", {
					className: Kl,
					children: [r && /* @__PURE__ */ Q(Jl, {
						notification: r,
						translateKeys: Ee
					}), i && /* @__PURE__ */ $("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ Q("span", {
							className: "text-sm font-medium",
							children: "Debug"
						}), om(e).map(({ value: t, label: n }) => /* @__PURE__ */ Q(ee, {
							variant: "neutral",
							size: "sm",
							disabled: kr,
							onClick: () => {
								x(e, t);
							},
							label: n
						}, `${e}_${n}`))]
					})]
				});
			}, St = (e) => e !== Fp || !g ? null : /* @__PURE__ */ Q("div", {
				"data-slot": "payment-form-after-amount",
				className: "flex min-w-0 flex-col gap-2",
				children: g
			}), Tt = Le && Dt, G = Le && K && !Tt, Et = b && Tt && !At, Ot = !b && (Pt.length > 0 || Ut.length > 0), Nt = G, It = jt && Ot && Le && S === "contained", Lt = jt && Ot && !Le && S === "contained", zt = jt && At, Vt = jt && b && !At || zt || It || Lt, Wt = !Le, Gt = G && !b && jt && S === "contained", Kt = G && !Gt ? Bp : Je, qt = (e) => !1, Jt = (e) => /* @__PURE__ */ Q(lp, {
				kind: "field-panel",
				fieldEdgeSpacing: Wt ? "balanced" : "default",
				children: e
			}), Yt = (e) => Jt(/* @__PURE__ */ Q("div", {
				className: Kt,
				children: e
			})), Xt = Tt ? {
				marginInline: Cn ? "calc(var(--pc-size-input-focus-ring, 3px) * -1)" : -4,
				...Cn ? { marginBlock: "calc(var(--pc-size-input-focus-ring, 3px) * -1)" } : {}
			} : void 0, Zt = {
				margin: -4,
				width: "calc(100% + 8px)"
			}, q = {
				marginInline: -4,
				width: "calc(100% + 8px)"
			}, Qt = G ? q : Zt;
			Tt && (Qt = wn === null ? void 0 : { height: wn }), !Tt && wn !== null && (Qt = {
				...G ? q : Zt,
				height: G || typeof wn != "number" ? wn : wn + 8
			});
			let J;
			Tt || (J = G ? { insetInline: -4 } : { inset: -4 });
			let $t = /* @__PURE__ */ $("div", {
				"data-theme": Tt ? void 0 : Be,
				className: m(k.className("hosted-fields-frame"), "relative", Tt ? "overflow-hidden rounded-[var(--pc-radius-lg)] bg-transparent" : "overflow-visible bg-transparent"),
				style: {
					...Vn,
					...Xt
				},
				children: [/* @__PURE__ */ Q("div", {
					ref: Zn,
					"aria-hidden": !yn || void 0,
					"data-slot": "hosted-fields-target",
					"data-state": yn ? "ready" : "loading",
					inert: !yn || void 0,
					className: m(k.className("hosted-fields-target"), "w-full overflow-hidden", !yn && "pointer-events-none", E && yn && "duration-180 ease-out", E && yn && (Tt ? "transition-[height,opacity]" : "transition-opacity"), yn ? "opacity-100" : "opacity-0"),
					style: Qt
				}), W && /* @__PURE__ */ Q("div", {
					"aria-hidden": !Sn || void 0,
					"data-testid": "cashier-hosted-fields-skeleton",
					"data-slot": "hosted-fields-skeleton-layer",
					"data-state": Sn ? "error" : Ln,
					className: m(k.className("hosted-fields-skeleton"), "pointer-events-none absolute inset-0 z-10 overflow-hidden", E && "transition-opacity duration-180 ease-out", Fn ? "opacity-100" : "opacity-0"),
					style: J,
					children: Sn ? /* @__PURE__ */ Q(Vd, {
						fields: Jn,
						className: "h-full",
						state: "error",
						errorMessage: xn
					}) : /* @__PURE__ */ Q(Vd, {
						fields: Jn,
						className: "h-full"
					})
				})]
			}), en = !!(Ht && Yp(Ht)), tn = gr && hr ? /* @__PURE__ */ Q(Sm, {
				brand: mr?.brand,
				logo: hr
			}) : null, Y = !!(Ht && en), nn = Y ? Ht : null, X = !!(nn && tn), Z = Tt && !!nn, rn = Z, on = [...Ft ? [Ft] : []], cn = Z ? on : [...on, ...nn ? [nn] : []], ln = K, un = Hp;
			Tt && (un = Cn ? Up : Vp);
			let fn = on.length > 0 ? /* @__PURE__ */ Q(dd, {
				fields: on,
				translateKey: U,
				translateKeys: Ee,
				disabled: kr,
				amountError: V,
				renderBelowFieldContent: ct,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: ft,
				renderAfterField: xt,
				renderAfterFieldRow: St,
				reserveInputMessageSpace: ln,
				reserveCheckboxMessageSpace: ln,
				reserveLastCheckboxMessageSpace: ln,
				reserveLastAmountMessageSpace: ln,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}) : null, pn = nn ? /* @__PURE__ */ Q("div", {
				"data-slot": "cashier-card-shell-inline-footer-row",
				className: m("w-full min-w-0", rn ? "pr-16" : void 0),
				children: /* @__PURE__ */ Q(dd, {
					fields: [nn],
					translateKey: U,
					translateKeys: Ee,
					disabled: kr,
					amountError: V,
					renderBelowFieldContent: ct,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: xt,
					renderAfterFieldRow: St,
					reserveInputMessageSpace: ln,
					reserveCheckboxMessageSpace: ln,
					reserveLastCheckboxMessageSpace: ln,
					reserveLastAmountMessageSpace: ln,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, mn;
			Z ? mn = /* @__PURE__ */ $("div", {
				"data-slot": "cashier-card-shell-details-stack",
				className: "relative flex w-full min-w-0 flex-col gap-1",
				children: [
					fn,
					pn,
					rn && /* @__PURE__ */ Q("div", {
						"data-slot": "cashier-card-shell-inline-brand",
						className: Wp,
						"aria-hidden": !X,
						children: X ? tn : null
					})
				]
			}) : cn.length > 0 && (mn = /* @__PURE__ */ Q(dd, {
				fields: cn,
				translateKey: U,
				translateKeys: Ee,
				disabled: kr,
				amountError: V,
				renderBelowFieldContent: ct,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: ft,
				renderAfterField: xt,
				renderAfterFieldRow: St,
				reserveInputMessageSpace: ln,
				reserveCheckboxMessageSpace: ln,
				reserveLastCheckboxMessageSpace: ln,
				reserveLastAmountMessageSpace: ln,
				addFirstFieldTopPadding: !1,
				addLastFieldBottomPadding: !1
			}));
			let hn = mn, gn = G ? /* @__PURE__ */ $("div", {
				"data-slot": "cashier-unbranded-card-fields",
				className: Bp,
				children: [$t, hn]
			}) : $t, vn = Ht && !Y ? /* @__PURE__ */ Q("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ Q(dd, {
					fields: [Ht],
					translateKey: U,
					translateKeys: Ee,
					disabled: kr,
					amountError: V,
					renderBelowFieldContent: ct,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: xt,
					renderAfterFieldRow: St,
					reserveInputMessageSpace: ln,
					reserveCheckboxMessageSpace: ln,
					reserveLastCheckboxMessageSpace: ln,
					reserveLastAmountMessageSpace: ln,
					addFirstFieldTopPadding: !1,
					addLastFieldBottomPadding: !1
				})
			}) : null, bn = X ? null : tn, Tn = gr && !nn && !!(ze || hr), En = vn || bn ? /* @__PURE__ */ $("div", {
				"data-slot": "cashier-card-shell-footer-row",
				className: m("flex min-w-0 items-end w-full gap-3 pb-1.5", vn ? "justify-between" : "justify-end px-0.5"),
				children: [vn, bn]
			}) : void 0, Dn = Tt && (!!vn || En == null && !Tn), On = gn;
			Tt ? On = /* @__PURE__ */ Q(o, {
				dataTheme: vr,
				brandMotionKey: yr,
				className: k.className("hosted-fields-card-shell"),
				cardFields: $t,
				details: hn,
				detailsClassName: un,
				footer: En,
				footerClassName: "w-full",
				reserveFooterSpace: Tn,
				hasReservedTrailingMessageSpace: Dn
			}) : Gt && (On = /* @__PURE__ */ Q(lp, {
				kind: "field-panel",
				children: gn
			}));
			let kn = Pt.length > 0 ? /* @__PURE__ */ Q("div", {
				className: "contents",
				children: /* @__PURE__ */ Q(dd, {
					fields: Pt,
					translateKey: U,
					translateKeys: Ee,
					disabled: kr,
					amountError: V,
					renderBelowFieldContent: ct,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: xt,
					renderAfterFieldRow: St,
					animateRows: E,
					animationStartIndex: 0,
					animationTotalCount: et,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !G && Nt,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !G && (!Vt && !Mt || qt(Pt)),
					addLastFieldBottomPadding: !G && !Vt && !Mt && !Re,
					reserveTrailingActionClearance: Re
				})
			}) : null, An = G ? "relative mb-0 w-full" : Et ? "relative mb-2 @md:mb-3 w-full" : "relative mb-2 w-full", jn = Le ? /* @__PURE__ */ $(an, { children: [In && /* @__PURE__ */ Q("span", {
				className: "sr-only",
				role: "status",
				"aria-live": "polite",
				"data-slot": "hosted-fields-loading-status",
				children: U("loading.hosted_fields")
			}), /* @__PURE__ */ $("div", {
				id: k.id("hosted-fields-container"),
				ref: Yn,
				"aria-busy": In ? !0 : void 0,
				className: m(k.className("hosted-fields-container"), An, E && "pc-enter-rise-item"),
				"data-motion": E ? void 0 : "static",
				"data-testid": "cashier-hosted-fields-container",
				style: E ? Ic({
					index: nt,
					total: et,
					direction: "reverse"
				}) : void 0,
				children: [
					/* @__PURE__ */ Q("span", {
						ref: Ue,
						"aria-hidden": "true",
						"data-slot": "cashier-card-shell-theme-probe",
						hidden: !0
					}),
					On,
					/* @__PURE__ */ Q("div", {
						"aria-hidden": "true",
						className: "pointer-events-none invisible absolute inset-x-0 top-0 -z-10 overflow-hidden",
						children: /* @__PURE__ */ Q("div", {
							ref: Qn,
							className: "w-full min-w-0",
							children: /* @__PURE__ */ Q(Vd, { fields: Jn })
						})
					})
				]
			})] }) : null, Mn = (e, t) => e.length > 0 ? /* @__PURE__ */ Q("div", {
				className: m(k.className("hosted-fields-notifications"), t.placement === "top" ? "mb-2.5 flex flex-col gap-2 @xl:col-span-2" : "mt-3 mb-4 flex flex-col gap-2 @xl:col-span-2", E && "pc-enter-rise-item"),
				style: E ? Ic({
					index: t.animationIndex,
					total: et,
					direction: "reverse"
				}) : void 0,
				children: e.map(({ fieldId: e, notification: t }) => /* @__PURE__ */ Q(Jl, {
					notification: t,
					translateKeys: Ee
				}, `${e}-${t.key}-${t.type}`))
			}) : null, Nn = He ? Mn(Ct, {
				placement: "top",
				animationIndex: tt
			}) : null, Pn = We ? Mn(wt, {
				placement: "bottom",
				animationIndex: rt
			}) : null, Rn = Ut.length > 0 ? /* @__PURE__ */ Q("div", {
				className: "contents",
				children: /* @__PURE__ */ Q(dd, {
					fields: Ut,
					translateKey: U,
					translateKeys: Ee,
					disabled: kr,
					amountError: V,
					renderBelowFieldContent: ct,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: ft,
					renderAfterField: xt,
					renderAfterFieldRow: St,
					animateRows: E,
					animationStartIndex: it,
					animationTotalCount: et,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !1,
					reserveLastCheckboxMessageSpace: !G && Nt,
					reserveLastAmountMessageSpace: !1,
					addFirstFieldTopPadding: !G && (!Vt && !Mt || qt(Ut)),
					addLastFieldBottomPadding: !G && !Vt && !Mt && !Ve,
					reserveTrailingActionClearance: !G && Ve
				})
			}) : null, zn = b && (!!kn || !!Rn || !Et && (!!jn || !!Nn || !!Pn)), Bn = /* @__PURE__ */ $(an, { children: [
				kn,
				!Et && Nn,
				!Et && jn,
				!Et && Pn,
				Rn
			] }), Hn = /* @__PURE__ */ Q("div", {
				"data-slot": "quick-payment-form-grid",
				className: m(Kt, At && "overflow-visible", At && G ? "pt-3" : At || Et ? "pt-0" : Tt ? "pt-2" : "pt-0"),
				children: Bn
			}), Un = zt ? Jt(Hn) : Hn, Wn = /* @__PURE__ */ $(an, { children: [
				Et && Nn,
				Et && jn,
				Et && Pn,
				zn && /* @__PURE__ */ Q(lp, {
					kind: "form",
					chrome: At ? "plain" : "contained",
					fieldEdgeSpacing: Wt ? "balanced" : "default",
					animateEntrance: E,
					children: Un
				})
			] }), Gn = /* @__PURE__ */ $(an, { children: [
				It && kn ? Yt(kn) : kn,
				Nn,
				jn,
				Pn,
				It && Rn ? Yt(Rn) : Rn
			] }), Kn = Lt ? Yt(Gn) : Gn, qn = k.attrs("payment-form", { slug: e }), Xn = m(qn.className, b ? "contents" : [
				Kt,
				E && "pc-enter-rise",
				"pt-0"
			]), $n = b ? Wn : Kn;
			return /* @__PURE__ */ $(an, { children: [
				Pe && /* @__PURE__ */ Q(B, {
					sourceId: Ke,
					state: Fe
				}),
				/* @__PURE__ */ Q(Dm, {
					attempt: M,
					values: i,
					readMaterial: $r
				}),
				/* @__PURE__ */ Q(Cm, {
					enabled: _t,
					amountValue: O,
					sharedAmount: I,
					setFieldValue: d,
					setCashierState: Ce
				}),
				s && /* @__PURE__ */ Q(wm, {
					onValuesChange: s,
					values: j,
					fields: mt,
					hasHostedFields: W
				}),
				n && /* @__PURE__ */ Q(Em, {
					onPromptStateChange: n,
					isComplete: ge,
					errorMessage: ii
				}),
				t && /* @__PURE__ */ Q(Tm, {
					onActionsChange: t,
					submitLabel: xe,
					resetLabel: we,
					submitDisabled: he,
					submitVisible: ve,
					submitLoading: Ae,
					resetDisabled: Oe,
					resetVisible: P,
					submitForm: () => ti(l),
					onReset: Kr
				}),
				ce && ce !== p && /* @__PURE__ */ Q(fd, { message: ce }),
				Ie && /* @__PURE__ */ Q(uc, {
					id: k.id("payment-form", { slug: e }),
					className: Xn,
					"data-pc-slot": qn["data-pc-slot"],
					"data-pc-slug": qn["data-pc-slug"],
					"data-pc-part": qn["data-pc-part"],
					noValidate: !0,
					onSubmit: (e) => {
						e.preventDefault(), e.stopPropagation(), ti(l);
					},
					children: $n
				}),
				ye && ve && /* @__PURE__ */ Q("div", {
					className: E ? "pc-enter-rise-item" : void 0,
					style: E ? Ic({
						index: st,
						total: et,
						direction: "reverse"
					}) : void 0,
					children: /* @__PURE__ */ Q(ee, {
						variant: "secondary",
						disabled: he,
						loading: Ae,
						onClick: () => {
							ti(l);
						},
						label: xe
					})
				})
			] });
		}
	});
}
function Sm({ brand: e, logo: t }) {
	let [n, r] = Z(null), [i, a] = Z({
		key: "",
		values: []
	}), o = Re(n, { tokenName: "--pc-color-secondary" }), s = [
		e ?? "",
		o,
		JSON.stringify(t ?? null)
	].join("|"), c = i.key === s ? i.values : [], l = k(t, o, !1).find((e) => !c.includes(e));
	return /* @__PURE__ */ Q("div", {
		ref: r,
		"data-slot": "cashier-card-brand-footer",
		className: "flex h-6 w-14 shrink-0 items-center justify-end overflow-hidden pr-0.5",
		children: l && /* @__PURE__ */ Q("img", {
			src: l,
			alt: "",
			"aria-hidden": "true",
			className: m("block h-5 w-12 shrink-0 object-contain object-right", "pc-card-brand-logo-enter"),
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
function Cm({ enabled: e, amountValue: t, sharedAmount: n, setFieldValue: r, setCashierState: i }) {
	let a = X(t), o = X(n), s = X(n);
	return J(() => {
		let c = t !== a.current, l = n !== o.current;
		if (a.current = t, o.current = n, e) {
			if (l && !c && t !== n) {
				a.current = n, s.current = n, r(Fp, n, !0);
				return;
			}
			if (!c && l) {
				s.current = n;
				return;
			}
			t !== s.current && (s.current = t, i((e) => e.initialAmount === t ? e : {
				...e,
				initialAmount: t
			}));
		}
	}, [
		t,
		e,
		i,
		r,
		n
	]), null;
}
function wm({ onValuesChange: e, values: t, fields: n, hasHostedFields: r }) {
	return J(() => {
		e({
			values: kp(t, n),
			hasHostedFields: r
		});
	}, [
		n,
		r,
		e,
		t
	]), null;
}
function Tm({ onActionsChange: e, submitLabel: t, resetLabel: n, submitDisabled: r, submitVisible: i, submitLoading: a, resetDisabled: o, resetVisible: s, submitForm: c, onReset: l }) {
	let u = X(c), d = X(l);
	J(() => {
		u.current = c;
	}, [c]), J(() => {
		d.current = l;
	}, [l]);
	let f = q(() => u.current(), []), p = q(() => {
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
function Em({ onPromptStateChange: e, isComplete: t, errorMessage: n }) {
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
function Dm({ attempt: e, values: t, readMaterial: n }) {
	return tn(() => {
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
function Om({ paymentType: e, selectionId: t, amountValue: n, valueOverrides: r, hideAmountField: i = !1, presentedAmountError: a, renderAfterAmountField: o, surfaceChrome: s = "contained", fieldPanelMode: l = "auto", onActionsChange: u, onPromptStateChange: d, onPreparedValues: f, onValuesChange: p, submitMode: m = "prepare", reserveTrailingActionSpace: h = !1, animateEntrance: g = !0, observePublicState: _ = !0, onPaymentSubmitted: v }) {
	let { translateKeys: y } = c(), b = t ?? ge(e), x = P(e), S = z(e, n), C = x && i, w = q((e) => {
		d(b, e);
	}, [d, b]), T = q((t) => {
		f(e, t);
	}, [f, e]), ee = q((t) => {
		p(e, t);
	}, [p, e]), E = e.notifications ?? [], D = E.filter((e) => e.orientation === "top"), O = E.filter((e) => e.orientation !== "top");
	return /* @__PURE__ */ $(an, { children: [
		D.length > 0 && /* @__PURE__ */ Q("div", {
			className: "mb-2 flex flex-col gap-2",
			children: D.map((e, t) => /* @__PURE__ */ Q(Jl, {
				notification: e,
				translateKeys: y
			}, `${e.key}-${e.type}-${String(t)}`))
		}),
		/* @__PURE__ */ Q(xm, {
			id: b,
			onActionsChange: u,
			onPromptStateChange: w,
			onPreparedValues: m === "prepare" ? T : void 0,
			onValuesChange: ee,
			hideAmountField: C,
			presentedAmountError: a,
			amountValueOverride: C ? S : void 0,
			renderAfterAmountField: o,
			valueOverrides: r,
			requireDirtyBeforeSubmit: !1,
			comboViewLayout: !0,
			comboViewSurfaceChrome: s,
			fieldPanelMode: l,
			reserveTrailingActionSpace: h,
			animateEntrance: g,
			observePublicState: _,
			onPaymentSubmitted: v
		}),
		O.length > 0 && /* @__PURE__ */ Q("div", {
			className: "mt-3 mb-2 flex flex-col gap-2",
			children: O.map((e, t) => /* @__PURE__ */ Q(Jl, {
				notification: e,
				translateKeys: y
			}, `${e.key}-${e.type}-${String(t)}`))
		})
	] });
}
//#endregion
//#region src/components/AccordionSummaryFooter.tsx
function km({ summaryFields: e, rowVariants: t, merchantElements: n }) {
	return e.length === 0 && !n ? null : /* @__PURE__ */ Q(Uc, {
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
var Am = {
	xxs: "h-2.5 w-2.5 shrink-0",
	xs: "h-3 w-3 shrink-0",
	sm: "h-3.5 w-3.5 shrink-0"
};
function jm({ size: e = "sm" }) {
	return /* @__PURE__ */ Q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className: Am[e],
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
var Mm = (e) => typeof e == "number" && Number.isFinite(e);
function Nm({ count: e, domSlug: t }) {
	let n = pe();
	if (!Mm(e) || e <= 0) return null;
	let r = t ? n.id("bonus-count", { slug: t }) : void 0, i = t ? n.id("bonus-count-value", { slug: t }) : void 0;
	return /* @__PURE__ */ $("span", {
		id: r,
		className: [n.className("bonus-count", t ? { slug: t } : void 0), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
		"data-testid": "cashier-bonus-count",
		children: [/* @__PURE__ */ Q(jm, { size: "xs" }), /* @__PURE__ */ Q("span", {
			id: i,
			className: n.className("bonus-count-value", t ? { slug: t } : void 0),
			"data-testid": "cashier-bonus-count-value",
			children: e
		})]
	});
}
//#endregion
//#region src/ui/PaymentTypesList.tsx
function Pm({ paymentTypes: e, onSelect: t, listStyle: n, compact: r, stacked: i = !1, showMeta: a = !1, selectable: o = !1, selectedPaymentType: s, renderActions: c, isPaymentTypeDisabled: l, interactionLocked: u = !1, preserveDisabledSelection: d = !1, itemVariant: f = "neutral", itemAppearance: p = "solid", includeItemDataTheme: m = !0, domScope: h, animateItems: g = !1, bonusEvaluationContext: _, themeSlot: v }) {
	let y = pe(), { getBonusCountForPaymentType: b } = F(), x = n, S = h ? y.token(h, "list") : null, C = S ? y.id("payment-types-list", { slug: S }) : void 0, w = y.attrs("payment-types-list", S ? { slug: S } : void 0), T = y.attrs("payment-types-list-content", S ? { slug: S } : void 0), ee = Y(() => W(e, s), [e, s]), E = { staggerMode: "compressed-tail" }, D = Y(() => e.map((e) => {
		let t = ge(e), n = typeof _ == "function" ? _(e) : _, r = b(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Q(Nm, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		_,
		b,
		e
	]);
	return /* @__PURE__ */ Q(Pu, {
		id: C,
		rootAttributes: w,
		className: "w-full",
		contentAttributes: T,
		contentClassName: g ? Cc : void 0,
		contentStyle: g ? Rc(E) : void 0,
		listStyle: x,
		compact: r,
		stacked: i,
		children: D.map(({ paymentTypeKey: e, paymentType: n, count: i, label: s }, h) => {
			let { name: _, nameKeys: y, logo: b, limits: S, fee: C } = n, w = e, T = vt(n), O = !!l?.(n), k = T || O, A = u || O && !T, te = o && ee === n && (!k || d), j = c?.(n), M = Fe(n);
			return /* @__PURE__ */ Q(Nu, {
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
				title: M ?? void 0,
				description: T ? nt : void 0,
				bonusLabel: s,
				hasAvailableBonuses: i > 0,
				onSelect: t,
				interactive: !T,
				isSelected: te,
				isDisabled: A,
				isUnavailable: T,
				hoverMode: o ? "none" : void 0,
				includeDataTheme: m,
				actions: j,
				variant: f,
				appearance: p,
				themeSlot: v,
				animationClassName: g ? wc : void 0,
				animationStyle: g ? Lc(h, D.length, "forward", E) : void 0
			}, e);
		})
	});
}
//#endregion
//#region src/hooks/useCashierActionConfirmation.tsx
var Fm = ({ isConfirmDisabled: e = !1 } = {}) => {
	let { translateKey: t } = c(), n = Ll();
	return R({
		presentation: "drawer",
		renderActions: ({ confirmLabel: t, confirmVariant: n, isSubmitting: r, onConfirm: i }) => /* @__PURE__ */ Q(ee, {
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
			renderFooter: (e) => /* @__PURE__ */ Q(il, {
				placement: "bottom",
				items: [e]
			})
		}
	});
}, Im = () => {
	let e = A(), t = L(), n = X(t);
	J(() => {
		n.current = t;
	}, [t]);
	let r = at(), { translateKey: i } = c(), { uiAccountDelete: a, merchantId: o, userId: s, sessionId: l, method: u, currency: d, fetchConfig: f, extraAttributes: p, onAccountDeleted: m } = Qt(re), { selectedPaymentType: h, clearPaymentSelection: g } = qe(), { openActionConfirmation: _, actionConfirmationModal: v } = Fm({ isConfirmDisabled: t });
	return {
		requestAccountDelete: q((c) => {
			if (!a || t) return;
			let v = c.accountId;
			if (!v) return;
			let y = i(c.name), b = i("account.delete.title"), x = i("account.delete.description"), S = i("cta.delete"), C = i("account.delete.error");
			_({
				title: b,
				description: je(x, "name", y),
				confirmLabel: S,
				confirmVariant: "danger",
				errorMessage: C,
				onConfirm: async () => {
					if (!n.current) {
						if (!o || !s || !l) throw Error("Missing required account context.");
						await O({
							client: e,
							query: {
								merchantId: o,
								userId: s,
								sessionId: l,
								accountId: v
							},
							parseAs: "text"
						}), (h === ge(c) || h === c.name || h === v) && g(), m && m(c), await r.invalidateQueries({ queryKey: gt({
							merchantId: o,
							method: u,
							userId: s,
							sessionId: l,
							currency: d,
							fetchConfig: f,
							extraAttributes: p
						}) });
					}
				}
			});
		}, [
			a,
			e,
			t,
			i,
			_,
			o,
			s,
			l,
			h,
			g,
			m,
			r,
			u,
			d,
			f,
			p
		]),
		actionConfirmationModal: v
	};
};
//#endregion
//#region src/hooks/useContentInset.ts
function Lm({ primaryContainer: e, overlayContainer: t, useOverlay: n = !1, bottomGap: r = 16, enabled: i = !0 }) {
	let { contentNode: a, setContentInset: o } = _l();
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
var Rm = ({ isOpen: e, canShow: t, onClose: n, useOverlayInset: r = !1, enableBackHotkey: i = !0, contentBottomGap: a = 16, reserveContentInset: o = !0 }) => {
	let { contentNode: s } = _l(), c = s?.parentElement ?? s ?? null, [l, u] = Z(null), [d, f] = Z(null);
	return Lm({
		primaryContainer: l,
		overlayContainer: d,
		useOverlay: r,
		bottomGap: a,
		enabled: o
	}), su({ onBack: e && i ? n : void 0 }), {
		floatingPortalTarget: c,
		showOverlay: !!(e && t && c),
		setFloatingContainer: u,
		setOverlayContainer: f
	};
}, zm = "max-h-[min(31rem,100%)]", Bm = "pc-enter-tray-item", Vm = 12, Hm = {
	...U,
	height: "36px"
};
function Um({ domScope: e, title: t, triggerLabel: n, canOpen: r, shouldRender: i, triggerContent: a, children: o, animationStyle: s, animateTrigger: c = !0, floating: l = !1, actionContent: u, delegateTriggerInteraction: d = !1 }) {
	let f = pe(), { items: p, setBottomRailFadeSuppressed: h } = _l(), [g, _] = Z({
		canOpen: r,
		isOpen: !1
	});
	g.canOpen !== r && _({
		canOpen: r,
		isOpen: !1
	});
	let { isOpen: v } = g, [y, b] = Z(null), x = q(() => {
		_((e) => ({
			...e,
			isOpen: !1
		}));
	}, []), S = q(() => {
		r && _((e) => ({
			canOpen: r,
			isOpen: e.canOpen !== r || !e.isOpen
		}));
	}, [r]), C = v && r, w = l === "adaptive", T = l === !0, ee = w && p.bottom.length > 0, E = Su({
		enabled: w && i,
		target: y
	}), D = T || w && E && !ee, { floatingPortalTarget: O, showOverlay: k, setFloatingContainer: A, setOverlayContainer: te } = Rm({
		isOpen: C,
		canShow: r && D,
		onClose: x,
		contentBottomGap: Vm,
		reserveContentInset: D
	}), j = D ? C && (k || !O) : C, M = D ? O?.parentElement ?? O ?? void 0 : void 0, N = !!(D && O), P = f.id(`${e}-list`);
	if (J(() => {
		if (N) return h(!0), () => {
			h(!1);
		};
	}, [h, N]), !i) return null;
	let ne = {
		close: x,
		isOpen: C,
		panelId: P,
		toggle: S
	}, re = (() => {
		if (!d) return r ? 0 : -1;
	})(), F = (t) => {
		let i = w ? f.id(`${e}-trigger-${t}`) : f.id(`${e}-trigger`), o = f.className(w ? `${e}-trigger-${t}` : `${e}-trigger`);
		return /* @__PURE__ */ Q("div", {
			id: i,
			role: d ? void 0 : "button",
			"data-theme": "neutral",
			style: c ? s : void 0,
			className: m(o, c && Bm, "w-full text-left", e === "payment-type-picker" ? "rounded-[var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]" : "rounded-[var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))]", "transition-colors duration-200", "focus-visible:[outline-style:solid]", "focus-visible:outline-2", "focus-visible:outline-[var(--pc-color-accent)]", "focus-visible:outline-offset-2", !d && "group", r && !d && "cursor-pointer"),
			"aria-label": d ? void 0 : n,
			onClick: d ? void 0 : S,
			onKeyDown: d ? void 0 : (e) => {
				r && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), S());
			},
			"aria-expanded": d ? void 0 : C,
			"aria-controls": d ? void 0 : P,
			"aria-disabled": d ? void 0 : !r,
			tabIndex: re,
			children: a(ne)
		});
	}, I = /* @__PURE__ */ Q(Bl, {
		isOpen: j,
		onClose: x,
		portalContainer: M,
		overlayClassName: "flex flex-col justify-end",
		contentClassName: m("w-full min-h-0 rounded-t-[var(--pc-radius-2xl)]", zm),
		title: t,
		contentRef: te,
		children: o(ne)
	}), L = F("inline"), ie = /* @__PURE__ */ Q("div", {
		ref: w ? b : void 0,
		className: m("mt-0", D && "invisible pointer-events-none"),
		"aria-hidden": D ? "true" : void 0,
		inert: D ? !0 : void 0,
		children: L
	}), ae = F("floating"), R = D && O ? rn(/* @__PURE__ */ Q("div", {
		"data-selection-picker-floating": e,
		"data-payment-type-picker-floating": e === "payment-type-picker" ? "true" : void 0,
		className: m("pointer-events-none absolute inset-0 z-10", "flex items-end justify-center"),
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
				style: Hm,
				className: "pointer-events-none absolute inset-x-0 bottom-full"
			}), /* @__PURE__ */ Q("div", {
				"data-slot": `${e}-floating-content`,
				className: m("pointer-events-auto", mt),
				children: ae
			})]
		})
	}), O) : null;
	return /* @__PURE__ */ $(an, { children: [
		T ? R ?? ie : ie,
		w && R,
		I,
		u
	] });
}
//#endregion
//#region src/components/SelectionPickerTriggerListItem.tsx
function Wm({ children: e }) {
	return /* @__PURE__ */ Q("div", {
		className: "flex items-center gap-1.5",
		children: e
	});
}
function Gm({ actionStopsPropagation: e, actions: t, actionsAlignment: r, animationClassName: i, animationStyle: a, ariaControls: o, ariaExpanded: s, ariaLabel: c, badges: l, bonusLabel: u, compact: d = !0, description: f, descriptionPresentation: p, domSlug: h, fee: g, embedded: _ = !1, hasAvailableBonuses: v, hoverMode: y, includeDataTheme: b, infoDrawer: x, interactive: S, interactiveSurface: C, isDisabled: w, isUnavailable: T, isSelected: ee, limits: E, logo: D, logoCompact: O, logoContent: k, logoContentPresentation: A, logoSurface: te, meta: j, metaPlacement: M, name: N, nameKeys: P, onSelect: ne, presentationPaymentType: re, section: F, selectionId: I, showMeta: L, showSelectedIndicator: ie, spacing: ae = "default", themeSlot: R, title: z }) {
	return /* @__PURE__ */ Q(Nu, {
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
		domSlug: h,
		fee: g,
		hasAvailableBonuses: v,
		hoverMode: y,
		includeDataTheme: b,
		infoDrawer: x,
		interactive: S,
		interactiveSurface: C,
		isDisabled: w,
		isUnavailable: T,
		isSelected: ee,
		listStyle: n.LIST,
		compact: d,
		limits: E,
		logo: D,
		logoCompact: O,
		logoContent: k,
		logoContentPresentation: A,
		logoSurface: te,
		meta: j,
		metaPlacement: M,
		name: N,
		nameKeys: P,
		onSelect: ne,
		presentationPaymentType: re,
		section: F,
		selectionId: I,
		showMeta: L,
		showSelectedIndicator: ie,
		themeSlot: R,
		title: z,
		variant: "default",
		appearance: "solid",
		shape: "default",
		balanceLogo: !1,
		density: "compact",
		embedded: _,
		className: m(!_ && "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", ae === "payment-list" && "mb-3 @md:mb-4")
	});
}
//#endregion
//#region src/components/BonusPicker.tsx
var Km = [], qm = (e) => typeof e != "number" || !Number.isFinite(e) ? 0 : Math.max(0, Math.min(99, Math.round(e) - 1)), Jm = (e) => {
	let t = (e.conditions?.include ?? []).map((e) => e.minAmount).filter((e) => typeof e == "number" && Number.isFinite(e));
	return t.length === 0 ? 0 : Math.max(0, Math.min(...t));
};
function Ym({ paymentType: e, paymentTypes: t = Km, amount: i, placement: a = "payment-form", onTopUpAccepted: o }) {
	let s = L(), l = pe(), { translateKey: u } = c(), { formatCurrencyValue: d } = Tt(), { uiBonuses: f, offers: p, checkoutState: g, uiBonusesStyle: _, initialAmount: v, method: y, locale: b, selectedBonusCode: x, onBonusSelected: S, onBonusDeselected: C, onBonusToppedUp: w, lockAmount: T, setCashierState: D } = Qt(re), { getBonusAvailabilityForPaymentType: O, getBonusAvailabilityForPaymentTypes: k } = F(), { selectedBonusCode: A, selectBonusCode: j, ensureDefaultSelection: M } = Tu(), [N, P] = Z(!1), [ne, I] = Z(null), [ie, ae] = Z(null), R = Y(() => rt(i ?? v), [i, v]), z = Y(() => a === "payment-list" ? k(t, e, { amount: R }) : O(e, { amount: R }), [
		R,
		O,
		k,
		e,
		t,
		a
	]), B = Y(() => Ke(z), [z]), V = Y(() => B.filter((e) => e.status === "available").map((e) => e.bonus), [B]), oe = Y(() => B.filter(ht).map((e) => e.bonus), [B]), se = V.length, ce = se > 0, le = Y(() => A ? B.find((e) => ht(e) && e.bonus.code === A) ?? null : null, [A, B]), H = le?.bonus ?? null, ue = p !== void 0 && g?.phase === "pending", fe = ue ? oe.find((e) => e.code === g.requestedOfferId) : void 0, me = ue ? fe : H, _e = le?.status === "available", ve = le?.status === "close", ye = Y(() => H && _e ? ke(H, R) : null, [
		R,
		_e,
		H
	]), be = ye?.fullClaimAmount ?? null, xe = be === null ? null : qu(be), Se = e ? ge(e) : null, Ce = H && be !== null ? [
		Se ?? "",
		H.code,
		String(be)
	].join(":") : null, we = !!(!T && H && ye && R !== null && be !== null && be > R && !Xu({
		amount: R,
		fullClaimAmount: ye.fullClaimAmount,
		claimPercentage: ye.claimPercentage
	}) && !h(xe ?? "", e?.limits).isOutOfRange), Te = we && ne !== Ce, U = u(y === r.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(b);
	tn(() => {
		if (e && !(x && H)) {
			if (x && !H) {
				M(oe);
				return;
			}
			N || M(oe);
		}
	}, [
		x,
		M,
		N,
		e,
		oe,
		H
	]);
	let Ee = q((e, t) => {
		if (s) return;
		let n = V.find((t) => t.code === e);
		if (n) {
			if (A === e) {
				t();
				return;
			}
			I(null), ae(null), P(!0), j(e), S?.(n), t();
		}
	}, [
		V,
		s,
		S,
		j,
		A
	]), De = q((e) => {
		s || (H && C?.(H), I(null), ae(null), P(!0), j(null), e?.());
	}, [
		s,
		C,
		j,
		H
	]), Ae = q((e) => {
		if (e.stopPropagation(), s || T || !xe || !H || be === null || R === null || !Ce) return;
		P(!0), I(null), ae(Ce), D((e) => {
			let t = Se ? {
				paymentTypeName: Se,
				method: y,
				amount: e.initialAmount
			} : null;
			return {
				...e,
				initialAmount: xe,
				paymentFormDraft: t ? td(e.paymentFormDraft, t, xe) : e.paymentFormDraft,
				comboViewFormDraft: t ? td(e.comboViewFormDraft, t, xe) : e.comboViewFormDraft
			};
		});
		let t = {
			bonus: H,
			previousAmount: R,
			nextAmount: be,
			addedAmount: be - R,
			fullClaimAmount: be
		};
		w?.(t), o?.(t);
	}, [
		R,
		s,
		T,
		y,
		w,
		o,
		H,
		Se,
		D,
		Ce,
		be,
		xe
	]), je = q((e) => {
		e.stopPropagation(), !s && Ce && (P(!0), I(Ce), ae(null));
	}, [s, Ce]), Me = a === "payment-list" ? te(_) : E(_), Ne = a === "payment-list";
	if (!f || !Me || !Ne && !e || !Ne && B.length === 0) return null;
	let Pe = u("cta.choose_bonus"), Fe = B.length > 0 && !s, Ie = ye?.claimPercentage, Le = typeof Ie == "number" && Number.isFinite(Ie) ? Ie : null, Re = Le !== null, ze = !!(H && ye && Xu({
		amount: R,
		fullClaimAmount: ye.fullClaimAmount,
		claimPercentage: Le
	})), Be = R === null ? null : d(R), Ve = H && ye ? {
		min: d(Jm(H)),
		max: d(ye.fullClaimAmount)
	} : void 0, He = !!(H && Be && !ye), Ue = ze && ie === Ce, Ge = ze || He ? "text-[var(--pc-color-success-text)]" : "text-[var(--pc-color-text-muted)]", qe = H && Re && (!ze || Ue) && Le !== null ? /* @__PURE__ */ Q("div", {
		"data-slot": "bonus-picker-progress",
		className: m("flex w-full min-w-0 flex-col", Ge),
		children: /* @__PURE__ */ Q(de, {
			size: "xs",
			variant: Ue ? "success" : "secondary",
			stepCount: 100,
			currentStepIndex: qm(Le),
			showInitialFill: !0,
			showPercentageLabel: !0,
			trackTone: "depth",
			rangeLabelsColour: "inherit",
			rangeLabels: Ve,
			ariaLabel: [
				"Bonus claim progress",
				String(Math.round(Le)),
				"percent"
			].join(" ")
		})
	}) : null, Je = !H || p !== void 0 || ve ? null : we && ye && R !== null ? he(u("bonus.top_up.desc"), {
		amount: d(ye.fullClaimAmount - R),
		targetAmount: d(ye.fullClaimAmount)
	}) : Be ? he(u("bonus.selected.desc"), {
		amount: Be,
		method: U
	}) : null, Ye = ve ? /* @__PURE__ */ Q(Iu, {
		reasons: le.reasons,
		tone: "hint"
	}) : null, Xe = Te ? /* @__PURE__ */ $(ju, {
		placement: "section",
		dataSlot: "bonus-picker-top-up-actions",
		domClassName: "bonus-picker-top-up-actions",
		children: [/* @__PURE__ */ Q(ee, {
			"data-slot": "bonus-picker-top-up-reject",
			variant: "neutral",
			appearance: "ghost",
			size: "sm",
			label: u("cta.deny_topup"),
			"aria-label": u("cta.deny_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Q(wt, {}),
			onClick: je
		}), /* @__PURE__ */ Q(ee, {
			"data-slot": "bonus-picker-top-up-accept",
			variant: "secondary",
			appearance: "solid",
			size: "sm",
			label: u("cta.confirm_topup"),
			"aria-label": u("cta.confirm_topup"),
			iconOnly: !0,
			showTooltip: !0,
			disabled: s,
			leadingIcon: /* @__PURE__ */ Q(St, {}),
			onClick: Ae
		})]
	}) : null, Ze = l.attrs("bonus-picker-top-up-section"), Qe = l.attrs("bonus-picker-top-up-content"), $e = l.attrs("bonus-picker-top-up-progress"), et = Ye || Je || qe ? /* @__PURE__ */ $("div", {
		"data-slot": "bonus-picker-top-up-section",
		"data-pc-slot": Ze["data-pc-slot"],
		className: m(Ze.className, "flex w-full min-w-0 items-center gap-2 @lg:gap-2.5"),
		children: [(Ye || Je || qe) && /* @__PURE__ */ $("div", {
			"data-slot": "bonus-picker-top-up-content",
			"data-pc-slot": Qe["data-pc-slot"],
			className: m(Qe.className, "flex min-w-0 flex-1 flex-col gap-1.5"),
			children: [
				Ye,
				!Ye && Je && /* @__PURE__ */ Q("p", {
					className: m("min-w-0 text-sm @md:leading-tight", Ge),
					children: /* @__PURE__ */ Q(We, { children: Je })
				}),
				qe && /* @__PURE__ */ Q("div", {
					"data-slot": "bonus-picker-top-up-progress",
					"data-pc-slot": $e["data-pc-slot"],
					className: m($e.className, "min-w-0 w-full"),
					children: qe
				})
			]
		}), Xe]
	}) : null, tt = H?.termsAndConditions ? {
		titleKey: "bonus.terms.title",
		content: /* @__PURE__ */ Q("div", {
			className: "flex flex-col gap-3",
			children: /* @__PURE__ */ Q(Fu, { termsKey: H.termsAndConditions })
		})
	} : void 0, nt = (e) => /* @__PURE__ */ Q(Wm, { children: Fe && /* @__PURE__ */ Q(ee, {
		variant: "neutral",
		appearance: "ghost",
		size: "sm",
		iconOnly: !0,
		showTooltip: !1,
		"aria-label": Pe,
		onClick: e,
		leadingIcon: /* @__PURE__ */ Q(pt, {}),
		label: Pe
	}) }), it = ce ? /* @__PURE__ */ Q(ee, {
		variant: "secondary",
		appearance: "solid",
		size: "sm",
		disabled: s,
		leadingIcon: /* @__PURE__ */ Q(Oe, {}),
		label: String(se)
	}) : /* @__PURE__ */ Q(Oe, { className: "h-full w-full" });
	return /* @__PURE__ */ Q(Um, {
		domScope: "bonus-picker",
		title: /* @__PURE__ */ Q(We, { children: Pe }),
		triggerLabel: Pe,
		canOpen: Fe,
		shouldRender: !0,
		animateTrigger: !1,
		triggerContent: ({ isOpen: e, panelId: t, toggle: n }) => /* @__PURE__ */ Q("div", {
			className: "w-full",
			"aria-busy": ue || void 0,
			"data-pc-checkout-state": ue ? "pending" : void 0,
			children: /* @__PURE__ */ Q(Gm, {
				domSlug: me?.code ?? "choose-bonus",
				name: me?.code ?? "cta.choose_bonus",
				title: me ? me.title : "",
				description: me ? me.description : "bonus.no_bonus_selected",
				descriptionPresentation: me ? void 0 : "lone-body",
				logo: me?.logo,
				logoSurface: "bonusLogo",
				logoCompact: !0,
				logoContentPresentation: me || !ce ? void 0 : "inline-control",
				logoContent: me ? void 0 : it,
				showMeta: !0,
				interactive: Fe,
				isDisabled: s,
				isUnavailable: ve,
				interactiveSurface: "content",
				hoverMode: Fe ? "self" : "none",
				themeSlot: "bonus-picker",
				onSelect: n,
				ariaLabel: Pe,
				ariaExpanded: e,
				ariaControls: t,
				spacing: a === "payment-list" ? "payment-list" : "default",
				section: !ue && et ? {
					border: !0,
					width: "full",
					content: et
				} : void 0,
				actions: nt(n),
				actionStopsPropagation: !0,
				infoDrawer: ue ? void 0 : tt
			})
		}),
		delegateTriggerInteraction: !0,
		children: ({ close: e, panelId: t }) => {
			let r = l.attrs("bonus-picker-list");
			return /* @__PURE__ */ Q("div", {
				id: t,
				...r,
				className: m(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ Q(Bu, {
					bonuses: B,
					selectedBonusCode: A,
					onSelect: (t) => {
						Ee(t, e);
					},
					onSkip: () => {
						De(e);
					},
					selectable: !1,
					showSkipOption: !0,
					isSkipSelected: A === null,
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
var Xm = "[data-pc-scroll-obstruction=\"top\"]", Zm = "[data-pc-scroll-obstruction=\"bottom\"]", Qm = ["[data-pc-scroll-obstruction-extent=\"true\"]", "[data-slot=\"interactive-prompt-tail\"]"].join(","), $m = 4, eh = 8, th = 64, nh = 150, rh = 96, ih = 128, ah = 180, oh = 320, sh = 2, ch = 3, lh = 1, uh = 520, dh = .5, fh = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakSet(), mh = (e) => typeof window < "u" && e === window, hh = (e) => {
	if (mh(e)) return {
		top: 0,
		bottom: window.innerHeight
	};
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom
	};
}, gh = (e) => mh(e) ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : e.scrollTop, _h = (e) => {
	if (mh(e)) {
		let e = document.documentElement, t = document.body;
		return Math.max(0, Math.max(e.scrollHeight, t.scrollHeight) - window.innerHeight);
	}
	return Math.max(0, e.scrollHeight - e.clientHeight);
}, vh = (e) => mh(e) ? document.documentElement : e, yh = (e) => {
	let t = vh(e), n = fh.get(t);
	n?.cleanupManualScrollListeners?.(), n?.element && ph.delete(n.element), fh.delete(t);
}, bh = (e) => {
	let t = vh(e), n = fh.get(t);
	n && (n.frameId !== void 0 && window.cancelAnimationFrame(n.frameId), n.timeoutId !== void 0 && window.clearTimeout(n.timeoutId), yh(e));
}, xh = () => typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Sh = (e) => {
	let t = window.getComputedStyle(e);
	return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0";
}, Ch = (e) => {
	let t = e.getBoundingClientRect(), n = t.top, r = t.right, i = t.bottom, a = t.left, o = Array.from(e.querySelectorAll(Qm));
	for (let e of o) {
		if (!Sh(e)) continue;
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
}, wh = (e) => {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom,
		height: t.height,
		scrollHeight: e.scrollHeight
	};
}, Th = (e, t) => {
	if (!e) return !1;
	let n = Math.abs(e.top - t.top) <= lh, r = Math.abs(e.bottom - t.bottom) <= lh, i = Math.abs(e.height - t.height) <= lh, a = Math.abs(e.scrollHeight - t.scrollHeight) <= lh;
	return n && r && i && a;
}, Eh = (e, t, n, r) => Sh(e) ? t.height > 0 && t.width > 0 && t.bottom > n && t.top < r : !1, Dh = (e) => {
	let t = hh(e), n = t.top, r = Array.from(document.querySelectorAll(Xm)).map((e) => ({
		element: e,
		rect: Ch(e)
	})).filter(({ element: e, rect: n }) => Eh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.max(n, e.bottom);
	return n + $m;
}, Oh = (e) => {
	let t = hh(e), n = t.bottom, r = Array.from(document.querySelectorAll(Zm)).map((e) => ({
		element: e,
		rect: Ch(e)
	})).filter(({ element: e, rect: n }) => Eh(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.min(n, e.top);
	return n - $m;
}, kh = (e, t = "start", n = {}) => {
	let r = bc(e) ?? window, i = Dh(r), a = Oh(r), o = e.getBoundingClientRect(), s = gh(r), c = Math.max(o.height, e.scrollHeight), l = o.top + c, u = s + o.top - i, d = s + l - a, f = (e.previousElementSibling instanceof HTMLElement ? e.previousElementSibling : null)?.getBoundingClientRect(), p = n.revealPreviousCollapsedHeader ?? !0, m = (() => {
		if (t === "start") return u;
		if (t === "nearest-fit") {
			let e = a - i;
			return c > e ? Math.abs(o.top - i) <= eh ? null : Math.abs(o.top - i) > eh ? u : null : o.top < i ? u : l > a ? d : null;
		}
		if (t === "accordion-fit") {
			let t = a - i;
			return p && !ph.has(e) && f && f.height > 0 && f.height <= ih && f.top < i && o.top >= i ? s + f.top - i : c > t ? o.top >= i && o.top <= i + rh ? null : u : o.top < i ? u : l > a ? d : (o.top >= i && (o.top, i + rh), null);
		}
		return Math.abs(o.top - i) > eh || l > a ? u : null;
	})();
	return m === null ? null : {
		container: r,
		top: Math.max(0, Math.round(m))
	};
}, Ah = (e, t, n = "auto") => {
	let r = gh(e);
	if (!(Math.abs(t - r) <= dh)) {
		if (mh(e)) {
			window.scrollTo({
				top: t,
				left: window.scrollX,
				behavior: n
			});
			return;
		}
		if (typeof e.scrollTo == "function") {
			e.scrollTo({
				top: t,
				left: e.scrollLeft,
				behavior: n
			});
			return;
		}
		e.scrollTop = t;
	}
}, jh = (e, t) => mh(e) ? Math.max(0, t) : Math.min(Math.max(0, t), _h(e)), Mh = (e, t) => {
	if (gh(t) <= dh) return null;
	let n = e.getBoundingClientRect(), r = Dh(t), i = Oh(t);
	return n.top < r || n.bottom > i ? null : { top: n.top };
}, Nh = (e, t, n) => {
	if (!n) return;
	let r = t.getBoundingClientRect(), i = gh(e) + r.top - n.top;
	Ah(e, jh(e, Math.round(i)), "auto");
}, Ph = (e, t, n) => {
	if (typeof window.requestAnimationFrame != "function") {
		t(Date.now());
		return;
	}
	let r = vh(e), i = fh.get(r), a = {
		frameId: window.requestAnimationFrame(t),
		element: n,
		cleanupManualScrollListeners: i?.cleanupManualScrollListeners
	};
	fh.set(r, a);
}, Fh = (e, t, n, r = !0) => {
	let i = mh(e) ? window : e, a = mh(e) ? document : e.ownerDocument, o = !0, s = () => {
		o && t();
	}, c = () => {
		o && n() && t();
	}, l = { passive: !0 };
	return i.addEventListener("wheel", s, l), i.addEventListener("touchmove", s, l), r && i.addEventListener("scroll", c, l), a.addEventListener("keydown", s), () => {
		o = !1, i.removeEventListener("wheel", s), i.removeEventListener("touchmove", s), r && i.removeEventListener("scroll", c), a.removeEventListener("keydown", s);
	};
}, Ih = (e) => {
	if (typeof window > "u") return;
	let t = bc(e) ?? window, n = null, r = 0, i = 0, a = null, o = Mh(e, t), s = !1;
	bh(t);
	let c = Fh(t, () => {
		bh(t);
	}, () => !0, !1);
	if (typeof window.requestAnimationFrame != "function") {
		c();
		let t = kh(e, "nearest-fit");
		t && Ah(t.container, t.top, xh() ? "auto" : "smooth");
		return;
	}
	let l = (u) => {
		if (!e.isConnected) {
			yh(t);
			return;
		}
		if (n ??= u, !(u - n >= nh)) {
			Nh(t, e, o), Ph(t, l, e);
			return;
		}
		r += 1;
		let d = wh(e);
		i = Th(a, d) ? i + 1 : 1, a = d;
		let f = r >= sh && i >= ch;
		if (!o && !s && u - n >= ah && gh(t) > dh) {
			let n = e.getBoundingClientRect().top > Dh(t) + 192 ? kh(e, "nearest-fit") : null;
			n && (s = !0, Ah(n.container, jh(n.container, n.top), xh() ? "auto" : "smooth"));
		}
		if (xh()) {
			if (f) {
				let r = kh(e, "accordion-fit");
				if (r) {
					yh(t), Ah(r.container, jh(r.container, r.top), "auto");
					return;
				}
				if (u - n >= oh) {
					yh(t);
					return;
				}
			}
			Ph(t, l, e);
			return;
		}
		if (f) {
			let r = kh(e, "accordion-fit");
			if (r) {
				let n = jh(r.container, r.top);
				c(), Ah(r.container, n, "smooth");
				let i = Fh(t, () => {
					bh(t);
				}, () => !1, !1), a = window.setTimeout(() => {
					if (!e.isConnected) {
						yh(t);
						return;
					}
					let n = kh(e, "accordion-fit");
					n && Ah(n.container, jh(n.container, n.top), "auto"), yh(t);
				}, uh);
				fh.set(vh(t), {
					element: e,
					timeoutId: a,
					cleanupManualScrollListeners: i
				});
				return;
			}
			if (u - n >= oh) {
				yh(t);
				return;
			}
		}
		Ph(t, l, e);
	};
	ph.add(e), fh.set(vh(t), {
		element: e,
		cleanupManualScrollListeners: c
	}), Ph(t, l, e);
};
function Lh(e) {
	typeof window < "u" && Ih(e);
}
function Rh(e) {
	if (typeof window > "u" || !e.isConnected || ph.has(e)) return !1;
	let t = kh(e, "nearest-fit");
	return t ? Math.abs(t.top - gh(t.container)) > th : !1;
}
//#endregion
//#region src/ui/PaymentTypesAccordion.tsx
function zh({ paymentTypes: e, selectedPaymentType: t, onSelect: r, renderPanel: i, renderFooter: a, hasPanel: o, hasPanelBody: s, collapsible: c = !1, showMeta: l = !1, compact: u = !1, renderActions: d, isPaymentTypeDisabled: f, interactionLocked: p = !1, preserveDisabledSelection: h = !1, itemVariant: g = "neutral", itemAppearance: _ = "solid", includeItemDataTheme: v = !0, hoverMode: y = "group", domScope: b, animateItems: x = !1, bonusEvaluationContext: S }) {
	let C = pe(), { getBonusCountForPaymentType: w } = F(), T = b ? C.token(b, "accordion") : null, E = T ? C.id("payment-types-accordion", { slug: T }) : void 0, O = C.attrs("payment-types-accordion", T ? { slug: T } : void 0), k = C.attrs("payment-types-accordion-content", T ? { slug: T } : void 0), A = Y(() => W(e, t ?? null), [e, t]), te = { staggerMode: "compressed-tail" }, j = Y(() => e.map((e) => {
		let t = ge(e), n = typeof S == "function" ? S(e) : S, r = w(e, n);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: r,
			label: r > 0 ? /* @__PURE__ */ Q(Nm, {
				count: r,
				domSlug: t
			}) : null
		};
	}), [
		S,
		w,
		e
	]);
	return /* @__PURE__ */ Q("div", {
		id: E,
		...O,
		className: m(O.className, "w-full"),
		children: /* @__PURE__ */ Q("div", {
			...k,
			className: m("grid grid-cols-1 gap-1.5", k.className, x && "pc-enter-sweep"),
			style: x ? Rc(te) : void 0,
			children: j.map(({ paymentTypeKey: e, paymentType: t, count: b, label: S }, w) => {
				let { name: T, nameKeys: E, logo: O, limits: k, fee: M } = t, N = e, P = C.token(N, "accordion-item"), ne = C.id("payment-types-accordion-header", { slug: P }), re = C.id("payment-types-accordion-panel", { slug: P }), F = vt(t), L = !!f?.(t), ie = F || L, ae = p || L && !F, R = ie || p, z = A === t && (!ie || h), B = o?.(t) ?? !0, V = z && !ie && B, oe;
				F || (oe = ae ? -1 : 0);
				let se = Fe(t), ce = d?.(t), le = V ? a?.(t) : null, H = s?.(t) ?? !0, ue = v ? D(g) : void 0, de = C.attrs("payment-types-accordion-item", { slug: P }), fe = x ? Lc(w, j.length, "forward", te) : void 0, pe = (e) => e.closest("[data-pc-slot=\"payment-types-accordion-item\"]"), me = (e) => {
					let t = pe(e);
					t && Lh(t);
				}, he = (t) => {
					if (R) return;
					r?.(e);
					let n = pe(t), i = !!(V && n && Rh(n));
					(!V || i) && me(t);
				}, ge = (e) => {
					R || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), he(e.currentTarget));
				}, _e = (e) => {
					he(e.currentTarget);
				}, ve = c && B && !R ? /* @__PURE__ */ Q(ee, {
					variant: "neutral",
					appearance: "ghost",
					size: "sm",
					iconOnly: !0,
					showTooltip: !1,
					label: `${V ? "Collapse" : "Expand"} ${se ?? T}`,
					"aria-controls": re,
					"data-slot": "payment-types-accordion-toggle",
					className: m("[--pc-color-button-text:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]"),
					leadingIcon: /* @__PURE__ */ Q(yt, { className: I({ isOpen: V }) }),
					onClick: (e) => {
						e.stopPropagation(), he(e.currentTarget);
					}
				}) : null, ye = ve ? /* @__PURE__ */ $(an, { children: [ce, ve] }) : ce;
				return /* @__PURE__ */ $(Le, {
					as: "div",
					"data-pc-slot": de["data-pc-slot"],
					"data-pc-slug": de["data-pc-slug"],
					dataTheme: ue,
					inheritTheme: ue === void 0,
					"data-selected": z ? "true" : void 0,
					chrome: !1,
					spacing: "flush",
					style: fe,
					className: m(de.className, "rounded-[var(--pc-radius-accordion-item,var(--pc-radius-panel,var(--pc-radius-xl)))]", V || z ? "overflow-visible" : "overflow-hidden", "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "[background:var(--pc-color-accordion-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))]", z && [
						"[outline-style:solid]",
						"outline-3 outline-[var(--pc-color-accordion-item-border-selected,var(--pc-color-secondary))]",
						"outline-offset-[2.5px]"
					], x && "pc-enter-sweep-item"),
					children: [/* @__PURE__ */ Q("div", {
						id: ne,
						role: F ? void 0 : "button",
						tabIndex: oe,
						"aria-disabled": F ? void 0 : ae || void 0,
						"aria-expanded": B && !F ? V : void 0,
						"aria-controls": B && !F ? re : void 0,
						onClick: F ? void 0 : _e,
						onKeyDown: F ? void 0 : ge,
						className: m(y === "group" && "group", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-accent)]", "focus-visible:ring-offset-2", "focus-visible:ring-offset-transparent", !R && "cursor-pointer"),
						children: /* @__PURE__ */ Q(Nu, {
							selectionId: e,
							domSlug: N,
							name: T,
							presentationPaymentType: t,
							nameKeys: E,
							logo: O,
							limits: k,
							fee: M,
							listStyle: n.LIST,
							compact: u,
							showMeta: l,
							title: se ?? void 0,
							description: F ? nt : void 0,
							bonusLabel: S,
							hasAvailableBonuses: b > 0,
							isSelected: z,
							showSelectedIndicator: !1,
							isDisabled: ae,
							isUnavailable: F,
							interactive: !1,
							hoverMode: y,
							themeSlot: "payment-types-accordion-header",
							includeDataTheme: !1,
							actions: ye,
							variant: g,
							appearance: _
						})
					}), B && !F && /* @__PURE__ */ Q("div", {
						id: re,
						role: "region",
						"aria-labelledby": ne,
						"aria-hidden": !V,
						className: m("grid", V ? "overflow-visible" : "overflow-hidden", V ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"),
						children: /* @__PURE__ */ Q("div", {
							className: "min-h-0 min-w-0",
							children: V ? /* @__PURE__ */ $(an, { children: [/* @__PURE__ */ Q("div", {
								"data-slot": "payment-types-accordion-body",
								hidden: !H,
								className: "min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))] px-1.5 py-2 @md:px-2 @md:py-2",
								children: i(t)
							}), le ? /* @__PURE__ */ Q("div", {
								"data-slot": "payment-types-accordion-footer",
								className: m("min-w-0 border-t border-[var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))]", "[background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))]", "text-[var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))]", "px-3 py-2.5 @md:px-3.5"),
								children: le
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
var Bh = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, Vh = (e, t, n, i = {}) => {
	if (e !== r.PAYOUT || !n) return [];
	let a = Bh(n.balance), o = fe(e, n), s = ce(e, n, i.fee);
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
		let e = rt(i.amount ?? "") ?? 0;
		l.push({
			id: "remaining-balance",
			label: "field.remaining_balance.label",
			value: {
				value: Math.max(o - ue(e, i.fee), 0),
				currency: t
			}
		});
	}
	return l;
}, Hh = ({ uiPaymentConfirmView: e, hasPendingStep: t, hasVisibleInlineContent: n, hasConfirmOnlyContent: r }) => !e && !t && (n || !r) ? {
	action: "submit",
	submitMode: "submit",
	buttonLabel: "pay"
} : {
	action: "confirm",
	submitMode: "prepare",
	buttonLabel: "continue"
};
//#endregion
export { _l as $, Bu as A, Kl as B, Zu as C, Wu as D, Gu as E, wu as F, Pl as G, Wl as H, Cu as I, Ol as J, jl as K, su as L, Nu as M, Au as N, Ku as O, Tu as P, bl as Q, Zl as R, td as S, Ju as T, Hl as U, Jl as V, Bl as W, Cl as X, kl as Y, gl as Z, Gd as _, Wm as a, xc as at, ed as b, Im as c, Nm as d, qc as et, km as f, Hf as g, xp as h, Ym as i, Sc as it, Fu as j, qu as k, Fm as l, xm as m, Vh as n, Jc as nt, Gm as o, Ic as ot, Om as p, Ml as q, zh as r, Uc as rt, Um as s, $s as st, Hh as t, Wc as tt, Pm as u, fd as v, Xu as w, $u as x, dd as y, Gl as z };
