import { CashierMethods as e } from "./types/CashierConfig.js";
import { B as t, Bt as n, C as r, Ct as i, D as a, Dt as o, Et as s, Fr as c, H as ee, Hr as l, I as te, It as ne, Jr as u, L as re, Lt as ie, M as ae, Mn as oe, Mt as se, Nt as ce, Pt as d, Rr as le, Rt as ue, St as de, T as fe, Xr as pe, Yr as me, _t as he, a as ge, an as _e, bt as ve, c as ye, ct as be, d as xe, f as Se, gt as Ce, hr as we, in as f, j as Te, k as Ee, kt as p, lr as De, lt as Oe, mr as ke, mt as Ae, n as je, o as Me, p as Ne, s as Pe, t as Fe, u as Ie, un as Le, ut as Re, vt as ze, w as Be, wt as Ve, xt as m, yt as He, zt as Ue } from "./useBackNavigation-tTJ9dYNY.js";
import { t as We } from "./_method-Cm3TtMs0.js";
import { useCallback as h, useContext as Ge, useEffect as g, useMemo as _, useRef as Ke, useState as v } from "react";
import { jsx as y, jsxs as qe } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var Je = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Ye = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Xe = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Ze = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Qe = (e) => typeof e == "string" ? e : e.baseName;
function b() {
	let { paymentTypes: e } = We.useLoaderData();
	return /* @__PURE__ */ y(x, { loaderPaymentTypes: e });
}
function x({ loaderPaymentTypes: We = [] }) {
	let b = ke(), { translateKey: x } = oe(), S = pe(), { uiComboView: C, lockAmount: $e, uiComboView__PaymentTypes: et, uiInteractivePrompts: tt, uiPaymentConfirmView: nt, uiBonusesStyle: w, uiShowFees: T, uiListStyle: rt, selectedPaymentType: E, initialAmount: D, method: O, currency: k, user: A, locale: it, uiAccountDelete: at, uiListSelectable: ot, uiFixedControls: j, uiPreselectedPaymentType: st, onPaymentTypeSelected: M, onPaymentTypeDeselected: ct, paymentFormDraft: lt, comboViewFormDraft: ut, resetFlowOnBack: dt, setCashierState: N } = Ge(we), { currencyFormatter: ft, formatCurrencyValue: pt, formatDisplayValue: mt } = be(), { paymentTypesList: ht, isError: gt } = Re(), { getBonusCountForPaymentType: P, getBonusAvailabilityForPaymentType: _t, getAvailableBonusesForPaymentType: F } = Oe(), vt = _(() => ne(ft), [ft]), { selectPaymentType: I, clearPaymentSelection: L } = re(), { requestAccountDelete: yt, actionConfirmationModal: bt } = Te(), xt = Ke(!1), [St, Ct] = v(null), [R, wt] = v({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Tt, Et] = v(!1), [Dt, Ot] = v(!1), z = ht.length > 0 ? ht : We, { isPaymentPending: kt, isPaymentSuccessful: At } = Le(), B = kt || At, jt = Ae({
		uiComboView: C,
		lockAmount: $e,
		method: O
	}), Mt = x("cta.back"), { canGoBack: Nt, handleBack: Pt } = Fe({
		defaultRoute: jt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !dt,
		replace: dt || !C
	});
	g(() => {
		dt && N((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [dt, N]);
	let Ft = C && !s(et), It = h(() => {
		B || (Ft && L(), Pt());
	}, [
		L,
		Pt,
		B,
		Ft
	]), Lt = x("cta.continue"), V = _(() => _e(z, E), [z, E]), H = V ? f(V) : E, Rt = _(() => {
		if (!V || !T || !Ze(V.fee)) return null;
		let t = Xe(V.fee, mt);
		if (!t) return null;
		let n = {
			fee: t,
			method: x(O === e.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(Qe(it))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return V.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : V.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		mt,
		it,
		O,
		V,
		x,
		T
	]), zt = C && l(D), U = C && l(D), Bt = U ? D : "", W = h((e) => B ? !0 : zt ? se(D, e.limits, { maxBoundary: ce(O, A, e.fee) }).isOutOfRange : !1, [
		D,
		B,
		O,
		zt,
		A
	]), Vt = V ? W(V) : !1, G = ve(rt), Ht = Ve(rt), Ut = i(w), Wt = Ut, K = ot || G || Ut, Gt = !!V && !Vt, Kt = x("account.delete.title"), qt = h((e) => !at || !e.accountId ? null : /* @__PURE__ */ y(u, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Kt,
		onClick: () => {
			yt(e);
		},
		iconOnly: !0,
		label: Kt,
		leadingIcon: /* @__PURE__ */ y(le, {})
	}), [
		Kt,
		yt,
		at
	]), Jt = h((t) => {
		let r = p(t, D), i = d(r) ?? 0, a = ce(O, A, t.fee), o = se(r, t.limits, { maxBoundary: a }), s = Pe(O, k, A, {
			amount: r,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: O === e.PAYOUT
		}), c = T ? ie(t.fee, i, {
			feeCurrencyFormatter: vt,
			formatCurrencyValue: pt
		}) : null, ee = O === e.PAYOUT ? Ue(t.fee, i, k) : null, l = O === e.PAYIN && T ? ue(t.fee, i, k) : null, te = O === e.PAYOUT ? n(s, [c, ee]) : s, ne = O === e.PAYIN ? [c, l].filter((e) => e !== null) : [], u = a !== null && o.value !== null && o.value > a ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [...te, ...ne],
			rowVariants: u
		};
	}, [
		k,
		vt,
		pt,
		D,
		O,
		T,
		A
	]), q = h((e) => He(e, Bt), [Bt]), J = h((e, { hasVisibleInlineContent: t }) => Me({
		uiPaymentConfirmView: nt,
		hasPendingStep: m(w) && P(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: t ? !1 : (e.notifications ?? []).length > 0
	}), [
		P,
		w,
		nt
	]), Yt = h((e) => !Ce(e) && J(e, { hasVisibleInlineContent: !1 }).action === "submit", [J]), Xt = h((e) => q(e) && J(e, { hasVisibleInlineContent: !0 }).action === "submit", [q, J]), Zt = h((e) => q(e) || ze(e) || Jt(e).fields.length > 0 || Yt(e) || !j || de(w) && _t(e).length > 0, [
		Yt,
		_t,
		Jt,
		q,
		j,
		w
	]), Y = !!(G && V && q(V)), X = !!(G && V && Yt(V)), Qt = !!(G && V && Xt(V));
	g(() => {
		if (!K || xt.current || E || !st) return;
		let e = _e(z, st);
		e && I(f(e), { availableBonuses: F(e, { amount: d(D) }) });
	}, [
		F,
		D,
		z,
		I,
		E,
		K,
		st
	]), g(() => {
		B || Vt && L();
	}, [
		L,
		B,
		Vt
	]);
	let $t = h((e) => {
		let t = _e(z, e);
		if (!t || W(t)) return;
		let n = f(t);
		if (K) {
			if (xt.current = !0, V === t) {
				Ht && G && Zt(t) && (L(), ct?.(t));
				return;
			}
			I(n, { availableBonuses: F(t, { amount: d(D) }) }), M && M(t);
			return;
		}
		if (I(n, { availableBonuses: F(t, { amount: d(D) }) }), M && M(t), m(w) && P(t) > 0) {
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
		Zt,
		G,
		Ht,
		K,
		W,
		D,
		L,
		S,
		ct,
		M,
		z,
		V,
		I,
		w
	]), en = h((e) => {
		let t = p(e, D), n = {
			paymentTypeName: f(e),
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
	]), tn = h((e, t) => {
		if (W(e)) return;
		let n = o(e), r = p(e, D, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = f(e), s = F(e, { amount: d(r) });
		if (N((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: te(e.selectedBonusCode, s),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: O,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), m(w) && P(e) > 0) {
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
		W,
		O,
		S,
		N,
		w
	]), nn = h((e, t) => {
		let n = o(e), r = p(e, D, t.values), i = {
			paymentTypeName: f(e),
			method: O,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		N((e) => Se(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		D,
		O,
		N
	]), rn = h((e, t) => {
		wt((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Z = St?.submit, Q = !Y && !X || R.paymentTypeName === H, an = h(() => {
		if (B) return;
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
		if (!V || !E) return;
		let e = f(V);
		if (m(w) && P(V) > 0) {
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
		B,
		S,
		V,
		E,
		Y,
		w
	]), on = !!Z?.visible, sn = (Y || X) && Q && !!Z?.loading, cn = Y || X ? B || !Gt || !Q || !on || !!Z?.disabled : B || !Gt, ln = X || Qt ? x(O === e.PAYOUT ? "cta.payout" : "cta.payin") : Lt, un = _(() => Nt ? /* @__PURE__ */ y(u, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: sn || B,
		onClick: It,
		label: Mt
	}, "cashier-pts-back") : null, [
		sn,
		Mt,
		Nt,
		It,
		B
	]), dn = _(() => !K || gt || z.length === 0 ? null : /* @__PURE__ */ y(u, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: an,
		disabled: cn,
		loading: sn,
		label: ln
	}, "cashier-pts-continue"), [
		sn,
		cn,
		ln,
		an,
		gt,
		K,
		z.length
	]), $ = _(() => un ? [un] : [], [un]), fn = _(() => dn ? [dn] : [], [dn]), pn = _(() => [...$, ...fn], [$, fn]), mn = _(() => Tt ? $ : [], [Tt, $]), hn = _(() => j ? pn : G ? mn : [], [
		mn,
		G,
		pn,
		j
	]), gn = h((e) => {
		let t = f(e), n = J(e, { hasVisibleInlineContent: q(e) }), r = en(e), i = p(e, D, r), a = de(w) && _t(e, { amount: d(i) }).length > 0 ? /* @__PURE__ */ y(xe, {
			paymentType: e,
			amount: i
		}) : null, s = !!a && !U && o(e), c = !j && t === H, l = !!(a && c);
		return /* @__PURE__ */ qe("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: me("flex min-w-0 flex-col", !he(e) && "px-0.5", l ? "gap-2.5" : "gap-2"),
			children: [
				!s && a,
				/* @__PURE__ */ y(ee, {
					paymentType: e,
					selectionId: t,
					amountValue: D,
					hideAmountField: U,
					renderAfterAmountField: s ? a : void 0,
					onActionsChange: Ct,
					onPromptStateChange: rn,
					onPreparedValues: tn,
					onValuesChange: nn,
					valueOverrides: r,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: c && !l,
					animateEntrance: !1
				}, t),
				c && /* @__PURE__ */ y(Be, {
					domScope: "route-payment-types-accordion-actions",
					items: fn,
					adaptive: !1
				})
			]
		});
	}, [
		fn,
		_t,
		en,
		tn,
		rn,
		nn,
		q,
		D,
		J,
		H,
		U,
		w,
		j
	]), _n = h((e) => {
		let n = Jt(e);
		return n.fields.length === 0 ? null : /* @__PURE__ */ y(t, {
			summaryFields: n.fields,
			rowVariants: n.rowVariants
		});
	}, [Jt]), vn = h((e) => ({ amount: d(p(e, D, en(e))) }), [en, D]), yn = _(() => {
		let e = a({ translateKey: x });
		if (!Gt) return e;
		if (Y) {
			let t = R.paymentTypeName === H;
			if (t && R.errorMessage) return {
				...e,
				legacyTitle: R.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ y(le, {}),
				tone: "danger"
			};
			if (!t || !R.isComplete) return Ee({ translateKey: x });
		}
		return {
			legacyTitle: x("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: Rt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: Rt?.values,
			icon: /* @__PURE__ */ y(c, {})
		};
	}, [
		R,
		Gt,
		Y,
		Rt,
		H,
		x
	]);
	return De("bottom", hn, hn.length > 0, { reserveSpace: j }), fe({
		onBack: Nt && !B ? It : void 0,
		backKey: "Backspace"
	}), g(() => {
		if (!C || !s(et) || K || !E) return;
		let e = _e(z, E);
		if (!e) return;
		let t = f(e);
		if (m(w) && P(e) > 0) {
			S({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		S({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		S,
		z,
		E,
		C,
		et,
		K,
		P,
		w
	]), gt || z.length === 0 ? /* @__PURE__ */ y(je, { text: "payment.no_pts_found" }) : /* @__PURE__ */ y(ge, {
		id: b.id("route-payment-types"),
		className: b.className("route-payment-types"),
		title: tt ? void 0 : x("cta.choose_payment_type"),
		header: tt ? /* @__PURE__ */ y(ye, {
			content: yn,
			className: Je
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ qe("div", {
			className: me(b.className("route-payment-types-content"), "px-1.5 @sm:px-3", j ? "pb-3 @md:pb-4" : "pb-4", Ye),
			children: [
				/* @__PURE__ */ qe("div", {
					"data-slot": "route-payment-types-selection-stack",
					className: me(b.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5"),
					children: [Wt && /* @__PURE__ */ y(xe, {
						placement: "payment-list",
						paymentType: V,
						paymentTypes: z,
						amount: V ? p(V, D) : D
					}), G ? /* @__PURE__ */ y(Ie, {
						paymentTypes: z,
						domScope: "route-payment-types",
						selectedPaymentType: E,
						onSelect: $t,
						renderPanel: gn,
						renderFooter: _n,
						hasPanel: Zt,
						collapsible: Ht,
						renderActions: qt,
						isPaymentTypeDisabled: W,
						preserveDisabledSelection: !0,
						hoverMode: K ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: vn
					}) : /* @__PURE__ */ y(ae, {
						paymentTypes: z,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: K,
						selectedPaymentType: E,
						onSelect: $t,
						renderActions: qt,
						isPaymentTypeDisabled: W,
						preserveDisabledSelection: !0,
						showMeta: !0
					})]
				}),
				G ? !j && /* @__PURE__ */ y(Be, {
					domScope: "route-payment-types-back",
					items: $,
					onFallbackActiveChange: Et
				}) : !j && /* @__PURE__ */ y("div", {
					"data-slot": "route-payment-types-action-stack",
					className: me(b.className("route-payment-types-action-stack"), Dt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
					children: /* @__PURE__ */ y(r, {
						domScope: "route-payment-types-actions",
						items: pn,
						fixed: !1,
						onFallbackActiveChange: Ot
					})
				}),
				bt
			]
		})
	});
}
//#endregion
export { x as PtsView, b as component };
