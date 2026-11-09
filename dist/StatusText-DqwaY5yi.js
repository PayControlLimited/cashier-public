/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { A as e, K as t, _n as n, a as r, d as i, dn as a, h as o, hn as s, i as c, j as l, l as u, r as d, u as f, un as p, vn as m } from "./usePaymentSelection-ikQnuCZA.js";
import { B as h } from "./inlinePaymentSubmit-D-34_gib.js";
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
function C({ defaultRoute: i, backKey: a = "Backspace", enableHotkey: s = !0, useHistory: u = !0, requireCanGoBackForHotkey: f = !1, replace: p = !1, resetHistory: v = !1, restartPurchase: b = !1, restartAmount: x }) {
	let S = n(), C = e(), w = l().history, T = _(m), E = o(), { paymentTypesList: D } = r(), { getAvailableBonusesForPaymentType: O } = c(), k = t("combo"), A = y(() => !T.uiComboView || !T.lockAmount ? i : d({
		config: T,
		paymentTypes: D,
		hasComboOverride: k,
		hasAvailableBonus: (e) => O(e).length > 0
	}).kind === "combo" ? "/combo" : `/pts/${T.method}`, [
		T,
		i,
		O,
		k,
		D
	]), j = u && !!(w?.canGoBack() || T.uiComboView && T.lockAmount && T.entryDecision && A !== w?.location.pathname), M = g(() => {
		if (!E) {
			if (b) {
				if (S && !S.restartPurchase()) return;
				S?.summaryState.clearAccess(), S?.summaryState.clearProgress(), !T.lockAmount && x && T.setCashierState((e) => ({
					...e,
					initialAmount: x
				}));
			}
			if (v && T.uiComboView && T.lockAmount) {
				T.setCashierState((e) => ({
					...e,
					entryDecision: null
				}));
				let e = w?.location.state.__TSR_index ?? 0;
				e > 0 && w?.go(-e), C({
					to: "/",
					replace: !0
				});
			} else {
				if (v && w) {
					let e = w.location.state.__TSR_index;
					if (e > 0) {
						w.go(-e);
						return;
					}
				}
				u && w?.canGoBack() ? w.back() : C({
					to: A,
					replace: p
				});
			}
		}
	}, [
		S,
		T,
		A,
		w,
		E,
		C,
		p,
		v,
		b,
		x,
		u
	]);
	return h({
		onBack: s && (!f || j) ? M : void 0,
		backKey: a
	}), y(() => ({
		canGoBack: j,
		handleBack: M
	}), [j, M]);
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
	return /* @__PURE__ */ x(p, { className: E });
}
function A({ title: e, subtitle: t, presentationTitle: n, presentationSubtitle: r, theme: o, leading: s, className: c, subtitleClassName: l }) {
	let u = s ? /* @__PURE__ */ x("span", {
		"data-theme": o,
		className: "inline-flex items-center justify-center",
		children: /* @__PURE__ */ x("span", {
			className: w,
			children: s
		})
	}) : void 0;
	return /* @__PURE__ */ x(i, {
		className: a("px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2", c),
		stuckLayout: "row",
		titleWrapperClassName: D,
		leading: u,
		title: e,
		presentationTitle: n,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		presentationSubtitle: r,
		subtitleClassName: a(O, l)
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function j({ text: e, children: t, paymentStatus: n, subtitle: r, theme: i, withLoader: a = !1, presentationScreen: o = "error" }) {
	let { resolveTextKey: c, translateKey: l } = s(), d = a ? /* @__PURE__ */ x(k, {}) : void 0, p = l(e), m = r ? l(r) : void 0, h = !r && !i && !d ? /* @__PURE__ */ x(f, {
		title: e,
		children: t
	}) : /* @__PURE__ */ x(f, {
		header: /* @__PURE__ */ x(A, {
			title: p,
			presentationTitle: c(e),
			subtitle: m,
			presentationSubtitle: r ? c(r) : void 0,
			theme: i,
			leading: d
		}),
		children: t
	});
	return /* @__PURE__ */ x(u, {
		id: o,
		title: p,
		titleKey: e,
		message: m,
		messageKey: r,
		paymentStatus: n,
		children: h
	});
}
//#endregion
export { S as a, C as i, T as n, A as r, j as t };
