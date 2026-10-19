import { CashierMethods as e } from "./types/CashierConfig.js";
import { A as t, Ar as n, C as r, D as i, F as a, Fi as o, G as ee, K as s, L as c, M as l, Mi as te, Mn as ne, N as re, O as ie, On as ae, P as oe, Q as se, R as ce, Rr as le, S as ue, T as de, Tt as fe, U as pe, V as u, W as me, Zn as he, _t as d, et as ge, gi as _e, ht as ve, it as ye, j as be, k as xe, n as Se, nt as Ce, pn as we, q as f, st as Te, t as Ee, tt as De, vt as Oe, yi as ke, yr as Ae, yt as je } from "./usePaymentSelection-DEVic0G9.js";
import { U as Me, V as Ne, W as Pe, mt as Fe, pt as Ie } from "./purchase-Bq2flI3q.js";
import { E as Le, F as Re, I as ze, L as Be, O as Ve, Q as He, T as Ue, b as We, c as Ge, f as Ke, i as qe, n as Je, p as Ye, r as Xe, rt as Ze, t as Qe, u as $e, x as et } from "./inlinePaymentSubmit-VO4WMTCy.js";
import { a as tt, i as nt, t as rt } from "./StatusText-HldphKQr.js";
import { useCallback as p, useContext as it, useEffect as at, useMemo as m, useRef as ot, useState as st } from "react";
import { jsx as h, jsxs as ct } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var lt = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", ut = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", dt = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", ft = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, pt = (e) => typeof e == "string" ? e : e.baseName;
function mt({ loaderPaymentTypes: mt = [] }) {
	let g = he(), { resolveTextKey: _, resolveTextKeys: ht, translateKey: v } = n(), y = we(), { uiComboView: b, lockAmount: x, entryDecision: gt, uiComboView__PaymentTypes: _t, uiInteractivePrompts: vt, uiPaymentConfirmView: yt, uiBonusesStyle: S, uiShowFees: bt, uiListStyle: xt, selectedPaymentType: C, initialAmount: w, method: T, currency: E, user: D, locale: St, uiAccountDelete: Ct, uiListSelectable: wt, uiFixedControls: O, uiPreselectedPaymentType: Tt, onPaymentTypeSelected: k, onPaymentTypeDeselected: Et, paymentFormDraft: Dt, comboViewFormDraft: Ot, resetFlowOnBack: kt, setCashierState: A } = it(le), { currencyFormatter: At, formatCurrencyValue: jt, formatDisplayValue: Mt } = Ae(), { paymentTypesList: Nt, isError: Pt } = r(), { getBonusCountForPaymentType: j, getBonusAvailabilityForPaymentType: M, getAvailableBonusesForPaymentType: N } = ue(), Ft = m(() => se(At), [At]), { selectPaymentType: It, clearPaymentSelection: P } = Se(), { requestAccountDelete: Lt, actionConfirmationModal: Rt } = Ge(), zt = ot(!1), [Bt, Vt] = st(null), [F, Ht] = st({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Ut, Wt] = st(!1), [Gt, Kt] = st(!1), I = Nt.length > 0 ? Nt : mt, L = fe(), qt = de({
		uiComboView: b,
		lockAmount: x,
		method: T
	}), Jt = v("cta.back"), { canGoBack: R, handleBack: Yt } = nt({
		defaultRoute: qt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !kt,
		replace: kt || !b
	});
	at(() => {
		kt && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [kt, A]);
	let Xt = b && !c(_t), z = p(() => {
		L || (Xt && P(), Yt());
	}, [
		P,
		Yt,
		L,
		Xt
	]), Zt = v("cta.continue"), B = m(() => je(I, C), [I, C]), V = B ? d(B) : C, Qt = m(() => {
		if (!B || !bt || !ft(B.fee)) return null;
		let t = dt(B.fee, Mt);
		if (!t) return null;
		let n = T === e.PAYOUT, r = {
			fee: t,
			method: v(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(pt(St))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Mt,
		St,
		T,
		B,
		v,
		bt
	]), $t = b && Ie(w), en = b && Ie(w), tn = en ? w : "", H = p((e) => Oe(e) ? !0 : $t ? ee(w, e.limits, { maxBoundary: s(T, D, e.fee) }).isOutOfRange : !1, [
		w,
		T,
		$t,
		D
	]), nn = B ? H(B) : !1, U = be(xt), rn = a(xt), an = oe(S), on = an, W = wt || U || an, G = !!B && !nn, K = G && x && B && ce(B) ? pe(me(w, B.limits, { maxBoundary: s(T, D, B.fee) }), v, jt) : void 0, sn = v("account.delete.title"), cn = p((e) => Ct && e.accountId ? /* @__PURE__ */ h(te, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": sn,
		disabled: L,
		onClick: () => {
			Lt(e);
		},
		iconOnly: !0,
		label: sn,
		leadingIcon: /* @__PURE__ */ h(ke, {})
	}) : null, [
		sn,
		L,
		Lt,
		Ct
	]), ln = p((t) => {
		let n = u(t, w), r = f(n) ?? 0, i = s(T, D, t.fee), a = ee(n, t.limits, { maxBoundary: i }), o = Je(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), c = bt ? ge(t.fee, Fe(n) || "0", {
			feeCurrencyFormatter: Ft,
			formatCurrencyValue: jt
		}) : null, l = T === e.PAYOUT ? Ce(t.fee, Fe(n) || "0", E) : null, te = T === e.PAYIN && bt ? De(t.fee, Fe(n) || "0", E) : null, ne = T === e.PAYOUT ? ye(o, [c, l]) : o, re = T === e.PAYIN ? [c, te].filter((e) => e !== null) : [], ie = i !== null && a.value !== null && a.value > i ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [
				...x && ce(t) ? [{
					id: "amount",
					label: "field.amount.label",
					value: {
						value: r,
						currency: E
					}
				}] : [],
				...ne,
				...re
			],
			rowVariants: ie
		};
	}, [
		E,
		Ft,
		jt,
		w,
		x,
		T,
		bt,
		D
	]), q = p((e) => t(e, tn), [tn]), J = p((e, { hasVisibleInlineContent: t }) => Qe({
		uiPaymentConfirmView: yt,
		hasPendingStep: l(S) && j(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		j,
		S,
		yt
	]), un = p((e) => !i(e) && J(e, { hasVisibleInlineContent: !1 }).action === "submit", [J]), dn = p((e) => q(e) && J(e, { hasVisibleInlineContent: !0 }).action === "submit", [q, J]), fn = p((e) => !en && ce(e), [en]), pn = p((e) => i(e) || !x && q(e) || xe(e) || !O || re(S) && !(x && fn(e)) && M(e).length > 0, [
		M,
		q,
		x,
		fn,
		O,
		S
	]), mn = p((e) => pn(e) || q(e) || ln(e).fields.length > 0 || un(e), [
		un,
		ln,
		pn,
		q
	]), Y = !!(U && B && q(B)), X = !!(U && B && un(B)), hn = !!(U && B && dn(B));
	at(() => {
		if (!W || zt.current || C || !Tt) return;
		let e = je(I, Tt);
		e && !H(e) && It(d(e), { availableBonuses: N(e, { amount: f(w) }) });
	}, [
		N,
		w,
		I,
		It,
		C,
		W,
		H,
		Tt
	]), at(() => {
		L || nn && P();
	}, [
		P,
		L,
		nn
	]);
	let gn = p((e) => {
		if (L) return;
		let t = je(I, e);
		if (!t || H(t)) return;
		let n = d(t);
		if (W) {
			if (zt.current = !0, B === t) {
				rn && U && mn(t) && (P(), Et?.(t));
				return;
			}
			It(n, { availableBonuses: N(t, { amount: f(w) }) }), k && k(t);
			return;
		}
		if (It(n, { availableBonuses: N(t, { amount: f(w) }) }), k && k(t), l(S) && j(t) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		N,
		j,
		mn,
		U,
		rn,
		W,
		L,
		H,
		w,
		P,
		y,
		Et,
		k,
		I,
		B,
		It,
		S
	]), _n = p((e) => {
		let t = u(e, w), n = {
			paymentTypeName: d(e),
			method: T,
			amount: t
		};
		if (et(Ot, n)) return Ot.values;
		if (et(Dt, n)) return Dt.values;
	}, [
		Ot,
		w,
		T,
		Dt
	]), vn = p((e, t) => {
		if (H(e)) return;
		let n = ce(e), r = u(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = d(e), o = N(e, { amount: f(r) });
		if (A((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: Ee(e.selectedBonusCode, o),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: T,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), l(S) && j(e) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		N,
		j,
		w,
		H,
		T,
		y,
		A,
		S
	]), yn = p((e, t) => {
		let n = ce(e), r = u(e, w, t.values), i = {
			paymentTypeName: d(e),
			method: T,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		A((e) => We(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		A
	]), bn = p((e, t) => {
		Ht((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), xn = Bt?.submit, Z = !Y && !X || F.paymentTypeName === V, Sn = p(() => {
		if (L) return;
		if (Y || X) return Z ? xn?.onClick() : void 0;
		if (!B || !C) return;
		let e = d(B);
		if (l(S) && j(B) > 0) {
			y({ to: "/bonus" });
			return;
		}
		y({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		xn,
		X,
		j,
		Z,
		L,
		y,
		B,
		C,
		Y,
		S
	]), Cn = !!xn?.visible, Q = (Y || X) && Z && !!xn?.loading, wn = Y || X, Tn = wn ? L || !G || !Z || !Cn || !!xn?.disabled : L || !G, En = X || hn ? v(T === e.PAYOUT ? "cta.payout" : "cta.payin") : Zt, Dn = m(() => R ? /* @__PURE__ */ h(te, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: Q || L,
		onClick: z,
		label: Jt
	}, "cashier-pts-back") : null, [
		Q,
		Jt,
		R,
		z,
		L
	]), On = m(() => !W || Pt || I.length === 0 ? null : /* @__PURE__ */ h(te, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			Sn();
		},
		disabled: Tn,
		loading: Q,
		label: En
	}, "cashier-pts-continue"), [
		Q,
		Tn,
		En,
		Sn,
		Pt,
		W,
		I.length
	]);
	tt(R && !L && !Q ? z : void 0);
	let kn = m(() => Dn ? [Dn] : [], [Dn]), An = m(() => On ? [On] : [], [On]), jn = m(() => [...kn, ...An], [kn, An]), Mn = m(() => Ut ? kn : [], [Ut, kn]), Nn = m(() => O ? jn : U ? Mn : [], [
		Mn,
		U,
		jn,
		O
	]), Pn = p((e) => {
		let t = d(e), n = J(e, { hasVisibleInlineContent: q(e) }), r = _n(e), i = u(e, w, r), a = re(S) && M(e, { amount: f(i) }).length > 0 ? /* @__PURE__ */ h(qe, {
			paymentType: e,
			amount: i
		}) : null, ee = !!a && fn(e), s = !O && t === V, c = !!(a && s), l = !ie(e);
		return /* @__PURE__ */ ct("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: o("flex min-w-0 flex-col", l && "px-0.5", c ? "gap-2.5" : "gap-2"),
			children: [
				!ee && a,
				/* @__PURE__ */ h(Ye, {
					paymentType: e,
					selectionId: t,
					amountValue: w,
					hideAmountField: en,
					presentedAmountError: t === V ? K : void 0,
					renderAfterAmountField: ee ? a : void 0,
					onActionsChange: Vt,
					onPromptStateChange: bn,
					onPreparedValues: vn,
					onValuesChange: yn,
					valueOverrides: r,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: s && !c,
					animateEntrance: !1
				}, t),
				s && /* @__PURE__ */ h(ze, {
					domScope: "route-payment-types-accordion-actions",
					items: An,
					adaptive: !1
				})
			]
		});
	}, [
		An,
		M,
		_n,
		vn,
		bn,
		yn,
		q,
		w,
		K,
		J,
		V,
		en,
		fn,
		S,
		O
	]), Fn = p((e) => {
		let t = ln(e);
		return t.fields.length === 0 && d(e) !== V ? null : /* @__PURE__ */ h(Ke, {
			summaryFields: t.fields,
			merchantElements: d(e) === V,
			rowVariants: t.rowVariants
		});
	}, [ln, V]), In = p((e) => ({ amount: f(u(e, w, _n(e))) }), [_n, w]), Ln = m(() => {
		let e = Le({ translateKey: v });
		if (!G) return e;
		if (K) return {
			...e,
			legacyTitle: K,
			preferLegacyTitle: !0,
			titleKey: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ h(ke, {}),
			tone: "danger"
		};
		if (Y) {
			let t = F.paymentTypeName === V;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ h(ke, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return Ve({ translateKey: v });
		}
		return {
			legacyTitle: v("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: Qt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: Qt?.values,
			icon: /* @__PURE__ */ h(_e, {})
		};
	}, [
		F,
		G,
		K,
		Y,
		Qt,
		V,
		v
	]);
	He("bottom", Nn, Nn.length > 0, { reserveSpace: O }), Be({
		onBack: R && !L ? z : void 0,
		backKey: "Backspace"
	}), at(() => {
		if (x && gt || !b || !c(_t) || W || !C) return;
		let e = je(I, C);
		if (!e || H(e)) return;
		let t = d(e);
		if (l(S) && j(e) > 0) {
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
		x,
		gt,
		_t,
		W,
		j,
		H,
		S
	]);
	let { createAction: Rn, revision: zn } = ne({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), Bn = m(() => I.flatMap((e) => {
		let t = d(e), n = ve(e), r = Pe({
			paymentType: e,
			id: t,
			label: n ? Me(n) : ht(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: jt,
			minimumLabel: _("field.limits.min.label"),
			maximumLabel: _("field.limits.max.label"),
			selected: t === V,
			disabled: H(e),
			unavailable: Oe(e)
		});
		return r ? [r] : [];
	}), [
		E,
		jt,
		H,
		I,
		_,
		ht,
		V
	]), $ = wn, Vn = !$ || Z && !!Bt, Hn = $ && !Vn ? "protected-surface-not-ready" : Tn ? "invalid-state" : void 0, Un = m(() => ({
		screen: "paymentTypes",
		revision: zn,
		busy: L || Q,
		method: T,
		title: _("cta.choose_payment_type"),
		continueLabel: _("cta.continue"),
		backLabel: _("cta.back"),
		paymentTypes: Bn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: Vn,
		...$ ? { protectedSurfaceLabel: _(Ne) } : {},
		canContinue: !Tn
	}), [
		Q,
		Tn,
		L,
		T,
		Bn,
		_,
		Vn,
		$,
		zn
	]), Wn = m(() => ({
		selectPaymentType: Rn("selectPaymentType", gn, {
			busy: L,
			validate: (e) => Bn.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: Rn("continue", Sn, {
			busy: L || Q,
			unavailableReason: Hn
		}),
		goBack: Rn("goBack", z, {
			busy: L || Q,
			unavailableReason: R ? void 0 : "invalid-state"
		})
	}), [
		Q,
		R,
		Hn,
		Rn,
		z,
		Sn,
		gn,
		L,
		Bn
	]);
	if (Pt || I.length === 0) return /* @__PURE__ */ h(rt, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let Gn = (e) => /* @__PURE__ */ ct("div", {
		className: o(g.className("route-payment-types-content"), "px-1.5 @sm:px-3", O ? "pb-3 @md:pb-4" : "pb-4", ut),
		children: [
			/* @__PURE__ */ ct("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: o(g.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5 @md:gap-2"),
				children: [
					e?.top,
					(!U || !B) && /* @__PURE__ */ h(Ze, {
						summaryFields: [],
						merchantElements: !0,
						onlyMerchantElements: !0
					}),
					on && /* @__PURE__ */ h(qe, {
						placement: "payment-list",
						paymentType: B,
						paymentTypes: I,
						amount: B ? u(B, w) : w
					}),
					U ? /* @__PURE__ */ h(Xe, {
						paymentTypes: I,
						domScope: "route-payment-types",
						selectedPaymentType: C,
						onSelect: gn,
						renderPanel: Pn,
						renderFooter: Fn,
						hasPanel: mn,
						hasPanelBody: pn,
						collapsible: rn,
						renderActions: cn,
						isPaymentTypeDisabled: H,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						hoverMode: W ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: In
					}) : /* @__PURE__ */ h($e, {
						paymentTypes: I,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: W,
						selectedPaymentType: C,
						onSelect: gn,
						renderActions: cn,
						isPaymentTypeDisabled: H,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						showMeta: !0
					})
				]
			}),
			e?.bottom,
			U ? !O && /* @__PURE__ */ h(ze, {
				domScope: "route-payment-types-back",
				items: kn,
				onFallbackActiveChange: Wt
			}) : !O && /* @__PURE__ */ h("div", {
				"data-slot": "route-payment-types-action-stack",
				className: o(g.className("route-payment-types-action-stack"), Gt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ h(Re, {
					domScope: "route-payment-types-actions",
					items: jn,
					fixed: !1,
					onFallbackActiveChange: Kt
				})
			}),
			Rt
		]
	});
	return /* @__PURE__ */ h(ae, {
		id: "paymentTypes",
		bonusPreviewOwned: !!(on || U && G && B && pn(B) && re(S) && M(B, In(B)).length > 0),
		model: Un,
		actions: Wn,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ h(Te, {
			id: g.id("route-payment-types"),
			className: g.className("route-payment-types"),
			title: vt || K ? void 0 : v("cta.choose_payment_type"),
			header: vt || K ? /* @__PURE__ */ h("div", {
				role: K ? "alert" : void 0,
				children: /* @__PURE__ */ h(Ue, {
					forceVisible: !!K,
					content: Ln,
					className: lt
				})
			}) : void 0,
			fitted: !0,
			stickyHeader: !0,
			children: e
		}),
		protectedContent: $ ? Gn() : void 0,
		children: (e) => Gn(e)
	});
}
var g = () => /* @__PURE__ */ h(rt, {
	text: "payment.no_pts_found",
	presentationScreen: "empty"
});
//#endregion
export { mt as PtsView, g as errorComponent };
