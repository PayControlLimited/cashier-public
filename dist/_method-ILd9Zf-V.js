import { CashierMethods as e } from "./types/CashierConfig.js";
import { L as t, V as n, i as r, t as i } from "./CashierFullscreenLoader-DCT1ukLb.js";
import { Mr as a, xn as o, yn as s } from "./inlinePaymentSubmit-CmI1mVTq.js";
import "./StatusText-DMkg47Ob.js";
import * as c from "react";
import "react";
import { jsx as l } from "react/jsx-runtime";
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function u(e, r) {
	let i, a, o, s = () => (i ||= (o = void 0, e().then((e) => {
		i = void 0, l.preload = void 0, a = e[r ?? "default"];
	}).catch((e) => {
		i = void 0, o = e;
	})), i), l = function(e) {
		if (o) {
			if (t(o) && typeof sessionStorage < "u") {
				let e = `tanstack_router_reload:${o.message}`;
				if (!sessionStorage.getItem(e)) throw sessionStorage.setItem(e, "1"), window.location.reload(), new Promise(() => {});
			}
			throw o;
		}
		if (!a) {
			if (n) n(s());
			else throw s();
		}
		return c.createElement(a, e);
	};
	return l.preload = s, l;
}
//#endregion
//#region src/routes/pts/$method.tsx
var d = () => import("./_method-E6E8rUKi.js"), f = () => import("./_method-C6Uw9Mge.js"), p = async (t) => {
	let { merchantId: n, method: r, userId: i, sessionId: a, currency: c, fetchConfig: l, debug: u, apiClient: d, queryClient: f } = t, p = {
		merchantId: n,
		method: r === e.PAYOUT ? e.PAYOUT : e.PAYIN,
		userId: i,
		sessionId: a,
		currency: c,
		fetchConfig: l,
		debug: u
	};
	if (f.getQueryState(s(p))?.status === "error") return { paymentTypes: [] };
	try {
		return { paymentTypes: (await o(f, p, d)).paymentTypes };
	} catch {
		return { paymentTypes: [] };
	}
};
function m() {
	let { translateKey: e } = a();
	return /* @__PURE__ */ l(i, {
		label: e("loading.payment_types"),
		labelKey: "loading.payment_types",
		testId: "cashier-payment-types-loading"
	});
}
var h = r("/pts/$method")({
	loader: async ({ context: e }) => p(e),
	component: u(f, "component"),
	pendingComponent: m,
	errorComponent: u(d, "errorComponent")
});
//#endregion
export { u as n, h as t };
