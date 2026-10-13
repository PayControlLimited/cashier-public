import { CashierLayoutListType as e, CashierMethods as t, CashierSuggestAction as n } from "./types/CashierConfig.js";
import { $ as r, A as i, Ai as a, An as o, At as s, B as c, Cr as l, Ct as u, Dn as d, Dt as f, Ei as ee, En as te, F as ne, Fr as re, Ft as ie, H as p, I as ae, Ii as m, It as oe, K as h, Kt as se, L as ce, Li as le, Ln as ue, Lr as de, Mi as fe, Mr as g, Mt as pe, Ni as me, On as _, Ot as v, P as y, Pi as b, Pr as x, Pt as he, Q as S, R as ge, Rr as _e, Rt as ve, St as C, Tt as ye, Vn as w, X as be, Y as xe, Z as Se, _t as Ce, a as we, ai as Te, at as Ee, bt as De, c as Oe, ct as T, d as ke, dn as Ae, ei as E, et as je, f as Me, fi as D, fn as Ne, ft as Pe, g as Fe, ht as Ie, i as Le, ii as Re, ir as O, ji as k, jt as ze, k as Be, kn as Ve, kt as He, l as Ue, lt as A, m as We, mn as Ge, mt as Ke, n as qe, ni as Je, nn as Ye, nt as Xe, o as Ze, on as Qe, or as j, ot as $e, p as et, pi as tt, pn as nt, pt as rt, r as it, rr as at, s as M, si as ot, st, t as ct, tt as lt, u as ut, ui as dt, un as ft, v as pt, vt as mt, wt as ht, x as gt, xt as _t, y as vt, yt, zn as bt, zt as xt } from "./inlinePaymentSubmit-Cw-MCOPa.js";
import { i as St, n as Ct, p as wt } from "./CashierFullscreenLoader-Dmh5rNDh.js";
import * as N from "react";
import { createContext as Tt, useCallback as P, useContext as Et, useEffect as F, useImperativeHandle as I, useLayoutEffect as Dt, useMemo as L, useReducer as Ot, useRef as R, useState as z } from "react";
import { Fragment as kt, jsx as B, jsxs as V } from "react/jsx-runtime";
//#region ../../node_modules/number-flow/dist/lite-BTIaQdTe.mjs
var At = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, H = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, jt = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, U = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function Mt(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function Nt(e, t, n, r) {
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
var Pt = String.raw, Ft = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), It = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Lt = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, Rt = "--_number-flow-d-opacity", zt = "--_number-flow-d-width", W = "--_number-flow-dx", Bt = "--_number-flow-d", Vt = (() => {
	try {
		return CSS.registerProperty({
			name: Rt,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: W,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: zt,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: Bt,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), Ht = "var(--number-flow-char-height, 1em)", Ut = "var(--number-flow-mask-height, 0.25em)", Wt = `calc(${Ut} / 2)`, Gt = "var(--number-flow-mask-width, 0.5em)", G = `calc(${Gt} / var(--scale-x))`, Kt = "#000 0, transparent 71%", K = Pt`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Ht} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${zt}) / var(--width));transform:translateX(var(${W})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Gt});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${G},#000 calc(100% - ${G}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${Ut},#000 calc(100% - ${Ut}),transparent 100% ),radial-gradient(at bottom right,${Kt}),radial-gradient(at bottom left,${Kt}),radial-gradient(at top left,${Kt}),radial-gradient(at top right,${Kt});-webkit-mask-size:100% calc(100% - ${Ut} * 2),calc(100% - ${G} * 2) 100%,${G} ${Ut},${G} ${Ut},${G} ${Ut},${G} ${Ut};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Wt} ${Gt};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${W})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${Bt})}.digit__num,.number .section::after{padding:${Wt} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${Rt}))}`, qt = HTMLElement;
Pt`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${Ht} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${Wt} 0}.symbol{white-space:pre}`;
var Jt = It && Ft && Vt, Yt, Xt = class extends qt {
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
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = Jt && this._animated && (!this.respectMotionPreference || !(Lt != null && Lt.matches)) && jt(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) Yt || (Yt = new CSSStyleSheet(), Yt.replaceSync(K)), this.shadowRoot.adoptedStyleSheets = [Yt];
			else {
				let e = document.createElement("style");
				e.textContent = K, this.shadowRoot.appendChild(e);
			}
			this._pre = new en(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new Zt(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new en(this, a, {
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
Xt.defaultProps = {
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
var Zt = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new $t(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new $t(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = At("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = At("span", {
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
			[zt]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, Qt = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = At("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new rn(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new an(this, e.type, e.value, {
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
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${H(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (Mt(e, (e) => {
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
}, $t = class extends Qt {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof rn && e.update(0);
		}), this.pop(t);
	}
}, en = class extends Qt {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, tn = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [Rt]: [-.9999, 0] }, {
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
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [Rt]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, nn = class extends tn {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, rn = class extends nn {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = At("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = At("span", {
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
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [Bt]: [-o, 0] }, {
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
}, an = class extends nn {
	constructor(e, t, n, r) {
		let i = At("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, At("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new tn(this.flow, i, { onRemove: this._onChildRemove(n) }));
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
				let t = At("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new tn(this.flow, t, {
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
}, on = parseInt(N.version.match(/^(\d+)\./)?.[1]) >= 19, sn = ["data", "digits"], cn = class extends Xt {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
cn.observedAttributes = on ? [] : sn, U("number-flow-react", cn);
var q = {}, ln = on ? (e) => e : JSON.stringify;
function un(e) {
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
var J = class extends N.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = un(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? cn.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), on && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
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
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = un(this.props);
		return /*#__PURE__*/ N.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: ln(s),
			data: ln(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, dn = /*#__PURE__*/ N.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	N.useImperativeHandle(o, () => s.current, []);
	let s = N.useRef(), c = N.useContext(fn);
	c?.useRegister(s);
	let l = N.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = N.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = N.useMemo(() => Nt(e, q[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ N.createElement(J, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), fn = /*#__PURE__*/ N.createContext(void 0), pn = (e) => e.length > 0 ? e : "";
function mn(e) {
	return typeof e == "object" && !!e;
}
var hn = (e, t, n) => e && e !== t ? e : n, gn = .747, _n = (e) => Number((e * gn).toFixed(3)), Y = (e) => ({
	min: _n(e.min),
	max: _n(e.max)
}), vn = _n(.8), yn = {
	base: Y({
		min: 1.05,
		max: 3.25
	}),
	md: Y({
		min: 1.24,
		max: 3.8
	}),
	xl: Y({
		min: 1.42,
		max: 4.36
	})
}, bn = {
	min: yn.base.min,
	max: yn.base.max
}, xn = yn.base.max, X = .75, Z = [
	"text-[length:var(--pc-font-input-meta-size,0.75rem)]",
	"leading-[var(--pc-font-input-meta-line-height,1rem)]",
	"[font-weight:var(--pc-font-input-meta-weight,400)]",
	"[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]",
	"[font-style:var(--pc-font-input-meta-style,inherit)]",
	"[text-transform:var(--pc-font-input-meta-text-transform,inherit)]",
	"@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]",
	"@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]"
].join(" "), Sn = {
	md: 448,
	xl: 560
}, Cn = "min(6ch, 100%)", wn = _n(60), Tn = 24, En = "cubic-bezier(0.2, 0.8, 0.2, 1)", Dn = .01, On = "0em", Q = {
	transformTiming: {
		duration: 450,
		easing: En
	},
	spinTiming: {
		duration: 480,
		easing: En
	},
	opacityTiming: {
		duration: 300,
		easing: En
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
		bounds: bn,
		growthFactor: vn
	};
	let t = Pn(e) || e.clientWidth, n = yn.base;
	return t >= Sn.xl ? n = yn.xl : t >= Sn.md && (n = yn.md), {
		bounds: Mn(n),
		growthFactor: Math.max(0, vn)
	};
}, Ln = (e, t, n = vn) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / xn, c = o * n * s, l = wn / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function Rn({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: c, formatOptions: l, clearOnFocus: u = !1, errorMessage: d, invalid: te = !1, limits: ne, reserveErrorSpace: re = !1, showMeta: ie = !0, showDivider: p = !0, reserveEmptyLimitMetaSpace: ae = !0, align: m = "center", animateValueChange: oe = !1, disabled: h = !1, onFocusChange: se }) {
	let ce = de(), { translateKey: le } = ee(), [ue, fe] = z(!1), g = R(null), pe = R(null), me = R(null), _ = R(!1), v = R(!1), y = R(e), b = mn(a) ? a : null, x = P((e) => {
		g.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	I(b, () => g.current), F(() => {
		_.current && e.length !== 0 && (v.current = !0);
	}, [e]);
	let he = P(() => {
		!u || e.length === 0 || _.current || (y.current = e, _.current = !0, v.current = !1, t(""));
	}, [
		u,
		t,
		e
	]), S = P(() => {
		h || (fe(!0), se?.(!0), he());
	}, [
		h,
		se,
		he
	]), ge = P(() => {
		if (fe(!1), se?.(!1), !u || !_.current) return;
		let n = !v.current && e.length === 0;
		_.current = !1, v.current = !1, n && t(y.current);
	}, [
		u,
		t,
		se,
		e.length
	]), _e = P(() => {
		h || he();
	}, [h, he]), ve = P((n) => {
		h || (_.current && (v.current = !0), t(f(e, n.target.value)));
	}, [
		h,
		t,
		e
	]), C = L(() => pn(e), [e]), ye = L(() => {
		if (!C) return null;
		let e = Number(C);
		return Number.isFinite(e) ? e : null;
	}, [C]), { currencyFormatter: w } = A(o, c, l), be = L(() => w ? C ? ye === null ? C : w.format(ye) : "" : C, [
		w,
		C,
		ye
	]), xe = ne?.min ?? "", Se = ne?.max ?? "", Ce = xe ? T(xe, w, void 0, c) || xe : "", we = Se ? T(Se, w, void 0, c) || Se : "", Te = !!(Ce || we), Ee = L(() => {
		if (!w || typeof w.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = w.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: w.currencyCodeSuffix || void 0
		};
	}, [w]), De = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [Oe, ke] = Ot(jn, ye, kn);
	F(() => {
		ke({
			type: "sync",
			numericValue: ye,
			defer: oe && ue && ye !== null,
			preserveRendered: ye === null && _.current && !v.current
		});
	}, [
		oe,
		ue,
		ye
	]);
	let Ae = L(() => {
		let e = [C, be].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [C, be]) || "0", [E, je] = z(() => Ln(Ae, bn)), [Me, Ne] = z(xn * X), Pe = R(E), Fe = R(Me);
	F(() => {
		Pe.current = E;
	}, [E]), F(() => {
		Fe.current = Me;
	}, [Me]), Dt(() => {
		let e = pe.current, t = me.current;
		if (!e || !t) return;
		let n = Fn(e), r = () => {
			let { bounds: n, growthFactor: r } = In(e), i = n.max * X;
			Math.abs(Fe.current - i) >= Dn && (Fe.current = i, Ne(i));
			let a = Math.max(e.clientWidth - Tn, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = Ln(Ae, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Pe.current - u) < Dn || (Pe.current = u, je(u));
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
	let Ie = `${E.toFixed(2)}rem`, Le = X, Re = `${Me.toFixed(2)}rem`, O = P((e) => {
		e.key === "Enter" && (e.preventDefault(), !h && i && r?.());
	}, [
		i,
		h,
		r
	]), k = !!Ee && Oe.renderedValue !== null && De, ze = k ? Oe.renderedValue : void 0, Be = !!be || k, Ve = !!be && !ue, He = le("field.amount.label"), Ue = hn(le("field.limits.min.label"), "field.limits.min.label", "Min"), We = hn(le("field.limits.max.label"), "field.limits.max.label", "Max"), Ge = ce.id("amount-input"), Ke = !!d || re, qe = ie && (!!n || Ke), Je = te || !!d, Ye = s(e, ne), Xe = Je ? "danger" : "neutral", Ze = Ye.isOutOfRange && Je ? "danger" : void 0, Qe = p && Te, j = "opacity-0";
	Ve && (j = h ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let $e;
	h || ($e = ue ? "cursor-pointer opacity-85" : "cursor-pointer");
	let et = ce.attrs("amount-section"), tt = ce.attrs("amount-content"), nt = ce.attrs("amount-input");
	return /* @__PURE__ */ B("div", {
		id: ce.id("amount-section"),
		...et,
		className: [et.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ V("div", {
			...tt,
			className: [tt.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ B("label", {
					className: "sr-only",
					htmlFor: Ge,
					children: He
				}),
				/* @__PURE__ */ B("div", {
					"data-theme": Xe,
					className: D(Qe && "border-b border-[var(--pc-color-depth-4)]", Qe && "pb-0.5", !h && "group"),
					children: /* @__PURE__ */ B("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ B("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ V("div", {
								className: D("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: pe,
								style: {
									minHeight: Re,
									height: Re
								},
								children: [
									/* @__PURE__ */ B("span", {
										"aria-hidden": !0,
										ref: me,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Le
										},
										children: Ae
									}),
									/* @__PURE__ */ B("input", {
										id: Ge,
										...nt,
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
										"aria-invalid": Je,
										ref: x,
										onChange: ve,
										onKeyDown: O,
										onFocus: S,
										onBlur: ge,
										onClick: _e,
										className: D(nt.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", $e),
										style: {
											fontSize: Ie,
											lineHeight: Le,
											width: "100%",
											maxWidth: "100%",
											minWidth: Cn,
											color: Ve ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${On})`
										}
									}),
									Be && /* @__PURE__ */ B("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											j,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: Ie,
											lineHeight: Le,
											width: "100%",
											maxWidth: "100%",
											minWidth: Cn,
											transform: `translateY(${On})`
										},
										children: k ? /* @__PURE__ */ B(dn, {
											value: ze,
											locales: Ee?.locales,
											format: Ee?.format,
											suffix: Ee?.suffix,
											animated: oe,
											transformTiming: Q.transformTiming,
											spinTiming: Q.spinTiming,
											opacityTiming: Q.opacityTiming,
											respectMotionPreference: !0
										}) : be
									})
								]
							})
						})
					})
				}),
				Te && /* @__PURE__ */ V("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5",
						"text-[var(--pc-color-input-meta-text,var(--pc-color-text-muted))]",
						"grid cursor-default",
						Z
					].join(" "),
					children: [/* @__PURE__ */ B("div", {
						"data-theme": Ze,
						className: D("min-w-0 text-left", Ze && "text-[var(--pc-color-text)]"),
						children: Ce ? /* @__PURE__ */ V("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ V("span", { children: [Ue, ":"] }), /* @__PURE__ */ B("span", {
								className: "truncate",
								children: Ce
							})]
						}) : null
					}), /* @__PURE__ */ B("div", {
						"data-theme": Ze,
						className: D("min-w-0 text-right", Ze && "text-[var(--pc-color-text)]"),
						children: we ? /* @__PURE__ */ V("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ V("span", { children: [We, ":"] }), /* @__PURE__ */ B("span", {
								className: "truncate",
								children: we
							})]
						}) : null
					})]
				}),
				qe && /* @__PURE__ */ V("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ B("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Ke && /* @__PURE__ */ B("div", {
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
	let i = ue(), a = de(), { uiComboView: s, uiComboView__PaymentTypes: c, onPaymentTypeSelected: l, uiAccountDelete: u } = Et(_e), { translateKey: d } = ee(), { paymentTypesList: f } = Se(), { getBonusCountForPaymentType: ne, getAvailableBonusesForPaymentType: re } = be(), { selectedPaymentType: ie, selectPaymentType: p, ensureDefaultSelection: m } = h(), { requestAccountDelete: oe, actionConfirmationModal: se } = Oe();
	F(() => {
		!s || !C(c) || m(f);
	}, [
		m,
		f,
		s,
		c
	]);
	let ce = f.length > 0, le = f.length > 1, fe = s && C(c) && le && !i, g = L(() => o(f, ie), [f, ie]), pe = L(() => g ? te(g) : null, [g]), me = L(() => {
		if (!g) return null;
		let e = ne(g, n), t = _(g);
		return e > 0 ? /* @__PURE__ */ B(ke, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		n,
		ne,
		g
	]), v = d("cta.choose_payment_type"), y = d("cta.interactive_prompt.choose_payment_type.title"), b = d("account.delete.title"), x = g?.name ?? "cta.choose_payment_type", he = g ? _(g) : x, S = P((e, t) => {
		if (i) return;
		let n = o(f, e);
		n && !Ve(n) && (p(_(n), { availableBonuses: re(n) }), l && l(n)), t();
	}, [
		re,
		i,
		l,
		f,
		p
	]), ge = P((e) => u && e.accountId ? /* @__PURE__ */ B(dt, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": b,
		disabled: i,
		onClick: () => {
			oe(e);
		},
		iconOnly: !0,
		label: b,
		leadingIcon: /* @__PURE__ */ B(ot, {})
	}) : null, [
		b,
		i,
		oe,
		u
	]);
	return /* @__PURE__ */ B(M, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ B(lt, { children: v }),
		triggerLabel: v,
		canOpen: fe,
		shouldRender: s && C(c) && ce,
		animationStyle: t,
		floating: r,
		actionContent: se,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ B(Ze, {
			domSlug: he,
			name: x,
			presentationPaymentType: g ?? void 0,
			nameKeys: g?.nameKeys,
			logo: g?.logo,
			logoContent: g ? void 0 : ae("h-full w-full"),
			limits: g?.limits,
			fee: g?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: me,
			title: pe ?? void 0,
			interactive: !1,
			isDisabled: i,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: fe ? /* @__PURE__ */ B(we, { children: /* @__PURE__ */ B(dt, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": y,
				disabled: i,
				onClick: e,
				leadingIcon: /* @__PURE__ */ B(E, {}),
				label: y
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: t, panelId: n }) => {
			let r = a.attrs("payment-type-picker-list");
			return /* @__PURE__ */ B("div", {
				id: n,
				...r,
				className: D(r.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ B(ut, {
					paymentTypes: f,
					domScope: "picker",
					listStyle: e.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (e) => {
						S(e, t);
					},
					interactionLocked: i,
					renderActions: ge,
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
	return /* @__PURE__ */ B("div", {
		...t,
		className: D("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var Vn = Tt({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), Hn = () => Et(Vn);
function Un({ children: e }) {
	let [t, n] = z(() => /* @__PURE__ */ new Set()), r = P((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = P((e) => e ? t.has(e) : !1, [t]), a = L(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ B(Vn.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function Wn() {
	return /* @__PURE__ */ V("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ B("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ B("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ B("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/utils/pendingWithdrawalDisplay.ts
var Gn = (e, t, n) => [n(d(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), Kn = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function qn({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = ee(), c = R(null);
	return F(() => {
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
	}, [a, o]), /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let o = t(e), l = Gn(e, n, s), u = [o, l].filter(Boolean).join(", ");
			return /* @__PURE__ */ B("button", {
				ref: e.paymentId === a ? c : void 0,
				type: "button",
				className: Kn,
				"aria-label": u || void 0,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ V("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ B("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: o
					}), l && /* @__PURE__ */ B("span", {
						className: D("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
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
	let { data: n, error: r } = await le({
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
	let { data: a, error: o } = await m({
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
}), or = Tt({
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
		icon: /* @__PURE__ */ B(Wn, {}),
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
	icon: /* @__PURE__ */ B(Wn, {}),
	tone: "secondary",
	footer: e
} : null, mr = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: u, title: d }) => /* @__PURE__ */ V(kt, { children: [u.length > 1 && /* @__PURE__ */ B(l, {
	isOpen: i && !r,
	onClose: s,
	title: d,
	children: /* @__PURE__ */ B(qn, {
		pendingWithdrawals: u,
		formatPendingWithdrawalAmount: n,
		formatDisplayValue: t,
		onSelect: c,
		isDisabled: a,
		focusPaymentId: o,
		isFocusRestoreActive: i && !r
	})
}), e] });
function hr({ children: e }) {
	let r = w(), i = ue(), a = Et(_e), { merchantId: o, userId: s, sessionId: c, debug: l, locale: u, currencyFormatOptions: d, method: f, lockAmount: te, uiInteractivePrompts: ne, uiSuggestAction: re, onPendingWithdrawalCancelled: ie } = a, p = a.uiCancelPendingPayout === !0, { translateKey: ae, translateKeys: m } = ee(), { formatDisplayValue: oe } = Ee(), h = L(() => {
		try {
			return new Intl.ListFormat(u, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [u]), { dismissPrompt: ce, isPromptDismissed: le } = Hn(), de = j(), [fe, g] = Ot(dr, cr), { isDrawerOpen: pe, selectedPaymentId: me, cancellingPaymentId: _, cancellationState: v } = fe, y = f === t.PAYIN && !te && ne && p && re.includes(n.ON_PENDING_PAYOUT_CANCEL) && !!(o && s && c), b = L(() => ({
		merchantId: o,
		userId: s,
		sessionId: c
	}), [
		o,
		c,
		s
	]), x = L(() => ir(b), [b]), { data: he } = O(ar(b, r, y)), S = L(() => he?.payments ?? [], [he?.payments]), ge = L(() => {
		let e = /* @__PURE__ */ new Map(), t = [...S, ...v?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, $e(n.amountCurrency, u, d));
		return e;
	}, [
		v?.cancelledPayments,
		d,
		u,
		S
	]), ve = P((e) => st(e.amountValue, ge.get(e.amountCurrency)), [ge]), C = P((e) => {
		let t = e.map((e) => st(e.amount, ge.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : h?.format(t) ?? t.join(", ");
	}, [h, ge]), ye = P((e) => C(rr(e)), [C]), be = L(() => nr(S), [S]), xe = le(be), Se = S.length === 1 ? S[0] : S.at(0) ?? null, { openActionConfirmation: Ce, actionConfirmationModal: we, isActionConfirmationOpen: Te, closeActionConfirmation: De } = Ue({ isConfirmDisabled: i });
	F(() => {
		g({ type: "reset" }), De();
	}, [
		De,
		y,
		o,
		c,
		s
	]), F(() => {
		xe && g({ type: "dismiss" });
	}, [xe]), F(() => {
		g({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: S,
			featureEnabled: y
		});
	}, [y, S]), F(() => {
		i && (g({ type: "close-drawer" }), De());
	}, [De, i]);
	let { mutateAsync: Oe, isPending: T } = at({
		mutationFn: async (e) => await tr({
			client: r,
			merchantId: o,
			userId: s,
			sessionId: c,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = S.filter((e) => e.paymentId !== t.paymentId);
			await de.invalidateQueries({ queryKey: x });
			try {
				n = (await de.fetchQuery(ar(b, r, !0))).payments;
			} catch {}
			let i = n.length, a = rr(n), o = a.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			g({
				type: "record-success",
				payment: t,
				pendingWithdrawals: S
			}), bt({
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
			g({ type: "finish-cancelling" });
		}
	}), ke = P(() => {
		i || !be || ce(be);
	}, [
		be,
		ce,
		i
	]), Ae = P((e) => {
		if (T || i) return;
		let t = ve(e), n = Gn(e, oe, m);
		Ce({
			title: m(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ V("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ B("p", { children: se(m(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: t }) }), n && /* @__PURE__ */ B("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: n
				})]
			}),
			confirmLabel: m(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: ae("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				g({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await Oe(e);
			}
		});
	}, [
		Oe,
		oe,
		ve,
		T,
		i,
		Ce,
		ae,
		m
	]), E = P(() => {
		Se !== null && Ae(Se);
	}, [Se, Ae]), je = P((e) => {
		g({
			type: "select-payment",
			paymentId: e.paymentId
		}), Ae(e);
	}, [Ae]), Me = P(() => {
		T || i || S.length <= 1 || g({ type: "open-drawer" });
	}, [
		T,
		i,
		S.length
	]), D = P(() => {
		T || g({ type: "close-drawer" });
	}, [T]), Ne = L(() => {
		if (!v || v.cancelledPayments.length === 0) return null;
		let e = rr(v.cancelledPayments);
		return /* @__PURE__ */ B("p", {
			className: sr,
			children: se(ae("pending_withdrawal.cancel.success"), { amount: C(e) })
		});
	}, [
		v,
		C,
		ae
	]), Pe = L(() => !y || xe ? null : Se ? fr({
		pendingWithdrawals: S,
		activePendingWithdrawal: Se,
		isPaymentInteractionLocked: i,
		isCancelling: T,
		isDrawerOpen: pe,
		onDismiss: ke,
		onCancel: E,
		onView: Me,
		formatPendingWithdrawalAmount: ve,
		formatPendingWithdrawalTotals: ye,
		successFooter: Ne
	}) : pr({ successFooter: Ne }), [
		Se,
		y,
		ve,
		ye,
		E,
		ke,
		Me,
		T,
		i,
		pe,
		xe,
		S,
		Ne
	]), Fe = L(() => y ? /* @__PURE__ */ B(mr, {
		actionConfirmationModal: we,
		formatDisplayValue: oe,
		formatPendingWithdrawalAmount: ve,
		isActionConfirmationOpen: Te,
		isDrawerOpen: pe,
		isSelectionDisabled: i || T || _ !== null,
		onClose: D,
		onSelect: je,
		pendingWithdrawals: S,
		selectedPaymentId: me,
		title: ae("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		we,
		_,
		y,
		oe,
		ve,
		D,
		je,
		T,
		Te,
		i,
		pe,
		S,
		me,
		ae
	]), Ie = P((e) => e, []), Le = L(() => ({
		interactivePromptContent: Pe,
		pendingWithdrawalDrawer: Fe,
		attachSuccessFooter: Ie
	}), [
		Ie,
		Pe,
		Fe
	]);
	return /* @__PURE__ */ B(or.Provider, {
		value: Le,
		children: e
	});
}
var gr = () => Et(or), _r = (e, t) => t === "Backspace" ? e.length === 0 ? e : b(e.slice(0, -1)) : b(`${e}${t}`), vr = (e) => ({
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
}, br = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", xr = "pc-enter-drift-item", Sr = "pc-enter-lift-item", Cr = x, wr = "min-h-[27cqw] @md:min-h-[27cqw]", Tr = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", Er = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", Dr = "flex w-full flex-col items-center gap-2 @md:gap-3", Or = "pb-3 @md:pb-4", kr = [
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
	let t = Pe(e);
	if (t !== "/combo") throw wt({
		to: t,
		replace: !0
	});
}, Vr = St("/combo/")({
	beforeLoad: ({ context: e }) => {
		Br(e);
	},
	component: Hr
});
function Hr() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, method: r, gotoPaymentType: i, bonuses: a, uiBonuses: o, uiBonusesStyle: s } = Et(_e), c = tt(), l = L(() => Pe({
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
	return F(() => {
		l !== "/combo" && c({
			to: l,
			replace: !0
		});
	}, [c, l]), l === "/combo" ? /* @__PURE__ */ B(Ur, {
		initialAmount: e,
		lockAmount: t
	}) : null;
}
function Ur({ initialAmount: e, lockAmount: n }) {
	let o = de(), { contentInset: l } = g(), d = ue(), { isSubscribed: f, publishInactive: ae } = vt(), { method: m, uiSuggestAmounts: le, selectedPaymentType: x, uiComboView: w, uiComboView__PaymentTypes: we, uiComboView__PaymentForm: T, gotoPaymentType: ke, bonuses: E, uiPaymentConfirmView: Pe, uiBonusesStyle: O, uiInteractivePrompts: Ue, uiFixedControls: A, hasAppliedGotoPaymentType: Ze, setCashierState: j, onPaymentTypeSelected: $e, onPaymentTypeDeselected: at, currency: M, locale: st, currencyFormatOptions: lt, resetFlowOnBack: bt, user: St, uiShowFees: wt, uiAccountDelete: N, paymentFormDraft: Tt, selectedBonusCode: I, onBonusSelected: Dt, onBonusDeselected: At } = Et(_e), { resolveTextKey: H, resolveTextKeys: jt, translateKey: U } = ee(), Mt = tt(), Nt = R(null), Pt = R(!1), Ft = R(!1), It = R(!1), Lt = R(null), Rt = R(null), [zt, W] = Ot(yr, e, vr), [Bt, Vt] = z(!1), [Ht, Ut] = z(!1), [Wt, Gt] = z(null), [G, Kt] = z({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), K = zt.value, qt = R(K), Jt = R({
		amount: K,
		amountIsOutOfRange: !1,
		gotoPaymentType: ke,
		selectedPaymentType: x,
		selectedPaymentTypeId: x,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: m
	}), { getPaymentType: Yt, paymentTypesList: Xt, isLoading: Zt, isError: Qt } = Se(), { getBonusCountForPaymentType: $t, getBonusAvailabilityForPaymentType: en, getAvailableBonusesForPaymentType: tn } = be(), { selectPaymentType: nn, clearPaymentSelection: rn } = h(), { selectBonusCode: an } = xe(), { requestAccountDelete: on, actionConfirmationModal: sn } = Oe();
	F(() => {
		qt.current = K;
	}, [K]), F(() => {
		Ft.current = !1, It.current = !1, W({
			type: "sync-external",
			value: e
		});
	}, [e]), F(() => {
		bt && j((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [bt, j]), F(() => {
		Pt.current && (Pt.current = !1, Nt.current?.blur());
	}, [K]);
	let cn = L(() => me(le), [le]), q = L(() => x ? Yt(x) : null, [Yt, x]), ln = q ? _(q) : null, un = ln ? `quick-payment-form:${ln}` : null, J = ln ?? x, dn = Xt.length > 0, fn = w && u(we), pn = w && C(we), mn = w ? ye({
		mode: we,
		paymentFormEnabled: T
	}) : null, hn = Ce(mn), gn = _t(mn), _n = !!(mn && dn), Y = w && fn && q && q ? ht(q) : !0, vn = !!(q && rt(q)), yn = !!(q && (vn || Ie(q))), bn = !!(w && fn && T && q && yn && (!mn || hn)), xn = hn && bn, X = Y, Z = Y ? K : "", Sn = x && i(Tt, {
		paymentTypeName: J ?? x,
		method: m,
		amount: Z
	}) ? Tt : null, Cn = L(() => ({
		...Sn?.values ?? {},
		amount: Z
	}), [Sn?.values, Z]), wn = Y && k(K) && !!x && !q && Zt && !Qt, Tn = !!ke && !Ze, En = fn, Dn = !!(q && Ve(q)), On = En && Zt && !Qt && !dn && !x, Q = En && !q || Dn, kn = w && !!x && (fn || Tn), An = !dn || Zt || Qt, jn = q?.limits, Mn = ze(m, St, q?.fee), Nn = s(Z, jn, { maxBoundary: Mn }), Pn = P((e) => Ve(e) ? !0 : !ht(e) || !k(K) ? !1 : s(K, e.limits, { maxBoundary: ze(m, St, e.fee) }).isOutOfRange, [
		K,
		m,
		St
	]), Fn = He(Z, jn, { maxBoundary: Mn }), In = Fn?.key, [Ln, Vn] = z(() => ({
		value: K,
		key: In
	})), [Hn, Un] = z(K), Wn = Y && Bt && zt.changeOrigin === "user" && !!In && Ln.key === void 0, Gn = Y && Bt && zt.changeOrigin === "user", Kn = Ln.value === K && Ln.key === In, qn = Gn && Hn !== K, Jn = Y ? qn ? Hn : K : "", Yn = br({
		livePaymentAmount: Z,
		paymentTypeSupportsAmount: Y,
		visiblePaymentSummaryAmount: Jn
	}), Xn = Wn && !Kn, Zn = In;
	Xn && (Zn = void 0);
	let Qn = Zn ? Fn : void 0, { currencyFormatter: $n, formatCurrencyValue: er, formatDisplayValue: tr } = Ee(), { interactivePromptContent: nr, pendingWithdrawalDrawer: rr, attachSuccessFooter: ir } = gr(), ar = L(() => he($n), [$n]), or = v(Qn, U, er), sr = P((e) => Ve(e) ? !0 : !Xn && Pn(e), [Xn, Pn]), cr = Y ? k(K) : !!q, lr = d || Y && !k(K) || Y && Nn.isOutOfRange || An || Q, ur = U("cta.continue"), dr = U(m === t.PAYOUT ? "cta.payout" : "cta.payin"), fr = dr.toLocaleLowerCase(st), pr = L(() => Y ? pe(K) : null, [K, Y]), mr = L(() => pe(e), [e]), [hr, kr] = z(null), Ar = P((e) => {
		W({
			type: "sync-external",
			value: ge(e.nextAmount)
		}), kr(e);
	}, []), Br = !!(hr && !mt(O) && I === hr.bonus.code && pr === hr.nextAmount), Vr = Y ? n ? k(K) : k(K) && (zt.hasExplicitSelection || Br) : !!q, Hr = L(() => Y ? pe(Jn) : null, [Y, Jn]), Ur = L(() => Y ? pe(Yn) : null, [Y, Yn]), Wr = L(() => ({ amount: Ur }), [Ur]), Gr = q ? $t(q, { amount: pr }) : 0, Kr = q ? en(q, { amount: Ur }).length : 0, qr = mt(O) && (q ? Gr > 0 : xt(E)), Jr = pn && (yt(O) || De(O)) && !!q && Kr > 0, Yr = _n && De(O), Xr = q ? ct({
		uiPaymentConfirmView: Pe,
		hasPendingStep: qr,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (q.notifications?.length ?? 0) > 0
	}) : null, Zr = w && fn && !!q && !vn && Xr?.action === "submit", Qr = Zr && cr && !Nn.isOutOfRange, $r = q ? ct({
		uiPaymentConfirmView: Pe,
		hasPendingStep: qr,
		hasVisibleInlineContent: vn,
		hasConfirmOnlyContent: Ie(q)
	}) : null, ei = w && bn && !!q && $r?.action === "submit", ti = ei && cr && !Nn.isOutOfRange, ni = Zr || ei, ri = bn || Qr || ti, ii = ri ? J : null;
	F(() => {
		let e = Y ? fe(K) : "", t = x ? {
			paymentTypeName: J ?? x,
			method: m,
			amount: e
		} : null;
		j((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !i(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
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
		m,
		Y,
		x,
		j
	]), F(() => {
		let e = () => {
			Lt.current &&= (clearTimeout(Lt.current), null);
		};
		if (e(), Wn) Lt.current = setTimeout(() => {
			Lt.current = null, Vn({
				value: K,
				key: In
			});
		}, Lr);
		else return Vn((e) => e.value === K && e.key === In ? e : {
			value: K,
			key: In
		}), () => {
			e();
		};
		return e;
	}, [
		K,
		In,
		Wn
	]), F(() => {
		let e = () => {
			Rt.current &&= (clearTimeout(Rt.current), null);
		};
		if (e(), Gn) Rt.current = setTimeout(() => {
			Rt.current = null, Un(K);
		}, Lr);
		else return Un((e) => e === K ? e : K), () => {
			e();
		};
		return e;
	}, [K, Gn]), F(() => {
		Jt.current = {
			amount: K,
			amountIsOutOfRange: Nn.isOutOfRange,
			gotoPaymentType: ke,
			selectedPaymentType: x,
			selectedPaymentTypeId: J,
			shouldShowBonusStep: qr,
			shouldSkipPaymentTypeSelection: kn,
			isPaymentTypesUnavailable: An,
			isPaymentTypeSelectionMissing: Q,
			paymentTypeSupportsAmount: Y,
			method: m
		};
	}, [
		J,
		K,
		Nn.isOutOfRange,
		ke,
		x,
		qr,
		kn,
		An,
		Q,
		Y,
		m
	]);
	let ai = P(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = Jt.current;
		if (o || s) return;
		let u = c ? fe(e) : "";
		if (!(c && u.length === 0) && !(c && t)) {
			if (j((e) => {
				let t = e.initialAmount !== u, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
				return !t && !r && !i ? e : {
					...e,
					...t ? { initialAmount: u } : {},
					paymentFormDraft: null,
					comboViewFormDraft: null,
					...r ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), a && r) {
				Mt(i ? { to: "/bonus" } : {
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			Mt({ to: `/pts/${l}` });
		}
	}, [Mt, j]), oi = P((e, t) => {
		if (!J) return;
		let n = _(e);
		if (n !== J || An || Q || Y && Nn.isOutOfRange) return;
		let r = Y ? fe(qt.current) : "";
		if (!(Y && r.length === 0)) {
			if (j((e) => {
				let i = !!ke && !e.hasAppliedGotoPaymentType, a = Y ? {
					...t.values,
					amount: r
				} : t.values;
				return {
					...e,
					initialAmount: r,
					comboViewFormDraft: {
						paymentTypeName: n,
						method: m,
						amount: r,
						values: a,
						hasHostedFields: t.hasHostedFields
					},
					...i ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), qr) {
				Mt({ to: "/bonus" });
				return;
			}
			Mt({
				to: "/pt/$id",
				params: { id: n }
			});
		}
	}, [
		J,
		Nn.isOutOfRange,
		ke,
		Q,
		An,
		m,
		Mt,
		Y,
		j,
		qr
	]), si = P((e, t) => {
		if (!J) return;
		let n = _(e);
		if (n !== J) return;
		let r = Y ? fe(qt.current) : "", i = {
			paymentTypeName: n,
			method: m,
			amount: r,
			values: Y ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		j((e) => Be(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		J,
		m,
		Y,
		j
	]), ci = P((e) => {
		if (!(n || d)) {
			if (It.current) {
				It.current = !1, Ft.current = !1, W({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			if (Ft.current && e.length === 0) {
				W({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			Ft.current = !1, It.current = !1, W({
				type: "user",
				value: e,
				markExplicitSelection: e.length > 0
			});
		}
	}, [
		n,
		d,
		W
	]), li = P((e) => {
		if (n || d) return;
		let t = b(e);
		Ft.current = !1, It.current = !1, Pt.current = !0, W({
			type: "programmatic",
			value: t,
			markExplicitSelection: t.length > 0
		});
	}, [
		n,
		d,
		W
	]), ui = Wt?.submit, di = !ri || G.paymentTypeName === ii, fi = ri ? !di || !ui || lr || !ui.visible || ui.disabled : lr, pi = ri && di && ui ? ui.loading : !1, mi = P(() => {
		if (ri && di && ui) return ui.onClick();
		ai();
	}, [
		ui,
		ai,
		di,
		ri
	]), hi = ni || bn && $r?.buttonLabel === "pay" ? dr : ur, gi = P(() => {
		mi();
	}, [mi]), _i = L(() => [/* @__PURE__ */ B(dt, {
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
	]), vi = P((e) => {
		if (n || d) return;
		let t = e.key === "," ? "." : e.key, r = _r(qt.current, t);
		Ft.current = !1, It.current = !1, W({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		n,
		d,
		W
	]), yi = P((e) => {
		if (Vt(e), n || d || !w) {
			Ft.current = !1, It.current = !1;
			return;
		}
		if (e) {
			k(qt.current) && (Ft.current = !0, It.current = !1);
			return;
		}
		if (Ft.current && !k(qt.current)) {
			It.current = !0;
			return;
		}
		Ft.current = !1, It.current = !1;
	}, [
		d,
		n,
		w
	]), bi = P((e) => {
		let t = Nt.current;
		if (!t || n || d || zr(e.target, e.currentTarget) || Rr(e.target, e.currentTarget)) return;
		let r = t.ownerDocument.activeElement === t, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, a = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		if (!(!r && a)) {
			if (r && !i) {
				e.preventDefault(), e.stopPropagation(), t.blur();
				return;
			}
			e.preventDefault(), e.stopPropagation(), !r && t.focus();
		}
	}, [d, n]), xi = P((e) => {
		let t = e.currentTarget.scrollTop > 1;
		Ut((e) => e === t ? e : t);
	}, []);
	Xe({
		inputRef: Nt,
		inputType: "decimal",
		onType: n || d || !X ? void 0 : vi
	});
	let Si = X ? n ? "field.amount.label" : "cta.enter_amount" : "payment.enter_details", Ci = U(Si), wi = P((e) => tr(e) || e, [tr]), $ = L(() => ({
		legacyTitle: Ci,
		titleKey: X ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: fr },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ B(Te, {})
	}), [
		fr,
		X,
		Ci
	]), Ti = L(() => or ? {
		...$,
		legacyTitle: or,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ B(ot, {}),
		tone: "danger"
	} : null, [or, $]), Ei = L(() => {
		if (!hr || !mt(O) || pr !== hr.nextAmount && mr !== hr.nextAmount || zt.changeOrigin === "user" && pr !== hr.nextAmount || I !== hr.bonus.code) return null;
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
			icon: /* @__PURE__ */ B(Je, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ B("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: se(U("bonus.top_up.success"), { amount: er(hr.addedAmount) })
			})
		};
	}, [
		pr,
		zt.changeOrigin,
		$,
		hr,
		er,
		mr,
		fr,
		I,
		U,
		O
	]), Di = L(() => ce({ translateKey: U }), [U]), Oi = L(() => En && (Qt || !dn) ? {
		...$,
		legacyTitle: U("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ B(ot, {}),
		tone: "danger"
	} : null, [
		$,
		dn,
		Qt,
		En,
		U
	]), ki = !ri || G.paymentTypeName === ii, Ai = !ri || G.isComplete, ji = !!(f && Zr && q && un), Mi = (!Y || k(Z)) && !Nn.isOutOfRange && !G.errorMessage, Ni = ji && q ? Fe({
		amount: Z,
		bonusCode: I,
		canSubmit: !fi,
		complete: Mi && Ai,
		currency: M,
		dirty: Z !== b(e),
		errors: Mi ? {} : { amount: "invalid" },
		fields: (q.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: b(e) },
		method: m,
		paymentType: q,
		submitting: pi,
		valid: Mi,
		values: { amount: Z }
	}) : null, Pi = P(() => {
		un && ae(un);
	}, [ae, un]), Fi = !Zt && !wn && ki, Ii = L(() => {
		let e = $, t = {
			...e,
			titleKey: n ? void 0 : e.titleKey
		};
		return wn ? t : Ti || (ri && G.errorMessage ? {
			...e,
			legacyTitle: G.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ B(ot, {}),
			tone: "danger"
		} : Ei || (Vr ? Q ? {
			...e,
			...ne({ translateKey: U }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ B(Re, {})
		} : Di : e));
	}, [
		Ti,
		$,
		Ei,
		G.errorMessage,
		U,
		Vr,
		wn,
		Q,
		Ai,
		n,
		Di,
		ri
	]), [Li, Ri] = z(null), zi = Li?.methodPromptLabel === fr ? Li.content : null, Bi = zi?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", Vi = qn || Xn, Hi = Ti ?? (Vi && !Ti && !Bi ? zi ?? Ii : Ii), Ui = L(() => ir(Hi), [ir, Hi]), Wi = L(() => ({
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
		iconSlotClassName: D($.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [$]);
	F(() => {
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
	let Ki = Oi ?? Ti, qi = !!(I && !mt(O) && !Oi && !Ti && Gi.titleKey === "interactive_prompt.quick_payment.enter_amount.title"), Ji = L(() => {
		if (!qi) return null;
		let e = $;
		return Q ? {
			...e,
			...ne({ translateKey: U }),
			titleValues: void 0
		} : Ai ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ B(Re, {})
		} : Di;
	}, [
		$,
		Ai,
		Q,
		Di,
		qi,
		U
	]), Yi = qi ? Ji : Gi, Xi = jr, Zi = X && !n && cn.length > 0, Qi = !Zi, $i = !!(jn?.min || jn?.max), ea = $i ? Tr : wr, ta = "gap-2", na = D("p-3", !$i && "[@container_(min-width:520px)]:py-3.5"), ra = Qi && !$i, ia = qe(m, M, St, {
		amount: Jn,
		fee: q?.fee,
		includeRemainingBalance: !0
	}), aa = wt ? ie(q?.fee, Hr ?? 0, {
		feeCurrencyFormatter: ar,
		formatCurrencyValue: er
	}) : null, oa = m === t.PAYIN && wt ? oe(q?.fee, Hr ?? 0, M) : null, sa = Y ? m === t.PAYOUT ? ve(ia, [aa]) : aa || oa ? [aa, oa].filter((e) => e !== null) : ia : [], ca = sa.length > 0, la = hn, ua = ca && la && (!Y || Hr !== null && Hr > 0), da = ca && !la, fa = L(() => Mn !== null && Hr !== null && Hr > Mn ? { "withdrawable-balance": "danger" } : {}, [Mn, Hr]), pa = w && n && !!e && !Zi && !$i, ma = !pa, ha = X || Zi, ga = bn && !xn && !!x, _a = _n, va = ha || ga || _a || !!Wt, ya = pn && dn, ba = ya && A, xa = ya && !A, Sa = w && pn && A && l > 0 ? l : 0, Ca = L(() => Sa > 0 ? { paddingBottom: Sa } : void 0, [Sa]), wa = w && A, Ta = 2 + +!!xa + +!!ga + +!!_a + +!!ba, Ea = 2 + +!!xa, Da = Ea + +!!ga, Oa = Da + +!!_a, ka = or ? "danger" : "neutral", Aa = D(xr, !Qi && !$i && "self-center", Qi && "row-start-2 self-end", Qi && (ra ? "pb-1.5 @md:pb-2" : "pb-2")), ja = n ? void 0 : "cursor-pointer", Ma = D("min-w-0 w-full row-start-3 self-start", Sr), Na = ra ? Nr : Mr, Pa = Pr;
	Qi ? Pa = Na : $i && (Pa = Fr);
	let Fa = Qi ? Na : Ir, Ia = /* @__PURE__ */ B(je, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: Ci,
		presentationTitle: H(Si),
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), La = ha && da, Ra = La ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", za = La ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ba = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", Va = o.attrs("quick-payment-summary-surface"), Ha = o.attrs("quick-payment-amount-surface"), Ua = da ? /* @__PURE__ */ B("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": Va["data-pc-slot"],
		className: D(Va.className, "w-full", La && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ B(et, {
			summaryFields: sa,
			rowVariants: fa,
			animateEntrance: !1,
			panelBorderEdges: La ? "without-top" : "all",
			className: La ? D("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, Wa = P((e, t) => {
		Kt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Ga = ga && q ? /* @__PURE__ */ B("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: p({
			index: Ea,
			total: Ta,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ B(We, {
			paymentType: q,
			selectionId: ln ?? void 0,
			amountValue: Z,
			hideAmountField: !0,
			onActionsChange: Gt,
			onPromptStateChange: Wa,
			onPreparedValues: oi,
			onValuesChange: si,
			submitMode: $r?.submitMode,
			valueOverrides: Cn,
			animateEntrance: !1
		}, ln ?? q.name)
	}) : null, Ka = Jr && q ? /* @__PURE__ */ B(Le, {
		placement: De(O) ? "payment-list" : "payment-form",
		paymentType: q,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, qa = Yr ? /* @__PURE__ */ B(Le, {
		placement: "payment-list",
		paymentType: q,
		paymentTypes: Xt,
		amount: Yn,
		onTopUpAccepted: Ar
	}) : null, Ja = xa ? /* @__PURE__ */ B("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: D("w-full", c),
		children: /* @__PURE__ */ B(zn, {
			bonusEvaluationContext: Wr,
			floating: _i.length > 0 ? !1 : "adaptive",
			animationStyle: p({
				index: 2,
				total: Ta,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, Ya = A || !hn ? /* @__PURE__ */ B(S, {
		domScope: "quick-payment-actions",
		items: _i,
		fixed: A,
		enabled: !On
	}) : null, Xa = Qr && q ? /* @__PURE__ */ B("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ B(We, {
			paymentType: q,
			selectionId: ln ?? void 0,
			amountValue: Z,
			hideAmountField: !0,
			onActionsChange: Gt,
			onPromptStateChange: Wa,
			onPreparedValues: oi,
			onValuesChange: si,
			submitMode: "submit",
			valueOverrides: Cn,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: Pi
		}, ln ?? q.name)
	}) : null, Za = P((e) => {
		let t = _(e), n = yt(O) && en(e, { amount: Ur }).length > 0, i = !A, a = n && i, o = !Ke(e);
		return /* @__PURE__ */ V("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: D("flex min-w-0 flex-col", o && "px-0.5", a ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ B(Le, {
					paymentType: e,
					amount: Yn,
					onTopUpAccepted: Ar
				}),
				/* @__PURE__ */ B(We, {
					paymentType: e,
					selectionId: t,
					amountValue: Z,
					hideAmountField: !0,
					onActionsChange: Gt,
					onPromptStateChange: Wa,
					onPreparedValues: oi,
					onValuesChange: si,
					valueOverrides: Cn,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: $r?.submitMode,
					reserveTrailingActionSpace: i && !a,
					animateEntrance: !1
				}, t),
				i && /* @__PURE__ */ B(r, {
					domScope: "quick-payment-accordion-actions",
					items: _i,
					adaptive: !1
				})
			]
		});
	}, [
		Cn,
		oi,
		si,
		Wa,
		Ar,
		en,
		Z,
		_i,
		$r?.submitMode,
		A,
		O,
		Yn,
		Ur
	]), Qa = P((e) => ua ? /* @__PURE__ */ B(Me, {
		summaryFields: sa,
		rowVariants: fa
	}) : null, [
		sa,
		ua,
		fa
	]), $a = P((e) => rt(e) || Ie(e) || !A || ua || yt(O) && en(e, { amount: Ur }).length > 0, [
		en,
		ua,
		A,
		O,
		Ur
	]), eo = P((e) => {
		if (d) return;
		let t = Yt(e);
		if (!t || Pn(t)) return;
		let n = _(t);
		if (gn && J === n && $a(t)) {
			rn(), at?.(t);
			return;
		}
		nn(n, { availableBonuses: tn(t, { amount: pr }) }), $e?.(t);
	}, [
		J,
		pr,
		rn,
		tn,
		Yt,
		$a,
		gn,
		d,
		Pn,
		at,
		$e,
		nn
	]), to = U("account.delete.title"), no = P((e) => N && e.accountId ? /* @__PURE__ */ B(dt, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": to,
		disabled: d,
		onClick: () => {
			on(e);
		},
		iconOnly: !0,
		label: to,
		leadingIcon: /* @__PURE__ */ B(ot, {})
	}) : null, [
		to,
		d,
		on,
		N
	]), ro = _a && mn ? /* @__PURE__ */ B("div", {
		"data-slot": "quick-payment-payment-types",
		className: D("w-full", c),
		style: p({
			index: Da,
			total: Ta,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: hn ? /* @__PURE__ */ B(it, {
			paymentTypes: Xt,
			domScope: "quick-payment",
			selectedPaymentType: x,
			onSelect: eo,
			renderActions: no,
			renderPanel: Za,
			renderFooter: Qa,
			hasPanel: $a,
			collapsible: gn,
			isPaymentTypeDisabled: sr,
			interactionLocked: d,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Wr
		}) : /* @__PURE__ */ B(ut, {
			paymentTypes: Xt,
			domScope: "quick-payment",
			listStyle: mn,
			selectable: !0,
			selectedPaymentType: x,
			onSelect: eo,
			renderActions: no,
			isPaymentTypeDisabled: sr,
			interactionLocked: d,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: Wr
		})
	}) : null, io = qa || ro ? /* @__PURE__ */ V("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [qa, ro]
	}) : null, ao = nr ? /* @__PURE__ */ V("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ B(y, {
			content: nr,
			forceVisible: !0
		}), rr]
	}) : null, oo = Ga || io || Xa || ao ? /* @__PURE__ */ V(kt, { children: [
		Ga,
		io,
		Xa,
		ao,
		sn
	] }) : void 0, so = !!(Ga || Xa || io && xn), co = !!(so || ao), lo = !so || !!Wt, uo = co && !lo ? "protected-surface-not-ready" : fi ? "invalid-state" : void 0, fo = P((e) => {
		if (e === I) return;
		let t = I ? E?.find((e) => e.code === I) : void 0, n = e ? E?.find((t) => t.code === e) : void 0;
		e && !n || (an(e), t && At?.(t), n && Dt?.(n));
	}, [
		E,
		At,
		Dt,
		an,
		I
	]), po = L(() => Xt.flatMap((e) => {
		let t = _(e), n = te(e), r = nt({
			paymentType: e,
			id: t,
			label: n ? Ne(n) : jt(e.nameKeys ?? e.name),
			currency: M,
			formatMoney: er,
			minimumLabel: H("field.limits.min.label"),
			maximumLabel: H("field.limits.max.label"),
			selected: J === t,
			disabled: Pn(e),
			unavailable: Ve(e)
		});
		return r ? [r] : [];
	}), [
		J,
		M,
		er,
		Pn,
		Xt,
		H,
		jt
	]), mo = L(() => (q ? en(q, { amount: pr }) : (E ?? []).map((e) => ({
		bonus: e,
		status: "available",
		reasons: []
	}))).map(({ bonus: e, status: t }) => ({
		id: e.code,
		title: H(e.title),
		description: H(e.description),
		selected: e.code === I,
		available: t === "available"
	})), [
		pr,
		E,
		en,
		q,
		I,
		H
	]), { createAction: ho, revision: go } = Qe({
		kind: "screen",
		id: "combo",
		scope: "content"
	}), _o = L(() => X ? cn.map((e) => ({
		amount: Ae(e, M, er),
		selected: k(Z) && a(e, Z) === 0,
		disabled: n || d || s(e, jn, { maxBoundary: Mn }).isOutOfRange
	})) : [], [
		jn,
		M,
		er,
		d,
		n,
		Z,
		Mn,
		X,
		cn
	]), vo = L(() => ({
		screen: "combo",
		revision: go,
		busy: d || pi,
		amountEntryVisible: X,
		amount: Ae(Z, M, er),
		...X && or && Zn ? { amountError: Ge(H(Zn), or) } : {},
		method: m,
		amountLocked: n,
		amountLabel: H("field.amount.label"),
		paymentTypesLabel: H("cta.choose_payment_type"),
		continueLabel: H("cta.continue"),
		paymentTypes: po,
		suggestedAmounts: _o,
		bonuses: mo,
		selectedBonusId: I,
		protectedSurfaceRequired: co,
		protectedSurfaceReady: lo,
		...co ? { protectedSurfaceLabel: H(ft) } : {},
		canContinue: !fi
	}), [
		or,
		M,
		lo,
		co,
		fi,
		pi,
		er,
		d,
		n,
		m,
		mo,
		po,
		_o,
		Z,
		H,
		go,
		I,
		X,
		Zn
	]), yo = L(() => ({
		setAmount: ho("setAmount", (e) => {
			ci(b(e));
		}, {
			busy: d,
			validate: (e) => b(e) === e,
			unavailableReason: n || !X ? "invalid-state" : void 0
		}),
		selectPaymentType: ho("selectPaymentType", eo, {
			busy: d,
			validate: (e) => po.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		selectBonus: ho("selectBonus", fo, {
			busy: d,
			validate: (e) => e === null || mo.some((t) => t.id === e && t.available)
		}),
		continue: ho("continue", () => mi(), {
			busy: d || pi,
			unavailableReason: uo
		})
	}), [
		ho,
		pi,
		eo,
		mi,
		fo,
		ci,
		d,
		n,
		uo,
		mo,
		po,
		X
	]), bo = P((e) => /* @__PURE__ */ B("div", {
		id: o.id("route-quick-payment"),
		"data-pc-route": "combo",
		onScroll: xi,
		style: Ca,
		className: D(o.className("route-quick-payment"), o.className("route-combo"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", A ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
		children: e
	}), [
		o,
		xi,
		Ca,
		A
	]);
	return /* @__PURE__ */ V(kt, { children: [ji && un && /* @__PURE__ */ B(pt, {
		sourceId: un,
		state: Ni
	}), /* @__PURE__ */ B(Ct, {
		isLoading: On,
		loaderLabel: U("loading.payment_types"),
		loaderLabelKey: "loading.payment_types",
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ V(Ye, {
			id: "combo",
			model: vo,
			actions: yo,
			deferPresentationUpdates: co,
			frame: bo,
			protectedContent: oo,
			children: [
				/* @__PURE__ */ V("div", {
					className: D("flex flex-1 flex-col items-center", Ue ? Er : "justify-center"),
					children: [Ue ? /* @__PURE__ */ V("div", {
						className: Dr,
						children: [/* @__PURE__ */ V("div", {
							"data-slot": "quick-payment-prompt-sticky-anchor",
							"data-pc-scroll-obstruction": "top",
							className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
							children: [/* @__PURE__ */ B("div", {
								className: D("pointer-events-auto", Cr, xr),
								style: p({
									index: 0,
									total: Ta,
									direction: "reverse",
									baseDelayMs: 12,
									staggerMs: 24
								}),
								children: /* @__PURE__ */ V("div", {
									className: "flex flex-col gap-3",
									children: [nr && /* @__PURE__ */ B(y, {
										content: nr,
										className: Xi
									}), /* @__PURE__ */ B(y, {
										content: Yi,
										className: Xi
									})]
								})
							}), /* @__PURE__ */ B("div", {
								"aria-hidden": "true",
								"data-slot": "quick-payment-prompt-sticky-fade",
								"data-pc-scroll-obstruction-extent": "true",
								style: re,
								className: D("pointer-events-none absolute inset-x-0 top-full", Ht ? "opacity-100" : "opacity-0")
							})]
						}), va && /* @__PURE__ */ B("div", {
							className: D(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ V(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ V("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: D(Ha.className, "flex flex-col", Ra, za, ta, Ba, na, ea),
										children: [/* @__PURE__ */ V("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Pa,
											children: [
												/* @__PURE__ */ B("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": ka,
													className: D(Aa, ja),
													onMouseDown: bi,
													style: p({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: Ia
												}),
												/* @__PURE__ */ B("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: Qi ? D(Ma, ja) : D("w-full", Sr, ja),
													onMouseDown: bi,
													style: p({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ B(Rn, {
														inputRef: Nt,
														value: K,
														onChange: ci,
														onSubmit: gi,
														onFocusChange: yi,
														canSubmit: !fi,
														disabled: n || d,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: M,
														locale: st,
														formatOptions: lt,
														clearOnFocus: w && !n && !d,
														animateValueChange: zt.changeOrigin === "programmatic"
													})
												}),
												Zi && !$i && /* @__PURE__ */ B(gt, {
													suggestions: cn,
													activeSuggestion: K,
													onSelect: li,
													disabled: d,
													formatLabel: wi,
													amountLimits: jn,
													size: "xs",
													className: D("order-3", "mt-1")
												})
											]
										}), Zi && $i && /* @__PURE__ */ B(gt, {
											suggestions: cn,
											activeSuggestion: K,
											onSelect: li,
											disabled: d,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: D("order-3", "[@container_(min-width:520px)]:-mt-0.5")
										})]
									}),
									La && Ua,
									!La && !A && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && A && Ua,
									Ya
								]
							})
						})]
					}) : /* @__PURE__ */ V("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [Ki && /* @__PURE__ */ B("div", {
							className: D("pointer-events-auto", Cr, xr),
							style: p({
								index: 1,
								total: Ta,
								direction: "reverse"
							}),
							children: /* @__PURE__ */ B(y, {
								content: Ki,
								forceVisible: !0
							})
						}), va && /* @__PURE__ */ B("div", {
							className: D(Cr, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ V(Bn, {
								"data-slot": "quick-payment-surface-stack",
								className: wa ? Or : void 0,
								children: [
									ha && /* @__PURE__ */ V("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ha["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: bi,
										className: D(Ha.className, "flex flex-col", Ra, za, ta, Ba, "p-4", ea, "@md:px-5 @md:py-4 @xl:py-5"),
										children: [/* @__PURE__ */ V("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Fa,
											children: [/* @__PURE__ */ B("div", {
												"data-slot": "quick-payment-amount-title-row",
												"data-theme": ka,
												className: D(Aa, ja),
												onMouseDown: bi,
												style: p({
													index: 0,
													total: Ta,
													direction: "reverse",
													baseDelayMs: 12,
													staggerMs: 24
												}),
												children: Ia
											}), /* @__PURE__ */ B("div", {
												"data-slot": "quick-payment-amount-input-row",
												className: D(Qi ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", ja),
												onMouseDown: bi,
												children: /* @__PURE__ */ B("div", {
													className: D("w-full", Sr),
													style: p({
														index: 0,
														total: Ta,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ B(Rn, {
														inputRef: Nt,
														value: K,
														onChange: ci,
														onSubmit: gi,
														onFocusChange: yi,
														canSubmit: !fi,
														disabled: n || d,
														invalid: !!or,
														limits: jn,
														showMeta: !1,
														showDivider: ma,
														reserveEmptyLimitMetaSpace: !pa,
														align: "right",
														currency: M,
														locale: st,
														formatOptions: lt,
														clearOnFocus: w && !n && !d,
														animateValueChange: zt.changeOrigin === "programmatic"
													})
												})
											})]
										}), Zi && /* @__PURE__ */ B(gt, {
											suggestions: cn,
											activeSuggestion: K,
											onSelect: li,
											disabled: d,
											formatLabel: wi,
											amountLimits: jn,
											size: "xs",
											className: D(!$i && "mt-3 @md:mt-0", "order-2")
										})]
									}),
									La && Ua,
									!La && !A && Ua,
									Ja,
									Ka,
									Ga,
									io,
									!La && A && Ua,
									Ya
								]
							})
						})]
					}), ba && /* @__PURE__ */ B("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ B("div", {
							className: Cr,
							children: /* @__PURE__ */ B(zn, {
								bonusEvaluationContext: Wr,
								animationStyle: p({
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
