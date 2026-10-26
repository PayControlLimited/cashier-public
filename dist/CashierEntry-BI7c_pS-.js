/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { K as e, Mn as t, a as n, ct as r, i, j as a, kn as o, l as s, n as c, o as l } from "./usePaymentSelection-BT8H9hee.js";
import { t as u } from "./CashierFullscreenLoader-BUvXkLZm.js";
import { useContext as d, useEffect as f, useRef as p } from "react";
import { jsx as m } from "react/jsx-runtime";
//#region src/components/CashierEntry.tsx
function h() {
	let h = d(t), { setCashierState: g, method: _ } = h, v = e(), y = a(), { paymentTypesList: b, isLoading: x, isError: S, hasPaymentTypesResponse: C } = l(), { getAvailableBonusesForPaymentType: w } = n(), { selectPaymentType: T } = c(), E = r("combo"), { translateKey: D } = o(), O = p(null);
	return f(() => {
		if (y || O.current === _) return;
		if (!h.uiComboView || !h.lockAmount) {
			v({
				to: s(h),
				replace: !0
			});
			return;
		}
		if (x || !S && !C) return;
		let e = _;
		if (b.some((t) => t.method !== e)) return;
		O.current = _;
		let t = i({
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
