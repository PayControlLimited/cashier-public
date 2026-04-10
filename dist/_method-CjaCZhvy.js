"use client";
import { jsx as i, jsxs as Y } from "react/jsx-runtime";
import { u as Z, a as ee, b as te, C as ne, c as se, d as ae, e as oe, f as ie, g as re, r as h, h as ce, i as ue, B as L, j as le, k as me, l as pe, S as q, m as de, P as fe, t as ye, n as he } from "./index-CqAj6OOy.js";
import { useContext as be, useRef as ke, useCallback as d, useMemo as $, useEffect as b } from "react";
import "react-dom";
function Pe({
  loaderPaymentTypes: G = []
}) {
  const k = Z(), {
    translateKey: f
  } = ee(), a = te(), {
    uiAmountView: c,
    uiAmountView__PaymentTypePicker: v,
    selectedPaymentType: t,
    initialAmount: B,
    method: K,
    uiAccountDelete: _,
    uiListSelectable: C,
    uiPreselectedPaymentType: A,
    onPaymentTypeSelected: m,
    onPaymentTypeDeselected: S,
    resetFlowOnBack: w,
    setCashierState: I
  } = be(ne), {
    paymentTypesList: N,
    isError: P
  } = se(), {
    getBonusCountForPaymentType: u
  } = ae(), {
    selectPaymentType: p,
    clearPaymentSelection: l
  } = oe(), {
    requestAccountDelete: H,
    actionConfirmationModal: W
  } = ie(), O = ke(!1), n = N.length > 0 ? N : G, J = he(c, K), F = f("cta.back"), {
    canGoBack: T,
    handleBack: M
  } = re({
    defaultRoute: J,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !c
  }), R = c && !v, g = d(() => {
    R && l(), M();
  }, [l, M, R]), V = f("cta.continue"), o = $(() => h(n, t), [n, t]), j = c && ce(B), y = d((e) => j ? ue(B, e.limits).isOutOfRange : !1, [B, j]), x = o ? y(o) : !1, r = C, z = !!o && !x, D = f("account.delete.title"), U = d((e) => !_ || !e.accountId ? null : /* @__PURE__ */ i(L, { size: "sm", variant: "neutral", "aria-label": D, onClick: () => {
    H(e);
  }, iconOnly: !0, label: D, leadingIcon: /* @__PURE__ */ i(le, {}) }), [D, H, _]);
  b(() => {
    w && I((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [w, I]), b(() => {
    if (!C || O.current || t || !A) return;
    const e = h(n, A);
    e && p(e.name);
  }, [n, p, t, C, A]), b(() => {
    x && l();
  }, [l, x]);
  const Q = d((e) => {
    const s = h(n, e);
    if (!s || y(s)) return;
    if (r) {
      if (O.current = !0, o === s) {
        l(), S && S(s);
        return;
      }
      p(s.name), m && m(s);
      return;
    }
    if (p(s.name), m && m(s), u(s) > 0) {
      a({
        to: "/bonus"
      });
      return;
    }
    a({
      to: "/pt/$id",
      params: {
        id: s.name
      }
    });
  }, [l, u, r, y, a, S, m, n, o, p]), E = d(() => {
    if (!o || !t) return;
    if (u(o) > 0) {
      a({
        to: "/bonus"
      });
      return;
    }
    a({
      to: "/pt/$id",
      params: {
        id: t
      }
    });
  }, [u, a, o, t]), X = $(() => {
    const e = [];
    return T && e.push(/* @__PURE__ */ i(L, { variant: "neutral", size: "xl", fullWidth: !0, onClick: g, label: F }, "cashier-pts-back")), r && !P && n.length > 0 && e.push(/* @__PURE__ */ i(L, { variant: "secondary", size: "xl", fullWidth: !0, onClick: E, disabled: !z, label: V }, "cashier-pts-continue")), e;
  }, [F, T, V, g, E, z, P, r, n.length]);
  return me("bottom", X), pe({
    onBack: T ? g : void 0,
    backKey: "Backspace"
  }), b(() => {
    if (!c || !v || r || !t) return;
    const e = h(n, t);
    if (!e) return;
    if (u(e) > 0) {
      a({
        to: "/bonus",
        replace: !0
      });
      return;
    }
    a({
      to: "/pt/$id",
      params: {
        id: t
      },
      replace: !0
    });
  }, [a, n, t, c, v, r, u]), P || n.length === 0 ? /* @__PURE__ */ i(q, { text: "payment.no_pts_found" }) : /* @__PURE__ */ i(de, { id: k.id("route-payment-types"), className: k.className("route-payment-types"), title: f("cta.choose_payment_type"), fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ Y("div", { className: ye(k.className("route-payment-types-content"), "px-1.5 @sm:px-3 pt-1 pb-3"), children: [
    /* @__PURE__ */ i(fe, { paymentTypes: n, domScope: "route-payment-types", animateItems: !0, selectable: r, selectedPaymentType: t, onSelect: Q, renderActions: U, isPaymentTypeDisabled: y, showMeta: !0 }),
    W
  ] }) });
}
const Te = () => /* @__PURE__ */ i(q, { text: "payment.no_pts_found" });
export {
  Pe as PtsView,
  Te as errorComponent
};
