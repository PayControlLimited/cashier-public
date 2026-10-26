/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierMethods as e } from "./types/CashierConfig.js";
import { N as t, P as n, dt as r, j as i, ut as a } from "./purchase-CcLuoaCq.js";
import { Dr as o, E as s, Fi as c, Ii as ee, Ji as te, K as ne, Ki as re, Li as ie, Mn as ae, Or as oe, Ot as se, Ri as ce, Sn as le, Tn as ue, Tr as de, Wi as fe, Xi as pe, _ as me, a as he, at as ge, b as _e, c as ve, d as ye, f as be, g as xe, h as l, j as Se, kn as Ce, kr as we, ln as Te, m as Ee, n as De, o as Oe, on as ke, p as Ae, qi as je, t as Me, tt as Ne, u as Pe, v as Fe, w as u, wt as Ie, x as d, zi as f } from "./usePaymentSelection-BT8H9hee.js";
import { $ as Le, E as Re, F as ze, I as Be, L as Ve, O as He, T as Ue, Z as We, b as Ge, c as Ke, f as qe, i as Je, n as Ye, p as Xe, r as Ze, t as Qe, u as $e, x as et } from "./inlinePaymentSubmit-B9nyF_92.js";
import { a as tt, i as nt, t as rt } from "./StatusText-CnBd38Fg.js";
import { useCallback as p, useContext as it, useEffect as at, useMemo as m, useRef as ot, useState as st } from "react";
import { jsx as h, jsxs as ct } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var lt = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", ut = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", dt = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", ft = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, pt = (e) => typeof e == "string" ? e : e.baseName;
function mt({ loaderPaymentTypes: mt = [] }) {
	let g = se(), { resolveTextKey: _, resolveTextKeys: ht, translateKey: v } = Ce(), y = ne(), { uiComboView: b, lockAmount: x, entryDecision: gt, uiComboView__PaymentTypes: _t, uiInteractivePrompts: vt, uiPaymentConfirmView: yt, uiBonusesStyle: S, uiShowFees: bt, uiListStyle: xt, selectedPaymentType: C, initialAmount: w, method: T, currency: E, user: D, locale: St, uiAccountDelete: Ct, uiListSelectable: wt, uiFixedControls: O, uiPreselectedPaymentType: Tt, onPaymentTypeSelected: Et, onPaymentTypeDeselected: Dt, paymentFormDraft: Ot, comboViewFormDraft: kt, resetFlowOnBack: At, setCashierState: k } = it(ae), { currencyFormatter: jt, formatCurrencyValue: Mt, formatDisplayValue: Nt } = Ie(), { paymentTypesList: Pt, isError: Ft } = Oe(), { getBonusCountForPaymentType: A, getBonusAvailabilityForPaymentType: j, getAvailableBonusesForPaymentType: M } = he(), It = m(() => fe(jt), [jt]), { selectPaymentType: N, clearPaymentSelection: P } = De(), { requestAccountDelete: Lt, actionConfirmationModal: Rt } = Ke(), zt = ot(!1), [Bt, Vt] = st(null), [F, Ht] = st({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [Ut, Wt] = st(!1), [Gt, Kt] = st(!1), I = Pt.length > 0 ? Pt : mt, L = Se(), qt = ve({
		uiComboView: b,
		lockAmount: x,
		method: T
	}), Jt = v("cta.back"), { canGoBack: R, handleBack: Yt } = nt({
		defaultRoute: qt,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !At,
		replace: At || !b
	});
	at(() => {
		At && k((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [At, k]);
	let Xt = b && !_e(_t), z = p(() => {
		L || (Xt && P(), Yt());
	}, [
		P,
		Yt,
		L,
		Xt
	]), Zt = v("cta.continue"), B = m(() => we(I, C), [I, C]), V = B ? o(B) : C, Qt = m(() => {
		if (!B || !bt || !ft(B.fee)) return null;
		let t = dt(B.fee, Nt);
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
		Nt,
		St,
		T,
		B,
		v,
		bt
	]), $t = b && a(w), H = b && a(w), en = H ? w : "", U = p((e) => oe(e) ? !0 : $t ? ie(w, e.limits, { maxBoundary: ce(T, D, e.fee) }).isOutOfRange : !1, [
		w,
		T,
		$t,
		D
	]), tn = B ? U(B) : !1, W = Ee(xt), nn = Fe(xt), rn = me(S), an = rn, G = wt || W || rn, K = !!B && !tn, q = K && x && B && d(B) ? c(ee(w, B.limits, { maxBoundary: ce(T, D, B.fee) }), v, Mt) : void 0, on = v("account.delete.title"), sn = p((e) => Ct && e.accountId ? /* @__PURE__ */ h(le, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": on,
		disabled: L,
		onClick: () => {
			Lt(e);
		},
		iconOnly: !0,
		label: on,
		leadingIcon: /* @__PURE__ */ h(Te, {})
	}) : null, [
		on,
		L,
		Lt,
		Ct
	]), cn = p((t) => {
		let n = u(t, w), i = f(n) ?? 0, a = ce(T, D, t.fee), o = ie(n, t.limits, { maxBoundary: a }), s = Ye(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), c = bt ? re(t.fee, r(n) || "0", {
			feeCurrencyFormatter: It,
			formatCurrencyValue: Mt
		}) : null, ee = T === e.PAYOUT ? te(t.fee, r(n) || "0", E) : null, ne = T === e.PAYIN && bt ? je(t.fee, r(n) || "0", E) : null, ae = T === e.PAYOUT ? pe(s, [c, ee]) : s, oe = T === e.PAYIN ? [c, ne].filter((e) => e !== null) : [], se = a !== null && o.value !== null && o.value > a ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [
				...x && d(t) ? [{
					id: "amount",
					label: "field.amount.label",
					value: {
						value: i,
						currency: E
					}
				}] : [],
				...ae,
				...oe
			],
			rowVariants: se
		};
	}, [
		E,
		It,
		Mt,
		w,
		x,
		T,
		bt,
		D
	]), J = p((e) => Ae(e, en), [en]), Y = p((e, { hasVisibleInlineContent: t }) => Qe({
		uiPaymentConfirmView: yt,
		hasPendingStep: l(S) && A(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		A,
		S,
		yt
	]), ln = p((e) => !Pe(e) && Y(e, { hasVisibleInlineContent: !1 }).action === "submit", [Y]), un = p((e) => J(e) && Y(e, { hasVisibleInlineContent: !0 }).action === "submit", [J, Y]), dn = p((e) => !H && d(e), [H]), fn = p((e) => Pe(e) || !x && J(e) || be(e) || !O || xe(S) && !(x && dn(e)) && j(e).length > 0, [
		j,
		J,
		x,
		dn,
		O,
		S
	]), pn = p((e) => fn(e) || J(e) || cn(e).fields.length > 0 || ln(e), [
		ln,
		cn,
		fn,
		J
	]), X = !!(W && B && J(B)), Z = !!(W && B && ln(B)), mn = !!(W && B && un(B));
	at(() => {
		if (!G || zt.current || C || !Tt) return;
		let e = we(I, Tt);
		e && !U(e) && N(o(e), { availableBonuses: M(e, { amount: f(w) }) });
	}, [
		M,
		w,
		I,
		N,
		C,
		G,
		U,
		Tt
	]), at(() => {
		L || tn && P();
	}, [
		P,
		L,
		tn
	]);
	let hn = p((e) => {
		if (L) return;
		let t = we(I, e);
		if (!t || U(t)) return;
		let n = o(t);
		if (G) {
			if (zt.current = !0, B === t) {
				nn && W && pn(t) && (P(), Dt?.(t));
				return;
			}
			N(n, { availableBonuses: M(t, { amount: f(w) }) }), Et && Et(t);
		} else N(n, { availableBonuses: M(t, { amount: f(w) }) }), Et && Et(t), l(S) && A(t) > 0 ? y({ to: "/bonus" }) : y({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		M,
		A,
		pn,
		W,
		nn,
		G,
		L,
		U,
		w,
		P,
		y,
		Dt,
		Et,
		I,
		B,
		N,
		S
	]), gn = p((e) => {
		let t = u(e, w), n = {
			paymentTypeName: o(e),
			method: T,
			amount: t
		};
		if (et(kt, n)) return kt.values;
		if (et(Ot, n)) return Ot.values;
	}, [
		kt,
		w,
		T,
		Ot
	]), _n = p((e, t) => {
		if (U(e)) return;
		let n = d(e), r = u(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = o(e), s = M(e, { amount: f(r) });
		k((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: Me(e.selectedBonusCode, s),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: T,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), l(S) && A(e) > 0 ? y({ to: "/bonus" }) : y({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		M,
		A,
		w,
		U,
		T,
		y,
		k,
		S
	]), vn = p((e, t) => {
		let n = d(e), r = u(e, w, t.values), i = {
			paymentTypeName: o(e),
			method: T,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		k((e) => Ge(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		k
	]), yn = p((e, t) => {
		Ht((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), bn = Bt?.submit, xn = !X && !Z || F.paymentTypeName === V, Sn = p(() => {
		if (L) return;
		if (X || Z) return xn ? bn?.onClick() : void 0;
		if (!B || !C) return;
		let e = o(B);
		l(S) && A(B) > 0 ? y({ to: "/bonus" }) : y({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		bn,
		Z,
		A,
		xn,
		L,
		y,
		B,
		C,
		X,
		S
	]), Cn = !!bn?.visible, Q = (X || Z) && xn && !!bn?.loading, wn = X || Z, Tn = wn ? L || !K || !xn || !Cn || !!bn?.disabled : L || !K, En = Z || mn ? v(T === e.PAYOUT ? "cta.payout" : "cta.payin") : Zt, Dn = m(() => R ? /* @__PURE__ */ h(le, {
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
	]), On = m(() => !G || Ft || I.length === 0 ? null : /* @__PURE__ */ h(le, {
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
		Ft,
		G,
		I.length
	]);
	tt(R && !L && !Q ? z : void 0);
	let kn = m(() => Dn ? [Dn] : [], [Dn]), An = m(() => On ? [On] : [], [On]), jn = m(() => [...kn, ...An], [kn, An]), Mn = m(() => Ut ? kn : [], [Ut, kn]), Nn = m(() => O ? jn : W ? Mn : [], [
		Mn,
		W,
		jn,
		O
	]), Pn = p((e) => {
		let t = o(e), n = Y(e, { hasVisibleInlineContent: J(e) }), r = gn(e), i = u(e, w, r), a = xe(S) && j(e, { amount: f(i) }).length > 0 ? /* @__PURE__ */ h(Je, {
			paymentType: e,
			amount: i
		}) : null, s = !!a && dn(e), c = !O && t === V, ee = !!(a && c), te = !ye(e);
		return /* @__PURE__ */ ct("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: ue("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!s && a,
				/* @__PURE__ */ h(Xe, {
					paymentType: e,
					selectionId: t,
					amountValue: w,
					hideAmountField: H,
					presentedAmountError: t === V ? q : void 0,
					renderAfterAmountField: s ? a : void 0,
					onActionsChange: Vt,
					onPromptStateChange: yn,
					onPreparedValues: _n,
					onValuesChange: vn,
					valueOverrides: r,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: c && !ee,
					animateEntrance: !1
				}, t),
				c && /* @__PURE__ */ h(Be, {
					domScope: "route-payment-types-accordion-actions",
					items: An,
					adaptive: !1
				})
			]
		});
	}, [
		An,
		j,
		gn,
		_n,
		yn,
		vn,
		J,
		w,
		q,
		Y,
		V,
		H,
		dn,
		S,
		O
	]), Fn = p((e) => {
		let t = cn(e);
		return t.fields.length === 0 && o(e) !== V ? null : /* @__PURE__ */ h(qe, {
			summaryFields: t.fields,
			merchantElements: o(e) === V,
			rowVariants: t.rowVariants
		});
	}, [cn, V]), In = p((e) => ({ amount: f(u(e, w, gn(e))) }), [gn, w]), Ln = m(() => {
		let e = Re({ translateKey: v });
		if (!K) return e;
		if (q) return {
			...e,
			legacyTitle: q,
			preferLegacyTitle: !0,
			titleKey: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ h(Te, {}),
			tone: "danger"
		};
		if (X) {
			let t = F.paymentTypeName === V;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ h(Te, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return He({ translateKey: v });
		}
		return {
			legacyTitle: v("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: Qt?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: Qt?.values,
			icon: /* @__PURE__ */ h(ke, {})
		};
	}, [
		F,
		K,
		q,
		X,
		Qt,
		V,
		v
	]);
	We("bottom", Nn, Nn.length > 0, { reserveSpace: O }), Ve({
		onBack: R && !L ? z : void 0,
		backKey: "Backspace"
	}), at(() => {
		if (x && gt || !b || !_e(_t) || G || !C) return;
		let e = we(I, C);
		if (!e || U(e)) return;
		let t = o(e);
		l(S) && A(e) > 0 ? y({
			to: "/bonus",
			replace: !0
		}) : y({
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
		G,
		A,
		U,
		S
	]);
	let { createAction: Rn, revision: zn } = ge({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), Bn = m(() => I.flatMap((e) => {
		let r = o(e), i = de(e), a = n({
			paymentType: e,
			id: r,
			label: i ? t(i) : ht(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: Mt,
			minimumLabel: _("field.limits.min.label"),
			maximumLabel: _("field.limits.max.label"),
			selected: r === V,
			disabled: U(e),
			unavailable: oe(e)
		});
		return a ? [a] : [];
	}), [
		E,
		Mt,
		U,
		I,
		_,
		ht,
		V
	]), $ = wn, Vn = !$ || xn && !!Bt, Hn = $ && !Vn ? "protected-surface-not-ready" : Tn ? "invalid-state" : void 0, Un = m(() => ({
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
		...$ ? { protectedSurfaceLabel: _(i) } : {},
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
		selectPaymentType: Rn("selectPaymentType", hn, {
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
		hn,
		L,
		Bn
	]);
	if (Ft || I.length === 0) return /* @__PURE__ */ h(rt, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let Gn = (e) => /* @__PURE__ */ ct("div", {
		className: ue(g.className("route-payment-types-content"), "px-1.5 @sm:px-3", O ? "pb-3 @md:pb-4" : "pb-4", ut),
		children: [
			/* @__PURE__ */ ct("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: ue(g.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5 @md:gap-2"),
				children: [
					e?.top,
					(!W || !B) && /* @__PURE__ */ h(Le, {
						summaryFields: [],
						merchantElements: !0,
						onlyMerchantElements: !0
					}),
					an && /* @__PURE__ */ h(Je, {
						placement: "payment-list",
						paymentType: B,
						paymentTypes: I,
						amount: B ? u(B, w) : w
					}),
					W ? /* @__PURE__ */ h(Ze, {
						paymentTypes: I,
						domScope: "route-payment-types",
						selectedPaymentType: C,
						onSelect: hn,
						renderPanel: Pn,
						renderFooter: Fn,
						hasPanel: pn,
						hasPanelBody: fn,
						collapsible: nn,
						renderActions: sn,
						isPaymentTypeDisabled: U,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						hoverMode: G ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: In
					}) : /* @__PURE__ */ h($e, {
						paymentTypes: I,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: G,
						selectedPaymentType: C,
						onSelect: hn,
						renderActions: sn,
						isPaymentTypeDisabled: U,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						showMeta: !0
					})
				]
			}),
			e?.bottom,
			W ? !O && /* @__PURE__ */ h(Be, {
				domScope: "route-payment-types-back",
				items: kn,
				onFallbackActiveChange: Wt
			}) : !O && /* @__PURE__ */ h("div", {
				"data-slot": "route-payment-types-action-stack",
				className: ue(g.className("route-payment-types-action-stack"), Gt ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ h(ze, {
					domScope: "route-payment-types-actions",
					items: jn,
					fixed: !1,
					onFallbackActiveChange: Kt
				})
			}),
			Rt
		]
	});
	return /* @__PURE__ */ h(Ne, {
		id: "paymentTypes",
		bonusPreviewOwned: !!(an || W && K && B && fn(B) && xe(S) && j(B, In(B)).length > 0),
		model: Un,
		actions: Wn,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ h(s, {
			id: g.id("route-payment-types"),
			className: g.className("route-payment-types"),
			title: vt || q ? void 0 : v("cta.choose_payment_type"),
			header: vt || q ? /* @__PURE__ */ h("div", {
				role: q ? "alert" : void 0,
				children: /* @__PURE__ */ h(Ue, {
					forceVisible: !!q,
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
