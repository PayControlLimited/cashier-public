import { CashierMethods as e } from "./types/CashierConfig.js";
import { Cn as t, Ei as n, xn as r } from "./inlinePaymentSubmit-Cw-MCOPa.js";
import { L as i, V as a, i as o, t as s } from "./CashierFullscreenLoader-Dmh5rNDh.js";
import "./StatusText-BtM9vm4x.js";
import * as c from "react";
import "react";
import { jsx as l } from "react/jsx-runtime";
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function u(e, t) {
	let n, r, o, s = () => (n ||= (o = void 0, e().then((e) => {
		n = void 0, l.preload = void 0, r = e[t ?? "default"];
	}).catch((e) => {
		n = void 0, o = e;
	})), n), l = function(e) {
		if (o) {
			if (i(o) && typeof sessionStorage < "u") {
				let e = `tanstack_router_reload:${o.message}`;
				if (!sessionStorage.getItem(e)) throw sessionStorage.setItem(e, "1"), window.location.reload(), new Promise(() => {});
			}
			throw o;
		}
		if (!r) {
			if (a) a(s());
			else throw s();
		}
		return c.createElement(r, e);
	};
	return l.preload = s, l;
}
//#endregion
//#region src/routes/pts/$method.tsx
var d = () => import("./_method-Fs6NAl1-.js"), f = () => import("./_method-Bxeirwjv.js"), p = async (n) => {
	let { merchantId: i, method: a, userId: o, sessionId: s, currency: c, fetchConfig: l, extraAttributes: u, debug: d, apiClient: f, queryClient: p } = n, m = {
		merchantId: i,
		method: a === e.PAYOUT ? e.PAYOUT : e.PAYIN,
		userId: o,
		sessionId: s,
		currency: c,
		fetchConfig: l,
		extraAttributes: u,
		debug: d
	};
	if (p.getQueryState(r(m))?.status === "error") return { paymentTypes: [] };
	try {
		return { paymentTypes: (await t(p, m, f)).paymentTypes };
	} catch {
		return { paymentTypes: [] };
	}
};
function m() {
	let { translateKey: e } = n();
	return /* @__PURE__ */ l(s, {
		label: e("loading.payment_types"),
		labelKey: "loading.payment_types",
		testId: "cashier-payment-types-loading"
	});
}
var h = o("/pts/$method")({
	loader: async ({ context: e }) => p(e),
	component: u(f, "component"),
	pendingComponent: m,
	errorComponent: u(d, "errorComponent")
});
//#endregion
export { u as n, h as t };
