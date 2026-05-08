"use client";
import { A as e, Ar as t, At as n, Bn as r, Dt as i, Ft as ee, Gn as te, I as a, It as ne, Jt as re, Kn as ie, M as o, N as s, Nr as ae, O as oe, Pr as se, Sr as c, T as ce, Xn as le, Zn as ue, _ as de, c as l, f as fe, h as pe, hr as me, n as he, o as ge, on as _e, p as ve, rt as ye, s as be, t as xe, u as Se, v as Ce, vr as we, x as Te, y as Ee } from "./useBackNavigation-Ca8vKjft.js";
import { t as De } from "./_method-BOp2WHWf.js";
import { useCallback as u, useContext as Oe, useEffect as d, useMemo as f, useRef as ke, useState as Ae } from "react";
import { jsx as p, jsxs as je } from "react/jsx-runtime";
//#region src/routes/pts/$method.tsx?tsr-split=component
var Me = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Ne = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", Pe = (e, t) => e?.value ? e.feeType === "percentage" ? `${e.value}%` : t(e.value) || e.value : "", Fe = (e) => {
	if (!e?.value) return !1;
	let t = Number.parseFloat(e.value);
	return Number.isNaN(t) ? !0 : t !== 0;
}, Ie = (e, t, n) => {
	let r = e(t);
	return r === t ? n : r;
}, Le = (e) => typeof e == "string" ? e : e.baseName;
function m() {
	let { paymentTypes: e } = De.useLoaderData();
	return /* @__PURE__ */ p(h, { loaderPaymentTypes: e });
}
function h({ loaderPaymentTypes: De = [] }) {
	let m = te(), { translateKey: h } = _e(), g = se(), { uiComboView: _, lockAmount: Re, uiComboView__PaymentTypes: v, uiInteractivePrompts: y, uiShowFees: b, uiListStyle: ze, selectedPaymentType: x, initialAmount: S, method: C, user: w, locale: T, uiAccountDelete: E, uiListSelectable: Be, uiPreselectedPaymentType: D, onPaymentTypeSelected: O, paymentFormDraft: k, comboViewFormDraft: A, resetFlowOnBack: Ve, setCashierState: j } = Oe(ie), { formatDisplayValue: He } = ye(), { paymentTypesList: Ue, isError: M } = i(), { getBonusCountForPaymentType: N } = Te(), { selectPaymentType: P, clearPaymentSelection: F } = ce(), { requestAccountDelete: We, actionConfirmationModal: Ge } = de(), Ke = ke(!1), [qe, Je] = Ae(null), [I, Ye] = Ae({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), L = Ue.length > 0 ? Ue : De, Xe = re({
		uiComboView: _,
		lockAmount: Re,
		method: C
	}), Ze = h("cta.back"), { canGoBack: R, handleBack: Qe } = xe({
		defaultRoute: Xe,
		requireCanGoBackForHotkey: !0,
		enableHotkey: !1,
		useHistory: !0,
		replace: !_
	}), $e = _ && !o(v), z = u(() => {
		$e && F(), Qe();
	}, [
		F,
		Qe,
		$e
	]), et = h("cta.continue"), B = f(() => n(L, x), [L, x]), V = f(() => {
		if (!B || !b || !Fe(B.fee)) return null;
		let e = Pe(B.fee, He);
		if (!e) return null;
		let t = C === ue.PAYOUT, n = {
			fee: e,
			method: Ie(h, t ? "cta.payout" : "cta.payin", t ? "Withdraw" : "Deposit").toLocaleLowerCase(Le(T))
		}, r = "interactive_prompt.payment_types.selected.fee_only";
		return B.fee?.direction === "add" ? r = "interactive_prompt.payment_types.selected.fee_add" : B.fee?.direction === "deduct" && (r = "interactive_prompt.payment_types.selected.fee_deduct"), {
			key: r,
			values: n
		};
	}, [
		He,
		T,
		C,
		B,
		h,
		b
	]), tt = _ && c(S), H = _ && c(S), nt = H ? S : "", U = u((e) => tt ? ee(S, e.limits, { maxBoundary: ne(C, w, e.fee) }).isOutOfRange : !1, [
		S,
		C,
		tt,
		w
	]), W = B ? U(B) : !1, G = ze === le.ACCORDION, K = Be || G, q = !!B && !W, rt = u((t) => e(t, nt), [nt]), J = !!(G && B && rt(B)), Y = h("account.delete.title"), it = u((e) => !E || !e.accountId ? null : /* @__PURE__ */ p(t, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": Y,
		onClick: () => {
			We(e);
		},
		iconOnly: !0,
		label: Y,
		leadingIcon: /* @__PURE__ */ p(we, {})
	}), [
		Y,
		We,
		E
	]);
	d(() => {
		Ve && j((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [Ve, j]), d(() => {
		if (!K || Ke.current || x || !D) return;
		let e = n(L, D);
		e && P(e.name);
	}, [
		L,
		P,
		x,
		K,
		D
	]), d(() => {
		W && F();
	}, [F, W]);
	let X = u((e) => {
		let t = n(L, e);
		if (t && !U(t)) {
			if (K) {
				if (Ke.current = !0, B === t) return;
				P(t.name), O && O(t);
				return;
			}
			if (P(t.name), O && O(t), N(t) > 0) {
				g({ to: "/bonus" });
				return;
			}
			g({
				to: "/pt/$id",
				params: { id: t.name }
			});
		}
	}, [
		N,
		K,
		U,
		g,
		O,
		L,
		B,
		P
	]), at = u((e) => {
		let t = a(e, S), n = {
			paymentTypeName: e.name,
			method: C,
			amount: t
		};
		if (l(A, n)) return A.values;
		if (l(k, n)) return k.values;
	}, [
		A,
		S,
		C,
		k
	]), ot = u((e, t) => {
		if (U(e)) return;
		let n = s(e), r = a(e, S, t.values);
		if (n && r.length === 0) return;
		let i = n ? {
			...t.values,
			amount: r
		} : t.values;
		if (j((n) => ({
			...n,
			selectedPaymentType: e.name,
			selectedBonusCode: null,
			initialAmount: r,
			paymentFormDraft: null,
			comboViewFormDraft: {
				paymentTypeName: e.name,
				method: C,
				amount: r,
				values: i,
				hasHostedFields: t.hasHostedFields
			}
		})), N(e) > 0) {
			g({ to: "/bonus" });
			return;
		}
		g({
			to: "/pt/$id",
			params: { id: e.name }
		});
	}, [
		N,
		S,
		U,
		C,
		g,
		j
	]), st = u((e, t) => {
		let n = s(e), r = a(e, S, t.values), i = {
			paymentTypeName: e.name,
			method: C,
			amount: r,
			values: n ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		j((e) => be(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		S,
		C,
		j
	]), ct = u((e, t) => {
		Ye((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), lt = u((e) => /* @__PURE__ */ p(oe, {
		paymentType: e,
		amountValue: S,
		hideAmountField: H,
		onActionsChange: Je,
		onPromptStateChange: ct,
		onPreparedValues: ot,
		onValuesChange: st,
		valueOverrides: at(e),
		surfaceChrome: "plain"
	}, e.name), [
		at,
		ot,
		ct,
		st,
		S,
		H
	]), Z = qe?.submit, Q = !J || I.paymentTypeName === x, $ = u(() => {
		if (J) {
			if (!Q) return;
			Z?.onClick();
			return;
		}
		if (!(!B || !x)) {
			if (N(B) > 0) {
				g({ to: "/bonus" });
				return;
			}
			g({
				to: "/pt/$id",
				params: { id: x }
			});
		}
	}, [
		Z,
		N,
		Q,
		g,
		B,
		x,
		J
	]), ut = f(() => {
		let e = [], n = !!Z?.visible, r = J && Q && !!Z?.loading, i = J ? !q || !Q || !n || !!Z?.disabled : !q;
		return R && e.push(/* @__PURE__ */ p(t, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: r,
			onClick: z,
			label: Ze
		}, "cashier-pts-back")), K && !M && L.length > 0 && e.push(/* @__PURE__ */ p(t, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: $,
			disabled: i,
			loading: r,
			label: et
		}, "cashier-pts-continue")), e;
	}, [
		Z,
		Ze,
		R,
		et,
		z,
		$,
		q,
		Q,
		M,
		K,
		L.length,
		J
	]), dt = f(() => {
		let e = ve({ translateKey: h });
		if (!q) return e;
		if (J) {
			let t = I.paymentTypeName === x;
			if (t && I.errorMessage) return {
				...e,
				legacyTitle: I.errorMessage,
				titleKey: void 0,
				bodyKey: void 0,
				icon: /* @__PURE__ */ p(we, {}),
				tone: "danger"
			};
			if (!t || !I.isComplete) return pe({ translateKey: h });
		}
		return {
			legacyTitle: h("cta.interactive_prompt.payment_type_selected.title"),
			titleKey: "cta.interactive_prompt.payment_type_selected.title",
			bodyKey: V?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
			bodyValues: V?.values,
			icon: /* @__PURE__ */ p(me, {})
		};
	}, [
		I,
		q,
		J,
		V,
		x,
		h
	]);
	return r("bottom", ut), Ce({
		onBack: R ? z : void 0,
		backKey: "Backspace"
	}), d(() => {
		if (!_ || !o(v) || K || !x) return;
		let e = n(L, x);
		if (e) {
			if (N(e) > 0) {
				g({
					to: "/bonus",
					replace: !0
				});
				return;
			}
			g({
				to: "/pt/$id",
				params: { id: x },
				replace: !0
			});
		}
	}, [
		g,
		L,
		x,
		_,
		v,
		K,
		N
	]), M || L.length === 0 ? /* @__PURE__ */ p(he, { text: "payment.no_pts_found" }) : /* @__PURE__ */ p(ge, {
		id: m.id("route-payment-types"),
		className: m.className("route-payment-types"),
		title: y ? void 0 : h("cta.choose_payment_type"),
		header: y ? /* @__PURE__ */ p(Se, {
			content: dt,
			className: Me
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ je("div", {
			className: ae(m.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-6 @md:pb-7", Ne),
			children: [G ? /* @__PURE__ */ p(fe, {
				paymentTypes: L,
				domScope: "route-payment-types",
				animateItems: !0,
				selectedPaymentType: x,
				onSelect: X,
				renderPanel: lt,
				hasPanel: rt,
				renderActions: it,
				isPaymentTypeDisabled: U,
				showMeta: !0
			}) : /* @__PURE__ */ p(Ee, {
				paymentTypes: L,
				domScope: "route-payment-types",
				animateItems: !0,
				selectable: K,
				selectedPaymentType: x,
				onSelect: X,
				renderActions: it,
				isPaymentTypeDisabled: U,
				showMeta: !0
			}), Ge]
		})
	});
}
//#endregion
export { h as PtsView, m as component };
