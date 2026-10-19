import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { Ar as r, B as i, C as a, Cr as o, D as s, E as c, F as l, Fi as u, Fn as d, G as f, Gt as p, H as m, Hn as ee, I as te, K as ne, L as re, M as ie, Mi as ae, Mn as oe, Mr as h, N as se, O as g, On as ce, Ot as le, P as _, Pr as ue, Q as v, R as de, Rr as fe, S as pe, Sr as y, Tr as b, Tt as me, U as he, Vn as ge, W as _e, Wt as x, Zn as ve, _i as ye, _r as be, _t as S, br as C, ct as w, et as T, fi as E, fn as xe, gi as Se, gt as Ce, ht as we, it as Te, j as Ee, k as De, lr as Oe, lt as ke, n as D, pn as Ae, q as O, qt as je, r as Me, tt as Ne, ui as Pe, un as Fe, vt as Ie, xr as k, yi as Le, yr as Re, yt as ze } from "./usePaymentSelection-DEVic0G9.js";
import { G as Be, H as Ve, M as He, U as Ue, V as We, W as Ge, dt as Ke, gt as qe, ht as Je, mt as Ye, pt as Xe } from "./purchase-Bq2flI3q.js";
import { $ as Ze, D as A, E as Qe, F as $e, I as et, L as tt, O as nt, P as rt, T as it, W as at, _ as ot, a as st, b as ct, c as lt, d as ut, f as dt, h as ft, i as pt, it as mt, k as ht, l as gt, n as _t, o as j, ot as vt, p as yt, r as bt, rt as xt, s as St, t as Ct, u as wt, v as Tt, x as Et } from "./inlinePaymentSubmit-VO4WMTCy.js";
import { t as Dt, u as Ot } from "./fileRoute-D2etI6yU.js";
import { n as kt } from "./CashierFullscreenLoader-_Nzfihs_.js";
import { t as At } from "./CashierEntry-Cpw-mEt4.js";
import * as M from "react";
import { createContext as jt, useCallback as N, useContext as Mt, useEffect as P, useImperativeHandle as Nt, useLayoutEffect as F, useMemo as I, useReducer as Pt, useRef as L, useState as R } from "react";
import { Fragment as Ft, jsx as z, jsxs as B } from "react/jsx-runtime";
//#region ../../node_modules/number-flow/dist/lite-BTIaQdTe.mjs
var It = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, Lt = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, V = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, Rt = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function H(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function zt(e, t, n, r) {
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
var Bt = String.raw, Vt = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), Ht = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), U = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, Ut = "--_number-flow-d-opacity", Wt = "--_number-flow-d-width", W = "--_number-flow-dx", G = "--_number-flow-d", Gt = (() => {
	try {
		return CSS.registerProperty({
			name: Ut,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: W,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: Wt,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: G,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), Kt = "var(--number-flow-char-height, 1em)", qt = "var(--number-flow-mask-height, 0.25em)", Jt = `calc(${qt} / 2)`, Yt = "var(--number-flow-mask-width, 0.5em)", Xt = `calc(${Yt} / var(--scale-x))`, Zt = "#000 0, transparent 71%", Qt = Bt`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Kt} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Wt}) / var(--width));transform:translateX(var(${W})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Yt});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Xt},#000 calc(100% - ${Xt}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${qt},#000 calc(100% - ${qt}),transparent 100% ),radial-gradient(at bottom right,${Zt}),radial-gradient(at bottom left,${Zt}),radial-gradient(at top left,${Zt}),radial-gradient(at top right,${Zt});-webkit-mask-size:100% calc(100% - ${qt} * 2),calc(100% - ${Xt} * 2) 100%,${Xt} ${qt},${Xt} ${qt},${Xt} ${qt},${Xt} ${qt};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Jt} ${Yt};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${W})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${G})}.digit__num,.number .section::after{padding:${Jt} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${Ut}))}`, K = HTMLElement;
Bt`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${Kt} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${Jt} 0}.symbol{white-space:pre}`;
var $t = Ht && Vt && Gt, en, tn = class extends K {
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
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = $t && this._animated && (!this.respectMotionPreference || !(U != null && U.matches)) && V(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) en || (en = new CSSStyleSheet(), en.replaceSync(Qt)), this.shadowRoot.adoptedStyleSheets = [en];
			else {
				let e = document.createElement("style");
				e.textContent = Qt, this.shadowRoot.appendChild(e);
			}
			this._pre = new on(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new nn(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new on(this, a, {
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
tn.defaultProps = {
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
var nn = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new an(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new an(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = It("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = It("span", {
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
			[Wt]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, rn = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = It("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new ln(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new un(this, e.type, e.value, {
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
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${Lt(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (H(e, (e) => {
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
}, an = class extends rn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof ln && e.update(0);
		}), this.pop(t);
	}
}, on = class extends rn {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, sn = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [Ut]: [-.9999, 0] }, {
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
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [Ut]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, cn = class extends sn {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, ln = class extends cn {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = It("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = It("span", {
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
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [G]: [-o, 0] }, {
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
}, un = class extends cn {
	constructor(e, t, n, r) {
		let i = It("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, It("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new sn(this.flow, i, { onRemove: this._onChildRemove(n) }));
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
				let t = It("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new sn(this.flow, t, {
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
}, dn = parseInt(M.version.match(/^(\d+)\./)?.[1]) >= 19, fn = ["data", "digits"], pn = class extends tn {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
pn.observedAttributes = dn ? [] : fn, Rt("number-flow-react", pn);
var mn = {}, q = dn ? (e) => e : JSON.stringify;
function hn(e) {
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
var gn = class extends M.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = hn(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? pn.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), dn && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = hn(this.props);
		return /*#__PURE__*/ M.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: q(s),
			data: q(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, J = /*#__PURE__*/ M.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	M.useImperativeHandle(o, () => s.current, []);
	let s = M.useRef(), c = M.useContext(_n);
	c?.useRegister(s);
	let l = M.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = M.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = M.useMemo(() => zt(e, mn[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ M.createElement(gn, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), _n = /*#__PURE__*/ M.createContext(void 0), vn = (e) => e.length > 0 ? e : "";
function yn(e) {
	return typeof e == "object" && !!e;
}
var bn = (e, t, n) => e && e !== t ? e : n, xn = .747, Sn = (e) => Number((e * xn).toFixed(3)), Cn = (e) => ({
	min: Sn(e.min),
	max: Sn(e.max)
}), Y = Sn(.8), wn = {
	base: Cn({
		min: 1.05,
		max: 3.25
	}),
	md: Cn({
		min: 1.24,
		max: 3.8
	}),
	xl: Cn({
		min: 1.42,
		max: 4.36
	})
}, Tn = {
	min: wn.base.min,
	max: wn.base.max
}, En = wn.base.max, Dn = .75, X = [
	"text-[length:var(--pc-font-input-meta-size,0.75rem)]",
	"leading-[var(--pc-font-input-meta-line-height,1rem)]",
	"[font-weight:var(--pc-font-input-meta-weight,400)]",
	"[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]",
	"[font-style:var(--pc-font-input-meta-style,inherit)]",
	"[text-transform:var(--pc-font-input-meta-text-transform,inherit)]",
	"@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]",
	"@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]"
].join(" "), Z = {
	md: 448,
	xl: 560
}, On = "min(6ch, 100%)", kn = Sn(60), An = 24, jn = "cubic-bezier(0.2, 0.8, 0.2, 1)", Mn = .01, Nn = "0em", Pn = {
	transformTiming: {
		duration: 450,
		easing: jn
	},
	spinTiming: {
		duration: 480,
		easing: jn
	},
	opacityTiming: {
		duration: 300,
		easing: jn
	}
}, Fn = (e) => ({
	renderedValue: e,
	pendingValue: null
}), In = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, Ln = (e, t) => {
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
	}, In(e, a) ? e : a;
}, Rn = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, zn = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, Bn = (e) => {
	if (!e) return 0;
	let t = zn(e);
	return t ? t.clientWidth : e.clientWidth;
}, Vn = (e) => {
	if (!e) return null;
	let t = zn(e);
	return t && t !== e ? t : e.parentElement;
}, Hn = (e) => {
	if (!e) return {
		bounds: Tn,
		growthFactor: Y
	};
	let t = Bn(e) || e.clientWidth, n = wn.base;
	return t >= Z.xl ? n = wn.xl : t >= Z.md && (n = wn.md), {
		bounds: Rn(n),
		growthFactor: Math.max(0, Y)
	};
}, Un = (e, t, n = Y) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / En, c = o * n * s, l = kn / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function Wn({ value: e, onChange: t, helper: n, onSubmit: i, canSubmit: a = !1, inputRef: s, currency: c, locale: l, formatOptions: d, clearOnFocus: p = !1, errorMessage: ee, invalid: te = !1, limits: ne, reserveErrorSpace: re = !1, showMeta: ie = !0, showDivider: ae = !0, reserveEmptyLimitMetaSpace: oe = !0, align: h = "center", animateValueChange: se = !1, disabled: g = !1, onFocusChange: ce }) {
	let le = ve(), { translateKey: _ } = r(), [ue, v] = R(!1), de = L(null), fe = L(null), pe = L(null), b = L(!1), me = L(!1), he = L(e), ge = yn(s) ? s : null, _e = N((e) => {
		de.current = e, s && typeof s == "function" && s(e);
	}, [s]);
	Nt(ge, () => de.current), P(() => {
		b.current && e.length !== 0 && (me.current = !0);
	}, [e]);
	let x = N(() => {
		p && e.length !== 0 && (b.current || (he.current = e, b.current = !0, me.current = !1, t("")));
	}, [
		p,
		t,
		e
	]), ye = N(() => {
		g || (v(!0), ce?.(!0), x());
	}, [
		g,
		ce,
		x
	]), be = N(() => {
		if (v(!1), ce?.(!1), !p || !b.current) return;
		let n = !me.current && e.length === 0;
		b.current = !1, me.current = !1, n && t(he.current);
	}, [
		p,
		t,
		ce,
		e.length
	]), S = N(() => {
		g || x();
	}, [g, x]), C = N((n) => {
		g || (b.current && (me.current = !0), t(m(e, n.target.value)));
	}, [
		g,
		t,
		e
	]), w = I(() => vn(e), [e]), T = I(() => {
		if (!w) return null;
		let e = Number(w);
		return Number.isFinite(e) ? e : null;
	}, [w]), { currencyFormatter: E } = o(c, l, d), xe = I(() => E ? w ? T === null ? w : E.format(T) : "" : w, [
		E,
		w,
		T
	]), Se = ne?.min ?? "", Ce = ne?.max ?? "", we = Se ? y(Se, E, void 0, l) || Se : "", Te = Ce ? y(Ce, E, void 0, l) || Ce : "", Ee = !!(we || Te), De = I(() => {
		if (!E || typeof E.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = E.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: E.currencyCodeSuffix || void 0
		};
	}, [E]), Oe = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [ke, D] = Pt(Ln, T, Fn);
	P(() => {
		D({
			type: "sync",
			numericValue: T,
			defer: se && ue && T !== null,
			preserveRendered: T === null && b.current && !me.current
		});
	}, [
		se,
		ue,
		T
	]);
	let Ae = I(() => {
		let e = [w, xe].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [w, xe]) || "0", [O, je] = R(() => Un(Ae, Tn)), [Me, Ne] = R(En * Dn), Pe = L(O), Fe = L(Me);
	P(() => {
		Pe.current = O;
	}, [O]), P(() => {
		Fe.current = Me;
	}, [Me]), F(() => {
		let e = fe.current, t = pe.current;
		if (!e || !t) return;
		let n = Vn(e), r = () => {
			let { bounds: n, growthFactor: r } = Hn(e), i = n.max * Dn;
			Math.abs(Fe.current - i) >= Mn && (Fe.current = i, Ne(i));
			let a = Math.max(e.clientWidth - An, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = Un(Ae, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Pe.current - u) < Mn || (Pe.current = u, je(u));
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
	let Ie = `${O.toFixed(2)}rem`, k = Dn, Le = `${Me.toFixed(2)}rem`, Re = N((e) => {
		e.key === "Enter" && (e.preventDefault(), !g && a && i?.());
	}, [
		a,
		g,
		i
	]), ze = !!De && ke.renderedValue !== null && Oe, Be = ze ? ke.renderedValue : void 0, Ve = !!xe || ze, He = !!xe && !ue, Ue = _("field.amount.label"), We = bn(_("field.limits.min.label"), "field.limits.min.label", "Min"), Ge = bn(_("field.limits.max.label"), "field.limits.max.label", "Max"), Ke = le.id("amount-input"), qe = !!ee || re, Je = ie && (!!n || qe), Ye = te || !!ee, Xe = f(e, ne), Ze = Ye ? "danger" : "neutral", A = Xe.isOutOfRange && Ye ? "danger" : void 0, Qe = ae && Ee, $e = "opacity-0";
	He && ($e = g ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let et;
	g || (et = ue ? "cursor-pointer opacity-85" : "cursor-pointer");
	let tt = le.attrs("amount-section"), nt = le.attrs("amount-content"), rt = le.attrs("amount-input");
	return /* @__PURE__ */ z("div", {
		id: le.id("amount-section"),
		...tt,
		className: [tt.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ B("div", {
			...nt,
			className: [nt.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ z("label", {
					className: "sr-only",
					htmlFor: Ke,
					children: Ue
				}),
				/* @__PURE__ */ z("div", {
					"data-theme": Ze,
					className: u(Qe && "border-b border-[var(--pc-color-depth-4)]", Qe && "pb-0.5", !g && "group"),
					children: /* @__PURE__ */ z("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ z("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ B("div", {
								className: u("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: fe,
								style: {
									minHeight: Le,
									height: Le
								},
								children: [
									/* @__PURE__ */ z("span", {
										"aria-hidden": !0,
										ref: pe,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: k
										},
										children: Ae
									}),
									/* @__PURE__ */ z("input", {
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
										value: w,
										disabled: g,
										"aria-invalid": Ye,
										ref: _e,
										onChange: C,
										onKeyDown: Re,
										onFocus: ye,
										onBlur: be,
										onClick: S,
										className: u(rt.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", et),
										style: {
											fontSize: Ie,
											lineHeight: k,
											width: "100%",
											maxWidth: "100%",
											minWidth: On,
											color: He ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Nn})`
										}
									}),
									Ve && /* @__PURE__ */ z("div", {
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
											fontSize: Ie,
											lineHeight: k,
											width: "100%",
											maxWidth: "100%",
											minWidth: On,
											transform: `translateY(${Nn})`
										},
										children: ze ? /* @__PURE__ */ z(J, {
											value: Be,
											locales: De?.locales,
											format: De?.format,
											suffix: De?.suffix,
											animated: se,
											transformTiming: Pn.transformTiming,
											spinTiming: Pn.spinTiming,
											opacityTiming: Pn.opacityTiming,
											respectMotionPreference: !0
										}) : xe
									})
								]
							})
						})
					})
				}),
				Ee && /* @__PURE__ */ B("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						X
					].join(" "),
					children: [/* @__PURE__ */ z("div", {
						"data-theme": A,
						className: u("min-w-0 text-left", A && "text-[var(--pc-color-text)]"),
						children: we ? /* @__PURE__ */ B("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ B("span", { children: [We, ":"] }), /* @__PURE__ */ z("span", {
								className: "truncate",
								children: we
							})]
						}) : null
					}), /* @__PURE__ */ z("div", {
						"data-theme": A,
						className: u("min-w-0 text-right", A && "text-[var(--pc-color-text)]"),
						children: Te ? /* @__PURE__ */ B("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ B("span", { children: [Ge, ":"] }), /* @__PURE__ */ z("span", {
								className: "truncate",
								children: Te
							})]
						}) : null
					})]
				}),
				Je && /* @__PURE__ */ B("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ z("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), qe && /* @__PURE__ */ z("div", {
						"data-theme": "danger",
						className: "h-5 text-[var(--pc-color-text)] truncate",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: ee ?? ""
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/PaymentTypePicker.tsx
function Gn({ animationStyle: t, bonusEvaluationContext: n, floating: i = !0 }) {
	let o = me(), s = ve(), { uiComboView: c, uiComboView__PaymentTypes: l, onPaymentTypeSelected: d, uiAccountDelete: f } = Mt(fe), { translateKey: p } = r(), { paymentTypesList: m } = a(), { getBonusCountForPaymentType: ee, getAvailableBonusesForPaymentType: ne } = pe(), { selectedPaymentType: re, selectPaymentType: ie, ensureDefaultSelection: oe } = D(), { requestAccountDelete: h, actionConfirmationModal: se } = lt();
	P(() => {
		c && te(l) && oe(m);
	}, [
		oe,
		m,
		c,
		l
	]);
	let g = m.length > 0, ce = m.length > 1, le = c && te(l) && ce && !o, _ = I(() => ze(m, re), [m, re]), ue = I(() => _ ? we(_) : null, [_]), v = I(() => {
		if (!_) return null;
		let e = ee(_, n), t = S(_);
		return e > 0 ? /* @__PURE__ */ z(ut, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		n,
		ee,
		_
	]), de = p("cta.choose_payment_type"), y = p("cta.interactive_prompt.choose_payment_type.title"), b = p("account.delete.title"), he = _?.name ?? "cta.choose_payment_type", ge = _ ? S(_) : he, _e = N((e, t) => {
		if (o) return;
		let n = ze(m, e);
		n && !Ie(n) && (ie(S(n), { availableBonuses: ne(n) }), d && d(n)), t();
	}, [
		ne,
		o,
		d,
		m,
		ie
	]), x = N((e) => f && e.accountId ? /* @__PURE__ */ z(ae, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": b,
		disabled: o,
		onClick: () => {
			h(e);
		},
		iconOnly: !0,
		label: b,
		leadingIcon: /* @__PURE__ */ z(Le, {})
	}) : null, [
		b,
		o,
		h,
		f
	]);
	return /* @__PURE__ */ z(St, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ z(ke, { children: de }),
		triggerLabel: de,
		canOpen: le,
		shouldRender: c && te(l) && g,
		animationStyle: t,
		floating: i,
		actionContent: se,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ z(j, {
			domSlug: ge,
			name: he,
			presentationPaymentType: _ ?? void 0,
			nameKeys: _?.nameKeys,
			logo: _?.logo,
			logoContent: _ ? void 0 : A("h-full w-full"),
			limits: _?.limits,
			fee: _?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: v,
			title: ue ?? void 0,
			interactive: !1,
			isDisabled: o,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: le ? /* @__PURE__ */ z(st, { children: /* @__PURE__ */ z(ae, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": y,
				disabled: o,
				onClick: e,
				leadingIcon: /* @__PURE__ */ z(Pe, {}),
				label: y
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = s.attrs("payment-type-picker-list");
			return /* @__PURE__ */ z("div", {
				id: n,
				...r,
				className: u(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ z(wt, {
					paymentTypes: m,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						_e(e, t);
					},
					interactionLocked: o,
					renderActions: x,
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
function Kn({ className: e, ...t }) {
	return /* @__PURE__ */ z("div", {
		...t,
		className: u("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var qn = jt({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), Jn = () => Mt(qn);
function Yn({ children: e }) {
	let [t, n] = R(() => /* @__PURE__ */ new Set()), r = N((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = N((e) => e ? t.has(e) : !1, [t]), a = I(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ z(qn.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function Xn() {
	return /* @__PURE__ */ B("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ z("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ z("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ z("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/utils/pendingWithdrawalDisplay.ts
var Zn = (e, t, n) => [n(Ce(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), Qn = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function $n({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: i, isDisabled: a = !1, focusPaymentId: o = null, isFocusRestoreActive: s = !1 }) {
	let { translateKeys: c } = r(), l = L(null);
	return P(() => {
		if (!s || !o) return;
		let e = l.current;
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
	}, [o, s]), /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let r = t(e), s = Zn(e, n, c), d = [r, s].filter(Boolean).join(", ");
			return /* @__PURE__ */ z("button", {
				ref: e.paymentId === o ? l : void 0,
				type: "button",
				className: Qn,
				"aria-label": d || void 0,
				onClick: () => {
					i(e);
				},
				disabled: a,
				children: /* @__PURE__ */ B("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ z("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: r
					}), s && /* @__PURE__ */ z("span", {
						className: u("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: s
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawals.ts
var er = 1, tr = 100, nr = /* @__PURE__ */ new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), rr = (e) => {
	if (!e) return null;
	let t = Number(e.value);
	if (typeof e.currency != "string") return null;
	let n = e.currency.trim().toUpperCase();
	return !Number.isFinite(t) || !n ? null : {
		value: t,
		currency: n
	};
}, ir = (e) => {
	if (!nr.has(e.subStatus)) return null;
	let t = rr(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, ar = (e) => (e ?? []).flatMap((e) => {
	let t = ir(e);
	return t ? [t] : [];
}), or = async (e, t) => {
	let { data: n, error: r } = await ue({
		client: t,
		query: {
			...e,
			method: "payout",
			page: er,
			pageSize: tr
		},
		cache: "no-store"
	});
	if (r) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: ar(n?.payments),
		totalItems: n?.totalItems ?? 0,
		totalPages: n?.totalPages ?? 0,
		currentPage: n?.currentPage ?? er,
		pageSize: n?.pageSize ?? tr
	};
}, sr = async ({ client: e, merchantId: t, userId: n, sessionId: r, paymentId: i }) => {
	let { data: a, error: o } = await h({
		client: e,
		path: { paymentId: i },
		query: {
			merchantId: t,
			userId: n,
			sessionId: r
		}
	});
	if (o) {
		let e = "Failed to cancel pending withdrawal.";
		throw o instanceof Error ? e = o.message : typeof o == "object" && "error" in o && typeof o.error == "string" && (e = o.error), Error(e);
	}
	return a;
}, cr = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
	e.paymentId,
	e.amountValue,
	e.amountCurrency,
	e.subStatus
].join(":"))].join("|"), lr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.amountCurrency, (t.get(n.amountCurrency) ?? 0) + n.amountValue);
	return [...t].map(([e, t]) => ({
		currency: e,
		amount: t
	}));
}, ur = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], dr = (e, t, n = !0) => ({
	queryKey: ur(e),
	queryFn: () => or(e, t),
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
		icon: /* @__PURE__ */ z(Xn, {}),
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
	icon: /* @__PURE__ */ z(Xn, {}),
	tone: "secondary",
	footer: e
} : null, yr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ B(Ft, { children: [l.length > 1 && /* @__PURE__ */ z(at, {
	isOpen: i && !r,
	onClose: s,
	title: u,
	children: /* @__PURE__ */ z($n, {
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
	let i = le(), a = me(), o = Mt(fe), { merchantId: s, userId: c, sessionId: l, debug: u, locale: d, currencyFormatOptions: f, method: m, lockAmount: ee, uiInteractivePrompts: te, uiSuggestAction: ne, onPendingWithdrawalCancelled: re } = o, ie = o.uiCancelPendingPayout === !0, { translateKey: ae, translateKeys: oe } = r(), { formatDisplayValue: h } = Re(), se = I(() => {
		try {
			return new Intl.ListFormat(d, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [d]), { dismissPrompt: g, isPromptDismissed: ce } = Jn(), _ = je(), [ue, v] = Pt(gr, pr), { isDrawerOpen: de, selectedPaymentId: pe, cancellingPaymentId: y, cancellationState: he } = ue, ge = m === t.PAYIN && !ee && te && ie && ne.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(s && c && l), _e = I(() => ({
		merchantId: s,
		userId: c,
		sessionId: l
	}), [
		s,
		l,
		c
	]), ve = I(() => ur(_e), [_e]), { data: ye } = p(dr(_e, i, ge)), S = I(() => ye?.payments ?? [], [ye?.payments]), w = I(() => {
		let e = /* @__PURE__ */ new Map(), t = [...S, ...he?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, C(n.amountCurrency, d, f));
		return e;
	}, [
		he?.cancelledPayments,
		f,
		d,
		S
	]), T = N((e) => k(e.amountValue, w.get(e.amountCurrency)), [w]), E = N((e) => {
		let t = e.map((e) => k(e.amount, w.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : se?.format(t) ?? t.join(", ");
	}, [se, w]), xe = N((e) => E(lr(e)), [E]), Se = I(() => cr(S), [S]), Ce = ce(Se), we = S.length === 1 ? S[0] : S.at(0) ?? null, { openActionConfirmation: Te, actionConfirmationModal: Ee, isActionConfirmationOpen: De, closeActionConfirmation: Oe } = gt({ isConfirmDisabled: a });
	P(() => {
		v({ type: "reset" }), Oe();
	}, [
		Oe,
		ge,
		s,
		l,
		c
	]), P(() => {
		Ce && v({ type: "dismiss" });
	}, [Ce]), P(() => {
		v({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: S,
			featureEnabled: ge
		});
	}, [ge, S]), P(() => {
		a && (v({ type: "close-drawer" }), Oe());
	}, [Oe, a]);
	let { mutateAsync: ke, isPending: D } = x({
		mutationFn: async (e) => await sr({
			client: i,
			merchantId: s,
			userId: c,
			sessionId: l,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = S.filter((e) => e.paymentId !== t.paymentId);
			await _.invalidateQueries({ queryKey: ve });
			try {
				n = (await _.fetchQuery(dr(_e, i, !0))).payments;
			} catch {}
			let r = n.length, a = lr(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			v({
				type: "record-success",
				payment: t,
				pendingWithdrawals: S
			}), b({
				callback: re,
				callbackName: "onPendingWithdrawalCancelled",
				debug: u,
				payload: {
					paymentId: t.paymentId,
					amount: t.amountValue,
					currency: t.amountCurrency,
					createdAt: t.createdAt,
					remainingPendingCount: r,
					remainingPendingTotal: o,
					remainingPendingTotals: a
				}
			});
		},
		onSettled: () => {
			v({ type: "finish-cancelling" });
		}
	}), Ae = N(() => {
		!a && Se && g(Se);
	}, [
		Se,
		g,
		a
	]), O = N((e) => {
		if (D || a) return;
		let t = T(e), n = Zn(e, h, oe);
		Te({
			title: oe(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ B("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ z("p", { children: be(oe(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ z("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: n
				})]
			}),
			confirmLabel: oe(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: ae("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				v({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await ke(e);
			}
		});
	}, [
		ke,
		h,
		T,
		D,
		a,
		Te,
		ae,
		oe
	]), Me = N(() => {
		we !== null && O(we);
	}, [we, O]), Ne = N((e) => {
		v({
			type: "select-payment",
			paymentId: e.paymentId
		}), O(e);
	}, [O]), Pe = N(() => {
		D || a || S.length <= 1 || v({ type: "open-drawer" });
	}, [
		D,
		a,
		S.length
	]), Fe = N(() => {
		D || v({ type: "close-drawer" });
	}, [D]), Ie = I(() => {
		if (!he || he.cancelledPayments.length === 0) return null;
		let e = lr(he.cancelledPayments);
		return /* @__PURE__ */ z("p", {
			className: Q,
			children: be(ae("pending_withdrawal.cancel.success"), { amount: E(e) })
		});
	}, [
		he,
		E,
		ae
	]), Le = I(() => !ge || Ce ? null : we ? _r({
		pendingWithdrawals: S,
		activePendingWithdrawal: we,
		isPaymentInteractionLocked: a,
		isCancelling: D,
		isDrawerOpen: de,
		onDismiss: Ae,
		onCancel: Me,
		onView: Pe,
		formatPendingWithdrawalAmount: T,
		formatPendingWithdrawalTotals: xe,
		successFooter: Ie
	}) : vr({ successFooter: Ie }), [
		we,
		ge,
		T,
		xe,
		Me,
		Ae,
		Pe,
		D,
		a,
		de,
		Ce,
		S,
		Ie
	]), ze = I(() => ge ? /* @__PURE__ */ z(yr, {
		actionConfirmationModal: Ee,
		formatDisplayValue: h,
		formatPendingWithdrawalAmount: T,
		isActionConfirmationOpen: De,
		isDrawerOpen: de,
		isSelectionDisabled: a || D || y !== null,
		onClose: Fe,
		onSelect: Ne,
		pendingWithdrawals: S,
		selectedPaymentId: pe,
		title: ae("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		Ee,
		y,
		ge,
		h,
		T,
		Fe,
		Ne,
		D,
		De,
		a,
		de,
		S,
		pe,
		ae
	]), Be = N((e) => e, []), Ve = I(() => ({
		interactivePromptContent: Le,
		pendingWithdrawalDrawer: ze,
		attachSuccessFooter: Be
	}), [
		Be,
		Le,
		ze
	]);
	return /* @__PURE__ */ z(fr.Provider, {
		value: Ve,
		children: e
	});
}
var xr = () => Mt(fr), Sr = (e, t) => t === "Backspace" ? e.length === 0 ? e : qe(e.slice(0, -1)) : qe(`${e}${t}`), Cr = (e) => ({
	value: qe(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), wr = (e, t) => {
	let n = qe(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, Tr = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", Er = "pc-enter-drift-item", Dr = "pc-enter-lift-item", Or = Fe, kr = "min-h-[27cqw] @md:min-h-[27cqw]", Ar = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", jr = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", Mr = "flex w-full flex-col items-center gap-2 @md:gap-3", Nr = "pb-3 @md:pb-4", Pr = [
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
	let n = c(t);
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
	let { initialAmount: e, lockAmount: t, uiComboView: n, entryDecision: r } = Mt(fe);
	return t && n && !r ? /* @__PURE__ */ z(At, {}) : /* @__PURE__ */ z(Jr, {
		initialAmount: e,
		lockAmount: t
	});
}
function Jr({ initialAmount: e, lockAmount: n }) {
	let o = ve(), c = d("combo"), { contentInset: p } = Ze(), m = Mt(fe), h = me(), { isSubscribed: le, publishInactive: ue } = ee(), { method: y, uiSuggestAmounts: b, selectedPaymentType: x, uiComboView: C, uiComboView__PaymentTypes: Ce, uiComboView__PaymentForm: ke, gotoPaymentType: je, bonuses: Pe, uiPaymentConfirmView: Fe, uiBonusesStyle: k, uiInteractivePrompts: ze, uiFixedControls: A, hasAppliedGotoPaymentType: at, setCashierState: st, onPaymentTypeSelected: ut, onPaymentTypeDeselected: gt, currency: j, locale: St, currencyFormatOptions: Dt, resetFlowOnBack: Ot, user: At, uiShowFees: M, uiAccountDelete: jt, paymentFormDraft: Nt, selectedBonusCode: F, onBonusSelected: It, onBonusDeselected: Lt } = Mt(fe), { resolveTextKey: V, resolveTextKeys: Rt, translateKey: H } = r(), zt = Ae(), Bt = L(null), Vt = L(!1), Ht = L(!1), U = L(!1), Ut = L(null), Wt = L(null), [W, G] = Pt(wr, e, Cr), [Gt, Kt] = R(!1), [qt, Jt] = R(!1), [Yt, Xt] = R(null), [Zt, Qt] = R({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), K = W.value, $t = L(K), en = L({
		amount: K,
		amountIsOutOfRange: !1,
		gotoPaymentType: je,
		selectedPaymentType: x,
		selectedPaymentTypeId: x,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: y
	}), { getPaymentType: tn, paymentTypesList: nn, isLoading: rn, isError: an } = a(), { getBonusCountForPaymentType: on, getBonusAvailabilityForPaymentType: sn, getAvailableBonusesForPaymentType: cn } = pe(), { selectPaymentType: ln, clearPaymentSelection: un } = D(), { selectBonusCode: dn } = rt(), { requestAccountDelete: fn, actionConfirmationModal: pn } = lt();
	P(() => {
		$t.current = K;
	}, [K]), P(() => {
		Ht.current = !1, U.current = !1, G({
			type: "sync-external",
			value: e
		});
	}, [e]), P(() => {
		Ot && st((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Ot, st]), P(() => {
		Vt.current && (Vt.current = !1, Bt.current?.blur());
	}, [K]);
	let mn = I(() => Je(b), [b]), q = I(() => x ? tn(x) : null, [tn, x]), hn = q ? S(q) : null, gn = hn ? `quick-payment-form:${hn}` : null, J = hn ?? x, _n = nn.length > 0, vn = C && re(Ce), yn = C && te(Ce), bn = C ? i({
		mode: Ce,
		paymentFormEnabled: ke
	}) : null, xn = Ee(bn), Sn = l(bn), Cn = !!(bn && _n), Y = C && vn && q && q ? de(q) : !0, wn = !!(q && s(q)), Tn = !!(q && (wn || De(q))), En = !!(C && vn && ke && q && Tn && (!bn || xn)), Dn = xn && En, X = Y && !n, Z = Y ? K : "", On = x && Et(Nt, {
		paymentTypeName: J ?? x,
		method: y,
		amount: Z
	}) ? Nt : null, kn = I(() => ({
		...On?.values ?? {},
		amount: Z
	}), [On?.values, Z]), An = Y && Xe(K) && !!x && !q && rn && !an, jn = !!je && !at, Mn = vn, Nn = !!(q && Ie(q)), Pn = Mn && rn && !an && !_n && !x, Fn = Mn && !q || Nn, In = C && !!x && (vn || jn), Ln = !_n || rn || an, Rn = q?.limits, zn = ne(y, At, q?.fee), Bn = f(Z, Rn, { maxBoundary: zn }), Vn = N((e) => Me(e, {
		initialAmount: K,
		method: y,
		user: At
	}), [
		K,
		y,
		At
	]), Hn = _e(Z, Rn, { maxBoundary: zn }), Un = Hn?.key, [qn, Jn] = R(() => ({
		value: K,
		key: Un
	})), [Yn, Xn] = R(K), Zn = Y && Gt && W.changeOrigin === "user" && !!Un && qn.key === void 0, Qn = Y && Gt && W.changeOrigin === "user", $n = qn.value === K && qn.key === Un, er = Qn && Yn !== K, tr = Y ? er ? Yn : K : "", nr = Tr({
		livePaymentAmount: Z,
		paymentTypeSupportsAmount: Y,
		visiblePaymentSummaryAmount: tr
	}), rr = Zn && !$n, ir = Un;
	rr && (ir = void 0);
	let ar = ir ? Hn : void 0, { currencyFormatter: or, formatCurrencyValue: sr, formatDisplayValue: cr } = Re(), { interactivePromptContent: lr, pendingWithdrawalDrawer: ur, attachSuccessFooter: dr } = xr(), fr = I(() => v(or), [or]), Q = he(ar, H, sr), pr = N((e) => Ie(e) ? !0 : !rr && Vn(e), [rr, Vn]), mr = Y ? Xe(K) : !!q, hr = h || Y && !Xe(K) || Y && Bn.isOutOfRange || Ln || Fn, gr = H("cta.continue"), _r = H(y === t.PAYOUT ? "cta.payout" : "cta.payin"), vr = _r.toLocaleLowerCase(St), yr = I(() => Y ? O(K) : null, [K, Y]), br = I(() => O(e), [e]), [Pr, Fr] = R(null), Gr = N((e) => {
		n || h || (G({
			type: "sync-external",
			value: ht(e.nextAmount)
		}), Fr(e));
	}, [h, n]), Kr = !(!Pr || ie(k) || F !== Pr.bonus.code || yr !== Pr.nextAmount), qr = Y ? n ? Xe(K) : Xe(K) && (W.hasExplicitSelection || Kr) : !!q, Jr = I(() => Y ? O(tr) : null, [Y, tr]), Yr = I(() => Y ? O(nr) : null, [Y, nr]), Xr = I(() => ({ amount: Yr }), [Yr]), Zr = q ? on(q, { amount: yr }) : 0, Qr = q ? sn(q, { amount: Yr }).length : 0, $r = ie(k) && (q ? Zr > 0 : Oe(Pe)), ei = yn && (se(k) || _(k)) && !!q && Qr > 0, ti = Cn && _(k), ni = q ? Ct({
		uiPaymentConfirmView: Fe,
		hasPendingStep: $r,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (q.notifications?.length ?? 0) > 0
	}) : null, ri = C && vn && !!q && !wn && ni?.action === "submit", ii = ri && mr && !Bn.isOutOfRange, ai = q ? Ct({
		uiPaymentConfirmView: Fe,
		hasPendingStep: $r,
		hasVisibleInlineContent: wn,
		hasConfirmOnlyContent: De(q)
	}) : null, oi = C && En && !!q && ai?.action === "submit", si = oi && mr && !Bn.isOutOfRange, ci = ri || oi, li = En || ii || si, ui = li ? J : null;
	P(() => {
		let e = Y ? Ye(K) : "", t = x ? {
			paymentTypeName: J ?? x,
			method: y,
			amount: e
		} : null;
		st((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !Et(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
				...r,
				amount: t.amount,
				values: Y ? {
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
		K,
		J,
		y,
		Y,
		x,
		st
	]), P(() => {
		let e = () => {
			Ut.current &&= (clearTimeout(Ut.current), null);
		};
		if (e(), Zn) Ut.current = setTimeout(() => {
			Ut.current = null, Jn({
				value: K,
				key: Un
			});
		}, Hr);
		else return Jn((e) => e.value === K && e.key === Un ? e : {
			value: K,
			key: Un
		}), () => {
			e();
		};
		return e;
	}, [
		K,
		Un,
		Zn
	]), P(() => {
		let e = () => {
			Wt.current &&= (clearTimeout(Wt.current), null);
		};
		if (e(), Qn) Wt.current = setTimeout(() => {
			Wt.current = null, Xn(K);
		}, Hr);
		else return Xn((e) => e === K ? e : K), () => {
			e();
		};
		return e;
	}, [K, Qn]), P(() => {
		en.current = {
			amount: K,
			amountIsOutOfRange: Bn.isOutOfRange,
			gotoPaymentType: je,
			selectedPaymentType: x,
			selectedPaymentTypeId: J,
			shouldShowBonusStep: $r,
			shouldSkipPaymentTypeSelection: In,
			isPaymentTypesUnavailable: Ln,
			isPaymentTypeSelectionMissing: Fn,
			paymentTypeSupportsAmount: Y,
			method: y
		};
	}, [
		J,
		K,
		Bn.isOutOfRange,
		je,
		x,
		$r,
		In,
		Ln,
		Fn,
		Y,
		y
	]);
	let di = N(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = en.current;
		if (o || s) return;
		let u = c ? Ye(e) : "";
		if (!(c && u.length === 0) && !(c && t)) {
			if (st((e) => {
				let t = e.initialAmount !== u, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
				return !t && !r && !i ? e : {
					...e,
					...t ? { initialAmount: u } : {},
					paymentFormDraft: null,
					comboViewFormDraft: null,
					...r ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), a && r) {
				zt(i ? { to: "/bonus" } : {
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			zt({ to: `/pts/${l}` });
		}
	}, [zt, st]), fi = N((e, t) => {
		if (!J) return;
		let n = S(e);
		if (n !== J || Ln || Fn || Y && Bn.isOutOfRange) return;
		let r = Y ? Ye($t.current) : "";
		if (!(Y && r.length === 0)) {
			if (st((e) => {
				let i = !!je && !e.hasAppliedGotoPaymentType, a = Y ? {
					...t.values,
					amount: r
				} : t.values;
				return {
					...e,
					initialAmount: r,
					comboViewFormDraft: {
						paymentTypeName: n,
						method: y,
						amount: r,
						values: a,
						hasHostedFields: t.hasHostedFields
					},
					...i ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), $r) {
				zt({ to: "/bonus" });
				return;
			}
			zt({
				to: "/pt/$id",
				params: { id: n }
			});
		}
	}, [
		J,
		Bn.isOutOfRange,
		je,
		Fn,
		Ln,
		y,
		zt,
		Y,
		st,
		$r
	]), pi = N((e, t) => {
		if (!J) return;
		let n = S(e);
		if (n !== J) return;
		let r = Y ? Ye($t.current) : "", i = {
			paymentTypeName: n,
			method: y,
			amount: r,
			values: Y ? {
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
		J,
		y,
		Y,
		st
	]), mi = N((e) => {
		if (!(n || h)) {
			if (U.current) {
				U.current = !1, Ht.current = !1, G({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			if (Ht.current && e.length === 0) {
				G({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			Ht.current = !1, U.current = !1, G({
				type: "user",
				value: e,
				markExplicitSelection: e.length > 0
			});
		}
	}, [
		n,
		h,
		G
	]), hi = N((e) => {
		if (n || h) return;
		let t = qe(e);
		Ht.current = !1, U.current = !1, Vt.current = !0, G({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		h,
		G
	]), gi = Yt?.submit, _i = !li || Zt.paymentTypeName === ui, vi = m.offers !== void 0 && m.checkoutState?.phase !== "confirmed" ? !0 : li ? !_i || !gi || hr || !gi.visible || gi.disabled : hr, yi = li && _i && gi ? gi.loading : !1, bi = N(() => {
		if (li && _i && gi) return gi.onClick();
		di();
	}, [
		gi,
		di,
		_i,
		li
	]), xi = ci || En && ai?.buttonLabel === "pay" ? _r : gr, Si = N(() => {
		bi();
	}, [bi]), Ci = I(() => [/* @__PURE__ */ z(ae, {
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
		if (n || h) return;
		let t = e.key === "," ? "." : e.key, r = Sr($t.current, t);
		Ht.current = !1, U.current = !1, G({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		h,
		G
	]), Ti = N((e) => {
		if (Kt(e), n || h || !C) {
			Ht.current = !1, U.current = !1;
			return;
		}
		if (e) {
			Xe($t.current) && (Ht.current = !0, U.current = !1);
			return;
		}
		if (Ht.current && !Xe($t.current)) {
			U.current = !0;
			return;
		}
		Ht.current = !1, U.current = !1;
	}, [
		h,
		n,
		C
	]), Ei = N((e) => {
		let t = Bt.current;
		if (!t || n || h || Wr(e.target, e.currentTarget) || Ur(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		if (r || !a) {
			if (r && !i) {
				e.preventDefault(), e.stopPropagation(), t.blur();
				return;
			}
			e.preventDefault(), e.stopPropagation(), !r && t.focus();
		}
	}, [h, n]), Di = N((e) => {
		let t = e.currentTarget.scrollTop > 1;
		Jt((e) => e === t ? e : t);
	}, []);
	tt({
		inputRef: Bt,
		inputType: "decimal",
		onType: h || !X ? void 0 : wi
	});
	let Oi = X ? "cta.enter_amount" : "payment.enter_details", ki = H(Oi), Ai = N((e) => cr(e) || e, [cr]), $ = I(() => ({
		legacyTitle: ki,
		titleKey: X ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: vr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ z(ye, {})
	}), [
		vr,
		X,
		ki
	]), ji = I(() => Q ? {
		...$,
		legacyTitle: Q,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ z(Le, {}),
		tone: "danger"
	} : null, [Q, $]), Mi = I(() => {
		if (!Pr || !ie(k) || yr !== Pr.nextAmount && br !== Pr.nextAmount || W.changeOrigin === "user" && yr !== Pr.nextAmount || F !== Pr.bonus.code) return null;
		let e = sr(Pr.nextAmount);
		return {
			...$,
			titleKey: "bonus.selected.title",
			titleValues: void 0,
			bodyKey: "bonus.selected.desc",
			bodyValues: {
				amount: e,
				method: vr
			},
			icon: /* @__PURE__ */ z(E, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ z("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: be(H("bonus.top_up.success"), { amount: sr(Pr.addedAmount) })
			})
		};
	}, [
		yr,
		W.changeOrigin,
		$,
		Pr,
		sr,
		br,
		vr,
		F,
		H,
		k
	]), Ni = I(() => nt({ translateKey: H }), [H]), Pi = I(() => Mn && (an || !_n) ? {
		...$,
		legacyTitle: H("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ z(Le, {}),
		tone: "danger"
	} : null, [
		$,
		_n,
		an,
		Mn,
		H
	]), Fi = !li || Zt.paymentTypeName === ui, Ii = !li || Zt.isComplete, Li = !!(le && ri && q && gn), Ri = (!Y || Xe(Z)) && !Bn.isOutOfRange && !Zt.errorMessage, zi = Li && q ? ft({
		amount: Z,
		bonusCode: m.offers === void 0 ? F : He(m.offers, m.selectedOfferId) ?? null,
		canSubmit: !vi,
		complete: Ri && Ii,
		currency: j,
		dirty: Z !== qe(e),
		errors: Ri ? {} : { amount: "invalid" },
		fields: (q.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: qe(e) },
		method: y,
		paymentType: q,
		submitting: yi,
		valid: Ri,
		values: { amount: Z }
	}) : null, Bi = N(() => {
		gn && ue(gn);
	}, [ue, gn]), Vi = !rn && !An && Fi, Hi = I(() => {
		let e = $, t = {
			...e,
			titleKey: n ? void 0 : e.titleKey
		};
		return An ? t : ji || (li && Zt.errorMessage ? {
			...e,
			legacyTitle: Zt.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ z(Le, {}),
			tone: "danger"
		} : Mi || (qr ? Fn ? {
			...e,
			...Qe({ translateKey: H }),
			titleValues: void 0
		} : Ii ? {
			...e,
			legacyTitle: H("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ z(Se, {})
		} : Ni : e));
	}, [
		ji,
		$,
		Mi,
		Zt.errorMessage,
		H,
		qr,
		An,
		Fn,
		Ii,
		n,
		Ni,
		li
	]), [Ui, Wi] = R(null), Gi = Ui?.methodPromptLabel === vr ? Ui.content : null, Ki = Gi?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", qi = er || rr, Ji = ji ?? (qi && !ji && !Ki ? Gi ?? Hi : Hi), Yi = I(() => dr(Ji), [dr, Ji]), Xi = I(() => ({
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
		iconSlotClassName: u($.iconSlotClassName, "opacity-0"),
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
	let Qi = Pi ?? ji, $i = !(!F || ie(k) || Pi || ji || Zi.titleKey !== "interactive_prompt.quick_payment.enter_amount.title"), ea = I(() => {
		if (!$i) return null;
		let e = $;
		return Fn ? {
			...e,
			...Qe({ translateKey: H }),
			titleValues: void 0
		} : Ii ? {
			...e,
			legacyTitle: H("interactive_prompt.quick_payment.ready.title"),
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ z(Se, {})
		} : Ni;
	}, [
		$,
		Ii,
		Fn,
		Ni,
		$i,
		H
	]), ta = $i ? ea : Zi, na = ze ? ta : Qi, ra = !!(Q && na?.preferLegacyTitle && na.legacyTitle === Q), ia = c ? void 0 : Q, aa = Ir, oa = X && mn.length > 0, sa = !oa, ca = !!(Rn?.min || Rn?.max), la = ca ? Ar : kr, ua = "gap-2", da = u("p-3", !ca && "[@container_(min-width:520px)]:py-3.5"), fa = sa && !ca, pa = _t(y, j, At, {
		amount: tr,
		fee: q?.fee,
		includeRemainingBalance: !0
	}), ma = M ? T(q?.fee, Ye(tr) || "0", {
		feeCurrencyFormatter: fr,
		formatCurrencyValue: sr
	}) : null, ha = y === t.PAYIN && M ? Ne(q?.fee, Ye(tr) || "0", j) : null, ga = (() => {
		let r = n && !q && nn.some(de);
		if (!Y && !r) return [];
		let i = n ? [{
			id: "amount",
			label: "field.amount.label",
			value: {
				value: r ? O(e) ?? 0 : Jr ?? 0,
				currency: j
			}
		}] : [];
		return r ? i : y === t.PAYOUT ? Te(pa, [...i, ma]) : i.length || ma || ha ? [
			...i,
			ma,
			ha
		].filter((e) => e !== null) : pa;
	})(), _a = ga.length > 0, va = xn && !!q, ya = _a && va && (!Y || Jr !== null && Jr > 0), ba = _a && !va, xa = I(() => zn !== null && Jr !== null && Jr > zn ? { "withdrawable-balance": "danger" } : {}, [zn, Jr]), Sa = X || oa, Ca = En && !Dn && !!x, wa = Cn, Ta = n && _n || Sa || Ca || wa || !!Yt, Ea = yn && _n, Da = Ea && A, Oa = Ea && !A, ka = C && yn && A && p > 0 ? p : 0, Aa = I(() => ka > 0 ? { paddingBottom: ka } : void 0, [ka]), ja = C && A, Ma = 2 + +!!Oa + +!!Ca + +!!wa + +!!Da, Na = 2 + +!!Oa, Pa = Na + +!!Ca, Fa = Pa + +!!wa, Ia = Q ? "danger" : "neutral", La = u(Er, !sa && !ca && "self-center", sa && "row-start-2 self-end", sa && (fa ? "pb-1.5 @md:pb-2" : "pb-2")), Ra = n ? void 0 : "cursor-pointer", za = u("min-w-0 w-full row-start-3 self-start", Dr), Ba = fa ? Rr : Lr, Va = zr;
	sa ? Va = Ba : ca && (Va = Br);
	let Ha = sa ? Ba : Vr, Ua = /* @__PURE__ */ z(w, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: ki,
		presentationTitle: V(Oi),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), Wa = Sa && ba, Ga = !A || n && ga.some((e) => e.id === "amount"), Ka = Wa ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", qa = Wa ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ja = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", Ya = o.attrs("quick-payment-summary-surface"), Xa = o.attrs("quick-payment-amount-surface"), Za = N((e, t) => {
		Qt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Qa = Ca && q ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: vt({
			index: Na,
			total: Ma,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ z(yt, {
			paymentType: q,
			selectionId: hn ?? void 0,
			amountValue: Z,
			hideAmountField: !0,
			presentedAmountError: ia,
			onActionsChange: Xt,
			onPromptStateChange: Za,
			onPreparedValues: fi,
			onValuesChange: pi,
			submitMode: ai?.submitMode,
			valueOverrides: kn,
			animateEntrance: !1
		}, hn ?? q.name)
	}) : null, $a = ei && q ? /* @__PURE__ */ z(pt, {
		placement: _(k) ? "payment-list" : "payment-form",
		paymentType: q,
		amount: nr,
		onTopUpAccepted: Gr
	}) : null, eo = ba ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": Ya["data-pc-slot"],
		className: u(Ya.className, "w-full", Wa && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ z(xt, {
			merchantElements: !0,
			summaryFields: ga,
			rowVariants: xa,
			animateEntrance: !1,
			panelBorderEdges: Wa ? "without-top" : "all",
			className: Wa ? u("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, to = ti ? /* @__PURE__ */ z(pt, {
		placement: "payment-list",
		paymentType: q,
		paymentTypes: nn,
		amount: nr,
		onTopUpAccepted: Gr
	}) : null, no = Oa ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: u("w-full", mt),
		children: /* @__PURE__ */ z(Gn, {
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
	}) : null, ro = A || !xn ? /* @__PURE__ */ z($e, {
		domScope: "quick-payment-actions",
		items: Ci,
		fixed: A,
		enabled: !Pn
	}) : null, io = ii && q ? /* @__PURE__ */ z("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ z(yt, {
			paymentType: q,
			selectionId: hn ?? void 0,
			amountValue: Z,
			hideAmountField: !0,
			presentedAmountError: ia,
			onActionsChange: Xt,
			onPromptStateChange: Za,
			onPreparedValues: fi,
			onValuesChange: pi,
			submitMode: "submit",
			valueOverrides: kn,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: Bi
		}, hn ?? q.name)
	}) : null, ao = N((e) => se(k) && sn(e, { amount: Yr }).length > 0, [
		sn,
		k,
		Yr
	]), oo = N((e) => {
		let t = S(e), n = ao(e), r = !A, i = n && r, a = !g(e);
		return /* @__PURE__ */ B("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: u("flex min-w-0 flex-col", a && "px-0.5", i ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ z(pt, {
					paymentType: e,
					amount: nr,
					onTopUpAccepted: Gr
				}),
				/* @__PURE__ */ z(yt, {
					paymentType: e,
					selectionId: t,
					amountValue: Z,
					hideAmountField: !0,
					presentedAmountError: ia,
					onActionsChange: Xt,
					onPromptStateChange: Za,
					onPreparedValues: fi,
					onValuesChange: pi,
					valueOverrides: kn,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: ai?.submitMode,
					reserveTrailingActionSpace: r && !i,
					animateEntrance: !1
				}, t),
				r && /* @__PURE__ */ z(et, {
					domScope: "quick-payment-accordion-actions",
					items: Ci,
					adaptive: !1
				})
			]
		});
	}, [
		ia,
		kn,
		fi,
		pi,
		Za,
		Gr,
		ao,
		Z,
		Ci,
		ai?.submitMode,
		A,
		nr
	]), so = N((e) => ya ? /* @__PURE__ */ z(dt, {
		summaryFields: ga,
		rowVariants: xa
	}) : null, [
		ga,
		ya,
		xa
	]), co = N((e) => s(e) || De(e) || !A || ao(e), [ao, A]), lo = N((e) => co(e) || ya, [co, ya]), uo = N((e) => {
		if (h) return;
		let t = tn(e);
		if (!t || Vn(t)) return;
		let n = S(t);
		if (Sn && J === n && lo(t)) {
			un(), gt?.(t);
			return;
		}
		ln(n, { availableBonuses: cn(t, { amount: yr }) }), ut?.(t);
	}, [
		J,
		yr,
		un,
		cn,
		tn,
		lo,
		Sn,
		h,
		Vn,
		gt,
		ut,
		ln
	]), fo = H("account.delete.title"), po = N((e) => jt && e.accountId ? /* @__PURE__ */ z(ae, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": fo,
		disabled: h,
		onClick: () => {
			fn(e);
		},
		iconOnly: !0,
		label: fo,
		leadingIcon: /* @__PURE__ */ z(Le, {})
	}) : null, [
		fo,
		h,
		fn,
		jt
	]), mo = wa && bn ? /* @__PURE__ */ z("div", {
		"data-slot": "quick-payment-payment-types",
		className: u("w-full", mt),
		style: vt({
			index: Pa,
			total: Ma,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: xn ? /* @__PURE__ */ z(bt, {
			paymentTypes: nn,
			domScope: "quick-payment",
			selectedPaymentType: x,
			onSelect: uo,
			renderActions: po,
			renderPanel: oo,
			renderFooter: so,
			hasPanel: lo,
			hasPanelBody: co,
			collapsible: Sn,
			isPaymentTypeDisabled: pr,
			interactionLocked: h,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Xr
		}) : /* @__PURE__ */ z(wt, {
			paymentTypes: nn,
			domScope: "quick-payment",
			listStyle: bn,
			selectable: !0,
			selectedPaymentType: x,
			onSelect: uo,
			renderActions: po,
			isPaymentTypeDisabled: pr,
			interactionLocked: h,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: Xr
		})
	}) : null, ho = to || mo ? /* @__PURE__ */ B("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [to, mo]
	}) : null, go = lr ? /* @__PURE__ */ B("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ z(it, {
			content: lr,
			forceVisible: !0
		}), ur]
	}) : null, _o = Qa || ho || io || go ? /* @__PURE__ */ B(Ft, { children: [
		Qa,
		ho,
		io,
		go,
		pn
	] }) : void 0, vo = !!(Qa || io || ho && Dn), yo = !!(vo || go), bo = !vo || !!Yt, xo = yo && !bo ? "protected-surface-not-ready" : vi ? "invalid-state" : void 0, So = N((e) => {
		if (e === F) return;
		let t = F ? Pe?.find((e) => e.code === F) : void 0, n = e ? Pe?.find((t) => t.code === e) : void 0;
		(!e || n) && (dn(e), t && Lt?.(t), n && It?.(n));
	}, [
		Pe,
		Lt,
		It,
		dn,
		F
	]), Co = I(() => nn.flatMap((e) => {
		let t = S(e), n = we(e), r = Ge({
			paymentType: e,
			id: t,
			label: n ? Ue(n) : Rt(e.nameKeys ?? e.name),
			currency: j,
			formatMoney: sr,
			minimumLabel: V("field.limits.min.label"),
			maximumLabel: V("field.limits.max.label"),
			selected: J === t,
			disabled: Vn(e),
			unavailable: Ie(e)
		});
		return r ? [r] : [];
	}), [
		J,
		j,
		sr,
		Vn,
		nn,
		V,
		Rt
	]), wo = I(() => (q ? sn(q, { amount: yr }) : (Pe ?? []).map((e) => ({
		bonus: e,
		status: "available",
		reasons: []
	}))).map(({ bonus: e, status: t }) => ({
		id: e.code,
		title: V(e.title),
		description: V(e.description),
		selected: e.code === F,
		available: t === "available"
	})), [
		yr,
		Pe,
		sn,
		q,
		F,
		V
	]), { createAction: To, revision: Eo } = oe({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), Do = I(() => X ? mn.map((e) => ({
		amount: Ve(e, j, sr),
		selected: Xe(Z) && Ke(e, Z) === 0,
		disabled: h || f(e, Rn, { maxBoundary: zn }).isOutOfRange
	})) : [], [
		Rn,
		j,
		sr,
		h,
		Z,
		zn,
		X,
		mn
	]), Oo = I(() => ({
		screen: "combo",
		revision: Eo,
		busy: h || yi,
		amountEntryVisible: X,
		amount: Ve(Z, j, sr),
		...Y && Q && ir ? { amountError: Be(V(ir), Q) } : {},
		method: y,
		amountLocked: n,
		amountLabel: V("field.amount.label"),
		paymentTypesLabel: V("cta.choose_payment_type"),
		continueLabel: V("cta.continue"),
		paymentTypes: Co,
		suggestedAmounts: Do,
		bonuses: wo,
		selectedBonusId: F,
		protectedSurfaceRequired: yo,
		protectedSurfaceReady: bo,
		...yo ? { protectedSurfaceLabel: V(We) } : {},
		canContinue: !vi
	}), [
		Q,
		Y,
		j,
		bo,
		yo,
		vi,
		yi,
		sr,
		h,
		n,
		y,
		wo,
		Co,
		Do,
		Z,
		V,
		Eo,
		F,
		X,
		ir
	]), ko = I(() => ({
		setAmount: To("setAmount", (e) => {
			mi(qe(e));
		}, {
			busy: h,
			validate: (e) => qe(e) === e,
			unavailableReason: n || !X ? "invalid-state" : void 0
		}),
		selectPaymentType: To("selectPaymentType", uo, {
			busy: h,
			validate: (e) => Co.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: To("selectBonus", So, {
			busy: h,
			validate: (e) => e === null || wo.some((t) => t.id === e && t.available)
		}),
		continue: To("continue", () => bi(), {
			busy: h || yi,
			unavailableReason: xo
		})
	}), [
		To,
		yi,
		uo,
		bi,
		So,
		mi,
		h,
		n,
		xo,
		wo,
		Co,
		X
	]), Ao = N((e) => /* @__PURE__ */ z("div", {
		id: o.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: Di,
		style: Aa,
		className: u(o.className("route-quick-payment"), o.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", A ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: e
	}), [
		o,
		Di,
		Aa,
		A
	]);
	return /* @__PURE__ */ B(Ft, { children: [Li && gn && /* @__PURE__ */ z(ge, {
		sourceId: gn,
		state: zi
	}), /* @__PURE__ */ z(kt, {
		isLoading: Pn,
		loaderLabel: H("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ z(ce, {
			id: "combo",
			bonusPreviewOwned: !!($a || to || Dn && q && ao(q)),
			model: Oo,
			actions: ko,
			deferPresentationUpdates: yo,
			frame: Ao,
			protectedContent: _o,
			children: (e) => /* @__PURE__ */ B(Ft, { children: [
				/* @__PURE__ */ B("div", {
					className: u("flex flex-1 flex-col items-center", ze ? jr : "justify-center"),
					children: [ze ? /* @__PURE__ */ B("div", {
						className: Mr,
						children: [
							/* @__PURE__ */ B("div", {
								"data-slot": "quick-payment-prompt-sticky-anchor",
								"data-pc-scroll-obstruction": "top",
								className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
								children: [/* @__PURE__ */ z("div", {
									role: n && ra ? "alert" : void 0,
									className: u("pointer-events-auto", Or, Er),
									style: vt({
										index: 0,
										total: Ma,
										direction: "reverse",
										baseDelayMs: 12,
										staggerMs: 24
									}),
									children: /* @__PURE__ */ B("div", {
										className: "flex flex-col gap-3",
										children: [lr && /* @__PURE__ */ z(it, {
											content: lr,
											className: aa
										}), /* @__PURE__ */ z(it, {
											content: ta,
											className: aa
										})]
									})
								}), /* @__PURE__ */ z("div", {
									"aria-hidden": "true",
									"data-slot": "quick-payment-prompt-sticky-fade",
									"data-pc-scroll-obstruction-extent": "true",
									style: xe,
									className: u("pointer-events-none absolute inset-x-0 top-full", qt ? "opacity-100" : "opacity-0")
								})]
							}),
							n && Q && !ra && /* @__PURE__ */ z(Tt, { message: Q }),
							(Ta || e.hasContent) && /* @__PURE__ */ z("div", {
								className: u(Or, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ B(Kn, {
									"data-slot": "quick-payment-surface-stack",
									className: ja ? Nr : void 0,
									children: [
										e.top,
										!ba && e.hasSummaryContent && /* @__PURE__ */ z(xt, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										Sa && /* @__PURE__ */ B("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": Xa["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Ei,
											className: u(Xa.className, "flex flex-col", Ka, qa, ua, Ja, da, la),
											children: [/* @__PURE__ */ B("div", {
												"data-slot": "quick-payment-amount-layout",
												className: Va,
												children: [
													/* @__PURE__ */ z("div", {
														"data-slot": "quick-payment-amount-title-row",
														"data-theme": Ia,
														className: u(La, Ra),
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
													/* @__PURE__ */ z("div", {
														"data-slot": "quick-payment-amount-input-row",
														className: sa ? u(za, Ra) : u("w-full", Dr, Ra),
														onMouseDown: Ei,
														style: vt({
															index: 0,
															total: Ma,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ z(Wn, {
															inputRef: Bt,
															value: K,
															onChange: mi,
															onSubmit: Si,
															onFocusChange: Ti,
															canSubmit: !vi,
															disabled: h,
															invalid: !!Q,
															limits: Rn,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: St,
															formatOptions: Dt,
															clearOnFocus: C && !h,
															animateValueChange: W.changeOrigin === "programmatic"
														})
													}),
													oa && !ca && /* @__PURE__ */ z(ot, {
														suggestions: mn,
														activeSuggestion: K,
														onSelect: hi,
														disabled: h,
														formatLabel: Ai,
														amountLimits: Rn,
														size: "xs",
														className: u("order-3", "mt-1")
													})
												]
											}), oa && ca && /* @__PURE__ */ z(ot, {
												suggestions: mn,
												activeSuggestion: K,
												onSelect: hi,
												disabled: h,
												formatLabel: Ai,
												amountLimits: Rn,
												size: "xs",
												className: u("order-3", "[@container_(min-width:520px)]:-mt-0.5")
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
					}) : /* @__PURE__ */ B("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [
							Qi && /* @__PURE__ */ z("div", {
								role: n && ra ? "alert" : void 0,
								className: u("pointer-events-auto", Or, Er),
								style: vt({
									index: 1,
									total: Ma,
									direction: "reverse"
								}),
								children: /* @__PURE__ */ z(it, {
									content: Qi,
									forceVisible: !0
								})
							}),
							n && Q && !ra && /* @__PURE__ */ z(Tt, { message: Q }),
							(Ta || e.hasContent) && /* @__PURE__ */ z("div", {
								className: u(Or, "[container-type:inline-size]", "pc-enter-rise"),
								children: /* @__PURE__ */ B(Kn, {
									"data-slot": "quick-payment-surface-stack",
									className: ja ? Nr : void 0,
									children: [
										e.top,
										!ba && e.hasSummaryContent && /* @__PURE__ */ z(xt, {
											summaryFields: [],
											merchantElements: !0,
											onlyMerchantElements: !0
										}),
										Sa && /* @__PURE__ */ B("div", {
											"data-slot": "quick-payment-amount-surface",
											"data-pc-slot": Xa["data-pc-slot"],
											"data-theme": "neutral",
											onMouseDown: Ei,
											className: u(Xa.className, "flex flex-col", Ka, qa, ua, Ja, "p-4", la, "@md:px-5 @md:py-4 @xl:py-5"),
											children: [/* @__PURE__ */ B("div", {
												"data-slot": "quick-payment-amount-layout",
												className: Ha,
												children: [/* @__PURE__ */ z("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": Ia,
													className: u(La, Ra),
													onMouseDown: Ei,
													style: vt({
														index: 0,
														total: Ma,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: Ua
												}), /* @__PURE__ */ z("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: u(sa ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", Ra),
													onMouseDown: Ei,
													children: /* @__PURE__ */ z("div", {
														className: u("w-full", Dr),
														style: vt({
															index: 0,
															total: Ma,
															direction: "reverse",
															baseDelayMs: 58,
															staggerMs: 38
														}),
														children: /* @__PURE__ */ z(Wn, {
															inputRef: Bt,
															value: K,
															onChange: mi,
															onSubmit: Si,
															onFocusChange: Ti,
															canSubmit: !vi,
															disabled: h,
															invalid: !!Q,
															limits: Rn,
															showMeta: !1,
															showDivider: !0,
															reserveEmptyLimitMetaSpace: !0,
															align: "right",
															currency: j,
															locale: St,
															formatOptions: Dt,
															clearOnFocus: C && !h,
															animateValueChange: W.changeOrigin === "programmatic"
														})
													})
												})]
											}), oa && /* @__PURE__ */ z(ot, {
												suggestions: mn,
												activeSuggestion: K,
												onSelect: hi,
												disabled: h,
												formatLabel: Ai,
												amountLimits: Rn,
												size: "xs",
												className: u(!ca && "mt-3 @md:mt-0", "order-2")
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
					}), Da && /* @__PURE__ */ z("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ z("div", {
							className: Or,
							children: /* @__PURE__ */ z(Gn, {
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
export { xr as a, br as i, Kr as n, Yn as o, Gr as r, Kn as s, qr as t };
