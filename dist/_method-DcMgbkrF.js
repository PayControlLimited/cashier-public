import { A as e, Ar as t, At as n, Dt as r, Er as i, I as a, It as o, Kn as s, Lt as ee, M as te, N as ne, O as re, T as ie, Vn as ae, Yt as oe, _ as se, c, dr as ce, f as le, h as ue, jt as l, kr as de, mr as fe, n as pe, o as me, p as he, qn as ge, rt as _e, s as ve, sn as ye, t as be, u as xe, v as Se, vr as Ce, x as we, y as Te } from "./useBackNavigation-uCdwRjil.js";
import { a as Ee, i as De } from "./defaults-Db9f81OM.js";
import { t as u } from "./_method-CZ8tKRo9.js";
import { useCallback as d, useContext as Oe, useEffect as f, useMemo as p, useRef as ke, useState as Ae } from "react";
import { jsx as m, jsxs as je } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var Me = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Ne = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Pe = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Fe = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Ie = (e, t, n) => {
	let r = e(t);
	return r === t ? n : r;
}, Le = (e) => typeof e == "string" ? e : e.baseName;
function h() {
	let { paymentTypes: e } = u.useLoaderData();
	return /* @__PURE__ */ m(g, { loaderPaymentTypes: e });
}
function g({ loaderPaymentTypes: u = [] }) {
	let h = s(), { translateKey: g } = ye(), _ = t(), { uiComboView: v, lockAmount: Re, uiComboView__PaymentTypes: y, uiInteractivePrompts: b, uiShowFees: x, uiListStyle: ze, selectedPaymentType: S, initialAmount: C, method: w, user: T, locale: E, uiAccountDelete: Be, uiListSelectable: Ve, uiPreselectedPaymentType: D, onPaymentTypeSelected: O, paymentFormDraft: k, comboViewFormDraft: A, resetFlowOnBack: He, setCashierState: j } = Oe(ge), { formatDisplayValue: Ue } = _e(), { paymentTypesList: We, isError: M } = r(), { getBonusCountForPaymentType: N } = we(), { selectPaymentType: P, clearPaymentSelection: F } = ie(), { requestAccountDelete: Ge, actionConfirmationModal: Ke } = se(), qe = ke(!1), [Je, Ye] = Ae(null), [I, Xe] = Ae({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), L = We.length > 0 ? We : u, Ze = oe({
		uiComboView: v,
		lockAmount: Re,
		method: w
	}), Qe = g("cta.back"), { canGoBack: R, handleBack: $e } = be({
		defaultRoute: Ze,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !0,
		replace: !v
	}), et = v && !te(y), z = d(() => {
		et && F(), $e();
	}, [
		F,
		$e,
		et
	]), tt = g("cta.continue"), B = p(() => l(L, S), [L, S]), V = B ? n(B) : S, H = p(() => {
		if (!B || !x || !Fe(B.fee)) return null;
		let e = Pe(B.fee, Ue);
		if (!e) return null;
		let t = w === Ee.PAYOUT, n = {
			fee: e,
			method: Ie(g, t ? "cta.payout" : "cta.payin", t ? "Withdraw" : "Deposit").toLocaleLowerCase(Le(E))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		Ue,
		E,
		w,
		B,
		g,
		x
	]), nt = v && Ce(C), U = v && Ce(C), rt = U ? C : "", W = d((e) => nt ? o(C, e.limits, { maxBoundary: ee(w, T, e.fee) }).isOutOfRange : !1, [
		C,
		w,
		nt,
		T
	]), G = B ? W(B) : !1, K = ze === De.ACCORDION, q = Ve || K, J = !!B && !G, it = d((t) => e(t, rt), [rt]), Y = !!(K && B && it(B)), X = g("account.delete.title"), at = d((e) => !Be || !e.accountId ? null : /* @__PURE__ */ m(i, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": X,
		onClick: () => {
			Ge(e);
		},
		iconOnly: !0,
		label: X,
		leadingIcon: /* @__PURE__ */ m(fe, {})
	}), [
		X,
		Ge,
		Be
	]);
	f(() => {
		He && j((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [He, j]), f(() => {
		if (!q || qe.current || S || !D) return;
		let e = l(L, D);
		e && P(n(e));
	}, [
		L,
		P,
		S,
		q,
		D
	]), f(() => {
		G && F();
	}, [F, G]);
	let ot = d((e) => {
		let t = l(L, e);
		if (!t || W(t)) return;
		let r = n(t);
		if (q) {
			if (qe.current = !0, B === t) return;
			P(r), O && O(t);
			return;
		}
		if (P(r), O && O(t), N(t) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: r }
		});
	}, [
		N,
		q,
		W,
		_,
		O,
		L,
		B,
		P
	]), st = d((e) => {
		let t = a(e, C), r = {
			paymentTypeName: n(e),
			method: w,
			amount: t
		};
		if (c(A, r)) return A.values;
		if (c(k, r)) return k.values;
	}, [
		A,
		C,
		w,
		k
	]), ct = d((e, t) => {
		if (W(e)) return;
		let r = ne(e), i = a(e, C, t.values);
		if (r && i.length === 0) return;
		let o = r ? {
			...t.values,
			amount: i
		} : t.values, s = n(e);
		if (j((e) => ({
			...e,
			selectedPaymentType: s,
			selectedBonusCode: null,
			initialAmount: i,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: s,
				method: w,
				amount: i,
				values: o,
				hasHostedFields: t.hasHostedFields
			}
		})), N(e) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: s }
		});
	}, [
		N,
		C,
		W,
		w,
		_,
		j
	]), lt = d((e, t) => {
		let r = ne(e), i = a(e, C, t.values), o = {
			paymentTypeName: n(e),
			method: w,
			amount: i,
			values: r ? {
				...t.values,
				amount: i
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		j((e) => ve(e.paymentFormDraft, o) ? e : {
			...e,
			paymentFormDraft: o
		});
	}, [
		C,
		w,
		j
	]), ut = d((e, t) => {
		Xe((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), dt = d((e) => {
		let t = n(e);
		return /* @__PURE__ */ m(re, {
			paymentType: e,
			selectionId: t,
			amountValue: C,
			hideAmountField: U,
			onActionsChange: Ye,
			onPromptStateChange: ut,
			onPreparedValues: ct,
			onValuesChange: lt,
			valueOverrides: st(e),
			surfaceChrome: "plain"
		}, t);
	}, [
		st,
		ct,
		ut,
		lt,
		C,
		U
	]), Z = Je?.submit, Q = !Y || I.paymentTypeName === V, $ = d(() => {
		if (Y) {
			if (!Q) return;
			Z?.onClick();
			return;
		}
		if (!B || !S) return;
		let e = n(B);
		if (N(B) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Z,
		N,
		Q,
		_,
		B,
		S,
		Y
	]), ft = p(() => {
		let e = [], t = !!Z?.visible, n = Y && Q && !!Z?.loading, r = Y ? !J || !Q || !t || !!Z?.disabled : !J;
		return R && e.push(/* @__PURE__ */ m(i, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: n,
			onClick: z,
			label: Qe
		}, "cashier-pts-back")), q && !M && L.length > 0 && e.push(/* @__PURE__ */ m(i, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: $,
			disabled: r,
			loading: n,
			label: tt
		}, "cashier-pts-continue")), e;
	}, [
		Z,
		Qe,
		R,
		tt,
		z,
		$,
		J,
		Q,
		M,
		q,
		L.length,
		Y
	]), pt = p(() => {
		let e = he({ translateKey: g });
		if (!J) return e;
		if (Y) {
			let t = I.paymentTypeName === V;
			if (t && I.errorMessage) return {
				...e,
				legacyTitle: I.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ m(fe, {}),
				tone: "danger"
			};
			if (!t || !I.isComplete) return ue({ translateKey: g });
		}
		return {
			legacyTitle: g("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: H?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: H?.values,
			icon: /* @__PURE__ */ m(ce, {})
		};
	}, [
		I,
		J,
		Y,
		H,
		V,
		g
	]);
	return ae("bottom", ft), Se({
		onBack: R ? z : void 0,
		backKey: "Backspace"
	}), f(() => {
		if (!v || !te(y) || q || !S) return;
		let e = l(L, S);
		if (!e) return;
		let t = n(e);
		if (N(e) > 0) {
			_({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		_,
		L,
		S,
		v,
		y,
		q,
		N
	]), M || L.length === 0 ? /* @__PURE__ */ m(pe, { text: "payment.no_pts_found" }) : /* @__PURE__ */ m(me, {
		id: h.id("route-payment-types"),
		className: h.className("route-payment-types"),
		title: b ? void 0 : g("cta.choose_payment_type"),
		header: b ? /* @__PURE__ */ m(xe, {
			content: pt,
			className: Me
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ je("div", {
			className: de(h.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-6 @md:pb-7", Ne),
			children: [K ? /* @__PURE__ */ m(le, {
				paymentTypes: L,
				domScope: "route-payment-types",
				animateItems: !0,
				selectedPaymentType: S,
				onSelect: ot,
				renderPanel: dt,
				hasPanel: it,
				renderActions: at,
				isPaymentTypeDisabled: W,
				showMeta: !0
			}) : /* @__PURE__ */ m(Te, {
				paymentTypes: L,
				domScope: "route-payment-types",
				animateItems: !0,
				selectable: q,
				selectedPaymentType: S,
				onSelect: ot,
				renderActions: at,
				isPaymentTypeDisabled: W,
				showMeta: !0
			}), Ke]
		})
	});
}
//#endregion
export { g as PtsView, h as component };
