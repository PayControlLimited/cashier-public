"use client";
import { jsx as i, jsxs as X } from "react/jsx-runtime";
import { u as Y, a as Z, b as ee, C as te, c as ne, d as se, e as ae, f as oe, g as ie, r as h, h as re, i as ce, B as w, j as ue, k as le, l as me, S as pe, m as de, P as ye, t as fe, R as he, n as be } from "./index-CqAj6OOy.js";
import { useContext as ke, useRef as ve, useCallback as d, useMemo as E, useEffect as b } from "react";
import "react-dom";
function ge() {
  const {
    paymentTypes: k
  } = he.useLoaderData();
  return /* @__PURE__ */ i(Be, { loaderPaymentTypes: k });
}
function Be({
  loaderPaymentTypes: k = []
}) {
  const v = Y(), {
    translateKey: y
  } = Z(), a = ee(), {
    uiAmountView: c,
    uiAmountView__PaymentTypePicker: B,
    selectedPaymentType: t,
    initialAmount: A,
    method: G,
    uiAccountDelete: I,
    uiListSelectable: C,
    uiPreselectedPaymentType: P,
    onPaymentTypeSelected: m,
    onPaymentTypeDeselected: S,
    resetFlowOnBack: N,
    setCashierState: R
  } = ke(te), {
    paymentTypesList: H,
    isError: T
  } = ne(), {
    getBonusCountForPaymentType: u
  } = se(), {
    selectPaymentType: p,
    clearPaymentSelection: l
  } = ae(), {
    requestAccountDelete: O,
    actionConfirmationModal: K
  } = oe(), _ = ve(!1), n = H.length > 0 ? H : k, W = be(c, G), F = y("cta.back"), {
    canGoBack: g,
    handleBack: M
  } = ie({
    defaultRoute: W,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !c
  }), V = c && !B, x = d(() => {
    V && l(), M();
  }, [l, M, V]), j = y("cta.continue"), o = E(() => h(n, t), [n, t]), z = c && re(A), f = d((e) => z ? ce(A, e.limits).isOutOfRange : !1, [A, z]), D = o ? f(o) : !1, r = C, $ = !!o && !D, L = y("account.delete.title"), J = d((e) => !I || !e.accountId ? null : /* @__PURE__ */ i(w, { size: "sm", variant: "neutral", "aria-label": L, onClick: () => {
    O(e);
  }, iconOnly: !0, label: L, leadingIcon: /* @__PURE__ */ i(ue, {}) }), [L, O, I]);
  b(() => {
    N && R((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [N, R]), b(() => {
    if (!C || _.current || t || !P) return;
    const e = h(n, P);
    e && p(e.name);
  }, [n, p, t, C, P]), b(() => {
    D && l();
  }, [l, D]);
  const U = d((e) => {
    const s = h(n, e);
    if (!s || f(s)) return;
    if (r) {
      if (_.current = !0, o === s) {
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
  }, [l, u, r, f, a, S, m, n, o, p]), q = d(() => {
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
  }, [u, a, o, t]), Q = E(() => {
    const e = [];
    return g && e.push(/* @__PURE__ */ i(w, { variant: "neutral", size: "xl", fullWidth: !0, onClick: x, label: F }, "cashier-pts-back")), r && !T && n.length > 0 && e.push(/* @__PURE__ */ i(w, { variant: "secondary", size: "xl", fullWidth: !0, onClick: q, disabled: !$, label: j }, "cashier-pts-continue")), e;
  }, [F, g, j, x, q, $, T, r, n.length]);
  return le("bottom", Q), me({
    onBack: g ? x : void 0,
    backKey: "Backspace"
  }), b(() => {
    if (!c || !B || r || !t) return;
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
  }, [a, n, t, c, B, r, u]), T || n.length === 0 ? /* @__PURE__ */ i(pe, { text: "payment.no_pts_found" }) : /* @__PURE__ */ i(de, { id: v.id("route-payment-types"), className: v.className("route-payment-types"), title: y("cta.choose_payment_type"), fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ X("div", { className: fe(v.className("route-payment-types-content"), "px-1.5 @sm:px-3 pt-1 pb-3"), children: [
    /* @__PURE__ */ i(ye, { paymentTypes: n, domScope: "route-payment-types", animateItems: !0, selectable: r, selectedPaymentType: t, onSelect: U, renderActions: J, isPaymentTypeDisabled: f, showMeta: !0 }),
    K
  ] }) });
}
export {
  Be as PtsView,
  ge as component
};
