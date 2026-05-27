import { A as e, Bn as t, C as n, Cr as r, D as i, F as a, Fn as ee, Gt as te, Ht as ne, I as o, Lt as re, M as ie, Mt as s, N as ae, Ot as oe, Rt as se, Sr as ce, Ut as le, Vn as ue, Vt as de, Wt as fe, _ as pe, an as me, ar as he, b as ge, br as c, c as _e, cr as ve, f as ye, fr as be, h as xe, it as Se, j as Ce, jt as l, l as we, m as Te, n as Ee, o as De, qt as Oe, s as ke, t as Ae, u as je, x as Me, y as Ne, z as u, zt as Pe } from "./useBackNavigation-CruLKbMz.js";
import { CashierLayoutListType as Fe, CashierMethods as d } from "./types/CashierConfig.js";
import { useCallback as f, useContext as Ie, useEffect as p, useMemo as m, useRef as Le, useState as Re } from "react";
import { jsx as h, jsxs as ze } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var Be = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Ve = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", He = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Ue = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, We = (e, t, n) => {
	let r = e(t);
	return r === t ? n : r;
}, Ge = (e) => typeof e == "string" ? e : e.baseName;
function Ke({ loaderPaymentTypes: Ke = [] }) {
	let g = t(), { translateKey: _ } = me(), v = r(), { uiComboView: y, lockAmount: qe, uiComboView__PaymentTypes: b, uiInteractivePrompts: Je, uiPaymentConfirmView: Ye, uiShowFees: x, uiListStyle: Xe, selectedPaymentType: S, initialAmount: C, method: w, currency: T, user: E, locale: Ze, uiAccountDelete: Qe, uiListSelectable: $e, uiPreselectedPaymentType: et, onPaymentTypeSelected: D, paymentFormDraft: O, comboViewFormDraft: k, resetFlowOnBack: tt, setCashierState: A } = Ie(ue), { currencyFormatter: nt, formatCurrencyValue: rt, formatDisplayValue: it } = Se(), { paymentTypesList: at, isError: j } = oe(), { getBonusCountForPaymentType: M } = n(), ot = m(() => de(nt), [nt]), { selectPaymentType: N, clearPaymentSelection: P } = i(), { requestAccountDelete: st, actionConfirmationModal: ct } = Ne(), lt = Le(!1), [ut, dt] = Re(null), [F, ft] = Re({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), I = at.length > 0 ? at : Ke, pt = Oe({
		uiComboView: y,
		lockAmount: qe,
		method: w
	}), mt = _("cta.back"), { canGoBack: L, handleBack: ht } = Ae({
		defaultRoute: pt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !0,
		replace: !y
	}), gt = y && !a(b), R = f(() => {
		gt && P(), ht();
	}, [
		P,
		ht,
		gt
	]), _t = _("cta.continue"), z = m(() => s(I, S), [I, S]), B = z ? l(z) : S, V = m(() => {
		if (!z || !x || !Ue(z.fee)) return null;
		let e = He(z.fee, it);
		if (!e) return null;
		let t = w === d.PAYOUT, n = {
			fee: e,
			method: We(_, t ? "cta.payout" : "cta.payin", t ? "Withdraw" : "Deposit").toLocaleLowerCase(Ge(Ze))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return z.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : z.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		it,
		Ze,
		w,
		z,
		_,
		x
	]), vt = y && be(C), H = y && be(C), yt = H ? C : "", U = f((e) => vt ? re(C, e.limits, { maxBoundary: se(w, E, e.fee) }).isOutOfRange : !1, [
		C,
		w,
		vt,
		E
	]), bt = z ? U(z) : !1, W = Xe === Fe.ACCORDION, G = $e || W, K = !!z && !bt, xt = _("account.delete.title"), St = f((e) => !Qe || !e.accountId ? null : /* @__PURE__ */ h(c, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": xt,
		onClick: () => {
			st(e);
		},
		iconOnly: !0,
		label: xt,
		leadingIcon: /* @__PURE__ */ h(ve, {})
	}), [
		xt,
		st,
		Qe
	]), q = f((e) => {
		let t = u(e, C), n = Pe(t) ?? 0, r = se(w, E, e.fee), i = re(t, e.limits, { maxBoundary: r }), a = _e(w, T, E, {
			amount: t,
			fee: e.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: w === d.PAYOUT
		}), ee = x ? ne(e.fee, n, {
			feeCurrencyFormatter: ot,
			formatCurrencyValue: rt
		}) : null, o = w === d.PAYOUT ? fe(e.fee, n, T) : null, ie = w === d.PAYIN && x ? le(e.fee, n, T) : null, s = w === d.PAYOUT ? te(a, [ee, o]) : a, ae = w === d.PAYIN ? [ee, ie].filter((e) => e !== null) : [], oe = r !== null && i.value !== null && i.value > r ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...s, ...ae],
			rowVariants: oe
		};
	}, [
		T,
		ot,
		rt,
		C,
		w,
		x,
		E
	]), J = f((e) => ae(e, yt), [yt]), Y = f((e, { hasVisibleInlineContent: t }) => ke({
		uiPaymentConfirmView: Ye,
		hasPendingStep: M(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: t ? !1 : (e.notifications ?? []).length > 0
	}), [M, Ye]), Ct = f((e) => !ie(e) && Y(e, { hasVisibleInlineContent: !1 }).action === "submit", [Y]), wt = f((e) => J(e) && Y(e, { hasVisibleInlineContent: !0 }).action === "submit", [J, Y]), Tt = f((e) => J(e) || q(e).fields.length > 0 || Ct(e), [
		Ct,
		q,
		J
	]), X = !!(W && z && J(z)), Z = !!(W && z && Ct(z)), Et = !!(W && z && wt(z));
	p(() => {
		tt && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [tt, A]), p(() => {
		if (!G || lt.current || S || !et) return;
		let e = s(I, et);
		e && N(l(e));
	}, [
		I,
		N,
		S,
		G,
		et
	]), p(() => {
		bt && P();
	}, [P, bt]);
	let Dt = f((e) => {
		let t = s(I, e);
		if (!t || U(t)) return;
		let n = l(t);
		if (G) {
			if (lt.current = !0, z === t) return;
			N(n), D && D(t);
			return;
		}
		if (N(n), D && D(t), M(t) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		M,
		G,
		U,
		v,
		D,
		I,
		z,
		N
	]), Ot = f((e) => {
		let t = u(e, C), n = {
			paymentTypeName: l(e),
			method: w,
			amount: t
		};
		if (je(k, n)) return k.values;
		if (je(O, n)) return O.values;
	}, [
		k,
		C,
		w,
		O
	]), kt = f((e, t) => {
		if (U(e)) return;
		let n = o(e), r = u(e, C, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = l(e);
		if (A((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: null,
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: w,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), M(e) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		M,
		C,
		U,
		w,
		v,
		A
	]), At = f((e, t) => {
		let n = o(e), r = u(e, C, t.values), i = {
			paymentTypeName: l(e),
			method: w,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		A((e) => we(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		C,
		w,
		A
	]), jt = f((e, t) => {
		ft((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Mt = f((t) => {
		let n = l(t), r = Y(t, { hasVisibleInlineContent: J(t) }), i = q(t);
		return /* @__PURE__ */ ze("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: [/* @__PURE__ */ h(Ce, {
				paymentType: t,
				selectionId: n,
				amountValue: C,
				hideAmountField: H,
				onActionsChange: dt,
				onPromptStateChange: jt,
				onPreparedValues: kt,
				onValuesChange: At,
				valueOverrides: Ot(t),
				surfaceChrome: "plain",
				submitMode: r.submitMode
			}, n), i.fields.length > 0 && /* @__PURE__ */ h(e, {
				summaryFields: i.fields,
				rowVariants: i.rowVariants
			})]
		});
	}, [
		q,
		Ot,
		kt,
		jt,
		At,
		J,
		C,
		Y,
		H
	]), Q = ut?.submit, $ = !X && !Z || F.paymentTypeName === B, Nt = f(() => {
		if (X) {
			if (!$) return;
			Q?.onClick();
			return;
		}
		if (Z) {
			if (!$) return;
			Q?.onClick();
			return;
		}
		if (!z || !S) return;
		let e = l(z);
		if (M(z) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Q,
		Z,
		M,
		$,
		v,
		z,
		S,
		X
	]), Pt = m(() => {
		let e = [], t = !!Q?.visible, n = (X || Z) && $ && !!Q?.loading, r = X || Z ? !K || !$ || !t || !!Q?.disabled : !K, i = Z || Et ? _(w === d.PAYOUT ? "cta.payout" : "cta.payin") : _t;
		return L && e.push(/* @__PURE__ */ h(c, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: n,
			onClick: R,
			label: mt
		}, "cashier-pts-back")), G && !j && I.length > 0 && e.push(/* @__PURE__ */ h(c, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: Nt,
			disabled: r,
			loading: n,
			label: i
		}, "cashier-pts-continue")), e;
	}, [
		Q,
		mt,
		L,
		Z,
		Et,
		_t,
		R,
		Nt,
		K,
		$,
		j,
		G,
		w,
		I.length,
		X,
		_
	]), Ft = m(() => {
		let e = xe({ translateKey: _ });
		if (!K) return e;
		if (X) {
			let t = F.paymentTypeName === B;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ h(ve, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return pe({ translateKey: _ });
		}
		return {
			legacyTitle: _("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: V?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: V?.values,
			icon: /* @__PURE__ */ h(he, {})
		};
	}, [
		F,
		K,
		X,
		V,
		B,
		_
	]);
	return ee("bottom", Pt), ge({
		onBack: L ? R : void 0,
		backKey: "Backspace"
	}), p(() => {
		if (!y || !a(b) || G || !S) return;
		let e = s(I, S);
		if (!e) return;
		let t = l(e);
		if (M(e) > 0) {
			v({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		v,
		I,
		S,
		y,
		b,
		G,
		M
	]), j || I.length === 0 ? /* @__PURE__ */ h(Ee, { text: "payment.no_pts_found" }) : /* @__PURE__ */ h(De, {
		id: g.id("route-payment-types"),
		className: g.className("route-payment-types"),
		title: Je ? void 0 : _("cta.choose_payment_type"),
		header: Je ? /* @__PURE__ */ h(ye, {
			content: Ft,
			className: Be
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ ze("div", {
			className: ce(g.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-6 @md:pb-7", Ve),
			children: [W ? /* @__PURE__ */ h(Te, {
				paymentTypes: I,
				domScope: "route-payment-types",
				animateItems: !0,
				selectedPaymentType: S,
				onSelect: Dt,
				renderPanel: Mt,
				hasPanel: Tt,
				renderActions: St,
				isPaymentTypeDisabled: U,
				showMeta: !0
			}) : /* @__PURE__ */ h(Me, {
				paymentTypes: I,
				domScope: "route-payment-types",
				animateItems: !0,
				selectable: G,
				selectedPaymentType: S,
				onSelect: Dt,
				renderActions: St,
				isPaymentTypeDisabled: U,
				showMeta: !0
			}), ct]
		})
	});
}
var g = () => /* @__PURE__ */ h(Ee, { text: "payment.no_pts_found" });
//#endregion
export { Ke as PtsView, g as errorComponent };
