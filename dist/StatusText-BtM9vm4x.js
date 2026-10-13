import { Ei as e, Fr as t, Hi as n, Nr as r, Zt as i, di as a, et as o, fi as s, mi as c, nt as l, pi as u } from "./inlinePaymentSubmit-Cw-MCOPa.js";
import { useCallback as d, useEffect as f, useLayoutEffect as p, useMemo as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/hooks/useEmbeddingBack.ts
var y = (e) => {
	let t = n(), [r] = h(() => ({}));
	p(() => {
		t?.bindBack(r, e);
	}, [
		e,
		t,
		r
	]), p(() => () => t?.unbindBack(r), [t, r]);
};
//#endregion
//#region src/hooks/useBackNavigation.ts
function b({ defaultRoute: e, backKey: t = "Backspace", enableHotkey: n = !0, useHistory: r = !0, requireCanGoBackForHotkey: i = !1, replace: a = !1, resetHistory: o = !1 }) {
	let s = u(), f = c().history, p = r && !!f?.canGoBack(), h = d(() => {
		if (o && f) {
			let e = f.location.state.__TSR_index;
			if (e > 0) {
				f.go(-e);
				return;
			}
		}
		if (r && f?.canGoBack()) {
			f.back();
			return;
		}
		s({
			to: e,
			replace: a
		});
	}, [
		e,
		f,
		s,
		a,
		o,
		r
	]);
	return l({
		onBack: n && (!i || p) ? h : void 0,
		backKey: t
	}), m(() => ({
		canGoBack: p,
		handleBack: h
	}), [p, h]);
}
//#endregion
//#region src/ui/StickyHeaderStack.tsx
var x = ["flex flex-col w-full bg-[var(--pc-color-surface)]"].join(" "), S = ["relative z-30"].join(" "), C = "sticky top-0 z-40 h-0 overflow-visible", w = ["transition-transform duration-200 ease-out", "transform-gpu will-change-transform"].join(" "), T = "w-full", E = (e) => {
	if (!e || typeof window > "u") return window;
	let t = e.parentElement;
	for (; t;) {
		let e = window.getComputedStyle(t), n = `${e.overflow}${e.overflowY}${e.overflowX}`;
		if (/(auto|scroll|overlay)/.test(n)) return t;
		t = t.parentElement;
	}
	return window;
}, D = (e) => typeof window < "u" && e === window, O = (e) => {
	let [t, n] = h(null), [r, i] = h(null), [a, o] = h(1), s = d((e) => {
		n(e);
	}, []), c = d((e) => {
		i(e);
	}, []);
	return f(() => {
		if (!e || !t || !r || typeof window > "u") return;
		let n = E(t), i = 0, a = () => {
			let e = t.getBoundingClientRect(), i = r.getBoundingClientRect(), a = 0;
			if (!D(n)) {
				let e = n.getBoundingClientRect(), t = window.getComputedStyle(n).paddingTop, r = Number.parseFloat(t), i = Number.isNaN(r) ? 0 : r;
				a = e.top + i;
			}
			let s = Math.min(24, Math.max(8, i.height * .2)), c = a + s, l = a, u = c - l || 1, d = Math.min(1, Math.max(0, (e.top - l) / u));
			o((e) => Math.abs(e - d) < .002 ? e : d);
		}, s = () => {
			i && cancelAnimationFrame(i), i = requestAnimationFrame(a);
		};
		a(), D(n) ? window.addEventListener("scroll", s, { passive: !0 }) : n.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", s, { passive: !0 });
		let c = null;
		return typeof ResizeObserver < "u" && (c = new ResizeObserver(() => {
			s();
		}), c.observe(r), D(n) || c.observe(n)), () => {
			i && cancelAnimationFrame(i), D(n) ? window.removeEventListener("scroll", s) : n.removeEventListener("scroll", s), window.removeEventListener("resize", s), c?.disconnect();
		};
	}, [
		t,
		e,
		r
	]), {
		progress: a,
		setAnchorRef: s,
		setHeaderRef: c
	};
};
function k({ sticky: e = !1, className: n, children: r }) {
	let { progress: i, setAnchorRef: a, setHeaderRef: o } = O(e), c = i < 1, l = { transform: `translateY(-${(i * 100).toFixed(2)}%)` };
	return r ? e ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", {
		ref: o,
		"aria-hidden": c ? "true" : void 0,
		className: s(x, "group", c ? "invisible" : "", n),
		children: r
	}), /* @__PURE__ */ _("div", {
		ref: a,
		className: C,
		children: /* @__PURE__ */ _("div", {
			"data-stuck": c ? "true" : void 0,
			"data-pc-scroll-obstruction": c ? "top" : void 0,
			"aria-hidden": c ? void 0 : "true",
			style: l,
			className: s(x, "group", w, c ? S : "", c ? "pointer-events-auto" : "pointer-events-none", c ? "overflow-visible" : "invisible", n),
			children: /* @__PURE__ */ v("div", {
				className: "relative bg-[var(--pc-color-surface)]",
				children: [/* @__PURE__ */ _("div", {
					className: T,
					children: r
				}), /* @__PURE__ */ _("div", {
					"aria-hidden": "true",
					"data-slot": "sticky-header-stack-fade",
					"data-pc-scroll-obstruction": "top",
					style: t,
					className: "pointer-events-none absolute inset-x-0 top-full"
				})]
			})
		})
	})] }) : /* @__PURE__ */ _("div", {
		className: s(x, "group", n),
		children: r
	}) : null;
}
//#endregion
//#region src/ui/SubContainer.tsx
function A({ id: t, className: n, contentId: i, contentClassName: a, title: c, subtitle: l, header: u, stickyHeader: d = !1, fitted: f, fullHeight: p, constrainWidth: m = !0, children: h }) {
	let { resolveTextKey: g, translateKey: y } = e(), b = typeof c == "string" ? y(c) : c, x = typeof l == "string" ? y(l) : l, S = u ?? (c || l ? /* @__PURE__ */ _(o, {
		title: b,
		subtitle: x,
		presentationTitle: typeof c == "string" ? g(c) : void 0,
		presentationSubtitle: typeof l == "string" ? g(l) : void 0
	}) : null), C = m ? r : void 0, w = S ? /* @__PURE__ */ _("div", {
		className: C,
		children: S
	}) : null;
	return /* @__PURE__ */ v("div", {
		id: t,
		className: s([
			"flex flex-col",
			p && "min-h-0 flex-1",
			n
		]),
		children: [w && (d ? /* @__PURE__ */ _(k, {
			sticky: !0,
			children: w
		}) : w), /* @__PURE__ */ _("div", {
			id: i,
			className: s([
				"wrap-anywhere flex flex-col",
				C,
				p && "min-h-0 flex-1",
				d && !p && "pb-4",
				!f && "px-1.5 @sm:px-3 rounded-[var(--pc-radius-lg)]",
				a
			]),
			children: h
		})]
	});
}
//#endregion
//#region src/ui/StatusHeader.tsx
var j = [
	"h-12 w-12 @md:h-16 @md:w-16",
	"group-data-[stuck=true]:h-6 group-data-[stuck=true]:w-6",
	"@md:group-data-[stuck=true]:h-8 @md:group-data-[stuck=true]:w-8",
	"inline-flex items-center justify-center"
].join(" "), M = "h-full w-full text-inherit", N = ["h-[70%] w-[70%]", "text-[var(--pc-color-surface)]"].join(" "), P = [
	"group-data-[stuck=true]:flex-row",
	"group-data-[stuck=true]:items-center",
	"group-data-[stuck=true]:flex-wrap",
	"group-data-[stuck=true]:justify-between",
	"group-data-[stuck=true]:gap-3",
	"group-data-[stuck=true]:flex-1",
	"group-data-[stuck=true]:min-w-0"
].join(" "), F = [
	"group-data-[stuck=true]:mt-0",
	"group-data-[stuck=true]:mb-0",
	"group-data-[stuck=true]:min-w-0"
].join(" ");
function I() {
	return /* @__PURE__ */ _(a, { className: N });
}
function L({ title: e, subtitle: t, presentationTitle: n, presentationSubtitle: r, theme: i, leading: a, className: c, subtitleClassName: l }) {
	let u = a ? /* @__PURE__ */ _("span", {
		"data-theme": i,
		className: "inline-flex items-center justify-center",
		children: /* @__PURE__ */ _("span", {
			className: j,
			children: a
		})
	}) : void 0;
	return /* @__PURE__ */ _(o, {
		className: s("px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2", c),
		stuckLayout: "row",
		titleWrapperClassName: P,
		leading: u,
		title: e,
		presentationTitle: n,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		presentationSubtitle: r,
		subtitleClassName: s(F, l)
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function R({ text: t, subtitle: n, theme: r, withLoader: a = !1, presentationScreen: o = "error" }) {
	let { resolveTextKey: s, translateKey: c } = e(), l = a ? /* @__PURE__ */ _(I, {}) : void 0, u = c(t), d = n ? c(n) : void 0, f = !n && !r && !l ? /* @__PURE__ */ _(A, { title: t }) : /* @__PURE__ */ _(A, { header: /* @__PURE__ */ _(L, {
		title: u,
		presentationTitle: s(t),
		subtitle: d,
		presentationSubtitle: n ? s(n) : void 0,
		theme: r,
		leading: l
	}) });
	return /* @__PURE__ */ _(i, {
		id: o,
		title: u,
		titleKey: t,
		message: d,
		messageKey: n,
		children: f
	});
}
//#endregion
export { b as a, A as i, M as n, y as o, L as r, R as t };
