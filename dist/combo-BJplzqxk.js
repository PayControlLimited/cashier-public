import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { i as r, n as i, p as a } from "./CashierFullscreenLoader-DCT1ukLb.js";
import { $ as o, A as s, At as c, B as l, Ct as u, Di as d, Dn as f, Dt as p, Ei as m, En as ee, F as te, Fi as ne, Fn as re, Fr as ie, Ft as ae, H as h, I as oe, It as se, Jr as g, K as ce, Kr as le, Kt as _, L as v, Ln as ue, Mi as y, Mr as de, Mt as b, Oi as fe, On as x, Or as S, Ot as pe, P as me, Pi as C, Pr as w, Pt as he, Q as ge, Qr as T, R as E, Rt as D, St as O, Ti as _e, Tn as ve, Tt as ye, Vn as be, X as xe, Y as Se, Yr as Ce, Z as we, Zr as k, _t as Te, a as A, at as Ee, bt as De, c as Oe, cr as ke, ct as j, d as Ae, dn as je, dr as M, et as Me, f as Ne, fn as Pe, ft as Fe, g as Ie, gi as Le, ht as Re, i as ze, jt as Be, k as Ve, ki as He, kt as Ue, l as We, lr as Ge, lt as Ke, m as qe, mi as N, mn as Je, mt as Ye, n as Xe, nn as Ze, nt as Qe, o as $e, on as et, ot as tt, p as nt, pn as rt, pt as it, r as at, s as ot, st, t as ct, tt as lt, u as ut, un as dt, v as ft, vi as pt, vt as mt, wn as ht, wt as gt, x as _t, xi as vt, xt as yt, y as bt, yi as xt, yt as St, zt as Ct } from "./inlinePaymentSubmit-CmI1mVTq.js";
import * as P from "react";
import { createContext as wt, useCallback as F, useContext as Tt, useEffect as I, useImperativeHandle as L, useLayoutEffect as Et, useMemo as R, useReducer as Dt, useRef as z, useState as B } from "react";
import { Fragment as Ot, jsx as V, jsxs as H } from "react/jsx-runtime";
//#region ../../node_modules/number-flow/dist/lite-BTIaQdTe.mjs
var kt = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, U = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, At = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, W = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function jt(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function Mt(e, t, n, r) {
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
var Nt = String.raw, Pt = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), Ft = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), It = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, Lt = "--_number-flow-d-opacity", Rt = "--_number-flow-d-width", G = "--_number-flow-dx", zt = "--_number-flow-d", Bt = (() => {
	try {
		return CSS.registerProperty({
			name: Lt,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: G,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: Rt,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: zt,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), Vt = "var(--number-flow-char-height, 1em)", Ht = "var(--number-flow-mask-height, 0.25em)", Ut = `calc(${Ht} / 2)`, Wt = "var(--number-flow-mask-width, 0.5em)", K = `calc(${Wt} / var(--scale-x))`, Gt = "#000 0, transparent 71%", q = Nt`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Vt} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Rt}) / var(--width));transform:translateX(var(${G})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Wt});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${K},#000 calc(100% - ${K}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${Ht},#000 calc(100% - ${Ht}),transparent 100% ),radial-gradient(at bottom right,${Gt}),radial-gradient(at bottom left,${Gt}),radial-gradient(at top left,${Gt}),radial-gradient(at top right,${Gt});-webkit-mask-size:100% calc(100% - ${Ht} * 2),calc(100% - ${K} * 2) 100%,${K} ${Ht},${K} ${Ht},${K} ${Ht},${K} ${Ht};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Ut} ${Wt};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${G})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${zt})}.digit__num,.number .section::after{padding:${Ut} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${Lt}))}`, Kt = HTMLElement;
Nt`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${Vt} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${Ut} 0}.symbol{white-space:pre}`;
var qt = Ft && Pt && Bt, Jt, Yt = class extends Kt {
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
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = qt && this._animated && (!this.respectMotionPreference || !(It != null && It.matches)) && At(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) Jt || (Jt = new CSSStyleSheet(), Jt.replaceSync(q)), this.shadowRoot.adoptedStyleSheets = [Jt];
			else {
				let e = document.createElement("style");
				e.textContent = q, this.shadowRoot.appendChild(e);
			}
			this._pre = new $t(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new Xt(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new $t(this, a, {
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
Yt.defaultProps = {
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
var Xt = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new Qt(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new Qt(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = kt("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = kt("span", {
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
			[G]: [`${t}px`, "0px"],
			[Rt]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, Zt = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = kt("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new nn(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new rn(this, e.type, e.value, {
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
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${U(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (jt(e, (e) => {
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
}, Qt = class extends Zt {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof nn && e.update(0);
		}), this.pop(t);
	}
}, $t = class extends Zt {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, en = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [Lt]: [-.9999, 0] }, {
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
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [Lt]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, tn = class extends en {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, nn = class extends tn {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = kt("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = kt("span", {
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
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [zt]: [-o, 0] }, {
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
}, rn = class extends tn {
	constructor(e, t, n, r) {
		let i = kt("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, kt("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new en(this.flow, i, { onRemove: this._onChildRemove(n) }));
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
				let t = kt("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new en(this.flow, t, {
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
}, an = parseInt(P.version.match(/^(\d+)\./)?.[1]) >= 19, on = ["data", "digits"], sn = class extends Yt {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
sn.observedAttributes = an ? [] : on, W("number-flow-react", sn);
var J = {}, cn = an ? (e) => e : JSON.stringify;
function ln(e) {
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
var Y = class extends P.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = ln(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? sn.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), an && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = ln(this.props);
		return /*#__PURE__*/ P.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: cn(s),
			data: cn(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, un = /*#__PURE__*/ P.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	P.useImperativeHandle(o, () => s.current, []);
	let s = P.useRef(), c = P.useContext(dn);
	c?.useRegister(s);
	let l = P.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = P.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = P.useMemo(() => Mt(e, J[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ P.createElement(Y, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), dn = /*#__PURE__*/ P.createContext(void 0), fn = (e) => e.length > 0 ? e : "";
function pn(e) {
	return typeof e == "object" && !!e;
}
var mn = (e, t, n) => e && e !== t ? e : n, hn = .747, gn = (e) => Number((e * hn).toFixed(3)), X = (e) => ({
	min: gn(e.min),
	max: gn(e.max)
}), _n = gn(.8), vn = {
	base: X({
		min: 1.05,
		max: 3.25
	}),
	md: X({
		min: 1.24,
		max: 3.8
	}),
	xl: X({
		min: 1.42,
		max: 4.36
	})
}, yn = {
	min: vn.base.min,
	max: vn.base.max
}, bn = vn.base.max, Z = .75, Q = [
	"text-[length:var(--pc-font-input-meta-size,0.75rem)]",
	"leading-[var(--pc-font-input-meta-line-height,1rem)]",
	"[font-weight:var(--pc-font-input-meta-weight,400)]",
	"[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]",
	"[font-style:var(--pc-font-input-meta-style,inherit)]",
	"[text-transform:var(--pc-font-input-meta-text-transform,inherit)]",
	"@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]",
	"@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]"
].join(" "), xn = {
	md: 448,
	xl: 560
}, Sn = "min(6ch, 100%)", Cn = gn(60), wn = 24, Tn = "cubic-bezier(0.2, 0.8, 0.2, 1)", En = .01, Dn = "0em", On = {
	transformTiming: {
		duration: 450,
		easing: Tn
	},
	spinTiming: {
		duration: 480,
		easing: Tn
	},
	opacityTiming: {
		duration: 300,
		easing: Tn
	}
}, kn = (e) => ({
	renderedValue: e,
	pendingValue: null
}), An = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, jn = (e, t) => {
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
	}, An(e, a) ? e : a;
}, Mn = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, Nn = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, Pn = (e) => {
	if (!e) return 0;
	let t = Nn(e);
	return t ? t.clientWidth : e.clientWidth;
}, Fn = (e) => {
	if (!e) return null;
	let t = Nn(e);
	return t && t !== e ? t : e.parentElement;
}, In = (e) => {
	if (!e) return {
		bounds: yn,
		growthFactor: _n
	};
	let t = Pn(e) || e.clientWidth, n = vn.base;
	return t >= xn.xl ? n = vn.xl : t >= xn.md && (n = vn.md), {
		bounds: Mn(n),
		growthFactor: Math.max(0, _n)
	};
}, Ln = (e, t, n = _n) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / bn, c = o * n * s, l = Cn / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function Rn({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: s, formatOptions: l, clearOnFocus: u = !1, errorMessage: d, invalid: f = !1, limits: m, reserveErrorSpace: ee = !1, showMeta: te = !0, showDivider: ne = !0, reserveEmptyLimitMetaSpace: re = !0, align: ie = "center", animateValueChange: ae = !1, disabled: h = !1, onFocusChange: oe }) {
	let se = k(), { translateKey: g } = de(), [ce, le] = B(!1), _ = z(null), v = z(null), ue = z(null), y = z(!1), b = z(!1), fe = z(e), x = pn(a) ? a : null, S = F((e) => {
		_.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	L(x, () => _.current), I(() => {
		y.current && e.length !== 0 && (b.current = !0);
	}, [e]);
	let pe = F(() => {
		!u || e.length === 0 || y.current || (fe.current = e, y.current = !0, b.current = !1, t(""));
	}, [
		u,
		t,
		e
	]), me = F(() => {
		h || (le(!0), oe?.(!0), pe());
	}, [
		h,
		oe,
		pe
	]), w = F(() => {
		if (le(!1), oe?.(!1), !u || !y.current) return;
		let n = !b.current && e.length === 0;
		y.current = !1, b.current = !1, n && t(fe.current);
	}, [
		u,
		t,
		oe,
		e.length
	]), he = F(() => {
		h || pe();
	}, [h, pe]), ge = F((n) => {
		h || (y.current && (b.current = !0), t(p(e, n.target.value)));
	}, [
		h,
		t,
		e
	]), T = R(() => fn(e), [e]), E = R(() => {
		if (!T) return null;
		let e = Number(T);
		return Number.isFinite(e) ? e : null;
	}, [T]), { currencyFormatter: D } = Ke(o, s, l), O = R(() => D ? T ? E === null ? T : D.format(E) : "" : T, [
		D,
		T,
		E
	]), _e = m?.min ?? "", ve = m?.max ?? "", ye = _e ? j(_e, D, void 0, s) || _e : "", be = ve ? j(ve, D, void 0, s) || ve : "", xe = !!(ye || be), Se = R(() => {
		if (!D || typeof D.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = D.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: D.currencyCodeSuffix || void 0
		};
	}, [D]), Ce = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [we, Te] = Dt(jn, E, kn);
	I(() => {
		Te({
			type: "sync",
			numericValue: E,
			defer: ae && ce && E !== null,
			preserveRendered: E === null && y.current && !b.current
		});
	}, [
		ae,
		ce,
		E
	]);
	let A = R(() => {
		let e = [T, O].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [T, O]) || "0", [Ee, De] = B(() => Ln(A, yn)), [Oe, ke] = B(bn * Z), Ae = z(Ee), je = z(Oe);
	I(() => {
		Ae.current = Ee;
	}, [Ee]), I(() => {
		je.current = Oe;
	}, [Oe]), Et(() => {
		let e = v.current, t = ue.current;
		if (!e || !t) return;
		let n = Fn(e), r = () => {
			let { bounds: n, growthFactor: r } = In(e), i = n.max * Z;
			Math.abs(je.current - i) >= En && (je.current = i, ke(i));
			let a = Math.max(e.clientWidth - wn, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = Ln(A, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Ae.current - u) < En || (Ae.current = u, De(u));
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
	}, [A]);
	let M = `${Ee.toFixed(2)}rem`, Me = Z, Ne = `${Oe.toFixed(2)}rem`, Pe = F((e) => {
		e.key === "Enter" && (e.preventDefault(), !h && i && r?.());
	}, [
		i,
		h,
		r
	]), Fe = !!Se && we.renderedValue !== null && Ce, Ie = Fe ? we.renderedValue : void 0, Le = !!O || Fe, Re = !!O && !ce, ze = g("field.amount.label"), Be = mn(g("field.limits.min.label"), "field.limits.min.label", "Min"), Ve = mn(g("field.limits.max.label"), "field.limits.max.label", "Max"), He = se.id("amount-input"), Ue = !!d || ee, We = te && (!!n || Ue), Ge = f || !!d, qe = c(e, m), N = Ge ? "danger" : "neutral", Je = qe.isOutOfRange && Ge ? "danger" : void 0, Ye = ne && xe, Xe = "opacity-0";
	Re && (Xe = h ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let Ze;
	h || (Ze = ce ? "cursor-pointer opacity-85" : "cursor-pointer");
	let Qe = se.attrs("amount-section"), $e = se.attrs("amount-content"), et = se.attrs("amount-input");
	return /* @__PURE__ */ V("div", {
		id: se.id("amount-section"),
		...Qe,
		className: [Qe.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ H("div", {
			...$e,
			className: [$e.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ V("label", {
					className: "sr-only",
					htmlFor: He,
					children: ze
				}),
				/* @__PURE__ */ V("div", {
					"data-theme": N,
					className: C(Ye && "border-b border-[var(--pc-color-depth-4)]", Ye && "pb-0.5", !h && "group"),
					children: /* @__PURE__ */ V("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ V("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ H("div", {
								className: C("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: v,
								style: {
									minHeight: Ne,
									height: Ne
								},
								children: [
									/* @__PURE__ */ V("span", {
										"aria-hidden": !0,
										ref: ue,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Me
										},
										children: A
									}),
									/* @__PURE__ */ V("input", {
										id: He,
										...et,
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
										"aria-invalid": Ge,
										ref: S,
										onChange: ge,
										onKeyDown: Pe,
										onFocus: me,
										onBlur: w,
										onClick: he,
										className: C(et.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", Ze),
										style: {
											fontSize: M,
											lineHeight: Me,
											width: "100%",
											maxWidth: "100%",
											minWidth: Sn,
											color: Re ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Dn})`
										}
									}),
									Le && /* @__PURE__ */ V("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											Xe,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: M,
											lineHeight: Me,
											width: "100%",
											maxWidth: "100%",
											minWidth: Sn,
											transform: `translateY(${Dn})`
										},
										children: Fe ? /* @__PURE__ */ V(un, {
											value: Ie,
											locales: Se?.locales,
											format: Se?.format,
											suffix: Se?.suffix,
											animated: ae,
											transformTiming: On.transformTiming,
											spinTiming: On.spinTiming,
											opacityTiming: On.opacityTiming,
											respectMotionPreference: !0
										}) : O
									})
								]
							})
						})
					})
				}),
				xe && /* @__PURE__ */ H("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						Q
					].join(" "),
					children: [/* @__PURE__ */ V("div", {
						"data-theme": Je,
						className: C("min-w-0 text-left", Je && "text-[var(--pc-color-text)]"),
						children: ye ? /* @__PURE__ */ H("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ H("span", { children: [Be, ":"] }), /* @__PURE__ */ V("span", {
								className: "truncate",
								children: ye
							})]
						}) : null
					}), /* @__PURE__ */ V("div", {
						"data-theme": Je,
						className: C("min-w-0 text-right", Je && "text-[var(--pc-color-text)]"),
						children: be ? /* @__PURE__ */ H("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ H("span", { children: [Ve, ":"] }), /* @__PURE__ */ V("span", {
								className: "truncate",
								children: be
							})]
						}) : null
					})]
				}),
				We && /* @__PURE__ */ H("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ V("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Ue && /* @__PURE__ */ V("div", {
						"data-theme": "danger",
						className: "h-5 text-[var(--pc-color-text)] truncate",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: d ?? ""
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/PaymentTypePicker.tsx
function zn({ animationStyle: t, bonusEvaluationContext: n, floating: r = !0 }) {
	let i = re(), a = k(), { uiComboView: o, uiComboView__PaymentTypes: s, onPaymentTypeSelected: c, uiAccountDelete: l } = Tt(T), { translateKey: u } = de(), { paymentTypesList: d } = we(), { getBonusCountForPaymentType: p, getAvailableBonusesForPaymentType: m } = xe(), { selectedPaymentType: te, selectPaymentType: ne, ensureDefaultSelection: ie } = ce(), { requestAccountDelete: ae, actionConfirmationModal: h } = Oe();
	I(() => {
		!o || !O(s) || ie(d);
	}, [
		ie,
		d,
		o,
		s
	]);
	let se = d.length > 0, g = d.length > 1, le = o && O(s) && g && !i, _ = R(() => x(d, te), [d, te]), v = R(() => _ ? ht(_) : null, [_]), ue = R(() => {
		if (!_) return null;
		let e = p(_, n), t = ee(_);
		return e > 0 ? /* @__PURE__ */ V(Ae, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		n,
		p,
		_
	]), b = u("cta.choose_payment_type"), fe = u("cta.interactive_prompt.choose_payment_type.title"), S = u("account.delete.title"), pe = _?.name ?? "cta.choose_payment_type", me = _ ? ee(_) : pe, w = F((e, t) => {
		if (i) return;
		let n = x(d, e);
		n && !f(n) && (ne(ee(n), { availableBonuses: m(n) }), c && c(n)), t();
	}, [
		m,
		i,
		c,
		d,
		ne
	]), he = F((e) => l && e.accountId ? /* @__PURE__ */ V(y, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": S,
		disabled: i,
		onClick: () => {
			ae(e);
		},
		iconOnly: !0,
		label: S,
		leadingIcon: /* @__PURE__ */ V(vt, {})
	}) : null, [
		S,
		i,
		ae,
		l
	]);
	return /* @__PURE__ */ V(ot, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ V(lt, { children: b }),
		triggerLabel: b,
		canOpen: le,
		shouldRender: o && O(s) && se,
		animationStyle: t,
		floating: r,
		actionContent: h,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ V($e, {
			domSlug: me,
			name: pe,
			presentationPaymentType: _ ?? void 0,
			nameKeys: _?.nameKeys,
			logo: _?.logo,
			logoContent: _ ? void 0 : oe("h-full w-full"),
			limits: _?.limits,
			fee: _?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: ue,
			title: v ?? void 0,
			interactive: !1,
			isDisabled: i,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: le ? /* @__PURE__ */ V(A, { children: /* @__PURE__ */ V(y, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": fe,
				disabled: i,
				onClick: e,
				leadingIcon: /* @__PURE__ */ V(N, {}),
				label: fe
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = a.attrs("payment-type-picker-list");
			return /* @__PURE__ */ V("div", {
				id: n,
				...r,
				className: C(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ V(ut, {
					paymentTypes: d,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						w(e, t);
					},
					interactionLocked: i,
					renderActions: he,
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
function Bn({ className: e, ...t }) {
	return /* @__PURE__ */ V("div", {
		...t,
		className: C("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var Vn = wt({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), Hn = () => Tt(Vn);
function Un({ children: e }) {
	let [t, n] = B(() => /* @__PURE__ */ new Set()), r = F((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = F((e) => e ? t.has(e) : !1, [t]), a = R(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ V(Vn.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function Wn() {
	return /* @__PURE__ */ H("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ V("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ V("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ V("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/utils/pendingWithdrawalDisplay.ts
var Gn = (e, t, n) => [n(ve(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), Kn = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function qn({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = de(), c = z(null);
	return I(() => {
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
	}, [a, o]), /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let o = t(e), l = Gn(e, n, s), u = [o, l].filter(Boolean).join(", ");
			return /* @__PURE__ */ V("button", {
				ref: e.paymentId === a ? c : void 0,
				type: "button",
				className: Kn,
				"aria-label": u || void 0,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ H("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ V("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: o
					}), l && /* @__PURE__ */ V("span", {
						className: C("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: l
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawals.ts
var Jn = 1, Yn = 100, Xn = /* @__PURE__ */ new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), Zn = (e) => {
	if (!e) return null;
	let t = Number(e.value);
	if (typeof e.currency != "string") return null;
	let n = e.currency.trim().toUpperCase();
	return !Number.isFinite(t) || !n ? null : {
		value: t,
		currency: n
	};
}, Qn = (e) => {
	if (!Xn.has(e.subStatus)) return null;
	let t = Zn(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, $n = (e) => (e ?? []).flatMap((e) => {
	let t = Qn(e);
	return t ? [t] : [];
}), er = async (e, t) => {
	let { data: n, error: r } = await ie({
		client: t,
		query: {
			...e,
			method: "payout",
			page: Jn,
			pageSize: Yn
		},
		cache: "no-store"
	});
	if (r) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: $n(n?.payments),
		totalItems: n?.totalItems ?? 0,
		totalPages: n?.totalPages ?? 0,
		currentPage: n?.currentPage ?? Jn,
		pageSize: n?.pageSize ?? Yn
	};
}, tr = async ({ client: e, merchantId: t, userId: n, sessionId: r, paymentId: i }) => {
	let { data: a, error: o } = await w({
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
}, nr = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
	e.paymentId,
	e.amountValue,
	e.amountCurrency,
	e.subStatus
].join(":"))].join("|"), rr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.amountCurrency, (t.get(n.amountCurrency) ?? 0) + n.amountValue);
	return [...t].map(([e, t]) => ({
		currency: e,
		amount: t
	}));
}, ir = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], ar = (e, t, n = !0) => ({
	queryKey: ir(e),
	queryFn: () => er(e, t),
	enabled: n && !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 6e4,
	gcTime: 6e5
}), or = wt({
	interactivePromptContent: null,
	pendingWithdrawalDrawer: null,
	attachSuccessFooter: (e) => e
}), sr = "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]", cr = {
	isDrawerOpen: !1,
	selectedPaymentId: null,
	cancellingPaymentId: null,
	cancellationState: null
}, lr = (e) => ({
	baselinePaymentIds: e.map((e) => e.paymentId),
	cancelledPayments: []
}), ur = (e, t) => {
	let n = e.cancelledPayments.map((e) => e.paymentId), r = e.baselinePaymentIds.filter((e) => !n.includes(e));
	if (t.length === 0) return r.length === 0 && e.cancelledPayments.length > 0;
	let i = t.map((e) => e.paymentId), a = new Set(r);
	return i.length === a.size && i.every((e) => a.has(e));
}, dr = (e, t) => {
	switch (t.type) {
		case "reset": return cr;
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
			if (!t.featureEnabled) return cr;
			let n = e.cancellationState === null ? t.pendingWithdrawals.length > 0 ? lr(t.pendingWithdrawals) : null : ur(e.cancellationState, t.pendingWithdrawals) ? e.cancellationState : t.pendingWithdrawals.length > 0 ? lr(t.pendingWithdrawals) : null, r = t.pendingWithdrawals.length > 1 && e.isDrawerOpen, i = e.selectedPaymentId && t.pendingWithdrawals.some((t) => t.paymentId === e.selectedPaymentId) ? e.selectedPaymentId : null;
			return r === e.isDrawerOpen && i === e.selectedPaymentId && n === e.cancellationState ? e : {
				...e,
				isDrawerOpen: r,
				selectedPaymentId: i,
				cancellationState: n
			};
		}
		case "record-success": {
			let n = e.cancellationState ?? lr(t.pendingWithdrawals);
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
}, fr = ({ pendingWithdrawals: e, activePendingWithdrawal: t, isPaymentInteractionLocked: n, isCancelling: r, isDrawerOpen: i, onDismiss: a, onCancel: o, onView: s, formatPendingWithdrawalAmount: c, formatPendingWithdrawalTotals: l, successFooter: u }) => {
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
		icon: /* @__PURE__ */ V(Wn, {}),
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
}, pr = ({ successFooter: e }) => e ? {
	legacyTitle: "Nice!",
	titleKey: "pending_withdrawal.cancel.confirmed.title",
	legacyBody: "Your pending withdrawal has been cancelled.",
	bodyKey: "pending_withdrawal.cancel.confirmed.desc",
	icon: /* @__PURE__ */ V(Wn, {}),
	tone: "secondary",
	footer: e
} : null, mr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ H(Ot, { children: [l.length > 1 && /* @__PURE__ */ V(S, {
	isOpen: i && !r,
	onClose: s,
	title: u,
	children: /* @__PURE__ */ V(qn, {
		pendingWithdrawals: l,
		formatPendingWithdrawalAmount: n,
		formatDisplayValue: t,
		onSelect: c,
		isDisabled: a,
		focusPaymentId: o,
		isFocusRestoreActive: i && !r
	})
}), e] });
function hr({ children: e }) {
	let r = be(), i = re(), a = Tt(T), { merchantId: o, userId: s, sessionId: c, debug: l, locale: u, currencyFormatOptions: d, method: f, lockAmount: p, uiInteractivePrompts: m, uiSuggestAction: ee, onPendingWithdrawalCancelled: te } = a, ne = a.uiCancelPendingPayout === !0, { translateKey: ie, translateKeys: ae } = de(), { formatDisplayValue: h } = Ee(), oe = R(() => {
		try {
			return new Intl.ListFormat(u, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [u]), { dismissPrompt: se, isPromptDismissed: g } = Hn(), ce = M(), [le, v] = Dt(dr, cr), { isDrawerOpen: y, selectedPaymentId: b, cancellingPaymentId: fe, cancellationState: x } = le, S = f === t.PAYIN && !p && m && ne && ee.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(o && s && c), pe = R(() => ({
		merchantId: o,
		userId: s,
		sessionId: c
	}), [
		o,
		c,
		s
	]), me = R(() => ir(pe), [pe]), { data: C } = Ge(ar(pe, r, S)), w = R(() => C?.payments ?? [], [C?.payments]), he = R(() => {
		let e = /* @__PURE__ */ new Map(), t = [...w, ...x?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, tt(n.amountCurrency, u, d));
		return e;
	}, [
		x?.cancelledPayments,
		d,
		u,
		w
	]), ge = F((e) => st(e.amountValue, he.get(e.amountCurrency)), [he]), E = F((e) => {
		let t = e.map((e) => st(e.amount, he.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : oe?.format(t) ?? t.join(", ");
	}, [oe, he]), D = F((e) => E(rr(e)), [E]), O = R(() => nr(w), [w]), _e = g(O), ve = w.length === 1 ? w[0] : w.at(0) ?? null, { openActionConfirmation: ye, actionConfirmationModal: xe, isActionConfirmationOpen: Se, closeActionConfirmation: Ce } = We({ isConfirmDisabled: i });
	I(() => {
		v({ type: "reset" }), Ce();
	}, [
		Ce,
		S,
		o,
		c,
		s
	]), I(() => {
		_e && v({ type: "dismiss" });
	}, [_e]), I(() => {
		v({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: w,
			featureEnabled: S
		});
	}, [S, w]), I(() => {
		i && (v({ type: "close-drawer" }), Ce());
	}, [Ce, i]);
	let { mutateAsync: we, isPending: k } = ke({
		mutationFn: async (e) => await tr({
			client: r,
			merchantId: o,
			userId: s,
			sessionId: c,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = w.filter((e) => e.paymentId !== t.paymentId);
			await ce.invalidateQueries({ queryKey: me });
			try {
				n = (await ce.fetchQuery(ar(pe, r, !0))).payments;
			} catch {}
			let i = n.length, a = rr(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			v({
				type: "record-success",
				payment: t,
				pendingWithdrawals: w
			}), ue({
				callback: te,
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
	}), Te = F(() => {
		i || !O || se(O);
	}, [
		O,
		se,
		i
	]), A = F((e) => {
		if (k || i) return;
		let t = ge(e), n = Gn(e, h, ae);
		ye({
			title: ae(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ H("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ V("p", { children: _(ae(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ V("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: n
				})]
			}),
			confirmLabel: ae(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: ie("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				v({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await we(e);
			}
		});
	}, [
		we,
		h,
		ge,
		k,
		i,
		ye,
		ie,
		ae
	]), De = F(() => {
		ve !== null && A(ve);
	}, [ve, A]), Oe = F((e) => {
		v({
			type: "select-payment",
			paymentId: e.paymentId
		}), A(e);
	}, [A]), j = F(() => {
		k || i || w.length <= 1 || v({ type: "open-drawer" });
	}, [
		k,
		i,
		w.length
	]), Ae = F(() => {
		k || v({ type: "close-drawer" });
	}, [k]), je = R(() => {
		if (!x || x.cancelledPayments.length === 0) return null;
		let e = rr(x.cancelledPayments);
		return /* @__PURE__ */ V("p", {
			className: sr,
			children: _(ie("pending_withdrawal.cancel.success"), { amount: E(e) })
		});
	}, [
		x,
		E,
		ie
	]), Me = R(() => !S || _e ? null : ve ? fr({
		pendingWithdrawals: w,
		activePendingWithdrawal: ve,
		isPaymentInteractionLocked: i,
		isCancelling: k,
		isDrawerOpen: y,
		onDismiss: Te,
		onCancel: De,
		onView: j,
		formatPendingWithdrawalAmount: ge,
		formatPendingWithdrawalTotals: D,
		successFooter: je
	}) : pr({ successFooter: je }), [
		ve,
		S,
		ge,
		D,
		De,
		Te,
		j,
		k,
		i,
		y,
		_e,
		w,
		je
	]), Ne = R(() => S ? /* @__PURE__ */ V(mr, {
		actionConfirmationModal: xe,
		formatDisplayValue: h,
		formatPendingWithdrawalAmount: ge,
		isActionConfirmationOpen: Se,
		isDrawerOpen: y,
		isSelectionDisabled: i || k || fe !== null,
		onClose: Ae,
		onSelect: Oe,
		pendingWithdrawals: w,
		selectedPaymentId: b,
		title: ie("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		xe,
		fe,
		S,
		h,
		ge,
		Ae,
		Oe,
		k,
		Se,
		i,
		y,
		w,
		b,
		ie
	]), Pe = F((e) => e, []), Fe = R(() => ({
		interactivePromptContent: Me,
		pendingWithdrawalDrawer: Ne,
		attachSuccessFooter: Pe
	}), [
		Pe,
		Me,
		Ne
	]);
	return /* @__PURE__ */ V(or.Provider, {
		value: Fe,
		children: e
	});
}
var gr = () => Tt(or), _r = (e, t) => t === "Backspace" ? e.length === 0 ? e : He(e.slice(0, -1)) : He(`${e}${t}`), vr = (e) => ({
	value: He(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), yr = (e, t) => {
	let n = He(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, br = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", xr = "pc-enter-drift-item", Sr = "pc-enter-lift-item", Cr = g, wr = "min-h-[27cqw] @md:min-h-[27cqw]", Tr = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", Er = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", Dr = "flex w-full flex-col items-center gap-2 @md:gap-3", Or = "pb-3 @md:pb-4", kr = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"[role=\"button\"]",
	"[contenteditable=\"true\"]"
].join(","), Ar = ["[data-amount-focus-excluded=\"true\"]"].join(","), jr = "[@container_(max-width:620px)]:pl-1.5", Mr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.7fr)_auto_auto_minmax(0,1fr)] text-center", Nr = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.45fr)_auto_auto_minmax(0,1fr)] text-center", Pr = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-4 [@container_(min-width:520px)]:gap-[1.125rem] text-center", Fr = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-3 text-center", Ir = "flex min-w-0 w-full flex-1 flex-col items-center justify-center gap-3 text-center [@container_(max-width:500px)]:[&&]:items-stretch", Lr = 650, Rr = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(kr);
	return !!(n && t.contains(n));
}, zr = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(Ar);
	return !!(n && t.contains(n));
}, Br = (e) => {
	let t = Fe(e);
	if (t !== "/combo") throw a({
		to: t,
		replace: !0
	});
}, Vr = r("/combo/")({
	beforeLoad: ({ context: e }) => {
		Br(e);
	},
	component: Hr
});
function Hr() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, method: r, gotoPaymentType: i, bonuses: a, uiBonuses: o, uiBonusesStyle: s } = Tt(T), c = ne(), l = R(() => Fe({
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
	return I(() => {
		l !== "/combo" && c({
			to: l,
			replace: !0
		});
	}, [c, l]), l === "/combo" ? /* @__PURE__ */ V(Ur, {
		initialAmount: e,
		lockAmount: t
	}) : null;
}
function Ur({ initialAmount: e, lockAmount: n }) {
	let r = k(), { contentInset: a } = le(), p = re(), { isSubscribed: ie, publishInactive: oe } = bt(), { method: g, uiSuggestAmounts: ue, selectedPaymentType: x, uiComboView: S, uiComboView__PaymentTypes: w, uiComboView__PaymentForm: ve, gotoPaymentType: be, bonuses: A, uiPaymentConfirmView: ke, uiBonusesStyle: j, uiInteractivePrompts: Ae, uiFixedControls: M, hasAppliedGotoPaymentType: Fe, setCashierState: We, onPaymentTypeSelected: Ge, onPaymentTypeDeselected: Ke, currency: N, locale: $e, currencyFormatOptions: tt, resetFlowOnBack: ot, user: st, uiShowFees: lt, uiAccountDelete: P, paymentFormDraft: wt, selectedBonusCode: L, onBonusSelected: Et, onBonusDeselected: kt } = Tt(T), { resolveTextKey: U, resolveTextKeys: At, translateKey: W } = de(), jt = ne(), Mt = z(null), Nt = z(!1), Pt = z(!1), Ft = z(!1), It = z(null), Lt = z(null), [Rt, G] = Dt(yr, e, vr), [zt, Bt] = B(!1), [Vt, Ht] = B(!1), [Ut, Wt] = B(null), [K, Gt] = B({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), q = Rt.value, Kt = z(q), qt = z({
		amount: q,
		amountIsOutOfRange: !1,
		gotoPaymentType: be,
		selectedPaymentType: x,
		selectedPaymentTypeId: x,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: g
	}), { getPaymentType: Jt, paymentTypesList: Yt, isLoading: Xt, isError: Zt } = we(), { getBonusCountForPaymentType: Qt, getBonusAvailabilityForPaymentType: $t, getAvailableBonusesForPaymentType: en } = xe(), { selectPaymentType: tn, clearPaymentSelection: nn } = ce(), { selectBonusCode: rn } = Se(), { requestAccountDelete: an, actionConfirmationModal: on } = Oe();
	I(() => {
		Kt.current = q;
	}, [q]), I(() => {
		Pt.current = !1, Ft.current = !1, G({
			type: "sync-external",
			value: e
		});
	}, [e]), I(() => {
		ot && We((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [ot, We]), I(() => {
		Nt.current && (Nt.current = !1, Mt.current?.blur());
	}, [q]);
	let sn = R(() => fe(ue), [ue]), J = R(() => x ? Jt(x) : null, [Jt, x]), cn = J ? ee(J) : null, ln = cn ? `quick-payment-form:${cn}` : null, Y = cn ?? x, un = Yt.length > 0, dn = S && u(w), fn = S && O(w), pn = S ? ye({
		mode: w,
		paymentFormEnabled: ve
	}) : null, mn = Te(pn), hn = yt(pn), gn = !!(pn && un), X = S && dn && J && J ? gt(J) : !0, _n = !!(J && it(J)), vn = !!(J && (_n || Re(J))), yn = !!(S && dn && ve && J && vn && (!pn || mn)), bn = mn && yn, Z = X, Q = X ? q : "", xn = x && s(wt, {
		paymentTypeName: Y ?? x,
		method: g,
		amount: Q
	}) ? wt : null, Sn = R(() => ({
		...xn?.values ?? {},
		amount: Q
	}), [xn?.values, Q]), Cn = X && m(q) && !!x && !J && Xt && !Zt, wn = !!be && !Fe, Tn = dn, En = !!(J && f(J)), Dn = Tn && Xt && !Zt && !un && !x, On = Tn && !J || En, kn = S && !!x && (dn || wn), An = !un || Xt || Zt, jn = J?.limits, Mn = Be(g, st, J?.fee), Nn = c(Q, jn, { maxBoundary: Mn }), Pn = F((e) => f(e) ? !0 : !gt(e) || !m(q) ? !1 : c(q, e.limits, { maxBoundary: Be(g, st, e.fee) }).isOutOfRange, [
		q,
		g,
		st
	]), Fn = Ue(Q, jn, { maxBoundary: Mn }), In = Fn?.key, [Ln, Vn] = B(() => ({
		value: q,
		key: In
	})), [Hn, Un] = B(q), Wn = X && zt && Rt.changeOrigin === "user" && !!In && Ln.key === void 0, Gn = X && zt && Rt.changeOrigin === "user", Kn = Ln.value === q && Ln.key === In, qn = Gn && Hn !== q, Jn = X ? qn ? Hn : q : "", Yn = br({
		livePaymentAmount: Q,
		paymentTypeSupportsAmount: X,
		visiblePaymentSummaryAmount: Jn
	}), Xn = Wn && !Kn, Zn = In;
	Xn && (Zn = void 0);
	let Qn = Zn ? Fn : void 0, { currencyFormatter: $n, formatCurrencyValue: er, formatDisplayValue: tr } = Ee(), { interactivePromptContent: nr, pendingWithdrawalDrawer: rr, attachSuccessFooter: ir } = gr(), ar = R(() => he($n), [$n]), or = pe(Qn, W, er), sr = F((e) => f(e) ? !0 : !Xn && Pn(e), [Xn, Pn]), cr = X ? m(q) : !!J, lr = p || X && !m(q) || X && Nn.isOutOfRange || An || On, ur = W("cta.continue"), dr = W(g === t.PAYOUT ? "cta.payout" : "cta.payin"), fr = dr.toLocaleLowerCase($e), pr = R(() => X ? b(q) : null, [q, X]), mr = R(() => b(e), [e]), [hr, kr] = B(null), Ar = F((e) => {
		G({
			type: "sync-external",
			value: E(e.nextAmount)
		}), kr(e);
	}, []), Br = !!(hr && !mt(j) && L === hr.bonus.code && pr === hr.nextAmount), Vr = X ? n ? m(q) : m(q) && (Rt.hasExplicitSelection || Br) : !!J, Hr = R(() => X ? b(Jn) : null, [X, Jn]), Ur = R(() => X ? b(Yn) : null, [X, Yn]), Wr = R(() => ({ amount: Ur }), [Ur]), Gr = J ? Qt(J, { amount: pr }) : 0, Kr = J ? $t(J, { amount: Ur }).length : 0, qr = mt(j) && (J ? Gr > 0 : Ct(A)), Jr = fn && (St(j) || De(j)) && !!J && Kr > 0, Yr = gn && De(j), Xr = J ? ct({
		uiPaymentConfirmView: ke,
		hasPendingStep: qr,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (J.notifications?.length ?? 0) > 0
	}) : null, Zr = S && dn && !!J && !_n && Xr?.action === "submit", Qr = Zr && cr && !Nn.isOutOfRange, $r = J ? ct({
		uiPaymentConfirmView: ke,
		hasPendingStep: qr,
		hasVisibleInlineContent: _n,
		hasConfirmOnlyContent: Re(J)
	}) : null, ei = S && yn && !!J && $r?.action === "submit", ti = ei && cr && !Nn.isOutOfRange, ni = Zr || ei, ri = yn || Qr || ti, ii = ri ? Y : null;
	I(() => {
		let e = X ? d(q) : "", t = x ? {
			paymentTypeName: Y ?? x,
			method: g,
			amount: e
		} : null;
		We((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !s(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
				...r,
				amount: t.amount,
				values: X ? {
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
		q,
		Y,
		g,
		X,
		x,
		We
	]), I(() => {
		let e = () => {
			It.current &&= (clearTimeout(It.current), null);
		};
		if (e(), Wn) It.current = setTimeout(() => {
			It.current = null, Vn({
				value: q,
				key: In
			});
		}, Lr);
		else return Vn((e) => e.value === q && e.key === In ? e : {
			value: q,
			key: In
		}), () => {
			e();
		};
		return e;
	}, [
		q,
		In,
		Wn
	]), I(() => {
		let e = () => {
			Lt.current &&= (clearTimeout(Lt.current), null);
		};
		if (e(), Gn) Lt.current = setTimeout(() => {
			Lt.current = null, Un(q);
		}, Lr);
		else return Un((e) => e === q ? e : q), () => {
			e();
		};
		return e;
	}, [q, Gn]), I(() => {
		qt.current = {
			amount: q,
			amountIsOutOfRange: Nn.isOutOfRange,
			gotoPaymentType: be,
			selectedPaymentType: x,
			selectedPaymentTypeId: Y,
			shouldShowBonusStep: qr,
			shouldSkipPaymentTypeSelection: kn,
			isPaymentTypesUnavailable: An,
			isPaymentTypeSelectionMissing: On,
			paymentTypeSupportsAmount: X,
			method: g
		};
	}, [
		Y,
		q,
		Nn.isOutOfRange,
		be,
		x,
		qr,
		kn,
		An,
		On,
		X,
		g
	]);
	let ai = F(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = qt.current;
		if (o || s) return;
		let u = c ? d(e) : "";
		if (!(c && u.length === 0) && !(c && t)) {
			if (We((e) => {
				let t = e.initialAmount !== u, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
				return !t && !r && !i ? e : {
					...e,
					...t ? { initialAmount: u } : {},
					paymentFormDraft: null,
					comboViewFormDraft: null,
					...r ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), a && r) {
				jt(i ? { to: "/bonus" } : {
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			jt({ to: `/pts/${l}` });
		}
	}, [jt, We]), oi = F((e, t) => {
		if (!Y) return;
		let n = ee(e);
		if (n !== Y || An || On || X && Nn.isOutOfRange) return;
		let r = X ? d(Kt.current) : "";
		if (!(X && r.length === 0)) {
			if (We((e) => {
				let i = !!be && !e.hasAppliedGotoPaymentType, a = X ? {
					...t.values,
					amount: r
				} : t.values;
				return {
					...e,
					initialAmount: r,
					comboViewFormDraft: {
						paymentTypeName: n,
						method: g,
						amount: r,
						values: a,
						hasHostedFields: t.hasHostedFields
					},
					...i ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), qr) {
				jt({ to: "/bonus" });
				return;
			}
			jt({
				to: "/pt/$id",
				params: { id: n }
			});
		}
	}, [
		Y,
		Nn.isOutOfRange,
		be,
		On,
		An,
		g,
		jt,
		X,
		We,
		qr
	]), si = F((e, t) => {
		if (!Y) return;
		let n = ee(e);
		if (n !== Y) return;
		let r = X ? d(Kt.current) : "", i = {
			paymentTypeName: n,
			method: g,
			amount: r,
			values: X ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		We((e) => Ve(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		Y,
		g,
		X,
		We
	]), ci = F((e) => {
		if (!(n || p)) {
			if (Ft.current) {
				Ft.current = !1, Pt.current = !1, G({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			if (Pt.current && e.length === 0) {
				G({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			Pt.current = !1, Ft.current = !1, G({
				type: "user",
				value: e,
				markExplicitSelection: e.length > 0
			});
		}
	}, [
		n,
		p,
		G
	]), li = F((e) => {
		if (n || p) return;
		let t = He(e);
		Pt.current = !1, Ft.current = !1, Nt.current = !0, G({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		p,
		G
	]), ui = Ut?.submit, di = !ri || K.paymentTypeName === ii, fi = ri ? !di || !ui || lr || !ui.visible || ui.disabled : lr, pi = ri && di && ui ? ui.loading : !1, mi = F(() => {
		if (ri && di && ui) return ui.onClick();
		ai();
	}, [
		ui,
		ai,
		di,
		ri
	]), hi = ni || yn && $r?.buttonLabel === "pay" ? dr : ur, gi = F(() => {
		mi();
	}, [mi]), _i = R(() => [/* @__PURE__ */ V(y, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: fi,
		loading: pi,
		onClick: gi,
		label: hi
	}, "cashier-amount-continue")], [
		hi,
		fi,
		pi,
		gi
	]), vi = F((e) => {
		if (n || p) return;
		let t = e.key === "," ? "." : e.key, r = _r(Kt.current, t);
		Pt.current = !1, Ft.current = !1, G({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		p,
		G
	]), yi = F((e) => {
		if (Bt(e), n || p || !S) {
			Pt.current = !1, Ft.current = !1;
			return;
		}
		if (e) {
			m(Kt.current) && (Pt.current = !0, Ft.current = !1);
			return;
		}
		if (Pt.current && !m(Kt.current)) {
			Ft.current = !0;
			return;
		}
		Pt.current = !1, Ft.current = !1;
	}, [
		p,
		n,
		S
	]), bi = F((e) => {
		let t = Mt.current;
		if (!t || n || p || zr(e.target, e.currentTarget) || Rr(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		if (!(!r && a)) {
			if (r && !i) {
				e.preventDefault(), e.stopPropagation(), t.blur();
				return;
			}
			e.preventDefault(), e.stopPropagation(), !r && t.focus();
		}
	}, [p, n]), xi = F((e) => {
		let t = e.currentTarget.scrollTop > 1;
		Ht((e) => e === t ? e : t);
	}, []);
	Qe({
		inputRef: Mt,
		inputType: "decimal",
		onType: n || p || !Z ? void 0 : vi
	});
	let Si = Z ? n ? "field.amount.label" : "cta.enter_amount" : "payment.enter_details", Ci = W(Si), wi = F((e) => tr(e) || e, [tr]), $ = R(() => ({
		legacyTitle: Ci,
		titleKey: Z ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: fr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ V(xt, {})
	}), [
		fr,
		Z,
		Ci
	]), Ti = R(() => or ? {
		...$,
		legacyTitle: or,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ V(vt, {}),
		tone: "danger"
	} : null, [or, $]), Ei = R(() => {
		if (!hr || !mt(j) || pr !== hr.nextAmount && mr !== hr.nextAmount || Rt.changeOrigin === "user" && pr !== hr.nextAmount || L !== hr.bonus.code) return null;
		let e = er(hr.nextAmount);
		return {
			...$,
			titleKey: "bonus.selected.title",
			titleValues: void 0,
			bodyKey: "bonus.selected.desc",
			bodyValues: {
				amount: e,
				method: fr
			},
			icon: /* @__PURE__ */ V(Le, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ V("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: _(W("bonus.top_up.success"), { amount: er(hr.addedAmount) })
			})
		};
	}, [
		pr,
		Rt.changeOrigin,
		$,
		hr,
		er,
		mr,
		fr,
		L,
		W,
		j
	]), Di = R(() => v({ translateKey: W }), [W]), Oi = R(() => Tn && (Zt || !un) ? {
		...$,
		legacyTitle: W("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ V(vt, {}),
		tone: "danger"
	} : null, [
		$,
		un,
		Zt,
		Tn,
		W
	]), ki = !ri || K.paymentTypeName === ii, Ai = !ri || K.isComplete, ji = !!(ie && Zr && J && ln), Mi = (!X || m(Q)) && !Nn.isOutOfRange && !K.errorMessage, Ni = ji && J ? Ie({
		amount: Q,
		bonusCode: L,
		canSubmit: !fi,
		complete: Mi && Ai,
		currency: N,
		dirty: Q !== He(e),
		errors: Mi ? {} : { amount: "invalid" },
		fields: (J.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: He(e) },
		method: g,
		paymentType: J,
		submitting: pi,
		valid: Mi,
		values: { amount: Q }
	}) : null, Pi = F(() => {
		ln && oe(ln);
	}, [oe, ln]), Fi = !Xt && !Cn && ki, Ii = R(() => {
		let e = $, t = {
			...e,
			titleKey: n ? void 0 : e.titleKey
		};
		return Cn ? t : Ti || (ri && K.errorMessage ? {
			...e,
			legacyTitle: K.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ V(vt, {}),
			tone: "danger"
		} : Ei || (Vr ? On ? {
			...e,
			...te({ translateKey: W }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ V(pt, {})
		} : Di : e));
	}, [
		Ti,
		$,
		Ei,
		K.errorMessage,
		W,
		Vr,
		Cn,
		On,
		Ai,
		n,
		Di,
		ri
	]), [Li, Ri] = B(null), zi = Li?.methodPromptLabel === fr ? Li.content : null, Bi = zi?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", Vi = qn || Xn, Hi = Ti ?? (Vi && !Ti && !Bi ? zi ?? Ii : Ii), Ui = R(() => ir(Hi), [ir, Hi]), Wi = R(() => ({
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
		iconSlotClassName: C($.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [$]);
	I(() => {
		!Fi || Vi || Oi || nr || Ri((e) => e?.methodPromptLabel === fr && e.content === Ii ? e : {
			methodPromptLabel: fr,
			content: Ii
		});
	}, [
		Vi,
		Fi,
		fr,
		Ii,
		Oi,
		nr
	]);
	let Gi = Oi ?? Wi;
	!Oi && Fi && (Gi = nr ? Hi : Ui);
	let Ki = Oi ?? Ti, qi = !!(L && !mt(j) && !Oi && !Ti && Gi.titleKey === "interactive_prompt.quick_payment.enter_amount.title"), Ji = R(() => {
		if (!qi) return null;
		let e = $;
		return On ? {
			...e,
			...te({ translateKey: W }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ V(pt, {})
		} : Di;
	}, [
		$,
		Ai,
		On,
		Di,
		qi,
		W
	]), Yi = qi ? Ji : Gi, Xi = jr, Zi = Z && !n && sn.length > 0, Qi = !Zi, $i = !!(jn?.min || jn?.max), ea = $i ? Tr : wr, ta = "gap-2", na = C("p-3", !$i && "[@container_(min-width:520px)]:py-3.5"), ra = Qi && !$i, ia = Xe(g, N, st, {
		amount: Jn,
		fee: J?.fee,
		includeRemainingBalance: !0
	}), aa = lt ? ae(J?.fee, Hr ?? 0, {
		feeCurrencyFormatter: ar,
		formatCurrencyValue: er
	}) : null, oa = g === t.PAYIN && lt ? se(J?.fee, Hr ?? 0, N) : null, sa = X ? g === t.PAYOUT ? D(ia, [aa]) : aa || oa ? [aa, oa].filter((e) => e !== null) : ia : [], ca = sa.length > 0, la = mn, ua = ca && la && (!X || Hr !== null && Hr > 0), da = ca && !la, fa = R(() => Mn !== null && Hr !== null && Hr > Mn ? { "withdrawable-balance": "danger" } : {}, [Mn, Hr]), pa = S && n && !!e && !Zi && !$i, ma = !pa, ha = Z || Zi, ga = yn && !bn && !!x, _a = gn, va = ha || ga || _a || !!Ut, ya = fn && un, ba = ya && M, xa = ya && !M, Sa = S && fn && M && a > 0 ? a : 0, Ca = R(() => Sa > 0 ? { paddingBottom: Sa } : void 0, [Sa]), wa = S && M, Ta = 2 + +!!xa + +!!ga + +!!_a + +!!ba, Ea = 2 + +!!xa, Da = Ea + +!!ga, Oa = Da + +!!_a, ka = or ? "danger" : "neutral", Aa = C(xr, !Qi && !$i && "self-center", Qi && "row-start-2 self-end", Qi && (ra ? "pb-1.5 @md:pb-2" : "pb-2")), ja = n ? void 0 : "cursor-pointer", Ma = C("min-w-0 w-full row-start-3 self-start", Sr), Na = ra ? Nr : Mr, Pa = Pr;
	Qi ? Pa = Na : $i && (Pa = Fr);
	let Fa = Qi ? Na : Ir, Ia = /* @__PURE__ */ V(Me, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: Ci,
		presentationTitle: U(Si),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), La = ha && da, Ra = La ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", za = La ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ba = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", Va = r.attrs("quick-payment-summary-surface"), Ha = r.attrs("quick-payment-amount-surface"), Ua = da ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": Va["data-pc-slot"],
		className: C(Va.className, "w-full", La && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ V(nt, {
			summaryFields: sa,
			rowVariants: fa,
			animateEntrance: !1,
			panelBorderEdges: La ? "without-top" : "all",
			className: La ? C("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, Wa = F((e, t) => {
		Gt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Ga = ga && J ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: h({
			index: Ea,
			total: Ta,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ V(qe, {
			paymentType: J,
			selectionId: cn ?? void 0,
			amountValue: Q,
			hideAmountField: !0,
			onActionsChange: Wt,
			onPromptStateChange: Wa,
			onPreparedValues: oi,
			onValuesChange: si,
			submitMode: $r?.submitMode,
			valueOverrides: Sn,
			animateEntrance: !1
		}, cn ?? J.name)
	}) : null, Ka = Jr && J ? /* @__PURE__ */ V(ze, {
		placement: De(j) ? "payment-list" : "payment-form",
		paymentType: J,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, qa = Yr ? /* @__PURE__ */ V(ze, {
		placement: "payment-list",
		paymentType: J,
		paymentTypes: Yt,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, Ja = xa ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: C("w-full", l),
		children: /* @__PURE__ */ V(zn, {
			bonusEvaluationContext: Wr,
			floating: _i.length > 0 ? !1 : "adaptive",
			animationStyle: h({
				index: 2,
				total: Ta,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, Ya = M || !mn ? /* @__PURE__ */ V(ge, {
		domScope: "quick-payment-actions",
		items: _i,
		fixed: M,
		enabled: !Dn
	}) : null, Xa = Qr && J ? /* @__PURE__ */ V("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ V(qe, {
			paymentType: J,
			selectionId: cn ?? void 0,
			amountValue: Q,
			hideAmountField: !0,
			onActionsChange: Wt,
			onPromptStateChange: Wa,
			onPreparedValues: oi,
			onValuesChange: si,
			submitMode: "submit",
			valueOverrides: Sn,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: Pi
		}, cn ?? J.name)
	}) : null, Za = F((e) => {
		let t = ee(e), n = St(j) && $t(e, { amount: Ur }).length > 0, r = !M, i = n && r, a = !Ye(e);
		return /* @__PURE__ */ H("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: C("flex min-w-0 flex-col", a && "px-0.5", i ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ V(ze, {
					paymentType: e,
					amount: Yn,
					onTopUpAccepted: Ar
				}),
				/* @__PURE__ */ V(qe, {
					paymentType: e,
					selectionId: t,
					amountValue: Q,
					hideAmountField: !0,
					onActionsChange: Wt,
					onPromptStateChange: Wa,
					onPreparedValues: oi,
					onValuesChange: si,
					valueOverrides: Sn,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: $r?.submitMode,
					reserveTrailingActionSpace: r && !i,
					animateEntrance: !1
				}, t),
				r && /* @__PURE__ */ V(o, {
					domScope: "quick-payment-accordion-actions",
					items: _i,
					adaptive: !1
				})
			]
		});
	}, [
		Sn,
		oi,
		si,
		Wa,
		Ar,
		$t,
		Q,
		_i,
		$r?.submitMode,
		M,
		j,
		Yn,
		Ur
	]), Qa = F((e) => ua ? /* @__PURE__ */ V(Ne, {
		summaryFields: sa,
		rowVariants: fa
	}) : null, [
		sa,
		ua,
		fa
	]), $a = F((e) => it(e) || Re(e) || !M || ua || St(j) && $t(e, { amount: Ur }).length > 0, [
		$t,
		ua,
		M,
		j,
		Ur
	]), eo = F((e) => {
		if (p) return;
		let t = Jt(e);
		if (!t || Pn(t)) return;
		let n = ee(t);
		if (hn && Y === n && $a(t)) {
			nn(), Ke?.(t);
			return;
		}
		tn(n, { availableBonuses: en(t, { amount: pr }) }), Ge?.(t);
	}, [
		Y,
		pr,
		nn,
		en,
		Jt,
		$a,
		hn,
		p,
		Pn,
		Ke,
		Ge,
		tn
	]), to = W("account.delete.title"), no = F((e) => P && e.accountId ? /* @__PURE__ */ V(y, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": to,
		disabled: p,
		onClick: () => {
			an(e);
		},
		iconOnly: !0,
		label: to,
		leadingIcon: /* @__PURE__ */ V(vt, {})
	}) : null, [
		to,
		p,
		an,
		P
	]), ro = _a && pn ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-payment-types",
		className: C("w-full", l),
		style: h({
			index: Da,
			total: Ta,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: mn ? /* @__PURE__ */ V(at, {
			paymentTypes: Yt,
			domScope: "quick-payment",
			selectedPaymentType: x,
			onSelect: eo,
			renderActions: no,
			renderPanel: Za,
			renderFooter: Qa,
			hasPanel: $a,
			collapsible: hn,
			isPaymentTypeDisabled: sr,
			interactionLocked: p,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Wr
		}) : /* @__PURE__ */ V(ut, {
			paymentTypes: Yt,
			domScope: "quick-payment",
			listStyle: pn,
			selectable: !0,
			selectedPaymentType: x,
			onSelect: eo,
			renderActions: no,
			isPaymentTypeDisabled: sr,
			interactionLocked: p,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: Wr
		})
	}) : null, io = qa || ro ? /* @__PURE__ */ H("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [qa, ro]
	}) : null, ao = nr ? /* @__PURE__ */ H("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ V(me, {
			content: nr,
			forceVisible: !0
		}), rr]
	}) : null, oo = Ga || io || Xa || ao ? /* @__PURE__ */ H(Ot, { children: [
		Ga,
		io,
		Xa,
		ao,
		on
	] }) : void 0, so = !!(Ga || Xa || io && bn), co = !!(so || ao), lo = !so || !!Ut, uo = co && !lo ? "protected-surface-not-ready" : fi ? "invalid-state" : void 0, fo = F((e) => {
		if (e === L) return;
		let t = L ? A?.find((e) => e.code === L) : void 0, n = e ? A?.find((t) => t.code === e) : void 0;
		e && !n || (rn(e), t && kt?.(t), n && Et?.(n));
	}, [
		A,
		kt,
		Et,
		rn,
		L
	]), po = R(() => Yt.flatMap((e) => {
		let t = ee(e), n = ht(e), r = rt({
			paymentType: e,
			id: t,
			label: n ? Pe(n) : At(e.nameKeys ?? e.name),
			currency: N,
			formatMoney: er,
			minimumLabel: U("field.limits.min.label"),
			maximumLabel: U("field.limits.max.label"),
			selected: Y === t,
			disabled: Pn(e),
			unavailable: f(e)
		});
		return r ? [r] : [];
	}), [
		Y,
		N,
		er,
		Pn,
		Yt,
		U,
		At
	]), mo = R(() => (J ? $t(J, { amount: pr }) : (A ?? []).map((e) => ({
		bonus: e,
		status: "available",
		reasons: []
	}))).map(({ bonus: e, status: t }) => ({
		id: e.code,
		title: U(e.title),
		description: U(e.description),
		selected: e.code === L,
		available: t === "available"
	})), [
		pr,
		A,
		$t,
		J,
		L,
		U
	]), { createAction: ho, revision: go } = et({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), _o = R(() => Z ? sn.map((e) => ({
		amount: je(e, N, er),
		selected: m(Q) && _e(e, Q) === 0,
		disabled: n || p || c(e, jn, { maxBoundary: Mn }).isOutOfRange
	})) : [], [
		jn,
		N,
		er,
		p,
		n,
		Q,
		Mn,
		Z,
		sn
	]), vo = R(() => ({
		screen: "combo",
		revision: go,
		busy: p || pi,
		amountEntryVisible: Z,
		amount: je(Q, N, er),
		...Z && or && Zn ? { amountError: Je(U(Zn), or) } : {},
		method: g,
		amountLocked: n,
		amountLabel: U("field.amount.label"),
		paymentTypesLabel: U("cta.choose_payment_type"),
		continueLabel: U("cta.continue"),
		paymentTypes: po,
		suggestedAmounts: _o,
		bonuses: mo,
		selectedBonusId: L,
		protectedSurfaceRequired: co,
		protectedSurfaceReady: lo,
		...co ? { protectedSurfaceLabel: U(dt) } : {},
		canContinue: !fi
	}), [
		or,
		N,
		lo,
		co,
		fi,
		pi,
		er,
		p,
		n,
		g,
		mo,
		po,
		_o,
		Q,
		U,
		go,
		L,
		Z,
		Zn
	]), yo = R(() => ({
		setAmount: ho("setAmount", (e) => {
			ci(He(e));
		}, {
			busy: p,
			validate: (e) => He(e) === e,
			unavailableReason: n || !Z ? "invalid-state" : void 0
		}),
		selectPaymentType: ho("selectPaymentType", eo, {
			busy: p,
			validate: (e) => po.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: ho("selectBonus", fo, {
			busy: p,
			validate: (e) => e === null || mo.some((t) => t.id === e && t.available)
		}),
		continue: ho("continue", () => mi(), {
			busy: p || pi,
			unavailableReason: uo
		})
	}), [
		ho,
		pi,
		eo,
		mi,
		fo,
		ci,
		p,
		n,
		uo,
		mo,
		po,
		Z
	]), bo = F((e) => /* @__PURE__ */ V("div", {
		id: r.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: xi,
		style: Ca,
		className: C(r.className("route-quick-payment"), r.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", M ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: e
	}), [
		r,
		xi,
		Ca,
		M
	]);
	return /* @__PURE__ */ H(Ot, { children: [ji && ln && /* @__PURE__ */ V(ft, {
		sourceId: ln,
		state: Ni
	}), /* @__PURE__ */ V(i, {
		isLoading: Dn,
		loaderLabel: W("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ H(Ze, {
			id: "combo",
			model: vo,
			actions: yo,
			deferPresentationUpdates: co,
			frame: bo,
			protectedContent: oo,
			children: [
				/* @__PURE__ */ H("div", {
					className: C("flex flex-1 flex-col items-center", Ae ? Er : "justify-center"),
					children: [Ae ? /* @__PURE__ */ H("div", {
						className: Dr,
						children: [/* @__PURE__ */ H("div", {
							"data-slot": "quick-payment-prompt-sticky-anchor",
							"data-pc-scroll-obstruction": "top",
							className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
							children: [/* @__PURE__ */ V("div", {
								className: C("pointer-events-auto", Cr, xr),
								style: h({
									index: 0,
									total: Ta,
									direction: "reverse",
									baseDelayMs: 12,
									staggerMs: 24
								}),
								children: /* @__PURE__ */ H("div", {
									className: "flex flex-col gap-3",
									children: [nr && /* @__PURE__ */ V(me, {
										content: nr,
										className: Xi
									}), /* @__PURE__ */ V(me, {
										content: Yi,
										className: Xi
									})]
								})
							}), /* @__PURE__ */ V("div", {
								"aria-hidden": "true",
								"data-slot": "quick-payment-prompt-sticky-fade",
								"data-pc-scroll-obstruction-extent": "true",
								style: Ce,
								className: C("pointer-events-none absolute inset-x-0 top-full", Vt ? "opacity-100" : "opacity-0")
							})]
						}), va && /* @__PURE__ */ V("div", {
							className: C(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ H(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ H("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: C(Ha.className, "flex flex-col", Ra, za, ta, Ba, na, ea),
										children: [/* @__PURE__ */ H("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Pa,
											children: [
												/* @__PURE__ */ V("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": ka,
													className: C(Aa, ja),
													onMouseDown: bi,
													style: h({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: Ia
												}),
												/* @__PURE__ */ V("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: Qi ? C(Ma, ja) : C("w-full", Sr, ja),
													onMouseDown: bi,
													style: h({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ V(Rn, {
														inputRef: Mt,
														value: q,
														onChange: ci,
														onSubmit: gi,
														onFocusChange: yi,
														canSubmit: !fi,
														disabled: n || p,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: N,
														locale: $e,
														formatOptions: tt,
														clearOnFocus: S && !n && !p,
														animateValueChange: Rt.changeOrigin === "programmatic"
													})
												}),
												Zi && !$i && /* @__PURE__ */ V(_t, {
													suggestions: sn,
													activeSuggestion: q,
													onSelect: li,
													disabled: p,
													formatLabel: wi,
													amountLimits: jn,
													size: "xs",
													className: C("order-3", "mt-1")
												})
											]
										}), Zi && $i && /* @__PURE__ */ V(_t, {
											suggestions: sn,
											activeSuggestion: q,
											onSelect: li,
											disabled: p,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: C("order-3", "[@container_(min-width:520px)]:-mt-0.5")
										})]
									}),
									La && Ua,
									!La && !M && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && M && Ua,
									Ya
								]
							})
						})]
					}) : /* @__PURE__ */ H("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [Ki && /* @__PURE__ */ V("div", {
							className: C("pointer-events-auto", Cr, xr),
							style: h({
								index: 1,
								total: Ta,
								direction: "reverse"
							}),
							children: /* @__PURE__ */ V(me, {
								content: Ki,
								forceVisible: !0
							})
						}), va && /* @__PURE__ */ V("div", {
							className: C(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ H(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ H("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: C(Ha.className, "flex flex-col", Ra, za, ta, Ba, "p-4", ea, "@md:px-5 @md:py-4 @xl:py-5"),
										children: [/* @__PURE__ */ H("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Fa,
											children: [/* @__PURE__ */ V("div", {
												"data-slot": "quick-payment-amount-title-row",
												"data-theme": ka,
												className: C(Aa, ja),
												onMouseDown: bi,
												style: h({
													index: 0,
													total: Ta,
													direction: "reverse",
													baseDelayMs: 12,
													staggerMs: 24
												}),
												children: Ia
											}), /* @__PURE__ */ V("div", {
												"data-slot": "quick-payment-amount-input-row",
												className: C(Qi ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", ja),
												onMouseDown: bi,
												children: /* @__PURE__ */ V("div", {
													className: C("w-full", Sr),
													style: h({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ V(Rn, {
														inputRef: Mt,
														value: q,
														onChange: ci,
														onSubmit: gi,
														onFocusChange: yi,
														canSubmit: !fi,
														disabled: n || p,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: N,
														locale: $e,
														formatOptions: tt,
														clearOnFocus: S && !n && !p,
														animateValueChange: Rt.changeOrigin === "programmatic"
													})
												})
											})]
										}), Zi && /* @__PURE__ */ V(_t, {
											suggestions: sn,
											activeSuggestion: q,
											onSelect: li,
											disabled: p,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: C(!$i && "mt-3 @md:mt-0", "order-2")
										})]
									}),
									La && Ua,
									!La && !M && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && M && Ua,
									Ya
								]
							})
						})]
					}), ba && /* @__PURE__ */ V("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ V("div", {
							className: Cr,
							children: /* @__PURE__ */ V(zn, {
								bonusEvaluationContext: Wr,
								animationStyle: h({
									index: Oa,
									total: Ta,
									direction: "forward",
									baseDelayMs: 70,
									staggerMs: 36
								})
							})
						})
					})]
				}),
				Xa,
				rr
			]
		})
	})] });
}
//#endregion
export { gr as a, hr as i, Vr as n, Un as o, Br as r, Bn as s, Hr as t };
