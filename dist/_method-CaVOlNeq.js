"use client";
import { jsx as u, jsxs as ie } from "react/jsx-runtime";
import { u as ce, a as ue, b as le, C as me, c as pe, d as de, e as ye, f as fe, g as he, r as ve, h as _e, i as T, j as be, k as Te, l as Ce, m as Pe, B as V, n as Ae, I as ke, o as Be, p as Se, S as ge, q as Ne, P as Ie, t as xe, s as Re, R as Ee } from "./index-CuELo8Sx.js";
import { useContext as Le, useRef as Ve, useCallback as h, useMemo as C, useEffect as P } from "react";
import "react-dom";
import { C as Me } from "./ChoosePaymentTypeIcon-BGaqzxSo.js";
const Oe = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", De = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", we = (t, i) => t?.value ? t.feeType === "percentage" ? `${t.value}%` : i(t.value) || t.value : "", Fe = (t) => {
  if (!t?.value) return !1;
  const i = Number.parseFloat(t.value);
  return Number.isNaN(i) ? !0 : i !== 0;
}, He = (t, i, c) => {
  const s = t(i);
  return s === i ? c : s;
}, Ke = (t) => typeof t == "string" ? t : t.baseName;
function We() {
  const {
    paymentTypes: t
  } = Ee.useLoaderData();
  return /* @__PURE__ */ u(Ue, { loaderPaymentTypes: t });
}
function Ue({
  loaderPaymentTypes: t = []
}) {
  const i = ce(), {
    translateKey: c
  } = ue(), s = le(), {
    uiAmountView: m,
    lockAmount: Z,
    uiAmountView__PaymentTypePicker: A,
    uiInteractivePrompts: M,
    uiShowFees: O,
    selectedPaymentType: o,
    initialAmount: k,
    method: d,
    user: D,
    locale: w,
    uiAccountDelete: F,
    uiListSelectable: B,
    uiPreselectedPaymentType: S,
    onPaymentTypeSelected: y,
    resetFlowOnBack: H,
    setCashierState: K
  } = Le(me), {
    formatDisplayValue: U
  } = pe(), {
    paymentTypesList: G,
    isError: g
  } = de(), {
    getBonusCountForPaymentType: p
  } = ye(), {
    selectPaymentType: f,
    clearPaymentSelection: v
  } = fe(), {
    requestAccountDelete: $,
    actionConfirmationModal: ee
  } = he(), j = Ve(!1), r = G.length > 0 ? G : t, te = ve({
    uiAmountView: m,
    lockAmount: Z,
    method: d
  }), q = c("cta.back"), {
    canGoBack: N,
    handleBack: z
  } = _e({
    defaultRoute: te,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !m
  }), W = m && !A, I = h(() => {
    W && v(), z();
  }, [v, z, W]), J = c("cta.continue"), a = C(() => T(r, o), [r, o]), x = C(() => {
    if (!a || !O || !Fe(a.fee)) return null;
    const e = we(a.fee, U);
    if (!e) return null;
    const n = d === be.PAYOUT, X = He(c, n ? "cta.payout" : "cta.payin", n ? "Withdraw" : "Deposit").toLocaleLowerCase(Ke(w)), re = {
      fee: e,
      method: X
    };
    let L = "interactive_prompt.payment_types.selected.fee_only";
    return a.fee?.direction === "add" ? L = "interactive_prompt.payment_types.selected.fee_add" : a.fee?.direction === "deduct" && (L = "interactive_prompt.payment_types.selected.fee_deduct"), {
      key: L,
      values: re
    };
  }, [U, w, d, a, c, O]), Y = m && Te(k), _ = h((e) => Y ? Ce(k, e.limits, {
    maxBoundary: Pe(d, D, e.fee)
  }).isOutOfRange : !1, [k, d, Y, D]), R = a ? _(a) : !1, l = B, b = !!a && !R, E = c("account.delete.title"), ae = h((e) => !F || !e.accountId ? null : /* @__PURE__ */ u(V, { size: "sm", variant: "neutral", "aria-label": E, onClick: () => {
    $(e);
  }, iconOnly: !0, label: E, leadingIcon: /* @__PURE__ */ u(Ae, {}) }), [E, $, F]);
  P(() => {
    H && K((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [H, K]), P(() => {
    if (!B || j.current || o || !S) return;
    const e = T(r, S);
    e && f(e.name);
  }, [r, f, o, B, S]), P(() => {
    R && v();
  }, [v, R]);
  const ne = h((e) => {
    const n = T(r, e);
    if (!n || _(n)) return;
    if (l) {
      if (j.current = !0, a === n)
        return;
      f(n.name), y && y(n);
      return;
    }
    if (f(n.name), y && y(n), p(n) > 0) {
      s({
        to: "/bonus"
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: n.name
      }
    });
  }, [p, l, _, s, y, r, a, f]), Q = h(() => {
    if (!a || !o) return;
    if (p(a) > 0) {
      s({
        to: "/bonus"
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: o
      }
    });
  }, [p, s, a, o]), se = C(() => {
    const e = [];
    return N && e.push(/* @__PURE__ */ u(V, { variant: "neutral", size: "xl", fullWidth: !0, onClick: I, label: q }, "cashier-pts-back")), l && !g && r.length > 0 && e.push(/* @__PURE__ */ u(V, { variant: "secondary", size: "xl", fullWidth: !0, onClick: Q, disabled: !b, label: J }, "cashier-pts-continue")), e;
  }, [q, N, J, I, Q, b, g, l, r.length]), oe = C(() => {
    const e = {
      legacyTitle: c("cta.choose_payment_type"),
      titleKey: "cta.interactive_prompt.choose_payment_type.title",
      bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
      icon: /* @__PURE__ */ u(Me, {})
    };
    return b ? {
      legacyTitle: c("cta.interactive_prompt.payment_type_selected.title"),
      titleKey: "cta.interactive_prompt.payment_type_selected.title",
      bodyKey: x?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
      bodyValues: x?.values,
      icon: /* @__PURE__ */ u(ke, {})
    } : e;
  }, [b, x, c]);
  return Be("bottom", se), Se({
    onBack: N ? I : void 0,
    backKey: "Backspace"
  }), P(() => {
    if (!m || !A || l || !o) return;
    const e = T(r, o);
    if (!e) return;
    if (p(e) > 0) {
      s({
        to: "/bonus",
        replace: !0
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: o
      },
      replace: !0
    });
  }, [s, r, o, m, A, l, p]), g || r.length === 0 ? /* @__PURE__ */ u(ge, { text: "payment.no_pts_found" }) : /* @__PURE__ */ u(Ne, { id: i.id("route-payment-types"), className: i.className("route-payment-types"), title: M ? void 0 : c("cta.choose_payment_type"), header: M ? /* @__PURE__ */ u(Re, { content: oe, className: Oe }) : void 0, fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ ie("div", { className: xe(i.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-3", De), children: [
    /* @__PURE__ */ u(Ie, { paymentTypes: r, domScope: "route-payment-types", animateItems: !0, selectable: l, selectedPaymentType: o, onSelect: ne, renderActions: ae, isPaymentTypeDisabled: _, showMeta: !0 }),
    ee
  ] }) });
}
export {
  Ue as PtsView,
  We as component
};
