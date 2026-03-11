"use client";
import { jsx as i, jsxs as Y } from "react/jsx-runtime";
import { u as Z, a as ee, b as te, C as ne, c as se, d as ae, e as oe, f as ie, g as re, r as h, M as ce, h as ue, L as D, i as le, j as me, k as pe, S as q, l as de, P as fe, t as ye, m as he } from "./index-BEFWHJ_Y.js";
import { useContext as be, useRef as ke, useCallback as d, useMemo as $, useEffect as b } from "react";
function Ae({
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
    uiPreselectedPaymentType: S,
    onPaymentTypeSelected: m,
    onPaymentTypeDeselected: A,
    resetFlowOnBack: w,
    setCashierState: N
  } = be(ne), {
    paymentTypesList: H,
    isError: P
  } = se(), {
    getBonusCountForPaymentType: u
  } = ae(), {
    selectPaymentType: p,
    clearPaymentSelection: l
  } = oe(), {
    requestAccountDelete: M,
    actionConfirmationModal: W
  } = ie(), O = ke(!1), n = H.length > 0 ? H : G, J = he(c, K), I = f("cta.back"), {
    canGoBack: T,
    handleBack: F
  } = re({
    defaultRoute: J,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !c
  }), R = c && !v, g = d(() => {
    R && l(), F();
  }, [l, F, R]), j = f("cta.continue"), o = $(() => h(n, t), [n, t]), z = c && ce(B), y = d((e) => z ? ue(B, e.limits).isOutOfRange : !1, [B, z]), x = o ? y(o) : !1, r = C, E = !!o && !x, L = f("account.delete.title"), U = d((e) => !_ || !e.accountId ? null : /* @__PURE__ */ i(D, { size: "sm", variant: "neutral", "aria-label": L, onClick: () => {
    M(e);
  }, iconOnly: !0, label: L, leadingIcon: /* @__PURE__ */ i(le, {}) }), [L, M, _]);
  b(() => {
    w && N((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [w, N]), b(() => {
    if (!C || O.current || t || !S) return;
    const e = h(n, S);
    e && p(e.name);
  }, [n, p, t, C, S]), b(() => {
    x && l();
  }, [l, x]);
  const Q = d((e) => {
    const s = h(n, e);
    if (!s || y(s)) return;
    if (r) {
      if (O.current = !0, o === s) {
        l(), A && A(s);
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
  }, [l, u, r, y, a, A, m, n, o, p]), V = d(() => {
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
    return T && e.push(/* @__PURE__ */ i(D, { variant: "neutral", size: "xl", fullWidth: !0, onClick: g, label: I }, "cashier-pts-back")), r && !P && n.length > 0 && e.push(/* @__PURE__ */ i(D, { variant: "secondary", size: "xl", fullWidth: !0, onClick: V, disabled: !E, label: j }, "cashier-pts-continue")), e;
  }, [I, T, j, g, V, E, P, r, n.length]);
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
    /* @__PURE__ */ i(fe, { paymentTypes: n, domScope: "route-payment-types", selectable: r, selectedPaymentType: t, onSelect: Q, renderActions: U, isPaymentTypeDisabled: y, showMeta: !0 }),
    W
  ] }) });
}
const Pe = () => /* @__PURE__ */ i(q, { text: "payment.no_pts_found" });
export {
  Ae as PtsView,
  Pe as errorComponent
};
