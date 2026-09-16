import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { $ as r, A as i, At as a, B as o, Ct as s, Di as c, Dn as l, Dr as u, Dt as d, En as f, F as ee, Fn as te, Ft as p, Gr as ne, H as m, Hr as re, I as h, It as ie, K as ae, Kt as g, L as oe, Ln as se, Mt as ce, Oi as le, On as ue, Or as _, Ot as de, P as v, Pt as y, Q as fe, R as pe, Rt as me, Si as b, St as x, Ti as he, Tn as ge, Tr as _e, Tt as S, Vr as C, Wr as ve, X as w, Y as T, Z as E, _t as ye, a as D, at as be, bi as xe, bt as Se, c as Ce, ct as we, d as Te, di as O, dn as Ee, et as De, f as Oe, fi as ke, fn as Ae, ft as k, g as je, ht as Me, i as Ne, ir as Pe, jt as Fe, k as Ie, kt as Le, l as Re, li as ze, lt as A, m as Be, mi as Ve, mn as He, mt as Ue, n as We, nn as Ge, nr as Ke, nt as qe, o as j, on as Je, ot as Ye, p as Xe, pn as Ze, pt as Qe, r as $e, s as M, si as et, st as tt, t as nt, tr as N, tt as rt, u as it, un as at, v as ot, vi as st, vt as ct, wn as lt, wt as ut, x as dt, xi as ft, xr as pt, xt as mt, y as ht, yi as gt, yt as _t, zn as vt, zr as yt, zt as bt } from "./inlinePaymentSubmit-C3GD-D2V.js";
import { i as xt, n as St, p as Ct } from "./CashierFullscreenLoader-CrNY3LLZ.js";
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
	let a = [], o = [], s = [], c = [], l = {}, u = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, d = "", f = !1, ee = !1;
	for (let e of i) {
		d += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (f = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (ee = !0, s.push({
			type: t,
			value: e.value,
			key: u(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: u(t),
			pos: -1 - l[t]
		}))) : (f || ee ? c : a).push({
			type: t,
			value: e.value,
			key: u(t)
		});
	}
	let te = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		te.unshift(t.type === "integer" ? {
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
		integer: te,
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
function Rn({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: o, currency: s, locale: l, formatOptions: u, clearOnFocus: f = !1, errorMessage: ee, invalid: te = !1, limits: p, reserveErrorSpace: ne = !1, showMeta: m = !0, showDivider: re = !0, reserveEmptyLimitMetaSpace: h = !0, align: ie = "center", animateValueChange: ae = !1, disabled: g = !1, onFocusChange: oe }) {
	let se = ve(), { translateKey: ce } = _e(), [le, ue] = B(!1), _ = z(null), de = z(null), v = z(null), y = z(!1), fe = z(!1), pe = z(e), me = pn(o) ? o : null, b = F((e) => {
		_.current = e, o && typeof o == "function" && o(e);
	}, [o]);
	L(me, () => _.current), I(() => {
		y.current && e.length !== 0 && (fe.current = !0);
	}, [e]);
	let x = F(() => {
		!f || e.length === 0 || y.current || (pe.current = e, y.current = !0, fe.current = !1, t(""));
	}, [
		f,
		t,
		e
	]), he = F(() => {
		g || (ue(!0), oe?.(!0), x());
	}, [
		g,
		oe,
		x
	]), ge = F(() => {
		if (ue(!1), oe?.(!1), !f || !y.current) return;
		let n = !fe.current && e.length === 0;
		y.current = !1, fe.current = !1, n && t(pe.current);
	}, [
		f,
		t,
		oe,
		e.length
	]), S = F(() => {
		g || x();
	}, [g, x]), C = F((n) => {
		g || (y.current && (fe.current = !0), t(d(e, n.target.value)));
	}, [
		g,
		t,
		e
	]), w = R(() => fn(e), [e]), T = R(() => {
		if (!w) return null;
		let e = Number(w);
		return Number.isFinite(e) ? e : null;
	}, [w]), { currencyFormatter: E } = A(s, l, u), ye = R(() => E ? w ? T === null ? w : E.format(T) : "" : w, [
		E,
		w,
		T
	]), D = p?.min ?? "", be = p?.max ?? "", xe = D ? we(D, E, void 0, l) || D : "", Se = be ? we(be, E, void 0, l) || be : "", Ce = !!(xe || Se), Te = R(() => {
		if (!E || typeof E.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = E.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: E.currencyCodeSuffix || void 0
		};
	}, [E]), O = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [Ee, De] = Dt(jn, T, kn);
	I(() => {
		De({
			type: "sync",
			numericValue: T,
			defer: ae && le && T !== null,
			preserveRendered: T === null && y.current && !fe.current
		});
	}, [
		ae,
		le,
		T
	]);
	let Oe = R(() => {
		let e = [w, ye].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [w, ye]) || "0", [ke, Ae] = B(() => Ln(Oe, yn)), [k, je] = B(bn * Z), Me = z(ke), Ne = z(k);
	I(() => {
		Me.current = ke;
	}, [ke]), I(() => {
		Ne.current = k;
	}, [k]), Et(() => {
		let e = de.current, t = v.current;
		if (!e || !t) return;
		let n = Fn(e), r = () => {
			let { bounds: n, growthFactor: r } = In(e), i = n.max * Z;
			Math.abs(Ne.current - i) >= En && (Ne.current = i, je(i));
			let a = Math.max(e.clientWidth - wn, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = Ln(Oe, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Me.current - u) < En || (Me.current = u, Ae(u));
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
	}, [Oe]);
	let Pe = `${ke.toFixed(2)}rem`, Fe = Z, Ie = `${k.toFixed(2)}rem`, Le = F((e) => {
		e.key === "Enter" && (e.preventDefault(), !g && i && r?.());
	}, [
		i,
		g,
		r
	]), Re = !!Te && Ee.renderedValue !== null && O, ze = Re ? Ee.renderedValue : void 0, Be = !!ye || Re, Ve = !!ye && !le, He = ce("field.amount.label"), Ue = mn(ce("field.limits.min.label"), "field.limits.min.label", "Min"), We = mn(ce("field.limits.max.label"), "field.limits.max.label", "Max"), Ge = se.id("amount-input"), Ke = !!ee || ne, qe = m && (!!n || Ke), j = te || !!ee, Je = a(e, p), Ye = j ? "danger" : "neutral", Xe = Je.isOutOfRange && j ? "danger" : void 0, Ze = re && Ce, Qe = "opacity-0";
	Ve && (Qe = g ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let $e;
	g || ($e = le ? "cursor-pointer opacity-85" : "cursor-pointer");
	let M = se.attrs("amount-section"), et = se.attrs("amount-content"), tt = se.attrs("amount-input");
	return /* @__PURE__ */ V("div", {
		id: se.id("amount-section"),
		...M,
		className: [M.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ H("div", {
			...et,
			className: [et.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ V("label", {
					className: "sr-only",
					htmlFor: Ge,
					children: He
				}),
				/* @__PURE__ */ V("div", {
					"data-theme": Ye,
					className: c(Ze && "border-b border-[var(--pc-color-depth-4)]", Ze && "pb-0.5", !g && "group"),
					children: /* @__PURE__ */ V("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ V("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ H("div", {
								className: c("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: de,
								style: {
									minHeight: Ie,
									height: Ie
								},
								children: [
									/* @__PURE__ */ V("span", {
										"aria-hidden": !0,
										ref: v,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Fe
										},
										children: Oe
									}),
									/* @__PURE__ */ V("input", {
										id: Ge,
										...tt,
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
										"aria-invalid": j,
										ref: b,
										onChange: C,
										onKeyDown: Le,
										onFocus: he,
										onBlur: ge,
										onClick: S,
										className: c(tt.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", $e),
										style: {
											fontSize: Pe,
											lineHeight: Fe,
											width: "100%",
											maxWidth: "100%",
											minWidth: Sn,
											color: Ve ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Dn})`
										}
									}),
									Be && /* @__PURE__ */ V("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											Qe,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: Pe,
											lineHeight: Fe,
											width: "100%",
											maxWidth: "100%",
											minWidth: Sn,
											transform: `translateY(${Dn})`
										},
										children: Re ? /* @__PURE__ */ V(un, {
											value: ze,
											locales: Te?.locales,
											format: Te?.format,
											suffix: Te?.suffix,
											animated: ae,
											transformTiming: On.transformTiming,
											spinTiming: On.spinTiming,
											opacityTiming: On.opacityTiming,
											respectMotionPreference: !0
										}) : ye
									})
								]
							})
						})
					})
				}),
				Ce && /* @__PURE__ */ H("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						Q
					].join(" "),
					children: [/* @__PURE__ */ V("div", {
						"data-theme": Xe,
						className: c("min-w-0 text-left", Xe && "text-[var(--pc-color-text)]"),
						children: xe ? /* @__PURE__ */ H("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ H("span", { children: [Ue, ":"] }), /* @__PURE__ */ V("span", {
								className: "truncate",
								children: xe
							})]
						}) : null
					}), /* @__PURE__ */ V("div", {
						"data-theme": Xe,
						className: c("min-w-0 text-right", Xe && "text-[var(--pc-color-text)]"),
						children: Se ? /* @__PURE__ */ H("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ H("span", { children: [We, ":"] }), /* @__PURE__ */ V("span", {
								className: "truncate",
								children: Se
							})]
						}) : null
					})]
				}),
				qe && /* @__PURE__ */ H("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ V("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Ke && /* @__PURE__ */ V("div", {
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
function zn({ animationStyle: t, bonusEvaluationContext: n, floating: r = !0 }) {
	let i = te(), a = ve(), { uiComboView: o, uiComboView__PaymentTypes: s, onPaymentTypeSelected: u, uiAccountDelete: d } = Tt(ne), { translateKey: ee } = _e(), { paymentTypesList: p } = E(), { getBonusCountForPaymentType: m, getAvailableBonusesForPaymentType: re } = w(), { selectedPaymentType: ie, selectPaymentType: g, ensureDefaultSelection: oe } = ae(), { requestAccountDelete: se, actionConfirmationModal: ce } = Ce();
	I(() => {
		!o || !x(s) || oe(p);
	}, [
		oe,
		p,
		o,
		s
	]);
	let le = p.length > 0, _ = p.length > 1, de = o && x(s) && _ && !i, v = R(() => ue(p, ie), [p, ie]), y = R(() => v ? lt(v) : null, [v]), fe = R(() => {
		if (!v) return null;
		let e = m(v, n), t = f(v);
		return e > 0 ? /* @__PURE__ */ V(Te, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		n,
		m,
		v
	]), pe = ee("cta.choose_payment_type"), me = ee("cta.interactive_prompt.choose_payment_type.title"), b = ee("account.delete.title"), ge = v?.name ?? "cta.choose_payment_type", S = v ? f(v) : ge, C = F((e, t) => {
		if (i) return;
		let n = ue(p, e);
		n && !l(n) && (g(f(n), { availableBonuses: re(n) }), u && u(n)), t();
	}, [
		re,
		i,
		u,
		p,
		g
	]), T = F((e) => d && e.accountId ? /* @__PURE__ */ V(he, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": b,
		disabled: i,
		onClick: () => {
			se(e);
		},
		iconOnly: !0,
		label: b,
		leadingIcon: /* @__PURE__ */ V(Ve, {})
	}) : null, [
		b,
		i,
		se,
		d
	]);
	return /* @__PURE__ */ V(M, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ V(rt, { children: pe }),
		triggerLabel: pe,
		canOpen: de,
		shouldRender: o && x(s) && le,
		animationStyle: t,
		floating: r,
		actionContent: ce,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ V(j, {
			domSlug: S,
			name: ge,
			presentationPaymentType: v ?? void 0,
			nameKeys: v?.nameKeys,
			logo: v?.logo,
			logoContent: v ? void 0 : h("h-full w-full"),
			limits: v?.limits,
			fee: v?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: fe,
			title: y ?? void 0,
			interactive: !1,
			isDisabled: i,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: de ? /* @__PURE__ */ V(D, { children: /* @__PURE__ */ V(he, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": me,
				disabled: i,
				onClick: e,
				leadingIcon: /* @__PURE__ */ V(et, {}),
				label: me
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = a.attrs("payment-type-picker-list");
			return /* @__PURE__ */ V("div", {
				id: n,
				...r,
				className: c(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ V(it, {
					paymentTypes: p,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						C(e, t);
					},
					interactionLocked: i,
					renderActions: T,
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
		className: c("flex flex-col gap-1.5 @md:gap-2", e)
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
var Gn = (e, t, n) => [n(ge(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), Kn = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function qn({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = _e(), l = z(null);
	return I(() => {
		if (!o || !a) return;
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
	}, [a, o]), /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let o = t(e), u = Gn(e, n, s), d = [o, u].filter(Boolean).join(", ");
			return /* @__PURE__ */ V("button", {
				ref: e.paymentId === a ? l : void 0,
				type: "button",
				className: Kn,
				"aria-label": d || void 0,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ H("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ V("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: o
					}), u && /* @__PURE__ */ V("span", {
						className: c("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: u
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
	let { data: n, error: r } = await _({
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
	let { data: a, error: o } = await u({
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
} : null, mr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ H(Ot, { children: [l.length > 1 && /* @__PURE__ */ V(pt, {
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
	let r = vt(), i = te(), a = Tt(ne), { merchantId: o, userId: s, sessionId: c, debug: l, locale: u, currencyFormatOptions: d, method: f, lockAmount: ee, uiInteractivePrompts: p, uiSuggestAction: m, onPendingWithdrawalCancelled: re } = a, h = a.uiCancelPendingPayout === !0, { translateKey: ie, translateKeys: ae } = _e(), { formatDisplayValue: oe } = be(), ce = R(() => {
		try {
			return new Intl.ListFormat(u, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [u]), { dismissPrompt: le, isPromptDismissed: ue } = Hn(), _ = Pe(), [de, v] = Dt(dr, cr), { isDrawerOpen: y, selectedPaymentId: fe, cancellingPaymentId: pe, cancellationState: me } = de, b = f === t.PAYIN && !ee && p && h && m.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(o && s && c), x = R(() => ({
		merchantId: o,
		userId: s,
		sessionId: c
	}), [
		o,
		c,
		s
	]), he = R(() => ir(x), [x]), { data: ge } = Ke(ar(x, r, b)), S = R(() => ge?.payments ?? [], [ge?.payments]), C = R(() => {
		let e = /* @__PURE__ */ new Map(), t = [...S, ...me?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, Ye(n.amountCurrency, u, d));
		return e;
	}, [
		me?.cancelledPayments,
		d,
		u,
		S
	]), ve = F((e) => tt(e.amountValue, C.get(e.amountCurrency)), [C]), w = F((e) => {
		let t = e.map((e) => tt(e.amount, C.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : ce?.format(t) ?? t.join(", ");
	}, [ce, C]), T = F((e) => w(rr(e)), [w]), E = R(() => nr(S), [S]), ye = ue(E), D = S.length === 1 ? S[0] : S.at(0) ?? null, { openActionConfirmation: xe, actionConfirmationModal: Se, isActionConfirmationOpen: Ce, closeActionConfirmation: we } = Re({ isConfirmDisabled: i });
	I(() => {
		v({ type: "reset" }), we();
	}, [
		we,
		b,
		o,
		c,
		s
	]), I(() => {
		ye && v({ type: "dismiss" });
	}, [ye]), I(() => {
		v({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: S,
			featureEnabled: b
		});
	}, [b, S]), I(() => {
		i && (v({ type: "close-drawer" }), we());
	}, [we, i]);
	let { mutateAsync: Te, isPending: O } = N({
		mutationFn: async (e) => await tr({
			client: r,
			merchantId: o,
			userId: s,
			sessionId: c,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = S.filter((e) => e.paymentId !== t.paymentId);
			await _.invalidateQueries({ queryKey: he });
			try {
				n = (await _.fetchQuery(ar(x, r, !0))).payments;
			} catch {}
			let i = n.length, a = rr(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			v({
				type: "record-success",
				payment: t,
				pendingWithdrawals: S
			}), se({
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
			v({ type: "finish-cancelling" });
		}
	}), Ee = F(() => {
		i || !E || le(E);
	}, [
		E,
		le,
		i
	]), De = F((e) => {
		if (O || i) return;
		let t = ve(e), n = Gn(e, oe, ae);
		xe({
			title: ae(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ H("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ V("p", { children: g(ae(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ V("p", {
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
				}), await Te(e);
			}
		});
	}, [
		Te,
		oe,
		ve,
		O,
		i,
		xe,
		ie,
		ae
	]), Oe = F(() => {
		D !== null && De(D);
	}, [D, De]), ke = F((e) => {
		v({
			type: "select-payment",
			paymentId: e.paymentId
		}), De(e);
	}, [De]), Ae = F(() => {
		O || i || S.length <= 1 || v({ type: "open-drawer" });
	}, [
		O,
		i,
		S.length
	]), k = F(() => {
		O || v({ type: "close-drawer" });
	}, [O]), je = R(() => {
		if (!me || me.cancelledPayments.length === 0) return null;
		let e = rr(me.cancelledPayments);
		return /* @__PURE__ */ V("p", {
			className: sr,
			children: g(ie("pending_withdrawal.cancel.success"), { amount: w(e) })
		});
	}, [
		me,
		w,
		ie
	]), Me = R(() => !b || ye ? null : D ? fr({
		pendingWithdrawals: S,
		activePendingWithdrawal: D,
		isPaymentInteractionLocked: i,
		isCancelling: O,
		isDrawerOpen: y,
		onDismiss: Ee,
		onCancel: Oe,
		onView: Ae,
		formatPendingWithdrawalAmount: ve,
		formatPendingWithdrawalTotals: T,
		successFooter: je
	}) : pr({ successFooter: je }), [
		D,
		b,
		ve,
		T,
		Oe,
		Ee,
		Ae,
		O,
		i,
		y,
		ye,
		S,
		je
	]), Ne = R(() => b ? /* @__PURE__ */ V(mr, {
		actionConfirmationModal: Se,
		formatDisplayValue: oe,
		formatPendingWithdrawalAmount: ve,
		isActionConfirmationOpen: Ce,
		isDrawerOpen: y,
		isSelectionDisabled: i || O || pe !== null,
		onClose: k,
		onSelect: ke,
		pendingWithdrawals: S,
		selectedPaymentId: fe,
		title: ie("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		Se,
		pe,
		b,
		oe,
		ve,
		k,
		ke,
		O,
		Ce,
		i,
		y,
		S,
		fe,
		ie
	]), Fe = F((e) => e, []), Ie = R(() => ({
		interactivePromptContent: Me,
		pendingWithdrawalDrawer: Ne,
		attachSuccessFooter: Fe
	}), [
		Fe,
		Me,
		Ne
	]);
	return /* @__PURE__ */ V(or.Provider, {
		value: Ie,
		children: e
	});
}
var gr = () => Tt(or), _r = (e, t) => t === "Backspace" ? e.length === 0 ? e : b(e.slice(0, -1)) : b(`${e}${t}`), vr = (e) => ({
	value: b(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), yr = (e, t) => {
	let n = b(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, br = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", xr = "pc-enter-drift-item", Sr = "pc-enter-lift-item", Cr = C, wr = "min-h-[27cqw] @md:min-h-[27cqw]", Tr = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", Er = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", Dr = "flex w-full flex-col items-center gap-2 @md:gap-3", Or = "pb-3 @md:pb-4", kr = [
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
	let t = k(e);
	if (t !== "/combo") throw Ct({
		to: t,
		replace: !0
	});
}, Vr = xt("/combo/")({
	beforeLoad: ({ context: e }) => {
		Br(e);
	},
	component: Hr
});
function Hr() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, method: r, gotoPaymentType: i, bonuses: a, uiBonuses: o, uiBonusesStyle: s } = Tt(ne), c = le(), l = R(() => k({
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
	let u = ve(), { contentInset: d } = yt(), h = te(), { isSubscribed: se, publishInactive: ue } = ht(), { method: _, uiSuggestAmounts: ge, selectedPaymentType: C, uiComboView: D, uiComboView__PaymentTypes: we, uiComboView__PaymentForm: Te, gotoPaymentType: k, bonuses: Pe, uiPaymentConfirmView: Re, uiBonusesStyle: A, uiInteractivePrompts: Ke, uiFixedControls: j, hasAppliedGotoPaymentType: Ye, setCashierState: M, onPaymentTypeSelected: et, onPaymentTypeDeselected: tt, currency: N, locale: rt, currencyFormatOptions: pt, resetFlowOnBack: vt, user: xt, uiShowFees: Ct, uiAccountDelete: P, paymentFormDraft: wt, selectedBonusCode: L, onBonusSelected: Et, onBonusDeselected: kt } = Tt(ne), { resolveTextKey: U, resolveTextKeys: At, translateKey: W } = _e(), jt = le(), Mt = z(null), Nt = z(!1), Pt = z(!1), Ft = z(!1), It = z(null), Lt = z(null), [Rt, G] = Dt(yr, e, vr), [zt, Bt] = B(!1), [Vt, Ht] = B(!1), [Ut, Wt] = B(null), [K, Gt] = B({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), q = Rt.value, Kt = z(q), qt = z({
		amount: q,
		amountIsOutOfRange: !1,
		gotoPaymentType: k,
		selectedPaymentType: C,
		selectedPaymentTypeId: C,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: _
	}), { getPaymentType: Jt, paymentTypesList: Yt, isLoading: Xt, isError: Zt } = E(), { getBonusCountForPaymentType: Qt, getBonusAvailabilityForPaymentType: $t, getAvailableBonusesForPaymentType: en } = w(), { selectPaymentType: tn, clearPaymentSelection: nn } = ae(), { selectBonusCode: rn } = T(), { requestAccountDelete: an, actionConfirmationModal: on } = Ce();
	I(() => {
		Kt.current = q;
	}, [q]), I(() => {
		Pt.current = !1, Ft.current = !1, G({
			type: "sync-external",
			value: e
		});
	}, [e]), I(() => {
		vt && M((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [vt, M]), I(() => {
		Nt.current && (Nt.current = !1, Mt.current?.blur());
	}, [q]);
	let sn = R(() => ft(ge), [ge]), J = R(() => C ? Jt(C) : null, [Jt, C]), cn = J ? f(J) : null, ln = cn ? `quick-payment-form:${cn}` : null, Y = cn ?? C, un = Yt.length > 0, dn = D && s(we), fn = D && x(we), pn = D ? S({
		mode: we,
		paymentFormEnabled: Te
	}) : null, mn = ye(pn), hn = mt(pn), gn = !!(pn && un), X = D && dn && J && J ? ut(J) : !0, _n = !!(J && Qe(J)), vn = !!(J && (_n || Me(J))), yn = !!(D && dn && Te && J && vn && (!pn || mn)), bn = mn && yn, Z = X, Q = X ? q : "", xn = C && i(wt, {
		paymentTypeName: Y ?? C,
		method: _,
		amount: Q
	}) ? wt : null, Sn = R(() => ({
		...xn?.values ?? {},
		amount: Q
	}), [xn?.values, Q]), Cn = X && gt(q) && !!C && !J && Xt && !Zt, wn = !!k && !Ye, Tn = dn, En = !!(J && l(J)), Dn = Tn && Xt && !Zt && !un && !C, On = Tn && !J || En, kn = D && !!C && (dn || wn), An = !un || Xt || Zt, jn = J?.limits, Mn = Fe(_, xt, J?.fee), Nn = a(Q, jn, { maxBoundary: Mn }), Pn = F((e) => l(e) ? !0 : !ut(e) || !gt(q) ? !1 : a(q, e.limits, { maxBoundary: Fe(_, xt, e.fee) }).isOutOfRange, [
		q,
		_,
		xt
	]), Fn = Le(Q, jn, { maxBoundary: Mn }), In = Fn?.key, [Ln, Vn] = B(() => ({
		value: q,
		key: In
	})), [Hn, Un] = B(q), Wn = X && zt && Rt.changeOrigin === "user" && !!In && Ln.key === void 0, Gn = X && zt && Rt.changeOrigin === "user", Kn = Ln.value === q && Ln.key === In, qn = Gn && Hn !== q, Jn = X ? qn ? Hn : q : "", Yn = br({
		livePaymentAmount: Q,
		paymentTypeSupportsAmount: X,
		visiblePaymentSummaryAmount: Jn
	}), Xn = Wn && !Kn, Zn = In;
	Xn && (Zn = void 0);
	let Qn = Zn ? Fn : void 0, { currencyFormatter: $n, formatCurrencyValue: er, formatDisplayValue: tr } = be(), { interactivePromptContent: nr, pendingWithdrawalDrawer: rr, attachSuccessFooter: ir } = gr(), ar = R(() => y($n), [$n]), or = de(Qn, W, er), sr = F((e) => l(e) ? !0 : !Xn && Pn(e), [Xn, Pn]), cr = X ? gt(q) : !!J, lr = h || X && !gt(q) || X && Nn.isOutOfRange || An || On, ur = W("cta.continue"), dr = W(_ === t.PAYOUT ? "cta.payout" : "cta.payin"), fr = dr.toLocaleLowerCase(rt), pr = R(() => X ? ce(q) : null, [q, X]), mr = R(() => ce(e), [e]), [hr, kr] = B(null), Ar = F((e) => {
		G({
			type: "sync-external",
			value: pe(e.nextAmount)
		}), kr(e);
	}, []), Br = !!(hr && !ct(A) && L === hr.bonus.code && pr === hr.nextAmount), Vr = X ? n ? gt(q) : gt(q) && (Rt.hasExplicitSelection || Br) : !!J, Hr = R(() => X ? ce(Jn) : null, [X, Jn]), Ur = R(() => X ? ce(Yn) : null, [X, Yn]), Wr = R(() => ({ amount: Ur }), [Ur]), Gr = J ? Qt(J, { amount: pr }) : 0, Kr = J ? $t(J, { amount: Ur }).length : 0, qr = ct(A) && (J ? Gr > 0 : bt(Pe)), Jr = fn && (_t(A) || Se(A)) && !!J && Kr > 0, Yr = gn && Se(A), Xr = J ? nt({
		uiPaymentConfirmView: Re,
		hasPendingStep: qr,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (J.notifications?.length ?? 0) > 0
	}) : null, Zr = D && dn && !!J && !_n && Xr?.action === "submit", Qr = Zr && cr && !Nn.isOutOfRange, $r = J ? nt({
		uiPaymentConfirmView: Re,
		hasPendingStep: qr,
		hasVisibleInlineContent: _n,
		hasConfirmOnlyContent: Me(J)
	}) : null, ei = D && yn && !!J && $r?.action === "submit", ti = ei && cr && !Nn.isOutOfRange, ni = Zr || ei, ri = yn || Qr || ti, ii = ri ? Y : null;
	I(() => {
		let e = X ? xe(q) : "", t = C ? {
			paymentTypeName: Y ?? C,
			method: _,
			amount: e
		} : null;
		M((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !i(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
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
		_,
		X,
		C,
		M
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
			gotoPaymentType: k,
			selectedPaymentType: C,
			selectedPaymentTypeId: Y,
			shouldShowBonusStep: qr,
			shouldSkipPaymentTypeSelection: kn,
			isPaymentTypesUnavailable: An,
			isPaymentTypeSelectionMissing: On,
			paymentTypeSupportsAmount: X,
			method: _
		};
	}, [
		Y,
		q,
		Nn.isOutOfRange,
		k,
		C,
		qr,
		kn,
		An,
		On,
		X,
		_
	]);
	let ai = F(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = qt.current;
		if (o || s) return;
		let u = c ? xe(e) : "";
		if (!(c && u.length === 0) && !(c && t)) {
			if (M((e) => {
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
	}, [jt, M]), oi = F((e, t) => {
		if (!Y) return;
		let n = f(e);
		if (n !== Y || An || On || X && Nn.isOutOfRange) return;
		let r = X ? xe(Kt.current) : "";
		if (!(X && r.length === 0)) {
			if (M((e) => {
				let i = !!k && !e.hasAppliedGotoPaymentType, a = X ? {
					...t.values,
					amount: r
				} : t.values;
				return {
					...e,
					initialAmount: r,
					comboViewFormDraft: {
						paymentTypeName: n,
						method: _,
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
		k,
		On,
		An,
		_,
		jt,
		X,
		M,
		qr
	]), si = F((e, t) => {
		if (!Y) return;
		let n = f(e);
		if (n !== Y) return;
		let r = X ? xe(Kt.current) : "", i = {
			paymentTypeName: n,
			method: _,
			amount: r,
			values: X ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		M((e) => Ie(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		Y,
		_,
		X,
		M
	]), ci = F((e) => {
		if (!(n || h)) {
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
		h,
		G
	]), li = F((e) => {
		if (n || h) return;
		let t = b(e);
		Pt.current = !1, Ft.current = !1, Nt.current = !0, G({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		h,
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
	}, [mi]), _i = R(() => [/* @__PURE__ */ V(he, {
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
		if (n || h) return;
		let t = e.key === "," ? "." : e.key, r = _r(Kt.current, t);
		Pt.current = !1, Ft.current = !1, G({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		h,
		G
	]), yi = F((e) => {
		if (Bt(e), n || h || !D) {
			Pt.current = !1, Ft.current = !1;
			return;
		}
		if (e) {
			gt(Kt.current) && (Pt.current = !0, Ft.current = !1);
			return;
		}
		if (Pt.current && !gt(Kt.current)) {
			Ft.current = !0;
			return;
		}
		Pt.current = !1, Ft.current = !1;
	}, [
		h,
		n,
		D
	]), bi = F((e) => {
		let t = Mt.current;
		if (!t || n || h || zr(e.target, e.currentTarget) || Rr(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		if (!(!r && a)) {
			if (r && !i) {
				e.preventDefault(), e.stopPropagation(), t.blur();
				return;
			}
			e.preventDefault(), e.stopPropagation(), !r && t.focus();
		}
	}, [h, n]), xi = F((e) => {
		let t = e.currentTarget.scrollTop > 1;
		Ht((e) => e === t ? e : t);
	}, []);
	qe({
		inputRef: Mt,
		inputType: "decimal",
		onType: n || h || !Z ? void 0 : vi
	});
	let Si = Z ? n ? "field.amount.label" : "cta.enter_amount" : "payment.enter_details", Ci = W(Si), wi = F((e) => tr(e) || e, [tr]), $ = R(() => ({
		legacyTitle: Ci,
		titleKey: Z ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: fr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ V(ke, {})
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
		icon: /* @__PURE__ */ V(Ve, {}),
		tone: "danger"
	} : null, [or, $]), Ei = R(() => {
		if (!hr || !ct(A) || pr !== hr.nextAmount && mr !== hr.nextAmount || Rt.changeOrigin === "user" && pr !== hr.nextAmount || L !== hr.bonus.code) return null;
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
			icon: /* @__PURE__ */ V(ze, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ V("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: g(W("bonus.top_up.success"), { amount: er(hr.addedAmount) })
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
		A
	]), Di = R(() => oe({ translateKey: W }), [W]), Oi = R(() => Tn && (Zt || !un) ? {
		...$,
		legacyTitle: W("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ V(Ve, {}),
		tone: "danger"
	} : null, [
		$,
		un,
		Zt,
		Tn,
		W
	]), ki = !ri || K.paymentTypeName === ii, Ai = !ri || K.isComplete, ji = !!(se && Zr && J && ln), Mi = (!X || gt(Q)) && !Nn.isOutOfRange && !K.errorMessage, Ni = ji && J ? je({
		amount: Q,
		bonusCode: L,
		canSubmit: !fi,
		complete: Mi && Ai,
		currency: N,
		dirty: Q !== b(e),
		errors: Mi ? {} : { amount: "invalid" },
		fields: (J.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: b(e) },
		method: _,
		paymentType: J,
		submitting: pi,
		valid: Mi,
		values: { amount: Q }
	}) : null, Pi = F(() => {
		ln && ue(ln);
	}, [ue, ln]), Fi = !Xt && !Cn && ki, Ii = R(() => {
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
			icon: /* @__PURE__ */ V(Ve, {}),
			tone: "danger"
		} : Ei || (Vr ? On ? {
			...e,
			...ee({ translateKey: W }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ V(O, {})
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
		iconSlotClassName: c($.iconSlotClassName, "opacity-0"),
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
	let Ki = Oi ?? Ti, qi = !!(L && !ct(A) && !Oi && !Ti && Gi.titleKey === "interactive_prompt.quick_payment.enter_amount.title"), Ji = R(() => {
		if (!qi) return null;
		let e = $;
		return On ? {
			...e,
			...ee({ translateKey: W }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ V(O, {})
		} : Di;
	}, [
		$,
		Ai,
		On,
		Di,
		qi,
		W
	]), Yi = qi ? Ji : Gi, Xi = jr, Zi = Z && !n && sn.length > 0, Qi = !Zi, $i = !!(jn?.min || jn?.max), ea = $i ? Tr : wr, ta = "gap-2", na = c("p-3", !$i && "[@container_(min-width:520px)]:py-3.5"), ra = Qi && !$i, ia = We(_, N, xt, {
		amount: Jn,
		fee: J?.fee,
		includeRemainingBalance: !0
	}), aa = Ct ? p(J?.fee, Hr ?? 0, {
		feeCurrencyFormatter: ar,
		formatCurrencyValue: er
	}) : null, oa = _ === t.PAYIN && Ct ? ie(J?.fee, Hr ?? 0, N) : null, sa = X ? _ === t.PAYOUT ? me(ia, [aa]) : aa || oa ? [aa, oa].filter((e) => e !== null) : ia : [], ca = sa.length > 0, la = mn, ua = ca && la && (!X || Hr !== null && Hr > 0), da = ca && !la, fa = R(() => Mn !== null && Hr !== null && Hr > Mn ? { "withdrawable-balance": "danger" } : {}, [Mn, Hr]), pa = D && n && !!e && !Zi && !$i, ma = !pa, ha = Z || Zi, ga = yn && !bn && !!C, _a = gn, va = ha || ga || _a || !!Ut, ya = fn && un, ba = ya && j, xa = ya && !j, Sa = D && fn && j && d > 0 ? d : 0, Ca = R(() => Sa > 0 ? { paddingBottom: Sa } : void 0, [Sa]), wa = D && j, Ta = 2 + +!!xa + +!!ga + +!!_a + +!!ba, Ea = 2 + +!!xa, Da = Ea + +!!ga, Oa = Da + +!!_a, ka = or ? "danger" : "neutral", Aa = c(xr, !Qi && !$i && "self-center", Qi && "row-start-2 self-end", Qi && (ra ? "pb-1.5 @md:pb-2" : "pb-2")), ja = n ? void 0 : "cursor-pointer", Ma = c("min-w-0 w-full row-start-3 self-start", Sr), Na = ra ? Nr : Mr, Pa = Pr;
	Qi ? Pa = Na : $i && (Pa = Fr);
	let Fa = Qi ? Na : Ir, Ia = /* @__PURE__ */ V(De, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: Ci,
		presentationTitle: U(Si),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), La = ha && da, Ra = La ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", za = La ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ba = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", Va = u.attrs("quick-payment-summary-surface"), Ha = u.attrs("quick-payment-amount-surface"), Ua = da ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": Va["data-pc-slot"],
		className: c(Va.className, "w-full", La && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ V(Xe, {
			summaryFields: sa,
			rowVariants: fa,
			animateEntrance: !1,
			panelBorderEdges: La ? "without-top" : "all",
			className: La ? c("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, Wa = F((e, t) => {
		Gt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Ga = ga && J ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: m({
			index: Ea,
			total: Ta,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ V(Be, {
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
	}) : null, Ka = Jr && J ? /* @__PURE__ */ V(Ne, {
		placement: Se(A) ? "payment-list" : "payment-form",
		paymentType: J,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, qa = Yr ? /* @__PURE__ */ V(Ne, {
		placement: "payment-list",
		paymentType: J,
		paymentTypes: Yt,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, Ja = xa ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: c("w-full", o),
		children: /* @__PURE__ */ V(zn, {
			bonusEvaluationContext: Wr,
			floating: _i.length > 0 ? !1 : "adaptive",
			animationStyle: m({
				index: 2,
				total: Ta,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, Ya = j || !mn ? /* @__PURE__ */ V(fe, {
		domScope: "quick-payment-actions",
		items: _i,
		fixed: j,
		enabled: !Dn
	}) : null, Xa = Qr && J ? /* @__PURE__ */ V("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ V(Be, {
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
		let t = f(e), n = _t(A) && $t(e, { amount: Ur }).length > 0, i = !j, a = n && i, o = !Ue(e);
		return /* @__PURE__ */ H("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: c("flex min-w-0 flex-col", o && "px-0.5", a ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ V(Ne, {
					paymentType: e,
					amount: Yn,
					onTopUpAccepted: Ar
				}),
				/* @__PURE__ */ V(Be, {
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
					reserveTrailingActionSpace: i && !a,
					animateEntrance: !1
				}, t),
				i && /* @__PURE__ */ V(r, {
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
		j,
		A,
		Yn,
		Ur
	]), Qa = F((e) => ua ? /* @__PURE__ */ V(Oe, {
		summaryFields: sa,
		rowVariants: fa
	}) : null, [
		sa,
		ua,
		fa
	]), $a = F((e) => Qe(e) || Me(e) || !j || ua || _t(A) && $t(e, { amount: Ur }).length > 0, [
		$t,
		ua,
		j,
		A,
		Ur
	]), eo = F((e) => {
		if (h) return;
		let t = Jt(e);
		if (!t || Pn(t)) return;
		let n = f(t);
		if (hn && Y === n && $a(t)) {
			nn(), tt?.(t);
			return;
		}
		tn(n, { availableBonuses: en(t, { amount: pr }) }), et?.(t);
	}, [
		Y,
		pr,
		nn,
		en,
		Jt,
		$a,
		hn,
		h,
		Pn,
		tt,
		et,
		tn
	]), to = W("account.delete.title"), no = F((e) => P && e.accountId ? /* @__PURE__ */ V(he, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": to,
		disabled: h,
		onClick: () => {
			an(e);
		},
		iconOnly: !0,
		label: to,
		leadingIcon: /* @__PURE__ */ V(Ve, {})
	}) : null, [
		to,
		h,
		an,
		P
	]), ro = _a && pn ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-payment-types",
		className: c("w-full", o),
		style: m({
			index: Da,
			total: Ta,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: mn ? /* @__PURE__ */ V($e, {
			paymentTypes: Yt,
			domScope: "quick-payment",
			selectedPaymentType: C,
			onSelect: eo,
			renderActions: no,
			renderPanel: Za,
			renderFooter: Qa,
			hasPanel: $a,
			collapsible: hn,
			isPaymentTypeDisabled: sr,
			interactionLocked: h,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Wr
		}) : /* @__PURE__ */ V(it, {
			paymentTypes: Yt,
			domScope: "quick-payment",
			listStyle: pn,
			selectable: !0,
			selectedPaymentType: C,
			onSelect: eo,
			renderActions: no,
			isPaymentTypeDisabled: sr,
			interactionLocked: h,
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
		children: [/* @__PURE__ */ V(v, {
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
		let t = L ? Pe?.find((e) => e.code === L) : void 0, n = e ? Pe?.find((t) => t.code === e) : void 0;
		e && !n || (rn(e), t && kt?.(t), n && Et?.(n));
	}, [
		Pe,
		kt,
		Et,
		rn,
		L
	]), po = R(() => Yt.flatMap((e) => {
		let t = f(e), n = lt(e), r = Ze({
			paymentType: e,
			id: t,
			label: n ? Ae(n) : At(e.nameKeys ?? e.name),
			currency: N,
			formatMoney: er,
			minimumLabel: U("field.limits.min.label"),
			maximumLabel: U("field.limits.max.label"),
			selected: Y === t,
			disabled: Pn(e),
			unavailable: l(e)
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
	]), mo = R(() => (J ? $t(J, { amount: pr }) : (Pe ?? []).map((e) => ({
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
		Pe,
		$t,
		J,
		L,
		U
	]), { createAction: ho, revision: go } = Je({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), _o = R(() => Z ? sn.map((e) => ({
		amount: Ee(e, N, er),
		selected: gt(Q) && st(e, Q) === 0,
		disabled: n || h || a(e, jn, { maxBoundary: Mn }).isOutOfRange
	})) : [], [
		jn,
		N,
		er,
		h,
		n,
		Q,
		Mn,
		Z,
		sn
	]), vo = R(() => ({
		screen: "combo",
		revision: go,
		busy: h || pi,
		amountEntryVisible: Z,
		amount: Ee(Q, N, er),
		...Z && or && Zn ? { amountError: He(U(Zn), or) } : {},
		method: _,
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
		...co ? { protectedSurfaceLabel: U(at) } : {},
		canContinue: !fi
	}), [
		or,
		N,
		lo,
		co,
		fi,
		pi,
		er,
		h,
		n,
		_,
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
			ci(b(e));
		}, {
			busy: h,
			validate: (e) => b(e) === e,
			unavailableReason: n || !Z ? "invalid-state" : void 0
		}),
		selectPaymentType: ho("selectPaymentType", eo, {
			busy: h,
			validate: (e) => po.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: ho("selectBonus", fo, {
			busy: h,
			validate: (e) => e === null || mo.some((t) => t.id === e && t.available)
		}),
		continue: ho("continue", () => mi(), {
			busy: h || pi,
			unavailableReason: uo
		})
	}), [
		ho,
		pi,
		eo,
		mi,
		fo,
		ci,
		h,
		n,
		uo,
		mo,
		po,
		Z
	]), bo = F((e) => /* @__PURE__ */ V("div", {
		id: u.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: xi,
		style: Ca,
		className: c(u.className("route-quick-payment"), u.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", j ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: e
	}), [
		u,
		xi,
		Ca,
		j
	]);
	return /* @__PURE__ */ H(Ot, { children: [ji && ln && /* @__PURE__ */ V(ot, {
		sourceId: ln,
		state: Ni
	}), /* @__PURE__ */ V(St, {
		isLoading: Dn,
		loaderLabel: W("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ H(Ge, {
			id: "combo",
			model: vo,
			actions: yo,
			deferPresentationUpdates: co,
			frame: bo,
			protectedContent: oo,
			children: [
				/* @__PURE__ */ H("div", {
					className: c("flex flex-1 flex-col items-center", Ke ? Er : "justify-center"),
					children: [Ke ? /* @__PURE__ */ H("div", {
						className: Dr,
						children: [/* @__PURE__ */ H("div", {
							"data-slot": "quick-payment-prompt-sticky-anchor",
							"data-pc-scroll-obstruction": "top",
							className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
							children: [/* @__PURE__ */ V("div", {
								className: c("pointer-events-auto", Cr, xr),
								style: m({
									index: 0,
									total: Ta,
									direction: "reverse",
									baseDelayMs: 12,
									staggerMs: 24
								}),
								children: /* @__PURE__ */ H("div", {
									className: "flex flex-col gap-3",
									children: [nr && /* @__PURE__ */ V(v, {
										content: nr,
										className: Xi
									}), /* @__PURE__ */ V(v, {
										content: Yi,
										className: Xi
									})]
								})
							}), /* @__PURE__ */ V("div", {
								"aria-hidden": "true",
								"data-slot": "quick-payment-prompt-sticky-fade",
								"data-pc-scroll-obstruction-extent": "true",
								style: re,
								className: c("pointer-events-none absolute inset-x-0 top-full", Vt ? "opacity-100" : "opacity-0")
							})]
						}), va && /* @__PURE__ */ V("div", {
							className: c(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ H(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ H("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: c(Ha.className, "flex flex-col", Ra, za, ta, Ba, na, ea),
										children: [/* @__PURE__ */ H("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Pa,
											children: [
												/* @__PURE__ */ V("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": ka,
													className: c(Aa, ja),
													onMouseDown: bi,
													style: m({
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
													className: Qi ? c(Ma, ja) : c("w-full", Sr, ja),
													onMouseDown: bi,
													style: m({
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
														disabled: n || h,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: N,
														locale: rt,
														formatOptions: pt,
														clearOnFocus: D && !n && !h,
														animateValueChange: Rt.changeOrigin === "programmatic"
													})
												}),
												Zi && !$i && /* @__PURE__ */ V(dt, {
													suggestions: sn,
													activeSuggestion: q,
													onSelect: li,
													disabled: h,
													formatLabel: wi,
													amountLimits: jn,
													size: "xs",
													className: c("order-3", "mt-1")
												})
											]
										}), Zi && $i && /* @__PURE__ */ V(dt, {
											suggestions: sn,
											activeSuggestion: q,
											onSelect: li,
											disabled: h,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: c("order-3", "[@container_(min-width:520px)]:-mt-0.5")
										})]
									}),
									La && Ua,
									!La && !j && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && j && Ua,
									Ya
								]
							})
						})]
					}) : /* @__PURE__ */ H("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [Ki && /* @__PURE__ */ V("div", {
							className: c("pointer-events-auto", Cr, xr),
							style: m({
								index: 1,
								total: Ta,
								direction: "reverse"
							}),
							children: /* @__PURE__ */ V(v, {
								content: Ki,
								forceVisible: !0
							})
						}), va && /* @__PURE__ */ V("div", {
							className: c(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ H(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ H("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: c(Ha.className, "flex flex-col", Ra, za, ta, Ba, "p-4", ea, "@md:px-5 @md:py-4 @xl:py-5"),
										children: [/* @__PURE__ */ H("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Fa,
											children: [/* @__PURE__ */ V("div", {
												"data-slot": "quick-payment-amount-title-row",
												"data-theme": ka,
												className: c(Aa, ja),
												onMouseDown: bi,
												style: m({
													index: 0,
													total: Ta,
													direction: "reverse",
													baseDelayMs: 12,
													staggerMs: 24
												}),
												children: Ia
											}), /* @__PURE__ */ V("div", {
												"data-slot": "quick-payment-amount-input-row",
												className: c(Qi ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", ja),
												onMouseDown: bi,
												children: /* @__PURE__ */ V("div", {
													className: c("w-full", Sr),
													style: m({
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
														disabled: n || h,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: N,
														locale: rt,
														formatOptions: pt,
														clearOnFocus: D && !n && !h,
														animateValueChange: Rt.changeOrigin === "programmatic"
													})
												})
											})]
										}), Zi && /* @__PURE__ */ V(dt, {
											suggestions: sn,
											activeSuggestion: q,
											onSelect: li,
											disabled: h,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: c(!$i && "mt-3 @md:mt-0", "order-2")
										})]
									}),
									La && Ua,
									!La && !j && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && j && Ua,
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
								animationStyle: m({
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
