"use client";
import { jsx as i, jsxs as X } from "react/jsx-runtime";
import { u as Y, a as Z, C as ee, b as te, c as ne, d as se, e as ae, f as oe, r as h, M as ie, g as re, _, h as ce, i as ue, j as le, S as $, k as me, P as fe, l as de } from "./index-D_0j8LBF.js";
import { useContext as pe, useRef as ye, useCallback as d, useMemo as V, useEffect as b } from "react";
function Be({
  loaderPaymentTypes: q = []
}) {
  const {
    translateKey: p
  } = Y(), a = Z(), {
    uiAmountView: c,
    uiAmountView__PaymentTypePicker: k,
    selectedPaymentType: t,
    initialAmount: v,
    method: G,
    uiAccountDelete: L,
    uiListSelectable: B,
    uiPreselectedPaymentType: A,
    onPaymentTypeSelected: m,
    onPaymentTypeDeselected: C,
    resetFlowOnBack: D,
    setCashierState: w
  } = pe(ee), {
    paymentTypesList: M,
    isError: S
  } = te(), {
    getBonusCountForPaymentType: u
  } = ne(), {
    selectPaymentType: f,
    clearPaymentSelection: l
  } = se(), {
    requestAccountDelete: O,
    actionConfirmationModal: K
  } = ae(), H = ye(!1), n = M.length > 0 ? M : q, W = de(c, G), I = p("cta.back"), {
    canGoBack: P,
    handleBack: F
  } = oe({
    defaultRoute: W,
    requireCanGoBackForHotkey: !0,
    enableHotkey: !1,
    useHistory: !0,
    replace: !c
  }), N = c && !k, T = d(() => {
    N && l(), F();
  }, [l, F, N]), R = p("cta.continue"), o = V(() => h(n, t), [n, t]), j = c && ie(v), y = d((e) => j ? re(v, e.limits).isOutOfRange : !1, [v, j]), g = o ? y(o) : !1, r = B, z = !!o && !g, x = p("account.delete.title"), U = d((e) => !L || !e.accountId ? null : /* @__PURE__ */ i(_, { size: "sm", variant: "neutral", "aria-label": x, onClick: () => {
    O(e);
  }, iconOnly: !0, label: x, leadingIcon: /* @__PURE__ */ i(ce, {}) }), [x, O, L]);
  b(() => {
    D && w((e) => ({
      ...e,
      resetFlowOnBack: !1
    }));
  }, [D, w]), b(() => {
    if (!B || H.current || t || !A) return;
    const e = h(n, A);
    e && f(e.name);
  }, [n, f, t, B, A]), b(() => {
    g && l();
  }, [l, g]);
  const J = d((e) => {
    const s = h(n, e);
    if (!s || y(s)) return;
    if (r) {
      if (H.current = !0, o === s) {
        l(), C && C(s);
        return;
      }
      f(s.name), m && m(s);
      return;
    }
    if (f(s.name), m && m(s), u(s) > 0) {
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
  }, [l, u, r, y, a, C, m, n, o, f]), E = d(() => {
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
  }, [u, a, o, t]), Q = V(() => {
    const e = [];
    return P && e.push(/* @__PURE__ */ i(_, { variant: "neutral", size: "xl", fullWidth: !0, onClick: T, label: I }, "cashier-pts-back")), r && !S && n.length > 0 && e.push(/* @__PURE__ */ i(_, { variant: "secondary", size: "xl", fullWidth: !0, onClick: E, disabled: !z, label: R }, "cashier-pts-continue")), e;
  }, [I, P, R, T, E, z, S, r, n.length]);
  return ue("bottom", Q), le({
    onBack: P ? T : void 0,
    backKey: "Backspace"
  }), b(() => {
    if (!c || !k || r || !t) return;
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
  }, [a, n, t, c, k, r, u]), S || n.length === 0 ? /* @__PURE__ */ i($, { text: "payment.no_pts_found" }) : /* @__PURE__ */ i(me, { title: p("cta.choose_payment_type"), fitted: !0, stickyHeader: !0, children: /* @__PURE__ */ X("div", { className: "px-1.5 @sm:px-3 pt-1 pb-3", children: [
    /* @__PURE__ */ i(fe, { paymentTypes: n, selectable: r, selectedPaymentType: t, onSelect: J, renderActions: U, isPaymentTypeDisabled: y, showMeta: !0 }),
    K
  ] }) });
}
const Ae = () => /* @__PURE__ */ i($, { text: "payment.no_pts_found" });
export {
  Be as PtsView,
  Ae as errorComponent
};
