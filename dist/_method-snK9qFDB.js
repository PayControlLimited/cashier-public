import { CashierMethods as e } from "./types/CashierConfig.js";
import { $t as t, Ar as n, B as r, C as i, D as a, Dr as o, Dt as s, Gr as c, Gt as ee, H as te, Hr as l, I as ne, Jt as u, Kt as re, L as ie, M as ae, Nt as d, Ot as oe, Pr as se, Pt as f, T as ce, Tn as le, Ut as ue, Vt as de, Wr as fe, Wt as pe, Xt as me, Yt as he, Zt as ge, a as _e, an as ve, c as ye, cr as be, d as xe, dn as Se, en as Ce, f as we, fn as Te, j as Ee, k as De, ln as Oe, n as ke, nn as p, nr as Ae, o as je, on as Me, p as Ne, pn as Pe, qt as Fe, rt as Ie, s as Le, sn as m, sr as Re, t as ze, u as Be, un as Ve, w as He } from "./useBackNavigation-Dx4MaGNK.js";
import { useCallback as h, useContext as Ue, useEffect as We, useMemo as g, useRef as Ge, useState as _ } from "react";
import { Fragment as Ke, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var qe = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Je = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Ye = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Xe = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Ze = (e) => typeof e == "string" ? e : e.baseName;
function Qe({ loaderPaymentTypes: Qe = [] }) {
	let b = Re(), { translateKey: x } = le(), S = c(), { uiComboView: C, lockAmount: $e, uiComboView__PaymentTypes: et, uiInteractivePrompts: tt, uiPaymentConfirmView: nt, uiBonusesStyle: w, uiShowFees: T, uiListStyle: rt, selectedPaymentType: E, initialAmount: D, method: O, currency: k, user: A, locale: it, uiAccountDelete: at, uiListSelectable: ot, uiFixedControls: j, uiPreselectedPaymentType: st, onPaymentTypeSelected: M, onPaymentTypeDeselected: ct, paymentFormDraft: lt, comboViewFormDraft: ut, resetFlowOnBack: dt, setCashierState: N } = Ue(be), { currencyFormatter: ft, formatCurrencyValue: pt, formatDisplayValue: mt } = Ie(), { paymentTypesList: ht, isError: gt } = oe(), { getBonusCountForPaymentType: P, getBonusAvailabilityForPaymentType: _t, getAvailableBonusesForPaymentType: F } = s(), vt = g(() => Oe(ft), [ft]), { selectPaymentType: I, clearPaymentSelection: L } = ie(), { requestAccountDelete: yt, actionConfirmationModal: bt } = Ee(), xt = Ge(!1), [St, Ct] = _(null), [R, wt] = _({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Tt, Et] = _(!1), [Dt, Ot] = _(!1), z = ht.length > 0 ? ht : Qe, kt = de({
		uiComboView: C,
		lockAmount: $e,
		method: O
	}), At = x("cta.back"), { canGoBack: jt, handleBack: Mt } = ze({
		defaultRoute: kt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !dt,
		replace: dt || !C
	});
	We(() => {
		dt && N((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [dt, N]);
	let Nt = C && !t(et), Pt = h(() => {
		Nt && L(), Mt();
	}, [
		L,
		Mt,
		Nt
	]), Ft = x("cta.continue"), B = g(() => f(z, E), [z, E]), V = B ? d(B) : E, It = g(() => {
		if (!B || !T || !Xe(B.fee)) return null;
		let t = Ye(B.fee, mt);
		if (!t) return null;
		let n = {
			fee: t,
			method: x(O === e.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(Ze(it))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		mt,
		it,
		O,
		B,
		x,
		T
	]), Lt = C && se(D), H = C && se(D), Rt = H ? D : "", U = h((e) => Lt ? ve(D, e.limits, { maxBoundary: Me(O, A, e.fee) }).isOutOfRange : !1, [
		D,
		O,
		Lt,
		A
	]), zt = B ? U(B) : !1, W = Fe(rt), Bt = ge(rt), Vt = me(w), Ht = Vt, G = ot || W || Vt, K = !!B && !zt, Ut = x("account.delete.title"), Wt = h((e) => !at || !e.accountId ? null : /* @__PURE__ */ v(l, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Ut,
		onClick: () => {
			yt(e);
		},
		iconOnly: !0,
		label: Ut,
		leadingIcon: /* @__PURE__ */ v(n, {})
	}), [
		Ut,
		yt,
		at
	]), Gt = h((t) => {
		let n = p(t, D), r = m(n) ?? 0, i = Me(O, A, t.fee), a = ve(n, t.limits, { maxBoundary: i }), o = Le(O, k, A, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: O === e.PAYOUT
		}), s = T ? Ve(t.fee, r, {
			feeCurrencyFormatter: vt,
			formatCurrencyValue: pt
		}) : null, c = O === e.PAYOUT ? Te(t.fee, r, k) : null, ee = O === e.PAYIN && T ? Se(t.fee, r, k) : null, te = O === e.PAYOUT ? Pe(o, [s, c]) : o, l = O === e.PAYIN ? [s, ee].filter((e) => e !== null) : [], ne = i !== null && a.value !== null && a.value > i ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...te, ...l],
			rowVariants: ne
		};
	}, [
		k,
		vt,
		pt,
		D,
		O,
		T,
		A
	]), q = h((e) => re(e, Rt), [Rt]), J = h((e, { hasVisibleInlineContent: t }) => je({
		uiPaymentConfirmView: nt,
		hasPendingStep: u(w) && P(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: t ? !1 : (e.notifications ?? []).length > 0
	}), [
		P,
		w,
		nt
	]), Kt = h((e) => !ue(e) && J(e, { hasVisibleInlineContent: !1 }).action === "submit", [J]), qt = h((e) => q(e) && J(e, { hasVisibleInlineContent: !0 }).action === "submit", [q, J]), Jt = h((e) => q(e) || ee(e) || Gt(e).fields.length > 0 || Kt(e) || !j || he(w) && _t(e).length > 0, [
		Kt,
		_t,
		Gt,
		q,
		j,
		w
	]), Y = !!(W && B && q(B)), X = !!(W && B && Kt(B)), Yt = !!(W && B && qt(B));
	We(() => {
		if (!G || xt.current || E || !st) return;
		let e = f(z, st);
		e && I(d(e), { availableBonuses: F(e, { amount: m(D) }) });
	}, [
		F,
		D,
		z,
		I,
		E,
		G,
		st
	]), We(() => {
		zt && L();
	}, [L, zt]);
	let Xt = h((e) => {
		let t = f(z, e);
		if (!t || U(t)) return;
		let n = d(t);
		if (G) {
			if (xt.current = !0, B === t) {
				Bt && W && Jt(t) && (L(), ct?.(t));
				return;
			}
			I(n, { availableBonuses: F(t, { amount: m(D) }) }), M && M(t);
			return;
		}
		if (I(n, { availableBonuses: F(t, { amount: m(D) }) }), M && M(t), u(w) && P(t) > 0) {
			S({ to: "/bonus" });
			return;
		}
		S({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		F,
		P,
		Jt,
		W,
		Bt,
		G,
		U,
		D,
		L,
		S,
		ct,
		M,
		z,
		B,
		I,
		w
	]), Zt = h((e) => {
		let t = p(e, D), n = {
			paymentTypeName: d(e),
			method: O,
			amount: t
		};
		if (Ne(ut, n)) return ut.values;
		if (Ne(lt, n)) return lt.values;
	}, [
		ut,
		D,
		O,
		lt
	]), Qt = h((e, t) => {
		if (U(e)) return;
		let n = Ce(e), r = p(e, D, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = d(e), o = F(e, { amount: m(r) });
		if (N((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: ne(e.selectedBonusCode, o),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: O,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), u(w) && P(e) > 0) {
			S({ to: "/bonus" });
			return;
		}
		S({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		F,
		P,
		D,
		U,
		O,
		S,
		N,
		w
	]), $t = h((e, t) => {
		let n = Ce(e), r = p(e, D, t.values), i = {
			paymentTypeName: d(e),
			method: O,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		N((e) => we(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		D,
		O,
		N
	]), en = h((e, t) => {
		wt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Z = St?.submit, Q = !Y && !X || R.paymentTypeName === V, tn = h(() => {
		if (Y) {
			if (!Q) return;
			Z?.onClick();
			return;
		}
		if (X) {
			if (!Q) return;
			Z?.onClick();
			return;
		}
		if (!B || !E) return;
		let e = d(B);
		if (u(w) && P(B) > 0) {
			S({ to: "/bonus" });
			return;
		}
		S({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Z,
		X,
		P,
		Q,
		S,
		B,
		E,
		Y,
		w
	]), nn = !!Z?.visible, rn = (Y || X) && Q && !!Z?.loading, an = Y || X ? !K || !Q || !nn || !!Z?.disabled : !K, on = X || Yt ? x(O === e.PAYOUT ? "cta.payout" : "cta.payin") : Ft, sn = g(() => jt ? /* @__PURE__ */ v(l, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: rn,
		onClick: Pt,
		label: At
	}, "cashier-pts-back") : null, [
		rn,
		At,
		jt,
		Pt
	]), cn = g(() => !G || gt || z.length === 0 ? null : /* @__PURE__ */ v(l, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: tn,
		disabled: an,
		loading: rn,
		label: on
	}, "cashier-pts-continue"), [
		rn,
		an,
		on,
		tn,
		gt,
		G,
		z.length
	]), $ = g(() => sn ? [sn] : [], [sn]), ln = g(() => cn ? [cn] : [], [cn]), un = g(() => [...$, ...ln], [$, ln]), dn = g(() => Tt ? $ : [], [Tt, $]), fn = g(() => j ? un : W ? dn : [], [
		dn,
		W,
		un,
		j
	]), pn = h((e) => {
		let t = d(e), n = J(e, { hasVisibleInlineContent: q(e) }), r = Zt(e), i = p(e, D, r), a = he(w) && _t(e, { amount: m(i) }).length > 0 ? /* @__PURE__ */ v(xe, {
			paymentType: e,
			amount: i
		}) : null, o = !!a && !H && Ce(e), s = !j && t === V, c = !!(a && s);
		return /* @__PURE__ */ y("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: fe("flex min-w-0 flex-col", !pe(e) && "px-2 @md:px-2", c ? "gap-6" : "gap-3"),
			children: [
				!o && a,
				/* @__PURE__ */ v(te, {
					paymentType: e,
					selectionId: t,
					amountValue: D,
					hideAmountField: H,
					renderAfterAmountField: o ? a : void 0,
					onActionsChange: Ct,
					onPromptStateChange: en,
					onPreparedValues: Qt,
					onValuesChange: $t,
					valueOverrides: r,
					surfaceChrome: "plain",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: s && !c,
					animateEntrance: !1
				}, t),
				s && /* @__PURE__ */ v(He, {
					domScope: "route-payment-types-accordion-actions",
					items: ln,
					adaptive: !1
				})
			]
		});
	}, [
		ln,
		_t,
		Zt,
		Qt,
		en,
		$t,
		q,
		D,
		J,
		V,
		H,
		w,
		j
	]), mn = h((e) => {
		let t = Gt(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ v(r, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [Gt]), hn = h((e) => ({ amount: m(p(e, D, Zt(e))) }), [Zt, D]), gn = g(() => {
		let e = a({ translateKey: x });
		if (!K) return e;
		if (Y) {
			let t = R.paymentTypeName === V;
			if (t && R.errorMessage) return {
				...e,
				legacyTitle: R.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ v(n, {}),
				tone: "danger"
			};
			if (!t || !R.isComplete) return De({ translateKey: x });
		}
		return {
			legacyTitle: x("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: It?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: It?.values,
			icon: /* @__PURE__ */ v(o, {})
		};
	}, [
		R,
		K,
		Y,
		It,
		V,
		x
	]);
	return Ae("bottom", fn, fn.length > 0, { reserveSpace: j }), ce({
		onBack: jt ? Pt : void 0,
		backKey: "Backspace"
	}), We(() => {
		if (!C || !t(et) || G || !E) return;
		let e = f(z, E);
		if (!e) return;
		let n = d(e);
		if (u(w) && P(e) > 0) {
			S({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		S({
			to: "/pt/$id",
			params: { id: n },
			replace: !0
		});
	}, [
		S,
		z,
		E,
		C,
		et,
		G,
		P,
		w
	]), gt || z.length === 0 ? /* @__PURE__ */ v(ke, { text: "payment.no_pts_found" }) : /* @__PURE__ */ v(_e, {
		id: b.id("route-payment-types"),
		className: b.className("route-payment-types"),
		title: tt ? void 0 : x("cta.choose_payment_type"),
		header: tt ? /* @__PURE__ */ v(ye, {
			content: gn,
			className: qe
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ y("div", {
			className: fe(b.className("route-payment-types-content"), "px-1.5 @sm:px-3", j ? "pb-3 @md:pb-4" : "pb-4", Je),
			children: [
				Ht && /* @__PURE__ */ v(xe, {
					placement: "payment-list",
					paymentType: B,
					paymentTypes: z,
					amount: B ? p(B, D) : D
				}),
				W ? /* @__PURE__ */ y(Ke, { children: [/* @__PURE__ */ v(Be, {
					paymentTypes: z,
					domScope: "route-payment-types",
					selectedPaymentType: E,
					onSelect: Xt,
					renderPanel: pn,
					renderFooter: mn,
					hasPanel: Jt,
					collapsible: Bt,
					renderActions: Wt,
					isPaymentTypeDisabled: U,
					hoverMode: G ? "none" : "group",
					showMeta: !0,
					bonusEvaluationContext: hn
				}), !j && /* @__PURE__ */ v(He, {
					domScope: "route-payment-types-back",
					items: $,
					onFallbackActiveChange: Et
				})] }) : /* @__PURE__ */ y(Ke, { children: [/* @__PURE__ */ v(ae, {
					paymentTypes: z,
					domScope: "route-payment-types",
					animateItems: !0,
					selectable: G,
					selectedPaymentType: E,
					onSelect: Xt,
					renderActions: Wt,
					isPaymentTypeDisabled: U,
					showMeta: !0
				}), !j && /* @__PURE__ */ v("div", {
					"data-slot": "route-payment-types-action-stack",
					className: fe(b.className("route-payment-types-action-stack"), Dt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
					children: /* @__PURE__ */ v(i, {
						domScope: "route-payment-types-actions",
						items: un,
						fixed: !1,
						onFallbackActiveChange: Ot
					})
				})] }),
				bt
			]
		})
	});
}
var b = () => /* @__PURE__ */ v(ke, { text: "payment.no_pts_found" });
//#endregion
export { Qe as PtsView, b as errorComponent };
