/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierMethods as e } from "./types/CashierConfig.js";
import { N as t, P as n, dt as r, j as i, ut as a } from "./purchase-Bc_pT4mi.js";
import { A as o, Fr as s, Gt as ee, Ir as te, Jt as ne, Mr as re, Pr as c, Rr as ie, U as ae, _r as l, a as oe, ar as se, cr as u, ct as ce, da as le, dn as ue, dr as de, ea as fe, ft as pe, h as me, hn as he, i as ge, ir as _e, la as ve, lr as ye, mr as be, n as xe, na as d, or as Se, pa as Ce, pr as we, rr as Te, s as Ee, sa as De, sn as Oe, sr as ke, t as Ae, ta as je, u as Me, ua as Ne, ur as Pe, vn as Fe, vr as Ie, yr as Le, z as Re } from "./usePaymentSelection-ikQnuCZA.js";
import { A as ze, B as Be, C as Ve, D as He, O as Ue, R as We, S as Ge, a as Ke, d as qe, et as Je, g as Ye, h as Xe, i as Ze, l as Qe, m as $e, mt as et, n as tt, nt, p as rt, pt as it, r as at, t as ot, z as st } from "./inlinePaymentSubmit-D-34_gib.js";
import { t as ct } from "./_method-B9EK1dPY.js";
import { a as lt, i as ut, t as dt } from "./StatusText-DqwaY5yi.js";
import { useCallback as f, useContext as ft, useEffect as pt, useMemo as p, useRef as mt, useState as ht } from "react";
import { jsx as m, jsxs as gt } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var _t = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", vt = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", yt = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", bt = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, xt = (e) => typeof e == "string" ? e : e.baseName;
function St() {
	let { paymentTypes: e, sections: t } = ct.useLoaderData();
	return /* @__PURE__ */ m(h, {
		loaderPaymentTypes: e,
		loaderSections: t
	});
}
function h({ loaderPaymentTypes: ct = [], loaderSections: St }) {
	let h = pe(), { resolveTextKey: g, resolveTextKeys: Ct, translateKey: _ } = he(), v = o(), { uiComboView: y, lockAmount: b, entryDecision: wt, uiComboView__PaymentTypes: Tt, uiInteractivePrompts: Et, uiPaymentConfirmView: Dt, uiBonusesStyle: x, uiShowFees: S, uiListStyle: Ot, uiPaymentTypesSort: kt, selectedPaymentType: C, initialAmount: w, method: T, currency: E, currencyFormatOptions: At, user: D, locale: O, uiAccountDelete: jt, uiListSelectable: Mt, uiFixedControls: k, uiPreselectedPaymentType: Nt, onPaymentTypeSelected: A, onPaymentTypeDeselected: Pt, paymentFormDraft: Ft, comboViewFormDraft: It, resetFlowOnBack: Lt, setCashierState: j } = ft(Fe), { currencyFormatter: Rt, formatCurrencyValue: zt, formatDisplayValue: Bt } = ce(), Vt = b ? it(w, E, O, At) : void 0, { paymentTypesList: Ht, paymentTypeGroups: Ut, hasPaymentTypesResponse: Wt, isError: Gt } = oe(), { getBonusCountForPaymentType: M, getBonusAvailabilityForPaymentType: N, getAvailableBonusesForPaymentType: P } = ge(), Kt = p(() => De(Rt), [Rt]), { selectPaymentType: qt, clearPaymentSelection: F } = xe(), { requestAccountDelete: Jt, actionConfirmationModal: Yt } = Qe(), Xt = mt(!1), [Zt, Qt] = ht(null), [I, $t] = ht({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [en, tn] = ht(!1), [nn, rn] = ht(!1), an = p(() => te(ct, St, kt), [
		ct,
		St,
		kt
	]), on = p(() => an.groups?.map(({ nameKey: e, ...t }) => ({
		...t,
		label: g(e)
	})), [an.groups, g]), sn = Wt ? Ut : on, L = Wt ? Ht : an.paymentTypes, R = me(), cn = Ee({
		uiComboView: y,
		lockAmount: b,
		method: T
	}), ln = _("cta.back"), { canGoBack: z, handleBack: un } = ut({
		defaultRoute: cn,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !Lt,
		replace: Lt || !y
	});
	pt(() => {
		Lt && j((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Lt, j]);
	let dn = y && !we(Tt), B = f(() => {
		R || (dn && F(), un());
	}, [
		F,
		un,
		R,
		dn
	]), fn = _("cta.continue"), V = p(() => ie(L, C), [L, C]), H = V ? c(V) : C, U = f((e) => {
		let t = l(e, w), n = {
			paymentTypeName: c(e),
			method: T,
			amount: t
		};
		if (Ve(It, n)) return It.values;
		if (Ve(Ft, n)) return Ft.values;
	}, [
		It,
		w,
		T,
		Ft
	]), pn = f((e) => Le(e, w, {
		method: T,
		user: D,
		values: U(e)
	}), [
		U,
		w,
		T,
		D
	]), mn = p(() => {
		if (!V || !S || !bt(V.fee)) return null;
		let t = yt(V.fee, Bt);
		if (!t) return null;
		let n = T === e.PAYOUT, r = {
			fee: t,
			method: _(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(xt(O))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return V.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : V.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Bt,
		O,
		T,
		V,
		_,
		S
	]), hn = (y || b) && (w.length > 0 || b), gn = y && a(w), _n = gn ? w : "", W = f((e) => {
		if (s(e)) return !0;
		if (!hn) return !1;
		let t = pn(e);
		return $e(t, b);
	}, [
		pn,
		b,
		hn
	]), vn = V ? W(V) : !1, G = ke(Ot), yn = de(Ot), bn = Pe(x), xn = bn, K = Mt || G || bn, Sn = !!V && !vn, Cn = Ie(L, w, {
		method: T,
		user: D
	}), wn = V ? pn(V) : Cn.assessment, q = (() => {
		if (hn) return rt(wn, _, (e) => it(e, E, O, At), {
			lockAmount: b,
			locale: O,
			formatRange: (e, t) => et(e, t, E, O, At),
			hasAmountlessAlternative: !V && Cn.hasAmountlessMethods
		});
	})(), Tn = _("account.delete.title"), En = f((e) => jt && e.accountId ? /* @__PURE__ */ m(Oe, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Tn,
		disabled: R,
		onClick: () => {
			Jt(e);
		},
		iconOnly: !0,
		label: Tn,
		leadingIcon: /* @__PURE__ */ m(ne, {})
	}) : null, [
		Tn,
		R,
		Jt,
		jt
	]), Dn = f((t) => {
		let n = l(t, w), i = je(T, D, t.fee), a = fe(n, t.limits, { maxBoundary: i }), o = tt(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), s = S ? ve(t.fee, r(n) || "0", {
			feeCurrencyFormatter: Kt,
			formatCurrencyValue: zt
		}) : null, ee = T === e.PAYOUT ? le(t.fee, r(n) || "0", E) : null, te = T === e.PAYIN && S ? Ne(t.fee, r(n) || "0", E) : null, ne = T === e.PAYOUT ? Ce(o, [s, ee]) : o, re = T === e.PAYIN ? [s, te].filter((e) => e !== null) : [], c = i !== null && a.value !== null && a.value > i ? { "withdrawable-balance": "danger" } : {};
		return {
			fields: [
				...b && be(t) ? [{
					id: "amount",
					label: "field.amount.label",
					value: {
						value: n,
						currency: E
					}
				}] : [],
				...ne,
				...re
			],
			rowVariants: c
		};
	}, [
		E,
		Kt,
		zt,
		w,
		b,
		T,
		S,
		D
	]), J = f((e) => Se(e, _n), [_n]), Y = f((e, { hasVisibleInlineContent: t }) => ot({
		uiPaymentConfirmView: Dt,
		hasPendingStep: u(x) && M(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		M,
		x,
		Dt
	]), On = f((e) => !Te(e) && Y(e, { hasVisibleInlineContent: !1 }).action === "submit", [Y]), kn = f((e) => J(e) && Y(e, { hasVisibleInlineContent: !0 }).action === "submit", [J, Y]), An = f((e) => !gn && be(e), [gn]), jn = f((e) => Te(e) || !b && J(e) || se(e) || !k || ye(x) && !(b && An(e)) && N(e).length > 0, [
		N,
		J,
		b,
		An,
		k,
		x
	]), Mn = f((e) => jn(e) || J(e) || Dn(e).fields.length > 0 || On(e), [
		On,
		Dn,
		jn,
		J
	]), X = !!(G && V && J(V)), Z = !!(G && V && On(V)), Nn = !!(G && V && kn(V));
	pt(() => {
		if (!K || Xt.current || C || !Nt) return;
		let e = ie(L, Nt);
		e && !W(e) && qt(c(e), { availableBonuses: P(e, { amount: d(w) }) });
	}, [
		P,
		w,
		L,
		qt,
		C,
		K,
		W,
		Nt
	]), pt(() => {
		R || vn && F();
	}, [
		F,
		R,
		vn
	]);
	let Pn = f((e) => {
		if (R) return;
		let t = ie(L, e);
		if (!t || W(t)) return;
		let n = c(t);
		if (K) {
			if (Xt.current = !0, V === t) {
				yn && G && Mn(t) && (F(), Pt?.(t));
				return;
			}
			qt(n, { availableBonuses: P(t, { amount: d(w) }) }), A && A(t);
		} else qt(n, { availableBonuses: P(t, { amount: d(w) }) }), A && A(t), u(x) && M(t) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		P,
		M,
		Mn,
		G,
		yn,
		K,
		R,
		W,
		w,
		F,
		v,
		Pt,
		A,
		L,
		V,
		qt,
		x
	]), Fn = f((e, t) => {
		if (W(e)) return;
		let n = be(e), r = l(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = c(e), o = P(e, { amount: d(r) });
		j((e) => ({
			...e,
			selectedPaymentType: a,
			selectedBonusCode: Ae(e.selectedBonusCode, o),
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: a,
				method: T,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), u(x) && M(e) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		P,
		M,
		w,
		W,
		T,
		v,
		j,
		x
	]), In = f((e, t) => {
		let n = be(e), r = l(e, w, t.values), i = {
			paymentTypeName: c(e),
			method: T,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		j((e) => Ge(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		j
	]), Ln = f((e, t) => {
		$t((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Rn = Zt?.submit, zn = !X && !Z || I.paymentTypeName === H, Bn = f(() => {
		if (R) return;
		if (X || Z) return zn ? Rn?.onClick() : void 0;
		if (!V || !C) return;
		let e = c(V);
		u(x) && M(V) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		Rn,
		Z,
		M,
		zn,
		R,
		v,
		V,
		C,
		X,
		x
	]), Vn = !!Rn?.visible, Q = (X || Z) && zn && !!Rn?.loading, Hn = X || Z, Un = Hn ? R || !Sn || !zn || !Vn || !!Rn?.disabled : R || !Sn, Wn = Z || Nn ? _(T === e.PAYOUT ? "cta.payout" : "cta.payin") : fn, Gn = p(() => z ? /* @__PURE__ */ m(Oe, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: Q || R,
		onClick: B,
		label: ln
	}, "cashier-pts-back") : null, [
		Q,
		ln,
		z,
		B,
		R
	]), Kn = p(() => !K || Gt || L.length === 0 ? null : /* @__PURE__ */ m(Oe, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			Bn();
		},
		disabled: Un,
		loading: Q,
		label: Wn
	}, "cashier-pts-continue"), [
		Q,
		Un,
		Wn,
		Bn,
		Gt,
		K,
		L.length
	]);
	lt(z && !R && !Q ? B : void 0);
	let qn = p(() => Gn ? [Gn] : [], [Gn]), Jn = p(() => Kn ? [Kn] : [], [Kn]), Yn = p(() => [...qn, ...Jn], [qn, Jn]), Xn = p(() => en ? qn : [], [en, qn]), Zn = p(() => k ? Yn : G ? Xn : [], [
		Xn,
		G,
		Yn,
		k
	]), Qn = f((e) => {
		let t = c(e), n = Y(e, { hasVisibleInlineContent: J(e) }), r = U(e), i = l(e, w, r), a = ye(x) && N(e, { amount: d(i) }).length > 0 ? /* @__PURE__ */ m(Ke, {
			paymentType: e,
			amount: i
		}) : null, o = !!a && An(e), s = !k && t === H, ee = !!(a && s), te = !_e(e);
		return /* @__PURE__ */ gt("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: ue("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!o && a,
				/* @__PURE__ */ m(Ye, {
					paymentType: e,
					selectionId: t,
					amountValue: w,
					hideAmountField: gn,
					presentedAmountError: t === H ? q : void 0,
					renderAfterAmountField: o ? a : void 0,
					onActionsChange: Qt,
					onPromptStateChange: Ln,
					onPreparedValues: Fn,
					onValuesChange: In,
					valueOverrides: r,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: n.submitMode,
					reserveTrailingActionSpace: s && !ee,
					animateEntrance: !1
				}, t),
				s && /* @__PURE__ */ m(st, {
					domScope: "route-payment-types-accordion-actions",
					items: Jn,
					adaptive: !1
				})
			]
		});
	}, [
		Jn,
		N,
		U,
		Fn,
		Ln,
		In,
		J,
		w,
		q,
		Y,
		H,
		gn,
		An,
		x,
		k
	]), $n = f((e) => {
		let t = Dn(e);
		return t.fields.length === 0 && c(e) !== H ? null : /* @__PURE__ */ m(Xe, {
			amountDisplay: Vt,
			summaryFields: t.fields,
			merchantElements: c(e) === H,
			rowVariants: t.rowVariants
		});
	}, [
		Vt,
		Dn,
		H
	]), er = f((e) => ({ amount: d(l(e, w, U(e))) }), [U, w]), tr = p(() => {
		let e = Ue({ translateKey: _ });
		if (q) return {
			...e,
			legacyTitle: q,
			preferLegacyTitle: !0,
			titleKey: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ m(ne, {}),
			tone: "danger"
		};
		if (!Sn) return e;
		if (X) {
			let t = I.paymentTypeName === H;
			if (t && I.errorMessage) return {
				...e,
				legacyTitle: I.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ m(ne, {}),
				tone: "danger"
			};
			if (!t || !I.isComplete) return ze({ translateKey: _ });
		}
		return {
			legacyTitle: _("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: mn?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: mn?.values,
			icon: /* @__PURE__ */ m(ee, {})
		};
	}, [
		I,
		Sn,
		q,
		X,
		mn,
		H,
		_
	]);
	Je("bottom", Zn, Zn.length > 0, { reserveSpace: k }), Be({
		onBack: z && !R ? B : void 0,
		backKey: "Backspace"
	}), pt(() => {
		if (b && wt || !y || !we(Tt) || K || !C) return;
		let e = ie(L, C);
		if (!e || W(e)) return;
		let t = c(e);
		u(x) && M(e) > 0 ? v({
			to: "/bonus",
			replace: !0
		}) : v({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		v,
		L,
		C,
		y,
		b,
		wt,
		Tt,
		K,
		M,
		W,
		x
	]);
	let { createAction: nr, revision: rr } = ae({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), ir = p(() => L.flatMap((e) => {
		let r = c(e), i = re(e), a = n({
			paymentType: e,
			id: r,
			label: i ? t(i) : Ct(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: zt,
			minimumLabel: g("field.limits.min.label"),
			maximumLabel: g("field.limits.max.label"),
			selected: r === H,
			disabled: W(e),
			unavailable: s(e)
		});
		return a ? [a] : [];
	}), [
		E,
		zt,
		W,
		L,
		g,
		Ct,
		H
	]), $ = Hn, ar = !$ || zn && !!Zt, or = $ && !ar ? "protected-surface-not-ready" : Un ? "invalid-state" : void 0, sr = p(() => ({
		screen: "paymentTypes",
		revision: rr,
		busy: R || Q,
		method: T,
		title: g("cta.choose_payment_type"),
		continueLabel: g("cta.continue"),
		backLabel: g("cta.back"),
		paymentTypes: ir,
		paymentTypeGroups: sn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: ar,
		...$ ? { protectedSurfaceLabel: g(i) } : {},
		canContinue: !Un
	}), [
		Q,
		Un,
		R,
		T,
		ir,
		sn,
		g,
		ar,
		$,
		rr
	]), cr = p(() => ({
		selectPaymentType: nr("selectPaymentType", Pn, {
			busy: R,
			validate: (e) => ir.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: nr("continue", Bn, {
			busy: R || Q,
			unavailableReason: or
		}),
		goBack: nr("goBack", B, {
			busy: R || Q,
			unavailableReason: z ? void 0 : "invalid-state"
		})
	}), [
		Q,
		z,
		or,
		nr,
		B,
		Bn,
		Pn,
		R,
		ir
	]);
	if (Gt || L.length === 0) return /* @__PURE__ */ m(dt, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let lr = (e) => /* @__PURE__ */ gt("div", {
		className: ue(h.className("route-payment-types-content"), "px-1.5 @sm:px-3", k ? "pb-3 @md:pb-4" : "pb-4", vt),
		children: [
			/* @__PURE__ */ m(at, {}),
			/* @__PURE__ */ gt("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: ue(h.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5 @md:gap-2"),
				children: [
					e?.top,
					(!G || !V) && /* @__PURE__ */ m(nt, {
						summaryFields: [],
						merchantElements: !0,
						onlyMerchantElements: !0
					}),
					xn && /* @__PURE__ */ m(Ke, {
						placement: "payment-list",
						paymentType: V,
						paymentTypes: L,
						amount: V ? l(V, w) : w
					}),
					G ? /* @__PURE__ */ m(Ze, {
						paymentTypes: L,
						paymentTypeGroups: sn,
						domScope: "route-payment-types",
						selectedPaymentType: C,
						onSelect: Pn,
						renderPanel: Qn,
						renderFooter: $n,
						hasPanel: Mn,
						hasPanelBody: jn,
						collapsible: yn,
						renderActions: En,
						isPaymentTypeDisabled: W,
						interactionLocked: R,
						preserveDisabledSelection: !0,
						hoverMode: K ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: er
					}) : /* @__PURE__ */ m(qe, {
						paymentTypes: L,
						paymentTypeGroups: sn,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: K,
						selectedPaymentType: C,
						onSelect: Pn,
						renderActions: En,
						isPaymentTypeDisabled: W,
						interactionLocked: R,
						preserveDisabledSelection: !0,
						showMeta: !0
					})
				]
			}),
			e?.bottom,
			G ? !k && /* @__PURE__ */ m(st, {
				domScope: "route-payment-types-back",
				items: qn,
				onFallbackActiveChange: tn
			}) : !k && /* @__PURE__ */ m("div", {
				"data-slot": "route-payment-types-action-stack",
				className: ue(h.className("route-payment-types-action-stack"), nn ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ m(We, {
					domScope: "route-payment-types-actions",
					items: Yn,
					fixed: !1,
					onFallbackActiveChange: rn
				})
			}),
			Yt
		]
	});
	return /* @__PURE__ */ m(Re, {
		id: "paymentTypes",
		bonusPreviewOwned: !!(xn || G && Sn && V && jn(V) && ye(x) && N(V, er(V)).length > 0),
		model: sr,
		actions: cr,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ m(Me, {
			id: h.id("route-payment-types"),
			className: h.className("route-payment-types"),
			title: Et || q ? void 0 : _("cta.choose_payment_type"),
			header: Et || q ? /* @__PURE__ */ m("div", {
				role: q ? "alert" : void 0,
				children: /* @__PURE__ */ m(He, {
					forceVisible: !!q,
					content: tr,
					className: _t
				})
			}) : void 0,
			fitted: !0,
			stickyHeader: !0,
			children: e
		}),
		protectedContent: $ ? lr() : void 0,
		children: (e) => lr(e)
	});
}
//#endregion
export { h as PtsView, St as component };
