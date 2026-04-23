"use client";
import { jsx as u, jsxs as ce } from "react/jsx-runtime";
import { u as ue, a as le, b as me, C as pe, c as de, d as ye, e as fe, f as he, g as ve, r as _e, h as be, i as C, j as Ce, k as Te, l as Ae, m as Pe, B as R, n as ke, I as Se, o as Be, p as ge, S as Z, q as Ne, P as xe, t as Ie, s as Ee } from "./index-CuELo8Sx.js";
import { useContext as Ve, useRef as Le, useCallback as h, useMemo as T, useEffect as A } from "react";
import "react-dom";
import { C as Re } from "./ChoosePaymentTypeIcon-BGaqzxSo.js";
const Me = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Oe = "pt-2.5 @md:pt-3 [@container_(max-height:620px)]:pt-2.5 [@container_(max-height:520px)]:pt-2.25", we = (t, i) => t?.value ? t.feeType === "percentage" ? `${t.value}%` : i(t.value) || t.value : "", De = (t) => {
  if (!t?.value) return !1;
  const i = Number.parseFloat(t.value);
  return Number.isNaN(i) ? !0 : i !== 0;
}, Fe = (t, i, c) => {
  const s = t(i);
  return s === i ? c : s;
}, He = (t) => typeof t == "string" ? t : t.baseName;
function qe({
  loaderPaymentTypes: t = []
}) {
  const i = ue(), {
    translateKey: c
  } = le(), s = me(), {
    uiAmountView: m,
    lockAmount: ee,
    uiAmountView__PaymentTypePicker: P,
    uiInteractivePrompts: M,
    uiShowFees: O,
    selectedPaymentType: o,
    initialAmount: k,
    method: d,
    user: w,
    locale: D,
    uiAccountDelete: F,
    uiListSelectable: S,
    uiPreselectedPaymentType: B,
    onPaymentTypeSelected: y,
    resetFlowOnBack: H,
    setCashierState: K
  } = Ve(pe), {
    formatDisplayValue: U
  } = de(), {
    paymentTypesList: G,
    isError: g
  } = ye(), {
    getBonusCountForPaymentType: p
  } = fe(), {
    selectPaymentType: f,
    clearPaymentSelection: v
  } = he(), {
    requestAccountDelete: $,
    actionConfirmationModal: te
  } = ve(), j = Le(!1), r = G.length > 0 ? G : t, ne = _e({
    uiAmountView: m,
    lockAmount: ee,
    method: d
  }), q = c("cta.back"), {
    canGoBack: N,
    handleBack: z
  } = be({
    defaultRoute: ne,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !m
  }), W = m && !P, x = h(() => {
    W && v(), z();
  }, [v, z, W]), J = c("cta.continue"), n = T(() => C(r, o), [r, o]), I = T(() => {
    if (!n || !O || !De(n.fee)) return null;
    const e = we(n.fee, U);
    if (!e) return null;
    const a = d === Ce.PAYOUT, X = Fe(c, a ? "cta.payout" : "cta.payin", a ? "Withdraw" : "Deposit").toLocaleLowerCase(He(D)), ie = {
      fee: e,
      method: X
    };
    let L = "interactive_prompt.payment_types.selected.fee_only";
    return n.fee?.direction === "add" ? L = "interactive_prompt.payment_types.selected.fee_add" : n.fee?.direction === "deduct" && (L = "interactive_prompt.payment_types.selected.fee_deduct"), {
      key: L,
      values: ie
    };
  }, [U, D, d, n, c, O]), Y = m && Te(k), _ = h((e) => Y ? Ae(k, e.limits, {
    maxBoundary: Pe(d, w, e.fee)
  }).isOutOfRange : !1, [k, d, Y, w]), E = n ? _(n) : !1, l = S, b = !!n && !E, V = c("account.delete.title"), ae = h((e) => !F || !e.accountId ? null : /* @__PURE__ */ u(R, { size: "sm", variant: "neutral", "aria-label": V, onClick: () => {
    $(e);
  }, iconOnly: !0, label: V, leadingIcon: /* @__PURE__ */ u(ke, {}) }), [V, $, F]);
  A(() => {
    H && K((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [H, K]), A(() => {
    if (!S || j.current || o || !B) return;
    const e = C(r, B);
    e && f(e.name);
  }, [r, f, o, S, B]), A(() => {
    E && v();
  }, [v, E]);
  const se = h((e) => {
    const a = C(r, e);
    if (!a || _(a)) return;
    if (l) {
      if (j.current = !0, n === a)
        return;
      f(a.name), y && y(a);
      return;
    }
    if (f(a.name), y && y(a), p(a) > 0) {
      s({
        to: "/bonus"
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: a.name
      }
    });
  }, [p, l, _, s, y, r, n, f]), Q = h(() => {
    if (!n || !o) return;
    if (p(n) > 0) {
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
  }, [p, s, n, o]), oe = T(() => {
    const e = [];
    return N && e.push(/* @__PURE__ */ u(R, { variant: "neutral", size: "xl", fullWidth: !0, onClick: x, label: q }, "cashier-pts-back")), l && !g && r.length > 0 && e.push(/* @__PURE__ */ u(R, { variant: "secondary", size: "xl", fullWidth: !0, onClick: Q, disabled: !b, label: J }, "cashier-pts-continue")), e;
  }, [q, N, J, x, Q, b, g, l, r.length]), re = T(() => {
    const e = {
      legacyTitle: c("cta.choose_payment_type"),
      titleKey: "cta.interactive_prompt.choose_payment_type.title",
      bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
      icon: /* @__PURE__ */ u(Re, {})
    };
    return b ? {
      legacyTitle: c("cta.interactive_prompt.payment_type_selected.title"),
      titleKey: "cta.interactive_prompt.payment_type_selected.title",
      bodyKey: I?.key ?? "cta.interactive_prompt.payment_type_selected.desc",
      bodyValues: I?.values,
      icon: /* @__PURE__ */ u(Se, {})
    } : e;
  }, [b, I, c]);
  return Be("bottom", oe), ge({
    onBack: N ? x : void 0,
    backKey: "Backspace"
  }), A(() => {
    if (!m || !P || l || !o) return;
    const e = C(r, o);
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
  }, [s, r, o, m, P, l, p]), g || r.length === 0 ? /* @__PURE__ */ u(Z, { text: "payment.no_pts_found" }) : /* @__PURE__ */ u(Ne, { id: i.id("route-payment-types"), className: i.className("route-payment-types"), title: M ? void 0 : c("cta.choose_payment_type"), header: M ? /* @__PURE__ */ u(Ee, { content: re, className: Me }) : void 0, fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ ce("div", { className: Ie(i.className("route-payment-types-content"), "px-1.5 @sm:px-3 pb-3", Oe), children: [
    /* @__PURE__ */ u(xe, { paymentTypes: r, domScope: "route-payment-types", animateItems: !0, selectable: l, selectedPaymentType: o, onSelect: se, renderActions: ae, isPaymentTypeDisabled: _, showMeta: !0 }),
    te
  ] }) });
}
const ze = () => /* @__PURE__ */ u(Z, { text: "payment.no_pts_found" });
export {
  qe as PtsView,
  ze as errorComponent
};
