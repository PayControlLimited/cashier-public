import { CashierMethods as e } from "./types/CashierConfig.js";
import { A as t, At as n, B as r, Bn as i, Bt as a, Cr as o, Ct as s, Dt as c, Et as l, F as ee, Ht as te, I as ne, It as re, Kr as ie, Lt as ae, Mt as u, R as oe, Rt as d, Sr as se, St as ce, Tt as le, Ur as ue, Ut as de, Vt as fe, Wt as pe, X as me, Xr as he, Y as ge, _r as _e, _t as ve, a as ye, bt as be, c as xe, ct as Se, dt as Ce, et as we, gn as Te, i as Ee, ii as De, it as Oe, j as ke, kt as Ae, ln as f, n as je, ni as Me, nt as Ne, o as Pe, r as Fe, ri as p, rt as Ie, st as Le, t as Re, tt as ze, u as Be, un as m, wt as h, xt as Ve, yt as He } from "./inlinePaymentSubmit-D-5pD47f.js";
import { useCallback as g, useContext as Ue, useEffect as _, useMemo as v, useRef as We, useState as y } from "react";
import { jsx as b, jsxs as Ge } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var Ke = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", qe = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Je = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Ye = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Xe = (e) => typeof e == "string" ? e : e.baseName;
function Ze({ loaderPaymentTypes: Ze = [] }) {
	let x = se(), { translateKey: S } = i(), C = De(), { uiComboView: w, lockAmount: Qe, uiComboView__PaymentTypes: $e, uiInteractivePrompts: et, uiPaymentConfirmView: tt, uiBonusesStyle: T, uiShowFees: E, uiListStyle: nt, selectedPaymentType: D, initialAmount: O, method: k, currency: rt, user: A, locale: it, uiAccountDelete: at, uiListSelectable: ot, uiFixedControls: j, uiPreselectedPaymentType: st, onPaymentTypeSelected: M, onPaymentTypeDeselected: ct, paymentFormDraft: lt, comboViewFormDraft: ut, resetFlowOnBack: dt, setCashierState: N } = Ue(o), { currencyFormatter: ft, formatCurrencyValue: pt, formatDisplayValue: mt } = Ce(), { paymentTypesList: ht, isError: gt } = ze(), { getBonusCountForPaymentType: P, getBonusAvailabilityForPaymentType: _t, getAvailableBonusesForPaymentType: F } = we(), vt = v(() => a(ft), [ft]), { selectPaymentType: I, clearPaymentSelection: L } = me(), { requestAccountDelete: yt, actionConfirmationModal: bt } = Ee(), xt = We(!1), [St, Ct] = y(null), [R, wt] = y({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Tt, Et] = y(!1), [Dt, Ot] = y(!1), z = ht.length > 0 ? ht : Ze, B = Te(), kt = ve({
		uiComboView: w,
		lockAmount: Qe,
		method: k
	}), At = S("cta.back"), { canGoBack: jt, handleBack: Mt } = Le({
		defaultRoute: kt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !dt,
		replace: dt || !w
	});
	_(() => {
		dt && N((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [dt, N]);
	let Nt = w && !Ae($e), Pt = g(() => {
		B || (Nt && L(), Mt());
	}, [
		L,
		Mt,
		B,
		Nt
	]), Ft = S("cta.continue"), V = v(() => m(z, D), [z, D]), H = V ? f(V) : D, It = v(() => {
		if (!V || !E || !Ye(V.fee)) return null;
		let t = Je(V.fee, mt);
		if (!t) return null;
		let n = k === e.PAYOUT, r = {
			fee: t,
			method: S(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(Xe(it))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return V.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : V.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		mt,
		it,
		k,
		V,
		S,
		E
	]), Lt = w && he(O), Rt = w && he(O), zt = Rt ? O : "", U = g((e) => Lt ? re(O, e.limits, { maxBoundary: ae(k, A, e.fee) }).isOutOfRange : !1, [
		O,
		k,
		Lt,
		A
	]), Bt = V ? U(V) : !1, W = s(nt), Vt = c(nt), Ht = l(T), Ut = Ht, G = ot || W || Ht, Wt = !!V && !Bt, Gt = S("account.delete.title"), Kt = g((e) => !at || !e.accountId ? null : /* @__PURE__ */ b(Me, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Gt,
		disabled: B,
		onClick: () => {
			yt(e);
		},
		iconOnly: !0,
		label: Gt,
		leadingIcon: /* @__PURE__ */ b(ie, {})
	}), [
		Gt,
		B,
		yt,
		at
	]), qt = g((t) => {
		let n = u(t, O), r = d(n) ?? 0, i = ae(k, A, t.fee), a = re(n, t.limits, { maxBoundary: i }), o = xe(k, rt, A, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: k === e.PAYOUT
		}), s = E ? fe(t.fee, r, {
			feeCurrencyFormatter: vt,
			formatCurrencyValue: pt
		}) : null, c = k === e.PAYOUT ? de(t.fee, r, rt) : null, l = k === e.PAYIN && E ? te(t.fee, r, rt) : null, ee = k === e.PAYOUT ? pe(o, [s, c]) : o, ne = k === e.PAYIN ? [s, l].filter((e) => e !== null) : [], ie = i !== null && a.value !== null && a.value > i ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...ee, ...ne],
			rowVariants: ie
		};
	}, [
		rt,
		vt,
		pt,
		O,
		k,
		E,
		A
	]), K = g((e) => ce(e, zt), [zt]), q = g((e, { hasVisibleInlineContent: t }) => Re({
		uiPaymentConfirmView: tt,
		hasPendingStep: h(T) && P(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		P,
		T,
		tt
	]), Jt = g((e) => !He(e) && q(e, { hasVisibleInlineContent: !1 }).action === "submit", [q]), Yt = g((e) => K(e) && q(e, { hasVisibleInlineContent: !0 }).action === "submit", [K, q]), Xt = g((e) => K(e) || Ve(e) || qt(e).fields.length > 0 || Jt(e) || !j || le(T) && _t(e).length > 0, [
		Jt,
		_t,
		qt,
		K,
		j,
		T
	]), J = !!(W && V && K(V)), Y = !!(W && V && Jt(V)), Zt = !!(W && V && Yt(V));
	_(() => {
		if (!G || xt.current || D || !st) return;
		let e = m(z, st);
		e && I(f(e), { availableBonuses: F(e, { amount: d(O) }) });
	}, [
		F,
		O,
		z,
		I,
		D,
		G,
		st
	]), _(() => {
		B || Bt && L();
	}, [
		L,
		B,
		Bt
	]);
	let Qt = g((e) => {
		if (B) return;
		let t = m(z, e);
		if (!t || U(t)) return;
		let n = f(t);
		if (G) {
			if (xt.current = !0, V === t) {
				Vt && W && Xt(t) && (L(), ct?.(t));
				return;
			}
			I(n, { availableBonuses: F(t, { amount: d(O) }) }), M && M(t);
			return;
		}
		if (I(n, { availableBonuses: F(t, { amount: d(O) }) }), M && M(t), h(T) && P(t) > 0) {
			C({ to: "/bonus" });
			return;
		}
		C({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		F,
		P,
		Xt,
		W,
		Vt,
		G,
		B,
		U,
		O,
		L,
		C,
		ct,
		M,
		z,
		V,
		I,
		T
	]), $t = g((e) => {
		let t = u(e, O), n = {
			paymentTypeName: f(e),
			method: k,
			amount: t
		};
		if (ke(ut, n)) return ut.values;
		if (ke(lt, n)) return lt.values;
	}, [
		ut,
		O,
		k,
		lt
	]), en = g((e, t) => {
		if (U(e)) return;
		let r = n(e), i = u(e, O, t.values);
		if (r && i.length === 0) return;
		let a = r ? {
			...t.values,
			amount: i
		} : t.values, o = f(e), s = F(e, { amount: d(i) });
		if (N((e) => ({
			...e,
			selectedPaymentType: o,
			selectedBonusCode: ge(e.selectedBonusCode, s),
			initialAmount: i,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: o,
				method: k,
				amount: i,
				values: a,
				hasHostedFields: t.hasHostedFields
			}
		})), h(T) && P(e) > 0) {
			C({ to: "/bonus" });
			return;
		}
		C({
			to: "/pt/$id",
			params: { id: o }
		});
	}, [
		F,
		P,
		O,
		U,
		k,
		C,
		N,
		T
	]), tn = g((e, r) => {
		let i = n(e), a = u(e, O, r.values), o = {
			paymentTypeName: f(e),
			method: k,
			amount: a,
			values: i ? {
				...r.values,
				amount: a
			} : r.values,
			hasHostedFields: r.hasHostedFields
		};
		N((e) => t(e.paymentFormDraft, o) ? e : {
			...e,
			paymentFormDraft: o
		});
	}, [
		O,
		k,
		N
	]), nn = g((e, t) => {
		wt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), X = St?.submit, Z = !J && !Y || R.paymentTypeName === H, rn = g(() => {
		if (B) return;
		if (J) {
			if (!Z) return;
			X?.onClick();
			return;
		}
		if (Y) {
			if (!Z) return;
			X?.onClick();
			return;
		}
		if (!V || !D) return;
		let e = f(V);
		if (h(T) && P(V) > 0) {
			C({ to: "/bonus" });
			return;
		}
		C({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		X,
		Y,
		P,
		Z,
		B,
		C,
		V,
		D,
		J,
		T
	]), an = !!X?.visible, on = (J || Y) && Z && !!X?.loading, sn = J || Y ? B || !Wt || !Z || !an || !!X?.disabled : B || !Wt, cn = Y || Zt ? S(k === e.PAYOUT ? "cta.payout" : "cta.payin") : Ft, ln = v(() => jt ? /* @__PURE__ */ b(Me, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: on || B,
		onClick: Pt,
		label: At
	}, "cashier-pts-back") : null, [
		on,
		At,
		jt,
		Pt,
		B
	]), un = v(() => !G || gt || z.length === 0 ? null : /* @__PURE__ */ b(Me, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: rn,
		disabled: sn,
		loading: on,
		label: cn
	}, "cashier-pts-continue"), [
		on,
		sn,
		cn,
		rn,
		gt,
		G,
		z.length
	]), Q = v(() => ln ? [ln] : [], [ln]), $ = v(() => un ? [un] : [], [un]), dn = v(() => [...Q, ...$], [Q, $]), fn = v(() => Tt ? Q : [], [Tt, Q]), pn = v(() => j ? dn : W ? fn : [], [
		fn,
		W,
		dn,
		j
	]), mn = g((e) => {
		let t = f(e), r = q(e, { hasVisibleInlineContent: K(e) }), i = $t(e), a = u(e, O, i), o = le(T) && _t(e, { amount: d(a) }).length > 0 ? /* @__PURE__ */ b(Be, {
			paymentType: e,
			amount: a
		}) : null, s = !!o && !Rt && n(e), c = !j && t === H, l = !!(o && c), ee = !be(e);
		return /* @__PURE__ */ Ge("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: p("flex min-w-0 flex-col", ee && "px-0.5", l ? "gap-2.5" : "gap-2"),
			children: [
				!s && o,
				/* @__PURE__ */ b(Fe, {
					paymentType: e,
					selectionId: t,
					amountValue: O,
					hideAmountField: Rt,
					renderAfterAmountField: s ? o : void 0,
					onActionsChange: Ct,
					onPromptStateChange: nn,
					onPreparedValues: en,
					onValuesChange: tn,
					valueOverrides: i,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: r.submitMode,
					reserveTrailingActionSpace: c && !l,
					animateEntrance: !1
				}, t),
				c && /* @__PURE__ */ b(Ie, {
					domScope: "route-payment-types-accordion-actions",
					items: $,
					adaptive: !1
				})
			]
		});
	}, [
		$,
		_t,
		$t,
		en,
		nn,
		tn,
		K,
		O,
		q,
		H,
		Rt,
		T,
		j
	]), hn = g((e) => {
		let t = qt(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ b(je, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [qt]), gn = g((e) => ({ amount: d(u(e, O, $t(e))) }), [$t, O]), _n = v(() => {
		let e = ne({ translateKey: S });
		if (!Wt) return e;
		if (J) {
			let t = R.paymentTypeName === H;
			if (t && R.errorMessage) return {
				...e,
				legacyTitle: R.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ b(ie, {}),
				tone: "danger"
			};
			if (!t || !R.isComplete) return oe({ translateKey: S });
		}
		return {
			legacyTitle: S("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: It?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: It?.values,
			icon: /* @__PURE__ */ b(ue, {})
		};
	}, [
		R,
		Wt,
		J,
		It,
		H,
		S
	]);
	return _e("bottom", pn, pn.length > 0, { reserveSpace: j }), Se({
		onBack: jt && !B ? Pt : void 0,
		backKey: "Backspace"
	}), _(() => {
		if (!w || !Ae($e) || G || !D) return;
		let e = m(z, D);
		if (!e) return;
		let t = f(e);
		if (h(T) && P(e) > 0) {
			C({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		C({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		C,
		z,
		D,
		w,
		$e,
		G,
		P,
		T
	]), gt || z.length === 0 ? /* @__PURE__ */ b(r, { text: "payment.no_pts_found" }) : /* @__PURE__ */ b(Oe, {
		id: x.id("route-payment-types"),
		className: x.className("route-payment-types"),
		title: et ? void 0 : S("cta.choose_payment_type"),
		header: et ? /* @__PURE__ */ b(ee, {
			content: _n,
			className: Ke
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ Ge("div", {
			className: p(x.className("route-payment-types-content"), "px-1.5 @sm:px-3", j ? "pb-3 @md:pb-4" : "pb-4", qe),
			children: [
				/* @__PURE__ */ Ge("div", {
					"data-slot": "route-payment-types-selection-stack",
					className: p(x.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
					children: [Ut && /* @__PURE__ */ b(Be, {
						placement: "payment-list",
						paymentType: V,
						paymentTypes: z,
						amount: V ? u(V, O) : O
					}), W ? /* @__PURE__ */ b(ye, {
						paymentTypes: z,
						domScope: "route-payment-types",
						selectedPaymentType: D,
						onSelect: Qt,
						renderPanel: mn,
						renderFooter: hn,
						hasPanel: Xt,
						collapsible: Vt,
						renderActions: Kt,
						isPaymentTypeDisabled: U,
						interactionLocked: B,
						preserveDisabledSelection: !0,
						hoverMode: G ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: gn
					}) : /* @__PURE__ */ b(Pe, {
						paymentTypes: z,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: G,
						selectedPaymentType: D,
						onSelect: Qt,
						renderActions: Kt,
						isPaymentTypeDisabled: U,
						interactionLocked: B,
						preserveDisabledSelection: !0,
						showMeta: !0
					})]
				}),
				W ? !j && /* @__PURE__ */ b(Ie, {
					domScope: "route-payment-types-back",
					items: Q,
					onFallbackActiveChange: Et
				}) : !j && /* @__PURE__ */ b("div", {
					"data-slot": "route-payment-types-action-stack",
					className: p(x.className("route-payment-types-action-stack"), Dt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
					children: /* @__PURE__ */ b(Ne, {
						domScope: "route-payment-types-actions",
						items: dn,
						fixed: !1,
						onFallbackActiveChange: Ot
					})
				}),
				bt
			]
		})
	});
}
var x = () => /* @__PURE__ */ b(r, { text: "payment.no_pts_found" });
//#endregion
export { Ze as PtsView, x as errorComponent };
