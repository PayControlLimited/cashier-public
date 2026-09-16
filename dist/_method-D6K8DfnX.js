import { CashierMethods as e } from "./types/CashierConfig.js";
import { $ as t, A as n, At as r, Ct as i, Di as a, Dn as o, En as s, Et as c, F as l, Fn as ee, Ft as te, G as ne, Gr as re, It as ie, K as ae, L as oe, Lt as se, Mt as u, Oi as ce, On as le, P as ue, Pt as de, Q as fe, Rr as pe, Rt as me, Ti as he, Tr as ge, Wr as _e, X as ve, Z as ye, _t as be, at as xe, bt as Se, c as Ce, di as we, dt as Te, f as Ee, fn as De, gt as Oe, ht as ke, i as Ae, jt as je, k as Me, m as Ne, mi as Pe, mt as Fe, n as Ie, nn as Le, nt as Re, on as ze, pn as Be, pt as Ve, r as He, t as Ue, u as We, un as Ge, vt as d, wn as Ke, wt as qe, xt as Je, yi as Ye, yt as Xe } from "./inlinePaymentSubmit-C3GD-D2V.js";
import { t as Ze } from "./_method-BpUcpErL.js";
import { a as Qe, i as $e, t as et } from "./StatusText-CLlh0_VT.js";
import { useCallback as f, useContext as tt, useEffect as nt, useMemo as p, useRef as rt, useState as it } from "react";
import { jsx as m, jsxs as at } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var ot = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", st = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", ct = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", lt = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, ut = (e) => typeof e == "string" ? e : e.baseName;
function h() {
	let { paymentTypes: e } = Ze.useLoaderData();
	return /* @__PURE__ */ m(g, { loaderPaymentTypes: e });
}
function g({ loaderPaymentTypes: Ze = [] }) {
	let h = _e(), { resolveTextKey: g, resolveTextKeys: dt, translateKey: _ } = ge(), v = ce(), { uiComboView: y, lockAmount: ft, uiComboView__PaymentTypes: pt, uiInteractivePrompts: mt, uiPaymentConfirmView: ht, uiBonusesStyle: b, uiShowFees: x, uiListStyle: gt, selectedPaymentType: S, initialAmount: C, method: w, currency: T, user: E, locale: _t, uiAccountDelete: vt, uiListSelectable: yt, uiFixedControls: D, uiPreselectedPaymentType: bt, onPaymentTypeSelected: O, onPaymentTypeDeselected: xt, paymentFormDraft: St, comboViewFormDraft: Ct, resetFlowOnBack: wt, setCashierState: k } = tt(re), { currencyFormatter: Tt, formatCurrencyValue: Et, formatDisplayValue: Dt } = xe(), { paymentTypesList: Ot, isError: kt } = ye(), { getBonusCountForPaymentType: A, getBonusAvailabilityForPaymentType: At, getAvailableBonusesForPaymentType: j } = ve(), jt = p(() => de(Tt), [Tt]), { selectPaymentType: M, clearPaymentSelection: N } = ae(), { requestAccountDelete: Mt, actionConfirmationModal: Nt } = Ce(), Pt = rt(!1), [Ft, It] = it(null), [P, Lt] = it({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Rt, zt] = it(!1), [Bt, Vt] = it(!1), F = Ot.length > 0 ? Ot : Ze, I = ee(), Ht = Te({
		uiComboView: y,
		lockAmount: ft,
		method: w
	}), Ut = _("cta.back"), { canGoBack: L, handleBack: Wt } = Qe({
		defaultRoute: Ht,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !wt,
		replace: wt || !y
	});
	nt(() => {
		wt && k((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [wt, k]);
	let Gt = y && !i(pt), R = f(() => {
		I || (Gt && N(), Wt());
	}, [
		N,
		Wt,
		I,
		Gt
	]), Kt = _("cta.continue"), z = p(() => le(F, S), [F, S]), B = z ? s(z) : S, qt = p(() => {
		if (!z || !x || !lt(z.fee)) return null;
		let t = ct(z.fee, Dt);
		if (!t) return null;
		let n = w === e.PAYOUT, r = {
			fee: t,
			method: _(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(ut(_t))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return z.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : z.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Dt,
		_t,
		w,
		z,
		_,
		x
	]), Jt = y && Ye(C), Yt = y && Ye(C), Xt = Yt ? C : "", V = f((e) => o(e) ? !0 : Jt ? r(C, e.limits, { maxBoundary: je(w, E, e.fee) }).isOutOfRange : !1, [
		C,
		w,
		Jt,
		E
	]), Zt = z ? V(z) : !1, H = be(gt), Qt = Je(gt), $t = Se(b), en = $t, U = yt || H || $t, tn = !!z && !Zt, nn = _("account.delete.title"), rn = f((e) => vt && e.accountId ? /* @__PURE__ */ m(he, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": nn,
		disabled: I,
		onClick: () => {
			Mt(e);
		},
		iconOnly: !0,
		label: nn,
		leadingIcon: /* @__PURE__ */ m(Pe, {})
	}) : null, [
		nn,
		I,
		Mt,
		vt
	]), an = f((t) => {
		let n = c(t, C), i = u(n) ?? 0, a = je(w, E, t.fee), o = r(n, t.limits, { maxBoundary: a }), s = Ie(w, T, E, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: w === e.PAYOUT
		}), l = x ? te(t.fee, i, {
			feeCurrencyFormatter: jt,
			formatCurrencyValue: Et
		}) : null, ee = w === e.PAYOUT ? se(t.fee, i, T) : null, ne = w === e.PAYIN && x ? ie(t.fee, i, T) : null, re = w === e.PAYOUT ? me(s, [l, ee]) : s, ae = w === e.PAYIN ? [l, ne].filter((e) => e !== null) : [], oe = a !== null && o.value !== null && o.value > a ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...re, ...ae],
			rowVariants: oe
		};
	}, [
		T,
		jt,
		Et,
		C,
		w,
		x,
		E
	]), W = f((e) => Oe(e, Xt), [Xt]), G = f((e, { hasVisibleInlineContent: t }) => Ue({
		uiPaymentConfirmView: ht,
		hasPendingStep: d(b) && A(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		A,
		b,
		ht
	]), on = f((e) => !Ve(e) && G(e, { hasVisibleInlineContent: !1 }).action === "submit", [G]), sn = f((e) => W(e) && G(e, { hasVisibleInlineContent: !0 }).action === "submit", [W, G]), cn = f((e) => W(e) || ke(e) || an(e).fields.length > 0 || on(e) || !D || Xe(b) && At(e).length > 0, [
		on,
		At,
		an,
		W,
		D,
		b
	]), K = !!(H && z && W(z)), q = !!(H && z && on(z)), ln = !!(H && z && sn(z));
	nt(() => {
		if (!U || Pt.current || S || !bt) return;
		let e = le(F, bt);
		!e || V(e) || M(s(e), { availableBonuses: j(e, { amount: u(C) }) });
	}, [
		j,
		C,
		F,
		M,
		S,
		U,
		V,
		bt
	]), nt(() => {
		I || Zt && N();
	}, [
		N,
		I,
		Zt
	]);
	let un = f((e) => {
		if (I) return;
		let t = le(F, e);
		if (!t || V(t)) return;
		let n = s(t);
		if (U) {
			if (Pt.current = !0, z === t) {
				Qt && H && cn(t) && (N(), xt?.(t));
				return;
			}
			M(n, { availableBonuses: j(t, { amount: u(C) }) }), O && O(t);
			return;
		}
		if (M(n, { availableBonuses: j(t, { amount: u(C) }) }), O && O(t), d(b) && A(t) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		j,
		A,
		cn,
		H,
		Qt,
		U,
		I,
		V,
		C,
		N,
		v,
		xt,
		O,
		F,
		z,
		M,
		b
	]), dn = f((e) => {
		let t = c(e, C), r = {
			paymentTypeName: s(e),
			method: w,
			amount: t
		};
		if (n(Ct, r)) return Ct.values;
		if (n(St, r)) return St.values;
	}, [
		Ct,
		C,
		w,
		St
	]), fn = f((e, t) => {
		if (V(e)) return;
		let n = qe(e), r = c(e, C, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = s(e), o = j(e, { amount: u(r) });
		if (k((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: ne(e.selectedBonusCode, o),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: w,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), d(b) && A(e) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		j,
		A,
		C,
		V,
		w,
		v,
		k,
		b
	]), pn = f((e, t) => {
		let n = qe(e), r = c(e, C, t.values), i = {
			paymentTypeName: s(e),
			method: w,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		k((e) => Me(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		C,
		w,
		k
	]), mn = f((e, t) => {
		Lt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), J = Ft?.submit, Y = !K && !q || P.paymentTypeName === B, hn = f(() => {
		if (I) return;
		if (K || q) return Y ? J?.onClick() : void 0;
		if (!z || !S) return;
		let e = s(z);
		if (d(b) && A(z) > 0) {
			v({ to: "/bonus" });
			return;
		}
		v({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		J,
		q,
		A,
		Y,
		I,
		v,
		z,
		S,
		K,
		b
	]), gn = !!J?.visible, X = (K || q) && Y && !!J?.loading, _n = K || q, Z = _n ? I || !tn || !Y || !gn || !!J?.disabled : I || !tn, vn = q || ln ? _(w === e.PAYOUT ? "cta.payout" : "cta.payin") : Kt, yn = p(() => L ? /* @__PURE__ */ m(he, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: X || I,
		onClick: R,
		label: Ut
	}, "cashier-pts-back") : null, [
		X,
		Ut,
		L,
		R,
		I
	]), bn = p(() => !U || kt || F.length === 0 ? null : /* @__PURE__ */ m(he, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			hn();
		},
		disabled: Z,
		loading: X,
		label: vn
	}, "cashier-pts-continue"), [
		X,
		Z,
		vn,
		hn,
		kt,
		U,
		F.length
	]), Q = p(() => yn ? [yn] : [], [yn]), xn = p(() => bn ? [bn] : [], [bn]), Sn = p(() => [...Q, ...xn], [Q, xn]), Cn = p(() => Rt ? Q : [], [Rt, Q]), wn = p(() => D ? Sn : H ? Cn : [], [
		Cn,
		H,
		Sn,
		D
	]), Tn = f((e) => {
		let n = s(e), r = G(e, { hasVisibleInlineContent: W(e) }), i = dn(e), o = c(e, C, i), l = Xe(b) && At(e, { amount: u(o) }).length > 0 ? /* @__PURE__ */ m(Ae, {
			paymentType: e,
			amount: o
		}) : null, ee = !!l && !Yt && qe(e), te = !D && n === B, ne = !!(l && te), re = !Fe(e);
		return /* @__PURE__ */ at("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: a("flex min-w-0 flex-col", re && "px-0.5", ne ? "gap-2.5" : "gap-2"),
			children: [
				!ee && l,
				/* @__PURE__ */ m(Ne, {
					paymentType: e,
					selectionId: n,
					amountValue: C,
					hideAmountField: Yt,
					renderAfterAmountField: ee ? l : void 0,
					onActionsChange: It,
					onPromptStateChange: mn,
					onPreparedValues: fn,
					onValuesChange: pn,
					valueOverrides: i,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: r.submitMode,
					reserveTrailingActionSpace: te && !ne,
					animateEntrance: !1
				}, n),
				te && /* @__PURE__ */ m(t, {
					domScope: "route-payment-types-accordion-actions",
					items: xn,
					adaptive: !1
				})
			]
		});
	}, [
		xn,
		At,
		dn,
		fn,
		mn,
		pn,
		W,
		C,
		G,
		B,
		Yt,
		b,
		D
	]), En = f((e) => {
		let t = an(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ m(Ee, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [an]), Dn = f((e) => ({ amount: u(c(e, C, dn(e))) }), [dn, C]), On = p(() => {
		let e = l({ translateKey: _ });
		if (!tn) return e;
		if (K) {
			let t = P.paymentTypeName === B;
			if (t && P.errorMessage) return {
				...e,
				legacyTitle: P.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ m(Pe, {}),
				tone: "danger"
			};
			if (!t || !P.isComplete) return oe({ translateKey: _ });
		}
		return {
			legacyTitle: _("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: qt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: qt?.values,
			icon: /* @__PURE__ */ m(we, {})
		};
	}, [
		P,
		tn,
		K,
		qt,
		B,
		_
	]);
	pe("bottom", wn, wn.length > 0, { reserveSpace: D }), Re({
		onBack: L && !I ? R : void 0,
		backKey: "Backspace"
	}), nt(() => {
		if (!y || !i(pt) || U || !S) return;
		let e = le(F, S);
		if (!e || V(e)) return;
		let t = s(e);
		if (d(b) && A(e) > 0) {
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
		F,
		S,
		y,
		pt,
		U,
		A,
		V,
		b
	]);
	let { createAction: kn, revision: An } = ze({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), jn = p(() => F.flatMap((e) => {
		let t = s(e), n = Ke(e), r = Be({
			paymentType: e,
			id: t,
			label: n ? De(n) : dt(e.nameKeys ?? e.name),
			currency: T,
			formatMoney: Et,
			minimumLabel: g("field.limits.min.label"),
			maximumLabel: g("field.limits.max.label"),
			selected: t === B,
			disabled: V(e),
			unavailable: o(e)
		});
		return r ? [r] : [];
	}), [
		T,
		Et,
		V,
		F,
		g,
		dt,
		B
	]), $ = _n, Mn = !$ || Y && !!Ft, Nn = $ && !Mn ? "protected-surface-not-ready" : Z ? "invalid-state" : void 0, Pn = p(() => ({
		screen: "paymentTypes",
		revision: An,
		busy: I || X,
		method: w,
		title: g("cta.choose_payment_type"),
		continueLabel: g("cta.continue"),
		backLabel: g("cta.back"),
		paymentTypes: jn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: Mn,
		...$ ? { protectedSurfaceLabel: g(Ge) } : {},
		canContinue: !Z
	}), [
		X,
		Z,
		I,
		w,
		jn,
		g,
		Mn,
		$,
		An
	]), Fn = p(() => ({
		selectPaymentType: kn("selectPaymentType", un, {
			busy: I,
			validate: (e) => jn.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: kn("continue", hn, {
			busy: I || X,
			unavailableReason: Nn
		}),
		goBack: kn("goBack", R, {
			busy: I || X,
			unavailableReason: L ? void 0 : "invalid-state"
		})
	}), [
		X,
		L,
		Nn,
		kn,
		R,
		hn,
		un,
		I,
		jn
	]);
	if (kt || F.length === 0) return /* @__PURE__ */ m(et, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let In = /* @__PURE__ */ at("div", {
		className: a(h.className("route-payment-types-content"), "px-1.5 @sm:px-3", D ? "pb-3 @md:pb-4" : "pb-4", st),
		children: [
			/* @__PURE__ */ at("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: a(h.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
				children: [en && /* @__PURE__ */ m(Ae, {
					placement: "payment-list",
					paymentType: z,
					paymentTypes: F,
					amount: z ? c(z, C) : C
				}), H ? /* @__PURE__ */ m(He, {
					paymentTypes: F,
					domScope: "route-payment-types",
					selectedPaymentType: S,
					onSelect: un,
					renderPanel: Tn,
					renderFooter: En,
					hasPanel: cn,
					collapsible: Qt,
					renderActions: rn,
					isPaymentTypeDisabled: V,
					interactionLocked: I,
					preserveDisabledSelection: !0,
					hoverMode: U ? "none" : "group",
					showMeta: !0,
					bonusEvaluationContext: Dn
				}) : /* @__PURE__ */ m(We, {
					paymentTypes: F,
					domScope: "route-payment-types",
					animateItems: !0,
					selectable: U,
					selectedPaymentType: S,
					onSelect: un,
					renderActions: rn,
					isPaymentTypeDisabled: V,
					interactionLocked: I,
					preserveDisabledSelection: !0,
					showMeta: !0
				})]
			}),
			H ? !D && /* @__PURE__ */ m(t, {
				domScope: "route-payment-types-back",
				items: Q,
				onFallbackActiveChange: zt
			}) : !D && /* @__PURE__ */ m("div", {
				"data-slot": "route-payment-types-action-stack",
				className: a(h.className("route-payment-types-action-stack"), Bt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ m(fe, {
					domScope: "route-payment-types-actions",
					items: Sn,
					fixed: !1,
					onFallbackActiveChange: Vt
				})
			}),
			Nt
		]
	});
	return /* @__PURE__ */ m(Le, {
		id: "paymentTypes",
		model: Pn,
		actions: Fn,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ m($e, {
			id: h.id("route-payment-types"),
			className: h.className("route-payment-types"),
			title: mt ? void 0 : _("cta.choose_payment_type"),
			header: mt ? /* @__PURE__ */ m(ue, {
				content: On,
				className: ot
			}) : void 0,
			fitted: !0,
			stickyHeader: !0,
			children: e
		}),
		protectedContent: $ ? In : void 0,
		children: In
	});
}
//#endregion
export { g as PtsView, h as component };
