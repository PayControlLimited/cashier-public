/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierMethods as e } from "./types/CashierConfig.js";
import "./purchase-Bc_pT4mi.js";
import { Dr as t, Tr as n, hn as r } from "./usePaymentSelection-ikQnuCZA.js";
import "./inlinePaymentSubmit-D-34_gib.js";
import { P as i, R as a, t as o } from "./fileRoute-DLfgXLd5.js";
import { t as s } from "./CashierFullscreenLoader-fJ94qcDn.js";
import "./StatusText-DqwaY5yi.js";
import * as c from "react";
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
var d = () => import("./_method-Dv6tOSZ3.js"), f = () => import("./_method-xur2PJOI.js"), p = async (r) => {
	let { merchantId: i, method: a, userId: o, sessionId: s, currency: c, fetchConfig: l, extraAttributes: u, debug: d, apiClient: f, queryClient: p } = r, m = {
		merchantId: i,
		method: a === e.PAYOUT ? e.PAYOUT : e.PAYIN,
		userId: o,
		sessionId: s,
		currency: c,
		fetchConfig: l,
		extraAttributes: u,
		debug: d
	};
	if (p.getQueryState(n(m))?.status === "error") return { paymentTypes: [] };
	try {
		let e = await t(p, m, f);
		return {
			paymentTypes: e.paymentTypes,
			sections: e.sections
		};
	} catch {
		return { paymentTypes: [] };
	}
};
function m() {
	let { translateKey: e } = r();
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
