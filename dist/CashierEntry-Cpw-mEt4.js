import { Ar as e, C as t, E as n, Fn as r, Rr as i, S as a, Tt as o, i as s, n as c, pn as l } from "./usePaymentSelection-DEVic0G9.js";
import { t as u } from "./CashierFullscreenLoader-_Nzfihs_.js";
import { useContext as d, useEffect as f, useRef as p } from "react";
import { jsx as m } from "react/jsx-runtime";
//#region src/components/CashierEntry.tsx
function h() {
	let h = d(i), { setCashierState: g, method: _ } = h, v = l(), y = o(), { paymentTypesList: b, isLoading: x, isError: S, hasPaymentTypesResponse: C } = t(), { getAvailableBonusesForPaymentType: w } = a(), { selectPaymentType: T } = c(), E = r("combo"), { translateKey: D } = e(), O = p(null);
	return f(() => {
		if (y || O.current === _) return;
		if (!h.uiComboView || !h.lockAmount) {
			v({
				to: n(h),
				replace: !0
			});
			return;
		}
		if (x || !S && !C) return;
		let e = _;
		if (b.some((t) => t.method !== e)) return;
		O.current = _;
		let t = s({
			config: h,
			paymentTypes: S ? [] : b,
			hasComboOverride: E,
			hasAvailableBonus: (e) => w(e).length > 0
		});
		t.paymentTypeId && T(t.paymentTypeId), g((e) => e.method === _ ? {
			...e,
			entryDecision: t
		} : e), v({
			to: t.route,
			replace: !0
		});
	}, [
		h,
		w,
		C,
		S,
		x,
		y,
		_,
		v,
		E,
		b,
		T,
		g
	]), /* @__PURE__ */ m(u, {
		label: D("loading.payment_types"),
		labelKey: "loading.payment_types",
		testId: "cashier-payment-types-loading"
	});
}
//#endregion
export { h as t };
