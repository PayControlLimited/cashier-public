/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { F as r, H as i, M as a, N as o, P as s, ct as c, dt as l, ft as u, j as d, pt as f, ut as p } from "./purchase-CcLuoaCq.js";
import { Ai as m, Ar as ee, B as te, C as ne, D as re, Dr as h, Er as g, Fi as _, G as ie, H as v, Ii as ae, K as oe, Ki as se, Li as ce, Mn as le, O as ue, Oi as y, Or as de, Ot as fe, P as b, Pi as pe, Ri as me, Sn as x, Tn as S, Tr as he, Tt as C, U as w, Wi as ge, Xi as _e, _ as T, a as ve, at as E, b as ye, ct as be, d as xe, en as Se, f as Ce, fr as we, g as Te, h as Ee, hr as D, ir as De, j as Oe, kn as ke, kr as O, l as Ae, ln as je, m as Me, mr as k, mt as Ne, n as Pe, nn as Fe, o as Ie, on as Le, pt as Re, qi as ze, r as Be, sn as Ve, tt as He, u as Ue, v as We, wt as Ge, x as Ke, y as qe, z as Je, zi as Ye } from "./usePaymentSelection-BT8H9hee.js";
import { $ as Xe, D as A, E as Ze, F as Qe, I as $e, L as et, O as tt, P as nt, Q as rt, T as it, U as at, _ as ot, a as st, b as ct, c as lt, d as ut, et as dt, f as ft, h as pt, i as mt, k as ht, l as gt, n as _t, nt as vt, o as j, p as yt, r as bt, s as xt, t as St, u as Ct, v as wt, x as Tt, z as Et } from "./inlinePaymentSubmit-B9nyF_92.js";
import { t as Dt, u as Ot } from "./fileRoute-D8JEWbd3.js";
import { n as kt } from "./CashierFullscreenLoader-BUvXkLZm.js";
import { t as At } from "./CashierEntry-BI7c_pS-.js";
import * as M from "react";
import { createContext as jt, useCallback as N, useContext as Mt, useEffect as P, useImperativeHandle as Nt, useLayoutEffect as F, useMemo as I, useReducer as Pt, useRef as L, useState as Ft } from "react";
import { Fragment as It, jsx as R, jsxs as z } from "react/jsx-runtime";
//#region src/utils/pendingWithdrawals.ts
var Lt = 1, Rt = 100, B = /* @__PURE__ */ new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), zt = (e) => {
	if (!e) return null;
	let t = Number(e.value);
	if (typeof e.currency != "string") return null;
	let n = e.currency.trim().toUpperCase();
	return !Number.isFinite(t) || !n ? null : {
		value: t,
		currency: n
	};
}, V = (e) => {
	if (!B.has(e.subStatus)) return null;
	let t = zt(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, Bt = (e) => (e ?? []).flatMap((e) => {
	let t = V(e);
	return t ? [t] : [];
}), Vt = async (e, t, n) => {
	let { data: r, error: i } = await m({
		client: t,
		query: {
			...e,
			method: "payout",
			page: Lt,
			pageSize: Rt
		},
		cache: "no-store",
		signal: n
	});
	if (i) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: Bt(r?.payments),
		totalItems: r?.totalItems ?? 0,
		totalPages: r?.totalPages ?? 0,
		currentPage: r?.currentPage ?? Lt,
		pageSize: r?.pageSize ?? Rt
	};
}, Ht = async ({ client: e, merchantId: t, userId: n, sessionId: r, paymentId: i, signal: a }) => {
	let { data: o, error: s } = await y({
		client: e,
		signal: a,
		path: { paymentId: i },
		query: {
			merchantId: t,
			userId: n,
			sessionId: r
		}
	});
	if (s) {
		let e = "Failed to cancel pending withdrawal.";
		throw s instanceof Error ? e = s.message : typeof s == "object" && "error" in s && typeof s.error == "string" && (e = s.error), Error(e);
	}
	return o;
}, Ut = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
	e.paymentId,
	e.amountValue,
	e.amountCurrency,
	e.subStatus
].join(":"))].join("|"), H = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.amountCurrency, (t.get(n.amountCurrency) ?? 0) + n.amountValue);
	return [...t].map(([e, t]) => ({
		currency: e,
		amount: t
	}));
}, Wt = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, Gt = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, Kt = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, qt = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function Jt(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function Yt(e, t, n, r) {
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
var Xt = String.raw, Zt = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), Qt = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), $t = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, en = "--_number-flow-d-opacity", tn = "--_number-flow-d-width", U = "--_number-flow-dx", nn = "--_number-flow-d", rn = (() => {
	try {
		return CSS.registerProperty({
			name: en,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: U,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: tn,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: nn,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), an = "var(--number-flow-char-height, 1em)", W = "var(--number-flow-mask-height, 0.25em)", on = `calc(${W} / 2)`, sn = "var(--number-flow-mask-width, 0.5em)", cn = `calc(${sn} / var(--scale-x))`, ln = "#000 0, transparent 71%", un = Xt`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${an} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${tn}) / var(--width));transform:translateX(var(${U})) scaleX(var(--scale-x));margin:0 calc(-1 * ${sn});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${cn},#000 calc(100% - ${cn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${W},#000 calc(100% - ${W}),transparent 100% ),radial-gradient(at bottom right,${ln}),radial-gradient(at bottom left,${ln}),radial-gradient(at top left,${ln}),radial-gradient(at top right,${ln});-webkit-mask-size:100% calc(100% - ${W} * 2),calc(100% - ${cn} * 2) 100%,${cn} ${W},${cn} ${W},${cn} ${W},${cn} ${W};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${on} ${sn};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${U})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${nn})}.digit__num,.number .section::after{padding:${on} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${en}))}`, dn = HTMLElement;
Xt`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${an} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${on} 0}.symbol{white-space:pre}`;
var fn = Qt && Zt && rn, pn, mn = class extends dn {
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
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = fn && this._animated && (!this.respectMotionPreference || !($t != null && $t.matches)) && Kt(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) pn || (pn = new CSSStyleSheet(), pn.replaceSync(un)), this.shadowRoot.adoptedStyleSheets = [pn];
			else {
				let e = document.createElement("style");
				e.textContent = un, this.shadowRoot.appendChild(e);
			}
			this._pre = new _n(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new hn(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new _n(this, a, {
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
mn.defaultProps = {
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
var hn = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new G(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new G(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = Wt("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = Wt("span", {
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
			[U]: [`${t}px`, "0px"],
			[tn]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, gn = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = Wt("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new yn(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new bn(this, e.type, e.value, {
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
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${Gt(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (Jt(e, (e) => {
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
}, G = class extends gn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof yn && e.update(0);
		}), this.pop(t);
	}
}, _n = class extends gn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, vn = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [en]: [-.9999, 0] }, {
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
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [en]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, K = class extends vn {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, yn = class extends K {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = Wt("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = Wt("span", {
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
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [nn]: [-o, 0] }, {
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
}, bn = class extends K {
	constructor(e, t, n, r) {
		let i = Wt("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, Wt("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new vn(this.flow, i, { onRemove: this._onChildRemove(n) }));
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
				let t = Wt("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new vn(this.flow, t, {
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
}, xn = parseInt(M.version.match(/^(\d+)\./)?.[1]) >= 19, Sn = ["data", "digits"], Cn = class extends mn {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
Cn.observedAttributes = xn ? [] : Sn, qt("number-flow-react", Cn);
var wn = {}, Tn = xn ? (e) => e : JSON.stringify;
function q(e) {
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
var En = class extends M.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = q(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? Cn.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), xn && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = q(this.props);
		return /*#__PURE__*/ M.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: Tn(s),
			data: Tn(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, Dn = /*#__PURE__*/ M.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	M.useImperativeHandle(o, () => s.current, []);
	let s = M.useRef(), c = M.useContext(On);
	c?.useRegister(s);
	let l = M.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = M.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = M.useMemo(() => Yt(e, wn[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ M.createElement(En, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), On = /*#__PURE__*/ M.createContext(void 0), kn = (e) => e.length > 0 ? e : "";
function J(e) {
	return typeof e == "object" && !!e;
}
var Y = (e, t, n) => e && e !== t ? e : n, An = .747, jn = (e) => Number((e * An).toFixed(3)), Mn = (e) => ({
	min: jn(e.min),
	max: jn(e.max)
}), Nn = jn(.8), Pn = {
	base: Mn({
		min: 1.05,
		max: 3.25
	}),
	md: Mn({
		min: 1.24,
		max: 3.8
	}),
	xl: Mn({
		min: 1.42,
		max: 4.36
	})
}, Fn = {
	min: Pn.base.min,
	max: Pn.base.max
}, In = Pn.base.max, Ln = .75, Rn = [
	"text-[length:var(--pc-font-input-meta-size,0.75rem)]",
	"leading-[var(--pc-font-input-meta-line-height,1rem)]",
	"[font-weight:var(--pc-font-input-meta-weight,400)]",
	"[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]",
	"[font-style:var(--pc-font-input-meta-style,inherit)]",
	"[text-transform:var(--pc-font-input-meta-text-transform,inherit)]",
	"@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]",
	"@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]"
].join(" "), zn = {
	md: 448,
	xl: 560
}, X = "min(6ch, 100%)", Bn = jn(60), Vn = 24, Hn = "cubic-bezier(0.2, 0.8, 0.2, 1)", Un = .01, Wn = "0em", Gn = {
	transformTiming: {
		duration: 450,
		easing: Hn
	},
	spinTiming: {
		duration: 480,
		easing: Hn
	},
	opacityTiming: {
		duration: 300,
		easing: Hn
	}
}, Kn = (e) => ({
	renderedValue: e,
	pendingValue: null
}), qn = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, Jn = (e, t) => {
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
	}, qn(e, a) ? e : a;
}, Yn = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, Xn = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, Zn = (e) => {
	if (!e) return 0;
	let t = Xn(e);
	return t ? t.clientWidth : e.clientWidth;
}, Qn = (e) => {
	if (!e) return null;
	let t = Xn(e);
	return t && t !== e ? t : e.parentElement;
}, $n = (e) => {
	if (!e) return {
		bounds: Fn,
		growthFactor: Nn
	};
	let t = Zn(e) || e.clientWidth, n = Pn.base;
	return t >= zn.xl ? n = Pn.xl : t >= zn.md && (n = Pn.md), {
		bounds: Yn(n),
		growthFactor: Math.max(0, Nn)
	};
}, er = (e, t, n = Nn) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / In, c = o * n * s, l = Bn / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function tr({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: s, formatOptions: c, clearOnFocus: l = !1, errorMessage: u, invalid: d = !1, limits: f, reserveErrorSpace: p = !1, showMeta: m = !0, showDivider: ee = !0, reserveEmptyLimitMetaSpace: te = !0, align: ne = "center", animateValueChange: re = !1, disabled: h = !1, onFocusChange: g }) {
	let _ = fe(), { translateKey: ie } = ke(), [v, ae] = Ft(!1), oe = L(null), se = L(null), le = L(null), ue = L(!1), y = L(!1), de = L(e), b = J(a) ? a : null, me = N((e) => {
		oe.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	Nt(b, () => oe.current), P(() => {
		ue.current && e.length !== 0 && (y.current = !0);
	}, [e]);
	let x = N(() => {
		l && e.length !== 0 && (ue.current || (de.current = e, ue.current = !0, y.current = !1, t("")));
	}, [
		l,
		t,
		e
	]), he = N(() => {
		h || (ae(!0), g?.(!0), x());
	}, [
		h,
		g,
		x
	]), w = N(() => {
		if (ae(!1), g?.(!1), !l || !ue.current) return;
		let n = !y.current && e.length === 0;
		ue.current = !1, y.current = !1, n && t(de.current);
	}, [
		l,
		t,
		g,
		e.length
	]), ge = N(() => {
		h || x();
	}, [h, x]), _e = N((n) => {
		h || (ue.current && (y.current = !0), t(pe(e, n.target.value)));
	}, [
		h,
		t,
		e
	]), T = I(() => kn(e), [e]), ve = I(() => {
		if (!T) return null;
		let e = Number(T);
		return Number.isFinite(e) ? e : null;
	}, [T]), { currencyFormatter: E } = C(o, s, c), ye = I(() => E ? T ? ve === null ? T : E.format(ve) : "" : T, [
		E,
		T,
		ve
	]), be = f?.min ?? "", xe = f?.max ?? "", Se = be ? D(be, E, void 0, s) || be : "", Ce = xe ? D(xe, E, void 0, s) || xe : "", we = !!(Se || Ce), Te = I(() => {
		if (!E || typeof E.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = E.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: E.currencyCodeSuffix || void 0
		};
	}, [E]), Ee = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [De, Oe] = Pt(Jn, ve, Kn);
	P(() => {
		Oe({
			type: "sync",
			numericValue: ve,
			defer: re && v && ve !== null,
			preserveRendered: ve === null && ue.current && !y.current
		});
	}, [
		re,
		v,
		ve
	]);
	let O = I(() => {
		let e = [T, ye].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [T, ye]) || "0", [Ae, je] = Ft(() => er(O, Fn)), [Me, k] = Ft(In * Ln), Ne = L(Ae), Pe = L(Me);
	P(() => {
		Ne.current = Ae;
	}, [Ae]), P(() => {
		Pe.current = Me;
	}, [Me]), F(() => {
		let e = se.current, t = le.current;
		if (!e || !t) return;
		let n = Qn(e), r = () => {
			let { bounds: n, growthFactor: r } = $n(e), i = n.max * Ln;
			Math.abs(Pe.current - i) >= Un && (Pe.current = i, k(i));
			let a = Math.max(e.clientWidth - Vn, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = er(O, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Ne.current - u) < Un || (Ne.current = u, je(u));
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
	}, [O]);
	let Fe = `${Ae.toFixed(2)}rem`, Ie = Ln, Le = `${Me.toFixed(2)}rem`, Re = N((e) => {
		e.key === "Enter" && (e.preventDefault(), !h && i && r?.());
	}, [
		i,
		h,
		r
	]), ze = !!Te && De.renderedValue !== null && Ee, Be = ze ? De.renderedValue : void 0, Ve = !!ye || ze, He = !!ye && !v, Ue = ie("field.amount.label"), We = Y(ie("field.limits.min.label"), "field.limits.min.label", "Min"), Ge = Y(ie("field.limits.max.label"), "field.limits.max.label", "Max"), Ke = _.id("amount-input"), qe = !!u || p, Je = m && (!!n || qe), Ye = d || !!u, Xe = ce(e, f), A = Ye ? "danger" : "neutral", Ze = Xe.isOutOfRange && Ye ? "danger" : void 0, Qe = ee && we, $e = "opacity-0";
	He && ($e = h ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let et;
	h || (et = v ? "cursor-pointer opacity-85" : "cursor-pointer");
	let tt = _.attrs("amount-section"), nt = _.attrs("amount-content"), rt = _.attrs("amount-input");
	return /* @__PURE__ */ R("div", {
		id: _.id("amount-section"),
		...tt,
		className: [tt.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ z("div", {
			...nt,
			className: [nt.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ R("label", {
					className: "sr-only",
					htmlFor: Ke,
					children: Ue
				}),
				/* @__PURE__ */ R("div", {
					"data-theme": A,
					className: S(Qe && "border-b border-[var(--pc-color-depth-4)]", Qe && "pb-0.5", !h && "group"),
					children: /* @__PURE__ */ R("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ R("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ z("div", {
								className: S("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: se,
								style: {
									minHeight: Le,
									height: Le
								},
								children: [
									/* @__PURE__ */ R("span", {
										"aria-hidden": !0,
										ref: le,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Ie
										},
										children: O
									}),
									/* @__PURE__ */ R("input", {
										id: Ke,
										...rt,
										type: "text",
										autoComplete: "off",
										autoCorrect: "off",
										autoCapitalize: "off",
										spellCheck: !1,
										inputMode: "decimal",
										pattern: "[0-9]*[.]?[0-9]*",
										placeholder: "0",
										value: T,
										disabled: h,
										"aria-invalid": Ye,
										ref: me,
										onChange: _e,
										onKeyDown: Re,
										onFocus: he,
										onBlur: w,
										onClick: ge,
										className: S(rt.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", et),
										style: {
											fontSize: Fe,
											lineHeight: Ie,
											width: "100%",
											maxWidth: "100%",
											minWidth: X,
											color: He ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Wn})`
										}
									}),
									Ve && /* @__PURE__ */ R("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											$e,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: Fe,
											lineHeight: Ie,
											width: "100%",
											maxWidth: "100%",
											minWidth: X,
											transform: `translateY(${Wn})`
										},
										children: ze ? /* @__PURE__ */ R(Dn, {
											value: Be,
											locales: Te?.locales,
											format: Te?.format,
											suffix: Te?.suffix,
											animated: re,
											transformTiming: Gn.transformTiming,
											spinTiming: Gn.spinTiming,
											opacityTiming: Gn.opacityTiming,
											respectMotionPreference: !0
										}) : ye
									})
								]
							})
						})
					})
				}),
				we && /* @__PURE__ */ z("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						Rn
					].join(" "),
					children: [/* @__PURE__ */ R("div", {
						"data-theme": Ze,
						className: S("min-w-0 text-left", Ze && "text-[var(--pc-color-text)]"),
						children: Se ? /* @__PURE__ */ z("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ z("span", { children: [We, ":"] }), /* @__PURE__ */ R("span", {
								className: "truncate",
								children: Se
							})]
						}) : null
					}), /* @__PURE__ */ R("div", {
						"data-theme": Ze,
						className: S("min-w-0 text-right", Ze && "text-[var(--pc-color-text)]"),
						children: Ce ? /* @__PURE__ */ z("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ z("span", { children: [Ge, ":"] }), /* @__PURE__ */ R("span", {
								className: "truncate",
								children: Ce
							})]
						}) : null
					})]
				}),
				Je && /* @__PURE__ */ z("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ R("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), qe && /* @__PURE__ */ R("div", {
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
function nr({ animationStyle: t, bonusEvaluationContext: n, floating: r = !0 }) {
	let i = Oe(), a = fe(), { uiComboView: o, uiComboView__PaymentTypes: s, onPaymentTypeSelected: c, uiAccountDelete: l } = Mt(le), { translateKey: u } = ke(), { paymentTypesList: d } = Ie(), { getBonusCountForPaymentType: f, getAvailableBonusesForPaymentType: p } = ve(), { selectedPaymentType: m, selectPaymentType: ee, ensureDefaultSelection: te } = Pe(), { requestAccountDelete: ne, actionConfirmationModal: re } = lt();
	P(() => {
		o && qe(s) && te(d);
	}, [
		te,
		d,
		o,
		s
	]);
	let g = d.length > 0, _ = d.length > 1, ie = o && qe(s) && _ && !i, v = I(() => O(d, m), [d, m]), ae = I(() => v ? he(v) : null, [v]), oe = I(() => {
		if (!v) return null;
		let e = f(v, n), t = h(v);
		return e > 0 ? /* @__PURE__ */ R(ut, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		n,
		f,
		v
	]), se = u("cta.choose_payment_type"), ce = u("cta.interactive_prompt.choose_payment_type.title"), y = u("account.delete.title"), b = v?.name ?? "cta.choose_payment_type", pe = v ? h(v) : b, me = N((e, t) => {
		if (i) return;
		let n = O(d, e);
		n && !de(n) && (ee(h(n), { availableBonuses: p(n) }), c && c(n)), t();
	}, [
		p,
		i,
		c,
		d,
		ee
	]), C = N((e) => l && e.accountId ? /* @__PURE__ */ R(x, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": y,
		disabled: i,
		onClick: () => {
			ne(e);
		},
		iconOnly: !0,
		label: y,
		leadingIcon: /* @__PURE__ */ R(je, {})
	}) : null, [
		y,
		i,
		ne,
		l
	]);
	return /* @__PURE__ */ R(xt, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ R(ue, { children: se }),
		triggerLabel: se,
		canOpen: ie,
		shouldRender: o && qe(s) && g,
		animationStyle: t,
		floating: r,
		actionContent: re,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ R(j, {
			domSlug: pe,
			name: b,
			presentationPaymentType: v ?? void 0,
			nameKeys: v?.nameKeys,
			logo: v?.logo,
			logoContent: v ? void 0 : A("h-full w-full"),
			limits: v?.limits,
			fee: v?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: oe,
			title: ae ?? void 0,
			interactive: !1,
			isDisabled: i,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: ie ? /* @__PURE__ */ R(st, { children: /* @__PURE__ */ R(x, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": ce,
				disabled: i,
				onClick: e,
				leadingIcon: /* @__PURE__ */ R(Se, {}),
				label: ce
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = a.attrs("payment-type-picker-list");
			return /* @__PURE__ */ R("div", {
				id: n,
				...r,
				className: S(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ R(Ct, {
					paymentTypes: d,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						me(e, t);
					},
					interactionLocked: i,
					renderActions: C,
					itemVariant: "neutral",
					itemAppearance: "ghost",
					themeSlot: "payment-type-picker"
				})
			});
		}
	});
}
//#endregion
//#region src/components/PaymentSurfaceStack.tsx
function rr({ className: e, ...t }) {
	return /* @__PURE__ */ R("div", {
		...t,
		className: S("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var ir = jt({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), ar = () => Mt(ir);
function or({ children: e }) {
	let [t, n] = Ft(() => /* @__PURE__ */ new Set()), r = N((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = N((e) => e ? t.has(e) : !1, [t]), a = I(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ R(ir.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function sr() {
	return /* @__PURE__ */ z("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ R("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ R("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ R("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/utils/pendingWithdrawalDisplay.ts
var Z = (e, t, n) => [n(g(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), cr = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function lr({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = ke(), c = L(null);
	return P(() => {
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
	}, [a, o]), /* @__PURE__ */ R("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let o = t(e), l = Z(e, n, s), u = [o, l].filter(Boolean).join(", ");
			return /* @__PURE__ */ R("button", {
				ref: e.paymentId === a ? c : void 0,
				type: "button",
				className: cr,
				"aria-label": u || void 0,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ z("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ R("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: o
					}), l && /* @__PURE__ */ R("span", {
						className: S("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: l
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawalsQuery.ts
var ur = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], dr = (e, t, n = !0) => ({
	queryKey: ur(e),
	queryFn: () => Vt(e, t),
	enabled: n && !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 6e4,
	gcTime: 6e5
}), fr = jt({
	interactivePromptContent: null,
	pendingWithdrawalDrawer: null,
	attachSuccessFooter: (e) => e
}), Q = "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]", pr = {
	isDrawerOpen: !1,
	selectedPaymentId: null,
	cancellingPaymentId: null,
	cancellationState: null
}, mr = (e) => ({
	baselinePaymentIds: e.map((e) => e.paymentId),
	cancelledPayments: []
}), hr = (e, t) => {
	let n = e.cancelledPayments.map((e) => e.paymentId), r = e.baselinePaymentIds.filter((e) => !n.includes(e));
	if (t.length === 0) return r.length === 0 && e.cancelledPayments.length > 0;
	let i = t.map((e) => e.paymentId), a = new Set(r);
	return i.length === a.size && i.every((e) => a.has(e));
}, gr = (e, t) => {
	switch (t.type) {
		case "reset": return pr;
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
			if (!t.featureEnabled) return pr;
			let n = e.cancellationState === null ? t.pendingWithdrawals.length > 0 ? mr(t.pendingWithdrawals) : null : hr(e.cancellationState, t.pendingWithdrawals) ? e.cancellationState : t.pendingWithdrawals.length > 0 ? mr(t.pendingWithdrawals) : null, r = t.pendingWithdrawals.length > 1 && e.isDrawerOpen, i = e.selectedPaymentId && t.pendingWithdrawals.some((t) => t.paymentId === e.selectedPaymentId) ? e.selectedPaymentId : null;
			return r === e.isDrawerOpen && i === e.selectedPaymentId && n === e.cancellationState ? e : {
				...e,
				isDrawerOpen: r,
				selectedPaymentId: i,
				cancellationState: n
			};
		}
		case "record-success": {
			let n = e.cancellationState ?? mr(t.pendingWithdrawals);
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
}, _r = ({ pendingWithdrawals: e, activePendingWithdrawal: t, isPaymentInteractionLocked: n, isCancelling: r, isDrawerOpen: i, onDismiss: a, onCancel: o, onView: s, formatPendingWithdrawalAmount: c, formatPendingWithdrawalTotals: l, successFooter: u }) => {
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
		icon: /* @__PURE__ */ R(sr, {}),
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
}, vr = ({ successFooter: e }) => e ? {
	legacyTitle: "Nice!",
	titleKey: "pending_withdrawal.cancel.confirmed.title",
	legacyBody: "Your pending withdrawal has been cancelled.",
	bodyKey: "pending_withdrawal.cancel.confirmed.desc",
	icon: /* @__PURE__ */ R(sr, {}),
	tone: "secondary",
	footer: e
} : null, yr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ z(It, { children: [l.length > 1 && /* @__PURE__ */ R(at, {
	isOpen: i && !r,
	onClose: s,
	title: u,
	children: /* @__PURE__ */ R(lr, {
		pendingWithdrawals: l,
		formatPendingWithdrawalAmount: n,
		formatDisplayValue: t,
		onSelect: c,
		isDisabled: a,
		focusPaymentId: o,
		isFocusRestoreActive: i && !r
	})
}), e] });
function br({ children: e }) {
	let r = b(), i = Oe(), a = Mt(le), { merchantId: o, userId: s, sessionId: c, debug: l, locale: u, currencyFormatOptions: d, method: f, lockAmount: p, uiInteractivePrompts: m, uiSuggestAction: ne, onPendingWithdrawalCancelled: re } = a, h = a.uiCancelPendingPayout === !0, { translateKey: g, translateKeys: _ } = ke(), { formatDisplayValue: ie } = Ge(), ae = I(() => {
		try {
			return new Intl.ListFormat(u, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [u]), { dismissPrompt: oe, isPromptDismissed: se } = ar(), ce = v(), [ue, y] = Pt(gr, pr), { isDrawerOpen: de, selectedPaymentId: fe, cancellingPaymentId: pe, cancellationState: me } = ue, x = f === t.PAYIN && !p && m && h && ne.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(o && s && c), S = I(() => ({
		merchantId: o,
		userId: s,
		sessionId: c
	}), [
		o,
		c,
		s
	]), he = I(() => ur(S), [S]), { data: C } = te(dr(S, r, x)), w = I(() => C?.payments ?? [], [C?.payments]), ge = I(() => {
		let e = /* @__PURE__ */ new Map(), t = [...w, ...me?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, we(n.amountCurrency, u, d));
		return e;
	}, [
		me?.cancelledPayments,
		d,
		u,
		w
	]), _e = N((e) => k(e.amountValue, ge.get(e.amountCurrency)), [ge]), T = N((e) => {
		let t = e.map((e) => k(e.amount, ge.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : ae?.format(t) ?? t.join(", ");
	}, [ae, ge]), ve = N((e) => T(H(e)), [T]), E = I(() => Ut(w), [w]), ye = se(E), be = w.length === 1 ? w[0] : w.at(0) ?? null, { openActionConfirmation: xe, actionConfirmationModal: Se, isActionConfirmationOpen: Ce, closeActionConfirmation: Te } = gt({ isConfirmDisabled: i });
	P(() => {
		y({ type: "reset" }), Te();
	}, [
		Te,
		x,
		o,
		c,
		s
	]), P(() => {
		ye && y({ type: "dismiss" });
	}, [ye]), P(() => {
		y({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: w,
			featureEnabled: x
		});
	}, [x, w]), P(() => {
		i && (y({ type: "close-drawer" }), Te());
	}, [Te, i]);
	let { mutateAsync: Ee, isPending: D } = Je({
		mutationFn: async (e) => await Ht({
			client: r,
			merchantId: o,
			userId: s,
			sessionId: c,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = w.filter((e) => e.paymentId !== t.paymentId);
			await ce.invalidateQueries({ queryKey: he });
			try {
				n = (await ce.fetchQuery(dr(S, r, !0))).payments;
			} catch {}
			let i = n.length, a = H(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			y({
				type: "record-success",
				payment: t,
				pendingWithdrawals: w
			}), ee({
				callback: re,
				callbackName: "onPendingWithdrawalCancelled",
				debug: l,
				payload: {
					paymentId: t.paymentId,
					amount: t.amountValue,
					currency: t.amountCurrency,
					createdAt: t.createdAt,
					remainingPendingCount: i,
					remainingPendingTotal: o,
					remainingPendingTotals: a
				}
			});
		},
		onSettled: () => {
			y({ type: "finish-cancelling" });
		}
	}), De = N(() => {
		!i && E && oe(E);
	}, [
		E,
		oe,
		i
	]), O = N((e) => {
		if (D || i) return;
		let t = _e(e), n = Z(e, ie, _);
		xe({
			title: _(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ z("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ R("p", { children: Et(_(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ R("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: n
				})]
			}),
			confirmLabel: _(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: g("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				y({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await Ee(e);
			}
		});
	}, [
		Ee,
		ie,
		_e,
		D,
		i,
		xe,
		g,
		_
	]), Ae = N(() => {
		be !== null && O(be);
	}, [be, O]), je = N((e) => {
		y({
			type: "select-payment",
			paymentId: e.paymentId
		}), O(e);
	}, [O]), Me = N(() => {
		D || i || w.length <= 1 || y({ type: "open-drawer" });
	}, [
		D,
		i,
		w.length
	]), Ne = N(() => {
		D || y({ type: "close-drawer" });
	}, [D]), Pe = I(() => {
		if (!me || me.cancelledPayments.length === 0) return null;
		let e = H(me.cancelledPayments);
		return /* @__PURE__ */ R("p", {
			className: Q,
			children: Et(g("pending_withdrawal.cancel.success"), { amount: T(e) })
		});
	}, [
		me,
		T,
		g
	]), Fe = I(() => !x || ye ? null : be ? _r({
		pendingWithdrawals: w,
		activePendingWithdrawal: be,
		isPaymentInteractionLocked: i,
		isCancelling: D,
		isDrawerOpen: de,
		onDismiss: De,
		onCancel: Ae,
		onView: Me,
		formatPendingWithdrawalAmount: _e,
		formatPendingWithdrawalTotals: ve,
		successFooter: Pe
	}) : vr({ successFooter: Pe }), [
		be,
		x,
		_e,
		ve,
		Ae,
		De,
		Me,
		D,
		i,
		de,
		ye,
		w,
		Pe
	]), Ie = I(() => x ? /* @__PURE__ */ R(yr, {
		actionConfirmationModal: Se,
		formatDisplayValue: ie,
		formatPendingWithdrawalAmount: _e,
		isActionConfirmationOpen: Ce,
		isDrawerOpen: de,
		isSelectionDisabled: i || D || pe !== null,
		onClose: Ne,
		onSelect: je,
		pendingWithdrawals: w,
		selectedPaymentId: fe,
		title: g("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		Se,
		pe,
		x,
		ie,
		_e,
		Ne,
		je,
		D,
		Ce,
		i,
		de,
		w,
		fe,
		g
	]), Le = N((e) => e, []), Re = I(() => ({
		interactivePromptContent: Fe,
		pendingWithdrawalDrawer: Ie,
		attachSuccessFooter: Le
	}), [
		Le,
		Fe,
		Ie
	]);
	return /* @__PURE__ */ R(fr.Provider, {
		value: Re,
		children: e
	});
}
var xr = () => Mt(fr), Sr = (e, t) => t === "Backspace" ? e.length === 0 ? e : f(e.slice(0, -1)) : f(`${e}${t}`), Cr = (e) => ({
	value: f(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), wr = (e, t) => {
	let n = f(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, Tr = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", Er = "pc-enter-drift-item", Dr = "pc-enter-lift-item", Or = w, kr = "min-h-[27cqw] @md:min-h-[27cqw]", Ar = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", jr = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", Mr = "flex w-full flex-col items-center gap-2 @md:gap-3", Nr = "pb-3 @md:pb-4", Pr = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"[role=\"button\"]",
	"[contenteditable=\"true\"]"
].join(","), Fr = ["[data-amount-focus-excluded=\"true\"]"].join(","), Ir = "[@container_(max-width:620px)]:pl-1.5", Lr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.7fr)_auto_auto_minmax(0,1fr)] text-center", Rr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.45fr)_auto_auto_minmax(0,1fr)] text-center", zr = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-4 [@container_(min-width:520px)]:gap-[1.125rem] text-center", Br = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-3 text-center", Vr = "flex min-w-0 w-full flex-1 flex-col items-center justify-center gap-3 text-center [@container_(max-width:500px)]:[&&]:items-stretch", Hr = 650, Ur = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(Pr);
	return !!(n && t.contains(n));
}, Wr = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(Fr);
	return !!(n && t.contains(n));
}, Gr = (e) => {
	let t = e;
	if (t.uiComboView) return;
	let n = Ae(t);
	throw Ot({
		to: n,
		replace: !0
	});
}, Kr = Dt("/combo/")({
	beforeLoad: ({ context: e }) => {
		Gr(e);
	},
	component: qr
});
function qr() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, entryDecision: r } = Mt(le);
	return t && n && !r ? /* @__PURE__ */ R(At, {}) : /* @__PURE__ */ R(Jr, {
		initialAmount: e,
		lockAmount: t
	});
}
function Jr({ initialAmount: e, lockAmount: n }) {
	let m = fe(), ee = be("combo"), { contentInset: te } = rt(), g = Mt(le), v = Oe(), { isSubscribed: ue, publishInactive: y } = Ne(), { method: b, uiSuggestAmounts: pe, selectedPaymentType: C, uiComboView: w, uiComboView__PaymentTypes: Se, uiComboView__PaymentForm: we, gotoPaymentType: D, bonuses: O, uiPaymentConfirmView: Ae, uiBonusesStyle: k, uiInteractivePrompts: Je, uiFixedControls: A, hasAppliedGotoPaymentType: at, setCashierState: st, onPaymentTypeSelected: ut, onPaymentTypeDeselected: gt, currency: j, locale: xt, currencyFormatOptions: Dt, resetFlowOnBack: Ot, user: At, uiShowFees: M, uiAccountDelete: jt, paymentFormDraft: Nt, selectedBonusCode: F, onBonusSelected: Lt, onBonusDeselected: Rt } = Mt(le), { resolveTextKey: B, resolveTextKeys: zt, translateKey: V } = ke(), Bt = oe(), Vt = L(null), Ht = L(!1), Ut = L(!1), H = L(!1), Wt = L(null), Gt = L(null), [Kt, qt] = Pt(wr, e, Cr), [Jt, Yt] = Ft(!1), [Xt, Zt] = Ft(!1), [Qt, $t] = Ft(null), [en, tn] = Ft({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), U = Kt.value, nn = L(U), rn = L({
		amount: U,
		amountIsOutOfRange: !1,
		gotoPaymentType: D,
		selectedPaymentType: C,
		selectedPaymentTypeId: C,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: b
	}), { getPaymentType: an, paymentTypesList: W, isLoading: on, isError: sn } = Ie(), { getBonusCountForPaymentType: cn, getBonusAvailabilityForPaymentType: ln, getAvailableBonusesForPaymentType: un } = ve(), { selectPaymentType: dn, clearPaymentSelection: fn } = Pe(), { selectBonusCode: pn } = nt(), { requestAccountDelete: mn, actionConfirmationModal: hn } = lt();
	P(() => {
		nn.current = U;
	}, [U]), P(() => {
		Ut.current = !1, H.current = !1, qt({
			type: "sync-external",
			value: e
		});
	}, [e]), P(() => {
		Ot && st((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Ot, st]), P(() => {
		Ht.current && (Ht.current = !1, Vt.current?.blur());
	}, [U]);
	let gn = I(() => u(pe), [pe]), G = I(() => C ? an(C) : null, [an, C]), _n = G ? h(G) : null, vn = _n ? `quick-payment-form:${_n}` : null, K = _n ?? C, yn = W.length > 0, bn = w && ye(Se), xn = w && qe(Se), Sn = w ? ne({
		mode: Se,
		paymentFormEnabled: we
	}) : null, Cn = Me(Sn), wn = We(Sn), Tn = !!(Sn && yn), q = w && bn && G && G ? Ke(G) : !0, En = !!(G && Ue(G)), Dn = !!(G && (En || Ce(G))), On = !!(w && bn && we && G && Dn && (!Sn || Cn)), kn = Cn && On, J = q && !n, Y = q ? U : "", An = C && Tt(Nt, {
		paymentTypeName: K ?? C,
		method: b,
		amount: Y
	}) ? Nt : null, jn = I(() => ({
		...An?.values ?? {},
		amount: Y
	}), [An?.values, Y]), Mn = q && p(U) && !!C && !G && on && !sn, Nn = !!D && !at, Pn = bn, Fn = !!(G && de(G)), In = Pn && on && !sn && !yn && !C, Ln = Pn && !G || Fn, Rn = w && !!C && (bn || Nn), zn = !yn || on || sn, X = G?.limits, Bn = me(b, At, G?.fee), Vn = ce(Y, X, { maxBoundary: Bn }), Hn = N((e) => Be(e, {
		initialAmount: U,
		method: b,
		user: At
	}), [
		U,
		b,
		At
	]), Un = ae(Y, X, { maxBoundary: Bn }), Wn = Un?.key, [Gn, Kn] = Ft(() => ({
		value: U,
		key: Wn
	})), [qn, Jn] = Ft(U), Yn = q && Jt && Kt.changeOrigin === "user" && !!Wn && Gn.key === void 0, Xn = q && Jt && Kt.changeOrigin === "user", Zn = Gn.value === U && Gn.key === Wn, Qn = Xn && qn !== U, $n = q ? Qn ? qn : U : "", er = Tr({
		livePaymentAmount: Y,
		paymentTypeSupportsAmount: q,
		visiblePaymentSummaryAmount: $n
	}), ir = Yn && !Zn, ar = Wn;
	ir && (ar = void 0);
	let or = ar ? Un : void 0, { currencyFormatter: sr, formatCurrencyValue: Z, formatDisplayValue: cr } = Ge(), { interactivePromptContent: lr, pendingWithdrawalDrawer: ur, attachSuccessFooter: dr } = xr(), fr = I(() => ge(sr), [sr]), Q = _(or, V, Z), pr = N((e) => de(e) ? !0 : !ir && Hn(e), [ir, Hn]), mr = q ? p(U) : !!G, hr = v || q && !p(U) || q && Vn.isOutOfRange || zn || Ln, gr = V("cta.continue"), _r = V(b === t.PAYOUT ? "cta.payout" : "cta.payin"), vr = _r.toLocaleLowerCase(xt), yr = I(() => q ? Ye(U) : null, [U, q]), br = I(() => Ye(e), [e]), [Pr, Fr] = Ft(null), Gr = N((e) => {
		n || v || (qt({
			type: "sync-external",
			value: ht(e.nextAmount)
		}), Fr(e));
	}, [v, n]), Kr = !(!Pr || Ee(k) || F !== Pr.bonus.code || yr !== Pr.nextAmount), qr = q ? n ? p(U) : p(U) && (Kt.hasExplicitSelection || Kr) : !!G, Jr = I(() => q ? Ye($n) : null, [q, $n]), Yr = I(() => q ? Ye(er) : null, [q, er]), Xr = I(() => ({ amount: Yr }), [Yr]), Zr = G ? cn(G, { amount: yr }) : 0, Qr = G ? ln(G, { amount: Yr }).length : 0, $r = Ee(k) && (G ? Zr > 0 : De(O)), ei = xn && (Te(k) || T(k)) && !!G && Qr > 0, ti = Tn && T(k), ni = G ? St({
		uiPaymentConfirmView: Ae,
		hasPendingStep: $r,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (G.notifications?.length ?? 0) > 0
	}) : null, ri = w && bn && !!G && !En && ni?.action === "submit", ii = ri && mr && !Vn.isOutOfRange, ai = G ? St({
		uiPaymentConfirmView: Ae,
		hasPendingStep: $r,
		hasVisibleInlineContent: En,
		hasConfirmOnlyContent: Ce(G)
	}) : null, oi = w && On && !!G && ai?.action === "submit", si = oi && mr && !Vn.isOutOfRange, ci = ri || oi, li = On || ii || si, ui = li ? K : null;
	P(() => {
		let e = q ? l(U) : "", t = C ? {
			paymentTypeName: K ?? C,
			method: b,
			amount: e
		} : null;
		st((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !Tt(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
				...r,
				amount: t.amount,
				values: q ? {
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
		U,
		K,
		b,
		q,
		C,
		st
	]), P(() => {
		let e = () => {
			Wt.current &&= (clearTimeout(Wt.current), null);
		};
		if (e(), Yn) Wt.current = setTimeout(() => {
			Wt.current = null, Kn({
				value: U,
				key: Wn
			});
		}, Hr);
		else return Kn((e) => e.value === U && e.key === Wn ? e : {
			value: U,
			key: Wn
		}), () => {
			e();
		};
		return e;
	}, [
		U,
		Wn,
		Yn
	]), P(() => {
		let e = () => {
			Gt.current &&= (clearTimeout(Gt.current), null);
		};
		if (e(), Xn) Gt.current = setTimeout(() => {
			Gt.current = null, Jn(U);
		}, Hr);
		else return Jn((e) => e === U ? e : U), () => {
			e();
		};
		return e;
	}, [U, Xn]), P(() => {
		rn.current = {
			amount: U,
			amountIsOutOfRange: Vn.isOutOfRange,
			gotoPaymentType: D,
			selectedPaymentType: C,
			selectedPaymentTypeId: K,
			shouldShowBonusStep: $r,
			shouldSkipPaymentTypeSelection: Rn,
			isPaymentTypesUnavailable: zn,
			isPaymentTypeSelectionMissing: Ln,
			paymentTypeSupportsAmount: q,
			method: b
		};
	}, [
		K,
		U,
		Vn.isOutOfRange,
		D,
		C,
		$r,
		Rn,
		zn,
		Ln,
		q,
		b
	]);
	let di = N(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: u } = rn.current;
		if (o || s) return;
		let d = c ? l(e) : "";
		c && d.length === 0 || c && t || (st((e) => {
			let t = e.initialAmount !== d, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
			return !t && !r && !i ? e : {
				...e,
				...t ? { initialAmount: d } : {},
				paymentFormDraft: null,
				comboViewFormDraft: null,
				...r ? { hasAppliedGotoPaymentType: !0 } : {}
			};
		}), Bt(a && r ? i ? { to: "/bonus" } : {
			to: "/pt/$id",
			params: { id: r }
		} : { to: `/pts/${u}` }));
	}, [Bt, st]), fi = N((e, t) => {
		if (!K) return;
		let n = h(e);
		if (n !== K || zn || Ln || q && Vn.isOutOfRange) return;
		let r = q ? l(nn.current) : "";
		q && r.length === 0 || (st((e) => {
			let i = !!D && !e.hasAppliedGotoPaymentType, a = q ? {
				...t.values,
				amount: r
			} : t.values;
			return {
				...e,
				initialAmount: r,
				comboViewFormDraft: {
					paymentTypeName: n,
					method: b,
					amount: r,
					values: a,
					hasHostedFields: t.hasHostedFields
				},
				...i ? { hasAppliedGotoPaymentType: !0 } : {}
			};
		}), Bt($r ? { to: "/bonus" } : {
			to: "/pt/$id",
			params: { id: n }
		}));
	}, [
		K,
		Vn.isOutOfRange,
		D,
		Ln,
		zn,
		b,
		Bt,
		q,
		st,
		$r
	]), pi = N((e, t) => {
		if (!K) return;
		let n = h(e);
		if (n !== K) return;
		let r = q ? l(nn.current) : "", i = {
			paymentTypeName: n,
			method: b,
			amount: r,
			values: q ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		st((e) => ct(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		K,
		b,
		q,
		st
	]), mi = N((e) => {
		n || v || (H.current ? (H.current = !1, Ut.current = !1, qt({
			type: "user",
			value: e,
			markExplicitSelection: !1
		})) : Ut.current && e.length === 0 ? qt({
			type: "user",
			value: e,
			markExplicitSelection: !1
		}) : (Ut.current = !1, H.current = !1, qt({
			type: "user",
			value: e,
			markExplicitSelection: e.length > 0
		})));
	}, [
		n,
		v,
		qt
	]), hi = N((e) => {
		if (n || v) return;
		let t = f(e);
		Ut.current = !1, H.current = !1, Ht.current = !0, qt({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		v,
		qt
	]), gi = Qt?.submit, _i = !li || en.paymentTypeName === ui, vi = g.offers !== void 0 && g.checkoutState?.phase !== "confirmed" ? !0 : li ? !_i || !gi || hr || !gi.visible || gi.disabled : hr, yi = li && _i && gi ? gi.loading : !1, bi = N(() => {
		if (li && _i && gi) return gi.onClick();
		di();
	}, [
		gi,
		di,
		_i,
		li
	]), xi = ci || On && ai?.buttonLabel === "pay" ? _r : gr, Si = N(() => {
		bi();
	}, [bi]), Ci = I(() => [/* @__PURE__ */ R(x, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: vi,
		loading: yi,
		onClick: Si,
		label: xi
	}, "cashier-amount-continue")], [
		xi,
		vi,
		yi,
		Si
	]), wi = N((e) => {
		if (n || v) return;
		let t = e.key === "," ? "." : e.key, r = Sr(nn.current, t);
		Ut.current = !1, H.current = !1, qt({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		v,
		qt
	]), Ti = N((e) => {
		Yt(e), n || v || !w ? (Ut.current = !1, H.current = !1) : e ? p(nn.current) && (Ut.current = !0, H.current = !1) : Ut.current && !p(nn.current) ? H.current = !0 : (Ut.current = !1, H.current = !1);
	}, [
		v,
		n,
		w
	]), Ei = N((e) => {
		let t = Vt.current;
		if (!t || n || v || Wr(e.target, e.currentTarget) || Ur(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		(r || !a) && (r && !i ? (e.preventDefault(), e.stopPropagation(), t.blur()) : (e.preventDefault(), e.stopPropagation(), !r && t.focus()));
	}, [v, n]), Di = N((e) => {
		let t = e.currentTarget.scrollTop > 1;
		Zt((e) => e === t ? e : t);
	}, []);
	et({
		inputRef: Vt,
		inputType: "decimal",
		onType: v || !J ? void 0 : wi
	});
	let Oi = J ? "cta.enter_amount" : "payment.enter_details", ki = V(Oi), Ai = N((e) => cr(e) || e, [cr]), $ = I(() => ({
		legacyTitle: ki,
		titleKey: J ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: vr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ R(Ve, {})
	}), [
		vr,
		J,
		ki
	]), ji = I(() => Q ? {
		...$,
		legacyTitle: Q,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ R(je, {}),
		tone: "danger"
	} : null, [Q, $]), Mi = I(() => {
		if (!Pr || !Ee(k) || yr !== Pr.nextAmount && br !== Pr.nextAmount || Kt.changeOrigin === "user" && yr !== Pr.nextAmount || F !== Pr.bonus.code) return null;
		let e = Z(Pr.nextAmount);
		return {
			...$,
			titleKey: "bonus.selected.title",
			titleValues: void 0,
			bodyKey: "bonus.selected.desc",
			bodyValues: {
				amount: e,
				method: vr
			},
			icon: /* @__PURE__ */ R(Fe, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ R("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: Et(V("bonus.top_up.success"), { amount: Z(Pr.addedAmount) })
			})
		};
	}, [
		yr,
		Kt.changeOrigin,
		$,
		Pr,
		Z,
		br,
		vr,
		F,
		V,
		k
	]), Ni = I(() => tt({ translateKey: V }), [V]), Pi = I(() => Pn && (sn || !yn) ? {
		...$,
		legacyTitle: V("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ R(je, {}),
		tone: "danger"
	} : null, [
		$,
		yn,
		sn,
		Pn,
		V
	]), Fi = !li || en.paymentTypeName === ui, Ii = !li || en.isComplete, Li = !!(ue && ri && G && vn), Ri = (!q || p(Y)) && !Vn.isOutOfRange && !en.errorMessage, zi = Li && G ? pt({
		amount: Y,
		bonusCode: g.offers === void 0 ? F : i(g.offers, g.selectedOfferId) ?? null,
		canSubmit: !vi,
		complete: Ri && Ii,
		currency: j,
		dirty: Y !== f(e),
		errors: Ri ? {} : { amount: "invalid" },
		fields: (G.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: f(e) },
		method: b,
		paymentType: G,
		submitting: yi,
		valid: Ri,
		values: { amount: Y }
	}) : null, Bi = N(() => {
		vn && y(vn);
	}, [y, vn]), Vi = !on && !Mn && Fi, Hi = I(() => {
		let e = $, t = {
			...e,
			titleKey: n ? void 0 : e.titleKey
		};
		return Mn ? t : ji || (li && en.errorMessage ? {
			...e,
			legacyTitle: en.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(je, {}),
			tone: "danger"
		} : Mi || (qr ? Ln ? {
			...e,
			...Ze({ translateKey: V }),
			titleValues: void 0
		} : Ii ? {
			...e,
			legacyTitle: V("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(Le, {})
		} : Ni : e));
	}, [
		ji,
		$,
		Mi,
		en.errorMessage,
		V,
		qr,
		Mn,
		Ln,
		Ii,
		n,
		Ni,
		li
	]), [Ui, Wi] = Ft(null), Gi = Ui?.methodPromptLabel === vr ? Ui.content : null, Ki = Gi?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", qi = Qn || ir, Ji = ji ?? (qi && !ji && !Ki ? Gi ?? Hi : Hi), Yi = I(() => dr(Ji), [dr, Ji]), Xi = I(() => ({
		...$,
		legacyTitle: " ",
		titleKey: void 0,
		titleValues: void 0,
		preferLegacyTitle: !0,
		legacyBody: $.bodyKey || $.legacyBody ? " " : void 0,
		bodyKey: void 0,
		bodyValues: void 0,
		preferLegacyBody: !0,
		meta: void 0,
		iconSlotClassName: S($.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [$]);
	P(() => {
		!Vi || qi || Pi || lr || Wi((e) => e?.methodPromptLabel === vr && e.content === Hi ? e : {
			methodPromptLabel: vr,
			content: Hi
		});
	}, [
		qi,
		Vi,
		vr,
		Hi,
		Pi,
		lr
	]);
	let Zi = Pi ?? Xi;
	!Pi && Vi && (Zi = lr ? Ji : Yi);
	let Qi = Pi ?? ji, $i = !(!F || Ee(k) || Pi || ji || Zi.titleKey !== "interactive_prompt.quick_payment.enter_amount.title"), ea = I(() => {
		if (!$i) return null;
		let e = $;
		return Ln ? {
			...e,
			...Ze({ translateKey: V }),
			titleValues: void 0
		} : Ii ? {
			...e,
			legacyTitle: V("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(Le, {})
		} : Ni;
	}, [
		$,
		Ii,
		Ln,
		Ni,
		$i,
		V
	]), ta = $i ? ea : Zi, na = Je ? ta : Qi, ra = !!(Q && na?.preferLegacyTitle && na.legacyTitle === Q), ia = ee ? void 0 : Q, aa = Ir, oa = J && gn.length > 0, sa = !oa, ca = !!(X?.min || X?.max), la = ca ? Ar : kr, ua = "gap-2", da = S("p-3", !ca && "[@container_(min-width:520px)]:py-3.5"), fa = sa && !ca, pa = _t(b, j, At, {
		amount: $n,
		fee: G?.fee,
		includeRemainingBalance: !0
	}), ma = M ? se(G?.fee, l($n) || "0", {
		feeCurrencyFormatter: fr,
		formatCurrencyValue: Z
	}) : null, ha = b === t.PAYIN && M ? ze(G?.fee, l($n) || "0", j) : null, ga = (() => {
		let r = n && !G && W.some(Ke);
		if (!q && !r) return [];
		let i = n ? [{
			id: "amount",
			label: "field.amount.label",
			value: {
				value: r ? Ye(e) ?? 0 : Jr ?? 0,
				currency: j
			}
		}] : [];
		return r ? i : b === t.PAYOUT ? _e(pa, [...i, ma]) : i.length || ma || ha ? [
			...i,
			ma,
			ha
		].filter((e) => e !== null) : pa;
	})(), _a = ga.length > 0, va = Cn && !!G, ya = _a && va && (!q || Jr !== null && Jr > 0), ba = _a && !va, xa = I(() => Bn !== null && Jr !== null && Jr > Bn ? { "withdrawable-balance": "danger" } : {}, [Bn, Jr]), Sa = J || oa, Ca = On && !kn && !!C, wa = Tn, Ta = n && yn || Sa || Ca || wa || !!Qt, Ea = xn && yn, Da = Ea && A, Oa = Ea && !A, ka = w && xn && A && te > 0 ? te : 0, Aa = I(() => ka > 0 ? { paddingBottom: ka } : void 0, [ka]), ja = w && A, Ma = 2 + +!!Oa + +!!Ca + +!!wa + +!!Da, Na = 2 + +!!Oa, Pa = Na + +!!Ca, Fa = Pa + +!!wa, Ia = Q ? "danger" : "neutral", La = S(Er, !sa && !ca && "self-center", sa && "row-start-2 self-end", sa && (fa ? "pb-1.5 @md:pb-2" : "pb-2")), Ra = n ? void 0 : "cursor-pointer", za = S("min-w-0 w-full row-start-3 self-start", Dr), Ba = fa ? Rr : Lr, Va = zr;
	sa ? Va = Ba : ca && (Va = Br);
	let Ha = sa ? Ba : Vr, Ua = /* @__PURE__ */ R(re, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: ki,
		presentationTitle: B(Oi),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), Wa = Sa && ba, Ga = !A || n && ga.some((e) => e.id === "amount"), Ka = Wa ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", qa = Wa ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ja = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", Ya = m.attrs("quick-payment-summary-surface"), Xa = m.attrs("quick-payment-amount-surface"), Za = N((e, t) => {
		tn((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Qa = Ca && G ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: vt({
			index: Na,
			total: Ma,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ R(yt, {
			paymentType: G,
			selectionId: _n ?? void 0,
			amountValue: Y,
			hideAmountField: !0,
			presentedAmountError: ia,
			onActionsChange: $t,
			onPromptStateChange: Za,
			onPreparedValues: fi,
			onValuesChange: pi,
			submitMode: ai?.submitMode,
			valueOverrides: jn,
			animateEntrance: !1
		}, _n ?? G.name)
	}) : null, $a = ei && G ? /* @__PURE__ */ R(mt, {
		placement: T(k) ? "payment-list" : "payment-form",
		paymentType: G,
		amount: er,
		onTopUpAccepted: Gr
	}) : null, eo = ba ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": Ya["data-pc-slot"],
		className: S(Ya.className, "w-full", Wa && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ R(Xe, {
			merchantElements: !0,
			summaryFields: ga,
			rowVariants: xa,
			animateEntrance: !1,
			panelBorderEdges: Wa ? "without-top" : "all",
			className: Wa ? S("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, to = ti ? /* @__PURE__ */ R(mt, {
		placement: "payment-list",
		paymentType: G,
		paymentTypes: W,
		amount: er,
		onTopUpAccepted: Gr
	}) : null, no = Oa ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: S("w-full", dt),
		children: /* @__PURE__ */ R(nr, {
			bonusEvaluationContext: Xr,
			floating: Ci.length > 0 ? !1 : "adaptive",
			animationStyle: vt({
				index: 2,
				total: Ma,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, ro = A || !Cn ? /* @__PURE__ */ R(Qe, {
		domScope: "quick-payment-actions",
		items: Ci,
		fixed: A,
		enabled: !In
	}) : null, io = ii && G ? /* @__PURE__ */ R("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ R(yt, {
			paymentType: G,
			selectionId: _n ?? void 0,
			amountValue: Y,
			hideAmountField: !0,
			presentedAmountError: ia,
			onActionsChange: $t,
			onPromptStateChange: Za,
			onPreparedValues: fi,
			onValuesChange: pi,
			submitMode: "submit",
			valueOverrides: jn,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: Bi
		}, _n ?? G.name)
	}) : null, ao = N((e) => Te(k) && ln(e, { amount: Yr }).length > 0, [
		ln,
		k,
		Yr
	]), oo = N((e) => {
		let t = h(e), n = ao(e), r = !A, i = n && r, a = !xe(e);
		return /* @__PURE__ */ z("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: S("flex min-w-0 flex-col", a && "px-0.5", i ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ R(mt, {
					paymentType: e,
					amount: er,
					onTopUpAccepted: Gr
				}),
				/* @__PURE__ */ R(yt, {
					paymentType: e,
					selectionId: t,
					amountValue: Y,
					hideAmountField: !0,
					presentedAmountError: ia,
					onActionsChange: $t,
					onPromptStateChange: Za,
					onPreparedValues: fi,
					onValuesChange: pi,
					valueOverrides: jn,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: ai?.submitMode,
					reserveTrailingActionSpace: r && !i,
					animateEntrance: !1
				}, t),
				r && /* @__PURE__ */ R($e, {
					domScope: "quick-payment-accordion-actions",
					items: Ci,
					adaptive: !1
				})
			]
		});
	}, [
		ia,
		jn,
		fi,
		pi,
		Za,
		Gr,
		ao,
		Y,
		Ci,
		ai?.submitMode,
		A,
		er
	]), so = N((e) => ya ? /* @__PURE__ */ R(ft, {
		summaryFields: ga,
		rowVariants: xa
	}) : null, [
		ga,
		ya,
		xa
	]), co = N((e) => Ue(e) || Ce(e) || !A || ao(e), [ao, A]), lo = N((e) => co(e) || ya, [co, ya]), uo = N((e) => {
		if (v) return;
		let t = an(e);
		if (!t || Hn(t)) return;
		let n = h(t);
		wn && K === n && lo(t) ? (fn(), gt?.(t)) : (dn(n, { availableBonuses: un(t, { amount: yr }) }), ut?.(t));
	}, [
		K,
		yr,
		fn,
		un,
		an,
		lo,
		wn,
		v,
		Hn,
		gt,
		ut,
		dn
	]), fo = V("account.delete.title"), po = N((e) => jt && e.accountId ? /* @__PURE__ */ R(x, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": fo,
		disabled: v,
		onClick: () => {
			mn(e);
		},
		iconOnly: !0,
		label: fo,
		leadingIcon: /* @__PURE__ */ R(je, {})
	}) : null, [
		fo,
		v,
		mn,
		jt
	]), mo = wa && Sn ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-payment-types",
		className: S("w-full", dt),
		style: vt({
			index: Pa,
			total: Ma,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: Cn ? /* @__PURE__ */ R(bt, {
			paymentTypes: W,
			domScope: "quick-payment",
			selectedPaymentType: C,
			onSelect: uo,
			renderActions: po,
			renderPanel: oo,
			renderFooter: so,
			hasPanel: lo,
			hasPanelBody: co,
			collapsible: wn,
			isPaymentTypeDisabled: pr,
			interactionLocked: v,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Xr
		}) : /* @__PURE__ */ R(Ct, {
			paymentTypes: W,
			domScope: "quick-payment",
			listStyle: Sn,
			selectable: !0,
			selectedPaymentType: C,
			onSelect: uo,
			renderActions: po,
			isPaymentTypeDisabled: pr,
			interactionLocked: v,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: Xr
		})
	}) : null, ho = to || mo ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [to, mo]
	}) : null, go = lr ? /* @__PURE__ */ z("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ R(it, {
			content: lr,
			forceVisible: !0
		}), ur]
	}) : null, _o = Qa || ho || io || go ? /* @__PURE__ */ z(It, { children: [
		Qa,
		ho,
		io,
		go,
		hn
	] }) : void 0, vo = !!(Qa || io || ho && kn), yo = !!(vo || go), bo = !vo || !!Qt, xo = yo && !bo ? "protected-surface-not-ready" : vi ? "invalid-state" : void 0, So = N((e) => {
		if (e === F) return;
		let t = F ? O?.find((e) => e.code === F) : void 0, n = e ? O?.find((t) => t.code === e) : void 0;
		(!e || n) && (pn(e), t && Rt?.(t), n && Lt?.(n));
	}, [
		O,
		Rt,
		Lt,
		pn,
		F
	]), Co = I(() => W.flatMap((e) => {
		let t = h(e), n = he(e), r = s({
			paymentType: e,
			id: t,
			label: n ? o(n) : zt(e.nameKeys ?? e.name),
			currency: j,
			formatMoney: Z,
			minimumLabel: B("field.limits.min.label"),
			maximumLabel: B("field.limits.max.label"),
			selected: K === t,
			disabled: Hn(e),
			unavailable: de(e)
		});
		return r ? [r] : [];
	}), [
		K,
		j,
		Z,
		Hn,
		W,
		B,
		zt
	]), wo = I(() => (G ? ln(G, { amount: yr }) : (O ?? []).map((e) => ({
		bonus: e,
		status: "available",
		reasons: []
	}))).map(({ bonus: e, status: t }) => ({
		id: e.code,
		title: B(e.title),
		description: B(e.description),
		selected: e.code === F,
		available: t === "available"
	})), [
		yr,
		O,
		ln,
		G,
		F,
		B
	]), { createAction: To, revision: Eo } = E({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), Do = I(() => J ? gn.map((e) => ({
		amount: a(e, j, Z),
		selected: p(Y) && c(e, Y) === 0,
		disabled: v || ce(e, X, { maxBoundary: Bn }).isOutOfRange
	})) : [], [
		X,
		j,
		Z,
		v,
		Y,
		Bn,
		J,
		gn
	]), Oo = I(() => ({
		screen: "combo",
		revision: Eo,
		busy: v || yi,
		amountEntryVisible: J,
		amount: a(Y, j, Z),
		...q && Q && ar ? { amountError: r(B(ar), Q) } : {},
		method: b,
		amountLocked: n,
		amountLabel: B("field.amount.label"),
		paymentTypesLabel: B("cta.choose_payment_type"),
		continueLabel: B("cta.continue"),
		paymentTypes: Co,
		suggestedAmounts: Do,
		bonuses: wo,
		selectedBonusId: F,
		protectedSurfaceRequired: yo,
		protectedSurfaceReady: bo,
		...yo ? { protectedSurfaceLabel: B(d) } : {},
		canContinue: !vi
	}), [
		Q,
		q,
		j,
		bo,
		yo,
		vi,
		yi,
		Z,
		v,
		n,
		b,
		wo,
		Co,
		Do,
		Y,
		B,
		Eo,
		F,
		J,
		ar
	]), ko = I(() => ({
		setAmount: To("setAmount", (e) => {
			mi(f(e));
		}, {
			busy: v,
			validate: (e) => f(e) === e,
			unavailableReason: n || !J ? "invalid-state" : void 0
		}),
		selectPaymentType: To("selectPaymentType", uo, {
			busy: v,
			validate: (e) => Co.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: To("selectBonus", So, {
			busy: v,
			validate: (e) => e === null || wo.some((t) => t.id === e && t.available)
		}),
		continue: To("continue", () => bi(), {
			busy: v || yi,
			unavailableReason: xo
		})
	}), [
		To,
		yi,
		uo,
		bi,
		So,
		mi,
		v,
		n,
		xo,
		wo,
		Co,
		J
	]), Ao = N((e) => /* @__PURE__ */ R("div", {
		id: m.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: Di,
		style: Aa,
		className: S(m.className("route-quick-payment"), m.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", A ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: e
	}), [
		m,
		Di,
		Aa,
		A
	]);
	return /* @__PURE__ */ z(It, { children: [Li && vn && /* @__PURE__ */ R(Re, {
		sourceId: vn,
		state: zi
	}), /* @__PURE__ */ R(kt, {
		isLoading: In,
		loaderLabel: V("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ R(He, {
			id: "combo",
			bonusPreviewOwned: !!($a || to || kn && G && ao(G)),
			model: Oo,
			actions: ko,
			deferPresentationUpdates: yo,
			frame: Ao,
			protectedContent: _o,
			children: (e) => /* @__PURE__ */ z(It, { children: [
				/* @__PURE__ */ z("div", {
					className: S("flex flex-1 flex-col items-center", Je ? jr : "justify-center"),
					children: [Je ? /* @__PURE__ */ z("div", {
						className: Mr,
						children: [
							/* @__PURE__ */ z("div", {
								"data-slot": "quick-payment-prompt-sticky-anchor",
								"data-pc-scroll-obstruction": "top",
								className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
								children: [/* @__PURE__ */ R("div", {
									role: n && ra ? "alert" : void 0,
									className: S("pointer-events-auto", Or, Er),
									style: vt({
										index: 0,
										total: Ma,
										direction: "reverse",
										baseDelayMs: 12,
										staggerMs: 24
									}),
									children: /* @__PURE__ */ z("div", {
										className: "flex flex-col gap-3",
										children: [lr && /* @__PURE__ */ R(it, {
											content: lr,
											className: aa
										}), /* @__PURE__ */ R(it, {
											content: ta,
											className: aa
										})]
									})
								}), /* @__PURE__ */ R("div", {
									"aria-hidden": "true",
									"data-slot": "quick-payment-prompt-sticky-fade",
									"data-pc-scroll-obstruction-extent": "true",
									style: ie,
									className: S("pointer-events-none absolute inset-x-0 top-full", Xt ? "opacity-100" : "opacity-0")
								})]
							}),
							n && Q && !ra && /* @__PURE__ */ R(wt, { message: Q }),
							(Ta || e.hasContent) && /* @__PURE__ */ R("div", {
								className: S(Or, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ z(rr, {
									"data-slot": "quick-payment-surface-stack",
									className: ja ? Nr : void 0,
									children: [
										e.top,
										!ba && e.hasSummaryContent && /* @__PURE__ */ R(Xe, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										Sa && /* @__PURE__ */ z("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": Xa["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Ei,
											className: S(Xa.className, "flex flex-col", Ka, qa, ua, Ja, da, la),
											children: [/* @__PURE__ */ z("div", {
												"data-slot": "quick-payment-amount-layout",
												className: Va,
												children: [
													/* @__PURE__ */ R("div", {
														"data-slot": "quick-payment-amount-title-row",
														"data-theme": Ia,
														className: S(La, Ra),
														onMouseDown: Ei,
														style: vt({
															index: 0,
															total: Ma,
															direction: "reverse",
															baseDelayMs: 12,
															staggerMs: 24
														}),
														children: Ua
													}),
													/* @__PURE__ */ R("div", {
														"data-slot": "quick-payment-amount-input-row",
														className: sa ? S(za, Ra) : S("w-full", Dr, Ra),
														onMouseDown: Ei,
														style: vt({
															index: 0,
															total: Ma,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ R(tr, {
															inputRef: Vt,
															value: U,
															onChange: mi,
															onSubmit: Si,
															onFocusChange: Ti,
															canSubmit: !vi,
															disabled: v,
															invalid: !!Q,
															limits: X,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: xt,
															formatOptions: Dt,
															clearOnFocus: w && !v,
															animateValueChange: Kt.changeOrigin === "programmatic"
														})
													}),
													oa && !ca && /* @__PURE__ */ R(ot, {
														suggestions: gn,
														activeSuggestion: U,
														onSelect: hi,
														disabled: v,
														formatLabel: Ai,
														amountLimits: X,
														size: "xs",
														className: S("order-3", "mt-1")
													})
												]
											}), oa && ca && /* @__PURE__ */ R(ot, {
												suggestions: gn,
												activeSuggestion: U,
												onSelect: hi,
												disabled: v,
												formatLabel: Ai,
												amountLimits: X,
												size: "xs",
												className: S("order-3", "[@container_(min-width:520px)]:-mt-0.5")
											})]
										}),
										Wa && eo,
										!Wa && Ga && eo,
										no,
										$a,
										Qa,
										ho,
										!Wa && !Ga && eo,
										e.bottom,
										ro
									]
								})
							})
						]
					}) : /* @__PURE__ */ z("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [
							Qi && /* @__PURE__ */ R("div", {
								role: n && ra ? "alert" : void 0,
								className: S("pointer-events-auto", Or, Er),
								style: vt({
									index: 1,
									total: Ma,
									direction: "reverse"
								}),
								children: /* @__PURE__ */ R(it, {
									content: Qi,
									forceVisible: !0
								})
							}),
							n && Q && !ra && /* @__PURE__ */ R(wt, { message: Q }),
							(Ta || e.hasContent) && /* @__PURE__ */ R("div", {
								className: S(Or, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ z(rr, {
									"data-slot": "quick-payment-surface-stack",
									className: ja ? Nr : void 0,
									children: [
										e.top,
										!ba && e.hasSummaryContent && /* @__PURE__ */ R(Xe, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										Sa && /* @__PURE__ */ z("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": Xa["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Ei,
											className: S(Xa.className, "flex flex-col", Ka, qa, ua, Ja, "p-4", la, "@md:px-5 @md:py-4 @xl:py-5"),
											children: [/* @__PURE__ */ z("div", {
												"data-slot": "quick-payment-amount-layout",
												className: Ha,
												children: [/* @__PURE__ */ R("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": Ia,
													className: S(La, Ra),
													onMouseDown: Ei,
													style: vt({
														index: 0,
														total: Ma,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: Ua
												}), /* @__PURE__ */ R("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: S(sa ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", Ra),
													onMouseDown: Ei,
													children: /* @__PURE__ */ R("div", {
														className: S("w-full", Dr),
														style: vt({
															index: 0,
															total: Ma,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ R(tr, {
															inputRef: Vt,
															value: U,
															onChange: mi,
															onSubmit: Si,
															onFocusChange: Ti,
															canSubmit: !vi,
															disabled: v,
															invalid: !!Q,
															limits: X,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: xt,
															formatOptions: Dt,
															clearOnFocus: w && !v,
															animateValueChange: Kt.changeOrigin === "programmatic"
														})
													})
												})]
											}), oa && /* @__PURE__ */ R(ot, {
												suggestions: gn,
												activeSuggestion: U,
												onSelect: hi,
												disabled: v,
												formatLabel: Ai,
												amountLimits: X,
												size: "xs",
												className: S(!ca && "mt-3 @md:mt-0", "order-2")
											})]
										}),
										Wa && eo,
										!Wa && Ga && eo,
										no,
										$a,
										Qa,
										ho,
										!Wa && !Ga && eo,
										e.bottom,
										ro
									]
								})
							})
						]
					}), Da && /* @__PURE__ */ R("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ R("div", {
							className: Or,
							children: /* @__PURE__ */ R(nr, {
								bonusEvaluationContext: Xr,
								animationStyle: vt({
									index: Fa,
									total: Ma,
									direction: "forward",
									baseDelayMs: 70,
									staggerMs: 36
								})
							})
						})
					})]
				}),
				io,
				ur
			] })
		})
	})] });
}
//#endregion
export { xr as a, Ht as c, br as i, Vt as l, Kr as n, or as o, Gr as r, rr as s, qr as t };
