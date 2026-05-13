import { A as e, Ar as t, At as n, Dt as r, Er as i, I as a, It as o, Kn as s, Lt as ee, M as c, N as te, O as ne, T as re, Vn as ie, Yt as ae, _ as oe, c as se, dr as ce, f as le, h as ue, jt as l, kr as de, mr as u, n as fe, o as pe, p as me, qn as he, rt as ge, s as _e, sn as ve, t as ye, u as be, v as xe, vr as Se, x as Ce, y as we } from "./useBackNavigation-uCdwRjil.js";
import { a as Te, i as Ee } from "./defaults-Db9f81OM.js";
import { useCallback as d, useContext as De, useEffect as f, useMemo as p, useRef as Oe, useState as ke } from "react";
import { jsx as m, jsxs as Ae } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var je = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Me = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Ne = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Pe = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Fe = (e, t, n) => {
	let r = e(t);
	return r === t ? n : r;
}, Ie = (e) => typeof e == "string" ? e : e.baseName;
function Le({ loaderPaymentTypes: Le = [] }) {
	let h = s(), { translateKey: g } = ve(), _ = t(), { uiComboView: v, lockAmount: Re, uiComboView__PaymentTypes: y, uiInteractivePrompts: b, uiShowFees: x, uiListStyle: ze, selectedPaymentType: S, initialAmount: C, method: w, user: Be, locale: Ve, uiAccountDelete: He, uiListSelectable: Ue, uiPreselectedPaymentType: T, onPaymentTypeSelected: E, paymentFormDraft: D, comboViewFormDraft: O, resetFlowOnBack: k, setCashierState: A } = De(he), { formatDisplayValue: j } = ge(), { paymentTypesList: M, isError: N } = r(), { getBonusCountForPaymentType: P } = Ce(), { selectPaymentType: F, clearPaymentSelection: I } = re(), { requestAccountDelete: We, actionConfirmationModal: Ge } = oe(), Ke = Oe(!1), [qe, Je] = ke(null), [L, Ye] = ke({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), R = M.length > 0 ? M : Le, Xe = ae({
		uiComboView: v,
		lockAmount: Re,
		method: w
	}), Ze = g("cta.back"), { canGoBack: z, handleBack: Qe } = ye({
		defaultRoute: Xe,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !0,
		replace: !v
	}), $e = v && !c(y), B = d(() => {
		$e && I(), Qe();
	}, [
		I,
		Qe,
		$e
	]), et = g("cta.continue"), V = p(() => l(R, S), [R, S]), H = V ? n(V) : S, U = p(() => {
		if (!V || !x || !Pe(V.fee)) return null;
		let e = Ne(V.fee, j);
		if (!e) return null;
		let t = w === Te.PAYOUT, n = {
			fee: e,
			method: Fe(g, t ? "cta.payout" : "cta.payin", t ? "Withdraw" : "Deposit").toLocaleLowerCase(Ie(Ve))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return V.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : V.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		j,
		Ve,
		w,
		V,
		g,
		x
	]), tt = v && Se(C), W = v && Se(C), nt = W ? C : "", G = d((e) => tt ? o(C, e.limits, { maxBoundary: ee(w, Be, e.fee) }).isOutOfRange : !1, [
		C,
		w,
		tt,
		Be
	]), K = V ? G(V) : !1, q = ze === Ee.ACCORDION, J = Ue || q, Y = !!V && !K, rt = d((t) => e(t, nt), [nt]), X = !!(q && V && rt(V)), Z = g("account.delete.title"), it = d((e) => !He || !e.accountId ? null : /* @__PURE__ */ m(i, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Z,
		onClick: () => {
			We(e);
		},
		iconOnly: !0,
		label: Z,
		leadingIcon: /* @__PURE__ */ m(u, {})
	}), [
		Z,
		We,
		He
	]);
	f(() => {
		k && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [k, A]), f(() => {
		if (!J || Ke.current || S || !T) return;
		let e = l(R, T);
		e && F(n(e));
	}, [
		R,
		F,
		S,
		J,
		T
	]), f(() => {
		K && I();
	}, [I, K]);
	let at = d((e) => {
		let t = l(R, e);
		if (!t || G(t)) return;
		let r = n(t);
		if (J) {
			if (Ke.current = !0, V === t) return;
			F(r), E && E(t);
			return;
		}
		if (F(r), E && E(t), P(t) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: r }
		});
	}, [
		P,
		J,
		G,
		_,
		E,
		R,
		V,
		F
	]), ot = d((e) => {
		let t = a(e, C), r = {
			paymentTypeName: n(e),
			method: w,
			amount: t
		};
		if (se(O, r)) return O.values;
		if (se(D, r)) return D.values;
	}, [
		O,
		C,
		w,
		D
	]), st = d((e, t) => {
		if (G(e)) return;
		let r = te(e), i = a(e, C, t.values);
		if (r && i.length === 0) return;
		let o = r ? {
			...t.values,
			amount: i
		} : t.values, s = n(e);
		if (A((e) => ({
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
		})), P(e) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: s }
		});
	}, [
		P,
		C,
		G,
		w,
		_,
		A
	]), ct = d((e, t) => {
		let r = te(e), i = a(e, C, t.values), o = {
			paymentTypeName: n(e),
			method: w,
			amount: i,
			values: r ? {
				...t.values,
				amount: i
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		A((e) => _e(e.paymentFormDraft, o) ? e : {
			...e,
			paymentFormDraft: o
		});
	}, [
		C,
		w,
		A
	]), lt = d((e, t) => {
		Ye((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), ut = d((e) => {
		let t = n(e);
		return /* @__PURE__ */ m(ne, {
			paymentType: e,
			selectionId: t,
			amountValue: C,
			hideAmountField: W,
			onActionsChange: Je,
			onPromptStateChange: lt,
			onPreparedValues: st,
			onValuesChange: ct,
			valueOverrides: ot(e),
			surfaceChrome: "plain"
		}, t);
	}, [
		ot,
		st,
		lt,
		ct,
		C,
		W
	]), Q = qe?.submit, $ = !X || L.paymentTypeName === H, dt = d(() => {
		if (X) {
			if (!$) return;
			Q?.onClick();
			return;
		}
		if (!V || !S) return;
		let e = n(V);
		if (P(V) > 0) {
			_({ to: "/bonus" });
			return;
		}
		_({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Q,
		P,
		$,
		_,
		V,
		S,
		X
	]), ft = p(() => {
		let e = [], t = !!Q?.visible, n = X && $ && !!Q?.loading, r = X ? !Y || !$ || !t || !!Q?.disabled : !Y;
		return z && e.push(/* @__PURE__ */ m(i, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: n,
			onClick: B,
			label: Ze
		}, "cashier-pts-back")), J && !N && R.length > 0 && e.push(/* @__PURE__ */ m(i, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: dt,
			disabled: r,
			loading: n,
			label: et
		}, "cashier-pts-continue")), e;
	}, [
		Q,
		Ze,
		z,
		et,
		B,
		dt,
		Y,
		$,
		N,
		J,
		R.length,
		X
	]), pt = p(() => {
		let e = me({ translateKey: g });
		if (!Y) return e;
		if (X) {
			let t = L.paymentTypeName === H;
			if (t && L.errorMessage) return {
				...e,
				legacyTitle: L.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ m(u, {}),
				tone: "danger"
			};
			if (!t || !L.isComplete) return ue({ translateKey: g });
		}
		return {
			legacyTitle: g("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: U?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: U?.values,
			icon: /* @__PURE__ */ m(ce, {})
		};
	}, [
		L,
		Y,
		X,
		U,
		H,
		g
	]);
	return ie("bottom", ft), xe({
		onBack: z ? B : void 0,
		backKey: "Backspace"
	}), f(() => {
		if (!v || !c(y) || J || !S) return;
		let e = l(R, S);
		if (!e) return;
		let t = n(e);
		if (P(e) > 0) {
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
		R,
		S,
		v,
		y,
		J,
		P
	]), N || R.length === 0 ? /* @__PURE__ */ m(fe, { text: "payment.no_pts_found" }) : /* @__PURE__ */ m(pe, {
		id: h.id("route-payment-types"),
		className: h.className("route-payment-types"),
		title: b ? void 0 : g("cta.choose_payment_type"),
		header: b ? /* @__PURE__ */ m(be, {
			content: pt,
			className: je
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ Ae("div", {
			className: de(h.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-6 @md:pb-7", Me),
			children: [q ? /* @__PURE__ */ m(le, {
				paymentTypes: R,
				domScope: "route-payment-types",
				animateItems: !0,
				selectedPaymentType: S,
				onSelect: at,
				renderPanel: ut,
				hasPanel: rt,
				renderActions: it,
				isPaymentTypeDisabled: G,
				showMeta: !0
			}) : /* @__PURE__ */ m(we, {
				paymentTypes: R,
				domScope: "route-payment-types",
				animateItems: !0,
				selectable: J,
				selectedPaymentType: S,
				onSelect: at,
				renderActions: it,
				isPaymentTypeDisabled: G,
				showMeta: !0
			}), Ge]
		})
	});
}
var h = () => /* @__PURE__ */ m(fe, { text: "payment.no_pts_found" });
//#endregion
export { Le as PtsView, h as errorComponent };
