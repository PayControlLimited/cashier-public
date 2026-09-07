import { Fi as e, Ii as t, Mr as n, Ni as r, Pi as i, Yr as a, Zt as o, et as s, nt as c, qr as l } from "./inlinePaymentSubmit-CmI1mVTq.js";
import { useCallback as u, useEffect as d, useMemo as f, useState as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/hooks/useBackNavigation.ts
function _({ defaultRoute: n, backKey: r = "Backspace", enableHotkey: i = !0, useHistory: a = !0, requireCanGoBackForHotkey: o = !1, replace: s = !1, resetHistory: l = !1 }) {
	let d = e(), p = t().history, m = a && !!p?.canGoBack(), h = u(() => {
		if (l && p) {
			let e = p.location.state.__TSR_index;
			if (e > 0) {
				p.go(-e);
				return;
			}
		}
		if (a && p?.canGoBack()) {
			p.back();
			return;
		}
		d({
			to: n,
			replace: s
		});
	}, [
		n,
		p,
		d,
		s,
		l,
		a
	]);
	return c({
		onBack: i && (!o || m) ? h : void 0,
		backKey: r
	}), f(() => ({
		canGoBack: m,
		handleBack: h
	}), [m, h]);
}
//#endregion
//#region src/ui/StickyHeaderStack.tsx
var v = ["flex flex-col w-full bg-[var(--pc-color-surface)]"].join(" "), y = ["relative z-30"].join(" "), b = "sticky top-0 z-40 h-0 overflow-visible", x = ["transition-transform duration-200 ease-out", "transform-gpu will-change-transform"].join(" "), S = "w-full", C = (e) => {
	if (!e || typeof window > "u") return window;
	let t = e.parentElement;
	for (; t;) {
		let e = window.getComputedStyle(t), n = `${e.overflow}${e.overflowY}${e.overflowX}`;
		if (/(auto|scroll|overlay)/.test(n)) return t;
		t = t.parentElement;
	}
	return window;
}, w = (e) => typeof window < "u" && e === window, T = (e) => {
	let [t, n] = p(null), [r, i] = p(null), [a, o] = p(1), s = u((e) => {
		n(e);
	}, []), c = u((e) => {
		i(e);
	}, []);
	return d(() => {
		if (!e || !t || !r || typeof window > "u") return;
		let n = C(t), i = 0, a = () => {
			let e = t.getBoundingClientRect(), i = r.getBoundingClientRect(), a = 0;
			if (!w(n)) {
				let e = n.getBoundingClientRect(), t = window.getComputedStyle(n).paddingTop, r = Number.parseFloat(t), i = Number.isNaN(r) ? 0 : r;
				a = e.top + i;
			}
			let s = Math.min(24, Math.max(8, i.height * .2)), c = a + s, l = a, u = c - l || 1, d = Math.min(1, Math.max(0, (e.top - l) / u));
			o((e) => Math.abs(e - d) < .002 ? e : d);
		}, s = () => {
			i && cancelAnimationFrame(i), i = requestAnimationFrame(a);
		};
		a(), w(n) ? window.addEventListener("scroll", s, { passive: !0 }) : n.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", s, { passive: !0 });
		let c = null;
		return typeof ResizeObserver < "u" && (c = new ResizeObserver(() => {
			s();
		}), c.observe(r), w(n) || c.observe(n)), () => {
			i && cancelAnimationFrame(i), w(n) ? window.removeEventListener("scroll", s) : n.removeEventListener("scroll", s), window.removeEventListener("resize", s), c?.disconnect();
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
function E({ sticky: e = !1, className: t, children: n }) {
	let { progress: r, setAnchorRef: o, setHeaderRef: s } = T(e), c = r < 1, l = { transform: `translateY(-${(r * 100).toFixed(2)}%)` };
	return n ? e ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", {
		ref: s,
		"aria-hidden": c ? "true" : void 0,
		className: i(v, "group", c ? "invisible" : "", t),
		children: n
	}), /* @__PURE__ */ h("div", {
		ref: o,
		className: b,
		children: /* @__PURE__ */ h("div", {
			"data-stuck": c ? "true" : void 0,
			"data-pc-scroll-obstruction": c ? "top" : void 0,
			"aria-hidden": c ? void 0 : "true",
			style: l,
			className: i(v, "group", x, c ? y : "", c ? "pointer-events-auto" : "pointer-events-none", c ? "overflow-visible" : "invisible", t),
			children: /* @__PURE__ */ g("div", {
				className: "relative bg-[var(--pc-color-surface)]",
				children: [/* @__PURE__ */ h("div", {
					className: S,
					children: n
				}), /* @__PURE__ */ h("div", {
					"aria-hidden": "true",
					"data-slot": "sticky-header-stack-fade",
					"data-pc-scroll-obstruction": "top",
					style: a,
					className: "pointer-events-none absolute inset-x-0 top-full"
				})]
			})
		})
	})] }) : /* @__PURE__ */ h("div", {
		className: i(v, "group", t),
		children: n
	}) : null;
}
//#endregion
//#region src/ui/SubContainer.tsx
function D({ id: e, className: t, contentId: r, contentClassName: a, title: o, subtitle: c, header: u, stickyHeader: d = !1, fitted: f, fullHeight: p, constrainWidth: m = !0, children: _ }) {
	let { resolveTextKey: v, translateKey: y } = n(), b = typeof o == "string" ? y(o) : o, x = typeof c == "string" ? y(c) : c, S = u ?? (o || c ? /* @__PURE__ */ h(s, {
		title: b,
		subtitle: x,
		presentationTitle: typeof o == "string" ? v(o) : void 0,
		presentationSubtitle: typeof c == "string" ? v(c) : void 0
	}) : null), C = m ? l : void 0, w = S ? /* @__PURE__ */ h("div", {
		className: C,
		children: S
	}) : null;
	return /* @__PURE__ */ g("div", {
		id: e,
		className: i([
			"flex flex-col",
			p && "min-h-0 flex-1",
			t
		]),
		children: [w && (d ? /* @__PURE__ */ h(E, {
			sticky: !0,
			children: w
		}) : w), /* @__PURE__ */ h("div", {
			id: r,
			className: i([
				"wrap-anywhere flex flex-col",
				C,
				p && "min-h-0 flex-1",
				d && !p && "pb-4",
				!f && "px-1.5 @sm:px-3 rounded-[var(--pc-radius-lg)]",
				a
			]),
			children: _
		})]
	});
}
//#endregion
//#region src/ui/StatusHeader.tsx
var O = [
	"h-12 w-12 @md:h-16 @md:w-16",
	"group-data-[stuck=true]:h-6 group-data-[stuck=true]:w-6",
	"@md:group-data-[stuck=true]:h-8 @md:group-data-[stuck=true]:w-8",
	"inline-flex items-center justify-center"
].join(" "), k = "h-full w-full text-inherit", A = ["h-[70%] w-[70%]", "text-[var(--pc-color-surface)]"].join(" "), j = [
	"group-data-[stuck=true]:flex-row",
	"group-data-[stuck=true]:items-center",
	"group-data-[stuck=true]:flex-wrap",
	"group-data-[stuck=true]:justify-between",
	"group-data-[stuck=true]:gap-3",
	"group-data-[stuck=true]:flex-1",
	"group-data-[stuck=true]:min-w-0"
].join(" "), M = [
	"group-data-[stuck=true]:mt-0",
	"group-data-[stuck=true]:mb-0",
	"group-data-[stuck=true]:min-w-0"
].join(" ");
function N() {
	return /* @__PURE__ */ h(r, { className: A });
}
function P({ title: e, subtitle: t, presentationTitle: n, presentationSubtitle: r, theme: a, leading: o, className: c, subtitleClassName: l }) {
	let u = o ? /* @__PURE__ */ h("span", {
		"data-theme": a,
		className: "inline-flex items-center justify-center",
		children: /* @__PURE__ */ h("span", {
			className: O,
			children: o
		})
	}) : void 0;
	return /* @__PURE__ */ h(s, {
		className: i("px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2", c),
		stuckLayout: "row",
		titleWrapperClassName: j,
		leading: u,
		title: e,
		presentationTitle: n,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		presentationSubtitle: r,
		subtitleClassName: i(M, l)
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function F({ text: e, subtitle: t, theme: r, withLoader: i = !1, presentationScreen: a = "error" }) {
	let { resolveTextKey: s, translateKey: c } = n(), l = i ? /* @__PURE__ */ h(N, {}) : void 0, u = c(e), d = t ? c(t) : void 0, f = !t && !r && !l ? /* @__PURE__ */ h(D, { title: e }) : /* @__PURE__ */ h(D, { header: /* @__PURE__ */ h(P, {
		title: u,
		presentationTitle: s(e),
		subtitle: d,
		presentationSubtitle: t ? s(t) : void 0,
		theme: r,
		leading: l
	}) });
	return /* @__PURE__ */ h(o, {
		id: a,
		title: u,
		titleKey: e,
		message: d,
		messageKey: t,
		children: f
	});
}
//#endregion
export { _ as a, D as i, k as n, P as r, F as t };
