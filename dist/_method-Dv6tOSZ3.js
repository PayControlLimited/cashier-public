/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierMethods as e } from "./types/CashierConfig.js";
import { N as t, P as n, dt as r, j as i, ut as a } from "./purchase-Bc_pT4mi.js";
import { A as o, Fr as s, Gt as ee, Ir as te, Jt as ne, Mr as re, Pr as c, Rr as ie, U as ae, _r as l, a as oe, ar as se, cr as u, ct as ce, da as le, dn as ue, dr as de, ea as fe, ft as pe, h as me, hn as he, i as ge, ir as _e, la as ve, lr as ye, mr as be, n as xe, na as d, or as Se, pa as Ce, pr as we, rr as Te, s as Ee, sa as De, sn as Oe, sr as ke, t as Ae, ta as je, u as Me, ua as Ne, ur as Pe, vn as Fe, vr as Ie, yr as Le, z as Re } from "./usePaymentSelection-ikQnuCZA.js";
import { A as ze, B as Be, C as Ve, D as He, O as Ue, R as We, S as Ge, a as Ke, d as qe, et as Je, g as Ye, h as Xe, i as Ze, l as Qe, m as $e, mt as et, n as tt, nt, p as rt, pt as it, r as at, t as ot, z as st } from "./inlinePaymentSubmit-D-34_gib.js";
import { a as ct, i as lt, t as ut } from "./StatusText-DqwaY5yi.js";
import { useCallback as f, useContext as dt, useEffect as ft, useMemo as p, useRef as pt, useState as mt } from "react";
import { jsx as m, jsxs as ht } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=errorComponent
var gt = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", _t = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", vt = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", yt = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, bt = (e) => typeof e == "string" ? e : e.baseName;
function xt({ loaderPaymentTypes: xt = [], loaderSections: St }) {
	let h = pe(), { resolveTextKey: g, resolveTextKeys: Ct, translateKey: _ } = he(), v = o(), { uiComboView: y, lockAmount: b, entryDecision: wt, uiComboView__PaymentTypes: Tt, uiInteractivePrompts: Et, uiPaymentConfirmView: Dt, uiBonusesStyle: x, uiShowFees: S, uiListStyle: Ot, uiPaymentTypesSort: kt, selectedPaymentType: C, initialAmount: w, method: T, currency: E, currencyFormatOptions: At, user: D, locale: O, uiAccountDelete: jt, uiListSelectable: Mt, uiFixedControls: k, uiPreselectedPaymentType: Nt, onPaymentTypeSelected: Pt, onPaymentTypeDeselected: Ft, paymentFormDraft: It, comboViewFormDraft: Lt, resetFlowOnBack: Rt, setCashierState: A } = dt(Fe), { currencyFormatter: zt, formatCurrencyValue: Bt, formatDisplayValue: Vt } = ce(), Ht = b ? it(w, E, O, At) : void 0, { paymentTypesList: Ut, paymentTypeGroups: Wt, hasPaymentTypesResponse: Gt, isError: Kt } = oe(), { getBonusCountForPaymentType: j, getBonusAvailabilityForPaymentType: M, getAvailableBonusesForPaymentType: N } = ge(), qt = p(() => De(zt), [zt]), { selectPaymentType: Jt, clearPaymentSelection: P } = xe(), { requestAccountDelete: Yt, actionConfirmationModal: Xt } = Qe(), Zt = pt(!1), [Qt, $t] = mt(null), [F, en] = mt({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), [tn, nn] = mt(!1), [rn, an] = mt(!1), on = p(() => te(xt, St, kt), [
		xt,
		St,
		kt
	]), sn = p(() => on.groups?.map(({ nameKey: e, ...t }) => ({
		...t,
		label: g(e)
	})), [on.groups, g]), cn = Gt ? Wt : sn, I = Gt ? Ut : on.paymentTypes, L = me(), ln = Ee({
		uiComboView: y,
		lockAmount: b,
		method: T
	}), un = _("cta.back"), { canGoBack: R, handleBack: dn } = lt({
		defaultRoute: ln,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !Rt,
		replace: Rt || !y
	});
	ft(() => {
		Rt && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Rt, A]);
	let fn = y && !we(Tt), z = f(() => {
		L || (fn && P(), dn());
	}, [
		P,
		dn,
		L,
		fn
	]), pn = _("cta.continue"), B = p(() => ie(I, C), [I, C]), V = B ? c(B) : C, H = f((e) => {
		let t = l(e, w), n = {
			paymentTypeName: c(e),
			method: T,
			amount: t
		};
		if (Ve(Lt, n)) return Lt.values;
		if (Ve(It, n)) return It.values;
	}, [
		Lt,
		w,
		T,
		It
	]), mn = f((e) => Le(e, w, {
		method: T,
		user: D,
		values: H(e)
	}), [
		H,
		w,
		T,
		D
	]), hn = p(() => {
		if (!B || !S || !yt(B.fee)) return null;
		let t = vt(B.fee, Vt);
		if (!t) return null;
		let n = T === e.PAYOUT, r = {
			fee: t,
			method: _(n ? "cta.payout" : "cta.payin").toLocaleLowerCase(bt(O))
		}, i = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? i = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (i = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: i,
			values: r
		};
	}, [
		Vt,
		O,
		T,
		B,
		_,
		S
	]), gn = (y || b) && (w.length > 0 || b), _n = y && a(w), vn = _n ? w : "", U = f((e) => {
		if (s(e)) return !0;
		if (!gn) return !1;
		let t = mn(e);
		return $e(t, b);
	}, [
		mn,
		b,
		gn
	]), yn = B ? U(B) : !1, W = ke(Ot), bn = de(Ot), xn = Pe(x), Sn = xn, G = Mt || W || xn, Cn = !!B && !yn, wn = Ie(I, w, {
		method: T,
		user: D
	}), Tn = B ? mn(B) : wn.assessment, K = (() => {
		if (gn) return rt(Tn, _, (e) => it(e, E, O, At), {
			lockAmount: b,
			locale: O,
			formatRange: (e, t) => et(e, t, E, O, At),
			hasAmountlessAlternative: !B && wn.hasAmountlessMethods
		});
	})(), En = _("account.delete.title"), Dn = f((e) => jt && e.accountId ? /* @__PURE__ */ m(Oe, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": En,
		disabled: L,
		onClick: () => {
			Yt(e);
		},
		iconOnly: !0,
		label: En,
		leadingIcon: /* @__PURE__ */ m(ne, {})
	}) : null, [
		En,
		L,
		Yt,
		jt
	]), On = f((t) => {
		let n = l(t, w), i = je(T, D, t.fee), a = fe(n, t.limits, { maxBoundary: i }), o = tt(T, E, D, {
			amount: n,
			fee: t.fee,
			includeBalanceRows: !1,
			includeRemainingBalance: T === e.PAYOUT
		}), s = S ? ve(t.fee, r(n) || "0", {
			feeCurrencyFormatter: qt,
			formatCurrencyValue: Bt
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
		qt,
		Bt,
		w,
		b,
		T,
		S,
		D
	]), q = f((e) => Se(e, vn), [vn]), J = f((e, { hasVisibleInlineContent: t }) => ot({
		uiPaymentConfirmView: Dt,
		hasPendingStep: u(x) && j(e) > 0,
		hasVisibleInlineContent: t,
		hasConfirmOnlyContent: !t && (e.notifications ?? []).length > 0
	}), [
		j,
		x,
		Dt
	]), kn = f((e) => !Te(e) && J(e, { hasVisibleInlineContent: !1 }).action === "submit", [J]), An = f((e) => q(e) && J(e, { hasVisibleInlineContent: !0 }).action === "submit", [q, J]), jn = f((e) => !_n && be(e), [_n]), Mn = f((e) => Te(e) || !b && q(e) || se(e) || !k || ye(x) && !(b && jn(e)) && M(e).length > 0, [
		M,
		q,
		b,
		jn,
		k,
		x
	]), Nn = f((e) => Mn(e) || q(e) || On(e).fields.length > 0 || kn(e), [
		kn,
		On,
		Mn,
		q
	]), Y = !!(W && B && q(B)), X = !!(W && B && kn(B)), Pn = !!(W && B && An(B));
	ft(() => {
		if (!G || Zt.current || C || !Nt) return;
		let e = ie(I, Nt);
		e && !U(e) && Jt(c(e), { availableBonuses: N(e, { amount: d(w) }) });
	}, [
		N,
		w,
		I,
		Jt,
		C,
		G,
		U,
		Nt
	]), ft(() => {
		L || yn && P();
	}, [
		P,
		L,
		yn
	]);
	let Fn = f((e) => {
		if (L) return;
		let t = ie(I, e);
		if (!t || U(t)) return;
		let n = c(t);
		if (G) {
			if (Zt.current = !0, B === t) {
				bn && W && Nn(t) && (P(), Ft?.(t));
				return;
			}
			Jt(n, { availableBonuses: N(t, { amount: d(w) }) }), Pt && Pt(t);
		} else Jt(n, { availableBonuses: N(t, { amount: d(w) }) }), Pt && Pt(t), u(x) && j(t) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: n }
		});
	}, [
		N,
		j,
		Nn,
		W,
		bn,
		G,
		L,
		U,
		w,
		P,
		v,
		Ft,
		Pt,
		I,
		B,
		Jt,
		x
	]), In = f((e, t) => {
		if (U(e)) return;
		let n = be(e), r = l(e, w, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values, a = c(e), o = N(e, { amount: d(r) });
		A((e) => ({
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
		})), u(x) && j(e) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: a }
		});
	}, [
		N,
		j,
		w,
		U,
		T,
		v,
		A,
		x
	]), Ln = f((e, t) => {
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
		A((e) => Ge(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		w,
		T,
		A
	]), Rn = f((e, t) => {
		en((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), zn = Qt?.submit, Bn = !Y && !X || F.paymentTypeName === V, Vn = f(() => {
		if (L) return;
		if (Y || X) return Bn ? zn?.onClick() : void 0;
		if (!B || !C) return;
		let e = c(B);
		u(x) && j(B) > 0 ? v({ to: "/bonus" }) : v({
			to: "/pt/$id",
			params: { id: e }
		});
	}, [
		zn,
		X,
		j,
		Bn,
		L,
		v,
		B,
		C,
		Y,
		x
	]), Hn = !!zn?.visible, Z = (Y || X) && Bn && !!zn?.loading, Un = Y || X, Wn = Un ? L || !Cn || !Bn || !Hn || !!zn?.disabled : L || !Cn, Gn = X || Pn ? _(T === e.PAYOUT ? "cta.payout" : "cta.payin") : pn, Kn = p(() => R ? /* @__PURE__ */ m(Oe, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: Z || L,
		onClick: z,
		label: un
	}, "cashier-pts-back") : null, [
		Z,
		un,
		R,
		z,
		L
	]), qn = p(() => !G || Kt || I.length === 0 ? null : /* @__PURE__ */ m(Oe, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: () => {
			Vn();
		},
		disabled: Wn,
		loading: Z,
		label: Gn
	}, "cashier-pts-continue"), [
		Z,
		Wn,
		Gn,
		Vn,
		Kt,
		G,
		I.length
	]);
	ct(R && !L && !Z ? z : void 0);
	let Q = p(() => Kn ? [Kn] : [], [Kn]), Jn = p(() => qn ? [qn] : [], [qn]), Yn = p(() => [...Q, ...Jn], [Q, Jn]), Xn = p(() => tn ? Q : [], [tn, Q]), Zn = p(() => k ? Yn : W ? Xn : [], [
		Xn,
		W,
		Yn,
		k
	]), Qn = f((e) => {
		let t = c(e), n = J(e, { hasVisibleInlineContent: q(e) }), r = H(e), i = l(e, w, r), a = ye(x) && M(e, { amount: d(i) }).length > 0 ? /* @__PURE__ */ m(Ke, {
			paymentType: e,
			amount: i
		}) : null, o = !!a && jn(e), s = !k && t === V, ee = !!(a && s), te = !_e(e);
		return /* @__PURE__ */ ht("div", {
			"data-slot": "route-payment-types-accordion-panel-stack",
			className: ue("flex min-w-0 flex-col", te && "px-0.5", ee ? "gap-2.5" : "gap-2"),
			children: [
				!o && a,
				/* @__PURE__ */ m(Ye, {
					paymentType: e,
					selectionId: t,
					amountValue: w,
					hideAmountField: _n,
					presentedAmountError: t === V ? K : void 0,
					renderAfterAmountField: o ? a : void 0,
					onActionsChange: $t,
					onPromptStateChange: Rn,
					onPreparedValues: In,
					onValuesChange: Ln,
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
		M,
		H,
		In,
		Rn,
		Ln,
		q,
		w,
		K,
		J,
		V,
		_n,
		jn,
		x,
		k
	]), $n = f((e) => {
		let t = On(e);
		return t.fields.length === 0 && c(e) !== V ? null : /* @__PURE__ */ m(Xe, {
			amountDisplay: Ht,
			summaryFields: t.fields,
			merchantElements: c(e) === V,
			rowVariants: t.rowVariants
		});
	}, [
		Ht,
		On,
		V
	]), er = f((e) => ({ amount: d(l(e, w, H(e))) }), [H, w]), tr = p(() => {
		let e = Ue({ translateKey: _ });
		if (K) return {
			...e,
			legacyTitle: K,
			preferLegacyTitle: !0,
			titleKey: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ m(ne, {}),
			tone: "danger"
		};
		if (!Cn) return e;
		if (Y) {
			let t = F.paymentTypeName === V;
			if (t && F.errorMessage) return {
				...e,
				legacyTitle: F.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ m(ne, {}),
				tone: "danger"
			};
			if (!t || !F.isComplete) return ze({ translateKey: _ });
		}
		return {
			legacyTitle: _("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: hn?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: hn?.values,
			icon: /* @__PURE__ */ m(ee, {})
		};
	}, [
		F,
		Cn,
		K,
		Y,
		hn,
		V,
		_
	]);
	Je("bottom", Zn, Zn.length > 0, { reserveSpace: k }), Be({
		onBack: R && !L ? z : void 0,
		backKey: "Backspace"
	}), ft(() => {
		if (b && wt || !y || !we(Tt) || G || !C) return;
		let e = ie(I, C);
		if (!e || U(e)) return;
		let t = c(e);
		u(x) && j(e) > 0 ? v({
			to: "/bonus",
			replace: !0
		}) : v({
			to: "/pt/$id",
			params: { id: t },
			replace: !0
		});
	}, [
		v,
		I,
		C,
		y,
		b,
		wt,
		Tt,
		G,
		j,
		U,
		x
	]);
	let { createAction: nr, revision: rr } = ae({
		kind: "screen",
		id: "paymentTypes",
		scope: "content"
	}), ir = p(() => I.flatMap((e) => {
		let r = c(e), i = re(e), a = n({
			paymentType: e,
			id: r,
			label: i ? t(i) : Ct(e.nameKeys ?? e.name),
			currency: E,
			formatMoney: Bt,
			minimumLabel: g("field.limits.min.label"),
			maximumLabel: g("field.limits.max.label"),
			selected: r === V,
			disabled: U(e),
			unavailable: s(e)
		});
		return a ? [a] : [];
	}), [
		E,
		Bt,
		U,
		I,
		g,
		Ct,
		V
	]), $ = Un, ar = !$ || Bn && !!Qt, or = $ && !ar ? "protected-surface-not-ready" : Wn ? "invalid-state" : void 0, sr = p(() => ({
		screen: "paymentTypes",
		revision: rr,
		busy: L || Z,
		method: T,
		title: g("cta.choose_payment_type"),
		continueLabel: g("cta.continue"),
		backLabel: g("cta.back"),
		paymentTypes: ir,
		paymentTypeGroups: cn,
		protectedSurfaceRequired: $,
		protectedSurfaceReady: ar,
		...$ ? { protectedSurfaceLabel: g(i) } : {},
		canContinue: !Wn
	}), [
		Z,
		Wn,
		L,
		T,
		ir,
		cn,
		g,
		ar,
		$,
		rr
	]), cr = p(() => ({
		selectPaymentType: nr("selectPaymentType", Fn, {
			busy: L,
			validate: (e) => ir.some((t) => t.id === e && !t.disabled && !t.unavailable)
		}),
		continue: nr("continue", Vn, {
			busy: L || Z,
			unavailableReason: or
		}),
		goBack: nr("goBack", z, {
			busy: L || Z,
			unavailableReason: R ? void 0 : "invalid-state"
		})
	}), [
		Z,
		R,
		or,
		nr,
		z,
		Vn,
		Fn,
		L,
		ir
	]);
	if (Kt || I.length === 0) return /* @__PURE__ */ m(ut, {
		text: "payment.no_pts_found",
		presentationScreen: "empty"
	});
	let lr = (e) => /* @__PURE__ */ ht("div", {
		className: ue(h.className("route-payment-types-content"), "px-1.5 @sm:px-3", k ? "pb-3 @md:pb-4" : "pb-4", _t),
		children: [
			/* @__PURE__ */ m(at, {}),
			/* @__PURE__ */ ht("div", {
				"data-slot": "route-payment-types-selection-stack",
				className: ue(h.className("route-payment-types-selection-stack"), "flex flex-col gap-1.5 @md:gap-2"),
				children: [
					e?.top,
					(!W || !B) && /* @__PURE__ */ m(nt, {
						summaryFields: [],
						merchantElements: !0,
						onlyMerchantElements: !0
					}),
					Sn && /* @__PURE__ */ m(Ke, {
						placement: "payment-list",
						paymentType: B,
						paymentTypes: I,
						amount: B ? l(B, w) : w
					}),
					W ? /* @__PURE__ */ m(Ze, {
						paymentTypes: I,
						paymentTypeGroups: cn,
						domScope: "route-payment-types",
						selectedPaymentType: C,
						onSelect: Fn,
						renderPanel: Qn,
						renderFooter: $n,
						hasPanel: Nn,
						hasPanelBody: Mn,
						collapsible: bn,
						renderActions: Dn,
						isPaymentTypeDisabled: U,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						hoverMode: G ? "none" : "group",
						showMeta: !0,
						bonusEvaluationContext: er
					}) : /* @__PURE__ */ m(qe, {
						paymentTypes: I,
						paymentTypeGroups: cn,
						domScope: "route-payment-types",
						animateItems: !0,
						selectable: G,
						selectedPaymentType: C,
						onSelect: Fn,
						renderActions: Dn,
						isPaymentTypeDisabled: U,
						interactionLocked: L,
						preserveDisabledSelection: !0,
						showMeta: !0
					})
				]
			}),
			e?.bottom,
			W ? !k && /* @__PURE__ */ m(st, {
				domScope: "route-payment-types-back",
				items: Q,
				onFallbackActiveChange: nn
			}) : !k && /* @__PURE__ */ m("div", {
				"data-slot": "route-payment-types-action-stack",
				className: ue(h.className("route-payment-types-action-stack"), rn ? "pt-0 pb-4" : "pt-3 @md:pt-4"),
				children: /* @__PURE__ */ m(We, {
					domScope: "route-payment-types-actions",
					items: Yn,
					fixed: !1,
					onFallbackActiveChange: an
				})
			}),
			Xt
		]
	});
	return /* @__PURE__ */ m(Re, {
		id: "paymentTypes",
		bonusPreviewOwned: !!(Sn || W && Cn && B && Mn(B) && ye(x) && M(B, er(B)).length > 0),
		model: sr,
		actions: cr,
		deferPresentationUpdates: $,
		frame: (e) => /* @__PURE__ */ m(Me, {
			id: h.id("route-payment-types"),
			className: h.className("route-payment-types"),
			title: Et || K ? void 0 : _("cta.choose_payment_type"),
			header: Et || K ? /* @__PURE__ */ m("div", {
				role: K ? "alert" : void 0,
				children: /* @__PURE__ */ m(He, {
					forceVisible: !!K,
					content: tr,
					className: gt
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
var St = () => /* @__PURE__ */ m(ut, {
	text: "payment.no_pts_found",
	presentationScreen: "empty"
});
//#endregion
export { xt as PtsView, St as errorComponent };
