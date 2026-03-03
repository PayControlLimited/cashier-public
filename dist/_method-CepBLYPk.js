"use client";
import { jsx as i, jsxs as Q } from "react/jsx-runtime";
import { u as X, a as Y, C as Z, b as ee, c as te, d as ne, e as ae, f as se, r as h, M as oe, g as ie, _ as D, h as re, i as ce, j as ue, S as le, k as me, P as fe, R as de, l as pe } from "./index-D_0j8LBF.js";
import { useContext as ye, useRef as he, useCallback as d, useMemo as q, useEffect as b } from "react";
function Pe() {
  const {
    paymentTypes: k
  } = de.useLoaderData();
  return /* @__PURE__ */ i(be, { loaderPaymentTypes: k });
}
function be({
  loaderPaymentTypes: k = []
}) {
  const {
    translateKey: p
  } = X(), s = Y(), {
    uiAmountView: c,
    uiAmountView__PaymentTypePicker: v,
    selectedPaymentType: t,
    initialAmount: B,
    method: E,
    uiAccountDelete: _,
    uiListSelectable: A,
    uiPreselectedPaymentType: P,
    onPaymentTypeSelected: m,
    onPaymentTypeDeselected: C,
    resetFlowOnBack: R,
    setCashierState: w
  } = ye(Z), {
    paymentTypesList: M,
    isError: S
  } = ee(), {
    getBonusCountForPaymentType: u
  } = te(), {
    selectPaymentType: f,
    clearPaymentSelection: l
  } = ne(), {
    requestAccountDelete: O,
    actionConfirmationModal: G
  } = ae(), H = he(!1), n = M.length > 0 ? M : k, K = pe(c, E), I = p("cta.back"), {
    canGoBack: T,
    handleBack: F
  } = se({
    defaultRoute: K,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !c
  }), N = c && !v, g = d(() => {
    N && l(), F();
  }, [l, F, N]), j = p("cta.continue"), o = q(() => h(n, t), [n, t]), z = c && oe(B), y = d((e) => z ? ie(B, e.limits).isOutOfRange : !1, [B, z]), x = o ? y(o) : !1, r = A, V = !!o && !x, L = p("account.delete.title"), W = d((e) => !_ || !e.accountId ? null : /* @__PURE__ */ i(D, { size: "sm", variant: "neutral", "aria-label": L, onClick: () => {
    O(e);
  }, iconOnly: !0, label: L, leadingIcon: /* @__PURE__ */ i(re, {}) }), [L, O, _]);
  b(() => {
    R && w((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [R, w]), b(() => {
    if (!A || H.current || t || !P) return;
    const e = h(n, P);
    e && f(e.name);
  }, [n, f, t, A, P]), b(() => {
    x && l();
  }, [l, x]);
  const U = d((e) => {
    const a = h(n, e);
    if (!a || y(a)) return;
    if (r) {
      if (H.current = !0, o === a) {
        l(), C && C(a);
        return;
      }
      f(a.name), m && m(a);
      return;
    }
    if (f(a.name), m && m(a), u(a) > 0) {
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
  }, [l, u, r, y, s, C, m, n, o, f]), $ = d(() => {
    if (!o || !t) return;
    if (u(o) > 0) {
      s({
        to: "/bonus"
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: t
      }
    });
  }, [u, s, o, t]), J = q(() => {
    const e = [];
    return T && e.push(/* @__PURE__ */ i(D, { variant: "neutral", size: "xl", fullWidth: !0, onClick: g, label: I }, "cashier-pts-back")), r && !S && n.length > 0 && e.push(/* @__PURE__ */ i(D, { variant: "secondary", size: "xl", fullWidth: !0, onClick: $, disabled: !V, label: j }, "cashier-pts-continue")), e;
  }, [I, T, j, g, $, V, S, r, n.length]);
  return ce("bottom", J), ue({
    onBack: T ? g : void 0,
    backKey: "Backspace"
  }), b(() => {
    if (!c || !v || r || !t) return;
    const e = h(n, t);
    if (!e) return;
    if (u(e) > 0) {
      s({
        to: "/bonus",
        replace: !0
      });
      return;
    }
    s({
      to: "/pt/$id",
      params: {
        id: t
      },
      replace: !0
    });
  }, [s, n, t, c, v, r, u]), S || n.length === 0 ? /* @__PURE__ */ i(le, { text: "payment.no_pts_found" }) : /* @__PURE__ */ i(me, { title: p("cta.choose_payment_type"), fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ Q("div", { className: "px-1.5 @sm:px-3 pt-1 pb-3", children: [
    /* @__PURE__ */ i(fe, { paymentTypes: n, selectable: r, selectedPaymentType: t, onSelect: U, renderActions: W, isPaymentTypeDisabled: y, showMeta: !0 }),
    G
  ] }) });
}
export {
  be as PtsView,
  Pe as component
};
