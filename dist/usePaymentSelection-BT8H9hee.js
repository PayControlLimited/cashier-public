/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { a as e, c as t, i as n, l as r, n as i, o as a, r as o, s, t as c } from "./observeThemeChanges-BpFOlKgy.js";
import { CashierBonusesStyle as l, CashierComboViewPaymentTypesMode as u, CashierLayoutListType as d, CashierMethods as f, CashierSuggestAction as p, CashierSummaryActionType as m } from "./types/CashierConfig.js";
import { n as h } from "./defaults-ujtlFfus.js";
import { $ as g, A as _, At as v, C as y, Ct as b, D as x, E as S, Et as C, Ft as w, I as T, It as E, J as D, Lt as O, N as k, Nt as A, O as j, Ot as M, Pt as N, Q as P, Rt as F, T as I, Tt as ee, Vt as te, X as ne, Y as re, Z as L, _ as R, _t as z, a as ie, at as ae, bt as oe, c as se, ct as ce, d as le, dt as B, et as ue, g as de, gt as fe, h as pe, ht as me, jt as he, k as ge, kt as _e, lt as ve, m as ye, nt as be, ot as xe, p as Se, pt as Ce, q as we, st as Te, tt as Ee, u as De, ut as Oe, v as ke, w as Ae, x as je, xt as Me, zt as Ne } from "./purchase-CcLuoaCq.js";
import * as Pe from "react";
import V, { Children as Fe, Component as Ie, Fragment as Le, Suspense as Re, cloneElement as ze, createContext as Be, createElement as Ve, forwardRef as He, isValidElement as Ue, lazy as We, useCallback as H, useContext as U, useEffect as Ge, useId as Ke, useImperativeHandle as qe, useLayoutEffect as Je, useMemo as W, useReducer as Ye, useRef as G, useState as K, useSyncExternalStore as Xe } from "react";
import { Fragment as Ze, jsx as q, jsxs as J } from "react/jsx-runtime";
import { createPortal as Qe } from "react-dom";
//#region src/utils/config.ts
var $e = (e, t) => Object.prototype.hasOwnProperty.call(e, t), et = "cashierConfig", tt = [
	"onCheckoutUpdateRequested",
	"onCheckoutStateChanged",
	"onOfferSelectionChanged",
	"onNoPaymentRequired",
	"onInit",
	"onPaymentCreated",
	"onPaymentUpdated",
	"onPaymentFinished",
	"onPaymentSummary",
	"onPendingWithdrawalCancelled",
	"onBonusToppedUp",
	"onBonusSelected",
	"onBonusDeselected",
	"onPaymentTypeSelected",
	"onPaymentTypeDeselected",
	"onAccountDeleted",
	"onPaymentMethodChanged",
	"onPaymentFormChanged"
], nt = [
	"merchantId",
	"userId",
	"sessionId",
	"apiUrl",
	"method",
	"currency",
	"debug",
	"fetchConfig",
	"gotoPaymentType",
	"uiPreselectedPaymentType",
	"user",
	"bonuses",
	"offers",
	"checkout",
	"selectedOfferId",
	"uiOffers",
	"uiOffersStyle",
	"uiOffersAvailable",
	"displayItems",
	"purchaseItems",
	"itemOptions",
	"actionLayout",
	"messages",
	"actions",
	"paymentContextId",
	"elementGroups",
	"elementIssues",
	"extraAttributes",
	"hostRiskContext",
	"returnUrl",
	"hostedFieldsUrl",
	"hostedFieldsFonts",
	"uiSelectorPrefix",
	...tt
], rt = /* @__PURE__ */ new Set([...nt]), it = /* @__PURE__ */ new Set([...Object.keys(h), ...tt]), at = /* @__PURE__ */ new Set([
	"lockAmount",
	"uiPaymentMethodSwitcher",
	"uiUserBalance",
	"uiProgressBar",
	"uiInteractivePrompts",
	"uiCancelPendingPayout",
	"uiPaymentConfirmView",
	"uiFixedControls",
	"uiComboView",
	"uiComboView__PaymentTypePicker",
	"uiComboView__PaymentForm",
	"uiAmountView",
	"uiAmountView__PaymentTypePicker",
	"uiAmountView__PaymentForm",
	"uiCardBrand",
	"uiGroupCardInputs",
	"uiListSelectable",
	"uiShowFees",
	"uiAccountDelete",
	"uiBonuses",
	"uiBonusesAvailable",
	"hostedFieldsAutoFocusNextField"
]), ot = /* @__PURE__ */ new Set([
	"initialAmount",
	"locale",
	"uiSuggestAmounts"
]), st = new Set(Object.values(d)), ct = new Set(Object.values(u)), lt = new Set(Object.values(l)), ut = new Set(Object.values(p)), dt = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}, ft = (e) => {
	if (typeof e != "string") return !1;
	let [t = ""] = e.split(";", 1), n = t.trim().toLowerCase();
	return n === "application/json" || n.endsWith("+json");
}, pt = (e) => dt(e) ? Object.values(e).every((e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean") : !1, mt = (e) => dt(e) ? Object.values(e).every((e) => typeof e == "string" || typeof e == "number") : !1, ht = (e, t) => at.has(e) ? typeof t == "boolean" : ot.has(e) ? typeof t == "string" : e === "uiListStyle" ? typeof t == "string" && st.has(t) : e === "uiComboView__PaymentTypes" ? typeof t == "string" && ct.has(t) : e === "uiBonusesStyle" ? typeof t == "string" && lt.has(t) : e === "uiSuggestAction" ? Array.isArray(t) && t.every((e) => typeof e == "string" && ut.has(e)) : e === "summaryActions" ? F(t) : e === "currencyFormatOptions" || e === "dateTimeFormatOptions" ? pt(t) : e === "uiTheme" && mt(t), gt = (e, t) => {
	te.warn(e, "Cashier cashierConfig asset ignored:", t);
}, _t = (e, t) => {
	t.length !== 0 && te.warn(e, "Cashier cashierConfig asset ignored keys:", t.join(", "));
}, vt = "Cashier remote config is unavailable.", yt = (e, t) => {
	if (!ft(e.contentType)) {
		gt(t, "contentType must be JSON");
		return;
	}
	if (!dt(e.content)) {
		gt(t, "content must be a plain object");
		return;
	}
	let n = {}, r = n, i = [];
	for (let [t, n] of Object.entries(e.content)) it.has(t) ? rt.has(t) ? i.push(t) : ht(t, n) ? r[t] = n : i.push(t) : i.push(t);
	return _t(t, i), Object.keys(n).length > 0 ? n : void 0;
}, bt = (e, t) => {
	let n = e?.find((e) => e.name === et);
	if (!n) throw gt(t, "asset is missing"), Error(vt);
	let r = yt(n, t);
	if (!r) throw gt(t, "content does not contain accepted Cashier config keys"), Error(vt);
	return r;
}, xt = (e, t, n, r) => $e(e, t) ? !!e[t] : $e(e, n) ? !!e[n] : r, St = (e) => typeof e == "string" && ct.has(e), Ct = (e) => typeof e == "string" && lt.has(e), wt = (e) => Ct(e.uiBonusesStyle) ? e.uiBonusesStyle : h.uiBonusesStyle, Tt = (e, t) => e.includes(t) ? e : [...e, t], Et = (e, t) => e.filter((e) => e !== t), Dt = (e) => typeof e == "string" && ut.has(e), Ot = (e) => {
	let t = Array.isArray(e.uiSuggestAction) ? e.uiSuggestAction.filter(Dt) : [...h.uiSuggestAction];
	return $e(e, "uiCancelPendingPayout") ? e.uiCancelPendingPayout === !0 ? Tt(t, p.ON_PENDING_PAYOUT_CANCEL) : Et(t, p.ON_PENDING_PAYOUT_CANCEL) : t;
}, kt = (e) => e !== u.NONE, At = (e, t) => {
	let n = e;
	return $e(n, "uiComboView__PaymentTypes") ? St(n.uiComboView__PaymentTypes) ? n.uiComboView__PaymentTypes : t : $e(n, "uiComboView__PaymentTypePicker") ? n.uiComboView__PaymentTypePicker ? u.PICKER : u.NONE : $e(n, "uiAmountView__PaymentTypePicker") ? n.uiAmountView__PaymentTypePicker ? u.PICKER : u.NONE : t;
}, jt = (e) => {
	let t = xt(e, "uiComboView", "uiAmountView", h.uiComboView), n = At(e, h.uiComboView__PaymentTypes), r = kt(n), i = xt(e, "uiComboView__PaymentForm", "uiAmountView__PaymentForm", h.uiComboView__PaymentForm), a = wt(e), o = Ot(e);
	return {
		...h,
		...e,
		uiBonusesStyle: a,
		uiSuggestAction: o,
		uiComboView: t,
		uiComboView__PaymentTypes: n,
		uiComboView__PaymentTypePicker: r,
		uiComboView__PaymentForm: i,
		uiAmountView: t,
		uiAmountView__PaymentTypePicker: r,
		uiAmountView__PaymentForm: i
	};
}, Mt = (e, t, n) => {
	let r = `{${t}}`;
	return e.includes(r) ? e.replace(r, n) : `${e} ${n}`;
}, Nt = (e) => e === "fixed" || e === "percentage", Pt = (e) => e === "add" || e === "deduct", Ft = (e) => e?.value === void 0 ? null : O(e.value), It = (e) => Ft(e) !== null, Lt = (e) => e === "add" ? "" : e === "deduct" ? "-" : "", Rt = (e) => {
	if (!e) return null;
	if (e.currencyCodeSuffix) return e;
	try {
		let { locale: t, ...n } = e.resolvedOptions();
		return new Intl.NumberFormat(t, { ...n });
	} catch {
		return null;
	}
}, zt = (e, t, n) => {
	let r = n.feeCurrencyFormatter?.resolvedOptions().currency ?? n.feeCurrencyFormatter?.currencyCodeSuffix?.trim() ?? "EUR", i = qt(e, Number.isFinite(Number(t)) && Number(t) >= 0 ? String(t) : "0", r);
	if (!i) return "";
	let a = `${e?.direction === "deduct" && i.feeAmount !== "0" ? "-" : ""}${i.feeAmount}`;
	return n.feeCurrencyFormatter ? n.feeCurrencyFormatter.format(a) : n.formatCurrencyValue(a) || a;
}, Bt = (e, t, n) => {
	let r = zt(e, t, n);
	return r ? {
		id: "fee",
		label: "field.fee.label",
		value: r
	} : null;
}, Vt = (e, t, n) => Ut(e, t, n, {
	id: "total-payout",
	label: "field.total_payout.label",
	includeAddedFee: !1,
	hideWhenUnchanged: !1
}), Ht = (e, t, n) => Ut(e, t, n, {
	id: "total",
	label: "field.total.label",
	includeAddedFee: !0,
	hideWhenUnchanged: !0,
	showWhenEmpty: !0
}), Ut = (e, t, n, r) => {
	if (!e || !Nt(e.feeType) || !Pt(e.direction) || Ft(e) === null) return null;
	let i = Math.max(Number.isFinite(Number(t)) ? Number(t) : 0, 0);
	if (r.showWhenEmpty && i === 0) return {
		id: r.id,
		label: r.label,
		value: {
			value: 0,
			currency: n
		}
	};
	let a = qt(e, typeof t == "string" ? t : String(i), n);
	if (!a) return null;
	let o = r.includeAddedFee ? a.chargedAmount : a.receivedAmount, s = Number(o);
	return r.hideWhenUnchanged && s === i && e.direction !== "deduct" ? null : {
		id: r.id,
		label: r.label,
		value: {
			value: o,
			currency: n
		}
	};
}, Wt = (e, t) => {
	let n = t.filter((e) => e !== null);
	if (n.length === 0) return e;
	let r = e.findIndex((e) => e.id === "remaining-balance");
	return r === -1 ? [...e, ...n] : [
		...e.slice(0, r),
		...n,
		...e.slice(r)
	];
}, Gt = (e, t) => Math.max(e, 0), Kt = (e, t) => Math.max(Number.isFinite(e) ? e : 0, 0), qt = (e, t, n) => {
	if (!e || !Nt(e.feeType) || !Pt(e.direction) || Ft(e) === null || !/^\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(t) || t.length > 8192) return null;
	let r;
	try {
		r = Ee(t);
	} catch {
		return null;
	}
	if (r.coefficient < 0n) return null;
	let i = Ee(String(e.value));
	i.coefficient = i.coefficient < 0n ? -i.coefficient : i.coefficient;
	let a = e.feeType === "percentage" ? ue(r, {
		...i,
		scale: i.scale + 2
	}) : i, o = be(a, L(n)), s = {
		...o,
		coefficient: -o.coefficient
	}, c = D(r, e.direction === "deduct" ? s : Ee(0));
	return c.coefficient < 0n ? null : {
		feeAmount: P(o),
		chargedAmount: P(D(r, e.direction === "add" ? o : Ee(0))),
		receivedAmount: P(c)
	};
}, Jt = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, Yt = (e, t) => {
	if (e !== f.PAYOUT || !t) return null;
	let n = Jt(t.withdrawableBalance);
	return n === null ? null : Math.max(n, 0);
}, Xt = (e, t, n) => {
	let r = Yt(e, t);
	return r === null ? null : Gt(r, n);
}, Zt = (e, t) => Kt(e, t), Qt = /^\d*\.?\d*$/, $t = (e, t) => {
	let n = t.trim().replace(/,/g, ".");
	return Qt.test(n) ? n : e;
}, en = new RegExp(oe), tn = (e, t) => {
	if (!t) return e;
	let n = z(e) ?? "";
	return en.test(n) ? n : "0";
}, nn = (e, t, n) => Xt(e, t, n), rn = (e) => {
	let t = Ce(e), n = B(t);
	if (!n) return null;
	let r = Number(n);
	return Number.isFinite(r) ? r : null;
}, an = (e, t, n) => {
	let r = ve(e, {
		min: t?.min ?? null,
		max: t?.max ?? null,
		maxBoundary: n?.maxBoundary !== null && n?.maxBoundary !== void 0 ? String(n.maxBoundary) : null
	});
	return {
		value: r.value === null ? null : rn(r.value),
		min: r.min === null ? null : rn(r.min),
		max: r.max === null ? null : rn(r.max),
		isBelowMin: r.isBelowMin,
		isAboveMax: r.isAboveMax,
		isOutOfRange: r.isOutOfRange,
		isIncomplete: r.isIncomplete
	};
}, on = (e, t, n) => {
	let r = an(e, t, n);
	if (r.isOutOfRange) {
		if (r.isBelowMin && r.min !== null) return {
			key: "error.amount_below_limit",
			boundaryValue: r.min
		};
		if (r.isAboveMax && r.max !== null) return {
			key: "error.amount_above_limit",
			boundaryValue: r.max
		};
	}
}, sn = (e, t, n) => e ? Mt(t(e.key), "amount", n(e.boundaryValue) || String(e.boundaryValue)) : void 0, cn = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) };
Object.entries({
	$body_: "body",
	$headers_: "headers",
	$path_: "path",
	$query_: "query"
});
//#endregion
//#region ../api/src/payments/core/serverSentEvents.gen.ts
function ln({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) {
	let d, f = c ?? ((e) => new Promise((t) => setTimeout(t, e)));
	return { stream: async function* () {
		let c = a ?? 3e3, p = 0, m = u.signal ?? new AbortController().signal;
		for (; !m.aborted;) {
			p++;
			let a = u.headers instanceof Headers ? u.headers : new Headers(u.headers);
			d !== void 0 && a.set("Last-Event-ID", d);
			try {
				let t = {
					redirect: "follow",
					...u,
					body: u.serializedBody,
					headers: a,
					signal: m
				}, o = new Request(l, t);
				e && (o = await e(l, t));
				let s = await (u.fetch ?? globalThis.fetch)(o);
				if (!s.ok) throw Error(`SSE failed: ${s.status} ${s.statusText}`);
				if (!s.body) throw Error("No body in SSE response");
				let f = s.body.pipeThrough(new TextDecoderStream()).getReader(), p = "", h = () => {
					try {
						f.cancel();
					} catch {}
				};
				m.addEventListener("abort", h);
				try {
					for (;;) {
						let { done: e, value: t } = await f.read();
						if (e) break;
						p += t, p = p.replace(/\r\n?/g, "\n");
						let a = p.split("\n\n");
						p = a.pop() ?? "";
						for (let e of a) {
							let t = e.split("\n"), a = [], o;
							for (let e of t) if (e.startsWith("data:")) a.push(e.replace(/^data:\s*/, ""));
							else if (e.startsWith("event:")) o = e.replace(/^event:\s*/, "");
							else if (e.startsWith("id:")) d = e.replace(/^id:\s*/, "");
							else if (e.startsWith("retry:")) {
								let t = Number.parseInt(e.replace(/^retry:\s*/, ""), 10);
								Number.isNaN(t) || (c = t);
							}
							let s, l = !1;
							if (a.length) {
								let e = a.join("\n");
								try {
									s = JSON.parse(e), l = !0;
								} catch {
									s = e;
								}
							}
							l && (i && await i(s), r && (s = await r(s))), n?.({
								data: s,
								event: o,
								id: d,
								retry: c
							}), a.length && (yield s);
						}
					}
				} finally {
					m.removeEventListener("abort", h), f.releaseLock();
				}
				break;
			} catch (e) {
				if (t?.(e), o !== void 0 && p >= o) break;
				let n = Math.min(c * 2 ** (p - 1), s ?? 3e4);
				await f(n);
			}
		}
	}() };
}
//#endregion
//#region ../api/src/payments/core/pathSerializer.gen.ts
var un = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, dn = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, fn = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, pn = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(dn(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = un(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : mn({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, mn = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, hn = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
	if (i instanceof Date) return a ? i.toISOString() : `${n}=${i.toISOString()}`;
	if (r !== "deepObject" && !t) {
		let t = [];
		Object.entries(i).forEach(([n, r]) => {
			t = [
				...t,
				n,
				e ? r : encodeURIComponent(r)
			];
		});
		let a = t.join(",");
		switch (r) {
			case "form": return `${n}=${a}`;
			case "label": return `.${a}`;
			case "matrix": return `;${n}=${a}`;
			default: return a;
		}
	}
	let o = fn(r), s = Object.entries(i).map(([t, i]) => mn({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, gn = /\{[^{}]+\}/g, _n = ({ path: e, url: t }) => {
	let n = t, r = t.match(gn);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, pn({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, hn({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${mn({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, vn = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = _n({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function yn(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
//#endregion
//#region ../api/src/payments/core/auth.gen.ts
var bn = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, xn = ({ parameters: e = {}, ...t } = {}) => (n) => {
	let r = [];
	if (n && typeof n == "object") for (let i in n) {
		let a = n[i];
		if (a == null) continue;
		let o = e[i] || t;
		if (Array.isArray(a)) {
			let e = pn({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "form",
				value: a,
				...o.array
			});
			e && r.push(e);
		} else if (typeof a == "object") {
			let e = hn({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "deepObject",
				value: a,
				...o.object
			});
			e && r.push(e);
		} else {
			let e = mn({
				allowReserved: o.allowReserved,
				name: i,
				value: a
			});
			e && r.push(e);
		}
	}
	return r.join("&");
}, Sn = (e) => {
	if (!e) return "stream";
	let t = e.split(";")[0]?.trim();
	if (t) {
		if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
		if (t === "multipart/form-data") return "formData";
		if ([
			"application/",
			"audio/",
			"image/",
			"video/"
		].some((e) => t.startsWith(e))) return "blob";
		if (t.startsWith("text/")) return "text";
	}
}, Cn = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1;
async function wn(e) {
	for (let t of e.security ?? []) {
		if (Cn(e, t.name)) continue;
		let n = await bn(t, e.auth);
		if (!n) continue;
		let r = t.name ?? "Authorization";
		switch (t.in) {
			case "query":
				e.query ||= {}, e.query[r] = n;
				break;
			case "cookie":
				e.headers.append("Cookie", `${r}=${n}`);
				break;
			default: e.headers.set(r, n);
		}
	}
}
var Tn = (e) => vn({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : xn(e.querySerializer),
	url: e.url
}), En = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = On(e.headers, t.headers), n;
}, Dn = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, On = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? Dn(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, kn = class {
	fns = [];
	clear() {
		this.fns = [];
	}
	eject(e) {
		let t = this.getInterceptorIndex(e);
		this.fns[t] && (this.fns[t] = null);
	}
	exists(e) {
		let t = this.getInterceptorIndex(e);
		return !!this.fns[t];
	}
	getInterceptorIndex(e) {
		return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
	}
	update(e, t) {
		let n = this.getInterceptorIndex(e);
		return this.fns[n] ? (this.fns[n] = t, e) : !1;
	}
	use(e) {
		return this.fns.push(e), this.fns.length - 1;
	}
}, An = () => ({
	error: new kn(),
	request: new kn(),
	response: new kn()
}), jn = xn({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), Mn = { "Content-Type": "application/json" }, Nn = (e = {}) => ({
	...cn,
	headers: Mn,
	parseAs: "auto",
	querySerializer: jn,
	...e
}), Pn = (e = {}) => {
	let t = En(Nn(), e), n = () => ({ ...t }), r = (e) => (t = En(t, e), n()), i = An(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: On(t.headers, e.headers),
			serializedBody: void 0
		};
		n.security && await wn(n), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type");
		let r = n;
		return {
			opts: r,
			url: Tn(r)
		};
	}, o = async (e) => {
		let n = e.throwOnError ?? t.throwOnError, r = e.responseStyle ?? t.responseStyle, o, s;
		try {
			let { opts: t, url: n } = await a(e), r = {
				redirect: "follow",
				...t,
				body: yn(t)
			};
			o = new Request(n, r);
			for (let e of i.request.fns) e && (o = await e(o, t));
			let c = t.fetch;
			s = await c(o);
			for (let e of i.response.fns) e && (s = await e(s, o, t));
			let l = {
				request: o,
				response: s
			};
			if (s.ok) {
				let e = (t.parseAs === "auto" ? Sn(s.headers.get("Content-Type")) : t.parseAs) ?? "json";
				if (s.status === 204 || s.headers.get("Content-Length") === "0") {
					let n;
					switch (e) {
						case "arrayBuffer":
						case "blob":
						case "text":
							n = await s[e]();
							break;
						case "formData":
							n = new FormData();
							break;
						case "stream":
							n = s.body;
							break;
						default: n = {};
					}
					return t.responseStyle === "data" ? n : {
						data: n,
						...l
					};
				}
				let n;
				switch (e) {
					case "arrayBuffer":
					case "blob":
					case "formData":
					case "text":
						n = await s[e]();
						break;
					case "json": {
						let e = await s.text();
						n = e ? JSON.parse(e) : {};
						break;
					}
					case "stream": return t.responseStyle === "data" ? s.body : {
						data: s.body,
						...l
					};
				}
				return e === "json" && (t.responseValidator && await t.responseValidator(n), t.responseTransformer && (n = await t.responseTransformer(n))), t.responseStyle === "data" ? n : {
					data: n,
					...l
				};
			}
			let u = await s.text(), d;
			try {
				d = JSON.parse(u);
			} catch {}
			throw d ?? u;
		} catch (t) {
			let a = t;
			for (let t of i.error.fns) t && (a = await t(a, s, o, e));
			if (a ||= {}, n) throw a;
			return r === "data" ? void 0 : {
				error: a,
				request: o,
				response: s
			};
		}
	}, s = (e) => (t) => o({
		...t,
		method: e
	}), c = (e) => async (t) => {
		let { opts: n, url: r } = await a(t);
		return ln({
			...n,
			body: n.body,
			method: e,
			onRequest: async (e, t) => {
				let r = new Request(e, t);
				for (let e of i.request.fns) e && (r = await e(r, n));
				return r;
			},
			serializedBody: yn(n),
			url: r
		});
	};
	return {
		buildUrl: (e) => Tn({
			...t,
			...e
		}),
		connect: s("CONNECT"),
		delete: s("DELETE"),
		get: s("GET"),
		getConfig: n,
		head: s("HEAD"),
		interceptors: i,
		options: s("OPTIONS"),
		patch: s("PATCH"),
		post: s("POST"),
		put: s("PUT"),
		request: o,
		setConfig: r,
		sse: {
			connect: c("CONNECT"),
			delete: c("DELETE"),
			get: c("GET"),
			head: c("HEAD"),
			options: c("OPTIONS"),
			patch: c("PATCH"),
			post: c("POST"),
			put: c("PUT"),
			trace: c("TRACE")
		},
		trace: s("TRACE")
	};
}, Fn = Pn(Nn({ baseUrl: "https://api.example.com" })), In = (e) => (e.lastSuccessful &&= new Date(e.lastSuccessful), e), Ln = (e) => (e.paymentTypes &&= e.paymentTypes.map((e) => In(e)), e), Rn = async (e) => (e = Ln(e), e), zn = async (e) => (e = Ln(e), e), Bn = (e) => (e.createdAt = new Date(e.createdAt), e), Vn = (e) => (e.payments = e.payments.map((e) => Bn(e)), e), Hn = async (e) => (e = Vn(e), e), Un = (e) => (e.client ?? Fn).get({
	responseTransformer: Rn,
	url: "/payment-types",
	...e
}), Wn = (e) => (e.client ?? Fn).post({
	responseTransformer: zn,
	url: "/payment-types",
	...e,
	headers: {
		"Content-Type": "application/json",
		...e.headers
	}
}), Gn = (e) => (e.client ?? Fn).post({
	url: "/payment/{paymentType}/{method}",
	...e,
	headers: {
		"Content-Type": "application/json",
		...e.headers
	}
}), Kn = (e) => (e.client ?? Fn).get({
	url: "/payment/status/{paymentId}",
	...e
}), qn = (e) => (e.client ?? Fn).get({
	url: "/payment/summary/{paymentId}",
	...e
}), Jn = (e) => (e.client ?? Fn).get({
	responseTransformer: Hn,
	url: "/payment/history",
	...e
}), Yn = (e) => (e.client ?? Fn).post({
	url: "/payment/{paymentId}/cancel",
	...e
}), Xn = (e) => (e.client ?? Fn).get({
	url: "/i18n",
	...e
}), Zn = (e) => (e.client ?? Fn).post({
	url: "/account/delete",
	...e
}), Qn = (e) => typeof e == "string" ? e.length > 0 ? [e] : [] : e ?? [], $n = (e, t) => {
	let n = "";
	for (let r of Qn(t)) {
		if (typeof r != "string" || r.length === 0) continue;
		n = r;
		let t = e[r];
		if (typeof t == "string" && t.length > 0) return t;
	}
	return n;
}, er = ({ merchantId: e, locale: t }) => [
	"cashier",
	"i18n",
	e,
	t
], tr = (e, t) => ({
	queryKey: er(e),
	queryFn: ({ signal: n }) => nr(e, t, n),
	retry: !1,
	staleTime: 6e5,
	gcTime: 18e5
}), nr = async ({ merchantId: e, locale: t }, n, r) => {
	let { data: i, error: a } = await Xn({
		query: {
			merchantId: e,
			locale: t
		},
		cache: "no-store",
		throwOnError: !1,
		client: n,
		signal: r
	});
	return a ? {} : i?.texts ?? {};
}, rr = Be(null), ir = () => U(rr), ar = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}, or = new class extends ar {
	#e;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e((e) => {
			typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#e !== e && (this.#e = e, this.onFocus());
	}
	onFocus() {
		let e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
	}
}(), sr = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, cr = new class {
	#e = sr;
	#t = !1;
	setTimeoutProvider(e) {
		process.env.NODE_ENV !== "production" && this.#t && e !== this.#e && console.error("[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.", {
			previous: this.#e,
			provider: e
		}), this.#e = e, process.env.NODE_ENV !== "production" && (this.#t = !1);
	}
	setTimeout(e, t) {
		return process.env.NODE_ENV !== "production" && (this.#t = !0), this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return process.env.NODE_ENV !== "production" && (this.#t = !0), this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}();
function lr(e) {
	setTimeout(e, 0);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/utils.js
var ur = typeof window > "u" || "Deno" in globalThis;
function dr() {}
function fr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function pr(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function mr(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function hr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function gr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function _r(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== yr(o, t.options)) return !1;
		} else if (!xr(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function vr(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (br(t.options.mutationKey) !== br(a)) return !1;
		} else if (!xr(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function yr(e, t) {
	return (t?.queryKeyHashFn || br)(e);
}
function br(e) {
	return JSON.stringify(e, (e, t) => Er(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function xr(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!xr(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!xr(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var Sr = Object.prototype.hasOwnProperty;
function Cr(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = Tr(e) && Tr(t);
	if (!r && !(Er(e) && Er(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : Sr.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = Cr(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function wr(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function Tr(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Er(e) {
	if (!Dr(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!Dr(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Dr(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Or(e) {
	return new Promise((t) => {
		cr.setTimeout(t, e);
	});
}
function kr(e, t, n) {
	if (typeof n.structuralSharing == "function") return n.structuralSharing(e, t);
	if (n.structuralSharing !== !1) {
		if (process.env.NODE_ENV !== "production") try {
			return Cr(e, t);
		} catch (e) {
			throw console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${e}`), e;
		}
		return Cr(e, t);
	}
	return t;
}
function Ar(e) {
	return e;
}
function jr(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function Mr(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var Nr = /* @__PURE__ */ Symbol();
function Pr(e, t) {
	return process.env.NODE_ENV !== "production" && e.queryFn === Nr && console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`), !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Nr ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function Fr(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function Ir(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r || (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 })), i)
	}), e;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/environmentManager.js
var Lr = /* @__PURE__ */ (() => {
	let e = () => ur;
	return {
		isServer() {
			return e();
		},
		setIsServer(t) {
			e = t;
		}
	};
})();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/thenable.js
function Rr() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	n.status = "pending", n.catch(() => {});
	function r(e) {
		Object.assign(n, e), delete n.resolve, delete n.reject;
	}
	return n.resolve = (t) => {
		r({
			status: "fulfilled",
			value: t
		}), e(t);
	}, n.reject = (e) => {
		r({
			status: "rejected",
			reason: e
		}), t(e);
	}, n;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/notifyManager.js
var zr = lr;
function Br() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = zr, a = (r) => {
		t ? e.push(r) : i(() => {
			n(r);
		});
	}, o = () => {
		let t = e;
		e = [], t.length && i(() => {
			r(() => {
				t.forEach((e) => {
					n(e);
				});
			});
		});
	};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				t--, t || o();
			}
			return n;
		},
		batchCalls: (e) => (...t) => {
			a(() => {
				e(...t);
			});
		},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var Vr = Br(), Hr = new class extends ar {
	#e = !0;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#e !== e && (this.#e = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#e;
	}
}();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/retryer.js
function Ur(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Wr(e) {
	return (e ?? "online") !== "online" || Hr.isOnline();
}
var Gr = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function Kr(e) {
	let t = !1, n = 0, r, i = Rr(), a = () => i.status !== "pending", o = (t) => {
		if (!a()) {
			let n = new Gr(t);
			f(n), e.onCancel?.(n);
		}
	}, s = () => {
		t = !0;
	}, c = () => {
		t = !1;
	}, l = () => or.isFocused() && (e.networkMode === "always" || Hr.isOnline()) && e.canRun(), u = () => Wr(e.networkMode) && e.canRun(), d = (e) => {
		a() || (r?.(), i.resolve(e));
	}, f = (e) => {
		a() || (r?.(), i.reject(e));
	}, p = () => new Promise((t) => {
		r = (e) => {
			(a() || l()) && t(e);
		}, e.onPause?.();
	}).then(() => {
		r = void 0, a() || e.onContinue?.();
	}), m = () => {
		if (a()) return;
		let r, i = n === 0 ? e.initialPromise : void 0;
		try {
			r = i ?? e.fn();
		} catch (e) {
			r = Promise.reject(e);
		}
		Promise.resolve(r).then(d).catch((r) => {
			if (a()) return;
			let i = e.retry ?? (Lr.isServer() ? 0 : 3), o = e.retryDelay ?? Ur, s = typeof o == "function" ? o(n, r) : o, c = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			t || !c ? f(r) : (n++, e.onFail?.(n, r), Or(s).then(() => l() ? void 0 : p()).then(() => {
				t ? f(r) : m();
			}));
		});
	};
	return {
		promise: i,
		status: () => i.status,
		cancel: o,
		continue: () => (r?.(), i),
		cancelRetry: s,
		continueRetry: c,
		canStart: u,
		start: () => (u() ? m() : p().then(m), i)
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/removable.js
var qr = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), pr(this.gcTime) && (this.#e = cr.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (Lr.isServer() ? Infinity : 3e5));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (cr.clearTimeout(this.#e), this.#e = void 0);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function Jr(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				Ir(e, () => t.signal, () => n = !0);
			}, u = Pr(t.options, t.fetchOptions), d = async (e, r, i) => {
				if (n) return Promise.reject(t.signal.reason);
				if (r == null && e.pages.length) return Promise.resolve(e);
				let a = (() => {
					let e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: r,
						direction: i ? "backward" : "forward",
						meta: t.options.meta
					};
					return l(e), e;
				})(), o = await u(a), { maxPages: s } = t.options, c = i ? Mr : jr;
				return {
					pages: c(e.pages, o, s),
					pageParams: c(e.pageParams, r, s)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? Xr : Yr, n = {
					pages: a,
					pageParams: o
				};
				s = await d(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] ?? r.initialPageParam : Yr(r, s);
					if (c > 0 && e == null) break;
					s = await d(s, e), c++;
				} while (c < t);
			}
			return s;
		};
		t.fetchFn = t.options.persister ? () => t.options.persister?.(l, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : l;
	} };
}
function Yr(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Xr(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/query.js
var Zr = class extends qr {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		super(), this.#s = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#r = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = ei(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#e;
	}
	get promise() {
		return this.#a?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#o,
			...e
		}, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
			let e = ei(this.options);
			e.data !== void 0 && (this.setState($r(e.data, e.dataUpdatedAt)), this.#t = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
	}
	setData(e, t) {
		let n = kr(this.state.data, e, this.options);
		return this.#l({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#l({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		let t = this.#a?.promise;
		return this.#a?.cancel(e), t ? t.then(dr).catch(dr) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#t;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => gr(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Nr || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 && this.observers.some((e) => hr(e.options.staleTime, this) === "static");
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !mr(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()), this.scheduleGc()), this.#r.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	#c() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		this.state.isInvalidated || this.#l({ type: "invalidate" });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
		let n = new AbortController(), r = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#s = !0, n.signal)
			});
		}, i = () => {
			let e = Pr(this.options, t), n = (() => {
				let e = {
					client: this.#i,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return r(e), e;
			})();
			return this.#s = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, a = (() => {
			let e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#i,
				state: this.state,
				fetchFn: i
			};
			return r(e), e;
		})();
		(this.#e === "infinite" ? Jr(this.options.pages) : this.options.behavior)?.onFetch(a, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
			type: "fetch",
			meta: a.fetchOptions?.meta
		}), this.#a = Kr({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof Gr && e.revert && this.setState({
					...this.#n,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#l({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#l({ type: "pause" });
			},
			onContinue: () => {
				this.#l({ type: "continue" });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		});
		try {
			let e = await this.#a.start();
			if (e === void 0) throw process.env.NODE_ENV !== "production" && console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`), Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#r.config.onSuccess?.(e, this), this.#r.config.onSettled?.(e, this.state.error, this), e;
		} catch (e) {
			if (e instanceof Gr) {
				if (e.silent) return this.#a.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw this.#l({
				type: "error",
				error: e
			}), this.#r.config.onError?.(e, this), this.#r.config.onSettled?.(this.state.data, e, this), e;
		} finally {
			this.scheduleGc();
		}
	}
	#l(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...Qr(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...$r(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#n = e.manual ? n : void 0, n;
				case "error":
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
		};
		this.state = t(this.state), Vr.batch(() => {
			this.observers.forEach((e) => {
				e.onQueryUpdate();
			}), this.#r.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Qr(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Wr(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function $r(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function ei(e) {
	let t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/queryObserver.js
var ti = class extends ar {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = Rr(), this.bindMethods(), this.setOptions(t);
	}
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), ri(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return ii(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return ii(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof gr(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !wr(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && ai(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || gr(this.options.enabled, this.#t) !== gr(t.enabled, this.#t) || hr(this.options.staleTime, this.#t) !== hr(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || gr(this.options.enabled, this.#t) !== gr(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return si(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), n === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#o.status === "pending" && this.#o.reject(/* @__PURE__ */ Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#m.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t);
		return n.fetch().then(() => this.createResult(n, t));
	}
	fetch(e) {
		return this.#h({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#h(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(dr)), t;
	}
	#g() {
		this.#b();
		let e = hr(this.options.staleTime, this.#t);
		if (Lr.isServer() || this.#r.isStale || !pr(e)) return;
		let t = mr(this.#r.dataUpdatedAt, e) + 1;
		this.#d = cr.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !Lr.isServer() && gr(this.options.enabled, this.#t) !== !1 && pr(this.#p) && this.#p !== 0 && (this.#f = cr.setInterval(() => {
			(this.options.refetchIntervalInBackground || or.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d !== void 0 && (cr.clearTimeout(this.#d), this.#d = void 0);
	}
	#x() {
		this.#f !== void 0 && (cr.clearInterval(this.#f), this.#f = void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && ri(e, t), o = i && ai(e, n, t, r);
			(a || o) && (l = {
				...l,
				...Qr(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (m = "success", d = kr(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) {
			if (i && d === a?.data && t.select === this.#c) d = this.#l;
			else try {
				this.#c = t.select, d = t.select(d), d = kr(i?.data, d, t), this.#l = d, this.#s = null;
			} catch (e) {
				this.#s = e;
			}
		}
		this.#s && (f = this.#s, d = this.#l, p = Date.now(), m = "error");
		let g = l.fetchStatus === "fetching", _ = m === "pending", v = m === "error", y = _ && g, b = d !== void 0, x = {
			status: m,
			fetchStatus: l.fetchStatus,
			isPending: _,
			isSuccess: m === "success",
			isError: v,
			isInitialLoading: y,
			isLoading: y,
			data: d,
			dataUpdatedAt: l.dataUpdatedAt,
			error: f,
			errorUpdatedAt: p,
			failureCount: l.fetchFailureCount,
			failureReason: l.fetchFailureReason,
			errorUpdateCount: l.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
			isFetching: g,
			isRefetching: g && !_,
			isLoadingError: v && !b,
			isPaused: l.fetchStatus === "paused",
			isPlaceholderData: u,
			isRefetchError: v && b,
			isStale: oi(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: gr(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = x.data !== void 0, r = x.status === "error" && !t, i = (e) => {
				r ? e.reject(x.error) : t && e.resolve(x.data);
			}, a = () => {
				let e = this.#o = x.promise = Rr();
				i(e);
			}, o = this.#o;
			switch (o.status) {
				case "pending":
					e.queryHash === n.queryHash && i(o);
					break;
				case "fulfilled":
					(r || x.data !== o.value) && a();
					break;
				case "rejected": (!r || x.error !== o.reason) && a();
			}
		}
		return x;
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !wr(t, e) && (this.#r = t, this.#C({ listeners: (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#m.size) return !0;
			let r = new Set(n ?? this.#m);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})() }));
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
	#C(e) {
		Vr.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function ni(e, t) {
	return gr(t.enabled, e) !== !1 && e.state.data === void 0 && (e.state.status !== "error" || gr(t.retryOnMount, e) !== !1);
}
function ri(e, t) {
	return ni(e, t) || e.state.data !== void 0 && ii(e, t, t.refetchOnMount);
}
function ii(e, t, n) {
	if (gr(t.enabled, e) !== !1 && hr(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && oi(e, t);
	}
	return !1;
}
function ai(e, t, n, r) {
	return (e !== t || gr(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && oi(e, n);
}
function oi(e, t) {
	return gr(t.enabled, e) !== !1 && e.isStaleByTime(hr(t.staleTime, e));
}
function si(e, t) {
	return !wr(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutation.js
var ci = class extends qr {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || li(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#r = Kr({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		let r = this.state.status === "pending", i = !this.#r.canStart();
		try {
			if (r) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			let a = await this.#r.start();
			return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n), await this.options.onSuccess?.(a, e, this.state.context, n), await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(a, null, e, this.state.context, n), this.#i({
				type: "success",
				data: a
			}), a;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), Vr.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function li() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var ui = class extends ar {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), wr(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && br(t.mutationKey) !== br(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? li();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		Vr.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
}, di = () => {
	let e = 0, t, n = Object.freeze({
		revision: 0,
		phase: "idle",
		active: !0
	}), r = /* @__PURE__ */ new Set(), i = (e, t = n.active) => {
		n = Object.freeze({
			...e,
			revision: n.revision + 1,
			active: t
		});
		for (let e of [...r]) try {
			let t = e();
			t && Promise.resolve(t).catch(() => void 0);
		} catch {}
	}, a = (e) => n.active && (n.phase === "creating" || n.phase === "acknowledged") && t?.attempt === e && !e.signal.aborted, o = (e, r = n.active) => {
		let a = t;
		t = void 0, i(e, r), a?.abort.abort();
	};
	return Object.freeze({
		getSnapshot: () => n,
		subscribe: (e) => n.phase === "destroyed" ? () => void 0 : (r.add(e), () => {
			r.delete(e);
		}),
		begin: (r = {}) => {
			if (!n.active || n.phase === "destroyed" || n.phase === "creating" || n.phase === "acknowledged" || n.phase === "unknown" && !r.allowUnknownRetry) throw Error("error.payment_processing_failed");
			let a = new AbortController(), o = Object.freeze({
				sequence: ++e,
				signal: a.signal
			});
			return t = {
				attempt: o,
				abort: a
			}, i({ phase: "creating" }), o;
		},
		accepts: a,
		confirm: (e, t) => {
			if (!a(e) || n.phase !== "creating") return !1;
			if (typeof t != "string" || !t.trim()) throw Error("error.payment_id_missing");
			return i({
				phase: "acknowledged",
				paymentId: t.trim()
			}), a(e);
		},
		fail: (e, r) => {
			a(e) && n.phase === "creating" && (t = void 0, i({ phase: r === "rejected" ? "idle" : "unknown" }));
		},
		cancel: () => {
			n.phase === "creating" && o({ phase: "unknown" });
		},
		acknowledge: () => {
			n.phase !== "destroyed" && n.phase !== "idle" && o({ phase: "idle" });
		},
		resetScope: () => {
			n.phase !== "destroyed" && o({ phase: "idle" });
		},
		activate: () => {
			n.phase !== "destroyed" && !n.active && i(n, !0);
		},
		deactivate: () => {
			n.phase !== "destroyed" && n.active && o(n.phase === "creating" ? { phase: "unknown" } : n, !1);
		},
		destroy: () => {
			n.phase !== "destroyed" && (o({ phase: "destroyed" }, !1), r.clear());
		}
	});
}, fi = /* @__PURE__ */ new Set([
	"	",
	"\n",
	"\v",
	"\f",
	"\r",
	" "
]), pi = (e) => {
	let t = 0, n = e.length;
	for (; t < n && fi.has(e[t]);) t += 1;
	for (; n > t && fi.has(e[n - 1]);) --n;
	return e.slice(t, n);
}, mi = (e) => typeof e == "string" ? pi(e) : typeof e == "boolean" ? String(e) : typeof e == "number" && Number.isFinite(e) ? pi(String(e)) : "", hi = (e) => e instanceof Error ? e.message : String(e), gi = (e, { onInvalidPattern: t } = {}) => {
	if (!e || e.length === 0) return [];
	let n = [];
	for (let r of e) {
		let e = r.when?.fieldId, i = r.when?.pattern, a = r.set;
		if (e && i && a) try {
			n.push({
				fieldId: e,
				guard: new RegExp(i),
				set: a
			});
		} catch (e) {
			t?.(i, hi(e));
		}
	}
	return n;
}, _i = (e, t) => {
	let n = {};
	for (let { fieldId: r, guard: i, set: a } of e) {
		let e = mi(t[r]);
		e.length !== 0 && (Array.from(e).length > 512 || i.test(e) && (a.rule && (n.rule = a.rule), a.required && (n.required = a.required), a.hidden !== void 0 && (n.hidden = a.hidden)));
	}
	return n;
}, vi = (e, t, n) => {
	if (!e.overrides || e.overrides.length === 0) return e;
	let { overrides: r, ...i } = e, a = i, { rule: o, required: s, hidden: c } = _i(t, n);
	return o === void 0 && s === void 0 && c === void 0 || ((o !== void 0 || s !== void 0) && (a.validation = {
		...e.validation,
		...o === void 0 ? {} : { rules: [o] },
		...s === void 0 ? {} : { required: s }
	}), c !== void 0 && (a.hidden = c)), a;
}, yi = "This field is required", bi = "Invalid value", xi = (e, t = {}) => {
	if (!/^(0[1-9]|1[0-2])[0-9]{2}$/.test(e)) return !1;
	let n = t.maxFutureYears ?? 19;
	if (!Number.isInteger(n) || n < 0 || n > 49) return !1;
	let r = t.now ?? /* @__PURE__ */ new Date();
	if (!Number.isFinite(r.getTime())) return !1;
	let i = r.getUTCFullYear() % 100, a = r.getUTCMonth() + 1, o = Number(e.slice(0, 2)), s = (Number(e.slice(2, 4)) - i + 100) % 100;
	return !(s > n || s === 0 && o < a || s === n && o > a);
}, Si = (e, t) => typeof e == "string" && e.trim().length > 0 ? e : t, Ci = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let { pattern: e } = n;
		if (typeof e == "string" && e.length !== 0) try {
			t.push({
				pattern: e,
				regex: new RegExp(e),
				message: Si(n.invalidMessage, bi)
			});
		} catch (t) {
			if (process.env.NODE_ENV !== "production") {
				let n = t instanceof Error ? t.message : String(t);
				console.warn("[validation] Unable to compile RegExp for pattern \"%s\": %s", e, n);
			}
		}
	}
	return t;
}, wi = (e, { forceRequired: t = !1 } = {}) => {
	let n = t || !!e?.required?.value, r = Ci(e?.rules), i = !!e?.iban?.value, a = e?.expiryDate, o = a?.value === !0;
	if (!n && r.length === 0 && !i && !o) return;
	let s = n ? {
		value: !0,
		invalidMessage: Si(e?.required?.invalidMessage, yi)
	} : void 0, c = i ? {
		value: !0,
		invalidMessage: Si(e?.iban?.invalidMessage, bi)
	} : void 0, l = a?.value === !0 ? {
		value: !0,
		maxFutureYears: a.maxFutureYears ?? 19,
		invalidMessage: Si(a.invalidMessage, bi)
	} : void 0;
	return {
		...s ? { required: s } : {},
		...c ? { iban: c } : {},
		...l ? { expiryDate: l } : {},
		...r.length > 0 ? { rules: r } : {}
	};
}, Ti = (e, t) => {
	let n = wi(e, t), r = !!n?.required, i = n?.required?.invalidMessage ?? yi, a = !!n?.iban?.value, o = n?.iban?.invalidMessage ?? bi, s = n?.expiryDate;
	return {
		config: n,
		evaluate: (e, c) => {
			let l = !!c?.includeRequired;
			if (e == null) return l && r ? i : void 0;
			let u = null;
			if (typeof e == "string" ? u = e : (typeof e == "number" || typeof e == "boolean") && (u = String(e)), u === null || pi(u).length === 0) return l && r ? i : void 0;
			if (Array.from(u).length > 512) return n?.rules?.[0]?.message ?? bi;
			let d = a ? fe(u) : u;
			for (let { regex: e, message: t } of n?.rules ?? []) if (!e.test(d)) return t;
			if (a && !me(u)) return o;
			if (s && !xi(u, {
				now: t?.now?.(),
				maxFutureYears: s.maxFutureYears
			})) return s.invalidMessage;
		}
	};
}, Ei = (e) => e?.invalidMessageKeys ?? e?.invalidMessage, Di = "This field is required", Oi = "Invalid value", ki = (e, t, n) => {
	let r = Qn(e).filter((e) => typeof e == "string" && e.trim().length > 0);
	if (r.length === 0) return t;
	let i = n(r);
	return i.length > 0 ? i : t;
}, Ai = (e, t) => {
	if (!e || e.length === 0) return [];
	let n = [];
	for (let r of e) {
		let e = r.pattern;
		if (typeof e == "string" && e.length !== 0) try {
			n.push({
				regex: new RegExp(e),
				message: ki(Ei(r), Oi, t)
			});
		} catch (t) {
			if (process.env.NODE_ENV !== "production") {
				let n = t instanceof Error ? t.message : String(t);
				console.warn("[Cashier] Invalid validation pattern \"%s\": %s", e, n);
			}
		}
	}
	return n;
}, ji = (e, t, n) => {
	if (!t) return;
	let r = !!t.required?.value, i = !!t.iban?.value, a = ki(Ei(t.required), Di, n), o = ki(Ei(t.iban), Oi, n), s = Ai(t.rules, n);
	if (!r && !i && s.length === 0) return;
	if (e == null) return r ? a : void 0;
	let c = null;
	if (typeof e == "string" ? c = e : (typeof e == "number" || typeof e == "boolean") && (c = String(e)), c === null || pi(c).length === 0) return r ? a : void 0;
	if (Array.from(c).length > 512) return s[0]?.message ?? Oi;
	let l = i ? fe(c) : c;
	for (let e of s) if (!e.regex.test(l)) return e.message;
	if (i && !me(c)) return o;
}, Mi = (e) => e === void 0 ? "" : typeof e == "boolean" ? e ? "true" : "false" : e, Ni = (e) => e === !0 || e === "true", Pi = (e) => Object.entries(e).reduce((e, [t, n]) => (e[t] = Mi(n), e), {}), Fi = /* @__PURE__ */ new Set(["display", "qrcode"]), Ii = "select", Li = (e) => e.type === Ii ? e.options?.[0]?.value : void 0, Ri = (e, t) => (e ?? []).reduce((e, n) => {
	let r = n.id;
	return !r || n.type && Fi.has(n.type) || (e[r] = t[r] ?? n.defaultValue ?? Li(n) ?? ""), e;
}, {}), zi = (e) => typeof e == "string" ? pi(e).length > 0 : e === !0, Bi = (e) => e ? typeof e == "string" ? z(e) !== null : Array.isArray(e) ? e.some(Bi) : typeof e == "object" && Object.values(e).some(Bi) : !1, Vi = /* @__PURE__ */ new WeakMap(), Hi = (e, t) => {
	process.env.NODE_ENV !== "production" && console.warn("[Cashier] Invalid field override guard pattern \"%s\": %s", e, t);
}, Ui = (e) => {
	let t = Vi.get(e);
	if (t) return t;
	let n = gi(e, { onInvalidPattern: Hi });
	return Vi.set(e, n), n;
}, Wi = (e, t) => {
	let n = e.overrides;
	return !n || n.length === 0 ? e : vi(e, Ui(n), t);
}, Gi = (e, t) => (e ?? []).map((e) => Wi(e, t)), Ki = (e, t) => !e.id || e.hidden || !e.overrides?.length || e.type && Fi.has(e.type) ? !1 : Wi(e, t).hidden === !0, qi = (e, t) => (e ?? []).reduce((e, n) => (Ki(n, t) && n.id && e.add(n.id), e), /* @__PURE__ */ new Set()), Ji = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let { fieldId: t, value: i } of e) n.has(t) || r.set(t, i);
	for (let { fieldId: e, value: n } of t) r.set(e, n);
	return Array.from(r, ([e, t]) => ({
		fieldId: e,
		value: t
	}));
}, Yi = (e, t) => (e ?? []).reduce((e, n) => {
	let r = n.id;
	if (!r || !Ki(n, t)) return e;
	let i = n.defaultValue ?? "";
	return Mi(t[r]) === i || e.push({
		fieldId: r,
		value: i
	}), e;
}, []), Xi = (e, t) => (e ?? []).some((e) => {
	let n = e.id;
	return !n || !Wi(e, t).validation?.required?.value ? !1 : !zi(t[n]);
}), Zi = (e, t, n) => (e ?? []).reduce((e, r) => {
	let i = r.id;
	if (!i) return e;
	let a = ji(t[i], Wi(r, t).validation, n);
	return a && (e[i] = a), e;
}, {}), Qi = (e, t) => {
	if (!e) return;
	let n = {};
	return e.required && (n.required = {
		value: e.required.value,
		invalidMessage: t(Ei(e.required))
	}), e.rules && (n.rules = e.rules.map((e) => ({
		pattern: e.pattern,
		invalidMessage: t(Ei(e))
	}))), e.luhn && (n.luhn = {
		value: e.luhn.value,
		invalidMessage: t(Ei(e.luhn))
	}), e.iban && (n.iban = {
		value: e.iban.value,
		invalidMessage: t(Ei(e.iban))
	}), e.expiryDate && (n.expiryDate = {
		value: e.expiryDate.value,
		...e.expiryDate.maxFutureYears === void 0 ? {} : { maxFutureYears: e.expiryDate.maxFutureYears },
		invalidMessage: t(Ei(e.expiryDate))
	}), n;
}, $i = (e, t) => {
	if (!e || e.length === 0) return;
	let n = e.reduce((e, n) => {
		let r = n.set?.rule, i = n.set?.required;
		return !r && !i || e.push({
			when: n.when,
			set: {
				...r ? { rule: {
					pattern: r.pattern,
					invalidMessage: t(Ei(r))
				} } : {},
				...i ? { required: {
					value: i.value,
					invalidMessage: t(Ei(i))
				} } : {}
			}
		}), e;
	}, []);
	return n.length > 0 ? n : void 0;
}, ea = Symbol("cashier.provider-action-boundary"), ta = (e, t) => {
	let n = aa({ redirect: t });
	return (n.kind === "invalid" || n.kind === "deferred") && Object.defineProperty(e, ea, { value: n }), e;
}, na = (e) => {
	try {
		return JSON.parse(decodeURIComponent(e));
	} catch {
		return;
	}
}, ra = (e) => typeof e == "object" && !!e && !Array.isArray(e), ia = (e) => {
	if (typeof e != "string" || !e.trim()) return !1;
	try {
		let t = new URL(e);
		return ["http:", "https:"].includes(t.protocol) && !t.username && !t.password;
	} catch {
		return !1;
	}
}, aa = (e) => {
	if (!ra(e)) return { kind: "none" };
	if (e.redirect === void 0 || e.redirect === null) return e.form ? {
		kind: "deferred",
		capability: "provider-form"
	} : { kind: "none" };
	let t = e.redirect;
	if (!ra(t)) return { kind: "invalid" };
	let n = t[ea];
	if (n) return n;
	let r = t.type ?? "iframe", i = t.method ?? "GET";
	if (typeof r != "string" || ![
		"iframe",
		"window",
		"hidden_iframe",
		"script"
	].includes(r) || typeof i != "string" || !["GET", "POST"].includes(i) || !ia(t.url) || t.actionId !== void 0 && (typeof t.actionId != "string" || !t.actionId.trim()) || t.scriptId !== void 0 && typeof t.scriptId != "string") return { kind: "invalid" };
	let a = typeof t.actionId == "string" ? { identity: JSON.stringify(["action", t.actionId]) } : {};
	if (r === "script" || t.scriptId) return {
		kind: "deferred",
		capability: "provider-script",
		...a
	};
	if (t.timeout !== void 0) return {
		kind: "deferred",
		capability: "timed-browser-action",
		...a
	};
	if (r === "hidden_iframe") return {
		kind: "deferred",
		capability: "hidden-iframe",
		...a
	};
	let o = typeof t.data == "string" ? na(t.data) : t.data ?? {};
	return !ra(o) || Object.values(o).some((e) => typeof e != "string") || t.userFlowDoneUrl !== void 0 && !ia(t.userFlowDoneUrl) ? { kind: "invalid" } : {
		kind: "redirect",
		presentation: r,
		method: i,
		url: t.url,
		data: Object.freeze({ ...o }),
		...typeof t.userFlowDoneUrl == "string" ? { userFlowDoneUrl: t.userFlowDoneUrl } : {},
		identity: t.actionId ? JSON.stringify(["action", t.actionId]) : JSON.stringify([
			"legacy",
			r,
			i,
			t.url,
			Object.keys(o).sort().map((e) => [e, o[e]])
		])
	};
}, oa = Symbol.for("paycontrol.cashier.provider-window.v1"), sa = () => {
	let e = globalThis, t = e[oa];
	if (t) {
		if (typeof t != "object" || !("version" in t) || t.version !== 1 || !("closedOwners" in t) || !(t.closedOwners instanceof Set) || !("owner" in t) || t.owner !== null && typeof t.owner != "string" || !("handle" in t) || t.handle !== null && (typeof t.handle != "object" || !("close" in t.handle) || typeof t.handle.close != "function")) throw Error("Incompatible Cashier provider window broker");
		return t;
	}
	let n = {
		version: 1,
		handle: null,
		owner: null,
		closedOwners: /* @__PURE__ */ new Set()
	};
	return Object.defineProperty(e, oa, { value: n }), n;
}, ca = (e) => typeof e == "string" ? e : void 0, la = (e, t) => {
	if (e) {
		if (typeof e == "string") return e;
		try {
			return encodeURIComponent(JSON.stringify(e));
		} catch (e) {
			te.error(t, "[Cashier] Failed to encode redirect payload", e);
			return;
		}
	}
}, ua = (e) => e === "POST" ? "POST" : "GET", da = (e) => typeof e == "string" ? e : "iframe", fa = (e, t) => {
	if (e) try {
		let t = JSON.parse(decodeURIComponent(e));
		return !t || typeof t != "object" || Array.isArray(t) ? void 0 : Object.entries(t).reduce((e, [t, n]) => (n == null || (e[t] = typeof n == "string" ? n : JSON.stringify(n)), e), {});
	} catch (e) {
		te.error(t, "[Cashier] Failed to decode redirect payload", e);
		return;
	}
}, pa = (e) => {
	let t = typeof e == "string" ? fa(e) : e;
	return t ? JSON.stringify(Object.keys(t).sort().map((e) => [e, t[e]])) : typeof e == "string" ? e : "";
}, ma = /* @__PURE__ */ t({
	PROVIDER_POPUP_BLOCKED_TOAST_ID: () => ga,
	PROVIDER_WINDOW_DETACHED_OPEN_GRACE_MS: () => 500,
	PROVIDER_WINDOW_FEATURES: () => "",
	PROVIDER_WINDOW_TARGET: () => ha,
	buildProviderWindowStepKey: () => Aa,
	canOpenProviderWindow: () => Oa,
	closeProviderWindowHandle: () => Da,
	consumeProviderWindowClosure: () => Ea,
	createProviderWindowScope: () => Pa,
	focusProviderWindow: () => xa,
	getProviderWindowHandle: () => wa,
	getProviderWindowOwnership: () => Ta,
	isProviderWindowHandleUsable: () => ba,
	openOrReuseProviderWindow: () => Na,
	openProviderPopupWindow: () => Sa,
	releaseProviderWindowOwnership: () => ka,
	setProviderWindowHandle: () => ya,
	trackProviderWindowClose: () => Ca
}), ha = "cashier-provider-window", ga = "cashier-provider-popup-blocked", _a = 500, va = () => {
	let e = sa();
	e.handle && !ba(e.handle) && (e.owner !== null && e.closedOwners.add(e.owner), e.handle = null, e.owner = null);
}, ya = (e, t) => {
	va();
	let n = sa();
	n.handle = e, n.owner = e ? t ?? null : null;
}, ba = (e) => {
	if (!e) return !1;
	try {
		return !e.closed;
	} catch {
		return !0;
	}
}, xa = (e) => {
	typeof e.focus == "function" && e.focus();
}, Sa = ({ ownerWindow: e, url: t, target: n, features: r }) => {
	let i;
	try {
		i = e.open("about:blank", n, r);
	} catch {
		return null;
	}
	if (!ba(i)) return null;
	try {
		i.opener = null;
	} catch {
		try {
			i.close();
		} catch {}
		return null;
	}
	try {
		i.location.href = t;
	} catch {
		try {
			i.close();
		} catch {}
		return null;
	}
	return xa(i), i;
}, Ca = ({ ownerWindow: e, popupWindow: t, onClosed: n, pollIntervalMs: r = _a }) => {
	let i = !0, a = null, o = () => {
		i && (i = !1, a !== null && (e.clearInterval(a), a = null), e.removeEventListener("focus", c));
	}, s = () => {
		try {
			return t.closed;
		} catch {
			return !1;
		}
	};
	function c() {
		i && s() && (o(), n());
	}
	return a = e.setInterval(c, r), e.addEventListener("focus", c), c(), o;
}, wa = () => (va(), sa().handle), Ta = (e) => (va(), sa().handle ? sa().owner === e ? "owned" : "foreign" : "none"), Ea = (e) => (va(), sa().closedOwners.delete(e)), Da = (e) => {
	let t = sa();
	if (va(), e === void 0 && t.closedOwners.clear(), t.handle && (e === void 0 || t.owner === null || t.owner === e)) try {
		t.handle.close();
	} finally {
		t.handle = null, t.owner = null;
	}
}, Oa = () => !(typeof window > "u" || typeof window.open != "function" || typeof navigator < "u" && navigator.userAgent.includes("jsdom")), ka = (e) => {
	if (!e) return;
	va();
	let t = sa();
	t.owner === e && (t.handle = null, t.owner = null), t.closedOwners.delete(e);
}, Aa = ({ scopeId: e, paymentId: t, redirectType: n, redirectMethod: r, redirectUrl: i, redirectData: a, redirectScriptId: o }) => i ? [
	...e ? [e] : [],
	t ?? "",
	n ?? "",
	r ?? "",
	i,
	pa(a),
	o ?? ""
].join("|") : null, ja = () => typeof document > "u" ? !1 : document.visibilityState === "hidden" || typeof document.hasFocus == "function" && !document.hasFocus(), Ma = async (e) => e?.aborted || typeof window > "u" ? !1 : ja() ? !0 : await new Promise((t) => {
	let n = !1, r = (r) => {
		n || (n = !0, window.clearTimeout(c), e?.removeEventListener("abort", i), window.removeEventListener("blur", a), window.removeEventListener("pagehide", o), document.removeEventListener("visibilitychange", s), t(r));
	}, i = () => {
		r(!1);
	}, a = () => {
		r(!0);
	}, o = () => {
		r(!0);
	}, s = () => {
		document.visibilityState === "hidden" && r(!0);
	}, c = window.setTimeout(() => {
		r(ja());
	}, 500);
	e?.addEventListener("abort", i, { once: !0 }), window.addEventListener("blur", a), window.addEventListener("pagehide", o), document.addEventListener("visibilitychange", s), ja() && r(!0);
}), Na = (e) => {
	let { source: t, signal: n, open: r, onReuse: i, onOpened: a, onBlocked: o, canReuse: s, canOpen: c, setHandle: l, allowManualDetachedOpen: u, onDetachedOpened: d } = e;
	if (n?.aborted) return Promise.resolve(null);
	let f = wa, p = l ?? ya, m = f();
	if (m) {
		if (!s || s(m)) return p(m), i?.(m), xa(m), Promise.resolve(m);
		Da();
	}
	if (!(c ?? Oa)()) return o(t), Promise.resolve(null);
	let h = null;
	try {
		h = r();
	} catch {
		return o(t), Promise.resolve(null);
	}
	return ba(h) ? (p(h), a?.(h), xa(h), Promise.resolve(h)) : u && t === "manual" ? Ma(n).then((e) => n?.aborted ? null : e ? (d?.(), null) : (o(t), null)) : (o(t), Promise.resolve(null));
}, Pa = (e) => {
	let t = (t) => JSON.stringify([e, t]);
	return Object.freeze({
		instanceId: e,
		setProviderWindowHandle: (e, n) => {
			ya(e, n ? t(n) : null);
		},
		getProviderWindowOwnership: (e) => Ta(t(e)),
		transferProviderWindowOwnership: (e, n) => {
			va();
			let r = sa(), i = t(e);
			return !r.handle || r.owner !== i ? !1 : (r.owner = t(n), r.closedOwners.delete(i), !0);
		},
		consumeProviderWindowClosure: (e) => Ea(t(e)),
		releaseProviderWindowOwnership: (e) => {
			e && ka(t(e));
		},
		closeProviderWindowHandle: (e) => {
			if (e) {
				let n = t(e);
				Da(n), sa().closedOwners.delete(n);
			}
		}
	});
}, Fa = ({ callback: e, callbackName: t, debug: n, payload: r }) => {
	if (!e) return;
	let i = () => {
		te.warn(n, `[Cashier] ${t} callback failed.`);
	};
	try {
		let t = e(r);
		Promise.resolve(t).catch(i);
	} catch {
		i();
	}
}, Ia = "card", La = "••••", Ra = "pt_", za = "account.saved_card_expiry_invalid", Ba = (e) => {
	if (e) {
		if (typeof e == "string") return { default: e };
		if (typeof e == "object" && !Array.isArray(e)) {
			let t = Object.entries(e).filter((e) => typeof e[1] == "string" && e[1].length > 0).map(([e, t]) => [e.trim().toLowerCase(), t]).filter(([e]) => e.length > 0);
			if (t.length === 0) return;
			let n = {};
			for (let [e, r] of t) n[e] || (n[e] = r);
			return n;
		}
	}
}, Va = (e) => Ba(e.logo), Ha = (e) => {
	let t = e.replace(M, "");
	if (!t) return null;
	let n = t.slice(-4);
	return n.length > 0 ? n : null;
}, Ua = (e, t, n) => {
	let r = z(e);
	if (!r) return [];
	let i = `payment_type.${r}`, a = z(t);
	if (!a) return [i];
	let o = `${i}.${a}`, s = z(n);
	return s ? [
		`${o}.${s}`,
		o,
		i
	] : [o, i];
}, Wa = (e) => {
	if (z(e.type)?.toLowerCase() !== Ia || !z(e.accountId)) return null;
	let t = z(e.name);
	if (!t) return null;
	let n = Ha(t);
	return n ? `${La}${n}` : null;
}, Ga = (e) => {
	let t = 2166136261, n = 522970236;
	for (let r = 0; r < e.length; r += 1) {
		let i = e.charCodeAt(r);
		t ^= i, t = Math.imul(t, 16777619), n ^= i, n = Math.imul(n, 2246822507);
	}
	return [t >>> 0, n >>> 0].map((e) => e.toString(36)).join("");
}, Ka = (e) => z(e) ?? "", qa = (e) => {
	let t = [
		Ka(e.accountId),
		Ka(e.name),
		Ka(e.type),
		Ka(e.method),
		Ka(e.service)
	];
	return `${Ra}${Ga(JSON.stringify(t))}`;
}, Ja = (e) => z(e?.unavailableReason) !== null, Ya = (e, t) => {
	if (!t.accountId) return null;
	let n = Ka(t.type).toLowerCase(), r = Ka(t.method).toLowerCase(), i = Ka(t.service).toLowerCase();
	return e.find((e) => !e.accountId && !Ja(e) && Ka(e.type).toLowerCase() === n && Ka(e.method).toLowerCase() === r && Ka(e.service).toLowerCase() === i) ?? null;
}, Xa = (e) => e?.map((e) => ({
	...e,
	logo: Va(e)
})) ?? [], Za = async (e, t) => {
	let { extra: n, ...r } = e, { data: i, error: a } = n && Object.keys(n).length > 0 ? await Wn({
		body: {
			...r,
			extra: n
		},
		cache: "no-store",
		throwOnError: !1,
		client: t.client,
		signal: t.signal
	}) : await Un({
		query: r,
		cache: "no-store",
		throwOnError: !1,
		client: t.client,
		signal: t.signal
	});
	if (a || t.requireData && (!i || !Array.isArray(i.paymentTypes))) throw Error();
	return {
		paymentTypes: Xa(i?.paymentTypes),
		currency: i?.currency,
		pciTenantId: i?.pciTenantId,
		cashierConfig: t.fetchConfig ? bt(i?.assets, t.debug) : void 0
	};
}, Qa = (e) => !e || typeof e != "string" ? null : z(e)?.toLowerCase() ?? null, $a = (e, t) => {
	let n = e[t];
	return typeof n == "string" ? Qa(n) : null;
}, eo = (e, t, n) => $a(e, t) === n, to = (e) => {
	let t = e.split(".").map((e) => e.trim()).filter((e) => e.length > 0);
	return t[0] === "payment_type" ? t.slice(1) : t;
}, no = (e, t) => e.find((e) => t.every(([t, n]) => eo(e, t, n))) ?? null, ro = (e, t) => {
	let n = to(t);
	if (n.length === 1) {
		let [t] = n;
		return t ? no(e, [["type", t]]) ?? no(e, [["service", t]]) : null;
	}
	if (n.length === 2) {
		let [t, r] = n;
		return !t || !r ? null : no(e, [["type", t], ["method", r]]) ?? no(e, [["type", t], ["service", r]]) ?? no(e, [["service", t], ["method", r]]);
	}
	if (n.length === 3) {
		let [t, r, i] = n;
		return !t || !r || !i ? null : no(e, [
			["type", t],
			["service", r],
			["method", i]
		]) ?? no(e, [
			["type", t],
			["method", r],
			["service", i]
		]);
	}
	return null;
}, io = (e, t) => {
	let n = Qa(t);
	if (!n) return null;
	let r = e.find((e) => qa(e) === n) ?? null;
	if (r) return r;
	let i = (t) => no(e, [[t, n]]);
	return i("accountId") ?? i("name") ?? ro(e, n);
}, ao = (e, t) => {
	let n = io(e, t);
	return n && !Ja(n) ? n : null;
}, oo = ({ merchantId: e, method: t, userId: n, sessionId: r, currency: i, fetchConfig: a, extraAttributes: o }) => [
	"payment-types",
	e,
	t,
	n,
	r,
	i,
	a,
	o
], so = (e, t) => ({
	queryKey: oo(e),
	queryFn: ({ signal: n }) => Za({
		merchantId: e.merchantId,
		method: e.method,
		userId: e.userId,
		sessionId: e.sessionId,
		currency: e.currency,
		extra: e.extraAttributes
	}, {
		client: t,
		debug: e.debug,
		fetchConfig: e.fetchConfig,
		signal: n,
		requireData: e.requireData
	}),
	enabled: !!(e.merchantId && e.userId && e.sessionId),
	retry: !1,
	refetchOnMount: !1,
	retryOnMount: !1,
	staleTime: 3e5,
	gcTime: 18e5
}), co = async (e, t, n) => await e.ensureQueryData(so(t, n));
//#endregion
//#region ../../node_modules/bail/index.js
function lo(e) {
	if (e) throw e;
}
//#endregion
//#region ../../node_modules/devlop/lib/default.js
var uo = /* @__PURE__ */ r((/* @__PURE__ */ s(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
//#endregion
//#region ../../node_modules/is-plain-obj/index.js
function fo(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../../node_modules/trough/lib/index.js
function po() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) r(a);
			else {
				for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
				t = o, s ? mo(s, i)(...o) : r(null, ...o);
			}
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function mo(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region ../../node_modules/unist-util-stringify-position/lib/index.js
function ho(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? _o(e.position) : "start" in e || "end" in e ? _o(e) : "line" in e || "column" in e ? go(e) : "";
}
function go(e) {
	return vo(e && e.line) + ":" + vo(e && e.column);
}
function _o(e) {
	return go(e && e.start) + "-" + go(e && e.end);
}
function vo(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region ../../node_modules/vfile-message/lib/index.js
var yo = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = ho(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
yo.prototype.file = "", yo.prototype.name = "", yo.prototype.reason = "", yo.prototype.message = "", yo.prototype.stack = "", yo.prototype.column = void 0, yo.prototype.line = void 0, yo.prototype.ancestors = void 0, yo.prototype.cause = void 0, yo.prototype.fatal = void 0, yo.prototype.place = void 0, yo.prototype.ruleId = void 0, yo.prototype.source = void 0;
//#endregion
//#region ../../node_modules/vfile/lib/minpath.browser.js
var bo = {
	basename: xo,
	dirname: So,
	extname: Co,
	join: wo,
	sep: "/"
};
function xo(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Do(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function So(e) {
	if (Do(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Co(e) {
	Do(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
		} else n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function wo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Do(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : To(n);
}
function To(e) {
	Do(e);
	let t = e.codePointAt(0) === 47, n = Eo(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Eo(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function Do(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/vfile/lib/minproc.browser.js
var Oo = { cwd: ko };
function ko() {
	return "/";
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.shared.js
function Ao(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.browser.js
function jo(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Ao(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return Mo(e);
}
function Mo(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region ../../node_modules/vfile/lib/index.js
var No = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], Po = class {
	constructor(e) {
		let t;
		t = e ? Ao(e) ? { path: e } : typeof e == "string" || Ro(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Oo.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < No.length;) {
			let e = No[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) No.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? bo.basename(this.path) : void 0;
	}
	set basename(e) {
		Io(e, "basename"), Fo(e, "basename"), this.path = bo.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? bo.dirname(this.path) : void 0;
	}
	set dirname(e) {
		Lo(this.basename, "dirname"), this.path = bo.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? bo.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Fo(e, "extname"), Lo(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = bo.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Ao(e) && (e = jo(e)), Io(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? bo.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Io(e, "stem"), Fo(e, "stem"), this.path = bo.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new yo(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Fo(e, t) {
	if (e && e.includes(bo.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + bo.sep + "`");
}
function Io(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function Lo(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Ro(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/unified/lib/callable-instance.js
var zo = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Bo = {}.hasOwnProperty, Vo = new class e extends zo {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = po();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, uo.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Wo("data", this.frozen), this.namespace[e] = t, this) : Bo.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Wo("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = qo(e), n = this.parser || this.Parser;
		return Ho("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Ho("process", this.parser || this.Parser), Uo("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = qo(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				Yo(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Ho("processSync", this.parser || this.Parser), Uo("processSync", this.compiler || this.Compiler), this.process(e, r), Ko("processSync", "process", t), n;
		function r(e, r) {
			t = !0, lo(e), n = r;
		}
	}
	run(e, t, n) {
		Go(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = qo(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Ko("runSync", "run", n), r;
		function i(e, t) {
			lo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = qo(t), r = this.compiler || this.Compiler;
		return Uo("stringify", r), Go(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Wo("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, uo.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				fo(o) && fo(r) && (r = (0, uo.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Ho(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Uo(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Wo(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Go(e) {
	if (!fo(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Ko(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function qo(e) {
	return Jo(e) ? e : new Po(e);
}
function Jo(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Yo(e) {
	return typeof e == "string" || Xo(e);
}
function Xo(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/mdast-util-to-string/lib/index.js
var Zo = {};
function Qo(e, t) {
	let n = t || Zo;
	return $o(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function $o(e, t, n) {
	if (ts(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return es(e.children, t, n);
	}
	return Array.isArray(e) ? es(e, t, n) : "";
}
function es(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = $o(e[i], t, n);
	return r.join("");
}
function ts(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../../node_modules/decode-named-character-reference/index.dom.js
var ns = document.createElement("i");
function rs(e) {
	let t = "&" + e + ";";
	ns.innerHTML = t;
	let n = ns.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region ../../node_modules/micromark-util-chunked/index.js
function is(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function as(e, t) {
	return e.length > 0 ? (is(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/micromark-util-combine-extensions/index.js
var os = {}.hasOwnProperty;
function ss(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) cs(t, e[n]);
	return t;
}
function cs(e, t) {
	let n;
	for (n in t) {
		let r = (os.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			os.call(r, a) || (r[a] = []);
			let e = i[a];
			ls(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function ls(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	is(e, 0, 0, r);
}
//#endregion
//#region ../../node_modules/micromark-util-decode-numeric-character-reference/index.js
function us(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/micromark-util-normalize-identifier/index.js
function ds(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/micromark-util-character/index.js
var fs = ws(/[A-Za-z]/), ps = ws(/[\dA-Za-z]/), ms = ws(/[#-'*+\--9=?A-Z^-~]/);
function hs(e) {
	return e !== null && (e < 32 || e === 127);
}
var gs = ws(/\d/), _s = ws(/[\dA-Fa-f]/), vs = ws(/[!-/:-@[-`{-~]/);
function ys(e) {
	return e !== null && e < -2;
}
function bs(e) {
	return e !== null && (e < 0 || e === 32);
}
function xs(e) {
	return e === -2 || e === -1 || e === 32;
}
var Ss = ws(/\p{P}|\p{S}/u), Cs = ws(/\s/);
function ws(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-sanitize-uri/index.js
function Ts(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && ps(e.charCodeAt(n + 1)) && ps(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/micromark-factory-space/index.js
function Es(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return xs(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return xs(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/content.js
var Ds = { tokenize: Os };
function Os(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) e.consume(n);
		else return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Es(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
		else return ys(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/document.js
var ks = { tokenize: js }, As = { tokenize: Ms };
function js(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return is(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(As, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(As, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) i && v(), _(0), e.consume(n);
		else return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
		else return ys(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			is(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Ms(e, t, n) {
	return Es(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/micromark-util-classify-character/index.js
function Ns(e) {
	if (e === null || bs(e) || Cs(e)) return 1;
	if (Ss(e)) return 2;
}
//#endregion
//#region ../../node_modules/micromark-util-resolve-all/index.js
function Ps(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/attention.js
var Fs = {
	name: "attention",
	resolveAll: Is,
	tokenize: Ls
};
function Is(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Rs(d, -c), Rs(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = as(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = as(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = as(l, Ps(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = as(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = as(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, is(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Ls(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ns(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Ns(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Rs(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/autolink.js
var zs = {
	name: "autolink",
	tokenize: Bs
};
function Bs(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return fs(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || ps(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || ps(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || hs(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : ms(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return ps(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || ps(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/blank-line.js
var Vs = {
	partial: !0,
	tokenize: Hs
};
function Hs(e, t, n) {
	return r;
	function r(t) {
		return xs(t) ? Es(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || ys(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/block-quote.js
var Us = {
	continuation: { tokenize: Gs },
	exit: Ks,
	name: "blockQuote",
	tokenize: Ws
};
function Ws(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return xs(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Gs(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return xs(t) ? Es(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Us, t, n)(r);
	}
}
function Ks(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-escape.js
var qs = {
	name: "characterEscape",
	tokenize: Js
};
function Js(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return vs(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-reference.js
var Ys = {
	name: "characterReference",
	tokenize: Xs
};
function Xs(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = ps, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = _s, u) : (e.enter("characterReferenceValue"), a = 7, o = gs, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === ps && !rs(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-fenced.js
var Zs = {
	partial: !0,
	tokenize: ec
}, Qs = {
	concrete: !0,
	name: "codeFenced",
	tokenize: $s
};
function $s(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), xs(t) ? Es(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || ys(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Zs, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || ys(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : xs(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Es(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || ys(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || ys(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && xs(t) ? Es(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || ys(t) ? e.check(Zs, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || ys(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), xs(t) ? Es(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), xs(t) ? Es(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || ys(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function ec(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-indented.js
var tc = {
	name: "codeIndented",
	tokenize: rc
}, nc = {
	partial: !0,
	tokenize: ic
};
function rc(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), Es(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : ys(t) ? e.attempt(nc, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || ys(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function ic(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : ys(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : Es(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : ys(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-text.js
var ac = {
	name: "codeText",
	previous: sc,
	resolve: oc,
	tokenize: cc
};
function oc(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function sc(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function cc(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : ys(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || ys(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var lc = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && uc(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), uc(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), uc(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				uc(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				uc(this.left, t.reverse());
			}
		}
	}
};
function uc(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/index.js
function dc(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new lc(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, fc(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return is(e, 0, Infinity, u.slice(0)), !l;
}
function fc(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/content.js
var pc = {
	resolve: hc,
	tokenize: gc
}, mc = {
	partial: !0,
	tokenize: _c
};
function hc(e) {
	return dc(e), e;
}
function gc(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : ys(t) ? e.check(mc, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function _c(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Es(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || ys(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-destination/index.js
function vc(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || hs(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || ys(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || bs(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || hs(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-label/index.js
function yc(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : ys(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || ys(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !xs(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-title/index.js
function bc(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : ys(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Es(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || ys(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-whitespace/index.js
function xc(e, t) {
	let n;
	return r;
	function r(i) {
		return ys(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : xs(i) ? Es(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/definition.js
var Sc = {
	name: "definition",
	tokenize: wc
}, Cc = {
	partial: !0,
	tokenize: Tc
};
function wc(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return yc.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = ds(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return bs(t) ? xc(e, l)(t) : l(t);
	}
	function l(t) {
		return vc(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Cc, d, d)(t);
	}
	function d(t) {
		return xs(t) ? Es(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || ys(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Tc(e, t, n) {
	return r;
	function r(t) {
		return bs(t) ? xc(e, i)(t) : n(t);
	}
	function i(t) {
		return bc(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return xs(t) ? Es(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || ys(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Ec = {
	name: "hardBreakEscape",
	tokenize: Dc
};
function Dc(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return ys(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/heading-atx.js
var Oc = {
	name: "headingAtx",
	resolve: kc,
	tokenize: Ac
};
function kc(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, is(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Ac(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || bs(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || ys(n) ? (e.exit("atxHeading"), t(n)) : xs(n) ? Es(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || bs(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/micromark-util-html-tag-name/index.js
var jc = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Mc = [
	"pre",
	"script",
	"style",
	"textarea"
], Nc = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Ic,
	tokenize: Lc
}, Pc = {
	partial: !0,
	tokenize: zc
}, Fc = {
	partial: !0,
	tokenize: Rc
};
function Ic(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Lc(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : I) : fs(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : fs(a) ? (e.consume(a), i = 4, r.interrupt ? t : I) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : I) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return fs(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || bs(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Mc.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : jc.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || ps(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return xs(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || fs(t) ? (e.consume(t), b) : xs(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || ps(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : xs(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : xs(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || ys(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || bs(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || xs(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || ys(t) ? O(t) : xs(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), ee) : t === 63 && i === 3 ? (e.consume(t), I) : t === 93 && i === 5 ? (e.consume(t), F) : ys(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Pc, te, k)(t)) : t === null || ys(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(Fc, A, te)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || ys(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), I) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", P) : O(t);
	}
	function P(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Mc.includes(n) ? (e.consume(t), ee) : O(t);
		}
		return fs(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : O(t);
	}
	function F(t) {
		return t === 93 ? (e.consume(t), I) : O(t);
	}
	function I(t) {
		return t === 62 ? (e.consume(t), ee) : t === 45 && i === 2 ? (e.consume(t), I) : O(t);
	}
	function ee(t) {
		return t === null || ys(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), ee);
	}
	function te(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Rc(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return ys(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function zc(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Vs, t, n);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/html-text.js
var Bc = {
	name: "htmlText",
	tokenize: Vc
};
function Vc(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : fs(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : fs(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : ys(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : ys(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : ys(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : ys(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return fs(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || ps(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return ys(t) ? (o = C, N(t)) : xs(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || ps(t) ? (e.consume(t), w) : t === 47 || t === 62 || bs(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || fs(t) ? (e.consume(t), E) : ys(t) ? (o = T, N(t)) : xs(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || ps(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : ys(t) ? (o = D, N(t)) : xs(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : ys(t) ? (o = O, N(t)) : xs(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : ys(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || bs(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || bs(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P;
	}
	function P(t) {
		return xs(t) ? Es(e, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : F(t);
	}
	function F(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-end.js
var Hc = {
	name: "labelEnd",
	resolveAll: Kc,
	resolveTo: qc,
	tokenize: Jc
}, Uc = { tokenize: Yc }, Wc = { tokenize: Xc }, Gc = { tokenize: Zc };
function Kc(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && is(e, 0, e.length, n), e;
}
function qc(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = as(s, e.slice(a + 1, a + r + 3)), s = as(s, [[
		"enter",
		u,
		t
	]]), s = as(s, Ps(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = as(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = as(s, e.slice(o + 1)), s = as(s, [[
		"exit",
		c,
		t
	]]), is(e, a, e.length, s), e;
}
function Jc(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(ds(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Uc, u, o ? u : d)(t) : t === 91 ? e.attempt(Wc, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Gc, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Yc(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return bs(t) ? xc(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : vc(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return bs(t) ? xc(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? bc(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return bs(t) ? xc(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Xc(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return yc.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(ds(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Zc(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-image.js
var Qc = {
	name: "labelStartImage",
	resolveAll: Hc.resolveAll,
	tokenize: $c
};
function $c(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-link.js
var el = {
	name: "labelStartLink",
	resolveAll: Hc.resolveAll,
	tokenize: tl
};
function tl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/line-ending.js
var nl = {
	name: "lineEnding",
	tokenize: rl
};
function rl(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Es(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/thematic-break.js
var il = {
	name: "thematicBreak",
	tokenize: al
};
function al(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || ys(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), xs(t) ? Es(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/list.js
var ol = {
	continuation: { tokenize: ul },
	exit: fl,
	name: "list",
	tokenize: ll
}, sl = {
	partial: !0,
	tokenize: pl
}, cl = {
	partial: !0,
	tokenize: dl
};
function ll(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : gs(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(il, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return gs(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Vs, r.interrupt ? n : u, e.attempt(sl, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return xs(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function ul(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Vs, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Es(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !xs(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(cl, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Es(e, e.attempt(ol, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function dl(e, t, n) {
	let r = this;
	return Es(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function fl(e) {
	e.exit(this.containerState.type);
}
function pl(e, t, n) {
	let r = this;
	return Es(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !xs(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/setext-underline.js
var ml = {
	name: "setextUnderline",
	resolveTo: hl,
	tokenize: gl
};
function hl(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function gl(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), xs(t) ? Es(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || ys(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/flow.js
var _l = { tokenize: vl };
function vl(e) {
	let t = this, n = e.attempt(Vs, r, e.attempt(this.parser.constructs.flowInitial, i, Es(e, e.attempt(this.parser.constructs.flow, i, e.attempt(pc, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/text.js
var yl = { resolveAll: Cl() }, bl = Sl("string"), xl = Sl("text");
function Sl(e) {
	return {
		resolveAll: Cl(e === "text" ? wl : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) t.consume(e);
			else return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Cl(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function wl(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/constructs.js
var Tl = /* @__PURE__ */ t({
	attentionMarkers: () => Nl,
	contentInitial: () => Dl,
	disable: () => Pl,
	document: () => El,
	flow: () => kl,
	flowInitial: () => Ol,
	insideSpan: () => Ml,
	string: () => Al,
	text: () => jl
}), El = {
	42: ol,
	43: ol,
	45: ol,
	48: ol,
	49: ol,
	50: ol,
	51: ol,
	52: ol,
	53: ol,
	54: ol,
	55: ol,
	56: ol,
	57: ol,
	62: Us
}, Dl = { 91: Sc }, Ol = {
	[-2]: tc,
	[-1]: tc,
	32: tc
}, kl = {
	35: Oc,
	42: il,
	45: [ml, il],
	60: Nc,
	61: ml,
	95: il,
	96: Qs,
	126: Qs
}, Al = {
	38: Ys,
	92: qs
}, jl = {
	[-5]: nl,
	[-4]: nl,
	[-3]: nl,
	33: Qc,
	38: Ys,
	42: Fs,
	60: [zs, Bc],
	91: el,
	92: [Ec, qs],
	93: Hc,
	95: Fs,
	96: ac
}, Ml = { null: [Fs, yl] }, Nl = { null: [42, 95] }, Pl = { null: [] };
//#endregion
//#region ../../node_modules/micromark/lib/create-tokenizer.js
function Fl(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = as(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Ps(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Ll(p(e), t);
	}
	function p(e) {
		return Il(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		ys(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && is(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function Il(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Ll(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/micromark/lib/parse.js
function Rl(e) {
	let t = {
		constructs: ss([Tl, ...(e || {}).extensions || []]),
		content: n(Ds),
		defined: [],
		document: n(ks),
		flow: n(_l),
		lazy: {},
		string: n(bl),
		text: n(xl)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Fl(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/postprocess.js
function zl(e) {
	for (; !dc(e););
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/preprocess.js
var Bl = /[\0\t\n\r]/g;
function Vl() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Bl.lastIndex = u, c = Bl.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/micromark-util-decode-string/index.js
var Hl = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ul(e) {
	return e.replace(Hl, Wl);
}
function Wl(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return us(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return rs(n) || e;
}
//#endregion
//#region ../../node_modules/mdast-util-from-markdown/lib/index.js
var Gl = {}.hasOwnProperty;
function Kl(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), ql(n)(zl(Rl(n).document().write(Vl()(e, t, !0))));
}
function ql(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(me),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ue),
			blockQuote: a(oe),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(se),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(se, o),
			codeText: a(ce, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(le),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(B),
			hardBreakEscape: a(de),
			hardBreakTrailing: a(de),
			htmlFlow: a(fe, o),
			htmlFlowData: T,
			htmlText: a(fe, o),
			htmlTextData: T,
			image: a(pe),
			label: o,
			link: a(me),
			listItem: a(ge),
			listItemValue: f,
			listOrdered: a(he, d),
			listUnordered: a(he),
			paragraph: a(_e),
			reference: ne,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ue),
			strong: a(ve),
			thematicBreak: a(be)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: ae,
			autolinkProtocol: ie,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: L,
			characterReferenceMarkerNumeric: L,
			characterReferenceValue: R,
			characterReference: z,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(j),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(A),
			htmlTextData: E,
			image: c(N),
			label: F,
			labelText: P,
			lineEnding: D,
			link: c(M),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: re,
			resourceDestinationString: I,
			resourceTitleString: ee,
			resource: te,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Yl(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Gl.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Zl).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Jl(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Jl(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: Jl(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Zl).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + ho({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Jl(e.end);
	}
	function u() {
		return Qo(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = ds(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = ye(), n.position = {
			start: Jl(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Jl(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Jl(e.end), this.data.atHardBreak = void 0;
		} else !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function P(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = Ul(t), n.identifier = ds(t).toLowerCase();
	}
	function F() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function I() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function te() {
		this.data.inReference = void 0;
	}
	function ne() {
		this.data.referenceType = "collapsed";
	}
	function re(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = ds(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function L(e) {
		this.data.characterReferenceType = e.type;
	}
	function R(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = us(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = rs(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function z(e) {
		let t = this.stack.pop();
		t.position.end = Jl(e.end);
	}
	function ie(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function ae(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function oe() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function se() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function ce() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function le() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function B() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ue() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function de() {
		return { type: "break" };
	}
	function fe() {
		return {
			type: "html",
			value: ""
		};
	}
	function pe() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function me() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function he(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function ge(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function _e() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function ve() {
		return {
			type: "strong",
			children: []
		};
	}
	function ye() {
		return {
			type: "text",
			value: ""
		};
	}
	function be() {
		return { type: "thematicBreak" };
	}
}
function Jl(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Yl(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Yl(e, r) : Xl(e, r);
	}
}
function Xl(e, t) {
	let n;
	for (n in t) if (Gl.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Zl(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + ho({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + ho({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + ho({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../../node_modules/remark-parse/lib/index.js
function Ql(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Kl(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../../node_modules/ccount/index.js
function $l(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function eu(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../../node_modules/unist-util-is/lib/index.js
var tu = (function(e) {
	if (e == null) return ou;
	if (typeof e == "function") return au(e);
	if (typeof e == "object") return Array.isArray(e) ? nu(e) : ru(e);
	if (typeof e == "string") return iu(e);
	throw Error("Expected function, string, or object as test");
});
function nu(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = tu(e[n]);
	return au(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function ru(e) {
	let t = e;
	return au(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function iu(e) {
	return au(t);
	function t(t) {
		return t && t.type === e;
	}
}
function au(e) {
	return t;
	function t(t, n, r) {
		return !!(su(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function ou() {
	return !0;
}
function su(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/color.js
function cu(e) {
	return e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/index.js
var lu = [];
function uu(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = tu(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + cu(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = lu, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = du(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function du(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? lu : [e];
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/lib/index.js
function fu(e, t, n) {
	let r = tu((n || {}).ignore || []), i = pu(t), a = -1;
	for (; ++a < i.length;) uu(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function pu(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([mu(e[0]), hu(e[1])]);
	}
	return t;
}
function mu(e) {
	return typeof e == "string" ? new RegExp(eu(e), "g") : e;
}
function hu(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var gu = "phrasing", _u = [
	"autolink",
	"link",
	"image",
	"label"
];
function vu() {
	return {
		transforms: [Eu],
		enter: {
			literalAutolink: bu,
			literalAutolinkEmail: xu,
			literalAutolinkHttp: xu,
			literalAutolinkWww: xu
		},
		exit: {
			literalAutolink: Tu,
			literalAutolinkEmail: wu,
			literalAutolinkHttp: Su,
			literalAutolinkWww: Cu
		}
	};
}
function yu() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: gu,
			notInConstruct: _u
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: gu,
			notInConstruct: _u
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: gu,
			notInConstruct: _u
		}
	] };
}
function bu(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function xu(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function Su(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function Cu(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function wu(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function Tu(e) {
	this.exit(e);
}
function Eu(e) {
	fu(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Du], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, Ou]], { ignore: ["link", "linkReference"] });
}
function Du(e, t, n, r, i) {
	let a = "";
	if (!ju(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !ku(n))) return !1;
	let o = Au(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function Ou(e, t, n, r) {
	return !ju(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function ku(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Au(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = $l(e, "("), a = $l(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function ju(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || Cs(n) || Ss(n)) && (!t || n !== 47);
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-footnote/lib/index.js
Vu.peek = Bu;
function Mu() {
	this.buffer();
}
function Nu(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function Pu() {
	this.buffer();
}
function Fu(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function Iu(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ds(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Lu(e) {
	this.exit(e);
}
function Ru(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ds(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function zu(e) {
	this.exit(e);
}
function Bu() {
	return "[";
}
function Vu(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function Hu() {
	return {
		enter: {
			gfmFootnoteCallString: Mu,
			gfmFootnoteCall: Nu,
			gfmFootnoteDefinitionLabelString: Pu,
			gfmFootnoteDefinition: Fu
		},
		exit: {
			gfmFootnoteCallString: Iu,
			gfmFootnoteCall: Lu,
			gfmFootnoteDefinitionLabelString: Ru,
			gfmFootnoteDefinition: zu
		}
	};
}
function Uu(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: Vu
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Gu : Wu))), s(), o;
	}
}
function Wu(e, t, n) {
	return t === 0 ? e : Gu(e, t, n);
}
function Gu(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-strikethrough/lib/index.js
var Ku = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
Zu.peek = Qu;
function qu() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: Yu },
		exit: { strikethrough: Xu }
	};
}
function Ju() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: Ku
		}],
		handlers: { delete: Zu }
	};
}
function Yu(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function Xu(e) {
	this.exit(e);
}
function Zu(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function Qu() {
	return "~";
}
//#endregion
//#region ../../node_modules/markdown-table/index.js
function $u(e) {
	return e.length;
}
function ed(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || $u, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = td(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = nd(r[d]);
	else {
		let e = nd(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && (n.alignDelimiters !== !1 || i !== "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function td(e) {
	return e == null ? "" : String(e);
}
function nd(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../../node_modules/zwitch/index.js
var rd = {}.hasOwnProperty;
function id(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && rd.call(t, e)) {
			let n = String(t[e]);
			i = rd.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/configure.js
var ad = {}.hasOwnProperty;
function od(e, t) {
	let n = -1, r;
	if (t.extensions) for (; ++n < t.extensions.length;) od(e, t.extensions[n]);
	for (r in t) if (ad.call(t, r)) switch (r) {
		case "extensions": break;
		/* c8 ignore next 4 */
		case "unsafe":
			sd(e[r], t[r]);
			break;
		case "join":
			sd(e[r], t[r]);
			break;
		case "handlers":
			cd(e[r], t[r]);
			break;
		default: e.options[r] = t[r];
	}
	return e;
}
function sd(e, t) {
	t && e.push(...t);
}
function cd(e, t) {
	t && Object.assign(e, t);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function ld(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), ud);
	return i(), o;
}
function ud(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function dd(e, t) {
	return fd(e, t.inConstruct, !0) && !fd(e, t.notInConstruct, !1);
}
function fd(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/break.js
function pd(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && dd(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../../node_modules/longest-streak/index.js
function md(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function hd(e, t) {
	return !(t.options.fences !== !1 || !e.value || e.lang || !/[^ \r\n]/.test(e.value) || /^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function gd(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/code.js
function _d(e, t, n, r) {
	let i = gd(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (hd(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, vd);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(md(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function vd(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function yd(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/definition.js
function bd(e, t, n, r) {
	let i = yd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function xd(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Sd(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function Cd(e, t, n) {
	let r = Ns(e), i = Ns(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
wd.peek = Td;
function wd(e, t, n, r) {
	let i = xd(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Cd(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Sd(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Cd(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Sd(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Td(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../../node_modules/unist-util-visit/lib/index.js
function Ed(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), uu(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function Dd(e, t) {
	let n = !1;
	return Ed(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Qo(e) && (t.options.setext || n));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/heading.js
function Od(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (Dd(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = Sd(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/html.js
kd.peek = Ad;
function kd(e) {
	return e.value || "";
}
function Ad() {
	return "<";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image.js
jd.peek = Md;
function jd(e, t, n, r) {
	let i = yd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function Md() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
Nd.peek = Pd;
function Nd(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Pd() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
Fd.peek = Id;
function Fd(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function Id() {
	return "`";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function Ld(e, t) {
	let n = Qo(e);
	return !(t.options.resourceLink || !e.url || e.title || !e.children || e.children.length !== 1 || e.children[0].type !== "text" || n !== e.url && "mailto:" + n !== e.url || !/^[a-z][a-z+.-]+:/i.test(e.url) || /[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link.js
Rd.peek = zd;
function Rd(e, t, n, r) {
	let i = yd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (Ld(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function zd(e, t, n) {
	return Ld(e, n) ? "<" : "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
Bd.peek = Vd;
function Bd(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Vd() {
	return "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function Hd(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function Ud(e) {
	let t = Hd(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function Wd(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function Gd(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list.js
function Kd(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? Wd(n) : Hd(n), s = e.ordered ? o === "." ? ")" : "." : Ud(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), Gd(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function qd(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function Jd(e, t, n, r) {
	let i = qd(n), a = n.bulletCurrent || Hd(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function Yd(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../../node_modules/mdast-util-phrasing/lib/index.js
var Xd = tu([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/root.js
function Zd(e, t, n, r) {
	return (e.children.some(function(e) {
		return Xd(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function Qd(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/strong.js
$d.peek = ef;
function $d(e, t, n, r) {
	let i = Qd(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Cd(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Sd(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Cd(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Sd(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function ef(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/text.js
function tf(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function nf(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function rf(e, t, n) {
	let r = (Gd(n) + (n.options.ruleSpaces ? " " : "")).repeat(nf(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/index.js
var af = {
	blockquote: ld,
	break: pd,
	code: _d,
	definition: bd,
	emphasis: wd,
	hardBreak: pd,
	heading: Od,
	html: kd,
	image: jd,
	imageReference: Nd,
	inlineCode: Fd,
	link: Rd,
	linkReference: Bd,
	list: Kd,
	listItem: Jd,
	paragraph: Yd,
	root: Zd,
	strong: $d,
	text: tf,
	thematicBreak: rf
}, of = [sf];
function sf(e, t, n, r) {
	if (t.type === "code" && hd(t, r) && (e.type === "list" || e.type === t.type && hd(e, r))) return !1;
	if ("spread" in n && typeof n.spread == "boolean") return e.type === "paragraph" && (e.type === t.type || t.type === "definition" || t.type === "heading" && Dd(t, r)) ? void 0 : +!!n.spread;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/unsafe.js
var cf = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
], lf = [
	{
		character: "	",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "	",
		before: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "	",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
	},
	{
		character: "\r",
		inConstruct: [
			"codeFencedLangGraveAccent",
			"codeFencedLangTilde",
			"codeFencedMetaGraveAccent",
			"codeFencedMetaTilde",
			"destinationLiteral",
			"headingAtx"
		]
	},
	{
		character: "\n",
		inConstruct: [
			"codeFencedLangGraveAccent",
			"codeFencedLangTilde",
			"codeFencedMetaGraveAccent",
			"codeFencedMetaTilde",
			"destinationLiteral",
			"headingAtx"
		]
	},
	{
		character: " ",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: " ",
		before: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: " ",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
	},
	{
		character: "!",
		after: "\\[",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		character: "\"",
		inConstruct: "titleQuote"
	},
	{
		atBreak: !0,
		character: "#"
	},
	{
		character: "#",
		inConstruct: "headingAtx",
		after: "(?:[\r\n]|$)"
	},
	{
		character: "&",
		after: "[#A-Za-z]",
		inConstruct: "phrasing"
	},
	{
		character: "'",
		inConstruct: "titleApostrophe"
	},
	{
		character: "(",
		inConstruct: "destinationRaw"
	},
	{
		before: "\\]",
		character: "(",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		atBreak: !0,
		before: "\\d+",
		character: ")"
	},
	{
		character: ")",
		inConstruct: "destinationRaw"
	},
	{
		atBreak: !0,
		character: "*",
		after: "(?:[ 	\r\n*])"
	},
	{
		character: "*",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		atBreak: !0,
		character: "+",
		after: "(?:[ 	\r\n])"
	},
	{
		atBreak: !0,
		character: "-",
		after: "(?:[ 	\r\n-])"
	},
	{
		atBreak: !0,
		before: "\\d+",
		character: ".",
		after: "(?:[ 	\r\n]|$)"
	},
	{
		atBreak: !0,
		character: "<",
		after: "[!/?A-Za-z]"
	},
	{
		character: "<",
		after: "[!/?A-Za-z]",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		character: "<",
		inConstruct: "destinationLiteral"
	},
	{
		atBreak: !0,
		character: "="
	},
	{
		atBreak: !0,
		character: ">"
	},
	{
		character: ">",
		inConstruct: "destinationLiteral"
	},
	{
		atBreak: !0,
		character: "["
	},
	{
		character: "[",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		character: "[",
		inConstruct: ["label", "reference"]
	},
	{
		character: "\\",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "]",
		inConstruct: ["label", "reference"]
	},
	{
		atBreak: !0,
		character: "_"
	},
	{
		character: "_",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		atBreak: !0,
		character: "`"
	},
	{
		character: "`",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
	},
	{
		character: "`",
		inConstruct: "phrasing",
		notInConstruct: cf
	},
	{
		atBreak: !0,
		character: "~"
	}
];
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/association.js
function uf(e) {
	return e.label || !e.identifier ? e.label || "" : Ul(e.identifier);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js
function df(e) {
	if (!e._compiled) {
		let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
		e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
	}
	return e._compiled;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function ff(e, t, n) {
	let r = t.indexStack, i = e.children || [], a = [], o = -1, s = n.before, c;
	r.push(-1);
	let l = t.createTracker(n);
	for (; ++o < i.length;) {
		let u = i[o], d;
		if (r[r.length - 1] = o, o + 1 < i.length) {
			let n = t.handle.handlers[i[o + 1].type];
			n && n.peek && (n = n.peek), d = n ? n(i[o + 1], e, t, {
				before: "",
				after: "",
				...l.current()
			}).charAt(0) : "";
		} else d = n.after;
		a.length > 0 && (s === "\r" || s === "\n") && u.type === "html" && (a[a.length - 1] = a[a.length - 1].replace(/(\r?\n|\r)$/, " "), s = " ", l = t.createTracker(n), l.move(a.join("")));
		let f = t.handle(u, e, t, {
			...l.current(),
			after: d,
			before: s
		});
		c && c === f.slice(0, 1) && (f = Sd(c.charCodeAt(0)) + f.slice(1));
		let p = t.attentionEncodeSurroundingInfo;
		t.attentionEncodeSurroundingInfo = void 0, c = void 0, p && (a.length > 0 && p.before && s === a[a.length - 1].slice(-1) && (a[a.length - 1] = a[a.length - 1].slice(0, -1) + Sd(s.charCodeAt(0))), p.after && (c = d)), l.move(f), a.push(f), s = f.slice(-1);
	}
	return r.pop(), a.join("");
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function pf(e, t, n) {
	let r = t.indexStack, i = e.children || [], a = t.createTracker(n), o = [], s = -1;
	for (r.push(-1); ++s < i.length;) {
		let n = i[s];
		r[r.length - 1] = s, o.push(a.move(t.handle(n, e, t, {
			before: "\n",
			after: "\n",
			...a.current()
		}))), n.type !== "list" && (t.bulletLastUsed = void 0), s < i.length - 1 && o.push(a.move(mf(n, i[s + 1], e, t)));
	}
	return r.pop(), o.join("");
}
function mf(e, t, n, r) {
	let i = r.join.length;
	for (; i--;) {
		let a = r.join[i](e, t, n, r);
		if (a === !0 || a === 1) break;
		if (typeof a == "number") return "\n".repeat(1 + a);
		if (a === !1) return "\n\n<!---->\n\n";
	}
	return "\n\n";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var hf = /\r?\n|\r/g;
function gf(e, t) {
	let n = [], r = 0, i = 0, a;
	for (; a = hf.exec(e);) o(e.slice(r, a.index)), n.push(a[0]), r = a.index + a[0].length, i++;
	return o(e.slice(r)), n.join("");
	function o(e) {
		n.push(t(e, i, !e));
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/safe.js
function _f(e, t, n) {
	let r = (n.before || "") + (t || "") + (n.after || ""), i = [], a = [], o = {}, s = -1;
	for (; ++s < e.unsafe.length;) {
		let t = e.unsafe[s];
		if (!dd(e.stack, t)) continue;
		let n = e.compilePattern(t), a;
		for (; a = n.exec(r);) {
			let e = "before" in t || !!t.atBreak, n = "after" in t, r = a.index + (e ? a[1].length : 0);
			i.includes(r) ? (o[r].before && !e && (o[r].before = !1), o[r].after && !n && (o[r].after = !1)) : (i.push(r), o[r] = {
				before: e,
				after: n
			});
		}
	}
	i.sort(vf);
	let c = n.before ? n.before.length : 0, l = r.length - (n.after ? n.after.length : 0);
	for (s = -1; ++s < i.length;) {
		let e = i[s];
		e < c || e >= l || e + 1 < l && i[s + 1] === e + 1 && o[e].after && !o[e + 1].before && !o[e + 1].after || i[s - 1] === e - 1 && o[e].before && !o[e - 1].before && !o[e - 1].after || (c !== e && a.push(yf(r.slice(c, e), "\\")), c = e, /[!-/:-@[-`{-~]/.test(r.charAt(e)) && (!n.encode || !n.encode.includes(r.charAt(e))) ? a.push("\\") : (a.push(Sd(r.charCodeAt(e))), c++));
	}
	return a.push(yf(r.slice(c, l), n.after)), a.join("");
}
function vf(e, t) {
	return e - t;
}
function yf(e, t) {
	let n = /\\(?=[!-/:-@[-`{-~])/g, r = [], i = [], a = e + t, o = -1, s = 0, c;
	for (; c = n.exec(a);) r.push(c.index);
	for (; ++o < r.length;) s !== r[o] && i.push(e.slice(s, r[o])), i.push("\\"), s = r[o];
	return i.push(e.slice(s)), i.join("");
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/track.js
function bf(e) {
	/* c8 ignore next 5 */
	let t = e || {}, n = t.now || {}, r = t.lineShift || 0, i = n.line || 1, a = n.column || 1;
	return {
		move: c,
		current: o,
		shift: s
	};
	function o() {
		return {
			now: {
				line: i,
				column: a
			},
			lineShift: r
		};
	}
	function s(e) {
		r += e;
	}
	function c(e) {
		let t = e || "", n = t.split(/\r?\n|\r/g), o = n[n.length - 1];
		return i += n.length - 1, a = n.length === 1 ? a + o.length : 1 + o.length + r, t;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/index.js
function xf(e, t) {
	let n = t || {}, r = {
		associationId: uf,
		containerPhrasing: Tf,
		containerFlow: Ef,
		createTracker: bf,
		compilePattern: df,
		enter: a,
		handlers: { ...af },
		handle: void 0,
		indentLines: gf,
		indexStack: [],
		join: [...of],
		options: {},
		safe: Df,
		stack: [],
		unsafe: [...lf]
	};
	od(r, n), r.options.tightDefinitions && r.join.push(wf), r.handle = id("type", {
		invalid: Sf,
		unknown: Cf,
		handlers: r.handlers
	});
	let i = r.handle(e, void 0, r, {
		before: "\n",
		after: "\n",
		now: {
			line: 1,
			column: 1
		},
		lineShift: 0
	});
	return i && i.charCodeAt(i.length - 1) !== 10 && i.charCodeAt(i.length - 1) !== 13 && (i += "\n"), i;
	function a(e) {
		return r.stack.push(e), t;
		function t() {
			r.stack.pop();
		}
	}
}
function Sf(e) {
	throw Error("Cannot handle value `" + e + "`, expected node");
}
function Cf(e) {
	throw Error("Cannot handle unknown node `" + e.type + "`");
}
function wf(e, t) {
	if (e.type === "definition" && e.type === t.type) return 0;
}
function Tf(e, t) {
	return ff(e, this, t);
}
function Ef(e, t) {
	return pf(e, this, t);
}
function Df(e, t) {
	return _f(this, e, t);
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-table/lib/index.js
function Of() {
	return {
		enter: {
			table: kf,
			tableData: Nf,
			tableHeader: Nf,
			tableRow: jf
		},
		exit: {
			codeText: Pf,
			table: Af,
			tableData: Mf,
			tableHeader: Mf,
			tableRow: Mf
		}
	};
}
function kf(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Af(e) {
	this.exit(e), this.data.inTable = void 0;
}
function jf(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Mf(e) {
	this.exit(e);
}
function Nf(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Pf(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, Ff));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function Ff(e, t) {
	return t === "|" ? t : e;
}
function If(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return ed(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = af.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-task-list-item/lib/index.js
function Lf() {
	return { exit: {
		taskListCheckValueChecked: zf,
		taskListCheckValueUnchecked: zf,
		paragraph: Bf
	} };
}
function Rf() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: Vf }
	};
}
function zf(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Bf(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function Vf(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = af.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-gfm/lib/index.js
function Hf() {
	return [
		vu(),
		Hu(),
		qu(),
		Of(),
		Lf()
	];
}
function Uf(e) {
	return { extensions: [
		yu(),
		Uu(e),
		Ju(),
		If(e),
		Rf()
	] };
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var Wf = {
	tokenize: ip,
	partial: !0
}, Gf = {
	tokenize: ap,
	partial: !0
}, Kf = {
	tokenize: op,
	partial: !0
}, qf = {
	tokenize: sp,
	partial: !0
}, Jf = {
	tokenize: cp,
	partial: !0
}, Yf = {
	name: "wwwAutolink",
	tokenize: np,
	previous: lp
}, Xf = {
	name: "protocolAutolink",
	tokenize: rp,
	previous: up
}, Zf = {
	name: "emailAutolink",
	tokenize: tp,
	previous: dp
}, Qf = {};
function $f() {
	return { text: Qf };
}
for (var ep = 48; ep < 123;) Qf[ep] = Zf, ep++, ep === 58 ? ep = 65 : ep === 91 && (ep = 97);
Qf[43] = Zf, Qf[45] = Zf, Qf[46] = Zf, Qf[95] = Zf, Qf[72] = [Zf, Xf], Qf[104] = [Zf, Xf], Qf[87] = [Zf, Yf], Qf[119] = [Zf, Yf];
function tp(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !fp(t) || !dp.call(r, r.previous) || pp(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return fp(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(Jf, u, l)(t) : t === 45 || t === 95 || ps(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && fs(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function np(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !lp.call(r, r.previous) || pp(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Wf, e.attempt(Gf, e.attempt(Kf, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function rp(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && up.call(r, r.previous) && !pp(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (fs(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || hs(t) || bs(t) || Cs(t) || Ss(t) ? n(t) : e.attempt(Gf, e.attempt(Kf, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function ip(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function ap(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(qf, c, s)(t) : t === null || bs(t) || Cs(t) || t !== 45 && Ss(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function op(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(qf, t, a)(o) : o === null || bs(o) || Cs(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function sp(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || bs(o) || Cs(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || bs(e) || Cs(e) ? t(e) : r(e);
	}
	function a(e) {
		return fs(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : fs(t) ? (e.consume(t), o) : n(t);
	}
}
function cp(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return ps(e) ? n(e) : t(e);
	}
}
function lp(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || bs(e);
}
function up(e) {
	return !fs(e);
}
function dp(e) {
	return !(e === 47 || fp(e));
}
function fp(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || ps(e);
}
function pp(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var mp = {
	tokenize: Sp,
	partial: !0
};
function hp() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: yp,
			continuation: { tokenize: bp },
			exit: xp
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: vp
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: gp,
				resolveTo: _p
			}
		}
	};
}
function gp(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = ds(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function _p(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function vp(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || bs(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(ds(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return bs(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function yp(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || bs(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = ds(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return bs(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), Es(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function bp(e, t, n) {
	return e.check(Vs, t, e.attempt(mp, t, n));
}
function xp(e) {
	e.exit("gfmFootnoteDefinition");
}
function Sp(e, t, n) {
	let r = this;
	return Es(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function Cp(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && is(o, o.length, 0, Ps(s, e.slice(r + 1, n), t)), is(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), is(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = Ns(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Ns(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/edit-map.js
var wp = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		Tp(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function Tp(e, t, n, r) {
	let i = 0;
	/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
	if (n !== 0 || r.length !== 0) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/infer.js
function Ep(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/syntax.js
function Dp() {
	return { flow: { null: {
		name: "table",
		tokenize: Op,
		resolveAll: kp
	} } };
}
function Op(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 || (o = !0, a += 1), u(e);
	}
	function u(t) {
		return t === null ? n(t) : ys(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : xs(t) ? Es(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || bs(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, xs(t) ? Es(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return xs(t) ? Es(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || ys(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return xs(t) ? Es(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || ys(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || ys(n) ? (e.exit("tableRow"), t(n)) : xs(n) ? Es(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || bs(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function kp(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new wp();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (jp(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = Ap(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = Ap(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = Ap(f, t, o, i, n, d)) : (o[0] = o[1], d = Ap(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && jp(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = Ep(t.events, n));
	}
	return e;
}
function Ap(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, Mp(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = Mp(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = Mp(t.events, n[2]), a = Mp(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, Mp(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function jp(e, t, n, r, i) {
	let a = [], o = Mp(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function Mp(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var Np = {
	name: "tasklistCheck",
	tokenize: Fp
};
function Pp() {
	return { text: { 91: Np } };
}
function Fp(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return bs(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return ys(r) ? t(r) : xs(r) ? e.check({ tokenize: Ip }, t, n)(r) : n(r);
	}
}
function Ip(e, t, n) {
	return Es(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm/index.js
function Lp(e) {
	return ss([
		$f(),
		hp(),
		Cp(e),
		Dp(),
		Pp()
	]);
}
//#endregion
//#region ../../node_modules/remark-gfm/lib/index.js
var Rp = {};
function zp(e) {
	let t = this, n = e || Rp, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(Lp(n)), a.push(Hf()), o.push(Uf(n));
}
//#endregion
//#region ../../node_modules/remark-stringify/lib/index.js
function Bp(e) {
	let t = this;
	t.compiler = n;
	function n(n) {
		return xf(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("toMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region src/utils/markdownPlaceholders.ts
var Vp = /\{([A-Za-z][A-Za-z0-9_]*)\}/g, Hp = (e, t) => e.replace(Vp, (e, n) => {
	let r = Object.hasOwn(t, n) ? t[n] : void 0;
	return typeof r == "string" && r.length > 0 ? r : e;
}), Up = (e, t) => {
	e.type === "text" && typeof e.value == "string" && (e.value = Hp(e.value, t)), e.children?.forEach((e) => {
		Up(e, t);
	});
}, Wp = (e) => () => (t) => {
	Up(t, e);
}, Gp = Vo().use(Ql).use(zp).use(Bp, {
	resourceLink: !0,
	handlers: { text: (e, t, n, r) => n.safe(e.value, r).replace(/\r/g, "&#13;").replace(/\n/g, "&#10;") }
}), Kp = (e, t) => {
	let n = Gp.parse(e.value);
	return t && Wp(t)()(n), {
		...e,
		value: Gp.stringify(n).trimEnd()
	};
}, qp = (e, t) => t ? {
	...e,
	value: Hp(e.value, t)
} : e, Jp = (e, t, n, r) => Object.fromEntries(Object.entries({
	...e,
	amount: t ?? "",
	currency: n
}).map(([e, t]) => [e, r === "rtl" && t ? `\u2068${t}\u2069` : t])), Yp = (e) => {
	if (!e || typeof e != "object") return null;
	let t = e;
	if (typeof t.currency != "string" || !t.currency.trim() || t.currency !== t.currency.trim() || ![
		"string",
		"number",
		"bigint"
	].includes(typeof t.value)) return null;
	let n = String(t.value);
	try {
		return Ee(n), {
			value: n,
			currency: t.currency
		};
	} catch {
		return null;
	}
}, Xp = (e, t) => {
	let n = Yp(e), r = Yp(t);
	return !n || !r || n.currency.toUpperCase() !== r.currency.toUpperCase() ? !1 : ne(Ee(n.value), Ee(r.value)) === 0;
}, Zp = (e, t, n) => e.map(({ id: e, label: r, value: i }) => ({
	id: e,
	label: t(r && r.length > 0 ? r : e),
	value: n(i)
})), Qp = (e, t) => e.find((e) => e.id === t)?.value, $p = (e, t, n) => {
	if (!e) return null;
	let r = {
		trailingZeroDisplay: "stripIfInteger",
		...n
	};
	try {
		return N({
			currency: e,
			locale: t,
			formatOptions: r,
			useCurrencyScale: !0
		});
	} catch {
		return null;
	}
}, em = (e, t) => {
	if (!t) return "";
	let n = O(e);
	return n === null ? "" : t.format(typeof e == "string" && /^[+-]?\d+(?:\.\d+)?$/.test(e.trim()) ? e.trim() : n);
}, tm = ({ currency: e, currencyFormatter: t, locale: n, currencyFormatOptions: r } = {}) => {
	let i = /* @__PURE__ */ new Map();
	return e && t !== void 0 && i.set(e.toUpperCase(), t), (e) => {
		if (typeof e == "string") return e;
		let t = Yp(e);
		if (t) {
			let e = t.currency.toUpperCase();
			i.has(e) || i.set(e, $p(t.currency, n, r));
			try {
				let n = i.get(e);
				if (n) return n.format(t.value);
			} catch {}
			return `${t.value} ${t.currency}`;
		}
		try {
			return JSON.stringify(e);
		} catch {
			return "";
		}
	};
}, nm = (e, t, n, r) => {
	if (!(e instanceof Date) && typeof e != "string") return "";
	let i = Te(e, { strict: !0 });
	if (!i) return "";
	if (t) try {
		return t.format(i);
	} catch {}
	return xe(i, n, r);
}, rm = (e, t, n, r, i) => {
	if (E(e)) return em(e.value, t) || w(e, { locale: r });
	if (e instanceof Date) return nm(e, n, r, i);
	if (typeof e == "string") return em(e, t) || nm(e, n, r, i) || e;
	if (typeof e == "boolean") return e ? "true" : "false";
	if (typeof e == "number" || typeof e == "bigint") return e.toString();
	if (typeof e == "symbol") return e.description || "";
	if (typeof e == "function") return e.name;
	let a = em(e, t);
	if (a) return a;
	if (e == null) return "";
	if (typeof e == "object") try {
		return JSON.stringify(e);
	} catch {
		return "";
	}
	return "";
}, im = ({ creation: e, attempt: t, generation: n, purchaseAttempt: r, data: i, tracker: a, merchantOwnsProviderWindow: o = !1, committed: s, created: c }) => {
	let l = r?.getSnapshot().context?.paymentContextId;
	if (!(r && n !== void 0 ? r.created(n, i.paymentId) : e.confirm(t, i.paymentId)) || (s(), !e.accepts(t)) || (Fa({
		callback: c,
		callbackName: "onPaymentCreated",
		debug: void 0,
		payload: l
	}), !e.accepts(t))) throw Error("error.payment_processing_failed");
	let u = a.track(i.paymentId, {
		...i,
		paymentId: i.paymentId,
		status: "ongoing",
		paymentStatus: "ongoing"
	}, {
		createdLocally: !0,
		merchantOwnershipProved: !0,
		merchantOwnsProviderWindow: o
	});
	return u && !r && e.acknowledge(), u;
}, am = (e, t) => {
	let n = T(t.locale);
	return (e ?? []).map((e) => {
		let r = Jp(e.params, t.amount, t.currency, n.direction), i = (e) => qp(t.resolveText(e), r), a = we(e.pricing, e.unitPrice, t, e.quantity), o = a?.current.value ?? (e.unitPrice === void 0 ? void 0 : re(e.unitPrice, e.quantity, t.currency));
		return {
			id: e.id,
			scope: e.scope,
			title: i(e.title),
			...e.description === void 0 ? {} : { description: i(e.description) },
			...e.image === void 0 ? {} : { image: {
				src: e.image.src,
				alt: e.image.alt ? i(e.image.alt) : { value: "" }
			} },
			...e.quantity === void 0 ? {} : {
				quantity: e.quantity,
				quantityDisplay: new Intl.NumberFormat(t.locale).format(e.quantity)
			},
			...o === void 0 ? {} : { amount: {
				value: o,
				currency: t.currency,
				display: g(o, t.currency, t.locale, t.formatOptions)
			} },
			...a ? { pricing: a } : {},
			localisation: n
		};
	});
}, om = {
	available: 0,
	close: 1,
	unavailable: 2
}, sm = (e) => e.map((e, t) => ({
	item: e,
	index: t
})).sort((e, t) => {
	let n = om[e.item.status] - om[t.item.status];
	return n === 0 ? e.index - t.index : n;
}).map(({ item: e }) => e), cm = (e) => e.status === "available" || e.status === "close" && e.reasons.length > 0 && e.reasons.every((e) => e.type === "amount" && e.boundary === "min"), lm = (e) => typeof e == "string" && e.trim().length > 0, um = (e) => typeof e == "string" ? e.trim().toLowerCase() : void 0, dm = (e, t) => e == null || t != null && um(e) === um(t), fm = (e, t) => dm(t.method, e.method) && dm(t.type, e.type) && dm(t.service, e.service) && dm(t.accountId, e.accountId), pm = (e) => typeof e == "number" && Number.isFinite(e), mm = (e, t = 0) => pm(e) ? e : t, hm = (e) => pm(e) ? e : void 0, gm = (e) => {
	if (!pm(e)) return;
	let t = e;
	return t >= 0 ? t : void 0;
}, _m = (e) => {
	if (pm(e)) return e > 0 ? e : void 0;
}, vm = (e) => {
	let t = _m(e.maxBonus);
	return t === void 0 ? null : {
		id: "legacy-max-bonus",
		type: "currency",
		value: {
			type: "percentage",
			value: _m(e.maxBonusPercentage) ?? 100,
			maxValue: t
		}
	};
}, ym = (e) => ({
	payinCount: mm(e?.payinCount),
	daysSinceRegistration: mm(e?.daysSinceRegistration),
	totalPayinAmount: mm(e?.totalPayinAmount)
}), bm = (e, t, n, r) => ({
	type: e,
	delta: t,
	boundary: n,
	limit: r
}), xm = (e) => "delta" in e ? Math.abs(e.delta) : 0, Sm = (e) => "delta" in e, Cm = (e, t, n, r, i) => {
	let a = [];
	if (t !== void 0 && e < t) {
		let n = t - e, o = bm(i, n, "min", t);
		if (r !== void 0 && n <= r) a.push(o);
		else return {
			status: "fail",
			reasons: [o]
		};
	}
	if (n !== void 0 && e > n) {
		let t = e - n, o = bm(i, t, "max", n);
		if (r !== void 0 && t <= r) a.push(o);
		else return {
			status: "fail",
			reasons: [o]
		};
	}
	return a.length > 0 ? {
		status: "close",
		reasons: a
	} : {
		status: "pass",
		reasons: []
	};
}, wm = (e, t, n) => {
	if (!fm(e, t)) return {
		status: "mismatch",
		reasons: [{ type: "paymentTypeMismatch" }],
		score: 0
	};
	let r = Cm(n.amount, hm(t.minAmount), hm(t.maxAmount), gm(t.closeToAmount), "amount");
	if (r.status === "fail") return {
		status: "mismatch",
		reasons: r.reasons,
		score: 0
	};
	let i = Cm(n.user.payinCount, hm(t.minPayinCount), hm(t.maxPayinCount), gm(t.closeToPayinCount), "payinCount");
	if (i.status === "fail") return {
		status: "mismatch",
		reasons: i.reasons,
		score: 0
	};
	let a = Cm(n.user.totalPayinAmount, hm(t.minTotalPayinAmount), hm(t.maxTotalPayinAmount), gm(t.closeToTotalPayinAmount), "totalPayinAmount");
	if (a.status === "fail") return {
		status: "mismatch",
		reasons: a.reasons,
		score: 0
	};
	let o = Cm(n.user.daysSinceRegistration, hm(t.minDaysSinceRegistration), hm(t.maxDaysSinceRegistration), gm(t.closeToDaysSinceRegistration), "daysSinceRegistration");
	if (o.status === "fail") return {
		status: "mismatch",
		reasons: o.reasons,
		score: 0
	};
	let s = [
		...r.reasons,
		...i.reasons,
		...a.reasons,
		...o.reasons
	];
	return s.length > 0 ? {
		status: "close",
		reasons: s,
		score: s.reduce((e, t) => e + xm(t), 0)
	} : {
		status: "eligible",
		reasons: [],
		score: 0
	};
}, Tm = (e) => e.method !== void 0 || e.type !== void 0 || e.service !== void 0 || e.accountId !== void 0, Em = (e) => {
	let t = e.conditions?.include ?? [], n = e.conditions?.exclude ?? [];
	return [...t, ...n].some(Tm);
}, Dm = (e, t) => {
	let n = e.conditions?.include ?? [], r = e.conditions?.exclude ?? [], i = n.length === 0 || n.some((e) => !Tm(e) || fm(t, e)), a = r.some((e) => Tm(e) && fm(t, e));
	return i && !a;
}, Om = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = [];
	for (let i of t) {
		if (!Dm(e, i)) continue;
		let t = Qn(i.nameKeys ?? i.name).filter(lm);
		t.length !== 0 && (n.has(t[0]) || (n.add(t[0]), r.push([...t])));
	}
	return r;
}, km = {
	name: "__bonus_preview__",
	type: "__bonus_preview__",
	typeId: 0,
	method: "__bonus_preview__"
}, Am = (e) => e.length === 0 ? null : e.reduce((e, t) => t.score < e.score ? t : e), jm = (e) => {
	let t = e.find((e) => e.reasons.some((e) => e.type !== "paymentTypeMismatch"));
	return t ? t.reasons : e[0]?.reasons ?? [{ type: "paymentTypeMismatch" }];
}, Mm = (e, t, n) => {
	let r = e.conditions, i = r?.include ?? [], a = r?.exclude ?? [], o = i.length > 0 ? i.map((e) => wm(t, e, n)) : [{
		status: "eligible",
		reasons: [],
		score: 0
	}];
	if (a.map((e) => wm(t, e, n)).some((e) => e.status === "eligible")) return {
		bonus: e,
		status: "unavailable",
		reasons: [{ type: "excluded" }]
	};
	if (o.some((e) => e.status === "eligible")) return {
		bonus: e,
		status: "available",
		reasons: []
	};
	let s = Am(o.filter((e) => e.status === "close"));
	return s ? {
		bonus: e,
		status: "close",
		reasons: s.reasons
	} : {
		bonus: e,
		status: "unavailable",
		reasons: jm(o)
	};
}, Nm = (e) => Array.isArray(e) ? e.filter((e) => lm(e.code) && lm(e.title) && lm(e.description)) : [], Pm = (e) => Array.isArray(e) && e.length > 0, Fm = (e, t, n) => {
	if (!t) return [];
	let r = {
		amount: mm(n?.amount),
		user: ym(n?.user)
	}, i = [];
	for (let n of e) {
		let e = n.conditions, a = e?.include ?? [], o = e?.exclude ?? [], s = a.length > 0 ? a.map((e) => wm(t, e, r)) : [{
			status: "eligible",
			reasons: [],
			score: 0
		}], c = s.find((e) => e.status === "eligible"), l = null, u = [];
		if (c) l = "available";
		else {
			let e = s.filter((e) => e.status === "close");
			if (e.length === 0) continue;
			let t = e.reduce((e, t) => t.score < e.score ? t : e);
			l = "close", u = t.reasons;
		}
		o.some((e) => wm(t, e, r).status === "eligible") || i.push({
			bonus: n,
			status: l,
			reasons: u
		});
	}
	return i;
}, Im = (e, t, n, r) => {
	let i = {
		amount: mm(r?.amount),
		user: ym(r?.user)
	};
	if (n) return e.map((e) => Mm(e, n, i));
	let a = t[0] ?? km;
	return e.map((e) => Em(e) ? {
		bonus: e,
		status: "unavailable",
		reasons: [{
			type: "paymentTypeRequired",
			paymentTypeNames: Om(e, t)
		}]
	} : Mm(e, a, i));
}, Lm = (e, t, n) => Fm(e, t, n).filter((e) => e.status === "available").map((e) => e.bonus), Rm = ({ uiBonuses: e, selectedBonusCode: t, availableBonuses: n }) => {
	if (e && t) return n.some((e) => e.code === t) ? t : void 0;
}, zm = (e, t) => {
	let n = ((Array.isArray(e.awards) ? e.awards.find((e) => e.type === "currency" && e.value.type === "percentage" && _m(e.value.value) !== void 0 && _m(e.value.maxValue) !== void 0) : void 0) ?? vm(e))?.value;
	if (!n || n.type !== "percentage" || _m(n.value) === void 0 || _m(n.maxValue) === void 0) return null;
	let r = _m(n.maxValue);
	if (r === void 0) return null;
	let i = n.value, a = r / (i / 100), o = _m(t), s = o === void 0 ? null : de(n, String(o), !1);
	return {
		maxBonus: r,
		maxBonusPercentage: i,
		estimatedBonus: s,
		fullClaimAmount: a,
		claimPercentage: s === null ? null : Math.min(100, Number(s) / r * 100)
	};
}, Bm = "bonus.summary.money_applied", Vm = (e, t) => {
	if (!e) return "";
	if (t.hasTranslation) return t.hasTranslation(e) ? t.translateKey?.(e) ?? e : e;
	let n = t.translateKey?.(e);
	return n && n !== e ? n : e;
}, Hm = (e) => {
	let t = /* @__PURE__ */ new Set();
	return (Array.isArray(e) ? e : []).flatMap((e, n) => {
		let r = e?.value;
		if (!r) return [];
		let i = typeof e.id == "string" ? e.id.trim() : "", a = i && i.length <= 256 && !t.has(i) ? i : `legacy-award-${String(n)}`;
		for (; t.has(a);) a = `_${a}`;
		let o = {
			id: a,
			type: e.type,
			name: e.name,
			message: e.message,
			screens: e.screens,
			paymentStatuses: e.paymentStatuses,
			value: {
				type: r.type,
				value: r.value,
				rounding: r.rounding,
				...Number.isFinite(r.maxValue) ? { maxValue: r.maxValue } : {}
			}
		};
		return ke([o]).length ? [] : (t.add(a), [o]);
	});
}, Um = (e, t) => pe(Hm(e.awards), {
	amount: t.amount === null || t.amount === void 0 || typeof t.amount == "number" && !Number.isFinite(t.amount) ? void 0 : String(t.amount),
	locale: t.locale ?? "en",
	resolveText: (e) => Vm(e, t),
	formatAmount: t.formatAmount ?? ((e) => e),
	formatItemValue: (e) => String(Number(Number(e).toFixed(4))),
	defaultMessage: Bm,
	parameters: {
		bonusTitle: Vm(e.title, t),
		bonusCode: e.code
	},
	source: {
		kind: "bonus",
		bonusCode: e.code
	}
}), Wm = (e, t) => Um(e, t).filter((e) => Se(e.paymentStatuses, t.paymentStatus ?? void 0)), Gm = (e, t, n) => {
	let r = e(t);
	return r === t ? n : r;
}, Km = (e) => String(Math.round(Math.abs(e))), qm = (e) => {
	let t = e.trim(), n = t.split(".").filter(Boolean);
	return (n[0] === "payment_type" ? n[1] ?? t : t).replace(/[_-]+/g, " ").replace(/\b\w/g, (e) => e.toLocaleUpperCase());
}, Jm = (e, t) => (e ?? []).map((e) => {
	for (let n of e) {
		let e = t(n);
		if (e !== n) return e;
	}
	let n = e.at(-1);
	return n ? qm(n) : "";
}).filter(lm).join(", "), Ym = (e, t, n) => {
	if (e.type === "paymentTypeRequired") {
		let n = Jm(e.paymentTypeNames, t);
		if (n.length === 0) return "Only available for compatible payment types";
		let r = Gm(t, "bonus.unavailable.payment_type_required", "Only available for {paymentTypes}");
		return Mt(r.includes("{paymentTypes}") ? r : "Only available for {paymentTypes}", "paymentTypes", n);
	}
	if (e.type === "paymentTypeMismatch") return Gm(t, "bonus.unavailable.payment_type_mismatch", "Not available for this payment type");
	if (e.type === "excluded") return Gm(t, "bonus.unavailable.excluded", "Not available for this payment type");
	if (!Sm(e)) return "";
	if (e.boundary === "max") {
		let r = e.limit ?? e.delta;
		return e.type === "amount" || e.type === "totalPayinAmount" ? Mt(Gm(t, `${e.type === "amount" ? "bonus.unavailable.amount" : "bonus.unavailable.total_payin_amount"}_max`, e.type === "totalPayinAmount" ? "Your total deposits exceed the limit of {amount}" : "Your current amount exceeds the limit of {amount}"), "amount", n(r) || String(r)) : e.type === "payinCount" ? Mt(Gm(t, "bonus.unavailable.payin_count_max", "Your deposit count exceeds the limit of {count}"), "count", Km(r)) : Mt(Gm(t, "bonus.unavailable.registration_days_max", "Your account age exceeds the limit of {days} days"), "days", Km(r));
	}
	return e.type === "amount" ? Mt(t("bonus.close_to_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "totalPayinAmount" ? Mt(t("bonus.close_to_total_payin_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "payinCount" ? Mt(t("bonus.close_to_payin_count"), "count", String(Math.round(Math.abs(e.delta)))) : Mt(t("bonus.close_to_registration_days"), "days", String(Math.round(Math.abs(e.delta))));
}, Xm = (e) => {
	if (e == null || e === "") return;
	if (typeof e != "string") throw Error("error.payment_context_changed");
	let t = e.trim().replace(/,/g, ".");
	if (t === ".") return;
	if (/^\.\d+$/.test(t) && (t = `0${t}`), /^\d+\.$/.test(t) && (t = t.slice(0, -1)), !R(t)) throw Error("error.payment_context_changed");
	let [n, r = ""] = t.split("."), i = n.replace(/^0+(?=\d)/, ""), a = r.replace(/0+$/, "");
	return a ? `${i}.${a}` : i;
}, Zm = Se, Qm = [
	"combo",
	"paymentTypes",
	"bonusSelection",
	"paymentDetails",
	"paymentConfirmation"
], $m = (e, t, n) => e.filter((e) => (e.screens === void 0 || e.screens.includes(t)) && (Qm.includes(t) || Zm(e.paymentStatuses, n, !0))), eh = (e) => e.uiBonuses === !1 && e.offers === void 0 ? void 0 : Nm(e.bonuses).find((t) => t.code === e.selectedBonusCode), th = ({ config: e, amount: t, resolveText: n, formatAmount: r, resolveTextKey: i }) => {
	if (y(e).length) throw Error("error.purchase_configuration_invalid");
	let a = String(e.locale), o = Xm(t), s = pe(e.purchaseItems, {
		amount: o,
		locale: a,
		resolveText: n,
		formatAmount: r
	}), c = eh(e);
	c && s.push(...Um(c, {
		amount: o,
		locale: a,
		translateKey: n,
		formatAmount: r
	}));
	let l = i ?? ((e) => ({ value: n(e) })), u = T(a).direction, d = (t) => Jp(t, o === void 0 ? void 0 : r(o), e.currency, u), f = e.offers?.find((t) => t.id === e.selectedOfferId), p = we(e.checkout?.pricing, o, {
		currency: e.currency,
		locale: a,
		resolveText: l,
		formatOptions: e.currencyFormatOptions
	}, 1, !0), m = e.offers !== void 0 || e.checkout?.pricing !== void 0 || e.displayItems?.some((e) => e.pricing !== void 0), h = e.displayItems?.some((e) => e.scope === "payment") ? 3 : 2;
	return structuredClone({
		...f ? { offer: {
			id: f.id,
			title: l(f.title),
			description: l(f.description),
			...f.submission ? { submission: f.submission } : {},
			...f.couponCode ? { couponCode: f.couponCode } : {}
		} } : {},
		...p ? { orderPricing: p } : {},
		schemaVersion: m ? 4 : h,
		...e.displayItems?.some((e) => e.scope === "payment") ? { displayItems: am(e.displayItems.filter((e) => e.scope === "payment"), {
			locale: a,
			currency: e.currency,
			amount: o === void 0 ? void 0 : r(o),
			resolveText: l,
			formatOptions: e.currencyFormatOptions
		}) } : {},
		merchantId: e.merchantId,
		paymentContextId: e.paymentContextId,
		amount: o,
		currency: e.currency,
		locale: a,
		items: s,
		elements: se(e.elementGroups),
		messages: (e.messages ?? []).filter((e) => e.scope === "payment").map(_).map(({ params: e, text: t, ...n }) => ({
			...n,
			scope: "payment",
			text: Kp(l(t), d(e)),
			format: "markdown"
		})),
		actions: e.actions === void 0 ? void 0 : e.actions.filter((e) => e.scope === "payment").map(_).map(({ params: e, label: t, ...n }) => ({
			...n,
			scope: "payment",
			label: qp(l(t), d(e))
		}))
	});
}, nh = (e) => JSON.stringify(e, (e, t) => {
	if (t && typeof t == "object" && !Array.isArray(t)) {
		let e = t;
		return Object.fromEntries(Object.keys(e).sort().map((t) => [t, e[t]]));
	}
	return t;
}), rh = (e) => je(e).length ? void 0 : nh(e), ih = (e) => nh((e ?? []).filter((e) => e.scope === "payment").map(ah)), ah = ({ tone: e, announcement: t, ...n }) => _(n), oh = (e) => nh((e ?? []).filter((e) => e.scope === "payment").map(_)), sh = (e) => {
	if (e.schemaVersion === 2 || e.schemaVersion === 3 || e.schemaVersion === 4) return structuredClone(e);
	let { awards: t, messages: n, schemaVersion: r, ...i } = e, a = [];
	return {
		...i,
		schemaVersion: 2,
		items: structuredClone(t),
		messages: n?.map(({ text: t, params: n, placement: r, actions: i, ...o }) => {
			for (let e of i?.items ?? []) e.action && a.push({
				id: `${o.id}:${e.id}`,
				scope: "payment",
				label: { value: e.label },
				action: structuredClone(e.action),
				screens: o.screens,
				paymentStatuses: e.paymentStatuses ?? o.paymentStatuses
			});
			return {
				...o,
				scope: "payment",
				legacyPlacement: r,
				text: Kp({ value: t }, Object.fromEntries(Object.entries(n ?? {}).map(([t, n]) => [t, T(e.locale).direction === "rtl" && n ? `\u2068${n}\u2069` : n]))),
				format: "markdown"
			};
		}),
		...a.length ? { actions: a } : {}
	};
}, ch = (e, t) => {
	let n = Nm(e).find((e) => e.code === t);
	if (!n) return nh(null);
	let { logo: r, ...i } = n;
	return nh(i);
}, lh = (e) => {
	let t = {
		...h,
		...e
	};
	return nh({
		amount: Xm(t.initialAmount),
		currency: t.currency,
		merchantId: t.merchantId,
		userId: t.userId,
		apiUrl: t.apiUrl.replace(/\/+$/, ""),
		method: t.method,
		paymentType: t.gotoPaymentType,
		paymentContextId: t.paymentContextId,
		offers: t.offers,
		checkout: t.checkout,
		selectedOfferId: t.selectedOfferId,
		items: t.purchaseItems,
		displayItems: t.displayItems?.filter((e) => e.scope === "payment"),
		bonuses: t.bonuses,
		messages: ih(t.messages),
		actions: oh(t.actions)
	});
}, uh = (e, t, n) => nh({
	identity: n,
	elements: se(e.elementGroups),
	amount: t.amount,
	currency: t.currency,
	paymentContextId: t.paymentContextId,
	offers: e.offers,
	checkout: e.checkout,
	selectedOfferId: e.selectedOfferId,
	items: e.purchaseItems,
	displayItems: e.displayItems?.filter((e) => e.scope === "payment"),
	selectedBonusCode: e.selectedBonusCode,
	bonus: ch(e.bonuses, e.selectedBonusCode ?? null),
	resolvedOffer: t.offer,
	orderPricing: t.orderPricing,
	resolvedItems: t.items,
	resolvedDisplayItems: t.displayItems,
	messages: (e.messages ?? []).filter((e) => e.scope === "payment").map(ah),
	resolvedMessages: t.messages?.map(({ tone: e, announcement: t, ...n }) => n),
	actions: oh(e.actions),
	resolvedActions: t.actions
}), dh = (e, t, n) => {
	if (n !== void 0 && (typeof n != "string" || n.toUpperCase() !== e.currency.toUpperCase())) return !1;
	if (typeof t == "string") return R(t) && (e.amount === void 0 || ce(e.amount, t) === 0);
	if (t == null) return !0;
	if (typeof t != "object" || Array.isArray(t)) return !1;
	let r = t;
	return typeof r.currency == "string" && r.currency.toUpperCase() !== e.currency.toUpperCase() ? !1 : r.value === void 0 ? !0 : typeof r.value != "string" || !R(r.value) ? !1 : e.amount === void 0 || ce(e.amount, r.value) === 0;
}, fh = (e, t) => JSON.stringify([e, t]), ph = (e, t, n) => {
	let r = e.filter((e) => e.available).flatMap((e) => {
		let t = e.action === "restart" ? "restart" : Ne(e.action);
		if (!t) return [];
		let r = j(e.presentation);
		return [{
			id: e.identity,
			contentId: e.id,
			chrome: r.appearance !== "plain",
			type: m.BUTTON,
			label: e.label.value,
			action: t,
			themeVariant: r.themeVariant ?? "neutral",
			appearance: r.appearance === "plain" ? "ghost" : r.appearance,
			size: r.size ?? (n === "summary" ? "xl" : "md")
		}];
	});
	return r.length ? {
		layout: t ?? (r.length > 2 ? "stack" : "row"),
		items: r
	} : null;
}, mh = ({ config: e, attempt: t, screen: n, paymentStatus: r, paymentId: i, authoritativeAmount: a, authoritativeCurrency: o, previewAmount: s, additionalAwards: c, bonusPreviewOwned: l = n === "bonusSelection", translateKey: u, resolveTextKey: d, formatCurrencyValue: f, canRestartPurchase: p }) => {
	let m = y(e), h = n === "summary", g = t?.context, v = g && g.merchantId === e.merchantId && (t.contextOrigin === "captured" || t.authorityVerified) && (!h || "paymentId" in g && g.paymentId === i && (t.contextOrigin === "captured" || dh(g, a, o))) ? g : void 0, b = e.lockAmount ? e.initialAmount : s ?? e.initialAmount;
	if (!v && !h && t?.phase !== "known" && t?.phase !== "unknown" && !m.length) try {
		v = th({
			config: e,
			amount: b,
			resolveText: u,
			resolveTextKey: d,
			formatAmount: f
		});
	} catch {}
	let x = T(String(e.locale)), S = T(v?.locale ?? String(e.locale)), C = (t) => Jp(t, b ? f(b) : void 0, e.currency, x.direction), w = !y({ messages: e.messages }).length, E = !y({ actions: e.actions }).length, D = w ? (e.messages ?? []).filter((e) => e.scope === "global").map((e) => ({
		..._(e),
		presentation: ge(e)
	})).map(({ params: e, text: t, presentation: n, ...r }) => ({
		...r,
		presentation: n,
		text: Kp(d(t), C(e)),
		format: "markdown",
		localisation: x
	})) : [], O = (v?.messages ?? []).map((t) => ({
		...t,
		presentation: ge(w ? e.messages?.find((e) => e.scope === "payment" && e.id === t.id) ?? {} : {}),
		localisation: S
	})), k = [], A = 0;
	for (let t of w ? e.messages ?? [] : []) if (t.scope === "global") {
		let e = D.find((e) => e.id === t.id);
		e && k.push(e);
	} else {
		let e = O.at(A++);
		e && k.push(e);
	}
	k.push(...O.slice(A));
	let M = $m(k, n, r).filter((e) => e.text.value.trim().length > 0).map(({ screens: e, paymentStatuses: t, ...n }) => n), N = E ? (e.actions ?? []).filter((e) => e.scope === "global").map((e) => ({
		..._(e),
		presentation: ge(e)
	})).map(({ params: e, label: t, presentation: n, ...r }) => ({
		...r,
		presentation: n,
		label: qp(d(t), C(e)),
		localisation: x
	})) : [], P = (v?.actions ?? []).map((t) => ({
		...t,
		presentation: ge(E ? e.actions?.find((e) => e.scope === "payment" && e.id === t.id) ?? {} : {}),
		localisation: S
	})), F = [], I = 0;
	for (let t of E ? e.actions ?? [] : []) if (t.scope === "global") {
		let e = N.find((e) => e.id === t.id);
		e && F.push(e);
	} else {
		let e = P.at(I++);
		e && F.push(e);
	}
	F.push(...P.slice(I));
	let ee = n === "summary" && p, te = $m(F, n, r).filter((e) => e.label.value.trim().length > 0 && (e.action !== "restart" || ee)).map(({ screens: e, paymentStatuses: t, ...n }) => ({
		...n,
		identity: fh(n.scope, n.id),
		available: !0
	})), ne = v ? (v.items ?? []).filter((e) => !(l && !h && e.source?.kind === "bonus") && (e.screens === void 0 || e.screens.includes(n)) && (Qm.includes(n) || Zm(e.paymentStatuses, r, !1))).map(({ screens: e, paymentStatuses: t, ...n }) => ({
		...n,
		localisation: S
	})) : [], re = e.purchaseItems === void 0 && e.paymentContextId === void 0 && !e.messages?.some((e) => e.scope === "payment") && !e.actions?.some((e) => e.scope === "payment") && !e.displayItems?.some((e) => e.scope === "payment");
	!g && h && re && ne.push(...(c ?? []).filter((e) => e.screens === void 0 || e.screens.includes(n)).map(({ screens: e, paymentStatuses: t, ...n }) => ({
		...n,
		localisation: x
	})));
	let L = m.length ? "error.purchase_configuration_invalid" : t?.error;
	return {
		purchase: v,
		elements: e.elementGroups === void 0 && v?.elements === void 0 ? void 0 : De({
			groups: e.elementGroups ?? [],
			frozen: v ? v.elements ?? ie(v) : void 0,
			messages: M,
			actions: te,
			items: ne,
			displayItems: [...v?.displayItems ?? [], ...am(e.displayItems?.filter((e) => e.scope === "global"), {
				locale: String(e.locale),
				currency: e.currency,
				amount: b ? f(b) : void 0,
				resolveText: d,
				formatOptions: e.currencyFormatOptions
			})],
			screen: n,
			status: r
		}),
		configuredMessages: M,
		configuredActions: te,
		itemOptions: j(e.itemOptions, !0),
		actionLayout: ["row", "stack"].includes(e.actionLayout ?? "") ? e.actionLayout : void 0,
		hasCanonicalActions: e.elementGroups === void 0 && v?.elements === void 0 && (e.actions !== void 0 || !!v?.actions?.length),
		paymentStatus: r,
		orderPricing: v?.orderPricing,
		selectedOffer: v?.offer,
		items: ne,
		issues: m,
		purchaseError: L ? d(L) : void 0
	};
}, hh = (e) => {
	if (!e) return;
	let t = e.toLowerCase();
	if (t === "ongoing") return "ongoing";
	if (t === "done") return "done";
}, gh = /* @__PURE__ */ new Set(["ongoing"]), _h = /* @__PURE__ */ new Set(["done"]), vh = (e) => !!e && typeof e == "object" && !Array.isArray(e), yh = (e) => {
	if (typeof e == "string") return e;
	if (vh(e)) return Object.entries(e).reduce((e, [t, n]) => (n == null || (e[t] = typeof n == "string" ? n : JSON.stringify(n)), e), {});
}, bh = (e) => {
	if (e === "POST") return "POST";
	if (e === "GET") return "GET";
}, xh = (e) => {
	if (!vh(e)) return;
	let t;
	if (typeof e.url == "string" && e.url.length > 0 ? t = e.url : typeof e.redirectUrl == "string" && e.redirectUrl.length > 0 && (t = e.redirectUrl), !t) return;
	let n = bh(e.method ?? e.redirectMethod), r = ca(e.type ?? e.redirectType), i;
	typeof e.scriptId == "string" ? i = e.scriptId : typeof e.redirectScriptId == "string" && (i = e.redirectScriptId);
	let a;
	typeof e.userFlowDoneUrl == "string" ? a = e.userFlowDoneUrl : typeof e.redirectUserFlowDoneUrl == "string" && (a = e.redirectUserFlowDoneUrl);
	let o = e.data ?? e.redirectData;
	return ta({
		url: t,
		method: ua(n),
		data: yh(o),
		type: da(r ?? "iframe"),
		scriptId: i,
		actionId: typeof e.actionId == "string" ? e.actionId : void 0,
		timeout: typeof e.actionId == "string" && e.actionId.length > 0 && vh(e.timeout) && typeof e.timeout.durationMs == "number" && Number.isSafeInteger(e.timeout.durationMs) && e.timeout.durationMs > 0 && e.timeout.durationMs <= 2147483647 && typeof e.timeout.reportUrl == "string" && /^https?:\/\//.test(e.timeout.reportUrl) && typeof e.timeout.reportToken == "string" && e.timeout.reportToken.length > 0 && e.timeout.reportToken.length <= 2048 ? {
			durationMs: e.timeout.durationMs,
			reportUrl: e.timeout.reportUrl,
			reportToken: e.timeout.reportToken
		} : void 0,
		userFlowDoneUrl: a
	}, {
		...e,
		url: t,
		method: e.method ?? e.redirectMethod,
		type: e.type ?? e.redirectType,
		data: o,
		scriptId: e.scriptId ?? e.redirectScriptId,
		userFlowDoneUrl: e.userFlowDoneUrl ?? e.redirectUserFlowDoneUrl
	});
}, Sh = (e) => {
	if (!vh(e)) return;
	let t = typeof e.actionUrl == "string" ? e.actionUrl : void 0, n = Array.isArray(e.fields) ? e.fields : void 0, r = n ? n.filter(vh) : void 0;
	if (t && r) return {
		actionUrl: t,
		fields: r
	};
}, Ch = (e, t) => {
	try {
		let t = JSON.parse(e);
		if (typeof t == "string") {
			let e = hh(t);
			return e ? {
				status: e,
				fullSnapshot: !1
			} : null;
		}
		if (!vh(t)) return null;
		let n = xh(t.redirect ?? t) ?? void 0, r = Sh(t.form), i = hh(typeof t.status == "string" ? t.status : void 0), a = { fullSnapshot: !0 };
		return typeof t.paymentId == "string" && t.paymentId && (a.paymentId = t.paymentId), i && (a.status = i), n && (a.redirect = n), r && (a.form = r), a;
	} catch (e) {
		te.error(t, "[Cashier] Failed to parse payment status stream payload", e);
	}
	return null;
}, wh = (e) => {
	let t = hh(e);
	return t ? gh.has(t) : !1;
}, Th = (e) => {
	let t = hh(e);
	return t ? _h.has(t) : !1;
}, Eh = {
	"offer.saving.amount": "Save {amount}",
	"offer.saving.percentage": "Save {percentage}",
	"offer.saving.both": "Save {amount} ({percentage})",
	"offer.discount.amount": "{value} off",
	"offer.discount.percentage": "{value} off",
	"offer.choose": "Choose an offer",
	"offer.choose.description": "Select an offer for this payment.",
	"offer.not_selected": "No offer selected",
	"offer.selected.description": "Your selected offer is included with this payment.",
	"offer.none": "Continue without an offer",
	"offer.terms": "Offer terms",
	"checkout.unconfirmed": "Your order price needs confirmation before you can pay.",
	"checkout.expired": "Your order price has expired. Refresh it before paying.",
	"checkout.refresh": "Refresh order",
	"checkout.no_payment.title": "No payment required",
	"checkout.no_payment.description": "Your order total is zero. Return to the shop to complete your order.",
	"checkout.no_payment.action": "Return to shop",
	"award.quantity.item": "{value} {name}",
	"error.payment_context_changed": "Purchase details changed. Review them and press Pay again.",
	"error.payment_creation_uncertain": "We could not confirm whether your payment was created. Contact the merchant to recover the existing payment before trying again.",
	"error.purchase_configuration_invalid": "Checkout information is unavailable. Contact the merchant to correct the configuration."
}, Dh = {
	de: {
		"offer.saving.amount": "{amount} sparen",
		"offer.saving.percentage": "{percentage} sparen",
		"offer.saving.both": "{amount} ({percentage}) sparen",
		"offer.discount.amount": "{value} Rabatt",
		"offer.discount.percentage": "{value} Rabatt",
		"offer.choose": "Angebot auswählen",
		"offer.choose.description": "Wählen Sie ein Angebot für diese Zahlung.",
		"offer.not_selected": "Kein Angebot ausgewählt",
		"offer.selected.description": "Ihr ausgewähltes Angebot ist in dieser Zahlung enthalten.",
		"offer.none": "Ohne Angebot fortfahren",
		"offer.terms": "Angebotsbedingungen",
		"checkout.unconfirmed": "Ihr Bestellpreis muss vor der Zahlung bestätigt werden.",
		"checkout.expired": "Ihr Bestellpreis ist abgelaufen. Aktualisieren Sie ihn vor der Zahlung.",
		"checkout.refresh": "Bestellung aktualisieren",
		"checkout.no_payment.title": "Keine Zahlung erforderlich",
		"checkout.no_payment.description": "Ihr Bestellbetrag ist null. Kehren Sie zum Shop zurück, um Ihre Bestellung abzuschliessen.",
		"checkout.no_payment.action": "Zurück zum Shop",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Die Kaufdetails haben sich geändert. Prüfen Sie sie und drücken Sie erneut auf Bezahlen.",
		"error.payment_creation_uncertain": "Wir konnten nicht bestätigen, ob Ihre Zahlung erstellt wurde. Kontaktieren Sie den Händler, um die bestehende Zahlung zu prüfen, bevor Sie es erneut versuchen.",
		"error.purchase_configuration_invalid": "Die Bestellinformationen sind nicht verfügbar. Kontaktieren Sie den Händler, um die Konfiguration zu korrigieren."
	},
	sv: {
		"offer.saving.amount": "Spara {amount}",
		"offer.saving.percentage": "Spara {percentage}",
		"offer.saving.both": "Spara {amount} ({percentage})",
		"offer.discount.amount": "{value} rabatt",
		"offer.discount.percentage": "{value} rabatt",
		"offer.choose": "Välj ett erbjudande",
		"offer.choose.description": "Välj ett erbjudande för den här betalningen.",
		"offer.not_selected": "Inget erbjudande valt",
		"offer.selected.description": "Ditt valda erbjudande ingår i den här betalningen.",
		"offer.none": "Fortsätt utan erbjudande",
		"offer.terms": "Erbjudandevillkor",
		"checkout.unconfirmed": "Orderpriset måste bekräftas innan du kan betala.",
		"checkout.expired": "Orderpriset har löpt ut. Uppdatera det innan du betalar.",
		"checkout.refresh": "Uppdatera order",
		"checkout.no_payment.title": "Ingen betalning krävs",
		"checkout.no_payment.description": "Ordersumman är noll. Gå tillbaka till butiken för att slutföra beställningen.",
		"checkout.no_payment.action": "Tillbaka till butiken",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Köpuppgifterna har ändrats. Kontrollera dem och tryck på Betala igen.",
		"error.payment_creation_uncertain": "Vi kunde inte bekräfta om din betalning skapades. Kontakta handlaren för att kontrollera den befintliga betalningen innan du försöker igen.",
		"error.purchase_configuration_invalid": "Orderinformationen är inte tillgänglig. Kontakta handlaren för att korrigera konfigurationen."
	},
	da: {
		"offer.saving.amount": "Spar {amount}",
		"offer.saving.percentage": "Spar {percentage}",
		"offer.saving.both": "Spar {amount} ({percentage})",
		"offer.discount.amount": "{value} rabat",
		"offer.discount.percentage": "{value} rabat",
		"offer.choose": "Vælg et tilbud",
		"offer.choose.description": "Vælg et tilbud til denne betaling.",
		"offer.not_selected": "Intet tilbud valgt",
		"offer.selected.description": "Dit valgte tilbud er inkluderet i denne betaling.",
		"offer.none": "Fortsæt uden tilbud",
		"offer.terms": "Tilbudsvilkår",
		"checkout.unconfirmed": "Din ordrepris skal bekræftes, før du kan betale.",
		"checkout.expired": "Din ordrepris er udløbet. Opdater den, før du betaler.",
		"checkout.refresh": "Opdater ordre",
		"checkout.no_payment.title": "Ingen betaling påkrævet",
		"checkout.no_payment.description": "Dit ordrebeløb er nul. Gå tilbage til butikken for at gennemføre din ordre.",
		"checkout.no_payment.action": "Tilbage til butikken",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Købsoplysningerne er ændret. Gennemgå dem, og tryk på Betal igen.",
		"error.payment_creation_uncertain": "Vi kunne ikke bekræfte, om din betaling blev oprettet. Kontakt forhandleren for at kontrollere den eksisterende betaling, før du prøver igen.",
		"error.purchase_configuration_invalid": "Ordreoplysningerne er ikke tilgængelige. Kontakt forhandleren for at rette konfigurationen."
	},
	nb: {
		"offer.saving.amount": "Spar {amount}",
		"offer.saving.percentage": "Spar {percentage}",
		"offer.saving.both": "Spar {amount} ({percentage})",
		"offer.discount.amount": "{value} rabatt",
		"offer.discount.percentage": "{value} rabatt",
		"offer.choose": "Velg et tilbud",
		"offer.choose.description": "Velg et tilbud for denne betalingen.",
		"offer.not_selected": "Ingen tilbud valgt",
		"offer.selected.description": "Det valgte tilbudet er inkludert i denne betalingen.",
		"offer.none": "Fortsett uten tilbud",
		"offer.terms": "Tilbudsvilkår",
		"checkout.unconfirmed": "Ordreprisen må bekreftes før du kan betale.",
		"checkout.expired": "Ordreprisen er utløpt. Oppdater den før du betaler.",
		"checkout.refresh": "Oppdater ordre",
		"checkout.no_payment.title": "Ingen betaling kreves",
		"checkout.no_payment.description": "Ordrebeløpet er null. Gå tilbake til butikken for å fullføre bestillingen.",
		"checkout.no_payment.action": "Tilbake til butikken",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Kjøpsopplysningene er endret. Kontroller dem og trykk på Betal igjen.",
		"error.payment_creation_uncertain": "Vi kunne ikke bekrefte om betalingen ble opprettet. Kontakt forhandleren for å kontrollere den eksisterende betalingen før du prøver igjen.",
		"error.purchase_configuration_invalid": "Ordreopplysningene er ikke tilgjengelige. Kontakt forhandleren for å rette konfigurasjonen."
	},
	fi: {
		"offer.saving.amount": "Säästä {amount}",
		"offer.saving.percentage": "Säästä {percentage}",
		"offer.saving.both": "Säästä {amount} ({percentage})",
		"offer.discount.amount": "{value} alennusta",
		"offer.discount.percentage": "{value} alennusta",
		"offer.choose": "Valitse tarjous",
		"offer.choose.description": "Valitse tarjous tätä maksua varten.",
		"offer.not_selected": "Tarjousta ei ole valittu",
		"offer.selected.description": "Valitsemasi tarjous sisältyy tähän maksuun.",
		"offer.none": "Jatka ilman tarjousta",
		"offer.terms": "Tarjouksen ehdot",
		"checkout.unconfirmed": "Tilauksesi hinta on vahvistettava ennen maksamista.",
		"checkout.expired": "Tilauksesi hinta on vanhentunut. Päivitä se ennen maksamista.",
		"checkout.refresh": "Päivitä tilaus",
		"checkout.no_payment.title": "Maksua ei tarvita",
		"checkout.no_payment.description": "Tilauksesi loppusumma on nolla. Palaa kauppaan viimeistelemään tilauksesi.",
		"checkout.no_payment.action": "Palaa kauppaan",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Ostotiedot ovat muuttuneet. Tarkista ne ja paina Maksa uudelleen.",
		"error.payment_creation_uncertain": "Emme voineet vahvistaa, luotiinko maksusi. Ota yhteyttä kauppiaaseen olemassa olevan maksun tarkistamiseksi ennen uutta yritystä.",
		"error.purchase_configuration_invalid": "Tilaustiedot eivät ole saatavilla. Ota yhteyttä kauppiaaseen asetusten korjaamiseksi."
	},
	es: {
		"offer.saving.amount": "Ahorra {amount}",
		"offer.saving.percentage": "Ahorra {percentage}",
		"offer.saving.both": "Ahorra {amount} ({percentage})",
		"offer.discount.amount": "{value} de descuento",
		"offer.discount.percentage": "{value} de descuento",
		"offer.choose": "Elige una oferta",
		"offer.choose.description": "Selecciona una oferta para este pago.",
		"offer.not_selected": "Ninguna oferta seleccionada",
		"offer.selected.description": "La oferta seleccionada está incluida en este pago.",
		"offer.none": "Continuar sin oferta",
		"offer.terms": "Condiciones de la oferta",
		"checkout.unconfirmed": "El precio de tu pedido debe confirmarse antes de pagar.",
		"checkout.expired": "El precio de tu pedido ha caducado. Actualízalo antes de pagar.",
		"checkout.refresh": "Actualizar pedido",
		"checkout.no_payment.title": "No se requiere pago",
		"checkout.no_payment.description": "El total de tu pedido es cero. Vuelve a la tienda para completar tu pedido.",
		"checkout.no_payment.action": "Volver a la tienda",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Los detalles de la compra han cambiado. Revísalos y vuelve a pulsar Pagar.",
		"error.payment_creation_uncertain": "No hemos podido confirmar si se ha creado tu pago. Contacta con el comercio para comprobar el pago existente antes de intentarlo de nuevo.",
		"error.purchase_configuration_invalid": "La información del pedido no está disponible. Contacta con el comercio para corregir la configuración."
	},
	fr: {
		"offer.saving.amount": "Économisez {amount}",
		"offer.saving.percentage": "Économisez {percentage}",
		"offer.saving.both": "Économisez {amount} ({percentage})",
		"offer.discount.amount": "{value} de réduction",
		"offer.discount.percentage": "{value} de réduction",
		"offer.choose": "Choisir une offre",
		"offer.choose.description": "Sélectionnez une offre pour ce paiement.",
		"offer.not_selected": "Aucune offre sélectionnée",
		"offer.selected.description": "Votre offre sélectionnée est incluse dans ce paiement.",
		"offer.none": "Continuer sans offre",
		"offer.terms": "Conditions de l’offre",
		"checkout.unconfirmed": "Le prix de votre commande doit être confirmé avant de payer.",
		"checkout.expired": "Le prix de votre commande a expiré. Actualisez-le avant de payer.",
		"checkout.refresh": "Actualiser la commande",
		"checkout.no_payment.title": "Aucun paiement requis",
		"checkout.no_payment.description": "Le montant de votre commande est nul. Retournez à la boutique pour terminer votre commande.",
		"checkout.no_payment.action": "Retourner à la boutique",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Les détails de l’achat ont changé. Vérifiez-les et appuyez à nouveau sur Payer.",
		"error.payment_creation_uncertain": "Nous n’avons pas pu confirmer si votre paiement a été créé. Contactez le commerçant pour vérifier le paiement existant avant de réessayer.",
		"error.purchase_configuration_invalid": "Les informations de commande sont indisponibles. Contactez le commerçant pour corriger la configuration."
	},
	it: {
		"offer.saving.amount": "Risparmia {amount}",
		"offer.saving.percentage": "Risparmia {percentage}",
		"offer.saving.both": "Risparmia {amount} ({percentage})",
		"offer.discount.amount": "{value} di sconto",
		"offer.discount.percentage": "{value} di sconto",
		"offer.choose": "Scegli un’offerta",
		"offer.choose.description": "Seleziona un’offerta per questo pagamento.",
		"offer.not_selected": "Nessuna offerta selezionata",
		"offer.selected.description": "L’offerta selezionata è inclusa in questo pagamento.",
		"offer.none": "Continua senza offerta",
		"offer.terms": "Condizioni dell’offerta",
		"checkout.unconfirmed": "Il prezzo dell’ordine deve essere confermato prima del pagamento.",
		"checkout.expired": "Il prezzo dell’ordine è scaduto. Aggiornalo prima del pagamento.",
		"checkout.refresh": "Aggiorna ordine",
		"checkout.no_payment.title": "Nessun pagamento richiesto",
		"checkout.no_payment.description": "Il totale dell’ordine è zero. Torna al negozio per completare l’ordine.",
		"checkout.no_payment.action": "Torna al negozio",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "I dettagli dell’acquisto sono cambiati. Controllali e premi di nuovo Paga.",
		"error.payment_creation_uncertain": "Non è stato possibile confermare se il pagamento è stato creato. Contatta il commerciante per verificare il pagamento esistente prima di riprovare.",
		"error.purchase_configuration_invalid": "Le informazioni sull’ordine non sono disponibili. Contatta il commerciante per correggere la configurazione."
	},
	pt: {
		"offer.saving.amount": "Poupe {amount}",
		"offer.saving.percentage": "Poupe {percentage}",
		"offer.saving.both": "Poupe {amount} ({percentage})",
		"offer.discount.amount": "{value} de desconto",
		"offer.discount.percentage": "{value} de desconto",
		"offer.choose": "Escolha uma oferta",
		"offer.choose.description": "Selecione uma oferta para este pagamento.",
		"offer.not_selected": "Nenhuma oferta selecionada",
		"offer.selected.description": "A oferta selecionada está incluída neste pagamento.",
		"offer.none": "Continuar sem oferta",
		"offer.terms": "Condições da oferta",
		"checkout.unconfirmed": "O preço da encomenda tem de ser confirmado antes de pagar.",
		"checkout.expired": "O preço da encomenda expirou. Atualize-o antes de pagar.",
		"checkout.refresh": "Atualizar encomenda",
		"checkout.no_payment.title": "Não é necessário pagar",
		"checkout.no_payment.description": "O total da encomenda é zero. Volte à loja para concluir a encomenda.",
		"checkout.no_payment.action": "Voltar à loja",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Os dados da compra foram alterados. Reveja-os e prima Pagar novamente.",
		"error.payment_creation_uncertain": "Não foi possível confirmar se o pagamento foi criado. Contacte o comerciante para verificar o pagamento existente antes de tentar novamente.",
		"error.purchase_configuration_invalid": "As informações da encomenda não estão disponíveis. Contacte o comerciante para corrigir a configuração."
	},
	pl: {
		"offer.saving.amount": "Oszczędź {amount}",
		"offer.saving.percentage": "Oszczędź {percentage}",
		"offer.saving.both": "Oszczędź {amount} ({percentage})",
		"offer.discount.amount": "{value} rabatu",
		"offer.discount.percentage": "{value} rabatu",
		"offer.choose": "Wybierz ofertę",
		"offer.choose.description": "Wybierz ofertę dla tej płatności.",
		"offer.not_selected": "Nie wybrano oferty",
		"offer.selected.description": "Wybrana oferta jest uwzględniona w tej płatności.",
		"offer.none": "Kontynuuj bez oferty",
		"offer.terms": "Warunki oferty",
		"checkout.unconfirmed": "Cena zamówienia musi zostać potwierdzona przed zapłatą.",
		"checkout.expired": "Cena zamówienia wygasła. Odśwież ją przed zapłatą.",
		"checkout.refresh": "Odśwież zamówienie",
		"checkout.no_payment.title": "Płatność nie jest wymagana",
		"checkout.no_payment.description": "Suma zamówienia wynosi zero. Wróć do sklepu, aby dokończyć zamówienie.",
		"checkout.no_payment.action": "Wróć do sklepu",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "Dane zakupu uległy zmianie. Sprawdź je i ponownie naciśnij Zapłać.",
		"error.payment_creation_uncertain": "Nie udało się potwierdzić, czy płatność została utworzona. Skontaktuj się ze sprzedawcą, aby sprawdzić istniejącą płatność przed ponowną próbą.",
		"error.purchase_configuration_invalid": "Informacje o zamówieniu są niedostępne. Skontaktuj się ze sprzedawcą, aby poprawić konfigurację."
	},
	nl: {
		"offer.saving.amount": "Bespaar {amount}",
		"offer.saving.percentage": "Bespaar {percentage}",
		"offer.saving.both": "Bespaar {amount} ({percentage})",
		"offer.discount.amount": "{value} korting",
		"offer.discount.percentage": "{value} korting",
		"offer.choose": "Kies een aanbieding",
		"offer.choose.description": "Selecteer een aanbieding voor deze betaling.",
		"offer.not_selected": "Geen aanbieding geselecteerd",
		"offer.selected.description": "Je geselecteerde aanbieding is inbegrepen bij deze betaling.",
		"offer.none": "Doorgaan zonder aanbieding",
		"offer.terms": "Voorwaarden van de aanbieding",
		"checkout.unconfirmed": "Je bestelprijs moet worden bevestigd voordat je kunt betalen.",
		"checkout.expired": "Je bestelprijs is verlopen. Vernieuw deze voordat je betaalt.",
		"checkout.refresh": "Bestelling vernieuwen",
		"checkout.no_payment.title": "Geen betaling nodig",
		"checkout.no_payment.description": "Je besteltotaal is nul. Ga terug naar de winkel om je bestelling af te ronden.",
		"checkout.no_payment.action": "Terug naar de winkel",
		"award.quantity.item": "{value} {name}",
		"error.payment_context_changed": "De aankoopgegevens zijn gewijzigd. Controleer ze en druk opnieuw op Betalen.",
		"error.payment_creation_uncertain": "We konden niet bevestigen of je betaling is aangemaakt. Neem contact op met de verkoper om de bestaande betaling te controleren voordat je het opnieuw probeert.",
		"error.purchase_configuration_invalid": "De bestelinformatie is niet beschikbaar. Neem contact op met de verkoper om de configuratie te corrigeren."
	},
	ja: {
		"offer.saving.amount": "{amount}お得",
		"offer.saving.percentage": "{percentage}お得",
		"offer.saving.both": "{amount}（{percentage}）お得",
		"offer.discount.amount": "{value}割引",
		"offer.discount.percentage": "{value}割引",
		"offer.choose": "特典を選択",
		"offer.choose.description": "この支払いに適用する特典を選択してください。",
		"offer.not_selected": "特典は選択されていません",
		"offer.selected.description": "選択した特典はこの支払いに含まれています。",
		"offer.none": "特典なしで続行",
		"offer.terms": "特典の利用条件",
		"checkout.unconfirmed": "お支払いの前に注文価格の確認が必要です。",
		"checkout.expired": "注文価格の有効期限が切れました。お支払いの前に更新してください。",
		"checkout.refresh": "注文を更新",
		"checkout.no_payment.title": "支払いは不要です",
		"checkout.no_payment.description": "注文の合計金額はゼロです。ショップに戻って注文を完了してください。",
		"checkout.no_payment.action": "ショップに戻る",
		"award.quantity.item": "{name} {value}",
		"error.payment_context_changed": "購入内容が変更されました。内容を確認して、もう一度「支払う」を押してください。",
		"error.payment_creation_uncertain": "支払いが作成されたか確認できませんでした。再試行する前に、加盟店に連絡して既存の支払いを確認してください。",
		"error.purchase_configuration_invalid": "注文情報を利用できません。加盟店に連絡して設定の修正を依頼してください。"
	}
}, Oh = (e, t = "en", n = !1, r = !0) => {
	let i = t.split(/[-_]/)[0].toLowerCase(), a = Dh[i === "no" ? "nb" : i] ?? Eh, o = (t) => {
		if (typeof t != "string" || t.length === 0 || !r) return !1;
		let n = e[t];
		return typeof n == "string" && n.length > 0;
	}, s = (t) => {
		if (typeof t != "string" || t.length === 0) return "";
		if (n) return t;
		if (!r) return "";
		let i = e[t];
		if (typeof i == "string" && i.length > 0) return i;
		let o = a[t];
		return typeof o == "string" && o.length > 0 ? o : t;
	}, c = (t) => {
		let i = Qn(t);
		if (i.length === 0) return "";
		if (n) return i.find((e) => e.length > 0) ?? "";
		if (!r) return "";
		let s = i.find(o);
		return s ? e[s] : $n(a, i);
	}, l = (t) => {
		let i = Qn(t).filter((e) => e.length > 0);
		if (i.length === 0 || !r) return { value: "" };
		if (n) {
			let e = i[0] ?? "";
			return e ? {
				key: e,
				value: e
			} : { value: "" };
		}
		for (let t of [e, a]) for (let e of i) {
			let n = t[e];
			if (typeof n == "string" && n.length > 0) return {
				key: e,
				value: n
			};
		}
		let o = i.at(-1) ?? "";
		return o ? {
			key: o,
			value: o
		} : { value: "" };
	};
	return {
		translations: e,
		translateKey: s,
		translateKeys: c,
		resolveTextKey: (e) => l(e),
		resolveTextKeys: l,
		hasTranslation: o,
		isTranslationVisible: r
	};
}, kh = "select", Ah = (e) => typeof e == "string" ? e : typeof e == "boolean" ? String(e) : "", jh = (e, t) => !e || e.length === 0 || e.includes(t), Mh = (e, t) => {
	let n = e.dependsOn;
	if (!n) return { visible: !0 };
	let r = Ah(t[n]);
	if (e.type === kh) {
		let n = (e.options ?? []).filter((e) => jh(e.when, r));
		if (n.length === 0) return {
			visible: !1,
			options: n,
			forcedValue: ""
		};
		if (n.length === 1) return {
			visible: !1,
			options: n,
			forcedValue: n[0].value
		};
		let i = Ah(t[e.id ?? ""]);
		return {
			visible: !0,
			options: n,
			forcedValue: n.some((e) => e.value === i) ? void 0 : ""
		};
	}
	let i = (e.dependsOnValues ?? []).includes(r);
	return {
		visible: i,
		forcedValue: i ? void 0 : ""
	};
}, Nh = (e, t) => (e ?? []).reduce((e, n) => {
	let r = n.id;
	if (!r || !n.dependsOn) return e;
	let { forcedValue: i } = Mh(n, t);
	return i === void 0 || Ah(t[r]) === i || e.push({
		fieldId: r,
		value: i
	}), e;
}, []), Ph = (e, t) => (e ?? []).filter((e) => !e.dependsOn || Mh(e, t).visible), Fh = class extends Error {
	rejected;
	constructor(e, t) {
		super(e), this.rejected = t;
	}
}, Ih = (e) => e && typeof e == "object" && "error" in e && typeof e.error == "string" ? { error: e.error } : e instanceof Error && e.message ? { error: e.message } : { error: "error.payment_processing_failed" }, Lh = async ({ body: e, path: t, attempt: n, creation: r, client: i }) => {
	try {
		if (!r.accepts(n)) throw Error("error.payment_processing_failed");
		let a = await Gn({
			body: e,
			path: t,
			client: i,
			signal: n.signal,
			throwOnError: !1
		}), { data: o } = a, s = a.error, c = a.response?.status !== void 0 && [
			400,
			403,
			409,
			413
		].includes(a.response.status);
		if (s || c) throw new Fh(Ih(s).error, c);
		if (typeof o?.paymentId != "string" || !o.paymentId.trim() || o.paymentId !== o.paymentId.trim()) throw Error("error.payment_id_missing");
		return o;
	} catch (e) {
		throw new Fh(Ih(e).error, e instanceof Fh && e.rejected);
	}
}, Rh = (e) => ({
	method: e.method,
	selectedPaymentType: e.gotoPaymentType,
	currency: e.currency,
	initialAmount: e.initialAmount,
	selectedBonusCode: null,
	paymentFormDraft: null,
	comboViewFormDraft: null,
	resetFlowOnBack: !1,
	hasAppliedGotoPaymentType: !1,
	entryDecision: null
}), zh = Rh(h), Bh = () => {
	throw Error("setCashierState must be used within a Cashier provider");
}, Vh = {
	...h,
	...zh,
	setCashierState: Bh
}, Hh = Be(Vh), Uh = Be(null), Wh = () => U(Uh), Gh = Be({
	translations: {},
	translateKey: (e) => typeof e == "string" ? e : "",
	translateKeys: (e) => Qn(e).filter((e) => e.length > 0).at(-1) ?? "",
	resolveTextKey: (e) => typeof e == "string" && e.length > 0 ? {
		key: e,
		value: e
	} : { value: "" },
	resolveTextKeys: (e) => {
		let t = Qn(e).filter((e) => e.length > 0).at(-1);
		return t ? {
			key: t,
			value: t
		} : { value: "" };
	},
	hasTranslation: () => !1,
	isTranslationVisible: !0
});
function Kh({ children: e, translations: t, locale: n = "en", debug: r, isTranslationVisible: i }) {
	let a = W(() => Oh(t, n, r, i), [
		t,
		n,
		r,
		i
	]);
	return /* @__PURE__ */ q(Gh.Provider, {
		value: a,
		children: e
	});
}
var qh = {
	"cta.choose_bonus": "offer.choose",
	"cta.interactive_prompt.choose_bonus.title": "offer.choose",
	"cta.interactive_prompt.choose_bonus.desc": "offer.choose.description",
	"bonus.interactive_prompt.no_bonus": "offer.none",
	"bonus.terms.title": "offer.terms",
	"bonus.no_bonus_selected": "offer.not_selected",
	"bonus.selected.desc": "offer.selected.description"
}, Jh = () => {
	let e = U(Gh), { offers: t } = U(Hh);
	return W(() => {
		if (t === void 0) return e;
		let n = (e) => Qn(e).flatMap((e) => qh[e] ? [qh[e], e] : [e]);
		return {
			...e,
			translateKey: (t) => e.translateKeys(n(t)),
			resolveTextKey: (t) => e.resolveTextKeys(n(t)),
			translateKeys: (t) => e.translateKeys(n(t)),
			resolveTextKeys: (t) => e.resolveTextKeys(n(t))
		};
	}, [t, e]);
}, Yh = () => {
	let { hasTranslation: e, isTranslationVisible: t } = U(Gh);
	return {
		hasTranslation: e,
		isTranslationVisible: t
	};
}, Xh = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Zh = (e, t) => ({
	classGroupId: e,
	validator: t
}), Qh = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), $h = "-", eg = [], tg = "arbitrary..", ng = (e) => {
	let t = ag(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ig(e);
			let n = e.split($h);
			return rg(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Xh(i, t) : t : i || eg;
			}
			return n[e] || eg;
		}
	};
}, rg = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = rg(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join($h) : e.slice(t).join($h), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ig = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? tg + r : void 0;
})(), ag = (e) => {
	let { theme: t, classGroups: n } = e;
	return og(n, t);
}, og = (e, t) => {
	let n = Qh();
	for (let r in e) {
		let i = e[r];
		sg(i, n, r, t);
	}
	return n;
}, sg = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		cg(i, t, n, r);
	}
}, cg = (e, t, n, r) => {
	typeof e == "string" ? lg(e, t, n) : typeof e == "function" ? ug(e, t, n, r) : dg(e, t, n, r);
}, lg = (e, t, n) => {
	let r = e === "" ? t : fg(t, e);
	r.classGroupId = n;
}, ug = (e, t, n, r) => {
	pg(e) ? sg(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Zh(n, e)));
}, dg = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		sg(o, fg(t, a), n, r);
	}
}, fg = (e, t) => {
	let n = e, r = t.split($h), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Qh(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, pg = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, mg = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, hg = "!", gg = ":", _g = [], vg = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), yg = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === gg) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(hg) ? (c = s.slice(0, -1), l = !0) : s.startsWith(hg) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return vg(t, l, c, u);
	};
	if (t) {
		let e = t + gg, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : vg(_g, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, bg = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, xg = (e) => ({
	cache: mg(e.cacheSize),
	parseClassName: yg(e),
	sortModifiers: bg(e),
	postfixLookupClassGroupIds: Sg(e),
	...ng(e)
}), Sg = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Cg = /\s+/, wg = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Cg), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + hg : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, Y = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Tg(n)) && (i && (i += " "), i += r);
	return i;
}, Tg = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Tg(e[r])) && (n && (n += " "), n += t);
	return n;
}, Eg = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = xg(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = wg(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Y(...e));
}, Dg = [], Og = (e) => {
	let t = (t) => t[e] || Dg;
	return t.isThemeGetter = !0, t;
}, kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ag = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jg = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Mg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ng = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ig = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Lg = (e) => jg.test(e), Rg = (e) => !!e && !Number.isNaN(Number(e)), zg = (e) => !!e && Number.isInteger(Number(e)), Bg = (e) => e.endsWith("%") && Rg(e.slice(0, -1)), Vg = (e) => Mg.test(e), Hg = () => !0, Ug = (e) => Ng.test(e) && !Pg.test(e), Wg = () => !1, Gg = (e) => Fg.test(e), Kg = (e) => Ig.test(e), qg = (e) => !X(e) && !Z(e), Jg = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Yg = (e) => u_(e, m_, Wg), X = (e) => kg.test(e), Xg = (e) => u_(e, h_, Ug), Zg = (e) => u_(e, g_, Rg), Qg = (e) => u_(e, v_, Hg), $g = (e) => u_(e, __, Wg), e_ = (e) => u_(e, f_, Wg), t_ = (e) => u_(e, p_, Kg), n_ = (e) => u_(e, y_, Gg), Z = (e) => Ag.test(e), r_ = (e) => d_(e, h_), i_ = (e) => d_(e, __), a_ = (e) => d_(e, f_), o_ = (e) => d_(e, m_), s_ = (e) => d_(e, p_), c_ = (e) => d_(e, y_, !0), l_ = (e) => d_(e, v_, !0), u_ = (e, t, n) => {
	let r = kg.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, d_ = (e, t, n = !1) => {
	let r = Ag.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, f_ = (e) => e === "position" || e === "percentage", p_ = (e) => e === "image" || e === "url", m_ = (e) => e === "length" || e === "size" || e === "bg-size", h_ = (e) => e === "length", g_ = (e) => e === "number", __ = (e) => e === "family-name", v_ = (e) => e === "number" || e === "weight", y_ = (e) => e === "shadow", Q = /*#__PURE__*/ Eg(() => {
	let e = Og("color"), t = Og("font"), n = Og("text"), r = Og("font-weight"), i = Og("tracking"), a = Og("leading"), o = Og("breakpoint"), s = Og("container"), c = Og("spacing"), l = Og("radius"), u = Og("shadow"), d = Og("inset-shadow"), f = Og("text-shadow"), p = Og("drop-shadow"), m = Og("blur"), h = Og("perspective"), g = Og("aspect"), _ = Og("ease"), v = Og("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		Z,
		X
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		Z,
		X,
		c
	], T = () => [
		Lg,
		"full",
		"auto",
		...w()
	], E = () => [
		zg,
		"none",
		"subgrid",
		Z,
		X
	], D = () => [
		"auto",
		{ span: [
			"full",
			zg,
			Z,
			X
		] },
		zg,
		Z,
		X
	], O = () => [
		zg,
		"auto",
		Z,
		X
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		Lg,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		Lg,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		Lg,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		Z,
		X
	], ee = () => [
		...b(),
		a_,
		e_,
		{ position: [Z, X] }
	], te = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ne = () => [
		"auto",
		"cover",
		"contain",
		o_,
		Yg,
		{ size: [Z, X] }
	], re = () => [
		Bg,
		r_,
		Xg
	], L = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], R = () => [
		"",
		Rg,
		r_,
		Xg
	], z = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ie = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], ae = () => [
		Rg,
		Bg,
		a_,
		e_
	], oe = () => [
		"",
		"none",
		m,
		Z,
		X
	], se = () => [
		"none",
		Rg,
		Z,
		X
	], ce = () => [
		"none",
		Rg,
		Z,
		X
	], le = () => [
		Rg,
		Z,
		X
	], B = () => [
		Lg,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Vg],
			breakpoint: [Vg],
			color: [Hg],
			container: [Vg],
			"drop-shadow": [Vg],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [qg],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Vg],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Vg],
			shadow: [Vg],
			spacing: ["px", Rg],
			text: [Vg],
			"text-shadow": [Vg],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Lg,
				X,
				Z,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Z,
				X
			] }],
			"container-named": [Jg],
			columns: [{ columns: [
				Rg,
				X,
				Z,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				zg,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				Lg,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				Rg,
				Lg,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Rg,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Rg,
				Z,
				X
			] }],
			order: [{ order: [
				zg,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				r_,
				Xg
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				l_,
				Qg
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Bg,
				X
			] }],
			"font-family": [{ font: [
				i_,
				$g,
				t
			] }],
			"font-features": [{ "font-features": [X] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				X
			] }],
			"line-clamp": [{ "line-clamp": [
				Rg,
				"none",
				Z,
				Zg
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				X
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				X
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...z(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Rg,
				"from-font",
				"auto",
				Z,
				Xg
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				Rg,
				"auto",
				Z,
				X
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				zg,
				Z,
				X
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Z,
				X
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Z,
				X
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ee() }],
			"bg-repeat": [{ bg: te() }],
			"bg-size": [{ bg: ne() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						zg,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						zg,
						Z,
						X
					]
				},
				s_,
				t_
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: re() }],
			"gradient-via-pos": [{ via: re() }],
			"gradient-to-pos": [{ to: re() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: L() }],
			"rounded-s": [{ "rounded-s": L() }],
			"rounded-e": [{ "rounded-e": L() }],
			"rounded-t": [{ "rounded-t": L() }],
			"rounded-r": [{ "rounded-r": L() }],
			"rounded-b": [{ "rounded-b": L() }],
			"rounded-l": [{ "rounded-l": L() }],
			"rounded-ss": [{ "rounded-ss": L() }],
			"rounded-se": [{ "rounded-se": L() }],
			"rounded-ee": [{ "rounded-ee": L() }],
			"rounded-es": [{ "rounded-es": L() }],
			"rounded-tl": [{ "rounded-tl": L() }],
			"rounded-tr": [{ "rounded-tr": L() }],
			"rounded-br": [{ "rounded-br": L() }],
			"rounded-bl": [{ "rounded-bl": L() }],
			"border-w": [{ border: R() }],
			"border-w-x": [{ "border-x": R() }],
			"border-w-y": [{ "border-y": R() }],
			"border-w-s": [{ "border-s": R() }],
			"border-w-e": [{ "border-e": R() }],
			"border-w-bs": [{ "border-bs": R() }],
			"border-w-be": [{ "border-be": R() }],
			"border-w-t": [{ "border-t": R() }],
			"border-w-r": [{ "border-r": R() }],
			"border-w-b": [{ "border-b": R() }],
			"border-w-l": [{ "border-l": R() }],
			"divide-x": [{ "divide-x": R() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": R() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...z(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...z(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...z(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Rg,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Rg,
				r_,
				Xg
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				c_,
				n_
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				c_,
				n_
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: R() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [Rg, Xg] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": R() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				c_,
				n_
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				Rg,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...ie(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ie() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [Rg] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ae() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ae() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ae() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ae() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ae() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ae() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ae() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ae() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ae() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ae() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ae() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ae() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ae() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ae() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ae() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ae() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Rg] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ae() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ae() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ee() }],
			"mask-repeat": [{ mask: te() }],
			"mask-size": [{ mask: ne() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				X
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				X
			] }],
			blur: [{ blur: oe() }],
			brightness: [{ brightness: [
				Rg,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Rg,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				c_,
				n_
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				Rg,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Rg,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Rg,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Rg,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Rg,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": oe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Rg,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Rg,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Rg,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Rg,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Rg,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Rg,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Rg,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Rg,
				Z,
				X
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Z,
				X
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Rg,
				"initial",
				Z,
				X
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Z,
				X
			] }],
			delay: [{ delay: [
				Rg,
				Z,
				X
			] }],
			animate: [{ animate: [
				"none",
				v,
				Z,
				X
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				X
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: se() }],
			"rotate-x": [{ "rotate-x": se() }],
			"rotate-y": [{ "rotate-y": se() }],
			"rotate-z": [{ "rotate-z": se() }],
			scale: [{ scale: ce() }],
			"scale-x": [{ "scale-x": ce() }],
			"scale-y": [{ "scale-y": ce() }],
			"scale-z": [{ "scale-z": ce() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: le() }],
			"skew-x": [{ "skew-x": le() }],
			"skew-y": [{ "skew-y": le() }],
			transform: [{ transform: [
				Z,
				X,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: B() }],
			"translate-x": [{ "translate-x": B() }],
			"translate-y": [{ "translate-y": B() }],
			"translate-z": [{ "translate-z": B() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				zg,
				Z,
				X
			] }],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Z,
				X
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
			"scrollbar-track-color": [{ "scrollbar-track": I() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Z,
				X
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				Rg,
				r_,
				Xg,
				Zg
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}), b_ = 8, x_ = 12, S_ = 0, C_ = 0, w_ = 60, T_ = "(any-hover: hover)", E_ = "pc:hover-tooltip-dismiss", D_ = () => {
	typeof document < "u" && document.dispatchEvent(new Event(E_));
}, O_ = {
	top: [
		"top",
		"bottom",
		"right",
		"left"
	],
	right: [
		"right",
		"left",
		"top",
		"bottom"
	],
	bottom: [
		"bottom",
		"top",
		"right",
		"left"
	],
	left: [
		"left",
		"right",
		"top",
		"bottom"
	]
}, k_ = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, A_ = () => typeof window > "u" || typeof window.matchMedia != "function" || window.matchMedia(T_).matches, j_ = (e, t, n) => e < t ? t : e > n ? n : e, M_ = (e, t) => {
	if (!e) return t;
	let n = new Set(e.split(/\s+/).filter(Boolean));
	return n.add(t), Array.from(n).join(" ");
}, N_ = (e, t, n, r) => {
	let i = e.left + e.width / 2, a = e.top + e.height / 2;
	return n === "top" ? {
		top: e.top - t.height - r,
		left: i - t.width / 2,
		width: t.width,
		height: t.height
	} : n === "bottom" ? {
		top: e.bottom + r,
		left: i - t.width / 2,
		width: t.width,
		height: t.height
	} : n === "left" ? {
		top: a - t.height / 2,
		left: e.left - t.width - r,
		width: t.width,
		height: t.height
	} : {
		top: a - t.height / 2,
		left: e.right + r,
		width: t.width,
		height: t.height
	};
}, P_ = (e, t, n) => e.top >= b_ && e.left >= b_ && e.top + e.height <= n - b_ && e.left + e.width <= t - b_, F_ = (e, t, n) => {
	let r = Math.max(b_, n - b_ - e.height), i = Math.max(b_, t - b_ - e.width);
	return {
		...e,
		top: j_(e.top, b_, r),
		left: j_(e.left, b_, i)
	};
};
function I_({ children: e, label: t, placement: n = "bottom", positionMode: r = "anchor", cursorPoint: i = null, offset: a = x_, disabled: o = !1, lockVisible: s = !1, portalContainer: c = null }) {
	let l = k_(t), [u, d] = K(A_), f = !o && !!l && u, p = Ke(), [m, h] = K(null), g = G(null), [_, v] = K("hidden"), y = _ !== "hidden", b = _ === "visible", [x, S] = K(null), [C, w] = K(null), T = G(null), E = G(!1), D = G(!1), O = G(null), k = G(null), A = G(null);
	Ge(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(T_), t = () => {
			d(e.matches);
		};
		if (t(), typeof e.addEventListener == "function") return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
		let n = e.onchange;
		return e.onchange = t, () => {
			e.onchange === t && (e.onchange = n);
		};
	}, []);
	let j = H(() => {
		O.current !== null && (window.clearTimeout(O.current), O.current = null);
	}, []), M = H(() => {
		k.current !== null && (window.clearTimeout(k.current), k.current = null);
	}, []), N = H(() => {
		A.current !== null && (window.cancelAnimationFrame(A.current), A.current = null);
	}, []), P = H(() => {
		typeof window < "u" && (j(), M(), N());
	}, [
		N,
		M,
		j
	]), F = H((e = 0) => {
		typeof window > "u" ? v("hidden") : (j(), N(), M(), k.current = window.setTimeout(() => {
			v((e) => e === "hidden" ? "hidden" : "closing"), k.current = null;
		}, e));
	}, [
		N,
		M,
		j
	]), I = H((e = 0) => {
		s || F(e);
	}, [s, F]), ee = H(({ respectLockVisible: e = !1 } = {}) => {
		e && s || (P(), E.current = !1, D.current = !1, v("hidden"), h(null), T.current = null, w(null), S(null));
	}, [P, s]), te = H((e = 0) => {
		f && (typeof window > "u" ? v("visible") : (M(), j(), N(), O.current = window.setTimeout(() => {
			v((e) => e === "visible" ? "visible" : "opening"), A.current = window.requestAnimationFrame(() => {
				v("visible"), A.current = null;
			}), O.current = null;
		}, e)));
	}, [
		N,
		M,
		j,
		f
	]);
	Ge(() => () => {
		P();
	}, [P]), Ge(() => {
		f || (P(), v("hidden"), h(null), E.current = !1, D.current = !1, w(null), S(null));
	}, [P, f]), Ge(() => {
		if (_ !== "closing") return;
		let e = window.setTimeout(() => {
			v("hidden"), h(null), T.current = null, w(null), S(null);
		}, w_);
		return () => {
			window.clearTimeout(e);
		};
	}, [_]);
	let ne = H(() => {
		if (!y || typeof window > "u") return;
		let e = g.current;
		if (!m || !e) return;
		let t = r === "cursor" ? i ?? C ?? T.current : null, o = r === "cursor" && t ? {
			x: t.x,
			y: t.y,
			top: t.y,
			right: t.x,
			bottom: t.y,
			left: t.x,
			width: 0,
			height: 0,
			toJSON: () => ({})
		} : m.getBoundingClientRect(), s = e.getBoundingClientRect(), c = window.innerWidth, l = window.innerHeight, u = O_[n], d = null;
		for (let e of u) {
			let t = N_(o, s, e, a);
			if (P_(t, c, l)) {
				d = {
					top: t.top,
					left: t.left,
					placement: e
				};
				break;
			}
		}
		if (!d) {
			let e = F_(N_(o, s, n, a), c, l);
			d = {
				top: e.top,
				left: e.left,
				placement: n
			};
		}
		S((e) => e && e.top === d.top && e.left === d.left && e.placement === d.placement ? e : d);
	}, [
		m,
		C,
		i,
		y,
		a,
		n,
		r
	]);
	Je(() => {
		y && ne();
	}, [y, ne]), Ge(() => {
		if (!y) return;
		let e = () => {
			ne();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [y, ne]), Je(() => {
		if (!b) return;
		let e = (e) => {
			e.key === "Escape" && ee({ respectLockVisible: !0 });
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [ee, b]), Ge(() => {
		s ? (M(), (y || b) && v("visible")) : b && (E.current || D.current || F());
	}, [
		M,
		y,
		b,
		s,
		F
	]), Ge(() => {
		if (typeof document > "u") return;
		let e = () => {
			E.current = !1, D.current = !1, F();
		};
		return document.addEventListener(E_, e), () => {
			document.removeEventListener(E_, e);
		};
	}, [F]);
	let re = W(() => typeof document > "u" ? null : c ?? document.body, [c]);
	if (!f || !Ue(e)) return e;
	let L = e, R = L.props, z = r === "cursor" && i === null, ie = (e) => {
		if (R.onMouseEnter?.(e), !e.defaultPrevented) {
			if (E.current = !0, h(e.currentTarget), z) {
				let t = {
					x: e.clientX,
					y: e.clientY
				};
				T.current = t, w(t);
			}
			te(S_);
		}
	}, ae = (e) => {
		if (R.onMouseMove?.(e), !e.defaultPrevented) {
			if (E.current = !0, m || h(e.currentTarget), z) {
				let t = {
					x: e.clientX,
					y: e.clientY
				};
				T.current = t, w(t);
			}
			b || te(S_);
		}
	}, oe = (e) => {
		R.onMouseLeave?.(e), E.current = !1, I(C_);
	}, se = (e) => {
		if (R.onFocus?.(e), e.defaultPrevented) return;
		let t = e.currentTarget;
		(typeof t.matches != "function" || t.matches(":focus-visible")) && (h(t), D.current = !0, T.current = null, w(null), te());
	}, ce = (e) => {
		R.onBlur?.(e), D.current = !1, I();
	}, le = b ? M_(R["aria-describedby"], p) : R["aria-describedby"], B = ze(L, {
		onMouseEnter: ie,
		onMouseMove: ae,
		onMouseLeave: oe,
		onFocus: se,
		onBlur: ce,
		"aria-describedby": le
	}), ue = x?.placement ?? n, de = y && re ? Qe(/* @__PURE__ */ q("div", {
		id: p,
		ref: g,
		role: "tooltip",
		"data-placement": ue,
		className: Y("pointer-events-none fixed z-[2200]", "max-w-[calc(100vw-16px)] whitespace-nowrap rounded-[var(--pc-radius-md)] px-3 py-1 text-base font-medium", "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)]", "transition-[opacity,transform] duration-60 ease-out motion-reduce:transition-none motion-reduce:transform-none", b ? "opacity-100 scale-100 translate-x-0 translate-y-0" : Y("opacity-0 scale-95", ue === "top" ? "translate-y-0.5" : ue === "bottom" ? "-translate-y-0.5" : ue === "left" ? "translate-x-0.5" : "-translate-x-0.5")),
		style: {
			top: x?.top ?? -9999,
			left: x?.left ?? -9999
		},
		children: l
	}), re) : null;
	return /* @__PURE__ */ J(Ze, { children: [B, de] });
}
//#endregion
//#region ../ui/src/lib/icons/LoaderIcon.tsx
function L_({ className: e, ...t } = {}) {
	let n = t["data-slot"], r = `pc-loader-liquid-filter-${Ke().replace(/:/g, "")}`;
	return /* @__PURE__ */ q("span", {
		...t,
		"aria-hidden": "true",
		"data-slot": typeof n == "string" ? n : "loader-icon",
		className: Q("inline-flex h-4 w-4 align-middle text-current", e),
		children: /* @__PURE__ */ J("svg", {
			viewBox: "0 0 24 24",
			xmlns: "http://www.w3.org/2000/svg",
			fill: "currentColor",
			focusable: "false",
			className: "h-full w-full",
			children: [
				/* @__PURE__ */ q("style", { children: "@media (prefers-reduced-motion: reduce) {.pc-loader-icon-motion {display: none;}}" }),
				/* @__PURE__ */ q("defs", { children: /* @__PURE__ */ J("filter", {
					id: r,
					children: [
						/* @__PURE__ */ q("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "1.5",
							result: "blurred"
						}),
						/* @__PURE__ */ q("feColorMatrix", {
							in: "blurred",
							mode: "matrix",
							values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7",
							result: "liquid"
						}),
						/* @__PURE__ */ q("feBlend", {
							in: "SourceGraphic",
							in2: "liquid"
						})
					]
				}) }),
				/* @__PURE__ */ J("g", {
					filter: `url(#${r})`,
					children: [/* @__PURE__ */ J("circle", {
						cx: "4",
						cy: "12",
						r: "3",
						children: [/* @__PURE__ */ q("animate", {
							className: "pc-loader-icon-motion",
							attributeName: "cx",
							calcMode: "spline",
							dur: "0.75s",
							values: "4;9;4",
							keySplines: ".56,.52,.17,.98;.56,.52,.17,.98",
							repeatCount: "indefinite"
						}), /* @__PURE__ */ q("animate", {
							className: "pc-loader-icon-motion",
							attributeName: "r",
							calcMode: "spline",
							dur: "0.75s",
							values: "3;8;3",
							keySplines: ".56,.52,.17,.98;.56,.52,.17,.98",
							repeatCount: "indefinite"
						})]
					}), /* @__PURE__ */ J("circle", {
						cx: "15",
						cy: "12",
						r: "8",
						children: [/* @__PURE__ */ q("animate", {
							className: "pc-loader-icon-motion",
							attributeName: "cx",
							calcMode: "spline",
							dur: "0.75s",
							values: "15;20;15",
							keySplines: ".56,.52,.17,.98;.56,.52,.17,.98",
							repeatCount: "indefinite"
						}), /* @__PURE__ */ q("animate", {
							className: "pc-loader-icon-motion",
							attributeName: "r",
							calcMode: "spline",
							dur: "0.75s",
							values: "8;3;8",
							keySplines: ".56,.52,.17,.98;.56,.52,.17,.98",
							repeatCount: "indefinite"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region ../ui/src/lib/LoadingIndicator.tsx
var R_ = 220, z_ = {
	xs: "text-xs",
	sm: "text-sm",
	md: "text-base",
	lg: "text-lg",
	xl: "text-xl",
	fill: "text-base"
}, B_ = {
	xs: "h-3 w-3",
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-8 w-8",
	xl: "h-16 w-16",
	fill: "h-full w-full"
}, V_ = {
	current: "text-current",
	muted: "text-[var(--pc-color-text-muted,var(--pc-color-text))]",
	accent: "text-[var(--pc-color-secondary,var(--pc-color-text))]",
	inverted: "text-[var(--pc-text-inverted-80,var(--pc-color-surface))]"
};
function H_({ label: e, showLabel: t = !1, size: n = "sm", tone: r = "current", fadeInMs: i = R_, className: a, iconSlot: o, style: s, ...c }) {
	let l = !!e, u = Math.max(0, i), d = u > 0, f = d ? {
		...s,
		"--pc-loading-indicator-fade-in-ms": `${String(u)}ms`
	} : s;
	return /* @__PURE__ */ J("span", {
		...c,
		"data-slot": "loading-indicator",
		role: l ? "status" : void 0,
		"aria-label": l ? e : void 0,
		"aria-live": l ? "polite" : void 0,
		"aria-hidden": l ? void 0 : "true",
		style: f,
		className: Q(Y("inline-flex shrink-0 items-center justify-center gap-2 align-middle", z_[n], V_[r], d ? ["motion-safe:animate-[pc-loading-indicator-fade-in_var(--pc-loading-indicator-fade-in-ms)_ease-out_both]", "motion-reduce:animate-none"] : "opacity-100"), a),
		children: [/* @__PURE__ */ q(L_, {
			className: B_[n],
			"data-slot": o
		}), e ? /* @__PURE__ */ q("span", {
			"data-slot": "loading-indicator-label",
			className: t ? void 0 : "sr-only",
			children: e
		}) : null]
	});
}
//#endregion
//#region ../ui/src/lib/controlColourPrimitives.ts
var U_ = Y("enabled:active:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "enabled:active:text-[var(--pc-color-control-text,var(--pc-color-text))]", "data-[touch-active=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[touch-active=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"), W_ = Y("data-[active=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[active=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]");
Y("group-hover:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]", "group-focus-visible:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]");
var G_ = "enabled:hover:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]", K_ = Y("enabled:hover:border-[var(--pc-color-button-border,var(--pc-color-transparent))]", Y("enabled:active:border-[var(--pc-color-button-border,var(--pc-color-transparent))]", "data-[touch-active=true]:border-[var(--pc-color-button-border,var(--pc-color-transparent))]"), "data-[active=true]:border-[var(--pc-color-button-border,var(--pc-color-transparent))]", "disabled:border-[var(--pc-color-button-border,var(--pc-color-transparent))]"), q_ = {
	solid: Y("bg-[var(--pc-color-control-background,var(--pc-color-surface))]", "text-[var(--pc-color-control-text,var(--pc-color-text))]", G_, U_, W_, K_, "disabled:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-strongest))]", "disabled:text-[var(--pc-color-control-text-disabled,var(--pc-color-text-muted))]"),
	ghost: Y("[--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))]", "bg-transparent text-[var(--pc-color-control-text,var(--pc-color-text))]", G_, "enabled:hover:text-[var(--pc-color-control-text,var(--pc-color-text))]", U_, W_, "data-[loading=true]:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-weakest))]", "disabled:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-strongest))]"),
	outline: Y("[--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-border))]", "border border-[var(--pc-color-control-border,var(--pc-color-control-background,var(--pc-color-transparent)))]", "bg-[var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-control-text,var(--pc-color-text))]", G_, "enabled:hover:text-[var(--pc-color-control-text,var(--pc-color-text))]", U_, W_, "data-[loading=true]:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-weakest))]", "disabled:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-strongest))]"),
	muted: Y("[--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))]", "bg-[var(--pc-color-control-background-muted,var(--pc-color-surface-weakest))]", "text-[var(--pc-color-control-text,var(--pc-color-text))]", G_, U_, W_, K_, "disabled:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-strongest))]", "disabled:text-[var(--pc-color-control-text-disabled,var(--pc-color-text-muted))]")
}, J_ = {
	solid: "data-[split-hover=true]:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]",
	ghost: Y("data-[split-hover=true]:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]", "data-[split-hover=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"),
	outline: Y("data-[split-hover=true]:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]", "data-[split-hover=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"),
	muted: "data-[split-hover=true]:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]"
}, Y_ = {
	solid: Y("data-[split-press=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[split-press=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"),
	ghost: Y("data-[split-press=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[split-press=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"),
	outline: Y("data-[split-press=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[split-press=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"),
	muted: Y("data-[split-press=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[split-press=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]")
}, X_ = (e) => q_[e], Z_ = (e) => J_[e], Q_ = (e) => Y_[e], $_ = Y("[--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-text))]", "[--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))]", "[--pc-color-control-outline:var(--pc-color-button-outline,var(--pc-color-transparent))]", "[--pc-color-control-background-hover:var(--pc-color-button-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-button-background-active,var(--pc-color-surface-strongest))]", "[--pc-color-control-background-disabled:var(--pc-color-button-background-disabled,var(--pc-color-surface-strongest))]", "[--pc-color-control-text-disabled:var(--pc-color-button-text-disabled,var(--pc-color-text-muted))]"), ev = Y($_, "[--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "[--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-input-text,var(--pc-color-text)))]"), tv = (e) => e ? void 0 : [
	"border-0 outline-0 shadow-none bg-transparent",
	"hover:bg-transparent active:bg-transparent",
	"enabled:hover:bg-transparent enabled:active:bg-transparent",
	"disabled:bg-transparent data-[loading=true]:bg-transparent",
	"data-[touch-active=true]:bg-transparent data-[active=true]:bg-transparent"
].join(" "), nv = {
	"3xs": "px-1 py-0.5 text-[0.625rem]",
	"2xs": "px-1.5 py-0.5 text-[0.6875rem]",
	xl: "px-6 py-3 text-lg",
	lg: "px-5 py-2.5 text-base",
	md: "px-3.5 py-2 text-base",
	sm: "px-3 py-2 text-sm",
	xs: "px-2 py-1.5 text-sm"
}, rv = {
	"3xs": "h-4 w-4 p-0 text-[0.5625rem] [&_svg]:h-2.5 [&_svg]:w-2.5",
	"2xs": "h-5 w-5 p-0 text-[0.625rem] [&_svg]:h-3 [&_svg]:w-3",
	xl: "h-12 w-12 p-2 text-lg [&_svg]:h-5 [&_svg]:w-5",
	lg: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	md: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	sm: "h-9 w-9 p-1 text-sm [&_svg]:h-[17px] [&_svg]:w-[17px]",
	xs: "h-7 w-7 p-1 text-sm [&_svg]:h-[16px] [&_svg]:w-[16px]"
}, iv = nv, av = {
	"2xs": "pl-1 pr-1.5 py-0.5 text-[0.6875rem]",
	xl: "pl-2 pr-4 py-3 text-lg",
	lg: "pl-1.5 pr-3 py-2.5 text-base",
	md: "pl-1 pr-2.5 py-1.5 text-base",
	sm: "pl-1.5 pr-2.5 py-2 text-sm",
	xs: "pl-1 pr-2 py-1 text-sm"
}, ov = Y("relative inline-flex items-center justify-center whitespace-nowrap", "cursor-pointer transition-colors duration-200 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-button-focus-ring,var(--pc-color-text))]", "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-[var(--pc-color-button-focus-ring,var(--pc-color-text))]", "disabled:pointer-events-none disabled:cursor-not-allowed", "data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed", "data-[loading=true]:bg-[var(--pc-color-control-background-disabled,var(--pc-color-surface-weakest))]", "data-[loading=true]:pointer-events-none data-[loading=true]:cursor-wait"), sv = Y(ov, $_, "bg-clip-padding", "border border-[var(--pc-color-control-border,var(--pc-color-control-background,var(--pc-color-transparent)))]", "outline outline-1 outline-[var(--pc-color-control-outline,var(--pc-color-transparent))]", "rounded-[var(--pc-radius-3xl)] font-medium"), cv = Y(ov, "font-medium"), lv = Y(cv, "rounded-l-[var(--pc-radius-3xl)]"), uv = Y(cv, "rounded-r-[var(--pc-radius-3xl)]"), dv = (e) => X_(e), fv = (e) => Z_(e), pv = (e) => Q_(e), mv = (e, t = !1) => t ? rv[e] : nv[e], hv = (e) => /^(p|px|py|pt|pr|pb|pl)-/.test(e), gv = (e, t, n = !1) => e.split(/\s+/).filter(Boolean).map((e) => `@${t}:${n && hv(e) ? `!${e}` : e}`).join(" "), _v = {
	xs: {
		"3xs": "@xs:text-[0.625rem]",
		"2xs": "@xs:text-[0.6875rem]",
		xl: "@xs:text-lg",
		lg: "@xs:text-base",
		md: "@xs:text-base",
		sm: "@xs:text-sm",
		xs: "@xs:text-sm"
	},
	sm: {
		"3xs": "@sm:text-[0.625rem]",
		"2xs": "@sm:text-[0.6875rem]",
		xl: "@sm:text-lg",
		lg: "@sm:text-base",
		md: "@sm:text-base",
		sm: "@sm:text-sm",
		xs: "@sm:text-sm"
	},
	md: {
		"3xs": "@md:[&&]:text-[0.625rem]",
		"2xs": "@md:[&&]:text-[0.6875rem]",
		xl: "@md:[&&]:text-lg",
		lg: "@md:[&&]:text-base",
		md: "@md:[&&]:text-base",
		sm: "@md:[&&]:text-sm",
		xs: "@md:[&&]:text-sm"
	},
	lg: {
		"3xs": "@lg:[&&]:text-[0.625rem]",
		"2xs": "@lg:[&&]:text-[0.6875rem]",
		xl: "@lg:[&&]:text-lg",
		lg: "@lg:[&&]:text-base",
		md: "@lg:[&&]:text-base",
		sm: "@lg:[&&]:text-sm",
		xs: "@lg:[&&]:text-sm"
	},
	xl: {
		"3xs": "@xl:[&&]:text-[0.625rem]",
		"2xs": "@xl:[&&]:text-[0.6875rem]",
		xl: "@xl:[&&]:text-lg",
		lg: "@xl:[&&]:text-base",
		md: "@xl:[&&]:text-base",
		sm: "@xl:[&&]:text-sm",
		xs: "@xl:[&&]:text-sm"
	},
	"2xl": {
		"3xs": "@2xl:[&&]:text-[0.625rem]",
		"2xs": "@2xl:[&&]:text-[0.6875rem]",
		xl: "@2xl:[&&]:text-lg",
		lg: "@2xl:[&&]:text-base",
		md: "@2xl:[&&]:text-base",
		sm: "@2xl:[&&]:text-sm",
		xs: "@2xl:[&&]:text-sm"
	}
}, vv = {
	xs: {
		"3xs": "",
		"2xs": "",
		xl: "",
		lg: "",
		md: "",
		sm: "",
		xs: ""
	},
	sm: {
		"3xs": "",
		"2xs": "",
		xl: "",
		lg: "",
		md: "",
		sm: "",
		xs: ""
	},
	md: {
		"3xs": "@md:[&&]:!px-1 @md:[&&]:!py-0.5",
		"2xs": "@md:[&&]:!px-1.5 @md:[&&]:!py-0.5",
		xl: "@md:[&&]:!px-6 @md:[&&]:!py-3",
		lg: "@md:[&&]:!px-5 @md:[&&]:!py-2.5",
		md: "@md:[&&]:!px-3.5 @md:[&&]:!py-2",
		sm: "@md:[&&]:!px-3 @md:[&&]:!py-2",
		xs: "@md:[&&]:!px-2 @md:[&&]:!py-1.5"
	},
	lg: {
		"3xs": "@lg:[&&]:!px-1 @lg:[&&]:!py-0.5",
		"2xs": "@lg:[&&]:!px-1.5 @lg:[&&]:!py-0.5",
		xl: "@lg:[&&]:!px-6 @lg:[&&]:!py-3",
		lg: "@lg:[&&]:!px-5 @lg:[&&]:!py-2.5",
		md: "@lg:[&&]:!px-3.5 @lg:[&&]:!py-2",
		sm: "@lg:[&&]:!px-3 @lg:[&&]:!py-2",
		xs: "@lg:[&&]:!px-2 @lg:[&&]:!py-1.5"
	},
	xl: {
		"3xs": "@xl:[&&]:!px-1 @xl:[&&]:!py-0.5",
		"2xs": "@xl:[&&]:!px-1.5 @xl:[&&]:!py-0.5",
		xl: "@xl:[&&]:!px-6 @xl:[&&]:!py-3",
		lg: "@xl:[&&]:!px-5 @xl:[&&]:!py-2.5",
		md: "@xl:[&&]:!px-3.5 @xl:[&&]:!py-2",
		sm: "@xl:[&&]:!px-3 @xl:[&&]:!py-2",
		xs: "@xl:[&&]:!px-2 @xl:[&&]:!py-1.5"
	},
	"2xl": {
		"3xs": "@2xl:[&&]:!px-1 @2xl:[&&]:!py-0.5",
		"2xs": "@2xl:[&&]:!px-1.5 @2xl:[&&]:!py-0.5",
		xl: "@2xl:[&&]:!px-6 @2xl:[&&]:!py-3",
		lg: "@2xl:[&&]:!px-5 @2xl:[&&]:!py-2.5",
		md: "@2xl:[&&]:!px-3.5 @2xl:[&&]:!py-2",
		sm: "@2xl:[&&]:!px-3 @2xl:[&&]:!py-2",
		xs: "@2xl:[&&]:!px-2 @2xl:[&&]:!py-1.5"
	}
}, yv = (e, t = !1, n = "md") => Y(t ? gv(rv[e], n) : gv(nv[e], n, !0), !t && vv[n][e], _v[n][e]), bv = (e) => e ? "true" : void 0, xv = ({ disabled: e = !1, loading: t = !1 }) => e || t, Sv = ({ loading: e, iconOnly: t = !1, alignment: n = "centre" }) => Y("relative z-[1] inline-flex items-center", n === "start" && "justify-start text-start", n === "end" && "justify-end text-end", n === "centre" && "justify-center text-center", t ? "gap-1" : "gap-2", e ? "opacity-0" : "opacity-100"), Cv = (e) => e === !0 ? "true" : void 0, wv = (e) => e === !0 || e === "true", Tv = (e) => {
	if (wv(e)) return "true";
}, Ev = (t) => e(t), Dv = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl"
], Ov = (e, t) => typeof e == "string" ? { base: e } : {
	...e,
	base: e.base ?? t
}, kv = (e, t) => Ov(e, t), Av = (e, t) => e.split(/\s+/).filter(Boolean).map((e) => `@${t}:${e}`).join(" "), jv = (e, t) => [e[t.base], ...Dv.map((n) => t[n] && Av(e[t[n]], n))].filter(Boolean).join(" "), Mv = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, Nv = (e) => Ev(e), Pv = He(function({ label: e, variant: t = "secondary", appearance: n = "solid", size: r = "md", className: i, fullWidth: o = !1, alignment: s = "centre", chrome: c = !0, loading: l = !1, iconOnly: u = !1, showTooltip: d, tooltipLabel: f, tooltipPlacement: p = "bottom", leadingIcon: m, trailingIcon: h, edgeAlignedIcon: g = !1, toggled: _, type: v = "button", disabled: y, "aria-label": b, title: x, onClick: S, ...C }, w) {
	let T = xv({
		disabled: y === !0,
		loading: l
	}), E = Nv(t), D = Cv(_), O = Tv(C["aria-expanded"]), k = wv(C["data-touch-active"]), A = bv(wv(C["data-active"]) || D === "true" || O === "true"), j = bv(k), M = Mv(f) ?? Mv(b) ?? Mv(e) ?? Mv(x), N = !(!h || !o || u || m), P = !!(m && g && o && !u && !h), F = P || N, I = P && g === "below-sm", ee = I ? "sm:inline-flex sm:w-auto sm:grid-cols-none sm:justify-center sm:gap-2" : void 0, te = I && !h ? "sm:hidden" : void 0, ne = (d ?? u) && u && !T && M !== void 0, re = kv(r, "md"), L = Q(sv, a("button"), dv(n), mv(re.base, u), ...Dv.map((e) => re[e] && yv(re[e], u, e)), o && !u && "w-full", u && "aspect-square", s === "start" && "justify-start text-start", s === "end" && "justify-end text-end", tv(c), i), R = u ? b ?? e : b, z = (e) => {
		D_(), S?.(e);
	}, ie = /* @__PURE__ */ J("button", {
		ref: w,
		...C,
		type: v,
		disabled: T,
		"aria-busy": l ? !0 : void 0,
		"aria-pressed": _ === void 0 ? void 0 : _,
		"aria-label": R,
		title: ne ? void 0 : x,
		onClick: z,
		className: L,
		"data-theme": E,
		"data-pc-appearance": n,
		"data-loading": bv(l),
		"data-disabled": bv(T),
		"data-touch-active": j,
		"data-active": A,
		"data-toggled": D,
		"data-expanded": O,
		"data-icon-only": bv(u),
		children: [l && /* @__PURE__ */ q("span", {
			className: "absolute inset-0 z-20 flex items-center justify-center",
			"aria-hidden": "true",
			children: /* @__PURE__ */ q(H_, {})
		}), F ? /* @__PURE__ */ J("span", {
			className: Y("relative z-[1] grid w-full grid-cols-[1fr_auto_1fr] items-center", ee, l ? "opacity-0" : "opacity-100"),
			children: [
				/* @__PURE__ */ q("span", {
					className: Y("inline-flex items-center justify-self-start", I && "sm:justify-self-auto"),
					"aria-hidden": !m || void 0,
					children: m
				}),
				/* @__PURE__ */ q("span", {
					className: Y("col-start-2", I && "sm:col-auto"),
					children: e
				}),
				/* @__PURE__ */ q("span", {
					className: Y("col-start-3 inline-flex items-center justify-self-end", te),
					"aria-hidden": !h || void 0,
					children: h
				})
			]
		}) : /* @__PURE__ */ J("span", {
			className: Sv({
				loading: l,
				iconOnly: u,
				alignment: s
			}),
			children: [
				m ? /* @__PURE__ */ q("span", {
					className: "inline-flex items-center",
					children: m
				}) : null,
				u ? null : /* @__PURE__ */ q("span", { children: e }),
				h ? /* @__PURE__ */ q("span", {
					className: "inline-flex items-center",
					children: h
				}) : null
			]
		})]
	});
	return ne ? /* @__PURE__ */ q(I_, {
		label: M,
		placement: p,
		disabled: T,
		children: ie
	}) : ie;
});
Pv.displayName = "Button";
//#endregion
//#region ../ui/src/lib/Card.tsx
var Fv = {
	neutral: "[background:var(--pc-color-card-background,var(--pc-color-neutral))]",
	neutralDarker: "[background:var(--pc-color-card-background,var(--pc-color-depth-2))]",
	neutralDarkest: "[background:var(--pc-color-card-background,var(--pc-color-depth-3))]",
	surface: "[background:var(--pc-color-card-background,var(--pc-color-surface))]",
	secondary: "[background:var(--pc-color-card-background,var(--pc-color-secondary))]",
	primary: "[background:var(--pc-color-card-background,var(--pc-color-primary))]",
	secondaryInverted: "[background:var(--pc-color-card-background,var(--pc-color-secondary))]",
	secondaryPrimary: "[background:var(--pc-color-card-background,var(--pc-color-secondary))]"
}, Iv = {
	neutral: "text-[var(--pc-color-card-text,var(--pc-color-text))]",
	neutralDarker: "text-[var(--pc-color-card-text,var(--pc-color-text))]",
	neutralDarkest: "text-[var(--pc-color-card-text,var(--pc-color-text))]",
	surface: "text-[var(--pc-color-card-text,var(--pc-color-text))]",
	secondary: "text-[var(--pc-color-card-text,var(--pc-color-text-inverted))]",
	primary: "text-[var(--pc-color-card-text,var(--pc-color-text))]",
	secondaryInverted: "text-[var(--pc-color-card-text,var(--pc-color-text-inverted))]",
	secondaryPrimary: "text-[var(--pc-color-card-text,var(--pc-color-primary))]"
}, Lv = {
	solid: "",
	ghost: "bg-transparent",
	outline: Y("border border-[var(--pc-color-card-border,var(--pc-color-depth-3))]", "[background:var(--pc-color-card-background,var(--pc-color-outline-surface,transparent))]"),
	muted: "[background:var(--pc-color-card-background-muted,var(--pc-color-surface-weakest))]"
}, Rv = {
	flush: "rounded-[var(--pc-radius-lg)] p-0",
	compact: "rounded-[var(--pc-radius-lg)] p-2",
	default: "rounded-[var(--pc-radius-lg)] p-4",
	md: "rounded-[var(--pc-radius-lg)] p-5",
	lg: "rounded-[var(--pc-radius-xl)] p-6 sm:p-8 lg:p-10"
};
function zv({ children: e, variant: t = "neutral", size: n = "default", appearance: r = "solid", interactive: i = !1, href: o, as: s = "div", target: c, rel: l, id: u, role: d, tabIndex: f, title: p, ariaLabel: m, ariaDescribedBy: h, ariaLabelledBy: g, overflow: _, className: v, ...y }) {
	let b = _ ?? (n === "flush" ? "hidden" : void 0), x = "";
	b === "hidden" && (x = "overflow-hidden"), b === "visible" && (x = "overflow-visible");
	let S = Y("block transition-colors duration-150 ease-out", a("card"), Rv[n], Iv[t], r === "solid" ? Fv[t] : Lv[r], x, i || o ? [
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-card-focus-ring,var(--pc-color-border))]",
		"focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]",
		"hover:[background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))]",
		"group-hover:[background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))]",
		"group-focus-visible:[background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))]",
		"cursor-pointer"
	].join(" ") : ""), C = {
		className: v ? Q(S, v) : S,
		"data-pc-appearance": r,
		id: u,
		role: d,
		tabIndex: f,
		title: p,
		"aria-label": m,
		"aria-describedby": h,
		"aria-labelledby": g
	};
	return o ? /* @__PURE__ */ q("a", {
		...C,
		href: o,
		target: c,
		rel: l,
		...y,
		children: e
	}) : q(s === "section" ? "section" : s === "article" ? "article" : "div", {
		...C,
		...y,
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/Panel.tsx
var Bv = {
	xl: {
		gapClassName: "gap-5",
		paddingClassName: "p-4",
		compactPaddingClassName: "p-3",
		paddingInsetClassName: "[--pc-panel-edge-inset:1rem]",
		compactPaddingInsetClassName: "[--pc-panel-edge-inset:0.75rem]",
		paddingOffsetClassName: "[--pc-panel-edge-offset:-1rem]",
		compactPaddingOffsetClassName: "[--pc-panel-edge-offset:-0.75rem]",
		extraInsetClassName: "[--pc-panel-extra-inset:1rem]",
		roundingClassName: "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]",
		fontClassName: "text-xl"
	},
	lg: {
		gapClassName: "gap-4",
		paddingClassName: "p-3.5",
		compactPaddingClassName: "p-2.5",
		paddingInsetClassName: "[--pc-panel-edge-inset:0.875rem]",
		compactPaddingInsetClassName: "[--pc-panel-edge-inset:0.625rem]",
		paddingOffsetClassName: "[--pc-panel-edge-offset:-0.875rem]",
		compactPaddingOffsetClassName: "[--pc-panel-edge-offset:-0.625rem]",
		extraInsetClassName: "[--pc-panel-extra-inset:0.875rem]",
		roundingClassName: "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]",
		fontClassName: "text-lg"
	},
	md: {
		gapClassName: "gap-3",
		paddingClassName: "p-3",
		compactPaddingClassName: "p-2",
		paddingInsetClassName: "[--pc-panel-edge-inset:0.75rem]",
		compactPaddingInsetClassName: "[--pc-panel-edge-inset:0.5rem]",
		paddingOffsetClassName: "[--pc-panel-edge-offset:-0.75rem]",
		compactPaddingOffsetClassName: "[--pc-panel-edge-offset:-0.5rem]",
		extraInsetClassName: "[--pc-panel-extra-inset:0.75rem]",
		roundingClassName: "rounded-[var(--pc-radius-panel,var(--pc-radius-lg))]",
		fontClassName: "text-base"
	},
	sm: {
		gapClassName: "gap-2",
		paddingClassName: "p-2.5",
		compactPaddingClassName: "p-1.5",
		paddingInsetClassName: "[--pc-panel-edge-inset:0.625rem]",
		compactPaddingInsetClassName: "[--pc-panel-edge-inset:0.375rem]",
		paddingOffsetClassName: "[--pc-panel-edge-offset:-0.625rem]",
		compactPaddingOffsetClassName: "[--pc-panel-edge-offset:-0.375rem]",
		extraInsetClassName: "[--pc-panel-extra-inset:0.625rem]",
		roundingClassName: "rounded-[var(--pc-radius-panel,var(--pc-radius-md))]",
		fontClassName: "text-sm"
	},
	xs: {
		gapClassName: "gap-1.5",
		paddingClassName: "p-1.5",
		compactPaddingClassName: "p-1",
		paddingInsetClassName: "[--pc-panel-edge-inset:0.375rem]",
		compactPaddingInsetClassName: "[--pc-panel-edge-inset:0.25rem]",
		paddingOffsetClassName: "[--pc-panel-edge-offset:-0.375rem]",
		compactPaddingOffsetClassName: "[--pc-panel-edge-offset:-0.25rem]",
		extraInsetClassName: "[--pc-panel-extra-inset:0.375rem]",
		roundingClassName: "rounded-[var(--pc-radius-panel,var(--pc-radius-sm))]",
		fontClassName: "text-xs"
	}
}, Vv = {
	solid: Y("border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "[background:var(--pc-color-panel-background,var(--pc-color-surface))]", "text-[var(--pc-color-panel-text,var(--pc-color-text))]"),
	ghost: Y("border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "bg-transparent", "text-[var(--pc-color-panel-text,var(--pc-color-text))]"),
	outline: Y("border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "bg-[var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))]", "text-[var(--pc-color-panel-text,var(--pc-color-text))]"),
	muted: Y("border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", "[background:var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))]", "text-[var(--pc-color-panel-text,var(--pc-color-text))]")
}, Hv = "calc(var(--pc-panel-edge-inset, 0px) + var(--pc-panel-extra-inset, 0px))", Uv = (e) => {
	if (!e) return null;
	let t = {
		blockStart: !1,
		blockEnd: !1,
		inlineStart: !1,
		inlineEnd: !1
	};
	return (Array.isArray(e) ? e : [e]).forEach((e) => {
		(e === "all" || e === "block" || e === "block-start") && (t.blockStart = !0), (e === "all" || e === "block" || e === "block-end") && (t.blockEnd = !0), (e === "all" || e === "inline" || e === "inline-start") && (t.inlineStart = !0), (e === "all" || e === "inline" || e === "inline-end") && (t.inlineEnd = !0);
	}), {
		...t.blockStart ? { paddingBlockStart: Hv } : {},
		...t.blockEnd ? { paddingBlockEnd: Hv } : {},
		...t.inlineStart ? { paddingInlineStart: Hv } : {},
		...t.inlineEnd ? { paddingInlineEnd: Hv } : {}
	};
};
function Wv({ children: e, size: t = "md", spacing: n = "default", inset: r, insetSize: i, fill: o = !1, fillMode: s = "full", grow: c = !1, scroll: l = !1, rounded: u = !1, variant: d, appearance: f = "solid", chrome: p = !0, dataTheme: m, inheritTheme: h = !1, as: g = "section", id: _, role: v, ariaLabel: y, ariaDescribedBy: b, ariaLabelledBy: x, className: S, style: C, ...w }) {
	let T;
	T = h ? void 0 : m === void 0 ? Ev(d) ?? "neutral" : m ?? void 0;
	let E = Bv[t], D = Uv(r), O = D ? {
		...D,
		...C
	} : C, k = n === "flush" ? Y("gap-0 p-0", "[--pc-panel-edge-inset:0px]", "[--pc-panel-edge-offset:0px]") : n === "compact" ? Y(E.gapClassName, E.compactPaddingClassName, E.compactPaddingInsetClassName, E.compactPaddingOffsetClassName) : Y(E.gapClassName, E.paddingClassName, E.paddingInsetClassName, E.paddingOffsetClassName), A = (() => {
		if (o) return s === "max" ? Y("max-h-full w-full min-h-0 min-w-0", c && "flex-1", !l && "overflow-hidden") : Y("h-full w-full min-h-0 min-w-0", c && "flex-1");
	})(), j = l ? "overflow-y-auto [scrollbar-gutter:stable]" : void 0, M = Y("flex flex-col", a("panel"), k, r && Bv[i ?? t].extraInsetClassName, A, j, u ? "rounded-[var(--pc-radius-workspace-main,var(--pc-radius-3xl))]" : E.roundingClassName, E.fontClassName, p && Vv[f], S);
	return q(g === "article" ? "article" : g === "div" ? "div" : "section", {
		"data-theme": T,
		"data-pc-appearance": f,
		className: M,
		id: _,
		role: v,
		style: O,
		"aria-label": y,
		"aria-describedby": b,
		"aria-labelledby": x,
		...w,
		children: e
	});
}
function Gv({ children: e, fill: t = !1, className: n, dataPcPart: r, ...i }) {
	let a = i["data-pc-part"];
	return /* @__PURE__ */ q("div", {
		...i,
		"data-pc-part": r ?? a,
		className: Y("w-full min-w-0", t && "flex flex-1 min-h-0 flex-col", n),
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/CreditCardLayout.tsx
var Kv = "brandless-card", qv = "cubic-bezier(0.22, 1, 0.36, 1)", Jv = (e) => {
	let t = (e) => Array.from({ length: e.length }, (t, n) => e.item(n)).some((e) => e.startsWith("--pc-color-credit-card-panel-") && (e.endsWith("-text") || e.includes("-input-"))), n = e;
	for (; n;) {
		if (t(n.style)) return !0;
		n = n.parentElement;
	}
	let r = (e) => "style" in e && t(e.style) ? !0 : "cssRules" in e && Array.from(e.cssRules).some(r);
	for (let t of Array.from(e.ownerDocument.styleSheets)) try {
		if (Array.from(t.cssRules).some(r)) return !0;
	} catch {
		return !0;
	}
	return !1;
}, Yv = (e) => {
	if (!e || !Jv(e)) return "";
	let t = e.ownerDocument.defaultView?.getComputedStyle(e);
	if (!t) return "";
	let n = (e) => !!t.getPropertyValue(`--pc-color-credit-card-panel-${e}`).trim();
	return [
		n("input-background") && "background",
		n("input-text") && "text",
		(n("input-placeholder") || n("input-text")) && "placeholder",
		(n("input-label-text") || n("text")) && "label-text"
	].filter(Boolean).join(" ");
}, Xv = (e) => {
	let t = "";
	return {
		getSnapshot: () => t,
		subscribe: (n) => {
			let r = () => {
				let r = Yv(e);
				r !== t && (t = r, n());
			}, i = c([e], r);
			return r(), i;
		}
	};
};
function Zv({ presentation: e = "card", cardFields: t, details: n, footer: r, reserveFooterSpace: i = !1, hasReservedTrailingMessageSpace: o = !1, dataTheme: s = Kv, brandMotionKey: c, className: l, cardFieldsClassName: u, detailsClassName: d, footerClassName: f, rootAttributes: p }) {
	let [m, h] = K(null), g = e === "card" ? m?.parentElement ?? null : null, _ = W(() => Xv(g), [g]), v = Xe(_.subscribe, _.getSnapshot, () => ""), { className: y, id: b, role: x, style: S, "aria-label": C, "aria-describedby": w, "aria-labelledby": T } = p ?? {}, E = p?.["data-pc-slot"], D = p?.["data-pc-slug"], O = p?.["data-pc-part"], k = e === "card", A = Object.fromEntries(Object.entries(S ?? {}).filter(([e]) => e.startsWith("--pc-color-input-")).map(([e, t]) => [`--_pc-explicit-input-${e.slice(17)}`, t])), j = i || r != null, M = o ? ["block-start", "inline"] : "all", N = k && s !== "neutral" && s !== Kv, P = {
		backgroundImage: N ? [
			"radial-gradient(128% 102% at 12% 10%, color-mix(in oklab, white 22%, transparent) 0%, transparent 44%)",
			"radial-gradient(112% 84% at 90% 13%, color-mix(in oklab, white 12%, transparent) 0%, transparent 38%)",
			"radial-gradient(124% 98% at 78% 88%, color-mix(in oklab, white 7%, transparent) 0%, transparent 50%)",
			"linear-gradient(136deg, color-mix(in oklab, white 9%, transparent) 0%, transparent 48%, color-mix(in oklab, white 5%, transparent) 100%)"
		].join(", ") : "none",
		opacity: N ? .86 : 0,
		transform: N ? "translate3d(1.75%, -1.25%, 0) scale(1.06)" : "translate3d(-2%, 1%, 0) scale(0.98)",
		transition: [`opacity 500ms ${qv}`, `transform 620ms ${qv}`].join(", ")
	}, F = {
		backgroundImage: N ? ["linear-gradient(308deg, transparent 0%, transparent 32%, color-mix(in oklab, white 16%, transparent) 49%, transparent 67%, transparent 100%)", "conic-gradient(from 18deg at 82% 82%, transparent 0deg, color-mix(in oklab, white 7%, transparent) 62deg, transparent 126deg, transparent 360deg)"].join(", ") : "none",
		opacity: N ? .32 : 0,
		transform: N ? "translate3d(-1%, 1.5%, 0) scale(1.04) rotate(0.001deg)" : "translate3d(1.5%, -1%, 0) scale(0.985) rotate(0.001deg)",
		transition: [`opacity 440ms ${qv}`, `transform 580ms ${qv}`].join(", ")
	}, I = {
		backgroundImage: N ? "linear-gradient(105deg, transparent 0%, transparent 38%, color-mix(in oklab, white 18%, transparent) 50%, transparent 62%, transparent 100%)" : "none",
		opacity: 0
	};
	return /* @__PURE__ */ J(Wv, {
		as: "div",
		size: "lg",
		id: b,
		role: x,
		style: {
			...S,
			...A
		},
		ariaLabel: C,
		ariaDescribedBy: w,
		ariaLabelledBy: T,
		"data-slot": p?.["data-slot"] ?? (k ? "credit-card-layout" : void 0),
		"data-pc-input-context": v || void 0,
		"data-pc-slot": E,
		"data-pc-slug": D,
		"data-pc-part": O,
		dataTheme: k ? s : "neutral",
		chrome: !1,
		spacing: "flush",
		inset: k ? M : void 0,
		className: Q(k ? [
			"relative isolate flex w-full min-w-0 flex-col overflow-hidden rounded-[var(--pc-radius-credit-card-panel,var(--pc-radius-panel,var(--pc-radius-lg)))] border border-[var(--pc-color-credit-card-panel-border,var(--pc-color-panel-border,var(--pc-color-transparent)))] bg-[var(--pc-color-credit-card-panel-background,var(--pc-color-panel-background,var(--pc-color-surface)))] text-[var(--pc-color-credit-card-panel-text,var(--pc-color-panel-text,var(--pc-color-text)))]",
			"[--pc-color-credit-card-toggle-thumb-surface:color-mix(in_srgb,var(--pc-color-credit-card-panel-background,var(--pc-color-panel-background,var(--pc-color-surface)))_30%,white_70%)]",
			a("creditCardPanel"),
			"min-h-44 md:min-h-48 transition-[background-color,color,transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-colors motion-safe:will-change-[background-color,color,transform]"
		].filter(Boolean).join(" ") : "relative w-full min-w-0", y, l),
		children: [
			/* @__PURE__ */ q("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-ambient-glow",
				style: P,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ q("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-spotlight-inner",
				style: F,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ q("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-brand-sheen",
				style: I,
				className: Q("pointer-events-none absolute -inset-x-1 inset-y-0 z-0 mix-blend-screen", N && "pc-card-brand-sheen-enter")
			}, `sheen:${c ?? s}`),
			/* @__PURE__ */ q("div", {
				ref: h,
				"data-slot": "credit-card-layout-card-fields",
				className: Q(k ? "relative z-10 w-full min-w-0" : "contents", u),
				children: /* @__PURE__ */ q("div", {
					"data-slot": "credit-card-layout-card-fields-content",
					className: k ? "w-full min-w-0" : "contents",
					children: t
				})
			}),
			n != null && /* @__PURE__ */ q("div", {
				"data-slot": "credit-card-layout-details",
				className: Q(k ? "relative z-10 mt-1 w-full min-w-0" : "contents", d),
				children: /* @__PURE__ */ q("div", {
					"data-slot": "credit-card-layout-details-content",
					className: k ? "w-full min-w-0" : "contents",
					children: n
				})
			}),
			j && /* @__PURE__ */ q("div", {
				"data-slot": "credit-card-layout-footer",
				className: Q("relative z-10 mt-auto flex min-h-7 items-center justify-end md:min-h-8", i && "min-h-8", r == null && "invisible", f),
				children: r
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/useElementOverflow.ts
var Qv = ({ axis: e, element: t }) => {
	let n = Math.ceil(t.scrollWidth) > Math.ceil(t.clientWidth), r = Math.ceil(t.scrollHeight) > Math.ceil(t.clientHeight);
	switch (e) {
		case "horizontal": return n;
		case "vertical": return r;
		default: return n || r;
	}
};
function $v({ enabled: e = !0, axis: t = "both" } = {}) {
	let [n, r] = K(null), i = G(null), [a, o] = K(!1), s = G(!1), c = H((n = i.current) => {
		let r = e && n ? Qv({
			axis: t,
			element: n
		}) : !1;
		return s.current !== r && (s.current = r, o(r)), r;
	}, [t, e]), l = H((e) => {
		i.current = e, r(e), c(e);
	}, [c]);
	return Ge(() => {
		if (!e || !n || typeof window > "u") return;
		let t = () => {
			c(n);
		};
		return window.addEventListener("resize", t), () => {
			window.removeEventListener("resize", t);
		};
	}, [
		n,
		e,
		c
	]), Ge(() => {
		if (!e || !n || typeof ResizeObserver != "function") return;
		let t = new ResizeObserver(() => {
			c(n);
		});
		return t.observe(n), () => {
			t.disconnect();
		};
	}, [
		n,
		e,
		c
	]), {
		element: n,
		isOverflowed: a,
		registerElement: l,
		syncOverflow: c
	};
}
//#endregion
//#region ../ui/src/lib/Toolbar.tsx
var ey = {
	xl: {
		gap: "gap-4",
		columnGap: "gap-1.5",
		headlineRowGap: "gap-3",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-4",
		leadingVisualClassName: "self-center h-16 w-16",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-3xl font-medium leading-tight text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
		subheaderClassName: "text-base leading-tight text-[var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))]",
		padding: {
			top: "pt-4",
			right: "pr-6",
			bottom: "pb-4",
			left: "pl-6"
		}
	},
	lg: {
		gap: "gap-3",
		columnGap: "gap-1",
		headlineRowGap: "gap-2",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-14 w-14",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-2xl font-medium leading-tight text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))]",
		padding: {
			top: "pt-3",
			right: "pr-4",
			bottom: "pb-3",
			left: "pl-4"
		}
	},
	md: {
		gap: "gap-2",
		columnGap: "gap-0.5",
		headlineRowGap: "gap-2",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-12 w-12",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-xl font-medium leading-tight text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))]",
		padding: {
			top: "pt-3",
			right: "pr-4",
			bottom: "pb-3",
			left: "pl-4"
		}
	},
	sm: {
		gap: "gap-2",
		columnGap: "gap-[0.1875rem]",
		headlineRowGap: "gap-1.5",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-10 w-10",
		actionsGap: "gap-1.5",
		secondaryActionsGap: "gap-1.5",
		headlineClassName: "text-lg font-medium leading-tight text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))]",
		padding: {
			top: "pt-2.5",
			right: "pr-2.5",
			bottom: "pb-2.5",
			left: "pl-2.5"
		}
	},
	xs: {
		gap: "gap-1.5",
		columnGap: "gap-0",
		headlineRowGap: "gap-1",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-9 w-9",
		actionsGap: "gap-1",
		secondaryActionsGap: "gap-1",
		headlineClassName: "text-base font-medium leading-tight text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
		subheaderClassName: "text-xs leading-tight text-[var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))]",
		padding: {
			top: "pt-2",
			right: "pr-2.5",
			bottom: "pb-2",
			left: "pl-2.5"
		}
	}
}, ty = {
	solid: "bg-[var(--pc-color-toolbar-background,var(--pc-color-surface))] text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
	ghost: "bg-transparent text-[var(--pc-color-toolbar-text,var(--pc-color-text))]",
	outline: Y("border border-[var(--pc-color-toolbar-border,var(--pc-color-border))]", "bg-[var(--pc-color-toolbar-background,var(--pc-color-outline-surface,transparent))]", "text-[var(--pc-color-toolbar-text,var(--pc-color-text))]"),
	muted: "bg-[var(--pc-color-toolbar-background-muted,var(--pc-color-surface-weakest))] text-[var(--pc-color-toolbar-text,var(--pc-color-text))]"
}, ny = "border-b border-[var(--pc-color-toolbar-border,var(--pc-color-border))]", ry = {
	xl: "xl",
	lg: "lg",
	md: "md",
	sm: "sm",
	xs: "xs"
}, iy = {
	n: { top: !0 },
	ne: {
		top: !0,
		right: !0
	},
	e: { right: !0 },
	se: {
		right: !0,
		bottom: !0
	},
	s: { bottom: !0 },
	sw: {
		bottom: !0,
		left: !0
	},
	w: { left: !0 },
	nw: {
		top: !0,
		left: !0
	},
	c: {}
}, ay = {
	top: !1,
	right: !1,
	bottom: !1,
	left: !1
}, oy = (e) => ry[e], sy = (e) => Array.isArray(e), cy = (e) => e === !0 ? {
	top: !0,
	right: !0,
	bottom: !0,
	left: !0
} : !sy(e) || e.length === 0 ? ay : e.reduce((e, t) => {
	let n = iy[t];
	return {
		top: e.top || !!n.top,
		right: e.right || !!n.right,
		bottom: e.bottom || !!n.bottom,
		left: e.left || !!n.left
	};
}, ay), ly = (e, t) => {
	let n = cy(t);
	return Y(n.top ? "pt-0" : e.padding.top, n.right ? "pr-0" : e.padding.right, n.bottom ? "pb-0" : e.padding.bottom, n.left ? "pl-0" : e.padding.left);
}, uy = (e) => {
	let t = 0, n = (e) => {
		let r = Fe.toArray(e);
		return r.length !== 0 && r.every((e) => {
			if (typeof e == "boolean") return !0;
			if (typeof e == "string" || typeof e == "number") return String(e).trim().length === 0;
			if (!Ue(e)) return !1;
			let r = e.props;
			return r.iconOnly === !0 || r["data-icon-only"] === !0 || r["data-icon-only"] === "true" ? (t += 1, !0) : "children" in r && n(r.children);
		});
	};
	return n(e) && t > 0 ? t : null;
};
function dy({ className: e, container: t = !0, leadingClassName: n, leadingVisual: r, leadingVisualClassName: i, leadingContentClassName: o, headline: s, headlineId: c, headlineClassName: l, headlineRowClassName: u, subheader: d, subheaderId: f, subheaderClassName: p, startActions: m, actions: h, actionsClassName: g, secondaryActions: _, secondaryActionsClassName: v, secondaryActionsPlacement: y = "default", inlineActionsClassName: b, size: x = "lg", variant: S = "default", appearance: C = "ghost", flush: w = !1, divider: T = !1, as: E = "header", actionsAlign: D = "centre", wrapActions: O = !1, headlineTooltip: k }) {
	let A = ey[x], j = Ev(S), M = k?.showWhenOverflowed === !0, { isOverflowed: N, registerElement: P, syncOverflow: F } = $v({
		enabled: M,
		axis: "horizontal"
	}), I = H((e) => {
		F(e.currentTarget);
	}, [F]), ee = H((e) => {
		F(e.currentTarget);
	}, [F]), te = H((e) => {
		F(e.currentTarget);
	}, [F]), ne = W(() => {
		if (!s) return null;
		let e = Q(A.headlineClassName, "inline-block max-w-full align-top", M && "truncate", l);
		return /* @__PURE__ */ q("h2", {
			id: c,
			ref: P,
			className: e,
			onMouseEnter: I,
			onMouseMove: ee,
			onFocus: te,
			children: s
		});
	}, [
		te,
		I,
		ee,
		s,
		l,
		c,
		P,
		M,
		A.headlineClassName
	]), re = W(() => {
		if (d == null) return null;
		let e = Q(A.subheaderClassName, p);
		return q(typeof d == "string" || typeof d == "number" ? "p" : "div", {
			id: f,
			className: e,
			children: d
		});
	}, [
		A.subheaderClassName,
		d,
		p,
		f
	]), L = k?.label ?? (typeof s == "string" || typeof s == "number" ? String(s) : void 0), R = !!(k && ne), z = !L || M && !N, ie = R && ne ? /* @__PURE__ */ q(I_, {
		label: L,
		placement: k?.placement,
		positionMode: k?.positionMode,
		offset: k?.offset,
		disabled: z,
		children: ne
	}) : ne, ae = !!ne, oe = !!re, se = !!r, ce = !!m, le = uy(h), B = x === "xs" && ae && le !== null && le > 1, ue = B ? h : null, de = ae || ce, fe = !!_, pe = fe && y === "top", me = !!h && !B, he = de || oe || fe && !pe, ge = se || he, _e;
	ge && (_e = D === "centre" ? "self-center" : "self-start");
	let ve = fe ? /* @__PURE__ */ q("div", {
		"data-slot": "toolbar-secondary-actions",
		className: Y("flex min-w-0 flex-wrap items-center", A.secondaryActionsGap, v),
		children: _
	}) : null, ye = ge ? /* @__PURE__ */ J("div", {
		"data-slot": "toolbar-leading",
		className: Q("min-w-0 flex", se ? "items-stretch" : "flex-col", se ? A.leadingVisualGap : A.columnGap, n),
		children: [se ? /* @__PURE__ */ q("div", {
			"data-slot": "toolbar-leading-visual",
			className: Q("flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--pc-radius)]", "text-[var(--pc-color-toolbar-text,var(--pc-color-text))]", "[&_img]:h-full [&_img]:w-full [&_img]:object-contain", "[&_svg]:h-full [&_svg]:w-full", A.leadingVisualClassName, i),
			children: r
		}) : null, he ? /* @__PURE__ */ J("div", {
			"data-slot": "toolbar-leading-content",
			className: Q("min-w-0 flex flex-1 flex-col", se && "justify-center", A.columnGap, o),
			children: [
				de ? /* @__PURE__ */ J("div", {
					"data-slot": "toolbar-headline-row",
					className: Y("flex min-w-0 items-center", ae && (ce || B) ? "flex-nowrap" : "flex-wrap", A.headlineRowGap, u),
					children: [
						ae ? /* @__PURE__ */ q("div", {
							"data-slot": "toolbar-headline-content",
							className: Y("max-w-full min-w-0", !ce && !B && "flex-1"),
							children: ie
						}) : null,
						m,
						ue ? /* @__PURE__ */ q("div", {
							"data-slot": "toolbar-inline-actions",
							className: Y("flex shrink-0 items-center", A.inlineActionsOffset, A.actionsGap, b),
							children: ue
						}) : null
					]
				}) : null,
				oe ? /* @__PURE__ */ q("div", {
					"data-slot": "toolbar-subheader",
					className: "min-w-0",
					children: re
				}) : null,
				fe && !pe ? ve : null
			]
		}) : null]
	}) : null, be = me ? /* @__PURE__ */ q("div", {
		"data-slot": "toolbar-actions",
		className: Y("flex min-w-0 max-w-full items-center overflow-visible", O ? "flex-wrap justify-self-start @lg:justify-self-end" : "justify-self-end", A.actionsGap, _e, g),
		children: h
	}) : null, xe = ge && me ? /* @__PURE__ */ J("div", {
		"data-slot": "toolbar-layout",
		className: Y("grid", O ? "grid-cols-1 @lg:grid-cols-[minmax(0,1fr)_fit-content(100%)]" : "grid-cols-[minmax(0,1fr)_fit-content(100%)]", D === "centre" ? "items-center" : "items-start", "gap-2"),
		children: [ye, be]
	}) : ge ? ye : me ? /* @__PURE__ */ q("div", {
		"data-slot": "toolbar-layout",
		className: "flex justify-end",
		children: be
	}) : null, Se = pe ? /* @__PURE__ */ J(Ze, { children: [ve, xe] }) : xe;
	return /* @__PURE__ */ q(E, {
		"data-slot": "toolbar",
		"data-theme": j,
		className: Y((t || O) && "@container", "min-w-0", "flex flex-col", a("toolbar"), "text-[var(--pc-color-toolbar-text,var(--pc-color-text))]", ty[C], A.gap, ly(A, w), T && ny, e),
		children: Se
	});
}
//#endregion
//#region ../ui/src/assets/logo.svg
var fy = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20108.75%2068.92'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3cpath%20d='M73.32,0h29.73c3.15,0,5.7,2.65,5.7,5.92v57.09c0,3.27-2.55,5.92-5.7,5.92h-29.73c-3.15,0-5.7-2.65-5.7-5.92V5.92c0-3.27,2.55-5.92,5.7-5.92Z'%20fill='none'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cpath%20d='M5.86,0h55.89c3.24,0,5.86,2.68,5.86,5.98v56.96c0,3.3-2.63,5.98-5.86,5.98H5.86c-3.24,0-5.86-2.68-5.86-5.98V5.98C0,2.68,2.63,0,5.86,0Z'%20fill='none'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clippath)'%3e%3cg%3e%3cpath%20d='M101.79,68.31V0h6.83v68.31h-6.83Z'%20fill='%23021715'%20/%3e%3cpath%20d='M94.95,68.31V0h5.69v68.31h-5.69Z'%20fill='%23021715'%20/%3e%3cpath%20d='M92.68,68.31h-3.99V0h3.99'%20fill='%23021715'%20/%3e%3cpath%20d='M81.29,68.31V0h2.85v68.31h-2.85Z'%20fill='%23021715'%20/%3e%3cpath%20d='M74.45,68.31V0h1.71v68.31h-1.71Z'%20fill='%23021715'%20/%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clippath-1)'%3e%3cg%3e%3cpath%20d='M60.18,68.31V0h7.36v68.31h-7.36Z'%20fill='%23021715'%20/%3e%3cpath%20d='M51.49,68.31V0h6.69v68.31h-6.69Z'%20fill='%23021715'%20/%3e%3cpath%20d='M43.46,68.31V0h5.35v68.31h-5.35Z'%20fill='%23021715'%20/%3e%3cpath%20d='M34.77,68.31V0h4.68v68.31h-4.68Z'%20fill='%23021715'%20/%3e%3cpath%20d='M26.08,68.31V0h3.34v68.31h-3.34Z'%20fill='%23021715'%20/%3e%3cpath%20d='M17.39,68.31V0h2.67v68.31h-2.67Z'%20fill='%23021715'%20/%3e%3cpath%20d='M8.69,68.31V0h2.01v68.31h-2.01Z'%20fill='%23021715'%20/%3e%3cpath%20d='M0,68.31V0h.67v68.31h-.67Z'%20fill='%23021715'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", py = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20108.75%2068.92'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3cpath%20d='M73.32,0h29.73c3.15,0,5.7,2.65,5.7,5.92v57.09c0,3.27-2.55,5.92-5.7,5.92h-29.73c-3.15,0-5.7-2.65-5.7-5.92V5.92c0-3.27,2.55-5.92,5.7-5.92Z'%20fill='none'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cpath%20d='M5.86,0h55.89c3.24,0,5.86,2.68,5.86,5.98v56.96c0,3.3-2.63,5.98-5.86,5.98H5.86c-3.24,0-5.86-2.68-5.86-5.98V5.98C0,2.68,2.63,0,5.86,0Z'%20fill='none'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clippath)'%3e%3cg%3e%3cpath%20d='M101.79,68.31V0h6.83v68.31h-6.83Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M94.95,68.31V0h5.69v68.31h-5.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M92.68,68.31h-3.99V0h3.99'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M81.29,68.31V0h2.85v68.31h-2.85Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M74.45,68.31V0h1.71v68.31h-1.71Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clippath-1)'%3e%3cg%3e%3cpath%20d='M60.18,68.31V0h7.36v68.31h-7.36Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M51.49,68.31V0h6.69v68.31h-6.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M43.46,68.31V0h5.35v68.31h-5.35Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M34.77,68.31V0h4.68v68.31h-4.68Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M26.08,68.31V0h3.34v68.31h-3.34Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M17.39,68.31V0h2.67v68.31h-2.67Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M8.69,68.31V0h2.01v68.31h-2.01Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M0,68.31V0h.67v68.31h-.67Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", my = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%20-17.57%20592.85%20104.51'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3cpath%20d='M73.32,0h29.73c3.15,0,5.7,2.65,5.7,5.92v57.09c0,3.27-2.55,5.92-5.7,5.92h-29.73c-3.15,0-5.7-2.65-5.7-5.92V5.92c0-3.27,2.55-5.92,5.7-5.92Z'%20fill='none'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cpath%20d='M5.86,0h55.89c3.24,0,5.86,2.68,5.86,5.98v56.96c0,3.3-2.63,5.98-5.86,5.98H5.86c-3.24,0-5.86-2.68-5.86-5.98V5.98C0,2.68,2.63,0,5.86,0Z'%20fill='none'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%3e%3cpath%20d='M128.98,67.66V1.44h12.85v66.22h-12.85ZM140.03,47.48v-11.08h12.85c2.53,0,4.69-.51,6.47-1.53,1.78-1.02,3.15-2.43,4.12-4.23.96-1.8,1.45-3.84,1.45-6.13,0-2.4-.48-4.5-1.45-6.31-.97-1.8-2.34-3.2-4.12-4.19-1.78-.99-3.94-1.49-6.47-1.49h-12.85V1.44h11.77c5.55,0,10.27.9,14.17,2.7,3.89,1.8,6.86,4.37,8.92,7.7,2.05,3.33,3.08,7.31,3.08,11.94v1.44c0,4.5-1.03,8.44-3.08,11.8-2.05,3.36-5.02,5.95-8.92,7.75-3.89,1.8-8.62,2.7-14.17,2.7h-11.77Z'%20fill='%23021715'%20/%3e%3cpath%20d='M195.43,68.92c-3.56,0-6.67-.63-9.32-1.89-2.66-1.26-4.72-3.06-6.2-5.41-1.48-2.34-2.22-5.16-2.22-8.47,0-3.6.88-6.55,2.63-8.83,1.75-2.28,4.26-3.99,7.51-5.13,3.26-1.14,7.06-1.71,11.41-1.71h11.31v7.57h-11.5c-2.9,0-5.12.69-6.65,2.07-1.54,1.38-2.31,3.18-2.31,5.41s.77,4.02,2.31,5.41c1.54,1.38,3.76,2.07,6.65,2.07,1.75,0,3.36-.32,4.84-.94,1.48-.63,2.7-1.71,3.67-3.24.96-1.53,1.51-3.62,1.63-6.26l3.08,3.51c-.3,3.42-1.13,6.31-2.49,8.65s-3.23,4.13-5.61,5.36c-2.38,1.23-5.3,1.85-8.74,1.85ZM211.27,67.66v-14.5h-2.08v-16.13c0-2.76-.69-4.85-2.08-6.26-1.39-1.41-3.5-2.12-6.34-2.12-1.51,0-3.32.03-5.43.09-2.11.06-4.24.13-6.38.23-2.14.09-4.06.2-5.75.32v-10.63c1.39-.12,2.94-.24,4.66-.36,1.72-.12,3.51-.19,5.39-.23,1.87-.03,3.62-.05,5.25-.05,5.07,0,9.28.66,12.63,1.98,3.35,1.32,5.88,3.41,7.6,6.26,1.72,2.85,2.58,6.56,2.58,11.13v30.27h-10.05Z'%20fill='%23021715'%20/%3e%3cpath%20d='M238.82,66.58l-15.93-47.84h12.67l15.12,47.84h-11.86ZM227.78,86.94v-10.72h9.23c1.75,0,3.21-.23,4.39-.68s2.16-1.17,2.94-2.16c.78-.99,1.39-2.36,1.81-4.1l13.22-50.54h12.04l-14.57,53.24c-.97,3.66-2.32,6.59-4.07,8.78-1.75,2.19-4,3.77-6.74,4.73-2.75.96-6.14,1.44-10.18,1.44h-8.06ZM243.08,66.58v-9.91h10.5v9.91h-10.5Z'%20fill='%23021715'%20/%3e%3cpath%20d='M306.73,69.37c-6.03,0-11.18-1.04-15.43-3.11-4.25-2.07-7.72-4.8-10.41-8.2-2.69-3.39-4.66-7.06-5.93-10.99-1.27-3.93-1.9-7.76-1.9-11.49v-1.98c0-4.08.65-8.11,1.95-12.07,1.3-3.96,3.29-7.57,5.97-10.81,2.68-3.24,6.12-5.84,10.32-7.79,4.19-1.95,9.16-2.93,14.89-2.93s11.19,1.08,15.66,3.24c4.47,2.16,8.03,5.17,10.68,9.01,2.65,3.84,4.25,8.35,4.8,13.51h-13.03c-.42-3-1.46-5.52-3.12-7.57-1.66-2.04-3.77-3.6-6.34-4.68-2.57-1.08-5.45-1.62-8.64-1.62s-6.07.57-8.6,1.71c-2.53,1.14-4.65,2.73-6.34,4.77-1.69,2.04-2.97,4.45-3.85,7.21-.88,2.76-1.31,5.8-1.31,9.1s.44,6.25,1.31,9.01c.88,2.76,2.19,5.18,3.94,7.25,1.75,2.07,3.91,3.68,6.47,4.82,2.56,1.14,5.54,1.71,8.92,1.71,4.95,0,9.11-1.22,12.49-3.65,3.38-2.43,5.43-5.84,6.16-10.23h13.04c-.6,4.68-2.2,8.98-4.8,12.88-2.6,3.91-6.16,7.03-10.68,9.37-4.53,2.34-9.93,3.51-16.2,3.51Z'%20fill='%23021715'%20/%3e%3cpath%20d='M368.45,69.37c-4.35,0-8.18-.69-11.5-2.07-3.32-1.38-6.13-3.24-8.42-5.59-2.29-2.34-4.03-5.01-5.21-8.02-1.18-3-1.76-6.16-1.76-9.46v-1.89c0-3.36.6-6.56,1.81-9.59,1.21-3.03,2.97-5.73,5.3-8.11,2.32-2.37,5.16-4.23,8.51-5.59,3.35-1.35,7.11-2.03,11.27-2.03s7.9.68,11.22,2.03c3.32,1.35,6.14,3.21,8.46,5.59,2.32,2.37,4.09,5.08,5.3,8.11,1.21,3.03,1.81,6.23,1.81,9.59v1.89c0,3.3-.59,6.46-1.77,9.46-1.18,3-2.91,5.68-5.2,8.02-2.29,2.34-5.1,4.2-8.42,5.59-3.32,1.38-7.12,2.07-11.41,2.07ZM368.45,58.65c3.02,0,5.58-.68,7.69-2.03,2.11-1.35,3.73-3.18,4.84-5.5,1.12-2.31,1.68-4.94,1.68-7.88s-.57-5.58-1.72-7.93c-1.15-2.34-2.78-4.19-4.89-5.54-2.11-1.35-4.65-2.03-7.6-2.03s-5.51.68-7.65,2.03c-2.14,1.35-3.79,3.2-4.93,5.54-1.15,2.34-1.72,4.99-1.72,7.93s.56,5.57,1.68,7.88c1.12,2.31,2.73,4.14,4.84,5.5,2.11,1.35,4.71,2.03,7.79,2.03Z'%20fill='%23021715'%20/%3e%3cpath%20d='M401.66,67.66V18.74h9.96v20.99h-.9c0-4.98.66-9.14,1.99-12.48,1.33-3.33,3.3-5.84,5.93-7.52,2.63-1.68,5.9-2.52,9.82-2.52h.54c5.85,0,10.29,1.88,13.31,5.63,3.02,3.75,4.53,9.35,4.53,16.8v28.02h-12.58v-29.1c0-3-.88-5.43-2.63-7.3-1.75-1.86-4.1-2.79-7.06-2.79s-5.57.96-7.47,2.88c-1.9,1.92-2.85,4.45-2.85,7.57v28.74h-12.58Z'%20fill='%23021715'%20/%3e%3cpath%20d='M449.26,27.93v-9.19h34.76v9.19h-34.76ZM476.96,68.29c-4.59,0-8.34-.58-11.27-1.76-2.93-1.17-5.1-3.15-6.52-5.95-1.42-2.79-2.13-6.56-2.13-11.31V4.96h11.86l-.09,45.14c0,2.4.65,4.25,1.95,5.54,1.3,1.29,3.15,1.94,5.57,1.94h7.7v10.72h-7.06Z'%20fill='%23021715'%20/%3e%3cpath%20d='M490.01,67.66V18.74h9.96v20.72h-.27c0-6.97,1.51-12.27,4.53-15.9,3.02-3.63,7.45-5.45,13.31-5.45h1.81v10.9h-3.44c-4.23,0-7.5,1.14-9.82,3.42-2.32,2.28-3.49,5.56-3.49,9.82v25.41h-12.58Z'%20fill='%23021715'%20/%3e%3cpath%20d='M547.05,69.37c-4.35,0-8.18-.69-11.5-2.07-3.32-1.38-6.13-3.24-8.42-5.59-2.29-2.34-4.03-5.01-5.21-8.02-1.18-3-1.76-6.16-1.76-9.46v-1.89c0-3.36.6-6.56,1.81-9.59,1.21-3.03,2.97-5.73,5.3-8.11,2.32-2.37,5.16-4.23,8.51-5.59,3.35-1.35,7.11-2.03,11.27-2.03s7.9.68,11.22,2.03c3.32,1.35,6.14,3.21,8.46,5.59,2.32,2.37,4.09,5.08,5.3,8.11,1.21,3.03,1.81,6.23,1.81,9.59v1.89c0,3.3-.59,6.46-1.77,9.46-1.18,3-2.91,5.68-5.2,8.02-2.29,2.34-5.1,4.2-8.42,5.59-3.32,1.38-7.12,2.07-11.41,2.07ZM547.05,58.65c3.02,0,5.58-.68,7.69-2.03,2.11-1.35,3.73-3.18,4.84-5.5,1.12-2.31,1.68-4.94,1.68-7.88s-.57-5.58-1.72-7.93c-1.15-2.34-2.78-4.19-4.89-5.54-2.11-1.35-4.65-2.03-7.6-2.03s-5.51.68-7.65,2.03c-2.14,1.35-3.79,3.2-4.93,5.54-1.15,2.34-1.72,4.99-1.72,7.93s.56,5.57,1.68,7.88c1.12,2.31,2.73,4.14,4.84,5.5,2.11,1.35,4.71,2.03,7.79,2.03Z'%20fill='%23021715'%20/%3e%3cpath%20d='M574.11,11.26V1.89h18.74v9.37h-18.74ZM580.27,67.66V1.89h12.58v65.77h-12.58Z'%20fill='%23021715'%20/%3e%3c/g%3e%3cg%20clip-path='url(%23clippath)'%3e%3cg%3e%3cpath%20d='M101.79,68.31V0h6.83v68.31h-6.83Z'%20fill='%23021715'%20/%3e%3cpath%20d='M94.95,68.31V0h5.69v68.31h-5.69Z'%20fill='%23021715'%20/%3e%3cpath%20d='M92.68,68.31h-3.99V0h3.99'%20fill='%23021715'%20/%3e%3cpath%20d='M81.29,68.31V0h2.85v68.31h-2.85Z'%20fill='%23021715'%20/%3e%3cpath%20d='M74.45,68.31V0h1.71v68.31h-1.71Z'%20fill='%23021715'%20/%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clippath-1)'%3e%3cg%3e%3cpath%20d='M60.18,68.31V0h7.36v68.31h-7.36Z'%20fill='%23021715'%20/%3e%3cpath%20d='M51.49,68.31V0h6.69v68.31h-6.69Z'%20fill='%23021715'%20/%3e%3cpath%20d='M43.46,68.31V0h5.35v68.31h-5.35Z'%20fill='%23021715'%20/%3e%3cpath%20d='M34.77,68.31V0h4.68v68.31h-4.68Z'%20fill='%23021715'%20/%3e%3cpath%20d='M26.08,68.31V0h3.34v68.31h-3.34Z'%20fill='%23021715'%20/%3e%3cpath%20d='M17.39,68.31V0h2.67v68.31h-2.67Z'%20fill='%23021715'%20/%3e%3cpath%20d='M8.69,68.31V0h2.01v68.31h-2.01Z'%20fill='%23021715'%20/%3e%3cpath%20d='M0,68.31V0h.67v68.31h-.67Z'%20fill='%23021715'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", hy = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%20-17.57%20592.85%20104.51'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3cpath%20d='M73.32,0h29.73c3.15,0,5.7,2.65,5.7,5.92v57.09c0,3.27-2.55,5.92-5.7,5.92h-29.73c-3.15,0-5.7-2.65-5.7-5.92V5.92c0-3.27,2.55-5.92,5.7-5.92Z'%20fill='none'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cpath%20d='M5.86,0h55.89c3.24,0,5.86,2.68,5.86,5.98v56.96c0,3.3-2.63,5.98-5.86,5.98H5.86c-3.24,0-5.86-2.68-5.86-5.98V5.98C0,2.68,2.63,0,5.86,0Z'%20fill='none'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%3e%3cpath%20d='M128.98,67.66V1.44h12.85v66.22h-12.85ZM140.03,47.48v-11.08h12.85c2.53,0,4.69-.51,6.47-1.53,1.78-1.02,3.15-2.43,4.12-4.23.96-1.8,1.45-3.84,1.45-6.13,0-2.4-.48-4.5-1.45-6.31-.97-1.8-2.34-3.2-4.12-4.19-1.78-.99-3.94-1.49-6.47-1.49h-12.85V1.44h11.77c5.55,0,10.27.9,14.17,2.7,3.89,1.8,6.86,4.37,8.92,7.7,2.05,3.33,3.08,7.31,3.08,11.94v1.44c0,4.5-1.03,8.44-3.08,11.8-2.05,3.36-5.02,5.95-8.92,7.75-3.89,1.8-8.62,2.7-14.17,2.7h-11.77Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M195.43,68.92c-3.56,0-6.67-.63-9.32-1.89-2.66-1.26-4.72-3.06-6.2-5.41-1.48-2.34-2.22-5.16-2.22-8.47,0-3.6.88-6.55,2.63-8.83,1.75-2.28,4.26-3.99,7.51-5.13,3.26-1.14,7.06-1.71,11.41-1.71h11.31v7.57h-11.5c-2.9,0-5.12.69-6.65,2.07-1.54,1.38-2.31,3.18-2.31,5.41s.77,4.02,2.31,5.41c1.54,1.38,3.76,2.07,6.65,2.07,1.75,0,3.36-.32,4.84-.94,1.48-.63,2.7-1.71,3.67-3.24.96-1.53,1.51-3.62,1.63-6.26l3.08,3.51c-.3,3.42-1.13,6.31-2.49,8.65s-3.23,4.13-5.61,5.36c-2.38,1.23-5.3,1.85-8.74,1.85ZM211.27,67.66v-14.5h-2.08v-16.13c0-2.76-.69-4.85-2.08-6.26-1.39-1.41-3.5-2.12-6.34-2.12-1.51,0-3.32.03-5.43.09-2.11.06-4.24.13-6.38.23-2.14.09-4.06.2-5.75.32v-10.63c1.39-.12,2.94-.24,4.66-.36,1.72-.12,3.51-.19,5.39-.23,1.87-.03,3.62-.05,5.25-.05,5.07,0,9.28.66,12.63,1.98,3.35,1.32,5.88,3.41,7.6,6.26,1.72,2.85,2.58,6.56,2.58,11.13v30.27h-10.05Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M238.82,66.58l-15.93-47.84h12.67l15.12,47.84h-11.86ZM227.78,86.94v-10.72h9.23c1.75,0,3.21-.23,4.39-.68s2.16-1.17,2.94-2.16c.78-.99,1.39-2.36,1.81-4.1l13.22-50.54h12.04l-14.57,53.24c-.97,3.66-2.32,6.59-4.07,8.78-1.75,2.19-4,3.77-6.74,4.73-2.75.96-6.14,1.44-10.18,1.44h-8.06ZM243.08,66.58v-9.91h10.5v9.91h-10.5Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M306.73,69.37c-6.03,0-11.18-1.04-15.43-3.11-4.25-2.07-7.72-4.8-10.41-8.2-2.69-3.39-4.66-7.06-5.93-10.99-1.27-3.93-1.9-7.76-1.9-11.49v-1.98c0-4.08.65-8.11,1.95-12.07,1.3-3.96,3.29-7.57,5.97-10.81,2.68-3.24,6.12-5.84,10.32-7.79,4.19-1.95,9.16-2.93,14.89-2.93s11.19,1.08,15.66,3.24c4.47,2.16,8.03,5.17,10.68,9.01,2.65,3.84,4.25,8.35,4.8,13.51h-13.03c-.42-3-1.46-5.52-3.12-7.57-1.66-2.04-3.77-3.6-6.34-4.68-2.57-1.08-5.45-1.62-8.64-1.62s-6.07.57-8.6,1.71c-2.53,1.14-4.65,2.73-6.34,4.77-1.69,2.04-2.97,4.45-3.85,7.21-.88,2.76-1.31,5.8-1.31,9.1s.44,6.25,1.31,9.01c.88,2.76,2.19,5.18,3.94,7.25,1.75,2.07,3.91,3.68,6.47,4.82,2.56,1.14,5.54,1.71,8.92,1.71,4.95,0,9.11-1.22,12.49-3.65,3.38-2.43,5.43-5.84,6.16-10.23h13.04c-.6,4.68-2.2,8.98-4.8,12.88-2.6,3.91-6.16,7.03-10.68,9.37-4.53,2.34-9.93,3.51-16.2,3.51Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M368.45,69.37c-4.35,0-8.18-.69-11.5-2.07-3.32-1.38-6.13-3.24-8.42-5.59-2.29-2.34-4.03-5.01-5.21-8.02-1.18-3-1.76-6.16-1.76-9.46v-1.89c0-3.36.6-6.56,1.81-9.59,1.21-3.03,2.97-5.73,5.3-8.11,2.32-2.37,5.16-4.23,8.51-5.59,3.35-1.35,7.11-2.03,11.27-2.03s7.9.68,11.22,2.03c3.32,1.35,6.14,3.21,8.46,5.59,2.32,2.37,4.09,5.08,5.3,8.11,1.21,3.03,1.81,6.23,1.81,9.59v1.89c0,3.3-.59,6.46-1.77,9.46-1.18,3-2.91,5.68-5.2,8.02-2.29,2.34-5.1,4.2-8.42,5.59-3.32,1.38-7.12,2.07-11.41,2.07ZM368.45,58.65c3.02,0,5.58-.68,7.69-2.03,2.11-1.35,3.73-3.18,4.84-5.5,1.12-2.31,1.68-4.94,1.68-7.88s-.57-5.58-1.72-7.93c-1.15-2.34-2.78-4.19-4.89-5.54-2.11-1.35-4.65-2.03-7.6-2.03s-5.51.68-7.65,2.03c-2.14,1.35-3.79,3.2-4.93,5.54-1.15,2.34-1.72,4.99-1.72,7.93s.56,5.57,1.68,7.88c1.12,2.31,2.73,4.14,4.84,5.5,2.11,1.35,4.71,2.03,7.79,2.03Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M401.66,67.66V18.74h9.96v20.99h-.9c0-4.98.66-9.14,1.99-12.48,1.33-3.33,3.3-5.84,5.93-7.52,2.63-1.68,5.9-2.52,9.82-2.52h.54c5.85,0,10.29,1.88,13.31,5.63,3.02,3.75,4.53,9.35,4.53,16.8v28.02h-12.58v-29.1c0-3-.88-5.43-2.63-7.3-1.75-1.86-4.1-2.79-7.06-2.79s-5.57.96-7.47,2.88c-1.9,1.92-2.85,4.45-2.85,7.57v28.74h-12.58Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M449.26,27.93v-9.19h34.76v9.19h-34.76ZM476.96,68.29c-4.59,0-8.34-.58-11.27-1.76-2.93-1.17-5.1-3.15-6.52-5.95-1.42-2.79-2.13-6.56-2.13-11.31V4.96h11.86l-.09,45.14c0,2.4.65,4.25,1.95,5.54,1.3,1.29,3.15,1.94,5.57,1.94h7.7v10.72h-7.06Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M490.01,67.66V18.74h9.96v20.72h-.27c0-6.97,1.51-12.27,4.53-15.9,3.02-3.63,7.45-5.45,13.31-5.45h1.81v10.9h-3.44c-4.23,0-7.5,1.14-9.82,3.42-2.32,2.28-3.49,5.56-3.49,9.82v25.41h-12.58Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M547.05,69.37c-4.35,0-8.18-.69-11.5-2.07-3.32-1.38-6.13-3.24-8.42-5.59-2.29-2.34-4.03-5.01-5.21-8.02-1.18-3-1.76-6.16-1.76-9.46v-1.89c0-3.36.6-6.56,1.81-9.59,1.21-3.03,2.97-5.73,5.3-8.11,2.32-2.37,5.16-4.23,8.51-5.59,3.35-1.35,7.11-2.03,11.27-2.03s7.9.68,11.22,2.03c3.32,1.35,6.14,3.21,8.46,5.59,2.32,2.37,4.09,5.08,5.3,8.11,1.21,3.03,1.81,6.23,1.81,9.59v1.89c0,3.3-.59,6.46-1.77,9.46-1.18,3-2.91,5.68-5.2,8.02-2.29,2.34-5.1,4.2-8.42,5.59-3.32,1.38-7.12,2.07-11.41,2.07ZM547.05,58.65c3.02,0,5.58-.68,7.69-2.03,2.11-1.35,3.73-3.18,4.84-5.5,1.12-2.31,1.68-4.94,1.68-7.88s-.57-5.58-1.72-7.93c-1.15-2.34-2.78-4.19-4.89-5.54-2.11-1.35-4.65-2.03-7.6-2.03s-5.51.68-7.65,2.03c-2.14,1.35-3.79,3.2-4.93,5.54-1.15,2.34-1.72,4.99-1.72,7.93s.56,5.57,1.68,7.88c1.12,2.31,2.73,4.14,4.84,5.5,2.11,1.35,4.71,2.03,7.79,2.03Z'%20fill='%23ffffff'%20/%3e%3cpath%20d='M574.11,11.26V1.89h18.74v9.37h-18.74ZM580.27,67.66V1.89h12.58v65.77h-12.58Z'%20fill='%23ffffff'%20/%3e%3c/g%3e%3cg%20clip-path='url(%23clippath)'%3e%3cg%3e%3cpath%20d='M101.79,68.31V0h6.83v68.31h-6.83Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M94.95,68.31V0h5.69v68.31h-5.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M92.68,68.31h-3.99V0h3.99'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M81.29,68.31V0h2.85v68.31h-2.85Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M74.45,68.31V0h1.71v68.31h-1.71Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clippath-1)'%3e%3cg%3e%3cpath%20d='M60.18,68.31V0h7.36v68.31h-7.36Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M51.49,68.31V0h6.69v68.31h-6.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M43.46,68.31V0h5.35v68.31h-5.35Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M34.77,68.31V0h4.68v68.31h-4.68Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M26.08,68.31V0h3.34v68.31h-3.34Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M17.39,68.31V0h2.67v68.31h-2.67Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M8.69,68.31V0h2.01v68.31h-2.01Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M0,68.31V0h.67v68.31h-.67Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", gy = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20144%20144'%3e%3crect%20width='144'%20height='144'%20rx='24'%20fill='%23021715'%20/%3e%3csvg%20viewBox='0%200%20108.75%2068.92'%20x='12'%20y='34'%20width='120'%20height='76'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3cpath%20d='M73.32,0h29.73c3.15,0,5.7,2.65,5.7,5.92v57.09c0,3.27-2.55,5.92-5.7,5.92h-29.73c-3.15,0-5.7-2.65-5.7-5.92V5.92c0-3.27,2.55-5.92,5.7-5.92Z'%20fill='none'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3cpath%20d='M5.86,0h55.89c3.24,0,5.86,2.68,5.86,5.98v56.96c0,3.3-2.63,5.98-5.86,5.98H5.86c-3.24,0-5.86-2.68-5.86-5.98V5.98C0,2.68,2.63,0,5.86,0Z'%20fill='none'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clippath)'%3e%3cg%3e%3cpath%20d='M101.79,68.31V0h6.83v68.31h-6.83Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M94.95,68.31V0h5.69v68.31h-5.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M92.68,68.31h-3.99V0h3.99'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M81.29,68.31V0h2.85v68.31h-2.85Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M74.45,68.31V0h1.71v68.31h-1.71Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clippath-1)'%3e%3cg%3e%3cpath%20d='M60.18,68.31V0h7.36v68.31h-7.36Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M51.49,68.31V0h6.69v68.31h-6.69Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M43.46,68.31V0h5.35v68.31h-5.35Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M34.77,68.31V0h4.68v68.31h-4.68Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M26.08,68.31V0h3.34v68.31h-3.34Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M17.39,68.31V0h2.67v68.31h-2.67Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M8.69,68.31V0h2.01v68.31h-2.01Z'%20fill='%23d5ffac'%20/%3e%3cpath%20d='M0,68.31V0h.67v68.31h-.67Z'%20fill='%23d5ffac'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e%3c/svg%3e", _y = (e) => {
	if (typeof e == "string") return e;
	if (e instanceof URL) return e.toString();
	if (typeof e == "object" && "src" in e) {
		let t = e.src;
		if (typeof t == "string") return t;
	}
	return "/favicon.ico";
};
_y(fy), _y(gy), _y(py), _y(my), _y(hy);
//#endregion
//#region ../ui/src/lib/RandomShape.tsx
var vy = [
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("circle", {
			cx: "50",
			cy: "50",
			r: "32",
			fill: e
		}),
		minCoordinate: 18,
		maxCoordinate: 82
	},
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("rect", {
			x: "22",
			y: "22",
			width: "56",
			height: "56",
			fill: e
		}),
		minCoordinate: 22,
		maxCoordinate: 78
	},
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("rect", {
			x: "20",
			y: "20",
			width: "60",
			height: "60",
			rx: "12",
			fill: e
		}),
		minCoordinate: 20,
		maxCoordinate: 80
	},
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("polygon", {
			points: "50,18 82,82 18,82",
			fill: e
		}),
		minCoordinate: 18,
		maxCoordinate: 82
	},
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("polygon", {
			points: "50,12 86,50 50,88 14,50",
			fill: e
		}),
		minCoordinate: 12,
		maxCoordinate: 88
	},
	{
		render: ({ fill: e }) => /* @__PURE__ */ q("polygon", {
			points: "50,12 82,30 82,70 50,88 18,70 18,30",
			fill: e
		}),
		minCoordinate: 12,
		maxCoordinate: 88
	}
], yy = {
	compact: "h-6 w-6",
	default: "h-8 w-8",
	large: "h-12 w-12"
}, by = {
	compact: "text-xs",
	default: "text-lg",
	large: "text-2xl"
}, xy = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n += 1) t = t * 31 + e.charCodeAt(n) | 0;
	return Math.abs(t);
}, Sy = (e) => {
	let t = e?.trim() ?? "";
	return t ? t.slice(0, 2).toUpperCase() : "";
}, Cy = (e, { minCoordinate: t, maxCoordinate: n }) => {
	let r = Math.min(48 / (n - 50), 48 / (50 - t));
	return Math.min(e, r);
};
function wy({ seed: e, ariaLabel: t, scale: n = 1, size: r, initials: i, tone: a = "secondary" }) {
	let o = vy[xy(e) % vy.length], s = o.render, c = n > 0 ? Cy(n, o) : 1, l = c === 1 ? void 0 : `translate(50 50) scale(${String(c)}) translate(-50 -50)`, u = !t, d = Sy(i), f = d.length > 0, p = r ? yy[r] : "h-full w-full", m = r ? by[r] : "text-base", h = "var(--pc-color-text)";
	a === "primary" && (h = "var(--pc-color-primary)"), a === "surface" && (h = "var(--pc-color-surface)");
	let g = "text-[var(--pc-color-surface)]";
	a === "primary" && (g = "text-[var(--pc-color-secondary)]"), a === "surface" && (g = "text-[var(--pc-color-text)]");
	let _ = Y("relative flex items-center justify-center", g, p);
	return /* @__PURE__ */ J("div", {
		className: _,
		"aria-hidden": u || void 0,
		children: [/* @__PURE__ */ q("svg", {
			viewBox: "0 0 100 100",
			className: "h-full w-full block",
			role: u ? void 0 : "img",
			"aria-label": u ? void 0 : t,
			"aria-hidden": u,
			focusable: "false",
			children: /* @__PURE__ */ q("g", {
				transform: l,
				children: /* @__PURE__ */ q(s, { fill: h })
			})
		}), f && /* @__PURE__ */ q("span", {
			className: Y("absolute inset-0 flex items-center justify-center", "font-normal uppercase", m),
			"aria-hidden": "true",
			children: d
		})]
	});
}
//#endregion
//#region ../ui/src/lib/logoTone.ts
var Ty = (e, t) => {
	if (typeof e.getPropertyValue == "function") {
		let n = e.getPropertyValue(t);
		if (typeof n == "string" && n.length > 0) return n;
	}
	let n = e[t];
	return typeof n == "string" ? n : "";
}, Ey = (e, t) => e === null ? !1 : t?.allowTransparent ? e <= .01 : e < .95, Dy = (e, t, n) => Math.min(n, Math.max(t, e)), Oy = (e, t) => {
	let n = e.trim();
	if (n.endsWith("%")) {
		let e = Number(n.slice(0, -1));
		return Number.isNaN(e) ? null : Dy(e / 100 * t, 0, t);
	}
	let r = Number(n);
	return Number.isNaN(r) ? null : Dy(r, 0, t);
}, ky = (e, t) => {
	let n = /^rgba?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = Oy(r[0], 255), a = Oy(r[1], 255), o = Oy(r[2], 255);
	if (i === null || a === null || o === null) return null;
	let s = r.length >= 4 ? Oy(r[3], 1) : 1;
	return Ey(s, t) ? null : {
		r: i,
		g: a,
		b: o,
		alpha: s ?? 1
	};
}, Ay = (e, t) => {
	let n = /^hsla?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = r[0].trim().toLowerCase(), a = Number(i.replace("deg", ""));
	if (i.endsWith("rad") && (a = Number(i.replace("rad", "")) * 180 / Math.PI), i.endsWith("turn") && (a = Number(i.replace("turn", "")) * 360), Number.isNaN(a)) return null;
	let o = Oy(r[1], 100), s = Oy(r[2], 100), c = r.length >= 4 ? Oy(r[3], 1) : 1;
	if (Ey(c, t) || o === null || s === null) return null;
	let l = o / 100, u = s / 100, d = (1 - Math.abs(2 * u - 1)) * l, f = (a % 360 + 360) % 360 / 60, p = d * (1 - Math.abs(f % 2 - 1)), m = 0, h = 0, g = 0;
	f >= 0 && f < 1 ? (m = d, h = p) : f >= 1 && f < 2 ? (m = p, h = d) : f >= 2 && f < 3 ? (h = d, g = p) : f >= 3 && f < 4 ? (h = p, g = d) : f >= 4 && f < 5 ? (m = p, g = d) : (m = d, g = p);
	let _ = u - d / 2;
	return {
		r: Dy((m + _) * 255, 0, 255),
		g: Dy((h + _) * 255, 0, 255),
		b: Dy((g + _) * 255, 0, 255),
		alpha: c ?? 1
	};
}, jy = (e, t) => {
	let n = /^color\(\s*srgb\s+([^)]+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = (e) => {
		let t = e.trim();
		if (t.endsWith("%")) {
			let e = Number(t.slice(0, -1));
			return Number.isNaN(e) ? null : Dy(e / 100 * 255, 0, 255);
		}
		let n = Number(t);
		return Number.isNaN(n) ? null : Dy(n > 1 ? n : n * 255, 0, 255);
	}, a = i(r[0]), o = i(r[1]), s = i(r[2]), c = r.length >= 4 ? Oy(r[3], 1) : 1;
	return Ey(c, t) || a === null || o === null || s === null ? null : {
		r: a,
		g: o,
		b: s,
		alpha: c ?? 1
	};
}, My = (e, t) => {
	let n = e.trim().replace("#", "");
	if (![
		3,
		4,
		6,
		8
	].includes(n.length)) return null;
	let r = n.length === 3 || n.length === 4 ? n.split("").map((e) => `${e}${e}`).join("") : n, i = r.length === 8 ? Number.parseInt(r.slice(6, 8), 16) / 255 : 1;
	if (Ey(i, t)) return null;
	let a = Number.parseInt(r.slice(0, 2), 16), o = Number.parseInt(r.slice(2, 4), 16), s = Number.parseInt(r.slice(4, 6), 16);
	return Number.isNaN(a) || Number.isNaN(o) || Number.isNaN(s) ? null : {
		r: a,
		g: o,
		b: s,
		alpha: i
	};
}, Ny = (e, t) => {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length === 0 ? null : n.startsWith("#") ? My(n, t) : ky(n, t) ?? Ay(n, t) ?? jy(n, t);
}, Py = (e, t) => {
	let n = e.alpha + t.alpha * (1 - e.alpha);
	return n <= 0 ? {
		r: 0,
		g: 0,
		b: 0,
		alpha: 0
	} : {
		r: (e.r * e.alpha + t.r * t.alpha * (1 - e.alpha)) / n,
		g: (e.g * e.alpha + t.g * t.alpha * (1 - e.alpha)) / n,
		b: (e.b * e.alpha + t.b * t.alpha * (1 - e.alpha)) / n,
		alpha: n
	};
}, Fy = (e, t) => e ? e.alpha >= .999 || !t ? e : Py(e, t) : null, Iy = (e, t, n, r) => {
	if (typeof window > "u") return null;
	let i = e.ownerDocument, a = i.defaultView;
	if (!a) return null;
	let o = e;
	for (; o;) {
		let e = i.createElement("div");
		e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.inset = "0", e.style.backgroundColor = "transparent", e.style.color = "transparent", e.style[n] = `var(${t})`, o.appendChild(e);
		let s = Ty(a.getComputedStyle(e), n);
		e.remove();
		let c = Ny(s, { allowTransparent: !0 });
		if (c) return Fy(c, r?.(o.parentElement ?? null) ?? null);
		o = o.parentElement;
	}
	return null;
}, Ly = (e) => {
	let t = e.match(/#[\da-fA-F]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\)|color\(\s*srgb[^)]*\)/g);
	if (!t) return null;
	for (let e of t) {
		let t = Ny(e);
		if (t) return t;
	}
	return null;
}, Ry = (e) => {
	if (typeof window > "u" || !e) return null;
	let t = e.ownerDocument.defaultView;
	if (!t) return null;
	let n = (e) => {
		if (!e) return null;
		let r = n(e.parentElement), i = t.getComputedStyle(e), a = Ny(Ty(i, "backgroundColor"), { allowTransparent: !0 });
		if (a) return Fy(a, r);
		let o = Ty(i, "backgroundImage");
		if (o && o !== "none") {
			let e = Ly(o);
			if (e) return Fy(e, r);
		}
		return r;
	};
	return n(e);
}, zy = (e, t) => {
	if (typeof window > "u") return null;
	let n = e.ownerDocument.defaultView;
	if (!n) return null;
	let r = e;
	for (; r;) {
		let e = Ny(Ty(n.getComputedStyle(r), t), { allowTransparent: !0 });
		if (e) return Fy(e, Ry(r.parentElement));
		r = r.parentElement;
	}
	return Iy(e, t, "backgroundColor", Ry);
}, By = ({ r: e, g: t, b: n }) => {
	let r = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, i = r(e), a = r(t), o = r(n);
	return .2126 * i + .7152 * a + .0722 * o;
}, Vy = (e) => e ? By(e) < .5 : !1, Hy = (e, t) => e && Vy(zy(e, t?.tokenName ?? "--pc-color-surface") ?? Ry(e)) ? "dark" : "default", Uy = .64, Wy = 1, Gy = .85, Ky = .84, qy = 1, Jy = Wy / Uy, Yy = Gy / Uy, Xy = Ky / Uy, Zy = qy / Uy, Qy = 1.25, $y = 1.6, eb = 1.12, tb = 1.18, nb = .6, rb = .45, ib = 1.12, ab = 1.18, ob = 1.22, sb = 1.28, cb = ["compact-default", "compact-dark"], lb = {
	full: "h-[var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,100%))] w-[var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,100%))]",
	contained: "h-[var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))] w-[var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))]"
}, ub = {
	grid: "h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,42%))] w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,100%))] max-w-[var(--pc-size-logo-mark-surface-max-width,var(--pc-size-logo-mark-max-width,55%))] @md:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,45%))]",
	inline: "h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2rem))] w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2rem))] flex-shrink-0",
	inlineCompact: "h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,1.25rem))] w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,1.25rem))] flex-shrink-0",
	compact: "h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2.5rem))] w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2.5rem))] flex-shrink-0",
	list: "h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2.25rem))] w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2.25rem))] @sm:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,3rem))] @sm:w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,3rem))] @xl:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,4rem))] @xl:w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,4rem))] @3xl:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,4rem))] @3xl:w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,4rem))] flex-shrink-0",
	stuck: "group-data-[stuck=true]:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,1.25rem))] group-data-[stuck=true]:w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,1.25rem))] @md:group-data-[stuck=true]:h-[var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2rem))] @md:group-data-[stuck=true]:w-[var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2rem))]"
}, db = (e, t, n) => {
	if (!e) return [];
	if (typeof e == "string") return [e];
	let r = e, i = t === "dark" ? "dark" : "default", a = t === "dark" ? "default" : "dark", o = (n ? [
		t === "dark" ? "compact-dark" : "compact-default",
		t === "dark" ? "compact-default" : "compact-dark",
		i,
		a
	] : [i, a]).map((e) => r[e]).filter((e) => !!e), s = Object.entries(r).filter((e) => typeof e[1] == "string" && e[1].length > 0).filter(([e]) => n || !cb.includes(e)).map(([, e]) => e), c = [...o, ...s], l = /* @__PURE__ */ new Set();
	return c.filter((e) => !l.has(e) && (l.add(e), !0));
}, fb = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => n || e === "inline" ? lb.full : lb.contained, pb = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => Y("flex items-center justify-center", "[background:var(--pc-color-logo-mark-surface-background,var(--pc-color-logo-mark-background,transparent))]", "text-[var(--pc-color-logo-mark-surface-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-logo-mark-surface,var(--pc-radius-logo-mark,var(--pc-radius-lg)))]", "ring-inset ring-[length:var(--pc-size-logo-mark-surface-border-width,var(--pc-size-logo-mark-border-width,1px))] ring-[var(--pc-color-logo-mark-surface-border,var(--pc-color-logo-mark-border,transparent))]", e === "grid" ? ub.grid : e === "inline" ? t ? ub.inlineCompact : ub.inline : t ? ub.compact : ub.list, n && ub.stuck);
function mb({ id: e, logo: t, alt: n, seed: r, className: i, contentClassName: o, rootAttributes: s, tone: c, layout: l = "list", compact: u = !1, balanceLogo: d = !0, stuck: f = !1, stablePresentation: p = !1, content: m }) {
	let [h, g] = K(null), _ = c ?? Hy(h), v = l === "grid", y = d && !p && !v && !f, b = fb({
		layout: l,
		compact: u,
		stuck: f
	}), x = f ? Zy : u ? Jy : v ? Yy : Xy, S = pb({
		layout: l,
		compact: u,
		stuck: f
	}), C = p && typeof t == "object" && !!t && h === null, w = W(() => C ? [] : db(t, _, u), [
		u,
		t,
		C,
		_
	]), T = W(() => JSON.stringify(w), [w]), [E, D] = K({
		key: "",
		values: []
	}), O = W(() => {
		let e = E.key === T ? E.values : [];
		return w.find((t) => !e.includes(t));
	}, [
		T,
		E,
		w
	]), [k, A] = K(null), j = H((e) => {
		if (!y) return 1;
		let { naturalWidth: t, naturalHeight: n } = e;
		if (!t || !n) return 1;
		let r = n / t;
		return r >= $y ? tb : r >= Qy ? eb : r <= rb ? u ? sb : ab : r <= nb ? u ? ob : ib : 1;
	}, [u, y]), M = O ? [
		O,
		y ? "balanced" : "static",
		u ? "compact" : "regular"
	].join("-") : "logo-fallback", N = k === M ? "opacity-[var(--pc-opacity-logo-mark-surface-image,var(--pc-opacity-logo-mark-image,1))]" : "opacity-0", P = H((e) => {
		let t = j(e);
		e.style.transform = t === 1 ? "" : `scale(${String(t)})`, A(M);
	}, [j, M]), F = H((e) => {
		e && e.complete && e.naturalWidth !== 0 && P(e);
	}, [P]), I = H((e) => {
		P(e.currentTarget);
	}, [P]), ee = H((e) => {
		let t = e.currentTarget, n = t.getAttribute("src") || t.currentSrc || t.src;
		n && (A(null), D((e) => {
			let t = T, r = e.key === t ? e.values : [], i = O ?? n;
			return r.includes(i) ? e : {
				key: t,
				values: [...r, i]
			};
		}));
	}, [T, O]), te = m;
	return te ??= O ? /* @__PURE__ */ q("img", {
		ref: F,
		src: O,
		alt: n ?? "",
		"data-slot": "logo-mark-image",
		className: Y("block object-contain origin-center", b, o, "transition-opacity duration-120 ease-out motion-reduce:transition-none", N),
		loading: p ? "eager" : "lazy",
		decoding: "async",
		onLoad: I,
		onError: ee
	}, M) : C ? /* @__PURE__ */ q("span", {
		"aria-hidden": "true",
		"data-slot": "logo-mark-placeholder",
		className: Y(b, o)
	}) : /* @__PURE__ */ q("span", {
		className: Y(b, o),
		children: /* @__PURE__ */ q(wy, {
			seed: r,
			ariaLabel: n,
			scale: x
		})
	}), /* @__PURE__ */ q("div", {
		...s,
		id: e,
		ref: g,
		"data-slot": "logo-mark",
		className: Y(a("logoMark"), S, s?.className, i),
		children: te
	});
}
//#endregion
//#region ../ui/src/lib/formFieldVisuals.ts
var hb = [
	"pointer-events-none",
	"h-4 w-4 shrink-0",
	"transition-transform duration-200 ease-out"
].join(" "), gb = ({ hideLabel: e, isCompact: t, withLabelDefaultClassName: n, hiddenLabelDefaultClassName: r, withLabelCompactClassName: i, hiddenLabelCompactClassName: a }) => e ? t ? a ?? r : r : t ? i ?? n : n, _b = ({ isOpen: e = !1, spinOnGroupFocus: t = !1 }) => Y(hb, e && "rotate-180", t && "group-focus-within:rotate-180"), vb = (e) => _b(e);
//#endregion
//#region ../ui/src/lib/icons/ChevronDownIcon.tsx
function yb({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ q("path", {
			d: "m6 8 4 4 4-4",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/DropdownListItem.tsx
var bb = Y("group relative px-1 py-0.5 first:pt-1 last:pb-1"), xb = Y("flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm text-[var(--pc-color-text)] transition-colors", "hover:[background:var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2))] active:[background:var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2))]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:opacity-60", "data-[selected=true]:[background:var(--pc-color-dropdown-item-background-selected,var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2)))] data-[selected=true]:text-[var(--pc-color-text)]", "data-[selected=true]:hover:[background:var(--pc-color-dropdown-item-background-selected-hover,var(--pc-color-dropdown-item-background-selected,var(--pc-color-depth-2)))] data-[selected=true]:active:[background:var(--pc-color-dropdown-item-background-selected-active,var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2)))]"), Sb = Y("absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[var(--pc-radius-full)]", "cursor-pointer text-[var(--pc-color-text-muted)] transition-colors", "hover:[background:var(--pc-color-dropdown-item-action-background-hover,var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2)))] hover:text-[var(--pc-color-text)]", "active:[background:var(--pc-color-dropdown-item-action-background-active,var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2)))] active:text-[var(--pc-color-text)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]"), Cb = He(function({ wrapperAs: e = "div", wrapperId: t, wrapperRole: n, wrapperAriaSelected: r, wrapperAriaDisabled: i, label: a, description: o, leading: s, trailing: c, selected: l = !1, highlighted: u = !1, disabled: d = !1, suppressDisabledCursor: f = !1, theme: p, role: m, ariaSelected: h, onClick: g, onMouseEnter: _, trailingAction: v }, y) {
	let b = e, x = Ev(p), S = Ev(v?.theme ?? p), C = Q(xb, v ? "pr-12" : void 0, !l && u ? "[background:var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2))]" : void 0, f ? "disabled:cursor-default" : void 0);
	return Ve(b, {
		id: t,
		role: n,
		"aria-selected": r,
		"aria-disabled": i,
		className: bb
	}, /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ J("button", {
		ref: y,
		type: "button",
		role: m,
		"aria-selected": h,
		disabled: d,
		"data-theme": x,
		"data-selected": l ? "true" : void 0,
		"data-disabled": d ? "true" : void 0,
		className: C,
		onClick: g,
		onMouseEnter: _,
		children: [
			s ? /* @__PURE__ */ q("span", {
				className: "flex h-4 w-4 items-center justify-center",
				children: s
			}) : null,
			/* @__PURE__ */ J("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ q("span", {
					className: "block truncate text-sm text-[var(--pc-color-text)]",
					children: a
				}), o ? /* @__PURE__ */ q("span", {
					className: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
					children: o
				}) : null]
			}),
			c
		]
	}), v ? /* @__PURE__ */ q("button", {
		type: "button",
		role: v.role,
		"aria-label": v.ariaLabel,
		disabled: d || v.disabled,
		"data-theme": S,
		"data-disabled": d || v.disabled ? "true" : void 0,
		className: Sb,
		onClick: v.onClick,
		children: /* @__PURE__ */ q("span", {
			className: "flex h-4 w-4 items-center justify-center",
			children: v.icon
		})
	}) : null] }));
}), wb = Be(null);
function Tb({ portalContainer: e, children: t }) {
	return /* @__PURE__ */ q(wb.Provider, {
		value: e,
		children: t
	});
}
function Eb() {
	return U(wb);
}
//#endregion
//#region ../ui/src/lib/overlayFocus.ts
var Db = {
	drawer: 1050,
	modal: 2e3,
	dropdown: 2200
}, Ob = [
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"input:not([disabled]):not([type=\"hidden\"])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"iframe",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
function kb(e) {
	if (!e) return [];
	let t = e.querySelectorAll(Ob);
	return Array.from(t).filter((e) => {
		if (e.hasAttribute("disabled") || e.getAttribute("aria-hidden") === "true" || e.closest("[aria-hidden=\"true\"]") || e.tabIndex < 0) return !1;
		if (typeof window < "u") {
			let t = window.getComputedStyle(e);
			if (t.display === "none" || t.visibility === "hidden") return !1;
		}
		return !0;
	});
}
var Ab = 0, jb = null;
function Mb() {
	if (typeof document > "u") return () => void 0;
	let { body: e } = document;
	return Ab === 0 && (jb = e.style.overflow || null, e.style.overflow = "hidden"), Ab += 1, () => {
		Ab !== 0 && (--Ab, Ab === 0 && typeof document < "u" && (jb === null ? document.body.style.removeProperty("overflow") : document.body.style.overflow = jb, jb = null));
	};
}
var Nb = [], Pb = 0;
function Fb(e, t, n, r) {
	Nb.some((t) => t.id === e) || Nb.push({
		id: e,
		priority: t,
		trapsFocus: n,
		containerRef: r,
		order: ++Pb
	});
}
function Ib(e) {
	let t = Nb.findIndex((t) => t.id === e);
	t < 0 || Nb.splice(t, 1);
}
function Lb(e, t = !1) {
	let n = t ? Nb.filter((e) => e.trapsFocus) : Nb;
	if (n.length === 0) return !1;
	let r = (e, t) => t.priority > e.priority || t.priority === e.priority && t.order > e.order ? t : e, i = n.reduce(r);
	for (; i.containerRef?.current;) {
		let e = i.containerRef.current, t = n.filter((t) => {
			let n = t.containerRef?.current;
			return n && n !== e && e.contains(n);
		});
		if (t.length === 0) break;
		i = t.reduce(r);
	}
	return i.id === e;
}
function Rb({ isOpen: e, instanceId: t, priority: n, trapsFocus: r = !0, containerRef: i }) {
	Je(() => {
		if (e) return Fb(t, n, r, i), () => {
			Ib(t);
		};
	}, [
		i,
		t,
		e,
		n,
		r
	]);
}
function zb({ containerRef: e, initialFocusRef: t, instanceId: n, isOpen: r, restoreFocus: i = !0 }) {
	let a = G(null);
	Je(() => {
		if (!r || typeof document > "u") return;
		let o = e.current;
		a.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		let s = !1, c = () => {
			if (s || !Lb(n)) return;
			let e = t?.current;
			if (e) {
				e.focus({ preventScroll: !0 });
				return;
			}
			let r = kb(o);
			r.length > 0 ? r[0].focus({ preventScroll: !0 }) : o?.focus({ preventScroll: !0 });
		};
		return typeof queueMicrotask == "function" ? queueMicrotask(c) : Promise.resolve().then(c), () => {
			s = !0;
			let e = a.current;
			if (i && e) {
				let t = () => {
					e.focus({ preventScroll: !0 });
				};
				typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t);
			}
			a.current = null;
		};
	}, [
		e,
		t,
		n,
		r,
		i
	]);
}
function Bb({ closeOnEscape: e = !0, containerRef: t, instanceId: n, isOpen: r, onClose: i, trapFocus: a = !0 }) {
	let o = H((o) => {
		if (!r) return;
		if (o.key === "Escape") {
			if (!Lb(n) || !e || !i) return;
			o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), i();
			return;
		}
		if (o.key !== "Tab" || !a || !Lb(n, !0)) return;
		let s = t.current;
		if (!s) return;
		let c = kb(s);
		if (c.length === 0) {
			o.preventDefault(), s.focus();
			return;
		}
		let l = document.activeElement, u = c[0], d = c[c.length - 1];
		o.shiftKey ? (!l || l === u || !s.contains(l)) && (o.preventDefault(), d.focus()) : l === d && (o.preventDefault(), u.focus());
	}, [
		e,
		t,
		n,
		r,
		i,
		a
	]);
	Ge(() => {
		if (r) return document.addEventListener("keydown", o, { capture: !0 }), () => {
			document.removeEventListener("keydown", o, { capture: !0 });
		};
	}, [o, r]);
}
//#endregion
//#region ../ui/src/lib/DropdownMenu.tsx
var Vb = 8, Hb = 12, Ub = 96, Wb = 192, Gb = 140, Kb = 1e3, qb = [
	80,
	200,
	500
], Jb = 24, Yb = (e) => {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e);
}, Xb = (e, t, n) => n < t ? t : Math.max(t, Math.min(e, n)), Zb = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => e >= n ? "below" : e >= Ub ? e >= Gb || t <= e ? "below" : "above" : t > e ? "above" : "below", Qb = (e) => Math.max(Ub, e), $b = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => Zb({
	availableBelow: e,
	availableAbove: t,
	menuHeight: Qb(n)
}), ex = (e) => {
	let t = window.getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(`${t.overflow}${t.overflowX}${t.overflowY}`);
}, tx = (e) => {
	let t = [], n = e.parentElement;
	for (; n;) ex(n) && t.push(n), n = n.parentElement;
	return t;
}, nx = (e, t) => Math.abs(e.top - t.top) > Jb && Math.abs(e.bottom - t.bottom) > Jb || Math.abs(e.left - t.left) > Jb && Math.abs(e.right - t.right) > Jb, rx = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(rx).join(" ") : Ue(e) ? rx(e.props.children) : "";
function ix({ id: e, options: t = [], renderContent: n, isOpen: r, theme: i, disabled: a = !1, align: o = "start", widthMode: s = "content", lockPlacementWhileOpen: c = !1, menuRole: l = "menu", labelledBy: u, className: d, anchorRef: f, usePortal: p = !1, portalContainer: m = null, focusOnOpen: h = !1, onRequestClose: g }) {
	let _ = n !== void 0, v = r && (_ || t.length > 0), y = Eb(), b = m ?? y, x = G(null), S = Ke(), C = G(null);
	Je(() => {
		v && (C.current = document.activeElement instanceof HTMLElement ? document.activeElement : null);
	}, [v]), Rb({
		isOpen: v,
		instanceId: S,
		priority: Db.dropdown,
		trapsFocus: !1
	});
	let w = H(() => {
		g?.();
		let e = C.current;
		e?.isConnected && e.focus({ preventScroll: !0 });
	}, [g]);
	Bb({
		isOpen: v && !!g,
		instanceId: S,
		containerRef: x,
		onClose: w,
		trapFocus: !1
	});
	let T = G([]), E = G(null), D = G(null), O = G(0), k = G(null), A = G([]), [j, M] = K(null), N = p && typeof document < "u", P = N && !!b && b !== document.body, F = H(() => {
		k.current !== null && (window.cancelAnimationFrame(k.current), k.current = null);
		for (let e of A.current) window.clearTimeout(e);
		A.current = [];
	}, []), I = H((e) => {
		let n = t[e];
		return !!n && !a && n.disabled !== !0;
	}, [a, t]), ee = H((e) => {
		if (!I(e)) return !1;
		let t = T.current[e];
		return t ? (t.focus(), !0) : !1;
	}, [I]), te = H((e, n) => {
		if (t.length === 0) return -1;
		for (let r = 0; r < t.length; r += 1) {
			let i = (e + r * n + t.length) % t.length;
			if (I(i)) return i;
		}
		return -1;
	}, [I, t.length]), ne = H(() => T.current.findIndex((e) => e === document.activeElement), []);
	Je(() => {
		if (!r || !h || _) return;
		let e = window.requestAnimationFrame(() => {
			let e = te(0, 1);
			e >= 0 && ee(e);
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [
		te,
		h,
		ee,
		_,
		r
	]), Ge(() => {
		r || (E.current = null, D.current = null, F());
	}, [F, r]);
	let re = H((e) => {
		let t = e.getBoundingClientRect();
		return D.current === null ? (D.current = t, t) : (nx(D.current, t) && (D.current = t), D.current);
	}, []), L = H(() => {
		if (!r || !N) return;
		let e = f?.current, t = x.current;
		if (!e || !t) return;
		let n = re(e), i = t.getBoundingClientRect(), a;
		if (P && b) {
			let e = b.getBoundingClientRect(), t = b.scrollTop, r = b.scrollLeft, l = t, u = t + b.clientHeight, d = r, f = r + b.clientWidth, p = Math.max(0, b.clientWidth - 24), m = n.top - e.top + t, h = n.bottom - e.top + t, g = n.left - e.left + r, _ = n.right - e.left + r, v = u - h - Vb - Hb, y = m - l - Vb - Hb, x = $b({
				availableBelow: v,
				availableAbove: y,
				menuHeight: i.height
			}), S = x;
			c && (E.current === null && (E.current = x), S = E.current);
			let C = Math.max(0, S === "below" ? v : y), w = Math.min(i.height || C, C), T = Xb(S === "below" ? h + Vb : m - Vb - w, l + Hb, u - Hb - w), D = s === "anchor" ? n.width : Math.max(n.width, i.width, Wb), O = p > 0 ? Math.min(D, p) : D;
			a = {
				top: T,
				left: Xb(o === "end" ? _ - O : g, d + Hb, f - Hb - O),
				minWidth: s === "anchor" ? n.width : O,
				width: s === "anchor" ? n.width : void 0,
				maxHeight: C
			};
		} else {
			let e = window.innerWidth, t = window.innerHeight, r = t - n.bottom - Vb - Hb, l = n.top - Vb - Hb, u = $b({
				availableBelow: r,
				availableAbove: l,
				menuHeight: i.height
			}), d = u;
			c && (E.current === null && (E.current = u), d = E.current);
			let f = Math.max(0, d === "below" ? r : l), p = Math.min(i.height || f, f), m = Xb(d === "below" ? n.bottom + Vb : n.top - Vb - p, Hb, t - Hb - p), h = s === "anchor" ? n.width : Math.min(Math.max(n.width, i.width, Wb), Math.max(0, e - 24));
			a = {
				top: m,
				left: Xb(o === "end" ? n.right - h : n.left, Hb, e - Hb - h),
				minWidth: s === "anchor" ? n.width : h,
				width: s === "anchor" ? n.width : void 0,
				maxHeight: f
			};
		}
		M((e) => e && e.top === a.top && e.left === a.left && e.minWidth === a.minWidth && e.width === a.width && e.maxHeight === a.maxHeight ? e : a);
	}, [
		o,
		f,
		re,
		r,
		P,
		c,
		b,
		N,
		s
	]), R = H(() => {
		F(), k.current = window.requestAnimationFrame(() => {
			k.current = null, L(), k.current = window.requestAnimationFrame(() => {
				k.current = null, L();
			});
		}), A.current = qb.map((e) => window.setTimeout(() => {
			L();
		}, e));
	}, [F, L]), z = H(() => {
		O.current = Date.now() + Kb, R();
	}, [R]);
	Ge(() => () => {
		F();
	}, [F]);
	let ie = H((e) => {
		if (x.current = e, !e) {
			M(null), D.current = null, F();
			return;
		}
		let t = !f?.current;
		L(), t && Yb(() => {
			x.current === e && L();
		});
	}, [
		f,
		F,
		L
	]);
	Ge(() => {
		if (!r || !N || typeof ResizeObserver > "u") return;
		let e = x.current;
		if (!e) return;
		let t = null, n = () => {
			t !== null && window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
				t = null, L();
			});
		}, i = new ResizeObserver(() => {
			n();
		});
		return i.observe(e), () => {
			i.disconnect(), t !== null && window.cancelAnimationFrame(t);
		};
	}, [
		f,
		r,
		N,
		L
	]), Ge(() => {
		if (!r || !N) return;
		let e = () => {
			D.current = null, L();
		}, t = (e) => {
			if (Date.now() < O.current) {
				L();
				return;
			}
			let t = e.target;
			if (t instanceof Node && x.current?.contains(t)) return;
			let n = f?.current;
			n && t instanceof Node && !t.contains(n) || g?.();
		};
		window.addEventListener("resize", e), window.addEventListener("scroll", t, !0);
		let n = f?.current, i = n ? tx(n) : [];
		for (let e of i) e.addEventListener("scroll", t);
		return () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", t, !0);
			for (let e of i) e.removeEventListener("scroll", t);
		};
	}, [
		f,
		r,
		g,
		N,
		L
	]), Ge(() => {
		if (!r) return;
		let e = (e) => {
			let t = e.target;
			if (!(t instanceof Node)) return;
			let n = x.current, r = f?.current;
			n?.contains(t) || r?.contains(t) || g?.();
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
		};
	}, [
		f,
		r,
		g
	]);
	let ae = W(() => !N || typeof document > "u" ? null : b ?? document.body, [b, N]), oe = o === "end" ? "left-auto right-0" : "right-auto left-0", se = Ev(i), ce = "absolute top-full z-20 mt-2";
	N && (ce = P ? "absolute z-[2200]" : "fixed z-[2200]");
	let le = Q(ce, s === "anchor" ? "min-w-0 max-w-none" : "min-w-[12rem] max-w-[calc(100vw-1.5rem)]", "overflow-x-hidden overflow-y-auto rounded-[var(--pc-radius-2xl)] bg-[var(--pc-color-surface)] shadow-2xl [--tw-shadow-color:var(--pc-color-backdrop)] [&_button:not(:disabled)]:cursor-pointer", "text-[var(--pc-color-text)] border border-[var(--pc-color-dropdown-border,var(--pc-color-border-weaker))]", N ? "" : oe, !N && s === "anchor" ? "w-full" : "", d), B = N ? j : null, ue = N ? {
		top: B?.top ?? -9999,
		left: B?.left ?? -9999,
		minWidth: B?.minWidth,
		width: B?.width,
		maxHeight: B?.maxHeight
	} : void 0;
	if (!v) return null;
	let de = null;
	_ && (de = typeof n == "function" ? n({ close: () => {
		g?.();
	} }) : n);
	let fe = (e) => (t) => {
		a || e.disabled ? t.preventDefault() : (e.onSelect?.(t), g?.());
	}, pe = (e) => (t) => {
		let n = e.trailingAction;
		!n || a || e.disabled || n.disabled ? t.preventDefault() : (n.onSelect?.(t), g?.());
	}, me = /* @__PURE__ */ q("div", {
		id: e,
		ref: ie,
		role: l,
		"aria-labelledby": u,
		className: le,
		style: ue,
		"data-theme": se,
		"data-dropdown-menu-owner": u,
		onMouseDownCapture: z,
		onTouchStartCapture: z,
		onKeyDownCapture: z,
		onKeyDown: (e) => {
			if (_) return;
			let n = ne();
			if (e.key === "ArrowDown") {
				e.preventDefault();
				let t = te(n >= 0 ? n + 1 : 0, 1);
				t >= 0 && ee(t);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault();
				let r = te(n >= 0 ? n - 1 : t.length - 1, -1);
				r >= 0 && ee(r);
				return;
			}
			if (e.key === "Home") {
				e.preventDefault();
				let t = te(0, 1);
				t >= 0 && ee(t);
				return;
			}
			if (e.key === "End") {
				e.preventDefault();
				let n = te(t.length - 1, -1);
				n >= 0 && ee(n);
				return;
			}
			if (e.key.length !== 1 || e.altKey || e.ctrlKey || e.metaKey) return;
			let r = e.key.toLocaleLowerCase(), i = n >= 0 ? n + 1 : 0, a = [...t.slice(i).map((e, t) => i + t), ...t.slice(0, i).map((e, t) => t)].find((e) => I(e) && rx(t[e]?.label).trim().toLocaleLowerCase().startsWith(r));
			a !== void 0 && (e.preventDefault(), ee(a));
		},
		children: de ?? t.map((e, t) => {
			let n = e.trailingAction, r = e.id ?? String(t);
			return /* @__PURE__ */ q(Cb, {
				ref: (e) => {
					T.current[t] = e;
				},
				wrapperRole: "none",
				label: e.label,
				leading: e.icon,
				trailing: e.trailingIcon ? /* @__PURE__ */ q("span", {
					className: "flex h-4 w-4 items-center justify-center text-current",
					children: e.trailingIcon
				}) : void 0,
				selected: e.selected === !0,
				disabled: a || e.disabled,
				suppressDisabledCursor: e.suppressDisabledCursor,
				theme: e.theme,
				role: l === "menu" ? "menuitem" : void 0,
				onClick: fe(e),
				trailingAction: n ? {
					ariaLabel: n.ariaLabel,
					icon: n.icon,
					onClick: pe(e),
					disabled: a || e.disabled || n.disabled,
					theme: n.theme ?? e.theme,
					role: l === "menu" ? "menuitem" : void 0
				} : void 0
			}, r);
		})
	});
	return N && ae ? Qe(me, ae) : me;
}
//#endregion
//#region ../ui/src/lib/SplitButton.tsx
var ax = He(function({ options: e, primaryOption: t, primaryLabel: n, leadingIcon: r, trailingIcon: i, variant: a = "secondary", appearance: o = "solid", size: s = "md", fullWidth: c = !1, loading: l = !1, disabled: u = !1, primaryDisabled: d = !1, toggleDisabled: f = !1, alignMenu: p = "start", toggleLabel: m = "Show more actions", primaryOpensMenu: h = !1 }, g) {
	let _ = !!t, v = t?.label ?? n;
	if (!_ && v == null) throw Error("SplitButton requires primaryLabel when no primaryOption is provided.");
	let [y, b] = K(!1), x = G(null), S = Ke(), C = `${S}-menu`, w = h || !_, T = xv({
		disabled: u,
		loading: l
	}), E = T || f || e.length === 0, D = T || d || !w && t?.disabled === !0 || w && E, O = D && E, k = y && !E, [A, j] = K(!1), [M, N] = K(!1);
	qe(g, () => x.current ?? document.createElement("div")), Ge(() => {
		if (!M) return;
		let e = () => {
			N(!1);
		};
		return window.addEventListener("pointerup", e), window.addEventListener("pointercancel", e), window.addEventListener("blur", e), () => {
			window.removeEventListener("pointerup", e), window.removeEventListener("pointercancel", e), window.removeEventListener("blur", e);
		};
	}, [M]);
	let P = (e) => {
		let t = e.target;
		if (!(t instanceof Element)) return;
		let n = t.closest("button");
		n instanceof HTMLButtonElement && !n.disabled && e.button === 0 && N(!0);
	}, F = () => {
		E || b((e) => !e);
	};
	return /* @__PURE__ */ J("div", {
		ref: x,
		className: Y("relative inline-flex items-stretch", c && "w-full"),
		onMouseEnter: () => {
			j(!0);
		},
		onMouseLeave: () => {
			j(!1);
		},
		onPointerDown: P,
		onPointerLeave: () => {
			N(!1);
		},
		onPointerCancel: () => {
			N(!1);
		},
		"data-theme": Ev(a),
		"data-loading": bv(l),
		"data-disabled": bv(O),
		"data-open": bv(k),
		children: [
			/* @__PURE__ */ J("button", {
				type: "button",
				className: Y(lv, fv(o), pv(o), dv(o), iv[s], c && "flex-1"),
				"data-loading": bv(l),
				"data-disabled": bv(D),
				"data-split-hover": bv(A && !D),
				"data-split-press": bv(M && !D),
				"data-open": bv(w && k),
				"data-active": w ? bv(k) : void 0,
				"data-toggled": w ? bv(k) : void 0,
				"data-expanded": w ? bv(k) : void 0,
				onClick: (e) => {
					D ? e.preventDefault() : w ? (e.preventDefault(), F()) : t?.onSelect?.(e);
				},
				"aria-haspopup": w ? "menu" : void 0,
				"aria-expanded": w ? k : void 0,
				"aria-controls": w ? C : void 0,
				disabled: D,
				"aria-busy": l ? !0 : void 0,
				children: [l && /* @__PURE__ */ q("span", {
					className: "absolute inset-0 z-20 flex items-center justify-center",
					"aria-hidden": "true",
					children: /* @__PURE__ */ q(H_, {})
				}), /* @__PURE__ */ J("span", {
					className: Sv({ loading: l }),
					children: [
						r ? /* @__PURE__ */ q("span", {
							className: "inline-flex items-center",
							children: r
						}) : null,
						v,
						i ? /* @__PURE__ */ q("span", {
							className: "inline-flex items-center",
							children: i
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ q("button", {
				id: S,
				type: "button",
				disabled: E,
				"aria-expanded": k,
				"aria-haspopup": "menu",
				"aria-controls": C,
				"aria-label": m,
				className: Y(uv, fv(o), pv(o), dv(o), av[s]),
				"data-disabled": bv(E),
				"data-split-hover": bv(A && !E),
				"data-split-press": bv(M && !E),
				"data-open": bv(k),
				"data-active": bv(k),
				"data-toggled": bv(k),
				"data-expanded": bv(k),
				onClick: () => {
					E || F();
				},
				children: /* @__PURE__ */ q("span", {
					className: Y("inline-flex items-center justify-center", _b({ isOpen: k }), "scale-125"),
					children: /* @__PURE__ */ q(yb, {})
				})
			}),
			/* @__PURE__ */ q(ix, {
				id: C,
				options: e,
				isOpen: k,
				disabled: E,
				align: p,
				labelledBy: S,
				anchorRef: x,
				usePortal: !0,
				focusOnOpen: !0,
				onRequestClose: () => {
					b(!1);
				}
			})
		]
	});
});
ax.displayName = "SplitButton";
//#endregion
//#region ../ui/src/lib/formControlPrimitives.ts
var ox = Y("[--pc-autofill-surface:var(--pc-color-input-autofill-background)]", "[&:has(input:-webkit-autofill)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(textarea:-webkit-autofill)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(select:-webkit-autofill)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(input:-internal-autofill-previewed)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(textarea:-internal-autofill-previewed)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(select:-internal-autofill-previewed)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(input:-internal-autofill-selected)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(textarea:-internal-autofill-selected)]:[background-color:var(--pc-color-input-autofill-background)]", "[&:has(select:-internal-autofill-selected)]:[background-color:var(--pc-color-input-autofill-background)]"), sx = Y("[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-input-autofill-background)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-input-autofill-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-input-autofill-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-input-autofill-background)]", "[&:-internal-autofill-previewed]:[box-shadow:0_0_0_1000px_var(--pc-color-input-autofill-background)_inset]", "[&:-internal-autofill-previewed]:[-webkit-text-fill-color:var(--pc-color-input-autofill-text)]", "[&:-internal-autofill-previewed]:[caret-color:var(--pc-color-input-autofill-text)]", "[&:-internal-autofill-previewed]:[background-color:var(--pc-color-input-autofill-background)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-input-autofill-background)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-input-autofill-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-input-autofill-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-input-autofill-background)]"), cx = Y("transition-[background-color,border-color,box-shadow]", "duration-150 ease-out", "motion-reduce:transition-none"), lx = Y("min-h-[var(--pc-size-input-height,2.25rem)] rounded-[var(--pc-radius-input,var(--pc-radius-3xl))] border", "overflow-hidden bg-clip-padding disabled:opacity-60", cx, "[background-color:var(--pc-color-input-background,var(--pc-color-surface))]", "hover:[background-color:var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))]", "focus-within:[background-color:var(--pc-color-input-background,var(--pc-color-surface))]", "focus-within:hover:[background-color:var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))]", "data-[readonly=true]:[background-color:var(--pc-color-input-readonly-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "data-[readonly=true]:hover:[background-color:var(--pc-color-input-readonly-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "data-[disabled=true]:cursor-not-allowed", "data-[disabled=true]:[background-color:var(--pc-color-input-disabled-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "data-[disabled=true]:hover:[background-color:var(--pc-color-input-disabled-background,var(--pc-color-input-background,var(--pc-color-surface)))]", ox), ux = Y("min-h-0 rounded-[var(--pc-radius-input-multiline,var(--pc-radius-input,var(--pc-radius-2xl)))]"), dx = "focus-within:[box-shadow:0_0_0_var(--pc-size-input-focus-ring,3px)_var(--pc-color-input-focus-ring,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_26%,transparent))]", fx = "[box-shadow:0_0_0_var(--pc-size-input-focus-ring,3px)_var(--pc-color-input-focus-ring,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_26%,transparent))]", px = "focus-within:[box-shadow:0_0_0_var(--pc-size-input-focus-ring,3px)_var(--pc-color-input-invalid-focus-ring,color-mix(in_srgb,var(--pc-color-input-invalid-border,var(--pc-color-danger-text))_26%,transparent))]", mx = Y("peer-focus-visible:ring-[length:var(--pc-size-input-focus-ring,3px)]", "peer-focus-visible:ring-[color:var(--pc-color-input-focus-ring,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_26%,transparent))]"), hx = Y("border-[var(--pc-color-input-border,var(--pc-color-border))]", "focus-within:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]", dx, "data-[readonly=true]:border-[var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))]", "data-[readonly=true]:focus-within:border-[var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))]", "data-[readonly=true]:focus-within:[box-shadow:0_0_0_var(--pc-size-input-focus-ring,3px)_var(--pc-color-input-readonly-focus-ring,color-mix(in_srgb,var(--pc-color-input-readonly-border,var(--pc-color-border))_45%,transparent))]"), gx = Y("border-[var(--pc-color-input-border,var(--pc-color-border))]", "focus-within:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]", dx, "data-[readonly=true]:border-[var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))]", "data-[readonly=true]:focus-within:border-[var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))]", "data-[readonly=true]:focus-within:[box-shadow:0_0_0_var(--pc-size-input-focus-ring,3px)_var(--pc-color-input-readonly-focus-ring,color-mix(in_srgb,var(--pc-color-input-readonly-border,var(--pc-color-border))_45%,transparent))]"), _x = Y("[background-color:var(--pc-color-input-invalid-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "hover:[background-color:var(--pc-color-input-invalid-background-hover,var(--pc-color-input-invalid-background,var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))))]", "focus-within:[background-color:var(--pc-color-input-invalid-background,var(--pc-color-input-background,var(--pc-color-surface)))]", "focus-within:hover:[background-color:var(--pc-color-input-invalid-background-hover,var(--pc-color-input-invalid-background,var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))))]", "border-[var(--pc-color-input-danger-border,var(--pc-color-input-border,var(--pc-color-border)))]", "focus-within:border-[var(--pc-color-input-invalid-border,var(--pc-color-input-focus-border,var(--pc-color-danger-text)))]", px), vx = Y("text-[var(--pc-color-input-text,var(--pc-color-text))]", "caret-[var(--pc-color-input-text,var(--pc-color-text))]", "read-only:text-[var(--pc-color-input-readonly-text,var(--pc-color-text-muted))]", "read-only:caret-transparent"), yx = "placeholder:text-[var(--pc-color-input-placeholder,var(--pc-color-text-muted))]", bx = Y("text-[var(--pc-color-input-invalid-text,var(--pc-color-input-error-text,var(--pc-color-text)))]", "caret-[var(--pc-color-input-invalid-text,var(--pc-color-input-error-text,var(--pc-color-text)))]"), xx = "placeholder:text-[var(--pc-color-input-invalid-placeholder,var(--pc-color-input-error-text,var(--pc-color-text)))]", Sx = Y("disabled:text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))]", "disabled:placeholder:text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))]"), Cx = "text-[var(--pc-color-input-icon,var(--pc-color-text-muted))]", wx = Y("text-[length:var(--pc-font-input-label-size,14px)]", "leading-[var(--pc-font-input-label-line-height,20px)]", "[font-weight:var(--pc-font-input-label-weight,500)]", "[letter-spacing:var(--pc-font-input-label-letter-spacing,inherit)]", "[font-style:var(--pc-font-input-label-style,inherit)]", "[text-transform:var(--pc-font-input-label-text-transform,inherit)]"), Tx = Y("block max-w-full overflow-hidden text-ellipsis whitespace-nowrap", wx, "text-[var(--pc-color-input-label-text,var(--pc-color-text-muted))]"), Ex = "text-[var(--pc-color-input-error-text,var(--pc-color-text))]", Dx = "mb-[var(--pc-space-input-label-gap,0.25rem)]", Ox = "gap-[var(--pc-space-input-label-gap,0.25rem)]", kx = "flex flex-col", Ax = "mt-1 block max-w-full", jx = {
	error: [
		"text-[length:var(--pc-font-input-error-size,var(--_pc-input-message-size,14px))]",
		"leading-[var(--pc-font-input-error-line-height,var(--_pc-input-message-line-height,20px))]",
		"[font-weight:var(--pc-font-input-error-weight,400)]",
		"[letter-spacing:var(--pc-font-input-error-letter-spacing,inherit)]",
		"[font-style:var(--pc-font-input-error-style,inherit)]",
		"[text-transform:var(--pc-font-input-error-text-transform,inherit)]"
	].join(" "),
	helper: [
		"text-[length:var(--pc-font-input-helper-size,var(--_pc-input-message-size,14px))]",
		"leading-[var(--pc-font-input-helper-line-height,var(--_pc-input-message-line-height,20px))]",
		"[font-weight:var(--pc-font-input-helper-weight,400)]",
		"[letter-spacing:var(--pc-font-input-helper-letter-spacing,inherit)]",
		"[font-style:var(--pc-font-input-helper-style,inherit)]",
		"[text-transform:var(--pc-font-input-helper-text-transform,inherit)]"
	].join(" ")
}, Mx = {
	error: "text-[var(--pc-color-input-error-text,var(--pc-color-text))]",
	helper: "text-[var(--pc-color-input-helper-text,var(--pc-color-text-muted))]",
	darkError: "text-[var(--pc-color-input-error-text,var(--pc-color-text))]",
	darkHelper: "text-[var(--pc-color-input-helper-text,var(--pc-color-text-muted))]"
}, Nx = {
	error: `${Ax} ${jx.error} ${Mx.error}`,
	helper: `${Ax} ${jx.helper} ${Mx.helper}`,
	darkError: `${Ax} ${jx.error} ${Mx.darkError}`,
	darkHelper: `${Ax} ${jx.helper} ${Mx.darkHelper}`
}, Px = "flex items-center", Fx = Cx, Ix = [lx].join(" "), Lx = "relative flex w-full items-center", Rx = "relative flex w-full", zx = "px-[var(--pc-space-input-padding-x,0.875rem)]", Bx = "px-[var(--pc-space-input-padding-x,0.875rem)]", Vx = "px-[var(--pc-space-input-padding-x,0.875rem)]", Hx = "px-[var(--pc-space-input-padding-x,0.875rem)]", Ux = {
	neutralLight: hx,
	neutralDark: hx,
	errorLight: _x,
	errorDark: _x
}, Wx = "text-[length:var(--pc-font-size-input,16px)] leading-[var(--pc-font-line-height-input,20px)]", Gx = "py-[var(--pc-space-input-padding-y,0.5rem)]", Kx = "py-[var(--pc-space-input-padding-y,0.5rem)]", qx = "py-[var(--pc-space-input-padding-y,0.5rem)]", Jx = "py-[var(--pc-space-input-padding-y,0.5rem)]", Yx = "py-[calc(var(--pc-space-input-padding-y,0.5rem)*0.75)]", Xx = "py-[calc(var(--pc-space-input-padding-y,0.5rem)*0.75)]", Zx = `${Gx} ${Wx}`, Qx = `${Kx} ${Wx}`, $x = `${qx} ${Wx}`, eS = `${Jx} ${Wx}`, tS = `${Yx} ${Wx}`, nS = `${Xx} ${Wx}`, rS = {
	typography: Wx,
	padding: {
		default: Gx,
		hiddenDefault: Kx,
		select: qx,
		hiddenSelect: Jx,
		compact: Yx,
		hiddenCompact: Xx
	},
	spacing: {
		default: Zx,
		hiddenDefault: Qx,
		textarea: Zx,
		hiddenTextarea: Qx,
		select: $x,
		hiddenSelect: eS,
		compact: tS,
		selectCompact: tS,
		hiddenCompact: nS,
		hiddenSelectCompact: nS
	}
}, iS = [
	"absolute",
	"max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
	"pointer-events-none",
	"leading-tight",
	"transition-all duration-200 ease-in-out"
].join(" "), aS = "gap-[var(--pc-space-input-gap,0.625rem)]", oS = "relative flex-1", sS = sx, cS = [
	"appearance-none",
	"[&::-webkit-search-decoration]:hidden",
	"[&::-webkit-search-cancel-button]:hidden",
	"[&::-webkit-search-results-button]:hidden",
	"[&::-webkit-search-results-decoration]:hidden"
].join(" "), lS = [
	"appearance-none",
	"[font-variant-numeric:tabular-nums]",
	"[&::-webkit-calendar-picker-indicator]:hidden",
	"[&::-webkit-calendar-picker-indicator]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-clear-button]:hidden"
].join(" "), uS = [
	"appearance-none",
	"[&::-webkit-inner-spin-button]:appearance-none",
	"[&::-webkit-outer-spin-button]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-outer-spin-button]:hidden"
].join(" "), dS = [
	"peer w-full bg-transparent outline-0 px-0",
	vx,
	yx,
	sS
].join(" "), fS = [
	"peer block w-full min-h-48 resize-y bg-transparent px-0 outline-0",
	vx,
	yx,
	sS
].join(" "), pS = {
	container: kx,
	label: { floating: iS },
	control: rS,
	wrapper: {
		base: Ix,
		inline: Lx,
		block: Rx,
		spacing: zx,
		spacingCompact: Vx,
		spacingWithLabel: zx,
		spacingWithLabelCompact: Bx,
		spacingWithoutLabel: Vx,
		spacingWithoutLabelCompact: Hx,
		tone: Ux
	},
	adornment: {
		base: Px,
		dark: Fx
	},
	gap: aS,
	inner: oS,
	input: {
		base: dS,
		textarea: fS
	},
	messages: {
		base: Ax,
		tone: Mx,
		composed: Nx
	}
}, mS = {
	container: pS.container,
	message: {
		base: Ax,
		errorTone: Mx.error,
		helperTone: Mx.helper,
		darkErrorTone: Mx.darkError,
		darkHelperTone: Mx.darkHelper
	},
	adornment: {
		base: Px,
		darkTone: Fx
	}
}, hS = pS.messages.composed, gS = pS.adornment, _S = pS.inner, vS = pS.gap, yS = pS.control, bS = pS.wrapper.inline, xS = pS.wrapper.block, SS = pS.wrapper.base, CS = hx, wS = gx, TS = _x, ES = pS.wrapper.spacingWithLabel, DS = pS.wrapper.spacingWithLabelCompact, OS = pS.wrapper.spacingWithoutLabel, kS = pS.wrapper.spacingWithoutLabelCompact, AS = pS.input.base, jS = pS.input.textarea, MS = cS, NS = lS, PS = uS, FS = [
	"w-full border-0 bg-transparent",
	"px-3 py-2",
	yS.typography,
	vx,
	yx,
	Sx,
	"focus:outline-none",
	"disabled:cursor-default disabled:opacity-60"
].join(" "), IS = He(function({ value: e, onChange: t, onKeyDown: n, placeholder: r, ariaLabel: i, disabled: a = !1 }, o) {
	return /* @__PURE__ */ q("div", {
		className: "border-b border-[var(--pc-color-border-weakest)] px-1 py-2",
		children: /* @__PURE__ */ q("input", {
			ref: o,
			type: "text",
			autoComplete: "off",
			value: e,
			onChange: (e) => {
				t(e.currentTarget.value);
			},
			onKeyDown: n,
			className: FS,
			placeholder: r,
			"aria-label": i,
			disabled: a
		})
	});
});
IS.displayName = "DropdownSearchInput";
//#endregion
//#region ../../node_modules/@date-fns/tz/tzName/index.js
function LS(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region ../../node_modules/@date-fns/tz/tzOffset/index.js
var RS = {}, zS = {};
function BS(e, t) {
	try {
		let n = (RS[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in zS ? zS[n] : HS(n, n.split(":"));
	} catch {
		if (e in zS) return zS[e];
		let t = e?.match(VS);
		return t ? HS(e, t.slice(1)) : NaN;
	}
}
var VS = /([+-]\d\d):?(\d\d)?/;
function HS(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return zS[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/mini.js
var US = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(BS(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), qS(this, NaN), GS(this)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -BS(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), GS(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, WS = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!WS.test(e)) return;
	let t = e.replace(WS, "$1UTC");
	US.prototype[t] && (e.startsWith("get") ? US.prototype[e] = function() {
		return this.internal[t]();
	} : (US.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), KS(this), +this;
	}, US.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), GS(this), +this;
	}));
});
function GS(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-BS(e.timeZone, e) * 60));
}
function KS(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), qS(e);
}
function qS(e) {
	let t = BS(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let i = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = i - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	let s = i - n;
	s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
	let c = /* @__PURE__ */ new Date(+e);
	c.setUTCSeconds(0);
	let l = i > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, u = Math.round(-(BS(e.timeZone, e) * 60)) % 60;
	(u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
	let d = BS(e.timeZone, e), f = d > 0 ? Math.floor(d) : Math.ceil(d), p = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - f, m = f !== n, h = p - s;
	if (m && h) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + h);
		let t = BS(e.timeZone, e), n = f - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + n), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n));
	}
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/index.js
var JS = class e extends US {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${LS(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, YS = 6048e5, XS = 864e5, ZS = Symbol.for("constructDateFrom");
//#endregion
//#region ../../node_modules/date-fns/constructFrom.js
function QS(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ZS in e ? e[ZS](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region ../../node_modules/date-fns/toDate.js
function $S(e, t) {
	return QS(t || e, e);
}
//#endregion
//#region ../../node_modules/date-fns/addDays.js
function eC(e, t, n) {
	let r = $S(e, n?.in);
	return isNaN(t) ? QS(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region ../../node_modules/date-fns/addMonths.js
function tC(e, t, n) {
	let r = $S(e, n?.in);
	if (isNaN(t)) return QS(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = QS(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region ../../node_modules/date-fns/_lib/defaultOptions.js
var nC = {};
function rC() {
	return nC;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeek.js
function iC(e, t) {
	let n = rC(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = $S(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeek.js
function aC(e, t) {
	return iC(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeekYear.js
function oC(e, t) {
	let n = $S(e, t?.in), r = n.getFullYear(), i = QS(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = aC(i), o = QS(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = aC(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function sC(e) {
	let t = $S(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeDates.js
function cC(e, ...t) {
	let n = QS.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region ../../node_modules/date-fns/startOfDay.js
function lC(e, t) {
	let n = $S(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarDays.js
function uC(e, t, n) {
	let [r, i] = cC(n?.in, e, t), a = lC(r), o = lC(i), s = +a - sC(a), c = +o - sC(o);
	return Math.round((s - c) / XS);
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeekYear.js
function dC(e, t) {
	let n = oC(e, t), r = QS(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), aC(r);
}
//#endregion
//#region ../../node_modules/date-fns/addWeeks.js
function fC(e, t, n) {
	return eC(e, t * 7, n);
}
//#endregion
//#region ../../node_modules/date-fns/addYears.js
function pC(e, t, n) {
	return tC(e, t * 12, n);
}
//#endregion
//#region ../../node_modules/date-fns/max.js
function mC(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = QS.bind(null, e));
		let t = $S(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), QS(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/min.js
function hC(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = QS.bind(null, e));
		let t = $S(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), QS(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/isSameDay.js
function gC(e, t, n) {
	let [r, i] = cC(n?.in, e, t);
	return +lC(r) == +lC(i);
}
//#endregion
//#region ../../node_modules/date-fns/isDate.js
function _C(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/date-fns/isValid.js
function vC(e) {
	return !(!_C(e) && typeof e != "number" || isNaN(+$S(e)));
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarMonths.js
function yC(e, t, n) {
	let [r, i] = cC(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region ../../node_modules/date-fns/endOfMonth.js
function bC(e, t) {
	let n = $S(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeInterval.js
function xC(e, t) {
	let [n, r] = cC(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region ../../node_modules/date-fns/eachMonthOfInterval.js
function SC(e, t) {
	let { start: n, end: r } = xC(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(QS(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/startOfMonth.js
function CC(e, t) {
	let n = $S(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/endOfYear.js
function wC(e, t) {
	let n = $S(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/startOfYear.js
function TC(e, t) {
	let n = $S(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/eachYearOfInterval.js
function EC(e, t) {
	let { start: n, end: r } = xC(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(QS(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/endOfWeek.js
function DC(e, t) {
	let n = rC(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = $S(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region ../../node_modules/date-fns/endOfISOWeek.js
function OC(e, t) {
	return DC(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var kC = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, AC = (e, t, n) => {
	let r, i = kC[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function jC(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var MC = {
	date: jC({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: jC({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: jC({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, NC = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, PC = (e, t, n, r) => NC[e];
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function FC(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var IC = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: FC({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: FC({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: FC({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: FC({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: FC({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
function LC(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? zC(s, (e) => e.test(o)) : RC(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function RC(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function zC(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function BC(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US.js
var VC = {
	code: "en-US",
	formatDistance: AC,
	formatLong: MC,
	formatRelative: PC,
	localize: IC,
	match: {
		ordinalNumber: BC({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: LC({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: LC({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: LC({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: LC({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: LC({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region ../../node_modules/date-fns/getDayOfYear.js
function HC(e, t) {
	let n = $S(e, t?.in);
	return uC(n, TC(n)) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeek.js
function UC(e, t) {
	let n = $S(e, t?.in), r = +aC(n) - dC(n);
	return Math.round(r / YS) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getWeekYear.js
function WC(e, t) {
	let n = $S(e, t?.in), r = n.getFullYear(), i = rC(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = QS(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = iC(o, t), c = QS(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = iC(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeekYear.js
function GC(e, t) {
	let n = rC(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = WC(e, t), a = QS(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), iC(a, t);
}
//#endregion
//#region ../../node_modules/date-fns/getWeek.js
function KC(e, t) {
	let n = $S(e, t?.in), r = +iC(n, t) - GC(n, t);
	return Math.round(r / YS) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/addLeadingZeros.js
function qC(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/lightFormatters.js
var JC = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return qC(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : qC(n + 1, 2);
	},
	d(e, t) {
		return qC(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return qC(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return qC(e.getHours(), t.length);
	},
	m(e, t) {
		return qC(e.getMinutes(), t.length);
	},
	s(e, t) {
		return qC(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return qC(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, YC = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, XC = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return JC.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = WC(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? qC(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : qC(a, t.length);
	},
	R: function(e, t) {
		return qC(oC(e), t.length);
	},
	u: function(e, t) {
		return qC(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return qC(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return qC(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return JC.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return qC(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = KC(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : qC(i, t.length);
	},
	I: function(e, t, n) {
		let r = UC(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : qC(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : JC.d(e, t);
	},
	D: function(e, t, n) {
		let r = HC(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : qC(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return qC(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return qC(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return qC(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? YC.noon : r === 0 ? YC.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? YC.evening : r >= 12 ? YC.afternoon : r >= 4 ? YC.morning : YC.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return JC.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : JC.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : qC(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : qC(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : JC.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : JC.s(e, t);
	},
	S: function(e, t) {
		return JC.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return QC(r);
			case "XXXX":
			case "XX": return $C(r);
			default: return $C(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return QC(r);
			case "xxxx":
			case "xx": return $C(r);
			default: return $C(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + ZC(r, ":");
			default: return "GMT" + $C(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + ZC(r, ":");
			default: return "GMT" + $C(r, ":");
		}
	},
	t: function(e, t, n) {
		return qC(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return qC(+e, t.length);
	}
};
function ZC(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + qC(a, 2);
}
function QC(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + qC(Math.abs(e) / 60, 2) : $C(e, t);
}
function $C(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = qC(Math.trunc(r / 60), 2), a = qC(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/longFormatters.js
var ew = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, tw = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, nw = {
	p: tw,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return ew(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default: a = t.dateTime({ width: "full" });
		}
		return a.replace("{{date}}", ew(r, t)).replace("{{time}}", tw(i, t));
	}
}, rw = /^D+$/, iw = /^Y+$/, aw = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function ow(e) {
	return rw.test(e);
}
function sw(e) {
	return iw.test(e);
}
function cw(e, t, n) {
	let r = lw(e, t, n);
	if (console.warn(r), aw.includes(e)) throw RangeError(r);
}
function lw(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region ../../node_modules/date-fns/format.js
var uw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, dw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, fw = /^'([^]*?)'?$/, pw = /''/g, mw = /[a-zA-Z]/;
function hw(e, t, n) {
	let r = rC(), i = n?.locale ?? r.locale ?? VC, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = $S(e, n?.in);
	if (!vC(s)) throw RangeError("Invalid time value");
	let c = t.match(dw).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = nw[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(uw).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: gw(e)
		};
		if (XC[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(mw)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && sw(a) || !n?.useAdditionalDayOfYearTokens && ow(a)) && cw(a, t, String(e));
		let o = XC[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function gw(e) {
	let t = e.match(fw);
	return t ? t[1].replace(pw, "'") : e;
}
//#endregion
//#region ../../node_modules/date-fns/getDaysInMonth.js
function _w(e, t) {
	let n = $S(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = QS(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region ../../node_modules/date-fns/getMonth.js
function vw(e, t) {
	return $S(e, t?.in).getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/getYear.js
function yw(e, t) {
	return $S(e, t?.in).getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/isAfter.js
function bw(e, t) {
	return +$S(e) > +$S(t);
}
//#endregion
//#region ../../node_modules/date-fns/isBefore.js
function xw(e, t) {
	return +$S(e) < +$S(t);
}
//#endregion
//#region ../../node_modules/date-fns/isSameMonth.js
function Sw(e, t, n) {
	let [r, i] = cC(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/isSameYear.js
function Cw(e, t, n) {
	let [r, i] = cC(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/setMonth.js
function ww(e, t, n) {
	let r = $S(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = QS(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = _w(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region ../../node_modules/date-fns/setYear.js
function Tw(e, t, n) {
	let r = $S(e, n?.in);
	return isNaN(+r) ? QS(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var Ew = 5, Dw = 4;
function Ow(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, 34);
	return t.getMonth(e) === t.getMonth(a) ? Ew : Dw;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function kw(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function Aw(e, t) {
	let n = kw(e, t), r = Ow(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/classes/DateLib.js
var jw = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? JS.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new JS(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : eC(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : tC(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : fC(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : pC(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : uC(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : yC(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : SC(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : EC(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : Aw(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : OC(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : bC(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : DC(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : wC(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : hw(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : UC(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : vw(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : yw(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : KC(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : bw(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : xw(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : _C(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : gC(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : Sw(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : Cw(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : mC(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : hC(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : ww(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : Tw(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : kw(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : lC(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : aC(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : CC(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : iC(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : TC(e), this.options = {
			locale: VC,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
	getMonthYearOrder() {
		let t = this.options.locale?.code;
		return t && e.yearFirstLocales.has(t) ? "year-first" : "month-first";
	}
	formatMonthYear(t) {
		let { locale: n, timeZone: r, numerals: i } = this.options, a = n?.code;
		if (a && e.yearFirstLocales.has(a)) try {
			return new Intl.DateTimeFormat(a, {
				month: "long",
				year: "numeric",
				timeZone: r,
				numberingSystem: i
			}).format(t);
		} catch {}
		let o = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(t, o);
	}
};
jw.yearFirstLocales = /* @__PURE__ */ new Set([
	"eu",
	"hu",
	"ja",
	"ja-Hira",
	"ja-JP",
	"ko",
	"ko-KR",
	"lt",
	"lt-LT",
	"lv",
	"lv-LV",
	"mn",
	"mn-MN",
	"zh",
	"zh-CN",
	"zh-HK",
	"zh-TW"
]);
var Mw = new jw(), Nw = class {
	constructor(e, t, n = Mw) {
		this.date = e, this.displayMonth = t, this.outside = !(!t || n.isSameMonth(e, t)), this.dateLib = n;
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, Pw = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, Fw = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Button.js
function Iw(e) {
	return V.createElement("button", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function Lw(e) {
	return V.createElement("span", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Chevron.js
function Rw(e) {
	let { size: t = 24, orientation: n = "left", className: r } = e;
	return V.createElement("svg", {
		className: r,
		width: t,
		height: t,
		viewBox: "0 0 24 24"
	}, n === "up" && V.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), n === "down" && V.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), n === "left" && V.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), n === "right" && V.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Day.js
function zw(e) {
	let { day: t, modifiers: n, ...r } = e;
	return V.createElement("td", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DayButton.js
function Bw(e) {
	let { day: t, modifiers: n, ...r } = e, i = V.useRef(null);
	return V.useEffect(() => {
		n.focused && i.current?.focus();
	}, [n.focused]), V.createElement("button", {
		ref: i,
		...r
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/UI.js
var Vw;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Vw ||= {});
var Hw;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Hw ||= {});
var Uw;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Uw ||= {});
var Ww;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ww ||= {});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Dropdown.js
function Gw(e) {
	let { options: t, className: n, components: r, classNames: i, ...a } = e, o = [i[Vw.Dropdown], n].join(" "), s = t?.find(({ value: e }) => e === a.value);
	return V.createElement("span", {
		"data-disabled": a.disabled,
		className: i[Vw.DropdownRoot]
	}, V.createElement(r.Select, {
		className: o,
		...a
	}, t?.map(({ value: e, label: t, disabled: n }) => V.createElement(r.Option, {
		key: e,
		value: e,
		disabled: n
	}, t))), V.createElement("span", {
		className: i[Vw.CaptionLabel],
		"aria-hidden": !0
	}, s?.label, V.createElement(r.Chevron, {
		orientation: "down",
		size: 18,
		className: i[Vw.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function Kw(e) {
	return V.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Footer.js
function qw(e) {
	return V.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Month.js
function Jw(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return V.createElement("div", { ...r }, e.children);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function Yw(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return V.createElement("div", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function Xw(e) {
	return V.createElement("table", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Months.js
function Zw(e) {
	return V.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useDayPicker.js
var Qw = Be(void 0);
function $w() {
	let e = U(Qw);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function eT(e) {
	let { components: t } = $w();
	return V.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Nav.js
function tT(e) {
	let { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: i, ...a } = e, { components: o, classNames: s, labels: { labelPrevious: c, labelNext: l } } = $w(), u = H((e) => {
		i && n?.(e);
	}, [i, n]), d = H((e) => {
		r && t?.(e);
	}, [r, t]);
	return V.createElement("nav", { ...a }, V.createElement(o.PreviousMonthButton, {
		type: "button",
		className: s[Vw.PreviousMonthButton],
		tabIndex: r ? void 0 : -1,
		"aria-disabled": !r || void 0,
		"aria-label": c(r),
		onClick: d
	}, V.createElement(o.Chevron, {
		disabled: !r || void 0,
		className: s[Vw.Chevron],
		orientation: "left"
	})), V.createElement(o.NextMonthButton, {
		type: "button",
		className: s[Vw.NextMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": !i || void 0,
		"aria-label": l(i),
		onClick: u
	}, V.createElement(o.Chevron, {
		disabled: !i || void 0,
		orientation: "right",
		className: s[Vw.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function nT(e) {
	let { components: t } = $w();
	return V.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Option.js
function rT(e) {
	return V.createElement("option", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function iT(e) {
	let { components: t } = $w();
	return V.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Root.js
function aT(e) {
	let { rootRef: t, ...n } = e;
	return V.createElement("div", {
		...n,
		ref: t
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Select.js
function oT(e) {
	return V.createElement("select", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Week.js
function sT(e) {
	let { week: t, ...n } = e;
	return V.createElement("tr", { ...n });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekday.js
function cT(e) {
	return V.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekdays.js
function lT(e) {
	return V.createElement("thead", { "aria-hidden": !0 }, V.createElement("tr", { ...e }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function uT(e) {
	let { week: t, ...n } = e;
	return V.createElement("th", { ...n });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function dT(e) {
	return V.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weeks.js
function fT(e) {
	return V.createElement("tbody", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function pT(e) {
	let { components: t } = $w();
	return V.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/custom-components.js
var mT = /* @__PURE__ */ t({
	Button: () => Iw,
	CaptionLabel: () => Lw,
	Chevron: () => Rw,
	Day: () => zw,
	DayButton: () => Bw,
	Dropdown: () => Gw,
	DropdownNav: () => Kw,
	Footer: () => qw,
	Month: () => Jw,
	MonthCaption: () => Yw,
	MonthGrid: () => Xw,
	Months: () => Zw,
	MonthsDropdown: () => eT,
	Nav: () => tT,
	NextMonthButton: () => nT,
	Option: () => rT,
	PreviousMonthButton: () => iT,
	Root: () => aT,
	Select: () => oT,
	Week: () => sT,
	WeekNumber: () => uT,
	WeekNumberHeader: () => dT,
	Weekday: () => cT,
	Weekdays: () => lT,
	Weeks: () => fT,
	YearsDropdown: () => pT
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function hT(e, t, n = !1, r = Mw) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/typeguards.js
function gT(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function _T(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function vT(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function yT(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function bT(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function xT(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function ST(e, t, n = Mw) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (xT(t, n)) return t.includes(e);
		if (_T(t)) return hT(t, e, !1, n);
		if (bT(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (gT(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return vT(t) ? a(e, t.after) > 0 : yT(t) ? a(t.before, e) > 0 : typeof t == "function" && t(e);
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function CT(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[Hw.focused]: [],
		[Hw.outside]: [],
		[Hw.disabled]: [],
		[Hw.hidden]: [],
		[Hw.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !(!n || f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && ST(e, a, i)), S = !!(o && ST(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u ?? i.today());
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && ST(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[Hw.focused]: !1,
			[Hw.disabled]: !1,
			[Hw.hidden]: !1,
			[Hw.outside]: !1,
			[Hw.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function wT(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[Hw[r]] ? e.push(t[Hw[r]]) : t[Uw[r]] && e.push(t[Uw[r]]), e), [t[Vw.Day]]);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function TT(e) {
	return {
		...mT,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function ET(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function DT() {
	let e = {};
	for (let t in Vw) e[Vw[t]] = `rdp-${Vw[t]}`;
	for (let t in Hw) e[Hw[t]] = `rdp-${Hw[t]}`;
	for (let t in Uw) e[Uw[t]] = `rdp-${Uw[t]}`;
	for (let t in Ww) e[Ww[t]] = `rdp-${Ww[t]}`;
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function OT(e, t, n) {
	return (n ?? new jw(t)).formatMonthYear(e);
}
var kT = OT;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function AT(e, t, n) {
	return (n ?? new jw(t)).format(e, "d");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function jT(e, t = Mw) {
	return t.format(e, "LLLL");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function MT(e, t, n) {
	return (n ?? new jw(t)).format(e, "cccccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function NT(e, t = Mw) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function PT() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function FT(e, t = Mw) {
	return t.format(e, "yyyy");
}
var IT = FT, LT = /* @__PURE__ */ t({
	formatCaption: () => OT,
	formatDay: () => AT,
	formatMonthCaption: () => kT,
	formatMonthDropdown: () => jT,
	formatWeekNumber: () => NT,
	formatWeekNumberHeader: () => PT,
	formatWeekdayName: () => MT,
	formatYearCaption: () => IT,
	formatYearDropdown: () => FT
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function RT(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...LT,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function zT(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function BT(e, t = {}, n = {}) {
	let r = { ...t?.[Vw.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function VT(e, t, n) {
	let r = e.today(), i = n ? e.startOfBroadcastWeek(r, e) : t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(i, t);
		a.push(n);
	}
	return a;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function HT(e, t, n, r, i = !1) {
	if (!e || !t) return;
	let { startOfYear: a, endOfYear: o, eachYearOfInterval: s, getYear: c } = r, l = s({
		start: a(e),
		end: o(t)
	});
	return i && l.reverse(), l.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: c(e),
			label: t,
			disabled: !1
		};
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function UT(e, t, n, r) {
	let i = (r ?? new jw(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var WT = UT;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function GT(e, t, n) {
	return (n ?? new jw(t)).formatMonthYear(e);
}
var KT = GT;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function qT(e, t, n, r) {
	let i = (r ?? new jw(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function JT(e) {
	return "Choose the Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNav.js
function YT() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNext.js
function XT(e) {
	return "Go to the Next Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function ZT(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function QT(e, t, n) {
	return (n ?? new jw(t)).format(e, "cccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function $T(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function eE(e) {
	return "Week Number";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function tE(e) {
	return "Choose the Year";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/index.js
var nE = /* @__PURE__ */ t({
	labelCaption: () => KT,
	labelDay: () => WT,
	labelDayButton: () => UT,
	labelGrid: () => GT,
	labelGridcell: () => qT,
	labelMonthDropdown: () => JT,
	labelNav: () => YT,
	labelNext: () => XT,
	labelPrevious: () => ZT,
	labelWeekNumber: () => $T,
	labelWeekNumberHeader: () => eE,
	labelWeekday: () => QT,
	labelYearDropdown: () => tE
}), rE = (e) => e instanceof HTMLElement ? e : null, iE = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], aE = (e) => rE(e.querySelector("[data-animated-month]")), oE = (e) => rE(e.querySelector("[data-animated-caption]")), sE = (e) => rE(e.querySelector("[data-animated-weeks]")), cE = (e) => rE(e.querySelector("[data-animated-nav]")), lE = (e) => rE(e.querySelector("[data-animated-weekdays]"));
function uE(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = G(null), s = G(r), c = G(!1);
	Je(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[Ww.caption_after_enter] : n[Ww.caption_before_enter], p = d ? n[Ww.weeks_after_enter] : n[Ww.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (iE(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = aE(e);
			t && e.contains(t) && e.removeChild(t);
			let n = oE(e);
			n && n.classList.remove(f);
			let r = sE(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? iE(m) : [], _ = iE(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = cE(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = oE(i);
				s && s.classList.add(f);
				let l = sE(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = lE(o);
				m && (m.style.opacity = "0");
				let h = oE(o);
				h && (h.classList.add(d ? n[Ww.caption_before_exit] : n[Ww.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = sE(o);
				_ && _.classList.add(d ? n[Ww.weeks_before_exit] : n[Ww.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDates.js
function dE(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = u(c ? f(a) : o ? p(m(a)) : h(m(a)), b), S = d(a, i) + 1, C = [];
	for (let e = 0; e <= x; e++) {
		let n = l(b, e);
		if (t && g(n, t)) break;
		C.push(n);
	}
	let w = (c ? 35 : 42) * S;
	if (s && C.length < w) {
		let e = w - C.length;
		for (let t = 0; t < e; t++) {
			let e = l(C[C.length - 1], 1);
			C.push(e);
		}
	}
	return C;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDays.js
function fE(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function pE(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function mE(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function hE(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new Pw(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new Nw(t, m, r);
			return a ? a.days.push(o) : e.push(new Fw(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function gE(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function _E(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function vE(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function yE(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function bE(e, t) {
	let [n, r] = K(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useCalendar.js
function xE(e, t) {
	let [n, r] = gE(e, t), { startOfMonth: i, endOfMonth: a } = t, o = mE(e, n, r, t), [s, c] = bE(o, e.month ? o : void 0);
	Ge(() => {
		let i = mE(e, n, r, t);
		c(i);
	}, [e.timeZone]);
	let l = pE(s, r, e, t), u = hE(l, dE(l, e.endMonth ? a(e.endMonth) : void 0, e, t), e, t), d = yE(u), f = fE(u), p = vE(s, n, e, t), m = _E(s, r, e, t), { disableNavigation: h, onMonthChange: g } = e, _ = (e) => d.some((t) => t.days.some((t) => t.isEqualTo(e))), v = (e) => {
		if (h) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), g?.(t);
	};
	return {
		months: u,
		weeks: d,
		days: f,
		navStart: n,
		navEnd: r,
		previousMonth: p,
		nextMonth: m,
		goToMonth: v,
		goToDay: (e) => {
			_(e) || v(e.date);
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var SE;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(SE ||= {});
function CE(e) {
	return !e[Hw.disabled] && !e[Hw.hidden] && !e[Hw.outside];
}
function wE(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		CE(e) && (e[Hw.focused] && a < SE.FocusedModifier ? (i = o, a = SE.FocusedModifier) : r?.isEqualTo(o) && a < SE.LastFocused ? (i = o, a = SE.LastFocused) : n(o.date) && a < SE.Selected ? (i = o, a = SE.Selected) : e[Hw.today] && a < SE.Today && (i = o, a = SE.Today));
	}
	return i ||= e.find((e) => CE(t(e))), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function TE(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function EE(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = TE(e, t, n.date, r, i, a, o), l = !!(a.disabled && ST(c, a.disabled, o)), u = !!(a.hidden && ST(c, a.hidden, o)), d = new Nw(c, c, o);
	return !l && !u ? d : EE(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useFocus.js
function DE(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = K(), c = wE(t.days, n, r || (() => !1), o), [l, u] = K(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = EE(n, r, l, t.navStart, t.navEnd, e, i);
			a && (!e.disableNavigation || t.days.some((e) => e.isEqualTo(a))) && (t.goToDay(a), u(a));
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useMulti.js
function OE(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = bE(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/addToRange.js
function kE(e, t, n = 0, r = 0, i = !1, a = Mw) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? n === 0 ? {
		from: o,
		to: e
	} : i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) {
		if (c(o, e) && c(s, e)) d = i ? {
			from: o,
			to: s
		} : void 0;
		else if (c(o, e)) d = {
			from: o,
			to: n > 0 ? void 0 : e
		};
		else if (c(s, e)) d = {
			from: e,
			to: n > 0 ? void 0 : e
		};
		else if (u(e, o)) d = {
			from: e,
			to: s
		};
		else if (l(e, o)) d = {
			from: o,
			to: e
		};
		else if (l(e, s)) d = {
			from: o,
			to: e
		};
		else throw Error("Invalid range");
	}
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function AE(e, t, n = Mw) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function jE(e, t, n = Mw) {
	return hT(e, t.from, !1, n) || hT(e, t.to, !1, n) || hT(t, e.from, !1, n) || hT(t, e.to, !1, n);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function ME(e, t, n = Mw) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? hT(e, t, !1, n) : xT(t, n) ? t.some((t) => hT(e, t, !1, n)) : _T(t) ? t.from && t.to ? jE(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : bT(t) ? AE(e, t.dayOfWeek, n) : gT(t) ? n.isAfter(t.before, t.after) ? jE(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : ST(e.from, t, n) || ST(e.to, t, n) : vT(t) || yT(t) ? ST(e.from, t, n) || ST(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useRange.js
function NE(e, t) {
	let { disabled: n, excludeDisabled: r, selected: i, required: a, onSelect: o } = e, [s, c] = bE(i, o ? i : void 0), l = o ? i : s;
	return {
		selected: l,
		select: (i, s, u) => {
			let { min: d, max: f } = e, p = i ? kE(i, l, d, f, a, t) : void 0;
			return r && n && p?.from && p.to && ME({
				from: p.from,
				to: p.to
			}, n, t) && (p.from = i, p.to = void 0), o || c(p), o?.(p, i, s, u), p;
		},
		isSelected: (e) => l && hT(l, e, !1, t)
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useSingle.js
function PE(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = bE(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useSelection.js
function FE(e, t) {
	let n = PE(e, t), r = OE(e, t), i = NE(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/DayPicker.js
function IE(e) {
	let t = e;
	t.timeZone && (t = { ...e }, t.today && (t.today = new JS(t.today, t.timeZone)), t.month && (t.month = new JS(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new JS(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new JS(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new JS(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new JS(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((e) => new JS(e, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
		from: t.selected.from ? new JS(t.selected.from, t.timeZone) : void 0,
		to: t.selected.to ? new JS(t.selected.to, t.timeZone) : void 0
	}));
	let { components: n, formatters: r, labels: i, dateLib: a, locale: o, classNames: s } = W(() => {
		let e = {
			...VC,
			...t.locale
		};
		return {
			dateLib: new jw({
				locale: e,
				weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
				firstWeekContainsDate: t.firstWeekContainsDate,
				useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
				useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
				timeZone: t.timeZone,
				numerals: t.numerals
			}, t.dateLib),
			components: TT(t.components),
			formatters: RT(t.formatters),
			labels: {
				...nE,
				...t.labels
			},
			locale: e,
			classNames: {
				...DT(),
				...t.classNames
			}
		};
	}, [
		t.locale,
		t.broadcastCalendar,
		t.weekStartsOn,
		t.firstWeekContainsDate,
		t.useAdditionalWeekYearTokens,
		t.useAdditionalDayOfYearTokens,
		t.timeZone,
		t.numerals,
		t.dateLib,
		t.components,
		t.formatters,
		t.labels,
		t.classNames
	]), { captionLayout: c, mode: l, navLayout: u, numberOfMonths: d = 1, onDayBlur: f, onDayClick: p, onDayFocus: m, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: _, onNextClick: v, onPrevClick: y, showWeekNumber: b, styles: x } = t, { formatCaption: S, formatDay: C, formatMonthDropdown: w, formatWeekNumber: T, formatWeekNumberHeader: E, formatWeekdayName: D, formatYearDropdown: O } = r, k = xE(t, a), { days: A, months: j, navStart: M, navEnd: N, previousMonth: P, nextMonth: F, goToMonth: I } = k, ee = CT(A, t, M, N, a), { isSelected: te, select: ne, selected: re } = FE(t, a) ?? {}, { blur: L, focused: R, isFocusTarget: z, moveFocus: ie, setFocused: ae } = DE(t, k, ee, te ?? (() => !1), a), { labelDayButton: oe, labelGridcell: se, labelGrid: ce, labelMonthDropdown: le, labelNav: B, labelPrevious: ue, labelNext: de, labelWeekday: fe, labelWeekNumber: pe, labelWeekNumberHeader: me, labelYearDropdown: he } = i, ge = W(() => VT(a, t.ISOWeek), [a, t.ISOWeek]), _e = l !== void 0 || p !== void 0, ve = H(() => {
		P && (I(P), y?.(P));
	}, [
		P,
		I,
		y
	]), ye = H(() => {
		F && (I(F), v?.(F));
	}, [
		I,
		F,
		v
	]), be = H((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), ae(e), ne?.(e.date, t, n), p?.(e.date, t, n);
	}, [
		ne,
		p,
		ae
	]), xe = H((e, t) => (n) => {
		ae(e), m?.(e.date, t, n);
	}, [m, ae]), Se = H((e, t) => (n) => {
		L(), f?.(e.date, t, n);
	}, [L, f]), Ce = H((e, n) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			ie(e, t);
		}
		h?.(e.date, n, r);
	}, [
		ie,
		h,
		t.dir
	]), we = H((e, t) => (n) => {
		g?.(e.date, t, n);
	}, [g]), Te = H((e, t) => (n) => {
		_?.(e.date, t, n);
	}, [_]), Ee = H((e) => (t) => {
		let n = Number(t.target.value), r = a.setMonth(a.startOfMonth(e), n);
		I(r);
	}, [a, I]), De = H((e) => (t) => {
		let n = Number(t.target.value), r = a.setYear(a.startOfMonth(e), n);
		I(r);
	}, [a, I]), { className: Oe, style: ke } = W(() => ({
		className: [s[Vw.Root], t.className].filter(Boolean).join(" "),
		style: {
			...x?.[Vw.Root],
			...t.style
		}
	}), [
		s,
		t.className,
		t.style,
		x
	]), Ae = ET(t), je = G(null);
	uE(je, !!t.animate, {
		classNames: s,
		months: j,
		focused: R,
		dateLib: a
	});
	let Me = {
		dayPickerProps: t,
		selected: re,
		select: ne,
		isSelected: te,
		months: j,
		nextMonth: F,
		previousMonth: P,
		goToMonth: I,
		getModifiers: ee,
		components: n,
		classNames: s,
		styles: x,
		labels: i,
		formatters: r
	};
	return V.createElement(Qw.Provider, { value: Me }, V.createElement(n.Root, {
		rootRef: t.animate ? je : void 0,
		className: Oe,
		style: ke,
		dir: t.dir,
		id: t.id,
		lang: t.lang,
		nonce: t.nonce,
		title: t.title,
		role: t.role,
		"aria-label": t["aria-label"],
		"aria-labelledby": t["aria-labelledby"],
		...Ae
	}, V.createElement(n.Months, {
		className: s[Vw.Months],
		style: x?.[Vw.Months]
	}, !t.hideNavigation && !u && V.createElement(n.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: s[Vw.Nav],
		style: x?.[Vw.Nav],
		"aria-label": B(),
		onPreviousClick: ve,
		onNextClick: ye,
		previousMonth: P,
		nextMonth: F
	}), j.map((e, i) => V.createElement(n.Month, {
		"data-animated-month": t.animate ? "true" : void 0,
		className: s[Vw.Month],
		style: x?.[Vw.Month],
		key: i,
		displayIndex: i,
		calendarMonth: e
	}, u === "around" && !t.hideNavigation && i === 0 && V.createElement(n.PreviousMonthButton, {
		type: "button",
		className: s[Vw.PreviousMonthButton],
		tabIndex: P ? void 0 : -1,
		"aria-disabled": !P || void 0,
		"aria-label": ue(P),
		onClick: ve,
		"data-animated-button": t.animate ? "true" : void 0
	}, V.createElement(n.Chevron, {
		disabled: !P || void 0,
		className: s[Vw.Chevron],
		orientation: t.dir === "rtl" ? "right" : "left"
	})), V.createElement(n.MonthCaption, {
		"data-animated-caption": t.animate ? "true" : void 0,
		className: s[Vw.MonthCaption],
		style: x?.[Vw.MonthCaption],
		calendarMonth: e,
		displayIndex: i
	}, c?.startsWith("dropdown") ? V.createElement(n.DropdownNav, {
		className: s[Vw.Dropdowns],
		style: x?.[Vw.Dropdowns]
	}, (() => {
		let i = c === "dropdown" || c === "dropdown-months" ? V.createElement(n.MonthsDropdown, {
			key: "month",
			className: s[Vw.MonthsDropdown],
			"aria-label": le(),
			classNames: s,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: Ee(e.date),
			options: zT(e.date, M, N, r, a),
			style: x?.[Vw.Dropdown],
			value: a.getMonth(e.date)
		}) : V.createElement("span", { key: "month" }, w(e.date, a)), o = c === "dropdown" || c === "dropdown-years" ? V.createElement(n.YearsDropdown, {
			key: "year",
			className: s[Vw.YearsDropdown],
			"aria-label": he(a.options),
			classNames: s,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: De(e.date),
			options: HT(M, N, r, a, !!t.reverseYears),
			style: x?.[Vw.Dropdown],
			value: a.getYear(e.date)
		}) : V.createElement("span", { key: "year" }, O(e.date, a));
		return a.getMonthYearOrder() === "year-first" ? [o, i] : [i, o];
	})(), V.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: {
			border: 0,
			clip: "rect(0 0 0 0)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap",
			wordWrap: "normal"
		}
	}, S(e.date, a.options, a))) : V.createElement(n.CaptionLabel, {
		className: s[Vw.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, S(e.date, a.options, a))), u === "around" && !t.hideNavigation && i === d - 1 && V.createElement(n.NextMonthButton, {
		type: "button",
		className: s[Vw.NextMonthButton],
		tabIndex: F ? void 0 : -1,
		"aria-disabled": !F || void 0,
		"aria-label": de(F),
		onClick: ye,
		"data-animated-button": t.animate ? "true" : void 0
	}, V.createElement(n.Chevron, {
		disabled: !F || void 0,
		className: s[Vw.Chevron],
		orientation: t.dir === "rtl" ? "left" : "right"
	})), i === d - 1 && u === "after" && !t.hideNavigation && V.createElement(n.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: s[Vw.Nav],
		style: x?.[Vw.Nav],
		"aria-label": B(),
		onPreviousClick: ve,
		onNextClick: ye,
		previousMonth: P,
		nextMonth: F
	}), V.createElement(n.MonthGrid, {
		role: "grid",
		"aria-multiselectable": l === "multiple" || l === "range",
		"aria-label": ce(e.date, a.options, a) || void 0,
		className: s[Vw.MonthGrid],
		style: x?.[Vw.MonthGrid]
	}, !t.hideWeekdays && V.createElement(n.Weekdays, {
		"data-animated-weekdays": t.animate ? "true" : void 0,
		className: s[Vw.Weekdays],
		style: x?.[Vw.Weekdays]
	}, b && V.createElement(n.WeekNumberHeader, {
		"aria-label": me(a.options),
		className: s[Vw.WeekNumberHeader],
		style: x?.[Vw.WeekNumberHeader],
		scope: "col"
	}, E()), ge.map((e) => V.createElement(n.Weekday, {
		"aria-label": fe(e, a.options, a),
		className: s[Vw.Weekday],
		key: String(e),
		style: x?.[Vw.Weekday],
		scope: "col"
	}, D(e, a.options, a)))), V.createElement(n.Weeks, {
		"data-animated-weeks": t.animate ? "true" : void 0,
		className: s[Vw.Weeks],
		style: x?.[Vw.Weeks]
	}, e.weeks.map((e) => V.createElement(n.Week, {
		className: s[Vw.Week],
		key: e.weekNumber,
		style: x?.[Vw.Week],
		week: e
	}, b && V.createElement(n.WeekNumber, {
		week: e,
		style: x?.[Vw.WeekNumber],
		"aria-label": pe(e.weekNumber, { locale: o }),
		className: s[Vw.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, T(e.weekNumber, a)), e.days.map((e) => {
		let { date: r } = e, i = ee(e);
		if (i[Hw.focused] = !i.hidden && !!R?.isEqualTo(e), i[Uw.selected] = te?.(r) || i.selected, _T(re)) {
			let { from: e, to: t } = re;
			i[Uw.range_start] = !!(e && t && a.isSameDay(r, e)), i[Uw.range_end] = !!(e && t && a.isSameDay(r, t)), i[Uw.range_middle] = hT(re, r, !0, a);
		}
		let o = BT(i, x, t.modifiersStyles), c = wT(i, s, t.modifiersClassNames), l = !_e && !i.hidden ? se(r, i, a.options, a) : void 0;
		return V.createElement(n.Day, {
			key: `${a.format(r, "yyyy-MM-dd")}_${a.format(e.displayMonth, "yyyy-MM")}`,
			day: e,
			modifiers: i,
			className: c.join(" "),
			style: o,
			role: "gridcell",
			"aria-selected": i.selected || void 0,
			"aria-label": l,
			"data-day": a.format(r, "yyyy-MM-dd"),
			"data-month": e.outside ? a.format(r, "yyyy-MM") : void 0,
			"data-selected": i.selected || void 0,
			"data-disabled": i.disabled || void 0,
			"data-hidden": i.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": i.focused || void 0,
			"data-today": i.today || void 0
		}, !i.hidden && _e ? V.createElement(n.DayButton, {
			className: s[Vw.DayButton],
			style: x?.[Vw.DayButton],
			type: "button",
			day: e,
			modifiers: i,
			disabled: i.disabled || void 0,
			tabIndex: z(e) ? 0 : -1,
			"aria-label": oe(r, i, a.options, a),
			onClick: be(e, i),
			onBlur: Se(e, i),
			onFocus: xe(e, i),
			onKeyDown: Ce(e, i),
			onMouseEnter: we(e, i),
			onMouseLeave: Te(e, i)
		}, C(r, a.options, a)) : !i.hidden && C(e.date, a.options, a));
	})))))))), t.footer && V.createElement(n.Footer, {
		className: s[Vw.Footer],
		style: x?.[Vw.Footer],
		role: "status",
		"aria-live": "polite"
	}, t.footer)));
}
//#endregion
//#region ../ui/src/lib/formFieldUtils.ts
var LE = (e, t) => {
	if (e && typeof e == "object" && typeof t == "string") return t.split(".").reduce((e, t) => {
		if (e && typeof e == "object") return e[t];
	}, e);
}, RE = (e, t) => {
	if (e) {
		if (typeof e == "function") e(t);
		else try {
			e.current = t;
		} catch {}
	}
}, zE = (e) => {
	if (e != null) {
		if (typeof e == "string") return e;
		if (e instanceof Error) return e.message;
		if (typeof e == "number" || typeof e == "boolean") return String(e);
	}
}, BE = (e) => e == null ? !1 : typeof e == "string" ? e.length > 0 : typeof e == "number" ? !Number.isNaN(e) : typeof e == "boolean" ? !0 : Array.isArray(e) ? e.length > 0 : e instanceof Date && !Number.isNaN(e.getTime()), VE = (e) => typeof e == "object" && !!e, HE = (e, t) => {
	if (t && VE(e)) return LE(e, t);
}, UE = (e) => e ? typeof e == "boolean" ? e : Array.isArray(e) ? e.some(UE) : VE(e) ? Object.values(e).some(UE) : !!e : !1, WE = ({ forwardedRef: e, field: t, meta: n, form: r, innerRef: i, id: a, name: o, value: s, defaultValue: c, explicitError: l, helperText: u, onChange: d, onBlur: f }) => {
	let p = t?.name ?? o, m = a ?? p, { errors: h, touched: g, submitCount: _ } = r ?? {}, v = VE(h) ? h : void 0, y = VE(g) ? g : void 0, b = _ ?? 0, x = l ?? n?.error ?? HE(v, p), S = n?.touched ?? HE(y, p), C = !!(t || r || n), w = x != null, T = C && UE(y), E = w && (l !== void 0 || !C || S || T || b > 0) ? l ?? zE(x) : void 0, D = E ? void 0 : u, O = H((t) => {
		RE(e, t), RE(i, t);
	}, [e, i]), k = H((e) => {
		t?.onChange(e), d?.(e);
	}, [t, d]), A = H((e) => {
		t?.onBlur(e), f?.(e);
	}, [t, f]), j = t?.value ?? s, M = BE(j ?? c), N = {};
	return N.ref = O, N.onBlur = A, N.onChange = k, m !== void 0 && (N.id = m), p !== void 0 && (N.name = p), j === void 0 ? c !== void 0 && (N.defaultValue = c) : N.value = j, {
		inputId: m,
		resolvedName: p,
		mergedRef: O,
		handleChange: k,
		handleBlur: A,
		resolvedValue: j,
		hasValue: M,
		errorContent: E,
		helperContent: D,
		sharedProps: N
	};
}, GE = ({ value: e, required: t = !1, validation: n, metaTouched: r = !1, submitCount: i = 0, resolvedName: a, setFieldError: o, handleChange: s, handleBlur: c, setManagedError: l, getValueFromChangeEvent: u, normalizeValue: d }) => {
	let { config: f, evaluate: p } = W(() => Ti(n, { forceRequired: t }), [t, n]), m = !!f, h = H((e) => d ? d(e) : e, [d]), g = G({ display: !1 }), _ = H((e, t) => {
		let n = typeof e == "string" ? e : void 0, r = g.current;
		(r.message !== n || r.display !== t) && (g.current = {
			message: n,
			display: t
		}, o && a && o(a, n), l(t ? n : void 0));
	}, [
		a,
		o,
		l
	]), v = H((e, t) => {
		if (!m) return;
		let n = h(e);
		return p(n, { includeRequired: t });
	}, [
		p,
		h,
		m
	]);
	Ge(() => {
		if (!m) return;
		let t = v(e, !0);
		_(t, r || i > 0);
	}, [
		_,
		r,
		v,
		m,
		i,
		e
	]);
	let y = H((e) => {
		if (s(e), !m) return;
		let t = u(e), n = v(t, !0);
		_(n, r || i > 0);
	}, [
		_,
		u,
		s,
		r,
		v,
		m,
		i
	]), b = H((t) => {
		if (c(t), !m) return;
		let n = v(e, !0);
		_(n, !0);
	}, [
		_,
		c,
		v,
		m,
		e
	]);
	return {
		onChange: m ? y : s,
		onBlur: m ? b : c,
		normalizedValidation: f,
		shouldValidate: m
	};
}, KE, qE = () => {
	if (KE !== void 0) return KE ?? void 0;
	let e = (typeof globalThis == "object" ? globalThis : void 0)?.Event;
	return KE = typeof e == "function" ? e : null, KE ?? void 0;
}, JE = (e) => {
	let t = qE();
	if (!t) return;
	let n = { bubbles: !0 }, r = new t("input", n);
	e.dispatchEvent?.(r);
	let i = new t("change", n);
	e.dispatchEvent?.(i);
}, YE = "value", XE = /* @__PURE__ */ new WeakMap(), ZE = (e) => {
	let t = Object.getPrototypeOf(e);
	if (!t) return;
	let n = XE.get(t);
	if (n !== void 0) return n ?? void 0;
	let r = Object.getOwnPropertyDescriptor(t, YE)?.set;
	if (!r || typeof r != "function") {
		XE.set(t, null);
		return;
	}
	let i = (e, t) => {
		Reflect.apply(r, e, [t]);
	};
	return XE.set(t, i), i;
}, QE = (e, t) => {
	let n = ZE(e);
	n ? n(e, t) : Reflect.set(e, YE, t);
}, $E = Be({ hideLabel: !1 }), eD = ({ hideLabel: e = !1, children: t }) => /* @__PURE__ */ q($E.Provider, {
	value: { hideLabel: e },
	children: t
}), tD = () => U($E), nD = Be({
	isGrouped: !1,
	reserveChildMessageSpace: !0,
	suppressChildMessages: !1
}), rD = ({ children: e, reserveChildMessageSpace: t = !1, suppressChildMessages: n = !0 }) => /* @__PURE__ */ q(nD.Provider, {
	value: {
		isGrouped: !0,
		reserveChildMessageSpace: t,
		suppressChildMessages: n
	},
	children: e
}), iD = () => U(nD), aD = "__pcSupportsResponsivePreferenceFieldChrome", oD = (e) => (e[aD] = !0, e);
//#endregion
//#region ../ui/src/lib/icons/AlertCircleIcon.tsx
function sD({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [/* @__PURE__ */ q("path", { d: "M18.22 21.25H5.78a3.78 3.78 0 0 1-3.31-5.33L8.69 5.11a3.87 3.87 0 0 1 6.62 0l6.22 10.81a3.78 3.78 0 0 1-3.31 5.33Z" }), /* @__PURE__ */ q("path", {
			fill: "currentColor",
			stroke: "none",
			d: "M10.88 17.15a1.13 1.13 0 1 1 2.26 0a1.13 1.13 0 0 1-2.26 0Zm.36-2.73L11.1 9.2a.9.9 0 0 1 1.79 0l-.13 5.22a.76.76 0 0 1-1.52 0Z"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/BadgeCheckIcon.tsx
function cD({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ J("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		children: [/* @__PURE__ */ q("path", {
			d: "M14.262 3.6C13.196 2.532 12.662 2 12 2s-1.196.533-2.262 1.6c-.64.64-1.274.936-2.186.936c-.796 0-1.93-.154-2.552.473c-.618.623-.464 1.752-.464 2.543c0 .912-.297 1.546-.937 2.186C2.533 10.804 2 11.338 2 12s.533 1.196 1.6 2.262c.716.717.936 1.18.936 2.186c0 .796-.154 1.93.473 2.552c.623.617 1.752.464 2.543.464c.971 0 1.44.19 2.133.883c.59.59 1.381 1.653 2.315 1.653s1.725-1.063 2.315-1.653c.694-.693 1.162-.883 2.133-.883c.791 0 1.92.154 2.543-.464m1.41-9.262C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186c0 .796.154 1.93-.473 2.552m0 0H19",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ q("path", {
			d: "M8.5 9.5L12 13l9-10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/CheckIcon.tsx
function lD({ className: e, strokeWidth: t = 2.2 }) {
	return /* @__PURE__ */ q("svg", {
		className: e,
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ q("path", {
			d: "M3.25 10.5 7.75 15 17 5.75",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChoosePaymentTypeIcon.tsx
function uD({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ q("path", {
			d: "M21 18L20.1703 11.7771C20.0391 10.7932 19.9735 10.3012 19.7392 9.93082C19.5327 9.60444 19.2362 9.34481 18.8854 9.1833C18.4873 9 17.991 9 16.9983 9H7.00165C6.00904 9 5.51274 9 5.11461 9.1833C4.76381 9.34481 4.46727 9.60444 4.26081 9.93082C4.0265 10.3012 3.96091 10.7932 3.82972 11.7771L3 18M21 18H3M21 18V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V18M7.5 12V12.01M10.5 12V12.01M9 15V15.01M12 15V15.01M15 15V15.01M13.5 12V12.01M16.5 12V12.01M9 9V6M5.8 6H12.2C12.48 6 12.62 6 12.727 5.9455C12.8211 5.89757 12.8976 5.82108 12.9455 5.727C13 5.62004 13 5.48003 13 5.2V3.8C13 3.51997 13 3.37996 12.9455 3.273C12.8976 3.17892 12.8211 3.10243 12.727 3.0545C12.62 3 12.48 3 12.2 3H5.8C5.51997 3 5.37996 3 5.273 3.0545C5.17892 3.10243 5.10243 3.17892 5.0545 3.273C5 3.37996 5 3.51997 5 3.8V5.2C5 5.48003 5 5.62004 5.0545 5.727C5.10243 5.82108 5.17892 5.89757 5.273 5.9455C5.37996 6 5.51997 6 5.8 6Z",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronLeftIcon.tsx
function dD({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ q("path", {
			d: "M15 6l-6 6 6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronRightIcon.tsx
function fD({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ q("path", {
			d: "M9 6l6 6-6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CloseIcon.tsx
function pD({ className: e, strokeWidth: t = 1.8 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ q("path", {
			d: "M6 6l12 12M18 6 6 18",
			strokeLinecap: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CopyIcon.tsx
function mD({ strokeWidth: e = 1.5 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: [/* @__PURE__ */ q("rect", {
			x: "6",
			y: "6",
			width: "9",
			height: "12",
			rx: "2"
		}), /* @__PURE__ */ q("path", { d: "M13 4V3a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H6" })]
	});
}
//#endregion
//#region ../ui/src/lib/icons/DebugIcon.tsx
function hD({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ q("path", { d: "M7 8 3 11.6923 7 16M17 8l4 3.6923L17 16M14 4l-4 16" })
	});
}
//#endregion
//#region ../ui/src/lib/icons/ExternalLinkIcon.tsx
function gD({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: [
			/* @__PURE__ */ q("path", { d: "M14 4h6v6" }),
			/* @__PURE__ */ q("path", { d: "M10 14 20 4" }),
			/* @__PURE__ */ q("path", { d: "M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptIcon.tsx
function _D({ className: e }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ q("path", {
			strokeWidth: "2",
			d: "M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptReadyIcon.tsx
function vD({ className: e }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 512 512",
		fill: "currentColor",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [
			/* @__PURE__ */ q("path", { d: "M344.356,404.041c-6.431-6.43-230.164-230.163-236.398-236.396c-6.527-6.528-17.111-6.528-23.639,0c-6.528,6.528-6.528,17.111,0,23.639l16.193,16.193L0.981,489.696c-4.659,13.211,8.096,25.987,21.324,21.324l282.22-99.532l16.193,16.193c6.527,6.528,17.111,6.529,23.639,0C350.884,421.153,350.884,410.569,344.356,404.041zM44.126,467.874l20.959-59.429l38.469,38.469L44.126,467.874zM138.506,434.589l-61.095-61.095l18.491-52.429l95.033,95.033L138.506,434.589zM225.887,403.771L108.228,286.112l18.491-52.429l151.597,151.598L225.887,403.771z" }),
			/* @__PURE__ */ q("path", { d: "M384.71,127.29c-6.528-6.528-17.112-6.528-23.639,0L256.72,231.64c-6.528,6.528-6.528,17.111,0,23.639c6.527,6.528,17.111,6.529,23.639,0l104.35-104.35C391.238,144.401,391.238,133.818,384.71,127.29z" }),
			/* @__PURE__ */ q("path", { d: "M367.318,280.947h-58.422c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h58.422c9.232,0,16.716-7.484,16.716-16.716S376.549,280.947,367.318,280.947z" }),
			/* @__PURE__ */ q("path", { d: "M214.337,127.966c-9.232,0-16.716,7.483-16.716,16.716v58.422c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-58.422C231.053,135.451,223.569,127.966,214.337,127.966z" }),
			/* @__PURE__ */ q("path", { d: "M497.336,262.203c-19.6-19.6-51.318-19.601-70.919,0c-19.552,19.552-19.552,51.366,0,70.918c19.597,19.597,51.318,19.601,70.918,0C516.888,313.569,516.888,281.756,497.336,262.203zM473.697,309.482c-6.532,6.532-17.106,6.534-23.639,0c-6.517-6.518-6.517-17.122,0-23.639c6.535-6.534,17.106-6.534,23.639,0C480.23,292.377,480.229,302.948,473.697,309.482z" }),
			/* @__PURE__ */ q("path", { d: "M249.797,14.664c-19.552-19.552-51.366-19.553-70.918,0c-19.597,19.597-19.601,51.318,0,70.919c19.549,19.551,51.365,19.553,70.918-0.001C269.395,65.984,269.398,34.264,249.797,14.664zM226.156,61.943c-6.517,6.517-17.121,6.517-23.639,0c-6.531-6.533-6.532-17.105,0-23.639c6.535-6.534,17.106-6.534,23.639,0C232.69,44.837,232.69,55.408,226.156,61.943z" }),
			/* @__PURE__ */ q("circle", {
				cx: "427.097",
				cy: "203.107",
				r: "16.716"
			}),
			/* @__PURE__ */ q("circle", {
				cx: "308.894",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ q("circle", {
				cx: "427.097",
				cy: "392.217",
				r: "16.716"
			}),
			/* @__PURE__ */ q("circle", {
				cx: "119.773",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ q("path", { d: "M443.809,1.329c-9.232,0-16.716,7.484-16.716,16.716V34.76c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716V18.044C460.525,8.813,453.04,1.329,443.809,1.329z" }),
			/* @__PURE__ */ q("path", { d: "M443.809,84.907c-9.232,0-16.716,7.484-16.716,16.716v16.716c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-16.716C460.525,92.391,453.04,84.907,443.809,84.907z" }),
			/* @__PURE__ */ q("path", { d: "M410.378,51.475h-16.716c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S419.609,51.475,410.378,51.475z" }),
			/* @__PURE__ */ q("path", { d: "M493.956,51.475H477.24c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S503.187,51.475,493.956,51.475z" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InfoIcon.tsx
function yD({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ q("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		className: e,
		children: /* @__PURE__ */ q("path", {
			d: "M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/MinusIcon.tsx
function bD({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ q("path", {
			d: "M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/OverwriteIcon.tsx
function xD({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [
			/* @__PURE__ */ q("path", { d: "M4.75 6h8.5A1.75 1.75 0 0 1 15 7.75v10.5A1.75 1.75 0 0 1 13.25 20h-8.5A1.75 1.75 0 0 1 3 18.25V7.75A1.75 1.75 0 0 1 4.75 6Z" }),
			/* @__PURE__ */ q("path", { d: "M9 4h8.5A1.75 1.75 0 0 1 19.25 5.75V15" }),
			/* @__PURE__ */ q("path", { d: "M7.75 10.25h5.5" }),
			/* @__PURE__ */ q("path", { d: "M7.75 13.25h5.5" }),
			/* @__PURE__ */ q("path", { d: "M7.75 16.25h5.5" }),
			/* @__PURE__ */ q("path", { d: "M21 12.25h-5" }),
			/* @__PURE__ */ q("path", { d: "m16.5 12.25 2.5-2.5" }),
			/* @__PURE__ */ q("path", { d: "m16.5 12.25 2.5 2.5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/PaymentDetailsIcon.tsx
function SD({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [/* @__PURE__ */ q("path", {
			d: "M16 5 18.2929 2.70711c.3905-.39053 1.0237-.39053 1.4142 0l1.5858 1.58578c.3905.39053.3905 1.02369 0 1.41422L19 8M16 5l-5.7071 5.7071A1.4141 1.4141 0 0 0 10 11.4142V13a1 1 0 0 0 1 1h1.5858a1.4143 1.4143 0 0 0 1.4142-.2929L19 8M16 5l3 3",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ q("path", {
			d: "M6 14H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/PresentIcon.tsx
function CD({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		"data-testid": "present-icon",
		children: /* @__PURE__ */ q("path", {
			d: "M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/PlusIcon.tsx
function wD({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ q("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ q("path", {
			d: "M10 4v12M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ResetIcon.tsx
function TD({ strokeWidth: e = 2.1 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [/* @__PURE__ */ q("path", {
			d: "M3 5v5h5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ q("path", {
			d: "M5.85 18.15A9 9 0 1 0 5.18 6.4L3 10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/SearchIcon.tsx
function ED({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ J("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [/* @__PURE__ */ q("circle", {
			cx: "11",
			cy: "11",
			r: "6.5",
			strokeLinecap: "round"
		}), /* @__PURE__ */ q("path", {
			d: "m15.5 15.5 4 4",
			strokeLinecap: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/SwitchArrowsIcon.tsx
function DD({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ q("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		className: e,
		children: /* @__PURE__ */ q("path", {
			d: "M7 15L12 20L17 15M7 9L12 4L17 9",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/Skeleton.tsx
var OD = [
	"pc-skeleton-shimmer",
	"block",
	"max-w-full",
	"rounded-[var(--pc-radius)]",
	"[background:var(--pc-color-depth-3)]",
	"motion-safe:animate-[pc-loading-surface-fade-in_220ms_ease-out_both]",
	"motion-reduce:animate-none"
].join(" "), kD = He(function({ as: e = "div", className: t, "aria-hidden": n = !0, "data-slot": r, ...i }, a) {
	let o = {
		...i,
		ref: a,
		"aria-hidden": n,
		"data-slot": r ?? "skeleton",
		className: Q(OD, t)
	};
	return Ve(e, o);
});
kD.displayName = "Skeleton";
//#endregion
//#region ../ui/src/lib/NumberInput.tsx
var AD = (e) => {
	if (e == null || e === "" || Array.isArray(e)) return;
	let t = typeof e == "number" ? e : Number(e);
	return Number.isNaN(t) ? void 0 : t;
}, jD = 1, MD = (e) => {
	if (e != null && e !== "" && e !== "any") {
		if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
		if (typeof e == "string") {
			let t = Number(e);
			return Number.isFinite(t) ? t : void 0;
		}
	}
}, ND = (e) => {
	if (e == null) return 0;
	let t = "";
	if (typeof e == "number" ? t = e.toString() : typeof e == "string" && (t = e), !t) return 0;
	let n = t.trim().match(b);
	if (!n) return 0;
	let r = n[1], i = n[2];
	return (r ? r.length : 0) + (i ? Number(i) : 0);
}, PD = (e, t, n) => {
	let r = e;
	return t !== void 0 && r < t && (r = t), n !== void 0 && r > n && (r = n), r;
}, FD = (e, t) => {
	if (!Number.isFinite(e) || t <= 0) return e;
	let n = 10 ** t;
	return Math.round(e * n) / n;
}, ID = (e, t) => Number.isFinite(e) ? t <= 0 ? e.toString() : FD(e, t).toFixed(t).replace(he, "") : "", LD = ({ currentString: e, direction: t, minValue: n, maxValue: r, stepValue: i }) => {
	let a = AD(e), o = i ?? jD, s = Math.max(ND(e), ND(i), ND(n), ND(r)), c = ID(PD(a === void 0 ? t === 1 ? n === void 0 ? o : n : r === void 0 ? -o : r : a + t * o, n, r), s);
	return c === e ? void 0 : c;
}, RD = {
	stepperGroup: ["shrink-0 flex flex-row items-center gap-1"].join(" "),
	input: { base: PS },
	mozAppearance: "textfield"
}, zD = /* @__PURE__ */ new Set([
	"belowFieldContent",
	"belowFieldContentInheritsTheme",
	"containerClassName",
	"density",
	"error",
	"errorClassName",
	"field",
	"form",
	"formattingAdapter",
	"helperClassName",
	"helperText",
	"hideLabel",
	"innerRef",
	"inputClassName",
	"inputProps",
	"label",
	"labelClassName",
	"messageClassName",
	"meta",
	"reserveMessageSpace",
	"skeleton",
	"validation",
	"variant"
]), BD = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !zD.has(e))) : {}, VD = He(function({ inputMode: e, innerRef: t, style: n, className: r, reserveMessageSpace: i, density: a = "default", skeleton: o = !1, ...s }, c) {
	let { label: l, hideLabel: u, helperText: d, error: f, variant: p, containerClassName: m, inputClassName: h, labelClassName: g, messageClassName: _, helperClassName: v, errorClassName: y, field: b, meta: x, form: S, onChange: C, onBlur: w, onFocus: T, id: E, name: D, value: O, defaultValue: k, formattingAdapter: A, validation: j, required: M, inputProps: N, ...P } = s, F = {
		...BD(N),
		...BD(P)
	}, I = G(null), ee = F.min, te = F.max, ne = F.step, re = AD(ee), L = AD(te), R = MD(ne), z = H((e) => {
		I.current = e, RE(c, e), RE(t, e);
	}, [c, t]), ie = AD(O ?? k), ae = !!F.disabled, oe = !!F.readOnly, se = ae || oe || re !== void 0 && ie !== void 0 && ie <= re, ce = ae || oe || L !== void 0 && ie !== void 0 && ie >= L, le = (e) => {
		let t = I.current;
		if (!t) return;
		let n = t;
		if (n.disabled || n.readOnly) return;
		let r = n.value, i = LD({
			currentString: r,
			direction: e,
			minValue: re,
			maxValue: L,
			stepValue: R
		});
		if (i !== void 0) {
			QE(t, i), JE(t);
			try {
				n.focus?.({ preventScroll: !0 });
			} catch {
				n.focus?.();
			}
		}
	}, B = (e) => {
		e.preventDefault();
	}, ue = (e) => {
		e.preventDefault(), e.stopPropagation(), le(-1);
	}, de = (e) => {
		e.preventDefault(), e.stopPropagation(), le(1);
	}, fe = RD.stepperGroup, pe = Q(RD.input.base, h), me = o ? /* @__PURE__ */ q(kD, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", "h-7 w-7")
	}) : /* @__PURE__ */ q(Pv, {
		type: "button",
		variant: "neutral",
		size: "xs",
		iconOnly: !0,
		showTooltip: !1,
		label: "Decrease value",
		"aria-label": "Decrease value",
		leadingIcon: /* @__PURE__ */ q(bD, {}),
		onClick: ue,
		onPointerDown: B,
		disabled: se
	}), he = o ? /* @__PURE__ */ q(kD, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", "h-7 w-7")
	}) : /* @__PURE__ */ q(Pv, {
		type: "button",
		variant: "neutral",
		size: "xs",
		iconOnly: !0,
		showTooltip: !1,
		label: "Increase value",
		"aria-label": "Increase value",
		leadingIcon: /* @__PURE__ */ q(wD, {}),
		onClick: de,
		onPointerDown: B,
		disabled: ce
	});
	return /* @__PURE__ */ q(qO, {
		ref: z,
		label: l,
		hideLabel: u,
		variant: p,
		helperText: d,
		error: f,
		containerClassName: m,
		labelClassName: g,
		messageClassName: _,
		helperClassName: v,
		errorClassName: y,
		field: b,
		meta: x,
		form: S,
		onChange: C,
		onBlur: w,
		onFocus: T,
		id: E,
		name: D,
		value: O,
		defaultValue: k,
		formattingAdapter: A,
		validation: j,
		required: M,
		inputProps: F,
		type: "text",
		inputMode: e ?? "decimal",
		trailingAdornment: /* @__PURE__ */ J(Ze, { children: [me, he] }),
		trailingAdornmentClassName: fe,
		inputClassName: pe,
		className: Q("gap-1 pr-1 items-center", r),
		density: a,
		skeleton: o,
		style: {
			...n,
			MozAppearance: RD.mozAppearance
		},
		reserveMessageSpace: i
	});
});
VD.displayName = "NumberInput", oD(VD);
//#endregion
//#region ../ui/src/lib/utils/text.ts
function HD(e) {
	if (typeof e == "string" || typeof e == "number") return String(e);
}
//#endregion
//#region ../ui/src/lib/FieldLayout.tsx
function UD({ styles: e, tone: t = "light", messageClassName: n, error: r, helper: i, errorClassName: a, helperClassName: o, reserveSpace: s = !0, messageId: c }) {
	let l = HD(r), u = HD(i), d = Q(e.error, t === "dark" ? e.darkErrorTone : void 0, n, a), f = Q(e.helper, t === "dark" ? e.darkHelperTone : void 0, n, o);
	if (r) return /* @__PURE__ */ q("span", {
		id: c,
		"data-slot": "field-message",
		className: d,
		title: l,
		children: r
	});
	if (i) return /* @__PURE__ */ q("span", {
		id: c,
		"data-slot": "field-message",
		className: f,
		title: u,
		children: i
	});
	if (!s) return null;
	let p = Q(f, "opacity-0 select-none pointer-events-none");
	return /* @__PURE__ */ q("span", {
		id: c,
		"data-slot": "field-message",
		className: p,
		"aria-hidden": "true",
		children: "message placeholder"
	});
}
function WD({ baseClassName: e, containerClassName: t, belowFieldContent: n, belowFieldContentClassName: r, belowFieldContentInheritsTheme: i = !0, children: o, style: s, dataTheme: c, ...l }) {
	let u = Q(e, a("field"), t), { styles: d, tone: f, messageClassName: p, error: m, helper: h, errorClassName: g, helperClassName: _, reserveSpace: v, messageId: y } = l, b = n == null ? null : /* @__PURE__ */ q("div", {
		"data-slot": "field-below-content",
		className: Q("mt-4", r),
		children: n
	}), x = v !== !1 || m || h ? /* @__PURE__ */ q(UD, {
		styles: d,
		tone: f,
		messageClassName: p,
		error: m,
		helper: h,
		errorClassName: g,
		helperClassName: _,
		reserveSpace: v,
		messageId: y
	}) : null;
	return i ? /* @__PURE__ */ J("div", {
		className: u,
		style: s,
		"data-theme": c,
		children: [
			o,
			b,
			x
		]
	}) : /* @__PURE__ */ J("div", {
		className: u,
		style: s,
		children: [
			/* @__PURE__ */ q("div", {
				"data-theme": c,
				children: o
			}),
			b,
			x && /* @__PURE__ */ q("div", {
				"data-theme": c,
				children: x
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/formSkeletons.tsx
function GD({ showLabel: e, labelClassName: t, compact: n = !1, widthClassName: r }) {
	return e ? /* @__PURE__ */ q("span", {
		"aria-hidden": "true",
		className: t,
		"data-slot": "field-skeleton-label",
		children: /* @__PURE__ */ q(kD, {
			as: "span",
			className: Q("block rounded-full", n ? "h-2.5 w-16" : "h-3 w-20", r)
		})
	}) : null;
}
function KD({ compact: e = !1, helper: t, error: n, reserveSpace: r = !0, widthClassName: i }) {
	if (t || n || r) return /* @__PURE__ */ q(kD, {
		as: "span",
		"data-slot": "field-skeleton-message",
		className: Q("block rounded-full", e ? "h-2.5 w-24" : "h-3 w-28", i)
	});
}
//#endregion
//#region ../ui/src/lib/formTheme.ts
var qD = ({ variant: e, hasError: t = !1 }) => ({
	variant: e,
	dataTheme: e === "neutral" ? void 0 : Ev(e)
}), JD = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => JD(e)).join(" ") : Ue(e) ? JD(e.props.children ?? "") : "", YD = (e) => e.trim().toLowerCase(), XD = (e, t) => !e || t.map((e) => JD(e)).filter(Boolean).join(" ").toLowerCase().includes(e), ZD = (e, t, n) => t ? e.filter((e) => XD(t, n(e))) : [...e], QD = (e, t, n, r) => e.findIndex((e) => r(e) && XD(t, n(e))), $D = (e, t) => typeof e == "string" && e.length > 0 ? `Search ${e}` : t, eO = 8, tO = /* @__PURE__ */ new Set(/* @__PURE__ */ "belowFieldContent.belowFieldContentClassName.belowFieldContentInheritsTheme.containerClassName.density.error.errorClassName.field.form.helperClassName.helperText.hideLabel.innerRef.label.labelClassName.messageClassName.meta.optionLeadingIconByValue.reserveMessageSpace.searchPlaceholder.searchThreshold.searchable.selectClassName.skeleton.validation.variant".split(".")), nO = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !tO.has(e))) : {}, rO = {
	container: mS.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: ES,
		wrapperSpacingCompact: DS,
		wrapperHiddenSpacing: OS,
		wrapperHiddenSpacingCompact: kS,
		selectSpacing: yS.spacing.select,
		hiddenSelectSpacing: yS.spacing.hiddenSelect,
		selectSpacingCompact: yS.spacing.selectCompact,
		hiddenSelectSpacingCompact: yS.spacing.hiddenSelectCompact
	},
	label: { above: `${Dx} ${Tx}` },
	wrapper: {
		base: `${bS} group cursor-pointer`,
		gap: vS,
		frame: SS,
		neutral: CS,
		raised: wS,
		error: TS
	},
	control: {
		base: [
			AS,
			"flex items-center text-left",
			"cursor-pointer",
			Sx
		].join(" "),
		disabled: "cursor-not-allowed",
		display: "block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
	},
	nativeSelect: {
		base: [
			AS,
			"appearance-none cursor-pointer",
			Sx
		].join(" "),
		multiple: [
			"appearance-auto",
			"cursor-default",
			"min-h-32"
		].join(" "),
		option: ["[&>option]:bg-[var(--pc-color-surface)]", "[&>option]:text-[var(--pc-color-text)]"].join(" "),
		hidden: "sr-only"
	},
	adornment: {
		base: gS.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	dropdown: {
		content: "flex flex-col",
		list: "overflow-y-auto py-1",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]",
		optionSelectedIcon: "shrink-0 text-[var(--pc-color-text)]"
	},
	message: {
		error: hS.error,
		helper: hS.helper
	},
	inner: `${_S} min-w-0`
}, iO = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? String(e) : null, aO = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.map(iO).filter((e) => e !== null).filter((e) => e.length > 0);
	let t = iO(e);
	return t === null || t.length === 0 ? [] : [t];
}, oO = (e) => {
	if (e == null) return;
	if (Array.isArray(e)) {
		let [t] = e;
		if (t === void 0) return;
		let n = iO(t);
		return n === null ? void 0 : n;
	}
	let t = iO(e);
	return t === null ? void 0 : t;
}, sO = (e) => {
	let t = [], n = !0, r = (e) => {
		if (e == null || typeof e == "boolean") return;
		if (Array.isArray(e)) {
			e.forEach(r);
			return;
		}
		if (typeof e == "string") {
			if (e.trim().length === 0) return;
			n = !1;
			return;
		}
		if (typeof e == "number" || !Ue(e)) {
			n = !1;
			return;
		}
		if (e.type === Le) {
			let t = e.props;
			r(t.children);
			return;
		}
		if (e.type !== "option") {
			n = !1;
			return;
		}
		let i = e.props;
		t.push({
			value: iO(i.value) ?? "",
			label: i.children ?? "",
			disabled: !!i.disabled
		});
	};
	return r(e), {
		options: t,
		supportsCustomSingle: n
	};
}, cO = (e, t = e.value) => {
	let n = {
		id: e.id,
		name: e.name,
		value: t,
		multiple: e.multiple,
		selectedOptions: e.selectedOptions
	};
	return {
		target: n,
		currentTarget: n,
		type: "change",
		timeStamp: Date.now(),
		bubbles: !0,
		cancelable: !0,
		defaultPrevented: !1,
		eventPhase: 3,
		isTrusted: !1,
		nativeEvent: typeof Event == "function" ? new Event("change", { bubbles: !0 }) : void 0,
		preventDefault: () => void 0,
		isDefaultPrevented: () => !1,
		stopPropagation: () => void 0,
		isPropagationStopped: () => !1,
		persist: () => void 0
	};
}, lO = (e) => ({
	target: e,
	currentTarget: e,
	type: "blur",
	timeStamp: Date.now(),
	bubbles: !1,
	cancelable: !1,
	defaultPrevented: !1,
	eventPhase: 3,
	isTrusted: !1,
	nativeEvent: typeof FocusEvent == "function" ? new FocusEvent("blur") : void 0,
	relatedTarget: typeof document == "object" ? document.activeElement : null,
	preventDefault: () => void 0,
	isDefaultPrevented: () => !1,
	stopPropagation: () => void 0,
	isPropagationStopped: () => !1,
	persist: () => void 0
}), uO = He(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentClassName: a, belowFieldContentInheritsTheme: o = !0, error: s, containerClassName: c, className: l, selectClassName: u, labelClassName: d, messageClassName: f, helperClassName: p, errorClassName: m, field: h, meta: g, form: _, innerRef: v, onChange: y, onBlur: b, validation: x, required: S, id: C, name: w, value: T, defaultValue: E, leadingAdornment: D, trailingAdornment: O, leadingAdornmentClassName: k, trailingAdornmentClassName: A, children: j, density: M = "default", reserveMessageSpace: N, skeleton: P = !1, searchable: F = "auto", searchThreshold: I = eO, searchPlaceholder: ee = "Search options", noMatchesMessage: te = "No options match your search.", optionLeadingIconByValue: ne, ...re }, L) {
	let [R, z] = K(), { inputId: ie, resolvedName: ae, handleChange: oe, handleBlur: se, errorContent: ce, helperContent: le, sharedProps: B, mergedRef: ue, resolvedValue: de } = WE({
		forwardedRef: L,
		field: h,
		meta: g,
		form: _,
		innerRef: v,
		id: C,
		name: w,
		value: T,
		defaultValue: E,
		explicitError: s ?? R,
		helperText: r,
		onChange: y,
		onBlur: b
	}), { isGrouped: fe, reserveChildMessageSpace: pe, suppressChildMessages: me } = iD(), he = fe && me, ge = ce, _e = he ? void 0 : ce, ve = he ? void 0 : le, ye = !!re.multiple, be = !P && !!ge, { dataTheme: xe } = qD({
		variant: e,
		hasError: be
	}), Se = H((e) => {
		z(e);
	}, []), Ce = Object.prototype.hasOwnProperty.call(B, "value"), we = Object.prototype.hasOwnProperty.call(B, "defaultValue"), Te = Ce ? B.value : void 0, Ee = we ? B.defaultValue : E, { options: De, supportsCustomSingle: Oe } = W(() => sO(j), [j]), ke = Ke(), Ae = ie ?? ke, je = `${Ae}-message`, Me = [re["aria-describedby"] ?? B["aria-describedby"], _e || ve ? je : void 0].filter(Boolean).join(" ") || void 0, Ne = `${Ae}-label`, Pe = `${Ae}-listbox`, V = `${Ae}-native`, Fe = W(() => oO(Te), [Te]), Ie = W(() => oO(Ee), [Ee]), Le = W(() => aO(Ee), [Ee]), Re = W(() => aO(Te), [Te]), ze = De[0]?.value ?? "", Be = Ce ? Fe ?? ze : Ie ?? ze, [Ve, He] = K(() => Ce ? Re : Le), [Ue, We] = K(() => Be), [U, qe] = K(!1), [Je, Ye] = K(-1), [Xe, Qe] = K(""), $e = Ce ? Fe ?? ze : Ue, et = Re;
	Ce || (et = ye ? Ve : aO($e));
	let tt = H((e) => e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : e.currentTarget.value, []), nt = H((e) => ye && Array.isArray(e) ? e.join(",") : e, [ye]), rt;
	rt = ye ? Ce ? de : Ve : $e;
	let { onChange: it, onBlur: at, normalizedValidation: ot } = GE({
		value: rt,
		required: S,
		validation: x,
		metaTouched: g?.touched,
		submitCount: _?.submitCount,
		resolvedName: ae,
		setFieldError: _?.setFieldError,
		handleChange: oe,
		handleBlur: se,
		setManagedError: Se,
		getValueFromChangeEvent: tt,
		normalizeValue: nt
	}), st = G(null), ct = G(null), lt = G(null), ut = G(null), dt = H((e) => {
		st.current = e, ue(e);
	}, [ue]), ft = H((e) => {
		lt.current = e;
	}, []), pt = ye || typeof re.size == "number" && re.size > 1 || !Oe, mt = Math.max(0, I), ht = !pt && (F === !0 || F !== !1 && De.length >= mt), gt = ht ? YD(Xe) : "", _t = W(() => De.map((e, t) => ({
		option: e,
		index: t
	})), [De]), vt = W(() => ZD(_t, gt, ({ option: e }) => [e.value, e.label]), [_t, gt]), yt = W(() => ht ? vt : _t, [
		vt,
		_t,
		ht
	]), bt = H(() => {
		let e = st.current;
		if (!e) return;
		let t = e;
		if (t.focus?.(), !e.multiple) {
			try {
				t.showPicker?.();
				return;
			} catch {}
			t.click?.();
		}
	}, []), { hideLabel: xt } = tD(), St = t ?? ae ?? "", Ct = HD(St), wt = n ?? (fe ? !0 : xt) ?? !1, Tt = N ?? (fe && !pe ? !1 : void 0), Et = !wt && (typeof t != "string" || t.length !== 0), Dt = M === "compact", Ot = gb({
		hideLabel: wt,
		isCompact: Dt,
		withLabelDefaultClassName: rO.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: rO.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: rO.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: rO.layout.wrapperHiddenSpacingCompact
	}), kt = (() => {
		let e = re["aria-label"] ?? B["aria-label"];
		return typeof e == "string" ? e : void 0;
	})(), At = (() => {
		let e = re["aria-labelledby"] ?? B["aria-labelledby"];
		return typeof e == "string" && e.trim().length > 0 ? e.trim() : void 0;
	})(), jt = wt && typeof St == "string" && St.length > 0 && At === void 0 ? kt ?? St : kt, Mt = De.find((e) => e.value === $e) ?? (De.length > 0 ? De[0] : null), Nt = Mt === null ? "" : Mt.label, Pt = HD(Nt), Ft = W(() => De.flatMap((e, t) => e.disabled ? [] : [t]), [De]), It = W(() => yt.flatMap(({ option: e, index: t }) => e.disabled ? [] : [t]), [yt]), Lt = () => {
		let e = De.findIndex((e) => e.value === $e && !e.disabled);
		return e >= 0 ? e : Ft[0] ?? -1;
	}, Rt = (e) => {
		let t = YD(e);
		return t ? QD(De, t, (e) => [e.value, e.label], (e) => !e.disabled) : Lt();
	}, zt = (e) => {
		It.length !== 0 && Ye((t) => {
			let n = It.indexOf(t);
			if (n === -1) return e === 1 ? It[0] : It[It.length - 1];
			let r = (n + e + It.length) % It.length;
			return It[r];
		});
	};
	Ge(() => {
		if (!U || !ht) return;
		let e = window.requestAnimationFrame(() => {
			ut.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [U, ht]);
	let Bt = () => {
		qe(!1), Qe("");
	}, Vt = () => {
		pt || re.disabled || (Qe(""), Ye(Lt()), qe(!0));
	}, Ht = (e) => {
		if (e.disabled) return;
		let t = st.current;
		t && (Ce || We(e.value), QE(t, e.value), it(cO(t, e.value)), Ye(De.findIndex((t) => t.value === e.value)), qe(!1), window.requestAnimationFrame(() => {
			lt.current?.focus();
		}));
	}, Ut = (e) => {
		if (re.disabled) return;
		if (pt) {
			let t = st.current;
			if (!t) return;
			let n = e.target;
			if (n && t.contains(n)) return;
			e.preventDefault(), bt();
			return;
		}
		let t = lt.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), U || Vt());
	}, Wt = H((e) => {
		let t = e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : [e.currentTarget.value];
		Ce || (He(t), e.currentTarget.multiple || We(e.currentTarget.value)), it(e);
	}, [Ce, it]), Gt = (e) => {
		switch (e.key) {
			case "ArrowDown":
				if (e.preventDefault(), !U) {
					Vt();
					return;
				}
				zt(1);
				return;
			case "ArrowUp":
				if (e.preventDefault(), !U) {
					Vt();
					return;
				}
				zt(-1);
				return;
			case "Home":
				if (!U || It.length === 0) return;
				e.preventDefault(), Ye(It[0]);
				return;
			case "End":
				if (!U || It.length === 0) return;
				e.preventDefault(), Ye(It[It.length - 1]);
				return;
			case "Enter":
			case " ":
				if (e.preventDefault(), !U) {
					Vt();
					return;
				}
				Je >= 0 && Ht(De[Je]);
				return;
			case "Escape":
				if (!U) return;
				e.preventDefault(), Bt();
				return;
			default: return;
		}
	}, Kt = (e) => {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), zt(1);
				return;
			case "ArrowUp":
				e.preventDefault(), zt(-1);
				return;
			case "Enter":
				e.preventDefault(), It.length > 0 && Ht(De[It[0]]);
				return;
			case "Escape":
				e.preventDefault(), Bt(), window.requestAnimationFrame(() => {
					lt.current?.focus();
				});
				return;
			default: return;
		}
	}, qt = () => {
		window.requestAnimationFrame(() => {
			let e = ct.current?.ownerDocument ?? (typeof document == "object" ? document : null), t = e?.activeElement ?? null, n = e?.getElementById(Pe) ?? null;
			if (t instanceof Node && (ct.current?.contains(t) || n?.contains(t))) return;
			Bt();
			let r = st.current;
			r && at(lO(r));
		});
	}, Jt = Q(Dt ? "[--_pc-input-message-size:12px] [--_pc-input-message-line-height:16px]" : void 0, f), Yt = !!re.disabled, Xt = Yt ? "border-[var(--pc-color-input-border,var(--pc-color-border))]" : void 0, Zt = be ? rO.wrapper.error : rO.wrapper.neutral, Qt = Q(rO.label.above, be ? Ex : void 0, d), $t = gb({
		hideLabel: !0,
		isCompact: Dt,
		withLabelDefaultClassName: rO.layout.selectSpacing,
		hiddenLabelDefaultClassName: rO.layout.hiddenSelectSpacing,
		withLabelCompactClassName: rO.layout.selectSpacingCompact,
		hiddenLabelCompactClassName: rO.layout.hiddenSelectSpacingCompact
	}), en = Q(rO.control.base, "min-h-0", $t, Yt ? rO.control.disabled : void 0, u), tn = Q(rO.nativeSelect.base, "min-h-0", $t, ye && rO.nativeSelect.multiple, rO.nativeSelect.option, u), nn = Q(rO.wrapper.base, D || O || !ye ? rO.wrapper.gap : void 0, fe ? "min-h-full border-0 bg-transparent px-0 shadow-none" : rO.wrapper.frame, fe ? "px-0" : Ot, fe ? void 0 : Zt, !fe && !pt && U ? `border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))] ${fx} [background-color:var(--pc-color-input-background,var(--pc-color-surface))]` : void 0, fe ? void 0 : Xt, l), rn = Q(rO.adornment.base, Yt ? rO.adornment.disabled : void 0, k), an = O ?? (ye ? null : /* @__PURE__ */ q("svg", {
		"aria-hidden": "true",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: vb({ isOpen: !pt && U }),
		children: /* @__PURE__ */ q("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	})), on = Q(rO.adornment.base, "text-[var(--pc-color-input-icon,var(--pc-color-text-muted))]", Yt ? rO.adornment.disabled : void 0, A), sn = ve !== void 0 || _e !== void 0, cn = !sn && N !== !1;
	if (P) {
		let e = sn ? /* @__PURE__ */ q(KD, {
			compact: Dt,
			helper: ve,
			error: _e,
			reserveSpace: !1
		}) : void 0;
		return /* @__PURE__ */ J(WD, {
			baseClassName: rO.container,
			containerClassName: c,
			dataTheme: xe,
			styles: rO.message,
			messageClassName: Jt,
			helperClassName: p,
			errorClassName: m,
			helper: e,
			reserveSpace: fe ? Tt !== !1 : cn,
			children: [Et && /* @__PURE__ */ q("label", {
				id: Ne,
				htmlFor: Ae,
				className: Qt,
				title: Ct,
				children: St
			}), /* @__PURE__ */ J("div", {
				className: nn,
				"data-skeleton": "true",
				"data-slot": fe ? "field-group-control" : "select-skeleton-shell",
				children: [
					D && /* @__PURE__ */ q("div", {
						className: rn,
						children: /* @__PURE__ */ q(kD, { className: "h-4 w-4 rounded-full" })
					}),
					/* @__PURE__ */ q("div", {
						className: rO.inner,
						children: /* @__PURE__ */ q("div", {
							"aria-hidden": "true",
							className: Q(en, "flex items-center text-transparent select-none"),
							children: /* @__PURE__ */ q(kD, { className: "h-3.5 w-3/5 rounded-full" })
						})
					}),
					an && /* @__PURE__ */ q("div", {
						className: on,
						children: /* @__PURE__ */ q(kD, { className: "h-4 w-4 rounded-full" })
					})
				]
			})]
		});
	}
	let ln = ot?.required?.value ?? S, un = nO(re), dn = {
		...un,
		...B,
		id: Ae,
		ref: dt,
		className: tn
	};
	jt === void 0 ? At === void 0 ? Et && (dn["aria-labelledby"] = Ne) : dn["aria-labelledby"] = At : dn["aria-label"] = jt, dn["aria-describedby"] = Me, dn.onChange = Wt, dn.onBlur = at, ln && (dn.required = !0, dn["aria-required"] = !0), be && (dn["aria-invalid"] = !0), ye ? Ce ? dn.value = et : dn.defaultValue = et : Ce ? dn.value = $e : dn.defaultValue = $e;
	let fn = {
		...un,
		id: V,
		name: ae,
		className: rO.nativeSelect.hidden,
		tabIndex: -1,
		disabled: Yt,
		required: ln,
		value: $e,
		onChange: () => void 0
	};
	fn["aria-hidden"] = !0;
	let pn = (() => {
		if (jt === void 0) return Et ? Ne : At;
	})(), mn = yt.length > 0 ? yt.map(({ option: e, index: t }) => {
		let n = e.value === $e;
		return /* @__PURE__ */ q(Cb, {
			role: "option",
			ariaSelected: n,
			selected: n,
			highlighted: t === Je,
			disabled: e.disabled,
			label: e.label,
			leading: ne?.[e.value],
			trailing: n ? /* @__PURE__ */ q("span", {
				className: rO.dropdown.optionSelectedIcon,
				children: /* @__PURE__ */ q(lD, {})
			}) : void 0,
			onMouseEnter: () => {
				Ye(t);
			},
			onClick: () => {
				Ht(e);
			}
		}, `${e.value}-${String(t)}`);
	}) : ht && gt ? /* @__PURE__ */ q("div", {
		className: rO.dropdown.empty,
		children: te
	}) : /* @__PURE__ */ q("div", {
		className: rO.dropdown.empty,
		children: "No options are available."
	});
	return /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ J(WD, {
		baseClassName: rO.container,
		containerClassName: c,
		belowFieldContent: i,
		belowFieldContentClassName: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: xe,
		styles: rO.message,
		messageClassName: Jt,
		helperClassName: p,
		errorClassName: m,
		error: _e,
		helper: ve,
		messageId: je,
		reserveSpace: Tt !== !1,
		children: [Et && /* @__PURE__ */ q("label", {
			id: Ne,
			htmlFor: Ae,
			className: Qt,
			title: Ct,
			children: St
		}), /* @__PURE__ */ J("div", {
			ref: ct,
			className: nn,
			onMouseDown: Ut,
			"data-slot": fe ? "field-group-control" : "select-shell",
			children: [
				D && /* @__PURE__ */ q("div", {
					className: rn,
					children: D
				}),
				/* @__PURE__ */ q("div", {
					className: rO.inner,
					children: pt ? /* @__PURE__ */ q("select", {
						...dn,
						children: j
					}) : /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ q("select", {
						ref: dt,
						...fn,
						children: j
					}), /* @__PURE__ */ q("button", {
						id: Ae,
						ref: ft,
						type: "button",
						role: "combobox",
						"aria-expanded": U,
						"aria-controls": Pe,
						"aria-haspopup": "listbox",
						"aria-invalid": be ? !0 : void 0,
						"aria-describedby": Me,
						"aria-required": ln ? !0 : void 0,
						"aria-label": jt,
						"aria-labelledby": pn,
						disabled: Yt,
						autoFocus: re.autoFocus,
						className: en,
						onClick: () => {
							U ? Bt() : Vt();
						},
						onKeyDown: Gt,
						onBlur: qt,
						children: /* @__PURE__ */ q("span", {
							className: rO.control.display,
							title: Pt,
							children: Nt
						})
					})] })
				}),
				an && /* @__PURE__ */ q("div", {
					className: on,
					children: an
				})
			]
		})]
	}), !pt && /* @__PURE__ */ q(ix, {
		id: Pe,
		anchorRef: ct,
		isOpen: U,
		onRequestClose: Bt,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: "listbox",
		labelledBy: Et ? Ne : void 0,
		renderContent: () => /* @__PURE__ */ J("div", {
			className: rO.dropdown.content,
			children: [ht && /* @__PURE__ */ q(IS, {
				ref: ut,
				value: Xe,
				onChange: (e) => {
					Qe(e), Ye(Rt(e));
				},
				onKeyDown: Kt,
				placeholder: ee,
				ariaLabel: $D(St, "Search options")
			}), /* @__PURE__ */ q("div", {
				className: rO.dropdown.list,
				children: mn
			})]
		})
	})] });
});
uO.displayName = "Select", oD(uO);
//#endregion
//#region ../ui/src/lib/useCopyToClipboard.ts
var dO = (e) => {
	if (typeof document > "u") return !1;
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "1px", t.style.height = "1px", t.style.opacity = "0", document.body.appendChild(t), t.select(), t.setSelectionRange(0, e.length);
	try {
		return document.execCommand("copy");
	} catch {
		return !1;
	} finally {
		document.body.removeChild(t);
	}
}, fO = ({ resetDelayMs: e = 1200 } = {}) => {
	let [t, n] = K("idle"), r = H((e) => {
		if (!e) return;
		let t = typeof navigator > "u" ? null : navigator.clipboard;
		!t || typeof t.writeText != "function" ? n(dO(e) ? "copied" : "error") : (n("copied"), t.writeText(e).catch(() => {
			n(dO(e) ? "copied" : "error");
		}));
	}, []);
	return Ge(() => {
		if (t === "idle" || typeof e != "number" || e <= 0) return;
		let r = window.setTimeout(() => {
			n("idle");
		}, e);
		return () => {
			window.clearTimeout(r);
		};
	}, [e, t]), {
		status: t,
		copy: r
	};
}, pO = (e) => e == null ? "" : Array.isArray(e) ? e.join(",") : String(e), mO = (e, t) => Number.isNaN(e) ? t : e <= 0 ? 0 : e >= t ? t : e, hO = (e, t, n) => {
	if (!t) return 0;
	let r = mO(n, t.length);
	return r <= 0 ? 0 : e.parseUserInput(t.slice(0, r)).length;
}, gO = (e, t, n) => {
	if (n <= 0) return 0;
	if (n >= e.parseUserInput(t).length) return t.length;
	for (let r = 0; r <= t.length; r += 1) if (e.parseUserInput(t.slice(0, r)).length >= n) return r;
	return t.length;
}, _O = "00:00", vO = (e) => {
	if (!e) return {
		date: "",
		time: _O
	};
	let [t, n] = e.split("T");
	return {
		date: t,
		time: n ? n.slice(0, 5) : _O
	};
}, yO = (e, t) => e ? `${e}T${t || _O}` : "", bO = 1970, xO = 2125, SO = new Date(bO, 0, 1), CO = new Date(xO, 11, 31), wO = SO, TO = new Date(xO, 11, 1), EO = new Intl.DateTimeFormat("en-GB", { month: "long" }), DO = Array.from({ length: 12 }, (e, t) => EO.format(new Date(2e3, t, 1))), OO = Array.from({ length: 156 }, (e, t) => bO + t), kO = {
	root: "space-y-2 text-[var(--pc-color-text)]",
	months: "flex flex-col gap-2",
	month: "space-y-1.5",
	month_grid: "w-full border-collapse text-[13px]",
	weekdays: "text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--pc-color-text-muted)]",
	weekday: "text-center",
	weeks: "text-xs",
	week: "",
	day: "p-0.5 text-center",
	day_button: "",
	caption_label: "sr-only",
	dropdowns: "hidden",
	dropdown: "hidden",
	dropdown_root: "hidden",
	nav: "hidden",
	footer: "text-xs text-[var(--pc-color-text-muted)]"
}, AO = (e) => new Date(e.getFullYear(), e.getMonth(), 1), jO = (e) => {
	let t = AO(e);
	return t < wO ? AO(wO) : t > TO ? AO(TO) : t;
}, MO = (e) => {
	if (!e) return;
	let [t, n, r] = e.split("-"), i = Number.parseInt(t, 10), a = Number.parseInt(n, 10), o = Number.parseInt(r, 10);
	if (!(Number.isNaN(i) || Number.isNaN(a) || Number.isNaN(o))) return new Date(i, a - 1, o, 12);
}, NO = (e) => jO(MO(e) || /* @__PURE__ */ new Date()), PO = (e) => `${e.getFullYear().toString().padStart(4, "0")}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`, FO = (e) => `${e.getHours().toString().padStart(2, "0")}:${e.getMinutes().toString().padStart(2, "0")}`, IO = (e, t) => {
	let n = Number.parseInt(e, 10);
	return Number.isNaN(n) ? "00" : Math.min(Math.max(n, 0), t).toString().padStart(2, "0");
}, LO = (e) => {
	let [t = "00", n = "00"] = (e || _O).split(":");
	return {
		hours: IO(t, 23),
		minutes: IO(n, 59)
	};
}, RO = (e, t) => `${e}:${t}`, zO = ({ className: e, modifiers: t, disabled: n, ...r }) => {
	let { children: i, ...a } = r, o = t.selected, s = t.outside, c = t.today, l = !!(t.disabled || n);
	return /* @__PURE__ */ q("button", {
		...a,
		type: "button",
		disabled: l,
		"data-theme": Ev(o ? "secondary" : "neutral"),
		"data-disabled": bv(l),
		className: Q(sv, rv.md, dv(o ? "solid" : "outline"), "h-8 w-8 rounded-[var(--pc-radius-full)] border-0 text-xs font-semibold transition-none", o ? "text-[var(--pc-color-text)]" : "text-[var(--pc-color-text-muted)] focus-visible:ring-[var(--pc-color-border)]", c && !o && "text-[var(--pc-color-text)]", s && "opacity-50", e),
		children: i
	});
}, BO = (e, t, n, r) => {
	let i = t.length, a = r.start ?? r.end ?? i, o = r.end ?? r.start ?? i, s = Math.min(a, o), c = Math.max(a, o), l = hO(e, t, s), u = hO(e, t, c);
	return {
		start: gO(e, n, l),
		end: gO(e, n, u)
	};
}, VO = (e) => !!e && typeof e == "object" && ("start" in e || "end" in e), HO = (e, t) => {
	if (VO(e)) return {
		start: mO(e.start ?? t, t),
		end: mO(e.end ?? t, t)
	};
	let n = mO(typeof e == "number" ? e : t, t);
	return {
		start: n,
		end: n
	};
}, UO = (e, t) => {
	try {
		let n = t.start ?? t.end ?? null, r = t.end ?? t.start ?? null;
		e.setSelectionRange(n, r);
	} catch {}
}, WO = /* @__PURE__ */ new Set([
	"belowFieldContent",
	"belowFieldContentClassName",
	"belowFieldContentInheritsTheme",
	"containerClassName",
	"density",
	"error",
	"errorClassName",
	"field",
	"form",
	"helperClassName",
	"helperText",
	"hideLabel",
	"innerRef",
	"inputClassName",
	"label",
	"labelClassName",
	"messageClassName",
	"meta",
	"reserveMessageSpace",
	"skeleton",
	"validation",
	"variant"
]), GO = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !WO.has(e))) : {}, KO = {
	container: mS.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		textareaLabelOffset: "left-0",
		wrapperSpacing: ES,
		wrapperSpacingCompact: DS,
		wrapperHiddenSpacing: OS,
		wrapperHiddenSpacingCompact: kS,
		inputSpacing: yS.spacing.default,
		hiddenInputSpacing: yS.spacing.hiddenDefault,
		textareaSpacing: yS.spacing.textarea,
		hiddenTextareaSpacing: yS.spacing.hiddenTextarea,
		compactInputSpacing: yS.spacing.compact,
		hiddenCompactInputSpacing: yS.spacing.hiddenCompact,
		compactTextareaSpacing: yS.spacing.compact,
		hiddenCompactTextareaSpacing: yS.spacing.hiddenCompact
	},
	label: {
		above: Tx,
		aboveWrapper: `flex w-full min-w-0 flex-col ${Ox}`
	},
	input: { base: `${AS} ${Sx}` },
	textarea: {
		base: `${jS} ${Sx}`,
		disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
	},
	wrapper: {
		base: SS,
		text: bS,
		textarea: xS,
		neutral: CS,
		raised: wS,
		error: TS
	},
	adornment: {
		base: gS.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	message: {
		error: hS.error,
		helper: hS.helper,
		darkErrorTone: mS.message.darkErrorTone,
		darkHelperTone: mS.message.darkHelperTone
	},
	inner: _S,
	gapWithAdornment: vS
}, qO = He(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentClassName: a, belowFieldContentInheritsTheme: o = !0, error: s, containerClassName: c, className: l, inputClassName: u, labelClassName: d, messageClassName: f, helperClassName: p, errorClassName: m, field: h, meta: g, form: _, innerRef: v, as: y, type: b, onChange: x, onBlur: S, onFocus: C, id: w, name: T, value: E, defaultValue: D, leadingAdornment: O, trailingAdornment: k, copyValue: A, copyLabel: j = "Copy", copiedLabel: M = "Copied", copyButtonProps: N, leadingAdornmentClassName: P, trailingAdornmentClassName: F, validation: I, required: ee, density: te = "default", reserveMessageSpace: ne, skeleton: re = !1, formattingAdapter: L, inputProps: R, ...z }, ie) {
	let [ae, oe] = K(), se = s ?? ae, { status: ce, copy: le } = fO(), { inputId: B, resolvedName: ue, handleChange: de, handleBlur: fe, hasValue: pe, errorContent: me, helperContent: he, sharedProps: ge, resolvedValue: _e } = WE({
		forwardedRef: ie,
		field: h,
		meta: g,
		form: _,
		innerRef: v,
		id: w,
		name: T,
		value: E,
		defaultValue: D,
		explicitError: se,
		helperText: r,
		onChange: x,
		onBlur: S
	}), { isGrouped: ve, reserveChildMessageSpace: ye, suppressChildMessages: be } = iD(), xe = ve && be, Se = me, Ce = xe ? void 0 : me, we = xe ? void 0 : he, Te = `${Ke()}-message`, Ee = te === "compact", De = Q(Ee ? "[--_pc-input-message-size:12px] [--_pc-input-message-line-height:16px]" : void 0, f), Oe = y === "textarea" || b === "textarea", ke = typeof b == "string" ? b.toLowerCase() : b, Ae = !re && !!Se, { dataTheme: je } = qD({
		variant: e,
		hasError: Ae
	}), Me = !Oe && ke === "datetime-local", Ne = !Oe && ke === "search", Pe = !Oe, V = _?.setFieldValue, Fe = H((e) => Pe && typeof e == "boolean" ? String(e) : e, [Pe]), Ie = W(() => ({
		...GO(R),
		...GO(z)
	}), [R, z]), Le = W(() => {
		if (!Pe) return ge;
		let e = { ...ge };
		return "value" in e && (e.value = Fe(e.value)), "defaultValue" in e && (e.defaultValue = Fe(e.defaultValue)), e;
	}, [
		Fe,
		ge,
		Pe
	]), Re = G(null), ze = G(null), Be = G(null), Ve = H((e) => {
		ze.current = e;
	}, []), He = H((e) => {
		ze.current = e;
	}, []), { ref: Ue, ...We } = Le, U = Object.prototype.hasOwnProperty.call(We, "value"), qe = Object.prototype.hasOwnProperty.call(We, "defaultValue"), Ye = U ? We.value : void 0, Xe = qe ? We.defaultValue : void 0, $e = U, et = W(() => vO(typeof Ye == "string" && Ye || typeof Xe == "string" && Xe || (typeof D == "string" ? D : void 0)), [
		D,
		Xe,
		Ye
	]), tt = pe ? !0 : U ? BE(Ye) : qe ? BE(Xe) : D !== void 0 && BE(D), [nt, rt] = K(tt), [it, at] = K(!1), [ot, st] = K(et.date), [ct, lt] = K(et.time), [ut, dt] = K(null), [ft, pt] = K(() => NO(et.date)), mt = H((e) => {
		pt((t) => jO(typeof e == "function" ? e(t) : e));
	}, []), ht = $e ? pe : nt, gt = H((e) => {
		let t = e.currentTarget;
		if (t instanceof HTMLInputElement) return t.type === "checkbox" ? t.checked : t.value;
		if (t instanceof HTMLTextAreaElement) return t.value;
	}, []), _t = H((e) => {
		oe(e);
	}, [oe]), { onChange: vt, onBlur: yt, normalizedValidation: bt } = GE({
		value: _e,
		required: ee,
		validation: I,
		metaTouched: g?.touched,
		submitCount: _?.submitCount,
		resolvedName: ue,
		setFieldError: _?.setFieldError,
		handleChange: de,
		handleBlur: fe,
		setManagedError: _t,
		getValueFromChangeEvent: gt,
		normalizeValue: Fe
	}), xt = (e) => {
		if (!$e) {
			let t = e.currentTarget;
			t instanceof HTMLInputElement ? t.type === "checkbox" ? rt(t.checked) : rt(t.value.length > 0) : t instanceof HTMLTextAreaElement && rt(t.value.length > 0);
		}
		vt(e);
	};
	Ge(() => {
		Pe && V && ue && typeof _e == "boolean" && V(ue, String(_e), !1);
	}, [
		ue,
		_e,
		V,
		Pe
	]);
	let { hideLabel: St } = tD(), Ct = t ?? ue ?? "", wt;
	typeof Ct == "string" ? wt = Ct : typeof Ie["aria-label"] == "string" && (wt = Ie["aria-label"]);
	let Tt = HD(Ct), Et = n ?? (Ne || ve ? !0 : St) ?? !1, Dt = ne ?? (ve && !ye ? !1 : void 0), Ot = !Et && (typeof t != "string" || t.length !== 0), kt = gb({
		hideLabel: Et,
		isCompact: Ee,
		withLabelDefaultClassName: KO.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: KO.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: KO.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: KO.layout.wrapperHiddenSpacingCompact
	}), At = pO(A), jt = !Oe && At.length > 0, { className: Mt, disabled: Nt, id: Pt, tabIndex: Ft, title: It, "data-testid": Lt, "data-payment-field-display-copy": Rt } = N ?? {}, zt = ce === "copied" ? M : j, Bt = wt && wt.trim().length > 0 ? `${zt} ${wt}` : zt, Vt = jt ? /* @__PURE__ */ q(Pv, {
		id: Pt,
		type: "button",
		variant: "neutral",
		appearance: "ghost",
		size: "xs",
		iconOnly: !0,
		showTooltip: !0,
		label: zt,
		"aria-label": Bt,
		title: It,
		leadingIcon: q(ce === "copied" ? lD : mD, {}),
		disabled: !!Ie.disabled || Nt,
		className: Q("shrink-0", Mt),
		tabIndex: Ft,
		"data-slot": "input-copy-button",
		"data-testid": Lt,
		"data-payment-field-display-copy": Rt,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), le(At);
		}
	}) : null, Ht = k || Vt ? /* @__PURE__ */ J(Ze, { children: [k, Vt] }) : null, Ut = O ?? (Ne ? /* @__PURE__ */ q(ED, {}) : null), Wt = !!Ut, Gt = !!Ht, Kt = !!Ie.disabled, qt = !!Ie.readOnly, Jt = Kt ? "border-[var(--pc-color-input-border,var(--pc-color-border))]" : void 0, Yt = Ce ? KO.wrapper.error : ht ? KO.wrapper.raised : KO.wrapper.neutral, Xt = Q(KO.label.above, Ce ? Ex : void 0, d), Zt = Ot ? /* @__PURE__ */ q("span", {
		className: Xt,
		title: Tt,
		children: Ct
	}) : null, Qt = H(() => {
		if (!Me) return;
		let e = Re.current;
		if (!(e instanceof HTMLInputElement)) {
			let e = vO(void 0);
			st(e.date), lt(e.time), mt(NO(e.date));
			return;
		}
		let t = vO(e.value);
		st(t.date), lt(t.time), mt(NO(t.date));
	}, [
		Me,
		mt,
		st,
		lt
	]), $t = H((e, t) => {
		if (!Me) return;
		let n = e ?? "", r = t ?? _O;
		if (!(Re.current instanceof HTMLInputElement)) {
			st(n), lt(r);
			return;
		}
		let i = n ? yO(n, r) : "";
		if (QE(Re.current, i), Re.current.dispatchEvent(new Event("input", { bubbles: !0 })), n) {
			let e = MO(n);
			e && mt(e);
		}
		st(n), lt(r), rt(i.length > 0);
	}, [
		Me,
		mt,
		st,
		rt,
		lt
	]), en = W(() => MO(ot), [ot]), tn = W(() => LO(ct), [ct]), nn = H((e) => {
		let t = RO(IO(e.currentTarget.value, 23), tn.minutes);
		$t(ot, t);
	}, [
		$t,
		ot,
		tn.minutes
	]), rn = H((e) => {
		let t = IO(e.currentTarget.value, 59), n = RO(tn.hours, t);
		$t(ot, n);
	}, [
		$t,
		ot,
		tn.hours
	]), an = H((e) => {
		Me && (e ? ($t(PO(e), ct), mt(e)) : $t("", ct));
	}, [
		$t,
		Me,
		mt,
		ct
	]), on = H((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || mt((e) => new Date(e.getFullYear(), t, 1));
	}, [mt]), sn = H((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || mt((e) => new Date(t, e.getMonth(), 1));
	}, [mt]), cn = H((e) => {
		mt((t) => new Date(t.getFullYear(), t.getMonth() + (e === "next" ? 1 : -1), 1));
	}, [mt]), ln = H(() => {
		$t("", _O), mt(/* @__PURE__ */ new Date());
	}, [$t, mt]), un = H(() => {
		let e = /* @__PURE__ */ new Date();
		$t(PO(e), FO(e)), mt(e);
	}, [$t, mt]), dn = H(() => {
		Me && (Qt(), at(!0));
	}, [
		Me,
		at,
		Qt
	]), fn = H(() => {
		at(!1), dt(null);
	}, [dt, at]), pn = H((e) => {
		if (!Me || !it || typeof window > "u") return;
		let t = ze.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = window.innerWidth || 0, i = window.innerHeight || 0, a = n.width, o = Math.max(r - 32, a), s = Be.current?.getBoundingClientRect().width, c = Math.min(Math.max(s ?? a, a), o), l = e ?? Be.current?.getBoundingClientRect().height ?? 320, u = Math.max(i - 32, 320), d = Math.min(l, u), f = i - n.bottom - 8 - 16, p = n.top - 8 - 16, m = d > f && p > f, h = r - c - 16, g = Math.min(Math.max(n.left, 16), Math.max(h, 16)), _ = n.bottom + 8, v = n.top - 8 - d, y = Math.max(i - d - 16, 16), b = m ? Math.max(v, 16) : Math.min(Math.max(_, 16), y);
		dt((e) => e && e.top === b && e.left === g && e.width === c ? e : {
			top: b,
			left: g,
			width: c
		});
	}, [
		Me,
		it,
		dt
	]);
	Ge(() => {
		if (!it || typeof document > "u") return;
		let e = (e) => {
			let t = ze.current, n = Be.current, r = e.target;
			t && r && t.contains(r) || n && r && n.contains(r) || fn();
		}, t = (e) => {
			e.key === "Escape" && fn();
		};
		return document.addEventListener("pointerdown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", t);
		};
	}, [fn, it]), Je(() => {
		if (!it || !Me || typeof window > "u") return;
		pn();
		let e = () => {
			pn();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		Me,
		it,
		pn
	]), Je(() => {
		if (!it || !Me) return;
		let e = Be.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		pn(t.height);
	}, [
		Me,
		it,
		ut,
		pn
	]);
	let mn = gb({
		hideLabel: Et,
		isCompact: Ee,
		withLabelDefaultClassName: KO.layout.inputSpacing,
		hiddenLabelDefaultClassName: KO.layout.hiddenInputSpacing,
		withLabelCompactClassName: KO.layout.compactInputSpacing,
		hiddenLabelCompactClassName: KO.layout.hiddenCompactInputSpacing
	}), hn = gb({
		hideLabel: Et,
		isCompact: Ee,
		withLabelDefaultClassName: KO.layout.textareaSpacing,
		hiddenLabelDefaultClassName: KO.layout.hiddenTextareaSpacing,
		withLabelCompactClassName: KO.layout.compactTextareaSpacing,
		hiddenLabelCompactClassName: KO.layout.hiddenCompactTextareaSpacing
	}), gn = Ae ? bx : void 0, _n = Ae ? xx : void 0, vn = Q(KO.input.base, mn, void 0, gn, _n, Me ? NS : void 0, Ne ? MS : void 0, u), yn = Q(KO.wrapper.text, (Wt || Gt) && KO.gapWithAdornment, ve ? "min-h-full border-0 bg-transparent px-0 shadow-none" : KO.wrapper.base, ve ? "px-0" : kt, ve ? void 0 : Yt, ve ? void 0 : Jt, l), bn = Q(KO.wrapper.textarea, ve ? "min-h-full border-0 bg-transparent px-0 shadow-none" : KO.wrapper.base, ux, ve ? "px-0" : kt, ve ? void 0 : Yt, ve ? void 0 : Jt, l), xn = Q(KO.textarea.base, hn, void 0, gn, _n, KO.textarea.disabled, u), Sn = Q(KO.adornment.base, Kt ? KO.adornment.disabled : void 0, P), Cn = Q(KO.adornment.base, Kt && !jt ? KO.adornment.disabled : void 0, F);
	if (re) {
		let e = Oe ? /* @__PURE__ */ q("div", {
			className: bn,
			"data-disabled": bv(Kt),
			"data-readonly": bv(qt),
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: /* @__PURE__ */ q("div", {
				className: KO.inner,
				children: /* @__PURE__ */ J("div", {
					"aria-hidden": "true",
					className: Q(xn, "flex flex-col gap-2 text-transparent select-none"),
					children: [
						/* @__PURE__ */ q(kD, { className: "h-3.5 w-4/5 rounded-full" }),
						/* @__PURE__ */ q(kD, { className: "h-3.5 w-full rounded-full" }),
						/* @__PURE__ */ q(kD, { className: "h-3.5 w-3/5 rounded-full" })
					]
				})
			})
		}) : /* @__PURE__ */ J("div", {
			className: yn,
			"data-disabled": bv(Kt),
			"data-readonly": bv(qt),
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: [
				Wt && /* @__PURE__ */ q("div", {
					className: Sn,
					children: Ut
				}),
				/* @__PURE__ */ q("div", {
					className: KO.inner,
					children: /* @__PURE__ */ q("div", {
						"aria-hidden": "true",
						className: Q(vn, "text-transparent select-none"),
						children: /* @__PURE__ */ q("div", {
							className: "flex h-[var(--pc-font-line-height-input,20px)] w-full items-center",
							children: /* @__PURE__ */ q(kD, { className: Q("h-3.5 rounded-full translate-y-0.5", Gt ? "w-2/3" : "w-4/5") })
						})
					})
				}),
				Gt && /* @__PURE__ */ q("div", {
					className: Cn,
					children: Ht
				})
			]
		}), t = Ot ? /* @__PURE__ */ J("div", {
			className: KO.label.aboveWrapper,
			children: [Zt, e]
		}) : e;
		return /* @__PURE__ */ q(WD, {
			baseClassName: KO.container,
			containerClassName: c,
			dataTheme: je,
			styles: KO.message,
			messageClassName: De,
			messageId: Te,
			helperClassName: p,
			errorClassName: m,
			error: Ce,
			helper: we,
			reserveSpace: Dt !== !1,
			children: t
		});
	}
	let wn = {
		...Ie,
		...We
	};
	wn["aria-describedby"] = [wn["aria-describedby"], Ce || we ? Te : void 0].filter(Boolean).join(" ") || void 0, wn.ref = (e) => {
		Re.current = e, Ue && RE(Ue, e);
	}, wn.onChange = xt, wn.onBlur = yt, Et && typeof Ct == "string" && Ct.length > 0 && wn["aria-label"] === void 0 && wn["aria-labelledby"] === void 0 && (wn["aria-label"] = Ct), Oe || (Me ? (wn.type = "text", wn.inputMode ??= "numeric", wn.autoComplete ??= "off", wn.pattern ??= "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", wn["aria-label"] ??= typeof Ct == "string" ? Ct : "Date time input", wn["data-datetime-input"] = "true", (wn.placeholder === void 0 || wn.placeholder === null || wn.placeholder === "") && (wn.placeholder = "YYYY-MM-DDTHH:MM")) : wn.type = (b === "checkbox" ? "text" : b) ?? "text", Ne && wt && (wn.placeholder === void 0 || wn.placeholder === null || wn.placeholder === "") && (wn.placeholder = wt)), (bt?.required?.value ?? ee) && (wn.required = !0, wn["aria-required"] = !0), Ae && (wn["aria-invalid"] = !0), L ? (U ? wn.value = L.formatDisplayValue(pO(Ye)) : qe && (wn.defaultValue = L.formatDisplayValue(pO(Xe))), wn.onChange = (e) => {
		if (!L) {
			xt(e);
			return;
		}
		let t = e.currentTarget, n = t.value, r = {
			start: t.selectionStart ?? n.length,
			end: t.selectionEnd ?? n.length
		}, i = pO(L.parseUserInput(n)), a = L.formatDisplayValue(i);
		if (QE(t, i), xt(e), t.value !== a && QE(t, a), t !== (typeof document < "u" ? document.activeElement : null) || typeof t.setSelectionRange != "function") {
			if (!$e) {
				let e = t.type === "checkbox" ? t.checked : t.value.length > 0;
				rt(e);
			}
		} else if (UO(t, HO((L.restoreCaret ? L.restoreCaret(n, a, r) : void 0) ?? BO(L, n, a, r), a.length)), !$e) {
			let e = t.type === "checkbox" ? t.checked : t.value.length > 0;
			rt(e);
		}
	}) : wn.onChange = xt, wn.onFocus = (e) => {
		C?.(e), !e.defaultPrevented && !Oe && Me && dn();
	};
	let Tn = (e) => {
		e.stopPropagation();
	}, En = (e) => {
		e.stopPropagation();
	}, Dn = () => {
		if (!Me || !it || !ut || typeof document > "u") return null;
		let e = !!ot, t = "w-32", n = /* @__PURE__ */ J("div", {
			ref: (e) => {
				Be.current = e;
			},
			className: "fixed z-[2200] inline-flex flex-col max-w-[calc(100vw-2rem)] rounded-[var(--pc-radius-2xl)] bg-[var(--pc-color-surface)] p-3 text-[var(--pc-color-text)] shadow-2xl",
			onMouseDownCapture: Tn,
			onPointerDownCapture: Tn,
			onTouchStartCapture: En,
			style: {
				top: ut.top,
				left: ut.left,
				minWidth: ut.width
			},
			children: [
				/* @__PURE__ */ q("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: /* @__PURE__ */ J("div", {
						className: "flex flex-nowrap items-center gap-2",
						children: [
							/* @__PURE__ */ q(Pv, {
								"aria-label": "Go to previous month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									cn("previous");
								},
								iconOnly: !0,
								label: "Go to previous month",
								leadingIcon: /* @__PURE__ */ q(dD, {})
							}),
							/* @__PURE__ */ q("div", {
								className: "w-40",
								children: /* @__PURE__ */ q(uO, {
									label: "Select month",
									hideLabel: !0,
									value: ft.getMonth().toString(),
									onChange: on,
									density: "compact",
									reserveMessageSpace: !1,
									children: DO.map((e, t) => /* @__PURE__ */ q("option", {
										value: t,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ q("div", {
								className: "w-28",
								children: /* @__PURE__ */ q(uO, {
									label: "Select year",
									hideLabel: !0,
									value: ft.getFullYear().toString(),
									onChange: sn,
									density: "compact",
									reserveMessageSpace: !1,
									children: OO.map((e) => /* @__PURE__ */ q("option", {
										value: e,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ q(Pv, {
								"aria-label": "Go to next month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									cn("next");
								},
								iconOnly: !0,
								label: "Go to next month",
								leadingIcon: /* @__PURE__ */ q(fD, {})
							})
						]
					})
				}),
				/* @__PURE__ */ q("div", {
					className: "mt-3 rounded-[var(--pc-radius-2xl)] bg-[color:var(--pc-color-surface)] p-2",
					children: /* @__PURE__ */ q(IE, {
						mode: "single",
						month: ft,
						onMonthChange: mt,
						selected: en,
						onSelect: an,
						startMonth: wO,
						endMonth: TO,
						disabled: {
							before: SO,
							after: CO
						},
						showOutsideDays: !0,
						classNames: kO,
						components: { DayButton: zO }
					})
				}),
				/* @__PURE__ */ J("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ q("p", {
						className: "text-[10px] font-semibold uppercase tracking-wide text-[var(--pc-color-text-muted)]",
						children: "Time"
					}), /* @__PURE__ */ J("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ q("div", {
							className: t,
							children: /* @__PURE__ */ q(VD, {
								label: "Hours",
								hideLabel: !0,
								density: "compact",
								reserveMessageSpace: !1,
								min: 0,
								max: 23,
								step: 1,
								inputMode: "numeric",
								pattern: "[0-9]*",
								value: tn.hours,
								onChange: nn
							})
						}), /* @__PURE__ */ q("div", {
							className: t,
							children: /* @__PURE__ */ q(VD, {
								label: "Minutes",
								hideLabel: !0,
								density: "compact",
								reserveMessageSpace: !1,
								min: 0,
								max: 59,
								step: 1,
								inputMode: "numeric",
								pattern: "[0-9]*",
								value: tn.minutes,
								onChange: rn
							})
						})]
					})]
				}),
				/* @__PURE__ */ J("div", {
					className: "mt-3 flex items-center justify-end gap-2",
					children: [
						/* @__PURE__ */ q(Pv, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: ln,
							disabled: !e,
							label: "Clear"
						}),
						/* @__PURE__ */ q(Pv, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: un,
							label: "Use now"
						}),
						/* @__PURE__ */ q(Pv, {
							type: "button",
							variant: "secondary",
							size: "sm",
							onClick: fn,
							label: "Apply"
						})
					]
				})
			]
		});
		return Qe(n, document.body);
	}, On = /* @__PURE__ */ q("div", {
		className: bn,
		"data-disabled": bv(Kt),
		"data-readonly": bv(qt),
		"data-slot": ve ? "field-group-control" : "input-shell",
		children: /* @__PURE__ */ q("div", {
			className: KO.inner,
			children: /* @__PURE__ */ q("textarea", {
				className: xn,
				...wn
			})
		})
	}), kn = /* @__PURE__ */ J("div", {
		className: yn,
		"data-disabled": bv(Kt),
		"data-readonly": bv(qt),
		"data-slot": ve ? "field-group-control" : "input-shell",
		ref: Ve,
		children: [
			Wt && /* @__PURE__ */ q("div", {
				className: Sn,
				children: Ut
			}),
			/* @__PURE__ */ J("div", {
				className: KO.inner,
				children: [/* @__PURE__ */ q("input", {
					className: vn,
					...wn
				}), Dn()]
			}),
			Gt && /* @__PURE__ */ q("div", {
				className: Cn,
				children: Ht
			})
		]
	}), An = Ot ? /* @__PURE__ */ J("label", {
		htmlFor: B,
		className: KO.label.aboveWrapper,
		children: [Zt, Oe ? On : kn]
	}) : /* @__PURE__ */ q("label", {
		htmlFor: B,
		className: Oe ? bn : yn,
		"data-disabled": bv(Kt),
		"data-readonly": bv(qt),
		"data-slot": ve ? "field-group-control" : "input-shell",
		ref: Oe ? void 0 : He,
		children: Oe ? /* @__PURE__ */ q("div", {
			className: KO.inner,
			children: /* @__PURE__ */ q("textarea", {
				className: xn,
				...wn
			})
		}) : /* @__PURE__ */ J(Ze, { children: [
			Wt && /* @__PURE__ */ q("div", {
				className: Sn,
				children: Ut
			}),
			/* @__PURE__ */ J("div", {
				className: KO.inner,
				children: [/* @__PURE__ */ q("input", {
					className: vn,
					...wn
				}), Dn()]
			}),
			Gt && /* @__PURE__ */ q("div", {
				className: Cn,
				children: Ht
			})
		] })
	});
	return /* @__PURE__ */ q(WD, {
		baseClassName: KO.container,
		containerClassName: c,
		belowFieldContent: i,
		belowFieldContentClassName: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: je,
		styles: KO.message,
		messageClassName: De,
		messageId: Te,
		helperClassName: p,
		errorClassName: m,
		error: Ce,
		helper: we,
		reserveSpace: Dt !== !1,
		children: An
	});
});
qO.displayName = "Input", oD(qO);
//#endregion
//#region ../ui/src/lib/FieldGroup.tsx
var JO = {
	error: hS.error,
	helper: hS.helper,
	darkErrorTone: mS.message.darkErrorTone,
	darkHelperTone: mS.message.darkHelperTone
}, YO = (e) => e != null && typeof e != "boolean", XO = [
	"input:not([disabled]):not([type=\"hidden\"])",
	"textarea:not([disabled])",
	"select:not([disabled])",
	"button:not([disabled])",
	"[tabindex]:not([tabindex=\"-1\"])",
	"[contenteditable=\"true\"]"
].join(","), ZO = (e) => e ? Array.from(e.querySelectorAll(XO)).filter((e) => e.getAttribute("aria-disabled") !== "true") : [], QO = ({ clientX: e, clientY: t }, n) => {
	let r = Math.min(Math.max(e, n.left), n.right), i = Math.min(Math.max(t, n.top), n.bottom), a = e - r, o = t - i;
	return a * a + o * o;
}, $O = (e, t) => e.reduce((e, n) => {
	let r = QO(t, n.getBoundingClientRect());
	return r < e.distance ? {
		control: n,
		distance: r
	} : e;
}, {
	control: void 0,
	distance: Infinity
}).control, ek = ({ label: e, children: t, helperText: n, error: r, disabled: i = !1, readOnly: a = !1, required: o = !1, hideChildLabels: s = !0, reserveMessageSpace: c = !0, reserveChildMessageSpace: l = !1, suppressChildMessages: u = !0, className: d, shellClassName: f, itemClassName: p, labelClassName: m, messageClassName: h, helperClassName: g, errorClassName: _, id: v, dataTheme: y }) => {
	let b = Ke(), x = v ?? b, S = `${x}-label`, C = `${x}-message`, w = G(null), T = !!r, E = Fe.toArray(t).filter(YO), D = H(() => {
		if (i) return;
		let e = ZO(w.current).at(0);
		e && e.focus();
	}, [i]), O = H((e) => {
		if (i || e.button !== 0 || (e.target instanceof Element ? e.target : null)?.closest(XO)) return;
		let t = $O(ZO(e.currentTarget), {
			clientX: e.clientX,
			clientY: e.clientY
		});
		t && (e.preventDefault(), t.focus());
	}, [i]), k = Q(lx, T ? _x : hx, "flex w-full min-w-0 items-stretch px-[var(--pc-space-input-padding-x,0.875rem)]", i ? "opacity-60" : void 0, f), A = Q(Tx, Dx, T ? Ex : void 0, m), j = /* @__PURE__ */ q("div", {
		"aria-describedby": r || n ? C : void 0,
		"aria-disabled": i || void 0,
		"aria-labelledby": S,
		className: k,
		"data-disabled": bv(i),
		"data-invalid": bv(T),
		"data-readonly": bv(a),
		"data-slot": "field-group-shell",
		onMouseDown: O,
		ref: w,
		role: "group",
		children: /* @__PURE__ */ q(eD, {
			hideLabel: s,
			children: /* @__PURE__ */ q(rD, {
				reserveChildMessageSpace: l,
				suppressChildMessages: u,
				children: E.map((e, t) => /* @__PURE__ */ q("div", {
					className: Q("flex min-w-0 flex-1 items-stretch", t > 0 ? "ml-[var(--pc-space-input-group-gap,0.5rem)]" : void 0, p),
					"data-slot": "field-group-item",
					children: e
				}, t))
			})
		})
	});
	return /* @__PURE__ */ q("div", {
		className: Q("flex flex-col", d),
		"data-slot": "field-group",
		"data-theme": y,
		children: /* @__PURE__ */ J(WD, {
			baseClassName: "flex flex-col",
			dataTheme: y,
			error: r,
			helper: n,
			messageClassName: h,
			helperClassName: g,
			errorClassName: _,
			messageId: C,
			reserveSpace: c,
			styles: JO,
			children: [/* @__PURE__ */ q("span", {
				className: A,
				"data-required": bv(o),
				"data-slot": "field-group-label",
				id: S,
				onClick: D,
				children: e
			}), j]
		})
	});
};
oD(ek);
//#endregion
//#region ../ui/src/lib/ControlInput.tsx
var tk = /* @__PURE__ */ new Set([
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
]), nk = (e) => typeof e == "string" && tk.has(e), rk = Y("rounded-[var(--pc-radius-input,var(--pc-radius-3xl))]", "cursor-text", "focus-within:[background-color:var(--pc-color-input-background,var(--pc-color-surface))]", "focus-within:hover:[background-color:var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))]"), ik = {
	xl: "[--pc-size-input-height:3rem] [--pc-space-input-padding-x:1.25rem] [--pc-space-input-padding-y:0.625rem]",
	lg: "[--pc-size-input-height:2.625rem] [--pc-space-input-padding-x:1rem] [--pc-space-input-padding-y:0.5625rem]",
	md: "[--pc-size-input-height:2.25rem] [--pc-space-input-padding-x:0.875rem] [--pc-space-input-padding-y:0.5rem]",
	sm: "[--pc-size-input-height:2.25rem] [--pc-space-input-padding-x:0.875rem] [--pc-space-input-padding-y:0.5rem]",
	xs: "[--pc-size-input-height:2rem] [--pc-space-input-padding-x:0.75rem] [--pc-space-input-padding-y:0.375rem]"
}, ak = {
	xl: yS.typography,
	lg: yS.typography,
	md: yS.typography,
	sm: yS.typography,
	xs: yS.typography
}, ok = Y("p-0 font-normal text-[var(--pc-color-input-text,var(--pc-color-text))]", "placeholder:text-[var(--pc-color-input-placeholder,var(--pc-color-text-muted))]", "disabled:cursor-not-allowed"), sk = Y("shrink-0 text-[var(--pc-color-input-icon,var(--pc-color-text-muted))]", "[&_svg]:h-4 [&_svg]:w-4"), ck = He(function({ appearance: e = "solid", size: t = "sm", variant: n, className: r, inputClassName: i, leadingAdornmentClassName: a, trailingAdornmentClassName: o, inputProps: s, ...c }, l) {
	let u = nk(t) ? t : "sm", d = nk(t) ? void 0 : t, f = {
		...s,
		"data-pc-appearance": e
	};
	return /* @__PURE__ */ q(qO, {
		ref: l,
		...c,
		size: d,
		variant: n,
		className: Q(rk, ik[u], r),
		inputClassName: Q(ok, ak[u], i),
		leadingAdornmentClassName: Q(sk, a),
		trailingAdornmentClassName: Q(sk, o),
		inputProps: f
	});
});
ck.displayName = "ControlInput";
//#endregion
//#region ../ui/src/lib/codeEditorTypography.ts
var lk = "--pc-font-code-size", uk = "--pc-code-editor-font-size", dk = "--pc-code-editor-line-height", fk = 13, pk = 18, mk = 12, hk = 17;
`${dk}`;
var gk = [
	"pc-code-editor-responsive",
	"[--pc-code-editor-font-size:0.875rem]",
	"[--pc-code-editor-line-height:20px]"
].join(" "), _k = (e) => ({
	[uk]: `${e.fontSizePx.toString()}px`,
	[dk]: `${e.lineHeightPx.toString()}px`
}), vk = (e, t, n) => {
	if (!e.trim()) return null;
	let r = document.createElement("span");
	r.style.position = "absolute", r.style.visibility = "hidden", r.style.pointerEvents = "none", r.style.fontSize = `var(${lk})`, t.append(r);
	let i = n.getComputedStyle(r).fontSize;
	r.remove();
	let a = Number.parseFloat(i);
	return Number.isFinite(a) ? a : null;
}, yk = (e) => typeof e != "number" || !Number.isFinite(e) || e <= 0 ? {
	fontSizePx: bk(),
	lineHeightPx: 20
} : e <= 480 ? {
	fontSizePx: mk,
	lineHeightPx: hk
} : e <= 720 ? {
	fontSizePx: fk,
	lineHeightPx: pk
} : {
	fontSizePx: bk(),
	lineHeightPx: 20
}, bk = () => {
	if (typeof document > "u") return 14;
	let e = document.defaultView;
	if (!e) return 14;
	let t = document.documentElement;
	return vk(e.getComputedStyle(t).getPropertyValue(lk), t, e) ?? 14;
}, xk = Y("border", ux, cx, "border-[var(--pc-color-input-editor-border,var(--pc-color-input-border,var(--pc-color-border)))]", "focus-within:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]", dx), Sk = "pc-monaco-light", Ck = "pc-monaco-dark", wk = [
	"var(--font-mono)",
	"ui-monospace",
	"SFMono-Regular",
	"Menlo",
	"Monaco",
	"Consolas",
	"\"Liberation Mono\"",
	"\"Courier New\"",
	"monospace"
].join(", ");
[
	gk,
	xk,
	"min-h-0 h-full w-full overflow-hidden"
].join(" ");
function Tk(e, t) {
	return {
		...e,
		a: jk(t)
	};
}
function Ek(e, t) {
	let n = jk(e.a), r = jk(t.a), i = t.r * r + 255 * (1 - r), a = t.g * r + 255 * (1 - r), o = t.b * r + 255 * (1 - r), s = e.r * n + i * (1 - n), c = e.g * n + a * (1 - n), l = e.b * n + o * (1 - n);
	return {
		r: Ak(s, 0, 255),
		g: Ak(c, 0, 255),
		b: Ak(l, 0, 255),
		a: 1
	};
}
var Dk = (e) => {
	let t = Bk("--pc-color-accent") ?? {
		r: 37,
		g: 99,
		b: 235,
		a: 1
	}, n = Bk("--pc-color-surface") ?? {
		r: 255,
		g: 255,
		b: 255,
		a: 1
	}, r = Bk("--pc-color-depth-1") ?? {
		r: 241,
		g: 245,
		b: 249,
		a: 1
	}, i = Nk(Ek(r, n), 1), a = Nk(Ek(Tk(r, .4), n), 1), o = Vk("--pc-color-depth-3", "#111111"), s = Vk("--pc-color-text", "#111111"), c = Vk("--pc-color-text-muted", "#6c6c6c");
	return {
		base: e,
		inherit: !0,
		rules: [],
		colors: {
			"editor.background": "#00000000",
			"editor.foreground": s,
			"editorCursor.foreground": Nk(t),
			"editor.selectionBackground": i,
			"editor.inactiveSelectionBackground": a,
			"editor.selectionHighlightBackground": o,
			"editor.wordHighlightBackground": o,
			"editor.wordHighlightStrongBackground": o,
			"editor.findMatchBackground": o,
			"editor.findMatchHighlightBackground": o,
			"editor.lineHighlightBackground": Nk(Ek(r, n), 1),
			"editor.lineHighlightBorder": "#00000000",
			"editorLineNumber.foreground": c,
			"editorLineNumber.activeForeground": c,
			"editorGutter.background": Nk(Ek(r, n), 1),
			"editorGutter.border": "#00000000"
		}
	};
}, Ok = null, kk = () => {
	if (typeof window > "u") return null;
	let e = document.body;
	if (!Ok || !Ok.isConnected) {
		let t = document.createElement("span");
		t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = "0", t.style.height = "0", t.style.opacity = "0", t.style.pointerEvents = "none", e.appendChild(t), Ok = t;
	}
	return Ok;
}, Ak = (e, t, n) => Math.min(n, Math.max(t, e)), jk = (e) => Ak(e, 0, 1), Mk = (e) => Ak(Math.round(e), 0, 255).toString(16).padStart(2, "0"), Nk = (e, t) => {
	let n = jk(t ?? e.a), r = `#${Mk(e.r)}${Mk(e.g)}${Mk(e.b)}`;
	return n >= 1 ? r : `${r}${Mk(Math.round(n * 255))}`;
}, Pk = (e) => {
	let t = e.trim();
	if (t.endsWith("%")) return Ak(Number.parseFloat(t) / 100 * 255, 0, 255);
	let n = Number.parseFloat(t);
	return Number.isNaN(n) ? 0 : Ak(n, 0, 255);
}, Fk = (e) => {
	let t = e.trim();
	if (t.endsWith("%")) {
		let e = Number.parseFloat(t);
		return jk(Number.isNaN(e) ? 1 : e / 100);
	}
	let n = Number.parseFloat(t);
	return Number.isNaN(n) ? 1 : jk(n);
}, Ik = (e) => {
	let t = e.trim().match(_e);
	if (!t) return null;
	let n = t[1].trim().split(v).filter(Boolean);
	return n.length < 3 ? null : {
		r: Pk(n[0]),
		g: Pk(n[1]),
		b: Pk(n[2]),
		a: n.length > 3 ? Fk(n[3]) : 1
	};
}, Lk = (e) => {
	let t = e.trim();
	if (t.endsWith("%")) {
		let e = Number.parseFloat(t);
		return Ak(Number.isNaN(e) ? 0 : e / 100 * 255, 0, 255);
	}
	let n = Number.parseFloat(t);
	return Number.isNaN(n) ? 0 : Ak(n <= 1 ? n * 255 : n, 0, 255);
}, Rk = (e) => {
	let t = e.trim().match(Me);
	if (!t) return null;
	let n = t[1].toLowerCase();
	if (!n || n !== "srgb" && n !== "display-p3") return null;
	let r = t[2].trim(), i;
	if (r.includes("/")) {
		let e = r.split("/");
		r = e[0].trim(), i = e.length > 1 ? e[1].trim() : void 0;
	}
	let a = r.split(A).filter(Boolean);
	return a.length < 3 ? null : {
		r: Lk(a[0]),
		g: Lk(a[1]),
		b: Lk(a[2]),
		a: i === void 0 ? 1 : Fk(i)
	};
}, zk = (e) => {
	let t = e.trim();
	return t ? Ik(t) ?? Rk(t) : null;
}, Bk = (e) => {
	if (typeof window > "u") return null;
	let t = kk();
	if (!t) return null;
	let n = e.trim(), r = n.startsWith("var(") ? n : n.startsWith("--") ? `var(${n})` : n;
	t.style.color = r;
	let i = getComputedStyle(t).color, a = zk(i);
	return !a || a.a === 0 && a.r === 0 && a.g === 0 && a.b === 0 ? null : a;
}, Vk = (e, t) => {
	let n = Bk(e);
	return n ? Nk(n) : t;
}, Hk = (e, t) => {
	e.editor.defineTheme(Sk, Dk("vs")), e.editor.defineTheme(Ck, Dk("vs-dark")), e.editor.setTheme(t);
}, Uk = (e) => {
	Hk(e, Sk);
}, Wk = () => ({
	automaticLayout: !0,
	fontFamily: wk,
	fontSize: bk(),
	lineHeight: 20,
	lineNumbers: "on",
	lineNumbersMinChars: 3,
	lineDecorationsWidth: 0,
	renderLineHighlight: "all",
	scrollBeyondLastLine: !1,
	stickyScroll: { enabled: !1 },
	wordWrap: "on",
	tabSize: 2,
	insertSpaces: !0,
	detectIndentation: !1,
	padding: {
		top: 0,
		bottom: 0
	}
}), Gk = (e, t, n, r) => ({
	...Wk(),
	...e,
	readOnly: t,
	ariaLabel: n ?? e?.ariaLabel,
	placeholder: r ?? e?.placeholder,
	minimap: {
		...e?.minimap ?? {},
		enabled: !1
	}
}), Kk = (e, t) => e.fontSizePx === t.fontSizePx && e.lineHeightPx === t.lineHeightPx, qk = (e) => {
	let [t, n] = K(null);
	return Ge(() => {
		n(e.current);
	}, [e]), Jk(t);
}, Jk = (e) => {
	let [t, n] = K(() => yk(null));
	return Ge(() => {
		if (!e) return;
		let t = null, r = (e) => {
			let t = yk(e);
			n((e) => Kk(e, t) ? e : t);
		};
		if (r(e.getBoundingClientRect().width), typeof ResizeObserver > "u") return;
		let i = new ResizeObserver((e) => {
			let n = e[0].contentRect.width;
			t !== null && window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
				t = null, r(n);
			});
		});
		return i.observe(e), () => {
			t !== null && window.cancelAnimationFrame(t), i.disconnect();
		};
	}, [e]), t;
}, Yk = We(async () => ({ default: (await import("./dist-BG_SXw_D.js")).default }));
function Xk() {
	let [e, t] = K(!1);
	return Ge(() => {
		let e = window.requestAnimationFrame(() => {
			t(!0);
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, []), e;
}
function Zk({ value: e, onChange: t, language: n, theme: r, beforeMount: i, onMount: a, options: o, path: s, saveViewState: c, keepCurrentModel: l, height: u, width: d, loading: f }) {
	return Xk() ? /* @__PURE__ */ q(Re, {
		fallback: f,
		children: /* @__PURE__ */ q(Yk, {
			value: e,
			onChange: t,
			language: n,
			theme: r,
			beforeMount: i,
			onMount: a,
			options: o,
			path: s,
			saveViewState: c,
			keepCurrentModel: l,
			height: u,
			width: d,
			loading: f
		})
	}) : f;
}
oD(tA);
var Qk = {
	container: `${mS.container} pc-code-input w-full min-w-0`,
	label: {
		base: `${Dx} ${Tx}`,
		disabled: "text-[var(--pc-color-depth-5)]"
	},
	wrapper: {
		base: [
			SS,
			ux,
			"relative flex w-full min-w-0 overflow-hidden",
			"[--pc-color-input-background:transparent]",
			"[--pc-color-input-background-hover:transparent]",
			"border-[var(--pc-color-input-editor-border,var(--pc-color-input-border,var(--pc-color-border)))]",
			"focus-within:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]",
			dx
		].join(" "),
		disabled: "cursor-not-allowed opacity-70"
	},
	editorShell: [gk, "min-h-0 w-full overflow-hidden rounded-[inherit]"].join(" "),
	editorFrame: "h-full w-full",
	message: {
		error: hS.error,
		helper: hS.helper
	},
	fallback: ["h-full w-full resize-none bg-transparent px-3 py-3", "font-mono text-[length:var(--pc-code-editor-font-size,var(--pc-font-code-size))] leading-[var(--pc-code-editor-line-height,20px)] text-[var(--pc-color-text)] outline-0"].join(" ")
}, $k = (e) => e?.trim() || void 0, eA = (e, t) => typeof t == "number" ? `${t.toString()}px` : typeof t == "string" && t.trim() ? t : `${Math.max((e ?? 6) * 20 + 28, 112).toString()}px`;
function tA({ value: e, onChange: t, language: n, label: r, ariaLabel: i, "aria-label": a, "aria-required": o, "aria-labelledby": s, "aria-describedby": c, helperText: l, error: u, variant: d, containerClassName: f, className: p, editorClassName: m, labelClassName: h, messageClassName: g, helperClassName: _, errorClassName: v, disabled: y = !1, required: b, readOnly: x = !1, reserveMessageSpace: S = !0, id: C, name: w, placeholder: T, rows: E, height: D, modelPath: O, saveViewState: k = !0, keepCurrentModel: A = !1, options: j }) {
	let M = Ke(), N = C ?? M, { dataTheme: P } = qD({
		variant: d,
		hasError: !!u
	}), F = i ?? a ?? HD(r) ?? "Code editor", I = o ?? b ?? j?.ariaRequired ?? !1, ee = W(() => eA(E, D), [D, E]), te = G(null), ne = qk(te), re = W(() => ({
		...j,
		ariaRequired: I,
		fontSize: j?.fontSize ?? ne.fontSizePx,
		lineHeight: j?.lineHeight ?? ne.lineHeightPx
	}), [
		j,
		I,
		ne.fontSizePx,
		ne.lineHeightPx
	]), L = W(() => $k(O), [O]), R = W(() => Gk(re, x || y, F, T), [
		y,
		T,
		x,
		F,
		re
	]), z = Q(Qk.wrapper.base, y ? Qk.wrapper.disabled : void 0, p), ie = Q(Qk.editorShell, m), ae = W(() => ({
		height: ee,
		..._k(ne)
	}), [ee, ne]), oe = r ? /* @__PURE__ */ q("div", {
		className: Q(Qk.label.base, y ? Qk.label.disabled : void 0, h),
		title: HD(r),
		children: r
	}) : null, se = H((e) => {
		Uk(e);
	}, []), ce = H((e, t) => {
		Uk(t);
	}, []), le = H((e) => {
		t?.(e ?? "");
	}, [t]);
	return /* @__PURE__ */ J(WD, {
		baseClassName: Qk.container,
		containerClassName: f,
		styles: Qk.message,
		error: u,
		helper: l,
		messageClassName: g,
		helperClassName: _,
		errorClassName: v,
		reserveSpace: S,
		dataTheme: P,
		children: [oe, /* @__PURE__ */ q("div", {
			className: z,
			"data-slot": "code-input-shell",
			role: s ? "group" : void 0,
			"aria-labelledby": s,
			"aria-describedby": c,
			children: /* @__PURE__ */ q("div", {
				ref: te,
				className: ie,
				style: ae,
				children: /* @__PURE__ */ q("div", {
					className: Qk.editorFrame,
					children: /* @__PURE__ */ q(Zk, {
						value: e,
						onChange: le,
						language: n,
						theme: Sk,
						beforeMount: se,
						onMount: ce,
						options: R,
						path: L,
						saveViewState: k,
						keepCurrentModel: A,
						height: "100%",
						width: "100%",
						loading: /* @__PURE__ */ q("textarea", {
							id: N,
							"aria-label": s ? void 0 : F,
							"aria-labelledby": s,
							"aria-describedby": c,
							"aria-required": I,
							name: w,
							value: e,
							onChange: (e) => {
								le(e.currentTarget.value);
							},
							readOnly: x,
							required: I,
							disabled: y,
							spellCheck: !1,
							placeholder: T,
							className: Qk.fallback
						})
					})
				})
			})
		})]
	});
}
//#endregion
//#region ../../node_modules/qrcode.react/lib/esm/index.js
var nA = Object.defineProperty, rA = Object.getOwnPropertySymbols, iA = Object.prototype.hasOwnProperty, aA = Object.prototype.propertyIsEnumerable, oA = (e, t, n) => t in e ? nA(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, sA = (e, t) => {
	for (var n in t ||= {}) iA.call(t, n) && oA(e, n, t[n]);
	if (rA) for (var n of rA(t)) aA.call(t, n) && oA(e, n, t[n]);
	return e;
}, cA = (e, t) => {
	var n = {};
	for (var r in e) iA.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && rA) for (var r of rA(e)) t.indexOf(r) < 0 && aA.call(e, r) && (n[r] = e[r]);
	return n;
}, lA;
((e) => {
	let t = class t {
		constructor(e, n, r, a) {
			if (this.version = e, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version value out of range");
			if (a < -1 || a > 7) throw RangeError("Mask value out of range");
			this.size = e * 4 + 17;
			let o = [];
			for (let e = 0; e < this.size; e++) o.push(!1);
			for (let e = 0; e < this.size; e++) this.modules.push(o.slice()), this.isFunction.push(o.slice());
			this.drawFunctionPatterns();
			let s = this.addEccAndInterleave(r);
			if (this.drawCodewords(s), a == -1) {
				let e = 1e9;
				for (let t = 0; t < 8; t++) {
					this.applyMask(t), this.drawFormatBits(t);
					let n = this.getPenaltyScore();
					n < e && (a = t, e = n), this.applyMask(t);
				}
			}
			i(0 <= a && a <= 7), this.mask = a, this.applyMask(a), this.drawFormatBits(a), this.isFunction = [];
		}
		static encodeText(n, r) {
			let i = e.QrSegment.makeSegments(n);
			return t.encodeSegments(i, r);
		}
		static encodeBinary(n, r) {
			let i = e.QrSegment.makeBytes(n);
			return t.encodeSegments([i], r);
		}
		static encodeSegments(e, r, a = 1, s = 40, c = -1, l = !0) {
			if (!(t.MIN_VERSION <= a && a <= s && s <= t.MAX_VERSION) || c < -1 || c > 7) throw RangeError("Invalid value");
			let u, d;
			for (u = a;; u++) {
				let n = t.getNumDataCodewords(u, r) * 8, i = o.getTotalBits(e, u);
				if (i <= n) {
					d = i;
					break;
				}
				if (u >= s) throw RangeError("Data too long");
			}
			for (let e of [
				t.Ecc.MEDIUM,
				t.Ecc.QUARTILE,
				t.Ecc.HIGH
			]) l && d <= t.getNumDataCodewords(u, e) * 8 && (r = e);
			let f = [];
			for (let t of e) {
				n(t.mode.modeBits, 4, f), n(t.numChars, t.mode.numCharCountBits(u), f);
				for (let e of t.getData()) f.push(e);
			}
			i(f.length == d);
			let p = t.getNumDataCodewords(u, r) * 8;
			i(f.length <= p), n(0, Math.min(4, p - f.length), f), n(0, (8 - f.length % 8) % 8, f), i(f.length % 8 == 0);
			for (let e = 236; f.length < p; e ^= 253) n(e, 8, f);
			let m = [];
			for (; m.length * 8 < f.length;) m.push(0);
			return f.forEach((e, t) => m[t >>> 3] |= e << 7 - (t & 7)), new t(u, r, m, c);
		}
		getModule(e, t) {
			return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e];
		}
		getModules() {
			return this.modules;
		}
		drawFunctionPatterns() {
			for (let e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
			this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
			let e = this.getAlignmentPatternPositions(), t = e.length;
			for (let n = 0; n < t; n++) for (let r = 0; r < t; r++) n == 0 && r == 0 || n == 0 && r == t - 1 || n == t - 1 && r == 0 || this.drawAlignmentPattern(e[n], e[r]);
			this.drawFormatBits(0), this.drawVersion();
		}
		drawFormatBits(e) {
			let t = this.errorCorrectionLevel.formatBits << 3 | e, n = t;
			for (let e = 0; e < 10; e++) n = n << 1 ^ (n >>> 9) * 1335;
			let a = (t << 10 | n) ^ 21522;
			i(!(a >>> 15));
			for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, r(a, e));
			this.setFunctionModule(8, 7, r(a, 6)), this.setFunctionModule(8, 8, r(a, 7)), this.setFunctionModule(7, 8, r(a, 8));
			for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, r(a, e));
			for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, r(a, e));
			for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, r(a, e));
			this.setFunctionModule(8, this.size - 8, !0);
		}
		drawVersion() {
			if (this.version < 7) return;
			let e = this.version;
			for (let t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
			let t = this.version << 12 | e;
			i(!(t >>> 18));
			for (let e = 0; e < 18; e++) {
				let n = r(t, e), i = this.size - 11 + e % 3, a = Math.floor(e / 3);
				this.setFunctionModule(i, a, n), this.setFunctionModule(a, i, n);
			}
		}
		drawFinderPattern(e, t) {
			for (let n = -4; n <= 4; n++) for (let r = -4; r <= 4; r++) {
				let i = Math.max(Math.abs(r), Math.abs(n)), a = e + r, o = t + n;
				0 <= a && a < this.size && 0 <= o && o < this.size && this.setFunctionModule(a, o, i != 2 && i != 4);
			}
		}
		drawAlignmentPattern(e, t) {
			for (let n = -2; n <= 2; n++) for (let r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + n, Math.max(Math.abs(r), Math.abs(n)) != 1);
		}
		setFunctionModule(e, t, n) {
			this.modules[t][e] = n, this.isFunction[t][e] = !0;
		}
		addEccAndInterleave(e) {
			let n = this.version, r = this.errorCorrectionLevel;
			if (e.length != t.getNumDataCodewords(n, r)) throw RangeError("Invalid argument");
			let a = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], o = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], s = Math.floor(t.getNumRawDataModules(n) / 8), c = a - s % a, l = Math.floor(s / a), u = [], d = t.reedSolomonComputeDivisor(o);
			for (let n = 0, r = 0; n < a; n++) {
				let i = e.slice(r, r + l - o + (n < c ? 0 : 1));
				r += i.length;
				let a = t.reedSolomonComputeRemainder(i, d);
				n < c && i.push(0), u.push(i.concat(a));
			}
			let f = [];
			for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
				(e != l - o || n >= c) && f.push(t[e]);
			});
			return i(f.length == s), f;
		}
		drawCodewords(e) {
			if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
			let n = 0;
			for (let t = this.size - 1; t >= 1; t -= 2) {
				t == 6 && (t = 5);
				for (let i = 0; i < this.size; i++) for (let a = 0; a < 2; a++) {
					let o = t - a, s = t + 1 & 2 ? i : this.size - 1 - i;
					!this.isFunction[s][o] && n < e.length * 8 && (this.modules[s][o] = r(e[n >>> 3], 7 - (n & 7)), n++);
				}
			}
			i(n == e.length * 8);
		}
		applyMask(e) {
			if (e < 0 || e > 7) throw RangeError("Mask value out of range");
			for (let t = 0; t < this.size; t++) for (let n = 0; n < this.size; n++) {
				let r;
				switch (e) {
					case 0:
						r = (n + t) % 2 == 0;
						break;
					case 1:
						r = t % 2 == 0;
						break;
					case 2:
						r = n % 3 == 0;
						break;
					case 3:
						r = (n + t) % 3 == 0;
						break;
					case 4:
						r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
						break;
					case 5:
						r = n * t % 2 + n * t % 3 == 0;
						break;
					case 6:
						r = (n * t % 2 + n * t % 3) % 2 == 0;
						break;
					case 7:
						r = ((n + t) % 2 + n * t % 3) % 2 == 0;
						break;
					default: throw Error("Unreachable");
				}
				!this.isFunction[t][n] && r && (this.modules[t][n] = !this.modules[t][n]);
			}
		}
		getPenaltyScore() {
			let e = 0;
			for (let n = 0; n < this.size; n++) {
				let r = !1, i = 0, a = [
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				for (let o = 0; o < this.size; o++) this.modules[n][o] == r ? (i++, i == 5 ? e += t.PENALTY_N1 : i > 5 && e++) : (this.finderPenaltyAddHistory(i, a), r || (e += this.finderPenaltyCountPatterns(a) * t.PENALTY_N3), r = this.modules[n][o], i = 1);
				e += this.finderPenaltyTerminateAndCount(r, i, a) * t.PENALTY_N3;
			}
			for (let n = 0; n < this.size; n++) {
				let r = !1, i = 0, a = [
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				for (let o = 0; o < this.size; o++) this.modules[o][n] == r ? (i++, i == 5 ? e += t.PENALTY_N1 : i > 5 && e++) : (this.finderPenaltyAddHistory(i, a), r || (e += this.finderPenaltyCountPatterns(a) * t.PENALTY_N3), r = this.modules[o][n], i = 1);
				e += this.finderPenaltyTerminateAndCount(r, i, a) * t.PENALTY_N3;
			}
			for (let n = 0; n < this.size - 1; n++) for (let r = 0; r < this.size - 1; r++) {
				let i = this.modules[n][r];
				i == this.modules[n][r + 1] && i == this.modules[n + 1][r] && i == this.modules[n + 1][r + 1] && (e += t.PENALTY_N2);
			}
			let n = 0;
			for (let e of this.modules) n = e.reduce((e, t) => e + +!!t, n);
			let r = this.size * this.size, a = Math.ceil(Math.abs(n * 20 - r * 10) / r) - 1;
			return i(0 <= a && a <= 9), e += a * t.PENALTY_N4, i(0 <= e && e <= 2568888), e;
		}
		getAlignmentPatternPositions() {
			if (this.version == 1) return [];
			{
				let e = Math.floor(this.version / 7) + 2, t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, n = [6];
				for (let r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
				return n;
			}
		}
		static getNumRawDataModules(e) {
			if (e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version number out of range");
			let n = (16 * e + 128) * e + 64;
			if (e >= 2) {
				let t = Math.floor(e / 7) + 2;
				n -= (25 * t - 10) * t - 55, e >= 7 && (n -= 36);
			}
			return i(208 <= n && n <= 29648), n;
		}
		static getNumDataCodewords(e, n) {
			return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e];
		}
		static reedSolomonComputeDivisor(e) {
			if (e < 1 || e > 255) throw RangeError("Degree out of range");
			let n = [];
			for (let t = 0; t < e - 1; t++) n.push(0);
			n.push(1);
			let r = 1;
			for (let i = 0; i < e; i++) {
				for (let e = 0; e < n.length; e++) n[e] = t.reedSolomonMultiply(n[e], r), e + 1 < n.length && (n[e] ^= n[e + 1]);
				r = t.reedSolomonMultiply(r, 2);
			}
			return n;
		}
		static reedSolomonComputeRemainder(e, n) {
			let r = n.map((e) => 0);
			for (let i of e) {
				let e = i ^ r.shift();
				r.push(0), n.forEach((n, i) => r[i] ^= t.reedSolomonMultiply(n, e));
			}
			return r;
		}
		static reedSolomonMultiply(e, t) {
			if (e >>> 8 || t >>> 8) throw RangeError("Byte out of range");
			let n = 0;
			for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
			return i(!(n >>> 8)), n;
		}
		finderPenaltyCountPatterns(e) {
			let t = e[1];
			i(t <= this.size * 3);
			let n = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
			return (n && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (n && e[6] >= t * 4 && e[0] >= t ? 1 : 0);
		}
		finderPenaltyTerminateAndCount(e, t, n) {
			return e && (this.finderPenaltyAddHistory(t, n), t = 0), t += this.size, this.finderPenaltyAddHistory(t, n), this.finderPenaltyCountPatterns(n);
		}
		finderPenaltyAddHistory(e, t) {
			t[0] == 0 && (e += this.size), t.pop(), t.unshift(e);
		}
	};
	t.MIN_VERSION = 1, t.MAX_VERSION = 40, t.PENALTY_N1 = 3, t.PENALTY_N2 = 3, t.PENALTY_N3 = 40, t.PENALTY_N4 = 10, t.ECC_CODEWORDS_PER_BLOCK = [
		[
			-1,
			7,
			10,
			15,
			20,
			26,
			18,
			20,
			24,
			30,
			18,
			20,
			24,
			26,
			30,
			22,
			24,
			28,
			30,
			28,
			28,
			28,
			28,
			30,
			30,
			26,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			10,
			16,
			26,
			18,
			24,
			16,
			18,
			22,
			22,
			26,
			30,
			22,
			22,
			24,
			24,
			28,
			28,
			26,
			26,
			26,
			26,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28
		],
		[
			-1,
			13,
			22,
			18,
			26,
			18,
			24,
			18,
			22,
			20,
			24,
			28,
			26,
			24,
			20,
			30,
			24,
			28,
			28,
			26,
			30,
			28,
			30,
			30,
			30,
			30,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			17,
			28,
			22,
			16,
			22,
			28,
			26,
			26,
			24,
			28,
			24,
			28,
			22,
			24,
			24,
			30,
			28,
			28,
			26,
			28,
			30,
			24,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		]
	], t.NUM_ERROR_CORRECTION_BLOCKS = [
		[
			-1,
			1,
			1,
			1,
			1,
			1,
			2,
			2,
			2,
			2,
			4,
			4,
			4,
			4,
			4,
			6,
			6,
			6,
			6,
			7,
			8,
			8,
			9,
			9,
			10,
			12,
			12,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			19,
			20,
			21,
			22,
			24,
			25
		],
		[
			-1,
			1,
			1,
			1,
			2,
			2,
			4,
			4,
			4,
			5,
			5,
			5,
			8,
			9,
			9,
			10,
			10,
			11,
			13,
			14,
			16,
			17,
			17,
			18,
			20,
			21,
			23,
			25,
			26,
			28,
			29,
			31,
			33,
			35,
			37,
			38,
			40,
			43,
			45,
			47,
			49
		],
		[
			-1,
			1,
			1,
			2,
			2,
			4,
			4,
			6,
			6,
			8,
			8,
			8,
			10,
			12,
			16,
			12,
			17,
			16,
			18,
			21,
			20,
			23,
			23,
			25,
			27,
			29,
			34,
			34,
			35,
			38,
			40,
			43,
			45,
			48,
			51,
			53,
			56,
			59,
			62,
			65,
			68
		],
		[
			-1,
			1,
			1,
			2,
			4,
			4,
			4,
			5,
			6,
			8,
			8,
			11,
			11,
			16,
			16,
			18,
			16,
			19,
			21,
			25,
			25,
			25,
			34,
			30,
			32,
			35,
			37,
			40,
			42,
			45,
			48,
			51,
			54,
			57,
			60,
			63,
			66,
			70,
			74,
			77,
			81
		]
	], e.QrCode = t;
	function n(e, t, n) {
		if (t < 0 || t > 31 || e >>> t) throw RangeError("Value out of range");
		for (let r = t - 1; r >= 0; r--) n.push(e >>> r & 1);
	}
	function r(e, t) {
		return !!(e >>> t & 1);
	}
	function i(e) {
		if (!e) throw Error("Assertion error");
	}
	let a = class e {
		constructor(e, t, n) {
			if (this.mode = e, this.numChars = t, this.bitData = n, t < 0) throw RangeError("Invalid argument");
			this.bitData = n.slice();
		}
		static makeBytes(t) {
			let r = [];
			for (let e of t) n(e, 8, r);
			return new e(e.Mode.BYTE, t.length, r);
		}
		static makeNumeric(t) {
			if (!e.isNumeric(t)) throw RangeError("String contains non-numeric characters");
			let r = [];
			for (let e = 0; e < t.length;) {
				let i = Math.min(t.length - e, 3);
				n(parseInt(t.substring(e, e + i), 10), i * 3 + 1, r), e += i;
			}
			return new e(e.Mode.NUMERIC, t.length, r);
		}
		static makeAlphanumeric(t) {
			if (!e.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
			let r = [], i = 0;
			for (; i + 2 <= t.length; i += 2) {
				let a = e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)) * 45;
				a += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i + 1)), n(a, 11, r);
			}
			return i < t.length && n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)), 6, r), new e(e.Mode.ALPHANUMERIC, t.length, r);
		}
		static makeSegments(t) {
			return t == "" ? [] : e.isNumeric(t) ? [e.makeNumeric(t)] : e.isAlphanumeric(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))];
		}
		static makeEci(t) {
			let r = [];
			if (t < 0) throw RangeError("ECI assignment value out of range");
			if (t < 128) n(t, 8, r);
			else if (t < 16384) n(2, 2, r), n(t, 14, r);
			else if (t < 1e6) n(6, 3, r), n(t, 21, r);
			else throw RangeError("ECI assignment value out of range");
			return new e(e.Mode.ECI, 0, r);
		}
		static isNumeric(t) {
			return e.NUMERIC_REGEX.test(t);
		}
		static isAlphanumeric(t) {
			return e.ALPHANUMERIC_REGEX.test(t);
		}
		getData() {
			return this.bitData.slice();
		}
		static getTotalBits(e, t) {
			let n = 0;
			for (let r of e) {
				let e = r.mode.numCharCountBits(t);
				if (r.numChars >= 1 << e) return Infinity;
				n += 4 + e + r.bitData.length;
			}
			return n;
		}
		static toUtf8ByteArray(e) {
			e = encodeURI(e);
			let t = [];
			for (let n = 0; n < e.length; n++) e.charAt(n) == "%" ? (t.push(parseInt(e.substring(n + 1, n + 3), 16)), n += 2) : t.push(e.charCodeAt(n));
			return t;
		}
	};
	a.NUMERIC_REGEX = /^[0-9]*$/, a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, a.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
	let o = a;
	e.QrSegment = a;
})(lA ||= {}), ((e) => {
	((e) => {
		let t = class {
			constructor(e, t) {
				this.ordinal = e, this.formatBits = t;
			}
		};
		t.LOW = new t(0, 1), t.MEDIUM = new t(1, 0), t.QUARTILE = new t(2, 3), t.HIGH = new t(3, 2), e.Ecc = t;
	})(e.QrCode ||= {});
})(lA ||= {}), ((e) => {
	((e) => {
		let t = class {
			constructor(e, t) {
				this.modeBits = e, this.numBitsCharCount = t;
			}
			numCharCountBits(e) {
				return this.numBitsCharCount[Math.floor((e + 7) / 17)];
			}
		};
		t.NUMERIC = new t(1, [
			10,
			12,
			14
		]), t.ALPHANUMERIC = new t(2, [
			9,
			11,
			13
		]), t.BYTE = new t(4, [
			8,
			16,
			16
		]), t.KANJI = new t(8, [
			8,
			10,
			12
		]), t.ECI = new t(7, [
			0,
			0,
			0
		]), e.Mode = t;
	})(e.QrSegment ||= {});
})(lA ||= {});
var uA = lA, dA = {
	L: uA.QrCode.Ecc.LOW,
	M: uA.QrCode.Ecc.MEDIUM,
	Q: uA.QrCode.Ecc.QUARTILE,
	H: uA.QrCode.Ecc.HIGH
}, fA = 128, pA = "L", mA = "#FFFFFF", hA = "#000000", gA = !1, _A = 1, vA = 4, yA = 0, bA = .1;
function xA(e, t = 0) {
	let n = [];
	return e.forEach(function(e, r) {
		let i = null;
		e.forEach(function(a, o) {
			if (!a && i !== null) n.push(`M${i + t} ${r + t}h${o - i}v1H${i + t}z`), i = null;
			else if (o === e.length - 1) {
				if (!a) return;
				i === null ? n.push(`M${o + t},${r + t} h1v1H${o + t}z`) : n.push(`M${i + t},${r + t} h${o + 1 - i}v1H${i + t}z`);
			} else a && i === null && (i = o);
		});
	}), n.join("");
}
function SA(e, t) {
	return e.slice().map((e, n) => n < t.y || n >= t.y + t.h ? e : e.map((e, n) => n < t.x || n >= t.x + t.w ? e : !1));
}
function CA(e, t, n, r) {
	if (r == null) return null;
	let i = e.length + n * 2, a = Math.floor(t * bA), o = i / t, s = (r.width || a) * o, c = (r.height || a) * o, l = r.x == null ? e.length / 2 - s / 2 : r.x * o, u = r.y == null ? e.length / 2 - c / 2 : r.y * o, d = r.opacity == null ? 1 : r.opacity, f = null;
	if (r.excavate) {
		let e = Math.floor(l), t = Math.floor(u);
		f = {
			x: e,
			y: t,
			w: Math.ceil(s + l - e),
			h: Math.ceil(c + u - t)
		};
	}
	let p = r.crossOrigin;
	return {
		x: l,
		y: u,
		h: c,
		w: s,
		excavation: f,
		opacity: d,
		crossOrigin: p
	};
}
function wA(e, t) {
	return t == null ? e ? vA : yA : Math.max(Math.floor(t), 0);
}
function TA({ value: e, level: t, minVersion: n, includeMargin: r, marginSize: i, imageSettings: a, size: o, boostLevel: s }) {
	let c = V.useMemo(() => {
		let r = (Array.isArray(e) ? e : [e]).reduce((e, t) => (e.push(...uA.QrSegment.makeSegments(t)), e), []);
		return uA.QrCode.encodeSegments(r, dA[t], n, void 0, void 0, s);
	}, [
		e,
		t,
		n,
		s
	]), { cells: l, margin: u, numCells: d, calculatedImageSettings: f } = V.useMemo(() => {
		let e = c.getModules(), t = wA(r, i);
		return {
			cells: e,
			margin: t,
			numCells: e.length + t * 2,
			calculatedImageSettings: CA(e, o, t, a)
		};
	}, [
		c,
		o,
		a,
		r,
		i
	]);
	return {
		qrcode: c,
		margin: u,
		cells: l,
		numCells: d,
		calculatedImageSettings: f
	};
}
var EA = function() {
	try {
		new Path2D().addPath(new Path2D());
	} catch {
		return !1;
	}
	return !0;
}(), DA = V.forwardRef(function(e, t) {
	let n = e, { value: r, size: i = fA, level: a = pA, bgColor: o = mA, fgColor: s = hA, includeMargin: c = gA, minVersion: l = _A, boostLevel: u, marginSize: d, imageSettings: f } = n, p = cA(n, [
		"value",
		"size",
		"level",
		"bgColor",
		"fgColor",
		"includeMargin",
		"minVersion",
		"boostLevel",
		"marginSize",
		"imageSettings"
	]), { style: m } = p, h = cA(p, ["style"]), g = f?.src, _ = V.useRef(null), v = V.useRef(null), y = V.useCallback((e) => {
		_.current = e, typeof t == "function" ? t(e) : t && (t.current = e);
	}, [t]), [b, x] = V.useState(!1), { margin: S, cells: C, numCells: w, calculatedImageSettings: T } = TA({
		value: r,
		level: a,
		minVersion: l,
		boostLevel: u,
		includeMargin: c,
		marginSize: d,
		imageSettings: f,
		size: i
	});
	V.useEffect(() => {
		if (_.current != null) {
			let e = _.current, t = e.getContext("2d");
			if (!t) return;
			let n = C, r = v.current, a = T != null && r !== null && r.complete && r.naturalHeight !== 0 && r.naturalWidth !== 0;
			a && T.excavation != null && (n = SA(C, T.excavation));
			let c = window.devicePixelRatio || 1;
			e.height = e.width = i * c;
			let l = i / w * c;
			t.scale(l, l), t.fillStyle = o, t.fillRect(0, 0, w, w), t.fillStyle = s, EA ? t.fill(new Path2D(xA(n, S))) : C.forEach(function(e, n) {
				e.forEach(function(e, r) {
					e && t.fillRect(r + S, n + S, 1, 1);
				});
			}), T && (t.globalAlpha = T.opacity), a && t.drawImage(r, T.x + S, T.y + S, T.w, T.h);
		}
	}), V.useEffect(() => {
		x(!1);
	}, [g]);
	let E = sA({
		height: i,
		width: i
	}, m), D = null;
	return g != null && (D = /* @__PURE__ */ V.createElement("img", {
		src: g,
		key: g,
		style: { display: "none" },
		onLoad: () => {
			x(!0);
		},
		ref: v,
		crossOrigin: T?.crossOrigin
	})), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement("canvas", sA({
		style: E,
		height: i,
		width: i,
		ref: y,
		role: "img"
	}, h)), D);
});
DA.displayName = "QRCodeCanvas";
var OA = V.forwardRef(function(e, t) {
	let n = e, { value: r, size: i = fA, level: a = pA, bgColor: o = mA, fgColor: s = hA, includeMargin: c = gA, minVersion: l = _A, boostLevel: u, title: d, marginSize: f, imageSettings: p } = n, m = cA(n, [
		"value",
		"size",
		"level",
		"bgColor",
		"fgColor",
		"includeMargin",
		"minVersion",
		"boostLevel",
		"title",
		"marginSize",
		"imageSettings"
	]), { margin: h, cells: g, numCells: _, calculatedImageSettings: v } = TA({
		value: r,
		level: a,
		minVersion: l,
		boostLevel: u,
		includeMargin: c,
		marginSize: f,
		imageSettings: p,
		size: i
	}), y = g, b = null;
	p != null && v != null && (v.excavation != null && (y = SA(g, v.excavation)), b = /* @__PURE__ */ V.createElement("image", {
		href: p.src,
		height: v.h,
		width: v.w,
		x: v.x + h,
		y: v.y + h,
		preserveAspectRatio: "none",
		opacity: v.opacity,
		crossOrigin: v.crossOrigin
	}));
	let x = xA(y, h);
	return /* @__PURE__ */ V.createElement("svg", sA({
		height: i,
		width: i,
		viewBox: `0 0 ${_} ${_}`,
		ref: t,
		role: "img"
	}, m), !!d && /* @__PURE__ */ V.createElement("title", null, d), /* @__PURE__ */ V.createElement("path", {
		fill: o,
		d: `M0,0 h${_}v${_}H0z`,
		shapeRendering: "crispEdges"
	}), /* @__PURE__ */ V.createElement("path", {
		fill: s,
		d: x,
		shapeRendering: "crispEdges"
	}), b);
});
OA.displayName = "QRCodeSVG";
//#endregion
//#region ../ui/src/lib/QrCodeField.tsx
var kA = {
	container: `${mS.container} w-full min-w-0`,
	label: `${Dx} ${Tx}`,
	wrapper: "flex w-full min-w-0 justify-center",
	qrCode: "block h-auto max-w-full shrink-0",
	message: {
		error: hS.error,
		helper: hS.helper,
		darkErrorTone: mS.message.darkErrorTone,
		darkHelperTone: mS.message.darkHelperTone
	}
};
function AA({ value: e, label: t, hideLabel: n = !1, ariaLabel: r, helperText: i, belowFieldContent: a, belowFieldContentInheritsTheme: o = !0, error: s, variant: c, containerClassName: l, className: u, labelClassName: d, messageClassName: f, helperClassName: p, errorClassName: m, reserveMessageSpace: h = !0, size: g = 192, level: _ = "M", marginSize: v = 2, "aria-describedby": y, bgColor: b, fgColor: x, minVersion: S, boostLevel: C, imageSettings: w }) {
	let T = `${Ke()}-label`, E = HD(t), D = !!t && !n, { dataTheme: O } = qD({
		variant: c,
		hasError: !!s
	}), k = r ?? E ?? "QR code", A = D ? /* @__PURE__ */ q("div", {
		id: T,
		className: Q(kA.label, d),
		title: E,
		children: t
	}) : null;
	return /* @__PURE__ */ J(WD, {
		baseClassName: kA.container,
		containerClassName: l,
		belowFieldContent: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: O,
		styles: kA.message,
		error: s,
		helper: i,
		messageClassName: f,
		helperClassName: p,
		errorClassName: m,
		reserveSpace: h,
		children: [A, /* @__PURE__ */ q("div", {
			"data-slot": "qr-code-field",
			className: Q(kA.wrapper, u),
			children: /* @__PURE__ */ q(OA, {
				value: e,
				size: g,
				level: _,
				marginSize: v,
				bgColor: b,
				fgColor: x,
				minVersion: S,
				boostLevel: C,
				imageSettings: w,
				role: "img",
				"aria-label": D ? void 0 : k,
				"aria-labelledby": D ? T : void 0,
				"aria-describedby": y,
				className: kA.qrCode
			})
		})]
	});
}
oD(AA);
//#endregion
//#region ../ui/src/lib/Tag.tsx
function jA({ as: e, children: t, className: n, theme: r, size: i = "md", style: a, ...o }) {
	let s = e ?? "span", c = s === "button", l = s === "code", u = {
		...a,
		lineHeight: 1
	}, d = MA[i];
	return Ve(s, {
		...o,
		...r ? { "data-theme": r } : {},
		style: u,
		className: Q(l ? "inline-block max-w-full overflow-x-auto whitespace-nowrap break-normal [overflow-wrap:normal] align-middle" : "inline-flex items-center", "[background:var(--pc-color-surface)] text-[var(--pc-color-text)]", c && [
			"max-w-full cursor-pointer gap-1 transition-colors duration-200 ease-out",
			"hover:[background:var(--pc-color-surface-weaker)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]",
			"disabled:cursor-not-allowed disabled:opacity-60"
		], n, d, l ? "font-mono" : void 0)
	}, t);
}
var MA = {
	xl: "rounded-[var(--pc-radius-sm)] px-3.5 py-1.5 pc-pseudo-mono font-medium text-base leading-none",
	lg: "rounded-[var(--pc-radius-sm)] px-1.5 py-1 pc-pseudo-mono font-medium text-sm leading-none",
	md: "rounded-[var(--pc-radius-sm)] px-2.5 py-0.5 pc-pseudo-mono font-medium text-sm leading-none",
	sm: "rounded-[var(--pc-radius-sm)] px-2 py-0.5 pc-pseudo-mono font-medium text-xs leading-none",
	xs: "rounded-[var(--pc-radius-sm)] px-1.5 py-0.5 pc-pseudo-mono font-medium text-[11px] leading-none"
}, NA = {
	container: `${mS.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-3",
		compactLabelOffset: "left-2",
		wrapperSpacing: ES,
		wrapperSpacingCompact: DS,
		wrapperHiddenSpacing: OS,
		wrapperHiddenSpacingCompact: kS
	},
	wrapper: {
		base: `${bS} ${SS} min-w-0 max-w-full`,
		gap: vS,
		neutral: CS,
		raised: CS,
		error: TS
	},
	control: {
		base: [
			"peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0",
			yS.typography,
			vx
		].join(" "),
		spacing: yS.spacing.default,
		hiddenSpacing: yS.spacing.hiddenDefault,
		compactSpacing: yS.spacing.compact,
		compactHiddenSpacing: yS.spacing.hiddenCompact,
		interactive: "cursor-pointer",
		disabled: "cursor-not-allowed pointer-events-none text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))] opacity-70"
	},
	chips: {
		container: "flex min-h-[1.25rem] min-w-0 max-w-full flex-1 flex-wrap items-center gap-1.5 overflow-x-hidden",
		placeholder: "text-[var(--pc-color-input-placeholder,var(--pc-color-text-muted))]",
		buttonIcon: "inline-flex items-center [&_svg]:h-3.5 [&_svg]:w-3.5",
		chipLabel: "block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
		chip: [
			"min-w-0 max-w-full",
			"[background:var(--pc-multiselect-chip-background,var(--pc-color-surface))]",
			"hover:[background:var(--pc-multiselect-chip-background,var(--pc-color-surface))]"
		].join(" ")
	},
	adornment: {
		base: gS.base,
		trailing: Cx,
		disabled: "text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))]"
	},
	label: { above: `${Dx} ${Tx}` },
	dropdown: {
		menu: "",
		menuAbove: "",
		menuBelow: "",
		content: "flex flex-col",
		actions: "flex items-center justify-between gap-2 border-b border-[var(--pc-color-border-weakest)] px-3 py-2 text-xs",
		list: "overflow-y-auto py-1",
		optionRow: "group relative px-1 py-0.5 first:pt-1 last:pb-1",
		optionButton: [
			"flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm transition-colors",
			"hover:[background:var(--pc-color-surface-weaker)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]"
		].join(" "),
		optionLabelWrap: "min-w-0 flex-1",
		optionLabel: "block truncate text-sm text-[var(--pc-color-text)]",
		optionDescription: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]"
	},
	message: {
		error: hS.error,
		helper: hS.helper
	}
}, PA = (e) => {
	if (!Array.isArray(e)) return [];
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = "";
		typeof n == "string" ? e = n.trim() : (typeof n == "number" || typeof n == "boolean") && (e = String(n).trim()), e && t.add(e);
	}
	return [...t];
}, FA = (e) => `Add "${e}"`, IA = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => IA(e)).join(" ") : Ue(e) ? IA(e.props.children) : "", LA = (e, t) => {
	let n = new Set(e), r = [];
	for (let e of t) n.has(e.value) && (r.push(e.value), n.delete(e.value));
	for (let t of e) n.has(t) && (r.push(t), n.delete(t));
	return r;
}, RA = (e) => ({
	target: { name: e },
	currentTarget: { name: e }
}), zA = (e, t) => ({
	target: {
		name: e,
		value: t
	},
	currentTarget: {
		name: e,
		value: t
	}
}), BA = (e) => "lg", VA = (e, t = "first") => {
	if (e.length === 0) return -1;
	if (t === "last") {
		for (let t = e.length - 1; t >= 0; --t) if (!e[t]?.disabled) return t;
		return -1;
	}
	for (let t = 0; t < e.length; t += 1) if (!e[t]?.disabled) return t;
	return -1;
}, HA = He(function({ options: e, variant: t, label: n, hideLabel: r, helperText: i, belowFieldContent: a, belowFieldContentInheritsTheme: o = !0, error: s, containerClassName: c, className: l, labelClassName: u, messageClassName: d, helperClassName: f, errorClassName: p, field: m, meta: h, form: g, innerRef: _, onChange: v, onBlur: y, validation: b, required: x, density: S = "default", reserveMessageSpace: C, id: w, name: T, value: E, defaultValue: D, placeholder: O = "Select one or more values", searchPlaceholder: k = "Search values", disabled: A = !1, emptyMessage: j = "No values available.", noMatchesMessage: M = "No values match your search.", creatable: N = !1, createOptionLabel: P = FA, skeleton: F = !1 }, I) {
	let [ee, te] = K(), ne = s ?? ee, [re, L] = K(() => PA(D)), [R, z] = K(!1), [ie, ae] = K(""), [oe, se] = K(-1), [ce, le] = K("below"), [B, ue] = K(220), { inputId: de, resolvedName: fe, handleChange: pe, handleBlur: me, resolvedValue: he, errorContent: ge, helperContent: _e, mergedRef: ve } = WE({
		forwardedRef: I,
		field: m,
		meta: h,
		form: g,
		innerRef: _,
		id: w,
		name: T,
		value: E,
		defaultValue: D,
		explicitError: ne,
		helperText: i,
		onChange: H((e) => {
			v?.(e.currentTarget.value);
		}, [v]),
		onBlur: H(() => {
			y?.();
		}, [y])
	}), ye = H((e) => {
		te(e);
	}, []), be = H((e) => Array.isArray(e) ? e.join(",") : e, []), { onChange: xe, onBlur: Se, normalizedValidation: Ce } = GE({
		value: he,
		required: x,
		validation: b,
		metaTouched: h?.touched,
		submitCount: g?.submitCount,
		resolvedName: fe,
		setFieldError: g?.setFieldError,
		handleChange: pe,
		handleBlur: me,
		setManagedError: ye,
		getValueFromChangeEvent: (e) => e.currentTarget.value,
		normalizeValue: be
	}), we = he !== void 0, Te = W(() => we ? PA(he) : re, [
		re,
		we,
		he
	]), Ee = W(() => LA(Te, e), [e, Te]), De = W(() => new Set(Ee), [Ee]), Oe = W(() => {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			t.set(e.value, e);
		}), t;
	}, [e]), ke = W(() => Ee.map((e) => {
		let t = Oe.get(e);
		return {
			value: e,
			label: t?.label ?? e,
			disabled: t?.disabled === !0
		};
	}), [Oe, Ee]), Ae = ie.trim().toLowerCase(), je = W(() => {
		if (!Ae) return e;
		let t = e.filter((e) => `${IA(e.label)} ${e.value}`.toLowerCase().includes(Ae));
		if (!N) return t;
		let n = ie.trim(), r = e.some((e) => e.value.toLowerCase() === Ae || IA(e.label).trim().toLowerCase() === Ae), i = Te.some((e) => e.toLowerCase() === Ae);
		return !n || r || i ? t : [...t, {
			value: n,
			label: P(n)
		}];
	}, [
		N,
		P,
		Ae,
		e,
		ie,
		Te
	]), Me = W(() => je.filter((e) => e.disabled !== !0).map((e) => e.value), [je]), Ne = W(() => R ? oe >= 0 && oe < je.length && je[oe]?.disabled !== !0 ? oe : VA(je, "first") : -1, [
		je,
		oe,
		R
	]), Pe = G(null), V = G(null), Fe = G(null), Ie = G(/* @__PURE__ */ new Map()), Le = H((e) => {
		Pe.current = e, ve(e);
	}, [ve]), Re = H((e) => {
		V.current = e;
	}, []), ze = Ke(), Be = de ?? `${ze}-multiselect`, Ve = `${Be}-listbox`, He = `${Be}-label`, Ue = H(() => {
		z(!1), ae(""), se(-1);
	}, []), We = H(() => {
		let e = Pe.current;
		if (!e || typeof window > "u") return;
		let t = e.getBoundingClientRect(), n = Math.max(140, Math.floor(window.innerHeight - t.bottom - 12)), r = Math.max(140, Math.floor(t.top - 12)), i = n < 200 && r > n, a = i ? "above" : "below", o = i ? r : n;
		le(a), ue(Math.max(140, Math.min(o - 92, 320)));
	}, []), U = H((e = "search") => {
		A || (z(!0), se(VA(je, "first")), We(), e === "search" && requestAnimationFrame(() => {
			Fe.current?.focus();
		}));
	}, [
		A,
		je,
		We
	]);
	Ge(() => {
		if (!R) return;
		let e = () => {
			We();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [R, We]), Ge(() => {
		if (!R) return;
		let e = (e) => {
			let t = e.target;
			t instanceof Node && (V.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Be}"]`) || Ue());
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
		};
	}, [
		Ue,
		R,
		Be
	]), Ge(() => {
		if (!R || Ne < 0 || Ne >= je.length) return;
		let e = je[Ne], t = Ie.current.get(e.value);
		t && typeof t.scrollIntoView == "function" && t.scrollIntoView({ block: "nearest" });
	}, [
		Ne,
		je,
		R
	]);
	let { dataTheme: qe } = qD({
		variant: t,
		hasError: !F && !!ge
	}), Je = H((t) => {
		let n = LA(PA(t), e);
		we || L(n), xe(zA(fe, n));
	}, [
		we,
		e,
		fe,
		xe
	]), Ye = H((e) => {
		if (!e) return;
		let t = Oe.get(e);
		t?.disabled || (De.has(e) ? Je(Ee.filter((t) => t !== e)) : (Je([...Ee, e]), N && !t && (ae(""), se(-1))));
	}, [
		N,
		Je,
		Oe,
		De,
		Ee
	]), Xe = H((e) => {
		De.has(e) && Je(Ee.filter((t) => t !== e));
	}, [
		Je,
		De,
		Ee
	]), Ze = H(() => {
		if (Ee.length === 0) return;
		let e = Ee.slice(0, -1);
		Je(e);
	}, [Je, Ee]), Qe = H(() => {
		if (Me.length === 0) return;
		let e = new Set(Ee);
		Me.forEach((t) => {
			e.add(t);
		}), Je([...e]);
	}, [
		Je,
		Me,
		Ee
	]), $e = H(() => {
		Je([]);
	}, [Je]), et = H((e) => {
		if (je.length === 0) return;
		let t = je.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0);
		if (t.length === 0) return;
		let n = t.indexOf(Ne), r = 0;
		r = n < 0 ? e === 1 ? 0 : t.length - 1 : (n + e + t.length) % t.length;
		let i = t[r];
		se(i);
	}, [Ne, je]), tt = (e) => {
		A || (e.key === "Enter" || e.key === " " ? (e.preventDefault(), R || U()) : e.key === "ArrowDown" ? (e.preventDefault(), R || U("none"), et(1)) : e.key === "ArrowUp" ? (e.preventDefault(), R || U("none"), et(-1)) : e.key === "Backspace" && !R && Ee.length > 0 && (e.preventDefault(), Ze()));
	}, nt = (e) => {
		if (e.key === "ArrowDown") e.preventDefault(), et(1);
		else if (e.key === "ArrowUp") e.preventDefault(), et(-1);
		else if (e.key === "Enter" && Ne >= 0) {
			e.preventDefault();
			let t = je[Ne];
			t.disabled || Ye(t.value);
		} else e.key === "Backspace" && ie.length === 0 && Ze();
	}, rt = (e) => {
		e.key === "Escape" && R && (e.preventDefault(), e.stopPropagation(), Ue(), Pe.current?.focus({ preventScroll: !0 }));
	}, it = (e) => {
		let t = e.relatedTarget;
		t instanceof Node && V.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Be}"]`) || (Ue(), Se(RA(fe)));
	}, at = n ?? fe ?? "", ot = HD(at), { hideLabel: st } = tD(), ct = r ?? st ?? !1, lt = !ct && (typeof n != "string" || n.length !== 0), ut = S === "compact", dt = BA(S), ft = gb({
		hideLabel: !0,
		isCompact: ut,
		withLabelDefaultClassName: NA.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: NA.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: NA.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: NA.layout.wrapperHiddenSpacingCompact
	}), pt = A, mt = R && !pt, ht = ge ? NA.wrapper.error : NA.wrapper.neutral, gt = gb({
		hideLabel: !0,
		isCompact: ut,
		withLabelDefaultClassName: NA.control.spacing,
		hiddenLabelDefaultClassName: NA.control.hiddenSpacing,
		withLabelCompactClassName: NA.control.compactSpacing,
		hiddenLabelCompactClassName: NA.control.compactHiddenSpacing
	}), _t = Q(NA.label.above, ge ? Ex : void 0, u), vt = Q(NA.wrapper.base, NA.wrapper.gap, ft, ht, mt ? `border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))] ${fx} [background-color:var(--pc-color-input-background,var(--pc-color-surface))]` : void 0, pt ? "border-[var(--pc-color-input-border,var(--pc-color-border))]" : void 0, l), yt = Q(NA.control.base, gt, A ? NA.control.disabled : NA.control.interactive), bt = Q(NA.chips.container), xt = Q(ut ? "[--_pc-input-message-size:12px] [--_pc-input-message-line-height:16px]" : void 0, d), St = ct && typeof at == "string" && at.length > 0 ? at : void 0, Ct = Ce?.required?.value ?? x, wt = () => {
		A || (R ? Ue() : U());
	}, Tt = (e) => {
		let t = e.target;
		t instanceof Node && V.current?.contains(t) && wt();
	}, Et = Q(NA.adornment.base, NA.adornment.trailing, A ? NA.adornment.disabled : void 0), Dt = _e !== void 0 || ge !== void 0, Ot = !Dt && C !== !1;
	if (F) {
		let e = Dt ? /* @__PURE__ */ q(KD, {
			compact: ut,
			helper: _e,
			error: ge,
			reserveSpace: !1
		}) : void 0, t = ut ? "h-5" : "h-6";
		return /* @__PURE__ */ J(WD, {
			baseClassName: NA.container,
			containerClassName: c,
			dataTheme: qe,
			styles: NA.message,
			messageClassName: xt,
			helperClassName: f,
			errorClassName: p,
			helper: e,
			reserveSpace: Ot,
			children: [lt && /* @__PURE__ */ q("span", {
				id: He,
				className: _t,
				title: ot,
				children: at
			}), /* @__PURE__ */ J("div", {
				className: vt,
				"data-skeleton": "true",
				"data-slot": "multiselect-skeleton-shell",
				children: [/* @__PURE__ */ q("div", {
					className: Q(NA.control.base, ut ? "px-0" : void 0, gt),
					children: /* @__PURE__ */ J("div", {
						"data-theme": "neutral",
						className: bt,
						children: [/* @__PURE__ */ q(kD, { className: Q(t, "w-20 rounded-full") }), /* @__PURE__ */ q(kD, { className: Q(t, "w-16 rounded-full") })]
					})
				}), /* @__PURE__ */ q("div", {
					className: Et,
					children: /* @__PURE__ */ q(kD, { className: "h-4 w-4 rounded-full" })
				})]
			})]
		});
	}
	return /* @__PURE__ */ J(WD, {
		baseClassName: NA.container,
		containerClassName: c,
		belowFieldContent: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: qe,
		styles: NA.message,
		messageClassName: xt,
		helperClassName: f,
		errorClassName: p,
		error: ge,
		helper: _e,
		reserveSpace: C !== !1,
		children: [lt && /* @__PURE__ */ q("span", {
			id: He,
			className: _t,
			title: ot,
			children: at
		}), /* @__PURE__ */ J("div", {
			ref: Re,
			className: vt,
			onBlurCapture: it,
			onClick: Tt,
			onKeyDown: rt,
			"data-slot": "multiselect-shell",
			children: [
				/* @__PURE__ */ q("div", {
					id: Be,
					ref: Le,
					role: "combobox",
					tabIndex: A ? -1 : 0,
					"aria-controls": Ve,
					"aria-expanded": mt,
					"aria-haspopup": "listbox",
					"aria-invalid": ge ? !0 : void 0,
					"aria-disabled": A ? !0 : void 0,
					"aria-label": St,
					"aria-labelledby": lt ? He : void 0,
					"aria-required": Ct ? !0 : void 0,
					className: yt,
					onKeyDown: tt,
					"data-name": fe,
					children: /* @__PURE__ */ q("div", {
						"data-theme": "secondary",
						className: bt,
						children: ke.length > 0 ? ke.map((e) => {
							let t = IA(e.label).trim() || e.value;
							return /* @__PURE__ */ J(jA, {
								as: "button",
								type: "button",
								"data-pc-multiselect-chip": "true",
								className: NA.chips.chip,
								theme: "secondary",
								size: dt,
								style: { paddingInline: "0.625rem" },
								disabled: A || e.disabled,
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), Xe(e.value);
								},
								"aria-label": `Remove ${t}`,
								children: [/* @__PURE__ */ q("span", {
									className: NA.chips.chipLabel,
									children: t
								}), /* @__PURE__ */ q("span", {
									className: NA.chips.buttonIcon,
									children: /* @__PURE__ */ q(pD, {})
								})]
							}, e.value);
						}) : /* @__PURE__ */ q("span", {
							"data-slot": "multiselect-placeholder",
							className: NA.chips.placeholder,
							children: O
						})
					})
				}),
				/* @__PURE__ */ q("div", {
					className: Et,
					children: /* @__PURE__ */ q("svg", {
						"aria-hidden": "true",
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: vb({ isOpen: mt }),
						children: /* @__PURE__ */ q("path", {
							d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})
				}),
				/* @__PURE__ */ q(ix, {
					options: [],
					isOpen: R && !A,
					align: "start",
					widthMode: "anchor",
					lockPlacementWhileOpen: !0,
					menuRole: "dialog",
					labelledBy: Be,
					anchorRef: V,
					usePortal: !0,
					className: Q(NA.dropdown.menu, ce === "above" ? NA.dropdown.menuAbove : NA.dropdown.menuBelow),
					renderContent: () => /* @__PURE__ */ J("div", {
						className: NA.dropdown.content,
						children: [
							/* @__PURE__ */ q(IS, {
								ref: Fe,
								value: ie,
								onChange: (e) => {
									ae(e), se(-1);
								},
								onKeyDown: nt,
								placeholder: k,
								ariaLabel: "Search options"
							}),
							/* @__PURE__ */ q("div", {
								className: NA.dropdown.actions,
								onMouseDown: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								onTouchStart: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								children: /* @__PURE__ */ J("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ q(Pv, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: Qe,
										disabled: Me.length === 0,
										label: "Select all"
									}), /* @__PURE__ */ q(Pv, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: $e,
										disabled: Ee.length === 0,
										label: "Deselect all"
									})]
								})
							}),
							/* @__PURE__ */ q("ul", {
								id: Ve,
								role: "listbox",
								"aria-multiselectable": "true",
								className: NA.dropdown.list,
								style: { maxHeight: `${String(B)}px` },
								children: je.length === 0 ? /* @__PURE__ */ q("li", {
									className: NA.dropdown.empty,
									children: e.length === 0 ? j : M
								}) : je.map((e, t) => {
									let n = De.has(e.value), r = Ne === t, i = e.disabled === !0;
									return /* @__PURE__ */ q(Cb, {
										ref: (t) => {
											t ? Ie.current.set(e.value, t) : Ie.current.delete(e.value);
										},
										wrapperAs: "li",
										wrapperId: `${Ve}-${e.value}`,
										wrapperRole: "option",
										wrapperAriaSelected: n,
										wrapperAriaDisabled: i,
										label: e.label,
										description: e.description,
										selected: n,
										highlighted: r,
										disabled: i,
										trailing: /* @__PURE__ */ q("span", {
											className: Q("shrink-0 text-[var(--pc-color-text)] transition-opacity", n ? "opacity-100" : "opacity-0"),
											children: /* @__PURE__ */ q(lD, {})
										}),
										onMouseEnter: () => {
											se(t);
										},
										onClick: () => {
											i || Ye(e.value);
										}
									}, e.value);
								})
							})
						]
					})
				})
			]
		})]
	});
});
HA.displayName = "MultiSelect", oD(HA);
//#endregion
//#region ../ui/src/lib/SearchSelect.tsx
var UA = {
	container: `${mS.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: ES,
		wrapperSpacingCompact: DS,
		wrapperHiddenSpacing: OS,
		wrapperHiddenSpacingCompact: kS
	},
	wrapper: {
		base: `${bS} group min-w-0 max-w-full`,
		frame: SS,
		gap: vS,
		neutral: CS,
		raised: CS,
		error: TS
	},
	inner: _S,
	control: {
		base: [
			"peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0",
			yS.typography,
			vx,
			"cursor-pointer text-left"
		].join(" "),
		inputBase: AS,
		spacing: yS.spacing.select,
		hiddenSpacing: yS.spacing.hiddenSelect,
		compactSpacing: yS.spacing.selectCompact,
		compactHiddenSpacing: yS.spacing.hiddenSelectCompact,
		disabled: "cursor-not-allowed pointer-events-none text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))] opacity-70"
	},
	value: {
		base: "block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[var(--pc-color-input-text,var(--pc-color-text))]",
		placeholder: "text-[var(--pc-color-input-placeholder,var(--pc-color-text-muted))]"
	},
	adornment: {
		base: gS.base,
		trailing: Cx,
		disabled: "text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))]"
	},
	label: { above: `${Dx} ${Tx}` },
	dropdown: {
		menu: "overflow-y-hidden",
		content: "flex max-h-[inherit] min-h-0 flex-col",
		list: "min-h-0 overflow-y-auto py-1",
		optionRow: "group relative px-1 py-0.5 first:pt-1 last:pb-1",
		optionButton: [
			"flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm transition-colors",
			"hover:[background:var(--pc-color-depth-1)] active:[background:var(--pc-color-depth-1)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]",
			"disabled:cursor-not-allowed disabled:opacity-60"
		].join(" "),
		optionLabelWrap: "min-w-0 flex-1",
		optionLabel: "block truncate text-sm text-[var(--pc-color-text)]",
		optionDescription: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
		optionSelectedIcon: "shrink-0 text-[var(--pc-color-text)]",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]",
		footer: "shrink-0 border-t border-[var(--pc-color-border-weakest)] p-1",
		footerAction: "justify-start rounded-[var(--pc-radius-xl)]"
	},
	message: {
		error: hS.error,
		helper: hS.helper
	}
}, WA = (e) => e?.trim() ?? "", GA = He(function({ options: e, value: t, onChange: n, onOpenChange: r, variant: i, label: a, hideLabel: o = !1, helperText: s, error: c, containerClassName: l, className: u, labelClassName: d, messageClassName: f, helperClassName: p, errorClassName: m, required: h = !1, density: g = "default", reserveMessageSpace: _ = !0, id: v, name: y, placeholder: b = "Select a value", searchPlaceholder: x = "Search", disabled: S = !1, emptyMessage: C = "No values are available.", noMatchesMessage: w = "No values match your search.", allowCustomValue: T = !1, footerAction: E }, D) {
	let O = Ke(), k = v ?? O, A = `${k}-label`, j = `${k}-popup`, M = `${k}-listbox`, N = T ? "listbox" : "dialog", P = T ? M : j, F = G(null), I = G(null), ee = G(null), te = G(!1), [ne, re] = K(!1), [L, R] = K(""), [z, ie] = K(!1), ae = WA(t), oe = W(() => e.find((e) => e.value === ae) ?? null, [e, ae]), se = YD(z ? L : ""), ce = W(() => ZD(e, se, (e) => [
		e.value,
		e.searchText,
		e.label,
		e.description
	]), [se, e]), le = W(() => e.some((e) => e.value.trim().toLowerCase() === se), [se, e]), B = T ? L.trim() : "", ue = T && B.length > 0 && !le, de = !!c, { dataTheme: fe } = qD({
		variant: i,
		hasError: de
	});
	Ge(() => {
		if (!ne || T) return;
		let e = window.requestAnimationFrame(() => {
			F.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [T, ne]);
	let pe = H((e) => {
		I.current = e, typeof D == "function" ? D(e) : D && (D.current = e);
	}, [D]), me = H((e) => {
		ee.current = e;
	}, []), he = H((e) => {
		te.current !== e && (te.current = e, re(e), r?.(e));
	}, [r]), ge = H(() => {
		he(!0);
	}, [he]), _e = H(() => {
		he(!1), R(""), ie(!1);
	}, [he]), ve = H((e) => {
		T && (R(e), ie(!1)), n?.(e), _e();
	}, [
		T,
		_e,
		n
	]), ye = H((e) => {
		(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), ge());
	}, [ge]), be = H((e) => {
		if (S) return;
		let t = I.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), ne || ge());
	}, [
		S,
		ne,
		ge
	]), xe = H((e) => {
		e.key === "ArrowDown" ? (e.preventDefault(), ge()) : e.key === "Enter" && (e.preventDefault(), ue && B && ve(B));
	}, [
		ue,
		ve,
		B,
		ge
	]), Se = H((e) => {
		if (e.key !== "Enter") return;
		if (e.preventDefault(), ue && B) {
			ve(B);
			return;
		}
		let t = ce.find((e) => !e.disabled);
		t && ve(t.value);
	}, [
		ue,
		ve,
		B,
		ce
	]), Ce = H(() => {
		E && !E.disabled && (_e(), E.onSelect());
	}, [_e, E]), we = ae.length > 0, Te = oe !== null || we, Ee = g === "compact", De = b, Oe = b;
	oe ? (De = oe.label, Oe = HD(oe.label)) : we && (De = ae, Oe = ae);
	let ke = UA.wrapper.neutral;
	de && (ke = UA.wrapper.error);
	let Ae = Ee ? UA.layout.wrapperHiddenSpacingCompact : UA.layout.wrapperHiddenSpacing, je = gb({
		hideLabel: !0,
		isCompact: Ee,
		withLabelDefaultClassName: UA.control.spacing,
		hiddenLabelDefaultClassName: UA.control.hiddenSpacing,
		withLabelCompactClassName: UA.control.compactSpacing,
		hiddenLabelCompactClassName: UA.control.compactHiddenSpacing
	}), Me = Q(UA.label.above, d), Ne = $D(a, "Search"), Pe = Q(UA.value.base, Te ? void 0 : UA.value.placeholder), V = Q(UA.wrapper.base, UA.wrapper.gap, UA.wrapper.frame, Ae, ke, ne && !S ? `border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))] ${fx} [background-color:var(--pc-color-input-background,var(--pc-color-surface))]` : void 0, u), Fe = Q(UA.control.base, je, S ? UA.control.disabled : void 0), Ie = Q(UA.control.inputBase, je, S ? UA.control.disabled : void 0), Le = Q(UA.adornment.base, UA.adornment.trailing, S ? UA.adornment.disabled : void 0), Re = se ? w : C, ze = !o && a ? /* @__PURE__ */ q("span", {
		id: A,
		className: Me,
		title: HD(a),
		children: a
	}) : null, Be = /* @__PURE__ */ q("svg", {
		"aria-hidden": "true",
		"data-slot": "search-select-chevron",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: vb({
			isOpen: ne,
			spinOnGroupFocus: T
		}),
		children: /* @__PURE__ */ q("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
	return /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ J(WD, {
		baseClassName: UA.container,
		containerClassName: l,
		styles: UA.message,
		error: c,
		helper: s,
		messageClassName: f,
		helperClassName: p,
		errorClassName: m,
		reserveSpace: _,
		dataTheme: fe,
		children: [
			o && a ? /* @__PURE__ */ q("span", {
				id: A,
				className: "sr-only",
				children: a
			}) : null,
			!o && ze,
			T ? /* @__PURE__ */ J("label", {
				htmlFor: k,
				className: V,
				ref: me,
				"data-slot": "search-select-shell",
				children: [/* @__PURE__ */ q("div", {
					className: UA.inner,
					children: /* @__PURE__ */ q("input", {
						ref: (e) => {
							pe(e);
						},
						id: k,
						name: y,
						type: "text",
						autoComplete: "off",
						role: "combobox",
						"aria-expanded": ne,
						"aria-controls": P,
						"aria-haspopup": N,
						"aria-labelledby": a ? A : void 0,
						"aria-required": h,
						className: Ie,
						disabled: S,
						value: ne && z ? L : ae,
						placeholder: b,
						onFocus: () => {
							ge();
						},
						onClick: () => {
							ge();
						},
						onChange: (e) => {
							let t = e.currentTarget.value;
							ie(!0), R(t), n?.(t), ne || ge();
						},
						onKeyDown: xe
					})
				}), /* @__PURE__ */ q("span", {
					className: Le,
					children: Be
				})]
			}) : /* @__PURE__ */ J("div", {
				className: Q(V, "cursor-pointer"),
				onMouseDown: be,
				ref: me,
				"data-slot": "search-select-shell",
				children: [/* @__PURE__ */ q("div", {
					className: UA.inner,
					children: /* @__PURE__ */ q("button", {
						ref: (e) => {
							pe(e);
						},
						id: k,
						name: y,
						type: "button",
						role: "combobox",
						"aria-expanded": ne,
						"aria-controls": j,
						"aria-haspopup": "dialog",
						"aria-labelledby": a ? A : void 0,
						"aria-required": h,
						className: Fe,
						disabled: S,
						onClick: () => {
							ne ? _e() : ge();
						},
						onKeyDown: ye,
						children: /* @__PURE__ */ q("span", {
							"data-slot": Te ? "search-select-value" : "search-select-placeholder",
							className: Pe,
							title: Oe,
							children: De
						})
					})
				}), /* @__PURE__ */ q("span", {
					className: Le,
					children: Be
				})]
			})
		]
	}), /* @__PURE__ */ q(ix, {
		id: P,
		anchorRef: ee,
		isOpen: ne,
		onRequestClose: _e,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: N,
		labelledBy: a ? A : void 0,
		className: UA.dropdown.menu,
		renderContent: () => /* @__PURE__ */ J("div", {
			className: UA.dropdown.content,
			children: [
				!T && /* @__PURE__ */ q(IS, {
					ref: F,
					value: L,
					onChange: (e) => {
						ie(!0), R(e);
					},
					onKeyDown: Se,
					placeholder: x,
					ariaLabel: Ne
				}),
				/* @__PURE__ */ J("div", {
					id: T ? void 0 : M,
					role: T ? void 0 : "listbox",
					"aria-labelledby": !T && a ? A : void 0,
					className: UA.dropdown.list,
					children: [ce.length > 0 ? ce.map((e) => {
						let t = e.value === ae, n = t ? /* @__PURE__ */ q("span", {
							className: UA.dropdown.optionSelectedIcon,
							children: /* @__PURE__ */ q(lD, {})
						}) : null;
						return /* @__PURE__ */ q(Cb, {
							role: "option",
							ariaSelected: t,
							label: e.label,
							description: e.description,
							selected: t,
							disabled: e.disabled,
							trailing: n,
							onClick: () => {
								ve(e.value);
							}
						}, e.value);
					}) : /* @__PURE__ */ q("div", {
						className: UA.dropdown.empty,
						children: Re
					}), ue && B && /* @__PURE__ */ q(Cb, {
						role: "option",
						ariaSelected: ae === B,
						label: /* @__PURE__ */ J(Ze, { children: [
							"Use \"",
							B,
							"\""
						] }),
						onClick: () => {
							ve(B);
						}
					})]
				}),
				E && /* @__PURE__ */ q("div", {
					"data-slot": "search-select-footer",
					className: UA.dropdown.footer,
					children: /* @__PURE__ */ q(Pv, {
						type: "button",
						variant: "neutral",
						appearance: "ghost",
						size: "sm",
						fullWidth: !0,
						className: UA.dropdown.footerAction,
						label: E.label,
						leadingIcon: E.leadingIcon,
						disabled: E.disabled,
						onClick: Ce
					})
				})
			]
		})
	})] });
});
GA.displayName = "SearchSelect", oD(GA);
//#endregion
//#region ../ui/src/lib/Toggle.tsx
var KA = /* @__PURE__ */ new Set([
	"true",
	"1",
	"yes",
	"y",
	"on"
]), qA = /* @__PURE__ */ new Set([
	"false",
	"0",
	"no",
	"n",
	"off",
	""
]), JA = "[background:var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral))))]", YA = "[background:var(--pc-color-toggle-thumb-checked,var(--pc-color-toggle-thumb-checked-surface,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral))))))]", XA = "[background:var(--pc-color-toggle-thumb-disabled,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral)))))]", ZA = (e) => {
	if (typeof e == "boolean") return e;
	if (typeof e == "number") return Number.isNaN(e) ? void 0 : e !== 0;
	if (typeof e == "string") {
		let t = e.trim().toLowerCase();
		return KA.has(t) ? !0 : !qA.has(t) && void 0;
	}
}, QA = {
	container: mS.container,
	input: "peer sr-only",
	labelWrapper: {
		base: `flex flex-col ${Ox}`,
		disabled: "cursor-not-allowed",
		enabled: "cursor-pointer"
	},
	labelText: {
		base: `block max-w-full overflow-hidden text-ellipsis whitespace-nowrap ${wx} transition-colors duration-200`,
		error: Ex,
		disabled: "text-[var(--pc-color-input-label-text,var(--pc-color-text))]",
		default: "text-[var(--pc-color-input-label-text,var(--pc-color-text))]"
	},
	focusRing: {
		disabled: "peer-focus-visible:ring-[color:var(--pc-color-input-disabled-focus-ring,color-mix(in_srgb,var(--pc-color-depth-2)_16%,transparent))]",
		error: "peer-focus-visible:ring-[color:var(--pc-color-input-focus-ring,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_26%,transparent))]",
		default: "peer-focus-visible:ring-[color:var(--pc-color-input-focus-ring,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_26%,transparent))]"
	},
	track: {
		base: "relative inline-flex h-[1.8125rem] w-12 shrink-0 items-center overflow-hidden rounded-[var(--pc-radius-full)] border [background:var(--pc-color-toggle-background,var(--pc-color-input-background,var(--pc-color-surface)))] px-[3px] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [contain:paint]",
		compact: "h-7 w-[2.875rem]",
		frame: {
			default: "border-[var(--pc-color-input-border,var(--pc-color-border))] peer-focus-visible:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]",
			checked: "border-[color:var(--pc-color-toggle-border-checked,transparent)] peer-focus-visible:border-[var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))]",
			disabled: "border-[var(--pc-color-input-border,var(--pc-color-border))]",
			error: "border-[var(--pc-color-input-invalid-border,var(--pc-color-input-border,var(--pc-color-danger-text)))] peer-focus-visible:border-[var(--pc-color-input-invalid-border,var(--pc-color-input-focus-border,var(--pc-color-danger-text)))]"
		},
		disabled: "border-[color:var(--pc-color-toggle-border-disabled,var(--pc-color-toggle-background-disabled,var(--pc-color-depth-4)))] [background:var(--pc-color-toggle-background-disabled,var(--pc-color-depth-4))] text-[var(--pc-color-text-muted)]",
		checked: "[background:var(--pc-color-toggle-background-checked,color-mix(in_srgb,var(--pc-color-input-focus-border,var(--pc-color-text))_42%,var(--pc-color-input-background,var(--pc-color-surface))))]",
		unchecked: "hover:[background:var(--pc-color-toggle-background-hover,var(--pc-color-input-background-hover,var(--pc-color-toggle-background,var(--pc-color-input-background,var(--pc-color-surface)))))]"
	},
	thumb: {
		base: "pointer-events-none inline-block h-[1.3125rem] w-[1.3125rem] rounded-[var(--pc-radius-full)] transition-[translate,background-color] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform [will-change:translate,background-color]",
		checked: `translate-x-[19px] ${YA}`,
		checkedCompact: `translate-x-[18px] ${YA}`,
		compact: "h-5 w-5",
		unchecked: `translate-x-0 ${JA}`,
		disabled: XA
	},
	checkedIcon: {
		base: "pointer-events-none absolute inset-y-0 left-0.5 inline-flex w-[1.125rem] items-center justify-center transition-[opacity,color] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:block [&_svg]:h-3.5 [&_svg]:w-3.5",
		compact: "w-[1.125rem] [&_svg]:h-3.5 [&_svg]:w-3.5",
		visible: "opacity-100",
		hidden: "opacity-0",
		enabled: "text-[var(--pc-color-toggle-icon-checked,var(--pc-color-toggle-thumb-checked,var(--pc-color-toggle-thumb-checked-surface,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral)))))))]",
		disabled: "text-[var(--pc-color-text-muted)]"
	},
	message: {
		error: hS.error,
		helper: hS.helper
	},
	srOnly: "sr-only"
}, $A = /* @__PURE__ */ new Set([
	"belowFieldContent",
	"belowFieldContentClassName",
	"belowFieldContentInheritsTheme",
	"containerClassName",
	"density",
	"error",
	"errorClassName",
	"field",
	"form",
	"helperClassName",
	"helperText",
	"hideLabel",
	"innerRef",
	"inputClassName",
	"label",
	"labelClassName",
	"messageClassName",
	"meta",
	"reserveMessageSpace",
	"skeleton",
	"validation",
	"variant"
]), ej = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !$A.has(e))) : {}, tj = He(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentClassName: a, belowFieldContentInheritsTheme: o = !0, error: s, density: c = "default", containerClassName: l, className: u, inputClassName: d, labelClassName: f, messageClassName: p, helperClassName: m, errorClassName: h, reserveMessageSpace: g, field: _, meta: v, form: y, innerRef: b, validation: x, onChange: S, onBlur: C, required: w, checkedIcon: T, skeleton: E = !1, id: D, name: O, value: k, defaultValue: A, checked: j, defaultChecked: M, disabled: N, ...P }, F) {
	let [I, ee] = K(), te = s ?? I, ne = j ?? k, re = M ?? A, L = c === "compact", R = Q(L ? "[--_pc-input-message-size:12px] [--_pc-input-message-line-height:16px]" : void 0, p), { inputId: z, resolvedName: ie, handleChange: ae, handleBlur: oe, errorContent: se, helperContent: ce, mergedRef: le, sharedProps: B, resolvedValue: ue } = WE({
		forwardedRef: F,
		field: _,
		meta: v,
		form: y,
		innerRef: b,
		id: D,
		name: O,
		value: ne,
		defaultValue: re,
		explicitError: te,
		helperText: r,
		onChange: S,
		onBlur: C
	}), { dataTheme: de } = qD({
		variant: e,
		hasError: !E && !!se
	}), fe = W(() => ZA(ue ?? ne), [ue, ne]), pe = W(() => ZA(re), [re]), me = fe ?? pe ?? !1, he = H((e) => !!e.currentTarget?.checked, []);
	Ge(() => {
		if (!y?.setFieldValue || !ie) return;
		let e = ZA(ue);
		typeof e == "boolean" && e !== ue && y.setFieldValue(ie, e, !1);
	}, [
		y,
		ie,
		ue
	]);
	let ge = H((e) => {
		ee(e);
	}, [ee]), { onChange: _e, onBlur: ve, normalizedValidation: ye } = GE({
		value: me,
		required: w,
		validation: x,
		metaTouched: v?.touched,
		submitCount: y?.submitCount,
		resolvedName: ie,
		setFieldError: y?.setFieldError,
		handleChange: ae,
		handleBlur: oe,
		setManagedError: ge,
		getValueFromChangeEvent: he
	}), be = {
		...ej(P),
		...B
	};
	delete be.value, delete be.defaultValue;
	let xe = typeof k == "string" ? k : "true";
	be.type = "checkbox", be.value = xe, be.disabled = N, typeof fe == "boolean" ? be.checked = fe : typeof pe == "boolean" && (be.defaultChecked = pe), be.onChange = _e, be.onBlur = ve, (ye?.required?.value ?? w) && (be.required = !0, be["aria-required"] = !0);
	let { hideLabel: Se } = tD(), Ce = t ?? ie ?? "", we = HD(Ce), Te = n ?? Se ?? !1;
	Te && typeof Ce == "string" && Ce.length > 0 && be["aria-label"] === void 0 && be["aria-labelledby"] === void 0 && (be["aria-label"] = Ce);
	let Ee = Q(QA.input, d), De = G(null), Oe = H((e) => {
		De.current = e, le(e);
	}, [le]);
	be.className = Ee, be.ref = Oe, be.id = z;
	let ke = N === !0, Ae = H((e) => {
		if (ke || e.button !== 0) return;
		e.preventDefault();
		let t = De.current;
		if (t) try {
			t.focus({ preventScroll: !0 });
		} catch {
			t.focus();
		}
	}, [ke]), je = !Te && (typeof Ce != "string" || Ce.length !== 0), Me = se ? QA.labelText.error : ke ? QA.labelText.disabled : QA.labelText.default, Ne = Q(QA.labelText.base, Me, f), Pe = ke ? QA.focusRing.disabled : se ? QA.focusRing.error : QA.focusRing.default, V = ke ? QA.track.frame.disabled : se ? QA.track.frame.error : me ? QA.track.frame.checked : QA.track.frame.default, Fe = ke ? QA.track.disabled : me ? QA.track.checked : QA.track.unchecked, Ie = Q(QA.track.base, V, mx, Pe, Fe, L ? QA.track.compact : void 0, u), Le = me ? L ? QA.thumb.checkedCompact : QA.thumb.checked : QA.thumb.unchecked, Re = Q(QA.thumb.base, Le, L ? QA.thumb.compact : void 0, ke ? QA.thumb.disabled : void 0), ze = W(() => T === !0 ? /* @__PURE__ */ q(lD, { strokeWidth: 2.2 }) : T, [T]), Be = ze !== void 0, Ve = Q(QA.checkedIcon.base, L ? QA.checkedIcon.compact : void 0, ke ? QA.checkedIcon.disabled : QA.checkedIcon.enabled, me ? QA.checkedIcon.visible : QA.checkedIcon.hidden), He = ce !== void 0 || se !== void 0, Ue = !He && g !== !1;
	if (E) {
		let e = He ? /* @__PURE__ */ q(KD, {
			compact: L,
			helper: ce,
			error: se,
			reserveSpace: !1
		}) : void 0, t = Q(QA.track.base, QA.track.unchecked, L ? QA.track.compact : void 0, u), n = Q(QA.thumb.base, QA.thumb.unchecked, L ? QA.thumb.compact : void 0);
		return /* @__PURE__ */ q(WD, {
			baseClassName: QA.container,
			containerClassName: l,
			dataTheme: de,
			styles: QA.message,
			messageClassName: R,
			helperClassName: m,
			errorClassName: h,
			helper: e,
			reserveSpace: Ue,
			children: /* @__PURE__ */ J("div", {
				className: Q(QA.labelWrapper.base, L ? "gap-1" : void 0),
				"data-skeleton": "true",
				"data-slot": "toggle-skeleton-shell",
				children: [/* @__PURE__ */ q(GD, {
					showLabel: je,
					labelClassName: Ne,
					compact: L
				}), /* @__PURE__ */ q("span", {
					"aria-hidden": "true",
					className: t,
					children: /* @__PURE__ */ q("span", {
						"data-slot": "thumb",
						className: n,
						children: /* @__PURE__ */ q(kD, { className: "h-full w-full rounded-full [background:var(--pc-color-depth-4)]" })
					})
				})]
			})
		});
	}
	return /* @__PURE__ */ q(WD, {
		baseClassName: QA.container,
		containerClassName: l,
		belowFieldContent: i,
		belowFieldContentClassName: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: de,
		styles: QA.message,
		messageClassName: R,
		helperClassName: m,
		errorClassName: h,
		error: se,
		helper: ce,
		reserveSpace: g !== !1,
		children: /* @__PURE__ */ J("label", {
			htmlFor: z,
			onMouseDown: Ae,
			className: Q(QA.labelWrapper.base, L ? "gap-1" : void 0, ke ? QA.labelWrapper.disabled : QA.labelWrapper.enabled),
			children: [
				/* @__PURE__ */ q("input", { ...be }),
				je ? /* @__PURE__ */ q("span", {
					className: Ne,
					title: we,
					children: Ce
				}) : typeof Ce == "string" && Ce.length > 0 && /* @__PURE__ */ q("span", {
					className: Q(QA.srOnly, f),
					children: Ce
				}),
				/* @__PURE__ */ J("span", {
					"aria-hidden": "true",
					className: Ie,
					children: [Be ? /* @__PURE__ */ q("span", {
						"data-slot": "checked-icon",
						className: Ve,
						children: ze
					}) : null, /* @__PURE__ */ q("span", {
						"data-slot": "thumb",
						className: Re
					})]
				})
			]
		})
	});
});
tj.displayName = "Toggle", oD(tj);
//#endregion
//#region ../ui/src/lib/Checkbox.tsx
var nj = (e, t) => [e, t].filter(Boolean).join(" ") || void 0, rj = {
	container: `${mS.container} min-w-0`,
	row: "inline-flex max-w-full items-start gap-[var(--pc-space-input-gap,0.75rem)]",
	rowEnabled: "cursor-pointer",
	rowDisabled: "cursor-not-allowed opacity-60",
	input: "peer sr-only",
	control: {
		base: [
			"relative mt-0.5 inline-flex h-[var(--pc-size-checkbox,1rem)] w-[var(--pc-size-checkbox,1rem)] shrink-0 items-center justify-center overflow-hidden border",
			"rounded-[var(--pc-radius-checkbox,var(--pc-radius-sm))]",
			"[background:var(--pc-color-input-checkbox-background,transparent)]",
			"border-[var(--pc-color-input-checkbox-border,var(--pc-color-input-focus-border,var(--pc-color-border)))]",
			"peer-hover:border-[var(--pc-color-input-checkbox-border-hover,var(--pc-color-input-checkbox-border,var(--pc-color-input-focus-border,var(--pc-color-border))))]",
			mx,
			"peer-checked:border-[var(--pc-color-input-text,var(--pc-color-text))]",
			"peer-checked:[background:var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text)))]",
			"peer-checked:[&_[data-slot=checkbox-check]]:opacity-100",
			"peer-indeterminate:border-[var(--pc-color-input-text,var(--pc-color-text))]",
			"peer-indeterminate:[background:var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text)))]",
			"peer-disabled:border-[var(--pc-color-input-checkbox-border-disabled,var(--pc-color-input-checkbox-border,var(--pc-color-border)))]",
			"peer-disabled:[background:var(--pc-color-input-disabled-background,var(--pc-color-surface-weakest))]",
			"peer-disabled:text-[var(--pc-color-input-disabled-text,var(--pc-color-text-muted))]",
			"peer-checked:peer-disabled:border-[var(--pc-color-input-checkbox-border-checked-disabled,var(--pc-color-input-text,var(--pc-color-text)))]",
			"peer-checked:peer-disabled:[background:var(--pc-color-input-checkbox-background-checked-disabled,var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text))))]",
			"peer-indeterminate:peer-disabled:border-[var(--pc-color-input-checkbox-border-checked-disabled,var(--pc-color-input-text,var(--pc-color-text)))]",
			"peer-indeterminate:peer-disabled:[background:var(--pc-color-input-checkbox-background-checked-disabled,var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text))))]"
		].join(" "),
		invalid: ["border-[var(--pc-color-input-invalid-border,var(--pc-color-input-checkbox-border,var(--pc-color-danger-text)))]", "peer-hover:border-[var(--pc-color-input-invalid-border,var(--pc-color-input-checkbox-border,var(--pc-color-danger-text)))]"].join(" ")
	},
	check: "pointer-events-none inline-flex h-3 w-3 items-center justify-center text-[var(--pc-color-input-checkbox-icon,var(--pc-color-input-background,var(--pc-color-surface)))] opacity-0",
	checkIcon: "h-3 w-3",
	dash: "pointer-events-none h-0.5 w-2 rounded-full [background:var(--pc-color-input-checkbox-icon,var(--pc-color-input-background,var(--pc-color-surface)))]",
	textWrap: "min-w-0 flex-1",
	labelText: `block ${wx} text-[var(--pc-color-input-label-text,var(--pc-color-text))]`,
	labelTextInvalid: Ex,
	required: "ml-1 text-[var(--pc-color-input-error-text,var(--pc-color-text))]",
	message: {
		error: hS.error,
		helper: hS.helper
	}
}, ij = /* @__PURE__ */ new Set([
	"belowFieldContent",
	"belowFieldContentInheritsTheme",
	"containerClassName",
	"controlClassName",
	"controlStyle",
	"error",
	"errorClassName",
	"helperClassName",
	"helperText",
	"hideLabel",
	"innerRef",
	"inputClassName",
	"label",
	"labelClassName",
	"messageClassName",
	"reserveMessageSpace",
	"skeleton",
	"validation",
	"variant"
]), aj = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !ij.has(e))) : {}, oj = He(function({ variant: e, label: t, hideLabel: n = !1, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, containerClassName: s, className: c, inputClassName: l, controlClassName: u, controlStyle: d, labelClassName: f, messageClassName: p, helperClassName: m, errorClassName: h, reserveMessageSpace: g = !1, indeterminate: _ = !1, innerRef: v, id: y, disabled: b, required: x, "aria-describedby": S, "aria-invalid": C, ...w }, T) {
	let E = Ke(), D = y ?? E, O = `${D}-message`, k = G(null), A = !!o, j = !!(o || r || g), { dataTheme: M } = qD({
		variant: e,
		hasError: A
	}), N = H((e) => {
		k.current = e, RE(T, e), RE(v, e);
	}, [T, v]);
	Ge(() => {
		k.current && (k.current.indeterminate = _);
	}, [_]);
	let P = C ?? (A ? !0 : void 0), F = nj(S, j ? O : void 0), I = !!t && !n, ee = aj(w);
	return /* @__PURE__ */ q(WD, {
		baseClassName: rj.container,
		containerClassName: s,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: M,
		styles: rj.message,
		error: o,
		helper: r,
		messageClassName: p,
		helperClassName: m,
		errorClassName: h,
		reserveSpace: g,
		messageId: O,
		children: /* @__PURE__ */ J("label", {
			htmlFor: D,
			className: Q(rj.row, b ? rj.rowDisabled : rj.rowEnabled, c),
			children: [
				/* @__PURE__ */ q("input", {
					...ee,
					ref: N,
					id: D,
					type: "checkbox",
					disabled: b,
					required: x,
					"aria-invalid": P,
					"aria-describedby": F,
					className: Q(rj.input, l)
				}),
				/* @__PURE__ */ q("span", {
					"aria-hidden": "true",
					"data-testid": "checkbox-control",
					"data-slot": "checkbox-control",
					className: Q(rj.control.base, A ? rj.control.invalid : void 0, u),
					style: d,
					children: _ ? /* @__PURE__ */ q("span", {
						className: rj.dash,
						"data-slot": "checkbox-indeterminate"
					}) : /* @__PURE__ */ q("span", {
						className: rj.check,
						"data-slot": "checkbox-check",
						children: /* @__PURE__ */ q(lD, {
							className: rj.checkIcon,
							strokeWidth: 2.6
						})
					})
				}),
				t ? /* @__PURE__ */ q("span", {
					className: Q(rj.textWrap, n ? "sr-only" : void 0),
					children: /* @__PURE__ */ J("span", {
						className: Q(rj.labelText, A ? rj.labelTextInvalid : void 0, I ? void 0 : "sr-only", f),
						children: [t, x && I ? /* @__PURE__ */ q("span", {
							"aria-hidden": "true",
							className: rj.required,
							children: "*"
						}) : null]
					})
				}) : null
			]
		})
	});
});
oj.displayName = "Checkbox", oD(oj);
//#endregion
//#region ../ui/src/lib/RadioGroup.tsx
var sj = (e, t) => [e, t].filter(Boolean).join(" ") || void 0, cj = {
	container: `${mS.container} min-w-0`,
	groupLabel: `${Dx} ${Tx}`,
	groupLabelInvalid: Ex,
	optionList: "grid min-w-0 gap-2",
	option: "inline-flex min-w-0 cursor-pointer items-start gap-[var(--pc-space-input-gap,0.625rem)]",
	optionDisabled: "cursor-not-allowed opacity-60",
	input: "peer sr-only",
	control: [
		"relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
		"[background:var(--pc-color-input-background,var(--pc-color-surface))]",
		"border-[var(--pc-color-input-border,var(--pc-color-border))]",
		mx,
		"peer-checked:border-[var(--pc-color-input-text,var(--pc-color-text))]",
		"peer-checked:[background:var(--pc-color-input-background,var(--pc-color-surface))]",
		"peer-disabled:[background:var(--pc-color-input-disabled-background,var(--pc-color-surface-weakest))]"
	].join(" "),
	controlInvalid: ["border-[var(--pc-color-input-invalid-border,var(--pc-color-input-border,var(--pc-color-danger-text)))]"].join(" "),
	dot: "h-2.5 w-2.5 rounded-full bg-[var(--pc-color-input-text,var(--pc-color-text))] opacity-0 transition-opacity peer-checked:opacity-100",
	textWrap: "min-w-0 flex-1",
	optionLabel: `block ${wx} text-[var(--pc-color-input-text,var(--pc-color-text))]`,
	optionDescription: Q(hS.helper, "mt-0.5 [--_pc-input-message-size:12px] [--_pc-input-message-line-height:16px]"),
	message: {
		error: hS.error,
		helper: hS.helper
	}
}, lj = /* @__PURE__ */ new Set([
	"controlClassName",
	"description",
	"descriptionClassName",
	"invalid",
	"label",
	"labelClassName"
]), uj = (e) => e ? Object.fromEntries(Object.entries(e).filter(([e]) => !lj.has(e))) : {}, dj = He(function({ label: e, description: t, className: n, controlClassName: r, labelClassName: i, descriptionClassName: a, disabled: o, invalid: s = !1, id: c, ...l }, u) {
	let d = uj(l);
	return /* @__PURE__ */ J("label", {
		htmlFor: c,
		className: Q(cj.option, o ? cj.optionDisabled : void 0, n),
		children: [
			/* @__PURE__ */ q("input", {
				...d,
				ref: u,
				id: c,
				type: "radio",
				disabled: o,
				className: cj.input
			}),
			/* @__PURE__ */ q("span", {
				"aria-hidden": "true",
				"data-testid": `radio-control-${String(d.value)}`,
				"data-slot": "radio-control",
				className: Q(cj.control, s ? cj.controlInvalid : void 0, r),
				children: /* @__PURE__ */ q("span", { className: cj.dot })
			}),
			/* @__PURE__ */ J("span", {
				className: cj.textWrap,
				children: [/* @__PURE__ */ q("span", {
					className: Q(cj.optionLabel, i),
					children: e
				}), t ? /* @__PURE__ */ q("span", {
					className: Q(cj.optionDescription, a),
					children: t
				}) : null]
			})
		]
	});
});
dj.displayName = "Radio";
function fj({ options: e, name: t, value: n, defaultValue: r, onChange: i, variant: a, label: o, helperText: s, error: c, containerClassName: l, className: u, optionClassName: d, labelClassName: f, messageClassName: p, helperClassName: m, errorClassName: h, required: g, disabled: _, reserveMessageSpace: v = !1, id: y }) {
	let b = Ke(), x = y ?? b, S = `${x}-label`, C = `${x}-message`, w = !!c, T = !!(c || s || v), { dataTheme: E } = qD({
		variant: a,
		hasError: w
	});
	return /* @__PURE__ */ J(WD, {
		baseClassName: cj.container,
		containerClassName: l,
		dataTheme: E,
		styles: cj.message,
		error: c,
		helper: s,
		messageClassName: p,
		helperClassName: m,
		errorClassName: h,
		reserveSpace: v,
		messageId: C,
		children: [o ? /* @__PURE__ */ q("span", {
			id: S,
			className: Q(cj.groupLabel, w ? cj.groupLabelInvalid : void 0, f),
			children: o
		}) : null, /* @__PURE__ */ q("div", {
			id: x,
			role: "radiogroup",
			"aria-labelledby": o ? S : void 0,
			"aria-describedby": T ? C : void 0,
			"aria-invalid": w ? !0 : void 0,
			"aria-required": g ? !0 : void 0,
			className: Q(cj.optionList, u),
			children: e.map((e) => {
				let a = `${x}-${e.value}`, o = _ || e.disabled;
				return /* @__PURE__ */ q(dj, {
					id: a,
					name: t,
					value: e.value,
					label: e.label,
					description: e.description,
					checked: n === void 0 ? void 0 : n === e.value,
					defaultChecked: n === void 0 && r !== void 0 ? r === e.value : void 0,
					required: g,
					disabled: o,
					invalid: w,
					"aria-describedby": sj(void 0, T ? C : void 0),
					onChange: i,
					className: d
				}, e.value);
			})
		})]
	});
}
oD(fj);
//#endregion
//#region ../../node_modules/credit-card-type/dist/lib/card-types.js
var pj = /* @__PURE__ */ s(((e, t) => {
	t.exports = {
		visa: {
			niceType: "Visa",
			type: "visa",
			patterns: [4],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		mastercard: {
			niceType: "Mastercard",
			type: "mastercard",
			patterns: [
				[51, 55],
				[2221, 2229],
				[223, 229],
				[23, 26],
				[270, 271],
				2720
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		"american-express": {
			niceType: "American Express",
			type: "american-express",
			patterns: [34, 37],
			gaps: [4, 10],
			lengths: [15],
			code: {
				name: "CID",
				size: 4
			}
		},
		"diners-club": {
			niceType: "Diners Club",
			type: "diners-club",
			patterns: [
				[300, 305],
				36,
				38,
				39
			],
			gaps: [4, 10],
			lengths: [
				14,
				16,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		discover: {
			niceType: "Discover",
			type: "discover",
			patterns: [
				6011,
				[644, 649],
				65
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16, 19],
			code: {
				name: "CID",
				size: 3
			}
		},
		jcb: {
			niceType: "JCB",
			type: "jcb",
			patterns: [
				2131,
				1800,
				[3528, 3589]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		unionpay: {
			niceType: "UnionPay",
			type: "unionpay",
			patterns: [
				620,
				[62100, 62182],
				[62184, 62187],
				[62185, 62197],
				[62200, 62205],
				[622010, 622999],
				622018,
				[62207, 62209],
				[623, 626],
				6270,
				6272,
				6276,
				[627700, 627779],
				[627781, 627799],
				[6282, 6289],
				6291,
				6292,
				810,
				[8110, 8131],
				[8132, 8151],
				[8152, 8163],
				[8164, 8171]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				14,
				15,
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVN",
				size: 3
			}
		},
		maestro: {
			niceType: "Maestro",
			type: "maestro",
			patterns: [
				493698,
				[5e5, 504174],
				[504176, 506698],
				[506779, 508999],
				[56, 59],
				63,
				67,
				6
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVC",
				size: 3
			}
		},
		elo: {
			niceType: "Elo",
			type: "elo",
			patterns: [
				401178,
				401179,
				438935,
				457631,
				457632,
				431274,
				451416,
				457393,
				504175,
				[506699, 506778],
				[509e3, 509999],
				627780,
				636297,
				636368,
				[650031, 650033],
				[650035, 650051],
				[650405, 650439],
				[650485, 650538],
				[650541, 650598],
				[650700, 650718],
				[650720, 650727],
				[650901, 650978],
				[651652, 651679],
				[655e3, 655019],
				[655021, 655058]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVE",
				size: 3
			}
		},
		mir: {
			niceType: "Mir",
			type: "mir",
			patterns: [[2200, 2204]],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVP2",
				size: 3
			}
		},
		hiper: {
			niceType: "Hiper",
			type: "hiper",
			patterns: [
				637095,
				63737423,
				63743358,
				637568,
				637599,
				637609,
				637612
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		hipercard: {
			niceType: "Hipercard",
			type: "hipercard",
			patterns: [606282],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		verve: {
			niceType: "Verve",
			type: "verve",
			patterns: [
				[506099, 506127],
				506129,
				[506133, 506150],
				[506158, 506163],
				506166,
				506168,
				506170,
				506173,
				[506176, 506180],
				506184,
				[506187, 506188],
				506191,
				506195,
				506197,
				507865,
				507866,
				[507868, 507877],
				[507880, 507888],
				507900,
				507941
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		}
	};
})), mj = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.clone = void 0;
	function t(e) {
		return e ? JSON.parse(JSON.stringify(e)) : null;
	}
	e.clone = t;
})), hj = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.matches = void 0;
	function t(e, t, n) {
		var r = String(t).length, i = e.substr(0, r), a = parseInt(i, 10);
		return t = parseInt(String(t).substr(0, i.length), 10), n = parseInt(String(n).substr(0, i.length), 10), a >= t && a <= n;
	}
	function n(e, t) {
		return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
	}
	function r(e, r) {
		return Array.isArray(r) ? t(e, r[0], r[1]) : n(e, r);
	}
	e.matches = r;
})), gj = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addMatchingCardsToResults = void 0;
	var t = mj(), n = hj();
	function r(e, r, i) {
		for (var a = 0, o; a < r.patterns.length; a++) {
			var s = r.patterns[a];
			if ((0, n.matches)(e, s)) {
				var c = (0, t.clone)(r);
				o = Array.isArray(s) ? String(s[0]).length : String(s).length, e.length >= o && (c.matchStrength = o), i.push(c);
				break;
			}
		}
	}
	e.addMatchingCardsToResults = r;
})), _j = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isValidInputType = void 0;
	function t(e) {
		return typeof e == "string" || e instanceof String;
	}
	e.isValidInputType = t;
})), vj = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.findBestMatch = void 0;
	function t(e) {
		var t = e.filter(function(e) {
			return e.matchStrength;
		}).length;
		return t > 0 && t === e.length;
	}
	function n(e) {
		return t(e) ? e.reduce(function(e, t) {
			return !e || Number(e.matchStrength) < Number(t.matchStrength) ? t : e;
		}) : null;
	}
	e.findBestMatch = n;
})), yj = /* @__PURE__ */ s(((e, t, n) => {
	var r = n && n.__assign || function() {
		return r = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, r.apply(this, arguments);
	}, i = pj(), a = gj(), o = _j(), s = vj(), c = mj(), l = {}, u = {
		VISA: "visa",
		MASTERCARD: "mastercard",
		AMERICAN_EXPRESS: "american-express",
		DINERS_CLUB: "diners-club",
		DISCOVER: "discover",
		JCB: "jcb",
		UNIONPAY: "unionpay",
		VERVE: "verve",
		MAESTRO: "maestro",
		ELO: "elo",
		MIR: "mir",
		HIPER: "hiper",
		HIPERCARD: "hipercard"
	}, d = [
		u.VISA,
		u.MASTERCARD,
		u.AMERICAN_EXPRESS,
		u.DINERS_CLUB,
		u.DISCOVER,
		u.JCB,
		u.UNIONPAY,
		u.VERVE,
		u.MAESTRO,
		u.ELO,
		u.MIR,
		u.HIPER,
		u.HIPERCARD
	], f = (0, c.clone)(d);
	function p(e) {
		return l[e] || i[e];
	}
	function m() {
		return f.map(function(e) {
			return (0, c.clone)(p(e));
		});
	}
	function h(e, t) {
		t === void 0 && (t = !1);
		var n = f.indexOf(e);
		if (!t && n === -1) throw Error("\"" + e + "\" is not a supported card type.");
		return n;
	}
	function g(e) {
		var t = [];
		if (!(0, o.isValidInputType)(e)) return t;
		if (e.length === 0) return m();
		f.forEach(function(n) {
			var r = p(n);
			(0, a.addMatchingCardsToResults)(e, r, t);
		});
		var n = (0, s.findBestMatch)(t);
		return n ? [n] : t;
	}
	g.getTypeInfo = function(e) {
		return (0, c.clone)(p(e));
	}, g.removeCard = function(e) {
		var t = h(e);
		f.splice(t, 1);
	}, g.addCard = function(e) {
		var t = h(e.type, !0);
		l[e.type] = e, t === -1 && f.push(e.type);
	}, g.updateCard = function(e, t) {
		var n = l[e] || i[e];
		if (!n) throw Error(`"${e}" is not a recognized type. Use \`addCard\` instead.'`);
		if (t.type && n.type !== t.type) throw Error("Cannot overwrite type parameter.");
		var a = (0, c.clone)(n);
		a = r(r({}, a), t), l[a.type] = a;
	}, g.changeOrder = function(e, t) {
		var n = h(e);
		f.splice(n, 1), f.splice(t, 0, e);
	}, g.resetModifications = function() {
		f = (0, c.clone)(d), l = {};
	}, g.types = u, t.exports = g;
}));
//#endregion
//#region ../../node_modules/comma-separated-tokens/index.js
function bj(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region ../../node_modules/estree-util-is-identifier-name/lib/index.js
var xj = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Sj = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Cj = {};
function wj(e, t) {
	return ((t || Cj).jsx ? Sj : xj).test(e);
}
//#endregion
//#region ../../node_modules/hast-util-whitespace/lib/index.js
var Tj = /[ \t\n\f\r]/g;
function Ej(e) {
	return typeof e == "object" ? e.type === "text" && Dj(e.value) : Dj(e);
}
function Dj(e) {
	return e.replace(Tj, "") === "";
}
//#endregion
//#region ../../node_modules/property-information/lib/util/schema.js
var Oj = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Oj.prototype.normal = {}, Oj.prototype.property = {}, Oj.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/merge.js
function kj(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Oj(n, r, t);
}
//#endregion
//#region ../../node_modules/property-information/lib/normalize.js
function Aj(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../../node_modules/property-information/lib/util/info.js
var jj = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
jj.prototype.attribute = "", jj.prototype.booleanish = !1, jj.prototype.boolean = !1, jj.prototype.commaOrSpaceSeparated = !1, jj.prototype.commaSeparated = !1, jj.prototype.defined = !1, jj.prototype.mustUseProperty = !1, jj.prototype.number = !1, jj.prototype.overloadedBoolean = !1, jj.prototype.property = "", jj.prototype.spaceSeparated = !1, jj.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/types.js
var Mj = /* @__PURE__ */ t({
	boolean: () => Pj,
	booleanish: () => Fj,
	commaOrSpaceSeparated: () => zj,
	commaSeparated: () => Rj,
	number: () => $,
	overloadedBoolean: () => Ij,
	spaceSeparated: () => Lj
}), Nj = 0, Pj = Bj(), Fj = Bj(), Ij = Bj(), $ = Bj(), Lj = Bj(), Rj = Bj(), zj = Bj();
function Bj() {
	return 2 ** ++Nj;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/defined-info.js
var Vj = Object.keys(Mj), Hj = class extends jj {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Uj(this, "space", r), typeof n == "number") for (; ++i < Vj.length;) {
			let e = Vj[i];
			Uj(this, Vj[i], (n & Mj[e]) === Mj[e]);
		}
	}
};
Hj.prototype.defined = !0;
function Uj(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../../node_modules/property-information/lib/util/create.js
function Wj(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Hj(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Aj(r)] = r, n[Aj(a.attribute)] = r;
	}
	return new Oj(t, n, e.space);
}
//#endregion
//#region ../../node_modules/property-information/lib/aria.js
var Gj = Wj({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: Fj,
		ariaAutoComplete: null,
		ariaBusy: Fj,
		ariaChecked: Fj,
		ariaColCount: $,
		ariaColIndex: $,
		ariaColSpan: $,
		ariaControls: Lj,
		ariaCurrent: null,
		ariaDescribedBy: Lj,
		ariaDetails: null,
		ariaDisabled: Fj,
		ariaDropEffect: Lj,
		ariaErrorMessage: null,
		ariaExpanded: Fj,
		ariaFlowTo: Lj,
		ariaGrabbed: Fj,
		ariaHasPopup: null,
		ariaHidden: Fj,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Lj,
		ariaLevel: $,
		ariaLive: null,
		ariaModal: Fj,
		ariaMultiLine: Fj,
		ariaMultiSelectable: Fj,
		ariaOrientation: null,
		ariaOwns: Lj,
		ariaPlaceholder: null,
		ariaPosInSet: $,
		ariaPressed: Fj,
		ariaReadOnly: Fj,
		ariaRelevant: null,
		ariaRequired: Fj,
		ariaRoleDescription: Lj,
		ariaRowCount: $,
		ariaRowIndex: $,
		ariaRowSpan: $,
		ariaSelected: Fj,
		ariaSetSize: $,
		ariaSort: null,
		ariaValueMax: $,
		ariaValueMin: $,
		ariaValueNow: $,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region ../../node_modules/property-information/lib/util/case-sensitive-transform.js
function Kj(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/case-insensitive-transform.js
function qj(e, t) {
	return Kj(e, t.toLowerCase());
}
//#endregion
//#region ../../node_modules/property-information/lib/html.js
var Jj = Wj({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: Rj,
		acceptCharset: Lj,
		accessKey: Lj,
		action: null,
		allow: null,
		allowFullScreen: Pj,
		allowPaymentRequest: Pj,
		allowUserMedia: Pj,
		alt: null,
		as: null,
		async: Pj,
		autoCapitalize: null,
		autoComplete: Lj,
		autoFocus: Pj,
		autoPlay: Pj,
		blocking: Lj,
		capture: null,
		charSet: null,
		checked: Pj,
		cite: null,
		className: Lj,
		cols: $,
		colSpan: null,
		content: null,
		contentEditable: Fj,
		controls: Pj,
		controlsList: Lj,
		coords: $ | Rj,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: Pj,
		defer: Pj,
		dir: null,
		dirName: null,
		disabled: Pj,
		download: Ij,
		draggable: Fj,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: Pj,
		formTarget: null,
		headers: Lj,
		height: $,
		hidden: Ij,
		high: $,
		href: null,
		hrefLang: null,
		htmlFor: Lj,
		httpEquiv: Lj,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: Pj,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: Pj,
		itemId: null,
		itemProp: Lj,
		itemRef: Lj,
		itemScope: Pj,
		itemType: Lj,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: Pj,
		low: $,
		manifest: null,
		max: null,
		maxLength: $,
		media: null,
		method: null,
		min: null,
		minLength: $,
		multiple: Pj,
		muted: Pj,
		name: null,
		nonce: null,
		noModule: Pj,
		noValidate: Pj,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: Pj,
		optimum: $,
		pattern: null,
		ping: Lj,
		placeholder: null,
		playsInline: Pj,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: Pj,
		referrerPolicy: null,
		rel: Lj,
		required: Pj,
		reversed: Pj,
		rows: $,
		rowSpan: $,
		sandbox: Lj,
		scope: null,
		scoped: Pj,
		seamless: Pj,
		selected: Pj,
		shadowRootClonable: Pj,
		shadowRootDelegatesFocus: Pj,
		shadowRootMode: null,
		shape: null,
		size: $,
		sizes: null,
		slot: null,
		span: $,
		spellCheck: Fj,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: $,
		step: null,
		style: null,
		tabIndex: $,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: Pj,
		useMap: null,
		value: Fj,
		width: $,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Lj,
		axis: null,
		background: null,
		bgColor: null,
		border: $,
		borderColor: null,
		bottomMargin: $,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: Pj,
		declare: Pj,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: $,
		leftMargin: $,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: $,
		marginWidth: $,
		noResize: Pj,
		noHref: Pj,
		noShade: Pj,
		noWrap: Pj,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: $,
		rules: null,
		scheme: null,
		scrolling: Fj,
		standby: null,
		summary: null,
		text: null,
		topMargin: $,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: $,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: Pj,
		disableRemotePlayback: Pj,
		prefix: null,
		property: null,
		results: $,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: qj
}), Yj = Wj({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: zj,
		accentHeight: $,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: $,
		amplitude: $,
		arabicForm: null,
		ascent: $,
		attributeName: null,
		attributeType: null,
		azimuth: $,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: $,
		by: null,
		calcMode: null,
		capHeight: $,
		className: Lj,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: $,
		diffuseConstant: $,
		direction: null,
		display: null,
		dur: null,
		divisor: $,
		dominantBaseline: null,
		download: Pj,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: $,
		enableBackground: null,
		end: null,
		event: null,
		exponent: $,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: $,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: Rj,
		g2: Rj,
		glyphName: Rj,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: $,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: $,
		horizOriginX: $,
		horizOriginY: $,
		id: null,
		ideographic: $,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: $,
		k: $,
		k1: $,
		k2: $,
		k3: $,
		k4: $,
		kernelMatrix: zj,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: $,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: $,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: $,
		overlineThickness: $,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: $,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: Lj,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: $,
		pointsAtY: $,
		pointsAtZ: $,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: zj,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: zj,
		rev: zj,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: zj,
		requiredFeatures: zj,
		requiredFonts: zj,
		requiredFormats: zj,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: $,
		specularExponent: $,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: $,
		strikethroughThickness: $,
		string: null,
		stroke: null,
		strokeDashArray: zj,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: $,
		strokeOpacity: $,
		strokeWidth: null,
		style: null,
		surfaceScale: $,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: zj,
		tabIndex: $,
		tableValues: null,
		target: null,
		targetX: $,
		targetY: $,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: zj,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: $,
		underlineThickness: $,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: $,
		values: null,
		vAlphabetic: $,
		vMathematical: $,
		vectorEffect: null,
		vHanging: $,
		vIdeographic: $,
		version: null,
		vertAdvY: $,
		vertOriginX: $,
		vertOriginY: $,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: $,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: Kj
}), Xj = Wj({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), Zj = Wj({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: qj
}), Qj = Wj({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), $j = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, eM = /[A-Z]/g, tM = /-[a-z]/g, nM = /^data[-\w.:]+$/i;
function rM(e, t) {
	let n = Aj(t), r = t, i = jj;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && nM.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(tM, aM);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!tM.test(e)) {
				let n = e.replace(eM, iM);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Hj;
	}
	return new i(r, t);
}
function iM(e) {
	return "-" + e.toLowerCase();
}
function aM(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../../node_modules/property-information/index.js
var oM = kj([
	Gj,
	Jj,
	Xj,
	Zj,
	Qj
], "html"), sM = kj([
	Gj,
	Yj,
	Xj,
	Zj,
	Qj
], "svg");
//#endregion
//#region ../../node_modules/space-separated-tokens/index.js
function cM(e) {
	return e.join(" ").trim();
}
//#endregion
//#region ../../node_modules/inline-style-parser/cjs/index.js
var lM = /* @__PURE__ */ s(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g;
	function u(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function f(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function p() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new m(e), _(), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		m.prototype.content = e;
		function h(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function g(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return f(r), e = e.slice(r.length), n;
			}
		}
		function _() {
			g(i);
		}
		function v(e) {
			var t;
			for (e ||= []; t = y();) t !== !1 && e.push(t);
			return e;
		}
		function y() {
			var t = p();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return h("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, f(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function b() {
			var e = p(), t = g(a);
			if (t) {
				if (y(), !g(o)) return h("property missing ':'");
				var r = g(s), i = e({
					type: "declaration",
					property: d(t[0].replace(n, "")),
					value: r ? d(r[0].replace(n, "")) : ""
				});
				return g(c), i;
			}
		}
		function x() {
			var e = [];
			v(e);
			for (var t; t = b();) t !== !1 && (e.push(t), v(e));
			return e;
		}
		return _(), x();
	}
	function d(e) {
		return e ? e.replace(l, "") : "";
	}
	t.exports = u;
})), uM = /* @__PURE__ */ s(((e, t, n) => {
	var r = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = a;
	var i = r(lM());
	function a(e, t) {
		let n = null;
		if (!e || typeof e != "string") return n;
		let r = (0, i.default)(e), a = typeof t == "function";
		return r.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: r, value: i } = e;
			a ? t(r, i, e) : i && (n ||= {}, n[r] = i);
		}), n;
	}
})), dM = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), fM = /* @__PURE__ */ s(((e, t, n) => {
	var r = (n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(uM()), i = dM();
	function a(e, t) {
		var n = {};
		return !e || typeof e != "string" || (0, r.default)(e, function(e, r) {
			e && r && (n[(0, i.camelCase)(e, t)] = r);
		}), n;
	}
	a.default = a, t.exports = a;
})), pM = hM("end"), mM = hM("start");
function hM(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function gM(e) {
	let t = mM(e), n = pM(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region ../../node_modules/hast-util-to-jsx-runtime/lib/index.js
var _M = /* @__PURE__ */ r(fM(), 1), vM = {}.hasOwnProperty, yM = /* @__PURE__ */ new Map(), bM = /[A-Z]/g, xM = /* @__PURE__ */ new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), SM = /* @__PURE__ */ new Set(["td", "th"]), CM = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function wM(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = FM(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = PM(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? sM : oM,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = TM(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function TM(e, t, n) {
	if (t.type === "element") return EM(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return DM(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return kM(e, t, n);
	if (t.type === "mdxjsEsm") return OM(e, t);
	if (t.type === "root") return AM(e, t, n);
	if (t.type === "text") return jM(e, t);
}
function EM(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = sM, e.schema = i), e.ancestors.push(t);
	let a = VM(e, t.tagName, !1), o = IM(e, t), s = RM(e, t);
	return xM.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e != "string" || !Ej(e);
	})), MM(e, o, a, t), NM(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function DM(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	HM(e, t.position);
}
function OM(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	HM(e, t.position);
}
function kM(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = sM, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : VM(e, t.name, !0), o = LM(e, t), s = RM(e, t);
	return MM(e, o, a, t), NM(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function AM(e, t, n) {
	let r = {};
	return NM(r, RM(e, t)), e.create(t, e.Fragment, r, n);
}
function jM(e, t) {
	return t.value;
}
function MM(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function NM(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function PM(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function FM(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = mM(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function IM(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && vM.call(t.properties, i)) {
		let a = zM(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && SM.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function LM(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") {
		if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let a = i.properties[0];
			a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
		} else HM(e, t.position);
	} else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") {
			if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, a = e.evaluater.evaluateExpression(t.expression);
			} else HM(e, t.position);
		} else a = r.value === null || r.value;
		n[i] = a;
	}
	return n;
}
function RM(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : yM;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = TM(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function zM(e, t, n) {
	let r = rM(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? bj(n) : cM(n)), r.property === "style") {
			let t = typeof n == "object" ? n : BM(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = UM(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? $j[r.property] || r.property : r.attribute, n];
	}
}
function BM(e, t) {
	try {
		return (0, _M.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new yo("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = CM + "#cannot-parse-style-attribute", r;
	}
}
function VM(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = wj(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = wj(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return vM.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	HM(e);
}
function HM(e, t) {
	let n = new yo("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = CM + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function UM(e) {
	let t = {}, n;
	for (n in e) vM.call(e, n) && (t[WM(n)] = e[n]);
	return t;
}
function WM(e) {
	let t = e.replace(bM, GM);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function GM(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region ../../node_modules/html-url-attributes/lib/index.js
var KM = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
};
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function qM(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/break.js
function JM(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/code.js
function YM(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/delete.js
function XM(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function ZM(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function QM(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Ts(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/heading.js
function $M(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/html.js
function eN(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/revert.js
function tN(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function nN(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return tN(e, t);
	let i = {
		src: Ts(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/image.js
function rN(e, t) {
	let n = { src: Ts(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function iN(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function aN(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return tN(e, t);
	let i = { href: Ts(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/link.js
function oN(e, t) {
	let n = { href: Ts(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function sN(e, t, n) {
	let r = e.all(t), i = n ? cN(n) : lN(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function cN(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = lN(n[r]);
	}
	return t;
}
function lN(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/list.js
function uN(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function dN(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/root.js
function fN(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/strong.js
function pN(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table.js
function mN(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = mM(t.children[1]), o = pM(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function hN(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function gN(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/trim-lines/index.js
var _N = 9, vN = 32;
function yN(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(bN(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(bN(t.slice(i), i > 0, !1)), a.join("");
}
function bN(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === _N || t === vN;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === _N || t === vN;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/text.js
function xN(e, t) {
	let n = {
		type: "text",
		value: yN(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function SN(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/index.js
var CN = {
	blockquote: qM,
	break: JM,
	code: YM,
	delete: XM,
	emphasis: ZM,
	footnoteReference: QM,
	heading: $M,
	html: eN,
	imageReference: nN,
	image: rN,
	inlineCode: iN,
	linkReference: aN,
	link: oN,
	listItem: sN,
	list: uN,
	paragraph: dN,
	root: fN,
	strong: pN,
	table: mN,
	tableCell: gN,
	tableRow: hN,
	text: xN,
	thematicBreak: SN,
	toml: wN,
	yaml: wN,
	definition: wN,
	footnoteDefinition: wN
};
function wN() {}
//#endregion
//#region ../../node_modules/@ungap/structured-clone/esm/deserialize.js
var TN = typeof self == "object" ? self : globalThis, EN = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new TN[e](t);
}, DN = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(EN(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(EN(a, o), i);
	};
	return r;
}, ON = (e) => DN(/* @__PURE__ */ new Map(), e)(0), kN = "", { toString: AN } = {}, { keys: jN } = Object, MN = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = AN.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, kN];
		case "Object": return [2, kN];
		case "Date": return [3, kN];
		case "RegExp": return [4, kN];
		case "Map": return [5, kN];
		case "Set": return [6, kN];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, NN = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), PN = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = MN(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of jN(r)) (e || !NN(MN(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(NN(MN(n)) || NN(MN(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !NN(MN(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, FN = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return PN(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, IN = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? ON(FN(e, t)) : structuredClone(e) : (e, t) => ON(FN(e, t));
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/footer.js
function LN(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function RN(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function zN(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || LN, r = e.options.footnoteBackLabel || RN, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Ts(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...IN(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/state.js
var BN = {}.hasOwnProperty, VN = {};
function HN(e, t) {
	let n = t || VN, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: WN,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...CN,
			...n.handlers
		},
		one: o,
		options: n,
		patch: UN,
		wrap: KN
	};
	return Ed(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (BN.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = IN(n);
				return r.children = a.all(e), r;
			}
			return IN(e);
		}
		return (a.options.unknownHandler || GN)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = qN(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = qN(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function UN(e, t) {
	e.position && (t.position = gM(e));
}
function WN(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, IN(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function GN(e, t) {
	let n = t.data || {}, r = "value" in t && !(BN.call(n, "hProperties") || BN.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function KN(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function qN(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/index.js
function JN(e, t) {
	let n = HN(e, t), r = n.one(e, void 0), i = zN(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region ../../node_modules/remark-rehype/lib/index.js
function YN(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = JN(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return JN(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../../node_modules/react-markdown/lib/index.js
var XN = [], ZN = { allowDangerousHtml: !0 }, QN = /^(https?|ircs?|mailto|xmpp)$/i, $N = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function eP(e) {
	let t = tP(e), n = nP(e);
	return rP(t.runSync(t.parse(n), n), e);
}
function tP(e) {
	let t = e.rehypePlugins || XN, n = e.remarkPlugins || XN, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...ZN
	} : ZN;
	return Vo().use(Ql).use(n).use(YN, r).use(t);
}
function nP(e) {
	let t = e.children || "", n = new Po();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function rP(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || iP;
	for (let e of $N) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Ed(e, l), wM(e, {
		Fragment: Ze,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: q,
		jsxs: J,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in KM) if (Object.hasOwn(KM, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = KM[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function iP(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || QN.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region ../ui/src/lib/markdown/extractText.ts
var aP = /* @__PURE__ */ r(yj(), 1), oP = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(oP).join("") : Ue(e) ? oP(e.props.children ?? "") : "", sP = ({ children: e, textToCopy: t, preProps: n }) => {
	let { status: r, copy: i } = fO(), a = /* @__PURE__ */ q(mD, {});
	return r === "copied" ? a = /* @__PURE__ */ q(lD, {}) : r === "error" && (a = /* @__PURE__ */ q(sD, {})), /* @__PURE__ */ J(zv, {
		variant: "surface",
		size: "flush",
		"data-theme": "neutral",
		className: "relative max-w-full",
		children: [/* @__PURE__ */ q("span", {
			className: "absolute right-2 top-2",
			children: /* @__PURE__ */ q(Pv, {
				type: "button",
				variant: "neutral",
				size: "xs",
				"aria-label": "Copy code block",
				onClick: () => {
					i(t);
				},
				disabled: !t,
				iconOnly: !0,
				label: "Copy code block",
				leadingIcon: a
			})
		}), /* @__PURE__ */ q("pre", {
			className: "max-w-full overflow-x-auto whitespace-pre p-4 font-mono text-sm",
			...n,
			children: e
		})]
	});
}, cP = (e) => {
	if (!e) return null;
	let t = e.match(/language-([\w-]+)/);
	return t ? t[1] : null;
}, lP = (e) => (t) => {
	let { inline: n, children: r, className: i, node: a, ...o } = t, s = oP(r), c = cP(i), l = o, u = s.includes("\n");
	return n ?? (!c && !u) ? Ve(jA, {
		...o,
		as: "code",
		theme: "neutral"
	}, r) : e ? e({
		children: r,
		textToCopy: s,
		preProps: l,
		language: c
	}) : /* @__PURE__ */ q(sP, {
		textToCopy: s,
		preProps: l,
		children: r
	});
}, uP = lP(), dP = (e, t) => ({ children: n, node: r, ...i }) => Ve(e, {
	...i,
	className: Q("font-semibold", t)
}, n), fP = "inline text-[var(--pc-color-text)] underline underline-offset-2", pP = () => /* @__PURE__ */ q("span", {
	"aria-hidden": "true",
	className: "ml-1 inline-flex align-middle",
	children: /* @__PURE__ */ q(gD, {})
}), mP = [
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"table",
	"thead",
	"tbody",
	"tr",
	"th",
	"td",
	"del",
	"ul",
	"ol",
	"li",
	"strong",
	"em",
	"code",
	"pre",
	"blockquote",
	"hr",
	"a",
	"br"
], hP = (e) => {
	try {
		let t = new URL(e);
		return t.protocol === "https:" || t.protocol === "http:" ? t.href : "";
	} catch {
		return "";
	}
}, gP = ({ children: e, href: t }) => t ? /* @__PURE__ */ J("a", {
	className: fP,
	href: t,
	target: "_blank",
	rel: "noopener noreferrer",
	children: [e, /* @__PURE__ */ q(pP, {})]
}) : /* @__PURE__ */ q("span", { children: e }), _P = {
	h1: dP("h2", "text-xl"),
	h2: dP("h3", "text-lg"),
	pre: ({ children: e }) => e,
	a: ({ children: e, node: t, ...n }) => /* @__PURE__ */ J("a", {
		className: fP,
		target: "_blank",
		rel: "noreferrer noopener",
		...n,
		children: [e, /* @__PURE__ */ q(pP, {})]
	}),
	h3: dP("h4"),
	h4: dP("h5"),
	h5: dP("h6"),
	h6: dP("h6"),
	p: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ q("p", {
		...r,
		className: Q("text-sm @md:text-base text-[var(--pc-color-text-muted)]", n),
		children: e
	}),
	strong: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ q("strong", {
		...r,
		className: Q("font-medium text-[var(--pc-color-text)]", n),
		children: e
	}),
	ul: ({ children: e, node: t, ...n }) => /* @__PURE__ */ q("ul", {
		className: "list-disc pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		...n,
		children: e
	}),
	ol: ({ children: e, node: t, ...n }) => /* @__PURE__ */ q("ol", {
		className: "list-decimal pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		style: { listStyleType: "decimal" },
		type: "1",
		...n,
		children: e
	}),
	li: ({ children: e, ...t }) => {
		let { className: n, ...r } = t, i = Fe.toArray(e).some((e) => Ue(e) && e.type === "a"), a = [
			"text-sm @md:text-base",
			"text-[var(--pc-color-text-muted)]",
			"[&>p:first-child]:inline",
			"[&>p+p]:mt-2",
			"[&>p+ul]:mt-2 [&>p+ol]:mt-2 [&>p+pre]:mt-2 [&>p+table]:mt-2",
			"[&>ul+p]:mt-2 [&>ol+p]:mt-2 [&>pre+p]:mt-2 [&>table+p]:mt-2",
			"[&>ul+pre]:mt-2 [&>ol+pre]:mt-2 [&>pre+ul]:mt-2 [&>pre+ol]:mt-2"
		], o = i ? "transition-colors" : void 0;
		return /* @__PURE__ */ q("li", {
			...r,
			className: Q(a, o, n),
			children: e
		});
	},
	code: uP
}, vP = (e, t) => ({
	..._P,
	code: t?.codeBlockRenderer ? lP(t.codeBlockRenderer) : _P.code,
	...e ?? {}
}), yP = function(e) {
	zp.call(this, e);
	let t = this.data(), n = (e) => Array.isArray(e) ? e.flatMap(n) : [e];
	t.fromMarkdownExtensions = t.fromMarkdownExtensions?.flatMap(n).filter((e) => !(e && typeof e == "object" && "enter" in e && e.enter && typeof e.enter == "object" && "literalAutolink" in e.enter)), t.micromarkExtensions?.push({ disable: { null: [
		"wwwAutolink",
		"protocolAutolink",
		"emailAutolink"
	] } });
};
function bP({ content: e, autolinkLiterals: t = !0, components: n, className: r, codeBlockRenderer: i, remarkPlugins: a, trust: o = "trusted" }) {
	let s = vP(n, { codeBlockRenderer: i }), c = o === "untrusted";
	return /* @__PURE__ */ q("div", {
		className: Q("w-full max-w-full min-w-0", "[&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words [&_h5]:break-words [&_h6]:break-words", "[&_p]:break-words [&_li]:break-words [&_a]:break-words [&_code]:break-words", "[&_h1]:mt-8 [&_h1:first-child]:mt-0", "[&_h2]:mt-7 [&_h2:first-child]:mt-0", "[&_h3]:mt-5 [&_h3:first-child]:mt-0", "[&_h4]:mt-5 [&_h4:first-child]:mt-0", "[&_h5]:mt-4 [&_h5:first-child]:mt-0", "[&_h6]:mt-4 [&_h6:first-child]:mt-0", "[&_h1+h1]:mt-3 [&_h1+h2]:mt-3", "[&_h2+h2]:mt-3 [&_h2+h3]:mt-3", "[&_h3+h3]:mt-2 [&_h3+h4]:mt-2", "[&_h4+h4]:mt-2 [&_h4+h5]:mt-2", "[&_h5+h5]:mt-2 [&_h5+h6]:mt-2", "[&_h6+h6]:mt-2", "[&_h1+*]:mt-2 [&_h2+*]:mt-2 [&_h3+*]:mt-2 [&_h4+*]:mt-2 [&_h5+*]:mt-2 [&_h6+*]:mt-2", "[&_h3+p]:mt-1.5", "[&_p+p]:mt-2 [&_p+ul]:mt-2 [&_p+ol]:mt-2 [&_p+pre]:mt-2 [&_p+table]:mt-2", "[&_ul+p]:mt-2 [&_ol+p]:mt-2 [&_pre+p]:mt-2 [&_table+p]:mt-2", "[&_ul+pre]:mt-2 [&_ol+pre]:mt-2 [&_pre+ul]:mt-2 [&_pre+ol]:mt-2", r),
		children: /* @__PURE__ */ q(eP, {
			remarkPlugins: [t ? zp : yP, ...a ?? []],
			components: c ? {
				...s,
				a: gP
			} : s,
			allowedElements: c ? mP : void 0,
			skipHtml: c,
			urlTransform: c ? hP : void 0,
			children: e
		})
	});
}
//#endregion
//#region ../ui/src/lib/cashierFormLayout.ts
var xP = [
	"grid",
	"grid-cols-1",
	"items-start",
	"gap-x-2",
	"gap-y-3"
].join(" ");
[
	"pt-3.5",
	"pr-3",
	"pb-3.5",
	"pl-3"
].join(" ");
var SP = "mt-3", CP = /* @__PURE__ */ new Set([
	"american-express",
	"diners-club",
	"discover",
	"elo",
	"hiper",
	"hipercard",
	"jcb",
	"maestro",
	"mastercard",
	"mir",
	"unionpay",
	"verve",
	"visa"
]), wP = (e) => {
	if (e) return CP.has(e) ? e : void 0;
}, TP = (e) => {
	let t = e?.trim();
	if (!t) return;
	let n = (0, aP.default)(t);
	if (n.length === 0) return;
	let r = n[0];
	return (r.matchStrength ?? 0) <= 0 ? void 0 : wP(typeof r.type == "string" ? r.type : void 0);
}, EP = "--hf-font-family", DP = "color-mix(in srgb, var(--pc-color-secondary) 35%, white)", OP = "color-mix(in srgb, var(--pc-color-secondary) 12%, white)", kP = (e) => e.startsWith("--") ? e : `--${e}`, AP = (e) => typeof e == "string" && e.trim() || null, jP = (e) => typeof e == "number" || typeof e == "string" && e.trim().length > 0, MP = (e) => {
	let t = e.trim(), n = ee.exec(t);
	if (n) {
		let e = n[1];
		return {
			red: parseInt(e.slice(0, 2), 16),
			green: parseInt(e.slice(2, 4), 16),
			blue: parseInt(e.slice(4, 6), 16)
		};
	}
	let r = C.exec(t);
	if (!r) return null;
	let [i, a, o] = r[1].split("").map((e) => parseInt(`${e}${e}`, 16));
	return {
		red: i,
		green: a,
		blue: o
	};
}, NP = ({ red: e, green: t, blue: n }) => {
	let r = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, i = r(e), a = r(t), o = r(n);
	return .2126 * i + .7152 * a + .0722 * o;
}, PP = (e, t) => {
	let n = Math.max(e, t), r = Math.min(e, t);
	return (n + .05) / (r + .05);
}, FP = (e) => {
	let t = MP(e);
	if (!t) return null;
	let n = NP(t);
	return PP(n, 0) >= PP(1, n) ? "#000000" : "#ffffff";
}, IP = (e, t = {}) => {
	if (!e) return {};
	let n = {}, r = Object.entries(e);
	for (let [e, i] of r) {
		let r = e.trim();
		if (r && (typeof i == "string" || typeof i == "number")) {
			if (r === "fontFamily") {
				let e = AP(i);
				e && (n.fontFamily = e, t.includeHostedFieldsFontFamily && (n[EP] = e));
			} else if (typeof i == "string") {
				let e = i.trim();
				if (!e) continue;
				n[kP(r)] = e;
			} else n[kP(r)] = i;
		}
	}
	if (jP(n["--pc-color-text"]) && !jP(n["--pc-color-neutral-text"]) && (n["--pc-color-neutral-text"] = t.neutralTextFallback === "reference" ? "var(--pc-color-text)" : n["--pc-color-text"]), jP(n["--pc-color-secondary"]) && !jP(n["--pc-color-secondary-lighter"]) && (n["--pc-color-secondary-lighter"] = DP), jP(n["--pc-color-secondary"]) && !jP(n["--pc-color-secondary-lightest"]) && (n["--pc-color-secondary-lightest"] = OP), !jP(n["--pc-color-accent-text"])) {
		let e = n["--pc-color-secondary-text"];
		if (typeof e == "string") n["--pc-color-accent-text"] = e;
		else {
			let e = n["--pc-color-accent"] ?? n["--pc-color-secondary"];
			if (typeof e == "string") {
				let t = FP(e);
				t && (n["--pc-color-accent-text"] = t);
			}
		}
	}
	return n;
}, LP = ":root", RP = /@import\b/iu, zP = /url\(\s*(['"]?)(.*?)\1\s*\)/giu, BP = /url\(/iu, VP = /\\/u, HP = /[{}<>]|\/\*|\*\/|@/u, UP = /[{}<>]|\/\*|\*\//u, WP = /^-?[_a-zA-Z][-_a-zA-Z0-9]*$/, GP = /^--[-_a-zA-Z0-9]+$/, KP = {
	...Object.fromEntries(Object.entries(i).map(([e, t]) => [t.replace(/^pc-ui__/u, ""), t]).filter(([e]) => e !== "field")),
	input: i.field,
	toggle: i.field
}, qP = Object.keys(KP).sort((e, t) => t.length - e.length), JP = o.filter((e) => e !== "default"), YP = [
	"american-express",
	"diners-club",
	"discover",
	"elo",
	"hiper",
	"hipercard",
	"jcb",
	"maestro",
	"mastercard",
	"mir",
	"unionpay",
	"verve",
	"visa"
], XP = [...JP, ...YP], ZP = RegExp(`^--pc-(color|space|size|radius|shadow|font|motion|opacity|z)-(${qP.join("|")})-(${XP.join("|")})-([a-z0-9]+(?:-[a-z0-9]+)*)\$`, "u"), QP = RegExp(`^--pc-(?:color|space|size|radius|shadow|font|motion|opacity|z)-(${qP.join("|")})(?:-[a-z0-9]+(?:-[a-z0-9]+)*)?\$`, "u"), $P = {
	"--pc-font-line-height-input": i.field,
	"--pc-font-size-input": i.field,
	"--pc-size-checkbox": i.field
}, eF = (e) => typeof e == "string" ? e.trim() : "", tF = (e) => GP.test(e) || WP.test(e), nF = (e) => e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), rF = (e) => {
	if (RP.test(e)) throw Error("brand.css rejects @import rules.");
}, iF = (e) => {
	zP.lastIndex = 0;
	for (let t of e.matchAll(zP)) {
		let e = t[2].trim();
		if (e.length > 0 && !e.startsWith("data:") && !e.startsWith("#")) throw Error("brand.css rejects external url(...) fetches.");
	}
	if (zP.lastIndex = 0, BP.test(e.replace(zP, ""))) throw Error("brand.css rejects external url(...) fetches.");
}, aF = (e, t) => {
	if (VP.test(e)) throw Error(`brand.css rejects CSS escape sequences in ${t}.`);
}, oF = (e) => {
	if (HP.test(e)) throw Error("brand.css rejects selector keys containing block delimiters, HTML characters, comments, or at-rules.");
}, sF = (e) => {
	if (UP.test(e)) throw Error("brand.css rejects declaration values containing block delimiters, HTML characters, or comments.");
}, cF = (e, t, n = !0) => {
	if (aF(e, "declaration names"), !tF(e)) return null;
	let r = String(t).trim();
	if (!r) return null;
	rF(r), aF(r, "declaration values"), iF(r), sF(r);
	let i = nF(e), a = `${i}:${r};`;
	return n && i.startsWith("--pc-color-input-") ? `${a}--_pc-explicit-input-${i.slice(17)}:${r};` : a;
}, lF = (e, t) => {
	let n = e.trim();
	return rF(n), aF(n, "selector keys"), iF(n), oF(n), n ? n.includes("&") ? n.replaceAll("&", t) : `:where(${t}) ${n}` : "";
}, uF = (e) => {
	let t = [], n = 0, r = 0, i = 0, a = null;
	for (let o = 0; o < e.length; o += 1) {
		let s = e[o], c = o > 0 ? e[o - 1] : "";
		a ? s === a && c !== "\\" && (a = null) : s === "\"" || s === "'" ? a = s : s === "[" ? r += 1 : s === "]" ? r = Math.max(0, r - 1) : s === "(" ? i += 1 : s === ")" ? i = Math.max(0, i - 1) : s === "," && r === 0 && i === 0 && (t.push(e.slice(n, o)), n = o + 1);
	}
	return t.push(e.slice(n)), t;
}, dF = (e, t) => uF(e).map((e) => lF(e, t)).filter(Boolean).join(","), fF = (e, t = {}) => {
	if (!e) return "";
	let n = t.scopeSelector ?? LP;
	oF(n);
	let r = [];
	for (let [t, i] of Object.entries(e)) {
		let e = dF(t, n);
		if (!e || !i) continue;
		let a = Object.entries(i).flatMap(([e, t]) => typeof t == "string" || typeof t == "number" ? [cF(e, t)] : []).filter((e) => e !== null).join("");
		a && r.push(`${e}{${a}}`);
	}
	return r.join("\n");
}, pF = (e, t, n) => {
	let r = [`:where(${e}) .${t}[data-theme="${n}"]`, `:where(${e}) [data-theme="${n}"] .${t}:not([data-theme])`];
	return t === i.field ? r.join(",") : [
		...r,
		`:where(${e}) .${t}[data-pc-variant="${n}"]`,
		`:where(${e}) [data-pc-variant="${n}"] .${t}:not([data-pc-variant])`
	].join(",");
}, mF = (e, t, n, r) => e === "color" && t === "input" && n === "danger" && r === "border" ? "--pc-color-input-invalid-border" : e === "color" && t === "input" && n === "danger" && r === "focus-ring" ? "--pc-color-input-invalid-focus-ring" : `--pc-${e}-${t}-${r}`, hF = (e, t = {}) => {
	let n = t.scopeSelector ?? LP, r = /* @__PURE__ */ new Map();
	for (let t of Object.keys(e)) {
		let e = ZP.exec(t);
		if (!e) continue;
		let [, i, a, o, s] = e, c = KP[a];
		if (!c) continue;
		let l = pF(n, c, o), u = mF(i, a, o, s), d = [`${u}:var(${t});`];
		i === "color" && a === "input" && d.push(`--_pc-explicit-input-${u.slice(17)}:var(${t});`), i === "color" && a === "panel" && s === "text" && d.push(`--pc-color-text:var(${t});`, `--pc-color-text-muted:color-mix(in srgb,var(${t}) 75%,transparent 25%);`);
		let f = r.get(l) ?? [];
		f.push(...d), r.set(l, f);
	}
	return Array.from(r.entries()).map(([e, t]) => `${e}{${t.join("")}}`).join("\n");
}, gF = (e, t = {}) => {
	let n = t.scopeSelector ?? LP, r = /* @__PURE__ */ new Map(), i = [];
	for (let [t, a] of Object.entries(e)) {
		if (typeof a != "string" && typeof a != "number" || ZP.test(t)) continue;
		let e = QP.exec(t)?.[1], o = $P[t] ?? (e ? KP[e] : void 0);
		if (!o) continue;
		let s = cF(t, a, !1);
		if (!s) continue;
		t.startsWith("--pc-color-input-") && i.push(`--_pc-explicit-input-${t.slice(17)}:${String(a).trim()};`);
		let c = `:where(${n}) .${o}`, l = r.get(c) ?? [];
		l.push(s), r.set(c, l);
	}
	return [...i.length > 0 ? [`:where(${n}){${i.join("")}}`] : [], ...Array.from(r.entries()).map(([e, t]) => `${e}{${t.join("")}}`)].join("\n");
}, _F = (e, t = {}) => {
	let r = {
		...IP(n(e ?? void 0), t),
		...IP(e, t)
	};
	return {
		variables: r,
		cssText: [
			eF(t.cssUrlText),
			gF(r, { scopeSelector: t.scopeSelector }),
			hF(r, { scopeSelector: t.scopeSelector }),
			fF(e?.css, { scopeSelector: t.scopeSelector })
		].filter(Boolean).join("\n"),
		brand: e ?? null
	};
};
["relative z-10 grid grid-cols-2 items-start gap-2 p-1"].join(" ");
//#endregion
//#region ../ui/src/lib/ContentCollection.tsx
var vF = (e) => ({
	variant: e.variant ?? "neutral",
	appearance: e.appearance === "plain" ? "ghost" : e.appearance,
	chrome: e.appearance !== "plain",
	size: e.size ?? "md",
	alignment: e.alignment ?? "start",
	layout: e.layout ?? "row"
});
function yF({ children: e, attributes: t, layout: n = "row", alignment: r = "start" }) {
	return /* @__PURE__ */ q("ul", {
		...t,
		"data-layout": n,
		className: Y("flex min-w-0 gap-x-6 gap-y-2 font-medium", n === "stack" ? "flex-col" : "flex-wrap", r === "centre" && "justify-center text-center", r === "end" && "justify-end text-end", r === "start" && "text-start"),
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/CircularProgress.tsx
var bF = 44, xF = "0 0 44 44", SF = 4, CF = "var(--pc-color-circular-progress-track,var(--pc-color-depth-4))", wF = "var(--pc-color-circular-progress-indicator,var(--pc-color-success))", TF = (e, t, n) => Math.min(Math.max(e, t), n);
function EF({ value: e, max: t = 100, strokeWidth: n = SF, className: r, contentClassName: i, trackColor: o = CF, indicatorColor: s = wF, ariaLabel: c, children: l }) {
	let u = Number.isFinite(t) && t > 0 ? t : 100, d = Number.isFinite(e) ? TF(e, 0, u) : 0, f = TF(n, 1.5, 10), p = (bF - f) / 2, m = 2 * Math.PI * p, h = m * (1 - d / u);
	return /* @__PURE__ */ J("div", {
		"data-slot": "circular-progress",
		role: c ? "progressbar" : void 0,
		"aria-label": c,
		"aria-hidden": c ? void 0 : "true",
		"aria-valuemin": c ? 0 : void 0,
		"aria-valuemax": c ? u : void 0,
		"aria-valuenow": c ? Math.round(d) : void 0,
		className: Y(a("circularProgress"), "relative block h-full w-full", r),
		children: [/* @__PURE__ */ J("svg", {
			viewBox: xF,
			className: "block h-full w-full -rotate-90 overflow-visible",
			children: [/* @__PURE__ */ q("circle", {
				cx: bF / 2,
				cy: bF / 2,
				r: p,
				fill: "none",
				stroke: o,
				strokeWidth: f
			}), /* @__PURE__ */ q("circle", {
				cx: bF / 2,
				cy: bF / 2,
				r: p,
				fill: "none",
				stroke: s,
				strokeWidth: f,
				strokeLinecap: "round",
				strokeDasharray: m,
				strokeDashoffset: h,
				className: Y("transition-[stroke-dashoffset] duration-500", "ease-[cubic-bezier(0.22,1,0.36,1)]", "will-change-[stroke-dashoffset]")
			})]
		}), l && /* @__PURE__ */ q("div", {
			"data-slot": "circular-progress-content",
			className: Y("absolute inset-[18%] flex items-center justify-center", i),
			children: l
		})]
	});
}
//#endregion
//#region ../ui/src/lib/InteractivePrompt.tsx
var DF = {
	solid: "[background:var(--pc-color-interactive-prompt-background,var(--pc-color-surface))]",
	outline: "[background:var(--pc-color-interactive-prompt-background,var(--pc-color-surface))]",
	muted: "[background:var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest))]",
	ghost: "[background:var(--pc-color-interactive-prompt-background,var(--pc-color-transparent))]"
}, OF = {
	solid: "border-[var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))]",
	outline: "border-[var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))]",
	muted: "border-[var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest)))]",
	ghost: "border-[var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-transparent)))]"
}, kF = {
	solid: "outline-[var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))]",
	outline: "outline-[var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))]",
	muted: "outline-[var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest)))]",
	ghost: "outline-[var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-transparent)))]"
}, AF = {
	solid: "text-[var(--pc-color-interactive-prompt-background,var(--pc-color-surface))]",
	outline: "text-[var(--pc-color-interactive-prompt-background,var(--pc-color-surface))]",
	muted: "text-[var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest))]",
	ghost: "text-[var(--pc-color-interactive-prompt-background,var(--pc-color-transparent))]"
}, jF = {
	xl: "-left-[1.1rem] top-1/2 h-[3.75rem] w-[1.1rem] -translate-y-1/2",
	lg: "-left-[0.9rem] top-1/2 h-[3rem] w-[0.9rem] -translate-y-1/2",
	md: "-left-[0.85rem] top-1/2 h-[2.85rem] w-[0.85rem] -translate-y-1/2",
	sm: "-left-[0.75rem] top-1/2 h-[2.55rem] w-[0.75rem] -translate-y-1/2",
	xs: "-left-[0.7rem] top-1/2 h-[2.25rem] w-[0.7rem] -translate-y-1/2"
}, MF = {
	xl: "rounded-[calc(var(--pc-radius-xl)+0.65rem)]",
	lg: "rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	md: "rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	sm: "rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	xs: "rounded-[calc(var(--pc-radius-lg)+0.05rem)]"
}, NF = "M32 31C23 36 13 44 5 48Q2.5 50 5 52C13 56 23 64 32 69", PF = `${NF}Z`, FF = {
	xl: "p-[1.375rem]",
	lg: "py-2.5 px-2.5",
	md: "p-3.5",
	sm: "py-2.5 px-2.5",
	xs: "p-2.5"
}, IF = {
	xl: "@max-sm/interactive-prompt:p-[1.125rem]",
	lg: "",
	md: "@max-sm/interactive-prompt:p-3",
	sm: "@max-sm/interactive-prompt:p-2.5",
	xs: ""
}, LF = {
	xl: "lg",
	lg: "md",
	md: "md",
	sm: "sm",
	xs: "xs"
}, RF = {
	xl: "xs",
	lg: "xs",
	md: "xs",
	sm: "xs",
	xs: "xs"
}, zF = {
	xl: "ml-[3.25rem]",
	lg: "ml-[3.25rem]",
	md: "ml-[3.25rem]",
	sm: "ml-[3rem]",
	xs: "ml-[2.5rem]"
}, BF = {
	xl: "lg",
	lg: "md",
	md: "sm",
	sm: "xs",
	xs: "xs"
}, VF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, HF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, UF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, WF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, GF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, KF = {
	md: "",
	sm: "",
	xs: "",
	lg: "",
	xl: ""
}, qF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, JF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, YF = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, XF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, ZF = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, QF = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, $F = {
	xl: "@max-sm/interactive-prompt:!px-5 @max-sm/interactive-prompt:!py-2.5 @max-sm/interactive-prompt:!text-base",
	lg: "@max-sm/interactive-prompt:!px-3.5 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-base",
	md: "@max-sm/interactive-prompt:!px-3 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-sm",
	sm: "@max-sm/interactive-prompt:!px-2.5 @max-sm/interactive-prompt:!py-1 @max-sm/interactive-prompt:!text-xs",
	xs: ""
}, eI = {
	xl: "@max-sm/interactive-prompt:ml-[3.25rem]",
	lg: "@max-sm/interactive-prompt:ml-[3.25rem]",
	md: "@max-sm/interactive-prompt:ml-[3.25rem]",
	sm: "@max-sm/interactive-prompt:ml-[3rem]",
	xs: "@max-sm/interactive-prompt:ml-[2.5rem]"
}, tI = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, nI = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, rI = "mt-2 @max-sm/interactive-prompt:mt-2.5", iI = "gap-2 @max-sm/interactive-prompt:gap-1.5", aI = {
	xl: "leading-6",
	lg: "leading-6",
	md: "leading-5",
	sm: "leading-5",
	xs: "leading-4"
}, oI = {
	xl: "@max-sm/interactive-prompt:leading-6",
	lg: "@max-xs/interactive-prompt:leading-4",
	md: "@max-xs/interactive-prompt:leading-4",
	sm: "@max-sm/interactive-prompt:leading-4",
	xs: ""
}, sI = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, cI = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, lI = {
	xl: "@max-sm/interactive-prompt:-left-[1rem] @max-sm/interactive-prompt:h-[3.3rem] @max-sm/interactive-prompt:w-[1rem]",
	lg: "@max-sm/interactive-prompt:-left-[0.8rem] @max-sm/interactive-prompt:h-[2.7rem] @max-sm/interactive-prompt:w-[0.8rem]",
	md: "@max-sm/interactive-prompt:-left-[0.75rem] @max-sm/interactive-prompt:h-[2.55rem] @max-sm/interactive-prompt:w-[0.75rem]",
	sm: "@max-sm/interactive-prompt:-left-[0.68rem] @max-sm/interactive-prompt:h-[2.25rem] @max-sm/interactive-prompt:w-[0.68rem]",
	xs: ""
}, uI = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, dI = {
	xl: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	lg: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	md: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	sm: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.05rem)]",
	xs: ""
}, fI = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, pI = {
	xl: "@max-sm/interactive-prompt:gap-3",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-2",
	sm: "@max-sm/interactive-prompt:gap-1.5",
	xs: ""
}, mI = "@max-sm/interactive-prompt:gap-3", hI = {
	xl: "gap-0.5",
	lg: "gap-px",
	md: "gap-0",
	sm: "gap-0",
	xs: ""
}, gI = {
	xl: "@max-sm/interactive-prompt:gap-0.5",
	lg: "@max-sm/interactive-prompt:gap-px",
	md: "@max-sm/interactive-prompt:gap-0",
	sm: "@max-sm/interactive-prompt:gap-0",
	xs: ""
}, _I = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, vI = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, yI = {
	xl: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1",
	xs: ""
}, bI = {
	xl: "@max-sm/interactive-prompt:!h-10 @max-sm/interactive-prompt:!w-10",
	lg: "@max-sm/interactive-prompt:!h-10 @max-sm/interactive-prompt:!w-10",
	md: "@max-sm/interactive-prompt:!h-10 @max-sm/interactive-prompt:!w-10",
	sm: "@max-sm/interactive-prompt:!h-9 @max-sm/interactive-prompt:!w-9",
	xs: ""
}, xI = {
	xl: "!h-10 !w-10",
	lg: "!h-10 !w-10",
	md: "!h-10 !w-10",
	sm: "!h-9 !w-9",
	xs: "!h-7 !w-7"
}, SI = (e, t) => t ? BF[e] : e, CI = (e) => {
	switch (e) {
		case "xl": return "lg";
		case "lg": return "md";
		case "md": return "sm";
		case "sm": return "xs";
		case "xs": return "xs";
	}
}, wI = (e, t) => Array.from(t.trim()).length > 16 ? CI(e) : e, TI = (e) => e === "outline" ? "solid" : e, EI = (e) => e === "danger" ? "danger" : "secondary-tinted", DI = (e) => e === "default" ? "neutral" : e, OI = (e) => e === "danger" ? "danger" : "default", kI = (e) => {
	switch (e) {
		case "xl": return "text-3xl @max-sm/interactive-prompt:text-2xl";
		case "lg": return "text-2xl @max-sm/interactive-prompt:text-xl";
		case "md": return "text-xl @max-lg/interactive-prompt:text-lg";
		case "sm": return "text-lg @max-sm/interactive-prompt:text-base";
		case "xs": return "text-base";
	}
}, AI = (e) => "", jI = (e) => {
	switch (e) {
		case "xl": return "text-base @max-sm/interactive-prompt:!text-sm";
		case "lg": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "md": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "sm": return "text-xs";
		case "xs": return "text-xs";
	}
};
function MI({ className: e, title: t, titleText: n, body: r, meta: i, icon: o, iconSlotClassName: s, trailingVisual: c, footer: l, actions: u = [], actionsOffsetClassName: d, compact: f = !1, tone: p = "neutral", appearance: m = "solid", size: h = "lg" }) {
	let g = SI(h, f), _ = LF[g], v = wI(_, typeof t == "string" ? t : n ?? ""), y = RF[g], b = u.length > 0, x = !!l, S = m !== "ghost", C = EI(p), w = DI(p), T = OI(p), E = o ? Y(zF[g], d, eI[g]) : void 0;
	return /* @__PURE__ */ q("div", {
		"data-interactive-prompt": "true",
		"data-theme": C,
		"data-compact": f ? "true" : void 0,
		className: Y("@container/interactive-prompt w-full max-w-full", "transition-[transform,opacity] duration-200 ease-out", e),
		children: /* @__PURE__ */ J("section", {
			"data-slot": "interactive-prompt-shell",
			"data-pc-variant": w,
			className: Y("relative overflow-visible", a("interactivePrompt")),
			children: [S && /* @__PURE__ */ J("svg", {
				"data-slot": "interactive-prompt-tail",
				"aria-hidden": "true",
				viewBox: "0 0 32 100",
				preserveAspectRatio: "none",
				className: Y("pointer-events-none absolute z-[2] overflow-visible", AF[m], jF[g], lI[g], VF[g], uI[g]),
				children: [
					/* @__PURE__ */ q("path", {
						"data-slot": "interactive-prompt-tail-fill",
						fill: "currentColor",
						d: PF
					}),
					/* @__PURE__ */ q("path", {
						"data-slot": "interactive-prompt-tail-seam-fill",
						fill: "currentColor",
						d: "M30 29H35V71H30Z"
					}),
					/* @__PURE__ */ q("path", {
						"data-slot": "interactive-prompt-tail-border",
						fill: "none",
						stroke: "var(--pc-color-interactive-prompt-border,currentColor)",
						strokeWidth: "2",
						strokeLinecap: "butt",
						strokeLinejoin: "round",
						d: NF
					})
				]
			}), /* @__PURE__ */ q(zv, {
				"data-slot": "interactive-prompt-card",
				variant: "surface",
				appearance: TI(m),
				size: "flush",
				className: Y("relative z-[1] w-full max-w-full text-left", "border outline outline-1 outline-offset-0", DF[m], OF[m], kF[m], "text-[var(--pc-color-interactive-prompt-text,var(--pc-color-text))]", MF[g], dI[g], HF[g], fI[g]),
				children: /* @__PURE__ */ J("div", {
					className: Y("w-full max-w-full text-[var(--pc-color-interactive-prompt-text,var(--pc-color-text))]", FF[g], IF[g], UF[g], WF[g]),
					children: [/* @__PURE__ */ q(dy, {
						as: "div",
						container: !1,
						flush: !0,
						size: _,
						variant: T,
						appearance: "ghost",
						className: Y("[--pc-color-toolbar-text:var(--pc-color-interactive-prompt-text,var(--pc-color-text))]", "[--pc-color-toolbar-muted-text:var(--pc-color-interactive-prompt-muted-text,var(--pc-color-text-muted))]", pI[_], YF[_], XF[_]),
						leadingClassName: o ? mI : void 0,
						leadingVisual: o,
						leadingVisualClassName: Y(s, "text-[var(--pc-color-interactive-prompt-text,var(--pc-color-text))]", xI[_], bI[_], ZF[_], QF[_]),
						leadingContentClassName: Y(hI[_], gI[_], qF[_], JF[_]),
						headline: t,
						subheader: r,
						headlineRowClassName: _I[_],
						secondaryActions: i ? /* @__PURE__ */ q("div", {
							className: Y("flex min-w-0 flex-wrap items-center gap-2", "[&_a]:underline [&_a]:underline-offset-2"),
							children: i
						}) : void 0,
						secondaryActionsClassName: vI[_],
						actions: c,
						actionsClassName: vI[_],
						inlineActionsClassName: yI[_],
						actionsAlign: "start",
						headlineClassName: Y(kI(v), "text-[var(--pc-color-interactive-prompt-text,var(--pc-color-text))]", "text-balance leading-tight tracking-tight @max-sm/interactive-prompt:text-wrap @max-sm/interactive-prompt:tracking-normal", AI(v)),
						subheaderClassName: Y("max-w-[60ch] text-[var(--pc-color-interactive-prompt-muted-text,var(--pc-color-text-muted))]", jI(_), aI[_], oI[_], sI[_], cI[_])
					}), (b || x) && /* @__PURE__ */ J("div", {
						"data-slot": "interactive-prompt-actions",
						className: Y("min-w-0", rI, E, o ? tI[g] : void 0, o ? GF[g] : void 0),
						children: [x && /* @__PURE__ */ q("div", {
							"data-slot": "interactive-prompt-footer",
							className: Y(b && "pb-2 @max-sm/interactive-prompt:pb-1.5"),
							children: l
						}), b && /* @__PURE__ */ q("div", {
							className: Y("flex min-w-0 flex-wrap items-center", iI),
							children: u.map((e) => /* @__PURE__ */ q(Pv, {
								label: e.label,
								onClick: e.onClick,
								disabled: e.disabled,
								variant: e.variant ?? "default",
								appearance: e.appearance,
								size: y,
								className: Y(y === "xs" && "px-2.5", $F[y], KF[y], nI[y]),
								leadingIcon: e.leadingIcon,
								trailingIcon: e.trailingIcon
							}, e.id))
						})]
					})]
				})
			})]
		})
	});
}
//#endregion
//#region ../ui/src/lib/LinearProgress.tsx
var NI = {
	xl: "h-4",
	lg: "h-3.5",
	md: "h-3",
	sm: "h-2",
	xs: "h-1.5"
}, PI = {
	neutral: Y("[--pc-linear-progress-surface:var(--pc-color-neutral)]", "[--pc-linear-progress-text:var(--pc-color-neutral-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	secondary: Y("[--pc-linear-progress-surface:var(--pc-color-secondary)]", "[--pc-linear-progress-text:var(--pc-color-secondary-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	primary: Y("[--pc-linear-progress-surface:var(--pc-color-primary)]", "[--pc-linear-progress-text:var(--pc-color-primary-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	success: Y("[--pc-linear-progress-surface:var(--pc-color-success)]", "[--pc-linear-progress-text:var(--pc-color-success-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	danger: Y("[--pc-linear-progress-surface:var(--pc-color-danger)]", "[--pc-linear-progress-text:var(--pc-color-danger-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	warning: Y("[--pc-linear-progress-surface:var(--pc-color-warning)]", "[--pc-linear-progress-text:var(--pc-color-warning-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]"),
	info: Y("[--pc-linear-progress-surface:var(--pc-color-info)]", "[--pc-linear-progress-text:var(--pc-color-info-text)]", "[--pc-linear-progress-border:var(--pc-color-border)]")
}, FI = (e, t, n) => Math.min(Math.max(e, t), n), II = (e) => Number.isFinite(e) ? Math.max(Math.trunc(e ?? 1), 1) : 1, LI = (e, t) => Number.isFinite(e) ? FI(Math.trunc(e ?? 0), 0, Math.max(t - 1, 0)) : 0, RI = ({ stepCount: e = 1, currentStepIndex: t = 0, showInitialFill: n = !1 }) => {
	let r = II(e), i = LI(t, r);
	return r <= 1 ? 100 : FI(n ? (i + 1) / r * 100 : i / (r - 1) * 100, 0, 100);
};
function zI({ mode: e = "determinate", size: t = "md", variant: n = "default", trackTone: r = "neutral", inheritTheme: i = !1, stepCount: o = 1, currentStepIndex: s = 0, showInitialFill: c = !1, showPercentageLabel: l = !1, rangeLabelsColour: u = "muted", rangeLabels: d, id: f, ariaLabel: p, ariaLabelledBy: m, ariaDescribedBy: h }) {
	let g = i ? void 0 : Ev(n), _ = g ? PI[g] : void 0, v = ["[background:var(--pc-color-progress-bar-fill,", "var(--pc-linear-progress-surface,var(--pc-color-surface)))]"].join(""), y = r === "depth" ? ["[background:var(--pc-color-progress-bar-track,", "var(--pc-color-depth-4))]"].join("") : ["[background:var(--pc-color-progress-bar-track,", "var(--pc-color-neutral))]"].join(""), b = ["text-[var(--pc-color-progress-bar-text,", "var(--pc-linear-progress-text,var(--pc-color-text)))]"].join(""), x = e === "indeterminate", S = x ? void 0 : RI({
		stepCount: o,
		currentStepIndex: s,
		showInitialFill: c
	}), C = S === void 0 ? void 0 : `${S.toFixed(2)}%`, w = !x && S !== void 0 && S <= 0, T = S !== void 0 && S > 0 && S < 100, E = S === void 0 ? void 0 : Math.round(S), D = l && !x && E !== void 0 && E < 100, O = d !== void 0 && !x && S !== void 0, k = D ? `${String(E)}%` : null, A = D ? k ?? void 0 : void 0;
	return /* @__PURE__ */ J("div", {
		id: f,
		role: "progressbar",
		"data-slot": "linear-progress",
		"data-mode": e,
		"data-size": t,
		"data-track-tone": r,
		"aria-label": p,
		"aria-labelledby": m,
		"aria-describedby": h,
		"aria-valuemin": x ? void 0 : 0,
		"aria-valuemax": x ? void 0 : 100,
		"aria-valuenow": S === void 0 ? void 0 : Math.round(S),
		className: "block w-full overflow-visible",
		children: [/* @__PURE__ */ J("div", {
			"data-slot": "linear-progress-bar",
			"data-pc-variant": g,
			className: Y(a("progressBar"), "relative block w-full overflow-visible", _),
			children: [/* @__PURE__ */ q("div", {
				"data-slot": "linear-progress-track",
				className: Y("relative w-full overflow-hidden", w ? "[background:transparent]" : y, NI[t]),
				children: /* @__PURE__ */ q("span", {
					"aria-hidden": "true",
					"data-slot": "linear-progress-fill",
					"data-mode": e,
					className: Q(Y("block h-full", v, "will-change-[transform,width]", T ? "rounded-r-[var(--pc-radius-full)]" : void 0), x ? Y("absolute inset-y-0 left-0 w-[36%]", "rounded-[var(--pc-radius-full)]", "animate-[pc-linear-progress-indeterminate_1.4s_ease-in-out_infinite]") : "transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"),
					style: C ? { width: C } : void 0
				})
			}), D && /* @__PURE__ */ q("span", {
				"aria-hidden": "true",
				"data-slot": "linear-progress-percentage-label",
				className: Y("pointer-events-none absolute top-1/2 z-[1]", "-translate-x-1/2 -translate-y-1/2", "rounded-[var(--pc-radius-full)] px-1 py-px", "whitespace-nowrap text-[0.625rem] font-medium leading-none", v, b, "transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"),
				style: { left: A },
				children: k
			})]
		}), O && /* @__PURE__ */ J("div", {
			"aria-hidden": "true",
			"data-slot": "linear-progress-range-labels",
			className: Y("mt-1.5 flex w-full justify-between gap-2", "text-xs font-normal leading-none", u === "inherit" ? "text-current" : "text-[var(--pc-color-text-muted)]"),
			children: [/* @__PURE__ */ q("span", { children: d.min }), /* @__PURE__ */ q("span", { children: d.max })]
		})]
	});
}
//#endregion
//#region ../ui/src/lib/useSlidingIndicator.ts
function BI({ activeKey: e, dependencies: t = [] }) {
	let n = G(null), r = G(/* @__PURE__ */ new Map()), i = G(null), [a, o] = K({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		ready: !1
	}), s = H((e) => {
		n.current = e;
	}, []), c = H(() => {
		let t = n.current, i = r.current.get(e);
		if (!t || !i) {
			o((e) => e.ready ? {
				...e,
				ready: !1
			} : e);
			return;
		}
		let a = t.getBoundingClientRect(), s = i.getBoundingClientRect(), c = {
			left: s.left - a.left + t.scrollLeft - t.clientLeft,
			top: s.top - a.top + t.scrollTop - t.clientTop,
			width: s.width,
			height: s.height,
			ready: !0
		};
		o((e) => e.ready && e.left === c.left && e.top === c.top && e.width === c.width && e.height === c.height ? e : c);
	}, [e]), l = H((e) => (t) => {
		let n = r.current.get(e);
		i.current && n && n !== t && i.current.unobserve(n), r.current.set(e, t), i.current && t && i.current.observe(t);
	}, []);
	return Je(() => {
		let e = requestAnimationFrame(() => {
			c();
		}), t = () => {
			requestAnimationFrame(() => {
				c();
			});
		};
		if (window.addEventListener("resize", t), typeof ResizeObserver > "u") return () => {
			cancelAnimationFrame(e), window.removeEventListener("resize", t);
		};
		let a = new ResizeObserver(c), o = new ResizeObserver(c);
		i.current = o, r.current.forEach((e) => {
			e && o.observe(e);
		});
		let s = n.current;
		return s && a.observe(s), () => {
			cancelAnimationFrame(e), window.removeEventListener("resize", t), a.disconnect(), o.disconnect(), i.current = null;
		};
	}, [t, c]), {
		containerRef: n,
		setContainerNode: s,
		registerOption: l,
		indicator: a,
		refresh: c
	};
}
function VI(e) {
	let [t, n] = K(!1);
	return Ge(() => {
		if (!e || t) return;
		let r = requestAnimationFrame(() => {
			n(!0);
		});
		return () => {
			cancelAnimationFrame(r);
		};
	}, [t, e]), t;
}
//#endregion
//#region ../ui/src/lib/Switcher.tsx
var HI = 2, UI = 8, WI = 120, GI = "relative inline-block min-w-0 max-w-full align-top", KI = Y("relative inline-flex max-w-full items-center rounded-[var(--pc-radius-full)]", "border border-[var(--pc-color-switcher-border,var(--pc-color-border-weaker))] bg-transparent p-1", "flex-nowrap"), qI = KI, JI = Y("overflow-x-auto overflow-y-hidden", "[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]", "[&::-webkit-scrollbar]:h-[6px]", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]", "[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"), YI = Y(KI, "overflow-hidden"), XI = Y(KI, "pointer-events-none fixed left-[-9999px] top-[-9999px] z-[-1] w-max max-w-none overflow-visible opacity-0"), ZI = {
	default: "md",
	compact: "sm"
}, QI = {
	"2xs": "gap-0.5",
	xs: "gap-0.5",
	sm: "gap-1",
	md: "gap-1",
	lg: "gap-1",
	xl: "gap-1"
}, $I = {
	"2xs": Y("h-4 w-4 p-0 text-[0.6875rem]", "[&_svg]:h-2.5 [&_svg]:w-2.5"),
	xs: Y("h-5 w-5 p-0.5 text-xs", "[&_svg]:h-3 [&_svg]:w-3"),
	sm: Y("h-6 w-6 p-0.5 text-sm", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
	md: Y("h-7 w-7 p-1 text-sm", "[&_svg]:h-4 [&_svg]:w-4"),
	lg: Y("h-8 w-8 p-1 text-base", "[&_svg]:h-[18px] [&_svg]:w-[18px]"),
	xl: Y("h-9 w-9 p-1.5 text-lg", "[&_svg]:h-5 [&_svg]:w-5")
}, eL = {
	"2xs": "h-2.5 w-2.5",
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, tL = {
	"2xs": "h-2.5 w-2.5",
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, nL = {
	"2xs": "h-5 w-5 p-0 text-[0.6875rem]",
	xs: "h-5 w-5 p-0 text-xs",
	sm: "h-7 w-7 p-0 text-sm",
	md: "h-8 w-8 p-0 text-base",
	lg: "h-9 w-9 p-0 text-base",
	xl: "h-10 w-10 p-0 text-lg"
}, rL = {
	"2xs": "min-h-5 min-w-5",
	xs: "min-h-7 min-w-7",
	sm: "min-h-9 min-w-9",
	md: "min-h-10 min-w-10",
	lg: "min-h-11 min-w-11",
	xl: "min-h-[3.25rem] min-w-[3.25rem]"
}, iL = (e, t = !1) => Y(mv(e.base, t), ...Dv.map((n) => e[n] && yv(e[n], t, n))), aL = "relative z-10 inline-flex items-center justify-center rounded-[var(--pc-radius-full)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-[var(--pc-color-surface)] whitespace-nowrap leading-none cursor-pointer disabled:cursor-not-allowed [font-variant-numeric:tabular-nums]", oL = "relative z-10 inline-flex min-w-0 cursor-pointer items-center gap-0.5 rounded-[var(--pc-radius-full)] pr-1.5", sL = "text-[var(--pc-color-text)]", cL = "text-[var(--pc-color-text-muted)] hover:[background:var(--pc-color-border-weakest)]", lL = "[background:var(--pc-color-switcher-indicator,var(--pc-color-secondary))] data-[theme=secondary]:[background:var(--pc-color-switcher-indicator,var(--pc-color-surface))]", uL = (e) => typeof e == "string" || typeof e == "number", dL = (e) => uL(e) ? String(e) : Array.isArray(e) ? e.map((e) => dL(e)).join(" ") : "", fL = (e) => e === "danger" ? Y("text-[var(--pc-color-danger)]", "hover:[background:color-mix(in_srgb,var(--pc-color-danger)_12%,transparent)]") : Y("text-[var(--pc-color-text-muted)]", "hover:[background:var(--pc-color-surface)]"), pL = ({ hostNode: e, probeExpandedWidth: t }) => {
	let n = Math.ceil(e.clientWidth), r = Math.ceil(e.parentElement?.clientWidth ?? 0);
	return t ? Math.max(n, r) : n > 0 && r > 0 ? Math.min(n, r) : r > 0 ? r : n;
};
function mL({ options: e, value: t, onChange: n, variant: r = "default", size: i, disabled: a = !1, allowReselect: o = !1, className: s, optionClassName: c, activeOptionClassName: l, inactiveOptionClassName: u, ariaLabel: d, navigation: f, overflowBehaviour: p = "dropdown", overflowMode: m = "auto", skeleton: h = !1 }) {
	let g = kv(i ?? ZI[r], ZI[r]), _ = Ev("secondary"), [v, y] = K(!1), [b, x] = K(!1), [S, C] = K(() => p !== "dropdown" || m !== "auto"), [w, T] = K(!1), E = G(null), D = G(null), O = G(null), k = G(null), A = G(null), j = G(null), M = G(!1), N = G(p !== "dropdown" || m !== "auto"), { setContainerNode: P, registerOption: F, indicator: I } = BI({
		activeKey: t,
		dependencies: [
			e,
			g,
			!!f
		]
	});
	Ge(() => {
		M.current = b;
	}, [b]), Ge(() => {
		N.current = S;
	}, [S]);
	let ee = H(() => {
		A.current !== null && (window.clearTimeout(A.current), A.current = null);
	}, []), te = H((e, t = {}) => {
		let { immediate: n = !1 } = t, r = () => {
			j.current = null, x((t) => t === e ? t : (t && !e && T(!1), e)), C(!0);
		};
		n || !N.current ? (ee(), r()) : e === M.current ? (j.current = null, ee()) : (j.current = e, ee(), A.current = window.setTimeout(() => {
			A.current = null, j.current !== null && r();
		}, WI));
	}, [ee]);
	Ge(() => () => {
		ee();
	}, [ee]);
	let ne = H((e) => {
		E.current = e;
	}, []), re = H((e) => {
		D.current = e, O.current = null, P(e);
	}, [P]), L = H((e) => {
		D.current = e, O.current = e, P(null);
	}, [P]), R = H(() => {
		if (p === "scroll" || m === "full") {
			ee(), j.current = null, T(!1), x(!1), C(!0);
			return;
		}
		if (m === "collapsed") {
			ee(), j.current = null, x(!0), C(!0);
			return;
		}
		let e = E.current, t = k.current;
		if (!e || !t) return;
		let n = Math.ceil(t.scrollWidth), r = M.current, i = pL({
			hostNode: e,
			probeExpandedWidth: r
		});
		if (i <= 0 || n <= 0) return;
		let a = r ? n > i - UI : n > i + HI;
		te(a);
	}, [
		te,
		ee,
		p,
		m
	]), z = b;
	m === "collapsed" ? z = !0 : m === "full" && (z = !1);
	let ie = p === "dropdown" && z, ae = p === "dropdown" && m === "auto" && !S;
	Ge(() => {
		if (!a) return;
		let e = requestAnimationFrame(() => {
			T(!1);
		});
		return () => {
			cancelAnimationFrame(e);
		};
	}, [a]), Je(() => {
		if (p === "scroll") return;
		let e = null, t = () => {
			e !== null && cancelAnimationFrame(e), e = requestAnimationFrame(() => {
				e = null, a && T(!1), R();
			});
		};
		t();
		let n = typeof ResizeObserver == "function" ? new ResizeObserver(() => {
			t();
		}) : null;
		if (n) {
			let e = /* @__PURE__ */ new Set(), t = (t) => {
				t && !e.has(t) && (e.add(t), n.observe(t));
			}, r = E.current;
			t(r), t(D.current), t(k.current), t(r?.parentElement ?? null), t(r?.parentElement?.parentElement ?? null);
		}
		let r = () => {
			t();
		};
		window.addEventListener("resize", r);
		let i = typeof document < "u" ? document.fonts : void 0, o = () => {
			t();
		};
		return i && i.addEventListener("loadingdone", o), () => {
			window.removeEventListener("resize", r), i && i.removeEventListener("loadingdone", o), n?.disconnect(), e !== null && cancelAnimationFrame(e);
		};
	}, [
		f,
		c,
		l,
		u,
		e,
		t,
		s,
		p,
		m,
		g,
		a,
		R
	]);
	let oe = ie && !a && w, se = Q(sL, l), ce = Q(cL, u), le = Q("pointer-events-none absolute rounded-[var(--pc-radius-full)]", lL, v ? "transition-[top,left,width,height] duration-200 ease-out" : "transition-none"), B = f?.canGoPrevious ?? !0, ue = f?.canGoNext ?? !0, de = Q(aL, iL(g, !0), "z-20 shrink-0 disabled:opacity-50", ce, f?.buttonClassName), fe = W(() => e.find((e) => e.value === t) ?? null, [e, t]), pe = W(() => fe ? uL(fe.label) ? fe.label : fe.ariaLabel ?? fe.label : null, [fe]), me = Y("inline-flex shrink-0 items-center justify-center text-current", jv(eL, g), "[&>svg]:h-full [&>svg]:w-full"), he = (e, t) => t ? /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ q("span", {
		className: me,
		children: t
	}), e] }) : e, ge = W(() => e.map((e) => {
		let r = e.value === t, i = e.disabled === !0, s = r && !o, c = e.trailingAction, l = uL(e.label) ? e.label : e.ariaLabel ?? e.label;
		return {
			id: e.value,
			label: l,
			icon: e.leadingIcon,
			theme: r ? "neutral" : void 0,
			selected: r,
			disabled: i || s,
			suppressDisabledCursor: s && !i,
			onSelect: () => {
				a || i || s || (v || y(!0), n(e.value));
			},
			trailingAction: c ? {
				ariaLabel: c.ariaLabel,
				icon: c.icon,
				disabled: c.disabled,
				theme: c.theme,
				onSelect: () => {
					a || c.disabled || c.onSelect?.();
				}
			} : void 0
		};
	}), [
		o,
		a,
		v,
		n,
		e,
		t
	]), _e = Q(GI, ev, !h && ae && "invisible pointer-events-none", a ? "opacity-60 pointer-events-none" : "", s), ve = Q(qI, p === "scroll" ? JI : "overflow-hidden", jv(QI, g)), ye = Q(YI, jv(QI, g)), be = Q(XI, jv(QI, g)), xe = Q(aL, iL(g), c, se, lL, "z-20 min-w-0 flex-1 justify-start gap-2 px-3"), Se = Q(aL, jv(nL, g), ce, "z-20 shrink-0"), Ce = Ke(), we = `${Ce}-menu`, Te = () => {
		a || e.length === 0 || T(!0);
	}, Ee = () => {
		a || e.length === 0 || T((e) => !e);
	}, De = /* @__PURE__ */ J("div", {
		"aria-hidden": !0,
		ref: k,
		className: be,
		"data-switcher-measurement": "true",
		children: [
			f && /* @__PURE__ */ q("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !B,
				className: de,
				children: f.previousIcon ?? "<"
			}),
			e.map(({ value: e, label: n, leadingIcon: r, disabled: i, trailingAction: o }) => {
				let s = e === t, l = !!o, u = s ? se : ce, d = l ? u : void 0, f = l ? void 0 : u, p = Q(aL, iL(g), jv(rL, g), c, r ? "gap-2" : void 0, l ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, f, i ? "opacity-50 cursor-not-allowed" : ""), m = Q(oL, d, i ? "opacity-50" : void 0), h = Q(aL, jv($I, g), "shrink-0 rounded-[inherit] bg-transparent", fL(o?.theme), o?.disabled ? "opacity-50 cursor-not-allowed" : void 0);
				return o ? /* @__PURE__ */ J("div", {
					className: m,
					"data-theme": s ? _ : void 0,
					children: [/* @__PURE__ */ q("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || i,
						className: p,
						children: he(n, r)
					}), /* @__PURE__ */ q("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || o.disabled,
						className: h,
						children: o.icon
					})]
				}, `measure-${e}`) : /* @__PURE__ */ q("button", {
					type: "button",
					tabIndex: -1,
					disabled: a || i,
					className: p,
					children: he(n, r)
				}, `measure-${e}`);
			}),
			f && /* @__PURE__ */ q("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !ue,
				className: de,
				children: f.nextIcon ?? ">"
			})
		]
	});
	if (h) {
		let t = Q(aL, iL(g), jv(rL, g), c, "cursor-default"), n = Q(aL, iL(g, !0), f?.buttonClassName, "cursor-default");
		return /* @__PURE__ */ q("div", {
			className: _e,
			"data-switcher-host": "true",
			"data-slot": "switcher-skeleton-shell",
			children: /* @__PURE__ */ J("div", {
				"aria-hidden": "true",
				className: ve,
				"data-switcher-mode": "skeleton",
				children: [
					f && /* @__PURE__ */ q("div", {
						className: n,
						children: /* @__PURE__ */ q(kD, { className: "h-4 w-4 rounded-full" })
					}),
					e.map(({ value: e, label: n }) => {
						let r = dL(n).trim().length;
						return /* @__PURE__ */ q("div", {
							className: t,
							children: /* @__PURE__ */ q(kD, {
								className: "h-3 rounded-full",
								style: { width: `${String(Math.max(4, Math.min(r, 14)))}ch` }
							})
						}, e);
					}),
					f && /* @__PURE__ */ q("div", {
						className: n,
						children: /* @__PURE__ */ q(kD, { className: "h-4 w-4 rounded-full" })
					})
				]
			})
		});
	}
	return /* @__PURE__ */ J("div", {
		ref: ne,
		className: _e,
		"data-switcher-host": "true",
		children: [ie ? /* @__PURE__ */ J("div", {
			role: "group",
			"aria-label": d,
			className: ye,
			ref: L,
			"data-switcher-mode": "collapsed",
			children: [
				f && /* @__PURE__ */ q("button", {
					type: "button",
					"aria-label": f.previousAriaLabel ?? "Previous",
					disabled: a || !B,
					className: de,
					onClick: () => {
						!a && B && (v || y(!0), f.onPrevious());
					},
					children: f.previousIcon ?? "<"
				}),
				/* @__PURE__ */ q("button", {
					id: Ce,
					type: "button",
					"aria-haspopup": "menu",
					"aria-expanded": oe,
					"aria-controls": we,
					"aria-label": d,
					disabled: a || e.length === 0,
					className: xe,
					"data-theme": _,
					onClick: Te,
					children: /* @__PURE__ */ J("span", {
						className: "flex min-w-0 flex-1 items-center gap-2 text-left",
						children: [fe?.leadingIcon ? /* @__PURE__ */ q("span", {
							className: me,
							children: fe.leadingIcon
						}) : null, /* @__PURE__ */ q("span", {
							className: "min-w-0 truncate",
							children: pe
						})]
					})
				}),
				/* @__PURE__ */ q("button", {
					type: "button",
					"aria-label": "Toggle options",
					"aria-haspopup": "menu",
					"aria-expanded": oe,
					"aria-controls": we,
					disabled: a || e.length === 0,
					className: Se,
					onClick: Ee,
					children: /* @__PURE__ */ q("span", {
						className: Q(vb({ isOpen: oe }), jv(tL, g), "inline-flex items-center justify-center [&>svg]:h-full [&>svg]:w-full"),
						children: /* @__PURE__ */ q(yb, {})
					})
				}),
				f && /* @__PURE__ */ q("button", {
					type: "button",
					"aria-label": f.nextAriaLabel ?? "Next",
					disabled: a || !ue,
					className: de,
					onClick: () => {
						!a && ue && (v || y(!0), f.onNext());
					},
					children: f.nextIcon ?? ">"
				}),
				/* @__PURE__ */ q(ix, {
					id: we,
					options: ge,
					isOpen: oe,
					align: "start",
					widthMode: "content",
					usePortal: !0,
					anchorRef: O,
					labelledBy: Ce,
					onRequestClose: () => {
						T(!1);
					}
				})
			]
		}) : /* @__PURE__ */ J("div", {
			role: "radiogroup",
			"aria-label": d,
			className: ve,
			ref: re,
			"data-switcher-mode": "full",
			children: [
				I.ready && /* @__PURE__ */ q("div", {
					"aria-hidden": !0,
					className: le,
					"data-theme": _,
					style: {
						top: I.top,
						left: I.left,
						width: I.width,
						height: I.height
					}
				}),
				f && /* @__PURE__ */ q("button", {
					type: "button",
					"aria-label": f.previousAriaLabel ?? "Previous",
					disabled: a || !B,
					className: de,
					onClick: () => {
						!a && B && (v || y(!0), f.onPrevious());
					},
					children: f.previousIcon ?? "<"
				}),
				e.map(({ value: e, label: r, leadingIcon: i, disabled: s, ariaLabel: l, trailingAction: u }) => {
					let d = e === t, f = d ? _ : void 0, p = !!u, m = d ? se : ce, h = p ? m : void 0, b = p ? void 0 : m, x = Q(aL, iL(g), jv(rL, g), c, i ? "gap-2" : void 0, p ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, b, s ? "opacity-50 cursor-not-allowed" : ""), S = Q(oL, h, a || s ? "opacity-50 cursor-not-allowed" : void 0), C = Q(aL, jv($I, g), "shrink-0 rounded-[inherit] bg-transparent", fL(u?.theme), u?.disabled ? "opacity-50 cursor-not-allowed" : void 0), w = () => {
						d && !o || a || s || (v || y(!0), n(e));
					};
					return u ? /* @__PURE__ */ J("div", {
						ref: F(e),
						className: S,
						"data-theme": f,
						onClick: w,
						children: [/* @__PURE__ */ q("button", {
							type: "button",
							role: "radio",
							"aria-checked": d,
							"aria-label": l,
							disabled: a || s,
							className: x,
							children: he(r, i)
						}), /* @__PURE__ */ q("button", {
							type: "button",
							"aria-label": u.ariaLabel,
							disabled: a || u.disabled,
							className: C,
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), !(a || u.disabled) && u.onSelect?.();
							},
							children: u.icon
						})]
					}, e) : /* @__PURE__ */ q("button", {
						type: "button",
						role: "radio",
						"aria-checked": d,
						"aria-label": l,
						disabled: a || s,
						className: x,
						"data-theme": f,
						ref: F(e),
						onClick: w,
						children: he(r, i)
					}, e);
				}),
				f && /* @__PURE__ */ q("button", {
					type: "button",
					"aria-label": f.nextAriaLabel ?? "Next",
					disabled: a || !ue,
					className: de,
					onClick: () => {
						!a && ue && (v || y(!0), f.onNext());
					},
					children: f.nextIcon ?? ">"
				})
			]
		}), De]
	});
}
//#endregion
//#region ../ui/src/lib/NavigationList.tsx
var hL = "relative flex w-full flex-row items-stretch", gL = "relative flex w-full flex-col items-stretch gap-1", _L = "border-b border-[var(--pc-color-navigation-list-border,var(--pc-color-depth-2))]", vL = "rounded-[var(--pc-radius-xl)] p-1", yL = "relative min-w-0 flex-1 inline-flex items-center justify-center gap-2 p-3.5 text-lg font-medium leading-none whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]", bL = "relative inline-flex w-full items-center justify-between gap-3 rounded-[var(--pc-radius-lg)] px-3 py-1.5 text-left text-sm font-medium leading-5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:opacity-60", xL = "pr-1.5", SL = "pr-1", CL = "relative flex min-w-0 max-w-full shrink-0 items-stretch gap-0.5", wL = "relative flex w-full min-w-0 items-stretch gap-1", TL = "mr-1 self-center rounded-[var(--pc-radius-full)]", EL = "mr-1 self-center rounded-[var(--pc-radius-full)]", DL = "inline-flex h-4 w-4 shrink-0 items-center justify-center text-current [&>svg]:h-full [&>svg]:w-full", OL = "text-[var(--pc-color-text)]", kL = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)]", AL = "text-[var(--pc-color-text)] bg-[var(--pc-color-depth-2)]", jL = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)] hover:bg-[var(--pc-color-depth-1)]", ML = "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)] hover:[background:color-mix(in_srgb,var(--pc-color-secondary)_92%,var(--pc-color-secondary))]", NL = "text-[var(--pc-color-text)] [background:transparent] hover:[background:var(--pc-color-depth-2)] focus-visible:[background:var(--pc-color-depth-2)]", PL = (e) => e && e !== "default" ? e : "neutral", FL = ({ active: e, theme: t }) => t === "danger" ? void 0 : Y(!e && "text-[var(--pc-color-text-muted)]", "hover:text-[var(--pc-color-text)]");
function IL({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", selectionSemantics: a = "tabs", itemStyle: o = "sliding", appearance: s = "default", showBorder: c = !0, disabled: l = !1, className: u, itemClassName: d, activeItemClassName: f, inactiveItemClassName: p, ariaLabel: m }) {
	let h = i === "vertical", g = a === "tabs", _ = o === "sliding", v = h ? gL : hL, y = "";
	c && (y = h ? vL : _L);
	let b = Q(Y(v, y, l ? "pointer-events-none opacity-60" : ""), u), x = s === "neutral" ? "neutral" : void 0, S = h ? _ ? AL : ML : OL, C = h ? _ ? jL : NL : kL, w = Q(S, f), T = Q(C, p), E = t.some((e) => e.value === n), D = t.find((e) => !e.disabled)?.value, { containerRef: O, registerOption: k, indicator: A } = BI({
		activeKey: n,
		dependencies: [
			t,
			i,
			o,
			a
		]
	}), j = VI(A.ready), M = _ && A.ready, N = h ? "left-0 w-0.5" : "bottom-0 h-0.5", P = "transition-none";
	j && (P = h ? "transition-[top,height] duration-200 ease-out" : "transition-[left,width] duration-200 ease-out");
	let F = Y("pointer-events-none absolute rounded-[var(--pc-radius-full)] [background:var(--pc-color-navigation-list-indicator,var(--pc-color-secondary))]", N, P), I = h ? {
		top: A.top,
		height: A.height
	} : {
		left: A.left,
		width: A.width
	};
	return /* @__PURE__ */ J("div", {
		id: e,
		"data-slot": "navigation-list",
		role: g ? "tablist" : "listbox",
		"aria-label": m,
		"aria-orientation": h ? "vertical" : void 0,
		"data-theme": x,
		className: b,
		ref: O,
		children: [M && /* @__PURE__ */ q("div", {
			"aria-hidden": !0,
			className: F,
			style: I
		}), t.map(({ value: e, label: t, leadingIcon: i, badge: a, disabled: o, trailingAction: s }) => {
			let c = e === n, u = (() => {
				if (g) return c || !E && e === D ? 0 : -1;
			})(), f = h && _ ? "pl-4" : "", p = !!s, m = Q(Y(h ? bL : yL, f, p && (h ? SL : xL)), d, c ? w : T), v = Y(h ? wL : CL), y = Y(h ? EL : TL, FL({
				active: c,
				theme: s?.theme
			})), b = /* @__PURE__ */ J("button", {
				type: "button",
				"data-slot": "navigation-list-item",
				role: g ? "tab" : "option",
				"aria-selected": c,
				tabIndex: u,
				disabled: l || o,
				className: m,
				ref: p ? void 0 : k(e),
				onClick: () => {
					c || l || o || r(e);
				},
				children: [
					i && /* @__PURE__ */ q("span", {
						className: DL,
						children: i
					}),
					/* @__PURE__ */ q("span", {
						"data-slot": "navigation-list-label",
						className: "min-w-0 truncate",
						children: t
					}),
					a && /* @__PURE__ */ q("span", {
						"data-slot": "navigation-list-badge",
						className: Y("shrink-0", h ? "" : "ml-1"),
						children: a
					})
				]
			}, e);
			if (!s) return b;
			let x = s;
			return /* @__PURE__ */ J("div", {
				"data-slot": "navigation-list-item-group",
				ref: k(e),
				className: v,
				role: "presentation",
				children: [b, /* @__PURE__ */ q(Pv, {
					"aria-label": x.ariaLabel,
					appearance: "ghost",
					className: y,
					disabled: l || o || x.disabled,
					iconOnly: !0,
					label: x.ariaLabel,
					leadingIcon: x.icon,
					onClick: (e) => {
						e.stopPropagation(), !(l || o || x.disabled) && x.onSelect?.();
					},
					showTooltip: !1,
					size: "xs",
					variant: PL(x.theme)
				})]
			}, e);
		})]
	});
}
//#endregion
//#region ../ui/src/lib/Tabs.tsx
function LL({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", showBorder: a = !0, disabled: o = !1, className: s, tabClassName: c, activeTabClassName: l, inactiveTabClassName: u, ariaLabel: d }) {
	return /* @__PURE__ */ q(IL, {
		id: e,
		options: t,
		value: n,
		onChange: r,
		orientation: i,
		selectionSemantics: "tabs",
		itemStyle: "sliding",
		showBorder: a,
		disabled: o,
		className: s,
		itemClassName: c,
		activeItemClassName: l,
		inactiveItemClassName: u,
		ariaLabel: d
	});
}
//#endregion
//#region ../ui/src/lib/overlayAnimation.ts
var RL = "preload-first-open", zL = "preload-always", BL = "preload-first-open";
function VL({ isOpen: e, animationMode: t = RL }) {
	let [n, r] = K(e);
	return Ge(() => {
		e && r(!0);
	}, [e]), {
		shouldPreloadClosedState: !e && (t === "preload-always" || t === "preload-first-open" && !n),
		shouldRender: e
	};
}
//#endregion
//#region ../ui/src/lib/surfacePrimitives.ts
var HL = "px-5 py-4 bg-[color:color-mix(in oklab,var(--pc-color-surface) 90%, rgba(0,0,0,0))]", UL = "px-5 py-3 bg-[color:color-mix(in oklab,var(--pc-color-surface) 96%, rgba(0,0,0,0))]", WL = (e) => {
	let t = Number.parseFloat(e);
	return Number.isFinite(t) ? t : 0;
}, GL = (e) => {
	if (typeof window > "u") return Math.ceil(e.scrollHeight);
	let t = window.getComputedStyle(e), n = WL(t.paddingTop) + WL(t.paddingBottom);
	return Math.max(0, Math.ceil(e.scrollHeight - n));
}, KL = 0, qL = "relative inset-0 z-[2000] flex items-center justify-center p-4 md:p-8", JL = "pointer-events-none absolute inset-0 [background:var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]", YL = "transition-opacity duration-[140ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", XL = "transition-opacity duration-[180ms] ease-out", ZL = "relative z-[2010] flex w-full max-h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[var(--pc-radius-2xl)] [background:var(--pc-color-modal-background,var(--pc-color-surface))] text-[var(--pc-color-modal-text,var(--pc-color-text))] shadow-2xl outline-none transform-gpu [transform-origin:50%_92%] [backface-visibility:hidden] [contain:layout_paint_style]", QL = "transition-[opacity,transform] duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[opacity,transform]", $L = "transition-opacity duration-[180ms] ease-out will-change-opacity", eR = "opacity-100 translate-y-0 scale-100", tR = "opacity-0 translate-y-[min(22vh,9rem)] scale-[0.985]", nR = "opacity-0 translate-y-0 scale-100", rR = "relative flex min-h-0 min-w-0 flex-auto flex-col", iR = "opacity-100 transition-opacity delay-[35ms] duration-[100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", aR = "opacity-0 transition-opacity duration-[120ms] ease-out", oR = 180, sR = {
	sm: "max-w-md",
	md: "max-w-xl",
	lg: "max-w-2xl",
	xl: "max-w-4xl",
	full: "max-w-[min(96vw,80rem)] max-h-[calc(100vh-2rem)]"
}, cR = {
	sm: "h-[calc(100vh-4rem)]",
	md: "h-[calc(100vh-4rem)]",
	lg: "h-[calc(100vh-4rem)]",
	xl: "h-[calc(100vh-4rem)]",
	full: "h-[calc(100vh-2rem)]"
}, lR = "px-5 pt-5 pb-4", uR = "text-xl font-semibold leading-tight text-[var(--pc-color-modal-text,var(--pc-color-text))]", dR = "text-sm leading-tight text-[var(--pc-color-modal-muted-text,var(--pc-color-text-secondary))]", fR = "flex-1 overflow-y-auto px-5 pt-2 [scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)] [&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]", pR = Q(HL, "bg-inherit"), mR = Q(UL, "bg-inherit"), hR = () => () => void 0, gR = () => typeof document > "u" ? null : document.body, _R = () => null;
function vR({ isOpen: e, onClose: t, title: n, description: r, notification: i, tabs: o, children: s, stickyContent: c, footer: l, size: u = "md", variant: d, forceMaxHeight: f = !1, overlayClassName: p, contentClassName: m, headerClassName: h, bodyClassName: g, stickyContentClassName: _, footerClassName: v, titleClassName: y, descriptionClassName: b, closeButtonClassName: x, closeButtonLabel: S = "Close modal", showCloseButton: C = !0, closeOnOverlayClick: w = !0, closeOnEscape: T = !0, trapFocus: E = !0, restoreFocus: D = !0, initialFocusRef: O, portalContainer: k, animationMode: A = BL }) {
	let j = G(null), M = G(null), N = G(null), P = G(null), F = G(null), I = G(null), ee = G(e), [te, ne] = K(!1), [re, L] = K(e), [R, z] = K(!1), [ie, ae] = K(null);
	N.current === null && (N.current = `pc-modal-${String(++KL)}`);
	let oe = N.current, se = typeof t == "function" ? t : void 0, ce = E, le = Ke(), B = Ke(), ue = !!(n || r), de = !!o, fe = !!l, pe = !!c, me = !!i?.message, he = Ev(d), ge = Eb(), _e = k ?? ge, ve = Xe(hR, gR, _R), { shouldPreloadClosedState: ye, shouldRender: be } = VL({
		isOpen: e,
		animationMode: A
	});
	Je(() => {
		P.current !== null && (window.cancelAnimationFrame(P.current), P.current = null), F.current !== null && (window.cancelAnimationFrame(F.current), F.current = null), I.current !== null && (window.clearTimeout(I.current), I.current = null);
		let t = ee.current;
		if (ee.current = e, L(e), e) {
			if (z(!1), A === "standard") {
				ne(!1);
				return;
			}
			ne(!0), P.current = window.requestAnimationFrame(() => {
				P.current = null, F.current = window.requestAnimationFrame(() => {
					ne(!1), F.current = null;
				});
			});
		} else if (ne(!1), !t) z(!1);
		else if (A === "standard") z(!1);
		else return z(!0), I.current = window.setTimeout(() => {
			z(!1), I.current = null;
		}, oR), () => {
			I.current !== null && (window.clearTimeout(I.current), I.current = null), P.current !== null && (window.cancelAnimationFrame(P.current), P.current = null), F.current !== null && (window.cancelAnimationFrame(F.current), F.current = null);
		};
	}, [A, e]), Je(() => {
		e && D_();
	}, [e]), Rb({
		containerRef: j,
		isOpen: e,
		instanceId: oe,
		priority: Db.modal
	}), zb({
		containerRef: j,
		initialFocusRef: O,
		instanceId: oe,
		isOpen: e,
		restoreFocus: D
	}), Ge(() => {
		if (e && !_e) return Mb();
	}, [e, _e]), Bb({
		closeOnEscape: T,
		containerRef: j,
		instanceId: oe,
		isOpen: e,
		onClose: se,
		trapFocus: ce
	});
	let xe = o?.panels ? o.options.flatMap((e) => {
		let t = o.panels?.[e.value];
		return t === void 0 ? [] : [{
			value: e.value,
			panel: t
		}];
	}) : null, Se = !!xe?.length;
	Je(() => {
		if (!e || !de || Se) {
			ae(null);
			return;
		}
		let t = M.current;
		if (!t) return;
		let n = () => {
			let e = GL(t);
			e <= 0 || ae((t) => t === null || e > t ? e : t);
		};
		if (n(), typeof ResizeObserver > "u") return;
		let r = null, i = new ResizeObserver(() => {
			r === null && (r = window.requestAnimationFrame(() => {
				r = null, n();
			}));
		});
		return i.observe(t), () => {
			i.disconnect(), r !== null && window.cancelAnimationFrame(r);
		};
	}, [
		s,
		de,
		Se,
		e,
		i?.message,
		o?.value
	]);
	let Ce = W(() => n ? le : void 0, [n, le]), we = W(() => r ? B : void 0, [r, B]), Te = _e ?? ve, Ee = H((e) => {
		w && se && Lb(oe) && e.target === e.currentTarget && (e.preventDefault(), se());
	}, [
		w,
		se,
		oe
	]), De = R || !e && re;
	if (!(be || De) || !Te) return null;
	let Oe = eR;
	te ? Oe = tR : De ? Oe = nR : ye && (Oe = `${tR} invisible transition-none`);
	let ke = "opacity-0 transition-none";
	te ? ke = "opacity-0 transition-none" : De ? ke = `opacity-0 ${XL}` : ye ? ke = "opacity-0 transition-none" : e && (ke = `opacity-100 ${YL}`);
	let Ae = Q(ZL, a("modal"), De ? $L : QL, sR[u], f ? cR[u] : "", Oe, te ? "transition-none" : "", m), je = iR;
	te ? je = "opacity-0 transition-none" : De ? je = aR : ye && (je = "opacity-0 transition-none");
	let Me = Q(rR, je), Ne = Q(lR, h), Pe = Q(uR, y), V = Q(dR, b), Fe = Q(fR, !ue && !de && !pe ? "pt-6" : "", de ? "pt-4" : "", fe ? "pb-2" : "pb-8", me ? "flex flex-col gap-4" : "", g), Ie = de && ie !== null && !Se ? { minHeight: `${String(ie)}px` } : void 0, Le = Q(pR, v), Re = Q("inline-flex p-1 -m-1", x), ze = Q("px-5", ue ? "pb-1" : "pt-5 pb-1"), Be = HD(n), Ve = !ye || De, He = !!Be, Ue;
	(He || !Ve) && (Ue = Be);
	let We = Ve && !He ? Ce : void 0, U = HD(r), qe = oy("sm"), Ye = C && t ? /* @__PURE__ */ q("span", {
		className: Re,
		children: /* @__PURE__ */ q(Pv, {
			variant: "neutral",
			size: qe,
			showTooltip: !1,
			iconOnly: !0,
			label: S,
			"aria-label": S,
			onClick: t,
			leadingIcon: /* @__PURE__ */ q(pD, {})
		})
	}) : null;
	return Qe(/* @__PURE__ */ J("div", {
		className: Q(qL, _e ? "absolute" : "fixed", e ? "pointer-events-auto" : "pointer-events-none", p),
		role: "presentation",
		"aria-hidden": !e,
		onPointerDown: Ee,
		children: [/* @__PURE__ */ q("div", { className: Q(JL, ke) }), /* @__PURE__ */ q("div", {
			ref: j,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": Ue,
			"aria-labelledby": We,
			"aria-describedby": Ve ? we : void 0,
			tabIndex: -1,
			"data-theme": he,
			className: Ae,
			children: Ve && /* @__PURE__ */ J("div", {
				"data-modal-internals": "",
				className: Me,
				children: [
					ue && /* @__PURE__ */ q("div", {
						className: Ne,
						children: /* @__PURE__ */ q(dy, {
							as: "div",
							flush: !0,
							size: "md",
							headline: Be,
							headlineId: He ? le : void 0,
							headlineClassName: Pe,
							startActions: !He && n ? /* @__PURE__ */ q("div", {
								id: le,
								className: Pe,
								children: n
							}) : void 0,
							subheader: U ?? (r ? /* @__PURE__ */ q("p", {
								id: B,
								className: V,
								children: r
							}) : void 0),
							subheaderId: U ? B : void 0,
							subheaderClassName: U ? V : void 0,
							actions: Ye ? /* @__PURE__ */ q("div", {
								className: "flex items-center gap-2",
								children: Ye
							}) : void 0
						})
					}),
					!ue && Ye ? /* @__PURE__ */ q("div", {
						className: "absolute right-5 top-4 z-[1]",
						children: Ye
					}) : null,
					o && /* @__PURE__ */ q("div", {
						className: ze,
						children: /* @__PURE__ */ q(mL, {
							options: o.options,
							value: o.value,
							onChange: o.onChange,
							ariaLabel: o.ariaLabel,
							disabled: o.disabled,
							variant: "compact",
							overflowBehaviour: "scroll",
							overflowMode: "full",
							className: "w-full [&_[data-switcher-mode=full]]:w-full",
							optionClassName: "flex-1 justify-center"
						})
					}),
					pe ? /* @__PURE__ */ q("div", {
						className: Q("flex-shrink-0", mR, _),
						"data-slot": "sticky-content",
						children: c
					}) : null,
					/* @__PURE__ */ J("div", {
						ref: M,
						className: Fe,
						style: Ie,
						children: [me && i ? /* @__PURE__ */ q(Wv, {
							as: "div",
							size: "sm",
							variant: i.variant,
							children: typeof i.message == "string" ? /* @__PURE__ */ q("p", { children: i.message }) : i.message
						}) : null, xe ? /* @__PURE__ */ q("div", {
							"data-slot": "modal-tab-panels",
							className: "grid min-w-0 grid-cols-1 items-start",
							children: xe.map(({ value: e, panel: t }) => {
								let n = e === o?.value;
								return /* @__PURE__ */ q("div", {
									role: "tabpanel",
									"aria-hidden": !n || void 0,
									"data-active": n ? "true" : "false",
									className: Q("min-w-0 [grid-area:1/1]", !n && "invisible pointer-events-none select-none"),
									children: t
								}, e);
							})
						}) : s]
					}),
					fe && /* @__PURE__ */ q("div", {
						className: Le,
						children: l
					})
				]
			})
		})]
	}), Te);
}
//#endregion
//#region ../ui/src/lib/motionPrimitives.ts
var yR = "transition-transform duration-[440ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", bR = "transition-opacity duration-[320ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", xR = "inset-0 z-[1050] flex h-full w-full overflow-clip", SR = 440, CR = yR, wR = yR, TR = "transition-opacity duration-[260ms] ease-out motion-reduce:transition-none", ER = "transition-opacity duration-[150ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", DR = bR, OR = bR, kR = ["absolute inset-0 h-full w-full", "bg-[var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]"].join(" "), AR = [
	"relative pointer-events-auto flex min-h-0 min-w-0 max-w-full shrink-0 flex-col overflow-hidden",
	"bg-[var(--pc-color-drawer-background,var(--pc-color-surface))] text-[var(--pc-color-drawer-text,var(--pc-color-text))] shadow-2xl",
	"transform-gpu will-change-transform [backface-visibility:hidden] [contain:layout_paint_style]"
].join(" "), jR = ["px-4 py-3 @md:px-5 @md:py-4", "bg-inherit"].join(" "), MR = "border-b border-[var(--pc-color-border)]", NR = "text-lg font-medium text-[var(--pc-color-drawer-text,var(--pc-color-text))] leading-none", PR = "text-sm text-[var(--pc-color-drawer-muted-text,var(--pc-color-text-secondary))] leading-none", FR = [
	"min-h-0 w-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden",
	"[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]",
	"[&::-webkit-scrollbar]:w-[6px]",
	"[&::-webkit-scrollbar-track]:bg-transparent",
	"[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]",
	"[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"
].join(" "), IR = Q(HL, "bg-inherit"), LR = Q(UL, "bg-inherit"), RR = {
	bottom: {
		container: "items-end justify-center",
		rounding: "rounded-t-[var(--pc-radius-3xl)]",
		open: "translate-y-0",
		closed: "translate-y-full"
	},
	top: {
		container: "items-start justify-center",
		rounding: "rounded-b-[var(--pc-radius-3xl)]",
		open: "translate-y-0",
		closed: "-translate-y-full"
	},
	right: {
		container: "items-center justify-end",
		rounding: "rounded-l-[var(--pc-radius-3xl)]",
		open: "translate-x-0",
		closed: "translate-x-full"
	},
	left: {
		container: "items-center justify-start",
		rounding: "rounded-r-[var(--pc-radius-3xl)]",
		open: "translate-x-0",
		closed: "-translate-x-full"
	}
}, zR = {
	bottom: {
		xs: "w-full max-h-[min(56vh,24rem,100%)] min-h-[min(24vh,100%)]",
		sm: "w-full max-h-[min(68vh,30rem,100%)] min-h-[min(28vh,100%)]",
		md: "w-full max-h-[min(80vh,36rem,100%)] min-h-[min(32vh,100%)]",
		lg: "w-full max-h-[min(88vh,44rem,100%)] min-h-[min(36vh,100%)]",
		xl: "w-full max-h-[min(92vh,52rem,100%)] min-h-[min(40vh,100%)]",
		full: "w-full h-full max-h-full"
	},
	top: {
		xs: "w-full max-h-[min(56vh,24rem,100%)] min-h-[min(24vh,100%)]",
		sm: "w-full max-h-[min(68vh,30rem,100%)] min-h-[min(28vh,100%)]",
		md: "w-full max-h-[min(80vh,36rem,100%)] min-h-[min(32vh,100%)]",
		lg: "w-full max-h-[min(88vh,44rem,100%)] min-h-[min(36vh,100%)]",
		xl: "w-full max-h-[min(92vh,52rem,100%)] min-h-[min(40vh,100%)]",
		full: "w-full h-full max-h-full"
	},
	right: {
		xs: "h-full w-[min(90vw,20rem)] max-w-full min-w-[14rem]",
		sm: "h-full w-[min(90vw,22rem)] max-w-full min-w-[15rem]",
		md: "h-full w-[min(90vw,24rem)] max-w-full min-w-[16rem]",
		lg: "h-full w-[min(96vw,40rem)] max-w-full min-w-[20rem]",
		xl: "h-full w-[min(98vw,48rem)] max-w-full min-w-[22rem]",
		full: "h-full w-full max-w-full"
	},
	left: {
		xs: "h-full w-[min(90vw,20rem)] max-w-full min-w-[14rem]",
		sm: "h-full w-[min(90vw,22rem)] max-w-full min-w-[15rem]",
		md: "h-full w-[min(90vw,24rem)] max-w-full min-w-[16rem]",
		lg: "h-full w-[min(96vw,40rem)] max-w-full min-w-[20rem]",
		xl: "h-full w-[min(98vw,48rem)] max-w-full min-w-[22rem]",
		full: "h-full w-full max-w-full"
	}
}, BR = () => () => void 0, VR = () => typeof document > "u" ? null : document.body, HR = () => null, UR = 0;
function WR({ isOpen: e, onClose: t, side: n = "right", size: r, title: i, description: o, headerActions: s, variant: c, onBack: l, backButtonLabel: u = "Back", backButtonDisabled: d = !1, children: f, portalContainer: p, overlayClassName: m, contentClassName: h, bodyClassName: g, closeOnOverlayClick: _ = !0, closeOnEscape: v = !0, trapFocus: y = !0, restoreFocus: b = !0, initialFocusRef: x, ariaLabel: S, ariaLabelledby: C, ariaDescribedby: w, contentRef: T, fullSize: E = !1, rootClassName: D, showCloseButton: O = !0, closeButtonDisabled: k = !1, closeButtonClassName: A, closeButtonLabel: j, stickyContent: M, stickyContentClassName: N, footer: P, showHeaderDivider: F = !1, animationMode: I = zL }) {
	let { shouldPreloadClosedState: ee, shouldRender: te } = VL({
		isOpen: e,
		animationMode: I
	}), ne = G(e), re = G(null), L = G(null), R = G(null), z = G(null), ie = G(null), [ae, oe] = K(e), [se, ce] = K(!1), [le, B] = K(!1), ue = E ? "full" : r ?? "md";
	ie.current === null && (ie.current = `pc-drawer-${String(++UR)}`);
	let de = ie.current, fe = W(() => ({
		...RR[n],
		size: zR[n][ue]
	}), [ue, n]), pe = Eb(), me = p ?? pe, he = Xe(BR, VR, HR);
	Je(() => {
		L.current !== null && (window.cancelAnimationFrame(L.current), L.current = null), R.current !== null && (window.cancelAnimationFrame(R.current), R.current = null), re.current !== null && (window.clearTimeout(re.current), re.current = null);
		let t = ne.current;
		if (ne.current = e, oe(e), e) {
			if (B(!1), I === "standard") {
				ce(!1);
				return;
			}
			ce(!0), L.current = window.requestAnimationFrame(() => {
				L.current = null, R.current = window.requestAnimationFrame(() => {
					ce(!1), R.current = null;
				});
			});
		} else if (ce(!1), !t) B(!1);
		else if (I === "standard") B(!1);
		else return B(!0), re.current = window.setTimeout(() => {
			B(!1), re.current = null;
		}, SR), () => {
			re.current !== null && (window.clearTimeout(re.current), re.current = null), L.current !== null && (window.cancelAnimationFrame(L.current), L.current = null), R.current !== null && (window.cancelAnimationFrame(R.current), R.current = null);
		};
	}, [I, e]), Je(() => {
		e && D_();
	}, [e]), Rb({
		containerRef: z,
		isOpen: e,
		instanceId: de,
		priority: Db.drawer
	}), zb({
		containerRef: z,
		initialFocusRef: x,
		instanceId: de,
		isOpen: e,
		restoreFocus: b
	}), Bb({
		closeOnEscape: v,
		containerRef: z,
		instanceId: de,
		isOpen: e,
		onClose: t,
		trapFocus: y
	}), Ge(() => {
		if (e && !me) return Mb();
	}, [e, me]);
	let ge = H((e) => {
		z.current = e, T?.(e);
	}, [T]), _e = H(() => {
		_ && t && t();
	}, [_, t]), ve = H((e) => {
		e.stopPropagation();
	}, []), ye = W(() => Q(me ? `absolute ${xR}` : `fixed ${xR}`, m), [m, me]), be = le || !e && ae, xe = fe.closed;
	se ? xe = fe.closed : (ee && !be || e) && (xe = fe.open);
	let Se;
	se ? Se = "transition-none" : ee && !be && (Se = "invisible opacity-0 transition-none");
	let Ce = "opacity-0 transition-none";
	se || ee && !be ? Ce = "opacity-0 transition-none" : e ? Ce = "opacity-100 transition-none" : be && (Ce = `opacity-0 ${ER}`);
	let we = W(() => Q(AR, a("drawer"), e ? CR : wR, fe.size, fe.rounding, xe, xe === fe.open ? "transform-none translate-none will-change-auto" : void 0, Se, h), [
		xe,
		Se,
		h,
		e,
		fe
	]), Te = W(() => j ?? S ?? "Close drawer", [S, j]), Ee = Ev(c), De = Ke(), Oe = Ke(), ke = C || (i ? De : void 0), Ae = w || (o ? Oe : void 0), je = ke ? void 0 : S, Me = me ?? he;
	if (!(te || be) || !Me) return null;
	let Ne = !!l, Pe = !!(i || o || s || Ne || O && t), V = oy("sm"), Fe = HD(i), Ie = !!Fe, Le = HD(o), Re = e || be, ze = "opacity-0 transition-none";
	se || ee && !be ? ze = "opacity-0 transition-none" : e ? ze = `opacity-100 ${DR}` : be && (ze = `opacity-0 ${OR}`);
	let Be = be ? `opacity-0 ${TR}` : "opacity-100 transition-none";
	return Qe(/* @__PURE__ */ J("div", {
		onClick: ve,
		className: Q(ye, D, Re ? "pointer-events-auto" : "pointer-events-none"),
		role: "presentation",
		"aria-hidden": !e,
		children: [/* @__PURE__ */ q("button", {
			type: "button",
			className: Q(kR, ze),
			"aria-label": Te,
			onClick: _e
		}), /* @__PURE__ */ q("div", {
			className: Q("pointer-events-none relative flex h-full w-full min-w-0 overflow-clip", fe.container, Be),
			children: /* @__PURE__ */ q("div", {
				ref: ge,
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": ke,
				"aria-describedby": Ae,
				"aria-label": je,
				tabIndex: -1,
				"data-theme": Ee,
				className: Q("pointer-events-auto", we),
				children: /* @__PURE__ */ J("div", {
					"data-drawer-internals": "",
					className: Q("flex min-h-0 min-w-0 flex-1 flex-col", Ce),
					children: [
						Pe && /* @__PURE__ */ q("header", {
							className: Q(jR, F && MR),
							children: /* @__PURE__ */ q(dy, {
								as: "div",
								flush: !0,
								size: "sm",
								headline: Fe,
								headlineId: Ie ? ke : void 0,
								headlineClassName: NR,
								startActions: !Ie && i ? /* @__PURE__ */ q("div", {
									id: ke,
									className: NR,
									children: i
								}) : void 0,
								subheader: Le ?? (o ? /* @__PURE__ */ q("p", {
									id: Ae,
									className: PR,
									children: o
								}) : void 0),
								subheaderId: Le ? Ae : void 0,
								subheaderClassName: Le ? PR : void 0,
								actions: /* @__PURE__ */ J("div", {
									className: "flex items-center gap-2",
									children: [
										Ne && l && /* @__PURE__ */ q(Pv, {
											variant: "neutral",
											size: V,
											"aria-label": u,
											onClick: l,
											disabled: d,
											iconOnly: !0,
											label: u,
											leadingIcon: /* @__PURE__ */ q(dD, {})
										}),
										s,
										O && t && /* @__PURE__ */ q("span", {
											className: A,
											children: /* @__PURE__ */ q(Pv, {
												variant: "neutral",
												size: V,
												showTooltip: !1,
												"aria-label": Te,
												onClick: t,
												disabled: k,
												iconOnly: !0,
												label: Te,
												leadingIcon: /* @__PURE__ */ q(pD, {})
											})
										})
									]
								})
							})
						}),
						M ? /* @__PURE__ */ q("div", {
							className: Q("flex-shrink-0", LR, N),
							"data-slot": "sticky-content",
							children: M
						}) : null,
						/* @__PURE__ */ q("div", {
							className: Q(FR, g),
							children: f
						}),
						P ? /* @__PURE__ */ q("div", {
							className: Q("flex-shrink-0", IR),
							children: P
						}) : null
					]
				})
			})
		})]
	}), Me);
}
We(async () => ({ default: (await import("./src-C-Uu-xe6.js").then((e) => e.i)).default }));
var GR = "h-3.5 w-3.5 shrink-0";
Y("text-[length:var(--pc-font-input-meta-size,0.75rem)]", "leading-[var(--pc-font-input-meta-line-height,1rem)]", "[font-weight:var(--pc-font-input-meta-weight,400)]", "[letter-spacing:var(--pc-font-input-meta-letter-spacing,inherit)]", "[font-style:var(--pc-font-input-meta-style,inherit)]", "[text-transform:var(--pc-font-input-meta-text-transform,inherit)]", "@md:text-[length:var(--pc-font-input-meta-size,0.875rem)]", "@md:leading-[var(--pc-font-input-meta-line-height,1.25rem)]");
var KR = () => /* @__PURE__ */ J("svg", {
	viewBox: "0 0 20 20",
	width: "14",
	height: "14",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.4",
	className: GR,
	"aria-hidden": "true",
	"data-testid": "cashier-preview-coins-icon",
	children: [
		/* @__PURE__ */ q("ellipse", {
			cx: "7.5",
			cy: "5.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ q("path", { d: "M3 5.5v4.2c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2V5.5" }),
		/* @__PURE__ */ q("ellipse", {
			cx: "12.5",
			cy: "11.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ q("path", { d: "M8 11.5v3.8c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2v-3.8" })
	]
});
Y("[--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]", "min-w-0 w-full"), Y("[--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))]", "[--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))]", "[--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))]", "enabled:hover:text-[var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))]", "enabled:active:text-[var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))]", "rounded-[var(--pc-radius-suggested-amount,var(--pc-radius-3xl))]", "min-w-0 w-full");
function qR({ balance: e = "€1,340", bonusBalance: t = "€100", balanceIcon: n = /* @__PURE__ */ q(KR, {}), bonusIcon: r = /* @__PURE__ */ q(CD, { className: GR }), ariaLabel: i = "Balance and bonus balance", testId: a, rootAttributes: o, balanceRowAttributes: s, balanceValueAttributes: c, bonusRowAttributes: l, bonusValueAttributes: u }) {
	let d = e !== null, f = t !== null;
	return /* @__PURE__ */ J("div", {
		id: o?.id,
		className: Y(o?.className, "pc-ui__cashier-user-balance-chip inline-flex shrink-0 items-center gap-3 rounded-[var(--pc-radius-full)]", "bg-[var(--pc-color-surface)] px-3 py-1.5 text-base font-medium text-[var(--pc-color-text)]"),
		"data-pc-slot": o?.["data-pc-slot"],
		"data-pc-slug": o?.["data-pc-slug"],
		"data-pc-part": o?.["data-pc-part"],
		"data-theme": "neutral",
		"aria-label": i,
		"data-testid": o?.["data-testid"] ?? a,
		children: [d && /* @__PURE__ */ J("span", {
			id: s?.id,
			className: Y(s?.className, "inline-flex items-center gap-1 whitespace-nowrap"),
			"data-pc-slot": s?.["data-pc-slot"],
			"data-pc-slug": s?.["data-pc-slug"],
			"data-pc-part": s?.["data-pc-part"],
			"data-testid": s?.["data-testid"],
			children: [n, /* @__PURE__ */ q("span", {
				id: c?.id,
				className: c?.className,
				"data-pc-slot": c?.["data-pc-slot"],
				"data-pc-slug": c?.["data-pc-slug"],
				"data-pc-part": c?.["data-pc-part"],
				"data-testid": c?.["data-testid"],
				children: e
			})]
		}), f && /* @__PURE__ */ J("span", {
			id: l?.id,
			className: Y(l?.className, "inline-flex items-center gap-1 whitespace-nowrap"),
			"data-pc-slot": l?.["data-pc-slot"],
			"data-pc-slug": l?.["data-pc-slug"],
			"data-pc-part": l?.["data-pc-part"],
			"data-testid": l?.["data-testid"],
			children: [r, /* @__PURE__ */ q("span", {
				id: u?.id,
				className: u?.className,
				"data-pc-slot": u?.["data-pc-slot"],
				"data-pc-slug": u?.["data-pc-slug"],
				"data-pc-part": u?.["data-pc-part"],
				"data-testid": u?.["data-testid"],
				children: t
			})]
		})]
	});
}
[
	"overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-gutter:stable]",
	"[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]",
	"[&::-webkit-scrollbar]:w-[6px]",
	"[&::-webkit-scrollbar-track]:bg-transparent",
	"[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]",
	"[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"
].join(" "), Y("z-[var(--pc-workspace-pane-surface-toolbar-z-index,10)] shrink-0", a("panel"), "rounded-[var(--pc-radius-workspace-main,var(--pc-radius-3xl))]", "[background:var(--pc-color-panel-background,var(--pc-color-surface))]", "p-0 text-sm text-[var(--pc-color-panel-text,var(--pc-color-text))]"), Y("z-[var(--pc-workspace-pane-surface-toolbar-z-index,10)] shrink-0"), Y("sticky bottom-0 z-[var(--pc-workspace-pane-surface-toolbar-z-index,10)] shrink-0", "mx-[var(--pc-workspace-main-pane-padding-offset)] mb-[var(--pc-workspace-main-pane-padding-offset)]", "px-[var(--pc-workspace-main-pane-padding-resolved)]", "pt-[var(--pc-workspace-action-bar-clearance,12px)] pb-[var(--pc-workspace-main-pane-padding-resolved)]", "[background:var(--pc-color-panel-background,var(--pc-color-surface))]"), [
	"overflow-y-auto [overflow-x:clip] overscroll-y-contain [scrollbar-gutter:stable]",
	"[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]",
	"[&::-webkit-scrollbar]:w-[6px]",
	"[&::-webkit-scrollbar-track]:bg-transparent",
	"[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]",
	"[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"
].join(" ");
//#endregion
//#region ../ui/src/lib/layout/sidebar/SidebarItemButton.tsx
var JR = Y("flex w-full flex-col items-start gap-0 overflow-hidden rounded-[var(--pc-radius-lg)]", "cursor-pointer text-left font-normal focus-visible:outline-none", "focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)]", "disabled:cursor-default disabled:opacity-60");
He(function({ size: e = "md", selected: t = !1, variant: n, appearance: r, chrome: i = !0, className: a, type: o = "button", ...s }, c) {
	let l = n ?? (t ? "secondary" : void 0), u = r ?? (t ? "solid" : "ghost");
	return /* @__PURE__ */ q("button", {
		ref: c,
		type: o,
		"data-theme": Ev(l),
		className: Q(JR, e === "lg" && "px-3.5 py-2", e === "sm" && "px-2.5 py-1.5", e === "md" && "px-3 py-1.5", dv(u), tv(i), t ? "transition-none" : "", a),
		"data-selected": t ? "true" : void 0,
		...s
	});
}), Y("[--spacing:4px]"), Y("rounded-[var(--pc-radius-lg)]", "border border-[var(--pc-color-depth-4)]", "p-3");
//#endregion
//#region ../ui/src/lib/RecordFieldPrimitives.tsx
var YR = {
	sm: "text-sm",
	xs: "text-xs"
};
Y(YR.sm, "font-medium text-[var(--pc-color-text)]"), Y(YR.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), Y("pc-pseudo-mono", YR.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), Y("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"), Y("@container/preference-panel", "flex w-full flex-col");
var XR = Y("relative grid w-full grid-cols-1", "@xl/preference-panel:gap-x-6", "@xl/preference-panel:grid-cols-[minmax(16rem,0.95fr)_minmax(16rem,1.05fr)]");
Y(XR, "gap-y-3 px-3 py-3.5"), Y(XR, "gap-y-2 px-0.5 py-0.5 -mx-0.5"), Y("text-sm leading-5 text-[var(--pc-color-text-muted)]", "sr-only @xl/preference-panel:not-sr-only"), Y("text-sm leading-5 text-[var(--pc-color-text)]", "sr-only @xl/preference-panel:not-sr-only"), Y("flex min-w-0 justify-between gap-3"), Y("absolute right-3 top-3.5 flex shrink-0 items-center", "@xl/preference-panel:static"), Be("outlined");
//#endregion
//#region ../ui/src/lib/FullscreenLoader.tsx
function ZR({ label: e = "Loading", message: t, testId: n, delayMs: r = 180, fadeInMs: i = 160, indicatorSize: a = "xl", indicatorTone: o = "accent", iconSlot: s, className: c, onVisibleChange: l, style: u, ...d }) {
	let f = Math.max(0, r), p = Math.max(0, i), m = f > 0, h = p > 0, [g, _] = K(!1), v = !m || g, y = t ?? e, b = o === "inverted" ? "text-[var(--pc-text-inverted-80,var(--pc-color-surface))]" : "text-[var(--pc-color-text-muted,var(--pc-color-text))]", x = h ? {
		...u,
		"--pc-fullscreen-loader-fade-in-ms": `${String(p)}ms`
	} : u;
	return Ge(() => {
		if (!m) return;
		let e = window.setTimeout(() => {
			_(!0);
		}, f);
		return () => {
			window.clearTimeout(e);
		};
	}, [f, m]), Ge(() => {
		l?.(v);
	}, [v, l]), v ? /* @__PURE__ */ J("div", {
		...d,
		"data-slot": "fullscreen-loader",
		"data-testid": n,
		role: "status",
		"aria-label": y,
		"aria-live": "polite",
		style: x,
		className: Q(Y("flex h-full min-h-full w-full min-w-0 flex-1", "flex-col items-center justify-center gap-4 px-6 py-7", "text-[var(--pc-color-text)]", h ? "pc-fullscreen-loader-enter" : "opacity-100"), c),
		children: [/* @__PURE__ */ q(H_, {
			size: a,
			tone: o,
			iconSlot: s,
			fadeInMs: 0
		}), t ? /* @__PURE__ */ q("span", {
			"data-slot": "fullscreen-loader-message",
			className: Y("text-center text-sm font-medium leading-5", b),
			children: t
		}) : /* @__PURE__ */ q("span", {
			className: "sr-only",
			children: y
		})]
	}) : null;
}
Y("[background:var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-text)]");
//#endregion
//#region ../ui/src/lib/useActionConfirmation.tsx
var QR = (e) => typeof e == "object" && !!e, $R = (e) => {
	for (let t of [
		"message",
		"error",
		"statusText",
		"title",
		"detail"
	]) {
		let n = e[t], r = z(n);
		if (r) return r;
	}
	let t = e.error;
	if (t && typeof t == "object" && typeof t.message == "string") {
		let e = z(t.message);
		if (e) return e;
	}
	if ("body" in e) {
		let t = e.body, n = z(t);
		if (n) return n;
		if (QR(t)) {
			let e = $R(t);
			if (e) return e;
		}
	}
	return null;
}, ez = (e) => {
	if (typeof e == "string") return z(e);
	if (e instanceof Error) return z(e.message);
	if (QR(e)) {
		let t = $R(e);
		if (t) return t;
	}
	return null;
}, tz = 440;
function nz(e = {}) {
	let [t, n] = K(null), [r, i] = K(null), [a, o] = K(!1), [s, c] = K(!1), l = G(null), u = G(null), d = e.presentation ?? "modal", f = e.drawer, p = e.modal, m = e.renderActions, h = d === "drawer", g = h, _ = H(() => {
		l.current !== null && (clearTimeout(l.current), l.current = null);
	}, []), v = H(() => {
		u.current !== null && (typeof window < "u" && window.cancelAnimationFrame(u.current), u.current = null);
	}, []);
	Ge(() => () => {
		_(), v();
	}, [_, v]);
	let y = H(() => {
		o(!1), i(null), g ? (c(!1), _(), l.current = setTimeout(() => {
			n(null), l.current = null;
		}, tz)) : (n(null), c(!1));
	}, [_, g]), b = H(async () => {
		if (t && !a) {
			o(!0), i(null);
			try {
				await t.onConfirm(), y();
			} catch (e) {
				let n = t.errorMessage || ez(e) || "Unable to complete action.";
				i(n), o(!1);
			}
		}
	}, [
		y,
		a,
		t
	]);
	return {
		openActionConfirmation: H((e) => {
			_(), v(), n(e), i(null), o(!1), g ? (c(!1), typeof window > "u" || typeof window.requestAnimationFrame != "function" ? c(!0) : u.current = window.requestAnimationFrame(() => {
				u.current = window.requestAnimationFrame(() => {
					u.current = null, c(!0);
				});
			})) : c(!0);
		}, [
			_,
			v,
			g
		]),
		actionConfirmationModal: W(() => {
			if (!t) return null;
			let e = z(t.confirmLabel) ?? "Confirm", n = t.confirmVariant ?? "neutral", i = /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ q("div", {
					className: "text-sm text-[var(--pc-color-text-muted)]",
					children: t.description
				}), r ? /* @__PURE__ */ q("p", {
					className: "text-sm text-[var(--pc-color-danger)]",
					children: r
				}) : null]
			}), o = m, c = o ? /* @__PURE__ */ q(o, {
				confirmLabel: e,
				confirmVariant: n,
				isSubmitting: a,
				onConfirm: () => {
					b();
				}
			}) : /* @__PURE__ */ q("div", {
				className: "flex justify-end gap-2",
				children: /* @__PURE__ */ q(Pv, {
					type: "button",
					variant: n,
					loading: a,
					onClick: () => {
						b();
					},
					label: e
				})
			}), l = h ? f?.actionsPlacement ?? "content" : "content", u = /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-4",
				children: [i, !h || l === "content" ? c : null]
			});
			if (h) {
				let e;
				return l === "footer" && (e = f?.renderFooter ? f.renderFooter(c) : c), /* @__PURE__ */ q(WR, {
					isOpen: s,
					onClose: y,
					side: f?.side,
					variant: f?.variant,
					title: t.title,
					headerActions: f?.headerActions,
					onBack: f?.onBack,
					backButtonLabel: f?.backButtonLabel,
					backButtonDisabled: f?.backButtonDisabled,
					portalContainer: f?.portalContainer,
					closeButtonLabel: f?.closeButtonLabel,
					closeOnOverlayClick: f?.closeOnOverlayClick,
					closeOnEscape: f?.closeOnEscape,
					showHeaderDivider: f?.showHeaderDivider,
					size: f?.size,
					fullSize: f?.fullSize,
					ariaLabel: f?.ariaLabel,
					ariaLabelledby: f?.ariaLabelledby,
					ariaDescribedby: f?.ariaDescribedby,
					showCloseButton: f?.showCloseButton,
					footer: e,
					children: /* @__PURE__ */ q("div", {
						className: "px-5 pb-5 pt-2",
						children: u
					})
				});
			}
			return /* @__PURE__ */ q(vR, {
				isOpen: s,
				onClose: y,
				title: t.title,
				notification: t.notification,
				size: p?.size,
				variant: p?.variant,
				portalContainer: p?.portalContainer,
				closeButtonLabel: p?.closeButtonLabel,
				showCloseButton: p?.showCloseButton,
				closeOnOverlayClick: p?.closeOnOverlayClick,
				closeOnEscape: p?.closeOnEscape,
				children: u
			});
		}, [
			r,
			y,
			b,
			a,
			t,
			m,
			s,
			f,
			h,
			p
		]),
		isActionConfirmationOpen: s,
		closeActionConfirmation: y
	};
}
//#endregion
//#region ../ui/src/lib/toast/ToastProvider.tsx
var rz = 6e3, iz = (e, t) => {
	switch (t.type) {
		case "upsert": {
			let n = e.findIndex((e) => e.id === t.toast.id);
			if (n >= 0) {
				let r = e.slice();
				return r[n] = t.toast, r;
			}
			return [...e, t.toast];
		}
		case "remove": return e.filter((e) => e.id !== t.id);
		case "setPaused": return e.map((e) => e.id === t.id ? {
			...e,
			isPaused: t.isPaused
		} : e);
		case "clear": return [];
		default: return e;
	}
}, az = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Math.random().toString(36).slice(2), oz = Be(null);
function sz({ children: e }) {
	let [t, n] = Ye(iz, []), r = G(/* @__PURE__ */ new Map()), i = H((e, t) => {
		n({
			type: "setPaused",
			id: e,
			isPaused: t
		});
	}, []), a = H((e) => {
		let t = r.current.get(e);
		t && (typeof window < "u" && t.timeoutId !== null && window.clearTimeout(t.timeoutId), r.current.delete(e));
	}, []), o = H((e) => {
		n({
			type: "remove",
			id: e
		});
	}, []), s = H((e, t) => {
		if (typeof window > "u") return;
		if (t <= 0) {
			a(e), o(e);
			return;
		}
		a(e);
		let n = window.setTimeout(() => {
			r.current.delete(e), o(e);
		}, t);
		r.current.set(e, {
			timeoutId: n,
			remaining: t,
			startedAt: Date.now()
		});
	}, [a, o]), c = H((e) => {
		a(e), o(e);
	}, [a, o]), l = H((e) => {
		let t = z(e.id) ?? az(), r = e.variant ?? "default", i = e.persistent ?? !1, o = rz;
		return n({
			type: "upsert",
			toast: {
				id: t,
				variant: r,
				message: e.message,
				description: e.description,
				action: e.action,
				isPaused: !1,
				category: i ? "persistent" : "transient",
				durationMs: o,
				createdAt: Date.now()
			}
		}), i ? a(t) : s(t, o), t;
	}, [a, s]), u = H((e) => {
		let t = r.current.get(e);
		if (!t) i(e, !0);
		else {
			if (t.timeoutId !== null && typeof window < "u") {
				let n = Date.now() - t.startedAt, i = Math.max(t.remaining - n, 0);
				window.clearTimeout(t.timeoutId), r.current.set(e, {
					timeoutId: null,
					remaining: i,
					startedAt: Date.now()
				});
			}
			i(e, !0);
		}
	}, [i]), d = H((e) => {
		let t = r.current.get(e);
		t && t.timeoutId === null ? t.remaining <= 0 ? (r.current.delete(e), o(e)) : (typeof window > "u" || s(e, t.remaining), i(e, !1)) : i(e, !1);
	}, [
		o,
		i,
		s
	]), f = H(() => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear(), n({ type: "clear" });
	}, [a]), p = H((e) => {
		let n = r.current.get(e);
		if (!n) {
			let n = t.find((t) => t.id === e);
			return !n || n.category !== "transient" ? null : 0;
		}
		if (typeof window > "u" || n.timeoutId === null) return n.remaining;
		let i = Date.now() - n.startedAt;
		return Math.max(n.remaining - i, 0);
	}, [t]);
	Ge(() => () => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear();
	}, [a]);
	let m = W(() => ({
		toasts: t,
		publish: l,
		dismiss: c,
		pause: u,
		resume: d,
		clear: f,
		getRemainingMs: p
	}), [
		f,
		c,
		p,
		u,
		l,
		d,
		t
	]);
	return /* @__PURE__ */ q(oz.Provider, {
		value: m,
		children: e
	});
}
var cz = () => {
	let e = U(oz);
	if (!e) throw Error("useToastContext must be used within a ToastProvider");
	return e;
}, lz = (e) => e ? {
	id: e.id,
	variant: e.kind === "error" ? "danger" : e.kind,
	message: e.message,
	description: e.description
} : null;
//#endregion
//#region ../ui/src/lib/toast/ToastItem.tsx
function uz({ toast: e, getRemainingMs: t, animationTick: n }) {
	if (e.category !== "transient") return null;
	let r = Math.max(n - e.createdAt, 0), i = t(e.id) ?? Math.max(e.durationMs - r, 0), a = e.durationMs > 0 ? Math.min(Math.max(i / e.durationMs, 0), 1) : 0;
	return /* @__PURE__ */ q("div", {
		"aria-hidden": "true",
		"data-progress-bar": "true",
		className: "pointer-events-none absolute bottom-0 left-0 right-0 h-1 rounded-b-[var(--pc-radius-lg)] bg-[var(--pc-color-depth-2)]",
		children: /* @__PURE__ */ q("div", {
			className: "h-full bg-[var(--pc-color-text)] w-[var(--pc-toast-progress)]",
			style: { "--pc-toast-progress": `${(a * 100).toFixed(2)}%` }
		})
	});
}
function dz({ toast: e, dismiss: t, pause: n, resume: r, getRemainingMs: i, animationTick: a }) {
	let o = e.category === "persistent", s = !!e.description, c = !!e.action, l = e.category === "transient", u = o ? "assertive" : "polite", d = o ? "alert" : "status", f = e.variant === "default" ? void 0 : e.variant, p = () => {
		n(e.id);
	}, m = () => {
		r(e.id);
	};
	return /* @__PURE__ */ q("div", {
		className: "pointer-events-auto w-full sm:w-auto sm:max-w-sm",
		children: /* @__PURE__ */ J("div", {
			role: d,
			"aria-live": u,
			"data-theme": f,
			className: Y("pointer-events-auto relative flex min-w-[min(90vw,24rem)] max-w-full flex-col overflow-hidden rounded-[var(--pc-radius-lg)] bg-[var(--pc-color-surface)] px-4 text-[var(--pc-color-text)]", l ? "pt-3 pb-3.5" : "py-3", "transition duration-200 shadow-lg", e.isPaused ? "opacity-95" : "opacity-100"),
			onPointerEnter: p,
			onPointerLeave: m,
			onFocusCapture: p,
			onBlurCapture: m,
			children: [/* @__PURE__ */ J("div", {
				className: "relative pr-8",
				children: [/* @__PURE__ */ J("div", {
					className: "flex min-w-0 flex-col gap-2",
					children: [
						/* @__PURE__ */ q("p", {
							className: "text-lg leading-5 font-medium",
							children: e.message
						}),
						s ? /* @__PURE__ */ q("p", {
							className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
							children: e.description
						}) : null,
						c ? /* @__PURE__ */ q("div", {
							className: "flex items-center",
							children: /* @__PURE__ */ q(Pv, {
								type: "button",
								size: "sm",
								variant: e.action?.variant ?? "secondary",
								appearance: e.action?.appearance ?? "ghost",
								showTooltip: !1,
								onClick: () => {
									e.action?.onClick(), e.action?.dismissOnClick && t(e.id);
								},
								label: e.action?.label ?? "Run action"
							})
						}) : null
					]
				}), /* @__PURE__ */ q("div", {
					className: "absolute inset-y-0 -right-0.5 flex items-center",
					children: /* @__PURE__ */ q(Pv, {
						size: "xs",
						variant: "neutral",
						appearance: "ghost",
						showTooltip: !1,
						"aria-label": "Dismiss notification",
						onClick: () => {
							t(e.id);
						},
						iconOnly: !0,
						label: "Dismiss notification",
						leadingIcon: /* @__PURE__ */ q(pD, {})
					})
				})]
			}), /* @__PURE__ */ q(uz, {
				toast: e,
				getRemainingMs: i,
				animationTick: a
			})]
		})
	});
}
//#endregion
//#region ../ui/src/lib/toast/layout.ts
var fz = {
	n: {
		anchorClassName: "top-6 left-1/2 -translate-x-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col-reverse"
	},
	ne: {
		anchorClassName: "top-6 right-3 sm:right-6",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col-reverse"
	},
	e: {
		anchorClassName: "top-1/2 right-3 sm:right-6 -translate-y-1/2",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col"
	},
	se: {
		anchorClassName: "bottom-6 right-3 sm:right-6",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col"
	},
	s: {
		anchorClassName: "bottom-6 left-1/2 -translate-x-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col"
	},
	sw: {
		anchorClassName: "bottom-6 left-3 sm:left-6",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col"
	},
	w: {
		anchorClassName: "top-1/2 left-3 sm:left-6 -translate-y-1/2",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col"
	},
	nw: {
		anchorClassName: "top-6 left-3 sm:left-6",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col-reverse"
	},
	c: {
		anchorClassName: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col"
	}
}, pz = (e) => fz[e];
//#endregion
//#region ../ui/src/lib/toast/ToastViewport.tsx
function mz(e) {
	let [t, n] = K(0);
	return Ge(() => {
		if (!e || typeof window > "u") return;
		let t = null, r = () => {
			n(Date.now()), t = window.requestAnimationFrame(r);
		};
		return t = window.requestAnimationFrame(r), () => {
			t !== null && window.cancelAnimationFrame(t);
		};
	}, [e]), t;
}
function hz({ orientation: e = "se", portalContainer: t }) {
	let { toasts: n, dismiss: r, pause: i, resume: a, getRemainingMs: o } = cz(), s = typeof document > "u" ? null : t ?? document.body, c = mz(n.some((e) => e.category === "transient" && !e.isPaused)), l = pz(e), u = Y("pointer-events-none z-[2147483647] flex w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] gap-3 sm:w-auto sm:max-w-none", t ? "absolute" : "fixed", l.anchorClassName, l.alignItemsClassName, l.stackDirectionClassName);
	return !s || n.length === 0 ? null : Qe(/* @__PURE__ */ q("div", {
		className: u,
		"data-slot": "toast-viewport",
		children: n.map((e) => /* @__PURE__ */ q(dz, {
			toast: e,
			dismiss: r,
			pause: i,
			resume: a,
			getRemainingMs: o,
			animationTick: c
		}, e.id))
	}), s);
}
//#endregion
//#region ../ui/src/lib/toast/useToast.ts
var gz = {
	default: "default",
	neutral: "neutral",
	secondary: "secondary",
	primary: "primary",
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
}, _z = (e, t, n) => ({
	id: n?.id,
	variant: e,
	message: t,
	description: n?.description,
	action: n?.action,
	persistent: n?.persistent ?? !1
}), vz = (e) => {
	let t = Object.keys(gz), n = {};
	return t.forEach((t) => {
		let r = gz[t];
		n[t] = (t, n) => e(_z(r, t, n));
	}), n;
}, yz = () => {
	let { publish: e, dismiss: t, pause: n, resume: r, clear: i, toasts: a } = cz();
	return {
		toast: W(() => ({
			push: (t) => e({
				...t,
				variant: t.variant ?? "default"
			}),
			...vz(e),
			fromStatus: (t, n) => {
				let r = lz(t);
				return r ? e({
					...r,
					id: n?.id ?? r.id,
					description: n?.description ?? r.description,
					persistent: n?.persistent ?? !1
				}) : null;
			}
		}), [e]),
		dismiss: t,
		pause: n,
		resume: r,
		clear: i,
		toasts: a
	};
};
//#endregion
//#region ../ui/src/lib/LinkButton.tsx
function bz({ label: e, variant: t = "secondary", appearance: n = "solid", size: r = "md", fullWidth: i = !1, alignment: a = "centre", chrome: o = !0, ...s }) {
	return /* @__PURE__ */ q("a", {
		...s,
		"data-theme": Ev(t),
		"data-pc-appearance": n,
		className: Q("pc-ui__button", sv, dv(n), mv(r), "whitespace-normal break-words text-center leading-tight [overflow-wrap:anywhere]", i && "w-full", a === "start" && "justify-start text-start", a === "end" && "justify-end text-end", tv(o)),
		children: /* @__PURE__ */ q("span", {
			className: Sv({
				loading: !1,
				alignment: a
			}),
			children: e
		})
	});
}
//#endregion
//#region src/components/ContentMessage.tsx
function xz({ content: e, appearance: t, variant: n, inheritTheme: r, size: i = "sm", chrome: a, className: o, markdownClassName: s, embedded: c = !1 }) {
	return /* @__PURE__ */ q(Wv, {
		as: "div",
		size: i,
		variant: n,
		inheritTheme: r,
		appearance: t === "plain" ? "ghost" : t,
		chrome: a,
		spacing: c ? "flush" : void 0,
		className: Y(c && "rounded-none border-x-0", o),
		children: /* @__PURE__ */ q(Gv, { children: /* @__PURE__ */ q(bP, {
			autolinkLiterals: !1,
			content: e,
			className: s
		}) })
	});
}
//#endregion
//#region src/context/domHooks.tsx
var Sz = "pc-cashier", Cz = (e) => e.replace(/^-+|-+$/g, ""), wz = (e, t = "item") => {
	let n = Cz((typeof e == "string" ? e : "").toLowerCase().replace(/[^a-z0-9]+/g, "-"));
	return n.length > 0 ? n : t;
}, Tz = () => {
	let e = /* @__PURE__ */ new Map();
	return (t, n = "item") => {
		let r = wz(t, n), i = (e.get(r) ?? 0) + 1;
		return e.set(r, i), i === 1 ? r : `${r}-${i.toString()}`;
	};
}, Ez = (e) => {
	let t = (e, t = "item") => wz(e, t), n = (n, r) => {
		let i = t(n, "slot"), a = r?.slug ? t(r.slug, r.fallbackSlug ?? "item") : null;
		return a ? `${e}-${i}-${a}` : `${e}-${i}`;
	}, r = (e, n) => {
		let r = `${Sz}__${t(e, "slot")}`, i = n?.slug ? t(n.slug, n.fallbackSlug ?? "item") : null;
		return i ? `${r} ${r}--${i}` : r;
	};
	return {
		prefix: e,
		baseClass: Sz,
		id: n,
		className: r,
		attrs: (e, n) => {
			let i = t(e, "slot"), a = n?.slug ? t(n.slug, n.fallbackSlug ?? "item") : null, o = n?.part ? t(n.part, n.fallbackPart ?? "part") : null;
			return {
				className: r(e, n),
				"data-pc-slot": i,
				...a ? { "data-pc-slug": a } : {},
				...o ? { "data-pc-part": o } : {}
			};
		},
		token: t
	};
}, Dz = Ez(Sz), Oz = Be(Dz), kz = (e) => {
	if (!e) return null;
	let t = wz(e, "");
	return t.length > 0 ? t : null;
};
function Az({ prefix: e, children: t }) {
	let n = kz(e) ?? Sz, r = W(() => Ez(n), [n]);
	return /* @__PURE__ */ q(Oz.Provider, {
		value: r,
		children: t
	});
}
var jz = () => U(Oz);
//#endregion
//#region src/hooks/useCashierFormatters.ts
function Mz(e, t, n, r) {
	return {
		currencyFormatter: W(() => $p(e, t, n), [
			e,
			n,
			t
		]),
		dateTimeFormatter: W(() => {
			try {
				return ae({
					locale: t,
					formatOptions: r
				});
			} catch {
				return null;
			}
		}, [r, t])
	};
}
//#endregion
//#region src/context/valueFormatter.tsx
var Nz = {
	currencyFormatter: null,
	formatCurrencyValue: () => "",
	formatDisplayValue: () => "",
	formatSummaryValue: tm()
}, Pz = Be(Nz);
function Fz({ children: e }) {
	let { currency: t, locale: n, currencyFormatOptions: r, dateTimeFormatOptions: i } = U(Hh), { currencyFormatter: a, dateTimeFormatter: o } = Mz(t, n, r, i), s = W(() => ({
		currencyFormatter: a,
		formatSummaryValue: tm({
			currency: t,
			currencyFormatter: a,
			locale: n,
			currencyFormatOptions: r
		}),
		formatCurrencyValue: (e) => em(e, a),
		formatDisplayValue: (e) => rm(e, a, o, n, i)
	}), [
		t,
		r,
		a,
		i,
		o,
		n
	]);
	return /* @__PURE__ */ q(Pz.Provider, {
		value: s,
		children: e
	});
}
var Iz = () => U(Pz), Lz = () => () => void 0, Rz = () => void 0, zz = (e, { paymentStatus: t, paymentId: n, authoritativeAmount: r, authoritativeCurrency: i, previewAmount: a, additionalAwards: o, bonusPreviewOwned: s = e === "bonusSelection" } = {}) => {
	let c = U(Hh), l = Wh(), u = l?.attempt, d = Xe(u?.subscribe ?? Lz, u?.getSnapshot ?? Rz, u?.getSnapshot ?? Rz), f = Xe(l?.subscribe ?? Lz, l?.getSnapshot ?? Rz, l?.getSnapshot ?? Rz), { translateKey: p, resolveTextKey: m } = Jh(), { formatCurrencyValue: h } = Iz();
	return W(() => mh({
		config: c,
		attempt: d,
		screen: e,
		paymentStatus: t,
		paymentId: n,
		authoritativeAmount: r,
		authoritativeCurrency: i,
		previewAmount: c.paymentFormDraft?.amount ?? c.comboViewFormDraft?.amount ?? a,
		additionalAwards: o,
		bonusPreviewOwned: s,
		translateKey: p,
		resolveTextKey: m,
		formatCurrencyValue: h,
		canRestartPurchase: f?.lifecycle !== "disposed" && (l?.canRestartPurchase() ?? !1)
	}), [
		c,
		d,
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		p,
		m,
		h,
		l,
		f
	]);
};
//#endregion
//#region src/components/PriceComparison.tsx
function Bz({ price: e, showAdvertisedDiscount: t = !0 }) {
	return /* @__PURE__ */ J("span", {
		className: "inline-flex max-w-full flex-col items-end gap-0.5 tabular-nums",
		"data-pc-price-comparison": !0,
		children: [
			/* @__PURE__ */ J("span", {
				className: "inline-flex max-w-full flex-wrap items-baseline justify-end gap-x-2",
				children: [e.reference && /* @__PURE__ */ q("del", {
					className: "text-xs text-[var(--pc-color-danger-text)]",
					children: /* @__PURE__ */ q("bdi", { children: e.reference.display })
				}), /* @__PURE__ */ q("bdi", {
					"data-pc-current-price": !0,
					children: e.current.display
				})]
			}),
			!e.reference && e.savingLabel && /* @__PURE__ */ q("span", {
				className: "text-xs font-medium text-[var(--pc-color-success-text)]",
				"data-pc-saving": !0,
				dir: "auto",
				children: e.savingLabel.value
			}),
			t && e.advertisedLabel && /* @__PURE__ */ q("span", {
				className: "text-xs text-[var(--pc-color-text-muted)]",
				"data-pc-advertised-discount": !0,
				dir: "auto",
				children: e.advertisedLabel.value
			})
		]
	});
}
//#endregion
//#region src/components/SummaryRow.tsx
function Vz({ leading: e, children: t, trailing: n, compact: r = !1, baseline: i = !1, wrapTrailing: a = !1 }) {
	return /* @__PURE__ */ J("div", {
		"data-pc-summary-row-layout": !0,
		className: Y("flex w-full min-w-0", i ? "items-baseline" : "items-center", r ? "gap-x-2" : "gap-x-3"),
		children: [
			e && /* @__PURE__ */ q("div", {
				className: "shrink-0",
				children: e
			}),
			/* @__PURE__ */ q("div", {
				className: "min-w-0 flex-1",
				children: t
			}),
			n && /* @__PURE__ */ q("div", {
				className: Y("shrink-0 text-end tabular-nums", a === !0 && "max-w-[45%] break-words", a === "narrow" && "max-w-[60%] break-words @sm:max-w-none"),
				children: n
			})
		]
	});
}
function Hz({ children: e, className: t }) {
	return /* @__PURE__ */ q("div", {
		className: Y("flex min-w-0 flex-col", t),
		children: e
	});
}
var Uz = "text-xs @sm:text-sm @md:leading-tight";
function Wz({ leading: e, title: t, description: n, trailing: r, meta: i, compact: a = !1, wrap: o = !1, alignment: s = "start", domSlug: c }) {
	let l = jz();
	return /* @__PURE__ */ q(Vz, {
		leading: e,
		compact: a,
		wrapTrailing: o,
		trailing: r && /* @__PURE__ */ q("span", {
			className: "text-xs @xs:text-sm @md:text-base",
			children: r
		}),
		children: /* @__PURE__ */ J(Hz, { children: [
			/* @__PURE__ */ q("h3", {
				className: Y(c && l.className("payment-list-item-title", { slug: c }), "w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", "text-[var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))]", "group-hover:text-[var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))]", "group-active:text-[var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))]", o ? "break-words" : "truncate", s === "start" && "text-start", s === "centre" && "text-center", s === "end" && "text-end"),
				children: t
			}),
			n && /* @__PURE__ */ q("p", {
				className: Y(c && l.className("payment-list-item-description", { slug: c }), "text-xs @sm:text-sm @md:leading-tight", "text-[var(--pc-color-list-item-description-text,var(--pc-color-text-muted))]", "group-hover:text-[var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))]", "group-active:text-[var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))]", o && "break-words", s === "start" && "text-start", s === "centre" && "text-center", s === "end" && "text-end"),
				children: n
			}),
			i
		] })
	});
}
//#endregion
//#region src/components/PaymentTypeLogo.tsx
var Gz = (e) => e === d.GRID ? "grid" : "list", Kz = (e = "paymentTypeLogo", t = "list") => {
	let n = e === "bonusLogo" ? "bonus-logo" : "payment-type-logo", r = t === "grid" ? "100%" : "2.25rem", i = t === "grid" ? "42%" : "2.25rem";
	return [
		`[--pc-color-logo-mark-surface-background:var(--pc-color-${n}-background,var(--pc-color-logo-mark-background,transparent))]`,
		`[--pc-color-logo-mark-surface-text:var(--pc-color-${n}-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))]`,
		`[--pc-color-logo-mark-surface-border:var(--pc-color-${n}-border,var(--pc-color-logo-mark-border,transparent))]`,
		`[--pc-opacity-logo-mark-surface-image:var(--pc-opacity-${n}-image,var(--pc-opacity-logo-mark-image,1))]`,
		`[--pc-size-logo-mark-surface-image:var(--pc-size-${n}-image,var(--pc-size-logo-mark-image,85%))]`,
		`[--pc-size-logo-mark-surface-width:var(--pc-size-${n}-width,var(--pc-size-logo-mark-width,${r}))]`,
		`[--pc-size-logo-mark-surface-height:var(--pc-size-${n}-height,var(--pc-size-logo-mark-height,${i}))]`,
		`[--pc-radius-logo-mark-surface:var(--pc-radius-${n},var(--pc-radius-logo-mark,var(--pc-radius-lg)))]`,
		`[--pc-size-logo-mark-surface-border-width:var(--pc-size-${n}-border-width,var(--pc-size-logo-mark-border-width,1px))]`
	].join(" ");
};
function qz({ id: e, logo: t, alt: n, seed: r, className: i, contentClassName: o, rootAttributes: s, surface: c = "paymentTypeLogo", tone: l, listStyle: u, compact: d = !1, balanceLogo: f = !0, stuck: p = !1, content: m }) {
	let h = Gz(u);
	return /* @__PURE__ */ q(mb, {
		id: e,
		logo: t,
		alt: n,
		seed: r,
		className: [
			a(c),
			Kz(c, h),
			i
		].filter(Boolean).join(" "),
		contentClassName: o,
		rootAttributes: s,
		tone: l,
		layout: h,
		compact: d,
		balanceLogo: f,
		stuck: p,
		stablePresentation: !0,
		content: m
	});
}
//#endregion
//#region src/components/DisplayItemRow.tsx
function Jz({ item: e, presentation: t, embedded: n = !1 }) {
	let [r, i] = K(), a = e.image && r !== e.image.src ? e.image : void 0, o = t.size === "xs" || t.size === "sm";
	return /* @__PURE__ */ q(Wv, {
		as: "div",
		"data-pc-item": e.id,
		lang: e.localisation.locale,
		dir: e.localisation.direction,
		variant: t.themeVariant,
		inheritTheme: t.themeVariant === void 0,
		appearance: t.appearance === "plain" ? "ghost" : t.appearance,
		chrome: t.appearance !== void 0 && t.appearance !== "plain",
		spacing: "flush",
		size: t.size,
		className: Y("w-full min-w-0 py-2.5", n && "rounded-none border-x-0", t.alignment === "centre" && "text-center", t.alignment === "end" && "text-end"),
		children: /* @__PURE__ */ q(Wz, {
			compact: o,
			wrap: !0,
			alignment: t.alignment,
			title: /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ q("bdi", { children: e.title.value }), e.quantityDisplay !== void 0 && /* @__PURE__ */ J("span", {
				"data-pc-item-quantity": !0,
				className: "ms-2 text-xs text-[var(--pc-color-text-muted)]",
				children: ["×", /* @__PURE__ */ q("bdi", { children: e.quantityDisplay })]
			})] }),
			description: e.description?.value ? /* @__PURE__ */ q("bdi", { children: e.description.value }) : void 0,
			leading: a && /* @__PURE__ */ q(qz, {
				seed: e.id,
				listStyle: d.LIST,
				compact: o,
				balanceLogo: !1,
				content: /* @__PURE__ */ q("img", {
					src: a.src,
					alt: a.alt.value,
					loading: "lazy",
					decoding: "async",
					onError: () => {
						i(a.src);
					},
					className: Y("block object-contain", fb({
						layout: "list",
						compact: o
					}))
				})
			}),
			trailing: e.amount && /* @__PURE__ */ q("span", {
				"data-pc-item-amount": !0,
				children: e.pricing ? /* @__PURE__ */ q(Bz, { price: e.pricing }) : /* @__PURE__ */ q("bdi", { children: e.amount.display })
			})
		})
	});
}
//#endregion
//#region src/context/paymentFormObserver.tsx
var Yz = (e) => ({
	...e,
	paymentType: { ...e.paymentType },
	values: { ...e.values },
	fields: Object.fromEntries(Object.entries(e.fields).map(([e, t]) => [e, { ...t }])),
	hostedFields: e.hostedFields ? { ...e.hostedFields } : null
}), Xz = (e) => e.status === "active" ? {
	status: "active",
	state: Yz(e.state)
} : {
	status: "inactive",
	reason: "submitted",
	state: null
}, Zz = () => void 0, Qz = Be({
	hasPendingInitialSurface: !1,
	revealInitialSurface: Zz,
	setSurfacePending: Zz,
	cancelSubmission: Zz,
	clearActive: Zz,
	completePendingSubmission: Zz,
	isSubscribed: !1,
	markSubmissionStarted: Zz,
	publishActive: Zz,
	publishInactive: Zz
});
function $z({ children: e, debug: t, onPaymentFormChanged: n }) {
	let [r, i] = K(() => ({
		pending: /* @__PURE__ */ new Set(),
		ready: !1
	})), a = H((e, t) => {
		i((n) => {
			if (n.ready || n.pending.has(e) === t) return n;
			let r = new Set(n.pending);
			return t ? r.add(e) : r.delete(e), {
				pending: r,
				ready: !1
			};
		});
	}, []), o = H(() => {
		i((e) => e.ready || e.pending.size > 0 ? e : {
			...e,
			ready: !0
		});
	}, []), s = !!n, c = G(n), l = G(t), u = G(null), d = G(null), f = G(null), p = G(null);
	Je(() => {
		c.current = n, l.current = t, s || (d.current = null);
	}, [
		t,
		s,
		n
	]);
	let m = H((e) => {
		let t = c.current;
		t && d.current !== e.signature && (d.current = e.signature, Fa({
			callback: t,
			callbackName: "onPaymentFormChanged",
			debug: l.current,
			payload: Xz(e.event)
		}));
	}, []), h = H((e) => {
		let t = {
			status: "inactive",
			reason: "submitted",
			state: null
		};
		return {
			event: t,
			signature: JSON.stringify(t),
			sourceId: e
		};
	}, []), g = H(() => {
		let e = f.current;
		if (!e) return;
		f.current = null, p.current = e;
		let t = h(e);
		u.current = t, m(t);
	}, [h, m]), _ = H((e, t) => {
		if (p.current === e) return;
		p.current = null, f.current && f.current !== e && g();
		let n = {
			status: "active",
			state: Yz(t)
		}, r = {
			event: n,
			signature: JSON.stringify(n),
			sourceId: e
		};
		u.current = r, m(r);
	}, [g, m]), v = H((e) => {
		let t = f.current, n = u.current;
		if (t !== e && n?.event.status === "active" && n.sourceId !== e) return;
		t === e && (f.current = null), p.current = e;
		let r = h(e);
		u.current = r, m(r);
	}, [h, m]), y = H((e) => {
		f.current = e;
	}, []), b = H((e) => {
		f.current === e && (f.current = null);
	}, []), x = H((e) => {
		let t = u.current;
		t?.event.status === "active" && t.sourceId === e && (u.current = null), p.current === e && (p.current = null);
	}, []), S = W(() => ({
		hasPendingInitialSurface: !r.ready && r.pending.size > 0,
		revealInitialSurface: o,
		setSurfacePending: a,
		cancelSubmission: b,
		clearActive: x,
		completePendingSubmission: g,
		isSubscribed: s,
		markSubmissionStarted: y,
		publishActive: _,
		publishInactive: v
	}), [
		r,
		o,
		a,
		b,
		x,
		g,
		s,
		y,
		_,
		v
	]);
	return /* @__PURE__ */ q(Qz.Provider, {
		value: S,
		children: e
	});
}
var eB = () => U(Qz);
function tB({ sourceId: e, state: t, resolveState: n }) {
	let { clearActive: r, isSubscribed: i, publishActive: a } = eB(), o = n?.map, s = n?.values, c = G(null);
	return Ge(() => {
		if (i && t) {
			let n = JSON.stringify([t, s]);
			if (c.current?.sourceId === e && c.current.signature === n && c.current.map === o) return;
			let r = o && s ? o(t, s) : t;
			r && (c.current = {
				sourceId: e,
				signature: n,
				map: o
			}, a(e, r));
		} else c.current = null;
	}, [
		i,
		a,
		e,
		t,
		o,
		s
	]), Ge(() => {
		if (i) return () => {
			c.current = null, r(e);
		};
	}, [
		r,
		i,
		e
	]), null;
}
//#endregion
//#region src/components/ContentActions.tsx
function nB({ action: e, onRestart: t, alignment: n }) {
	let r = {
		start: "text-start",
		centre: "text-center",
		end: "text-end"
	}[n ?? "centre"], i = {
		start: "justify-start text-start",
		centre: "justify-center text-center",
		end: "justify-end text-end"
	}[n ?? "centre"];
	return e.type === m.TEXT && !e.action && (e.chrome !== void 0 || e.appearance !== void 0 || e.size !== void 0) ? /* @__PURE__ */ q(Wv, {
		variant: e.themeVariant,
		appearance: e.appearance,
		size: e.size,
		chrome: e.chrome,
		children: /* @__PURE__ */ q(Gv, { children: /* @__PURE__ */ q("span", {
			className: Y("block break-words font-medium", r),
			children: e.label
		}) })
	}) : e.type === m.TEXT ? e.action && e.action !== "restart" ? /* @__PURE__ */ q("a", {
		href: e.action.href,
		target: e.action.target,
		rel: e.action.rel,
		referrerPolicy: e.action.referrerPolicy,
		download: e.action.download,
		className: Y("inline-flex min-h-10 w-full items-center break-words px-2 text-sm font-medium text-[var(--pc-color-text-muted)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2", i),
		children: e.label
	}) : /* @__PURE__ */ q("span", {
		className: Y("inline-flex min-h-10 w-full items-center break-words px-2 text-sm font-medium text-[var(--pc-color-text-muted)]", i),
		children: e.label
	}) : e.action && e.action !== "restart" ? /* @__PURE__ */ q(bz, {
		href: e.action.href,
		target: e.action.target,
		rel: e.action.rel,
		referrerPolicy: e.action.referrerPolicy,
		download: e.action.download,
		label: e.label,
		variant: e.themeVariant,
		appearance: e.appearance,
		chrome: e.chrome,
		size: e.size ?? "xl",
		fullWidth: !0,
		alignment: n
	}) : /* @__PURE__ */ q(Pv, {
		label: e.label,
		variant: e.themeVariant,
		appearance: e.appearance ?? "solid",
		size: e.size ?? "xl",
		fullWidth: !0,
		chrome: e.chrome,
		alignment: n,
		onClick: t,
		disabled: !t,
		className: "w-full whitespace-normal break-words leading-tight [overflow-wrap:anywhere]"
	});
}
function rB({ actions: e, onRestart: t, legacySummaryHooks: n = !1, localisations: r = {}, alignments: i = {} }) {
	let a = jz();
	return /* @__PURE__ */ q("div", {
		"data-pc-content-actions": !0,
		"data-layout": e.layout,
		className: Y("grid w-full gap-3", e.layout === "stack" && "grid-cols-1"),
		style: e.layout === "row" ? { gridTemplateColumns: `repeat(${String(e.items.length)}, minmax(0, 1fr))` } : void 0,
		children: e.items.map((e) => /* @__PURE__ */ q("div", {
			"data-summary-action-id": n ? e.id : void 0,
			"data-pc-action": e.contentId ?? e.id,
			lang: r[e.id]?.locale,
			dir: r[e.id]?.direction,
			"data-slot": n ? "summary-action" : void 0,
			className: Y("flex min-w-0", i[e.id] === "start" && "justify-start", i[e.id] === "end" && "justify-end", (!i[e.id] || i[e.id] === "centre") && "justify-center", n && a.className("summary-action", { slug: e.id })),
			children: /* @__PURE__ */ q(nB, {
				action: e,
				onRestart: t,
				alignment: i[e.id]
			})
		}, e.id))
	});
}
//#endregion
//#region src/components/ContentItems.tsx
function iB({ children: e, phase: t, appearance: n, variant: r, size: i, layout: a, alignment: o, rootAttributes: s, embedded: c = !1 }) {
	let l = !c && t === "result" && n === void 0 && r === void 0 && i === void 0, u = o ?? (t === "result" ? "centre" : "start"), d = vF({
		appearance: n,
		variant: r,
		size: i,
		layout: a ?? (t === "result" ? "stack" : "row"),
		alignment: u
	});
	return /* @__PURE__ */ q(Wv, {
		id: s?.id,
		"data-testid": s?.["data-testid"],
		"data-pc-slot": s?.["data-pc-slot"],
		"data-pc-awards": !0,
		style: l ? { borderRadius: "var(--pc-radius-bonus-summary,var(--pc-bonus-summary-radius,var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))))" } : void 0,
		className: Y(s?.className, c && "rounded-none border-x-0", l && [
			"mx-auto w-[var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,fit-content))] max-w-[var(--pc-size-bonus-summary-max-width,var(--pc-bonus-summary-max-width,100%))]",
			"rounded-[var(--pc-radius-bonus-summary,var(--pc-bonus-summary-radius,var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))))]",
			"border-[length:var(--pc-size-bonus-summary-border-width,var(--pc-bonus-summary-border-width,1px))] border-[var(--pc-color-bonus-summary-border,var(--pc-bonus-summary-border-colour,var(--pc-color-text)))]",
			"[background:var(--pc-color-bonus-summary-background,var(--pc-bonus-summary-surface-colour,var(--pc-color-surface)))]",
			"px-[var(--pc-space-bonus-summary-padding-x,var(--pc-bonus-summary-padding-x,1rem))] py-[var(--pc-space-bonus-summary-padding-y,var(--pc-bonus-summary-padding-y,0.625rem))]",
			"text-[length:var(--pc-font-size-bonus-summary-mobile,var(--pc-bonus-summary-mobile-font-size,1rem))] @sm:text-[length:var(--pc-font-size-bonus-summary,var(--pc-bonus-summary-font-size,1.125rem))] text-[var(--pc-color-bonus-summary-text,var(--pc-bonus-summary-colour,var(--pc-color-text)))]"
		], u === "centre" && "text-center", u === "start" && "text-start", u === "end" && "text-end"),
		dataTheme: l ? "secondary-tinted" : void 0,
		variant: d.variant,
		inheritTheme: c && r === void 0,
		size: d.size,
		appearance: d.appearance,
		chrome: !l && d.chrome && (!c || n !== void 0),
		spacing: l || c ? "flush" : "default",
		children: /* @__PURE__ */ q(Gv, { children: /* @__PURE__ */ q(yF, {
			layout: d.layout,
			alignment: d.alignment,
			attributes: { "data-pc-purchase-awards": !0 },
			children: e
		}) })
	});
}
//#endregion
//#region src/components/ContentRegions.tsx
var aB = (e, t) => e.layout === "list" ? {
	...t,
	appearance: t.appearance === e.appearance ? void 0 : t.appearance,
	themeVariant: t.themeVariant === e.themeVariant ? void 0 : t.themeVariant
} : t, oB = {
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
};
function sB({ placement: e, purchase: t, layout: n = "screen", phase: r, screen: i, onRestart: a, collectionMember: o = !1 }) {
	let s = jz(), { hasPendingInitialSurface: c } = eB(), l = t.configuredMessages.map((e) => ({
		message: e,
		style: j(e.presentation)
	})).filter(({ message: t, style: n }) => (n.placement ?? ("legacyPlacement" in t ? t.legacyPlacement : void 0) ?? "top") === e), u = t.itemOptions, d = e === (u.placement ?? "top") ? t.items : [], f = t.configuredActions.map((e) => ({
		action: e,
		style: j(e.presentation)
	})).filter(({ style: t }) => n === "member" || (t.placement ?? "bottom") === e), p = ph(f.map((e) => e.action), t.actionLayout, i), m = e === "top" ? t.purchaseError : void 0;
	return i === "loading" || c || !l.length && !d.length && !p && !m ? null : /* @__PURE__ */ J("div", {
		"data-pc-region": n === "member" ? void 0 : e,
		className: Y("wrap-anywhere flex min-w-0 flex-col gap-1.5 @md:gap-2", n === "screen" && (e === "top" ? "mb-4" : "mt-4")),
		children: [
			m && /* @__PURE__ */ q("p", {
				role: "status",
				"data-pc-purchase-error": !0,
				className: "text-sm text-[var(--pc-color-text)]",
				children: m.value
			}),
			l.map(({ message: t, style: n }) => /* @__PURE__ */ q("div", {
				"data-pc-message": t.id,
				"data-pc-message-scope": t.scope,
				lang: t.localisation.locale,
				dir: t.localisation.direction,
				"aria-live": t.announcement,
				children: /* @__PURE__ */ q(xz, {
					embedded: o,
					inheritTheme: o && n.themeVariant === void 0 && !t.tone,
					content: t.text.value,
					size: n.size ?? "sm",
					variant: n.themeVariant ?? (t.tone ? oB[t.tone] : "neutral"),
					appearance: n.appearance,
					chrome: n.appearance === void 0 ? !!t.tone : n.appearance !== "plain",
					className: Y(n.alignment === "start" && "text-start", n.alignment === "end" && "text-end", (n.alignment === "centre" || !n.alignment && e === "bottom") && "text-center"),
					markdownClassName: n.size ? "[&_p]:text-inherit [&_li]:text-inherit" : void 0
				})
			}, `${t.scope}:${t.id}`)),
			d.length > 0 && /* @__PURE__ */ q(iB, {
				phase: r,
				embedded: o,
				layout: u.layout === "list" ? "stack" : u.layout,
				appearance: u.appearance,
				size: u.size,
				alignment: u.alignment,
				variant: u.themeVariant,
				rootAttributes: r === "result" && d.some((e) => e.source?.kind === "bonus") ? {
					...s.attrs("bonus-summary-awards"),
					id: s.id("bonus-summary-awards"),
					"data-testid": "cashier-bonus-summary-awards"
				} : void 0,
				children: d.map((e) => /* @__PURE__ */ q("li", {
					"data-pc-award": e.id,
					"data-pc-award-source": e.source?.kind ?? "checkout",
					"data-pc-bonus-code": e.source?.kind === "bonus" ? e.source.bonusCode : void 0,
					...r === "result" && e.source?.kind === "bonus" ? s.attrs("bonus-summary-award", { slug: e.id }) : {},
					className: Y("m-0 max-w-full break-words font-medium leading-snug", r === "result" && e.source?.kind === "bonus" && s.className("bonus-summary-award", { slug: e.id })),
					lang: e.localisation.locale,
					dir: e.localisation.direction,
					children: /* @__PURE__ */ q("bdi", { children: ye(e, r, e.localisation.direction) })
				}, S(e)))
			}),
			p && /* @__PURE__ */ q(rB, {
				actions: p,
				onRestart: a,
				localisations: Object.fromEntries(f.map(({ action: e }) => [e.identity, e.localisation])),
				alignments: Object.fromEntries(f.map(({ action: e, style: t }) => [e.identity, t.alignment]))
			})
		]
	});
}
function cB(e) {
	let { purchase: t, placement: n } = e, { hasPendingInitialSurface: r, revealInitialSurface: i } = eB();
	if (Ge(() => {
		e.screen !== "loading" && !r && i();
	}, [
		e.screen,
		r,
		i
	]), e.screen === "loading" || r) return null;
	if (t.elements === void 0) return /* @__PURE__ */ q(sB, {
		placement: e.placement,
		purchase: e.purchase,
		layout: e.layout,
		phase: e.phase,
		screen: e.screen,
		onRestart: e.onRestart
	});
	let a = t.elements.filter((e) => (e.presentation.placement ?? "top") === n), o = t.items.filter((e) => e.source?.kind === "bonus"), s = {
		...t,
		configuredMessages: [],
		configuredActions: [],
		items: o
	};
	return !a.length && !o.length && !(n === "top" && t.purchaseError) ? null : /* @__PURE__ */ J("div", {
		"data-pc-region": n,
		className: Y("wrap-anywhere flex min-w-0 flex-col gap-1.5 @md:gap-2", n !== "summary" && (e.layout ?? "screen") === "screen" && (n === "top" ? "mb-2" : "mt-2")),
		children: [/* @__PURE__ */ q(sB, {
			placement: e.placement,
			layout: "member",
			phase: e.phase,
			screen: e.screen,
			onRestart: e.onRestart,
			purchase: s
		}), a.map((r) => /* @__PURE__ */ q(Wv, {
			as: "div",
			inheritTheme: r.presentation.themeVariant === void 0,
			variant: r.presentation.themeVariant,
			appearance: r.presentation.appearance === "plain" ? "ghost" : r.presentation.appearance,
			chrome: r.presentation.layout === "list" && r.presentation.appearance !== void 0 && r.presentation.appearance !== "plain",
			size: r.presentation.size,
			spacing: "flush",
			"data-pc-element": r.id,
			"data-layout": r.presentation.layout ?? "stack",
			className: Y("grid min-w-0 gap-1.5 @md:gap-2", n === "summary" && "rounded-none", r.presentation.layout === "list" && "gap-0 [&_[role=listitem]+[role=listitem]]:border-t [&_[role=listitem]+[role=listitem]]:border-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]", r.presentation.layout !== "row" && "grid-cols-1"),
			style: r.presentation.layout === "row" ? { gridTemplateColumns: `repeat(${String(r.items.length)}, minmax(0, 1fr))` } : void 0,
			children: /* @__PURE__ */ q("div", {
				role: r.presentation.layout === "list" ? "list" : void 0,
				className: "contents",
				children: r.items.map((n) => /* @__PURE__ */ q("div", {
					role: r.presentation.layout === "list" ? "listitem" : void 0,
					children: n.kind === "item" ? /* @__PURE__ */ q(Jz, {
						embedded: r.presentation.layout === "list",
						item: n,
						presentation: aB(r.presentation, n.presentation)
					}) : /* @__PURE__ */ q(sB, {
						collectionMember: r.presentation.layout === "list",
						phase: e.phase,
						screen: e.screen,
						onRestart: e.onRestart,
						layout: "member",
						placement: "top",
						purchase: {
							...t,
							purchaseError: void 0,
							elements: void 0,
							configuredMessages: n.kind === "text" ? [n] : [],
							configuredActions: n.kind === "action" ? [n] : [],
							actionLayout: "stack",
							itemOptions: n.kind === "award" ? aB(r.presentation, n.presentation) : {},
							items: n.kind === "award" ? [n] : []
						}
					})
				}, `${n.kind}:${n.id}`))
			})
		}, `${r.scope}:${r.id}`))]
	});
}
var lB = Be({
	content: null,
	hasContent: !1
}), uB = Be({
	presentation: void 0,
	report: () => void 0,
	isScreenQuarantined: () => !1,
	quarantineScreen: () => void 0
}), dB = Be(!1), fB = Be(void 0);
function pB({ children: e, locale: t }) {
	let n = W(() => T(t), [t]);
	return /* @__PURE__ */ q(fB.Provider, {
		value: n,
		children: e
	});
}
var mB = Be(void 0), hB = (e, t) => {
	let n = e.ownerDocument.activeElement;
	for (let r of Array.from(e.children)) r instanceof HTMLElement && r.dataset.pcPresentationScope !== "screen" && (t.has(r) || t.set(r, {
		ariaHidden: r.getAttribute("aria-hidden"),
		inert: r.getAttribute("inert"),
		visibility: r.style.visibility
	}), n instanceof HTMLElement && r.contains(n) && n.blur(), r.setAttribute("aria-hidden", "true"), r.setAttribute("inert", ""), r.style.visibility = "hidden");
	e.dataset.pcPresentationScreenActive = "true";
}, gB = (e, t) => {
	delete e.dataset.pcPresentationScreenActive;
	for (let [e, n] of t) n.ariaHidden === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n.ariaHidden), n.inert === null ? e.removeAttribute("inert") : e.setAttribute("inert", n.inert), e.style.visibility = n.visibility;
};
function _B({ children: e, rootNode: t }) {
	let n = G(/* @__PURE__ */ new Set()), [r, i] = K(() => /* @__PURE__ */ new Set()), a = H(() => {
		i(new Set(n.current));
	}, []), o = H((e) => (n.current.has(e) || (n.current.add(e), a()), () => {
		n.current.delete(e) && a();
	}), [a]), s = H((e) => r.has(e), [r]), c = r.size > 0;
	Je(() => {
		if (!c || !t) return;
		let e = /* @__PURE__ */ new Map(), n = () => {
			hB(t, e);
		};
		n();
		let r = typeof MutationObserver > "u" ? void 0 : new MutationObserver(n);
		return r?.observe(t, { childList: !0 }), () => {
			r?.disconnect(), gB(t, e);
		};
	}, [c, t]);
	let l = W(() => ({
		active: c,
		rootNode: t,
		claim: o,
		isClaimed: s
	}), [
		o,
		c,
		s,
		t
	]);
	return /* @__PURE__ */ q(mB.Provider, {
		value: l,
		children: e
	});
}
var vB = Be(!1), yB = new Set(Ae), bB = new Set(Ae), xB = new Set(I), SB = /* @__PURE__ */ new Set([
	"elements",
	"screens",
	"slots",
	"options",
	"onError"
]), CB = /* @__PURE__ */ new WeakMap(), wB = 0, TB = (e) => {
	let t = CB.get(e);
	if (t !== void 0) return t;
	let n = ++wB;
	return CB.set(e, n), n;
}, EB = (e, t) => {
	let n = e?.screens?.[t];
	return n ? {
		override: typeof n == "function" ? n : n.component,
		scope: typeof n == "function" ? "content" : n.scope ?? "content"
	} : null;
};
function DB(e) {
	if (!e || typeof e != "object" || Object.isFrozen(e)) return e;
	if (Array.isArray(e)) return e.forEach(DB), Object.freeze(e);
	let t = Object.getPrototypeOf(e);
	return t !== Object.prototype && t !== null ? e : (Object.values(e).forEach(DB), Object.freeze(e));
}
var OB = (e, t) => {
	try {
		e?.(kB(t));
	} catch {}
}, kB = (e) => {
	let t = e.surface.kind === "screen" ? Object.freeze({
		kind: "screen",
		id: e.surface.id,
		scope: e.surface.scope
	}) : Object.freeze({
		kind: "slot",
		id: e.surface.id
	});
	return Object.freeze({
		code: e.code,
		phase: e.phase,
		recoverable: e.recoverable,
		surface: t
	});
}, AB = (e) => typeof e == "object" && !!e && !Array.isArray(e), jB = {
	kind: "screen",
	id: "error",
	scope: "content"
}, MB = (e) => {
	if (e === void 0) return { invalidSurfaces: [] };
	if (!AB(e)) return { invalidSurfaces: [jB] };
	if (Object.keys(e).some((e) => !SB.has(e))) return {
		presentation: typeof e.onError == "function" ? { onError: e.onError } : void 0,
		invalidSurfaces: [jB]
	};
	let t = [], n = !1, r = {}, i = e.screens;
	if (i !== void 0 && !AB(i)) n = !0, t.push(jB);
	else if (i) {
		for (let e of Object.keys(i)) bB.has(e) || (n = !0, t.push(jB));
		for (let e of Ae) {
			let a = i[e];
			a !== void 0 && (typeof a == "function" || yB.has(e) && AB(a) && typeof a.component == "function" && (a.scope === void 0 || a.scope === "content" || a.scope === "screen") ? r[e] = a : (n = !0, t.push({
				kind: "screen",
				id: e,
				scope: "content"
			})));
		}
	}
	let a = {}, o = e.slots;
	if (o !== void 0 && !AB(o)) n = !0, t.push(jB);
	else if (o) {
		for (let e of Object.keys(o)) xB.has(e) || (n = !0, t.push(jB));
		for (let e of I) {
			let r = o[e];
			r !== void 0 && (typeof r == "function" ? a[e] = r : (n = !0, t.push({
				kind: "slot",
				id: e
			})));
		}
	}
	let s = e.options, c = s;
	c !== void 0 && !AB(c) ? (n = !0, s = void 0, t.push(jB)) : c !== void 0 && !x(c) ? (n = !0, s = AB(c.summary) ? { summary: c.summary } : void 0, t.push(jB)) : c?.summary !== void 0 && !AB(c.summary) && (n = !0, s = void 0, t.push({
		kind: "screen",
		id: "summary",
		scope: "content"
	}));
	let l = e.onError;
	return l !== void 0 && typeof l != "function" && (n = !0, l = void 0, t.push(jB)), {
		presentation: n ? {
			screens: Object.keys(r).length > 0 ? r : void 0,
			slots: Object.keys(a).length > 0 ? a : void 0,
			elements: e.elements,
			options: s,
			onError: l
		} : e,
		invalidSurfaces: t
	};
};
function NB({ children: e, presentation: t }) {
	let n = W(() => MB(t), [t]), r = n.presentation, i = G(void 0), [a, o] = K(() => ({
		presentation: r,
		registrations: []
	})), s = H((e, n, r) => {
		OB(t?.onError, {
			code: r,
			phase: n,
			recoverable: !0,
			surface: e
		});
	}, [t?.onError]);
	Ge(() => {
		n.invalidSurfaces.length === 0 ? i.current = void 0 : i.current !== t && (i.current = t, n.invalidSurfaces.forEach((e) => {
			s(e, "validation", "invalid-presentation");
		}));
	}, [
		t,
		s,
		n
	]), a.presentation !== r && o({
		presentation: r,
		registrations: a.registrations.filter((e) => {
			let t = EB(r, e.id);
			return !!(t && t.override === e.override && t.scope === e.scope);
		})
	});
	let c = H((e, t, n) => a.registrations.some((r) => r.id === e && r.scope === t && r.override === n), [a.registrations]), l = H((e, t, n) => {
		o((i) => i.registrations.some((r) => r.id === e && r.scope === t && r.override === n) ? i : {
			presentation: r,
			registrations: [...i.registrations, {
				id: e,
				scope: t,
				override: n
			}]
		});
	}, [r]), u = W(() => ({
		presentation: r,
		report: s,
		isScreenQuarantined: c,
		quarantineScreen: l
	}), [
		r,
		c,
		l,
		s
	]);
	return /* @__PURE__ */ q(uB.Provider, {
		value: u,
		children: e
	});
}
var PB = class extends Ie {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e, t) {
		this.props.onError(e);
	}
	componentDidUpdate(e) {
		this.state.failed && e.resetKey !== this.props.resetKey && this.setState({ failed: !1 });
	}
	render() {
		return this.state.failed ? this.props.fallback : this.props.children;
	}
}, FB = class extends Error {
	phase;
	code;
	constructor(e, t) {
		super("Cashier presentation override failed."), this.name = "CashierPresentationRuntimeFailure", this.phase = e, this.code = t;
	}
}, IB = (e) => e instanceof FB ? {
	phase: e.phase,
	code: e.code
} : {
	phase: "render",
	code: "override-failed"
}, LB = (e) => {
	let t = [], n = (e) => {
		if (typeof e == "string" || typeof e == "number") {
			let n = String(e).trim();
			n.length > 0 && t.push(n);
		} else Array.isArray(e) ? e.forEach(n) : Ue(e) && n(e.props.children);
	};
	return n(e), t.length > 0 ? t.join(" ") : void 0;
}, RB = () => {
	let e = U(fB), { locale: t } = U(Hh), n = W(() => T(t), [t]);
	return e ?? n;
};
function zB({ actions: e, children: t, id: n, model: r }) {
	let i = U(vB), { presentation: a, report: o } = U(uB), s = RB(), c = a?.slots?.[n];
	if (i || !c) return t;
	let l = DB(r), u = Object.freeze(e), d = {
		kind: "slot",
		id: n
	};
	return /* @__PURE__ */ q(PB, {
		fallback: t,
		resetKey: c,
		onError: (e) => {
			let t = IB(e);
			o(d, t.phase, t.code);
		},
		children: /* @__PURE__ */ q(c, {
			model: l,
			actions: u,
			localisation: s
		})
	});
}
var BB = (e) => {
	let [t, n] = K(null), r = G(null), i = G(e), a = e != null;
	return i.current = e, {
		ProtectedSurface: W(() => {
			if (a) return function() {
				let e = G(Symbol("cashier-protected-surface")), t = H((t) => {
					let i = e.current;
					t ? r.current && r.current !== i || (r.current = i, n(t)) : r.current === i && (r.current = null, n(null));
				}, []);
				return Je(() => () => {
					r.current === e.current && (r.current = null, n(null));
				}, []), /* @__PURE__ */ q("div", {
					ref: t,
					"data-pc-protected-surface": "true",
					className: "contents"
				});
			};
		}, [a]),
		claimed: t !== null,
		portal: t ? Qe(/* @__PURE__ */ q(vB.Provider, {
			value: !0,
			children: i.current
		}), t) : null
	};
};
function VB({ onRetry: e, onUseStandard: t }) {
	let { translateKey: n } = Jh(), r = G(null);
	return Je(() => {
		r.current?.focus();
	}, []), /* @__PURE__ */ J("div", {
		role: "alert",
		"data-testid": "cashier-presentation-screen-rescue",
		className: "flex min-h-full w-full flex-1 flex-col items-center justify-center gap-4 p-6 text-center",
		children: [/* @__PURE__ */ q("h2", {
			ref: r,
			tabIndex: -1,
			className: "text-lg font-medium text-[var(--pc-color-text)]",
			children: n("error.screen_override_failed")
		}), /* @__PURE__ */ J("div", {
			className: "flex w-full max-w-sm flex-col gap-2 @sm:flex-row",
			children: [/* @__PURE__ */ q("button", {
				type: "button",
				className: "pc-ui__button min-h-12 flex-1 rounded-[var(--pc-radius-3xl)] bg-[var(--pc-color-surface-strong)] px-4 py-2 text-[var(--pc-color-text)]",
				onClick: e,
				children: n("cta.retry")
			}), /* @__PURE__ */ q("button", {
				type: "button",
				className: "pc-ui__button min-h-12 flex-1 rounded-[var(--pc-radius-3xl)] bg-[var(--pc-color-surface-weaker)] px-4 py-2 text-[var(--pc-color-text)]",
				onClick: t,
				children: n("cta.use_standard_screen")
			})]
		})]
	});
}
var HB = [
	"[autofocus]",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
function UB({ children: e }) {
	let t = G(null);
	return Ge(() => {
		let e = t.current;
		if (!e) return;
		let n = !1;
		return queueMicrotask(() => {
			if (n) return;
			let t = e.querySelector(HB);
			t && !t.closest("[inert], [aria-hidden=\"true\"]") ? t.focus() : e.focus();
		}), () => {
			n = !0;
		};
	}, []), /* @__PURE__ */ q("div", {
		ref: t,
		tabIndex: -1,
		"data-pc-presentation-standard-focus": "true",
		className: "contents",
		children: e
	});
}
function WB({ children: e, owner: t }) {
	let n = U(mB), r = n?.claim, i = n?.rootNode;
	return Je(() => {
		if (r && i) return r(t);
	}, [
		r,
		t,
		i
	]), n ? n.rootNode ? Qe(/* @__PURE__ */ q("div", {
		"data-pc-presentation-scope": "screen",
		className: "pc-cashier__theme-host absolute inset-0 z-70 flex min-h-0 w-full flex-1 flex-col overflow-y-auto bg-[var(--pc-color-surface)] [&>*]:w-full [&>*]:shrink-0 [&>[data-pc-presentation-renderer]>*]:w-full [&>[data-pc-presentation-renderer]>*]:shrink-0",
		children: e
	}), n.rootNode) : null : e;
}
function GB({ actions: e, children: t, id: n, model: r, localisation: i, override: a, protectedSurface: o, renderFrame: s, renderStandardFrame: c, screenCanvasOwner: l, scope: u }) {
	let d = U(mB), { isScreenQuarantined: f, quarantineScreen: p, report: m } = U(uB), [h, g] = K(0), [_, v] = K(!1), y = DB(r), b = Object.freeze(e), x = TB(a);
	if (_ || f(n, u, a)) return u === "screen" && d?.isClaimed(l) ? null : c(/* @__PURE__ */ q(UB, { children: t }));
	let S = {
		kind: "screen",
		id: n,
		scope: u
	}, C = /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ q(PB, {
		fallback: /* @__PURE__ */ q(VB, {
			onRetry: () => {
				g((e) => e + 1);
			},
			onUseStandard: () => {
				v(!0), p(n, u, a);
			}
		}),
		resetKey: `${String(h)}:${String(x)}`,
		onError: (e) => {
			let t = IB(e);
			m(S, t.phase, t.code);
		},
		children: /* @__PURE__ */ q(vB.Provider, {
			value: !0,
			children: /* @__PURE__ */ q(a, {
				model: y,
				actions: b,
				localisation: i,
				ProtectedSurface: o.ProtectedSurface
			})
		})
	}), o.portal] });
	return u === "screen" ? /* @__PURE__ */ q(WB, {
		owner: l,
		children: C
	}) : s(C);
}
function KB({ actions: e, children: t, deferPresentationUpdates: n = !1, frame: r, id: i, model: a, overrideEnabled: o = !0, protectedContent: s, paymentStatus: c, paymentId: l, authoritativeAmount: u, authoritativeCurrency: d, additionalAwards: f, bonusPreviewOwned: p }) {
	let { presentation: m } = U(uB), h = U(mB), g = U(dB), _ = RB(), v = G(Symbol("cashier-presentation-screen")), y = BB(s), b = zz(i, {
		paymentStatus: c,
		paymentId: l,
		authoritativeAmount: u,
		authoritativeCurrency: d,
		previewAmount: "amount" in a ? a.amount.value : void 0,
		additionalAwards: f,
		bonusPreviewOwned: p
	}), x = i === "summary" && "restart" in e && typeof e.restart == "function" ? () => {
		e.restart();
	} : void 0, S = r ?? ((e) => e), C = U(lB), w = g ? C : {
		orderPricing: b.orderPricing,
		selectedOffer: i === "summary" ? b.selectedOffer : void 0,
		hasContent: !!b.elements?.some((e) => e.presentation.placement === "summary" && e.items.length),
		content: /* @__PURE__ */ q(cB, {
			placement: "summary",
			purchase: b,
			phase: i === "summary" ? "result" : "preview",
			screen: i,
			onRestart: x,
			layout: "member"
		})
	}, T = i === "processing" && !o, E = {
		hasSummaryContent: w.hasContent,
		top: g || T ? null : /* @__PURE__ */ q(cB, {
			placement: "top",
			purchase: b,
			phase: i === "summary" ? "result" : "preview",
			screen: i,
			onRestart: x
		}),
		bottom: g || T ? null : /* @__PURE__ */ q(cB, {
			placement: "bottom",
			purchase: b,
			phase: i === "summary" ? "result" : "preview",
			screen: i,
			onRestart: x
		})
	}, D = (e) => S(/* @__PURE__ */ J(Ze, { children: [
		E.top,
		e,
		E.bottom
	] })), O = typeof t == "function" ? t({
		hasSummaryContent: w.hasContent,
		top: g ? null : /* @__PURE__ */ q(cB, {
			placement: "top",
			purchase: b,
			phase: i === "summary" ? "result" : "preview",
			screen: i,
			onRestart: x,
			layout: "paymentStack"
		}),
		bottom: g ? null : /* @__PURE__ */ q(cB, {
			placement: "bottom",
			purchase: b,
			phase: i === "summary" ? "result" : "preview",
			screen: i,
			onRestart: x,
			layout: "paymentStack"
		}),
		hasContent: !g && !!(b.elements?.length || b.items.length || b.configuredMessages.length || b.configuredActions.length || b.purchaseError)
	}) : t, k = typeof t == "function" ? S : D, A = W(() => !b.elements?.length && !b.configuredMessages.length && !b.configuredActions.length && !b.items.length && !b.purchaseError && !b.issues.length ? a : {
		...a,
		elements: b.elements ?? le({
			messages: b.configuredMessages,
			actions: b.configuredActions,
			items: b.items,
			itemOptions: b.itemOptions,
			actionLayout: b.actionLayout
		}),
		...b.purchaseError ? { purchaseError: b.purchaseError } : {},
		...b.issues.length ? { configurationIssues: b.issues } : {}
	}, [a, b]), j = o ? m?.screens?.[i] : void 0, [M, N] = K(() => ({
		deferred: !1,
		entry: j,
		id: i
	})), P = n && M.id === i && M.entry === void 0 && j !== void 0, F = n && (y.claimed || P);
	(M.id !== i || M.deferred !== F || !F && M.entry !== j) && N({
		deferred: F,
		entry: M.id === i && F ? M.entry : j,
		id: i
	});
	let I = M.id === i && F ? M.entry : j;
	if (!I) return h?.isClaimed(v.current) ? null : /* @__PURE__ */ q(dB.Provider, {
		value: !0,
		children: /* @__PURE__ */ q(lB.Provider, {
			value: w,
			children: k(O)
		})
	});
	let ee = typeof I == "function" ? I : I.component, te = "content";
	if (typeof I != "function" && yB.has(i) && (te = I.scope ?? "content"), te !== "screen" && h?.isClaimed(v.current)) return null;
	let ne = TB(ee);
	return /* @__PURE__ */ q(dB.Provider, {
		value: !0,
		children: /* @__PURE__ */ q(lB.Provider, {
			value: w,
			children: /* @__PURE__ */ q(GB, {
				id: i,
				model: A,
				actions: e,
				localisation: _,
				override: ee,
				protectedSurface: y,
				renderFrame: D,
				renderStandardFrame: k,
				screenCanvasOwner: v.current,
				scope: te,
				children: O
			}, `${i}:${String(ne)}:${te}`)
		})
	});
}
var qB = 0, JB = {
	stale: "error.presentation_intent_stale",
	busy: "error.presentation_intent_busy",
	"invalid-input": "error.presentation_intent_invalid_input",
	"invalid-state": "error.presentation_intent_invalid_state",
	unsupported: "error.presentation_intent_unsupported",
	"protected-surface-not-ready": "error.presentation_intent_protected_surface_not_ready",
	disposed: "error.presentation_intent_disposed"
}, YB = class {
	activation = 0;
	actions = /* @__PURE__ */ new Map();
	disposed = !1;
	inFlight = /* @__PURE__ */ new Set();
	registrations = /* @__PURE__ */ new Map();
	resolveRejectionMessage = (e) => ({
		status: "rejected",
		reason: e,
		message: {
			key: JB[e],
			value: JB[e]
		}
	});
	revision;
	constructor(e) {
		this.revision = e;
	}
	activate() {
		this.activation += 1, this.disposed = !1;
	}
	commitRevision(e) {
		this.revision = e;
		let t = `${String(e)}:`;
		for (let e of this.actions.keys()) e.startsWith(t) || this.actions.delete(e);
		for (let e of this.registrations.keys()) e.startsWith(t) || this.registrations.delete(e);
	}
	dispose() {
		this.disposed = !0;
		let e = this.activation;
		queueMicrotask(() => {
			this.disposed && this.activation === e && (this.actions.clear(), this.inFlight.clear(), this.registrations.clear());
		});
	}
	finish(e) {
		this.inFlight.delete(e);
	}
	getAction(e) {
		return this.actions.get(e);
	}
	getRegistration(e) {
		return this.registrations.get(e);
	}
	getRejection(e, t) {
		if (this.disposed) return "disposed";
		if (this.revision !== e || !this.registrations.has(t)) return "stale";
	}
	isInFlight(e) {
		return this.inFlight.has(e);
	}
	register(e, t) {
		this.registrations.set(e, t);
	}
	reject(e) {
		return this.resolveRejectionMessage(e);
	}
	setRejectionMessageResolver(e) {
		this.resolveRejectionMessage = e;
	}
	setAction(e, t) {
		this.actions.set(e, t);
	}
	start(e) {
		this.inFlight.add(e);
	}
}, XB = (e) => e !== null && (typeof e == "object" || typeof e == "function") && "then" in e && typeof e.then == "function", ZB = () => ({
	status: "accepted",
	intentId: `cashier-intent-${String(++qB)}`
}), QB = (e) => {
	let { presentation: t, report: n } = U(uB), { resolveTextKey: r } = Jh(), i = e.kind === "screen" ? t?.screens?.[e.id] : void 0, a = e.kind === "screen" ? i : t?.slots?.[e.id], o = W(() => e.kind === "slot" ? {
		kind: "slot",
		id: e.id
	} : {
		kind: "screen",
		id: e.id,
		scope: i && typeof i != "function" ? i.scope ?? "content" : "content"
	}, [
		i,
		e.id,
		e.kind
	]), s = o.kind === "screen" ? `screen:${o.id}:${o.scope}` : `slot:${o.id}`, [c, l] = K(() => ({
		registration: a,
		surfaceKey: s,
		value: 1
	})), u = c.surfaceKey !== s || c.registration !== a, d = u ? c.value + 1 : c.value;
	u && l({
		registration: a,
		surfaceKey: s,
		value: d
	});
	let [f] = K(() => new YB(d));
	f.setRejectionMessageResolver((e) => ({
		status: "rejected",
		reason: e,
		message: r(JB[e])
	})), Je(() => {
		f.commitRevision(d);
	}, [f, d]), Je(() => (f.activate(), () => {
		f.dispose();
	}), [f]);
	let p = H((e, t, r = {}) => {
		let i = d, a = `${String(i)}:${e}`;
		f.register(a, {
			handler: t,
			options: r,
			report: n,
			surface: o
		});
		let s = f.getAction(a);
		if (s) return s;
		let c = (...e) => {
			let t = f.getRejection(i, a);
			if (t) return f.reject(t);
			let n = f.getRegistration(a);
			if (!n) return f.reject("stale");
			if (n.options.busy || f.isInFlight(a)) return f.reject("busy");
			if (n.options.validate && !n.options.validate(...e)) return f.reject("invalid-input");
			if (n.options.unavailableReason) return f.reject(n.options.unavailableReason);
			try {
				f.start(a);
				let t = n.handler(...e);
				return XB(t) ? Promise.resolve(t).catch(() => {
					n.report(n.surface, "action", "action-failed");
				}).finally(() => {
					f.finish(a);
				}) : queueMicrotask(() => {
					f.finish(a);
				}), ZB();
			} catch {
				return f.finish(a), n.report(n.surface, "action", "action-failed"), f.reject("invalid-state");
			}
		};
		return f.setAction(a, c), c;
	}, [
		o,
		f,
		n,
		d
	]);
	return W(() => ({
		createAction: p,
		revision: d
	}), [p, d]);
}, $B = Object.freeze({}), eV = () => U(uB).presentation?.options, tV = (e) => !!U(uB).presentation?.screens?.[e], nV = () => U(uB).report, rV = Be(null);
function iV({ children: e, tracker: t }) {
	return /* @__PURE__ */ q(rV.Provider, {
		value: t,
		children: e
	});
}
var aV = () => {
	let e = U(rV);
	if (!e) throw Error("Payment lifecycle tracker is unavailable");
	return e;
}, oV = Pe.createContext(null);
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouter.js
function sV(e) {
	let t = Pe.useContext(oV);
	return process.env.NODE_ENV !== "production" && (e?.warn ?? !0) && !t && console.warn("Warning: useRouter must be used inside a <RouterProvider> component!"), t;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useNavigate.js
function cV(e) {
	let t = sV();
	return Pe.useCallback((n) => t.navigate({
		...n,
		from: n.from ?? e?.from
	}), [e?.from, t]);
}
var lV = "44px", uV = [
	"linear-gradient(",
	"to bottom,",
	"var(--pc-color-surface) 0%,",
	"var(--pc-color-surface) 8%,",
	"color-mix(in srgb, var(--pc-color-surface) 92%, transparent) 16%,",
	"color-mix(in srgb, var(--pc-color-surface) 78%, transparent) 26%,",
	"color-mix(in srgb, var(--pc-color-surface) 40%, transparent) 42%,",
	"color-mix(in srgb, var(--pc-color-surface) 18%, transparent) 64%,",
	"color-mix(in srgb, var(--pc-color-surface) 6%, transparent) 84%,",
	"color-mix(in srgb, var(--pc-color-surface) 0%, transparent) 100%",
	")"
].join(" "), dV = {
	height: lV,
	backgroundImage: [
		"linear-gradient(",
		"to bottom,",
		"color-mix(in srgb, var(--pc-color-surface) 0%, transparent) 0%,",
		"color-mix(in srgb, var(--pc-color-surface) 6%, transparent) 16%,",
		"color-mix(in srgb, var(--pc-color-surface) 18%, transparent) 36%,",
		"color-mix(in srgb, var(--pc-color-surface) 40%, transparent) 58%,",
		"color-mix(in srgb, var(--pc-color-surface) 78%, transparent) 74%,",
		"color-mix(in srgb, var(--pc-color-surface) 92%, transparent) 84%,",
		"var(--pc-color-surface) 92%,",
		"var(--pc-color-surface) 100%",
		")"
	].join(" "),
	backgroundRepeat: "no-repeat",
	backgroundSize: "100% 100%"
}, fV = {
	height: lV,
	backgroundImage: uV,
	backgroundRepeat: "no-repeat",
	backgroundSize: "100% 100%"
}, pV = "mx-auto w-full max-w-[var(--pc-size-cashier-max-width,36rem)]", mV = `${pV} px-3`, hV = Pe.createContext(void 0), gV = (e) => {
	let t = Pe.useContext(hV);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, _V = ({ client: e, children: t }) => (Pe.useEffect(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ q(hV.Provider, {
	value: e,
	children: t
})), vV = Pe.createContext(!1), yV = () => Pe.useContext(vV);
vV.Provider;
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function bV() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var xV = Pe.createContext(bV()), SV = () => Pe.useContext(xV), CV = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? Fr(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, wV = (e) => {
	Pe.useEffect(() => {
		e.clearReset();
	}, [e]);
}, TV = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || Fr(n, [e.error, r])), EV = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, DV = (e, t) => e.isLoading && e.isFetching && !t, OV = (e, t) => e?.suspense && t.isPending, kV = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function AV(e, t, n) {
	if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e))) throw Error("Bad argument type. Starting with v5, only the \"Object\" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object");
	let r = yV(), i = SV(), a = gV(n), o = a.defaultQueryOptions(e);
	a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
	let s = a.getQueryCache().get(o.queryHash);
	process.env.NODE_ENV !== "production" && (o.queryFn || console.error(`[${o.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`));
	let c = e.subscribed !== !1;
	o._optimisticResults = r ? "isRestoring" : c ? "optimistic" : void 0, EV(o), CV(o, i, s), wV(i);
	let l = !a.getQueryCache().get(o.queryHash), [u] = Pe.useState(() => new t(a, o)), d = u.getOptimisticResult(o), f = !r && c;
	if (Pe.useSyncExternalStore(Pe.useCallback((e) => {
		let t = f ? u.subscribe(Vr.batchCalls(e)) : dr;
		return u.updateResult(), t;
	}, [u, f]), () => u.getCurrentResult(), () => u.getCurrentResult()), Pe.useEffect(() => {
		u.setOptions(o);
	}, [o, u]), OV(o, d)) throw kV(o, u, i);
	if (TV({
		result: d,
		errorResetBoundary: i,
		throwOnError: o.throwOnError,
		query: s,
		suspense: o.suspense
	})) throw d.error;
	return a.getDefaultOptions().queries?._experimental_afterQuery?.(o, d), o.experimental_prefetchInRender && !Lr.isServer() && DV(d, r) && (l ? kV(o, u, i) : s?.promise)?.catch(dr).finally(() => {
		u.updateResult();
	}), o.notifyOnChangeProps ? d : u.trackResult(d);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useQuery.js
function jV(e, t) {
	return AV(e, ti, t);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useMutation.js
function MV(e, t) {
	let n = gV(t), [r] = Pe.useState(() => new ui(n, e));
	Pe.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	let i = Pe.useSyncExternalStore(Pe.useCallback((e) => r.subscribe(Vr.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), a = Pe.useCallback((e, t) => {
		r.mutate(e, t).catch(dr);
	}, [r]);
	if (i.error && Fr(r.options.throwOnError, [i.error])) throw i.error;
	return {
		...i,
		mutate: a,
		mutateAsync: i.mutate
	};
}
//#endregion
//#region src/hooks/useProviderWindowScope.ts
var NV = () => {
	let e = Wh(), t = Xe(e?.subscribe ?? FV, e?.getBrowserAuthorityId ?? IV, IV), n = Xe(e?.subscribe ?? FV, e?.getBrowserActionId ?? IV, IV), r = e ? JSON.stringify([
		e.instanceId,
		t,
		n
	]) : "legacy";
	return W(() => e ? Pa(r) : {
		...ma,
		instanceId: r
	}, [e, r]);
}, PV = (e) => {
	let t = Wh(), n = Xe(t?.subscribe ?? FV, t?.getBrowserActionId ?? IV, IV), r = Ke().replace(/[^a-zA-Z0-9_-]/g, "");
	return `cashier-${t?.instanceId ?? "legacy"}-${e}-${n ?? r}-${r}`;
}, FV = () => () => void 0, IV = () => void 0, LV = (e) => {
	let t = G(null);
	return Je(() => {
		let e = new AbortController();
		return t.current = e, () => {
			e.abort(), t.current === e && (t.current = null);
		};
	}, [e]), H(() => t.current?.signal ?? AbortSignal.abort(), []);
}, RV = () => {
	let { closeProviderWindowHandle: e, releaseProviderWindowOwnership: t } = NV(), { returnUrl: n } = U(Hh), r = aV(), i = !!z(n);
	return H((n) => {
		(n ? r.merchantOwnsProviderWindow(n) : i) ? t(n) : e(n);
	}, [
		i,
		r,
		e,
		t
	]);
}, zV = Pn(), BV = Be(zV);
function VV({ children: e, client: t }) {
	return /* @__PURE__ */ q(BV.Provider, {
		value: t,
		children: e
	});
}
var HV = () => U(BV), UV = () => {}, WV = Be({
	payment: void 0,
	paymentId: null,
	status: void 0,
	redirect: void 0,
	paymentStatusMessage: null,
	makePayment: () => Promise.reject(/* @__PURE__ */ Error("error.payment_provider_unavailable")),
	clearPaymentState: UV,
	setPaymentTracking: UV,
	isPaymentPending: !1,
	isPaymentFailed: !1,
	isPaymentSuccessful: !1,
	isTrackingFatal: !1,
	trackingPhase: "idle",
	refreshPaymentTracking: UV
}), GV = Be(!1), KV = ({ children: e, locked: t }) => {
	let n = U(GV);
	return /* @__PURE__ */ q(GV.Provider, {
		value: n || t,
		children: e
	});
}, qV = ({ children: e }) => {
	let t = HV(), n = aV(), r = Wh(), i = ir(), [a] = K(() => r?.creation ?? di()), o = r?.creation ?? a, s = Xe(n.subscribe, n.getSnapshot, n.getSnapshot), { merchantId: c, userId: l, sessionId: u, debug: d, onPaymentCreated: f, onPaymentUpdated: p, onPaymentFinished: m } = U(Hh);
	Je(() => {
		if (!r) return a.resetScope(), a.activate(), a.deactivate;
	}, [
		r,
		a,
		t,
		c,
		l,
		u
	]);
	let h = RV(), [g, _] = K(null), v = G(null);
	Je(() => {
		let e = n.configure({
			client: t,
			merchantId: c,
			userId: l,
			sessionId: u,
			debug: d,
			onPaymentUpdated: i?.onWebPaymentUpdated ?? p,
			onPaymentFinished: i?.onWebPaymentFinished ?? m
		});
		e.boundaryClearedPaymentId && h(e.boundaryClearedPaymentId);
	}, [
		i,
		t,
		h,
		d,
		c,
		m,
		p,
		u,
		n,
		l
	]);
	let y = H((e, t) => {
		e ? n.track(e, t) : n.clear();
	}, [n]), b = H((e) => {
		let t = e?.closeProviderWindow ?? !0, i = e?.resetCreateState ?? !0;
		t && h(n.getSnapshot().paymentId), n.clear(), _(null), i && (o.cancel(), r?.refreshProjection(), v.current?.());
	}, [
		h,
		o,
		r,
		n
	]), { mutateAsync: x, isPending: S, isError: C, reset: w } = MV({
		retry: !1,
		mutationFn: async ({ body: e, path: n, attempt: r }) => Lh({
			body: e,
			path: n,
			attempt: r,
			creation: o,
			client: t
		}),
		onMutate: ({ attempt: e }) => {
			if (!o.accepts(e)) throw Error("error.payment_processing_failed");
			b({ resetCreateState: !1 });
		},
		onSuccess: (e, { attempt: t, attemptGeneration: i, merchantOwnsProviderWindow: a }) => {
			im({
				creation: o,
				attempt: t,
				generation: i,
				purchaseAttempt: r?.attempt,
				data: e,
				tracker: n,
				merchantOwnsProviderWindow: a,
				committed: () => {
					r?.refreshProjection(), _(null);
				},
				created: (t) => {
					Fa({
						callback: f,
						callbackName: "onPaymentCreated",
						debug: d,
						payload: {
							...e,
							...t ? { paymentContextId: t } : {}
						}
					});
				}
			});
		},
		onError: (e, { attempt: t, attemptGeneration: n }) => {
			if (!o.accepts(t)) return;
			let i = e instanceof Fh && e.rejected ? "rejected" : "unknown", a = r?.attempt.getSnapshot().context?.paymentContextId;
			if (r && n !== void 0) {
				r.creationFailed(n, i);
				let e = n + +(i === "rejected");
				if (!r.attempt.isCurrent(e)) return;
			} else o.fail(t, i);
			let s = Ih(e);
			_(s.error), Fa({
				callback: f,
				callbackName: "onPaymentCreated",
				debug: d,
				payload: {
					...s,
					creationOutcome: i,
					...a ? { paymentContextId: a } : {}
				}
			});
		}
	}), T = H(async (e) => {
		let t = r?.beginCreation(e.attemptGeneration), n = r && t !== void 0 ? r.attempt.getCreationAttempt(t) : o.begin({ allowUnknownRetry: !0 });
		return await x({
			...e,
			attempt: n,
			attemptGeneration: t,
			merchantOwnsProviderWindow: !!z(e.body.returnUrl)
		});
	}, [
		x,
		o,
		r
	]);
	Je(() => {
		v.current = w;
	}, [w]);
	let E = s.payment, D = s.paymentId, O = E?.status ?? hh(E?.paymentStatus), k = O ? O.toLowerCase() : void 0, A = k === "done", j = C || !!g, M = s.phase === "fatal", N = !A && !j && !M && (S || wh(k) || s.phase === "tracking" || s.phase === "recovering"), P = s.errorMessage ?? g ?? null, F = H(() => {
		n.refresh("react-retry");
	}, [n]), I = W(() => ({
		payment: E,
		paymentId: D,
		status: O,
		redirect: E?.redirect,
		paymentStatusMessage: P,
		makePayment: T,
		clearPaymentState: b,
		setPaymentTracking: y,
		isPaymentPending: N,
		isPaymentFailed: j,
		isPaymentSuccessful: A,
		isTrackingFatal: M,
		trackingPhase: s.phase,
		refreshPaymentTracking: F
	}), [
		O,
		j,
		N,
		A,
		M,
		T,
		E,
		D,
		P,
		F,
		b,
		y,
		s.phase
	]);
	return /* @__PURE__ */ q(WV.Provider, {
		value: I,
		children: e
	});
}, JV = () => U(WV), YV = ({ paymentId: e }) => !!e, XV = () => {
	let e = YV(JV()), t = U(GV), n = Wh();
	Xe(n?.subscribe ?? (() => () => void 0), n?.getSnapshot ?? (() => null), n?.getSnapshot ?? (() => null));
	let r = U(Hh);
	return e || t || y(r).length > 0 || !!n?.isCreationBlocked();
};
//#endregion
//#region src/ui/I18nTextSlot.tsx
function ZV({ children: e, className: t }) {
	let { isTranslationVisible: n } = Yh();
	return e == null ? null : /* @__PURE__ */ q("span", {
		className: Y("transition-opacity duration-150", n ? "opacity-100" : "opacity-0", t),
		children: e
	});
}
//#endregion
//#region src/ui/CashierHeader.tsx
var QV = ["py-4 text-center leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:py-2"].join(" "), $V = "flex items-center gap-2", eH = ["text-2xl font-medium tracking-tight leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:text-lg @md:group-data-[stuck=true]:text-xl"].join(" "), tH = ["text-sm @xs:text-base @sm:text-lg mb-4 leading-none text-[var(--pc-color-text-muted)]", "group-data-[stuck=true]:text-base"].join(" "), nH = "flex flex-col gap-1", rH = "flex items-center justify-center", iH = {
	stacked: {
		container: "text-center",
		layout: "flex-col",
		titleWrapper: ""
	},
	row: {
		container: "text-left",
		layout: "flex-row",
		titleWrapper: "items-start"
	}
}, aH = {
	default: {},
	details: {
		container: "py-2 text-left px-1.5 @sm:px-3 group-data-[stuck=true]:py-1",
		layout: "flex-row items-center gap-2 w-full group-data-[stuck=true]:items-center",
		titleWrapper: [
			"items-start min-w-0 w-full gap-0",
			"group-data-[stuck=true]:flex-row",
			"group-data-[stuck=true]:items-center",
			"group-data-[stuck=true]:gap-1",
			"group-data-[stuck=true]:flex-wrap"
		].join(" "),
		title: [
			"break-words text-lg @md:text-2xl w-full",
			"group-data-[stuck=true]:text-base @md:group-data-[stuck=true]:text-lg",
			"group-data-[stuck=true]:w-auto",
			"group-data-[stuck=true]:flex-1",
			"group-data-[stuck=true]:min-w-[10ch]"
		].join(" "),
		leading: "flex-shrink-0",
		titleMeta: ["group-data-[stuck=true]:shrink-0", "group-data-[stuck=true]:max-w-full"].join(" ")
	}
}, oH = {
	stacked: {
		container: "group-data-[stuck=true]:text-center",
		layout: "group-data-[stuck=true]:flex-col",
		titleWrapper: ""
	},
	row: {
		container: "group-data-[stuck=true]:text-left",
		layout: "group-data-[stuck=true]:flex-row",
		titleWrapper: "group-data-[stuck=true]:items-start"
	}
}, sH = (e) => typeof e == "string" || typeof e == "number";
function cH({ title: e, subtitle: t, presentationTitle: n, presentationSubtitle: r, leading: i, trailing: a, titleMeta: o, variant: s = "default", layout: c = "stacked", stuckLayout: l, className: u, layoutClassName: d, titleWrapperClassName: f, titleClassName: p, subtitleClassName: m, leadingClassName: h, trailingClassName: g, titleMetaClassName: _ }) {
	let v = !!(e || t || o);
	if (!(i || a || v)) return null;
	let y = iH[c], b = l ? oH[l] : null, x = aH[s], S = typeof t == "string" || typeof t == "number", C = sH(e) ? /* @__PURE__ */ q(ZV, { children: e }) : e, w = S ? /* @__PURE__ */ q(ZV, { children: t }) : t, T = Q(QV, y.container, x.container, b?.container, u), E = Q($V, y.layout, x.layout, b?.layout, d), D = Q(nH, y.titleWrapper, x.titleWrapper, b?.titleWrapper, f), O = Q(eH, x.title, p), A = Q(rH, x.leading, h), j = Q("min-w-0", x.trailing, g), M = Q(tH, x.subtitle, m), N = Q(x.titleMeta, _), P = v ? /* @__PURE__ */ J("div", {
		className: D,
		children: [
			e && /* @__PURE__ */ q("h2", {
				className: O,
				children: C
			}),
			o ? N ? /* @__PURE__ */ q("div", {
				className: N,
				children: o
			}) : o : null,
			t ? q(S ? "p" : "div", {
				className: M,
				children: w
			}) : null
		]
	}) : null, F = LB(e), I = LB(t), ee = n ?? (F ? k(F) : void 0), te = r ?? (I ? k(I) : void 0);
	return /* @__PURE__ */ q("div", {
		className: T,
		children: /* @__PURE__ */ J("div", {
			className: E,
			children: [
				i && /* @__PURE__ */ q("div", {
					className: A,
					children: i
				}),
				/* @__PURE__ */ q(zB, {
					id: "header",
					model: {
						...ee ? { title: ee } : {},
						...te ? { subtitle: te } : {},
						variant: s,
						layout: c,
						hasLeading: !!i,
						hasTrailing: !!a
					},
					actions: $B,
					children: P
				}),
				a && /* @__PURE__ */ q("div", {
					className: j,
					children: a
				})
			]
		})
	});
}
//#endregion
//#region src/ui/StickyHeaderStack.tsx
var lH = ["flex flex-col w-full bg-[var(--pc-color-surface)]"].join(" "), uH = ["relative z-30"].join(" "), dH = "sticky top-0 z-40 h-0 overflow-visible", fH = ["transition-transform duration-200 ease-out", "transform-gpu will-change-transform"].join(" "), pH = "w-full", mH = (e) => {
	if (!e || typeof window > "u") return window;
	let t = e.parentElement;
	for (; t;) {
		let e = window.getComputedStyle(t), n = `${e.overflow}${e.overflowY}${e.overflowX}`;
		if (/(auto|scroll|overlay)/.test(n)) return t;
		t = t.parentElement;
	}
	return window;
}, hH = (e) => typeof window < "u" && e === window, gH = (e) => {
	let [t, n] = K(null), [r, i] = K(null), [a, o] = K(1), s = H((e) => {
		n(e);
	}, []), c = H((e) => {
		i(e);
	}, []);
	return Ge(() => {
		if (!e || !t || !r || typeof window > "u") return;
		let n = mH(t), i = 0, a = () => {
			let e = t.getBoundingClientRect(), i = r.getBoundingClientRect(), a = 0;
			if (!hH(n)) {
				let e = n.getBoundingClientRect(), t = window.getComputedStyle(n).paddingTop, r = Number.parseFloat(t), i = Number.isNaN(r) ? 0 : r;
				a = e.top + i;
			}
			let s = Math.min(24, Math.max(8, i.height * .2)), c = a + s, l = a, u = c - l || 1, d = Math.min(1, Math.max(0, (e.top - l) / u));
			o((e) => Math.abs(e - d) < .002 ? e : d);
		}, s = () => {
			i && cancelAnimationFrame(i), i = requestAnimationFrame(a);
		};
		a(), hH(n) ? window.addEventListener("scroll", s, { passive: !0 }) : n.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", s, { passive: !0 });
		let c = null;
		return typeof ResizeObserver < "u" && (c = new ResizeObserver(() => {
			s();
		}), c.observe(r), hH(n) || c.observe(n)), () => {
			i && cancelAnimationFrame(i), hH(n) ? window.removeEventListener("scroll", s) : n.removeEventListener("scroll", s), window.removeEventListener("resize", s), c?.disconnect();
		};
	}, [
		t,
		e,
		r
	]), {
		progress: a,
		setAnchorRef: s,
		setHeaderRef: c
	};
};
function _H({ sticky: e = !1, className: t, children: n }) {
	let { progress: r, setAnchorRef: i, setHeaderRef: a } = gH(e), o = r < 1, s = { transform: `translateY(-${(r * 100).toFixed(2)}%)` };
	return n ? e ? /* @__PURE__ */ J(Ze, { children: [/* @__PURE__ */ q("div", {
		ref: a,
		"aria-hidden": o ? "true" : void 0,
		className: Y(lH, "group", o ? "invisible" : "", t),
		children: n
	}), /* @__PURE__ */ q("div", {
		ref: i,
		className: dH,
		children: /* @__PURE__ */ q("div", {
			"data-stuck": o ? "true" : void 0,
			"data-pc-scroll-obstruction": o ? "top" : void 0,
			"aria-hidden": o ? void 0 : "true",
			style: s,
			className: Y(lH, "group", fH, o ? uH : "", o ? "pointer-events-auto" : "pointer-events-none", o ? "overflow-visible" : "invisible", t),
			children: /* @__PURE__ */ J("div", {
				className: "relative bg-[var(--pc-color-surface)]",
				children: [/* @__PURE__ */ q("div", {
					className: pH,
					children: n
				}), /* @__PURE__ */ q("div", {
					"aria-hidden": "true",
					"data-slot": "sticky-header-stack-fade",
					"data-pc-scroll-obstruction": "top",
					style: fV,
					className: "pointer-events-none absolute inset-x-0 top-full"
				})]
			})
		})
	})] }) : /* @__PURE__ */ q("div", {
		className: Y(lH, "group", t),
		children: n
	}) : null;
}
//#endregion
//#region src/ui/SubContainer.tsx
function vH({ id: e, className: t, contentId: n, contentClassName: r, title: i, subtitle: a, header: o, stickyHeader: s = !1, fitted: c, fullHeight: l, constrainWidth: u = !0, children: d }) {
	let { resolveTextKey: f, translateKey: p } = Jh(), m = typeof i == "string" ? p(i) : i, h = typeof a == "string" ? p(a) : a, g = o ?? (i || a ? /* @__PURE__ */ q(cH, {
		title: m,
		subtitle: h,
		presentationTitle: typeof i == "string" ? f(i) : void 0,
		presentationSubtitle: typeof a == "string" ? f(a) : void 0
	}) : null), _ = u ? pV : void 0, v = g ? /* @__PURE__ */ q("div", {
		className: _,
		children: g
	}) : null;
	return /* @__PURE__ */ J("div", {
		id: e,
		className: Y([
			"flex flex-col",
			l && "min-h-0 flex-1",
			t
		]),
		children: [v && (s ? /* @__PURE__ */ q(_H, {
			sticky: !0,
			children: v
		}) : v), /* @__PURE__ */ q("div", {
			id: n,
			className: Y([
				"wrap-anywhere flex flex-col",
				_,
				l && "min-h-0 flex-1",
				s && !l && "pb-4",
				!c && "px-1.5 @sm:px-3 rounded-[var(--pc-radius-lg)]",
				r
			]),
			children: d
		})]
	});
}
//#endregion
//#region src/presentation/StateScreen.tsx
function yH({ busy: e = !1, children: t, id: n, message: r, messageKey: i, paymentStatus: a, onGoBack: o, onRetry: s, overrideEnabled: c = !0, title: l, titleKey: u }) {
	let { resolveTextKey: d } = Jh(), { createAction: f, revision: p } = QB(W(() => ({
		kind: "screen",
		id: n,
		scope: "content"
	}), [n])), m = W(() => ({
		retry: f("retry", () => s?.(), {
			busy: e,
			unavailableReason: s ? void 0 : "invalid-state"
		}),
		goBack: f("goBack", () => o?.(), {
			busy: e,
			unavailableReason: o ? void 0 : "invalid-state"
		})
	}), [
		e,
		f,
		o,
		s
	]), h = W(() => ({
		screen: n,
		revision: p,
		busy: e,
		title: u ? d(u) : k(l),
		...r ? { message: i ? d(i) : k(r) } : {},
		retryLabel: d("cta.retry"),
		backLabel: d("cta.back"),
		canRetry: !!s && !e,
		canGoBack: !!o && !e
	}), [
		e,
		n,
		r,
		i,
		o,
		s,
		d,
		p,
		l,
		u
	]);
	return /* @__PURE__ */ q(KB, {
		id: n,
		paymentStatus: a,
		model: h,
		actions: m,
		overrideEnabled: c,
		frame: Ue(t) && t.type === vH ? (e) => ze(t, { children: e }) : (e) => /* @__PURE__ */ q("div", {
			className: "flex min-h-0 w-full flex-1 flex-col overflow-y-auto",
			children: e
		}),
		children: Ue(t) && t.type === vH ? t.props.children : t
	});
}
//#endregion
//#region src/utils/paymentTypeDisplay.ts
var bH = (e) => e !== u.NONE, xH = (e) => e === u.PICKER, SH = (e) => e === d.ACCORDION || e === d.ACCORDION_COLLAPSIBLE, CH = (e) => e === d.ACCORDION_COLLAPSIBLE, wH = ({ mode: e, paymentFormEnabled: t }) => {
	switch (e) {
		case u.ACCORDION: return t ? d.ACCORDION : d.LIST;
		case u.ACCORDION_COLLAPSIBLE: return t ? d.ACCORDION_COLLAPSIBLE : d.LIST;
		case u.GRID: return d.GRID;
		case u.LIST: return d.LIST;
		case u.NONE:
		case u.PICKER:
		default: return null;
	}
}, TH = (e) => SH(e) ? d.LIST : e, EH = (e) => e === l.PAGE, DH = (e) => e === l.PICKER_PAYMENT_FORM, OH = (e) => e === l.PICKER_PAYMENT_LIST, kH = (e) => (e.fields ?? []).some((e) => e.id === "amount"), AH = (e) => (e.fields ?? []).some((e) => !!e.id && e.id !== "amount") || jH(e), jH = (e) => (e.hfFields ?? []).length > 0, MH = (e, t, n) => {
	if (!kH(e)) return "";
	let r = n?.amount;
	return B(typeof r == "string" ? r : t);
}, NH = (e, t) => AH(e) ? !0 : kH(e) && !Oe(t), PH = (e) => (e.notifications ?? []).length > 0, FH = ({ uiComboView: e }) => e, IH = ({ uiComboView: e, lockAmount: t, method: n }) => FH({
	uiComboView: e,
	lockAmount: t
}) ? "/combo" : `/pts/${n}`, LH = (e) => e.uiComboView && e.lockAmount ? "/" : FH(e) ? "/combo" : e.gotoPaymentType ? e.uiBonuses && EH(e.uiBonusesStyle) && Pm(e.bonuses) ? "/bonus" : `/pt/${encodeURIComponent(e.gotoPaymentType)}` : `/pts/${e.method}`, RH = [
	"pan",
	"expiryDate",
	"csc"
];
function zH() {
	let e = HV(), t = XV(), { merchantId: n, method: r, userId: i, sessionId: a, currency: o, fetchConfig: s, extraAttributes: c, debug: l, gotoPaymentType: u, selectedPaymentType: d, hasAppliedGotoPaymentType: f, setCashierState: p } = U(Hh), m = G(null), h = G(null), { data: g, isLoading: _, isError: v } = jV(so({
		merchantId: n,
		method: r,
		userId: i,
		sessionId: a,
		currency: o,
		fetchConfig: s,
		extraAttributes: c,
		debug: l
	}, e)), y = W(() => g?.paymentTypes ?? [], [g?.paymentTypes]), b = g !== void 0, x = W(() => new Map(y.map((e) => {
		let t = e.fields?.filter(({ id: e }) => e && !RH.includes(e)), n = e.fields?.filter(({ id: e }) => e && RH.includes(e));
		return [e, {
			...e,
			fields: t,
			hfFields: n
		}];
	})), [y]), S = g?.currency, C = g?.pciTenantId;
	return Ge(() => {
		S && p((e) => e.currency === S ? e : {
			...e,
			currency: S
		});
	}, [S, p]), Ge(() => {
		m.current !== r && (m.current = r, h.current = r);
	}, [r]), Ge(() => {
		if (t || !d || !b) return;
		let e = r;
		if (!y.every((t) => t.method === e)) return;
		let n = io(y, d);
		if (n && !Ja(n)) {
			let e = qa(n);
			p((t) => t.selectedPaymentType === e ? t : {
				...t,
				selectedPaymentType: e
			});
		} else p((e) => e.selectedPaymentType === d ? {
			...e,
			selectedPaymentType: null,
			selectedBonusCode: null,
			paymentFormDraft: null,
			comboViewFormDraft: null
		} : e);
	}, [
		b,
		t,
		r,
		y,
		d,
		p
	]), Ge(() => {
		if (t || !h.current || h.current !== r || y.length === 0) return;
		let e = r;
		if (!y.every((t) => t.method === e)) return;
		if (d || !u || f) {
			h.current = null;
			return;
		}
		let n = io(y, u);
		if (!n || Ja(n)) {
			h.current = null;
			return;
		}
		let i = qa(n);
		p((e) => e.selectedPaymentType === i ? e : {
			...e,
			selectedPaymentType: i
		}), h.current = null;
	}, [
		u,
		t,
		f,
		r,
		y,
		d,
		p
	]), {
		paymentTypesList: y,
		getPaymentType: H((e) => {
			let t = io(y, e);
			return t ? x.get(t) ?? null : null;
		}, [x, y]),
		pciTenantId: C,
		isLoading: _,
		isError: v,
		hasPaymentTypesResponse: b
	};
}
//#endregion
//#region src/hooks/useBonuses.ts
var BH = (e) => e ? [
	e.name,
	e.accountId,
	e.method,
	e.type,
	e.service ?? ""
].join("|") : "__none__", VH = (e) => [
	String(e.amount ?? ""),
	String(e.user?.payinCount ?? ""),
	String(e.user?.daysSinceRegistration ?? ""),
	String(e.user?.totalPayinAmount ?? "")
].join("|");
function HH() {
	let { bonuses: e, user: t, initialAmount: n, uiBonuses: r, offers: i, checkout: a } = U(Hh), o = W(() => Nm(r || i !== void 0 ? e : void 0), [
		e,
		r,
		i
	]), s = W(() => rn(n), [n]), c = W(() => ({
		payinCount: t?.payinCount,
		daysSinceRegistration: t?.daysSinceRegistration,
		totalPayinAmount: t?.totalPayinAmount
	}), [
		t?.daysSinceRegistration,
		t?.payinCount,
		t?.totalPayinAmount
	]), l = H((e) => ({
		amount: i?.some((e) => e.pricing === "merchant") ? rn(a?.eligibilityAmount ?? n) : e?.amount ?? s,
		user: e?.user ?? c
	}), [
		s,
		c,
		i,
		a?.eligibilityAmount,
		n
	]), u = G(/* @__PURE__ */ new Map());
	Ge(() => {
		u.current = /* @__PURE__ */ new Map();
	}, [o, l]);
	let d = H((e, t) => {
		let n = l(t), r = [BH(e), VH(n)].join("::"), i = u.current.get(r);
		if (i) return i;
		let a = Fm(o, e, n), s = {
			availability: a,
			availableBonuses: a.filter((e) => e.status === "available").map((e) => e.bonus)
		};
		return u.current.set(r, s), s;
	}, [o, l]), f = H((e, t) => d(e, t).availability, [d]), p = H((e, t) => d(e, t).availableBonuses, [d]);
	return {
		bonuses: o,
		getBonusAvailabilityForPaymentType: f,
		getBonusAvailabilityForPaymentTypes: H((e, t, n) => Im(o, e, t, l(n)), [o, l]),
		getAvailableBonusesForPaymentType: p,
		getBonusCountForPaymentType: H((e, t) => p(e, t).length, [p])
	};
}
//#endregion
//#region src/utils/cashierEntry.ts
var UH = (e, t) => {
	let n = e.fields ?? [], r = Ri(n, { amount: t });
	for (let e = 0; e <= n.length; e += 1) {
		let e = Ji(Nh(n, r), Yi(n, r), qi(n, r)).filter((e) => e.fieldId !== "amount");
		if (e.length === 0) {
			let e = r;
			return {
				values: r,
				resolved: !0,
				editable: Gi(n, r).some((t) => !!t.id && t.id !== "amount" && !t.hidden && t.type !== "display" && t.type !== "qrcode" && Mh(t, e).visible)
			};
		}
		r = { ...r };
		for (let t of e) r[t.fieldId] = t.value;
	}
	return {
		values: r,
		editable: !0,
		resolved: !1
	};
}, WH = (e, t) => Ja(e) ? !0 : !kH(e) || !Oe(t.initialAmount) ? !1 : an(t.initialAmount, e.limits, { maxBoundary: nn(t.method, t.user, e.fee) }).isOutOfRange, GH = ({ config: e, paymentTypes: t, hasAvailableBonus: n, hasComboOverride: r = !1 }) => {
	let i = {
		kind: "combo",
		route: "/combo"
	}, a = {
		kind: "selection",
		route: `/pts/${e.method}`
	};
	if (!e.uiComboView || !e.lockAmount || r) return i;
	let o = e.method;
	if (t.some((e) => e.method !== o)) return i;
	let s = t.filter((t) => !WH(t, e)), c = bH(e.uiComboView__PaymentTypes), l = e.gotoPaymentType ?? (e.uiListSelectable ? e.uiPreselectedPaymentType : null), u = l ? io(t, l) : null;
	if (l && (!u || !s.includes(u))) return e.gotoPaymentType ? {
		kind: "selection",
		route: `/pt/${encodeURIComponent(e.gotoPaymentType)}`
	} : a;
	let d = u ? {
		...i,
		paymentTypeId: qa(u)
	} : i;
	if (c && t.length > 1) return d;
	if (s.length === 0) return c ? i : a;
	let f = u ?? (s.length === 1 ? s[0] : null);
	if (!f) return c ? i : a;
	if (!c && !e.gotoPaymentType) return a;
	let p = wH({
		mode: e.uiComboView__PaymentTypes,
		paymentFormEnabled: e.uiComboView__PaymentForm
	}), m = xH(e.uiComboView__PaymentTypes), h = c && e.uiComboView__PaymentForm && (m || SH(p)), g = UH(f, e.initialAmount), _ = (f.fields ?? []).some((e) => [
		"pan",
		"expiryDate",
		"csc"
	].includes(e.id ?? "")) || (f.hfFields?.length ?? 0) > 0;
	if (h && (_ || g.editable || !g.resolved) || e.uiBonuses && !EH(e.uiBonusesStyle) && (m || OH(e.uiBonusesStyle) || h && (f.fields?.some((e) => e.id !== "amount") || _)) && n(f)) return d;
	let v = qa(f);
	return {
		kind: "selected",
		paymentTypeId: v,
		route: e.uiBonuses && EH(e.uiBonusesStyle) && n(f) ? "/bonus" : `/pt/${encodeURIComponent(v)}`
	};
}, KH = (e, t) => {
	let n = e ?? null;
	return n && t.some((e) => e.code === n) ? n : null;
}, qH = () => {
	let { selectedPaymentType: e, gotoPaymentType: t, hasAppliedGotoPaymentType: n, setCashierState: r } = U(Hh), i = H((e, t = {}) => {
		r((n) => {
			let r = t.availableBonuses === void 0 ? n.selectedBonusCode : KH(n.selectedBonusCode, t.availableBonuses);
			return n.selectedPaymentType === e ? n.selectedBonusCode === r ? n : {
				...n,
				selectedBonusCode: r
			} : {
				...n,
				selectedPaymentType: e,
				selectedBonusCode: r,
				paymentFormDraft: null,
				comboViewFormDraft: null
			};
		});
	}, [r]);
	return {
		selectedPaymentType: e,
		selectPaymentType: i,
		clearPaymentSelection: H(() => {
			r((e) => e.selectedPaymentType === null && !e.selectedBonusCode ? e : {
				...e,
				selectedPaymentType: null,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
		}, [r]),
		ensureDefaultSelection: H((r) => {
			if (e) return;
			let a = t && !n ? ao(r, t) : null, o = null;
			if (a) o = qa(a);
			else {
				let e = r.find((e) => !Ja(e));
				e && (o = qa(e));
			}
			o && i(o);
		}, [
			t,
			n,
			i,
			e
		])
	};
};
//#endregion
export { FB as $, tt as $i, uh as $n, Qi as $r, kD as $t, qV as A, Jn as Ai, Uh as An, Fa as Ar, yz as At, jV as B, tn as Bi, Oh as Bn, la as Br, MI as Bt, wH as C, ar as Ci, Ev as Cn, za as Cr, Fz as Ct, cH as D, nr as Di, Kh as Dn, qa as Dr, Tz as Dt, vH as E, tr as Ei, Q as En, Ua as Er, Az as Et, RV as F, sn as Fi, Ih as Fn, Pa as Fr, qR as Ft, fV as G, zt as Gi, Ch as Gn, aa as Gr, SP as Gt, gV as H, Xt as Hi, Dh as Hn, da as Hr, _F as Ht, LV as I, on as Ii, Lh as In, Na as Ir, WR as It, oV as J, Vt as Ji, ch as Jn, Yi as Jr, tj as Jt, cV as K, Bt as Ki, mh as Kn, Gi as Kr, xP as Kt, PV as L, an as Li, Nh as Ln, Sa as Lr, LL as Lt, JV as M, qn as Mi, Hh as Mn, ha as Mr, sz as Mt, VV as N, Pn as Ni, Rh as Nn, Aa as Nr, nz as Nt, ZV as O, Yn as Oi, Yh as On, Ja as Or, jz as Ot, HV as P, $t as Pi, Fh as Pn, Oa as Pr, ZR as Pt, NB as Q, Mt as Qi, sh as Qn, $i as Qr, uO as Qt, NV as R, nn as Ri, Ph as Rn, Ca as Rr, mL as Rt, TH as S, or as Si, Pv as Sn, co as Sr, zz as St, yH as T, ir as Ti, Y as Tn, Wa as Tr, Mz as Tt, mV as U, Yt as Ui, Th as Un, ca as Ur, TP as Ut, _V as V, Zt as Vi, Eh as Vn, ua as Vr, EF as Vt, dV as W, Rt as Wi, hh as Wn, pa as Wr, wP as Wt, aV as X, Wt as Xi, th as Xn, zi as Xr, ek as Xt, iV as Y, It as Yi, Xm as Yn, Bi as Yr, AA as Yt, pB as Z, Lt as Zi, lh as Zn, Xi as Zr, qO as Zt, OH as _, _r as _i, pb as _n, Zp as _r, Wz as _t, HH as a, Zi as ai, yD as an, cm as ar, QB as at, bH as b, hr as bi, Zv as bn, oo as br, Hz as bt, IH as c, ti as ci, hD as cn, Wm as cr, tV as ct, jH as d, Vr as di, lD as dn, im as dr, rB as dt, nt as ea, Ji as ei, DD as en, rh as er, _B as et, PH as f, fr as fi, cD as fn, $p as fr, $z as ft, DH as g, vr as gi, fb as gn, Qp as gr, Kz as gt, EH as h, Ar as hi, _b as hn, rm as hr, qz as ht, GH as i, Pi as ii, xD as in, Pm as ir, kB as it, XV as j, Kn as ji, Wh as jn, ga as jr, hz as jt, KV as k, Zn as ki, Jh as kn, io as kr, xz as kt, LH as l, Zr as li, pD as ln, Rm as lr, cB as lt, SH as m, yr as mi, yb as mn, em as mr, eB as mt, qH as n, Ni as ni, CD as nn, Lm as nr, zB as nt, zH as o, di as oi, vD as on, Nm as or, nV as ot, NH as p, br as pi, Tb as pn, tm as pr, tB as pt, sV as q, Ht as qi, ph as qn, Ri as qr, bP as qt, WH as r, Mi as ri, SD as rn, Fm as rr, $B as rt, FH as s, ci as si, _D as sn, zm as sr, eV as st, KH as t, jt as ta, qi as ti, TD as tn, Ym as tr, KB as tt, AH as u, Hr as ui, uD as un, sm as ur, lB as ut, CH as v, dr as vi, db as vn, Xp as vr, Uz as vt, MH as w, rr as wi, L_ as wn, Ya as wr, Iz as wt, kH as x, Nr as xi, Wv as xn, so as xr, Bz as xt, xH as y, xr as yi, Hy as yn, Kp as yr, Vz as yt, MV as z, rn as zi, Mh as zn, fa as zr, zI as zt };
