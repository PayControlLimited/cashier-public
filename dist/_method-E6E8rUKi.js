import { CashierMethods as e } from "./types/CashierConfig.js";
import { $ as t, A as n, At as r, Ct as i, Dn as a, Ei as o, En as s, Et as c, F as l, Fi as u, Fn as ee, Ft as te, G as ne, Gr as re, It as ie, K as ae, L as oe, Lt as se, Mi as ce, Mr as le, Mt as d, On as ue, P as de, Pi as fe, Pt as pe, Q as me, Qr as he, Rt as ge, X as _e, Z as ve, Zr as ye, _t as be, at as xe, bt as Se, c as Ce, dt as we, f as Te, fn as Ee, gt as De, ht as Oe, i as ke, jt as Ae, k as je, m as Me, mt as Ne, n as Pe, nn as Fe, nt as Ie, on as Le, pn as Re, pt as ze, r as Be, t as Ve, u as He, un as Ue, vi as We, vt as f, wn as Ge, wt as Ke, xi as qe, xt as Je, yt as Ye } from "./inlinePaymentSubmit-CmI1mVTq.js";
import { a as Xe, i as Ze, t as Qe } from "./StatusText-DMkg47Ob.js";
import { useCallback as p, useContext as $e, useEffect as et, useMemo as m, useRef as tt, useState as nt } from "react";
import { jsx as h, jsxs as rt } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var it = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", at = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", ot = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", st = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, ct = (e) => typeof e == "string" ? e : e.baseName;
function lt({ loaderPaymentTypes: lt = [] }) {
	let g = ye(), { resolveTextKey: _, resolveTextKeys: ut, translateKey: v } = le(), y = u(), { uiComboView: b, lockAmount: dt, uiComboView__PaymentTypes: ft, uiInteractivePrompts: pt, uiPaymentConfirmView: mt, uiBonusesStyle: x, uiShowFees: S, uiListStyle: ht, selectedPaymentType: C, initialAmount: w, method: T, currency: E, user: D, locale: gt, uiAccountDelete: _t, uiListSelectable: vt, uiFixedControls: O, uiPreselectedPaymentType: yt, onPaymentTypeSelected: k, onPaymentTypeDeselected: bt, paymentFormDraft: xt, comboViewFormDraft: St, resetFlowOnBack: Ct, setCashierState: A } = $e(he), { currencyFormatter: wt, formatCurrencyValue: Tt, formatDisplayValue: Et } = xe(), { paymentTypesList: Dt, isError: Ot } = ve(), { getBonusCountForPaymentType: j, getBonusAvailabilityForPaymentType: kt, getAvailableBonusesForPaymentType: M } = _e(), At = m(() => pe(wt), [wt]), { selectPaymentType: N, clearPaymentSelection: P } = ae(), { requestAccountDelete: jt, actionConfirmationModal: Mt } = Ce(), Nt = tt(!1), [Pt, Ft] = nt(null), [F, It] = nt({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Lt, Rt] = nt(!1), [zt, Bt] = nt(!1), I = Dt.length > 0 ? Dt : lt, L = ee(), Vt = we({
		uiComboView: b,
		lockAmount: dt,
		method: T
	}), Ht = v("cta.back"), { canGoBack: R, handleBack: Ut } = Xe({
		defaultRoute: Vt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !Ct,
		replace: Ct || !b
	});
	et(() => {
		Ct && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Ct, A]);
	let Wt = b && !i(ft), z = p(() => {
		L || (Wt && P(), Ut());
	}, [
		P,
		Ut,
		L,
		Wt
	]), Gt = v("cta.continue"), B = m(() => ue(I, C), [I, C]), V = B ? s(B) : C, Kt = m(() => {
		if (!B || !S || !st(B.fee)) return null;
		let t = ot(B.fee, Et);
		if (!t) return null;
		let n = T === e.PAYOUT, r = {
			fee: t,
			method: v(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(ct(gt))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Et,
		gt,
		T,
		B,
		v,
		S
	]), qt = b && o(w), Jt = b && o(w), Yt = Jt ? w : "", H = p((e) => a(e) ? !0 : qt ? r(w, e.limits, { maxBoundary: Ae(T, D, e.fee) }).isOutOfRange : !1, [
		w,
		T,
		qt,
		D
	]), Xt = B ? H(B) : !1, U = be(ht), Zt = Je(ht), Qt = Se(x), $t = Qt, W = vt || U || Qt, en = !!B && !Xt, tn = v("account.delete.title"), nn = p((e) => _t && e.accountId ? /* @__PURE__ */ h(ce, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": tn,
		disabled: L,
		onClick: () => {
			jt(e);
		},
		iconOnly: !0,
		label: tn,
		leadingIcon: /* @__PURE__ */ h(qe, {})
	}) : null, [
		tn,
		L,
		jt,
		_t
	]), rn = p((t) => {
		let n = c(t, w), i = d(n) ?? 0, a = Ae(T, D, t.fee), o = r(n, t.limits, { maxBoundary: a }), s = Pe(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), l = S ? te(t.fee, i, {
			feeCurrencyFormatter: At,
			formatCurrencyValue: Tt
		}) : null, u = T === e.PAYOUT ? se(t.fee, i, E) : null, ee = T === e.PAYIN && S ? ie(t.fee, i, E) : null, ne = T === e.PAYOUT ? ge(s, [l, u]) : s, re = T === e.PAYIN ? [l, ee].filter((e) => e !== null) : [], ae = a !== null && o.value !== null && o.value > a ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...ne, ...re],
			rowVariants: ae
		};
	}, [
		E,
		At,
		Tt,
		w,
		T,
		S,
		D
	]), G = p((e) => De(e, Yt), [Yt]), K = p((e, { hasVisibleInlineContent: t }) => Ve({
		uiPaymentConfirmView: mt,
		hasPendingStep: f(x) && j(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		j,
		x,
		mt
	]), an = p((e) => !ze(e) && K(e, { hasVisibleInlineContent: !1 }).action === "submit", [K]), on = p((e) => G(e) && K(e, { hasVisibleInlineContent: !0 }).action === "submit", [G, K]), sn = p((e) => G(e) || Oe(e) || rn(e).fields.length > 0 || an(e) || !O || Ye(x) && kt(e).length > 0, [
		an,
		kt,
		rn,
		G,
		O,
		x
	]), q = !!(U && B && G(B)), J = !!(U && B && an(B)), cn = !!(U && B && on(B));
	et(() => {
		if (!W || Nt.current || C || !yt) return;
		let e = ue(I, yt);
		!e || H(e) || N(s(e), { availableBonuses: M(e, { amount: d(w) }) });
	}, [
		M,
		w,
		I,
		N,
		C,
		W,
		H,
		yt
	]), et(() => {
		L || Xt && P();
	}, [
		P,
		L,
		Xt
	]);
	let ln = p((e) => {
		if (L) return;
		let t = ue(I, e);
		if (!t || H(t)) return;
		let n = s(t);
		if (W) {
			if (Nt.current = !0, B === t) {
				Zt && U && sn(t) && (P(), bt?.(t));
				return;
			}
			N(n, { availableBonuses: M(t, { amount: d(w) }) }), k && k(t);
			return;
		}
		if (N(n, { availableBonuses: M(t, { amount: d(w) }) }), k && k(t), f(x) && j(t) > 0) {
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
		sn,
		U,
		Zt,
		W,
		L,
		H,
		w,
		P,
		y,
		bt,
		k,
		I,
		B,
		N,
		x
	]), un = p((e) => {
		let t = c(e, w), r = {
			paymentTypeName: s(e),
			method: T,
			amount: t
		};
		if (n(St, r)) return St.values;
		if (n(xt, r)) return xt.values;
	}, [
		St,
		w,
		T,
		xt
	]), dn = p((e, t) => {
		if (H(e)) return;
		let n = Ke(e), r = c(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = s(e), o = M(e, { amount: d(r) });
		if (A((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: ne(e.selectedBonusCode, o),
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
	]), fn = p((e, t) => {
		let n = Ke(e), r = c(e, w, t.values), i = {
			paymentTypeName: s(e),
			method: T,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		A((e) => je(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		A
	]), pn = p((e, t) => {
		It((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Y = Pt?.submit, X = !q && !J || F.paymentTypeName === V, mn = p(() => {
		if (L) return;
		if (q || J) return X ? Y?.onClick() : void 0;
		if (!B || !C) return;
		let e = s(B);
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
	]), hn = !!Y?.visible, Z = (q || J) && X && !!Y?.loading, gn = q || J, Q = gn ? L || !en || !X || !hn || !!Y?.disabled : L || !en, _n = J || cn ? v(T === e.PAYOUT ? "cta.payout" : "cta.payin") : Gt, vn = m(() => R ? /* @__PURE__ */ h(ce, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: Z || L,
		onClick: z,
		label: Ht
	}, "cashier-pts-back") : null, [
		Z,
		Ht,
		R,
		z,
		L
	]), yn = m(() => !W || Ot || I.length === 0 ? null : /* @__PURE__ */ h(ce, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			mn();
		},
		disabled: Q,
		loading: Z,
		label: _n
	}, "cashier-pts-continue"), [
		Z,
		Q,
		_n,
		mn,
		Ot,
		W,
		I.length
	]), bn = m(() => vn ? [vn] : [], [vn]), xn = m(() => yn ? [yn] : [], [yn]), Sn = m(() => [...bn, ...xn], [bn, xn]), Cn = m(() => Lt ? bn : [], [Lt, bn]), wn = m(() => O ? Sn : U ? Cn : [], [
		Cn,
		U,
		Sn,
		O
	]), Tn = p((e) => {
		let n = s(e), r = K(e, { hasVisibleInlineContent: G(e) }), i = un(e), a = c(e, w, i), o = Ye(x) && kt(e, { amount: d(a) }).length > 0 ? /* @__PURE__ */ h(ke, {
			paymentType: e,
			amount: a
		}) : null, l = !!o && !Jt && Ke(e), u = !O && n === V, ee = !!(o && u), te = !Ne(e);
		return /* @__PURE__ */ rt("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: fe("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!l && o,
				/* @__PURE__ */ h(Me, {
					paymentType: e,
					selectionId: n,
					amountValue: w,
					hideAmountField: Jt,
					renderAfterAmountField: l ? o : void 0,
					onActionsChange: Ft,
					onPromptStateChange: pn,
					onPreparedValues: dn,
					onValuesChange: fn,
					valueOverrides: i,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: r.submitMode,
					reserveTrailingActionSpace: u && !ee,
					animateEntrance: !1
				}, n),
				u && /* @__PURE__ */ h(t, {
					domScope: "route-payment-types-accordion-actions",
					items: xn,
					adaptive: !1
				})
			]
		});
	}, [
		xn,
		kt,
		un,
		dn,
		pn,
		fn,
		G,
		w,
		K,
		V,
		Jt,
		x,
		O
	]), En = p((e) => {
		let t = rn(e);
		return t.fields.length === 0 ? null : /* @__PURE__ */ h(Te, {
			summaryFields: t.fields,
			rowVariants: t.rowVariants
		});
	}, [rn]), Dn = p((e) => ({ amount: d(c(e, w, un(e))) }), [un, w]), On = m(() => {
		let e = l({ translateKey: v });
		if (!en) return e;
		if (q) {
			let t = F.paymentTypeName === V;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ h(qe, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return oe({ translateKey: v });
		}
		return {
			legacyTitle: v("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: Kt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: Kt?.values,
			icon: /* @__PURE__ */ h(We, {})
		};
	}, [
		F,
		en,
		q,
		Kt,
		V,
		v
	]);
	re("bottom", wn, wn.length > 0, { reserveSpace: O }), Ie({
		onBack: R && !L ? z : void 0,
		backKey: "Backspace"
	}), et(() => {
		if (!b || !i(ft) || W || !C) return;
		let e = ue(I, C);
		if (!e || H(e)) return;
		let t = s(e);
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
		ft,
		W,
		j,
		H,
		x
	]);
	let { createAction: kn, revision: An } = Le({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), jn = m(() => I.flatMap((e) => {
		let t = s(e), n = Ge(e), r = Re({
			paymentType: e,
			id: t,
			label: n ? Ee(n) : ut(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: Tt,
			minimumLabel: _("field.limits.min.label"),
			maximumLabel: _("field.limits.max.label"),
			selected: t === V,
			disabled: H(e),
			unavailable: a(e)
		});
		return r ? [r] : [];
	}), [
		E,
		Tt,
		H,
		I,
		_,
		ut,
		V
	]), $ = gn, Mn = !$ || X && !!Pt, Nn = $ && !Mn ? "protected-surface-not-ready" : Q ? "invalid-state" : void 0, Pn = m(() => ({
		screen: "paymentTypes",
		revision: An,
		busy: L || Z,
		method: T,
		title: _("cta.choose_payment_type"),
		continueLabel: _("cta.continue"),
		backLabel: _("cta.back"),
		paymentTypes: jn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: Mn,
		...$ ? { protectedSurfaceLabel: _(Ue) } : {},
		canContinue: !Q
	}), [
		Z,
		Q,
		L,
		T,
		jn,
		_,
		Mn,
		$,
		An
	]), Fn = m(() => ({
		selectPaymentType: kn("selectPaymentType", ln, {
			busy: L,
			validate: (e) => jn.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: kn("continue", mn, {
			busy: L || Z,
			unavailableReason: Nn
		}),
		goBack: kn("goBack", z, {
			busy: L || Z,
			unavailableReason: R ? void 0 : "invalid-state"
		})
	}), [
		Z,
		R,
		Nn,
		kn,
		z,
		mn,
		ln,
		L,
		jn
	]);
	if (Ot || I.length === 0) return /* @__PURE__ */ h(Qe, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let In = /* @__PURE__ */ rt("div", {
		className: fe(g.className("route-payment-types-content"), "px-1.5 @sm:px-3", O ? "pb-3 @md:pb-4" : "pb-4", at),
		children: [
			/* @__PURE__ */ rt("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: fe(g.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
				children: [$t && /* @__PURE__ */ h(ke, {
					placement: "payment-list",
					paymentType: B,
					paymentTypes: I,
					amount: B ? c(B, w) : w
				}), U ? /* @__PURE__ */ h(Be, {
					paymentTypes: I,
					domScope: "route-payment-types",
					selectedPaymentType: C,
					onSelect: ln,
					renderPanel: Tn,
					renderFooter: En,
					hasPanel: sn,
					collapsible: Zt,
					renderActions: nn,
					isPaymentTypeDisabled: H,
					interactionLocked: L,
					preserveDisabledSelection: !0,
					hoverMode: W ? "none" : "group",
					showMeta: !0,
					bonusEvaluationContext: Dn
				}) : /* @__PURE__ */ h(He, {
					paymentTypes: I,
					domScope: "route-payment-types",
					animateItems: !0,
					selectable: W,
					selectedPaymentType: C,
					onSelect: ln,
					renderActions: nn,
					isPaymentTypeDisabled: H,
					interactionLocked: L,
					preserveDisabledSelection: !0,
					showMeta: !0
				})]
			}),
			U ? !O && /* @__PURE__ */ h(t, {
				domScope: "route-payment-types-back",
				items: bn,
				onFallbackActiveChange: Rt
			}) : !O && /* @__PURE__ */ h("div", {
				"data-slot": "route-payment-types-action-stack",
				className: fe(g.className("route-payment-types-action-stack"), zt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ h(me, {
					domScope: "route-payment-types-actions",
					items: Sn,
					fixed: !1,
					onFallbackActiveChange: Bt
				})
			}),
			Mt
		]
	});
	return /* @__PURE__ */ h(Fe, {
		id: "paymentTypes",
		model: Pn,
		actions: Fn,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ h(Ze, {
			id: g.id("route-payment-types"),
			className: g.className("route-payment-types"),
			title: pt ? void 0 : v("cta.choose_payment_type"),
			header: pt ? /* @__PURE__ */ h(de, {
				content: On,
				className: it
			}) : void 0,
			fitted: !0,
			stickyHeader: !0,
			children: e
		}),
		protectedContent: $ ? In : void 0,
		children: In
	});
}
var g = () => /* @__PURE__ */ h(Qe, {
	text: "payment.no_pts_found",
	presentationScreen: "empty"
});
//#endregion
export { lt as PtsView, g as errorComponent };
