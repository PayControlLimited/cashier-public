/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { A as e, K as t, a as n, c as r, h as i, hn as a, i as o, n as s, r as c, vn as l } from "./usePaymentSelection-ikQnuCZA.js";
import { t as u } from "./CashierFullscreenLoader-fJ94qcDn.js";
import { useContext as d, useEffect as f, useRef as p } from "react";
import { jsx as m } from "react/jsx-runtime";
//#region src/components/CashierEntry.tsx
function h() {
	let h = d(l), { setCashierState: g, method: _ } = h, v = e(), y = i(), { paymentTypesList: b, isLoading: x, isError: S, hasPaymentTypesResponse: C } = n(), { getAvailableBonusesForPaymentType: w } = o(), { selectPaymentType: T } = s(), E = t("combo"), { translateKey: D } = a(), O = p(null);
	return f(() => {
		if (y || O.current === _) return;
		if (!h.uiComboView || !h.lockAmount) {
			v({
				to: r(h),
				replace: !0
			});
			return;
		}
		if (x || !S && !C) return;
		let e = _;
		if (b.some((t) => t.method !== e)) return;
		O.current = _;
		let t = c({
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
