import { CashierMethods as e } from "./types/CashierConfig.js";
import { $ as t, A as n, An as r, At as i, Ct as a, Ei as o, En as s, Et as c, F as l, Ft as ee, G as te, It as ne, K as re, L as ie, Ln as ae, Lr as oe, Lt as se, Mt as u, On as d, P as ce, Pt as le, Q as ue, Rr as de, Rt as fe, X as pe, Z as me, _t as he, at as ge, bt as _e, c as ve, dt as ye, f as be, fi as xe, fn as Se, gt as Ce, ht as we, i as Te, ii as Ee, ji as De, jr as Oe, jt as ke, k as Ae, kn as je, m as Me, mt as Ne, n as Pe, nn as Fe, nt as Ie, on as Le, pi as Re, pn as ze, pt as Be, r as Ve, si as He, t as Ue, u as We, ui as Ge, un as Ke, vt as f, wt as qe, xt as Je, yt as Ye } from "./inlinePaymentSubmit-Cw-MCOPa.js";
import { a as Xe, i as Ze, o as Qe, t as $e } from "./StatusText-BtM9vm4x.js";
import { useCallback as p, useContext as et, useEffect as tt, useMemo as m, useRef as nt, useState as rt } from "react";
import { jsx as h, jsxs as it } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var at = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", ot = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", st = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", ct = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, lt = (e) => typeof e == "string" ? e : e.baseName;
function ut({ loaderPaymentTypes: ut = [] }) {
	let g = oe(), { resolveTextKey: _, resolveTextKeys: dt, translateKey: v } = o(), y = Re(), { uiComboView: b, lockAmount: ft, uiComboView__PaymentTypes: pt, uiInteractivePrompts: mt, uiPaymentConfirmView: ht, uiBonusesStyle: x, uiShowFees: S, uiListStyle: gt, selectedPaymentType: C, initialAmount: w, method: T, currency: E, user: D, locale: _t, uiAccountDelete: vt, uiListSelectable: yt, uiFixedControls: O, uiPreselectedPaymentType: bt, onPaymentTypeSelected: k, onPaymentTypeDeselected: xt, paymentFormDraft: St, comboViewFormDraft: Ct, resetFlowOnBack: wt, setCashierState: A } = et(de), { currencyFormatter: Tt, formatCurrencyValue: Et, formatDisplayValue: Dt } = ge(), { paymentTypesList: Ot, isError: kt } = me(), { getBonusCountForPaymentType: j, getBonusAvailabilityForPaymentType: At, getAvailableBonusesForPaymentType: M } = pe(), jt = m(() => le(Tt), [Tt]), { selectPaymentType: N, clearPaymentSelection: P } = re(), { requestAccountDelete: Mt, actionConfirmationModal: Nt } = ve(), Pt = nt(!1), [Ft, It] = rt(null), [F, Lt] = rt({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Rt, zt] = rt(!1), [Bt, Vt] = rt(!1), I = Ot.length > 0 ? Ot : ut, L = ae(), Ht = ye({
		uiComboView: b,
		lockAmount: ft,
		method: T
	}), Ut = v("cta.back"), { canGoBack: R, handleBack: Wt } = Xe({
		defaultRoute: Ht,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !wt,
		replace: wt || !b
	});
	tt(() => {
		wt && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [wt, A]);
	let Gt = b && !a(pt), z = p(() => {
		L || (Gt && P(), Wt());
	}, [
		P,
		Wt,
		L,
		Gt
	]), Kt = v("cta.continue"), B = m(() => r(I, C), [I, C]), V = B ? d(B) : C, qt = m(() => {
		if (!B || !S || !ct(B.fee)) return null;
		let t = st(B.fee, Dt);
		if (!t) return null;
		let n = T === e.PAYOUT, r = {
			fee: t,
			method: v(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(lt(_t))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Dt,
		_t,
		T,
		B,
		v,
		S
	]), Jt = b && De(w), Yt = b && De(w), Xt = Yt ? w : "", H = p((e) => je(e) ? !0 : Jt ? i(w, e.limits, { maxBoundary: ke(T, D, e.fee) }).isOutOfRange : !1, [
		w,
		T,
		Jt,
		D
	]), Zt = B ? H(B) : !1, U = he(gt), Qt = Je(gt), $t = _e(x), en = $t, W = yt || U || $t, tn = !!B && !Zt, nn = v("account.delete.title"), rn = p((e) => vt && e.accountId ? /* @__PURE__ */ h(Ge, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": nn,
		disabled: L,
		onClick: () => {
			Mt(e);
		},
		iconOnly: !0,
		label: nn,
		leadingIcon: /* @__PURE__ */ h(He, {})
	}) : null, [
		nn,
		L,
		Mt,
		vt
	]), an = p((t) => {
		let n = c(t, w), r = u(n) ?? 0, a = ke(T, D, t.fee), o = i(n, t.limits, { maxBoundary: a }), s = Pe(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), l = S ? ee(t.fee, r, {
			feeCurrencyFormatter: jt,
			formatCurrencyValue: Et
		}) : null, te = T === e.PAYOUT ? se(t.fee, r, E) : null, re = T === e.PAYIN && S ? ne(t.fee, r, E) : null, ie = T === e.PAYOUT ? fe(s, [l, te]) : s, ae = T === e.PAYIN ? [l, re].filter((e) => e !== null) : [], oe = a !== null && o.value !== null && o.value > a ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...ie, ...ae],
			rowVariants: oe
		};
	}, [
		E,
		jt,
		Et,
		w,
		T,
		S,
		D
	]), G = p((e) => Ce(e, Xt), [Xt]), K = p((e, { hasVisibleInlineContent: t }) => Ue({
		uiPaymentConfirmView: ht,
		hasPendingStep: f(x) && j(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		j,
		x,
		ht
	]), on = p((e) => !Be(e) && K(e, { hasVisibleInlineContent: !1 }).action === "submit", [K]), sn = p((e) => G(e) && K(e, { hasVisibleInlineContent: !0 }).action === "submit", [G, K]), cn = p((e) => G(e) || we(e) || an(e).fields.length > 0 || on(e) || !O || Ye(x) && At(e).length > 0, [
		on,
		At,
		an,
		G,
		O,
		x
	]), q = !!(U && B && G(B)), J = !!(U && B && on(B)), ln = !!(U && B && sn(B));
	tt(() => {
		if (!W || Pt.current || C || !bt) return;
		let e = r(I, bt);
		!e || H(e) || N(d(e), { availableBonuses: M(e, { amount: u(w) }) });
	}, [
		M,
		w,
		I,
		N,
		C,
		W,
		H,
		bt
	]), tt(() => {
		L || Zt && P();
	}, [
		P,
		L,
		Zt
	]);
	let un = p((e) => {
		if (L) return;
		let t = r(I, e);
		if (!t || H(t)) return;
		let n = d(t);
		if (W) {
			if (Pt.current = !0, B === t) {
				Qt && U && cn(t) && (P(), xt?.(t));
				return;
			}
			N(n, { availableBonuses: M(t, { amount: u(w) }) }), k && k(t);
			return;
		}
		if (N(n, { availableBonuses: M(t, { amount: u(w) }) }), k && k(t), f(x) && j(t) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		M,
		j,
		cn,
		U,
		Qt,
		W,
		L,
		H,
		w,
		P,
		y,
		xt,
		k,
		I,
		B,
		N,
		x
	]), dn = p((e) => {
		let t = c(e, w), r = {
			paymentTypeName: d(e),
			method: T,
			amount: t
		};
		if (n(Ct, r)) return Ct.values;
		if (n(St, r)) return St.values;
	}, [
		Ct,
		w,
		T,
		St
	]), fn = p((e, t) => {
		if (H(e)) return;
		let n = qe(e), r = c(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = d(e), o = M(e, { amount: u(r) });
		if (A((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: te(e.selectedBonusCode, o),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: T,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), f(x) && j(e) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		M,
		j,
		w,
		H,
		T,
		y,
		A,
		x
	]), pn = p((e, t) => {
		let n = qe(e), r = c(e, w, t.values), i = {
			paymentTypeName: d(e),
			method: T,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		A((e) => Ae(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		A
	]), mn = p((e, t) => {
		Lt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Y = Ft?.submit, X = !q && !J || F.paymentTypeName === V, hn = p(() => {
		if (L) return;
		if (q || J) return X ? Y?.onClick() : void 0;
		if (!B || !C) return;
		let e = d(B);
		if (f(x) && j(B) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Y,
		J,
		j,
		X,
		L,
		y,
		B,
		C,
		q,
		x
	]), gn = !!Y?.visible, Z = (q || J) && X && !!Y?.loading, _n = q || J, Q = _n ? L || !tn || !X || !gn || !!Y?.disabled : L || !tn, vn = J || ln ? v(T === e.PAYOUT ? "cta.payout" : "cta.payin") : Kt, yn = m(() => R ? /* @__PURE__ */ h(Ge, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: Z || L,
		onClick: z,
		label: Ut
	}, "cashier-pts-back") : null, [
		Z,
		Ut,
		R,
		z,
		L
	]), bn = m(() => !W || kt || I.length === 0 ? null : /* @__PURE__ */ h(Ge, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			hn();
		},
		disabled: Q,
		loading: Z,
		label: vn
	}, "cashier-pts-continue"), [
		Z,
		Q,
		vn,
		hn,
		kt,
		W,
		I.length
	]);
	Qe(R && !L && !Z ? z : void 0);
	let xn = m(() => yn ? [yn] : [], [yn]), Sn = m(() => bn ? [bn] : [], [bn]), Cn = m(() => [...xn, ...Sn], [xn, Sn]), wn = m(() => Rt ? xn : [], [Rt, xn]), Tn = m(() => O ? Cn : U ? wn : [], [
		wn,
		U,
		Cn,
		O
	]), En = p((e) => {
		let n = d(e), r = K(e, { hasVisibleInlineContent: G(e) }), i = dn(e), a = c(e, w, i), o = Ye(x) && At(e, { amount: u(a) }).length > 0 ? /* @__PURE__ */ h(Te, {
			paymentType: e,
			amount: a
		}) : null, s = !!o && !Yt && qe(e), l = !O && n === V, ee = !!(o && l), te = !Ne(e);
		return /* @__PURE__ */ it("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: xe("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!s && o,
				/* @__PURE__ */ h(Me, {
					paymentType: e,
					selectionId: n,
					amountValue: w,
					hideAmountField: Yt,
					renderAfterAmountField: s ? o : void 0,
					onActionsChange: It,
					onPromptStateChange: mn,
					onPreparedValues: fn,
					onValuesChange: pn,
					valueOverrides: i,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: r.submitMode,
					reserveTrailingActionSpace: l && !ee,
					animateEntrance: !1
				}, n),
				l && /* @__PURE__ */ h(t, {
					domScope: "route-payment-types-accordion-actions",
					items: Sn,
					adaptive: !1
				})
			]
		});
	}, [
		Sn,
		At,
		dn,
		fn,
		mn,
		pn,
		G,
		w,
		K,
		V,
		Yt,
		x,
		O
	]), Dn = p((e) => {
		let t = an(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ h(be, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [an]), On = p((e) => ({ amount: u(c(e, w, dn(e))) }), [dn, w]), kn = m(() => {
		let e = l({ translateKey: v });
		if (!tn) return e;
		if (q) {
			let t = F.paymentTypeName === V;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ h(He, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return ie({ translateKey: v });
		}
		return {
			legacyTitle: v("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: qt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: qt?.values,
			icon: /* @__PURE__ */ h(Ee, {})
		};
	}, [
		F,
		tn,
		q,
		qt,
		V,
		v
	]);
	Oe("bottom", Tn, Tn.length > 0, { reserveSpace: O }), Ie({
		onBack: R && !L ? z : void 0,
		backKey: "Backspace"
	}), tt(() => {
		if (!b || !a(pt) || W || !C) return;
		let e = r(I, C);
		if (!e || H(e)) return;
		let t = d(e);
		if (f(x) && j(e) > 0) {
			y({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		y,
		I,
		C,
		b,
		pt,
		W,
		j,
		H,
		x
	]);
	let { createAction: An, revision: jn } = Le({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), Mn = m(() => I.flatMap((e) => {
		let t = d(e), n = s(e), r = ze({
			paymentType: e,
			id: t,
			label: n ? Se(n) : dt(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: Et,
			minimumLabel: _("field.limits.min.label"),
			maximumLabel: _("field.limits.max.label"),
			selected: t === V,
			disabled: H(e),
			unavailable: je(e)
		});
		return r ? [r] : [];
	}), [
		E,
		Et,
		H,
		I,
		_,
		dt,
		V
	]), $ = _n, Nn = !$ || X && !!Ft, Pn = $ && !Nn ? "protected-surface-not-ready" : Q ? "invalid-state" : void 0, Fn = m(() => ({
		screen: "paymentTypes",
		revision: jn,
		busy: L || Z,
		method: T,
		title: _("cta.choose_payment_type"),
		continueLabel: _("cta.continue"),
		backLabel: _("cta.back"),
		paymentTypes: Mn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: Nn,
		...$ ? { protectedSurfaceLabel: _(Ke) } : {},
		canContinue: !Q
	}), [
		Z,
		Q,
		L,
		T,
		Mn,
		_,
		Nn,
		$,
		jn
	]), In = m(() => ({
		selectPaymentType: An("selectPaymentType", un, {
			busy: L,
			validate: (e) => Mn.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: An("continue", hn, {
			busy: L || Z,
			unavailableReason: Pn
		}),
		goBack: An("goBack", z, {
			busy: L || Z,
			unavailableReason: R ? void 0 : "invalid-state"
		})
	}), [
		Z,
		R,
		Pn,
		An,
		z,
		hn,
		un,
		L,
		Mn
	]);
	if (kt || I.length === 0) return /* @__PURE__ */ h($e, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let Ln = /* @__PURE__ */ it("div", {
		className: xe(g.className("route-payment-types-content"), "px-1.5 @sm:px-3", O ? "pb-3 @md:pb-4" : "pb-4", ot),
		children: [
			/* @__PURE__ */ it("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: xe(g.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
				children: [en && /* @__PURE__ */ h(Te, {
					placement: "payment-list",
					paymentType: B,
					paymentTypes: I,
					amount: B ? c(B, w) : w
				}), U ? /* @__PURE__ */ h(Ve, {
					paymentTypes: I,
					domScope: "route-payment-types",
					selectedPaymentType: C,
					onSelect: un,
					renderPanel: En,
					renderFooter: Dn,
					hasPanel: cn,
					collapsible: Qt,
					renderActions: rn,
					isPaymentTypeDisabled: H,
					interactionLocked: L,
					preserveDisabledSelection: !0,
					hoverMode: W ? "none" : "group",
					showMeta: !0,
					bonusEvaluationContext: On
				}) : /* @__PURE__ */ h(We, {
					paymentTypes: I,
					domScope: "route-payment-types",
					animateItems: !0,
					selectable: W,
					selectedPaymentType: C,
					onSelect: un,
					renderActions: rn,
					isPaymentTypeDisabled: H,
					interactionLocked: L,
					preserveDisabledSelection: !0,
					showMeta: !0
				})]
			}),
			U ? !O && /* @__PURE__ */ h(t, {
				domScope: "route-payment-types-back",
				items: xn,
				onFallbackActiveChange: zt
			}) : !O && /* @__PURE__ */ h("div", {
				"data-slot": "route-payment-types-action-stack",
				className: xe(g.className("route-payment-types-action-stack"), Bt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ h(ue, {
					domScope: "route-payment-types-actions",
					items: Cn,
					fixed: !1,
					onFallbackActiveChange: Vt
				})
			}),
			Nt
		]
	});
	return /* @__PURE__ */ h(Fe, {
		id: "paymentTypes",
		model: Fn,
		actions: In,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ h(Ze, {
			id: g.id("route-payment-types"),
			className: g.className("route-payment-types"),
			title: mt ? void 0 : v("cta.choose_payment_type"),
			header: mt ? /* @__PURE__ */ h(ce, {
				content: kn,
				className: at
			}) : void 0,
			fitted: !0,
			stickyHeader: !0,
			children: e
		}),
		protectedContent: $ ? Ln : void 0,
		children: Ln
	});
}
var g = () => /* @__PURE__ */ h($e, {
	text: "payment.no_pts_found",
	presentationScreen: "empty"
});
//#endregion
export { ut as PtsView, g as errorComponent };
