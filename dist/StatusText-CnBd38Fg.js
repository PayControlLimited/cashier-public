/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { D as e, E as t, K as n, Mn as r, T as i, Tn as a, a as o, ct as s, i as c, j as l, jn as u, kn as d, o as f, q as p, wn as m } from "./usePaymentSelection-BT8H9hee.js";
import { L as h } from "./inlinePaymentSubmit-B9nyF_92.js";
import { useCallback as g, useContext as _, useLayoutEffect as v, useMemo as y, useState as b } from "react";
import { jsx as x } from "react/jsx-runtime";
//#region src/hooks/useEmbeddingBack.ts
var S = (e) => {
	let t = u(), [n] = b(() => ({}));
	v(() => {
		t?.bindBack(n, e);
	}, [
		e,
		t,
		n
	]), v(() => () => t?.unbindBack(n), [t, n]);
};
//#endregion
//#region src/hooks/useBackNavigation.ts
function C({ defaultRoute: e, backKey: t = "Backspace", enableHotkey: i = !0, useHistory: a = !0, requireCanGoBackForHotkey: d = !1, replace: m = !1, resetHistory: v = !1, restartPurchase: b = !1, restartAmount: x }) {
	let S = u(), C = n(), w = p().history, T = _(r), E = l(), { paymentTypesList: D } = f(), { getAvailableBonusesForPaymentType: O } = o(), k = s("combo"), A = y(() => !T.uiComboView || !T.lockAmount ? e : c({
		config: T,
		paymentTypes: D,
		hasComboOverride: k,
		hasAvailableBonus: (e) => O(e).length > 0
	}).kind === "combo" ? "/combo" : `/pts/${T.method}`, [
		T,
		e,
		O,
		k,
		D
	]), j = a && !!(w?.canGoBack() || T.uiComboView && T.lockAmount && T.entryDecision && A !== w?.location.pathname), M = g(() => {
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
				a && w?.canGoBack() ? w.back() : C({
					to: A,
					replace: m
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
		m,
		v,
		b,
		x,
		a
	]);
	return h({
		onBack: i && (!d || j) ? M : void 0,
		backKey: t
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
	return /* @__PURE__ */ x(m, { className: E });
}
function A({ title: t, subtitle: n, presentationTitle: r, presentationSubtitle: i, theme: o, leading: s, className: c, subtitleClassName: l }) {
	let u = s ? /* @__PURE__ */ x("span", {
		"data-theme": o,
		className: "inline-flex items-center justify-center",
		children: /* @__PURE__ */ x("span", {
			className: w,
			children: s
		})
	}) : void 0;
	return /* @__PURE__ */ x(e, {
		className: a("px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2", c),
		stuckLayout: "row",
		titleWrapperClassName: D,
		leading: u,
		title: t,
		presentationTitle: r,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: n,
		presentationSubtitle: i,
		subtitleClassName: a(O, l)
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function j({ text: e, children: n, paymentStatus: r, subtitle: a, theme: o, withLoader: s = !1, presentationScreen: c = "error" }) {
	let { resolveTextKey: l, translateKey: u } = d(), f = s ? /* @__PURE__ */ x(k, {}) : void 0, p = u(e), m = a ? u(a) : void 0, h = !a && !o && !f ? /* @__PURE__ */ x(t, {
		title: e,
		children: n
	}) : /* @__PURE__ */ x(t, {
		header: /* @__PURE__ */ x(A, {
			title: p,
			presentationTitle: l(e),
			subtitle: m,
			presentationSubtitle: a ? l(a) : void 0,
			theme: o,
			leading: f
		}),
		children: n
	});
	return /* @__PURE__ */ x(i, {
		id: c,
		title: p,
		titleKey: e,
		message: m,
		messageKey: a,
		paymentStatus: r,
		children: h
	});
}
//#endregion
export { S as a, C as i, T as n, A as r, j as t };
