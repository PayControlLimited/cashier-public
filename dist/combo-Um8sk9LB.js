/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { F as r, H as i, M as a, N as o, P as s, ct as c, dt as l, ft as u, j as ee, ut as d } from "./purchase-Bc_pT4mi.js";
import { $i as te, $n as f, A as ne, C as re, D as ie, E as ae, Fr as oe, Gt as p, Jt as m, K as h, Kt as se, Mr as ce, Nr as g, Pr as _, Q as le, Qn as ue, Rr as v, Sr as de, U as y, Vn as fe, Vr as b, Vt as pe, Xn as me, Yi as x, Z as he, a as ge, ar as _e, c as S, cr as C, ct as w, d as T, dn as E, dr as ve, ea as ye, f as be, fr as D, ft as xe, gr as Se, h as Ce, hn as we, i as Te, ir as Ee, k as De, la as O, lr as Oe, lt as ke, mr as Ae, n as je, na as Me, pa as Ne, pr as Pe, qi as Fe, rr as Ie, sa as Le, sn as Re, sr as ze, ta as Be, ua as Ve, ui as He, ur as Ue, v as We, vn as Ge, vr as Ke, w as k, yr as qe, z as Je, zt as Ye } from "./usePaymentSelection-ikQnuCZA.js";
import { A as Xe, B as Ze, C as Qe, D as $e, H as et, K as A, L as tt, M as nt, O as rt, R as it, S as at, a as ot, at as st, b as ct, c as lt, d as ut, f as dt, g as ft, h as pt, i as mt, j as ht, k as gt, l as _t, m as vt, mt as yt, n as bt, nt as xt, o as St, p as Ct, pt as wt, r as Tt, rt as Et, s as j, t as Dt, tt as Ot, u as kt, v as At, y as jt, z as Mt } from "./inlinePaymentSubmit-D-34_gib.js";
import { t as Nt, u as Pt } from "./fileRoute-DLfgXLd5.js";
import { n as Ft } from "./CashierFullscreenLoader-fJ94qcDn.js";
import { t as It } from "./CashierEntry-Ce-ITp5Y.js";
import * as M from "react";
import { createContext as Lt, useCallback as N, useContext as Rt, useEffect as P, useImperativeHandle as zt, useLayoutEffect as F, useMemo as I, useReducer as Bt, useRef as L, useState as Vt } from "react";
import { Fragment as Ht, jsx as R, jsxs as z } from "react/jsx-runtime";
//#region src/utils/pendingWithdrawals.ts
var Ut = 1, Wt = 100, B = /* @__PURE__ */ new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), Gt = (e) => {
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
	let t = Gt(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, Kt = (e) => (e ?? []).flatMap((e) => {
	let t = V(e);
	return t ? [t] : [];
}), qt = async (e, t, n) => {
	let { data: r, error: i } = await x({
		client: t,
		query: {
			...e,
			method: "payout",
			page: Ut,
			pageSize: Wt
		},
		cache: "no-store",
		signal: n
	});
	if (i) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: Kt(r?.payments),
		totalItems: r?.totalItems ?? 0,
		totalPages: r?.totalPages ?? 0,
		currentPage: r?.currentPage ?? Ut,
		pageSize: r?.pageSize ?? Wt
	};
}, Jt = async ({ client: e, merchantId: t, userId: n, sessionId: r, paymentId: i, signal: a }) => {
	let { data: o, error: s } = await Fe({
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
}, Yt = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
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
}, U = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, Xt = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, Zt = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, Qt = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function $t(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function en(e, t, n, r) {
	let i = t.formatToParts(e);
	n && i.unshift({
		type: "prefix",
		value: n
	}), r && i.push({
		type: "suffix",
		value: r
	});
	let a = [], o = [], s = [], c = [], l = {}, u = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, ee = "", d = !1, te = !1;
	for (let e of i) {
		ee += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (d = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (te = !0, s.push({
			type: t,
			value: e.value,
			key: u(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: u(t),
			pos: -1 - l[t]
		}))) : (d || te ? c : a).push({
			type: t,
			value: e.value,
			key: u(t)
		});
	}
	let f = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		f.unshift(t.type === "integer" ? {
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
		integer: f,
		fraction: s,
		post: c,
		valueAsString: ee,
		value: typeof e == "string" ? parseFloat(e) : e
	};
}
String.raw;
var tn = String.raw, nn = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), rn = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), an = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, on = "--_number-flow-d-opacity", sn = "--_number-flow-d-width", W = "--_number-flow-dx", cn = "--_number-flow-d", ln = (() => {
	try {
		return CSS.registerProperty({
			name: on,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: W,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: sn,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: cn,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), un = "var(--number-flow-char-height, 1em)", G = "var(--number-flow-mask-height, 0.25em)", dn = `calc(${G} / 2)`, fn = "var(--number-flow-mask-width, 0.5em)", pn = `calc(${fn} / var(--scale-x))`, mn = "#000 0, transparent 71%", hn = tn`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${un} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${sn}) / var(--width));transform:translateX(var(${W})) scaleX(var(--scale-x));margin:0 calc(-1 * ${fn});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${pn},#000 calc(100% - ${pn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${G},#000 calc(100% - ${G}),transparent 100% ),radial-gradient(at bottom right,${mn}),radial-gradient(at bottom left,${mn}),radial-gradient(at top left,${mn}),radial-gradient(at top right,${mn});-webkit-mask-size:100% calc(100% - ${G} * 2),calc(100% - ${pn} * 2) 100%,${pn} ${G},${pn} ${G},${pn} ${G},${pn} ${G};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${dn} ${fn};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${W})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${cn})}.digit__num,.number .section::after{padding:${dn} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${on}))}`, gn = HTMLElement;
tn`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${un} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${dn} 0}.symbol{white-space:pre}`;
var _n = rn && nn && ln, vn, yn = class extends gn {
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
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = _n && this._animated && (!this.respectMotionPreference || !(an != null && an.matches)) && Zt(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) vn || (vn = new CSSStyleSheet(), vn.replaceSync(hn)), this.shadowRoot.adoptedStyleSheets = [vn];
			else {
				let e = document.createElement("style");
				e.textContent = hn, this.shadowRoot.appendChild(e);
			}
			this._pre = new K(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new bn(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new K(this, a, {
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
yn.defaultProps = {
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
var bn = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new Sn(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new Sn(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = U("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = U("span", {
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
			[W]: [`${t}px`, "0px"],
			[sn]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, xn = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = U("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new q(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new Tn(this, e.type, e.value, {
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
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${Xt(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if ($t(e, (e) => {
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
}, Sn = class extends xn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof q && e.update(0);
		}), this.pop(t);
	}
}, K = class extends xn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, Cn = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [on]: [-.9999, 0] }, {
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
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [on]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, wn = class extends Cn {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, q = class extends wn {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = U("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = U("span", {
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
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [cn]: [-o, 0] }, {
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
}, Tn = class extends wn {
	constructor(e, t, n, r) {
		let i = U("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, U("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new Cn(this.flow, i, { onRemove: this._onChildRemove(n) }));
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
				let t = U("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new Cn(this.flow, t, {
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
}, En = parseInt(M.version.match(/^(\d+)\./)?.[1]) >= 19, Dn = ["data", "digits"], On = class extends yn {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
On.observedAttributes = En ? [] : Dn, Qt("number-flow-react", On);
var kn = {}, An = En ? (e) => e : JSON.stringify;
function jn(e) {
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
var Mn = class extends M.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = jn(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? On.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), En && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = jn(this.props);
		return /*#__PURE__*/ M.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: An(s),
			data: An(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, J = /*#__PURE__*/ M.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	M.useImperativeHandle(o, () => s.current, []);
	let s = M.useRef(), c = M.useContext(Nn);
	c?.useRegister(s);
	let l = M.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = M.useMemo(() => n ? JSON.stringify(n) : "", [n]), ee = M.useMemo(() => en(e, kn[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ M.createElement(Mn, {
		...a,
		group: c,
		data: ee,
		innerRef: s
	});
}), Nn = /*#__PURE__*/ M.createContext(void 0), Pn = (e) => e.length > 0 ? e : "";
function Fn(e) {
	return typeof e == "object" && !!e;
}
var In = (e, t, n) => e && e !== t ? e : n, Y = .747, X = (e) => Number((e * Y).toFixed(3)), Ln = (e) => ({
	min: X(e.min),
	max: X(e.max)
}), Rn = X(.8), Z = {
	base: Ln({
		min: 1.05,
		max: 3.25
	}),
	md: Ln({
		min: 1.24,
		max: 3.8
	}),
	xl: Ln({
		min: 1.42,
		max: 4.36
	})
}, zn = {
	min: Z.base.min,
	max: Z.base.max
}, Bn = Z.base.max, Vn = .75, Hn = [
	"text-[length:var(--pc-font-input-meta-size,0.75rem)]",
	"leading-[var(--pc-font-input-meta-line-height,1rem)]",
	"[font-weight:var(--pc-font-input-meta-weight,400)]",
	"[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]",
	"[font-style:var(--pc-font-input-meta-style,inherit)]",
	"[text-transform:var(--pc-font-input-meta-text-transform,inherit)]",
	"@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]",
	"@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]"
].join(" "), Un = {
	md: 448,
	xl: 560
}, Wn = "min(6ch, 100%)", Gn = X(60), Kn = 24, qn = "cubic-bezier(0.2, 0.8, 0.2, 1)", Jn = .01, Yn = "0em", Xn = {
	transformTiming: {
		duration: 450,
		easing: qn
	},
	spinTiming: {
		duration: 480,
		easing: qn
	},
	opacityTiming: {
		duration: 300,
		easing: qn
	}
}, Zn = (e) => ({
	renderedValue: e,
	pendingValue: null
}), Qn = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, $n = (e, t) => {
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
	}, Qn(e, a) ? e : a;
}, er = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, tr = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, nr = (e) => {
	if (!e) return 0;
	let t = tr(e);
	return t ? t.clientWidth : e.clientWidth;
}, rr = (e) => {
	if (!e) return null;
	let t = tr(e);
	return t && t !== e ? t : e.parentElement;
}, ir = (e) => {
	if (!e) return {
		bounds: zn,
		growthFactor: Rn
	};
	let t = nr(e) || e.clientWidth, n = Z.base;
	return t >= Un.xl ? n = Z.xl : t >= Un.md && (n = Z.md), {
		bounds: er(n),
		growthFactor: Math.max(0, Rn)
	};
}, ar = (e, t, n = Rn) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / Bn, c = o * n * s, l = Gn / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function or({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: s, formatOptions: c, clearOnFocus: l = !1, errorMessage: u, errorDescriptionId: ee, invalid: d = !1, limits: ne, reserveErrorSpace: re = !1, showMeta: ie = !0, showDivider: ae = !0, reserveEmptyLimitMetaSpace: oe = !0, align: p = "center", animateValueChange: m = !1, disabled: h = !1, onFocusChange: se }) {
	let ce = xe(), { translateKey: g } = we(), [_, le] = Vt(!1), ue = L(null), v = L(null), de = L(null), y = L(!1), fe = L(!1), b = L(e), pe = Fn(a) ? a : null, me = N((e) => {
		ue.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	zt(pe, () => ue.current), P(() => {
		y.current && e.length !== 0 && (fe.current = !0);
	}, [e]);
	let x = N(() => {
		l && e.length !== 0 && (y.current || (b.current = e, y.current = !0, fe.current = !1, t("")));
	}, [
		l,
		t,
		e
	]), he = N(() => {
		h || (le(!0), se?.(!0), x());
	}, [
		h,
		se,
		x
	]), ge = N(() => {
		if (le(!1), se?.(!1), !l || !y.current) return;
		let n = !fe.current && e.length === 0;
		y.current = !1, fe.current = !1, n && t(b.current);
	}, [
		l,
		t,
		se,
		e.length
	]), _e = N(() => {
		h || x();
	}, [h, x]), S = N((n) => {
		h || (y.current && (fe.current = !0), t(te(e, n.target.value)));
	}, [
		h,
		t,
		e
	]), C = I(() => Pn(e), [e]), w = I(() => {
		if (!C) return null;
		let e = Number(C);
		return Number.isFinite(e) ? e : null;
	}, [C]), { currencyFormatter: T } = ke(o, s, c), ve = I(() => T ? C ? w === null ? C : T.format(w) : "" : C, [
		T,
		C,
		w
	]), be = ne?.min ?? "", D = ne?.max ?? "", Se = be ? f(be, T, void 0, s) || be : "", Ce = D ? f(D, T, void 0, s) || D : "", Te = !!(Se || Ce), Ee = I(() => {
		if (!T || typeof T.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = T.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: T.currencyCodeSuffix || void 0
		};
	}, [T]), De = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [O, Oe] = Bt($n, w, Zn);
	P(() => {
		Oe({
			type: "sync",
			numericValue: w,
			defer: m && _ && w !== null,
			preserveRendered: w === null && y.current && !fe.current
		});
	}, [
		m,
		_,
		w
	]);
	let Ae = I(() => {
		let e = [C, ve].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [C, ve]) || "0", [je, Me] = Vt(() => ar(Ae, zn)), [Ne, Pe] = Vt(Bn * Vn), Fe = L(je), Ie = L(Ne);
	P(() => {
		Fe.current = je;
	}, [je]), P(() => {
		Ie.current = Ne;
	}, [Ne]), F(() => {
		let e = v.current, t = de.current;
		if (!e || !t) return;
		let n = rr(e), r = () => {
			let { bounds: n, growthFactor: r } = ir(e), i = n.max * Vn;
			Math.abs(Ie.current - i) >= Jn && (Ie.current = i, Pe(i));
			let a = Math.max(e.clientWidth - Kn, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = ar(Ae, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Fe.current - u) < Jn || (Fe.current = u, Me(u));
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
	}, [Ae]);
	let Le = `${je.toFixed(2)}rem`, Re = Vn, ze = `${Ne.toFixed(2)}rem`, Be = N((e) => {
		e.key === "Enter" && (e.preventDefault(), !h && i && r?.());
	}, [
		i,
		h,
		r
	]), Ve = !!Ee && O.renderedValue !== null && De, He = Ve ? O.renderedValue : void 0, Ue = !!ve || Ve, We = !!ve && !_, Ge = g("field.amount.label"), Ke = In(g("field.limits.min.label"), "field.limits.min.label", "Min"), k = In(g("field.limits.max.label"), "field.limits.max.label", "Max"), qe = ce.id("amount-input"), Je = ce.id("amount-error"), Ye = !!u || re, Xe = ie && (!!n || Ye), Ze = d || !!u, Qe = ye(e, ne), $e = Ze ? "danger" : "neutral", et = Qe.isOutOfRange && Ze ? "danger" : void 0, A = ae && Te, tt = "opacity-0";
	We && (tt = h ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let nt;
	h || (nt = _ ? "cursor-pointer opacity-85" : "cursor-pointer");
	let rt = ce.attrs("amount-section"), it = ce.attrs("amount-content"), at = ce.attrs("amount-input");
	return /* @__PURE__ */ R("div", {
		id: ce.id("amount-section"),
		...rt,
		className: [rt.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ z("div", {
			...it,
			className: [it.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ R("label", {
					className: "sr-only",
					htmlFor: qe,
					children: Ge
				}),
				/* @__PURE__ */ R("div", {
					"data-theme": $e,
					className: E(A && "border-b border-[var(--pc-color-depth-4)]", A && "pb-0.5", !h && "group"),
					children: /* @__PURE__ */ R("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ R("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ z("div", {
								className: E("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: v,
								style: {
									minHeight: ze,
									height: ze
								},
								children: [
									/* @__PURE__ */ R("span", {
										"aria-hidden": !0,
										ref: de,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Re
										},
										children: Ae
									}),
									/* @__PURE__ */ R("input", {
										id: qe,
										...at,
										type: "text",
										autoComplete: "off",
										autoCorrect: "off",
										autoCapitalize: "off",
										spellCheck: !1,
										inputMode: "decimal",
										pattern: "[0-9]*[.]?[0-9]*",
										placeholder: "0",
										value: C,
										disabled: h,
										"aria-invalid": Ze,
										"aria-describedby": ee ?? (u ? Je : void 0),
										ref: me,
										onChange: S,
										onKeyDown: Be,
										onFocus: he,
										onBlur: ge,
										onClick: _e,
										className: E(at.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", nt),
										style: {
											fontSize: Le,
											lineHeight: Re,
											width: "100%",
											maxWidth: "100%",
											minWidth: Wn,
											color: We ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Yn})`
										}
									}),
									Ue && /* @__PURE__ */ R("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											tt,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: Le,
											lineHeight: Re,
											width: "100%",
											maxWidth: "100%",
											minWidth: Wn,
											transform: `translateY(${Yn})`
										},
										children: Ve ? /* @__PURE__ */ R(J, {
											value: He,
											locales: Ee?.locales,
											format: Ee?.format,
											suffix: Ee?.suffix,
											animated: m,
											transformTiming: Xn.transformTiming,
											spinTiming: Xn.spinTiming,
											opacityTiming: Xn.opacityTiming,
											respectMotionPreference: !0
										}) : ve
									})
								]
							})
						})
					})
				}),
				Te && /* @__PURE__ */ z("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						Hn
					].join(" "),
					children: [/* @__PURE__ */ R("div", {
						"data-theme": et,
						className: E("min-w-0 text-left", et && "text-[var(--pc-color-text)]"),
						children: Se ? /* @__PURE__ */ z("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ z("span", { children: [Ke, ":"] }), /* @__PURE__ */ R("span", {
								className: "truncate",
								children: Se
							})]
						}) : null
					}), /* @__PURE__ */ R("div", {
						"data-theme": et,
						className: E("min-w-0 text-right", et && "text-[var(--pc-color-text)]"),
						children: Ce ? /* @__PURE__ */ z("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ z("span", { children: [k, ":"] }), /* @__PURE__ */ R("span", {
								className: "truncate",
								children: Ce
							})]
						}) : null
					})]
				}),
				Xe && /* @__PURE__ */ z("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ R("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Ye && /* @__PURE__ */ R("div", {
						id: Je,
						"data-theme": "danger",
						className: "min-h-5 text-[var(--pc-color-text)] break-words",
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
function sr({ amount: t, amountDraft: n, animationStyle: r, bonusEvaluationContext: i, floating: a = !0 }) {
	let o = Ce(), s = xe(), { uiComboView: c, uiComboView__PaymentTypes: l, onPaymentTypeSelected: u, uiAccountDelete: ee, initialAmount: d, lockAmount: te, method: f, user: ne } = Rt(Ge), { translateKey: re } = we(), ie = t ?? d, ae = N((e) => {
		let t = qe(e, ie, {
			method: f,
			user: ne,
			values: _(e) === n?.paymentTypeId ? n.values : void 0
		});
		return vt(t, te);
	}, [
		n,
		ie,
		te,
		f,
		ne
	]), { paymentTypesList: p, paymentTypeGroups: h } = ge(), { getBonusCountForPaymentType: se, getAvailableBonusesForPaymentType: g } = Te(), { selectedPaymentType: le, selectPaymentType: ue, ensureDefaultSelection: de } = je(), { requestAccountDelete: y, actionConfirmationModal: fe } = _t();
	P(() => {
		c && D(l) && de(p);
	}, [
		de,
		p,
		c,
		l
	]);
	let b = p.length > 0, pe = p.length > 1, me = c && D(l) && pe && !o, x = I(() => v(p, le), [p, le]), he = I(() => x ? ce(x) : null, [x]), _e = I(() => {
		if (!x) return null;
		let e = se(x, i), t = _(x);
		return e > 0 ? /* @__PURE__ */ R(dt, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		i,
		se,
		x
	]), S = re("cta.choose_payment_type"), C = re("cta.interactive_prompt.choose_payment_type.title"), w = re("account.delete.title"), T = x?.name ?? "cta.choose_payment_type", ve = x ? _(x) : T, ye = N((e, t) => {
		if (o) return;
		let n = v(p, e);
		n && !oe(n) && !ae(n) && (ue(_(n), { availableBonuses: g(n) }), u && u(n)), t();
	}, [
		g,
		o,
		ae,
		u,
		p,
		ue
	]), Se = N((e) => ee && e.accountId ? /* @__PURE__ */ R(Re, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": w,
		disabled: o,
		onClick: () => {
			y(e);
		},
		iconOnly: !0,
		label: w,
		leadingIcon: /* @__PURE__ */ R(m, {})
	}) : null, [
		w,
		o,
		y,
		ee
	]);
	return /* @__PURE__ */ R(lt, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ R(be, { children: S }),
		triggerLabel: S,
		canOpen: me,
		shouldRender: c && D(l) && b,
		animationStyle: r,
		floating: a,
		actionContent: fe,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ R(j, {
			domSlug: ve,
			name: T,
			presentationPaymentType: x ?? void 0,
			nameKeys: x?.nameKeys,
			logo: x?.logo,
			logoContent: x ? void 0 : gt("h-full w-full"),
			limits: x?.limits,
			fee: x?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: _e,
			title: he ?? void 0,
			interactive: !1,
			isDisabled: o,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: me ? /* @__PURE__ */ R(St, { children: /* @__PURE__ */ R(Re, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": C,
				disabled: o,
				onClick: e,
				leadingIcon: /* @__PURE__ */ R(Ye, {}),
				label: C
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = s.attrs("payment-type-picker-list");
			return /* @__PURE__ */ R("div", {
				id: n,
				...r,
				className: E(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ R(ut, {
					isPaymentTypeDisabled: ae,
					paymentTypes: p,
					paymentTypeGroups: h,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						ye(e, t);
					},
					interactionLocked: o,
					renderActions: Se,
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
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ R("div", {
		...t,
		className: E("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var lr = Lt({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), ur = () => Rt(lr);
function dr({ children: e }) {
	let [t, n] = Vt(() => /* @__PURE__ */ new Set()), r = N((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = N((e) => e ? t.has(e) : !1, [t]), a = I(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ R(lr.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function fr() {
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
var pr = (e, t, n) => [n(g(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), mr = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function hr({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = we(), c = L(null);
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
			let o = t(e), l = pr(e, n, s), u = [o, l].filter(Boolean).join(", ");
			return /* @__PURE__ */ R("button", {
				ref: e.paymentId === a ? c : void 0,
				type: "button",
				className: mr,
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
						className: E("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: l
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawalsQuery.ts
var gr = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], _r = (e, t, n = !0) => ({
	queryKey: gr(e),
	queryFn: () => qt(e, t),
	enabled: n && !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 6e4,
	gcTime: 6e5
}), vr = Lt({
	interactivePromptContent: null,
	pendingWithdrawalDrawer: null,
	attachSuccessFooter: (e) => e
}), yr = "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]", br = {
	isDrawerOpen: !1,
	selectedPaymentId: null,
	cancellingPaymentId: null,
	cancellationState: null
}, xr = (e) => ({
	baselinePaymentIds: e.map((e) => e.paymentId),
	cancelledPayments: []
}), Sr = (e, t) => {
	let n = e.cancelledPayments.map((e) => e.paymentId), r = e.baselinePaymentIds.filter((e) => !n.includes(e));
	if (t.length === 0) return r.length === 0 && e.cancelledPayments.length > 0;
	let i = t.map((e) => e.paymentId), a = new Set(r);
	return i.length === a.size && i.every((e) => a.has(e));
}, Q = (e, t) => {
	switch (t.type) {
		case "reset": return br;
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
			if (!t.featureEnabled) return br;
			let n = e.cancellationState === null ? t.pendingWithdrawals.length > 0 ? xr(t.pendingWithdrawals) : null : Sr(e.cancellationState, t.pendingWithdrawals) ? e.cancellationState : t.pendingWithdrawals.length > 0 ? xr(t.pendingWithdrawals) : null, r = t.pendingWithdrawals.length > 1 && e.isDrawerOpen, i = e.selectedPaymentId && t.pendingWithdrawals.some((t) => t.paymentId === e.selectedPaymentId) ? e.selectedPaymentId : null;
			return r === e.isDrawerOpen && i === e.selectedPaymentId && n === e.cancellationState ? e : {
				...e,
				isDrawerOpen: r,
				selectedPaymentId: i,
				cancellationState: n
			};
		}
		case "record-success": {
			let n = e.cancellationState ?? xr(t.pendingWithdrawals);
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
}, Cr = ({ pendingWithdrawals: e, activePendingWithdrawal: t, isPaymentInteractionLocked: n, isCancelling: r, isDrawerOpen: i, onDismiss: a, onCancel: o, onView: s, formatPendingWithdrawalAmount: c, formatPendingWithdrawalTotals: l, successFooter: u }) => {
	if (!t) return null;
	let ee = e.length, d = ee === 1;
	return {
		legacyTitle: "Hold on a second",
		titleKey: "pending_withdrawal.cancel.title",
		bodyKey: d ? "pending_withdrawal.cancel.single.desc" : "pending_withdrawal.cancel.multi.desc",
		bodyValues: d ? { amount: c(t) } : {
			count: String(ee),
			totalAmount: l(e)
		},
		icon: /* @__PURE__ */ R(fr, {}),
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
			id: d ? "pending-withdrawal-cancel" : "pending-withdrawal-view",
			labelKey: d ? "cta.cancel_pending_withdrawal" : "cta.view",
			legacyLabel: d ? "Yes, please!" : "View",
			onClick: d ? o : s,
			disabled: r || i || n,
			variant: "secondary"
		}]
	};
}, wr = ({ successFooter: e }) => e ? {
	legacyTitle: "Nice!",
	titleKey: "pending_withdrawal.cancel.confirmed.title",
	legacyBody: "Your pending withdrawal has been cancelled.",
	bodyKey: "pending_withdrawal.cancel.confirmed.desc",
	icon: /* @__PURE__ */ R(fr, {}),
	tone: "secondary",
	footer: e
} : null, Tr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ z(Ht, { children: [l.length > 1 && /* @__PURE__ */ R(A, {
	isOpen: i && !r,
	onClose: s,
	title: u,
	children: /* @__PURE__ */ R(hr, {
		pendingWithdrawals: l,
		formatPendingWithdrawalAmount: n,
		formatDisplayValue: t,
		onSelect: c,
		isDisabled: a,
		focusPaymentId: o,
		isFocusRestoreActive: i && !r
	})
}), e] });
function Er({ children: e }) {
	let r = We(), i = Ce(), a = Rt(Ge), { merchantId: o, userId: s, sessionId: c, debug: l, locale: u, currencyFormatOptions: ee, method: d, lockAmount: te, uiInteractivePrompts: f, uiSuggestAction: ne, onPendingWithdrawalCancelled: ie } = a, oe = a.uiCancelPendingPayout === !0, { translateKey: p, translateKeys: m } = we(), { formatDisplayValue: h } = w(), se = I(() => {
		try {
			return new Intl.ListFormat(u, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [u]), { dismissPrompt: ce, isPromptDismissed: g } = ur(), _ = ae(), [le, v] = Bt(Q, br), { isDrawerOpen: de, selectedPaymentId: y, cancellingPaymentId: fe, cancellationState: pe } = le, x = d === t.PAYIN && !te && f && oe && ne.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(o && s && c), he = I(() => ({
		merchantId: o,
		userId: s,
		sessionId: c
	}), [
		o,
		c,
		s
	]), ge = I(() => gr(he), [he]), { data: _e } = k(_r(he, r, x)), S = I(() => _e?.payments ?? [], [_e?.payments]), C = I(() => {
		let e = /* @__PURE__ */ new Map(), t = [...S, ...pe?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, me(n.amountCurrency, u, ee));
		return e;
	}, [
		pe?.cancelledPayments,
		ee,
		u,
		S
	]), T = N((e) => ue(e.amountValue, C.get(e.amountCurrency)), [C]), E = N((e) => {
		let t = e.map((e) => ue(e.amount, C.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : se?.format(t) ?? t.join(", ");
	}, [se, C]), ve = N((e) => E(H(e)), [E]), ye = I(() => Yt(S), [S]), be = g(ye), D = S.length === 1 ? S[0] : S.at(0) ?? null, { openActionConfirmation: xe, actionConfirmationModal: Se, isActionConfirmationOpen: Te, closeActionConfirmation: Ee } = kt({ isConfirmDisabled: i });
	P(() => {
		v({ type: "reset" }), Ee();
	}, [
		Ee,
		x,
		o,
		c,
		s
	]), P(() => {
		be && v({ type: "dismiss" });
	}, [be]), P(() => {
		v({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: S,
			featureEnabled: x
		});
	}, [x, S]), P(() => {
		i && (v({ type: "close-drawer" }), Ee());
	}, [Ee, i]);
	let { mutateAsync: De, isPending: O } = re({
		mutationFn: async (e) => await Jt({
			client: r,
			merchantId: o,
			userId: s,
			sessionId: c,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = S.filter((e) => e.paymentId !== t.paymentId);
			await _.invalidateQueries({ queryKey: ge });
			try {
				n = (await _.fetchQuery(_r(he, r, !0))).payments;
			} catch {}
			let i = n.length, a = H(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			v({
				type: "record-success",
				payment: t,
				pendingWithdrawals: S
			}), b({
				callback: ie,
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
			v({ type: "finish-cancelling" });
		}
	}), Oe = N(() => {
		!i && ye && ce(ye);
	}, [
		ye,
		ce,
		i
	]), ke = N((e) => {
		if (O || i) return;
		let t = T(e), n = pr(e, h, m);
		xe({
			title: m(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ z("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ R("p", { children: et(m(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ R("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: n
				})]
			}),
			confirmLabel: m(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: p("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				v({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await De(e);
			}
		});
	}, [
		De,
		h,
		T,
		O,
		i,
		xe,
		p,
		m
	]), Ae = N(() => {
		D !== null && ke(D);
	}, [D, ke]), je = N((e) => {
		v({
			type: "select-payment",
			paymentId: e.paymentId
		}), ke(e);
	}, [ke]), Me = N(() => {
		O || i || S.length <= 1 || v({ type: "open-drawer" });
	}, [
		O,
		i,
		S.length
	]), Ne = N(() => {
		O || v({ type: "close-drawer" });
	}, [O]), Pe = I(() => {
		if (!pe || pe.cancelledPayments.length === 0) return null;
		let e = H(pe.cancelledPayments);
		return /* @__PURE__ */ R("p", {
			className: yr,
			children: et(p("pending_withdrawal.cancel.success"), { amount: E(e) })
		});
	}, [
		pe,
		E,
		p
	]), Fe = I(() => !x || be ? null : D ? Cr({
		pendingWithdrawals: S,
		activePendingWithdrawal: D,
		isPaymentInteractionLocked: i,
		isCancelling: O,
		isDrawerOpen: de,
		onDismiss: Oe,
		onCancel: Ae,
		onView: Me,
		formatPendingWithdrawalAmount: T,
		formatPendingWithdrawalTotals: ve,
		successFooter: Pe
	}) : wr({ successFooter: Pe }), [
		D,
		x,
		T,
		ve,
		Ae,
		Oe,
		Me,
		O,
		i,
		de,
		be,
		S,
		Pe
	]), Ie = I(() => x ? /* @__PURE__ */ R(Tr, {
		actionConfirmationModal: Se,
		formatDisplayValue: h,
		formatPendingWithdrawalAmount: T,
		isActionConfirmationOpen: Te,
		isDrawerOpen: de,
		isSelectionDisabled: i || O || fe !== null,
		onClose: Ne,
		onSelect: je,
		pendingWithdrawals: S,
		selectedPaymentId: y,
		title: p("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		Se,
		fe,
		x,
		h,
		T,
		Ne,
		je,
		O,
		Te,
		i,
		de,
		S,
		y,
		p
	]), Le = N((e) => e, []), Re = I(() => ({
		interactivePromptContent: Fe,
		pendingWithdrawalDrawer: Ie,
		attachSuccessFooter: Le
	}), [
		Le,
		Fe,
		Ie
	]);
	return /* @__PURE__ */ R(vr.Provider, {
		value: Re,
		children: e
	});
}
var Dr = () => Rt(vr), Or = (e, t) => t === "Backspace" ? e.length === 0 ? e : e.slice(0, -1) : /^[0-9.]$/.test(t) ? te(e, `${e}${t}`) : e, kr = (e) => {
	let t = e.trim();
	return /^\d*\.?\d*$/.test(t) ? t : e;
}, Ar = (e) => ({
	value: kr(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), jr = (e, t) => {
	let n = t.type === "user" ? te(e.value, t.value) : kr(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, Mr = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", Nr = "pc-enter-drift-item", Pr = "pc-enter-lift-item", Fr = ie, Ir = "min-h-[27cqw] @md:min-h-[27cqw]", Lr = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", Rr = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", zr = "flex w-full flex-col items-center gap-2 @md:gap-3", Br = "pb-3 @md:pb-4", Vr = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"[role=\"button\"]",
	"[contenteditable=\"true\"]"
].join(","), Hr = ["[data-amount-focus-excluded=\"true\"]"].join(","), Ur = "[@container_(max-width:620px)]:pl-1.5", Wr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.7fr)_auto_auto_minmax(0,1fr)] text-center", Gr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.45fr)_auto_auto_minmax(0,1fr)] text-center", Kr = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-4 [@container_(min-width:520px)]:gap-[1.125rem] text-center", qr = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-3 text-center", Jr = "flex min-w-0 w-full flex-1 flex-col items-center justify-center gap-3 text-center [@container_(max-width:500px)]:[&&]:items-stretch", Yr = 650, Xr = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(Vr);
	return !!(n && t.contains(n));
}, Zr = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(Hr);
	return !!(n && t.contains(n));
}, Qr = (e) => {
	let t = e;
	if (t.uiComboView) return;
	let n = S(t);
	throw Pt({
		to: n,
		replace: !0
	});
}, $r = Nt("/combo/")({
	beforeLoad: ({ context: e }) => {
		Qr(e);
	},
	component: ei
});
function ei() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, entryDecision: r } = Rt(Ge);
	return t && n && !r ? /* @__PURE__ */ R(It, {}) : /* @__PURE__ */ R(ri, {
		initialAmount: e,
		lockAmount: t
	});
}
var ti = (e) => {
	let t = He(e);
	return t.isValid ? t.amount ?? e : e;
}, ni = (e, t) => {
	if (e === t) return !0;
	let n = He(e), r = He(t);
	return n.isValid && r.isValid && c(n.amount ?? e, r.amount ?? t) === 0;
};
function ri({ initialAmount: e, lockAmount: n }) {
	let f = xe(), re = h("combo"), { contentInset: ie } = Ot(), ae = Rt(Ge), g = Ce(), { isSubscribed: ue, publishInactive: v } = le(), { method: b, uiSuggestAmounts: me, selectedPaymentType: x, uiComboView: S, uiComboView__PaymentTypes: ye, uiComboView__PaymentForm: be, gotoPaymentType: ke, bonuses: Fe, uiPaymentConfirmView: We, uiBonusesStyle: k, uiInteractivePrompts: Ye, uiFixedControls: A, hasAppliedGotoPaymentType: lt, setCashierState: dt, onPaymentTypeSelected: gt, onPaymentTypeDeselected: St, currency: j, locale: kt, currencyFormatOptions: Nt, resetFlowOnBack: Pt, user: It, uiShowFees: M, uiAccountDelete: Lt, paymentFormDraft: zt, selectedBonusCode: F, onBonusSelected: Ut, onBonusDeselected: Wt } = Rt(Ge), { resolveTextKey: B, resolveTextKeys: Gt, translateKey: V } = we(), Kt = ne(), qt = L(null), Jt = L(!1), Yt = L(!1), H = L(!1), U = L(null), Xt = L(null), [Zt, Qt] = Bt(jr, e, Ar), [$t, en] = Vt(!1), [tn, nn] = Vt(!1), [rn, an] = Vt(null), [on, sn] = Vt({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), W = Zt.value, cn = L(W), ln = L({
		amount: W,
		amountIsOutOfRange: !1,
		gotoPaymentType: ke,
		selectedPaymentType: x,
		selectedPaymentTypeId: x,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: b
	}), { getPaymentType: un, paymentTypesList: G, paymentTypeGroups: dn, isLoading: fn, isError: pn } = ge(), { getBonusCountForPaymentType: mn, getBonusAvailabilityForPaymentType: hn, getAvailableBonusesForPaymentType: gn } = Te(), { selectPaymentType: _n, clearPaymentSelection: vn } = je(), { selectBonusCode: yn } = tt(), { requestAccountDelete: bn, actionConfirmationModal: xn } = _t();
	P(() => {
		cn.current = W;
	}, [W]), P(() => {
		Yt.current = !1, H.current = !1, Qt({
			type: "sync-external",
			value: e
		});
	}, [e]), P(() => {
		Pt && dt((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Pt, dt]), P(() => {
		Jt.current && (Jt.current = !1, qt.current?.blur());
	}, [W]);
	let Sn = I(() => u(me), [me]), K = I(() => x ? un(x) : null, [un, x]), Cn = K ? _(K) : null, wn = Cn ? `quick-payment-form:${Cn}` : null, q = Cn ?? x, Tn = G.length > 0, En = Ke(G, W, {
		method: b,
		user: It
	}), Dn = S && Pe(ye), On = S && D(ye), kn = S ? Se({
		mode: ye,
		paymentFormEnabled: be
	}) : null, An = ze(kn), jn = ve(kn), Mn = !!(kn && Tn), J = S && K ? Ae(K) : !Tn || En.hasAmountBearingMethods, Nn = !!(K && Ie(K)), Pn = !!(K && (Nn || _e(K))), Fn = !!(S && Dn && be && K && Pn && (!kn || An)), In = An && Fn, Y = !n && (J || En.hasAmountBearingMethods), X = J ? W : "", Ln = Y ? W : X, Rn = x && Qe(zt, {
		paymentTypeName: q ?? x,
		method: b,
		amount: X
	}, ni) ? zt : null, Z = I(() => ({
		...Rn?.values ?? {},
		amount: X
	}), [Rn?.values, X]), zn = N((e, t) => qe(e, t, {
		method: b,
		user: It,
		values: _(e) === q ? {
			...Z,
			amount: t
		} : void 0
	}), [
		q,
		Z,
		b,
		It
	]), Bn = q ? {
		paymentTypeId: q,
		values: Z
	} : void 0, Vn = J && d(W) && !!x && !K && fn && !pn, Hn = !!ke && !lt, Un = Dn, Wn = !!(S && K && oe(K)), Gn = Un && fn && !pn && !Tn && !x, Kn = Un && !K || Wn, qn = S && !!x && (Dn || Hn), Jn = !Tn || fn || pn, Yn = K?.limits, Xn = Be(b, It, K?.fee), Zn = S && K ? zn(K, X) : En.assessment, Qn = S && K ? Zn.isValid : En.canProceed, $n = N((e) => {
		let t = zn(e, W);
		return vt(t, n);
	}, [
		W,
		zn,
		n
	]), er = !n && (Zn.status === "empty" || Zn.status === "incomplete") && ($t || Zt.changeOrigin !== "user") ? void 0 : de(Zn), [tr, nr] = Vt(() => ({
		value: W,
		key: er
	})), [rr, ir] = Vt(W), ar = J && $t && Zt.changeOrigin === "user" && !!er && tr.key === void 0, lr = J && $t && Zt.changeOrigin === "user", ur = tr.value === W && tr.key === er, dr = lr && rr !== W, fr = J ? dr ? rr : W : "", pr = Mr({
		livePaymentAmount: X,
		paymentTypeSupportsAmount: J,
		visiblePaymentSummaryAmount: fr
	}), mr = ar && !ur, hr = er;
	mr && (hr = void 0);
	let { currencyFormatter: gr, formatCurrencyValue: _r, formatDisplayValue: vr } = w(), { interactivePromptContent: yr, pendingWithdrawalDrawer: br, attachSuccessFooter: xr } = Dr(), Sr = I(() => Le(gr), [gr]), Q = (() => {
		if (hr) return Ct(Zn, V, (e) => wt(e, j, kt, Nt), {
			lockAmount: n,
			locale: kt,
			formatRange: (e, t) => yt(e, t, j, kt, Nt),
			hasAmountlessAlternative: (!S || !K) && En.hasAmountlessMethods
		});
	})(), Cr = f.id("quick-payment-amount-error"), wr = N((e) => S && K && J ? zn(K, e).isValid : Ke(G, e, {
		method: b,
		user: It
	}).assessment.isValid, [
		zn,
		b,
		G,
		J,
		K,
		S,
		It
	]), Tr = N((e) => oe(e) ? !0 : !mr && $n(e), [mr, $n]), Er = J ? Qn : !!K, kr = g || !Qn || Jn || Kn, Vr = V("cta.continue"), Hr = V(b === t.PAYOUT ? "cta.payout" : "cta.payin"), Qr = Hr.toLocaleLowerCase(kt), $r = I(() => J ? Me(W) : null, [W, J]), ei = I(() => Me(e), [e]), [ri, ii] = Vt(null), ai = N((e) => {
		n || g || (Qt({
			type: "sync-external",
			value: nt(e.nextAmount)
		}), ii(e));
	}, [g, n]), oi = !(!ri || C(k) || F !== ri.bonus.code || $r !== ri.nextAmount), si = J ? n ? d(W) : d(W) && (Zt.hasExplicitSelection || oi) : !!K, ci = I(() => J ? Me(fr) : null, [J, fr]), li = I(() => J ? Me(pr) : null, [J, pr]), ui = I(() => ({ amount: li }), [li]), di = K ? mn(K, { amount: $r }) : 0, fi = K ? hn(K, { amount: li }).length : 0, pi = C(k) && (K ? di > 0 : fe(Fe)), mi = On && (Oe(k) || Ue(k)) && !!K && fi > 0, hi = Mn && Ue(k), gi = K ? Dt({
		uiPaymentConfirmView: We,
		hasPendingStep: pi,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (K.notifications?.length ?? 0) > 0
	}) : null, _i = S && Dn && !!K && !Nn && gi?.action === "submit", vi = _i && Er && Qn, yi = K ? Dt({
		uiPaymentConfirmView: We,
		hasPendingStep: pi,
		hasVisibleInlineContent: Nn,
		hasConfirmOnlyContent: _e(K)
	}) : null, bi = S && Fn && !!K && yi?.action === "submit", xi = bi && Er && Qn, Si = _i || bi, Ci = Fn || vi || xi, wi = Ci ? q : null;
	P(() => {
		let e = J ? ti(W) : "", t = x ? {
			paymentTypeName: q ?? x,
			method: b,
			amount: e
		} : null;
		dt((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !Qe(n, t, ni)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : ni(r.amount, t.amount) || (r = {
				...r,
				amount: t.amount,
				values: J ? {
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
		W,
		q,
		b,
		J,
		x,
		dt
	]), P(() => {
		let e = () => {
			U.current &&= (clearTimeout(U.current), null);
		};
		if (e(), ar) U.current = setTimeout(() => {
			U.current = null, nr({
				value: W,
				key: er
			});
		}, Yr);
		else return nr((e) => e.value === W && e.key === er ? e : {
			value: W,
			key: er
		}), () => {
			e();
		};
		return e;
	}, [
		W,
		er,
		ar
	]), P(() => {
		let e = () => {
			Xt.current &&= (clearTimeout(Xt.current), null);
		};
		if (e(), lr) Xt.current = setTimeout(() => {
			Xt.current = null, ir(W);
		}, Yr);
		else return ir((e) => e === W ? e : W), () => {
			e();
		};
		return e;
	}, [W, lr]), P(() => {
		ln.current = {
			amount: W,
			amountIsOutOfRange: !Qn,
			gotoPaymentType: ke,
			selectedPaymentType: x,
			selectedPaymentTypeId: q,
			shouldShowBonusStep: pi,
			shouldSkipPaymentTypeSelection: qn,
			isPaymentTypesUnavailable: Jn,
			isPaymentTypeSelectionMissing: Kn,
			paymentTypeSupportsAmount: J,
			method: b
		};
	}, [
		q,
		W,
		Qn,
		ke,
		x,
		pi,
		qn,
		Jn,
		Kn,
		J,
		b
	]);
	let Ti = N(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = ln.current;
		if (o || s) return;
		let u = "";
		if (c) {
			let t = He(e);
			u = t.isValid ? t.amount ?? e : e;
		}
		t || (dt((e) => {
			let t = e.initialAmount !== u, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
			return !t && !r && !i ? e : {
				...e,
				...t ? { initialAmount: u } : {},
				paymentFormDraft: null,
				comboViewFormDraft: null,
				...r ? { hasAppliedGotoPaymentType: !0 } : {}
			};
		}), Kt(a && r ? i ? { to: "/bonus" } : {
			to: "/pt/$id",
			params: { id: r }
		} : { to: `/pts/${l}` }));
	}, [Kt, dt]), Ei = N((e, t) => {
		if (!q) return;
		let n = _(e);
		if (n !== q || Jn || Kn || !Qn) return;
		let r = J ? ti(cn.current) : "";
		J && r.length === 0 || (dt((e) => {
			let i = !!ke && !e.hasAppliedGotoPaymentType, a = J ? {
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
		}), Kt(pi ? { to: "/bonus" } : {
			to: "/pt/$id",
			params: { id: n }
		}));
	}, [
		q,
		Qn,
		ke,
		Kn,
		Jn,
		b,
		Kt,
		J,
		dt,
		pi
	]), Di = N((e, t) => {
		if (!q) return;
		let n = _(e);
		if (n !== q) return;
		let r = J ? ti(cn.current) : "", i = {
			paymentTypeName: n,
			method: b,
			amount: r,
			values: J ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		dt((e) => at(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		q,
		b,
		J,
		dt
	]), Oi = N((e) => {
		n || g || (H.current ? (H.current = !1, Yt.current = !1, Qt({
			type: "user",
			value: e,
			markExplicitSelection: !1
		})) : Yt.current && e.length === 0 ? Qt({
			type: "user",
			value: e,
			markExplicitSelection: !1
		}) : (Yt.current = !1, H.current = !1, Qt({
			type: "user",
			value: e,
			markExplicitSelection: e.length > 0
		})));
	}, [
		n,
		g,
		Qt
	]), ki = N((e) => {
		if (n || g || !wr(e)) return;
		let t = e;
		Yt.current = !1, H.current = !1, Jt.current = !0, Qt({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		g,
		Qt,
		wr
	]), Ai = rn?.submit, ji = !Ci || on.paymentTypeName === wi, Mi = ae.offers !== void 0 && ae.checkoutState?.phase !== "confirmed" ? !0 : Ci ? !ji || !Ai || kr || !Ai.visible || Ai.disabled : kr, Ni = Ci && ji && Ai ? Ai.loading : !1, Pi = N(() => {
		if (Ci && ji && Ai) return Ai.onClick();
		Ti();
	}, [
		Ai,
		Ti,
		ji,
		Ci
	]), Fi = Si || Fn && yi?.buttonLabel === "pay" ? Hr : Vr, Ii = N(() => {
		Pi();
	}, [Pi]), Li = I(() => [/* @__PURE__ */ R(Re, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: Mi,
		loading: Ni,
		onClick: Ii,
		label: Fi
	}, "cashier-amount-continue")], [
		Fi,
		Mi,
		Ni,
		Ii
	]), Ri = N((e) => {
		if (n || g) return;
		let t = e.key === "," ? "." : e.key, r = Or(cn.current, t);
		Yt.current = !1, H.current = !1, Qt({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		g,
		Qt
	]), zi = N((e) => {
		en(e), n || g || !S ? (Yt.current = !1, H.current = !1) : e ? d(cn.current) && (Yt.current = !0, H.current = !1) : Yt.current && !d(cn.current) ? H.current = !0 : (Yt.current = !1, H.current = !1);
	}, [
		g,
		n,
		S
	]), Bi = N((e) => {
		let t = qt.current;
		if (!t || n || g || Zr(e.target, e.currentTarget) || Xr(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		(r || !a) && (r && !i ? (e.preventDefault(), e.stopPropagation(), t.blur()) : (e.preventDefault(), e.stopPropagation(), !r && t.focus()));
	}, [g, n]), Vi = N((e) => {
		let t = e.currentTarget.scrollTop > 1;
		nn((e) => e === t ? e : t);
	}, []);
	Ze({
		inputRef: qt,
		inputType: "decimal",
		onType: g || !Y ? void 0 : Ri
	});
	let Hi = K?.type === "info", Ui = Y ? "cta.enter_amount" : Hi ? "payment.info_details" : "payment.enter_details", Wi = Y ? "interactive_prompt.quick_payment.enter_amount.title" : Hi ? "payment.interactive_prompt.info_details" : "payment.interactive_prompt.enter_details", Gi = V(Ui), Ki = N((e) => vr(e) || e, [vr]), $ = I(() => ({
		legacyTitle: Gi,
		titleKey: Wi,
		titleValues: { method: Qr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ R(se, {})
	}), [
		Qr,
		Wi,
		Gi
	]), qi = I(() => Q ? {
		...$,
		legacyTitle: Q,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ R(m, {}),
		tone: "danger"
	} : null, [Q, $]), Ji = I(() => {
		if (!ri || !C(k) || $r !== ri.nextAmount && ei !== ri.nextAmount || Zt.changeOrigin === "user" && $r !== ri.nextAmount || F !== ri.bonus.code) return null;
		let e = _r(ri.nextAmount);
		return {
			...$,
			titleKey: "bonus.selected.title",
			titleValues: void 0,
			bodyKey: "bonus.selected.desc",
			bodyValues: {
				amount: e,
				method: Qr
			},
			icon: /* @__PURE__ */ R(pe, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ R("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: et(V("bonus.top_up.success"), { amount: _r(ri.addedAmount) })
			})
		};
	}, [
		$r,
		Zt.changeOrigin,
		$,
		ri,
		_r,
		ei,
		Qr,
		F,
		V,
		k
	]), Yi = I(() => Hi ? ht({ translateKey: V }) : Xe({ translateKey: V }), [Hi, V]), Xi = I(() => Un && (pn || !Tn) ? {
		...$,
		legacyTitle: V("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ R(m, {}),
		tone: "danger"
	} : null, [
		$,
		Tn,
		pn,
		Un,
		V
	]), Zi = !Ci || on.paymentTypeName === wi, Qi = !Ci || on.isComplete, $i = !!(ue && _i && K && wn), ea = (!J || d(X)) && Qn && !on.errorMessage, ta = $i && K ? At({
		amount: X,
		bonusCode: ae.offers === void 0 ? F : i(ae.offers, ae.selectedOfferId) ?? null,
		canSubmit: !Mi,
		complete: ea && Qi,
		currency: j,
		dirty: X !== e,
		errors: ea ? {} : { amount: "invalid" },
		fields: (K.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: J ? e : "" },
		method: b,
		paymentType: K,
		submitting: Ni,
		valid: ea,
		values: { amount: X }
	}) : null, na = N(() => {
		wn && v(wn);
	}, [v, wn]), ra = !fn && !Vn && Zi, ia = I(() => {
		let e = $, t = {
			...e,
			titleKey: n ? void 0 : e.titleKey
		};
		return Vn ? t : qi || (Ci && on.errorMessage ? {
			...e,
			legacyTitle: on.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(m, {}),
			tone: "danger"
		} : Ji || (si ? Kn ? {
			...e,
			...rt({ translateKey: V }),
			titleValues: void 0
		} : !Qi || Hi ? Yi : {
			...e,
			legacyTitle: V("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(p, {})
		} : e));
	}, [
		qi,
		$,
		Ji,
		on.errorMessage,
		V,
		si,
		Vn,
		Hi,
		Kn,
		Qi,
		n,
		Yi,
		Ci
	]), [aa, oa] = Vt(null), sa = aa?.methodPromptLabel === Qr ? aa.content : null, ca = sa?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", la = dr || mr, ua = qi ?? (la && !qi && !ca ? sa ?? ia : ia), da = I(() => xr(ua), [xr, ua]), fa = I(() => ({
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
		iconSlotClassName: E($.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [$]);
	P(() => {
		!ra || la || Xi || yr || oa((e) => e?.methodPromptLabel === Qr && e.content === ia ? e : {
			methodPromptLabel: Qr,
			content: ia
		});
	}, [
		la,
		ra,
		Qr,
		ia,
		Xi,
		yr
	]);
	let pa = Xi ?? fa;
	!Xi && ra && (pa = yr ? ua : da);
	let ma = Xi ?? qi, ha = !(!F || C(k) || Xi || qi || pa.titleKey !== "interactive_prompt.quick_payment.enter_amount.title"), ga = I(() => {
		if (!ha) return null;
		let e = $;
		return Kn ? {
			...e,
			...rt({ translateKey: V }),
			titleValues: void 0
		} : !Qi || Hi ? Yi : {
			...e,
			legacyTitle: V("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ R(p, {})
		};
	}, [
		$,
		Hi,
		Qi,
		Kn,
		Yi,
		ha,
		V
	]), _a = ha ? ga : pa, va = Ye ? _a : ma, ya = !!(Q && va?.preferLegacyTitle && va.legacyTitle === Q), ba = re ? void 0 : Q, xa = Ur, Sa = Y && Sn.length > 0, Ca = !Sa, wa = !!(Yn?.min || Yn?.max), Ta = wa ? Lr : Ir, Ea = "gap-2", Da = E("p-3", !wa && "[@container_(min-width:520px)]:py-3.5"), Oa = Ca && !wa, ka = bt(b, j, It, {
		amount: fr,
		fee: K?.fee,
		includeRemainingBalance: !0
	}), Aa = M ? O(K?.fee, l(fr) || "0", {
		feeCurrencyFormatter: Sr,
		formatCurrencyValue: _r
	}) : null, ja = b === t.PAYIN && M ? Ve(K?.fee, l(fr) || "0", j) : null, Ma = (() => {
		let r = n && !K && En.hasAmountBearingMethods;
		if (!J && !r) return [];
		let i = n ? [{
			id: "amount",
			label: "field.amount.label",
			value: {
				value: r ? e : fr,
				currency: j
			}
		}] : [];
		return r ? i : b === t.PAYOUT ? Ne(ka, [...i, Aa]) : i.length || Aa || ja ? [
			...i,
			Aa,
			ja
		].filter((e) => e !== null) : ka;
	})(), Na = n ? wt(W, j, kt, Nt) : void 0, Pa = Ma.length > 0, Fa = An && !!K, Ia = Pa && Fa && (!J || ci !== null && ci > 0), La = Pa && !Fa, Ra = I(() => Xn !== null && ci !== null && ci > Xn ? { "withdrawable-balance": "danger" } : {}, [Xn, ci]), za = Y || Sa, Ba = Fn && !In && !!x, Va = Mn, Ha = !S && Tn || S && !Dn && En.hasAmountlessMethods || n && Tn || za || Ba || Va || !!rn, Ua = On && Tn, Wa = Ua && A, Ga = Ua && !A, Ka = S && On && A && ie > 0 ? ie : 0, qa = I(() => Ka > 0 ? { paddingBottom: Ka } : void 0, [Ka]), Ja = S && A, Ya = 2 + +!!Ga + +!!Ba + +!!Va + +!!Wa, Xa = 2 + +!!Ga, Za = Xa + +!!Ba, Qa = Za + +!!Va, $a = Q ? "danger" : "neutral", eo = E(Nr, !Ca && !wa && "self-center", Ca && "row-start-2 self-end", Ca && (Oa ? "pb-1.5 @md:pb-2" : "pb-2")), to = n ? void 0 : "cursor-pointer", no = E("min-w-0 w-full row-start-3 self-start", Pr), ro = Oa ? Gr : Wr, io = Kr;
	Ca ? io = ro : wa && (io = qr);
	let ao = Ca ? ro : Jr, oo = /* @__PURE__ */ R(T, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: Gi,
		presentationTitle: B(Ui),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), so = za && La, co = !A || n && Ma.some((e) => e.id === "amount"), lo = so ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", uo = so ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", fo = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", po = f.attrs("quick-payment-summary-surface"), mo = f.attrs("quick-payment-amount-surface"), ho = N((e, t) => {
		sn((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), go = Ba && K ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: st({
			index: Xa,
			total: Ya,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ R(ft, {
			paymentType: K,
			selectionId: Cn ?? void 0,
			amountValue: X,
			hideAmountField: !0,
			presentedAmountError: ba,
			onActionsChange: an,
			onPromptStateChange: ho,
			onPreparedValues: Ei,
			onValuesChange: Di,
			submitMode: yi?.submitMode,
			valueOverrides: Z,
			animateEntrance: !1
		}, Cn ?? K.name)
	}) : null, _o = mi && K ? /* @__PURE__ */ R(ot, {
		placement: Ue(k) ? "payment-list" : "payment-form",
		paymentType: K,
		amount: pr,
		onTopUpAccepted: ai
	}) : null, vo = La ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": po["data-pc-slot"],
		className: E(po.className, "w-full", so && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ R(xt, {
			amountDisplay: Na,
			merchantElements: !0,
			summaryFields: Ma,
			rowVariants: Ra,
			animateEntrance: !1,
			panelBorderEdges: so ? "without-top" : "all",
			className: so ? E("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, yo = hi ? /* @__PURE__ */ R(ot, {
		placement: "payment-list",
		paymentType: K,
		paymentTypes: G,
		amount: pr,
		onTopUpAccepted: ai
	}) : null, bo = Ga ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: E("w-full", Et),
		children: /* @__PURE__ */ R(sr, {
			amount: W,
			amountDraft: Bn,
			bonusEvaluationContext: ui,
			floating: Li.length > 0 ? !1 : "adaptive",
			animationStyle: st({
				index: 2,
				total: Ya,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, xo = A || !An ? /* @__PURE__ */ R(it, {
		domScope: "quick-payment-actions",
		items: Li,
		fixed: A,
		enabled: !Gn
	}) : null, So = vi && K ? /* @__PURE__ */ R("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ R(ft, {
			paymentType: K,
			selectionId: Cn ?? void 0,
			amountValue: X,
			hideAmountField: !0,
			presentedAmountError: ba,
			onActionsChange: an,
			onPromptStateChange: ho,
			onPreparedValues: Ei,
			onValuesChange: Di,
			submitMode: "submit",
			valueOverrides: Z,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: na
		}, Cn ?? K.name)
	}) : null, Co = N((e) => Oe(k) && hn(e, { amount: li }).length > 0, [
		hn,
		k,
		li
	]), wo = N((e) => {
		let t = _(e), n = Co(e), r = !A, i = n && r, a = !Ee(e);
		return /* @__PURE__ */ z("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: E("flex min-w-0 flex-col", a && "px-0.5", i ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ R(ot, {
					paymentType: e,
					amount: pr,
					onTopUpAccepted: ai
				}),
				/* @__PURE__ */ R(ft, {
					paymentType: e,
					selectionId: t,
					amountValue: X,
					hideAmountField: !0,
					presentedAmountError: ba,
					onActionsChange: an,
					onPromptStateChange: ho,
					onPreparedValues: Ei,
					onValuesChange: Di,
					valueOverrides: Z,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: yi?.submitMode,
					reserveTrailingActionSpace: r && !i,
					animateEntrance: !1
				}, t),
				r && /* @__PURE__ */ R(Mt, {
					domScope: "quick-payment-accordion-actions",
					items: Li,
					adaptive: !1
				})
			]
		});
	}, [
		ba,
		Z,
		Ei,
		Di,
		ho,
		ai,
		Co,
		X,
		Li,
		yi?.submitMode,
		A,
		pr
	]), To = N((e) => Ia ? /* @__PURE__ */ R(pt, {
		amountDisplay: Na,
		summaryFields: Ma,
		rowVariants: Ra
	}) : null, [
		Ma,
		Na,
		Ia,
		Ra
	]), Eo = N((e) => Ie(e) || _e(e) || !A || Co(e), [Co, A]), Do = N((e) => Eo(e) || Ia, [Eo, Ia]), Oo = N((e) => {
		if (g) return;
		let t = un(e);
		if (!t || $n(t)) return;
		let n = _(t);
		jn && q === n && Do(t) ? (vn(), St?.(t)) : (_n(n, { availableBonuses: gn(t, { amount: $r }) }), gt?.(t));
	}, [
		q,
		$r,
		vn,
		gn,
		un,
		Do,
		jn,
		g,
		$n,
		St,
		gt,
		_n
	]), ko = V("account.delete.title"), Ao = N((e) => Lt && e.accountId ? /* @__PURE__ */ R(Re, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": ko,
		disabled: g,
		onClick: () => {
			bn(e);
		},
		iconOnly: !0,
		label: ko,
		leadingIcon: /* @__PURE__ */ R(m, {})
	}) : null, [
		ko,
		g,
		bn,
		Lt
	]), jo = Va && kn ? /* @__PURE__ */ R("div", {
		"data-slot": "quick-payment-payment-types",
		className: E("w-full", Et),
		style: st({
			index: Za,
			total: Ya,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: An ? /* @__PURE__ */ R(mt, {
			paymentTypes: G,
			paymentTypeGroups: dn,
			domScope: "quick-payment",
			selectedPaymentType: x,
			onSelect: Oo,
			renderActions: Ao,
			renderPanel: wo,
			renderFooter: To,
			hasPanel: Do,
			hasPanelBody: Eo,
			collapsible: jn,
			isPaymentTypeDisabled: Tr,
			interactionLocked: g,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: ui
		}) : /* @__PURE__ */ R(ut, {
			paymentTypes: G,
			paymentTypeGroups: dn,
			domScope: "quick-payment",
			listStyle: kn,
			selectable: !0,
			selectedPaymentType: x,
			onSelect: Oo,
			renderActions: Ao,
			isPaymentTypeDisabled: Tr,
			interactionLocked: g,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: ui
		})
	}) : null, Mo = yo || jo ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [yo, jo]
	}) : null, No = yr ? /* @__PURE__ */ z("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ R($e, {
			content: yr,
			forceVisible: !0
		}), br]
	}) : null, Po = go || Mo || So || No ? /* @__PURE__ */ z(Ht, { children: [
		go,
		Mo,
		So,
		No,
		xn
	] }) : void 0, Fo = !!(go || So || Mo && In), Io = !!(Fo || No), Lo = !Fo || !!rn, Ro = Io && !Lo ? "protected-surface-not-ready" : Mi ? "invalid-state" : void 0, zo = N((e) => {
		if (e === F) return;
		let t = F ? Fe?.find((e) => e.code === F) : void 0, n = e ? Fe?.find((t) => t.code === e) : void 0;
		(!e || n) && (yn(e), t && Wt?.(t), n && Ut?.(n));
	}, [
		Fe,
		Wt,
		Ut,
		yn,
		F
	]), Bo = I(() => G.flatMap((e) => {
		let t = _(e), n = ce(e), r = s({
			paymentType: e,
			id: t,
			label: n ? o(n) : Gt(e.nameKeys ?? e.name),
			currency: j,
			formatMoney: _r,
			minimumLabel: B("field.limits.min.label"),
			maximumLabel: B("field.limits.max.label"),
			selected: q === t,
			disabled: $n(e),
			unavailable: oe(e)
		});
		return r ? [r] : [];
	}), [
		q,
		j,
		_r,
		$n,
		G,
		B,
		Gt
	]), Vo = I(() => (K ? hn(K, { amount: $r }) : (Fe ?? []).map((e) => ({
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
		$r,
		Fe,
		hn,
		K,
		F,
		B
	]), { createAction: Ho, revision: Uo } = y({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), Wo = I(() => Y ? Sn.map((e) => ({
		amount: a(e, j, _r),
		selected: d(Ln) && c(e, Ln) === 0,
		disabled: g || !wr(e)
	})) : [], [
		j,
		_r,
		g,
		Ln,
		wr,
		Y,
		Sn
	]), Go = I(() => ({
		screen: "combo",
		revision: Uo,
		busy: g || Ni,
		amountEntryVisible: Y,
		amount: a(Ln, j, n ? () => Na ?? "" : _r),
		...J && Q && hr ? { amountError: r(B(hr), Q) } : {},
		method: b,
		amountLocked: n,
		amountLabel: B("field.amount.label"),
		paymentTypesLabel: B("cta.choose_payment_type"),
		continueLabel: B("cta.continue"),
		paymentTypes: Bo,
		paymentTypeGroups: dn,
		suggestedAmounts: Wo,
		bonuses: Vo,
		selectedBonusId: F,
		protectedSurfaceRequired: Io,
		protectedSurfaceReady: Lo,
		...Io ? { protectedSurfaceLabel: B(ee) } : {},
		canContinue: !Mi
	}), [
		Q,
		J,
		j,
		Lo,
		Io,
		Mi,
		Ni,
		_r,
		Na,
		g,
		n,
		b,
		Vo,
		Bo,
		dn,
		Wo,
		Ln,
		B,
		Uo,
		F,
		Y,
		hr
	]), Ko = I(() => ({
		setAmount: Ho("setAmount", (e) => {
			Oi(e);
		}, {
			busy: g,
			validate: (e) => te("", e) === e,
			unavailableReason: n || !Y ? "invalid-state" : void 0
		}),
		selectPaymentType: Ho("selectPaymentType", Oo, {
			busy: g,
			validate: (e) => Bo.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: Ho("selectBonus", zo, {
			busy: g,
			validate: (e) => e === null || Vo.some((t) => t.id === e && t.available)
		}),
		continue: Ho("continue", () => Pi(), {
			busy: g || Ni,
			unavailableReason: Ro
		})
	}), [
		Ho,
		Ni,
		Oo,
		Pi,
		zo,
		Oi,
		g,
		n,
		Ro,
		Vo,
		Bo,
		Y
	]), qo = N((e) => /* @__PURE__ */ z("div", {
		id: f.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: Vi,
		style: qa,
		className: E(f.className("route-quick-payment"), f.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", A ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: [
			/* @__PURE__ */ R(Tt, {}),
			re && Q && !Fo && /* @__PURE__ */ R(ct, {
				id: Cr,
				message: Q
			}),
			e
		]
	}), [
		f,
		Cr,
		Q,
		Fo,
		re,
		Vi,
		qa,
		A
	]);
	return /* @__PURE__ */ z(Ht, { children: [$i && wn && /* @__PURE__ */ R(he, {
		sourceId: wn,
		state: ta
	}), /* @__PURE__ */ R(Ft, {
		isLoading: Gn,
		loaderLabel: V("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ R(Je, {
			id: "combo",
			bonusPreviewOwned: !!(_o || yo || In && K && Co(K)),
			model: Go,
			actions: Ko,
			deferPresentationUpdates: Io,
			frame: qo,
			protectedContent: Po,
			children: (e) => /* @__PURE__ */ z(Ht, { children: [
				/* @__PURE__ */ z("div", {
					className: E("flex flex-1 flex-col items-center", Ye ? Rr : "justify-center"),
					children: [Ye ? /* @__PURE__ */ z("div", {
						className: zr,
						children: [
							/* @__PURE__ */ z("div", {
								"data-slot": "quick-payment-prompt-sticky-anchor",
								"data-pc-scroll-obstruction": "top",
								className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
								children: [/* @__PURE__ */ R("div", {
									id: ya ? Cr : void 0,
									role: ya ? "alert" : void 0,
									className: E("pointer-events-auto", Fr, Nr),
									style: st({
										index: 0,
										total: Ya,
										direction: "reverse",
										baseDelayMs: 12,
										staggerMs: 24
									}),
									children: /* @__PURE__ */ z("div", {
										className: "flex flex-col gap-3",
										children: [yr && /* @__PURE__ */ R($e, {
											content: yr,
											className: xa
										}), /* @__PURE__ */ R($e, {
											content: _a,
											className: xa
										})]
									})
								}), /* @__PURE__ */ R("div", {
									"aria-hidden": "true",
									"data-slot": "quick-payment-prompt-sticky-fade",
									"data-pc-scroll-obstruction-extent": "true",
									style: De,
									className: E("pointer-events-none absolute inset-x-0 top-full", tn ? "opacity-100" : "opacity-0")
								})]
							}),
							n && Q && !ya && /* @__PURE__ */ R(ct, {
								id: Cr,
								message: Q
							}),
							(Ha || e.hasContent) && /* @__PURE__ */ R("div", {
								className: E(Fr, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ z(cr, {
									"data-slot": "quick-payment-surface-stack",
									className: Ja ? Br : void 0,
									children: [
										e.top,
										!La && e.hasSummaryContent && /* @__PURE__ */ R(xt, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										za && /* @__PURE__ */ z("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": mo["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Bi,
											className: E(mo.className, "flex flex-col", lo, uo, Ea, fo, Da, Ta),
											children: [/* @__PURE__ */ z("div", {
												"data-slot": "quick-payment-amount-layout",
												className: io,
												children: [
													/* @__PURE__ */ R("div", {
														"data-slot": "quick-payment-amount-title-row",
														"data-theme": $a,
														className: E(eo, to),
														onMouseDown: Bi,
														style: st({
															index: 0,
															total: Ya,
															direction: "reverse",
															baseDelayMs: 12,
															staggerMs: 24
														}),
														children: oo
													}),
													/* @__PURE__ */ R("div", {
														"data-slot": "quick-payment-amount-input-row",
														className: Ca ? E(no, to) : E("w-full", Pr, to),
														onMouseDown: Bi,
														style: st({
															index: 0,
															total: Ya,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ R(or, {
															errorDescriptionId: Q ? Cr : void 0,
															inputRef: qt,
															value: W,
															onChange: Oi,
															onSubmit: Ii,
															onFocusChange: zi,
															canSubmit: !Mi,
															disabled: g,
															invalid: !!Q,
															limits: Yn,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: kt,
															formatOptions: Nt,
															clearOnFocus: S && !g,
															animateValueChange: Zt.changeOrigin === "programmatic"
														})
													}),
													Sa && !wa && /* @__PURE__ */ R(jt, {
														isSuggestionSupported: wr,
														suggestions: Sn,
														activeSuggestion: W,
														onSelect: ki,
														disabled: g,
														formatLabel: Ki,
														amountLimits: Yn,
														size: "xs",
														className: E("order-3", "mt-1")
													})
												]
											}), Sa && wa && /* @__PURE__ */ R(jt, {
												isSuggestionSupported: wr,
												suggestions: Sn,
												activeSuggestion: W,
												onSelect: ki,
												disabled: g,
												formatLabel: Ki,
												amountLimits: Yn,
												size: "xs",
												className: E("order-3", "[@container_(min-width:520px)]:-mt-0.5")
											})]
										}),
										so && vo,
										!so && co && vo,
										bo,
										_o,
										go,
										Mo,
										!so && !co && vo,
										e.bottom,
										xo
									]
								})
							})
						]
					}) : /* @__PURE__ */ z("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [
							ma && /* @__PURE__ */ R("div", {
								id: ya ? Cr : void 0,
								role: ya ? "alert" : void 0,
								className: E("pointer-events-auto", Fr, Nr),
								style: st({
									index: 1,
									total: Ya,
									direction: "reverse"
								}),
								children: /* @__PURE__ */ R($e, {
									content: ma,
									forceVisible: !0
								})
							}),
							n && Q && !ya && /* @__PURE__ */ R(ct, {
								id: Cr,
								message: Q
							}),
							(Ha || e.hasContent) && /* @__PURE__ */ R("div", {
								className: E(Fr, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ z(cr, {
									"data-slot": "quick-payment-surface-stack",
									className: Ja ? Br : void 0,
									children: [
										e.top,
										!La && e.hasSummaryContent && /* @__PURE__ */ R(xt, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										za && /* @__PURE__ */ z("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": mo["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Bi,
											className: E(mo.className, "flex flex-col", lo, uo, Ea, fo, "p-4", Ta, "@md:px-5 @md:py-4 @xl:py-5"),
											children: [/* @__PURE__ */ z("div", {
												"data-slot": "quick-payment-amount-layout",
												className: ao,
												children: [/* @__PURE__ */ R("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": $a,
													className: E(eo, to),
													onMouseDown: Bi,
													style: st({
														index: 0,
														total: Ya,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: oo
												}), /* @__PURE__ */ R("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: E(Ca ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", to),
													onMouseDown: Bi,
													children: /* @__PURE__ */ R("div", {
														className: E("w-full", Pr),
														style: st({
															index: 0,
															total: Ya,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ R(or, {
															errorDescriptionId: Q ? Cr : void 0,
															inputRef: qt,
															value: W,
															onChange: Oi,
															onSubmit: Ii,
															onFocusChange: zi,
															canSubmit: !Mi,
															disabled: g,
															invalid: !!Q,
															limits: Yn,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: kt,
															formatOptions: Nt,
															clearOnFocus: S && !g,
															animateValueChange: Zt.changeOrigin === "programmatic"
														})
													})
												})]
											}), Sa && /* @__PURE__ */ R(jt, {
												isSuggestionSupported: wr,
												suggestions: Sn,
												activeSuggestion: W,
												onSelect: ki,
												disabled: g,
												formatLabel: Ki,
												amountLimits: Yn,
												size: "xs",
												className: E(!wa && "mt-3 @md:mt-0", "order-2")
											})]
										}),
										so && vo,
										!so && co && vo,
										bo,
										_o,
										go,
										Mo,
										!so && !co && vo,
										e.bottom,
										xo
									]
								})
							})
						]
					}), Wa && /* @__PURE__ */ R("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ R("div", {
							className: Fr,
							children: /* @__PURE__ */ R(sr, {
								amount: W,
								amountDraft: Bn,
								bonusEvaluationContext: ui,
								animationStyle: st({
									index: Qa,
									total: Ya,
									direction: "forward",
									baseDelayMs: 70,
									staggerMs: 36
								})
							})
						})
					})]
				}),
				So,
				br
			] })
		})
	})] });
}
//#endregion
export { Dr as a, Jt as c, Er as i, qt as l, $r as n, dr as o, Qr as r, cr as s, ei as t };
