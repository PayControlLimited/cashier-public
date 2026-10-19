import { Ar as e, C as t, Dr as n, Fi as r, Fn as i, Pi as a, Rr as o, S as s, Tt as c, ct as l, i as u, mn as d, ot as f, pn as p, st as m } from "./usePaymentSelection-DEVic0G9.js";
import { L as h } from "./inlinePaymentSubmit-VO4WMTCy.js";
import { useCallback as g, useContext as _, useLayoutEffect as v, useMemo as y, useState as b } from "react";
import { jsx as x } from "react/jsx-runtime";
//#region src/hooks/useEmbeddingBack.ts
var S = (e) => {
	let t = n(), [r] = b(() => ({}));
	v(() => {
		t?.bindBack(r, e);
	}, [
		e,
		t,
		r
	]), v(() => () => t?.unbindBack(r), [t, r]);
};
//#endregion
//#region src/hooks/useBackNavigation.ts
function C({ defaultRoute: e, backKey: r = "Backspace", enableHotkey: a = !0, useHistory: l = !0, requireCanGoBackForHotkey: f = !1, replace: m = !1, resetHistory: v = !1, restartPurchase: b = !1 }) {
	let x = n(), S = p(), C = d().history, w = _(o), T = c(), { paymentTypesList: E } = t(), { getAvailableBonusesForPaymentType: D } = s(), O = i("combo"), k = y(() => !w.uiComboView || !w.lockAmount ? e : u({
		config: w,
		paymentTypes: E,
		hasComboOverride: O,
		hasAvailableBonus: (e) => D(e).length > 0
	}).kind === "combo" ? "/combo" : `/pts/${w.method}`, [
		w,
		e,
		D,
		O,
		E
	]), A = l && !!(C?.canGoBack() || w.uiComboView && w.lockAmount && w.entryDecision && k !== C?.location.pathname), j = g(() => {
		if (!T) {
			if (b) {
				if (x && !x.restartPurchase()) return;
				x?.summaryState.clearAccess(), x?.summaryState.clearProgress();
			}
			if (v && w.uiComboView && w.lockAmount) {
				w.setCashierState((e) => ({
					...e,
					entryDecision: null
				}));
				let e = C?.location.state.__TSR_index ?? 0;
				e > 0 && C?.go(-e), S({
					to: "/",
					replace: !0
				});
				return;
			}
			if (v && C) {
				let e = C.location.state.__TSR_index;
				if (e > 0) {
					C.go(-e);
					return;
				}
			}
			if (l && C?.canGoBack()) {
				C.back();
				return;
			}
			S({
				to: k,
				replace: m
			});
		}
	}, [
		x,
		w,
		k,
		C,
		T,
		S,
		m,
		v,
		b,
		l
	]);
	return h({
		onBack: a && (!f || A) ? j : void 0,
		backKey: r
	}), y(() => ({
		canGoBack: A,
		handleBack: j
	}), [A, j]);
}
//#endregion
//#region src/ui/StatusHeader.tsx
var w = [
	"h-12 w-12 @md:h-16 @md:w-16",
	"group-data-[stuck=true]:h-6 group-data-[stuck=true]:w-6",
	"@md:group-data-[stuck=true]:h-8 @md:group-data-[stuck=true]:w-8",
	"inline-flex items-center justify-center"
].join(" "), T = "h-full w-full text-inherit", E = ["h-[70%] w-[70%]", "text-[var(--pc-color-surface)]"].join(" "), D = [
	"group-data-[stuck=true]:flex-row",
	"group-data-[stuck=true]:items-center",
	"group-data-[stuck=true]:flex-wrap",
	"group-data-[stuck=true]:justify-between",
	"group-data-[stuck=true]:gap-3",
	"group-data-[stuck=true]:flex-1",
	"group-data-[stuck=true]:min-w-0"
].join(" "), O = [
	"group-data-[stuck=true]:mt-0",
	"group-data-[stuck=true]:mb-0",
	"group-data-[stuck=true]:min-w-0"
].join(" ");
function k() {
	return /* @__PURE__ */ x(a, { className: E });
}
function A({ title: e, subtitle: t, presentationTitle: n, presentationSubtitle: i, theme: a, leading: o, className: s, subtitleClassName: c }) {
	let u = o ? /* @__PURE__ */ x("span", {
		"data-theme": a,
		className: "inline-flex items-center justify-center",
		children: /* @__PURE__ */ x("span", {
			className: w,
			children: o
		})
	}) : void 0;
	return /* @__PURE__ */ x(l, {
		className: r("px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2", s),
		stuckLayout: "row",
		titleWrapperClassName: D,
		leading: u,
		title: e,
		presentationTitle: n,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		presentationSubtitle: i,
		subtitleClassName: r(O, c)
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function j({ text: t, children: n, paymentStatus: r, subtitle: i, theme: a, withLoader: o = !1, presentationScreen: s = "error" }) {
	let { resolveTextKey: c, translateKey: l } = e(), u = o ? /* @__PURE__ */ x(k, {}) : void 0, d = l(t), p = i ? l(i) : void 0, h = !i && !a && !u ? /* @__PURE__ */ x(m, {
		title: t,
		children: n
	}) : /* @__PURE__ */ x(m, {
		header: /* @__PURE__ */ x(A, {
			title: d,
			presentationTitle: c(t),
			subtitle: p,
			presentationSubtitle: i ? c(i) : void 0,
			theme: a,
			leading: u
		}),
		children: n
	});
	return /* @__PURE__ */ x(f, {
		id: s,
		title: d,
		titleKey: t,
		message: p,
		messageKey: i,
		paymentStatus: r,
		children: h
	});
}
//#endregion
export { S as a, C as i, T as n, A as r, j as t };
