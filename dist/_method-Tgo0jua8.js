import { CashierMethods as e } from "./types/CashierConfig.js";
import { t } from "./_method-CMx8pi-m.js";
import { A as n, At as r, B as i, Bn as a, Bt as o, Cr as s, Ct as c, Dt as ee, Et as te, F as ne, Ht as re, I as ie, It as ae, Kr as oe, Lt as se, Mt as l, R as ce, Rt as u, Sr as le, St as ue, Tt as de, Ur as fe, Ut as pe, Vt as me, Wt as he, X as ge, Xr as _e, Y as ve, _r as ye, _t as be, a as xe, bt as Se, c as Ce, ct as we, dt as Te, et as Ee, gn as De, i as Oe, ii as ke, it as Ae, j as je, kt as Me, ln as d, n as Ne, ni as Pe, nt as Fe, o as Ie, r as Le, ri as f, rt as Re, st as ze, t as Be, tt as Ve, u as He, un as p, wt as m, xt as Ue, yt as We } from "./inlinePaymentSubmit-D-5pD47f.js";
import { useCallback as h, useContext as Ge, useEffect as g, useMemo as _, useRef as Ke, useState as qe } from "react";
import { jsx as v, jsxs as Je } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var Ye = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Xe = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Ze = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Qe = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, $e = (e) => typeof e == "string" ? e : e.baseName;
function y() {
	let { paymentTypes: e } = t.useLoaderData();
	return /* @__PURE__ */ v(b, { loaderPaymentTypes: e });
}
function b({ loaderPaymentTypes: t = [] }) {
	let y = le(), { translateKey: b } = a(), x = ke(), { uiComboView: S, lockAmount: et, uiComboView__PaymentTypes: tt, uiInteractivePrompts: nt, uiPaymentConfirmView: rt, uiBonusesStyle: C, uiShowFees: w, uiListStyle: it, selectedPaymentType: T, initialAmount: E, method: D, currency: O, user: k, locale: at, uiAccountDelete: ot, uiListSelectable: st, uiFixedControls: A, uiPreselectedPaymentType: ct, onPaymentTypeSelected: j, onPaymentTypeDeselected: lt, paymentFormDraft: ut, comboViewFormDraft: dt, resetFlowOnBack: M, setCashierState: N } = Ge(s), { currencyFormatter: ft, formatCurrencyValue: pt, formatDisplayValue: mt } = Te(), { paymentTypesList: ht, isError: gt } = Ve(), { getBonusCountForPaymentType: P, getBonusAvailabilityForPaymentType: F, getAvailableBonusesForPaymentType: I } = Ee(), _t = _(() => o(ft), [ft]), { selectPaymentType: L, clearPaymentSelection: R } = ge(), { requestAccountDelete: vt, actionConfirmationModal: yt } = Oe(), bt = Ke(!1), [xt, St] = qe(null), [z, Ct] = qe({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [wt, Tt] = qe(!1), [Et, Dt] = qe(!1), B = ht.length > 0 ? ht : t, V = De(), Ot = be({
		uiComboView: S,
		lockAmount: et,
		method: D
	}), kt = b("cta.back"), { canGoBack: At, handleBack: jt } = ze({
		defaultRoute: Ot,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !M,
		replace: M || !S
	});
	g(() => {
		M && N((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [M, N]);
	let Mt = S && !Me(tt), Nt = h(() => {
		V || (Mt && R(), jt());
	}, [
		R,
		jt,
		V,
		Mt
	]), Pt = b("cta.continue"), H = _(() => p(B, T), [B, T]), U = H ? d(H) : T, Ft = _(() => {
		if (!H || !w || !Qe(H.fee)) return null;
		let t = Ze(H.fee, mt);
		if (!t) return null;
		let n = D === e.PAYOUT, r = {
			fee: t,
			method: b(n ? "cta.payout" : "cta.payin").toLocaleLowerCase($e(at))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return H.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : H.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		mt,
		at,
		D,
		H,
		b,
		w
	]), It = S && _e(E), Lt = S && _e(E), Rt = Lt ? E : "", W = h((e) => It ? ae(E, e.limits, { maxBoundary: se(D, k, e.fee) }).isOutOfRange : !1, [
		E,
		D,
		It,
		k
	]), zt = H ? W(H) : !1, G = c(it), Bt = ee(it), Vt = te(C), Ht = Vt, K = st || G || Vt, Ut = !!H && !zt, Wt = b("account.delete.title"), Gt = h((e) => !ot || !e.accountId ? null : /* @__PURE__ */ v(Pe, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Wt,
		disabled: V,
		onClick: () => {
			vt(e);
		},
		iconOnly: !0,
		label: Wt,
		leadingIcon: /* @__PURE__ */ v(oe, {})
	}), [
		Wt,
		V,
		vt,
		ot
	]), Kt = h((t) => {
		let n = l(t, E), r = u(n) ?? 0, i = se(D, k, t.fee), a = ae(n, t.limits, { maxBoundary: i }), o = Ce(D, O, k, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: D === e.PAYOUT
		}), s = w ? me(t.fee, r, {
			feeCurrencyFormatter: _t,
			formatCurrencyValue: pt
		}) : null, c = D === e.PAYOUT ? pe(t.fee, r, O) : null, ee = D === e.PAYIN && w ? re(t.fee, r, O) : null, te = D === e.PAYOUT ? he(o, [s, c]) : o, ne = D === e.PAYIN ? [s, ee].filter((e) => e !== null) : [], ie = i !== null && a.value !== null && a.value > i ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...te, ...ne],
			rowVariants: ie
		};
	}, [
		O,
		_t,
		pt,
		E,
		D,
		w,
		k
	]), q = h((e) => ue(e, Rt), [Rt]), J = h((e, { hasVisibleInlineContent: t }) => Be({
		uiPaymentConfirmView: rt,
		hasPendingStep: m(C) && P(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		P,
		C,
		rt
	]), qt = h((e) => !We(e) && J(e, { hasVisibleInlineContent: !1 }).action === "submit", [J]), Jt = h((e) => q(e) && J(e, { hasVisibleInlineContent: !0 }).action === "submit", [q, J]), Yt = h((e) => q(e) || Ue(e) || Kt(e).fields.length > 0 || qt(e) || !A || de(C) && F(e).length > 0, [
		qt,
		F,
		Kt,
		q,
		A,
		C
	]), Y = !!(G && H && q(H)), X = !!(G && H && qt(H)), Xt = !!(G && H && Jt(H));
	g(() => {
		if (!K || bt.current || T || !ct) return;
		let e = p(B, ct);
		e && L(d(e), { availableBonuses: I(e, { amount: u(E) }) });
	}, [
		I,
		E,
		B,
		L,
		T,
		K,
		ct
	]), g(() => {
		V || zt && R();
	}, [
		R,
		V,
		zt
	]);
	let Zt = h((e) => {
		if (V) return;
		let t = p(B, e);
		if (!t || W(t)) return;
		let n = d(t);
		if (K) {
			if (bt.current = !0, H === t) {
				Bt && G && Yt(t) && (R(), lt?.(t));
				return;
			}
			L(n, { availableBonuses: I(t, { amount: u(E) }) }), j && j(t);
			return;
		}
		if (L(n, { availableBonuses: I(t, { amount: u(E) }) }), j && j(t), m(C) && P(t) > 0) {
			x({ to: "/bonus" });
			return;
		}
		x({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		I,
		P,
		Yt,
		G,
		Bt,
		K,
		V,
		W,
		E,
		R,
		x,
		lt,
		j,
		B,
		H,
		L,
		C
	]), Qt = h((e) => {
		let t = l(e, E), n = {
			paymentTypeName: d(e),
			method: D,
			amount: t
		};
		if (je(dt, n)) return dt.values;
		if (je(ut, n)) return ut.values;
	}, [
		dt,
		E,
		D,
		ut
	]), $t = h((e, t) => {
		if (W(e)) return;
		let n = r(e), i = l(e, E, t.values);
		if (n && i.length === 0) return;
		let a = n ? {
			...t.values,
			amount: i
		} : t.values, o = d(e), s = I(e, { amount: u(i) });
		if (N((e) => ({
			...e,
			selectedPaymentType: o,
			selectedBonusCode: ve(e.selectedBonusCode, s),
			initialAmount: i,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: o,
				method: D,
				amount: i,
				values: a,
				hasHostedFields: t.hasHostedFields
			}
		})), m(C) && P(e) > 0) {
			x({ to: "/bonus" });
			return;
		}
		x({
			to: "/pt/$id",
			params: { id: o }
		});
	}, [
		I,
		P,
		E,
		W,
		D,
		x,
		N,
		C
	]), en = h((e, t) => {
		let i = r(e), a = l(e, E, t.values), o = {
			paymentTypeName: d(e),
			method: D,
			amount: a,
			values: i ? {
				...t.values,
				amount: a
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		N((e) => n(e.paymentFormDraft, o) ? e : {
			...e,
			paymentFormDraft: o
		});
	}, [
		E,
		D,
		N
	]), tn = h((e, t) => {
		Ct((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Z = xt?.submit, Q = !Y && !X || z.paymentTypeName === U, nn = h(() => {
		if (V) return;
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
		if (!H || !T) return;
		let e = d(H);
		if (m(C) && P(H) > 0) {
			x({ to: "/bonus" });
			return;
		}
		x({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Z,
		X,
		P,
		Q,
		V,
		x,
		H,
		T,
		Y,
		C
	]), rn = !!Z?.visible, an = (Y || X) && Q && !!Z?.loading, on = Y || X ? V || !Ut || !Q || !rn || !!Z?.disabled : V || !Ut, sn = X || Xt ? b(D === e.PAYOUT ? "cta.payout" : "cta.payin") : Pt, cn = _(() => At ? /* @__PURE__ */ v(Pe, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: an || V,
		onClick: Nt,
		label: kt
	}, "cashier-pts-back") : null, [
		an,
		kt,
		At,
		Nt,
		V
	]), ln = _(() => !K || gt || B.length === 0 ? null : /* @__PURE__ */ v(Pe, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: nn,
		disabled: on,
		loading: an,
		label: sn
	}, "cashier-pts-continue"), [
		an,
		on,
		sn,
		nn,
		gt,
		K,
		B.length
	]), $ = _(() => cn ? [cn] : [], [cn]), un = _(() => ln ? [ln] : [], [ln]), dn = _(() => [...$, ...un], [$, un]), fn = _(() => wt ? $ : [], [wt, $]), pn = _(() => A ? dn : G ? fn : [], [
		fn,
		G,
		dn,
		A
	]), mn = h((e) => {
		let t = d(e), n = J(e, { hasVisibleInlineContent: q(e) }), i = Qt(e), a = l(e, E, i), o = de(C) && F(e, { amount: u(a) }).length > 0 ? /* @__PURE__ */ v(He, {
			paymentType: e,
			amount: a
		}) : null, s = !!o && !Lt && r(e), c = !A && t === U, ee = !!(o && c), te = !Se(e);
		return /* @__PURE__ */ Je("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: f("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!s && o,
				/* @__PURE__ */ v(Le, {
					paymentType: e,
					selectionId: t,
					amountValue: E,
					hideAmountField: Lt,
					renderAfterAmountField: s ? o : void 0,
					onActionsChange: St,
					onPromptStateChange: tn,
					onPreparedValues: $t,
					onValuesChange: en,
					valueOverrides: i,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: c && !ee,
					animateEntrance: !1
				}, t),
				c && /* @__PURE__ */ v(Re, {
					domScope: "route-payment-types-accordion-actions",
					items: un,
					adaptive: !1
				})
			]
		});
	}, [
		un,
		F,
		Qt,
		$t,
		tn,
		en,
		q,
		E,
		J,
		U,
		Lt,
		C,
		A
	]), hn = h((e) => {
		let t = Kt(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ v(Ne, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [Kt]), gn = h((e) => ({ amount: u(l(e, E, Qt(e))) }), [Qt, E]), _n = _(() => {
		let e = ie({ translateKey: b });
		if (!Ut) return e;
		if (Y) {
			let t = z.paymentTypeName === U;
			if (t && z.errorMessage) return {
				...e,
				legacyTitle: z.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ v(oe, {}),
				tone: "danger"
			};
			if (!t || !z.isComplete) return ce({ translateKey: b });
		}
		return {
			legacyTitle: b("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: Ft?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: Ft?.values,
			icon: /* @__PURE__ */ v(fe, {})
		};
	}, [
		z,
		Ut,
		Y,
		Ft,
		U,
		b
	]);
	return ye("bottom", pn, pn.length > 0, { reserveSpace: A }), we({
		onBack: At && !V ? Nt : void 0,
		backKey: "Backspace"
	}), g(() => {
		if (!S || !Me(tt) || K || !T) return;
		let e = p(B, T);
		if (!e) return;
		let t = d(e);
		if (m(C) && P(e) > 0) {
			x({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		x({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		x,
		B,
		T,
		S,
		tt,
		K,
		P,
		C
	]), gt || B.length === 0 ? /* @__PURE__ */ v(i, { text: "payment.no_pts_found" }) : /* @__PURE__ */ v(Ae, {
		id: y.id("route-payment-types"),
		className: y.className("route-payment-types"),
		title: nt ? void 0 : b("cta.choose_payment_type"),
		header: nt ? /* @__PURE__ */ v(ne, {
			content: _n,
			className: Ye
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ Je("div", {
			className: f(y.className("route-payment-types-content"), "px-1.5 @sm:px-3", A ? "pb-3 @md:pb-4" : "pb-4", Xe),
			children: [
				/* @__PURE__ */ Je("div", {
					"data-slot": "route-payment-types-selection-stack",
					className: f(y.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
					children: [Ht && /* @__PURE__ */ v(He, {
						placement: "payment-list",
						paymentType: H,
						paymentTypes: B,
						amount: H ? l(H, E) : E
					}), G ? /* @__PURE__ */ v(xe, {
						paymentTypes: B,
						domScope: "route-payment-types",
						selectedPaymentType: T,
						onSelect: Zt,
						renderPanel: mn,
						renderFooter: hn,
						hasPanel: Yt,
						collapsible: Bt,
						renderActions: Gt,
						isPaymentTypeDisabled: W,
						interactionLocked: V,
						preserveDisabledSelection: !0,
						hoverMode: K ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: gn
					}) : /* @__PURE__ */ v(Ie, {
						paymentTypes: B,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: K,
						selectedPaymentType: T,
						onSelect: Zt,
						renderActions: Gt,
						isPaymentTypeDisabled: W,
						interactionLocked: V,
						preserveDisabledSelection: !0,
						showMeta: !0
					})]
				}),
				G ? !A && /* @__PURE__ */ v(Re, {
					domScope: "route-payment-types-back",
					items: $,
					onFallbackActiveChange: Tt
				}) : !A && /* @__PURE__ */ v("div", {
					"data-slot": "route-payment-types-action-stack",
					className: f(y.className("route-payment-types-action-stack"), Et ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
					children: /* @__PURE__ */ v(Fe, {
						domScope: "route-payment-types-actions",
						items: dn,
						fixed: !1,
						onFallbackActiveChange: Dt
					})
				}),
				yt
			]
		})
	});
}
//#endregion
export { b as PtsView, y as component };
