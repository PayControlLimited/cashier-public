import { Fi as e, Wr as t, ot as n } from "./usePaymentSelection-DEVic0G9.js";
import { useCallback as r, useEffect as i, useLayoutEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
var u = "animate-[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both]", d = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, f = () => {
	let [e, t] = s(d);
	return i(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
			t(e.matches);
		};
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, []), e;
};
function p({ label: e = "Loading payment methods", labelKey: i, message: a, messageKey: o, testId: l = "cashier-fullscreen-loading", loaderSlot: u = "cashier-fullscreen-logo-loader", delayMs: d = 180, onVisibleChange: f, presentationScreen: p = "loading" }) {
	let [m, h] = s(!1), g = r((e) => {
		h(e), f?.(e);
	}, [f]);
	return /* @__PURE__ */ c(n, {
		id: p,
		title: e,
		titleKey: i,
		message: a,
		messageKey: o,
		busy: !0,
		overrideEnabled: m,
		children: /* @__PURE__ */ c(t, {
			className: "pc-cashier__fullscreen-loader",
			label: e,
			message: a,
			testId: l,
			delayMs: d,
			indicatorSize: "xl",
			indicatorTone: "accent",
			iconSlot: u,
			onVisibleChange: g
		})
	});
}
function m({ label: e = "Loading payment methods", labelKey: t, message: n, messageKey: r, testId: i = "cashier-fullscreen-loading", loaderSlot: a = "cashier-fullscreen-logo-loader", delayMs: o = 180, onVisibleChange: s, presentationScreen: l = "loading" }) {
	return /* @__PURE__ */ c(p, {
		label: e,
		labelKey: t,
		message: n,
		messageKey: r,
		testId: i,
		loaderSlot: a,
		delayMs: o,
		onVisibleChange: s,
		presentationScreen: l
	});
}
function h({ isLoading: t, children: n, loaderLabel: i, loaderLabelKey: a, loaderMessage: o, loaderMessageKey: l, loaderTestId: d, loaderSlot: p, loaderDelayMs: h }) {
	let [g, _] = s(0), v = f(), y = r((e) => {
		e && _((e) => e + 1);
	}, []);
	return t ? /* @__PURE__ */ c(m, {
		label: i,
		labelKey: a,
		message: o,
		messageKey: l,
		testId: d,
		loaderSlot: p,
		delayMs: h,
		onVisibleChange: y
	}) : /* @__PURE__ */ c("div", {
		"data-slot": "cashier-fullscreen-content-reveal",
		className: e("pc-cashier__fullscreen-content-reveal flex min-h-full w-full flex-1 self-stretch flex-col", g > 0 && !v && u),
		children: n
	}, g);
}
function g({ isLoading: t, children: n, loaderLabel: r, loaderLabelKey: i, loaderTestId: s, loaderSlot: u }) {
	let d = o(null);
	return a(() => {
		let e = d.current;
		if (e) {
			if (t) {
				e.setAttribute("inert", "");
				return;
			}
			e.removeAttribute("inert");
		}
	}, [t]), /* @__PURE__ */ l("div", {
		"data-testid": "cashier-fullscreen-loading-overlay",
		"data-state": t ? "loading" : "ready",
		"aria-busy": t || void 0,
		className: t ? "relative flex h-full min-h-0 w-full flex-1" : "contents",
		children: [/* @__PURE__ */ c("div", {
			ref: d,
			"data-testid": "cashier-fullscreen-loading-overlay-content",
			"aria-hidden": t || void 0,
			className: t ? "invisible flex h-full min-h-0 w-full flex-1 flex-col" : "contents",
			children: n
		}), t && /* @__PURE__ */ c("div", {
			className: e("absolute inset-0 z-50 flex", "bg-[var(--pc-color-surface)]"),
			children: /* @__PURE__ */ c(m, {
				label: r,
				labelKey: i,
				testId: s,
				loaderSlot: u,
				delayMs: 0
			})
		})]
	});
}
//#endregion
export { h as n, g as r, m as t };
