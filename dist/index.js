"use client";
"use client";
import { $ as hasMeaningfulValue, $n as useToast, $t as resolveBonusAwardDetails, An as resolveStaleTime, Ar as Button, At as resolvePaymentTypeMatch, B as SuggestedAmountButtons, Bn as useNavigationItems, Br as useLayoutEffect$1, Bt as getPayoutWithdrawableBalance, C as PaymentTypeListItem, Cn as functionalUpdate, Cr as normalizeAmountValue, Ct as encodeRedirectPayload, D as PaymentTypeLogo, Dn as matchQuery, Dr as HEX_COLOR_SHORT_REGEX, Dt as usePaymentTypes, E as PaymentTypeLimitsFeeMeta, En as matchMutation, Er as HEX_COLOR_LONG_REGEX, Et as parseRedirectType, F as resolveComboViewInlinePaymentTypesStyle, Fn as usePaymentFormReset, Fr as useRouter, Ft as getAmountLimitStatus, G as ENTRANCE_ANIMATION_PANEL_ITEM_CLASSNAME, Gn as useCashierDomHooks, Gt as getCalculatedPayoutTotalSummaryField, H as ENTRANCE_ANIMATION_ITEM_CLASSNAME, Hn as STICKY_SURFACE_FADE_STYLE, Hr as __commonJSMin, Ht as createFeeCurrencyFormatter, In as OverridePayloadProvider, Ir as routerContext, It as getPayoutAmountMaxBoundary, J as resolveEntranceAnimationStyle, Jn as defaultCashierConfig, Jt as resolveDefaultRoute, K as ENTRANCE_ANIMATION_PANEL_SURFACE_CLASSNAME, Kn as CashierContext, Kt as insertSummaryFieldsBeforeRemainingBalance, L as PaymentForm, Ln as useOverridePayload, Lt as parseAmountValue, M as isComboViewPaymentTypesVisible, Mn as focusManager, Mr as LoaderIcon, Mt as useCashierFormatters, N as paymentTypeSupportsAmountField, Nn as Subscribable, Nr as twJoin, Nt as formatAmountLimitError, O as PaymentTypeInlineForm, On as noop, Or as isMoneyLike, P as resolveBonusListStyle, Pn as PaymentFormResetProvider, Pr as useNavigate, Pt as getAmountLimitErrorDetails, Q as hasAnyError, Qn as CashierSuggestAction, Qt as normalizeBonuses, R as canEditPaymentFormAmount, Rn as overridePayloadSampleJson, Rt as resolveConfiguredAmount, S as SelectableListLayout, Sn as ensureQueryFn, Sr as hasAmountValue, St as decodeRedirectPayload, T as usePaymentSelection, Tn as hashQueryKeyByOptions, Tr as sanitizeAmountInput, Tt as normalizeRedirectType, U as ENTRANCE_ANIMATION_LIST_ITEM_CLASSNAME, Un as TOP_STICKY_SURFACE_FADE_STYLE, Ut as getCalculatedFeeSummaryField, V as PaymentFieldList, Vn as useNavigationShell, Vr as usePrevious, Vt as getRawPayoutWithdrawableBalance, W as ENTRANCE_ANIMATION_LIST_SURFACE_CLASSNAME, Wn as CashierDomHooksProvider, Wr as __toESM, Wt as getCalculatedPayinTotalSummaryField, X as resolveSelectionListSurfaceAnimationStyle, Xn as CashierLayoutListType, Xt as formatBonusCloseReasonLabel, Y as resolveSelectionListAnimationStyle, Yn as CashierComboViewPaymentTypesMode, Yt as resolveInitialRoute, Z as buildInitialValues, Zn as CashierMethods, Zt as hasConfiguredBonuses, _ as useAccountDelete, _n as onlineManager, _r as DebugIcon, _t as openOrReuseProviderWindow, a as StatusHeaderLoader, an as useCashierI18nStatus, ar as Tabs, at as clearSummaryProgressState, b as BonusCountBadge, bn as addToEnd, br as localeToString, bt as trackProviderWindowClose, c as isMatchingPaymentFormDraft, cn as getPaymentHistory, cr as Markdown, ct as getSummaryAccess, d as CashierHeader, dn as useMutation, dr as SwitchArrowsIcon, dt as PROVIDER_POPUP_BLOCKED_TOAST_ID, en as sortBonusAvailability, er as ToastViewport, et as hasMissingRequiredFields, f as PaymentTypesAccordion, fn as useQuery, fr as ResetIcon, ft as PROVIDER_WINDOW_TARGET, g as formatAmountForInput, gn as Query, gr as InteractivePromptIcon, gt as getProviderWindowHandle, h as createPaymentDetailsPromptDescriptor, hn as Mutation, hr as InteractivePromptReadyIcon, ht as closeProviderWindowHandle, i as StatusHeader, in as CashierI18nProvider, ir as InteractivePrompt, it as useFinishPayment, j as isComboViewPaymentTypesPicker, jn as skipToken, jr as resolveButtonTheme, jt as formatDisplayValue, k as hasPaymentTypeFormDetailsContent, kn as partialMatchKey, kr as PortalContainerProvider, kt as formatCardAccountLabel, l as retargetPaymentFormDraftAmount, ln as getPaymentSummary, lr as Formik, lt as PaymentProvider, m as createChoosePaymentTypePromptIcon, mn as useQueryClient, mr as OverwriteIcon, mt as canOpenProviderWindow, n as StatusText, nn as CashierDrawer, nr as CircularProgress, nt as CashierValueFormatterProvider, o as SubContainer, on as useI18n, or as Switcher, ot as hasSummaryProviderStep, p as createChoosePaymentTypePromptDescriptor, pn as QueryClientProvider, pr as PresentIcon, pt as buildProviderWindowStepKey, q as ENTRANCE_ANIMATION_SURFACE_CLASSNAME, qn as createCashierState, qt as isComboViewEntryEnabled, r as STATUS_HEADER_VISUAL_CLASS_NAME, rn as CashierThemeProvider, rr as LinearProgress, rt as useCashierValueFormatter, s as arePaymentFormDraftsEqual, sn as cancelPayment, sr as CASHIER_FORM_GRID_CLASS_NAME, st as clearSummaryAccess, t as useBackNavigation, tn as formatTemplate, tr as ToastProvider, tt as validatePaymentFields, u as InteractivePromptHeader, un as client, ur as Input, ut as usePaymentStatus, v as useHotkey, vn as notifyManager, vr as CloseIcon, vt as openProviderPopupWindow, w as I18nTextSlot, wn as hashKey, wr as parseAmountSuggestions, wt as normalizeRedirectMethod, x as useBonuses, xn as addToStart, xr as resolveLocale, xt as isTerminalPaymentStatus, y as PaymentTypesList, yn as addConsumeAwareSignal, yr as BadgeCheckIcon, yt as setProviderWindowHandle, z as PaymentNotificationCard, zn as NavigationShellProvider, zt as getPayoutConsumedAmount } from "./useBackNavigation-X8aGg6sp.js";
import { A as decodePath, B as replaceEqualDeep, C as processRouteMasks, D as DEFAULT_PROTOCOL_ALLOWLIST, E as invariant, F as isDangerousProtocol, I as isPlainObject, L as isPromise, M as encodePathLikeUrl, N as findLast, O as arraysEqual, P as functionalUpdate$1, R as last, S as findSingleMatch, T as createLRUCache, _ as resolvePath, a as useParams, b as findFlatMatch, c as ClientOnly, d as rootRouteId, f as isNotFound, g as joinPaths, h as interpolatePath, i as useSearch, j as deepEqual, k as createControlledPromise, l as isRedirect, m as compileDecodeCharMap, n as createFileRoute, o as useStore, p as cleanPath, r as createRootRoute, s as matchContext, t as Route$7, u as redirect, v as trimPath, w as processRouteTree, x as findRouteMatch, y as trimPathRight, z as nullReplaceEqualDeep } from "./_method-DBvObRWV.js";
import * as React$1 from "react";
import React, { Children, createContext, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { createPortal, flushSync } from "react-dom";
//#region ../../node_modules/@tanstack/router-core/dist/esm/scroll-restoration.js
function getSafeSessionStorage() {
	try {
		return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0;
	} catch {
		return;
	}
}
var storageKey = "tsr-scroll-restoration-v1_3";
function createScrollRestorationCache() {
	let e = getSafeSessionStorage();
	if (!e) return null;
	let t = {};
	try {
		let n = JSON.parse(e.getItem("tsr-scroll-restoration-v1_3") || "{}");
		isPlainObject(n) && (t = n);
	} catch {}
	return {
		get state() {
			return t;
		},
		set: (e) => {
			t = functionalUpdate$1(e, t) || t;
		},
		persist: () => {
			try {
				e.setItem(storageKey, JSON.stringify(t));
			} catch {
				process.env.NODE_ENV !== "production" && console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.");
			}
		}
	};
}
var scrollRestorationCache = createScrollRestorationCache(), defaultGetScrollRestorationKey = (e) => e.state.__TSR_key || e.href;
function getCssSelector(e) {
	let t = [], n;
	for (; n = e.parentNode;) t.push(`${e.tagName}:nth-child(${Array.prototype.indexOf.call(n.children, e) + 1})`), e = n;
	return `${t.reverse().join(" > ")}`.toLowerCase();
}
var ignoreScroll = !1, windowScrollTarget = "window", scrollRestorationIdAttribute = "data-scroll-restoration-id";
function setupScrollRestoration(e, t) {
	if (!scrollRestorationCache) return;
	let n = scrollRestorationCache;
	if ((t ?? e.options.scrollRestoration ?? !1) && (e.isScrollRestoring = !0), e.isScrollRestorationSetup || !n) return;
	e.isScrollRestorationSetup = !0, ignoreScroll = !1;
	let r = e.options.getScrollRestorationKey || defaultGetScrollRestorationKey, i = /* @__PURE__ */ new Map();
	window.history.scrollRestoration = "manual";
	let a = (t) => {
		if (!(ignoreScroll || !e.isScrollRestoring)) if (t.target === document || t.target === window) i.set(windowScrollTarget, {
			scrollX: window.scrollX || 0,
			scrollY: window.scrollY || 0
		});
		else {
			let e = t.target;
			i.set(e, {
				scrollX: e.scrollLeft || 0,
				scrollY: e.scrollTop || 0
			});
		}
	}, o = (t) => {
		if (!e.isScrollRestoring || !t || i.size === 0 || !n) return;
		let r = n.state[t] ||= {};
		for (let [e, t] of i) {
			let n;
			if (e === windowScrollTarget) n = windowScrollTarget;
			else if (e.isConnected) {
				let t = e.getAttribute(scrollRestorationIdAttribute);
				n = t ? `[${scrollRestorationIdAttribute}="${t}"]` : getCssSelector(e);
			}
			n && (r[n] = t);
		}
	};
	document.addEventListener("scroll", a, !0), e.subscribe("onBeforeLoad", (e) => {
		o(e.fromLocation ? r(e.fromLocation) : void 0), i.clear();
	}), window.addEventListener("pagehide", () => {
		o(r(e.stores.resolvedLocation.state ?? e.stores.location.state)), n.persist();
	}), e.subscribe("onRendered", (t) => {
		let a = r(t.toLocation), o = e.options.scrollRestorationBehavior, s = e.options.scrollToTopSelectors;
		if (i.clear(), !e.resetNextScroll) {
			e.resetNextScroll = !0;
			return;
		}
		if (!(typeof e.options.scrollRestoration == "function" && !e.options.scrollRestoration({ location: e.latestLocation }))) {
			ignoreScroll = !0;
			try {
				let t = e.isScrollRestoring ? n.state[a] : void 0, r = !1;
				if (t) for (let e in t) {
					let n = t[e];
					if (!isPlainObject(n)) continue;
					let { scrollX: i, scrollY: a } = n;
					if (!(!Number.isFinite(i) || !Number.isFinite(a))) {
						if (e === windowScrollTarget) window.scrollTo({
							top: a,
							left: i,
							behavior: o
						}), r = !0;
						else if (e) {
							let t;
							try {
								t = document.querySelector(e);
							} catch {
								continue;
							}
							t && (t.scrollLeft = i, t.scrollTop = a, r = !0);
						}
					}
				}
				if (!r) {
					let t = e.history.location.hash.slice(1);
					if (t) {
						let e = window.history.state?.__hashScrollIntoViewOptions ?? !0;
						if (e) {
							let n = document.getElementById(t);
							n && n.scrollIntoView(e);
						}
					} else {
						let e = {
							top: 0,
							left: 0,
							behavior: o
						};
						if (window.scrollTo(e), s) for (let t of s) {
							if (t === windowScrollTarget) continue;
							let n = typeof t == "function" ? t() : document.querySelector(t);
							n && n.scrollTo(e);
						}
					}
				}
			} finally {
				ignoreScroll = !1;
			}
			e.isScrollRestoring && n.set((e) => (e[a] ||= {}, e));
		}
	});
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/qss.js
function encode(e, t = String) {
	let n = new URLSearchParams();
	for (let r in e) {
		let i = e[r];
		i !== void 0 && n.set(r, t(i));
	}
	return n.toString();
}
function toValue(e) {
	return e ? e === "false" ? !1 : e === "true" ? !0 : e * 0 == 0 && +e + "" === e ? +e : e : "";
}
function decode(e) {
	let t = new URLSearchParams(e), n = Object.create(null);
	for (let [e, r] of t.entries()) {
		let t = n[e];
		t == null ? n[e] = toValue(r) : Array.isArray(t) ? t.push(toValue(r)) : n[e] = [t, toValue(r)];
	}
	return n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/searchParams.js
var defaultParseSearch = parseSearchWith(JSON.parse), defaultStringifySearch = stringifySearchWith(JSON.stringify, JSON.parse);
function parseSearchWith(e) {
	return (t) => {
		t[0] === "?" && (t = t.substring(1));
		let n = decode(t);
		for (let t in n) {
			let r = n[t];
			if (typeof r == "string") try {
				n[t] = e(r);
			} catch {}
		}
		return n;
	};
}
function stringifySearchWith(e, t) {
	let n = typeof t == "function";
	function r(r) {
		if (typeof r == "object" && r) try {
			return e(r);
		} catch {}
		else if (n && typeof r == "string") try {
			return t(r), e(r);
		} catch {}
		return r;
	}
	return (e) => {
		let t = encode(e, r);
		return t ? `?${t}` : "";
	};
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/rewrite.js
function composeRewrites(e) {
	return {
		input: ({ url: t }) => {
			for (let n of e) t = executeRewriteInput(n, t);
			return t;
		},
		output: ({ url: t }) => {
			for (let n = e.length - 1; n >= 0; n--) t = executeRewriteOutput(e[n], t);
			return t;
		}
	};
}
function rewriteBasepath(e) {
	let t = trimPath(e.basepath), n = `/${t}`, r = `${n}/`, i = e.caseSensitive ? n : n.toLowerCase(), a = e.caseSensitive ? r : r.toLowerCase();
	return {
		input: ({ url: t }) => {
			let r = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
			return r === i ? t.pathname = "/" : r.startsWith(a) && (t.pathname = t.pathname.slice(n.length)), t;
		},
		output: ({ url: e }) => (e.pathname = joinPaths([
			"/",
			t,
			e.pathname
		]), e)
	};
}
function executeRewriteInput(e, t) {
	let n = e?.input?.({ url: t });
	if (n) {
		if (typeof n == "string") return new URL(n);
		if (n instanceof URL) return n;
	}
	return t;
}
function executeRewriteOutput(e, t) {
	let n = e?.output?.({ url: t });
	if (n) {
		if (typeof n == "string") return new URL(n);
		if (n instanceof URL) return n;
	}
	return t;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/stores.js
function createNonReactiveMutableStore(e) {
	let t = e;
	return {
		get state() {
			return t;
		},
		setState(e) {
			t = e(t);
		}
	};
}
function createNonReactiveReadonlyStore(e) {
	return { get state() {
		return e();
	} };
}
function createRouterStores(e, t) {
	let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = n(e.status), d = n(e.loadedAt), p = n(e.isLoading), g = n(e.isTransitioning), _ = n(e.location), y = n(e.resolvedLocation), x = n(e.statusCode), C = n(e.redirect), ee = n([]), te = n([]), ne = n([]), T = r(() => readPoolMatches(o, ee.state)), re = r(() => readPoolMatches(s, te.state)), ie = r(() => readPoolMatches(c, ne.state)), ae = r(() => ee.state[0]), oe = r(() => ee.state.some((e) => o.get(e)?.state.status === "pending")), se = r(() => ({
		locationHref: _.state.href,
		resolvedLocationHref: y.state?.href,
		status: l.state
	})), ce = r(() => ({
		status: l.state,
		loadedAt: d.state,
		isLoading: p.state,
		isTransitioning: g.state,
		matches: T.state,
		location: _.state,
		resolvedLocation: y.state,
		statusCode: x.state,
		redirect: C.state
	})), le = createLRUCache(64);
	function ue(e) {
		let t = le.get(e);
		return t || (t = r(() => {
			let t = ee.state;
			for (let n of t) {
				let t = o.get(n);
				if (t && t.routeId === e) return t.state;
			}
		}), le.set(e, t)), t;
	}
	let de = {
		status: l,
		loadedAt: d,
		isLoading: p,
		isTransitioning: g,
		location: _,
		resolvedLocation: y,
		statusCode: x,
		redirect: C,
		matchesId: ee,
		pendingMatchesId: te,
		cachedMatchesId: ne,
		activeMatchesSnapshot: T,
		pendingMatchesSnapshot: re,
		cachedMatchesSnapshot: ie,
		firstMatchId: ae,
		hasPendingMatches: oe,
		matchRouteReactivity: se,
		activeMatchStoresById: o,
		pendingMatchStoresById: s,
		cachedMatchStoresById: c,
		__store: ce,
		getMatchStoreByRouteId: ue,
		setActiveMatches: fe,
		setPendingMatches: pe,
		setCachedMatches: me
	};
	fe(e.matches), a?.(de);
	function fe(e) {
		reconcileMatchPool(e, o, ee, n, i);
	}
	function pe(e) {
		reconcileMatchPool(e, s, te, n, i);
	}
	function me(e) {
		reconcileMatchPool(e, c, ne, n, i);
	}
	return de;
}
function readPoolMatches(e, t) {
	let n = [];
	for (let r of t) {
		let t = e.get(r);
		t && n.push(t.state);
	}
	return n;
}
function reconcileMatchPool(e, t, n, r, i) {
	let a = e.map((e) => e.id), o = new Set(a);
	i(() => {
		for (let e of t.keys()) o.has(e) || t.delete(e);
		for (let n of e) {
			let e = t.get(n.id);
			if (!e) {
				let e = r(n);
				e.routeId = n.routeId, t.set(n.id, e);
				continue;
			}
			e.routeId = n.routeId, e.state !== n && e.setState(() => n);
		}
		arraysEqual(n.state, a) || n.setState(() => a);
	});
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/load-matches.js
var triggerOnReady = (e) => {
	if (!e.rendered) return e.rendered = !0, e.onReady?.();
}, hasForcePendingActiveMatch = (e) => e.stores.matchesId.state.some((t) => e.stores.activeMatchStoresById.get(t)?.state._forcePending), resolvePreload = (e, t) => !!(e.preload && !e.router.stores.activeMatchStoresById.has(t)), buildMatchContext = (e, t, n = !0) => {
	let r = { ...e.router.options.context ?? {} }, i = n ? t : t - 1;
	for (let t = 0; t <= i; t++) {
		let n = e.matches[t];
		if (!n) continue;
		let i = e.router.getMatch(n.id);
		i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
	}
	return r;
}, getNotFoundBoundaryIndex = (e, t) => {
	if (!e.matches.length) return;
	let n = t.routeId, r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id), i = r >= 0 ? r : 0, a = n ? e.matches.findIndex((e) => e.routeId === n) : e.firstBadMatchIndex ?? e.matches.length - 1;
	a < 0 && (a = i);
	for (let t = a; t >= 0; t--) {
		let n = e.matches[t];
		if (e.router.looseRoutesById[n.routeId].options.notFoundComponent) return t;
	}
	return n ? a : i;
}, handleRedirectAndNotFound = (e, t, n) => {
	if (!(!isRedirect(n) && !isNotFound(n))) throw isRedirect(n) && n.redirectHandled && !n.options.reloadDocument ? n : (t && (t._nonReactive.beforeLoadPromise?.resolve(), t._nonReactive.loaderPromise?.resolve(), t._nonReactive.beforeLoadPromise = void 0, t._nonReactive.loaderPromise = void 0, t._nonReactive.error = n, e.updateMatch(t.id, (r) => ({
		...r,
		status: isRedirect(n) ? "redirected" : r.status === "pending" ? "success" : r.status,
		context: buildMatchContext(e, t.index),
		isFetching: !1,
		error: n
	})), isNotFound(n) && !n.routeId && (n.routeId = t.routeId), t._nonReactive.loadPromise?.resolve()), isRedirect(n) && (e.rendered = !0, n.options._fromLocation = e.location, n.redirectHandled = !0, n = e.router.resolveRedirect(n)), n);
}, shouldSkipLoader = (e, t) => {
	let n = e.router.getMatch(t);
	return !!(!n || n._nonReactive.dehydrated);
}, syncMatchContext = (e, t, n) => {
	let r = buildMatchContext(e, n);
	e.updateMatch(t, (e) => ({
		...e,
		context: r
	}));
}, handleSerialError = (e, t, n, r) => {
	let { id: i, routeId: a } = e.matches[t], o = e.router.looseRoutesById[a];
	if (n instanceof Promise) throw n;
	n.routerCode = r, e.firstBadMatchIndex ??= t, handleRedirectAndNotFound(e, e.router.getMatch(i), n);
	try {
		o.options.onError?.(n);
	} catch (t) {
		n = t, handleRedirectAndNotFound(e, e.router.getMatch(i), n);
	}
	e.updateMatch(i, (e) => (e._nonReactive.beforeLoadPromise?.resolve(), e._nonReactive.beforeLoadPromise = void 0, e._nonReactive.loadPromise?.resolve(), {
		...e,
		error: n,
		status: "error",
		isFetching: !1,
		updatedAt: Date.now(),
		abortController: new AbortController()
	})), !e.preload && !isRedirect(n) && !isNotFound(n) && (e.serialError ??= n);
}, isBeforeLoadSsr = (e, t, n, r) => {
	let i = e.router.getMatch(t), a = e.matches[n - 1]?.id, o = a ? e.router.getMatch(a) : void 0;
	if (e.router.isShell()) {
		i.ssr = r.id === rootRouteId;
		return;
	}
	if (o?.ssr === !1) {
		i.ssr = !1;
		return;
	}
	let s = (e) => e === !0 && o?.ssr === "data-only" ? "data-only" : e, c = e.router.options.defaultSsr ?? !0;
	if (r.options.ssr === void 0) {
		i.ssr = s(c);
		return;
	}
	if (typeof r.options.ssr != "function") {
		i.ssr = s(r.options.ssr);
		return;
	}
	let { search: l, params: d } = i, p = {
		search: makeMaybe(l, i.searchError),
		params: makeMaybe(d, i.paramsError),
		location: e.location,
		matches: e.matches.map((e) => ({
			index: e.index,
			pathname: e.pathname,
			fullPath: e.fullPath,
			staticData: e.staticData,
			id: e.id,
			routeId: e.routeId,
			search: makeMaybe(e.search, e.searchError),
			params: makeMaybe(e.params, e.paramsError),
			ssr: e.ssr
		}))
	}, g = r.options.ssr(p);
	if (isPromise(g)) return g.then((e) => {
		i.ssr = s(e ?? c);
	});
	i.ssr = s(g ?? c);
}, setupPendingTimeout = (e, t, n, r) => {
	if (r._nonReactive.pendingTimeout !== void 0) return;
	let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
	if (e.onReady && !resolvePreload(e, t) && (n.options.loader || n.options.beforeLoad || routeNeedsPreload(n)) && typeof i == "number" && i !== Infinity && (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)) {
		let t = setTimeout(() => {
			triggerOnReady(e);
		}, i);
		r._nonReactive.pendingTimeout = t;
	}
}, preBeforeLoadSetup = (e, t, n) => {
	let r = e.router.getMatch(t);
	if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise) return;
	setupPendingTimeout(e, t, n, r);
	let i = () => {
		let n = e.router.getMatch(t);
		n.preload && (n.status === "redirected" || n.status === "notFound") && handleRedirectAndNotFound(e, n, n.error);
	};
	return r._nonReactive.beforeLoadPromise ? r._nonReactive.beforeLoadPromise.then(i) : i();
}, executeBeforeLoad = (e, t, n, r) => {
	let i = e.router.getMatch(t), a = i._nonReactive.loadPromise;
	i._nonReactive.loadPromise = createControlledPromise(() => {
		a?.resolve(), a = void 0;
	});
	let { paramsError: o, searchError: s } = i;
	o && handleSerialError(e, n, o, "PARSE_PARAMS"), s && handleSerialError(e, n, s, "VALIDATE_SEARCH"), setupPendingTimeout(e, t, r, i);
	let c = new AbortController(), l = !1, d = () => {
		l || (l = !0, e.updateMatch(t, (e) => ({
			...e,
			isFetching: "beforeLoad",
			fetchCount: e.fetchCount + 1,
			abortController: c
		})));
	}, p = () => {
		i._nonReactive.beforeLoadPromise?.resolve(), i._nonReactive.beforeLoadPromise = void 0, e.updateMatch(t, (e) => ({
			...e,
			isFetching: !1
		}));
	};
	if (!r.options.beforeLoad) {
		e.router.batch(() => {
			d(), p();
		});
		return;
	}
	i._nonReactive.beforeLoadPromise = createControlledPromise();
	let g = {
		...buildMatchContext(e, n, !1),
		...i.__routeContext
	}, { search: _, params: y, cause: x } = i, C = resolvePreload(e, t), ee = {
		search: _,
		abortController: c,
		params: y,
		preload: C,
		context: g,
		location: e.location,
		navigate: (t) => e.router.navigate({
			...t,
			_fromLocation: e.location
		}),
		buildLocation: e.router.buildLocation,
		cause: C ? "preload" : x,
		matches: e.matches,
		routeId: r.id,
		...e.router.options.additionalContext
	}, te = (r) => {
		if (r === void 0) {
			e.router.batch(() => {
				d(), p();
			});
			return;
		}
		(isRedirect(r) || isNotFound(r)) && (d(), handleSerialError(e, n, r, "BEFORE_LOAD")), e.router.batch(() => {
			d(), e.updateMatch(t, (e) => ({
				...e,
				__beforeLoadContext: r
			})), p();
		});
	}, ne;
	try {
		if (ne = r.options.beforeLoad(ee), isPromise(ne)) return d(), ne.catch((t) => {
			handleSerialError(e, n, t, "BEFORE_LOAD");
		}).then(te);
	} catch (t) {
		d(), handleSerialError(e, n, t, "BEFORE_LOAD");
	}
	te(ne);
}, handleBeforeLoad = (e, t) => {
	let { id: n, routeId: r } = e.matches[t], i = e.router.looseRoutesById[r], a = () => s(), o = () => executeBeforeLoad(e, n, t, i), s = () => {
		if (shouldSkipLoader(e, n)) return;
		let t = preBeforeLoadSetup(e, n, i);
		return isPromise(t) ? t.then(o) : o();
	};
	return a();
}, executeHead = (e, t, n) => {
	let r = e.router.getMatch(t);
	if (!r || !n.options.head && !n.options.scripts && !n.options.headers) return;
	let i = {
		ssr: e.router.options.ssr,
		matches: e.matches,
		match: r,
		params: r.params,
		loaderData: r.loaderData
	};
	return Promise.all([
		n.options.head?.(i),
		n.options.scripts?.(i),
		n.options.headers?.(i)
	]).then(([e, t, n]) => ({
		meta: e?.meta,
		links: e?.links,
		headScripts: e?.scripts,
		headers: n,
		scripts: t,
		styles: e?.styles
	}));
}, getLoaderContext = (e, t, n, r, i) => {
	let a = t[r - 1], { params: o, loaderDeps: s, abortController: c, cause: l } = e.router.getMatch(n), d = buildMatchContext(e, r), p = resolvePreload(e, n);
	return {
		params: o,
		deps: s,
		preload: !!p,
		parentMatchPromise: a,
		abortController: c,
		context: d,
		location: e.location,
		navigate: (t) => e.router.navigate({
			...t,
			_fromLocation: e.location
		}),
		cause: p ? "preload" : l,
		route: i,
		...e.router.options.additionalContext
	};
}, runLoader = async (e, t, n, r, i) => {
	try {
		let a = e.router.getMatch(n);
		try {
			loadRouteChunk(i);
			let o = i.options.loader, s = typeof o == "function" ? o : o?.handler, c = s?.(getLoaderContext(e, t, n, r, i)), l = !!s && isPromise(c);
			if ((l || i._lazyPromise || i._componentsPromise || i.options.head || i.options.scripts || i.options.headers || a._nonReactive.minPendingPromise) && e.updateMatch(n, (e) => ({
				...e,
				isFetching: "loader"
			})), s) {
				let t = l ? await c : c;
				handleRedirectAndNotFound(e, e.router.getMatch(n), t), t !== void 0 && e.updateMatch(n, (e) => ({
					...e,
					loaderData: t
				}));
			}
			i._lazyPromise && await i._lazyPromise;
			let d = a._nonReactive.minPendingPromise;
			d && await d, i._componentsPromise && await i._componentsPromise, e.updateMatch(n, (t) => ({
				...t,
				error: void 0,
				context: buildMatchContext(e, r),
				status: "success",
				isFetching: !1,
				updatedAt: Date.now()
			}));
		} catch (t) {
			let o = t;
			if (o?.name === "AbortError") {
				if (a.abortController.signal.aborted) {
					a._nonReactive.loaderPromise?.resolve(), a._nonReactive.loaderPromise = void 0;
					return;
				}
				e.updateMatch(n, (t) => ({
					...t,
					status: t.status === "pending" ? "success" : t.status,
					isFetching: !1,
					context: buildMatchContext(e, r)
				}));
				return;
			}
			let s = a._nonReactive.minPendingPromise;
			s && await s, isNotFound(t) && await i.options.notFoundComponent?.preload?.(), handleRedirectAndNotFound(e, e.router.getMatch(n), t);
			try {
				i.options.onError?.(t);
			} catch (t) {
				o = t, handleRedirectAndNotFound(e, e.router.getMatch(n), t);
			}
			!isRedirect(o) && !isNotFound(o) && await loadRouteChunk(i, ["errorComponent"]), e.updateMatch(n, (t) => ({
				...t,
				error: o,
				context: buildMatchContext(e, r),
				status: "error",
				isFetching: !1
			}));
		}
	} catch (t) {
		let r = e.router.getMatch(n);
		r && (r._nonReactive.loaderPromise = void 0), handleRedirectAndNotFound(e, r, t);
	}
}, loadRouteMatch = async (e, t, n) => {
	async function r(r, a, c, l, p) {
		let g = Date.now() - a.updatedAt, _ = r ? p.options.preloadStaleTime ?? e.router.options.defaultPreloadStaleTime ?? 3e4 : p.options.staleTime ?? e.router.options.defaultStaleTime ?? 0, y = p.options.shouldReload, x = typeof y == "function" ? y(getLoaderContext(e, t, i, n, p)) : y, { status: C, invalid: ee } = l, te = g >= _ && (!!e.forceStaleReload || l.cause === "enter" || c !== void 0 && c !== l.id);
		o = C === "success" && (ee || (x ?? te)), r && p.options.preload === !1 || (o && !e.sync && d ? (s = !0, (async () => {
			try {
				await runLoader(e, t, i, n, p);
				let r = e.router.getMatch(i);
				r._nonReactive.loaderPromise?.resolve(), r._nonReactive.loadPromise?.resolve(), r._nonReactive.loaderPromise = void 0, r._nonReactive.loadPromise = void 0;
			} catch (t) {
				isRedirect(t) && await e.router.navigate(t.options);
			}
		})()) : C !== "success" || o ? await runLoader(e, t, i, n, p) : syncMatchContext(e, i, n));
	}
	let { id: i, routeId: a } = e.matches[n], o = !1, s = !1, c = e.router.looseRoutesById[a], l = c.options.loader, d = ((typeof l == "function" ? void 0 : l?.staleReloadMode) ?? e.router.options.defaultStaleReloadMode) !== "blocking";
	if (shouldSkipLoader(e, i)) {
		if (!e.router.getMatch(i)) return e.matches[n];
		syncMatchContext(e, i, n);
	} else {
		let t = e.router.getMatch(i), o = e.router.stores.matchesId.state[n], s = (o && e.router.stores.activeMatchStoresById.get(o) || null)?.routeId === a ? o : e.router.stores.activeMatchesSnapshot.state.find((e) => e.routeId === a)?.id, l = resolvePreload(e, i);
		if (t._nonReactive.loaderPromise) {
			if (t.status === "success" && !e.sync && !t.preload && d) return t;
			await t._nonReactive.loaderPromise;
			let n = e.router.getMatch(i), a = n._nonReactive.error || n.error;
			a && handleRedirectAndNotFound(e, n, a), n.status === "pending" && await r(l, t, s, n, c);
		} else {
			let n = l && !e.router.stores.activeMatchStoresById.has(i), a = e.router.getMatch(i);
			a._nonReactive.loaderPromise = createControlledPromise(), n !== a.preload && e.updateMatch(i, (e) => ({
				...e,
				preload: n
			})), await r(l, t, s, a, c);
		}
	}
	let p = e.router.getMatch(i);
	s || (p._nonReactive.loaderPromise?.resolve(), p._nonReactive.loadPromise?.resolve(), p._nonReactive.loadPromise = void 0), clearTimeout(p._nonReactive.pendingTimeout), p._nonReactive.pendingTimeout = void 0, s || (p._nonReactive.loaderPromise = void 0), p._nonReactive.dehydrated = void 0;
	let g = s ? p.isFetching : !1;
	return g !== p.isFetching || p.invalid !== !1 ? (e.updateMatch(i, (e) => ({
		...e,
		isFetching: g,
		invalid: !1
	})), e.router.getMatch(i)) : p;
};
async function loadMatches(e) {
	let t = e, n = [];
	hasForcePendingActiveMatch(t.router) && triggerOnReady(t);
	let r;
	for (let e = 0; e < t.matches.length; e++) {
		try {
			let n = handleBeforeLoad(t, e);
			isPromise(n) && await n;
		} catch (e) {
			if (isRedirect(e)) throw e;
			if (isNotFound(e)) r = e;
			else if (!t.preload) throw e;
			break;
		}
		if (t.serialError || t.firstBadMatchIndex != null) break;
	}
	let i = t.firstBadMatchIndex ?? t.matches.length, a = r && !t.preload ? getNotFoundBoundaryIndex(t, r) : void 0, o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i), s, c;
	for (let e = 0; e < o; e++) n.push(loadRouteMatch(t, n, e));
	try {
		await Promise.all(n);
	} catch {
		let e = await Promise.allSettled(n);
		for (let t of e) {
			if (t.status !== "rejected") continue;
			let e = t.reason;
			if (isRedirect(e)) throw e;
			isNotFound(e) ? s ??= e : c ??= e;
		}
		if (c !== void 0) throw c;
	}
	let l = s ?? (r && !t.preload ? r : void 0), d = t.firstBadMatchIndex === void 0 ? t.matches.length - 1 : t.firstBadMatchIndex;
	if (!l && r && t.preload) return t.matches;
	if (l) {
		let e = getNotFoundBoundaryIndex(t, l);
		if (e === void 0) {
			if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Could not find match for notFound boundary");
			invariant();
		}
		let n = t.matches[e], r = t.router.looseRoutesById[n.routeId], i = t.router.options?.defaultNotFoundComponent;
		!r.options.notFoundComponent && i && (r.options.notFoundComponent = i), l.routeId = n.routeId;
		let a = n.routeId === t.router.routeTree.id;
		t.updateMatch(n.id, (e) => ({
			...e,
			...a ? {
				status: "success",
				globalNotFound: !0,
				error: void 0
			} : {
				status: "notFound",
				error: l
			},
			isFetching: !1
		})), d = e, await loadRouteChunk(r, ["notFoundComponent"]);
	} else if (!t.preload) {
		let e = t.matches[0];
		e.globalNotFound || t.router.getMatch(e.id)?.globalNotFound && t.updateMatch(e.id, (e) => ({
			...e,
			globalNotFound: !1,
			error: void 0
		}));
	}
	if (t.serialError && t.firstBadMatchIndex !== void 0) {
		let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
		await loadRouteChunk(e, ["errorComponent"]);
	}
	for (let e = 0; e <= d; e++) {
		let { id: n, routeId: r } = t.matches[e], i = t.router.looseRoutesById[r];
		try {
			let e = executeHead(t, n, i);
			if (e) {
				let r = await e;
				t.updateMatch(n, (e) => ({
					...e,
					...r
				}));
			}
		} catch (e) {
			console.error(`Error executing head for route ${r}:`, e);
		}
	}
	let p = triggerOnReady(t);
	if (isPromise(p) && await p, l) throw l;
	if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
	return t.matches;
}
function preloadRouteComponents(e, t) {
	let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
	if (n.length !== 0) return Promise.all(n);
}
function loadRouteChunk(e, t = componentTypes) {
	!e._lazyLoaded && e._lazyPromise === void 0 && (e.lazyFn ? e._lazyPromise = e.lazyFn().then((t) => {
		let { id: n, ...r } = t.options;
		Object.assign(e.options, r), e._lazyLoaded = !0, e._lazyPromise = void 0;
	}) : e._lazyLoaded = !0);
	let n = () => e._componentsLoaded ? void 0 : t === componentTypes ? (() => {
		if (e._componentsPromise === void 0) {
			let t = preloadRouteComponents(e, componentTypes);
			t ? e._componentsPromise = t.then(() => {
				e._componentsLoaded = !0, e._componentsPromise = void 0;
			}) : e._componentsLoaded = !0;
		}
		return e._componentsPromise;
	})() : preloadRouteComponents(e, t);
	return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function makeMaybe(e, t) {
	return t ? {
		status: "error",
		error: t
	} : {
		status: "success",
		value: e
	};
}
function routeNeedsPreload(e) {
	for (let t of componentTypes) if (e.options[t]?.preload) return !0;
	return !1;
}
var componentTypes = [
	"component",
	"errorComponent",
	"pendingComponent",
	"notFoundComponent"
], stateIndexKey = "__TSR_index", popStateEvent = "popstate", beforeUnloadEvent = "beforeunload";
function createHistory(e) {
	let t = e.getLocation(), n = /* @__PURE__ */ new Set(), r = (r) => {
		t = e.getLocation(), n.forEach((e) => e({
			location: t,
			action: r
		}));
	}, i = (n) => {
		e.notifyOnIndexChange ?? !0 ? r(n) : t = e.getLocation();
	}, a = async ({ task: n, navigateOpts: r, ...i }) => {
		if (r?.ignoreBlocker ?? !1) {
			n();
			return;
		}
		let a = e.getBlockers?.() ?? [], o = i.type === "PUSH" || i.type === "REPLACE";
		if (typeof document < "u" && a.length && o) for (let n of a) {
			let r = parseHref(i.path, i.state);
			if (await n.blockerFn({
				currentLocation: t,
				nextLocation: r,
				action: i.type
			})) {
				e.onBlocked?.();
				return;
			}
		}
		n();
	};
	return {
		get location() {
			return t;
		},
		get length() {
			return e.getLength();
		},
		subscribers: n,
		subscribe: (e) => (n.add(e), () => {
			n.delete(e);
		}),
		push: (n, i, o) => {
			let s = t.state[stateIndexKey];
			i = assignKeyAndIndex(s + 1, i), a({
				task: () => {
					e.pushState(n, i), r({ type: "PUSH" });
				},
				navigateOpts: o,
				type: "PUSH",
				path: n,
				state: i
			});
		},
		replace: (n, i, o) => {
			let s = t.state[stateIndexKey];
			i = assignKeyAndIndex(s, i), a({
				task: () => {
					e.replaceState(n, i), r({ type: "REPLACE" });
				},
				navigateOpts: o,
				type: "REPLACE",
				path: n,
				state: i
			});
		},
		go: (t, n) => {
			a({
				task: () => {
					e.go(t), i({
						type: "GO",
						index: t
					});
				},
				navigateOpts: n,
				type: "GO"
			});
		},
		back: (t) => {
			a({
				task: () => {
					e.back(t?.ignoreBlocker ?? !1), i({ type: "BACK" });
				},
				navigateOpts: t,
				type: "BACK"
			});
		},
		forward: (t) => {
			a({
				task: () => {
					e.forward(t?.ignoreBlocker ?? !1), i({ type: "FORWARD" });
				},
				navigateOpts: t,
				type: "FORWARD"
			});
		},
		canGoBack: () => t.state[stateIndexKey] !== 0,
		createHref: (t) => e.createHref(t),
		block: (t) => {
			if (!e.setBlockers) return () => {};
			let n = e.getBlockers?.() ?? [];
			return e.setBlockers([...n, t]), () => {
				let n = e.getBlockers?.() ?? [];
				e.setBlockers?.(n.filter((e) => e !== t));
			};
		},
		flush: () => e.flush?.(),
		destroy: () => e.destroy?.(),
		notify: r
	};
}
function assignKeyAndIndex(e, t) {
	t ||= {};
	let n = createRandomKey();
	return {
		...t,
		key: n,
		__TSR_key: n,
		[stateIndexKey]: e
	};
}
function createBrowserHistory(e) {
	let t = e?.window ?? (typeof document < "u" ? window : void 0), n = t.history.pushState, r = t.history.replaceState, i = [], a = () => i, o = (e) => i = e, s = e?.createHref ?? ((e) => e), c = e?.parseLocation ?? (() => parseHref(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
	if (!t.history.state?.__TSR_key && !t.history.state?.key) {
		let e = createRandomKey();
		t.history.replaceState({
			[stateIndexKey]: 0,
			key: e,
			__TSR_key: e
		}, "");
	}
	let l = c(), d, p = !1, g = !1, _ = !1, y = !1, x = () => l, C, ee, te = () => {
		C && (ae._ignoreSubscribers = !0, (C.isPush ? t.history.pushState : t.history.replaceState)(C.state, "", C.href), ae._ignoreSubscribers = !1, C = void 0, ee = void 0, d = void 0);
	}, ne = (e, t, n) => {
		let r = s(t);
		ee || (d = l), l = parseHref(t, n), C = {
			href: r,
			state: n,
			isPush: C?.isPush || e === "push"
		}, ee ||= Promise.resolve().then(() => te());
	}, T = (e) => {
		l = c(), ae.notify({ type: e });
	}, re = async () => {
		if (g) {
			g = !1;
			return;
		}
		let e = c(), n = e.state[stateIndexKey] - l.state[stateIndexKey], r = n === 1, i = n === -1, o = !r && !i || p;
		p = !1;
		let s = o ? "GO" : i ? "BACK" : "FORWARD", d = o ? {
			type: "GO",
			index: n
		} : { type: i ? "BACK" : "FORWARD" };
		if (_) _ = !1;
		else {
			let n = a();
			if (typeof document < "u" && n.length) {
				for (let r of n) if (await r.blockerFn({
					currentLocation: l,
					nextLocation: e,
					action: s
				})) {
					g = !0, t.history.go(1), ae.notify(d);
					return;
				}
			}
		}
		l = c(), ae.notify(d);
	}, ie = (e) => {
		if (y) {
			y = !1;
			return;
		}
		let t = !1, n = a();
		if (typeof document < "u" && n.length) for (let e of n) {
			let n = e.enableBeforeUnload ?? !0;
			if (n === !0) {
				t = !0;
				break;
			}
			if (typeof n == "function" && n() === !0) {
				t = !0;
				break;
			}
		}
		if (t) return e.preventDefault(), e.returnValue = "";
	}, ae = createHistory({
		getLocation: x,
		getLength: () => t.history.length,
		pushState: (e, t) => ne("push", e, t),
		replaceState: (e, t) => ne("replace", e, t),
		back: (e) => (e && (_ = !0), y = !0, t.history.back()),
		forward: (e) => {
			e && (_ = !0), y = !0, t.history.forward();
		},
		go: (e) => {
			p = !0, t.history.go(e);
		},
		createHref: (e) => s(e),
		flush: te,
		destroy: () => {
			t.history.pushState = n, t.history.replaceState = r, t.removeEventListener(beforeUnloadEvent, ie, { capture: !0 }), t.removeEventListener(popStateEvent, re);
		},
		onBlocked: () => {
			d && l !== d && (l = d);
		},
		getBlockers: a,
		setBlockers: o,
		notifyOnIndexChange: !1
	});
	return t.addEventListener(beforeUnloadEvent, ie, { capture: !0 }), t.addEventListener(popStateEvent, re), t.history.pushState = function(...e) {
		let r = n.apply(t.history, e);
		return ae._ignoreSubscribers || T("PUSH"), r;
	}, t.history.replaceState = function(...e) {
		let n = r.apply(t.history, e);
		return ae._ignoreSubscribers || T("REPLACE"), n;
	}, ae;
}
function createMemoryHistory(e = { initialEntries: ["/"] }) {
	let t = e.initialEntries, n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1, r = t.map((e, t) => assignKeyAndIndex(t, void 0)), i = () => parseHref(t[n], r[n]), a = [];
	return createHistory({
		getLocation: i,
		getLength: () => t.length,
		pushState: (e, i) => {
			n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)), r.push(i), t.push(e), n = Math.max(t.length - 1, 0);
		},
		replaceState: (e, i) => {
			r[n] = i, t[n] = e;
		},
		back: () => {
			n = Math.max(n - 1, 0);
		},
		forward: () => {
			n = Math.min(n + 1, t.length - 1);
		},
		go: (e) => {
			n = Math.min(Math.max(n + e, 0), t.length - 1);
		},
		createHref: (e) => e,
		getBlockers: () => a,
		setBlockers: (e) => a = e
	});
}
function sanitizePath(e) {
	let t = e.replace(/[\x00-\x1f\x7f]/g, "");
	return t.startsWith("//") && (t = "/" + t.replace(/^\/+/, "")), t;
}
function parseHref(e, t) {
	let n = sanitizePath(e), r = n.indexOf("#"), i = n.indexOf("?"), a = createRandomKey();
	return {
		href: n,
		pathname: n.substring(0, r > 0 ? i > 0 ? Math.min(r, i) : r : i > 0 ? i : n.length),
		hash: r > -1 ? n.substring(r) : "",
		search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : "",
		state: t || {
			[stateIndexKey]: 0,
			key: a,
			__TSR_key: a
		}
	};
}
function createRandomKey() {
	return (Math.random() + 1).toString(36).substring(7);
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/router.js
function getLocationChangeInfo(e, t) {
	let n = t, r = e;
	return {
		fromLocation: n,
		toLocation: r,
		pathChanged: n?.pathname !== r.pathname,
		hrefChanged: n?.href !== r.href,
		hashChanged: n?.hash !== r.hash
	};
}
var RouterCore = class {
	constructor(e, t) {
		this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this.resetNextScroll = !0, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = !1, this.isScrollRestorationSetup = !1, this.startTransition = (e) => e(), this.update = (e) => {
			process.env.NODE_ENV !== "production" && e.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
			let t = this.options, n = this.basepath ?? t?.basepath ?? "/", r = this.basepath === void 0, i = t?.rewrite;
			if (this.options = {
				...t,
				...e
			}, this.isServer = this.options.isServer ?? typeof document > "u", this.protocolAllowlist = new Set(this.options.protocolAllowlist), this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = compileDecodeCharMap(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = createBrowserHistory()), this.origin = this.options.origin, this.origin || (window?.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
				this.routeTree = this.options.routeTree;
				let e;
				this.resolvePathCache = createLRUCache(1e3), e = this.buildRouteTree(), this.setRoutes(e);
			}
			if (!this.stores && this.latestLocation) {
				let e = this.getStoreConfig(this);
				this.batch = e.batch, this.stores = createRouterStores(getInitialRouterState(this.latestLocation), e), setupScrollRestoration(this);
			}
			let a = !1, o = this.options.basepath ?? "/", s = this.options.rewrite;
			if (r || n !== o || i !== s) {
				this.basepath = o;
				let e = [], t = trimPath(o);
				t && t !== "/" && e.push(rewriteBasepath({ basepath: o })), s && e.push(s), this.rewrite = e.length === 0 ? void 0 : e.length === 1 ? e[0] : composeRewrites(e), this.history && this.updateLatestLocation(), a = !0;
			}
			a && this.stores && this.stores.location.setState(() => this.latestLocation), typeof window < "u" && "CSS" in window && typeof window.CSS?.supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
		}, this.updateLatestLocation = () => {
			this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
		}, this.buildRouteTree = () => {
			let e = processRouteTree(this.routeTree, this.options.caseSensitive, (e, t) => {
				e.init({ originalIndex: t });
			});
			return this.options.routeMasks && processRouteMasks(this.options.routeMasks, e.processedTree), e;
		}, this.subscribe = (e, t) => {
			let n = {
				eventType: e,
				fn: t
			};
			return this.subscribers.add(n), () => {
				this.subscribers.delete(n);
			};
		}, this.emit = (e) => {
			this.subscribers.forEach((t) => {
				t.eventType === e.type && t.fn(e);
			});
		}, this.parseLocation = (e, t) => {
			let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
				if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
					let i = this.options.parseSearch(n), o = this.options.stringifySearch(i);
					return {
						href: e + o + r,
						publicHref: e + o + r,
						pathname: decodePath(e).path,
						external: !1,
						searchStr: o,
						search: nullReplaceEqualDeep(t?.search, i),
						hash: decodePath(r.slice(1)).path,
						state: replaceEqualDeep(t?.state, a)
					};
				}
				let o = new URL(i, this.origin), s = executeRewriteInput(this.rewrite, o), c = this.options.parseSearch(s.search), l = this.options.stringifySearch(c);
				return s.search = l, {
					href: s.href.replace(s.origin, ""),
					publicHref: i,
					pathname: decodePath(s.pathname).path,
					external: !!this.rewrite && s.origin !== this.origin,
					searchStr: l,
					search: nullReplaceEqualDeep(t?.search, c),
					hash: decodePath(s.hash.slice(1)).path,
					state: replaceEqualDeep(t?.state, a)
				};
			}, r = n(e), { __tempLocation: i, __tempKey: a } = r.state;
			if (i && (!a || a === this.tempLocationKey)) {
				let e = n(i);
				return e.state.key = r.state.key, e.state.__TSR_key = r.state.__TSR_key, delete e.state.__tempLocation, {
					...e,
					maskedLocation: r
				};
			}
			return r;
		}, this.resolvePathWithBase = (e, t) => resolvePath({
			base: e,
			to: cleanPath(t),
			trailingSlash: this.options.trailingSlash,
			cache: this.resolvePathCache
		}), this.matchRoutes = (e, t, n) => typeof e == "string" ? this.matchRoutesInternal({
			pathname: e,
			search: t
		}, n) : this.matchRoutesInternal(e, t), this.getMatchedRoutes = (e) => getMatchedRoutes({
			pathname: e,
			routesById: this.routesById,
			processedTree: this.processedTree
		}), this.cancelMatch = (e) => {
			let t = this.getMatch(e);
			t && (t.abortController.abort(), clearTimeout(t._nonReactive.pendingTimeout), t._nonReactive.pendingTimeout = void 0);
		}, this.cancelMatches = () => {
			this.stores.pendingMatchesId.state.forEach((e) => {
				this.cancelMatch(e);
			}), this.stores.matchesId.state.forEach((e) => {
				if (this.stores.pendingMatchStoresById.has(e)) return;
				let t = this.stores.activeMatchStoresById.get(e)?.state;
				t && (t.status === "pending" || t.isFetching === "loader") && this.cancelMatch(e);
			});
		}, this.buildLocation = (e) => {
			let t = (t = {}) => {
				let n = t._fromLocation || this.pendingBuiltLocation || this.latestLocation, r = this.matchRoutesLightweight(n);
				if (t.from && process.env.NODE_ENV !== "production" && t._isNavigate) {
					let e = this.getMatchedRoutes(t.from).matchedRoutes, n = findLast(r.matchedRoutes, (e) => comparePaths(e.fullPath, t.from)), i = findLast(e, (e) => comparePaths(e.fullPath, r.fullPath));
					!n && !i && console.warn(`Could not find match for from: ${t.from}`);
				}
				let i = t.unsafeRelative === "path" ? n.pathname : t.from ?? r.fullPath, a = this.resolvePathWithBase(i, "."), o = r.search, s = Object.assign(Object.create(null), r.params), c = t.to ? this.resolvePathWithBase(a, `${t.to}`) : this.resolvePathWithBase(a, "."), l = t.params === !1 || t.params === null ? Object.create(null) : (t.params ?? !0) === !0 ? s : Object.assign(s, functionalUpdate$1(t.params, s)), d = this.getMatchedRoutes(c), p = d.matchedRoutes;
				if ((!d.foundRoute || d.foundRoute.path !== "/" && d.routeParams["**"]) && this.options.notFoundRoute && (p = [...p, this.options.notFoundRoute]), Object.keys(l).length > 0) for (let e of p) {
					let t = e.options.params?.stringify ?? e.options.stringifyParams;
					if (t) try {
						Object.assign(l, t(l));
					} catch {}
				}
				let g = e.leaveParams ? c : decodePath(interpolatePath({
					path: c,
					params: l,
					decoder: this.pathParamsDecoder,
					server: this.isServer
				}).interpolatedPath).path, _ = o;
				if (e._includeValidateSearch && this.options.search?.strict) {
					let e = {};
					p.forEach((t) => {
						if (t.options.validateSearch) try {
							Object.assign(e, validateSearch(t.options.validateSearch, {
								...e,
								..._
							}));
						} catch {}
					}), _ = e;
				}
				_ = applySearchMiddleware({
					search: _,
					dest: t,
					destRoutes: p,
					_includeValidateSearch: e._includeValidateSearch
				}), _ = nullReplaceEqualDeep(o, _);
				let y = this.options.stringifySearch(_), x = t.hash === !0 ? n.hash : t.hash ? functionalUpdate$1(t.hash, n.hash) : void 0, C = x ? `#${x}` : "", ee = t.state === !0 ? n.state : t.state ? functionalUpdate$1(t.state, n.state) : {};
				ee = replaceEqualDeep(n.state, ee);
				let te = `${g}${y}${C}`, ne, T, re = !1;
				if (this.rewrite) {
					let e = new URL(te, this.origin), t = executeRewriteOutput(this.rewrite, e);
					ne = e.href.replace(e.origin, ""), t.origin === this.origin ? T = t.pathname + t.search + t.hash : (T = t.href, re = !0);
				} else ne = encodePathLikeUrl(te), T = ne;
				return {
					publicHref: T,
					href: ne,
					pathname: g,
					search: _,
					searchStr: y,
					state: ee,
					hash: x ?? "",
					external: re,
					unmaskOnReload: t.unmaskOnReload
				};
			}, n = (n = {}, r) => {
				let i = t(n), a = r ? t(r) : void 0;
				if (!a) {
					let n = Object.create(null);
					if (this.options.routeMasks) {
						let o = findFlatMatch(i.pathname, this.processedTree);
						if (o) {
							Object.assign(n, o.rawParams);
							let { from: i, params: s, ...c } = o.route, l = s === !1 || s === null ? Object.create(null) : (s ?? !0) === !0 ? n : Object.assign(n, functionalUpdate$1(s, n));
							r = {
								from: e.from,
								...c,
								params: l
							}, a = t(r);
						}
					}
				}
				return a && (i.maskedLocation = a), i;
			};
			return e.mask ? n(e, {
				from: e.from,
				...e.mask
			}) : n(e);
		}, this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
			let r = () => {
				let e = [
					"key",
					"__TSR_key",
					"__TSR_index",
					"__hashScrollIntoViewOptions"
				];
				e.forEach((e) => {
					n.state[e] = this.latestLocation.state[e];
				});
				let t = deepEqual(n.state, this.latestLocation.state);
				return e.forEach((e) => {
					delete n.state[e];
				}), t;
			}, i = trimPathRight(this.latestLocation.href) === trimPathRight(n.href), a = this.commitLocationPromise;
			if (this.commitLocationPromise = createControlledPromise(() => {
				a?.resolve(), a = void 0;
			}), i && r()) this.load();
			else {
				let { maskedLocation: r, hashScrollIntoView: i, ...a } = n;
				r && (a = {
					...r,
					state: {
						...r.state,
						__tempKey: void 0,
						__tempLocation: {
							...a,
							search: a.searchStr,
							state: {
								...a.state,
								__tempKey: void 0,
								__tempLocation: void 0,
								__TSR_key: void 0,
								key: void 0
							}
						}
					}
				}, (a.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (a.state.__tempKey = this.tempLocationKey)), a.state.__hashScrollIntoViewOptions = i ?? this.options.defaultHashScrollIntoView ?? !0, this.shouldViewTransition = e, this.history[n.replace ? "replace" : "push"](a.publicHref, a.state, { ignoreBlocker: t });
			}
			return this.resetNextScroll = n.resetScroll ?? !0, this.history.subscribers.size || this.load(), this.commitLocationPromise;
		}, this.buildAndCommitLocation = ({ replace: e, resetScroll: t, hashScrollIntoView: n, viewTransition: r, ignoreBlocker: i, href: a, ...o } = {}) => {
			if (a) {
				let t = this.history.location.state.__TSR_index, n = parseHref(a, { __TSR_index: e ? t : t + 1 }), r = new URL(n.pathname, this.origin);
				o.to = executeRewriteInput(this.rewrite, r).pathname, o.search = this.options.parseSearch(n.search), o.hash = n.hash.slice(1);
			}
			let s = this.buildLocation({
				...o,
				_includeValidateSearch: !0
			});
			this.pendingBuiltLocation = s;
			let c = this.commitLocation({
				...s,
				viewTransition: r,
				replace: e,
				resetScroll: t,
				hashScrollIntoView: n,
				ignoreBlocker: i
			});
			return Promise.resolve().then(() => {
				this.pendingBuiltLocation === s && (this.pendingBuiltLocation = void 0);
			}), c;
		}, this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
			let a = !1;
			if (n) try {
				new URL(`${n}`), a = !0;
			} catch {}
			if (a && !t && (t = !0), t) {
				if (e !== void 0 || !n) {
					let t = this.buildLocation({
						to: e,
						...i
					});
					n ??= t.publicHref, r ??= t.publicHref;
				}
				let t = !a && r ? r : n;
				if (isDangerousProtocol(t, this.protocolAllowlist)) return process.env.NODE_ENV !== "production" && console.warn(`Blocked navigation to dangerous protocol: ${t}`), Promise.resolve();
				if (!i.ignoreBlocker) {
					let e = this.history.getBlockers?.() ?? [];
					for (let t of e) if (t?.blockerFn && await t.blockerFn({
						currentLocation: this.latestLocation,
						nextLocation: this.latestLocation,
						action: "PUSH"
					})) return Promise.resolve();
				}
				return i.replace ? window.location.replace(t) : window.location.href = t, Promise.resolve();
			}
			return this.buildAndCommitLocation({
				...i,
				href: n,
				to: e,
				_isNavigate: !0
			});
		}, this.beforeLoad = () => {
			this.cancelMatches(), this.updateLatestLocation();
			let e = this.matchRoutes(this.latestLocation), t = this.stores.cachedMatchesSnapshot.state.filter((t) => !e.some((e) => e.id === t.id));
			this.batch(() => {
				this.stores.status.setState(() => "pending"), this.stores.statusCode.setState(() => 200), this.stores.isLoading.setState(() => !0), this.stores.location.setState(() => this.latestLocation), this.stores.setPendingMatches(e), this.stores.setCachedMatches(t);
			});
		}, this.load = async (e) => {
			let t, n, r, i = this.stores.resolvedLocation.state ?? this.stores.location.state;
			for (r = new Promise((a) => {
				this.startTransition(async () => {
					try {
						this.beforeLoad();
						let t = this.latestLocation, n = this.stores.resolvedLocation.state, r = getLocationChangeInfo(t, n);
						this.stores.redirect.state || this.emit({
							type: "onBeforeNavigate",
							...r
						}), this.emit({
							type: "onBeforeLoad",
							...r
						}), await loadMatches({
							router: this,
							sync: e?.sync,
							forceStaleReload: i.href === t.href,
							matches: this.stores.pendingMatchesSnapshot.state,
							location: t,
							updateMatch: this.updateMatch,
							onReady: async () => {
								this.startTransition(() => {
									this.startViewTransition(async () => {
										let e = null, t = null, n = null, r = null;
										this.batch(() => {
											let i = this.stores.pendingMatchesSnapshot.state, a = i.length, o = this.stores.activeMatchesSnapshot.state;
											e = a ? o.filter((e) => !this.stores.pendingMatchStoresById.has(e.id)) : null;
											let s = /* @__PURE__ */ new Set();
											for (let e of this.stores.pendingMatchStoresById.values()) e.routeId && s.add(e.routeId);
											let c = /* @__PURE__ */ new Set();
											for (let e of this.stores.activeMatchStoresById.values()) e.routeId && c.add(e.routeId);
											t = a ? o.filter((e) => !s.has(e.routeId)) : null, n = a ? i.filter((e) => !c.has(e.routeId)) : null, r = a ? i.filter((e) => c.has(e.routeId)) : o, this.stores.isLoading.setState(() => !1), this.stores.loadedAt.setState(() => Date.now()), a && (this.stores.setActiveMatches(i), this.stores.setPendingMatches([]), this.stores.setCachedMatches([...this.stores.cachedMatchesSnapshot.state, ...e.filter((e) => e.status !== "error" && e.status !== "notFound" && e.status !== "redirected")]), this.clearExpiredCache());
										});
										for (let [e, i] of [
											[t, "onLeave"],
											[n, "onEnter"],
											[r, "onStay"]
										]) if (e) for (let t of e) this.looseRoutesById[t.routeId].options[i]?.(t);
									});
								});
							}
						});
					} catch (e) {
						isRedirect(e) ? (t = e, this.navigate({
							...t.options,
							replace: !0,
							ignoreBlocker: !0
						})) : isNotFound(e) && (n = e);
						let r = t ? t.status : n ? 404 : this.stores.activeMatchesSnapshot.state.some((e) => e.status === "error") ? 500 : 200;
						this.batch(() => {
							this.stores.statusCode.setState(() => r), this.stores.redirect.setState(() => t);
						});
					}
					this.latestLoadPromise === r && (this.commitLocationPromise?.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), a();
				});
			}), this.latestLoadPromise = r, await r; this.latestLoadPromise && r !== this.latestLoadPromise;) await this.latestLoadPromise;
			let a;
			this.hasNotFoundMatch() ? a = 404 : this.stores.activeMatchesSnapshot.state.some((e) => e.status === "error") && (a = 500), a !== void 0 && this.stores.statusCode.setState(() => a);
		}, this.startViewTransition = (e) => {
			let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
			if (this.shouldViewTransition = void 0, t && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
				let n;
				if (typeof t == "object" && this.isViewTransitionTypesSupported) {
					let r = this.latestLocation, i = this.stores.resolvedLocation.state, a = typeof t.types == "function" ? t.types(getLocationChangeInfo(r, i)) : t.types;
					if (a === !1) {
						e();
						return;
					}
					n = {
						update: e,
						types: a
					};
				} else n = e;
				document.startViewTransition(n);
			} else e();
		}, this.updateMatch = (e, t) => {
			this.startTransition(() => {
				let n = this.stores.pendingMatchStoresById.get(e);
				if (n) {
					n.setState(t);
					return;
				}
				let r = this.stores.activeMatchStoresById.get(e);
				if (r) {
					r.setState(t);
					return;
				}
				let i = this.stores.cachedMatchStoresById.get(e);
				if (i) {
					let n = t(i.state);
					n.status === "redirected" ? this.stores.cachedMatchStoresById.delete(e) && this.stores.cachedMatchesId.setState((t) => t.filter((t) => t !== e)) : i.setState(() => n);
				}
			});
		}, this.getMatch = (e) => this.stores.cachedMatchStoresById.get(e)?.state ?? this.stores.pendingMatchStoresById.get(e)?.state ?? this.stores.activeMatchStoresById.get(e)?.state, this.invalidate = (e) => {
			let t = (t) => e?.filter?.(t) ?? !0 ? {
				...t,
				invalid: !0,
				...e?.forcePending || t.status === "error" || t.status === "notFound" ? {
					status: "pending",
					error: void 0
				} : void 0
			} : t;
			return this.batch(() => {
				this.stores.setActiveMatches(this.stores.activeMatchesSnapshot.state.map(t)), this.stores.setCachedMatches(this.stores.cachedMatchesSnapshot.state.map(t)), this.stores.setPendingMatches(this.stores.pendingMatchesSnapshot.state.map(t));
			}), this.shouldViewTransition = !1, this.load({ sync: e?.sync });
		}, this.getParsedLocationHref = (e) => e.publicHref || "/", this.resolveRedirect = (e) => {
			let t = e.headers.get("Location");
			if (!e.options.href || e.options._builtLocation) {
				let t = e.options._builtLocation ?? this.buildLocation(e.options), n = this.getParsedLocationHref(t);
				e.options.href = n, e.headers.set("Location", n);
			} else if (t) try {
				let n = new URL(t);
				if (this.origin && n.origin === this.origin) {
					let t = n.pathname + n.search + n.hash;
					e.options.href = t, e.headers.set("Location", t);
				}
			} catch {}
			if (e.options.href && !e.options._builtLocation && isDangerousProtocol(e.options.href, this.protocolAllowlist)) throw Error(process.env.NODE_ENV === "production" ? "Redirect blocked: unsafe protocol" : `Redirect blocked: unsafe protocol in href "${e.options.href}". Allowed protocols: ${Array.from(this.protocolAllowlist).join(", ")}.`);
			return e.headers.get("Location") || e.headers.set("Location", e.options.href), e;
		}, this.clearCache = (e) => {
			let t = e?.filter;
			t === void 0 ? this.stores.setCachedMatches([]) : this.stores.setCachedMatches(this.stores.cachedMatchesSnapshot.state.filter((e) => !t(e)));
		}, this.clearExpiredCache = () => {
			let e = Date.now();
			this.clearCache({ filter: (t) => {
				let n = this.looseRoutesById[t.routeId];
				if (!n.options.loader) return !0;
				let r = (t.preload ? n.options.preloadGcTime ?? this.options.defaultPreloadGcTime : n.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
				return t.status === "error" ? !0 : e - t.updatedAt >= r;
			} });
		}, this.loadRouteChunk = loadRouteChunk, this.preloadRoute = async (e) => {
			let t = e._builtLocation ?? this.buildLocation(e), n = this.matchRoutes(t, {
				throwOnError: !0,
				preload: !0,
				dest: e
			}), r = new Set([...this.stores.matchesId.state, ...this.stores.pendingMatchesId.state]), i = new Set([...r, ...this.stores.cachedMatchesId.state]), a = n.filter((e) => !i.has(e.id));
			if (a.length) {
				let e = this.stores.cachedMatchesSnapshot.state;
				this.stores.setCachedMatches([...e, ...a]);
			}
			try {
				return n = await loadMatches({
					router: this,
					matches: n,
					location: t,
					preload: !0,
					updateMatch: (e, t) => {
						r.has(e) ? n = n.map((n) => n.id === e ? t(n) : n) : this.updateMatch(e, t);
					}
				}), n;
			} catch (e) {
				if (isRedirect(e)) return e.options.reloadDocument ? void 0 : await this.preloadRoute({
					...e.options,
					_fromLocation: t
				});
				isNotFound(e) || console.error(e);
				return;
			}
		}, this.matchRoute = (e, t) => {
			let n = {
				...e,
				to: e.to ? this.resolvePathWithBase(e.from || "", e.to) : void 0,
				params: e.params || {},
				leaveParams: !0
			}, r = this.buildLocation(n);
			if (t?.pending && this.stores.status.state !== "pending") return !1;
			let i = (t?.pending === void 0 ? !this.stores.isLoading.state : t.pending) ? this.latestLocation : this.stores.resolvedLocation.state || this.stores.location.state, a = findSingleMatch(r.pathname, t?.caseSensitive ?? !1, t?.fuzzy ?? !1, i.pathname, this.processedTree);
			return !a || e.params && !deepEqual(a.rawParams, e.params, { partial: !0 }) ? !1 : t?.includeSearch ?? !0 ? deepEqual(i.search, r.search, { partial: !0 }) ? a.rawParams : !1 : a.rawParams;
		}, this.hasNotFoundMatch = () => this.stores.activeMatchesSnapshot.state.some((e) => e.status === "notFound" || e.globalNotFound), this.getStoreConfig = t, this.update({
			defaultPreloadDelay: 50,
			defaultPendingMs: 1e3,
			defaultPendingMinMs: 500,
			context: void 0,
			...e,
			caseSensitive: e.caseSensitive ?? !1,
			notFoundMode: e.notFoundMode ?? "fuzzy",
			stringifySearch: e.stringifySearch ?? defaultStringifySearch,
			parseSearch: e.parseSearch ?? defaultParseSearch,
			protocolAllowlist: e.protocolAllowlist ?? DEFAULT_PROTOCOL_ALLOWLIST
		}), typeof document < "u" && (self.__TSR_ROUTER__ = this);
	}
	isShell() {
		return !!this.options.isShell;
	}
	isPrerendering() {
		return !!this.options.isPrerendering;
	}
	get state() {
		return this.stores.__store.state;
	}
	setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
		this.routesById = e, this.routesByPath = t, this.processedTree = n;
		let r = this.options.notFoundRoute;
		r && (r.init({ originalIndex: 99999999999 }), this.routesById[r.id] = r);
	}
	get looseRoutesById() {
		return this.routesById;
	}
	getParentContext(e) {
		return e?.id ? e.context ?? this.options.context ?? void 0 : this.options.context ?? void 0;
	}
	matchRoutesInternal(e, t) {
		let n = this.getMatchedRoutes(e.pathname), { foundRoute: r, routeParams: i, parsedParams: a } = n, { matchedRoutes: o } = n, s = !1;
		(r ? r.path !== "/" && i["**"] : trimPathRight(e.pathname)) && (this.options.notFoundRoute ? o = [...o, this.options.notFoundRoute] : s = !0);
		let c = s ? findGlobalNotFoundRouteId(this.options.notFoundMode, o) : void 0, l = Array(o.length), d = /* @__PURE__ */ new Map();
		for (let e of this.stores.activeMatchStoresById.values()) e.routeId && d.set(e.routeId, e.state);
		for (let n = 0; n < o.length; n++) {
			let r = o[n], s = l[n - 1], p, g, _;
			{
				let n = s?.search ?? e.search, i = s?._strictSearch ?? void 0;
				try {
					let e = validateSearch(r.options.validateSearch, { ...n }) ?? void 0;
					p = {
						...n,
						...e
					}, g = {
						...i,
						...e
					}, _ = void 0;
				} catch (e) {
					let r = e;
					if (e instanceof SearchParamError || (r = new SearchParamError(e.message, { cause: e })), t?.throwOnError) throw r;
					p = n, g = {}, _ = r;
				}
			}
			let y = r.options.loaderDeps?.({ search: p }) ?? "", x = y ? JSON.stringify(y) : "", { interpolatedPath: C, usedParams: ee } = interpolatePath({
				path: r.fullPath,
				params: i,
				decoder: this.pathParamsDecoder,
				server: this.isServer
			}), te = r.id + C + x, ne = this.getMatch(te), T = d.get(r.id), re = ne?._strictParams ?? ee, ie;
			if (!ne) try {
				extractStrictParams(r, ee, a, re);
			} catch (e) {
				if (ie = isNotFound(e) || isRedirect(e) ? e : new PathParamError(e.message, { cause: e }), t?.throwOnError) throw ie;
			}
			Object.assign(i, re);
			let ae = T ? "stay" : "enter", oe;
			if (ne) oe = {
				...ne,
				cause: ae,
				params: T?.params ?? i,
				_strictParams: re,
				search: nullReplaceEqualDeep(T ? T.search : ne.search, p),
				_strictSearch: g
			};
			else {
				let e = r.options.loader || r.options.beforeLoad || r.lazyFn || routeNeedsPreload(r) ? "pending" : "success";
				oe = {
					id: te,
					ssr: r.options.ssr,
					index: n,
					routeId: r.id,
					params: T?.params ?? i,
					_strictParams: re,
					pathname: C,
					updatedAt: Date.now(),
					search: T ? nullReplaceEqualDeep(T.search, p) : p,
					_strictSearch: g,
					searchError: void 0,
					status: e,
					isFetching: !1,
					error: void 0,
					paramsError: ie,
					__routeContext: void 0,
					_nonReactive: { loadPromise: createControlledPromise() },
					__beforeLoadContext: void 0,
					context: {},
					abortController: new AbortController(),
					fetchCount: 0,
					cause: ae,
					loaderDeps: T ? replaceEqualDeep(T.loaderDeps, y) : y,
					invalid: !1,
					preload: !1,
					links: void 0,
					scripts: void 0,
					headScripts: void 0,
					meta: void 0,
					staticData: r.options.staticData || {},
					fullPath: r.fullPath
				};
			}
			t?.preload || (oe.globalNotFound = c === r.id), oe.searchError = _;
			let se = this.getParentContext(s);
			oe.context = {
				...se,
				...oe.__routeContext,
				...oe.__beforeLoadContext
			}, l[n] = oe;
		}
		for (let t = 0; t < l.length; t++) {
			let n = l[t], r = this.looseRoutesById[n.routeId], a = this.getMatch(n.id), o = d.get(n.routeId);
			if (n.params = o ? nullReplaceEqualDeep(o.params, i) : i, !a) {
				let i = l[t - 1], a = this.getParentContext(i);
				if (r.options.context) {
					let t = {
						deps: n.loaderDeps,
						params: n.params,
						context: a ?? {},
						location: e,
						navigate: (t) => this.navigate({
							...t,
							_fromLocation: e
						}),
						buildLocation: this.buildLocation,
						cause: n.cause,
						abortController: n.abortController,
						preload: !!n.preload,
						matches: l,
						routeId: r.id
					};
					n.__routeContext = r.options.context(t) ?? void 0;
				}
				n.context = {
					...a,
					...n.__routeContext,
					...n.__beforeLoadContext
				};
			}
		}
		return l;
	}
	matchRoutesLightweight(e) {
		let { matchedRoutes: t, routeParams: n, parsedParams: r } = this.getMatchedRoutes(e.pathname), i = last(t), a = { ...e.search };
		for (let e of t) try {
			Object.assign(a, validateSearch(e.options.validateSearch, a));
		} catch {}
		let o = last(this.stores.matchesId.state), s = o && this.stores.activeMatchStoresById.get(o)?.state, c = s && s.routeId === i.id && s.pathname === e.pathname, l;
		if (c) l = s.params;
		else {
			let e = Object.assign(Object.create(null), n);
			for (let i of t) try {
				extractStrictParams(i, n, r ?? {}, e);
			} catch {}
			l = e;
		}
		return {
			matchedRoutes: t,
			fullPath: i.fullPath,
			search: a,
			params: l
		};
	}
}, SearchParamError = class extends Error {}, PathParamError = class extends Error {}, normalize = (e) => e.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e;
function comparePaths(e, t) {
	return normalize(e) === normalize(t);
}
function getInitialRouterState(e) {
	return {
		loadedAt: 0,
		isLoading: !1,
		isTransitioning: !1,
		status: "idle",
		resolvedLocation: void 0,
		location: e,
		matches: [],
		statusCode: 200
	};
}
function validateSearch(e, t) {
	if (e == null) return {};
	if ("~standard" in e) {
		let n = e["~standard"].validate(t);
		if (n instanceof Promise) throw new SearchParamError("Async validation not supported");
		if (n.issues) throw new SearchParamError(JSON.stringify(n.issues, void 0, 2), { cause: n });
		return n.value;
	}
	return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function getMatchedRoutes({ pathname: e, routesById: t, processedTree: n }) {
	let r = Object.create(null), i = trimPathRight(e), a, o, s = findRouteMatch(i, n, !0);
	return s && (a = s.route, Object.assign(r, s.rawParams), o = Object.assign(Object.create(null), s.parsedParams)), {
		matchedRoutes: s?.branch || [t.__root__],
		routeParams: r,
		foundRoute: a,
		parsedParams: o
	};
}
function applySearchMiddleware({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
	return buildMiddlewareChain(n)(e, t, r ?? !1);
}
function buildMiddlewareChain(e) {
	let t = {
		dest: null,
		_includeValidateSearch: !1,
		middlewares: []
	};
	for (let n of e) "search" in n.options ? n.options.search?.middlewares && t.middlewares.push(...n.options.search.middlewares) : (n.options.preSearchFilters || n.options.postSearchFilters) && t.middlewares.push(({ search: e, next: t }) => {
		let r = e;
		"preSearchFilters" in n.options && n.options.preSearchFilters && (r = n.options.preSearchFilters.reduce((e, t) => t(e), e));
		let i = t(r);
		return "postSearchFilters" in n.options && n.options.postSearchFilters ? n.options.postSearchFilters.reduce((e, t) => t(e), i) : i;
	}), n.options.validateSearch && t.middlewares.push(({ search: e, next: r }) => {
		let i = r(e);
		if (!t._includeValidateSearch) return i;
		try {
			return {
				...i,
				...validateSearch(n.options.validateSearch, i) ?? void 0
			};
		} catch {
			return i;
		}
	});
	t.middlewares.push(({ search: e }) => {
		let n = t.dest;
		return n.search ? n.search === !0 ? e : functionalUpdate$1(n.search, e) : {};
	});
	let n = (e, t, r) => {
		if (e >= r.length) return t;
		let i = r[e];
		return i({
			search: t,
			next: (t) => n(e + 1, t, r)
		});
	};
	return function(e, r, i) {
		return t.dest = r, t._includeValidateSearch = i, n(0, e, t.middlewares);
	};
}
function findGlobalNotFoundRouteId(e, t) {
	if (e !== "root") for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e];
		if (n.children) return n.id;
	}
	return rootRouteId;
}
function extractStrictParams(e, t, n, r) {
	let i = e.options.params?.parse ?? e.options.parseParams;
	if (i) if (e.options.skipRouteOnParseError) for (let e in t) e in n && (r[e] = n[e]);
	else {
		let e = i(r);
		Object.assign(r, e);
	}
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/hash-scroll.js
function handleHashScroll(e) {
	if (typeof document < "u" && document.querySelector) {
		let t = e.stores.location.state, n = t.state.__hashScrollIntoViewOptions ?? !0;
		if (n && t.hash !== "") {
			let e = document.getElementById(t.hash);
			e && e.scrollIntoView(n);
		}
	}
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
function CatchBoundary(e) {
	let t = e.errorComponent ?? ErrorComponent;
	return /* @__PURE__ */ jsx(CatchBoundaryImpl, {
		getResetKey: e.getResetKey,
		onCatch: e.onCatch,
		children: ({ error: n, reset: r }) => n ? React$1.createElement(t, {
			error: n,
			reset: r
		}) : e.children
	});
}
var CatchBoundaryImpl = class extends React$1.Component {
	constructor(...e) {
		super(...e), this.state = { error: null };
	}
	static getDerivedStateFromProps(e) {
		return { resetKey: e.getResetKey() };
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidUpdate(e, t) {
		t.error && t.resetKey !== this.state.resetKey && this.reset();
	}
	componentDidCatch(e, t) {
		this.props.onCatch && this.props.onCatch(e, t);
	}
	render() {
		return this.props.children({
			error: this.state.resetKey === this.props.getResetKey() ? this.state.error : null,
			reset: () => {
				this.reset();
			}
		});
	}
};
function ErrorComponent({ error: e }) {
	let [t, n] = React$1.useState(process.env.NODE_ENV !== "production");
	return /* @__PURE__ */ jsxs("div", {
		style: {
			padding: ".5rem",
			maxWidth: "100%"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: ".5rem"
				},
				children: [/* @__PURE__ */ jsx("strong", {
					style: { fontSize: "1rem" },
					children: "Something went wrong!"
				}), /* @__PURE__ */ jsx("button", {
					style: {
						appearance: "none",
						fontSize: ".6em",
						border: "1px solid currentColor",
						padding: ".1rem .2rem",
						fontWeight: "bold",
						borderRadius: ".25rem"
					},
					onClick: () => n((e) => !e),
					children: t ? "Hide Error" : "Show Error"
				})]
			}),
			/* @__PURE__ */ jsx("div", { style: { height: ".25rem" } }),
			t ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", {
				style: {
					fontSize: ".7em",
					border: "1px solid red",
					borderRadius: ".25rem",
					padding: ".3rem",
					color: "red",
					overflow: "auto"
				},
				children: e.message ? /* @__PURE__ */ jsx("code", { children: e.message }) : null
			}) }) : null
		]
	});
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/alien.js
var ReactiveFlags = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Mutable = 1] = "Mutable", e[e.Watching = 2] = "Watching", e[e.RecursedCheck = 4] = "RecursedCheck", e[e.Recursed = 8] = "Recursed", e[e.Dirty = 16] = "Dirty", e[e.Pending = 32] = "Pending", e))(ReactiveFlags || {});
/* @__NO_SIDE_EFFECTS__ */
function createReactiveSystem({ update: e, notify: t, unwatched: n }) {
	return {
		link: r,
		unlink: i,
		propagate: a,
		checkDirty: o,
		shallowPropagate: s
	};
	function r(e, t, n) {
		let r = t.depsTail;
		if (r !== void 0 && r.dep === e) return;
		let i = r === void 0 ? t.deps : r.nextDep;
		if (i !== void 0 && i.dep === e) {
			i.version = n, t.depsTail = i;
			return;
		}
		let a = e.subsTail;
		if (a !== void 0 && a.version === n && a.sub === t) return;
		let o = t.depsTail = e.subsTail = {
			version: n,
			dep: e,
			sub: t,
			prevDep: r,
			nextDep: i,
			prevSub: a,
			nextSub: void 0
		};
		i !== void 0 && (i.prevDep = o), r === void 0 ? t.deps = o : r.nextDep = o, a === void 0 ? e.subs = o : a.nextSub = o;
	}
	function i(e, t = e.sub) {
		let r = e.dep, i = e.prevDep, a = e.nextDep, o = e.nextSub, s = e.prevSub;
		return a === void 0 ? t.depsTail = i : a.prevDep = i, i === void 0 ? t.deps = a : i.nextDep = a, o === void 0 ? r.subsTail = s : o.prevSub = s, s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o, a;
	}
	function a(e) {
		let n = e.nextSub, r;
		top: do {
			let i = e.sub, a = i.flags;
			if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40, a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32, a & 2 && t(i), a & 1) {
				let t = i.subs;
				if (t !== void 0) {
					let i = (e = t).nextSub;
					i !== void 0 && (r = {
						value: n,
						prev: r
					}, n = i);
					continue;
				}
			}
			if ((e = n) !== void 0) {
				n = e.nextSub;
				continue;
			}
			for (; r !== void 0;) if (e = r.value, r = r.prev, e !== void 0) {
				n = e.nextSub;
				continue top;
			}
			break;
		} while (!0);
	}
	function o(t, n) {
		let r, i = 0, a = !1;
		top: do {
			let o = t.dep, c = o.flags;
			if (n.flags & 16) a = !0;
			else if ((c & 17) == 17) {
				if (e(o)) {
					let e = o.subs;
					e.nextSub !== void 0 && s(e), a = !0;
				}
			} else if ((c & 33) == 33) {
				(t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
					value: t,
					prev: r
				}), t = o.deps, n = o, ++i;
				continue;
			}
			if (!a) {
				let e = t.nextDep;
				if (e !== void 0) {
					t = e;
					continue;
				}
			}
			for (; i--;) {
				let i = n.subs, o = i.nextSub !== void 0;
				if (o ? (t = r.value, r = r.prev) : t = i, a) {
					if (e(n)) {
						o && s(i), n = t.sub;
						continue;
					}
					a = !1;
				} else n.flags &= -33;
				n = t.sub;
				let c = t.nextDep;
				if (c !== void 0) {
					t = c;
					continue top;
				}
			}
			return a;
		} while (!0);
	}
	function s(e) {
		do {
			let n = e.sub, r = n.flags;
			(r & 48) == 32 && (n.flags = r | 16, (r & 6) == 2 && t(n));
		} while ((e = e.nextSub) !== void 0);
	}
	function c(e, t) {
		let n = t.depsTail;
		for (; n !== void 0;) {
			if (n === e) return !0;
			n = n.prevDep;
		}
		return !1;
	}
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/atom.js
function toObserver(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var queuedEffects = [], cycle = 0, { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
	update(e) {
		return e._update();
	},
	notify(e) {
		queuedEffects[queuedEffectsLength++] = e, e.flags &= ~ReactiveFlags.Watching;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty, purgeDeps(e));
	}
}), notifyIndex = 0, queuedEffectsLength = 0, activeSub, batchDepth = 0;
function batch(e) {
	try {
		++batchDepth, e();
	} finally {
		--batchDepth || flush();
	}
}
function purgeDeps(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = unlink(n, e);
}
function flush() {
	if (!(batchDepth > 0)) {
		for (; notifyIndex < queuedEffectsLength;) {
			let e = queuedEffects[notifyIndex];
			queuedEffects[notifyIndex++] = void 0, e.notify();
		}
		notifyIndex = 0, queuedEffectsLength = 0;
	}
}
function createAtom(e, t) {
	let n = typeof e == "function", r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: n ? ReactiveFlags.None : ReactiveFlags.Mutable,
		get() {
			return activeSub !== void 0 && link(i, activeSub, cycle), i._snapshot;
		},
		subscribe(e) {
			let t = toObserver(e), n = { current: !1 }, r = effect(() => {
				i.get(), n.current ? t.next?.(i._snapshot) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = activeSub, o = t?.compare ?? Object.is;
			if (n) activeSub = i, ++cycle, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = ReactiveFlags.Mutable | ReactiveFlags.RecursedCheck);
			try {
				let t = i._snapshot, a = typeof e == "function" ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				activeSub = a, n && (i.flags &= ~ReactiveFlags.RecursedCheck), purgeDeps(i);
			}
		}
	};
	return n ? (i.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty, i.get = function() {
		let e = i.flags;
		if (e & ReactiveFlags.Dirty || e & ReactiveFlags.Pending && checkDirty(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && shallowPropagate(e);
			}
		} else e & ReactiveFlags.Pending && (i.flags = e & ~ReactiveFlags.Pending);
		return activeSub !== void 0 && link(i, activeSub, cycle), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (propagate(e), shallowPropagate(e), flush());
		}
	}, i;
}
function effect(e) {
	let t = () => {
		let t = activeSub;
		activeSub = n, ++cycle, n.depsTail = void 0, n.flags = ReactiveFlags.Watching | ReactiveFlags.RecursedCheck;
		try {
			return e();
		} finally {
			activeSub = t, n.flags &= ~ReactiveFlags.RecursedCheck, purgeDeps(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: ReactiveFlags.Watching | ReactiveFlags.RecursedCheck,
		notify() {
			let e = this.flags;
			e & ReactiveFlags.Dirty || e & ReactiveFlags.Pending && checkDirty(this.deps, this) ? t() : this.flags = ReactiveFlags.Watching;
		},
		stop() {
			this.flags = ReactiveFlags.None, this.depsTail = void 0, purgeDeps(this);
		}
	};
	return t(), n;
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/store.js
var Store = class {
	constructor(e) {
		this.atom = createAtom(e);
	}
	setState(e) {
		this.atom.set(e);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(e) {
		return this.atom.subscribe(toObserver(e));
	}
}, ReadonlyStore = class {
	constructor(e) {
		this.atom = createAtom(e);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(e) {
		return this.atom.subscribe(toObserver(e));
	}
};
function createStore(e) {
	return typeof e == "function" ? new ReadonlyStore(e) : new Store(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/not-found.js
function CatchNotFound(e) {
	let t = useRouter(), n = `not-found-${useStore(t.stores.location, (e) => e.pathname)}-${useStore(t.stores.status, (e) => e)}`;
	return /* @__PURE__ */ jsx(CatchBoundary, {
		getResetKey: () => n,
		onCatch: (t, n) => {
			if (isNotFound(t)) e.onCatch?.(t, n);
			else throw t;
		},
		errorComponent: ({ error: t }) => {
			if (isNotFound(t)) return e.fallback?.(t);
			throw t;
		},
		children: e.children
	});
}
function DefaultGlobalNotFound() {
	return /* @__PURE__ */ jsx("p", { children: "Not Found" });
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ScriptOnce.js
function ScriptOnce({ children: e }) {
	let t = useRouter();
	return null;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
function SafeFragment(e) {
	return /* @__PURE__ */ jsx(Fragment$1, { children: e.children });
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
function renderRouteNotFound(e, t, n) {
	return t.options.notFoundComponent ? /* @__PURE__ */ jsx(t.options.notFoundComponent, { ...n }) : e.options.defaultNotFoundComponent ? /* @__PURE__ */ jsx(e.options.defaultNotFoundComponent, { ...n }) : (process.env.NODE_ENV !== "production" && (t.options.notFoundComponent || console.warn(`Warning: A notFoundError was encountered on the route with ID "${t.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<p>Not Found</p>)`)), /* @__PURE__ */ jsx(DefaultGlobalNotFound, {}));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/scroll-restoration-script/client.js
function getScrollRestorationScriptForRouter(e) {
	return null;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
function ScrollRestoration() {
	let e = getScrollRestorationScriptForRouter(useRouter());
	return e ? /* @__PURE__ */ jsx(ScriptOnce, { children: e }) : null;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Match.js
var Match = React$1.memo(function({ matchId: e }) {
	let t = useRouter(), n = t.stores.activeMatchStoresById.get(e);
	if (!n) {
		if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find match for matchId "${e}". Please file an issue!`);
		invariant();
	}
	let r = useStore(t.stores.loadedAt, (e) => e), i = useStore(n, (e) => e);
	return /* @__PURE__ */ jsx(MatchView, {
		router: t,
		matchId: e,
		resetKey: r,
		matchState: React$1.useMemo(() => {
			let e = i.routeId, n = t.routesById[e].parentRoute?.id;
			return {
				routeId: e,
				ssr: i.ssr,
				_displayPending: i._displayPending,
				parentRouteId: n
			};
		}, [
			i._displayPending,
			i.routeId,
			i.ssr,
			t.routesById
		])
	});
});
function MatchView({ router: e, matchId: t, resetKey: n, matchState: r }) {
	let i = e.routesById[r.routeId], a = i.options.pendingComponent ?? e.options.defaultPendingComponent, o = a ? /* @__PURE__ */ jsx(a, {}) : null, s = i.options.errorComponent ?? e.options.defaultErrorComponent, c = i.options.onCatch ?? e.options.defaultOnCatch, l = i.isRoot ? i.options.notFoundComponent ?? e.options.notFoundRoute?.options.component : i.options.notFoundComponent, d = r.ssr === !1 || r.ssr === "data-only", p = (!i.isRoot || i.options.wrapInSuspense || d) && (i.options.wrapInSuspense ?? a ?? (i.options.errorComponent?.preload || d)) ? React$1.Suspense : SafeFragment, g = s ? CatchBoundary : SafeFragment, _ = l ? CatchNotFound : SafeFragment;
	return /* @__PURE__ */ jsxs(i.isRoot ? i.options.shellComponent ?? SafeFragment : SafeFragment, { children: [/* @__PURE__ */ jsx(matchContext.Provider, {
		value: t,
		children: /* @__PURE__ */ jsx(p, {
			fallback: o,
			children: /* @__PURE__ */ jsx(g, {
				getResetKey: () => n,
				errorComponent: s || ErrorComponent,
				onCatch: (e, n) => {
					if (isNotFound(e)) throw e.routeId ??= r.routeId, e;
					process.env.NODE_ENV !== "production" && console.warn(`Warning: Error in route match: ${t}`), c?.(e, n);
				},
				children: /* @__PURE__ */ jsx(_, {
					fallback: (e) => {
						if (e.routeId ??= r.routeId, !l || e.routeId && e.routeId !== r.routeId || !e.routeId && !i.isRoot) throw e;
						return React$1.createElement(l, e);
					},
					children: d || r._displayPending ? /* @__PURE__ */ jsx(ClientOnly, {
						fallback: o,
						children: /* @__PURE__ */ jsx(MatchInner, { matchId: t })
					}) : /* @__PURE__ */ jsx(MatchInner, { matchId: t })
				})
			})
		})
	}), r.parentRouteId === "__root__" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(OnRendered, { resetKey: n }), (e.options.scrollRestoration, null)] }) : null] });
}
function OnRendered({ resetKey: e }) {
	let t = useRouter(), n = React$1.useRef(void 0);
	return useLayoutEffect$1(() => {
		let e = t.latestLocation.href;
		(n.current === void 0 || n.current !== e) && (t.emit({
			type: "onRendered",
			...getLocationChangeInfo(t.stores.location.state, t.stores.resolvedLocation.state)
		}), n.current = e);
	}, [
		t.latestLocation.state.__TSR_key,
		e,
		t
	]), null;
}
var MatchInner = React$1.memo(function({ matchId: e }) {
	let t = useRouter(), n = t.stores.activeMatchStoresById.get(e);
	if (!n) {
		if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find match for matchId "${e}". Please file an issue!`);
		invariant();
	}
	let r = useStore(n, (e) => e), i = r.routeId, a = t.routesById[i], o = React$1.useMemo(() => {
		let e = (t.routesById[i].options.remountDeps ?? t.options.defaultRemountDeps)?.({
			routeId: i,
			loaderDeps: r.loaderDeps,
			params: r._strictParams,
			search: r._strictSearch
		});
		return e ? JSON.stringify(e) : void 0;
	}, [
		i,
		r.loaderDeps,
		r._strictParams,
		r._strictSearch,
		t.options.defaultRemountDeps,
		t.routesById
	]), s = React$1.useMemo(() => {
		let e = a.options.component ?? t.options.defaultComponent;
		return e ? /* @__PURE__ */ jsx(e, {}, o) : /* @__PURE__ */ jsx(Outlet, {});
	}, [
		o,
		a.options.component,
		t.options.defaultComponent
	]);
	if (r._displayPending) throw t.getMatch(r.id)?._nonReactive.displayPendingPromise;
	if (r._forcePending) throw t.getMatch(r.id)?._nonReactive.minPendingPromise;
	if (r.status === "pending") {
		let e = a.options.pendingMinMs ?? t.options.defaultPendingMinMs;
		if (e) {
			let n = t.getMatch(r.id);
			if (n && !n._nonReactive.minPendingPromise) {
				let t = createControlledPromise();
				n._nonReactive.minPendingPromise = t, setTimeout(() => {
					t.resolve(), n._nonReactive.minPendingPromise = void 0;
				}, e);
			}
		}
		throw t.getMatch(r.id)?._nonReactive.loadPromise;
	}
	if (r.status === "notFound") {
		if (!isNotFound(r.error)) {
			if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Expected a notFound error");
			invariant();
		}
		return renderRouteNotFound(t, a, r.error);
	}
	if (r.status === "redirected") {
		if (!isRedirect(r.error)) {
			if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Expected a redirect error");
			invariant();
		}
		throw t.getMatch(r.id)?._nonReactive.loadPromise;
	}
	if (r.status === "error") throw r.error;
	return s;
}), Outlet = React$1.memo(function() {
	let e = useRouter(), t = React$1.useContext(matchContext), n, r = !1, i;
	{
		let a = t ? e.stores.activeMatchStoresById.get(t) : void 0;
		[n, r] = useStore(a, (e) => [e?.routeId, e?.globalNotFound ?? !1]), i = useStore(e.stores.matchesId, (e) => e[e.findIndex((e) => e === t) + 1]);
	}
	let a = n ? e.routesById[n] : void 0, o = e.options.defaultPendingComponent ? /* @__PURE__ */ jsx(e.options.defaultPendingComponent, {}) : null;
	if (r) {
		if (!a) {
			if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Could not resolve route for Outlet render");
			invariant();
		}
		return renderRouteNotFound(e, a, void 0);
	}
	if (!i) return null;
	let s = /* @__PURE__ */ jsx(Match, { matchId: i });
	return n === "__root__" ? /* @__PURE__ */ jsx(React$1.Suspense, {
		fallback: o,
		children: s
	}) : s;
});
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Transitioner.js
function Transitioner() {
	let e = useRouter(), t = React$1.useRef({
		router: e,
		mounted: !1
	}), [n, r] = React$1.useState(!1), i = useStore(e.stores.isLoading, (e) => e), a = useStore(e.stores.hasPendingMatches, (e) => e), o = usePrevious(i), s = i || n || a, c = usePrevious(s), l = i || a, d = usePrevious(l);
	return e.startTransition = (e) => {
		r(!0), React$1.startTransition(() => {
			e(), r(!1);
		});
	}, React$1.useEffect(() => {
		let t = e.history.subscribe(e.load), n = e.buildLocation({
			to: e.latestLocation.pathname,
			search: !0,
			params: !0,
			hash: !0,
			state: !0,
			_includeValidateSearch: !0
		});
		return trimPathRight(e.latestLocation.publicHref) !== trimPathRight(n.publicHref) && e.commitLocation({
			...n,
			replace: !0
		}), () => {
			t();
		};
	}, [e, e.history]), useLayoutEffect$1(() => {
		typeof window < "u" && e.ssr || t.current.router === e && t.current.mounted || (t.current = {
			router: e,
			mounted: !0
		}, (async () => {
			try {
				await e.load();
			} catch (e) {
				console.error(e);
			}
		})());
	}, [e]), useLayoutEffect$1(() => {
		o && !i && e.emit({
			type: "onLoad",
			...getLocationChangeInfo(e.stores.location.state, e.stores.resolvedLocation.state)
		});
	}, [
		o,
		e,
		i
	]), useLayoutEffect$1(() => {
		d && !l && e.emit({
			type: "onBeforeRouteMount",
			...getLocationChangeInfo(e.stores.location.state, e.stores.resolvedLocation.state)
		});
	}, [
		l,
		d,
		e
	]), useLayoutEffect$1(() => {
		if (c && !s) {
			let t = getLocationChangeInfo(e.stores.location.state, e.stores.resolvedLocation.state);
			e.emit({
				type: "onResolved",
				...t
			}), batch(() => {
				e.stores.status.setState(() => "idle"), e.stores.resolvedLocation.setState(() => e.stores.location.state);
			}), t.hrefChanged && handleHashScroll(e);
		}
	}, [
		s,
		c,
		e
	]), null;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Matches.js
function Matches() {
	let e = useRouter(), t = e.routesById.__root__.options.pendingComponent ?? e.options.defaultPendingComponent, n = t ? /* @__PURE__ */ jsx(t, {}) : null, r = /* @__PURE__ */ jsxs(typeof document < "u" && e.ssr ? SafeFragment : React$1.Suspense, {
		fallback: n,
		children: [/* @__PURE__ */ jsx(Transitioner, {}), /* @__PURE__ */ jsx(MatchesInner, {})]
	});
	return e.options.InnerWrap ? /* @__PURE__ */ jsx(e.options.InnerWrap, { children: r }) : r;
}
function MatchesInner() {
	let e = useRouter(), t = !1, n = useStore(e.stores.firstMatchId, (e) => e), r = useStore(e.stores.loadedAt, (e) => e), i = n ? /* @__PURE__ */ jsx(Match, { matchId: n }) : null;
	return /* @__PURE__ */ jsx(matchContext.Provider, {
		value: n,
		children: e.options.disableGlobalCatchBoundary ? i : /* @__PURE__ */ jsx(CatchBoundary, {
			getResetKey: () => r,
			errorComponent: ErrorComponent,
			onCatch: process.env.NODE_ENV === "production" ? void 0 : (e) => {
				console.warn("Warning: The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!"), console.warn(`Warning: ${e.message || e.toString()}`);
			},
			children: i
		})
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (e) => ({
	createMutableStore: createStore,
	createReadonlyStore: createStore,
	batch
}), createRouter = (e) => new Router(e), Router = class extends RouterCore {
	constructor(e) {
		super(e, getStoreFactory);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
function RouterContextProvider({ router: e, children: t, ...n }) {
	Object.keys(n).length > 0 && e.update({
		...e.options,
		...n,
		context: {
			...e.options.context,
			...n.context
		}
	});
	let r = /* @__PURE__ */ jsx(routerContext.Provider, {
		value: e,
		children: t
	});
	return e.options.Wrap ? /* @__PURE__ */ jsx(e.options.Wrap, { children: r }) : r;
}
function RouterProvider({ router: e, ...t }) {
	return /* @__PURE__ */ jsx(RouterContextProvider, {
		router: e,
		...t,
		children: /* @__PURE__ */ jsx(Matches, {})
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLocation.js
function useLocation(e) {
	let t = useRouter(), n = useRef(void 0);
	return useStore(t.stores.location, (r) => {
		let i = e?.select ? e.select(r) : r;
		if (e?.structuralSharing ?? t.options.defaultStructuralSharing) {
			let e = replaceEqualDeep(n.current, i);
			return n.current = e, e;
		}
		return i;
	});
}
//#endregion
//#region src/assets/icons.tsx
var CheckIcon = (e) => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	...e,
	children: /* @__PURE__ */ jsx("path", {
		d: "m5 10 3 3 7-7",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), CopyIcon = (e) => /* @__PURE__ */ jsxs("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	...e,
	children: [/* @__PURE__ */ jsx("rect", {
		x: "6",
		y: "6",
		width: "9",
		height: "12",
		rx: "2"
	}), /* @__PURE__ */ jsx("path", { d: ["M13 4V3a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 0 2 3.5", "v9A2.5 2.5 0 0 0 4.5 15H6"].join(" ") })]
});
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				addConsumeAwareSignal(e, () => t.signal, () => n = !0);
			}, d = ensureQueryFn(t.options, t.fetchOptions), p = async (e, r, i) => {
				if (n) return Promise.reject();
				if (r == null && e.pages.length) return Promise.resolve(e);
				let a = await d((() => {
					let e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: r,
						direction: i ? "backward" : "forward",
						meta: t.options.meta
					};
					return l(e), e;
				})()), { maxPages: o } = t.options, s = i ? addToStart : addToEnd;
				return {
					pages: s(e.pages, a, o),
					pageParams: s(e.pageParams, r, o)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? getPreviousPageParam : getNextPageParam, n = {
					pages: a,
					pageParams: o
				};
				s = await p(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] ?? r.initialPageParam : getNextPageParam(r, s);
					if (c > 0 && e == null) break;
					s = await p(s, e), c++;
				} while (c < t);
			}
			return s;
		};
		t.options.persister ? t.fetchFn = () => t.options.persister?.(l, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : t.fetchFn = l;
	} };
}
function getNextPageParam(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function getPreviousPageParam(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutationCache.js
var MutationCache = class extends Subscribable {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	#e;
	#t;
	#n;
	build(e, t, n) {
		let r = new Mutation({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = scopeFor(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = scopeFor(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) if (n.length > 1) {
					let t = n.indexOf(e);
					t !== -1 && n.splice(t, 1);
				} else n[0] === e && this.#t.delete(t);
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = scopeFor(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		} else return !0;
	}
	runNext(e) {
		let t = scopeFor(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		notifyManager.batch(() => {
			this.#e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#e.clear(), this.#t.clear();
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => matchMutation(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => matchMutation(e, t));
	}
	notify(e) {
		notifyManager.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return notifyManager.batch(() => Promise.all(e.map((e) => e.continue().catch(noop))));
	}
};
function scopeFor(e) {
	return e.options.scope?.id;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/queryCache.js
var QueryCache = class extends Subscribable {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	#e;
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? hashQueryKeyByOptions(r, t), a = this.get(i);
		return a || (a = new Query({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		let t = this.#e.get(e.queryHash);
		t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		notifyManager.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => matchQuery(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => matchQuery(e, t)) : t;
	}
	notify(e) {
		notifyManager.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		notifyManager.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		notifyManager.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, QueryClient = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new QueryCache(), this.#t = e.mutationCache || new MutationCache(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = focusManager.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = onlineManager.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(resolveStaleTime(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = functionalUpdate(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return notifyManager.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		notifyManager.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return notifyManager.batch(() => (n.findAll(e).forEach((e) => {
			e.reset();
		}), this.refetchQueries({
			type: "active",
			...e
		}, t)));
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = notifyManager.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(noop).catch(noop);
	}
	invalidateQueries(e, t = {}) {
		return notifyManager.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = notifyManager.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(noop)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(noop);
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(resolveStaleTime(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(noop).catch(noop);
	}
	fetchInfiniteQuery(e) {
		return e.behavior = infiniteQueryBehavior(e.pages), this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(noop).catch(noop);
	}
	ensureInfiniteQueryData(e) {
		return e.behavior = infiniteQueryBehavior(e.pages), this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return onlineManager.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(hashKey(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			partialMatchKey(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(hashKey(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			partialMatchKey(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= hashQueryKeyByOptions(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === skipToken && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, DEBUG_COPY = {
	openLabel: "Open debug information drawer",
	modalTitle: "Debug Information",
	copyLabel: "Copy",
	resetLabel: "Reset payment form",
	overrideOpenLabel: "Open override payload drawer",
	overrideTitle: "Override Payload",
	overrideDescription: "Provide JSON to merge into your next payment request.",
	overrideJsonLabel: "JSON",
	overrideJsonAria: "Override payload JSON",
	overrideInvalidJson: "Invalid JSON payload",
	overrideLocked: "Editing is disabled while a payment is processing.",
	saveLabel: "Save"
}, OVERRIDE_LOCKED_KEY = "error.override_payload_locked";
function DebugView() {
	let { debug: e } = useContext(CashierContext), { registerOverlay: t } = useNavigationShell();
	return useEffect(() => {
		e || t(null);
	}, [e, t]), e ? /* @__PURE__ */ jsx(DebugViewContent, {}) : null;
}
function DebugViewContent() {
	let { merchantId: e, userId: t, apiUrl: n, method: r, currency: i } = useContext(CashierContext), { pathname: a } = useLocation(), { registerOverlay: o } = useNavigationShell(), [s, c] = useState(!1), [l, d] = useState(null), p = useRef(null), g = useMemo(() => [
		{
			label: "Merchant ID",
			value: e
		},
		{
			label: "User ID",
			value: t
		},
		{
			label: "API URL",
			value: n
		},
		{
			label: "Internal Route",
			value: a
		},
		{
			label: "Method",
			value: r
		},
		{
			label: "Currency",
			value: i
		}
	], [
		n,
		i,
		e,
		r,
		a,
		t
	]), _ = a.startsWith("/pt/"), y = DEBUG_COPY.openLabel, x = DEBUG_COPY.modalTitle, C = DEBUG_COPY.copyLabel, ee = useCallback((e) => {
		let t = e.value?.toString().trim();
		if (!t || typeof window > "u") return;
		let n = window.navigator.clipboard;
		n && n.writeText(t).then(() => {
			d(e.label), p.current && window.clearTimeout(p.current), p.current = window.setTimeout(() => {
				d(null);
			}, 1600);
		}).catch(() => {
			d(null);
		});
	}, []), te = useCallback(() => {
		c(!0);
	}, []), ne = useCallback(() => {
		c(!1), d(null);
	}, []), T = useMemo(() => {
		let e = [];
		return e.push(/* @__PURE__ */ jsx(ResetFormButton, {}, "cashier-reset-form")), _ && e.push(/* @__PURE__ */ jsx(OverridePayloadToggle, {}, "cashier-override-payload")), e.push(/* @__PURE__ */ jsx(Button, {
			"aria-label": y,
			variant: "neutral",
			size: "lg",
			onClick: te,
			iconOnly: !0,
			label: y,
			leadingIcon: /* @__PURE__ */ jsx(DebugIcon, {})
		}, "cashier-debug-tools")), /* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-2",
			children: e
		});
	}, [
		te,
		_,
		y
	]);
	return useEffect(() => (o(T), () => {
		o(null);
	}), [T, o]), useEffect(() => () => {
		p.current && window.clearTimeout(p.current);
	}, []), /* @__PURE__ */ jsx(CashierDrawer, {
		isOpen: s,
		onClose: ne,
		title: x,
		children: /* @__PURE__ */ jsx("div", {
			className: "px-5 pb-5 pt-2",
			children: g.map((e) => {
				let t = l === e.label;
				return /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2 py-1",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-[var(--pc-color-text)]",
							children: e.label
						}),
						/* @__PURE__ */ jsx("span", {
							className: "break-all text-[var(--pc-color-text-muted)]",
							children: e.value ?? "—"
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: [
								"inline-flex h-7 w-7 items-center justify-center rounded-[var(--pc-radius-md)] text-[var(--pc-color-text-muted)]",
								"transition hover:text-[var(--pc-color-text)] hover:[background:var(--pc-color-surface-weaker)]",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-accent)]"
							].join(" "),
							onClick: () => {
								ee(e);
							},
							"aria-label": `${C} ${e.label}`,
							children: jsx(t ? CheckIcon : CopyIcon, {})
						})
					]
				}, e.label);
			})
		})
	});
}
function ResetFormButton() {
	let { reset: e, hasResetHandler: t } = usePaymentFormReset();
	return t ? /* @__PURE__ */ jsx(Button, {
		"aria-label": DEBUG_COPY.resetLabel,
		variant: "neutral",
		size: "lg",
		onClick: () => {
			e();
		},
		iconOnly: !0,
		label: DEBUG_COPY.resetLabel,
		leadingIcon: /* @__PURE__ */ jsx(ResetIcon, {})
	}) : null;
}
function OverridePayloadToggle() {
	let { overridePayload: e, setOverridePayload: t, isLocked: n } = useOverridePayload(), { translateKey: r } = useI18n(), [i, a] = useState(!1), [o, s] = useState(e), [c, l] = useState(null), d = useCallback((t) => {
		s(t ?? e), l(null);
	}, [e]), p = o.trim().length === 0 ? "" : o, g = p !== (e.trim().length === 0 ? "" : e), _ = r(OVERRIDE_LOCKED_KEY), y = _ === OVERRIDE_LOCKED_KEY ? DEBUG_COPY.overrideLocked : _, x = useCallback(() => {
		d(), a(!0);
	}, [d]), C = useCallback(() => {
		a(!1), d();
	}, [d]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Button, {
		"aria-label": DEBUG_COPY.overrideOpenLabel,
		variant: "neutral",
		size: "lg",
		disabled: n,
		onClick: x,
		iconOnly: !0,
		label: DEBUG_COPY.overrideOpenLabel,
		leadingIcon: /* @__PURE__ */ jsx(OverwriteIcon, {})
	}), /* @__PURE__ */ jsx(CashierDrawer, {
		isOpen: i,
		onClose: C,
		title: DEBUG_COPY.overrideTitle,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 px-5 pb-5 pt-2",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-[var(--pc-color-text-muted)]",
					children: DEBUG_COPY.overrideDescription
				}),
				/* @__PURE__ */ jsx(Input, {
					label: DEBUG_COPY.overrideJsonLabel,
					"aria-label": DEBUG_COPY.overrideJsonAria,
					placeholder: overridePayloadSampleJson,
					type: "textarea",
					value: o,
					onChange: (e) => {
						c && l(null), s(e.target.value);
					},
					spellCheck: !1,
					disabled: n,
					error: c ?? void 0
				}),
				n && /* @__PURE__ */ jsx("p", {
					className: "text-xs text-[var(--pc-color-text-muted)]",
					children: y
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-end",
					children: /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "secondary",
						onClick: () => {
							if (!n) {
								if (p.length > 0) try {
									JSON.parse(p);
								} catch {
									l(DEBUG_COPY.overrideInvalidJson);
									return;
								}
								l(null), t(p), a(!1), d(p);
							}
						},
						disabled: n || !g || !!c,
						label: DEBUG_COPY.saveLabel
					})
				})
			]
		})
	})] });
}
//#endregion
//#region src/routes/__root.tsx
var Route$6 = createRootRoute({ component: RootComponent });
function RootComponent() {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(DebugView, {})] });
}
//#endregion
//#region src/routes/index.tsx
var Route$5 = createFileRoute("/")({ beforeLoad: ({ context: e }) => {
	throw redirect({
		to: resolveInitialRoute(e),
		replace: !0
	});
} }), u = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, F = (e, t) => {
	var n;
	return t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft;
}, H = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, st = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function X(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function nt(e, t, n, r) {
	let i = t.formatToParts(e);
	n && i.unshift({
		type: "prefix",
		value: n
	}), r && i.push({
		type: "suffix",
		value: r
	});
	let a = [], o = [], s = [], c = [], l = {}, d = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, p = "", g = !1, _ = !1;
	for (let e of i) {
		p += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (g = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (_ = !0, s.push({
			type: t,
			value: e.value,
			key: d(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: d(t),
			pos: -1 - l[t]
		}))) : (g || _ ? c : a).push({
			type: t,
			value: e.value,
			key: d(t)
		});
	}
	let y = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		y.unshift(t.type === "integer" ? {
			...t,
			key: d(t.type),
			pos: l[t.type]
		} : {
			...t,
			key: d(t.type)
		});
	}
	return {
		pre: a,
		integer: y,
		fraction: s,
		post: c,
		valueAsString: p,
		value: typeof e == "string" ? parseFloat(e) : e
	};
}
var I = String.raw, V = String.raw, O = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), z = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), A = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, $ = "--_number-flow-d-opacity", U = "--_number-flow-d-width", S = "--_number-flow-dx", j = "--_number-flow-d", Y = (() => {
	try {
		return CSS.registerProperty({
			name: $,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: S,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: U,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: j,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), P = "var(--number-flow-char-height, 1em)", f = "var(--number-flow-mask-height, 0.25em)", k = `calc(${f} / 2)`, E = "var(--number-flow-mask-width, 0.5em)", m = `calc(${E} / var(--scale-x))`, w$3 = "#000 0, transparent 71%", M = V`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${P} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${U}) / var(--width));transform:translateX(var(${S})) scaleX(var(--scale-x));margin:0 calc(-1 * ${E});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${m},#000 calc(100% - ${m}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${f},#000 calc(100% - ${f}),transparent 100% ),radial-gradient(at bottom right,${w$3}),radial-gradient(at bottom left,${w$3}),radial-gradient(at top left,${w$3}),radial-gradient(at top right,${w$3});-webkit-mask-size:100% calc(100% - ${f} * 2),calc(100% - ${m} * 2) 100%,${m} ${f},${m} ${f},${m} ${f},${m} ${f};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${k} ${E};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${S})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${j})}.digit__num,.number .section::after{padding:${k} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${$}))}`, G = HTMLElement, K = V`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${P} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${k} 0}.symbol{white-space:pre}`, Z = (e) => `<span class="${e.type === "integer" || e.type === "fraction" ? "digit" : "symbol"}" part="${e.type === "integer" || e.type === "fraction" ? `digit ${e.type}-digit` : `symbol ${e.type}`}">${e.value}</span>`, v$3 = (e, t) => `<span part="${t}">${e.reduce((e, t) => e + Z(t), "")}</span>`, at = (e) => I`<template shadowroot="open" shadowrootmode="open"
			><style>
				${K}</style
			><span role="img" aria-label="${e.valueAsString}"
				>${v$3(e.pre, "left")}<span part="number" class="number"
					>${v$3(e.integer, "integer")}${v$3(e.fraction, "fraction")}</span
				>${v$3(e.post, "right")}</span
			></template
		><span
			style="font-kerning: none; display: inline-block; line-height: ${P} !important; padding: ${f} 0;"
			>${e.valueAsString}</span
		>`, q = z && O && Y, b, J = class extends G {
	constructor() {
		super(), this.created = !1, this.batched = !1;
		let { animated: e, ...t } = this.constructor.defaultProps;
		this._animated = this.computedAnimated = e, Object.assign(this, t);
	}
	get animated() {
		return this._animated;
	}
	set animated(e) {
		var t;
		this.animated !== e && (this._animated = e, (t = this.shadowRoot) == null || t.getAnimations().forEach((e) => e.finish()));
	}
	set data(e) {
		var t;
		if (e == null) return;
		let { pre: n, integer: r, fraction: i, post: a, value: o } = e;
		if (this.created) {
			let s = this._data;
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = q && this._animated && (!this.respectMotionPreference || !(A != null && A.matches)) && H(this), (t = this.plugins) == null || t.forEach((t) => {
				var n;
				return t.onUpdate?.call(t, e, s, this);
			}), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) b || (b = new CSSStyleSheet(), b.replaceSync(M)), this.shadowRoot.adoptedStyleSheets = [b];
			else {
				let e = document.createElement("style");
				e.textContent = M, this.shadowRoot.appendChild(e);
			}
			this._pre = new N(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new Q(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new N(this, a, {
				justify: "left",
				part: "right"
			}), this.shadowRoot.appendChild(this._post.el), this.created = !0;
		}
		try {
			this._internals.ariaLabel = e.valueAsString;
		} catch {}
	}
	willUpdate() {
		this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
	}
	didUpdate() {
		if (!this.computedAnimated) return;
		this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
		let e = new AbortController();
		Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
			e.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
		}), this._abortAnimationsFinish = e;
	}
};
J.defaultProps = {
	transformTiming: {
		duration: 900,
		easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
	},
	spinTiming: void 0,
	opacityTiming: {
		duration: 450,
		easing: "ease-out"
	},
	animated: !0,
	trend: (e, t) => Math.sign(t - e),
	respectMotionPreference: !0,
	plugins: void 0,
	digits: void 0
};
var Q = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new L(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new L(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = u("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = u("span", {
			...i,
			part: "number",
			className: `number ${r ?? ""}`
		}, [this._inner]);
	}
	willUpdate() {
		this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
	}
	update({ integer: e, fraction: t }) {
		this._integer.update(e), this._fraction.update(t);
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this._integer.didUpdate(), this._fraction.didUpdate();
		let t = this._prevLeft - e.left, n = this.el.offsetWidth, r = this._prevWidth - n;
		this.el.style.setProperty("--width", String(n)), this.el.animate({
			[S]: [`${t}px`, "0px"],
			[U]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, W = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = u("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new D(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new tt(this, e.type, e.value, {
			...n,
			onRemove: this.onCharRemove(e.key)
		});
		return this.children.set(e.key, r), r;
	}
	unpop(e) {
		e.el.removeAttribute("inert"), e.el.style.top = "", e.el.style[this.justify] = "";
	}
	pop(e) {
		e.forEach((e) => {
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${F(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (X(e, (e) => {
			let r;
			this.children.has(e.key) ? (r = this.children.get(e.key), n.set(e, r), this.unpop(r), r.present = !0) : (r = this.addChar(e, {
				startDigitsAtZero: !0,
				animateIn: !0
			}), t.set(e, r)), this.el[i](r.el);
		}, { reverse: r }), this.flow.computedAnimated) {
			let e = this.el.getBoundingClientRect();
			t.forEach((t) => {
				t.willUpdate(e);
			});
		}
		t.forEach((e, t) => {
			e.update(t.value);
		}), n.forEach((e, t) => {
			e.update(t.value);
		});
	}
	willUpdate() {
		let e = this.el.getBoundingClientRect();
		this._prevOffset = e[this.justify], this.children.forEach((t) => t.willUpdate(e));
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this.children.forEach((t) => t.didUpdate(e));
		let t = e[this.justify], n = this._prevOffset - t;
		n && this.children.size && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, L = class extends W {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof D && e.update(0);
		}), this.pop(t);
	}
}, N = class extends W {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, R = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [$]: [-.9999, 0] }, {
			...this.flow.opacityTiming,
			composite: "accumulate"
		}), this._onRemove = n;
	}
	get present() {
		return this._present;
	}
	set present(e) {
		if (this._present !== e) {
			if (this._present = e, e ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
				e || this._remove();
				return;
			}
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [$]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, B = class extends R {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, D = class extends B {
	constructor(e, t, n, r, i) {
		var a, o;
		let s = (e.flow.digits?.[r]?.max ?? 9) + 1, c = Array.from({ length: s }).map((e, t) => {
			let r = u("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), l = u("span", {
			part: `digit ${t}-digit`,
			className: "digit"
		}, c);
		l.style.setProperty("--current", String(n)), l.style.setProperty("--length", String(s)), super(e, n, l, i), this.pos = r, this._onAnimationsFinish = () => {
			this.el.classList.remove("is-spinning");
		}, this._numbers = c, this.length = s;
	}
	willUpdate(e) {
		let t = this.el.getBoundingClientRect();
		this._prevValue = this.value;
		let n = t[this.section.justify] - e[this.section.justify], r = t.width / 2;
		this._prevCenter = this.section.justify === "left" ? n + r : n - r;
	}
	update(e) {
		this.el.style.setProperty("--current", String(e)), this._numbers.forEach((t, n) => n === e ? t.removeAttribute("inert") : t.setAttribute("inert", "")), this.value = e;
	}
	didUpdate(e) {
		let t = this.el.getBoundingClientRect(), n = t[this.section.justify] - e[this.section.justify], r = t.width / 2, i = this.section.justify === "left" ? n + r : n - r, a = this._prevCenter - i;
		a && this.el.animate({ transform: [`translateX(${a}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
		let o = this.getDelta();
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [j]: [-o, 0] }, {
			...this.flow.spinTiming ?? this.flow.transformTiming,
			composite: "accumulate"
		}), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
	}
	getDelta() {
		var e;
		if (this.flow.plugins) for (let e of this.flow.plugins) {
			let t = e.getDelta?.call(e, this.value, this._prevValue, this);
			if (t != null) return t;
		}
		let t = this.value - this._prevValue, n = this.flow.computedTrend || Math.sign(t);
		return n < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : n > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t;
	}
}, tt = class extends B {
	constructor(e, t, n, r) {
		let i = u("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, u("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new R(this.flow, i, { onRemove: this._onChildRemove(n) }));
	}
	willUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect();
		this._prevOffset = t[this.section.justify] - e[this.section.justify];
	}
	update(e) {
		if (this.value !== e) {
			let t = this._children.get(this.value);
			t && (t.present = !1);
			let n = this._children.get(e);
			if (n) n.present = !0;
			else {
				let t = u("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new R(this.flow, t, {
					animateIn: !0,
					onRemove: this._onChildRemove(e)
				}));
			}
		}
		this.value = e;
	}
	didUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect()[this.section.justify] - e[this.section.justify], n = this._prevOffset - t;
		n && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, isReact19 = parseInt(React$1.version.match(/^(\d+)\./)?.[1]) >= 19, OBSERVED_ATTRIBUTES = ["data", "digits"], NumberFlowElement = class extends J {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
NumberFlowElement.observedAttributes = isReact19 ? [] : OBSERVED_ATTRIBUTES, st("number-flow-react", NumberFlowElement);
var formatters = {}, serialize = isReact19 ? (e) => e : JSON.stringify;
function splitProps(e) {
	let { transformTiming: t, spinTiming: n, opacityTiming: r, animated: i, respectMotionPreference: a, trend: o, plugins: s, ...c } = e;
	return [{
		transformTiming: t,
		spinTiming: n,
		opacityTiming: r,
		animated: i,
		respectMotionPreference: a,
		trend: o,
		plugins: s
	}, c];
}
var NumberFlowImpl = class extends React$1.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = splitProps(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? NumberFlowElement.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), isReact19 && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
	}
	getSnapshotBeforeUpdate(e) {
		if (this.updateProperties(e), e.data !== this.props.data) {
			if (this.props.group) return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
			if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate();
		}
		return null;
	}
	componentDidUpdate(e, t, n) {
		n?.();
	}
	handleRef(e) {
		this.props.innerRef && (this.props.innerRef.current = e), this.el = e;
	}
	render() {
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...d }] = splitProps(this.props);
		return /* @__PURE__ */ React$1.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...d,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: serialize(s),
			data: serialize(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, NumberFlow = /* @__PURE__ */ React$1.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	React$1.useImperativeHandle(o, () => s.current, []);
	let s = React$1.useRef(), c = React$1.useContext(NumberFlowGroupContext);
	c?.useRegister(s);
	let l = React$1.useMemo(() => t ? JSON.stringify(t) : "", [t]), d = React$1.useMemo(() => n ? JSON.stringify(n) : "", [n]), p = React$1.useMemo(() => nt(e, formatters[`${l}:${d}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		d,
		r,
		i
	]);
	return /* @__PURE__ */ React$1.createElement(NumberFlowImpl, {
		...a,
		group: c,
		data: p,
		innerRef: s
	});
}), NumberFlowGroupContext = /* @__PURE__ */ React$1.createContext(void 0), buildDisplayValue = (e) => e.length > 0 ? e : "";
function isRefObject(e) {
	return typeof e == "object" && !!e;
}
var resolveTranslatedLabel = (e, t, n) => e && e !== t ? e : n, AMOUNT_FONT_SIZE_SCALE = .83, scaleAmountFontValue = (e) => Number((e * AMOUNT_FONT_SIZE_SCALE).toFixed(3)), scaleAmountFontBounds = (e) => ({
	min: scaleAmountFontValue(e.min),
	max: scaleAmountFontValue(e.max)
}), DEFAULT_FONT_GROWTH_FACTOR = scaleAmountFontValue(.8), AMOUNT_FONT_BOUNDS = {
	base: scaleAmountFontBounds({
		min: 1.3,
		max: 4.1
	}),
	sm: scaleAmountFontBounds({
		min: 1.45,
		max: 4.9
	}),
	md: scaleAmountFontBounds({
		min: 1.75,
		max: 5.8
	}),
	lg: scaleAmountFontBounds({
		min: 1.75,
		max: 6.4
	}),
	xl: scaleAmountFontBounds({
		min: 1.9,
		max: 7.2
	})
}, DEFAULT_FONT_BOUNDS = {
	min: AMOUNT_FONT_BOUNDS.base.min,
	max: AMOUNT_FONT_BOUNDS.base.max
}, DEFAULT_MAX_FONT_SIZE_REM = AMOUNT_FONT_BOUNDS.base.max, DEFAULT_AMOUNT_LINE_HEIGHT = .75, COMPACT_CONTAINER_MAX_HEIGHT_PX = 500, COMPACT_FONT_BOUNDS = scaleAmountFontBounds({
	min: 1.25,
	max: 3.5
}), COMPACT_FONT_GROWTH_FACTOR = scaleAmountFontValue(.7), CONTAINER_QUERY_BREAKPOINTS = {
	sm: 384,
	md: 448,
	lg: 512,
	xl: 576
}, MIN_INPUT_WIDTH = "min(6ch, 100%)", MAX_FONT_SCALE_BASE = scaleAmountFontValue(60), HORIZONTAL_PADDING_PX = 24, NUMBER_FLOW_EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)", FONT_SIZE_EPSILON = .01, AMOUNT_TEXT_VERTICAL_OFFSET = "0em", NUMBER_FLOW_TIMING = {
	transformTiming: {
		duration: 450,
		easing: NUMBER_FLOW_EASING
	},
	spinTiming: {
		duration: 480,
		easing: NUMBER_FLOW_EASING
	},
	opacityTiming: {
		duration: 300,
		easing: NUMBER_FLOW_EASING
	}
}, createFlowDisplayState = (e) => ({
	renderedValue: e,
	pendingValue: null
}), isSameFlowDisplayState = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, flowDisplayReducer = (e, t) => {
	let { numericValue: n, defer: r, preserveRendered: i } = t, a = e;
	return a = i ? {
		renderedValue: e.renderedValue,
		pendingValue: null
	} : n === null ? {
		renderedValue: null,
		pendingValue: null
	} : r ? {
		renderedValue: e.renderedValue,
		pendingValue: n
	} : {
		renderedValue: n,
		pendingValue: null
	}, isSameFlowDisplayState(e, a) ? e : a;
}, normalizeFontBounds = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, getSizingContainerNode = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, getContainerMetrics = (e) => {
	if (!e) return {
		width: 0,
		height: 0
	};
	let t = getSizingContainerNode(e);
	return t ? {
		width: t.clientWidth,
		height: t.clientHeight
	} : {
		width: e.clientWidth,
		height: e.clientHeight
	};
}, getResizeObserverTarget = (e) => {
	if (!e) return null;
	let t = getSizingContainerNode(e);
	return t && t !== e ? t : e.parentElement;
}, resolveAmountSizing = (e) => {
	if (!e) return {
		bounds: DEFAULT_FONT_BOUNDS,
		growthFactor: DEFAULT_FONT_GROWTH_FACTOR
	};
	let t = getContainerMetrics(e), n = t.width || e.clientWidth, r = t.height || e.clientHeight, i = AMOUNT_FONT_BOUNDS.base;
	n >= CONTAINER_QUERY_BREAKPOINTS.xl ? i = AMOUNT_FONT_BOUNDS.xl : n >= CONTAINER_QUERY_BREAKPOINTS.lg ? i = AMOUNT_FONT_BOUNDS.lg : n >= CONTAINER_QUERY_BREAKPOINTS.md ? i = AMOUNT_FONT_BOUNDS.md : n >= CONTAINER_QUERY_BREAKPOINTS.sm && (i = AMOUNT_FONT_BOUNDS.sm);
	let a = DEFAULT_FONT_GROWTH_FACTOR;
	return r > 0 && r <= COMPACT_CONTAINER_MAX_HEIGHT_PX && (i = COMPACT_FONT_BOUNDS, a = COMPACT_FONT_GROWTH_FACTOR), {
		bounds: normalizeFontBounds(i),
		growthFactor: Math.max(0, a)
	};
}, calculateDesiredFontSize = (e, t, n = DEFAULT_FONT_GROWTH_FACTOR) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / DEFAULT_MAX_FONT_SIZE_REM, c = o * n * s, l = MAX_FONT_SCALE_BASE / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function Amount({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: s, formatOptions: c, clearOnFocus: l = !1, errorMessage: d, invalid: p = !1, limits: g, reserveErrorSpace: _ = !1, showMeta: y = !0, showDivider: x = !0, reserveEmptyLimitMetaSpace: C = !0, align: ee = "center", animateValueChange: te = !1, disabled: ne = !1, onFocusChange: T }) {
	let re = useCashierDomHooks(), { translateKey: ie } = useI18n(), [ae, oe] = useState(!1), se = useRef(null), ce = useRef(null), le = useRef(null), ue = useRef(!1), de = useRef(!1), fe = useRef(e), pe = isRefObject(a) ? a : null, me = useCallback((e) => {
		se.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	useImperativeHandle(pe, () => se.current), useEffect(() => {
		ue.current && e.length !== 0 && (de.current = !0);
	}, [e]);
	let he = useCallback(() => {
		!l || e.length === 0 || ue.current || (fe.current = e, ue.current = !0, de.current = !1, t(""));
	}, [
		l,
		t,
		e
	]), ge = useCallback(() => {
		ne || (oe(!0), T?.(!0), he());
	}, [
		ne,
		T,
		he
	]), _e = useCallback(() => {
		if (oe(!1), T?.(!1), !l || !ue.current) return;
		let n = !de.current && e.length === 0;
		ue.current = !1, de.current = !1, n && t(fe.current);
	}, [
		l,
		t,
		T,
		e.length
	]), ve = useCallback(() => {
		ne || he();
	}, [ne, he]), ye = useCallback((e) => {
		ne || (ue.current && (de.current = !0), t(sanitizeAmountInput(e.target.value)));
	}, [ne, t]), be = useMemo(() => buildDisplayValue(e), [e]), xe = useMemo(() => {
		if (!be) return null;
		let e = Number(be);
		return Number.isFinite(e) ? e : null;
	}, [be]), { currencyFormatter: Se } = useCashierFormatters(o, s, c), Ce = useMemo(() => Se ? be ? xe === null ? be : Se.format(xe) : "" : be, [
		Se,
		be,
		xe
	]), we = g?.min ?? "", Te = g?.max ?? "", Ee = we ? formatDisplayValue(we, Se, void 0, s) || we : "", De = Te ? formatDisplayValue(Te, Se, void 0, s) || Te : "", Oe = !!(Ee || De), ke = useMemo(() => {
		if (!Se || typeof Se.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = Se.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r
		};
	}, [Se]), Ae = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [je, Me] = useReducer(flowDisplayReducer, xe, createFlowDisplayState);
	useEffect(() => {
		Me({
			type: "sync",
			numericValue: xe,
			defer: te && ae && xe !== null,
			preserveRendered: xe === null && ue.current && !de.current
		});
	}, [
		te,
		ae,
		xe
	]);
	let Ne = useMemo(() => {
		let e = [be, Ce].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [be, Ce]) || "0", [Pe, Fe] = useState(() => calculateDesiredFontSize(Ne, DEFAULT_FONT_BOUNDS)), [Ie, Le] = useState(DEFAULT_MAX_FONT_SIZE_REM * DEFAULT_AMOUNT_LINE_HEIGHT), Re = useRef(Pe), ze = useRef(Ie);
	useEffect(() => {
		Re.current = Pe;
	}, [Pe]), useEffect(() => {
		ze.current = Ie;
	}, [Ie]), useLayoutEffect(() => {
		let e = ce.current, t = le.current;
		if (!e || !t) return;
		let n = getResizeObserverTarget(e), r = () => {
			let { bounds: n, growthFactor: r } = resolveAmountSizing(e), i = n.max * DEFAULT_AMOUNT_LINE_HEIGHT;
			Math.abs(ze.current - i) >= FONT_SIZE_EPSILON && (ze.current = i, Le(i));
			let a = Math.max(e.clientWidth - HORIZONTAL_PADDING_PX, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = calculateDesiredFontSize(Ne, n, r), c = a / o, l = Math.min(s, c, n.max), d = c < n.min ? l : Math.max(n.min, l);
			Math.abs(Re.current - d) < FONT_SIZE_EPSILON || (Re.current = d, Fe(d));
		};
		r();
		let i = () => {
			r();
		};
		window.addEventListener("resize", i);
		let a;
		return typeof ResizeObserver < "u" && n && (a = new ResizeObserver(r), a.observe(n)), () => {
			window.removeEventListener("resize", i), a?.disconnect();
		};
	}, [Ne]);
	let Be = `${Pe.toFixed(2)}rem`, Ve = DEFAULT_AMOUNT_LINE_HEIGHT, He = `${Ie.toFixed(2)}rem`, Ue = useCallback((e) => {
		e.key === "Enter" && (e.preventDefault(), !ne && i && r?.());
	}, [
		i,
		ne,
		r
	]), We = !!ke && je.renderedValue !== null && Ae, Ge = We ? je.renderedValue : void 0, Ke = !!Ce || We, qe = !!Ce && !ae, Je = ie("field.amount.label"), Ye = resolveTranslatedLabel(ie("field.limits.min.label"), "field.limits.min.label", "Min"), Xe = resolveTranslatedLabel(ie("field.limits.max.label"), "field.limits.max.label", "Max"), Ze = re.id("amount-input"), Qe = !!d || _, $e = y && (!!n || Qe), et = p || !!d, rt = getAmountLimitStatus(e, g), it = et ? "danger" : "neutral", ot = rt.isOutOfRange && et ? "danger" : void 0, ct = x && Oe, lt = ee === "right", ut = "text-center", dt = "justify-center text-center", ft = "opacity-0";
	qe && (ft = ne ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let pt;
	return ne || (pt = ae ? "cursor-text opacity-85" : "cursor-text"), /* @__PURE__ */ jsx("div", {
		id: re.id("amount-section"),
		className: [re.className("amount-section"), "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ jsxs("div", {
			className: [re.className("amount-content"), "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ jsx("label", {
					className: "sr-only",
					htmlFor: Ze,
					children: Je
				}),
				/* @__PURE__ */ jsx("div", {
					"data-theme": it,
					className: twJoin(ct && "border-b border-[var(--pc-color-depth-4)]", ct && "transition-colors duration-150 ease-out", !ne && ct && "hover:border-[var(--pc-color-depth-2)]", !ne && "group"),
					children: /* @__PURE__ */ jsx("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ jsxs("div", {
								className: twJoin("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: ce,
								style: {
									minHeight: He,
									height: He
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": !0,
										ref: le,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: Ve
										},
										children: Ne
									}),
									/* @__PURE__ */ jsx("input", {
										id: Ze,
										type: "text",
										autoComplete: "off",
										autoCorrect: "off",
										autoCapitalize: "off",
										spellCheck: !1,
										inputMode: "decimal",
										pattern: "[0-9]*[.]?[0-9]*",
										placeholder: "0",
										value: be,
										disabled: ne,
										"aria-invalid": et,
										ref: me,
										onChange: ye,
										onKeyDown: Ue,
										onFocus: ge,
										onBlur: _e,
										onClick: ve,
										className: twJoin("[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", pt),
										style: {
											fontSize: Be,
											lineHeight: Ve,
											width: "100%",
											maxWidth: "100%",
											minWidth: MIN_INPUT_WIDTH,
											color: qe ? "var(--pc-color-transparent)" : void 0,
											caretColor: qe ? "var(--pc-color-transparent)" : void 0,
											transform: `translateY(${AMOUNT_TEXT_VERTICAL_OFFSET})`
										}
									}),
									Ke && /* @__PURE__ */ jsx("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											ft,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: Be,
											lineHeight: Ve,
											width: "100%",
											maxWidth: "100%",
											minWidth: MIN_INPUT_WIDTH,
											transform: `translateY(${AMOUNT_TEXT_VERTICAL_OFFSET})`
										},
										children: We ? /* @__PURE__ */ jsx(NumberFlow, {
											value: Ge,
											locales: ke?.locales,
											format: ke?.format,
											animated: te,
											transformTiming: NUMBER_FLOW_TIMING.transformTiming,
											spinTiming: NUMBER_FLOW_TIMING.spinTiming,
											opacityTiming: NUMBER_FLOW_TIMING.opacityTiming,
											respectMotionPreference: !0
										}) : Ce
									})
								]
							})
						})
					})
				}),
				Oe && /* @__PURE__ */ jsxs("div", {
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5 text-xs",
						"text-[var(--pc-color-text-muted)] @md:text-sm",
						"grid"
					].join(" "),
					children: [/* @__PURE__ */ jsx("div", {
						"data-theme": ot,
						className: twJoin("min-w-0 text-left", ot && "text-[var(--pc-color-text)]"),
						children: Ee ? /* @__PURE__ */ jsxs("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ jsxs("span", { children: [Ye, ":"] }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: Ee
							})]
						}) : null
					}), /* @__PURE__ */ jsx("div", {
						"data-theme": ot,
						className: twJoin("min-w-0 text-right", ot && "text-[var(--pc-color-text)]"),
						children: De ? /* @__PURE__ */ jsxs("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ jsxs("span", { children: [Xe, ":"] }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: De
							})]
						}) : null
					})]
				}),
				$e && /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ jsx("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Qe && /* @__PURE__ */ jsx("div", {
						"data-theme": "danger",
						className: "h-5 text-[var(--pc-color-text)] truncate",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: d ?? ""
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/PaymentSummaryDetails.tsx
var baseClassName = [
	"flex flex-col",
	"w-full",
	"rounded-[var(--pc-radius-lg)]",
	"[background:var(--pc-color-surface)]",
	"text-[var(--pc-color-text)]"
].join(" "), rowClassName$1 = [
	"w-full",
	"border-b border-[var(--pc-color-depth-3)]",
	"last:border-b-0"
].join(" "), rowContentClassName = [
	"flex w-full items-baseline justify-between gap-x-2",
	"text-[var(--pc-color-text)]",
	"text-xs @xs:text-sm @sm:text-base"
].join(" "), labelClassName = ["font-medium"].join(" "), valueClassName = [
	"min-w-0 break-words",
	"text-[var(--pc-color-text-muted)]",
	"text-right"
].join(" "), ORIENTATION_FLUSH_EDGE = {
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
}, EMPTY_FLUSH_EDGES = {
	top: !1,
	right: !1,
	bottom: !1,
	left: !1
}, isOrientationList = (e) => Array.isArray(e), resolveFlushEdges = (e) => e === !0 ? {
	top: !0,
	right: !0,
	bottom: !0,
	left: !0
} : !isOrientationList(e) || e.length === 0 ? EMPTY_FLUSH_EDGES : e.reduce((e, t) => {
	let n = ORIENTATION_FLUSH_EDGE[t];
	return {
		top: e.top || !!n.top,
		right: e.right || !!n.right,
		bottom: e.bottom || !!n.bottom,
		left: e.left || !!n.left
	};
}, EMPTY_FLUSH_EDGES), resolvePaddingClassName = (e) => {
	let t = resolveFlushEdges(e);
	return twJoin(t.top ? "pt-0" : "pt-3 @xl:pt-4", t.right ? "pr-0" : "pr-3 @xl:pr-4", t.bottom ? "pb-0" : "pb-3 @xl:pb-4", t.left ? "pl-0" : "pl-3 @xl:pl-4");
};
function PaymentSummaryDetails({ summaryFields: e, variant: t = "neutral", rowVariants: n, className: r, children: i, flush: a = !1, animationDirection: o, animationStyleOptions: s }) {
	let { translateKey: c } = useI18n(), { formatDisplayValue: l } = useCashierValueFormatter(), d = resolveButtonTheme(t), p = Children.count(i) > 0, g = e.length > 0, _ = o ?? (p ? "forward" : "reverse"), y = +!!p + (p && g ? 1 : 0) + e.length, x = +!!p, C = +!!p + (p && g ? 1 : 0), ee = {
		staggerMode: "compressed-tail",
		...s
	};
	return /* @__PURE__ */ jsxs("div", {
		"data-theme": d,
		className: twJoin(baseClassName, ENTRANCE_ANIMATION_PANEL_SURFACE_CLASSNAME, resolvePaddingClassName(a), r),
		style: resolveSelectionListSurfaceAnimationStyle(ee),
		children: [
			p && /* @__PURE__ */ jsx("div", {
				"data-payment-summary-children": "true",
				className: "pc-enter-panel-item",
				style: resolveSelectionListAnimationStyle(0, y, _, ee),
				children: i
			}),
			p && g && /* @__PURE__ */ jsx("div", {
				"data-payment-summary-divider": "true",
				className: twJoin("border-b border-[var(--pc-color-depth-3)]", "pc-enter-panel-item"),
				style: resolveSelectionListAnimationStyle(x, y, _, ee)
			}),
			e.map(({ id: t, label: r, value: i }, a) => {
				let o = c(r && r.length > 0 ? r : t), s = l(i), d = a === 0, g = a === e.length - 1, x = n?.[t], te = x ? resolveButtonTheme(x) : void 0;
				return /* @__PURE__ */ jsx("div", {
					"data-payment-summary-row": t,
					className: twJoin(rowClassName$1, ENTRANCE_ANIMATION_PANEL_ITEM_CLASSNAME, !p && d ? "pt-0" : "pt-1.5 @sm:pt-2 @xl:pt-2.5", g ? "pb-0" : "pb-1.5 @sm:pb-2 @xl:pb-2.5"),
					style: resolveSelectionListAnimationStyle(C + a, y, _, ee),
					children: /* @__PURE__ */ jsxs("div", {
						"data-payment-summary-row-content": t,
						"data-theme": te,
						className: rowContentClassName,
						children: [/* @__PURE__ */ jsx("span", {
							className: labelClassName,
							children: o
						}), /* @__PURE__ */ jsx("span", {
							className: valueClassName,
							children: s
						})]
					})
				}, t);
			})
		]
	});
}
//#endregion
//#region src/hooks/useContentInset.ts
function useContentInset({ primaryContainer: e, overlayContainer: t, useOverlay: n = !1, bottomGap: r = 16, enabled: i = !0 }) {
	let { contentNode: a, setContentInset: o } = useNavigationShell();
	useEffect(() => {
		if (!i) return;
		if (!a || !e && !t) {
			o(0);
			return;
		}
		let s = n && t ? t : e;
		if (!s) {
			o(0);
			return;
		}
		let c = () => {
			let e = s.getBoundingClientRect().height;
			o(Math.max(Math.ceil(e + r), 0));
		};
		c();
		let l = null;
		typeof ResizeObserver < "u" && (l = new ResizeObserver(() => {
			c();
		}), e && l.observe(e), t && l.observe(t));
		let d = () => {
			c();
		};
		return typeof window < "u" && window.addEventListener("resize", d), () => {
			l?.disconnect(), typeof window < "u" && window.removeEventListener("resize", d), o(0);
		};
	}, [
		a,
		i,
		r,
		t,
		e,
		o,
		n
	]);
}
//#endregion
//#region src/hooks/useFloatingSheet.ts
var useFloatingSheet = ({ isOpen: e, canShow: t, onClose: n, useOverlayInset: r = !1, enableBackHotkey: i = !0, contentBottomGap: a = 16, reserveContentInset: o = !0 }) => {
	let { contentNode: s } = useNavigationShell(), c = s?.parentElement ?? s ?? null, [l, d] = useState(null), [p, g] = useState(null);
	return useContentInset({
		primaryContainer: l,
		overlayContainer: p,
		useOverlay: r,
		bottomGap: a,
		enabled: o
	}), useHotkey({ onBack: e && i ? n : void 0 }), {
		floatingPortalTarget: c,
		showOverlay: !!(e && t && c),
		setFloatingContainer: d,
		setOverlayContainer: g
	};
}, PICKER_DRAWER_MAX_HEIGHT_CLASSNAME = "max-h-[min(31rem,100%)]", PICKER_TRIGGER_ANIMATION_CLASSNAME = "pc-enter-tray-item";
function PaymentTypePicker({ animationStyle: e }) {
	let t = useCashierDomHooks(), { uiComboView: n, uiComboView__PaymentTypes: r, onPaymentTypeSelected: i, uiAccountDelete: a } = useContext(CashierContext), { translateKey: o } = useI18n(), { setBottomRailFadeSuppressed: s } = useNavigationShell(), { paymentTypesList: c } = usePaymentTypes(), { getBonusCountForPaymentType: l } = useBonuses(), { selectedPaymentType: d, selectPaymentType: p, ensureDefaultSelection: g } = usePaymentSelection(), { requestAccountDelete: _, actionConfirmationModal: y } = useAccountDelete(), [x, C] = useState(!1);
	useEffect(() => {
		!n || !isComboViewPaymentTypesPicker(r) || g(c);
	}, [
		g,
		c,
		n,
		r
	]);
	let ee = c.length > 0, te = c.length > 1, ne = n && isComboViewPaymentTypesPicker(r) && te, T = x && ne, re = useMemo(() => resolvePaymentTypeMatch(c, d), [c, d]), ie = useMemo(() => re ? formatCardAccountLabel(re) : null, [re]), ae = useMemo(() => {
		if (!re) return null;
		let e = l(re), t = re.accountId ? `${re.accountId}-${re.name}` : re.name;
		return e > 0 ? /* @__PURE__ */ jsx(BonusCountBadge, {
			count: e,
			domSlug: t
		}) : null;
	}, [l, re]), oe = o("cta.choose_payment_type"), se = o("cta.interactive_prompt.choose_payment_type.title"), ce = o("account.delete.title"), le = re?.name ?? "cta.choose_payment_type", ue = useCallback(() => {
		C(!1);
	}, []), de = useCallback((e) => {
		let t = resolvePaymentTypeMatch(c, e);
		t && (p(t.name), i && i(t)), ue();
	}, [
		ue,
		i,
		c,
		p
	]), fe = useCallback((e) => !a || !e.accountId ? null : /* @__PURE__ */ jsx(Button, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": ce,
		onClick: () => {
			_(e);
		},
		iconOnly: !0,
		label: ce,
		leadingIcon: /* @__PURE__ */ jsx(CloseIcon, {})
	}), [
		ce,
		_,
		a
	]), pe = t.id("payment-type-picker-list"), me = () => {
		ne && C((e) => !e);
	}, { floatingPortalTarget: he, showOverlay: ge, setFloatingContainer: _e, setOverlayContainer: ve } = useFloatingSheet({
		isOpen: T,
		canShow: ne,
		onClose: ue,
		contentBottomGap: 12
	}), ye = T && (ge || !he), be = he?.parentElement ?? he ?? void 0, xe = !!(n && isComboViewPaymentTypesPicker(r) && he);
	useEffect(() => {
		if (xe) return s(!0), () => {
			s(!1);
		};
	}, [s, xe]);
	let Se = /* @__PURE__ */ jsx(CashierDrawer, {
		isOpen: ye,
		onClose: ue,
		portalContainer: be,
		overlayClassName: "flex flex-col justify-end",
		contentClassName: twJoin("w-full min-h-0 rounded-t-[var(--pc-radius-2xl)]", PICKER_DRAWER_MAX_HEIGHT_CLASSNAME),
		title: /* @__PURE__ */ jsx(I18nTextSlot, { children: oe }),
		contentRef: ve,
		children: /* @__PURE__ */ jsx("div", {
			id: pe,
			className: twJoin(t.className("payment-type-picker-list"), "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
			children: /* @__PURE__ */ jsx(PaymentTypesList, {
				paymentTypes: c,
				domScope: "picker",
				listStyle: CashierLayoutListType.LIST,
				compact: !0,
				stacked: !0,
				showMeta: !0,
				onSelect: de,
				renderActions: fe,
				itemVariant: "neutral",
				itemAppearance: "ghost"
			})
		})
	});
	if (!n || !isComboViewPaymentTypesPicker(r) || !ee) return null;
	let Ce = /* @__PURE__ */ jsx(PaymentTypeListItem, {
		domSlug: re?.accountId ? `${re.accountId}-${le}` : le,
		name: le,
		logo: re?.logo,
		logoContent: re ? void 0 : createChoosePaymentTypePromptIcon("h-full w-full"),
		limits: re?.limits,
		fee: re?.fee,
		listStyle: CashierLayoutListType.LIST,
		showMeta: !0,
		variant: "default",
		shape: "rounded",
		balanceLogo: !1,
		bonusLabel: ae,
		title: ie ?? void 0,
		interactive: !1,
		isDisabled: !1,
		hoverMode: "group",
		actions: ne ? /* @__PURE__ */ jsx(Button, {
			variant: "neutral",
			appearance: "ghost",
			size: "lg",
			iconOnly: !0,
			showTooltip: !1,
			"aria-label": se,
			onClick: me,
			leadingIcon: /* @__PURE__ */ jsx(SwitchArrowsIcon, {}),
			label: se
		}) : null,
		actionStopsPropagation: !0
	}), we = /* @__PURE__ */ jsx("div", {
		id: t.id("payment-type-picker-trigger"),
		role: "button",
		"data-theme": "neutral",
		style: e,
		className: twJoin(t.className("payment-type-picker-trigger"), PICKER_TRIGGER_ANIMATION_CLASSNAME, "group w-full rounded-[var(--pc-radius-3xl)] text-left", "transition-colors duration-200", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-accent)]", "focus-visible:ring-offset-2", "focus-visible:ring-offset-transparent", ne && "cursor-pointer"),
		"aria-label": oe,
		onClick: me,
		onKeyDown: (e) => {
			ne && (e.key !== "Enter" && e.key !== " " || (e.preventDefault(), me()));
		},
		"aria-expanded": T,
		"aria-controls": pe,
		"aria-disabled": !ne,
		tabIndex: ne ? 0 : -1,
		children: Ce
	});
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		he ? createPortal(/* @__PURE__ */ jsx("div", {
			"data-payment-type-picker-floating": "true",
			className: twJoin("pointer-events-none absolute inset-0 z-10", "flex items-end justify-center"),
			"aria-hidden": ge,
			children: /* @__PURE__ */ jsxs("div", {
				ref: _e,
				"data-slot": "payment-type-picker-floating-surface",
				"data-pc-scroll-obstruction": "bottom",
				className: "pointer-events-none relative w-full bg-[var(--pc-color-surface)] pb-5",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					"data-slot": "payment-type-picker-floating-fade",
					"data-pc-scroll-obstruction": "bottom",
					style: STICKY_SURFACE_FADE_STYLE,
					className: "pointer-events-none absolute inset-x-0 bottom-full"
				}), /* @__PURE__ */ jsx("div", {
					"data-slot": "payment-type-picker-floating-content",
					className: "pointer-events-auto w-full px-3",
					children: we
				})]
			})
		}), he) : /* @__PURE__ */ jsx("div", {
			className: "mt-0",
			children: we
		}),
		Se,
		y
	] });
}
//#endregion
//#region src/context/interactivePrompt.tsx
var InteractivePromptSessionContext = createContext({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), useInteractivePromptSession = () => useContext(InteractivePromptSessionContext);
function InteractivePromptSessionProvider({ children: e }) {
	let [t, n] = useState(() => /* @__PURE__ */ new Set()), r = useCallback((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = useCallback((e) => e ? t.has(e) : !1, [t]), a = useMemo(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ jsx(InteractivePromptSessionContext.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function PendingWithdrawalCancellationIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ jsx("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ jsx("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/components/PendingWithdrawalSelectionList.tsx
var rowClassName = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55", resolveSupportingText = (e, t) => t(e.createdAt);
function PendingWithdrawalSelectionList({ pendingWithdrawals: e, formatCurrencyValue: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let a = resolveSupportingText(e, n);
			return /* @__PURE__ */ jsx("button", {
				type: "button",
				className: rowClassName,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: t(e.amountValue)
					}), a && /* @__PURE__ */ jsx("span", {
						className: twJoin("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: a
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawals.ts
var PENDING_WITHDRAWAL_HISTORY_PAGE = 1, PENDING_WITHDRAWAL_HISTORY_PAGE_SIZE = 100, CANCELLABLE_PENDING_WITHDRAWAL_SUB_STATUSES = new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), parsePendingWithdrawalAmount = (e) => {
	if (!e) return null;
	let t = Number(e.value);
	return Number.isFinite(t) ? {
		value: t,
		currency: e.currency
	} : null;
}, toPendingWithdrawal = (e) => {
	if (!CANCELLABLE_PENDING_WITHDRAWAL_SUB_STATUSES.has(e.subStatus)) return null;
	let t = parsePendingWithdrawalAmount(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, resolvePendingWithdrawals = (e) => (e ?? []).flatMap((e) => {
	let t = toPendingWithdrawal(e);
	return t ? [t] : [];
}), fetchPendingWithdrawalHistory = async (e) => {
	let { data: t, error: n } = await getPaymentHistory({
		query: {
			...e,
			method: "payout",
			page: PENDING_WITHDRAWAL_HISTORY_PAGE,
			pageSize: PENDING_WITHDRAWAL_HISTORY_PAGE_SIZE
		},
		cache: "no-store"
	});
	if (n) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: resolvePendingWithdrawals(t?.payments),
		totalItems: t?.totalItems ?? 0,
		totalPages: t?.totalPages ?? 0,
		currentPage: t?.currentPage ?? PENDING_WITHDRAWAL_HISTORY_PAGE,
		pageSize: t?.pageSize ?? PENDING_WITHDRAWAL_HISTORY_PAGE_SIZE
	};
}, cancelPendingWithdrawal = async ({ merchantId: e, userId: t, sessionId: n, paymentId: r }) => {
	let { data: i, error: a } = await cancelPayment({
		path: { paymentId: r },
		query: {
			merchantId: e,
			userId: t,
			sessionId: n
		}
	});
	if (a) {
		let e = "Failed to cancel pending withdrawal.";
		throw a instanceof Error ? e = a.message : typeof a == "object" && "error" in a && typeof a.error == "string" && (e = a.error), Error(e);
	}
	return i;
}, resolvePendingWithdrawalDismissKey = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
	e.paymentId,
	e.amountValue,
	e.amountCurrency,
	e.subStatus
].join(":"))].join("|"), getPendingWithdrawalAggregateAmount = (e) => e.reduce((e, t) => e + t.amountValue, 0), pendingWithdrawalHistoryQueryKey = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], pendingWithdrawalHistoryQueryOptions = (e, t = !0) => ({
	queryKey: pendingWithdrawalHistoryQueryKey(e),
	queryFn: () => fetchPendingWithdrawalHistory(e),
	enabled: t && !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 6e4,
	gcTime: 10 * 6e4
}), PendingWithdrawalCancellationContext = createContext({
	interactivePromptContent: null,
	pendingWithdrawalDrawer: null,
	attachSuccessFooter: (e) => e
}), SUCCESS_FOOTER_CLASSNAME = "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]", INITIAL_UI_STATE = {
	isDrawerOpen: !1,
	cancellingPaymentId: null,
	cancellationState: null
}, resolvePendingWithdrawalCancellationErrorMessage = (e, t) => {
	if (typeof e == "string" && e) return e;
	if (e && typeof e == "object") {
		let t = e;
		if (typeof t.error == "string" && t.error) return t.error;
		if (typeof t.message == "string" && t.message) return t.message;
	}
	return t;
}, createPendingWithdrawalCancellationState = (e) => ({
	baselinePaymentIds: e.map((e) => e.paymentId),
	cancelledPaymentIds: [],
	cancelledAmount: 0
}), hasExpectedPendingWithdrawalsRemaining = (e, t) => {
	let n = e.baselinePaymentIds.filter((t) => !e.cancelledPaymentIds.includes(t));
	if (t.length === 0) return n.length === 0 && e.cancelledPaymentIds.length > 0;
	let r = t.map((e) => e.paymentId), i = new Set(n);
	return r.length === i.size && r.every((e) => i.has(e));
}, pendingWithdrawalCancellationReducer = (e, t) => {
	switch (t.type) {
		case "reset": return INITIAL_UI_STATE;
		case "dismiss": return {
			...e,
			isDrawerOpen: !1,
			cancellationState: null
		};
		case "open-drawer": return {
			...e,
			isDrawerOpen: !0
		};
		case "close-drawer": return e.isDrawerOpen ? {
			...e,
			isDrawerOpen: !1
		} : e;
		case "start-cancelling": return {
			...e,
			isDrawerOpen: !1,
			cancellingPaymentId: t.paymentId
		};
		case "finish-cancelling": return e.cancellingPaymentId === null ? e : {
			...e,
			cancellingPaymentId: null
		};
		case "sync-pending-withdrawals": {
			if (!t.featureEnabled) return INITIAL_UI_STATE;
			let n = e.cancellationState === null ? t.pendingWithdrawals.length > 0 ? createPendingWithdrawalCancellationState(t.pendingWithdrawals) : null : hasExpectedPendingWithdrawalsRemaining(e.cancellationState, t.pendingWithdrawals) ? e.cancellationState : t.pendingWithdrawals.length > 0 ? createPendingWithdrawalCancellationState(t.pendingWithdrawals) : null, r = t.pendingWithdrawals.length > 1 ? e.isDrawerOpen : !1;
			return r === e.isDrawerOpen && n === e.cancellationState ? e : {
				...e,
				isDrawerOpen: r,
				cancellationState: n
			};
		}
		case "record-success": {
			let n = e.cancellationState ?? createPendingWithdrawalCancellationState(t.pendingWithdrawals);
			return {
				...e,
				cancellationState: {
					baselinePaymentIds: n.baselinePaymentIds,
					cancelledPaymentIds: [...n.cancelledPaymentIds, t.payment.paymentId],
					cancelledAmount: n.cancelledAmount + t.payment.amountValue
				}
			};
		}
		default: return e;
	}
}, buildPendingWithdrawalContent = ({ pendingWithdrawals: e, activePendingWithdrawal: t, isCancelling: n, isDrawerOpen: r, onDismiss: i, onCancel: a, onView: o, formatCurrencyValue: s, successFooter: c }) => {
	if (!t) return null;
	let l = e.length, d = getPendingWithdrawalAggregateAmount(e), p = l === 1;
	return {
		legacyTitle: "Hold on a second",
		titleKey: "pending_withdrawal.cancel.title",
		bodyKey: p ? "pending_withdrawal.cancel.single.desc" : "pending_withdrawal.cancel.multi.desc",
		bodyValues: p ? { amount: s(t.amountValue) } : {
			count: String(l),
			totalAmount: s(d)
		},
		icon: /* @__PURE__ */ jsx(PendingWithdrawalCancellationIcon, {}),
		tone: "secondary",
		footer: c,
		actions: [{
			id: "pending-withdrawal-dismiss",
			labelKey: "cta.deny_cancel_pending_withdrawal",
			legacyLabel: "No thanks",
			onClick: i,
			disabled: n,
			variant: "neutral"
		}, {
			id: p ? "pending-withdrawal-cancel" : "pending-withdrawal-view",
			labelKey: p ? "cta.cancel_pending_withdrawal" : "cta.view",
			legacyLabel: p ? "Yes, please!" : "View",
			onClick: p ? a : o,
			disabled: n || r,
			variant: "secondary"
		}]
	};
}, buildPendingWithdrawalConfirmationContent = ({ successFooter: e }) => e ? {
	legacyTitle: "Nice!",
	titleKey: "pending_withdrawal.cancel.confirmed.title",
	legacyBody: "Your pending withdrawal has been cancelled.",
	bodyKey: "pending_withdrawal.cancel.confirmed.desc",
	icon: /* @__PURE__ */ jsx(PendingWithdrawalCancellationIcon, {}),
	tone: "secondary",
	footer: e
} : null;
function PendingWithdrawalCancellationProvider({ children: e }) {
	let { merchantId: t, userId: n, sessionId: r, method: i, lockAmount: a, uiInteractivePrompts: o, uiCancelPendingPayout: s, onPendingWithdrawalCancelled: c } = useContext(CashierContext), { translateKey: l } = useI18n(), { formatCurrencyValue: d, formatDisplayValue: p } = useCashierValueFormatter(), { dismissPrompt: g, isPromptDismissed: _ } = useInteractivePromptSession(), { toast: y } = useToast(), x = useQueryClient(), [C, ee] = useReducer(pendingWithdrawalCancellationReducer, INITIAL_UI_STATE), { isDrawerOpen: te, cancellingPaymentId: ne, cancellationState: T } = C, re = i === CashierMethods.PAYIN && !a && o && s && !!(t && n && r), ie = useMemo(() => ({
		merchantId: t,
		userId: n,
		sessionId: r
	}), [
		t,
		r,
		n
	]), ae = useMemo(() => pendingWithdrawalHistoryQueryKey(ie), [ie]), { data: oe } = useQuery(pendingWithdrawalHistoryQueryOptions(ie, re)), se = useMemo(() => oe?.payments ?? [], [oe?.payments]), ce = useMemo(() => resolvePendingWithdrawalDismissKey(se), [se]), le = _(ce), ue = se.length === 1 ? se[0] : se.at(0) ?? null;
	useEffect(() => {
		ee({ type: "reset" });
	}, [
		re,
		t,
		r,
		n
	]), useEffect(() => {
		le && ee({ type: "dismiss" });
	}, [le]), useEffect(() => {
		ee({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: se,
			featureEnabled: re
		});
	}, [re, se]);
	let { mutate: de, isPending: fe } = useMutation({
		mutationFn: async (e) => await cancelPendingWithdrawal({
			merchantId: t,
			userId: n,
			sessionId: r,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = se.filter((e) => e.paymentId !== t.paymentId);
			await x.invalidateQueries({ queryKey: ae });
			try {
				n = (await x.fetchQuery(pendingWithdrawalHistoryQueryOptions(ie, !0))).payments;
			} catch {}
			let r = n.length, i = getPendingWithdrawalAggregateAmount(n);
			ee({
				type: "record-success",
				payment: t,
				pendingWithdrawals: se
			}), c?.({
				paymentId: t.paymentId,
				amount: t.amountValue,
				currency: t.amountCurrency,
				createdAt: t.createdAt,
				remainingPendingCount: r,
				remainingPendingTotal: i
			});
		},
		onError: (e) => {
			y.error(resolvePendingWithdrawalCancellationErrorMessage(e, l("error.pending_withdrawal_cancel_failed")));
		},
		onSettled: () => {
			ee({ type: "finish-cancelling" });
		}
	}), pe = useCallback(() => {
		ce && g(ce);
	}, [ce, g]), me = useCallback((e) => {
		fe || (ee({
			type: "start-cancelling",
			paymentId: e.paymentId
		}), de(e));
	}, [de, fe]), he = useCallback(() => {
		ue !== null && me(ue);
	}, [ue, me]), ge = useCallback(() => {
		fe || se.length <= 1 || ee({ type: "open-drawer" });
	}, [fe, se.length]), _e = useCallback(() => {
		fe || ee({ type: "close-drawer" });
	}, [fe]), ve = useMemo(() => !T || T.cancelledAmount <= 0 ? null : /* @__PURE__ */ jsx("p", {
		className: SUCCESS_FOOTER_CLASSNAME,
		children: formatTemplate(l("pending_withdrawal.cancel.success"), "amount", d(T.cancelledAmount))
	}), [
		T,
		d,
		l
	]), ye = useMemo(() => !re || le ? null : ue ? buildPendingWithdrawalContent({
		pendingWithdrawals: se,
		activePendingWithdrawal: ue,
		isCancelling: fe,
		isDrawerOpen: te,
		onDismiss: pe,
		onCancel: he,
		onView: ge,
		formatCurrencyValue: d,
		successFooter: ve
	}) : buildPendingWithdrawalConfirmationContent({ successFooter: ve }), [
		ue,
		re,
		d,
		he,
		pe,
		ge,
		fe,
		te,
		le,
		se,
		ve
	]), be = useMemo(() => !re || se.length <= 1 ? null : /* @__PURE__ */ jsx(CashierDrawer, {
		isOpen: te,
		onClose: _e,
		title: l("pending_withdrawal.cancel.drawer.title"),
		children: /* @__PURE__ */ jsx(PendingWithdrawalSelectionList, {
			pendingWithdrawals: se,
			formatCurrencyValue: d,
			formatDisplayValue: p,
			onSelect: me,
			isDisabled: fe || ne !== null
		})
	}), [
		ne,
		re,
		d,
		p,
		me,
		_e,
		fe,
		te,
		se,
		l
	]), xe = useCallback((e) => e, []), Se = useMemo(() => ({
		interactivePromptContent: ye,
		pendingWithdrawalDrawer: be,
		attachSuccessFooter: xe
	}), [
		xe,
		ye,
		be
	]);
	return /* @__PURE__ */ jsx(PendingWithdrawalCancellationContext.Provider, {
		value: Se,
		children: e
	});
}
var usePendingWithdrawalCancellation = () => useContext(PendingWithdrawalCancellationContext), asFiniteNumber = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, getWithdrawalSummaryFields = (e, t, n, r = {}) => {
	if (e !== CashierMethods.PAYOUT || !n) return [];
	let i = asFiniteNumber(n.balance), a = getRawPayoutWithdrawableBalance(e, n), o = getPayoutWithdrawableBalance(e, n, r.fee);
	if (i === null || a === null || o === null) return [];
	let s = Math.max(i - a, 0), c = [];
	if ((r.includeBalanceRows ?? !0) && c.push({
		id: "withdrawable-balance",
		label: "field.withdrawable.label",
		value: {
			value: o,
			currency: t
		}
	}, {
		id: "locked-balance",
		label: "field.locked.label",
		value: {
			value: s,
			currency: t
		}
	}), r.includeRemainingBalance) {
		let e = parseAmountValue(r.amount ?? "") ?? 0;
		c.push({
			id: "remaining-balance",
			label: "field.remaining_balance.label",
			value: {
				value: Math.max(a - getPayoutConsumedAmount(e, r.fee), 0),
				currency: t
			}
		});
	}
	return c;
}, applyAmountKey = (e, t) => t === "Backspace" ? e.length === 0 ? e : sanitizeAmountInput(e.slice(0, -1)) : sanitizeAmountInput(`${e}${t}`), QUICK_PAYMENT_TITLE_ANIMATION_CLASSNAME = "pc-enter-drift-item", QUICK_PAYMENT_AMOUNT_ANIMATION_CLASSNAME = "pc-enter-lift-item", QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME = "w-full max-w-xl px-3", QUICK_PAYMENT_INTERACTIVE_PROMPT_STACK_CONTAINER_CLASSNAME = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", QUICK_PAYMENT_INTERACTIVE_PROMPT_STACK_CONTENT_CLASSNAME = "flex w-full flex-col items-center gap-2 @md:gap-3", QUICK_PAYMENT_BOTTOM_RAIL_SAFE_AREA_CLASSNAME = "pb-3 @md:pb-4", QUICK_PAYMENT_INTERACTIVE_PROMPT_HEADER_EDGE_GUTTER_CLASSNAME = "[@container_(max-width:620px)]:pl-1.5", AMOUNT_PROMPT_DEFER_MS = 650, createAmountInputState = (e) => ({
	value: sanitizeAmountInput(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), amountInputReducer = (e, t) => {
	let n = sanitizeAmountInput(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type === "sync-external" ? !1 : !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, Route$4 = createFileRoute("/quick-payment/")({
	beforeLoad: ({ context: e }) => {
		let t = resolveInitialRoute(e);
		if (t !== "/quick-payment") throw redirect({
			to: t,
			replace: !0
		});
	},
	component: QuickPayment
});
function QuickPayment() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, method: r, gotoPaymentType: i, bonuses: a, uiBonuses: o } = useContext(CashierContext), s = useNavigate(), c = useMemo(() => resolveInitialRoute({
		uiComboView: n,
		lockAmount: t,
		gotoPaymentType: i,
		bonuses: a,
		uiBonuses: o,
		method: r
	}), [
		a,
		i,
		t,
		r,
		n,
		o
	]);
	return useEffect(() => {
		c !== "/quick-payment" && s({
			to: c,
			replace: !0
		});
	}, [s, c]), c === "/quick-payment" ? /* @__PURE__ */ jsx(QuickPaymentContent, {
		initialAmount: e,
		lockAmount: t
	}) : null;
}
function QuickPaymentContent({ initialAmount: e, lockAmount: t }) {
	let n = useCashierDomHooks(), { contentInset: r } = useNavigationShell(), { method: i, uiSuggestAmounts: a, selectedPaymentType: o, uiComboView: s, uiComboView__PaymentTypes: c, uiComboView__PaymentForm: l, gotoPaymentType: d, bonuses: p, uiInteractivePrompts: g, hasAppliedGotoPaymentType: _, setCashierState: y, onPaymentTypeSelected: x, currency: C, locale: ee, currencyFormatOptions: te, resetFlowOnBack: ne, user: T, uiShowFees: re, paymentFormDraft: ie } = useContext(CashierContext), { translateKey: ae } = useI18n(), oe = useNavigate(), se = useRef(null), ce = useRef(!1), le = useRef(!1), ue = useRef(!1), de = useRef(null), fe = useRef(null), [pe, me] = useReducer(amountInputReducer, e, createAmountInputState), [he, ge] = useState(!1), [_e, ve] = useState(!1), [ye, be] = useState(null), [xe, Se] = useState({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), Ce = pe.value, we = useRef(Ce), Te = useRef({
		amount: Ce,
		amountIsOutOfRange: !1,
		gotoPaymentType: d,
		selectedPaymentType: o,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: i
	}), { getPaymentType: Ee, paymentTypesList: De, isLoading: Oe, isError: ke } = usePaymentTypes(), { getBonusCountForPaymentType: Ae } = useBonuses(), { selectPaymentType: je } = usePaymentSelection();
	useEffect(() => {
		we.current = Ce;
	}, [Ce]), useEffect(() => {
		le.current = !1, ue.current = !1, me({
			type: "sync-external",
			value: e
		});
	}, [e]), useEffect(() => {
		ne && y((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [ne, y]), useEffect(() => {
		ce.current && (ce.current = !1, se.current?.blur());
	}, [Ce]);
	let Me = useMemo(() => parseAmountSuggestions(a), [a]), Ne = useMemo(() => o ? Ee(o) : null, [Ee, o]), Pe = De.length > 0, Fe = s && isComboViewPaymentTypesVisible(c), Ie = s && isComboViewPaymentTypesPicker(c), Le = s ? resolveComboViewInlinePaymentTypesStyle({
		mode: c,
		paymentFormEnabled: l
	}) : null, Re = !!(Le && Pe), ze = s && Fe && Ne && Ne ? paymentTypeSupportsAmountField(Ne) : !0, Be = !!(Ne && hasPaymentTypeFormDetailsContent(Ne)), Ve = !Le || Le === CashierLayoutListType.ACCORDION, He = !!(s && Fe && l && Ne && Be && Ve), Ue = Le === CashierLayoutListType.ACCORDION && He, We = He ? o : null, Ge = ze, Ke = ze ? Ce : "", qe = o && isMatchingPaymentFormDraft(ie, {
		paymentTypeName: o,
		method: i,
		amount: Ke
	}) ? ie : null, Je = useMemo(() => ({
		...qe?.values ?? {},
		amount: Ke
	}), [qe?.values, Ke]), Ye = ze && hasAmountValue(Ce) && !!o && !Ne && Oe && !ke, Xe = !!d && !_, Ze = Fe, Qe = Ze && !Ne, $e = s && !!o && (Fe || Xe), et = !Pe || Oe || ke, rt = Ne?.limits, it = getPayoutAmountMaxBoundary(i, T, Ne?.fee), ot = getAmountLimitStatus(Ke, rt, { maxBoundary: it }), ct = useCallback((e) => !paymentTypeSupportsAmountField(e) || !hasAmountValue(Ce) ? !1 : getAmountLimitStatus(Ce, e.limits, { maxBoundary: getPayoutAmountMaxBoundary(i, T, e.fee) }).isOutOfRange, [
		Ce,
		i,
		T
	]), lt = getAmountLimitErrorDetails(Ke, rt, { maxBoundary: it }), ut = lt?.key, [dt, ft] = useState(() => ({
		value: Ce,
		key: ut
	})), [pt, mt] = useState(Ce), ht = ze && he && pe.changeOrigin === "user" && !!ut && dt.key === void 0, gt = ze && he && pe.changeOrigin === "user", _t = dt.value === Ce && dt.key === ut, vt = gt && pt !== Ce, yt = ze ? vt ? pt : Ce : "", bt = ht && !_t, xt = ut;
	bt && (xt = void 0);
	let St = xt ? lt : void 0, { currencyFormatter: Ct, formatCurrencyValue: wt, formatDisplayValue: Tt } = useCashierValueFormatter(), { interactivePromptContent: Et, pendingWithdrawalDrawer: Dt, attachSuccessFooter: Ot } = usePendingWithdrawalCancellation(), kt = useMemo(() => createFeeCurrencyFormatter(Ct), [Ct]), At = formatAmountLimitError(St, ae, wt), jt = ze ? t ? hasAmountValue(Ce) : hasAmountValue(Ce) && pe.hasExplicitSelection : !!Ne, Mt = ze && !hasAmountValue(Ce) || ze && ot.isOutOfRange || et || Qe, Nt = ae("cta.continue"), Pt = ae(i === CashierMethods.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(ee), Ft = useMemo(() => ze ? parseAmountValue(Ce) : null, [Ce, ze]), It = useMemo(() => ze ? parseAmountValue(yt) : null, [ze, yt]), Lt = Ne ? Ae(Ne, { amount: Ft }) : 0, Rt = Ne ? Lt > 0 : hasConfiguredBonuses(p);
	useEffect(() => {
		let e = ze ? normalizeAmountValue(Ce) : "", t = o ? {
			paymentTypeName: o,
			method: i,
			amount: e
		} : null;
		y((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !isMatchingPaymentFormDraft(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
				...r,
				amount: t.amount,
				values: ze ? {
					...r.values,
					amount: t.amount
				} : r.values
			})), e.comboViewFormDraft === n && e.paymentFormDraft === r ? e : {
				...e,
				comboViewFormDraft: n,
				paymentFormDraft: r
			};
		});
	}, [
		Ce,
		i,
		ze,
		o,
		y
	]), useEffect(() => {
		let e = () => {
			de.current &&= (clearTimeout(de.current), null);
		};
		if (e(), ht) de.current = setTimeout(() => {
			de.current = null, ft({
				value: Ce,
				key: ut
			});
		}, AMOUNT_PROMPT_DEFER_MS);
		else return ft((e) => e.value === Ce && e.key === ut ? e : {
			value: Ce,
			key: ut
		}), () => {
			e();
		};
		return e;
	}, [
		Ce,
		ut,
		ht
	]), useEffect(() => {
		let e = () => {
			fe.current &&= (clearTimeout(fe.current), null);
		};
		if (e(), gt) fe.current = setTimeout(() => {
			fe.current = null, mt(Ce);
		}, AMOUNT_PROMPT_DEFER_MS);
		else return mt((e) => e === Ce ? e : Ce), () => {
			e();
		};
		return e;
	}, [Ce, gt]), useEffect(() => {
		Te.current = {
			amount: Ce,
			amountIsOutOfRange: ot.isOutOfRange,
			gotoPaymentType: d,
			selectedPaymentType: o,
			shouldShowBonusStep: Rt,
			shouldSkipPaymentTypeSelection: $e,
			isPaymentTypesUnavailable: et,
			isPaymentTypeSelectionMissing: Qe,
			paymentTypeSupportsAmount: ze,
			method: i
		};
	}, [
		Ce,
		ot.isOutOfRange,
		d,
		o,
		Rt,
		$e,
		et,
		Qe,
		ze,
		i
	]);
	let zt = useCallback(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentType: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = Te.current;
		if (o || s) return;
		let d = c ? normalizeAmountValue(e) : "";
		if (!(c && d.length === 0) && !(c && t)) {
			if (y((e) => {
				let t = e.initialAmount !== d, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
				return !t && !r && !i ? e : {
					...e,
					...t ? { initialAmount: d } : {},
					paymentFormDraft: null,
					comboViewFormDraft: null,
					...r ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), a && r) {
				oe(i ? { to: "/bonus" } : {
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			oe({ to: `/pts/${l}` });
		}
	}, [oe, y]), Bt = useCallback((e, t) => {
		if (!o || e.name !== o || et || Qe || ze && ot.isOutOfRange) return;
		let n = ze ? normalizeAmountValue(we.current) : "";
		if (!(ze && n.length === 0)) {
			if (y((r) => {
				let a = !!d && !r.hasAppliedGotoPaymentType, o = ze ? {
					...t.values,
					amount: n
				} : t.values;
				return {
					...r,
					initialAmount: n,
					comboViewFormDraft: {
						paymentTypeName: e.name,
						method: i,
						amount: n,
						values: o,
						hasHostedFields: t.hasHostedFields
					},
					...a ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), Rt) {
				oe({ to: "/bonus" });
				return;
			}
			oe({
				to: "/pt/$id",
				params: { id: e.name }
			});
		}
	}, [
		ot.isOutOfRange,
		d,
		Qe,
		et,
		i,
		oe,
		ze,
		o,
		y,
		Rt
	]), Vt = useCallback((e, t) => {
		if (!o || e.name !== o) return;
		let n = ze ? normalizeAmountValue(we.current) : "", r = {
			paymentTypeName: e.name,
			method: i,
			amount: n,
			values: ze ? {
				...t.values,
				amount: n
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		y((e) => arePaymentFormDraftsEqual(e.paymentFormDraft, r) ? e : {
			...e,
			paymentFormDraft: r
		});
	}, [
		i,
		ze,
		o,
		y
	]), Ht = useCallback((e) => {
		if (!t) {
			if (ue.current) {
				ue.current = !1, le.current = !1, me({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			if (le.current && e.length === 0) {
				me({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			le.current = !1, ue.current = !1, me({
				type: "user",
				value: e,
				markExplicitSelection: e.length > 0
			});
		}
	}, [t, me]), Ut = useCallback((e) => {
		if (t) return;
		let n = sanitizeAmountInput(e);
		le.current = !1, ue.current = !1, ce.current = !0, me({
			type: "programmatic",
			value: n,
			markExplicitSelection: n.length > 0
		});
	}, [t, me]), Wt = useCallback((e) => {
		let t = Ee(e);
		t && (ct(t) || (je(t.name), x && x(t)));
	}, [
		Ee,
		ct,
		x,
		je
	]), Gt = ye?.submit, Kt = !He || xe.paymentTypeName === We, qt = He ? !Kt || !Gt ? !0 : Mt || !Gt.visible || Gt.disabled : Mt, Jt = He && Kt && Gt ? Gt.loading : !1, Yt = He && Kt && Gt ? Gt.onClick : zt;
	useNavigationItems("bottom", useMemo(() => [/* @__PURE__ */ jsx(Button, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: qt,
		loading: Jt,
		onClick: Yt,
		label: Nt
	}, "cashier-amount-continue")], [
		Nt,
		qt,
		Jt,
		Yt
	]));
	let Xt = useCallback((e) => {
		if (t) return;
		let n = e.key === "," ? "." : e.key, r = applyAmountKey(we.current, n);
		le.current = !1, ue.current = !1, me({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [t, me]), Zt = useCallback((e) => {
		if (ge(e), t || !s) {
			le.current = !1, ue.current = !1;
			return;
		}
		if (e) {
			hasAmountValue(we.current) && (le.current = !0, ue.current = !1);
			return;
		}
		if (le.current && !hasAmountValue(we.current)) {
			ue.current = !0;
			return;
		}
		le.current = !1, ue.current = !1;
	}, [t, s]), Qt = useCallback((e) => {
		let t = e.currentTarget.scrollTop > 1;
		ve((e) => e === t ? e : t);
	}, []);
	useHotkey({
		inputRef: se,
		inputType: "decimal",
		onType: t || !Ge ? void 0 : Xt
	});
	let $t = ae(Ge ? t ? "field.amount.label" : "cta.enter_amount" : "payment.enter_details"), en = useCallback((e) => Tt(e) || e, [Tt]), tn = useMemo(() => ({
		legacyTitle: $t,
		titleKey: Ge ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: Pt },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ jsx(InteractivePromptIcon, {})
	}), [
		Pt,
		Ge,
		$t
	]), nn = useMemo(() => At ? {
		...tn,
		legacyTitle: At,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ jsx(CloseIcon, {}),
		tone: "danger"
	} : null, [At, tn]), rn = useMemo(() => createPaymentDetailsPromptDescriptor({ translateKey: ae }), [ae]), an = useMemo(() => Ze ? Oe ? {
		...tn,
		legacyTitle: ae("loading.payment_types"),
		titleKey: "loading.payment_types",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ jsx(LoaderIcon, { className: "h-full w-full" })
	} : ke || !Pe ? {
		...tn,
		legacyTitle: ae("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ jsx(CloseIcon, {}),
		tone: "danger"
	} : null : null, [
		tn,
		Pe,
		ke,
		Oe,
		Ze,
		ae
	]), on = !He || xe.paymentTypeName === We, sn = !Oe && !Ye && on, cn = useMemo(() => {
		let e = tn, n = {
			...e,
			titleKey: t ? void 0 : e.titleKey
		};
		return Ye ? n : nn || (He && xe.errorMessage ? {
			...e,
			legacyTitle: xe.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ jsx(CloseIcon, {}),
			tone: "danger"
		} : jt ? Qe ? {
			...e,
			...createChoosePaymentTypePromptDescriptor({ translateKey: ae }),
			titleValues: void 0
		} : !He || xe.isComplete ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ jsx(InteractivePromptReadyIcon, {})
		} : rn : e);
	}, [
		nn,
		tn,
		xe.errorMessage,
		xe.isComplete,
		ae,
		jt,
		Ye,
		Qe,
		t,
		rn,
		He
	]), [ln, un] = useState(null), dn = vt || bt, fn = dn ? ln ?? cn : cn, pn = useMemo(() => Ot(fn), [Ot, fn]), mn = useMemo(() => ({
		...tn,
		legacyTitle: " ",
		titleKey: void 0,
		titleValues: void 0,
		preferLegacyTitle: !0,
		legacyBody: tn.bodyKey || tn.legacyBody ? " " : void 0,
		bodyKey: void 0,
		bodyValues: void 0,
		preferLegacyBody: !0,
		meta: void 0,
		iconSlotClassName: twJoin(tn.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [tn]);
	useEffect(() => {
		!sn || dn || an || Et || un((e) => e === cn ? e : cn);
	}, [
		dn,
		sn,
		cn,
		an,
		Et
	]);
	let hn = an ?? mn;
	!an && sn && (hn = Et ? fn : pn);
	let gn = an ?? nn, _n = QUICK_PAYMENT_INTERACTIVE_PROMPT_HEADER_EDGE_GUTTER_CLASSNAME, vn = Ge && !t && Me.length > 0, yn = !!(rt?.min || rt?.max), bn = getWithdrawalSummaryFields(i, C, T, {
		amount: yt,
		fee: Ne?.fee,
		includeRemainingBalance: !0
	}), xn = re ? getCalculatedFeeSummaryField(Ne?.fee, It ?? 0, {
		feeCurrencyFormatter: kt,
		formatCurrencyValue: wt
	}) : null, Sn = i === CashierMethods.PAYIN && re ? getCalculatedPayinTotalSummaryField(Ne?.fee, It ?? 0, C) : null, Cn = ze ? i === CashierMethods.PAYOUT ? insertSummaryFieldsBeforeRemainingBalance(bn, [xn]) : xn || Sn ? [xn, Sn].filter((e) => e !== null) : bn : [], wn = Cn.length > 0, Tn = it !== null && It !== null && It > it ? { "withdrawable-balance": "danger" } : {}, En = s && t && !!e && !vn && !yn, Dn = !En, On = Ge || vn, kn = He && !Ue && !!o, An = Re, jn = On || kn || An || !!ye, Mn = Ie && Pe, Nn = s && Ie && r > 0 ? r : 0, Pn = Nn > 0 ? { paddingBottom: Nn } : void 0, Fn = s, In = 2 + +!!vn + +!!An + +!!kn + +!!wn + +!!Mn, Ln = 2 + +!!vn, Rn = Ln + +!!wn, zn = Rn + +!!An, Bn = zn + +!!kn, Vn = At ? "danger" : "neutral", Hn = /* @__PURE__ */ jsx(CashierHeader, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: $t,
		titleClassName: "text-lg leading-tight @md:text-2xl",
		titleWrapperClassName: "relative items-center"
	}), Un = wn ? /* @__PURE__ */ jsx("div", {
		"data-slot": "quick-payment-summary-surface",
		className: twJoin("w-full", ENTRANCE_ANIMATION_ITEM_CLASSNAME),
		style: resolveEntranceAnimationStyle({
			index: Ln,
			total: In,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: /* @__PURE__ */ jsx(PaymentSummaryDetails, {
			summaryFields: Cn,
			rowVariants: Tn,
			animationDirection: "forward"
		})
	}) : null, Wn = useCallback((e, t) => {
		Se((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Gn = kn && Ne ? /* @__PURE__ */ jsx("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: resolveEntranceAnimationStyle({
			index: zn,
			total: In,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ jsx(PaymentTypeInlineForm, {
			paymentType: Ne,
			amountValue: Ke,
			hideAmountField: !0,
			onActionsChange: be,
			onPromptStateChange: Wn,
			onPreparedValues: Bt,
			onValuesChange: Vt,
			valueOverrides: Je
		}, Ne.name)
	}) : null, Kn = useCallback((e) => /* @__PURE__ */ jsx(PaymentTypeInlineForm, {
		paymentType: e,
		amountValue: Ke,
		hideAmountField: !0,
		onActionsChange: be,
		onPromptStateChange: Wn,
		onPreparedValues: Bt,
		onValuesChange: Vt,
		valueOverrides: Je,
		surfaceChrome: "plain"
	}, e.name), [
		Je,
		Bt,
		Vt,
		Wn,
		Ke
	]), qn = useCallback((e) => hasPaymentTypeFormDetailsContent(e), []), Jn = An && Le ? /* @__PURE__ */ jsx("div", {
		"data-slot": "quick-payment-payment-types",
		className: twJoin("w-full", ENTRANCE_ANIMATION_ITEM_CLASSNAME),
		style: resolveEntranceAnimationStyle({
			index: Rn,
			total: In,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: Le === CashierLayoutListType.ACCORDION ? /* @__PURE__ */ jsx(PaymentTypesAccordion, {
			paymentTypes: De,
			domScope: "quick-payment",
			selectedPaymentType: o,
			onSelect: Wt,
			renderPanel: Kn,
			hasPanel: qn,
			isPaymentTypeDisabled: ct,
			preserveDisabledSelection: !0,
			showMeta: !0
		}) : /* @__PURE__ */ jsx(PaymentTypesList, {
			paymentTypes: De,
			domScope: "quick-payment",
			listStyle: Le,
			selectable: !0,
			selectedPaymentType: o,
			onSelect: Wt,
			isPaymentTypeDisabled: ct,
			preserveDisabledSelection: !0,
			showMeta: !0
		})
	}) : null;
	return /* @__PURE__ */ jsxs("div", {
		id: n.id("route-quick-payment"),
		onScroll: Qt,
		style: Pn,
		className: twJoin(n.className("route-quick-payment"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pb-3 pc-scrollbar-hidden"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: twJoin("flex flex-1 flex-col items-center", g ? QUICK_PAYMENT_INTERACTIVE_PROMPT_STACK_CONTAINER_CLASSNAME : "justify-center"),
			children: [g ? /* @__PURE__ */ jsxs("div", {
				className: QUICK_PAYMENT_INTERACTIVE_PROMPT_STACK_CONTENT_CLASSNAME,
				children: [/* @__PURE__ */ jsxs("div", {
					"data-slot": "quick-payment-prompt-sticky-anchor",
					"data-pc-scroll-obstruction": "top",
					className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
					children: [/* @__PURE__ */ jsx("div", {
						className: twJoin("pointer-events-auto mx-auto", QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME, QUICK_PAYMENT_TITLE_ANIMATION_CLASSNAME),
						style: resolveEntranceAnimationStyle({
							index: 0,
							total: In,
							direction: "reverse",
							baseDelayMs: 12,
							staggerMs: 24
						}),
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3",
							children: [Et && /* @__PURE__ */ jsx(InteractivePromptHeader, {
								content: Et,
								className: _n
							}), /* @__PURE__ */ jsx(InteractivePromptHeader, {
								content: hn,
								className: _n
							})]
						})
					}), /* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						"data-slot": "quick-payment-prompt-sticky-fade",
						"data-pc-scroll-obstruction-extent": "true",
						style: TOP_STICKY_SURFACE_FADE_STYLE,
						className: twJoin("pointer-events-none absolute inset-x-0 top-full", _e ? "opacity-100" : "opacity-0")
					})]
				}), jn && /* @__PURE__ */ jsx("div", {
					className: twJoin(QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME, "pc-enter-rise"),
					children: /* @__PURE__ */ jsxs("div", {
						"data-slot": "quick-payment-surface-stack",
						className: twJoin("flex flex-col gap-2 @md:gap-3", Fn && QUICK_PAYMENT_BOTTOM_RAIL_SAFE_AREA_CLASSNAME),
						children: [
							On && /* @__PURE__ */ jsxs("div", {
								"data-slot": "quick-payment-amount-surface",
								"data-theme": "neutral",
								className: "flex flex-col gap-2.5 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-3 py-4 text-[var(--pc-color-text)] @md:min-h-[14rem] @md:px-5 @md:py-5 @xl:gap-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-4.5 text-center @lg:gap-5",
									children: [/* @__PURE__ */ jsx("div", {
										"data-theme": Vn,
										className: QUICK_PAYMENT_TITLE_ANIMATION_CLASSNAME,
										style: resolveEntranceAnimationStyle({
											index: 0,
											total: In,
											direction: "reverse",
											baseDelayMs: 12,
											staggerMs: 24
										}),
										children: Hn
									}), /* @__PURE__ */ jsx("div", {
										className: twJoin("w-full", QUICK_PAYMENT_AMOUNT_ANIMATION_CLASSNAME),
										style: resolveEntranceAnimationStyle({
											index: 0,
											total: In,
											direction: "reverse",
											baseDelayMs: 58,
											staggerMs: 38
										}),
										children: /* @__PURE__ */ jsx(Amount, {
											inputRef: se,
											value: Ce,
											onChange: Ht,
											onSubmit: Yt,
											onFocusChange: Zt,
											canSubmit: !Mt,
											disabled: t,
											invalid: !!At,
											limits: rt,
											showMeta: !1,
											showDivider: Dn,
											reserveEmptyLimitMetaSpace: !En,
											align: "right",
											currency: C,
											locale: ee,
											formatOptions: te,
											clearOnFocus: s && !t,
											animateValueChange: pe.changeOrigin === "programmatic"
										})
									})]
								}), vn && /* @__PURE__ */ jsx(SuggestedAmountButtons, {
									suggestions: Me,
									activeSuggestion: Ce,
									onSelect: Ut,
									formatLabel: en,
									amountLimits: rt,
									className: twJoin("mt-3 order-3", "pc-enter-rise-item"),
									style: resolveEntranceAnimationStyle({
										index: 2,
										total: In,
										direction: "reverse"
									})
								})]
							}),
							Un,
							Jn,
							Gn
						]
					})
				})]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex w-full flex-col items-center gap-4",
				children: [gn && /* @__PURE__ */ jsx("div", {
					className: twJoin("pointer-events-auto mx-auto", QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME, QUICK_PAYMENT_TITLE_ANIMATION_CLASSNAME),
					style: resolveEntranceAnimationStyle({
						index: 1,
						total: In,
						direction: "reverse"
					}),
					children: /* @__PURE__ */ jsx(InteractivePromptHeader, {
						content: gn,
						forceVisible: !0
					})
				}), jn && /* @__PURE__ */ jsx("div", {
					className: twJoin(QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME, "pc-enter-rise"),
					children: /* @__PURE__ */ jsxs("div", {
						"data-slot": "quick-payment-surface-stack",
						className: twJoin("flex flex-col gap-2 @md:gap-3", Fn && QUICK_PAYMENT_BOTTOM_RAIL_SAFE_AREA_CLASSNAME),
						children: [
							On && /* @__PURE__ */ jsxs("div", {
								"data-slot": "quick-payment-amount-surface",
								"data-theme": "neutral",
								className: "flex flex-col gap-1 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] p-4 text-[var(--pc-color-text)] @md:min-h-[12.5rem] @md:px-5 @md:py-4 @xl:py-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 w-full flex-1 flex-col items-center justify-center gap-3 text-center [@container_(max-width:500px)]:[&&]:items-stretch",
									children: [/* @__PURE__ */ jsx("div", {
										"data-theme": Vn,
										className: QUICK_PAYMENT_TITLE_ANIMATION_CLASSNAME,
										style: resolveEntranceAnimationStyle({
											index: 0,
											total: In,
											direction: "reverse",
											baseDelayMs: 12,
											staggerMs: 24
										}),
										children: Hn
									}), /* @__PURE__ */ jsx("div", {
										className: "min-w-0 w-full flex-1",
										children: /* @__PURE__ */ jsx("div", {
											className: twJoin("w-full", QUICK_PAYMENT_AMOUNT_ANIMATION_CLASSNAME),
											style: resolveEntranceAnimationStyle({
												index: 0,
												total: In,
												direction: "reverse",
												baseDelayMs: 58,
												staggerMs: 38
											}),
											children: /* @__PURE__ */ jsx(Amount, {
												inputRef: se,
												value: Ce,
												onChange: Ht,
												onSubmit: Yt,
												onFocusChange: Zt,
												canSubmit: !Mt,
												disabled: t,
												invalid: !!At,
												limits: rt,
												showMeta: !1,
												showDivider: Dn,
												reserveEmptyLimitMetaSpace: !En,
												align: "right",
												currency: C,
												locale: ee,
												formatOptions: te,
												clearOnFocus: s && !t,
												animateValueChange: pe.changeOrigin === "programmatic"
											})
										})
									})]
								}), vn && /* @__PURE__ */ jsx(SuggestedAmountButtons, {
									suggestions: Me,
									activeSuggestion: Ce,
									onSelect: Ut,
									formatLabel: en,
									amountLimits: rt,
									className: twJoin("mt-3 order-2", "pc-enter-rise-item"),
									style: resolveEntranceAnimationStyle({
										index: 2,
										total: In,
										direction: "reverse"
									})
								})]
							}),
							Un,
							Jn,
							Gn
						]
					})
				})]
			}), Mn && /* @__PURE__ */ jsx("div", {
				className: "flex w-full justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: QUICK_PAYMENT_SURFACE_WIDTH_CLASSNAME,
					children: /* @__PURE__ */ jsx(PaymentTypePicker, { animationStyle: resolveEntranceAnimationStyle({
						index: Bn,
						total: In,
						direction: "forward",
						baseDelayMs: 70,
						staggerMs: 36
					}) })
				})
			})]
		}), Dt]
	});
}
//#endregion
//#region src/components/provider/ProviderStatusStream.tsx
var ProviderStatusStream = ({ paymentId: e }) => {
	let { merchantId: t, debug: n } = useContext(CashierContext), { payment: r, paymentId: i, status: a, redirect: o, setPaymentTracking: s } = usePaymentStatus(), c = useSearch({ strict: !1 }), l = useFinishPayment(), d = useNavigate(), p = useRef(!1), g = useRef(!1), _ = useRef(a), y = useRef(l);
	useEffect(() => {
		_.current = a;
	}, [a]), useEffect(() => {
		y.current = l;
	}, [l]);
	let x = useMemo(() => {
		if (!i) return null;
		if (o) {
			let e = normalizeRedirectType(o.type);
			return e !== "window" && e !== "script" ? null : buildProviderWindowStepKey({
				paymentId: i,
				redirectType: e,
				redirectMethod: normalizeRedirectMethod(o.method),
				redirectUrl: o.url,
				redirectData: encodeRedirectPayload(o.data, n),
				redirectScriptId: o.scriptId
			});
		}
		let e = normalizeRedirectType(parseRedirectType(c.redirectType));
		return e !== "window" && e !== "script" ? null : buildProviderWindowStepKey({
			paymentId: i,
			redirectType: e,
			redirectMethod: normalizeRedirectMethod(c.redirectMethod === "POST" ? "POST" : "GET"),
			redirectUrl: c.redirectUrl,
			redirectData: c.redirectData,
			redirectScriptId: c.redirectScriptId
		});
	}, [
		n,
		o,
		c.redirectData,
		c.redirectMethod,
		c.redirectScriptId,
		c.redirectType,
		c.redirectUrl,
		i
	]) ?? (i ? `payment:${i}` : null);
	return useEffect(() => {
		e && e !== i && s(e);
	}, [
		e,
		s,
		i
	]), useEffect(() => {
		if (!i) return;
		if (o) {
			let e = {
				redirectUrl: o.url,
				paymentId: i,
				redirectMethod: o.method
			}, t = encodeRedirectPayload(o.data, n);
			t && (e.redirectData = t), e.redirectType = normalizeRedirectType(o.type), o.scriptId && (e.redirectScriptId = o.scriptId), d({
				to: "/provider",
				search: e,
				replace: !0
			});
			return;
		}
		if (r?.form?.actionUrl && c.redirectUrl) {
			d({
				to: "/provider",
				search: { paymentId: i },
				replace: !0
			});
			return;
		}
		let e = a?.toLowerCase();
		e && e === "done" && l({
			paymentId: i,
			merchantId: t,
			reachedSummaryViaProvider: !0
		});
	}, [
		n,
		l,
		t,
		d,
		r?.form?.actionUrl,
		o,
		c.redirectUrl,
		a,
		i
	]), useEffect(() => {
		p.current = !1, g.current = !1;
	}, [x]), useEffect(() => {
		if (typeof window > "u" || !i) return;
		let e = window.setInterval(() => {
			if (getProviderWindowHandle()) {
				g.current = !0;
				return;
			}
			x && g.current && (p.current || isTerminalPaymentStatus(_.current) || i && (p.current = !0, y.current({
				paymentId: i,
				merchantId: t,
				reachedSummaryViaProvider: !0
			})));
		}, 500);
		return () => {
			window.clearInterval(e);
		};
	}, [
		t,
		x,
		i
	]), null;
}, iframePermissions = {
	accelerometer: "*",
	autoplay: "*",
	camera: "*",
	"clipboard-read": "*",
	"clipboard-write": "*",
	fullscreen: "*",
	geolocation: "*",
	gyroscope: "*",
	magnetometer: "*",
	microphone: "*",
	"otp-credentials": "*",
	payment: "*",
	"picture-in-picture": "*"
}, buildProviderIframeAllow = (e) => e ?? Object.entries(iframePermissions).map(([e, t]) => `${e} ${t}`).join(";");
function ProviderIframe({ src: e, title: t, allow: n, hiddenIframe: r = !1, tabIndex: i, ...a }) {
	let o = buildProviderIframeAllow(n);
	return /* @__PURE__ */ jsx("iframe", {
		className: r ? "absolute left-[-9999px] top-[-9999px] h-px w-px border-0 opacity-0 pointer-events-none" : "block h-full min-h-full w-full flex-1",
		allow: o,
		src: e ?? "about:blank",
		title: t,
		tabIndex: r ? -1 : i,
		"aria-hidden": r || void 0,
		...a
	});
}
//#endregion
//#region src/components/provider/ProviderWindowNotice.tsx
var ProviderWindowNotice = ({ manualOpenRequired: e, title: t, manualDescription: n, autoDescription: r, buttonLabel: i, onManualOpen: a }) => /* @__PURE__ */ jsxs("div", {
	className: "flex h-full flex-col items-center justify-center gap-4 text-center",
	children: [/* @__PURE__ */ jsxs("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-base font-medium text-[var(--pc-color-text)]",
			children: t
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm text-[var(--pc-color-text-muted)]",
			children: e ? n : r
		})]
	}), e && /* @__PURE__ */ jsx(Button, {
		variant: "secondary",
		onClick: a,
		label: i
	})]
}), useProviderWindowLifecycle = ({ providerStepKey: e, status: t, openWindow: n, onCleanup: r }) => {
	let i = useRef(n), a = useRef(r), o = useRef(null);
	useEffect(() => {
		i.current = n;
	}, [n]), useEffect(() => {
		a.current = r;
	}, [r]), useEffect(() => {
		if (typeof window > "u" || !e || o.current === e) return;
		let t = window.setTimeout(() => {
			o.current !== e && (o.current = e, i.current("auto"));
		}, 0);
		return () => {
			window.clearTimeout(t);
		};
	}, [e]), useEffect(() => {
		isTerminalPaymentStatus(t) && closeProviderWindowHandle();
	}, [t]), useEffect(() => () => {
		a.current?.(), closeProviderWindowHandle();
	}, []);
}, useProviderWindowNoticeLabels = () => {
	let { translateKey: e } = useI18n();
	return useMemo(() => ({
		title: e("provider.window.title"),
		manualDescription: e("provider.window.instructions.manual"),
		autoDescription: e("provider.window.instructions.auto"),
		buttonLabel: e("provider.window.open"),
		popupBlockedMessage: e("error.payment_window_blocked")
	}), [e]);
}, ProviderWindow = ({ redirectUrl: e, redirectMethod: t, hiddenFields: n, providerStepKey: r }) => {
	let { debug: i } = useContext(CashierContext), { status: a } = usePaymentStatus(), { toast: o } = useToast(), s = useRef(null), [c, l] = useState(!1), d = t === "POST", p = useMemo(() => r ?? buildProviderWindowStepKey({
		redirectType: "window",
		redirectMethod: t,
		redirectUrl: e,
		redirectData: n.map(([e, t]) => `${e}=${t}`).join("&")
	}), [
		n,
		r,
		t,
		e
	]), { popupBlockedMessage: g, title: _, manualDescription: y, autoDescription: x, buttonLabel: C } = useProviderWindowNoticeLabels(), ee = useCallback((e) => {
		l(!0), e === "manual" && o.error(g, {
			id: PROVIDER_POPUP_BLOCKED_TOAST_ID,
			persistent: !0
		});
	}, [g, o]), te = useCallback(async (t) => await openOrReuseProviderWindow({
		source: t,
		onBlocked: ee,
		canOpen: canOpenProviderWindow,
		setHandle: setProviderWindowHandle,
		allowManualDetachedOpen: !0,
		onDetachedOpened: () => {
			l(!1), d && s.current?.submit();
		},
		open: () => d ? window.open("", PROVIDER_WINDOW_TARGET, "") : window.open(e, PROVIDER_WINDOW_TARGET, ""),
		onReuse: (t) => {
			if (l(!1), d) {
				s.current?.submit();
				return;
			}
			try {
				t.location.href = e;
			} catch (e) {
				i && console.warn("[Cashier] Unable to navigate provider window", e);
			}
		},
		onOpened: () => {
			l(!1), d && s.current?.submit();
		}
	}), [
		i,
		d,
		e,
		ee
	]);
	useProviderWindowLifecycle({
		providerStepKey: p,
		status: a,
		openWindow: te
	});
	let ne = /* @__PURE__ */ jsx(ProviderWindowNotice, {
		manualOpenRequired: c,
		title: _,
		manualDescription: y,
		autoDescription: x,
		buttonLabel: C,
		onManualOpen: useCallback(() => {
			te("manual");
		}, [te])
	});
	return d ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("form", {
		ref: s,
		method: "POST",
		action: e,
		target: PROVIDER_WINDOW_TARGET,
		hidden: !0,
		children: n.map(([e, t]) => /* @__PURE__ */ jsx("input", {
			name: e,
			value: t,
			type: "hidden"
		}, e))
	}), ne] }) : ne;
}, scriptOnLoadCallbacks = /* @__PURE__ */ new WeakMap(), takeProviderScriptOnLoad = (e) => {
	let t = scriptOnLoadCallbacks.get(e);
	return scriptOnLoadCallbacks.delete(e), t;
}, buildProviderScriptTemplate = ({ containerId: e, containerClassName: t, configureScript: n, onLoad: r }) => (i, a) => {
	let o = i.createDocumentFragment(), s;
	e && (s = i.createElement("div"), s.id = e, s.className = t ?? "", o.appendChild(s));
	let c = i.createElement("script");
	return c.src = a.scriptUrl, n?.(c, a), r && scriptOnLoadCallbacks.set(c, () => {
		r({
			doc: i,
			context: a,
			container: s,
			script: c
		});
	}), o.appendChild(c), o;
}, mifinityContainerId = "widget-container", mifinityPayinTemplate = buildProviderScriptTemplate({
	containerId: mifinityContainerId,
	containerClassName: "h-full w-full [&>*]:!max-w-none [&>*]:!max-h-none [&>*]:h-full [&>*]:w-full [&_iframe]:h-full [&_iframe]:w-full",
	onLoad: ({ doc: e, context: t }) => {
		let n = e.defaultView?.showPaymentIframe;
		if (typeof n != "function") return;
		let r = Object.prototype.hasOwnProperty.call(t.data, "token") ? t.data.token : "initializationToken_example", i = t.returnUrl ?? (Object.prototype.hasOwnProperty.call(t.data, "returnUrl") ? t.data.returnUrl : void 0), a = !1, o = n(mifinityContainerId, {
			token: r,
			complete: () => {
				if (a) return;
				a = !0;
				let e = o.close;
				e && e(), i && t.navigate && t.navigate(i, { replace: !0 });
			}
		});
	}
}), mifinityOrigins = new Set(["https://demo.mifinity.com", "https://secure.mifinity.com"]), mifinityPayinScript = {
	id: "mifinity_payin",
	presentation: "inline",
	template: mifinityPayinTemplate,
	isAllowedUrl: (e) => mifinityOrigins.has(e.origin) && e.pathname.endsWith("/widgets/sgpg.js")
}, TRUMO_PAYIN_SCRIPT_ID = "trumo_payin", TRUMO_NEW_WINDOW_REQUEST = "trumo_new_window_request", TRUMO_BANK_WINDOW_NAME = "bank_page", TRUMO_BANK_WINDOW_FEATURES = "popup", trumoOrigins = new Set(["https://payer.trumo.io", "https://payer-stg.trumo.io"]), localHosts = new Set([
	"localhost",
	"127.0.0.1",
	"::1",
	"[::1]"
]), isRecord = (e) => !!e && typeof e == "object" && !Array.isArray(e), asNonEmptyString = (e) => typeof e == "string" && e.trim().length > 0 ? e : void 0, resolveExpectedOrigin = (e) => {
	try {
		return new URL(e).origin;
	} catch {
		return null;
	}
}, resolveExpectedOrderIDFromUrl = (e) => {
	try {
		let t = new URL(e);
		return asNonEmptyString(t.searchParams.get("order_id")) ?? asNonEmptyString(t.searchParams.get("order"));
	} catch {
		return;
	}
}, appendExpectedOrderID = (e, t) => {
	let n = asNonEmptyString(t);
	n && !e.includes(n) && e.push(n);
}, resolveExpectedOrderIDs = (e) => {
	let t = [];
	return appendExpectedOrderID(t, resolveExpectedOrderIDFromUrl(e.scriptUrl)), appendExpectedOrderID(t, e.data.trumoOrderID), appendExpectedOrderID(t, e.data.trumo_order_id), t;
}, resolveSafePopupUrl = (e) => {
	let t;
	try {
		t = new URL(e);
	} catch {
		return null;
	}
	return t.protocol === "https:" || t.protocol === "http:" && localHosts.has(t.hostname) ? t.toString() : null;
}, isAllowedTrumoUrl = (e) => trumoOrigins.has(e.origin) || e.protocol === "http:" && localHosts.has(e.hostname) ? !0 : e.protocol === "https:" && localHosts.has(e.hostname), getTrumoWindowRequest = (e) => {
	if (!isRecord(e) || e.type !== TRUMO_NEW_WINDOW_REQUEST) return null;
	let t = asNonEmptyString(e.url);
	if (!t) return null;
	let n = asNonEmptyString(e.trumo_order_id);
	return {
		type: TRUMO_NEW_WINDOW_REQUEST,
		url: t,
		...n ? { trumo_order_id: n } : {}
	};
}, openTrumoBankWindow = (e, t) => openProviderPopupWindow({
	ownerWindow: e,
	url: t,
	target: TRUMO_BANK_WINDOW_NAME,
	features: TRUMO_BANK_WINDOW_FEATURES
}), handleTrumoPayinMessage = (e, { expectedOrigin: t, expectedOrderIDs: n, expectedSource: r, targetWindow: i, onPopupRequested: a, onPopupBlocked: o, onPopupOpened: s }) => {
	if (e.origin !== t || r && e.source !== r) return !1;
	let c = getTrumoWindowRequest(e.data);
	if (!c || n.length > 0 && !n.includes(c.trumo_order_id ?? "")) return !1;
	let l = resolveSafePopupUrl(c.url);
	if (!l) return !1;
	a?.(l);
	let d = openTrumoBankWindow(i, l);
	return d ? (s?.(d), !0) : (o?.(l), !0);
}, trumoPayinTemplate = (e, t) => {
	let n = e.createDocumentFragment(), r = e.createElement("iframe");
	return r.src = t.scriptUrl, r.title = "Trumo", r.allow = buildProviderIframeAllow(), r.className = "block h-full min-h-full w-full flex-1 border-0", r.style.display = "block", r.style.width = "100%", r.style.height = "100%", r.style.minHeight = "100%", r.style.border = "0", n.appendChild(r), n;
}, setupTrumoPayinMessages = ({ doc: e, container: t, context: n }) => {
	let r = e.defaultView;
	if (!r) return;
	let i = resolveExpectedOrigin(n.scriptUrl);
	if (!i) return;
	let a = resolveExpectedOrderIDs(n), o = t.querySelector("iframe")?.contentWindow ?? void 0, s = t.style.position;
	s || (t.style.position = "relative");
	let c = null, l = null, d = e.createElement("div");
	d.hidden = !0, d.setAttribute("data-testid", "trumo-popup-fallback"), d.style.position = "absolute", d.style.inset = "0", d.style.zIndex = "2147483647", d.style.display = "none", d.style.alignItems = "center", d.style.justifyContent = "center", d.style.padding = "24px", d.style.background = "rgba(248, 250, 252, 0.94)";
	let p = e.createElement("div");
	p.style.boxSizing = "border-box", p.style.width = "min(100%, 420px)", p.style.border = "1px solid #d8dee8", p.style.borderRadius = "8px", p.style.background = "#fff", p.style.padding = "24px", p.style.boxShadow = "0 12px 32px rgba(15, 23, 42, 0.16)", p.style.color = "#172033", p.style.fontFamily = "Inter, ui-sans-serif, system-ui, sans-serif", p.style.textAlign = "center";
	let g = e.createElement("h2");
	g.textContent = "Open bank window", g.style.margin = "0", g.style.fontSize = "20px", g.style.lineHeight = "1.25", g.style.fontWeight = "600";
	let _ = e.createElement("p");
	_.textContent = "If no bank window opened, open it manually and keep this window open.", _.style.margin = "12px 0 20px", _.style.fontSize = "15px", _.style.lineHeight = "1.5", _.style.color = "#46556f";
	let y = e.createElement("button");
	y.type = "button", y.textContent = "Open bank window", y.style.border = "0", y.style.borderRadius = "6px", y.style.background = "#172033", y.style.color = "#fff", y.style.cursor = "pointer", y.style.fontSize = "15px", y.style.fontWeight = "600", y.style.lineHeight = "1", y.style.minHeight = "44px", y.style.padding = "0 18px";
	let x = (e) => {
		c = e, d.hidden = !1, d.style.display = "flex";
	}, C = () => {
		c = null, d.hidden = !0, d.style.display = "none";
	}, ee = () => {
		l?.(), l = null;
	}, te = (e) => {
		ee(), l = trackProviderWindowClose({
			ownerWindow: r,
			popupWindow: e,
			onClosed: () => {
				l = null, C();
			}
		});
	}, ne = () => {
		if (!c) return;
		let e = openTrumoBankWindow(r, c);
		e && (te(e), C());
	};
	y.addEventListener("click", ne), p.appendChild(g), p.appendChild(_), p.appendChild(y), d.appendChild(p), t.appendChild(d);
	let T = (e) => {
		handleTrumoPayinMessage(e, {
			expectedOrigin: i,
			expectedOrderIDs: a,
			expectedSource: o,
			targetWindow: r,
			onPopupRequested: x,
			onPopupBlocked: x,
			onPopupOpened: te
		});
	};
	return r.addEventListener("message", T), () => {
		r.removeEventListener("message", T), ee(), y.removeEventListener("click", ne), d.remove(), t.style.position = s;
	};
}, trumoPayinScript = {
	id: TRUMO_PAYIN_SCRIPT_ID,
	presentation: "inline",
	template: trumoPayinTemplate,
	isAllowedUrl: isAllowedTrumoUrl,
	setup: setupTrumoPayinMessages
}, providerScriptRegistry = {
	[mifinityPayinScript.id]: mifinityPayinScript,
	[trumoPayinScript.id]: trumoPayinScript
}, DEFAULT_DELAYED_VISIBILITY_MS = 300, useDelayedVisibility = (e, { delayMs: t = 300, resetKey: n } = {}) => {
	let [r, i] = useState(null), a = e ? n ?? !0 : null;
	return useEffect(() => {
		let e = window.setTimeout(() => {
			i(a);
		}, Math.max(0, t));
		return () => {
			window.clearTimeout(e);
		};
	}, [a, t]), a !== null && r === a;
}, scriptCache = /* @__PURE__ */ new WeakMap(), hasScriptTag = (e, t) => Array.from(e.scripts).some((e) => e.src === t), ensureScriptExecutionAttributes = (e) => {
	e.src && !e.hasAttribute("async") && !e.hasAttribute("defer") && (e.async = !1);
}, loadExternalScript = (e, t, n) => {
	let r = t.src;
	if (!r) return Promise.resolve();
	let i = scriptCache.get(e) ?? /* @__PURE__ */ new Map();
	scriptCache.has(e) || scriptCache.set(e, i);
	let a = i.get(r);
	if (a) {
		if (hasScriptTag(e, r)) return a;
		i.delete(r);
	}
	let o = new Promise((e, a) => {
		t.addEventListener("load", () => {
			e();
		}), t.addEventListener("error", () => {
			i.delete(r), a(/* @__PURE__ */ Error(`Failed to load script: ${r}`));
		}), n.appendChild(t);
	});
	return i.set(r, o), o;
}, resolveProviderReturnUrl = (e) => Object.prototype.hasOwnProperty.call(e, "returnUrl") ? e.returnUrl : void 0, resolveNavigationUrl = (e) => {
	if (!e) return null;
	try {
		let t = typeof window > "u" ? "http://localhost" : window.location.origin;
		return new URL(e, t);
	} catch {
		return null;
	}
}, renderScriptTemplate = (e, t) => e.render ? e.render(e.template, t) : e.template, resolveScriptTemplateContent = (e, t, n) => typeof e == "function" ? e(t, n) : e, isScriptElement = (e) => e.nodeType === Node.ELEMENT_NODE && e.tagName.toLowerCase() === "script", isEmptyTextNode = (e) => e.nodeType === Node.TEXT_NODE && (e.textContent ?? "").trim().length === 0, cloneScriptElement = (e, t) => {
	let n = e.createElement("script");
	return Array.from(t.attributes).forEach((e) => {
		n.setAttribute(e.name, e.value);
	}), t.src ? (n.src = t.src, ensureScriptExecutionAttributes(n), n) : (n.text = t.text, n);
}, executeScriptTemplate = async ({ doc: e, container: t, template: n }) => {
	t.textContent = "";
	let r = typeof n == "string", i;
	if (r) {
		let t = e.createElement("div");
		t.innerHTML = n, i = Array.from(t.childNodes);
	} else i = Array.isArray(n) ? n : Array.from(n.childNodes);
	for (let n of i) if (!isEmptyTextNode(n)) {
		if (isScriptElement(n)) {
			let i = r ? cloneScriptElement(e, n) : n;
			if (i.src) {
				ensureScriptExecutionAttributes(i), await loadExternalScript(e, i, t);
				let n = takeProviderScriptOnLoad(i);
				n && n();
				continue;
			}
			t.appendChild(i);
			let a = takeProviderScriptOnLoad(i);
			a && a();
			continue;
		}
		t.appendChild(n);
	}
	return () => {
		t.textContent = "";
	};
}, combineScriptCleanups = (e, t) => t ? () => {
	t(), e();
} : e, mountProviderScriptDefinition = async ({ definition: e, doc: t, container: n, context: r, template: i }) => {
	let a = await executeScriptTemplate({
		doc: t,
		container: n,
		template: resolveScriptTemplateContent(i, t, r)
	});
	try {
		return combineScriptCleanups(a, e.setup?.({
			doc: t,
			container: n,
			context: r
		}));
	} catch (e) {
		throw a(), e;
	}
}, useBottomNavigationItems = (e, t, n = !0) => {
	let { setItems: r, clearItems: i } = useNavigationShell();
	useEffect(() => {
		if (n) {
			if (!t) {
				i("bottom");
				return;
			}
			if (e.length === 0) {
				i("bottom");
				return;
			}
			return r("bottom", e), () => {
				i("bottom");
			};
		}
	}, [
		i,
		t,
		e,
		n,
		r
	]);
}, resolveScriptUrl = (e, t, n) => {
	if (!t) return null;
	let r;
	try {
		let e = typeof window > "u" ? "http://localhost" : window.location.origin;
		r = new URL(t, e);
	} catch (e) {
		return n && console.error("[Cashier] Invalid script URL", e), null;
	}
	return e.isAllowedUrl && !e.isAllowedUrl(r) ? (n && console.warn("[Cashier] Script URL rejected", r.toString()), null) : r.toString();
}, ensureWindowDocument = (e) => {
	let t = e.document;
	t.documentElement.style.height = "100%";
	let n = ensureDocumentBody(t);
	return n.style.margin = "0", n.style.height = "100%", t;
}, ensureDocumentBody = (e) => {
	let t = e.querySelector("body");
	if (t) return t;
	let n = e.createElement("body");
	return e.documentElement.appendChild(n), n;
}, getOrCreateContainer = (e, t) => {
	let n = e.getElementById(t);
	if (n) return n;
	let r = e.createElement("div");
	return r.id = t, r.style.width = "100%", r.style.height = "100%", ensureDocumentBody(e).appendChild(r), r;
}, resolvePresentation = (e, t) => e === "window" ? "window" : e === "iframe" || e === "hidden_iframe" ? "inline" : t.presentation, ProviderScriptWindow = ({ providerStepKey: e, definition: t, scriptTemplate: n, scriptContext: r, debug: i }) => {
	let { status: a, paymentId: o } = usePaymentStatus(), { translateKey: s } = useI18n(), { merchantId: c } = useContext(CashierContext), { toast: l } = useToast(), d = useFinishPayment(), [p, g] = useState(!1), [_, y] = useState(null), x = useRef(null), C = useRef("provider-script-window"), ee = useMemo(() => e ?? buildProviderWindowStepKey({
		paymentId: o,
		redirectType: "script",
		redirectMethod: "GET",
		redirectUrl: r.scriptUrl
	}), [
		o,
		e,
		r.scriptUrl
	]), { popupBlockedMessage: te, title: ne, manualDescription: T, autoDescription: re, buttonLabel: ie } = useProviderWindowNoticeLabels(), ae = useCallback((e) => {
		g(!0), e === "manual" && l.error(te, {
			id: PROVIDER_POPUP_BLOCKED_TOAST_ID,
			persistent: !0
		});
	}, [te, l]), oe = useCallback(() => {
		!o || !c || d({
			paymentId: o,
			merchantId: c,
			reachedSummaryViaProvider: !0
		});
	}, [
		d,
		c,
		o
	]), se = useCallback(async (e) => {
		try {
			let i = ensureWindowDocument(e), a = getOrCreateContainer(i, C.current);
			x.current?.(), x.current = await mountProviderScriptDefinition({
				definition: t,
				doc: i,
				container: a,
				context: r,
				template: n
			}), y(null);
		} catch (e) {
			i && console.error("[Cashier] Failed to mount script widget", e), y("error.payment_processing_failed");
		}
	}, [
		i,
		t,
		r,
		n
	]), ce = useCallback((e) => {
		try {
			return e.document, !0;
		} catch (e) {
			return i && console.warn("[Cashier] Unable to reuse provider window", e), !1;
		}
	}, [i]), le = useCallback(async (e) => await openOrReuseProviderWindow({
		source: e,
		onBlocked: ae,
		canReuse: ce,
		canOpen: canOpenProviderWindow,
		setHandle: setProviderWindowHandle,
		open: () => window.open("", PROVIDER_WINDOW_TARGET, ""),
		onReuse: (e) => {
			g(!1), se(e);
		},
		onOpened: (e) => {
			g(!1), se(e);
		}
	}), [
		ce,
		se,
		ae
	]);
	useProviderWindowLifecycle({
		providerStepKey: ee,
		status: a,
		openWindow: le,
		onCleanup: () => {
			x.current?.(), x.current = null;
		}
	});
	let ue = /* @__PURE__ */ jsx(ProviderWindowNotice, {
		manualOpenRequired: p,
		title: ne,
		manualDescription: T,
		autoDescription: re,
		buttonLabel: ie,
		onManualOpen: () => {
			le("manual");
		}
	}), de = !!(o && c);
	return useBottomNavigationItems(useMemo(() => !de || !_ ? [] : [/* @__PURE__ */ jsx(Button, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: oe,
		label: s("cta.view_summary")
	}, "provider-script-summary")], [
		de,
		_,
		oe,
		s
	]), !!(_ && de)), _ ? /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col gap-3",
		children: [ue, /* @__PURE__ */ jsx(StatusText, { text: _ })]
	}) : ue;
}, ProviderScript = ({ providerStepKey: e, scriptId: t, redirectUrl: n, redirectData: r, redirectType: i }) => {
	let { debug: a, merchantId: o } = useContext(CashierContext), { translateKey: s } = useI18n(), { paymentId: c } = usePaymentStatus(), l = useFinishPayment(), d = useNavigate(), p = useRouter(), [g, _] = useState(null), [y, x] = useState(!1), C = useRef(null), ee = useRef(null), te = t ? providerScriptRegistry[t] : void 0, ne = useMemo(() => decodeRedirectPayload(r, a) ?? {}, [a, r]), T = useMemo(() => resolveProviderReturnUrl(ne), [ne]), re = useCallback((e, t) => {
		if (!e || typeof window > "u") return;
		let n = resolveNavigationUrl(e);
		if (!n) return;
		let r = `${n.pathname}${n.search}${n.hash}`;
		if (p.matchRoute({ to: r }, { includeSearch: !1 }) !== !1) {
			d({
				to: r,
				replace: t?.replace
			});
			return;
		}
		d({
			to: "/provider",
			search: {
				redirectUrl: n.toString(),
				redirectMethod: "GET",
				redirectType: "hidden_iframe"
			},
			replace: t?.replace
		});
	}, [d, p]), ie = useMemo(() => te ? resolveScriptUrl(te, n, a) : null, [
		te,
		n,
		a
	]), ae = useMemo(() => ie ? {
		scriptUrl: ie,
		data: ne,
		returnUrl: T,
		navigate: re
	} : null, [
		ne,
		re,
		T,
		ie
	]), oe = useMemo(() => !te || !ae ? null : renderScriptTemplate(te, ae), [te, ae]), se = te ? resolvePresentation(i, te) : "inline", ce = i === "hidden_iframe", le = useDelayedVisibility(y && !ce, { resetKey: `${t ?? "missing"}:${n}:${i ?? "iframe"}` });
	useEffect(() => {
		if (se !== "inline" || !te || !oe || !ae || !C.current) return;
		let e = !1, t = C.current;
		return (async () => {
			x(!0);
			try {
				ee.current?.();
				let n = await mountProviderScriptDefinition({
					definition: te,
					doc: t.ownerDocument,
					container: t,
					context: ae,
					template: oe
				});
				if (e) {
					n();
					return;
				}
				ee.current = n, _(null), x(!1);
			} catch (t) {
				if (a && console.error("[Cashier] Failed to mount script widget", t), e) return;
				_("error.payment_processing_failed"), x(!1);
			}
		})(), () => {
			e = !0, ee.current?.(), ee.current = null;
		};
	}, [
		a,
		te,
		se,
		ae,
		oe
	]), useEffect(() => {
		se !== "window" && closeProviderWindowHandle();
	}, [se]);
	let ue = g ?? (!t || !te || !ie || !oe || !ae ? "error.payment_processing_failed" : null), de = !!(c && o), fe = useCallback(() => {
		!c || !o || l({
			paymentId: c,
			merchantId: o,
			reachedSummaryViaProvider: !0
		});
	}, [
		l,
		o,
		c
	]);
	return useBottomNavigationItems(useMemo(() => !de || !ue ? [] : [/* @__PURE__ */ jsx(Button, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: fe,
		label: s("cta.view_summary")
	}, "provider-script-summary")], [
		de,
		fe,
		ue,
		s
	]), !!(ue && de), se !== "window"), ue ? /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ jsx(StatusText, { text: ue })
	}) : se === "window" && te && oe && ae ? /* @__PURE__ */ jsx(ProviderScriptWindow, {
		providerStepKey: e,
		definition: te,
		scriptTemplate: oe,
		scriptContext: ae,
		debug: a
	}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [le ? /* @__PURE__ */ jsx(StatusText, {
		text: "payment.summary.processing",
		theme: "info",
		withLoader: !0
	}) : null, /* @__PURE__ */ jsx("div", {
		ref: C,
		className: ce ? "absolute left-[-9999px] top-[-9999px] h-px w-px border-0 opacity-0 pointer-events-none" : "block h-full min-h-full w-full flex-1",
		"aria-hidden": ce || void 0,
		"data-testid": "provider-script-container"
	})] });
}, PROVIDER_IFRAME_TARGET = "cashier-provider-iframe", ProviderRedirect = ({ paymentId: e, redirectUrl: t, redirectMethod: n, redirectData: r, redirectType: i = "iframe", redirectScriptId: a }) => {
	let { debug: o } = useContext(CashierContext), { translateKey: s } = useI18n(), c = useRef(null), l = useMemo(() => decodeRedirectPayload(r, o), [o, r]), d = useMemo(() => l ? Object.entries(l) : [], [l]), p = normalizeRedirectMethod(n), g = p === "POST", _ = i === "window", y = i === "hidden_iframe", x = i === "script" || !!a, C = useMemo(() => buildProviderWindowStepKey({
		paymentId: e,
		redirectType: i,
		redirectMethod: p,
		redirectUrl: t,
		redirectData: r,
		redirectScriptId: a
	}), [
		p,
		e,
		r,
		a,
		i,
		t
	]), ee = useDelayedVisibility(y, { resetKey: `${i}:${t}:${a ?? ""}` }), te = !x && g && !_, ne = s("provider.iframe.title"), T = ee ? /* @__PURE__ */ jsx(StatusText, {
		text: "payment.summary.processing",
		theme: "info",
		withLoader: !0
	}) : null;
	return useEffect(() => {
		te && c.current?.submit();
	}, [t, te]), useEffect(() => {
		_ || x || closeProviderWindowHandle();
	}, [x, _]), x ? /* @__PURE__ */ jsxs(Fragment$1, { children: [T, /* @__PURE__ */ jsx(ProviderScript, {
		providerStepKey: C,
		scriptId: a,
		redirectUrl: t,
		redirectData: r,
		redirectType: i
	})] }) : _ ? /* @__PURE__ */ jsx(ProviderWindow, {
		providerStepKey: C,
		redirectUrl: t,
		redirectMethod: p,
		hiddenFields: d
	}) : g ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
		T,
		/* @__PURE__ */ jsx("form", {
			ref: c,
			method: "POST",
			action: t,
			target: PROVIDER_IFRAME_TARGET,
			hidden: !0,
			children: d.map(([e, t]) => /* @__PURE__ */ jsx("input", {
				name: e,
				value: t,
				type: "hidden"
			}, e))
		}),
		/* @__PURE__ */ jsx(ProviderIframe, {
			name: PROVIDER_IFRAME_TARGET,
			title: ne,
			src: "about:blank",
			hiddenIframe: y
		})
	] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [T, /* @__PURE__ */ jsx(ProviderIframe, {
		title: ne,
		src: t,
		hiddenIframe: y
	})] });
}, PROVIDER_FORM_TARGET = "cashier-provider-form", PROVIDER_FORM_ERROR_TOAST_ID = "cashier-provider-form-error", ProviderFormNavigation = ({ submitLabel: e, submitDisabled: t, submitLoading: n, onSubmit: r }) => (useNavigationItems("bottom", useMemo(() => [/* @__PURE__ */ jsx(Button, {
	variant: "secondary",
	size: "xl",
	fullWidth: !0,
	disabled: t,
	loading: n,
	onClick: r,
	label: e
}, "cashier-provider-submit")], [
	r,
	t,
	e,
	n
])), null), resolveActionUrl = (e) => {
	if (!e) return null;
	let t = typeof window > "u" ? "http://localhost" : window.location.origin;
	try {
		let n = new URL(e, t);
		return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.toString();
	} catch {
		return null;
	}
}, ensureValidForm = async (e) => e.current ? !hasAnyError(await e.current.validateForm()) : !0, ProviderForm = ({ form: e }) => {
	let { translateKey: t } = useI18n(), { paymentStatusMessage: n, isPaymentFailed: r } = usePaymentStatus(), { toast: i, dismiss: a } = useToast(), o = useRef(null), s = useRef(null), [c, l] = useState(null), d = useMemo(() => resolveActionUrl(e.actionUrl), [e.actionUrl]), p = e.fields, g = useMemo(() => {
		try {
			return JSON.stringify({
				actionUrl: e.actionUrl,
				fields: p
			});
		} catch {
			return `${e.actionUrl}-${String(p.length)}`;
		}
	}, [p, e.actionUrl]), _ = c === g && !r, y = useMemo(() => buildInitialValues(p, {}), [p]), x = useCallback(async (e, t) => {
		t.setSubmitting(!1), !_ && (!d || !o.current || await ensureValidForm(s) && (l(g), o.current.submit()));
	}, [
		g,
		_,
		d
	]), C = useCallback((e) => validatePaymentFields(p, e, t), [p, t]), ee = r ? t(n ?? "error.payment_processing_failed") : null;
	return useEffect(() => {
		if (!ee) {
			a(PROVIDER_FORM_ERROR_TOAST_ID);
			return;
		}
		i.error(ee, {
			id: PROVIDER_FORM_ERROR_TOAST_ID,
			persistent: !0
		});
	}, [
		a,
		ee,
		i
	]), useEffect(() => () => {
		a(PROVIDER_FORM_ERROR_TOAST_ID);
	}, [a]), d ? /* @__PURE__ */ jsx(Formik, {
		initialValues: y,
		onSubmit: x,
		validate: C,
		innerRef: s,
		enableReinitialize: !0,
		validateOnMount: !0,
		children: ({ values: e, errors: n, initialValues: r, submitForm: i, isValid: a, dirty: s }) => {
			let c = !Object.values(r).some(hasMeaningfulValue), l = hasAnyError(n), g = hasMissingRequiredFields(p, e), y = _ || !a || l || g || !s && c, x = _, C = t("payment.submit");
			return /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx("form", {
					ref: o,
					className: `${CASHIER_FORM_GRID_CLASS_NAME} pt-2`,
					method: "POST",
					action: d,
					target: PROVIDER_FORM_TARGET,
					noValidate: !0,
					onSubmit: (e) => {
						e.preventDefault(), i();
					},
					children: /* @__PURE__ */ jsx(PaymentFieldList, {
						fields: p,
						translateKey: t,
						disabled: _
					})
				}),
				/* @__PURE__ */ jsx(ProviderFormNavigation, {
					submitLabel: C,
					submitDisabled: y,
					submitLoading: x,
					onSubmit: () => {
						i();
					}
				}),
				/* @__PURE__ */ jsx(ProviderIframe, {
					name: PROVIDER_FORM_TARGET,
					title: t("provider.iframe.title"),
					hiddenIframe: !0
				})
			] });
		}
	}) : /* @__PURE__ */ jsx("div", {
		"data-theme": "danger",
		className: "text-sm text-[var(--pc-color-text)]",
		children: t("error.payment_processing_failed")
	});
}, Route$3 = createFileRoute("/provider/")({
	component: RouteComponent,
	validateSearch: (e) => {
		let t = typeof e.redirectUrl == "string" ? e.redirectUrl : void 0, n = typeof e.paymentId == "string" ? e.paymentId : void 0, r = typeof e.redirectData == "string" ? e.redirectData : void 0, i = parseRedirectType(e.redirectType);
		return {
			redirectUrl: t,
			paymentId: n,
			redirectMethod: e.redirectMethod === "POST" ? "POST" : "GET",
			redirectData: r,
			redirectType: i,
			redirectScriptId: typeof e.redirectScriptId == "string" ? e.redirectScriptId : void 0
		};
	}
});
function RouteComponent() {
	let e = useCashierDomHooks(), t = useSearch({ strict: !1 }), { translateKey: n } = useI18n(), { payment: r, paymentStatusMessage: i, isPaymentFailed: a, clearPaymentState: o } = usePaymentStatus(), s = r?.paymentId ?? t.paymentId, c = r?.redirect, l = r?.form ?? null, d = !!c?.url, p = !!l?.actionUrl && !d, g = encodeRedirectPayload(c?.data), _ = !!(s && !d && !p && !(a && i)), y = useDelayedVisibility(_, { resetKey: s }), x = y ? /* @__PURE__ */ jsx(StatusHeader, {
		title: n("payment.summary.processing"),
		theme: "secondary",
		leading: /* @__PURE__ */ jsx(StatusHeaderLoader, {})
	}) : void 0;
	useEffect(() => () => {
		o();
	}, [o]);
	let C;
	return C = _ ? null : d && c && !p ? /* @__PURE__ */ jsx(ProviderRedirect, {
		paymentId: s,
		redirectUrl: c.url,
		redirectMethod: c.method,
		redirectData: g,
		redirectType: c.type,
		redirectScriptId: c.scriptId
	}) : p && l ? /* @__PURE__ */ jsx(ProviderForm, { form: l }) : a && i ? /* @__PURE__ */ jsx(StatusText, { text: i }) : /* @__PURE__ */ jsx(MissingRedirectMessage, { message: n("error.provider_missing_redirect_url") }), /* @__PURE__ */ jsxs(SubContainer, {
		id: e.id("route-provider"),
		className: e.className("route-provider"),
		contentClassName: e.className("route-provider-content"),
		header: x,
		stickyHeader: y,
		fitted: _ || !p,
		fullHeight: !0,
		children: [/* @__PURE__ */ jsx(ProviderStatusStream, { paymentId: s }), C]
	});
}
function MissingRedirectMessage({ message: e }) {
	return /* @__PURE__ */ jsx("div", {
		"data-theme": "danger",
		className: "text-sm text-[var(--pc-color-text)]",
		children: e
	});
}
//#endregion
//#region src/hooks/useBonusSelection.ts
var useBonusSelection = () => {
	let { selectedBonusCode: e, setCashierState: t } = useContext(CashierContext), n = useCallback((e) => {
		t((t) => (t.selectedBonusCode ?? null) === e ? t : {
			...t,
			selectedBonusCode: e
		});
	}, [t]), r = useCallback(() => {
		n(null);
	}, [n]), i = useCallback((e) => {
		t((t) => {
			let n = t.selectedBonusCode ?? null;
			if (n && e.some((e) => e.code === n)) return t;
			let r = e.find((e) => e.preselected)?.code ?? null;
			return n === r ? t : {
				...t,
				selectedBonusCode: r
			};
		});
	}, [t]);
	return {
		selectedBonusCode: e ?? null,
		selectBonusCode: n,
		clearBonusSelection: r,
		ensureDefaultSelection: i
	};
};
//#endregion
//#region src/ui/BonusTerms.tsx
function BonusTerms({ termsKey: e }) {
	let { translateKey: t } = useI18n(), n = t(e);
	return n ? /* @__PURE__ */ jsx(Markdown, {
		content: n,
		className: "text-[var(--pc-color-text-muted)]"
	}) : null;
}
//#endregion
//#region src/ui/BonusCloseNotice.tsx
function BonusCloseNotice({ reasons: e, align: t = "left" }) {
	let { translateKey: n } = useI18n(), { formatCurrencyValue: r } = useCashierValueFormatter(), i = useMemo(() => e.map((e) => ({
		key: `${e.type}-${String(e.delta)}`,
		label: formatBonusCloseReasonLabel(e, n, r)
	})), [
		r,
		e,
		n
	]);
	return i.length === 0 ? null : /* @__PURE__ */ jsx("div", {
		"data-theme": "success",
		className: ["text-xs @sm:text-sm text-[var(--pc-color-text)] italic", t === "center" ? "text-center" : "text-left"].join(" "),
		children: i.map((e) => /* @__PURE__ */ jsx("p", { children: e.label }, e.key))
	});
}
//#endregion
//#region src/ui/BonusesList.tsx
var BONUS_TERMS_TITLE_KEY = "bonus.terms.title", SYNTHETIC_SKIP_ITEM_NAME = "__cashier_bonus_skip__", SYNTHETIC_SKIP_ITEM_SLUG = "skip";
function BonusesList({ bonuses: e, selectedBonusCode: t, onSelect: n, onSkip: r, selectable: i = !0, showSkipOption: a = !1, isSkipSelected: o = !1, listStyle: s, compact: c, stacked: l = !1, itemVariant: d = "neutral", itemAppearance: p = "solid", domScope: g, animateItems: _ = !1 }) {
	let y = useCashierDomHooks(), { uiListStyle: x } = useContext(CashierContext), { translateKey: C } = useI18n(), { formatCurrencyValue: ee } = useCashierValueFormatter(), te = resolveBonusListStyle(s ?? x), ne = te === CashierLayoutListType.GRID, T = g ? y.token(g, "list") : null, re = T ? y.id("bonus-list", { slug: T }) : void 0, ie = { staggerMode: "compressed-tail" }, ae = [...a && e.some(({ status: e }) => e === "available") ? [{ type: "skip" }] : [], ...e.map((e) => ({
		type: "bonus",
		availability: e
	}))];
	return /* @__PURE__ */ jsx(SelectableListLayout, {
		id: re,
		className: twJoin(y.className("bonus-list", T ? { slug: T } : void 0), "w-full"),
		contentClassName: _ ? ENTRANCE_ANIMATION_LIST_SURFACE_CLASSNAME : void 0,
		contentStyle: _ ? resolveSelectionListSurfaceAnimationStyle(ie) : void 0,
		listStyle: te,
		compact: c,
		stacked: l,
		children: ae.map((e, a) => {
			if (e.type === "skip") return /* @__PURE__ */ jsx(PaymentTypeListItem, {
				domSlug: SYNTHETIC_SKIP_ITEM_SLUG,
				name: SYNTHETIC_SKIP_ITEM_NAME,
				title: "",
				description: "bonus.interactive_prompt.no_bonus",
				logoContent: /* @__PURE__ */ jsx(CloseIcon, { className: "h-full w-full" }),
				listStyle: te,
				compact: c,
				onSelect: r ? () => {
					r();
				} : void 0,
				isSelected: i && o,
				interactive: !!r,
				hoverMode: i ? "none" : void 0,
				variant: d,
				appearance: p,
				animationClassName: _ ? ENTRANCE_ANIMATION_LIST_ITEM_CLASSNAME : void 0,
				animationStyle: _ ? resolveSelectionListAnimationStyle(a, ae.length, "forward", ie) : void 0
			}, SYNTHETIC_SKIP_ITEM_NAME);
			let { bonus: s, status: l, closeReasons: g } = e.availability, y = l === "close", x = i && !y, T = ne && y ? g.map((e, t) => {
				let n = formatBonusCloseReasonLabel(e, C, ee);
				return n ? {
					id: `bonus-close-${s.code}-${String(t)}`,
					label: n,
					variant: "success"
				} : null;
			}).filter((e) => e !== null) : [], re = !ne && y ? /* @__PURE__ */ jsx(BonusCloseNotice, { reasons: g }) : null, oe = s.termsAndConditions, se = re ? /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-1",
				children: re
			}) : null, ce = oe ? {
				titleKey: BONUS_TERMS_TITLE_KEY,
				content: /* @__PURE__ */ jsx(BonusTerms, { termsKey: oe })
			} : void 0;
			return /* @__PURE__ */ jsx(PaymentTypeListItem, {
				domSlug: s.code,
				name: s.code,
				title: s.title,
				description: s.description,
				logo: s.logo,
				listStyle: te,
				compact: c,
				onSelect: n,
				isSelected: i && t === s.code,
				interactive: !y,
				isDisabled: y,
				hoverMode: x ? "none" : void 0,
				meta: se,
				badges: T.length > 0 ? T : void 0,
				infoDrawer: ce,
				variant: d,
				appearance: p,
				animationClassName: _ ? ENTRANCE_ANIMATION_LIST_ITEM_CLASSNAME : void 0,
				animationStyle: _ ? resolveSelectionListAnimationStyle(a, ae.length, "forward", ie) : void 0
			}, s.code);
		})
	});
}
//#endregion
//#region src/routes/bonus/index.tsx
var INTERACTIVE_PROMPT_ROUTE_HEADER_GUTTER_CLASSNAME$1 = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", INTERACTIVE_PROMPT_ROUTE_CONTENT_SPACING_CLASSNAME$1 = "pt-2.5 @md:pt-3", BONUS_FULL_CLAIM_EPSILON = .001, BONUS_PROGRESS_ICON_SLOT_CLASSNAME = "!overflow-visible", isFullClaimAmount = ({ amount: e, fullClaimAmount: t, claimPercentage: n }) => typeof e == "number" && typeof t == "number" ? e >= t - BONUS_FULL_CLAIM_EPSILON : typeof n == "number" && n >= 100 - BONUS_FULL_CLAIM_EPSILON, formatClaimPercentageForTitle = (e) => typeof e != "number" || !Number.isFinite(e) ? "0" : String(Math.min(99, Math.round(e))), Route$2 = createFileRoute("/bonus/")({ component: BonusView });
function BonusView() {
	let e = useCashierDomHooks(), t = useNavigate(), { translateKey: n } = useI18n(), { selectedPaymentType: r, uiComboView: i, lockAmount: a, uiInteractivePrompts: o, method: s, locale: c, uiListSelectable: l, initialAmount: d, onBonusSelected: p, onBonusDeselected: g, onBonusToppedUp: _, resetFlowOnBack: y, setCashierState: x } = useContext(CashierContext), { getPaymentType: C } = usePaymentTypes(), { bonuses: ee, getBonusAvailabilityForPaymentType: te, getAvailableBonusesForPaymentType: ne } = useBonuses(), { selectedBonusCode: T, selectBonusCode: re, ensureDefaultSelection: ie } = useBonusSelection(), { formatCurrencyValue: ae } = useCashierValueFormatter(), [oe, se] = useState(!1), [ce] = useState(() => parseAmountValue(d)), [le, ue] = useState(null), [de, fe] = useState({}), pe = useRef({}), [me, he] = useState([]), ge = resolveDefaultRoute({
		uiComboView: i,
		lockAmount: a,
		method: s
	}), { canGoBack: _e, handleBack: ve } = useBackNavigation({
		defaultRoute: ge,
		useHistory: !y,
		replace: y || !i
	}), ye = r ? C(r) : null, be = useMemo(() => te(ye), [te, ye]), xe = useMemo(() => sortBonusAvailability(be), [be]), Se = useMemo(() => ne(ye), [ne, ye]), Ce = useMemo(() => xe.some((e) => e.status === "available"), [xe]), we = useMemo(() => parseAmountValue(d), [d]), Te = ye ? Se.length > 0 : hasConfiguredBonuses(ee), Ee = l, De = useMemo(() => T ? Se.find((e) => e.code === T) ?? null : null, [Se, T]), Oe = useMemo(() => De ? resolveBonusAwardDetails(De, we) : null, [we, De]), ke = useMemo(() => De, [De]), Ae = Oe, je = Ae?.fullClaimAmount ?? null, Me = je === null ? null : formatAmountForInput(je), Ne = Me ? getAmountLimitStatus(Me, ye?.limits) : null, Pe = ke && je !== null ? [
		r ?? "",
		ke.code,
		String(je)
	].join(":") : null, Fe = useCallback((e) => {
		if (!e || we === null) return !1;
		let t = resolveBonusAwardDetails(e, we), n = t?.fullClaimAmount ?? null;
		if (n === null || n <= we || isFullClaimAmount({
			amount: we,
			fullClaimAmount: n,
			claimPercentage: t?.claimPercentage
		})) return !1;
		let r = getAmountLimitStatus(formatAmountForInput(n), ye?.limits);
		return !(r.isOutOfRange || r.isIncomplete);
	}, [we, ye?.limits]), Ie = !!(ke && Ae && je !== null && Ne && Fe(ke) && le !== Pe), Le = Ee || Ie ? T : null, Re = useMemo(() => Le ? Se.find((e) => e.code === Le) ?? null : null, [Se, Le]), ze = useMemo(() => Re ? resolveBonusAwardDetails(Re, we) : null, [we, Re]), Be = useMemo(() => Le ? Se.find((e) => e.code === Le) ?? null : null, [Se, Le]), Ve = useMemo(() => Be ? resolveBonusAwardDetails(Be, we) : null, [we, Be]), He = useMemo(() => {
		if (!Le) return null;
		let e = de[Le];
		return !e || !Be || Ie || we === null || we < e.targetAmount - .001 ? null : e;
	}, [
		we,
		Be,
		Le,
		Ie,
		de
	]);
	useEffect(() => {
		if (!r) {
			t({
				to: ge,
				replace: !0
			});
			return;
		}
		Te || t({
			to: "/pt/$id",
			params: { id: r },
			replace: !0
		});
	}, [
		ge,
		t,
		r,
		Te
	]), useEffect(() => {
		let e = !!(T && Se.some((e) => e.code === T));
		if (!(T && e)) {
			if (T && !e) {
				ie(Se);
				return;
			}
			oe || ie(Se);
		}
	}, [
		Se,
		ie,
		oe,
		T
	]);
	let Ue = useCallback((e) => {
		let n = Se.find((t) => t.code === e);
		if (n) {
			if (!Ee) {
				if (ue(null), se(!0), re(e), p && p(n), !r || Fe(n)) return;
				t({
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			T !== e && (ue(null), se(!0), re(e), p && p(n));
		}
	}, [
		Se,
		Ee,
		t,
		p,
		re,
		T,
		r,
		Fe
	]), We = useCallback(() => {
		r && t({
			to: "/pt/$id",
			params: { id: r }
		});
	}, [t, r]), Ge = useCallback(() => {
		Ee && T === null || (ue(null), se(!0), De && g && g(De), re(null), !Ee && r && t({
			to: "/pt/$id",
			params: { id: r }
		}));
	}, [
		Ee,
		t,
		g,
		re,
		T,
		De,
		r
	]), Ke = useCallback(() => {
		if (!Me || !ke || je === null || we === null) return;
		let e = ye ? ne(ye, { amount: je }) : Se, n = /* @__PURE__ */ new Map();
		for (let e of Se) n.set(e.code, e);
		for (let t of e) n.set(t.code, t);
		let i = Array.from(n.values()).reduce((e, t) => {
			let n = resolveBonusAwardDetails(t, we), r = resolveBonusAwardDetails(t, je);
			return !r || !isFullClaimAmount({
				amount: je,
				fullClaimAmount: r.fullClaimAmount,
				claimPercentage: r.claimPercentage
			}) || isFullClaimAmount({
				amount: we,
				fullClaimAmount: n?.fullClaimAmount,
				claimPercentage: n?.claimPercentage
			}) || (e[t.code] = { targetAmount: je }), e;
		}, {});
		x((e) => {
			let t = r ? {
				paymentTypeName: r,
				method: s,
				amount: e.initialAmount
			} : null;
			return {
				...e,
				initialAmount: Me,
				paymentFormDraft: t ? retargetPaymentFormDraftAmount(e.paymentFormDraft, t, Me) : e.paymentFormDraft,
				comboViewFormDraft: t ? retargetPaymentFormDraftAmount(e.comboViewFormDraft, t, Me) : e.comboViewFormDraft
			};
		}), fe((e) => ({
			...e,
			...i
		})), _?.({
			bonus: ke,
			previousAmount: we,
			nextAmount: je,
			addedAmount: je - we,
			fullClaimAmount: je
		}), !Ee && r && t({
			to: "/pt/$id",
			params: { id: r }
		});
	}, [
		we,
		Se,
		ke,
		ne,
		Ee,
		t,
		_,
		ye,
		r,
		x,
		s,
		je,
		Me
	]), qe = useCallback(() => {
		Pe && (ue(Pe), !Ee && r && t({
			to: "/pt/$id",
			params: { id: r }
		}));
	}, [
		Ee,
		t,
		r,
		Pe
	]), Je = n(Le ? "cta.claim" : "cta.skip"), Ye = !r, Xe = n("cta.back"), Ze = n(s === CashierMethods.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(c), Qe = useCallback((e) => formatTemplate(formatTemplate("You’re claiming the full offer with a {amount} {method}!", "amount", e), "method", Ze), [Ze]), $e = useCallback((e) => /* @__PURE__ */ jsx(CircularProgress, {
		value: e,
		strokeWidth: 5.5,
		className: twJoin("h-14 w-14", "@max-md/interactive-prompt:h-12 @max-md/interactive-prompt:w-12"),
		contentClassName: "inset-[20%]",
		ariaLabel: [
			"Bonus claim progress",
			String(Math.round(e)),
			"percent"
		].join(" "),
		children: /* @__PURE__ */ jsx("div", {
			className: "flex h-[82%] w-[82%] items-center justify-center",
			children: /* @__PURE__ */ jsx(PresentIcon, {})
		})
	}), []), et = useMemo(() => new Set(me), [me]), rt = useCallback((e, t) => !e || typeof t != "number" || !Number.isFinite(t) ? !1 : isFullClaimAmount({ claimPercentage: t }) ? et.has(e) : !0, [et]);
	useEffect(() => {
		let e = [
			ke ? {
				bonusCode: ke.code,
				claimPercentage: Ae?.claimPercentage
			} : null,
			Re ? {
				bonusCode: Re.code,
				claimPercentage: ze?.claimPercentage
			} : null,
			Be ? {
				bonusCode: Be.code,
				claimPercentage: Ve?.claimPercentage
			} : null
		].filter((e) => e !== null);
		he((t) => {
			let n = new Set(t), r = !1;
			for (let { bonusCode: t, claimPercentage: i } of e) {
				let e = isFullClaimAmount({ claimPercentage: i }), a = pe.current[t];
				e ? a === !1 && !n.has(t) && (n.add(t), r = !0) : n.delete(t) && (r = !0), pe.current[t] = e;
			}
			return r ? [...n] : t;
		});
	}, [
		Be,
		Ve,
		ke,
		Ae,
		Re,
		ze
	]);
	let it = useMemo(() => {
		let e = {
			legacyTitle: n("cta.choose_bonus"),
			titleKey: "cta.interactive_prompt.choose_bonus.title",
			bodyKey: "cta.interactive_prompt.choose_bonus.desc",
			icon: /* @__PURE__ */ jsx(PresentIcon, {})
		}, t = we === null ? void 0 : ae(we);
		if (Ie && ke && Ae) {
			let t = Ae.claimPercentage, n = rt(ke.code, t);
			return {
				...e,
				titleKey: "bonus.top_up.title",
				titleValues: { claimPercentage: formatClaimPercentageForTitle(Ae.claimPercentage) },
				bodyKey: "bonus.top_up.desc",
				bodyValues: {
					amount: je !== null && we !== null ? ae(je - we) : "",
					targetAmount: ae(Ae.fullClaimAmount)
				},
				icon: !n || typeof t != "number" ? /* @__PURE__ */ jsx(PresentIcon, {}) : $e(t),
				iconSlotClassName: n ? BONUS_PROGRESS_ICON_SLOT_CLASSNAME : void 0,
				tone: "secondary",
				actions: [{
					id: "bonus-top-up-dismiss",
					labelKey: "cta.deny_topup",
					onClick: qe,
					variant: "neutral"
				}, {
					id: "bonus-top-up",
					labelKey: "cta.confirm_topup",
					onClick: Ke,
					variant: "secondary"
				}]
			};
		}
		if (He && Be) {
			let r = we === null || ce === null ? null : we - ce, i = Ve?.claimPercentage, a = rt(Be.code, i);
			return {
				...e,
				titleKey: "bonus.selected.title",
				legacyBody: t ? Qe(t) : void 0,
				bodyKey: t ? "bonus.selected.desc" : void 0,
				preferLegacyBody: !0,
				bodyValues: t ? {
					amount: t,
					method: Ze
				} : void 0,
				icon: !a || typeof i != "number" ? /* @__PURE__ */ jsx(PresentIcon, {}) : $e(i),
				iconSlotClassName: a ? BONUS_PROGRESS_ICON_SLOT_CLASSNAME : void 0,
				tone: "secondary",
				footer: /* @__PURE__ */ jsx("p", {
					className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
					children: formatTemplate(n("bonus.top_up.success"), "amount", ae(r ?? 0))
				})
			};
		}
		if (Re) {
			let n = !!(ze && we !== null), r = isFullClaimAmount({
				amount: we,
				fullClaimAmount: ze?.fullClaimAmount,
				claimPercentage: ze?.claimPercentage
			}), i = n && !r, a = i ? "bonus.top_up.title" : "bonus.selected.title", o = i ? { claimPercentage: formatClaimPercentageForTitle(ze?.claimPercentage) } : void 0, s, c;
			i && ze && we !== null ? (s = "bonus.top_up.desc", c = {
				amount: ae(ze.fullClaimAmount - we),
				targetAmount: ae(ze.fullClaimAmount)
			}) : t && (s = "bonus.selected.desc", c = {
				amount: t,
				method: Ze
			});
			let l = rt(Re.code, ze?.claimPercentage), d = ze?.claimPercentage;
			return {
				...e,
				titleKey: a,
				titleValues: o,
				legacyBody: s === "bonus.selected.desc" && t ? Qe(t) : void 0,
				bodyKey: s,
				preferLegacyBody: s === "bonus.selected.desc",
				bodyValues: c,
				icon: !l || typeof d != "number" ? /* @__PURE__ */ jsx(PresentIcon, {}) : $e(d),
				iconSlotClassName: l ? BONUS_PROGRESS_ICON_SLOT_CLASSNAME : void 0,
				tone: i ? "secondary" : void 0
			};
		}
		return e;
	}, [
		we,
		ke,
		Ae,
		ce,
		ae,
		Qe,
		qe,
		Ke,
		Ze,
		Re,
		ze,
		Ie,
		He,
		Be,
		Ve,
		je,
		n,
		$e,
		rt
	]);
	return useNavigationItems("bottom", useMemo(() => {
		let e = [];
		return (y || _e) && e.push(/* @__PURE__ */ jsx(Button, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			onClick: ve,
			label: Xe
		}, "cashier-bonus-back")), Ee && e.push(/* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: We,
			disabled: Ye,
			label: Je
		}, "cashier-bonus-continue")), e;
	}, [
		Xe,
		_e,
		Je,
		ve,
		We,
		Ye,
		Ee,
		y
	]), !!((_e || y || Ee) && r && Te)), !r || !Te ? null : /* @__PURE__ */ jsx(SubContainer, {
		id: e.id("route-bonus"),
		className: e.className("route-bonus"),
		title: o ? void 0 : n("cta.choose_bonus"),
		header: o ? /* @__PURE__ */ jsx(InteractivePromptHeader, {
			content: it,
			className: INTERACTIVE_PROMPT_ROUTE_HEADER_GUTTER_CLASSNAME$1
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ jsx("div", {
			className: twJoin(e.className("route-bonus-content"), "px-1.5 @sm:px-3 pb-3", INTERACTIVE_PROMPT_ROUTE_CONTENT_SPACING_CLASSNAME$1),
			children: /* @__PURE__ */ jsx(BonusesList, {
				bonuses: xe,
				domScope: "route-bonus",
				animateItems: !0,
				selectedBonusCode: Le,
				onSelect: Ue,
				onSkip: Ge,
				selectable: Ee,
				showSkipOption: Ce,
				isSkipSelected: Ee && Le === null
			})
		})
	});
}
//#endregion
//#region ../../node_modules/lottie-web/build/player/lottie.js
var require_lottie = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	typeof document < "u" && typeof navigator < "u" && (function(e, t) {
		typeof exports == "object" && module !== void 0 ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self, e.lottie = t());
	})(exports, (function() {
		var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(e) {
			_useWebWorker = !!e;
		}, getWebWorker = function() {
			return _useWebWorker;
		}, setLocationHref = function(e) {
			locationHref = e;
		}, getLocationHref = function() {
			return locationHref;
		};
		function createTag(e) {
			return document.createElement(e);
		}
		function extendPrototype(e, t) {
			var n, r = e.length, i;
			for (n = 0; n < r; n += 1) for (var a in i = e[n].prototype, i) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a]);
		}
		function getDescriptor(e, t) {
			return Object.getOwnPropertyDescriptor(e, t);
		}
		function createProxyFunction(e) {
			function t() {}
			return t.prototype = e, t;
		}
		var audioControllerFactory = function() {
			function e(e) {
				this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
			}
			return e.prototype = {
				addAudio: function(e) {
					this.audios.push(e);
				},
				pause: function() {
					var e, t = this.audios.length;
					for (e = 0; e < t; e += 1) this.audios[e].pause();
				},
				resume: function() {
					var e, t = this.audios.length;
					for (e = 0; e < t; e += 1) this.audios[e].resume();
				},
				setRate: function(e) {
					var t, n = this.audios.length;
					for (t = 0; t < n; t += 1) this.audios[t].setRate(e);
				},
				createAudio: function(e) {
					return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({ src: [e] }) : {
						isPlaying: !1,
						play: function() {
							this.isPlaying = !0;
						},
						seek: function() {
							this.isPlaying = !1;
						},
						playing: function() {},
						rate: function() {},
						setVolume: function() {}
					};
				},
				setAudioFactory: function(e) {
					this.audioFactory = e;
				},
				setVolume: function(e) {
					this._volume = e, this._updateVolume();
				},
				mute: function() {
					this._isMuted = !0, this._updateVolume();
				},
				unmute: function() {
					this._isMuted = !1, this._updateVolume();
				},
				getVolume: function() {
					return this._volume;
				},
				_updateVolume: function() {
					var e, t = this.audios.length;
					for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * +!this._isMuted);
				}
			}, function() {
				return new e();
			};
		}(), createTypedArray = function() {
			function e(e, t) {
				var n = 0, r = [], i;
				switch (e) {
					case "int16":
					case "uint8c":
						i = 1;
						break;
					default:
						i = 1.1;
						break;
				}
				for (n = 0; n < t; n += 1) r.push(i);
				return r;
			}
			function t(t, n) {
				return t === "float32" ? new Float32Array(n) : t === "int16" ? new Int16Array(n) : t === "uint8c" ? new Uint8ClampedArray(n) : e(t, n);
			}
			return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? t : e;
		}();
		function createSizedArray(e) {
			return Array.apply(null, { length: e });
		}
		function _typeof$6(e) {
			"@babel/helpers - typeof";
			return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$6(e);
		}
		var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = !1, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
		(function() {
			var e = /* @__PURE__ */ "abs.acos.acosh.asin.asinh.atan.atanh.atan2.ceil.cbrt.expm1.clz32.cos.cosh.exp.floor.fround.hypot.imul.log.log1p.log2.log10.max.min.pow.random.round.sign.sin.sinh.sqrt.tan.tanh.trunc.E.LN10.LN2.LOG10E.LOG2E.PI.SQRT1_2.SQRT2".split("."), t, n = e.length;
			for (t = 0; t < n; t += 1) BMMath[e[t]] = Math[e[t]];
		})();
		function ProjectInterface$1() {
			return {};
		}
		BMMath.random = Math.random, BMMath.abs = function(e) {
			if (_typeof$6(e) === "object" && e.length) {
				var t = createSizedArray(e.length), n, r = e.length;
				for (n = 0; n < r; n += 1) t[n] = Math.abs(e[n]);
				return t;
			}
			return Math.abs(e);
		};
		var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
		function roundValues(e) {
			_shouldRoundValues = !!e;
		}
		function bmRnd(e) {
			return _shouldRoundValues ? Math.round(e) : e;
		}
		function styleDiv(e) {
			e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d";
		}
		function BMEnterFrameEvent(e, t, n, r) {
			this.type = e, this.currentTime = t, this.totalTime = n, this.direction = r < 0 ? -1 : 1;
		}
		function BMCompleteEvent(e, t) {
			this.type = e, this.direction = t < 0 ? -1 : 1;
		}
		function BMCompleteLoopEvent(e, t, n, r) {
			this.type = e, this.currentLoop = n, this.totalLoops = t, this.direction = r < 0 ? -1 : 1;
		}
		function BMSegmentStartEvent(e, t, n) {
			this.type = e, this.firstFrame = t, this.totalFrames = n;
		}
		function BMDestroyEvent(e, t) {
			this.type = e, this.target = t;
		}
		function BMRenderFrameErrorEvent(e, t) {
			this.type = "renderFrameError", this.nativeError = e, this.currentTime = t;
		}
		function BMConfigErrorEvent(e) {
			this.type = "configError", this.nativeError = e;
		}
		function BMAnimationConfigErrorEvent(e, t) {
			this.type = e, this.nativeError = t;
		}
		var createElementID = function() {
			var e = 0;
			return function() {
				return e += 1, idPrefix$1 + "__lottie_element_" + e;
			};
		}();
		function HSVtoRGB(e, t, n) {
			var r, i, a, o = Math.floor(e * 6), s = e * 6 - o, c = n * (1 - t), l = n * (1 - s * t), d = n * (1 - (1 - s) * t);
			switch (o % 6) {
				case 0:
					r = n, i = d, a = c;
					break;
				case 1:
					r = l, i = n, a = c;
					break;
				case 2:
					r = c, i = n, a = d;
					break;
				case 3:
					r = c, i = l, a = n;
					break;
				case 4:
					r = d, i = c, a = n;
					break;
				case 5:
					r = n, i = c, a = l;
					break;
				default: break;
			}
			return [
				r,
				i,
				a
			];
		}
		function RGBtoHSV(e, t, n) {
			var r = Math.max(e, t, n), i = Math.min(e, t, n), a = r - i, o, s = r === 0 ? 0 : a / r, c = r / 255;
			switch (r) {
				case i:
					o = 0;
					break;
				case e:
					o = t - n + a * (t < n ? 6 : 0), o /= 6 * a;
					break;
				case t:
					o = n - e + a * 2, o /= 6 * a;
					break;
				case n:
					o = e - t + a * 4, o /= 6 * a;
					break;
				default: break;
			}
			return [
				o,
				s,
				c
			];
		}
		function addSaturationToRGB(e, t) {
			var n = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
			return n[1] += t, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2]);
		}
		function addBrightnessToRGB(e, t) {
			var n = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
			return n[2] += t, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2]);
		}
		function addHueToRGB(e, t) {
			var n = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
			return n[0] += t / 360, n[0] > 1 ? --n[0] : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2]);
		}
		var rgbToHex = function() {
			var e = [], t, n;
			for (t = 0; t < 256; t += 1) n = t.toString(16), e[t] = n.length === 1 ? "0" + n : n;
			return function(t, n, r) {
				return t < 0 && (t = 0), n < 0 && (n = 0), r < 0 && (r = 0), "#" + e[t] + e[n] + e[r];
			};
		}(), setSubframeEnabled = function(e) {
			subframeEnabled = !!e;
		}, getSubframeEnabled = function() {
			return subframeEnabled;
		}, setExpressionsPlugin = function(e) {
			expressionsPlugin = e;
		}, getExpressionsPlugin = function() {
			return expressionsPlugin;
		}, setExpressionInterfaces = function(e) {
			expressionsInterfaces = e;
		}, getExpressionInterfaces = function() {
			return expressionsInterfaces;
		}, setDefaultCurveSegments = function(e) {
			defaultCurveSegments = e;
		}, getDefaultCurveSegments = function() {
			return defaultCurveSegments;
		}, setIdPrefix = function(e) {
			idPrefix$1 = e;
		}, getIdPrefix = function() {
			return idPrefix$1;
		};
		function createNS(e) {
			return document.createElementNS(svgNS, e);
		}
		function _typeof$5(e) {
			"@babel/helpers - typeof";
			return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$5(e);
		}
		var dataManager = function() {
			var e = 1, t = [], n, r, i = {
				onmessage: function() {},
				postMessage: function(e) {
					n({ data: e });
				}
			}, a = { postMessage: function(e) {
				i.onmessage({ data: e });
			} };
			function o(e) {
				if (window.Worker && window.Blob && getWebWorker()) {
					var t = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], { type: "text/javascript" }), r = URL.createObjectURL(t);
					return new Worker(r);
				}
				return n = e, i;
			}
			function s() {
				r || (r = o(function(e) {
					function t() {
						function e(t, n) {
							var o, s, c = t.length, l, d, p, g;
							for (s = 0; s < c; s += 1) if (o = t[s], "ks" in o && !o.completed) {
								if (o.completed = !0, o.hasMask) {
									var y = o.masksProperties;
									for (d = y.length, l = 0; l < d; l += 1) if (y[l].pt.k.i) a(y[l].pt.k);
									else for (g = y[l].pt.k.length, p = 0; p < g; p += 1) y[l].pt.k[p].s && a(y[l].pt.k[p].s[0]), y[l].pt.k[p].e && a(y[l].pt.k[p].e[0]);
								}
								o.ty === 0 ? (o.layers = r(o.refId, n), e(o.layers, n)) : o.ty === 4 ? i(o.shapes) : o.ty === 5 && _(o);
							}
						}
						function t(t, n) {
							if (t) {
								var i = 0, a = t.length;
								for (i = 0; i < a; i += 1) t[i].t === 1 && (t[i].data.layers = r(t[i].data.refId, n), e(t[i].data.layers, n));
							}
						}
						function n(e, t) {
							for (var n = 0, r = t.length; n < r;) {
								if (t[n].id === e) return t[n];
								n += 1;
							}
							return null;
						}
						function r(e, t) {
							var r = n(e, t);
							return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null;
						}
						function i(e) {
							var t, n = e.length, r, o;
							for (t = n - 1; t >= 0; --t) if (e[t].ty === "sh") if (e[t].ks.k.i) a(e[t].ks.k);
							else for (o = e[t].ks.k.length, r = 0; r < o; r += 1) e[t].ks.k[r].s && a(e[t].ks.k[r].s[0]), e[t].ks.k[r].e && a(e[t].ks.k[r].e[0]);
							else e[t].ty === "gr" && i(e[t].it);
						}
						function a(e) {
							var t, n = e.i.length;
							for (t = 0; t < n; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1];
						}
						function o(e, t) {
							var n = t ? t.split(".") : [
								100,
								100,
								100
							];
							return e[0] > n[0] ? !0 : n[0] > e[0] ? !1 : e[1] > n[1] ? !0 : n[1] > e[1] ? !1 : e[2] > n[2] ? !0 : n[2] > e[2] ? !1 : null;
						}
						var s = function() {
							var e = [
								4,
								4,
								14
							];
							function t(e) {
								var t = e.t.d;
								e.t.d = { k: [{
									s: t,
									t: 0
								}] };
							}
							function n(e) {
								var n, r = e.length;
								for (n = 0; n < r; n += 1) e[n].ty === 5 && t(e[n]);
							}
							return function(t) {
								if (o(e, t.v) && (n(t.layers), t.assets)) {
									var r, i = t.assets.length;
									for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
								}
							};
						}(), c = function() {
							var e = [
								4,
								7,
								99
							];
							return function(t) {
								if (t.chars && !o(e, t.v)) {
									var n, r = t.chars.length;
									for (n = 0; n < r; n += 1) {
										var a = t.chars[n];
										a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
											p: {
												k: [0, 0],
												a: 0
											},
											s: {
												k: [100, 100],
												a: 0
											},
											a: {
												k: [0, 0],
												a: 0
											},
											r: {
												k: 0,
												a: 0
											},
											o: {
												k: 100,
												a: 0
											}
										}, t.chars[n].t || (a.data.shapes.push({ ty: "no" }), a.data.shapes[0].it.push({
											p: {
												k: [0, 0],
												a: 0
											},
											s: {
												k: [100, 100],
												a: 0
											},
											a: {
												k: [0, 0],
												a: 0
											},
											r: {
												k: 0,
												a: 0
											},
											o: {
												k: 100,
												a: 0
											},
											sk: {
												k: 0,
												a: 0
											},
											sa: {
												k: 0,
												a: 0
											},
											ty: "tr"
										})));
									}
								}
							};
						}(), l = function() {
							var e = [
								5,
								7,
								15
							];
							function t(e) {
								var t = e.t.p;
								typeof t.a == "number" && (t.a = {
									a: 0,
									k: t.a
								}), typeof t.p == "number" && (t.p = {
									a: 0,
									k: t.p
								}), typeof t.r == "number" && (t.r = {
									a: 0,
									k: t.r
								});
							}
							function n(e) {
								var n, r = e.length;
								for (n = 0; n < r; n += 1) e[n].ty === 5 && t(e[n]);
							}
							return function(t) {
								if (o(e, t.v) && (n(t.layers), t.assets)) {
									var r, i = t.assets.length;
									for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
								}
							};
						}(), d = function() {
							var e = [
								4,
								1,
								9
							];
							function t(e) {
								var n, r = e.length, i, a;
								for (n = 0; n < r; n += 1) if (e[n].ty === "gr") t(e[n].it);
								else if (e[n].ty === "fl" || e[n].ty === "st") if (e[n].c.k && e[n].c.k[0].i) for (a = e[n].c.k.length, i = 0; i < a; i += 1) e[n].c.k[i].s && (e[n].c.k[i].s[0] /= 255, e[n].c.k[i].s[1] /= 255, e[n].c.k[i].s[2] /= 255, e[n].c.k[i].s[3] /= 255), e[n].c.k[i].e && (e[n].c.k[i].e[0] /= 255, e[n].c.k[i].e[1] /= 255, e[n].c.k[i].e[2] /= 255, e[n].c.k[i].e[3] /= 255);
								else e[n].c.k[0] /= 255, e[n].c.k[1] /= 255, e[n].c.k[2] /= 255, e[n].c.k[3] /= 255;
							}
							function n(e) {
								var n, r = e.length;
								for (n = 0; n < r; n += 1) e[n].ty === 4 && t(e[n].shapes);
							}
							return function(t) {
								if (o(e, t.v) && (n(t.layers), t.assets)) {
									var r, i = t.assets.length;
									for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
								}
							};
						}(), p = function() {
							var e = [
								4,
								4,
								18
							];
							function t(e) {
								var n, r = e.length, i, a;
								for (n = r - 1; n >= 0; --n) if (e[n].ty === "sh") if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
								else for (a = e[n].ks.k.length, i = 0; i < a; i += 1) e[n].ks.k[i].s && (e[n].ks.k[i].s[0].c = e[n].closed), e[n].ks.k[i].e && (e[n].ks.k[i].e[0].c = e[n].closed);
								else e[n].ty === "gr" && t(e[n].it);
							}
							function n(e) {
								var n, r, i = e.length, a, o, s, c;
								for (r = 0; r < i; r += 1) {
									if (n = e[r], n.hasMask) {
										var l = n.masksProperties;
										for (o = l.length, a = 0; a < o; a += 1) if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
										else for (c = l[a].pt.k.length, s = 0; s < c; s += 1) l[a].pt.k[s].s && (l[a].pt.k[s].s[0].c = l[a].cl), l[a].pt.k[s].e && (l[a].pt.k[s].e[0].c = l[a].cl);
									}
									n.ty === 4 && t(n.shapes);
								}
							}
							return function(t) {
								if (o(e, t.v) && (n(t.layers), t.assets)) {
									var r, i = t.assets.length;
									for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
								}
							};
						}();
						function g(n) {
							n.__complete ||= (d(n), s(n), c(n), l(n), p(n), e(n.layers, n.assets), t(n.chars, n.assets), !0);
						}
						function _(e) {
							e.t.a.length === 0 && "m" in e.t.p;
						}
						var y = {};
						return y.completeData = g, y.checkColors = d, y.checkChars = c, y.checkPathProperties = l, y.checkShapes = p, y.completeLayers = e, y;
					}
					if (a.dataManager ||= t(), a.assetLoader ||= function() {
						function e(e) {
							var t = e.getResponseHeader("content-type");
							return t && e.responseType === "json" && t.indexOf("json") !== -1 || e.response && _typeof$5(e.response) === "object" ? e.response : e.response && typeof e.response == "string" ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null;
						}
						function t(t, n, r, i) {
							var a, o = new XMLHttpRequest();
							try {
								o.responseType = "json";
							} catch {}
							o.onreadystatechange = function() {
								if (o.readyState === 4) if (o.status === 200) a = e(o), r(a);
								else try {
									a = e(o), r(a);
								} catch (e) {
									i && i(e);
								}
							};
							try {
								o.open([
									"G",
									"E",
									"T"
								].join(""), t, !0);
							} catch {
								o.open([
									"G",
									"E",
									"T"
								].join(""), n + "/" + t, !0);
							}
							o.send();
						}
						return { load: t };
					}(), e.data.type === "loadAnimation") a.assetLoader.load(e.data.path, e.data.fullPath, function(t) {
						a.dataManager.completeData(t), a.postMessage({
							id: e.data.id,
							payload: t,
							status: "success"
						});
					}, function() {
						a.postMessage({
							id: e.data.id,
							status: "error"
						});
					});
					else if (e.data.type === "complete") {
						var n = e.data.animation;
						a.dataManager.completeData(n), a.postMessage({
							id: e.data.id,
							payload: n,
							status: "success"
						});
					} else e.data.type === "loadData" && a.assetLoader.load(e.data.path, e.data.fullPath, function(t) {
						a.postMessage({
							id: e.data.id,
							payload: t,
							status: "success"
						});
					}, function() {
						a.postMessage({
							id: e.data.id,
							status: "error"
						});
					});
				}), r.onmessage = function(e) {
					var n = e.data, r = n.id, i = t[r];
					t[r] = null, n.status === "success" ? i.onComplete(n.payload) : i.onError && i.onError();
				});
			}
			function c(n, r) {
				e += 1;
				var i = "processId_" + e;
				return t[i] = {
					onComplete: n,
					onError: r
				}, i;
			}
			function l(e, t, n) {
				s();
				var i = c(t, n);
				r.postMessage({
					type: "loadAnimation",
					path: e,
					fullPath: window.location.origin + window.location.pathname,
					id: i
				});
			}
			function d(e, t, n) {
				s();
				var i = c(t, n);
				r.postMessage({
					type: "loadData",
					path: e,
					fullPath: window.location.origin + window.location.pathname,
					id: i
				});
			}
			function p(e, t, n) {
				s();
				var i = c(t, n);
				r.postMessage({
					type: "complete",
					animation: e,
					id: i
				});
			}
			return {
				loadAnimation: l,
				loadData: d,
				completeAnimation: p
			};
		}(), ImagePreloader = function() {
			var e = function() {
				var e = createTag("canvas");
				e.width = 1, e.height = 1;
				var t = e.getContext("2d");
				return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e;
			}();
			function t() {
				this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
			}
			function n() {
				this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
			}
			function r(e, t, n) {
				var r = "";
				if (e.e) r = e.p;
				else if (t) {
					var i = e.p;
					i.indexOf("images/") !== -1 && (i = i.split("/")[1]), r = t + i;
				} else r = n, r += e.u ? e.u : "", r += e.p;
				return r;
			}
			function i(e) {
				var t = 0, n = setInterval(function() {
					(e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(n)), t += 1;
				}.bind(this), 50);
			}
			function a(t) {
				var n = r(t, this.assetsPath, this.path), i = createNS("image");
				isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
					a.img = e, this._imageLoaded();
				}.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", n), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
				var a = {
					img: i,
					assetData: t
				};
				return a;
			}
			function o(t) {
				var n = r(t, this.assetsPath, this.path), i = createTag("img");
				i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
					a.img = e, this._imageLoaded();
				}.bind(this), !1), i.src = n;
				var a = {
					img: i,
					assetData: t
				};
				return a;
			}
			function s(e) {
				var t = { assetData: e }, n = r(e, this.assetsPath, this.path);
				return dataManager.loadData(n, function(e) {
					t.img = e, this._footageLoaded();
				}.bind(this), function() {
					t.img = {}, this._footageLoaded();
				}.bind(this)), t;
			}
			function c(e, t) {
				this.imagesLoadedCb = t;
				var n, r = e.length;
				for (n = 0; n < r; n += 1) e[n].layers || (!e[n].t || e[n].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(e[n]))) : e[n].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(e[n]))));
			}
			function l(e) {
				this.path = e || "";
			}
			function d(e) {
				this.assetsPath = e || "";
			}
			function p(e) {
				for (var t = 0, n = this.images.length; t < n;) {
					if (this.images[t].assetData === e) return this.images[t].img;
					t += 1;
				}
				return null;
			}
			function g() {
				this.imagesLoadedCb = null, this.images.length = 0;
			}
			function _() {
				return this.totalImages === this.loadedAssets;
			}
			function y() {
				return this.totalFootages === this.loadedFootagesCount;
			}
			function x(e, t) {
				e === "svg" ? (this._elementHelper = t, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
			}
			function C() {
				this._imageLoaded = t.bind(this), this._footageLoaded = n.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
			}
			return C.prototype = {
				loadAssets: c,
				setAssetsPath: d,
				setPath: l,
				loadedImages: _,
				loadedFootages: y,
				destroy: g,
				getAsset: p,
				createImgData: o,
				createImageData: a,
				imageLoaded: t,
				footageLoaded: n,
				setCacheType: x
			}, C;
		}();
		function BaseEvent() {}
		BaseEvent.prototype = {
			triggerEvent: function(e, t) {
				if (this._cbs[e]) for (var n = this._cbs[e], r = 0; r < n.length; r += 1) n[r](t);
			},
			addEventListener: function(e, t) {
				return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t), function() {
					this.removeEventListener(e, t);
				}.bind(this);
			},
			removeEventListener: function(e, t) {
				if (!t) this._cbs[e] = null;
				else if (this._cbs[e]) {
					for (var n = 0, r = this._cbs[e].length; n < r;) this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), --n, --r), n += 1;
					this._cbs[e].length || (this._cbs[e] = null);
				}
			}
		};
		var markerParser = function() {
			function e(e) {
				for (var t = e.split("\r\n"), n = {}, r, i = 0, a = 0; a < t.length; a += 1) r = t[a].split(":"), r.length === 2 && (n[r[0]] = r[1].trim(), i += 1);
				if (i === 0) throw Error();
				return n;
			}
			return function(t) {
				for (var n = [], r = 0; r < t.length; r += 1) {
					var i = t[r], a = {
						time: i.tm,
						duration: i.dr
					};
					try {
						a.payload = JSON.parse(t[r].cm);
					} catch {
						try {
							a.payload = e(t[r].cm);
						} catch {
							a.payload = { name: t[r].cm };
						}
					}
					n.push(a);
				}
				return n;
			};
		}(), ProjectInterface = function() {
			function e(e) {
				this.compositions.push(e);
			}
			return function() {
				function t(e) {
					for (var t = 0, n = this.compositions.length; t < n;) {
						if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
						t += 1;
					}
					return null;
				}
				return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t;
			};
		}(), renderers = {}, registerRenderer = function(e, t) {
			renderers[e] = t;
		};
		function getRenderer(e) {
			return renderers[e];
		}
		function getRegisteredRenderer() {
			if (renderers.canvas) return "canvas";
			for (var e in renderers) if (renderers[e]) return e;
			return "";
		}
		function _typeof$4(e) {
			"@babel/helpers - typeof";
			return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$4(e);
		}
		var AnimationItem = function() {
			this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
		};
		extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
			(e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
			var t = "svg";
			e.animType ? t = e.animType : e.renderer && (t = e.renderer);
			var n = getRenderer(t);
			this.renderer = new n(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = "autoplay" in e ? e.autoplay : !0, this.name = e.name ? e.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(e, "autoloadSegments") ? e.autoloadSegments : !0, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") === -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
		}, AnimationItem.prototype.onSetupError = function() {
			this.trigger("data_failed");
		}, AnimationItem.prototype.setupAnimation = function(e) {
			dataManager.completeAnimation(e, this.configAnimation);
		}, AnimationItem.prototype.setData = function(e, t) {
			t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
			var n = {
				wrapper: e,
				animationData: t
			}, r = e.attributes;
			n.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", n.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
			var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
			i === "false" ? n.loop = !1 : i === "true" ? n.loop = !0 : i !== "" && (n.loop = parseInt(i, 10)), n.autoplay = (r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0) !== "false", n.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") === "false" && (n.prerender = !1), n.path ? this.setParams(n) : this.trigger("destroy");
		}, AnimationItem.prototype.includeLayers = function(e) {
			e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
			var t = this.animationData.layers, n, r = t.length, i = e.layers, a, o = i.length;
			for (a = 0; a < o; a += 1) for (n = 0; n < r;) {
				if (t[n].id === i[a].id) {
					t[n] = i[a];
					break;
				}
				n += 1;
			}
			if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets) for (r = e.assets.length, n = 0; n < r; n += 1) this.animationData.assets.push(e.assets[n]);
			this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
		}, AnimationItem.prototype.onSegmentComplete = function(e) {
			this.animationData = e;
			var t = getExpressionsPlugin();
			t && t.initExpressions(this), this.loadNextSegment();
		}, AnimationItem.prototype.loadNextSegment = function() {
			var e = this.animationData.segments;
			if (!e || e.length === 0 || !this.autoloadSegments) {
				this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
				return;
			}
			var t = e.shift();
			this.timeCompleted = t.time * this.frameRate;
			var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
			this.segmentPos += 1, dataManager.loadData(n, this.includeLayers.bind(this), function() {
				this.trigger("data_failed");
			}.bind(this));
		}, AnimationItem.prototype.loadSegments = function() {
			this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
		}, AnimationItem.prototype.imagesLoaded = function() {
			this.trigger("loaded_images"), this.checkLoaded();
		}, AnimationItem.prototype.preloadImages = function() {
			this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
		}, AnimationItem.prototype.configAnimation = function(e) {
			if (this.renderer) try {
				this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets ||= [], this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
			} catch (e) {
				this.triggerConfigError(e);
			}
		}, AnimationItem.prototype.waitForFontsLoaded = function() {
			this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
		}, AnimationItem.prototype.checkLoaded = function() {
			if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
				this.isLoaded = !0;
				var e = getExpressionsPlugin();
				e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
					this.trigger("DOMLoaded");
				}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
			}
		}, AnimationItem.prototype.resize = function(e, t) {
			var n = typeof e == "number" ? e : void 0, r = typeof t == "number" ? t : void 0;
			this.renderer.updateContainerSize(n, r);
		}, AnimationItem.prototype.setSubframe = function(e) {
			this.isSubframeEnabled = !!e;
		}, AnimationItem.prototype.gotoFrame = function() {
			this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
		}, AnimationItem.prototype.renderFrame = function() {
			if (!(this.isLoaded === !1 || !this.renderer)) try {
				this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
			} catch (e) {
				this.triggerRenderFrameError(e);
			}
		}, AnimationItem.prototype.play = function(e) {
			e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
		}, AnimationItem.prototype.pause = function(e) {
			e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
		}, AnimationItem.prototype.togglePause = function(e) {
			e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause());
		}, AnimationItem.prototype.stop = function(e) {
			e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
		}, AnimationItem.prototype.getMarkerData = function(e) {
			for (var t, n = 0; n < this.markers.length; n += 1) if (t = this.markers[n], t.payload && t.payload.name === e) return t;
			return null;
		}, AnimationItem.prototype.goToAndStop = function(e, t, n) {
			if (!(n && this.name !== n)) {
				var r = Number(e);
				if (isNaN(r)) {
					var i = this.getMarkerData(e);
					i && this.goToAndStop(i.time, !0);
				} else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
				this.pause();
			}
		}, AnimationItem.prototype.goToAndPlay = function(e, t, n) {
			if (!(n && this.name !== n)) {
				var r = Number(e);
				if (isNaN(r)) {
					var i = this.getMarkerData(e);
					i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0));
				} else this.goToAndStop(r, t, n);
				this.play();
			}
		}, AnimationItem.prototype.advanceTime = function(e) {
			if (!(this.isPaused === !0 || this.isLoaded === !1)) {
				var t = this.currentRawFrame + e * this.frameModifier, n = !1;
				t >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (n = !0, t = this.totalFrames - 1) : t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : t < 0 ? this.checkSegments(t % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (n = !0, t = 0)) : this.setCurrentRawFrameValue(t), n && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"));
			}
		}, AnimationItem.prototype.adjustSegment = function(e, t) {
			this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart");
		}, AnimationItem.prototype.setSegment = function(e, t) {
			var n = -1;
			this.isPaused && (this.currentRawFrame + this.firstFrame < e ? n = e : this.currentRawFrame + this.firstFrame > t && (n = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, n !== -1 && this.goToAndStop(n, !0);
		}, AnimationItem.prototype.playSegments = function(e, t) {
			if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
				var n, r = e.length;
				for (n = 0; n < r; n += 1) this.segments.push(e[n]);
			} else this.segments.push(e);
			this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
		}, AnimationItem.prototype.resetSegments = function(e) {
			this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0);
		}, AnimationItem.prototype.checkSegments = function(e) {
			return this.segments.length ? (this.adjustSegment(this.segments.shift(), e), !0) : !1;
		}, AnimationItem.prototype.destroy = function(e) {
			e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
		}, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
			this.currentRawFrame = e, this.gotoFrame();
		}, AnimationItem.prototype.setSpeed = function(e) {
			this.playSpeed = e, this.updaFrameModifier();
		}, AnimationItem.prototype.setDirection = function(e) {
			this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier();
		}, AnimationItem.prototype.setLoop = function(e) {
			this.loop = e;
		}, AnimationItem.prototype.setVolume = function(e, t) {
			t && this.name !== t || this.audioController.setVolume(e);
		}, AnimationItem.prototype.getVolume = function() {
			return this.audioController.getVolume();
		}, AnimationItem.prototype.mute = function(e) {
			e && this.name !== e || this.audioController.mute();
		}, AnimationItem.prototype.unmute = function(e) {
			e && this.name !== e || this.audioController.unmute();
		}, AnimationItem.prototype.updaFrameModifier = function() {
			this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
		}, AnimationItem.prototype.getPath = function() {
			return this.path;
		}, AnimationItem.prototype.getAssetsPath = function(e) {
			var t = "";
			if (e.e) t = e.p;
			else if (this.assetsPath) {
				var n = e.p;
				n.indexOf("images/") !== -1 && (n = n.split("/")[1]), t = this.assetsPath + n;
			} else t = this.path, t += e.u ? e.u : "", t += e.p;
			return t;
		}, AnimationItem.prototype.getAssetData = function(e) {
			for (var t = 0, n = this.assets.length; t < n;) {
				if (e === this.assets[t].id) return this.assets[t];
				t += 1;
			}
			return null;
		}, AnimationItem.prototype.hide = function() {
			this.renderer.hide();
		}, AnimationItem.prototype.show = function() {
			this.renderer.show();
		}, AnimationItem.prototype.getDuration = function(e) {
			return e ? this.totalFrames : this.totalFrames / this.frameRate;
		}, AnimationItem.prototype.updateDocumentData = function(e, t, n) {
			try {
				this.renderer.getElementByPath(e).updateDocumentData(t, n);
			} catch {}
		}, AnimationItem.prototype.trigger = function(e) {
			if (this._cbs && this._cbs[e]) switch (e) {
				case "enterFrame":
					this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
					break;
				case "drawnFrame":
					this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
					break;
				case "loopComplete":
					this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
					break;
				case "complete":
					this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
					break;
				case "segmentStart":
					this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
					break;
				case "destroy":
					this.triggerEvent(e, new BMDestroyEvent(e, this));
					break;
				default: this.triggerEvent(e);
			}
			e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this));
		}, AnimationItem.prototype.triggerRenderFrameError = function(e) {
			var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
			this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
		}, AnimationItem.prototype.triggerConfigError = function(e) {
			var t = new BMConfigErrorEvent(e, this.currentFrame);
			this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
		};
		var animationManager = function() {
			var e = {}, t = [], n = 0, r = 0, i = 0, a = !0, o = !1;
			function s(e) {
				for (var n = 0, i = e.target; n < r;) t[n].animation === i && (t.splice(n, 1), --n, --r, i.isPaused || p()), n += 1;
			}
			function c(e, n) {
				if (!e) return null;
				for (var i = 0; i < r;) {
					if (t[i].elem === e && t[i].elem !== null) return t[i].animation;
					i += 1;
				}
				var a = new AnimationItem();
				return g(a, e), a.setData(e, n), a;
			}
			function l() {
				var e, n = t.length, r = [];
				for (e = 0; e < n; e += 1) r.push(t[e].animation);
				return r;
			}
			function d() {
				i += 1, ce();
			}
			function p() {
				--i;
			}
			function g(e, n) {
				e.addEventListener("destroy", s), e.addEventListener("_active", d), e.addEventListener("_idle", p), t.push({
					elem: n,
					animation: e
				}), r += 1;
			}
			function _(e) {
				var t = new AnimationItem();
				return g(t, null), t.setParams(e), t;
			}
			function y(e, n) {
				var i;
				for (i = 0; i < r; i += 1) t[i].animation.setSpeed(e, n);
			}
			function x(e, n) {
				var i;
				for (i = 0; i < r; i += 1) t[i].animation.setDirection(e, n);
			}
			function C(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.play(e);
			}
			function ee(e) {
				var s = e - n, c;
				for (c = 0; c < r; c += 1) t[c].animation.advanceTime(s);
				n = e, i && !o ? window.requestAnimationFrame(ee) : a = !0;
			}
			function te(e) {
				n = e, window.requestAnimationFrame(ee);
			}
			function ne(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.pause(e);
			}
			function T(e, n, i) {
				var a;
				for (a = 0; a < r; a += 1) t[a].animation.goToAndStop(e, n, i);
			}
			function re(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.stop(e);
			}
			function ie(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.togglePause(e);
			}
			function ae(e) {
				var n;
				for (n = r - 1; n >= 0; --n) t[n].animation.destroy(e);
			}
			function oe(e, t, n) {
				var r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), i, a = r.length;
				for (i = 0; i < a; i += 1) n && r[i].setAttribute("data-bm-type", n), c(r[i], e);
				if (t && a === 0) {
					n ||= "svg";
					var o = document.getElementsByTagName("body")[0];
					o.innerText = "";
					var s = createTag("div");
					s.style.width = "100%", s.style.height = "100%", s.setAttribute("data-bm-type", n), o.appendChild(s), c(s, e);
				}
			}
			function se() {
				var e;
				for (e = 0; e < r; e += 1) t[e].animation.resize();
			}
			function ce() {
				!o && i && (a &&= (window.requestAnimationFrame(te), !1));
			}
			function le() {
				o = !0;
			}
			function ue() {
				o = !1, ce();
			}
			function de(e, n) {
				var i;
				for (i = 0; i < r; i += 1) t[i].animation.setVolume(e, n);
			}
			function fe(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.mute(e);
			}
			function pe(e) {
				var n;
				for (n = 0; n < r; n += 1) t[n].animation.unmute(e);
			}
			return e.registerAnimation = c, e.loadAnimation = _, e.setSpeed = y, e.setDirection = x, e.play = C, e.pause = ne, e.stop = re, e.togglePause = ie, e.searchAnimations = oe, e.resize = se, e.goToAndStop = T, e.destroy = ae, e.freeze = le, e.unfreeze = ue, e.setVolume = de, e.mute = fe, e.unmute = pe, e.getRegisteredAnimations = l, e;
		}(), BezierFactory = function() {
			var e = {};
			e.getBezierEasing = n;
			var t = {};
			function n(e, n, r, i, a) {
				var o = a || ("bez_" + e + "_" + n + "_" + r + "_" + i).replace(/\./g, "p");
				if (t[o]) return t[o];
				var s = new ee([
					e,
					n,
					r,
					i
				]);
				return t[o] = s, s;
			}
			var r = 4, i = .001, a = 1e-7, o = 10, s = 11, c = 1 / (s - 1), l = typeof Float32Array == "function";
			function d(e, t) {
				return 1 - 3 * t + 3 * e;
			}
			function p(e, t) {
				return 3 * t - 6 * e;
			}
			function g(e) {
				return 3 * e;
			}
			function _(e, t, n) {
				return ((d(t, n) * e + p(t, n)) * e + g(t)) * e;
			}
			function y(e, t, n) {
				return 3 * d(t, n) * e * e + 2 * p(t, n) * e + g(t);
			}
			function x(e, t, n, r, i) {
				var s, c, l = 0;
				do
					c = t + (n - t) / 2, s = _(c, r, i) - e, s > 0 ? n = c : t = c;
				while (Math.abs(s) > a && ++l < o);
				return c;
			}
			function C(e, t, n, i) {
				for (var a = 0; a < r; ++a) {
					var o = y(t, n, i);
					if (o === 0) return t;
					var s = _(t, n, i) - e;
					t -= s / o;
				}
				return t;
			}
			function ee(e) {
				this._p = e, this._mSampleValues = l ? new Float32Array(s) : Array(s), this._precomputed = !1, this.get = this.get.bind(this);
			}
			return ee.prototype = {
				get: function(e) {
					var t = this._p[0], n = this._p[1], r = this._p[2], i = this._p[3];
					return this._precomputed || this._precompute(), t === n && r === i ? e : e === 0 ? 0 : e === 1 ? 1 : _(this._getTForX(e), n, i);
				},
				_precompute: function() {
					var e = this._p[0], t = this._p[1], n = this._p[2], r = this._p[3];
					this._precomputed = !0, (e !== t || n !== r) && this._calcSampleValues();
				},
				_calcSampleValues: function() {
					for (var e = this._p[0], t = this._p[2], n = 0; n < s; ++n) this._mSampleValues[n] = _(n * c, e, t);
				},
				_getTForX: function(e) {
					for (var t = this._p[0], n = this._p[2], r = this._mSampleValues, a = 0, o = 1, l = s - 1; o !== l && r[o] <= e; ++o) a += c;
					--o;
					var d = (e - r[o]) / (r[o + 1] - r[o]), p = a + d * c, g = y(p, t, n);
					return g >= i ? C(e, p, t, n) : g === 0 ? p : x(e, a, a + c, t, n);
				}
			}, e;
		}(), pooling = function() {
			function e(e) {
				return e.concat(createSizedArray(e.length));
			}
			return { double: e };
		}(), poolFactory = function() {
			return function(e, t, n) {
				var r = 0, i = e, a = createSizedArray(i), o = {
					newElement: s,
					release: c
				};
				function s() {
					var e;
					return r ? (--r, e = a[r]) : e = t(), e;
				}
				function c(e) {
					r === i && (a = pooling.double(a), i *= 2), n && n(e), a[r] = e, r += 1;
				}
				return o;
			};
		}(), bezierLengthPool = function() {
			function e() {
				return {
					addedLength: 0,
					percents: createTypedArray("float32", getDefaultCurveSegments()),
					lengths: createTypedArray("float32", getDefaultCurveSegments())
				};
			}
			return poolFactory(8, e);
		}(), segmentsLengthPool = function() {
			function e() {
				return {
					lengths: [],
					totalLength: 0
				};
			}
			function t(e) {
				var t, n = e.lengths.length;
				for (t = 0; t < n; t += 1) bezierLengthPool.release(e.lengths[t]);
				e.lengths.length = 0;
			}
			return poolFactory(8, e, t);
		}();
		function bezFunction() {
			var e = Math;
			function t(e, t, n, r, i, a) {
				var o = e * r + t * i + n * a - i * r - a * e - n * t;
				return o > -.001 && o < .001;
			}
			function n(n, r, i, a, o, s, c, l, d) {
				if (i === 0 && s === 0 && d === 0) return t(n, r, a, o, c, l);
				var p = e.sqrt(e.pow(a - n, 2) + e.pow(o - r, 2) + e.pow(s - i, 2)), g = e.sqrt(e.pow(c - n, 2) + e.pow(l - r, 2) + e.pow(d - i, 2)), _ = e.sqrt(e.pow(c - a, 2) + e.pow(l - o, 2) + e.pow(d - s, 2)), y = p > g ? p > _ ? p - g - _ : _ - g - p : _ > g ? _ - g - p : g - p - _;
				return y > -1e-4 && y < 1e-4;
			}
			var r = function() {
				return function(e, t, n, r) {
					var i = getDefaultCurveSegments(), a, o, s, c, l, d = 0, p, g = [], _ = [], y = bezierLengthPool.newElement();
					for (s = n.length, a = 0; a < i; a += 1) {
						for (l = a / (i - 1), p = 0, o = 0; o < s; o += 1) c = bmPow(1 - l, 3) * e[o] + 3 * bmPow(1 - l, 2) * l * n[o] + 3 * (1 - l) * bmPow(l, 2) * r[o] + bmPow(l, 3) * t[o], g[o] = c, _[o] !== null && (p += bmPow(g[o] - _[o], 2)), _[o] = g[o];
						p && (p = bmSqrt(p), d += p), y.percents[a] = l, y.lengths[a] = d;
					}
					return y.addedLength = d, y;
				};
			}();
			function i(e) {
				var t = segmentsLengthPool.newElement(), n = e.c, i = e.v, a = e.o, o = e.i, s, c = e._length, l = t.lengths, d = 0;
				for (s = 0; s < c - 1; s += 1) l[s] = r(i[s], i[s + 1], a[s], o[s + 1]), d += l[s].addedLength;
				return n && c && (l[s] = r(i[s], i[0], a[s], o[0]), d += l[s].addedLength), t.totalLength = d, t;
			}
			function a(e) {
				this.segmentLength = 0, this.points = Array(e);
			}
			function o(e, t) {
				this.partialLength = e, this.point = t;
			}
			var s = function() {
				var e = {};
				return function(n, r, i, s) {
					var c = (n[0] + "_" + n[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p");
					if (!e[c]) {
						var l = getDefaultCurveSegments(), d, p, g, _, y, x = 0, C, ee, te = null;
						n.length === 2 && (n[0] !== r[0] || n[1] !== r[1]) && t(n[0], n[1], r[0], r[1], n[0] + i[0], n[1] + i[1]) && t(n[0], n[1], r[0], r[1], r[0] + s[0], r[1] + s[1]) && (l = 2);
						var ne = new a(l);
						for (g = i.length, d = 0; d < l; d += 1) {
							for (ee = createSizedArray(g), y = d / (l - 1), C = 0, p = 0; p < g; p += 1) _ = bmPow(1 - y, 3) * n[p] + 3 * bmPow(1 - y, 2) * y * (n[p] + i[p]) + 3 * (1 - y) * bmPow(y, 2) * (r[p] + s[p]) + bmPow(y, 3) * r[p], ee[p] = _, te !== null && (C += bmPow(ee[p] - te[p], 2));
							C = bmSqrt(C), x += C, ne.points[d] = new o(C, ee), te = ee;
						}
						ne.segmentLength = x, e[c] = ne;
					}
					return e[c];
				};
			}();
			function c(e, t) {
				var n = t.percents, r = t.lengths, i = n.length, a = bmFloor((i - 1) * e), o = e * t.addedLength, s = 0;
				if (a === i - 1 || a === 0 || o === r[a]) return n[a];
				for (var c = r[a] > o ? -1 : 1, l = !0; l;) if (r[a] <= o && r[a + 1] > o ? (s = (o - r[a]) / (r[a + 1] - r[a]), l = !1) : a += c, a < 0 || a >= i - 1) {
					if (a === i - 1) return n[a];
					l = !1;
				}
				return n[a] + (n[a + 1] - n[a]) * s;
			}
			function l(t, n, r, i, a, o) {
				var s = c(a, o), l = 1 - s;
				return [e.round((l * l * l * t[0] + (s * l * l + l * s * l + l * l * s) * r[0] + (s * s * l + l * s * s + s * l * s) * i[0] + s * s * s * n[0]) * 1e3) / 1e3, e.round((l * l * l * t[1] + (s * l * l + l * s * l + l * l * s) * r[1] + (s * s * l + l * s * s + s * l * s) * i[1] + s * s * s * n[1]) * 1e3) / 1e3];
			}
			var d = createTypedArray("float32", 8);
			function p(t, n, r, i, a, o, s) {
				a < 0 ? a = 0 : a > 1 && (a = 1);
				var l = c(a, s);
				o = o > 1 ? 1 : o;
				var p = c(o, s), g, _ = t.length, y = 1 - l, x = 1 - p, C = y * y * y, ee = l * y * y * 3, te = l * l * y * 3, ne = l * l * l, T = y * y * x, re = l * y * x + y * l * x + y * y * p, ie = l * l * x + y * l * p + l * y * p, ae = l * l * p, oe = y * x * x, se = l * x * x + y * p * x + y * x * p, ce = l * p * x + y * p * p + l * x * p, le = l * p * p, ue = x * x * x, de = p * x * x + x * p * x + x * x * p, fe = p * p * x + x * p * p + p * x * p, pe = p * p * p;
				for (g = 0; g < _; g += 1) d[g * 4] = e.round((C * t[g] + ee * r[g] + te * i[g] + ne * n[g]) * 1e3) / 1e3, d[g * 4 + 1] = e.round((T * t[g] + re * r[g] + ie * i[g] + ae * n[g]) * 1e3) / 1e3, d[g * 4 + 2] = e.round((oe * t[g] + se * r[g] + ce * i[g] + le * n[g]) * 1e3) / 1e3, d[g * 4 + 3] = e.round((ue * t[g] + de * r[g] + fe * i[g] + pe * n[g]) * 1e3) / 1e3;
				return d;
			}
			return {
				getSegmentsLength: i,
				getNewSegment: p,
				getPointInSegment: l,
				buildBezierData: s,
				pointOnLine2D: t,
				pointOnLine3D: n
			};
		}
		var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
		function interpolateValue(e, t) {
			var n = this.offsetTime, r;
			this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
			for (var i = t.lastIndex, a = i, o = this.keyframes.length - 1, s = !0, c, l, d; s;) {
				if (c = this.keyframes[a], l = this.keyframes[a + 1], a === o - 1 && e >= l.t - n) {
					c.h && (c = l), i = 0;
					break;
				}
				if (l.t - n > e) {
					i = a;
					break;
				}
				a < o - 1 ? a += 1 : (i = 0, s = !1);
			}
			d = this.keyframesMetadata[a] || {};
			var p, g, _, y, x, C, ee = l.t - n, te = c.t - n, ne;
			if (c.to) {
				d.bezierData ||= bez.buildBezierData(c.s, l.s || c.e, c.to, c.ti);
				var T = d.bezierData;
				if (e >= ee || e < te) {
					var re = e >= ee ? T.points.length - 1 : 0;
					for (g = T.points[re].point.length, p = 0; p < g; p += 1) r[p] = T.points[re].point[p];
				} else {
					d.__fnct ? C = d.__fnct : (C = BezierFactory.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y, c.n).get, d.__fnct = C), _ = C((e - te) / (ee - te));
					var ie = T.segmentLength * _, ae, oe = t.lastFrame < e && t._lastKeyframeIndex === a ? t._lastAddedLength : 0;
					for (x = t.lastFrame < e && t._lastKeyframeIndex === a ? t._lastPoint : 0, s = !0, y = T.points.length; s;) {
						if (oe += T.points[x].partialLength, ie === 0 || _ === 0 || x === T.points.length - 1) {
							for (g = T.points[x].point.length, p = 0; p < g; p += 1) r[p] = T.points[x].point[p];
							break;
						} else if (ie >= oe && ie < oe + T.points[x + 1].partialLength) {
							for (ae = (ie - oe) / T.points[x + 1].partialLength, g = T.points[x].point.length, p = 0; p < g; p += 1) r[p] = T.points[x].point[p] + (T.points[x + 1].point[p] - T.points[x].point[p]) * ae;
							break;
						}
						x < y - 1 ? x += 1 : s = !1;
					}
					t._lastPoint = x, t._lastAddedLength = oe - T.points[x].partialLength, t._lastKeyframeIndex = a;
				}
			} else {
				var se, ce, le, ue, de;
				if (o = c.s.length, ne = l.s || c.e, this.sh && c.h !== 1) if (e >= ee) r[0] = ne[0], r[1] = ne[1], r[2] = ne[2];
				else if (e <= te) r[0] = c.s[0], r[1] = c.s[1], r[2] = c.s[2];
				else {
					var fe = createQuaternion(c.s), pe = createQuaternion(ne), me = (e - te) / (ee - te);
					quaternionToEuler(r, slerp(fe, pe, me));
				}
				else for (a = 0; a < o; a += 1) c.h !== 1 && (e >= ee ? _ = 1 : e < te ? _ = 0 : (c.o.x.constructor === Array ? (d.__fnct ||= [], d.__fnct[a] ? C = d.__fnct[a] : (se = c.o.x[a] === void 0 ? c.o.x[0] : c.o.x[a], ce = c.o.y[a] === void 0 ? c.o.y[0] : c.o.y[a], le = c.i.x[a] === void 0 ? c.i.x[0] : c.i.x[a], ue = c.i.y[a] === void 0 ? c.i.y[0] : c.i.y[a], C = BezierFactory.getBezierEasing(se, ce, le, ue).get, d.__fnct[a] = C)) : d.__fnct ? C = d.__fnct : (se = c.o.x, ce = c.o.y, le = c.i.x, ue = c.i.y, C = BezierFactory.getBezierEasing(se, ce, le, ue).get, c.keyframeMetadata = C), _ = C((e - te) / (ee - te)))), ne = l.s || c.e, de = c.h === 1 ? c.s[a] : c.s[a] + (ne[a] - c.s[a]) * _, this.propType === "multidimensional" ? r[a] = de : r = de;
			}
			return t.lastIndex = i, r;
		}
		function slerp(e, t, n) {
			var r = [], i = e[0], a = e[1], o = e[2], s = e[3], c = t[0], l = t[1], d = t[2], p = t[3], g, _ = i * c + a * l + o * d + s * p, y, x, C;
			return _ < 0 && (_ = -_, c = -c, l = -l, d = -d, p = -p), 1 - _ > 1e-6 ? (g = Math.acos(_), y = Math.sin(g), x = Math.sin((1 - n) * g) / y, C = Math.sin(n * g) / y) : (x = 1 - n, C = n), r[0] = x * i + C * c, r[1] = x * a + C * l, r[2] = x * o + C * d, r[3] = x * s + C * p, r;
		}
		function quaternionToEuler(e, t) {
			var n = t[0], r = t[1], i = t[2], a = t[3], o = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i), s = Math.asin(2 * n * r + 2 * i * a), c = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i);
			e[0] = o / degToRads, e[1] = s / degToRads, e[2] = c / degToRads;
		}
		function createQuaternion(e) {
			var t = e[0] * degToRads, n = e[1] * degToRads, r = e[2] * degToRads, i = Math.cos(t / 2), a = Math.cos(n / 2), o = Math.cos(r / 2), s = Math.sin(t / 2), c = Math.sin(n / 2), l = Math.sin(r / 2), d = i * a * o - s * c * l;
			return [
				s * c * o + i * a * l,
				s * a * o + i * c * l,
				i * c * o - s * a * l,
				d
			];
		}
		function getValueAtCurrentTime() {
			var e = this.comp.renderedFrame - this.offsetTime, t = this.keyframes[0].t - this.offsetTime, n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
			if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= n && e >= n || this._caching.lastFrame < t && e < t))) {
				this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
				var r = this.interpolateValue(e, this._caching);
				this.pv = r;
			}
			return this._caching.lastFrame = e, this.pv;
		}
		function setVValue(e) {
			var t;
			if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
			else for (var n = 0, r = this.v.length; n < r;) t = e[n] * this.mult, mathAbs(this.v[n] - t) > 1e-5 && (this.v[n] = t, this._mdf = !0), n += 1;
		}
		function processEffectsSequence() {
			if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
				if (this.lock) {
					this.setVValue(this.pv);
					return;
				}
				this.lock = !0, this._mdf = this._isFirstFrame;
				var e, t = this.effectsSequence.length, n = this.kf ? this.pv : this.data.k;
				for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
				this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
			}
		}
		function addEffect(e) {
			this.effectsSequence.push(e), this.container.addDynamicProperty(this);
		}
		function ValueProperty(e, t, n, r) {
			this.propType = "unidimensional", this.mult = n || 1, this.data = t, this.v = n ? t.k * n : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
		}
		function MultiDimensionalProperty(e, t, n, r) {
			this.propType = "multidimensional", this.mult = n || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
			var i, a = t.k.length;
			for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
			this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
		}
		function KeyframedValueProperty(e, t, n, r) {
			this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
				lastFrame: initFrame,
				lastIndex: 0,
				value: 0,
				_lastKeyframeIndex: -1
			}, this.k = !0, this.kf = !0, this.data = t, this.mult = n || 1, this.elem = e, this.container = r, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
		}
		function KeyframedMultidimensionalProperty(e, t, n, r) {
			this.propType = "multidimensional";
			var i, a = t.k.length, o, s, c, l;
			for (i = 0; i < a - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (o = t.k[i].s, s = t.k[i + 1].s, c = t.k[i].to, l = t.k[i].ti, (o.length === 2 && !(o[0] === s[0] && o[1] === s[1]) && bez.pointOnLine2D(o[0], o[1], s[0], s[1], o[0] + c[0], o[1] + c[1]) && bez.pointOnLine2D(o[0], o[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || o.length === 3 && !(o[0] === s[0] && o[1] === s[1] && o[2] === s[2]) && bez.pointOnLine3D(o[0], o[1], o[2], s[0], s[1], s[2], o[0] + c[0], o[1] + c[1], o[2] + c[2]) && bez.pointOnLine3D(o[0], o[1], o[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), o[0] === s[0] && o[1] === s[1] && c[0] === 0 && c[1] === 0 && l[0] === 0 && l[1] === 0 && (o.length === 2 || o[2] === s[2] && c[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
			this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = n || 1, this.elem = e, this.container = r, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
			var d = t.k[0].s.length;
			for (this.v = createTypedArray("float32", d), this.pv = createTypedArray("float32", d), i = 0; i < d; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
			this._caching = {
				lastFrame: initFrame,
				lastIndex: 0,
				value: createTypedArray("float32", d)
			}, this.addEffect = addEffect;
		}
		var PropertyFactory = function() {
			function e(e, t, n, r, i) {
				t.sid && (t = e.globalData.slotManager.getProp(t));
				var a;
				if (!t.k.length) a = new ValueProperty(e, t, r, i);
				else if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, r, i);
				else switch (n) {
					case 0:
						a = new KeyframedValueProperty(e, t, r, i);
						break;
					case 1:
						a = new KeyframedMultidimensionalProperty(e, t, r, i);
						break;
					default: break;
				}
				return a.effectsSequence.length && i.addDynamicProperty(a), a;
			}
			return { getProp: e };
		}();
		function DynamicPropertyContainer() {}
		DynamicPropertyContainer.prototype = {
			addDynamicProperty: function(e) {
				this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0);
			},
			iterateDynamicProperties: function() {
				this._mdf = !1;
				var e, t = this.dynamicProperties.length;
				for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
			},
			initDynamicPropertyContainer: function(e) {
				this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
			}
		};
		var pointPool = function() {
			function e() {
				return createTypedArray("float32", 2);
			}
			return poolFactory(8, e);
		}();
		function ShapePath() {
			this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
		}
		ShapePath.prototype.setPathData = function(e, t) {
			this.c = e, this.setLength(t);
			for (var n = 0; n < t;) this.v[n] = pointPool.newElement(), this.o[n] = pointPool.newElement(), this.i[n] = pointPool.newElement(), n += 1;
		}, ShapePath.prototype.setLength = function(e) {
			for (; this._maxLength < e;) this.doubleArrayLength();
			this._length = e;
		}, ShapePath.prototype.doubleArrayLength = function() {
			this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
		}, ShapePath.prototype.setXYAt = function(e, t, n, r, i) {
			var a;
			switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
				case "v":
					a = this.v;
					break;
				case "i":
					a = this.i;
					break;
				case "o":
					a = this.o;
					break;
				default:
					a = [];
					break;
			}
			(!a[r] || a[r] && !i) && (a[r] = pointPool.newElement()), a[r][0] = e, a[r][1] = t;
		}, ShapePath.prototype.setTripleAt = function(e, t, n, r, i, a, o, s) {
			this.setXYAt(e, t, "v", o, s), this.setXYAt(n, r, "o", o, s), this.setXYAt(i, a, "i", o, s);
		}, ShapePath.prototype.reverse = function() {
			var e = new ShapePath();
			e.setPathData(this.c, this._length);
			var t = this.v, n = this.o, r = this.i, i = 0;
			this.c && (e.setTripleAt(t[0][0], t[0][1], r[0][0], r[0][1], n[0][0], n[0][1], 0, !1), i = 1);
			var a = this._length - 1, o = this._length, s;
			for (s = i; s < o; s += 1) e.setTripleAt(t[a][0], t[a][1], r[a][0], r[a][1], n[a][0], n[a][1], s, !1), --a;
			return e;
		}, ShapePath.prototype.length = function() {
			return this._length;
		};
		var shapePool = function() {
			function e() {
				return new ShapePath();
			}
			function t(e) {
				var t = e._length, n;
				for (n = 0; n < t; n += 1) pointPool.release(e.v[n]), pointPool.release(e.i[n]), pointPool.release(e.o[n]), e.v[n] = null, e.i[n] = null, e.o[n] = null;
				e._length = 0, e.c = !1;
			}
			function n(e) {
				var t = r.newElement(), n, i = e._length === void 0 ? e.v.length : e._length;
				for (t.setLength(i), t.c = e.c, n = 0; n < i; n += 1) t.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], n);
				return t;
			}
			var r = poolFactory(4, e, t);
			return r.clone = n, r;
		}();
		function ShapeCollection() {
			this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
		}
		ShapeCollection.prototype.addShape = function(e) {
			this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1;
		}, ShapeCollection.prototype.releaseShapes = function() {
			var e;
			for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
			this._length = 0;
		};
		var shapeCollectionPool = function() {
			var e = {
				newShapeCollection: i,
				release: a
			}, t = 0, n = 4, r = createSizedArray(n);
			function i() {
				var e;
				return t ? (--t, e = r[t]) : e = new ShapeCollection(), e;
			}
			function a(e) {
				var i, a = e._length;
				for (i = 0; i < a; i += 1) shapePool.release(e.shapes[i]);
				e._length = 0, t === n && (r = pooling.double(r), n *= 2), r[t] = e, t += 1;
			}
			return e;
		}(), ShapePropertyFactory = function() {
			var e = -999999;
			function t(e, t, n) {
				var r = n.lastIndex, i, a, o, s, c, l, d, p, g, _ = this.keyframes;
				if (e < _[0].t - this.offsetTime) i = _[0].s[0], o = !0, r = 0;
				else if (e >= _[_.length - 1].t - this.offsetTime) i = _[_.length - 1].s ? _[_.length - 1].s[0] : _[_.length - 2].e[0], o = !0;
				else {
					for (var y = r, x = _.length - 1, C = !0, ee, te, ne; C && (ee = _[y], te = _[y + 1], !(te.t - this.offsetTime > e));) y < x - 1 ? y += 1 : C = !1;
					if (ne = this.keyframesMetadata[y] || {}, o = ee.h === 1, r = y, !o) {
						if (e >= te.t - this.offsetTime) p = 1;
						else if (e < ee.t - this.offsetTime) p = 0;
						else {
							var T;
							ne.__fnct ? T = ne.__fnct : (T = BezierFactory.getBezierEasing(ee.o.x, ee.o.y, ee.i.x, ee.i.y).get, ne.__fnct = T), p = T((e - (ee.t - this.offsetTime)) / (te.t - this.offsetTime - (ee.t - this.offsetTime)));
						}
						a = te.s ? te.s[0] : ee.e[0];
					}
					i = ee.s[0];
				}
				for (l = t._length, d = i.i[0].length, n.lastIndex = r, s = 0; s < l; s += 1) for (c = 0; c < d; c += 1) g = o ? i.i[s][c] : i.i[s][c] + (a.i[s][c] - i.i[s][c]) * p, t.i[s][c] = g, g = o ? i.o[s][c] : i.o[s][c] + (a.o[s][c] - i.o[s][c]) * p, t.o[s][c] = g, g = o ? i.v[s][c] : i.v[s][c] + (a.v[s][c] - i.v[s][c]) * p, t.v[s][c] = g;
			}
			function n() {
				var t = this.comp.renderedFrame - this.offsetTime, n = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i = this._caching.lastFrame;
				return i !== e && (i < n && t < n || i > r && t > r) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv;
			}
			function r() {
				this.paths = this.localShapeCollection;
			}
			function i(e, t) {
				if (e._length !== t._length || e.c !== t.c) return !1;
				var n, r = e._length;
				for (n = 0; n < r; n += 1) if (e.v[n][0] !== t.v[n][0] || e.v[n][1] !== t.v[n][1] || e.o[n][0] !== t.o[n][0] || e.o[n][1] !== t.o[n][1] || e.i[n][0] !== t.i[n][0] || e.i[n][1] !== t.i[n][1]) return !1;
				return !0;
			}
			function a(e) {
				i(this.v, e) || (this.v = shapePool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
			}
			function o() {
				if (this.elem.globalData.frameId !== this.frameId) {
					if (!this.effectsSequence.length) {
						this._mdf = !1;
						return;
					}
					if (this.lock) {
						this.setVValue(this.pv);
						return;
					}
					this.lock = !0, this._mdf = !1;
					var e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k, t, n = this.effectsSequence.length;
					for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
					this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId;
				}
			}
			function s(e, t, n) {
				this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
				var i = n === 3 ? t.pt.k : t.ks.k;
				this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
			}
			function c(e) {
				this.effectsSequence.push(e), this.container.addDynamicProperty(this);
			}
			s.prototype.interpolateShape = t, s.prototype.getValue = o, s.prototype.setVValue = a, s.prototype.addEffect = c;
			function l(t, i, a) {
				this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = a === 3 ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
				var o = this.keyframes[0].s[0].i.length;
				this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, o), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = r, this._caching = {
					lastFrame: e,
					lastIndex: 0
				}, this.effectsSequence = [n.bind(this)];
			}
			l.prototype.getValue = o, l.prototype.interpolateShape = t, l.prototype.setVValue = a, l.prototype.addEffect = c;
			var d = function() {
				var e = roundCorner;
				function t(e, t) {
					this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
				}
				return t.prototype = {
					reset: r,
					getValue: function() {
						this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
					},
					convertEllToPath: function() {
						var t = this.p.v[0], n = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2, a = this.d !== 3, o = this.v;
						o.v[0][0] = t, o.v[0][1] = n - i, o.v[1][0] = a ? t + r : t - r, o.v[1][1] = n, o.v[2][0] = t, o.v[2][1] = n + i, o.v[3][0] = a ? t - r : t + r, o.v[3][1] = n, o.i[0][0] = a ? t - r * e : t + r * e, o.i[0][1] = n - i, o.i[1][0] = a ? t + r : t - r, o.i[1][1] = n - i * e, o.i[2][0] = a ? t + r * e : t - r * e, o.i[2][1] = n + i, o.i[3][0] = a ? t - r : t + r, o.i[3][1] = n + i * e, o.o[0][0] = a ? t + r * e : t - r * e, o.o[0][1] = n - i, o.o[1][0] = a ? t + r : t - r, o.o[1][1] = n + i * e, o.o[2][0] = a ? t - r * e : t + r * e, o.o[2][1] = n + i, o.o[3][0] = a ? t - r : t + r, o.o[3][1] = n - i * e;
					}
				}, extendPrototype([DynamicPropertyContainer], t), t;
			}(), p = function() {
				function e(e, t) {
					this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), t.sy === 1 ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
				}
				return e.prototype = {
					reset: r,
					getValue: function() {
						this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
					},
					convertStarToPath: function() {
						var e = Math.floor(this.pt.v) * 2, t = Math.PI * 2 / e, n = !0, r = this.or.v, i = this.ir.v, a = this.os.v, o = this.is.v, s = 2 * Math.PI * r / (e * 2), c = 2 * Math.PI * i / (e * 2), l, d, p, g, _ = -Math.PI / 2;
						_ += this.r.v;
						var y = this.data.d === 3 ? -1 : 1;
						for (this.v._length = 0, l = 0; l < e; l += 1) {
							d = n ? r : i, p = n ? a : o, g = n ? s : c;
							var x = d * Math.cos(_), C = d * Math.sin(_), ee = x === 0 && C === 0 ? 0 : C / Math.sqrt(x * x + C * C), te = x === 0 && C === 0 ? 0 : -x / Math.sqrt(x * x + C * C);
							x += +this.p.v[0], C += +this.p.v[1], this.v.setTripleAt(x, C, x - ee * g * p * y, C - te * g * p * y, x + ee * g * p * y, C + te * g * p * y, l, !0), n = !n, _ += t * y;
						}
					},
					convertPolygonToPath: function() {
						var e = Math.floor(this.pt.v), t = Math.PI * 2 / e, n = this.or.v, r = this.os.v, i = 2 * Math.PI * n / (e * 4), a, o = -Math.PI * .5, s = this.data.d === 3 ? -1 : 1;
						for (o += this.r.v, this.v._length = 0, a = 0; a < e; a += 1) {
							var c = n * Math.cos(o), l = n * Math.sin(o), d = c === 0 && l === 0 ? 0 : l / Math.sqrt(c * c + l * l), p = c === 0 && l === 0 ? 0 : -c / Math.sqrt(c * c + l * l);
							c += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(c, l, c - d * i * r * s, l - p * i * r * s, c + d * i * r * s, l + p * i * r * s, a, !0), o += t * s;
						}
						this.paths.length = 0, this.paths[0] = this.v;
					}
				}, extendPrototype([DynamicPropertyContainer], e), e;
			}(), g = function() {
				function e(e, t) {
					this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
				}
				return e.prototype = {
					convertRectToPath: function() {
						var e = this.p.v[0], t = this.p.v[1], n = this.s.v[0] / 2, r = this.s.v[1] / 2, i = bmMin(n, r, this.r.v), a = i * (1 - roundCorner);
						this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + i, e + n, t - r + a, 0, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - a, e + n, t + r - i, 1, !0), i === 0 ? (this.v.setTripleAt(e - n, t + r, e - n + a, t + r, e - n, t + r, 2), this.v.setTripleAt(e - n, t - r, e - n, t - r + a, e - n, t - r, 3)) : (this.v.setTripleAt(e + n - i, t + r, e + n - i, t + r, e + n - a, t + r, 2, !0), this.v.setTripleAt(e - n + i, t + r, e - n + a, t + r, e - n + i, t + r, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - i, e - n, t + r - a, 4, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + a, e - n, t - r + i, 5, !0), this.v.setTripleAt(e - n + i, t - r, e - n + i, t - r, e - n + a, t - r, 6, !0), this.v.setTripleAt(e + n - i, t - r, e + n - a, t - r, e + n - i, t - r, 7, !0))) : (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + a, e + n, t - r + i, 0, !0), i === 0 ? (this.v.setTripleAt(e - n, t - r, e - n + a, t - r, e - n, t - r, 1, !0), this.v.setTripleAt(e - n, t + r, e - n, t + r - a, e - n, t + r, 2, !0), this.v.setTripleAt(e + n, t + r, e + n - a, t + r, e + n, t + r, 3, !0)) : (this.v.setTripleAt(e + n - i, t - r, e + n - i, t - r, e + n - a, t - r, 1, !0), this.v.setTripleAt(e - n + i, t - r, e - n + a, t - r, e - n + i, t - r, 2, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + i, e - n, t - r + a, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - a, e - n, t + r - i, 4, !0), this.v.setTripleAt(e - n + i, t + r, e - n + i, t + r, e - n + a, t + r, 5, !0), this.v.setTripleAt(e + n - i, t + r, e + n - a, t + r, e + n - i, t + r, 6, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - i, e + n, t + r - a, 7, !0)));
					},
					getValue: function() {
						this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
					},
					reset: r
				}, extendPrototype([DynamicPropertyContainer], e), e;
			}();
			function _(e, t, n) {
				var r;
				return n === 3 || n === 4 ? r = (n === 3 ? t.pt : t.ks).k.length ? new l(e, t, n) : new s(e, t, n) : n === 5 ? r = new g(e, t) : n === 6 ? r = new d(e, t) : n === 7 && (r = new p(e, t)), r.k && e.addDynamicProperty(r), r;
			}
			function y() {
				return s;
			}
			function x() {
				return l;
			}
			var C = {};
			return C.getShapeProp = _, C.getConstructorFunction = y, C.getKeyframedConstructorFunction = x, C;
		}(), Matrix = function() {
			var e = Math.cos, t = Math.sin, n = Math.tan, r = Math.round;
			function i() {
				return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
			}
			function a(n) {
				if (n === 0) return this;
				var r = e(n), i = t(n);
				return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			}
			function o(n) {
				if (n === 0) return this;
				var r = e(n), i = t(n);
				return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1);
			}
			function s(n) {
				if (n === 0) return this;
				var r = e(n), i = t(n);
				return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1);
			}
			function c(n) {
				if (n === 0) return this;
				var r = e(n), i = t(n);
				return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			}
			function l(e, t) {
				return this._t(1, t, e, 1, 0, 0);
			}
			function d(e, t) {
				return this.shear(n(e), n(t));
			}
			function p(r, i) {
				var a = e(i), o = t(i);
				return this._t(a, o, 0, 0, -o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -o, 0, 0, o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			}
			function g(e, t, n) {
				return !n && n !== 0 && (n = 1), e === 1 && t === 1 && n === 1 ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
			}
			function _(e, t, n, r, i, a, o, s, c, l, d, p, g, _, y, x) {
				return this.props[0] = e, this.props[1] = t, this.props[2] = n, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = o, this.props[7] = s, this.props[8] = c, this.props[9] = l, this.props[10] = d, this.props[11] = p, this.props[12] = g, this.props[13] = _, this.props[14] = y, this.props[15] = x, this;
			}
			function y(e, t, n) {
				return n ||= 0, e !== 0 || t !== 0 || n !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1) : this;
			}
			function x(e, t, n, r, i, a, o, s, c, l, d, p, g, _, y, x) {
				var C = this.props;
				if (e === 1 && t === 0 && n === 0 && r === 0 && i === 0 && a === 1 && o === 0 && s === 0 && c === 0 && l === 0 && d === 1 && p === 0) return C[12] = C[12] * e + C[15] * g, C[13] = C[13] * a + C[15] * _, C[14] = C[14] * d + C[15] * y, C[15] *= x, this._identityCalculated = !1, this;
				var ee = C[0], te = C[1], ne = C[2], T = C[3], re = C[4], ie = C[5], ae = C[6], oe = C[7], se = C[8], ce = C[9], le = C[10], ue = C[11], de = C[12], fe = C[13], pe = C[14], me = C[15];
				return C[0] = ee * e + te * i + ne * c + T * g, C[1] = ee * t + te * a + ne * l + T * _, C[2] = ee * n + te * o + ne * d + T * y, C[3] = ee * r + te * s + ne * p + T * x, C[4] = re * e + ie * i + ae * c + oe * g, C[5] = re * t + ie * a + ae * l + oe * _, C[6] = re * n + ie * o + ae * d + oe * y, C[7] = re * r + ie * s + ae * p + oe * x, C[8] = se * e + ce * i + le * c + ue * g, C[9] = se * t + ce * a + le * l + ue * _, C[10] = se * n + ce * o + le * d + ue * y, C[11] = se * r + ce * s + le * p + ue * x, C[12] = de * e + fe * i + pe * c + me * g, C[13] = de * t + fe * a + pe * l + me * _, C[14] = de * n + fe * o + pe * d + me * y, C[15] = de * r + fe * s + pe * p + me * x, this._identityCalculated = !1, this;
			}
			function C(e) {
				var t = e.props;
				return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
			}
			function ee() {
				return this._identityCalculated ||= (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), !0), this._identity;
			}
			function te(e) {
				for (var t = 0; t < 16;) {
					if (e.props[t] !== this.props[t]) return !1;
					t += 1;
				}
				return !0;
			}
			function ne(e) {
				var t;
				for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
				return e;
			}
			function T(e) {
				var t;
				for (t = 0; t < 16; t += 1) this.props[t] = e[t];
			}
			function re(e, t, n) {
				return {
					x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
					y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
					z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
				};
			}
			function ie(e, t, n) {
				return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12];
			}
			function ae(e, t, n) {
				return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13];
			}
			function oe(e, t, n) {
				return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14];
			}
			function se() {
				var e = this.props[0] * this.props[5] - this.props[1] * this.props[4], t = this.props[5] / e, n = -this.props[1] / e, r = -this.props[4] / e, i = this.props[0] / e, a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e, o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e, s = new Matrix();
				return s.props[0] = t, s.props[1] = n, s.props[4] = r, s.props[5] = i, s.props[12] = a, s.props[13] = o, s;
			}
			function ce(e) {
				return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0);
			}
			function le(e) {
				var t, n = e.length, r = [];
				for (t = 0; t < n; t += 1) r[t] = ce(e[t]);
				return r;
			}
			function ue(e, t, n) {
				var r = createTypedArray("float32", 6);
				if (this.isIdentity()) r[0] = e[0], r[1] = e[1], r[2] = t[0], r[3] = t[1], r[4] = n[0], r[5] = n[1];
				else {
					var i = this.props[0], a = this.props[1], o = this.props[4], s = this.props[5], c = this.props[12], l = this.props[13];
					r[0] = e[0] * i + e[1] * o + c, r[1] = e[0] * a + e[1] * s + l, r[2] = t[0] * i + t[1] * o + c, r[3] = t[0] * a + t[1] * s + l, r[4] = n[0] * i + n[1] * o + c, r[5] = n[0] * a + n[1] * s + l;
				}
				return r;
			}
			function de(e, t, n) {
				return this.isIdentity() ? [
					e,
					t,
					n
				] : [
					e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
					e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
					e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
				];
			}
			function fe(e, t) {
				if (this.isIdentity()) return e + "," + t;
				var n = this.props;
				return Math.round((e * n[0] + t * n[4] + n[12]) * 100) / 100 + "," + Math.round((e * n[1] + t * n[5] + n[13]) * 100) / 100;
			}
			function pe() {
				for (var e = 0, t = this.props, n = "matrix3d(", i = 1e4; e < 16;) n += r(t[e] * i) / i, n += e === 15 ? ")" : ",", e += 1;
				return n;
			}
			function me(e) {
				var t = 1e4;
				return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? r(e * t) / t : e;
			}
			function he() {
				var e = this.props, t = me(e[0]), n = me(e[1]), r = me(e[4]), i = me(e[5]), a = me(e[12]), o = me(e[13]);
				return "matrix(" + t + "," + n + "," + r + "," + i + "," + a + "," + o + ")";
			}
			return function() {
				this.reset = i, this.rotate = a, this.rotateX = o, this.rotateY = s, this.rotateZ = c, this.skew = d, this.skewFromAxis = p, this.shear = l, this.scale = g, this.setTransform = _, this.translate = y, this.transform = x, this.multiply = C, this.applyToPoint = re, this.applyToX = ie, this.applyToY = ae, this.applyToZ = oe, this.applyToPointArray = de, this.applyToTriplePoints = ue, this.applyToPointStringified = fe, this.toCSS = pe, this.to2dCSS = he, this.clone = ne, this.cloneFromProps = T, this.equals = te, this.inversePoints = le, this.inversePoint = ce, this.getInverseMatrix = se, this._t = this.transform, this.isIdentity = ee, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
			};
		}();
		function _typeof$3(e) {
			"@babel/helpers - typeof";
			return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$3(e);
		}
		var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
		function setLocation(e) {
			setLocationHref(e);
		}
		function searchAnimations() {
			standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
		}
		function setSubframeRendering(e) {
			setSubframeEnabled(e);
		}
		function setPrefix(e) {
			setIdPrefix(e);
		}
		function loadAnimation(e) {
			return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e);
		}
		function setQuality(e) {
			if (typeof e == "string") switch (e) {
				case "high":
					setDefaultCurveSegments(200);
					break;
				default:
				case "medium":
					setDefaultCurveSegments(50);
					break;
				case "low":
					setDefaultCurveSegments(10);
					break;
			}
			else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
			getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
		}
		function inBrowser() {
			return typeof navigator < "u";
		}
		function installPlugin(e, t) {
			e === "expressions" && setExpressionsPlugin(t);
		}
		function getFactory(e) {
			switch (e) {
				case "propertyFactory": return PropertyFactory;
				case "shapePropertyFactory": return ShapePropertyFactory;
				case "matrix": return Matrix;
				default: return null;
			}
		}
		lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.13.0";
		function checkReady() {
			document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
		}
		function getQueryVariable(e) {
			for (var t = queryString.split("&"), n = 0; n < t.length; n += 1) {
				var r = t[n].split("=");
				if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1]);
			}
			return null;
		}
		var queryString = "";
		if (standalone) {
			var scripts = document.getElementsByTagName("script"), myScript = scripts[scripts.length - 1] || { src: "" };
			queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer");
		}
		var readyStateCheckInterval = setInterval(checkReady, 100);
		try {
			!((exports === void 0 ? "undefined" : _typeof$3(exports)) === "object" && module !== void 0) && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
		} catch {}
		var ShapeModifiers = function() {
			var e = {}, t = {};
			e.registerModifier = n, e.getModifier = r;
			function n(e, n) {
				t[e] || (t[e] = n);
			}
			function r(e, n, r) {
				return new t[e](n, r);
			}
			return e;
		}();
		function ShapeModifier() {}
		ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
			if (!this.closed) {
				e.sh.container.addDynamicProperty(e.sh);
				var t = {
					shape: e.sh,
					data: e,
					localShapeCollection: shapeCollectionPool.newShapeCollection()
				};
				this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated();
			}
		}, ShapeModifier.prototype.init = function(e, t) {
			this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
		}, ShapeModifier.prototype.processKeys = function() {
			this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
		}, extendPrototype([DynamicPropertyContainer], ShapeModifier);
		function TrimModifier() {}
		extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
			this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
		}, TrimModifier.prototype.addShapeToModifier = function(e) {
			e.pathsData = [];
		}, TrimModifier.prototype.calculateShapeEdges = function(e, t, n, r, i) {
			var a = [];
			t <= 1 ? a.push({
				s: e,
				e: t
			}) : e >= 1 ? a.push({
				s: e - 1,
				e: t - 1
			}) : (a.push({
				s: e,
				e: 1
			}), a.push({
				s: 0,
				e: t - 1
			}));
			var o = [], s, c = a.length, l;
			for (s = 0; s < c; s += 1) if (l = a[s], !(l.e * i < r || l.s * i > r + n)) {
				var d = l.s * i <= r ? 0 : (l.s * i - r) / n, p = l.e * i >= r + n ? 1 : (l.e * i - r) / n;
				o.push([d, p]);
			}
			return o.length || o.push([0, 0]), o;
		}, TrimModifier.prototype.releasePathsData = function(e) {
			var t, n = e.length;
			for (t = 0; t < n; t += 1) segmentsLengthPool.release(e[t]);
			return e.length = 0, e;
		}, TrimModifier.prototype.processShapes = function(e) {
			var t, n;
			if (this._mdf || e) {
				var r = this.o.v % 360 / 360;
				if (r < 0 && (r += 1), t = this.s.v > 1 ? 1 + r : this.s.v < 0 ? 0 + r : this.s.v + r, n = this.e.v > 1 ? 1 + r : this.e.v < 0 ? 0 + r : this.e.v + r, t > n) {
					var i = t;
					t = n, n = i;
				}
				t = Math.round(t * 1e4) * 1e-4, n = Math.round(n * 1e4) * 1e-4, this.sValue = t, this.eValue = n;
			} else t = this.sValue, n = this.eValue;
			var a, o, s = this.shapes.length, c, l, d, p, g, _ = 0;
			if (n === t) for (o = 0; o < s; o += 1) this.shapes[o].localShapeCollection.releaseShapes(), this.shapes[o].shape._mdf = !0, this.shapes[o].shape.paths = this.shapes[o].localShapeCollection, this._mdf && (this.shapes[o].pathsData.length = 0);
			else if (!(n === 1 && t === 0 || n === 0 && t === 1)) {
				var y = [], x, C;
				for (o = 0; o < s; o += 1) if (x = this.shapes[o], !x.shape._mdf && !this._mdf && !e && this.m !== 2) x.shape.paths = x.localShapeCollection;
				else {
					if (a = x.shape.paths, l = a._length, g = 0, !x.shape._mdf && x.pathsData.length) g = x.totalShapeLength;
					else {
						for (d = this.releasePathsData(x.pathsData), c = 0; c < l; c += 1) p = bez.getSegmentsLength(a.shapes[c]), d.push(p), g += p.totalLength;
						x.totalShapeLength = g, x.pathsData = d;
					}
					_ += g, x.shape._mdf = !0;
				}
				var ee = t, te = n, ne = 0, T;
				for (o = s - 1; o >= 0; --o) if (x = this.shapes[o], x.shape._mdf) {
					for (C = x.localShapeCollection, C.releaseShapes(), this.m === 2 && s > 1 ? (T = this.calculateShapeEdges(t, n, x.totalShapeLength, ne, _), ne += x.totalShapeLength) : T = [[ee, te]], l = T.length, c = 0; c < l; c += 1) {
						ee = T[c][0], te = T[c][1], y.length = 0, te <= 1 ? y.push({
							s: x.totalShapeLength * ee,
							e: x.totalShapeLength * te
						}) : ee >= 1 ? y.push({
							s: x.totalShapeLength * (ee - 1),
							e: x.totalShapeLength * (te - 1)
						}) : (y.push({
							s: x.totalShapeLength * ee,
							e: x.totalShapeLength
						}), y.push({
							s: 0,
							e: x.totalShapeLength * (te - 1)
						}));
						var re = this.addShapes(x, y[0]);
						if (y[0].s !== y[0].e) {
							if (y.length > 1) if (x.shape.paths.shapes[x.shape.paths._length - 1].c) {
								var ie = re.pop();
								this.addPaths(re, C), re = this.addShapes(x, y[1], ie);
							} else this.addPaths(re, C), re = this.addShapes(x, y[1]);
							this.addPaths(re, C);
						}
					}
					x.shape.paths = C;
				}
			} else if (this._mdf) for (o = 0; o < s; o += 1) this.shapes[o].pathsData.length = 0, this.shapes[o].shape._mdf = !0;
		}, TrimModifier.prototype.addPaths = function(e, t) {
			var n, r = e.length;
			for (n = 0; n < r; n += 1) t.addShape(e[n]);
		}, TrimModifier.prototype.addSegment = function(e, t, n, r, i, a, o) {
			i.setXYAt(t[0], t[1], "o", a), i.setXYAt(n[0], n[1], "i", a + 1), o && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(r[0], r[1], "v", a + 1);
		}, TrimModifier.prototype.addSegmentFromArray = function(e, t, n, r) {
			t.setXYAt(e[1], e[5], "o", n), t.setXYAt(e[2], e[6], "i", n + 1), r && t.setXYAt(e[0], e[4], "v", n), t.setXYAt(e[3], e[7], "v", n + 1);
		}, TrimModifier.prototype.addShapes = function(e, t, n) {
			var r = e.pathsData, i = e.shape.paths.shapes, a, o = e.shape.paths._length, s, c, l = 0, d, p, g, _, y = [], x, C = !0;
			for (n ? (p = n._length, x = n._length) : (n = shapePool.newElement(), p = 0, x = 0), y.push(n), a = 0; a < o; a += 1) {
				for (g = r[a].lengths, n.c = i[a].c, c = i[a].c ? g.length : g.length + 1, s = 1; s < c; s += 1) if (d = g[s - 1], l + d.addedLength < t.s) l += d.addedLength, n.c = !1;
				else if (l > t.e) {
					n.c = !1;
					break;
				} else t.s <= l && t.e >= l + d.addedLength ? (this.addSegment(i[a].v[s - 1], i[a].o[s - 1], i[a].i[s], i[a].v[s], n, p, C), C = !1) : (_ = bez.getNewSegment(i[a].v[s - 1], i[a].v[s], i[a].o[s - 1], i[a].i[s], (t.s - l) / d.addedLength, (t.e - l) / d.addedLength, g[s - 1]), this.addSegmentFromArray(_, n, p, C), C = !1, n.c = !1), l += d.addedLength, p += 1;
				if (i[a].c && g.length) {
					if (d = g[s - 1], l <= t.e) {
						var ee = g[s - 1].addedLength;
						t.s <= l && t.e >= l + ee ? (this.addSegment(i[a].v[s - 1], i[a].o[s - 1], i[a].i[0], i[a].v[0], n, p, C), C = !1) : (_ = bez.getNewSegment(i[a].v[s - 1], i[a].v[0], i[a].o[s - 1], i[a].i[0], (t.s - l) / ee, (t.e - l) / ee, g[s - 1]), this.addSegmentFromArray(_, n, p, C), C = !1, n.c = !1);
					} else n.c = !1;
					l += d.addedLength, p += 1;
				}
				if (n._length && (n.setXYAt(n.v[x][0], n.v[x][1], "i", x), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), l > t.e) break;
				a < o - 1 && (n = shapePool.newElement(), C = !0, y.push(n), p = 0);
			}
			return y;
		};
		function PuckerAndBloatModifier() {}
		extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
			this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
		}, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
			var n = t / 100, r = [0, 0], i = e._length, a = 0;
			for (a = 0; a < i; a += 1) r[0] += e.v[a][0], r[1] += e.v[a][1];
			r[0] /= i, r[1] /= i;
			var o = shapePool.newElement();
			o.c = e.c;
			var s, c, l, d, p, g;
			for (a = 0; a < i; a += 1) s = e.v[a][0] + (r[0] - e.v[a][0]) * n, c = e.v[a][1] + (r[1] - e.v[a][1]) * n, l = e.o[a][0] + (r[0] - e.o[a][0]) * -n, d = e.o[a][1] + (r[1] - e.o[a][1]) * -n, p = e.i[a][0] + (r[0] - e.i[a][0]) * -n, g = e.i[a][1] + (r[1] - e.i[a][1]) * -n, o.setTripleAt(s, c, l, d, p, g, a);
			return o;
		}, PuckerAndBloatModifier.prototype.processShapes = function(e) {
			var t, n, r = this.shapes.length, i, a, o = this.amount.v;
			if (o !== 0) {
				var s, c;
				for (n = 0; n < r; n += 1) {
					if (s = this.shapes[n], c = s.localShapeCollection, !(!s.shape._mdf && !this._mdf && !e)) for (c.releaseShapes(), s.shape._mdf = !0, t = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) c.addShape(this.processPath(t[i], o));
					s.shape.paths = s.localShapeCollection;
				}
			}
			this.dynamicProperties.length || (this._mdf = !1);
		};
		var TransformPropertyFactory = function() {
			var e = [0, 0];
			function t(e) {
				var t = this._mdf;
				this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
			}
			function n(t) {
				if (this.elem.globalData.frameId !== this.frameId) {
					if (this._isDirty &&= (this.precalculateMatrix(), !1), this.iterateDynamicProperties(), this._mdf || t) {
						var n;
						if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
							var r, i;
							if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (r = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
							else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
								r = [], i = [];
								var a = this.px, o = this.py;
								a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + .01) / n, 0), r[1] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / n, 0), i[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0), r[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / n, 0), i[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0)) : (r = [a.pv, o.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / n, a.offsetTime), i[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime));
							} else i = e, r = i;
							this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]));
						}
						this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
					}
					this.frameId = this.elem.globalData.frameId;
				}
			}
			function r() {
				if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
				else return;
				if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
				else return;
				if (this.sk) if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
				else return;
				this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
			}
			function i() {}
			function a(e) {
				this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0;
			}
			function o(e, t, n) {
				if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || { k: [
					0,
					0,
					0
				] }, 1, 0, this), t.rx) {
					if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
						var r, i = t.or.k.length;
						for (r = 0; r < i; r += 1) t.or.k[r].to = null, t.or.k[r].ti = null;
					}
					this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0;
				} else this.r = PropertyFactory.getProp(e, t.r || { k: 0 }, 0, degToRads, this);
				t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || { k: [
					0,
					0,
					0
				] }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || { k: [
					100,
					100,
					100
				] }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
					_mdf: !1,
					v: 1
				}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
			}
			o.prototype = {
				applyToMatrix: t,
				getValue: n,
				precalculateMatrix: r,
				autoOrient: i
			}, extendPrototype([DynamicPropertyContainer], o), o.prototype.addDynamicProperty = a, o.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
			function s(e, t, n) {
				return new o(e, t, n);
			}
			return { getTransformProperty: s };
		}();
		function RepeaterModifier() {}
		extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
			this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
		}, RepeaterModifier.prototype.applyTransforms = function(e, t, n, r, i, a) {
			var o = a ? -1 : 1, s = r.s.v[0] + (1 - r.s.v[0]) * (1 - i), c = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
			e.translate(r.p.v[0] * o * i, r.p.v[1] * o * i, r.p.v[2]), t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), t.rotate(-r.r.v * o * i), t.translate(r.a.v[0], r.a.v[1], r.a.v[2]), n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), n.scale(a ? 1 / s : s, a ? 1 / c : c), n.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
		}, RepeaterModifier.prototype.init = function(e, t, n, r) {
			for (this.elem = e, this.arr = t, this.pos = n, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[n]); n > 0;) --n, this._elements.unshift(t[n]);
			this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
		}, RepeaterModifier.prototype.resetElements = function(e) {
			var t, n = e.length;
			for (t = 0; t < n; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it);
		}, RepeaterModifier.prototype.cloneElements = function(e) {
			var t = JSON.parse(JSON.stringify(e));
			return this.resetElements(t), t;
		}, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
			var n, r = e.length;
			for (n = 0; n < r; n += 1) e[n]._render = t, e[n].ty === "gr" && this.changeGroupRender(e[n].it, t);
		}, RepeaterModifier.prototype.processShapes = function(e) {
			var t, n, r, i, a, o = !1;
			if (this._mdf || e) {
				var s = Math.ceil(this.c.v);
				if (this._groups.length < s) {
					for (; this._groups.length < s;) {
						var c = {
							it: this.cloneElements(this._elements),
							ty: "gr"
						};
						c.it.push({
							a: {
								a: 0,
								ix: 1,
								k: [0, 0]
							},
							nm: "Transform",
							o: {
								a: 0,
								ix: 7,
								k: 100
							},
							p: {
								a: 0,
								ix: 2,
								k: [0, 0]
							},
							r: {
								a: 1,
								ix: 6,
								k: [{
									s: 0,
									e: 0,
									t: 0
								}, {
									s: 0,
									e: 0,
									t: 1
								}]
							},
							s: {
								a: 0,
								ix: 3,
								k: [100, 100]
							},
							sa: {
								a: 0,
								ix: 5,
								k: 0
							},
							sk: {
								a: 0,
								ix: 4,
								k: 0
							},
							ty: "tr"
						}), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1;
					}
					this.elem.reloadShapes(), o = !0;
				}
				a = 0;
				var l;
				for (r = 0; r <= this._groups.length - 1; r += 1) {
					if (l = a < s, this._groups[r]._render = l, this.changeGroupRender(this._groups[r].it, l), !l) {
						var d = this.elemsData[r].it, p = d[d.length - 1];
						p.transform.op.v === 0 ? p.transform.op._mdf = !1 : (p.transform.op._mdf = !0, p.transform.op.v = 0);
					}
					a += 1;
				}
				this._currentCopies = s;
				var g = this.o.v, _ = g % 1, y = g > 0 ? Math.floor(g) : Math.ceil(g), x = this.pMatrix.props, C = this.rMatrix.props, ee = this.sMatrix.props;
				this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
				var te = 0;
				if (g > 0) {
					for (; te < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), te += 1;
					_ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, _, !1), te += _);
				} else if (g < 0) {
					for (; te > y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), --te;
					_ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -_, !0), te -= _);
				}
				r = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
				for (var ne, T; a;) {
					if (t = this.elemsData[r].it, n = t[t.length - 1].transform.mProps.v.props, T = n.length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), te !== 0) {
						for ((r !== 0 && i === 1 || r !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]), this.matrix.transform(ee[0], ee[1], ee[2], ee[3], ee[4], ee[5], ee[6], ee[7], ee[8], ee[9], ee[10], ee[11], ee[12], ee[13], ee[14], ee[15]), this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), ne = 0; ne < T; ne += 1) n[ne] = this.matrix.props[ne];
						this.matrix.reset();
					} else for (this.matrix.reset(), ne = 0; ne < T; ne += 1) n[ne] = this.matrix.props[ne];
					te += 1, --a, r += i;
				}
			} else for (a = this._currentCopies, r = 0, i = 1; a;) t = this.elemsData[r].it, n = t[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, --a, r += i;
			return o;
		}, RepeaterModifier.prototype.addShape = function() {};
		function RoundCornersModifier() {}
		extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
			this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
		}, RoundCornersModifier.prototype.processPath = function(e, t) {
			var n = shapePool.newElement();
			n.c = e.c;
			var r, i = e._length, a, o, s, c, l, d, p = 0, g, _, y, x, C, ee;
			for (r = 0; r < i; r += 1) a = e.v[r], s = e.o[r], o = e.i[r], a[0] === s[0] && a[1] === s[1] && a[0] === o[0] && a[1] === o[1] ? (r === 0 || r === i - 1) && !e.c ? (n.setTripleAt(a[0], a[1], s[0], s[1], o[0], o[1], p), p += 1) : (c = r === 0 ? e.v[i - 1] : e.v[r - 1], l = Math.sqrt((a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2), d = l ? Math.min(l / 2, t) / l : 0, C = a[0] + (c[0] - a[0]) * d, g = C, ee = a[1] - (a[1] - c[1]) * d, _ = ee, y = g - (g - a[0]) * roundCorner, x = _ - (_ - a[1]) * roundCorner, n.setTripleAt(g, _, y, x, C, ee, p), p += 1, c = r === i - 1 ? e.v[0] : e.v[r + 1], l = Math.sqrt((a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2), d = l ? Math.min(l / 2, t) / l : 0, y = a[0] + (c[0] - a[0]) * d, g = y, x = a[1] + (c[1] - a[1]) * d, _ = x, C = g - (g - a[0]) * roundCorner, ee = _ - (_ - a[1]) * roundCorner, n.setTripleAt(g, _, y, x, C, ee, p), p += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], p), p += 1);
			return n;
		}, RoundCornersModifier.prototype.processShapes = function(e) {
			var t, n, r = this.shapes.length, i, a, o = this.rd.v;
			if (o !== 0) {
				var s, c;
				for (n = 0; n < r; n += 1) {
					if (s = this.shapes[n], c = s.localShapeCollection, !(!s.shape._mdf && !this._mdf && !e)) for (c.releaseShapes(), s.shape._mdf = !0, t = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) c.addShape(this.processPath(t[i], o));
					s.shape.paths = s.localShapeCollection;
				}
			}
			this.dynamicProperties.length || (this._mdf = !1);
		};
		function floatEqual(e, t) {
			return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t));
		}
		function floatZero(e) {
			return Math.abs(e) <= 1e-5;
		}
		function lerp(e, t, n) {
			return e * (1 - n) + t * n;
		}
		function lerpPoint(e, t, n) {
			return [lerp(e[0], t[0], n), lerp(e[1], t[1], n)];
		}
		function quadRoots(e, t, n) {
			if (e === 0) return [];
			var r = t * t - 4 * e * n;
			if (r < 0) return [];
			var i = -t / (2 * e);
			if (r === 0) return [i];
			var a = Math.sqrt(r) / (2 * e);
			return [i - a, i + a];
		}
		function polynomialCoefficients(e, t, n, r) {
			return [
				-e + 3 * t - 3 * n + r,
				3 * e - 6 * t + 3 * n,
				-3 * e + 3 * t,
				e
			];
		}
		function singlePoint(e) {
			return new PolynomialBezier(e, e, e, e, !1);
		}
		function PolynomialBezier(e, t, n, r, i) {
			i && pointEqual(e, t) && (t = lerpPoint(e, r, 1 / 3)), i && pointEqual(n, r) && (n = lerpPoint(e, r, 2 / 3));
			var a = polynomialCoefficients(e[0], t[0], n[0], r[0]), o = polynomialCoefficients(e[1], t[1], n[1], r[1]);
			this.a = [a[0], o[0]], this.b = [a[1], o[1]], this.c = [a[2], o[2]], this.d = [a[3], o[3]], this.points = [
				e,
				t,
				n,
				r
			];
		}
		PolynomialBezier.prototype.point = function(e) {
			return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]];
		}, PolynomialBezier.prototype.derivative = function(e) {
			return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]];
		}, PolynomialBezier.prototype.tangentAngle = function(e) {
			var t = this.derivative(e);
			return Math.atan2(t[1], t[0]);
		}, PolynomialBezier.prototype.normalAngle = function(e) {
			var t = this.derivative(e);
			return Math.atan2(t[0], t[1]);
		}, PolynomialBezier.prototype.inflectionPoints = function() {
			var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
			if (floatZero(e)) return [];
			var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e, n = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
			if (n < 0) return [];
			var r = Math.sqrt(n);
			return floatZero(r) ? r > 0 && r < 1 ? [t] : [] : [t - r, t + r].filter(function(e) {
				return e > 0 && e < 1;
			});
		}, PolynomialBezier.prototype.split = function(e) {
			if (e <= 0) return [singlePoint(this.points[0]), this];
			if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
			var t = lerpPoint(this.points[0], this.points[1], e), n = lerpPoint(this.points[1], this.points[2], e), r = lerpPoint(this.points[2], this.points[3], e), i = lerpPoint(t, n, e), a = lerpPoint(n, r, e), o = lerpPoint(i, a, e);
			return [new PolynomialBezier(this.points[0], t, i, o, !0), new PolynomialBezier(o, a, r, this.points[3], !0)];
		};
		function extrema(e, t) {
			var n = e.points[0][t], r = e.points[e.points.length - 1][t];
			if (n > r) {
				var i = r;
				r = n, n = i;
			}
			for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0; o < a.length; o += 1) if (a[o] > 0 && a[o] < 1) {
				var s = e.point(a[o])[t];
				s < n ? n = s : s > r && (r = s);
			}
			return {
				min: n,
				max: r
			};
		}
		PolynomialBezier.prototype.bounds = function() {
			return {
				x: extrema(this, 0),
				y: extrema(this, 1)
			};
		}, PolynomialBezier.prototype.boundingBox = function() {
			var e = this.bounds();
			return {
				left: e.x.min,
				right: e.x.max,
				top: e.y.min,
				bottom: e.y.max,
				width: e.x.max - e.x.min,
				height: e.y.max - e.y.min,
				cx: (e.x.max + e.x.min) / 2,
				cy: (e.y.max + e.y.min) / 2
			};
		};
		function intersectData(e, t, n) {
			var r = e.boundingBox();
			return {
				cx: r.cx,
				cy: r.cy,
				width: r.width,
				height: r.height,
				bez: e,
				t: (t + n) / 2,
				t1: t,
				t2: n
			};
		}
		function splitData(e) {
			var t = e.bez.split(.5);
			return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
		}
		function boxIntersect(e, t) {
			return Math.abs(e.cx - t.cx) * 2 < e.width + t.width && Math.abs(e.cy - t.cy) * 2 < e.height + t.height;
		}
		function intersectsImpl(e, t, n, r, i, a) {
			if (boxIntersect(e, t)) {
				if (n >= a || e.width <= r && e.height <= r && t.width <= r && t.height <= r) {
					i.push([e.t, t.t]);
					return;
				}
				var o = splitData(e), s = splitData(t);
				intersectsImpl(o[0], s[0], n + 1, r, i, a), intersectsImpl(o[0], s[1], n + 1, r, i, a), intersectsImpl(o[1], s[0], n + 1, r, i, a), intersectsImpl(o[1], s[1], n + 1, r, i, a);
			}
		}
		PolynomialBezier.prototype.intersections = function(e, t, n) {
			t === void 0 && (t = 2), n === void 0 && (n = 7);
			var r = [];
			return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, r, n), r;
		}, PolynomialBezier.shapeSegment = function(e, t) {
			var n = (t + 1) % e.length();
			return new PolynomialBezier(e.v[t], e.o[t], e.i[n], e.v[n], !0);
		}, PolynomialBezier.shapeSegmentInverted = function(e, t) {
			var n = (t + 1) % e.length();
			return new PolynomialBezier(e.v[n], e.i[n], e.o[t], e.v[t], !0);
		};
		function crossProduct(e, t) {
			return [
				e[1] * t[2] - e[2] * t[1],
				e[2] * t[0] - e[0] * t[2],
				e[0] * t[1] - e[1] * t[0]
			];
		}
		function lineIntersection(e, t, n, r) {
			var i = [
				e[0],
				e[1],
				1
			], a = [
				t[0],
				t[1],
				1
			], o = [
				n[0],
				n[1],
				1
			], s = [
				r[0],
				r[1],
				1
			], c = crossProduct(crossProduct(i, a), crossProduct(o, s));
			return floatZero(c[2]) ? null : [c[0] / c[2], c[1] / c[2]];
		}
		function polarOffset(e, t, n) {
			return [e[0] + Math.cos(t) * n, e[1] - Math.sin(t) * n];
		}
		function pointDistance(e, t) {
			return Math.hypot(e[0] - t[0], e[1] - t[1]);
		}
		function pointEqual(e, t) {
			return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
		}
		function ZigZagModifier() {}
		extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
			this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
		};
		function setPoint(e, t, n, r, i, a, o) {
			var s = n - Math.PI / 2, c = n + Math.PI / 2, l = t[0] + Math.cos(n) * r * i, d = t[1] - Math.sin(n) * r * i;
			e.setTripleAt(l, d, l + Math.cos(s) * a, d - Math.sin(s) * a, l + Math.cos(c) * o, d - Math.sin(c) * o, e.length());
		}
		function getPerpendicularVector(e, t) {
			var n = [t[0] - e[0], t[1] - e[1]], r = -Math.PI * .5;
			return [Math.cos(r) * n[0] - Math.sin(r) * n[1], Math.sin(r) * n[0] + Math.cos(r) * n[1]];
		}
		function getProjectingAngle(e, t) {
			var n = t === 0 ? e.length() - 1 : t - 1, r = (t + 1) % e.length(), i = e.v[n], a = e.v[r], o = getPerpendicularVector(i, a);
			return Math.atan2(0, 1) - Math.atan2(o[1], o[0]);
		}
		function zigZagCorner(e, t, n, r, i, a, o) {
			var s = getProjectingAngle(t, n), c = t.v[n % t._length], l = t.v[n === 0 ? t._length - 1 : n - 1], d = t.v[(n + 1) % t._length], p = a === 2 ? Math.sqrt((c[0] - l[0]) ** 2 + (c[1] - l[1]) ** 2) : 0, g = a === 2 ? Math.sqrt((c[0] - d[0]) ** 2 + (c[1] - d[1]) ** 2) : 0;
			setPoint(e, t.v[n % t._length], s, o, r, g / ((i + 1) * 2), p / ((i + 1) * 2), a);
		}
		function zigZagSegment(e, t, n, r, i, a) {
			for (var o = 0; o < r; o += 1) {
				var s = (o + 1) / (r + 1), c = i === 2 ? Math.sqrt((t.points[3][0] - t.points[0][0]) ** 2 + (t.points[3][1] - t.points[0][1]) ** 2) : 0, l = t.normalAngle(s);
				setPoint(e, t.point(s), l, a, n, c / ((r + 1) * 2), c / ((r + 1) * 2), i), a = -a;
			}
			return a;
		}
		ZigZagModifier.prototype.processPath = function(e, t, n, r) {
			var i = e._length, a = shapePool.newElement();
			if (a.c = e.c, e.c || --i, i === 0) return a;
			var o = -1, s = PolynomialBezier.shapeSegment(e, 0);
			zigZagCorner(a, e, 0, t, n, r, o);
			for (var c = 0; c < i; c += 1) o = zigZagSegment(a, s, t, n, r, -o), s = c === i - 1 && !e.c ? null : PolynomialBezier.shapeSegment(e, (c + 1) % i), zigZagCorner(a, e, c + 1, t, n, r, o);
			return a;
		}, ZigZagModifier.prototype.processShapes = function(e) {
			var t, n, r = this.shapes.length, i, a, o = this.amplitude.v, s = Math.max(0, Math.round(this.frequency.v)), c = this.pointsType.v;
			if (o !== 0) {
				var l, d;
				for (n = 0; n < r; n += 1) {
					if (l = this.shapes[n], d = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e)) for (d.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, a = l.shape.paths._length, i = 0; i < a; i += 1) d.addShape(this.processPath(t[i], o, s, c));
					l.shape.paths = l.localShapeCollection;
				}
			}
			this.dynamicProperties.length || (this._mdf = !1);
		};
		function linearOffset(e, t, n) {
			var r = Math.atan2(t[0] - e[0], t[1] - e[1]);
			return [polarOffset(e, r, n), polarOffset(t, r, n)];
		}
		function offsetSegment(e, t) {
			var n, r, i, a, o, s, c = linearOffset(e.points[0], e.points[1], t);
			n = c[0], r = c[1], c = linearOffset(e.points[1], e.points[2], t), i = c[0], a = c[1], c = linearOffset(e.points[2], e.points[3], t), o = c[0], s = c[1];
			var l = lineIntersection(n, r, i, a);
			l === null && (l = r);
			var d = lineIntersection(o, s, i, a);
			return d === null && (d = o), new PolynomialBezier(n, l, d, s);
		}
		function joinLines(e, t, n, r, i) {
			var a = t.points[3], o = n.points[0];
			if (r === 3 || pointEqual(a, o)) return a;
			if (r === 2) {
				var s = -t.tangentAngle(1), c = -n.tangentAngle(0) + Math.PI, l = lineIntersection(a, polarOffset(a, s + Math.PI / 2, 100), o, polarOffset(o, s + Math.PI / 2, 100)), d = l ? pointDistance(l, a) : pointDistance(a, o) / 2, p = polarOffset(a, s, 2 * d * roundCorner);
				return e.setXYAt(p[0], p[1], "o", e.length() - 1), p = polarOffset(o, c, 2 * d * roundCorner), e.setTripleAt(o[0], o[1], o[0], o[1], p[0], p[1], e.length()), o;
			}
			var g = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, o, pointEqual(o, n.points[1]) ? n.points[3] : n.points[1]);
			return g && pointDistance(g, a) < i ? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g) : a;
		}
		function getIntersection(e, t) {
			var n = e.intersections(t);
			return n.length && floatEqual(n[0][0], 1) && n.shift(), n.length ? n[0] : null;
		}
		function pruneSegmentIntersection(e, t) {
			var n = e.slice(), r = t.slice(), i = getIntersection(e[e.length - 1], t[0]);
			return i && (n[e.length - 1] = e[e.length - 1].split(i[0])[0], r[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1]), i) ? [[e[0].split(i[0])[0]], [t[t.length - 1].split(i[1])[1]]] : [n, r];
		}
		function pruneIntersections(e) {
			for (var t, n = 1; n < e.length; n += 1) t = pruneSegmentIntersection(e[n - 1], e[n]), e[n - 1] = t[0], e[n] = t[1];
			return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e;
		}
		function offsetSegmentSplit(e, t) {
			var n = e.inflectionPoints(), r, i, a, o;
			if (n.length === 0) return [offsetSegment(e, t)];
			if (n.length === 1 || floatEqual(n[1], 1)) return a = e.split(n[0]), r = a[0], i = a[1], [offsetSegment(r, t), offsetSegment(i, t)];
			a = e.split(n[0]), r = a[0];
			var s = (n[1] - n[0]) / (1 - n[0]);
			return a = a[1].split(s), o = a[0], i = a[1], [
				offsetSegment(r, t),
				offsetSegment(o, t),
				offsetSegment(i, t)
			];
		}
		function OffsetPathModifier() {}
		extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
			this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
		}, OffsetPathModifier.prototype.processPath = function(e, t, n, r) {
			var i = shapePool.newElement();
			i.c = e.c;
			var a = e.length();
			e.c || --a;
			var o, s, c, l = [];
			for (o = 0; o < a; o += 1) c = PolynomialBezier.shapeSegment(e, o), l.push(offsetSegmentSplit(c, t));
			if (!e.c) for (o = a - 1; o >= 0; --o) c = PolynomialBezier.shapeSegmentInverted(e, o), l.push(offsetSegmentSplit(c, t));
			l = pruneIntersections(l);
			var d = null, p = null;
			for (o = 0; o < l.length; o += 1) {
				var g = l[o];
				for (p && (d = joinLines(i, p, g[0], n, r)), p = g[g.length - 1], s = 0; s < g.length; s += 1) c = g[s], d && pointEqual(c.points[0], d) ? i.setXYAt(c.points[1][0], c.points[1][1], "o", i.length() - 1) : i.setTripleAt(c.points[0][0], c.points[0][1], c.points[1][0], c.points[1][1], c.points[0][0], c.points[0][1], i.length()), i.setTripleAt(c.points[3][0], c.points[3][1], c.points[3][0], c.points[3][1], c.points[2][0], c.points[2][1], i.length()), d = c.points[3];
			}
			return l.length && joinLines(i, p, l[0][0], n, r), i;
		}, OffsetPathModifier.prototype.processShapes = function(e) {
			var t, n, r = this.shapes.length, i, a, o = this.amount.v, s = this.miterLimit.v, c = this.lineJoin;
			if (o !== 0) {
				var l, d;
				for (n = 0; n < r; n += 1) {
					if (l = this.shapes[n], d = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e)) for (d.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, a = l.shape.paths._length, i = 0; i < a; i += 1) d.addShape(this.processPath(t[i], o, c, s));
					l.shape.paths = l.localShapeCollection;
				}
			}
			this.dynamicProperties.length || (this._mdf = !1);
		};
		function getFontProperties(e) {
			for (var t = e.fStyle ? e.fStyle.split(" ") : [], n = "normal", r = "normal", i = t.length, a, o = 0; o < i; o += 1) switch (a = t[o].toLowerCase(), a) {
				case "italic":
					r = "italic";
					break;
				case "bold":
					n = "700";
					break;
				case "black":
					n = "900";
					break;
				case "medium":
					n = "500";
					break;
				case "regular":
				case "normal":
					n = "400";
					break;
				case "light":
				case "thin":
					n = "200";
					break;
				default: break;
			}
			return {
				style: r,
				weight: e.fWeight || n
			};
		}
		var FontManager = function() {
			var e = 5e3, t = {
				w: 0,
				size: 0,
				shapes: [],
				data: { shapes: [] }
			}, n = [];
			n = n.concat([
				2304,
				2305,
				2306,
				2307,
				2362,
				2363,
				2364,
				2364,
				2366,
				2367,
				2368,
				2369,
				2370,
				2371,
				2372,
				2373,
				2374,
				2375,
				2376,
				2377,
				2378,
				2379,
				2380,
				2381,
				2382,
				2383,
				2387,
				2388,
				2389,
				2390,
				2391,
				2402,
				2403
			]);
			var r = 127988, i = 917631, a = 917601, o = 917626, s = 65039, c = 8205, l = 127462, d = 127487, p = [
				"d83cdffb",
				"d83cdffc",
				"d83cdffd",
				"d83cdffe",
				"d83cdfff"
			];
			function g(e) {
				var t = e.split(","), n, r = t.length, i = [];
				for (n = 0; n < r; n += 1) t[n] !== "sans-serif" && t[n] !== "monospace" && i.push(t[n]);
				return i.join(",");
			}
			function _(e, t) {
				var n = createTag("span");
				n.setAttribute("aria-hidden", !0), n.style.fontFamily = t;
				var r = createTag("span");
				r.innerText = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(r), document.body.appendChild(n);
				var i = r.offsetWidth;
				return r.style.fontFamily = g(e) + ", " + t, {
					node: r,
					w: i,
					parent: n
				};
			}
			function y() {
				var t, n = this.fonts.length, r, i, a = n;
				for (t = 0; t < n; t += 1) this.fonts[t].loaded ? --a : this.fonts[t].fOrigin === "n" || this.fonts[t].origin === 0 ? this.fonts[t].loaded = !0 : (r = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, r.offsetWidth === i ? (r = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, r.offsetWidth !== i && (--a, this.fonts[t].loaded = !0)) : (--a, this.fonts[t].loaded = !0), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
				a !== 0 && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
			}
			function x(e, t) {
				var n = document.body && t ? "svg" : "canvas", r, i = getFontProperties(e);
				if (n === "svg") {
					var a = createNS("text");
					a.style.fontSize = "100px", a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), r = a;
				} else {
					var o = new OffscreenCanvas(500, 500).getContext("2d");
					o.font = i.style + " " + i.weight + " 100px " + e.fFamily, r = o;
				}
				function s(e) {
					return n === "svg" ? (r.textContent = e, r.getComputedTextLength()) : r.measureText(e).width;
				}
				return { measureText: s };
			}
			function C(e, t) {
				if (!e) {
					this.isLoaded = !0;
					return;
				}
				if (this.chars) {
					this.isLoaded = !0, this.fonts = e.list;
					return;
				}
				if (!document.body) {
					this.isLoaded = !0, e.list.forEach(function(e) {
						e.helper = x(e), e.cache = {};
					}), this.fonts = e.list;
					return;
				}
				var n = e.list, r, i = n.length, a = i;
				for (r = 0; r < i; r += 1) {
					var o = !0, s, c;
					if (n[r].loaded = !1, n[r].monoCase = _(n[r].fFamily, "monospace"), n[r].sansCase = _(n[r].fFamily, "sans-serif"), !n[r].fPath) n[r].loaded = !0, --a;
					else if (n[r].fOrigin === "p" || n[r].origin === 3) {
						if (s = document.querySelectorAll("style[f-forigin=\"p\"][f-family=\"" + n[r].fFamily + "\"], style[f-origin=\"3\"][f-family=\"" + n[r].fFamily + "\"]"), s.length > 0 && (o = !1), o) {
							var l = createTag("style");
							l.setAttribute("f-forigin", n[r].fOrigin), l.setAttribute("f-origin", n[r].origin), l.setAttribute("f-family", n[r].fFamily), l.type = "text/css", l.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", t.appendChild(l);
						}
					} else if (n[r].fOrigin === "g" || n[r].origin === 1) {
						for (s = document.querySelectorAll("link[f-forigin=\"g\"], link[f-origin=\"1\"]"), c = 0; c < s.length; c += 1) s[c].href.indexOf(n[r].fPath) !== -1 && (o = !1);
						if (o) {
							var d = createTag("link");
							d.setAttribute("f-forigin", n[r].fOrigin), d.setAttribute("f-origin", n[r].origin), d.type = "text/css", d.rel = "stylesheet", d.href = n[r].fPath, document.body.appendChild(d);
						}
					} else if (n[r].fOrigin === "t" || n[r].origin === 2) {
						for (s = document.querySelectorAll("script[f-forigin=\"t\"], script[f-origin=\"2\"]"), c = 0; c < s.length; c += 1) n[r].fPath === s[c].src && (o = !1);
						if (o) {
							var p = createTag("link");
							p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.setAttribute("rel", "stylesheet"), p.setAttribute("href", n[r].fPath), t.appendChild(p);
						}
					}
					n[r].helper = x(n[r], t), n[r].cache = {}, this.fonts.push(n[r]);
				}
				a === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
			}
			function ee(e) {
				if (e) {
					this.chars ||= [];
					var t, n = e.length, r, i = this.chars.length, a;
					for (t = 0; t < n; t += 1) {
						for (r = 0, a = !1; r < i;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (a = !0), r += 1;
						a || (this.chars.push(e[t]), i += 1);
					}
				}
			}
			function te(e, n, r) {
				for (var i = 0, a = this.chars.length; i < a;) {
					if (this.chars[i].ch === e && this.chars[i].style === n && this.chars[i].fFamily === r) return this.chars[i];
					i += 1;
				}
				return (typeof e == "string" && e.charCodeAt(0) !== 13 || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, n, r)), t;
			}
			function ne(e, t, n) {
				var r = this.getFontByName(t), i = e;
				if (!r.cache[i]) {
					var a = r.helper;
					if (e === " ") {
						var o = a.measureText("|" + e + "|"), s = a.measureText("||");
						r.cache[i] = (o - s) / 100;
					} else r.cache[i] = a.measureText(e) / 100;
				}
				return r.cache[i] * n;
			}
			function T(e) {
				for (var t = 0, n = this.fonts.length; t < n;) {
					if (this.fonts[t].fName === e) return this.fonts[t];
					t += 1;
				}
				return this.fonts[0];
			}
			function re(e) {
				var t = 0, n = e.charCodeAt(0);
				if (n >= 55296 && n <= 56319) {
					var r = e.charCodeAt(1);
					r >= 56320 && r <= 57343 && (t = (n - 55296) * 1024 + r - 56320 + 65536);
				}
				return t;
			}
			function ie(e, t) {
				var n = e.toString(16) + t.toString(16);
				return p.indexOf(n) !== -1;
			}
			function ae(e) {
				return e === c;
			}
			function oe(e) {
				return e === s;
			}
			function se(e) {
				var t = re(e);
				return t >= l && t <= d;
			}
			function ce(e) {
				return se(e.substr(0, 2)) && se(e.substr(2, 2));
			}
			function le(e) {
				return n.indexOf(e) !== -1;
			}
			function ue(e, t) {
				var n = re(e.substr(t, 2));
				if (n !== r) return !1;
				var s = 0;
				for (t += 2; s < 5;) {
					if (n = re(e.substr(t, 2)), n < a || n > o) return !1;
					s += 1, t += 2;
				}
				return re(e.substr(t, 2)) === i;
			}
			function de() {
				this.isLoaded = !0;
			}
			var fe = function() {
				this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
			};
			return fe.isModifier = ie, fe.isZeroWidthJoiner = ae, fe.isFlagEmoji = ce, fe.isRegionalCode = se, fe.isCombinedCharacter = le, fe.isRegionalFlag = ue, fe.isVariationSelector = oe, fe.BLACK_FLAG_CODE_POINT = r, fe.prototype = {
				addChars: ee,
				addFonts: C,
				getCharData: te,
				getFontByName: T,
				measureText: ne,
				checkLoadedFonts: y,
				setIsLoaded: de
			}, fe;
		}();
		function SlotManager(e) {
			this.animationData = e;
		}
		SlotManager.prototype.getProp = function(e) {
			return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e;
		};
		function slotFactory(e) {
			return new SlotManager(e);
		}
		function RenderableElement() {}
		RenderableElement.prototype = {
			initRenderable: function() {
				this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
			},
			addRenderableComponent: function(e) {
				this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
			},
			removeRenderableComponent: function(e) {
				this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
			},
			prepareRenderableFrame: function(e) {
				this.checkLayerLimits(e);
			},
			checkTransparency: function() {
				this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
			},
			checkLayerLimits: function(e) {
				this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
			},
			renderRenderable: function() {
				var e, t = this.renderableComponents.length;
				for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
			},
			sourceRectAtTime: function() {
				return {
					top: 0,
					left: 0,
					width: 100,
					height: 100
				};
			},
			getLayerSize: function() {
				return this.data.ty === 5 ? {
					w: this.data.textData.width,
					h: this.data.textData.height
				} : {
					w: this.data.width,
					h: this.data.height
				};
			}
		};
		var getBlendMode = function() {
			var e = {
				0: "source-over",
				1: "multiply",
				2: "screen",
				3: "overlay",
				4: "darken",
				5: "lighten",
				6: "color-dodge",
				7: "color-burn",
				8: "hard-light",
				9: "soft-light",
				10: "difference",
				11: "exclusion",
				12: "hue",
				13: "saturation",
				14: "color",
				15: "luminosity"
			};
			return function(t) {
				return e[t] || "";
			};
		}();
		function SliderEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
		}
		function AngleEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
		}
		function ColorEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
		}
		function PointEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
		}
		function LayerIndexEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
		}
		function MaskIndexEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
		}
		function CheckboxEffect(e, t, n) {
			this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
		}
		function NoValueEffect() {
			this.p = {};
		}
		function EffectsManager(e, t) {
			var n = e.ef || [];
			this.effectElements = [];
			var r, i = n.length, a;
			for (r = 0; r < i; r += 1) a = new GroupEffect(n[r], t), this.effectElements.push(a);
		}
		function GroupEffect(e, t) {
			this.init(e, t);
		}
		extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
			this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
			var n, r = this.data.ef.length, i, a = this.data.ef;
			for (n = 0; n < r; n += 1) {
				switch (i = null, a[n].ty) {
					case 0:
						i = new SliderEffect(a[n], t, this);
						break;
					case 1:
						i = new AngleEffect(a[n], t, this);
						break;
					case 2:
						i = new ColorEffect(a[n], t, this);
						break;
					case 3:
						i = new PointEffect(a[n], t, this);
						break;
					case 4:
					case 7:
						i = new CheckboxEffect(a[n], t, this);
						break;
					case 10:
						i = new LayerIndexEffect(a[n], t, this);
						break;
					case 11:
						i = new MaskIndexEffect(a[n], t, this);
						break;
					case 5:
						i = new EffectsManager(a[n], t, this);
						break;
					default:
						i = new NoValueEffect(a[n], t, this);
						break;
				}
				i && this.effectElements.push(i);
			}
		};
		function BaseElement() {}
		BaseElement.prototype = {
			checkMasks: function() {
				if (!this.data.hasMask) return !1;
				for (var e = 0, t = this.data.masksProperties.length; e < t;) {
					if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
					e += 1;
				}
				return !1;
			},
			initExpressions: function() {
				var e = getExpressionInterfaces();
				if (e) {
					var t = e("layer"), n = e("effects"), r = e("shape"), i = e("text"), a = e("comp");
					this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
					var o = n.createEffectsInterface(this, this.layerInterface);
					this.layerInterface.registerEffectsInterface(o), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface);
				}
			},
			setBlendMode: function() {
				var e = getBlendMode(this.data.bm), t = this.baseElement || this.layerElement;
				t.style["mix-blend-mode"] = e;
			},
			initBaseData: function(e, t, n) {
				this.globalData = t, this.comp = n, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
			},
			getType: function() {
				return this.type;
			},
			sourceRectAtTime: function() {}
		};
		function FrameElement() {}
		FrameElement.prototype = {
			initFrame: function() {
				this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
			},
			prepareProperties: function(e, t) {
				var n, r = this.dynamicProperties.length;
				for (n = 0; n < r; n += 1) (t || this._isParent && this.dynamicProperties[n].propType === "transform") && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
			},
			addDynamicProperty: function(e) {
				this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
			}
		};
		function FootageElement(e, t, n) {
			this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, n);
		}
		FootageElement.prototype.prepareFrame = function() {}, extendPrototype([
			RenderableElement,
			BaseElement,
			FrameElement
		], FootageElement), FootageElement.prototype.getBaseElement = function() {
			return null;
		}, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
			var e = getExpressionInterfaces();
			if (e) {
				var t = e("footage");
				this.layerInterface = t(this);
			}
		}, FootageElement.prototype.getFootageData = function() {
			return this.footageData;
		};
		function AudioElement(e, t, n) {
			this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, n), this._isPlaying = !1, this._canPlay = !1;
			var r = this.globalData.getAssetsPath(this.assetData);
			this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : { k: [100] }, 1, .01, this);
		}
		AudioElement.prototype.prepareFrame = function(e) {
			if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
			else {
				var t = this.tm.v;
				this._currentTime = t;
			}
			this._volume = this.lv.v[0];
			var n = this._volume * this._volumeMultiplier;
			this._previousVolume !== n && (this._previousVolume = n, this.audio.volume(n));
		}, extendPrototype([
			RenderableElement,
			BaseElement,
			FrameElement
		], AudioElement), AudioElement.prototype.renderFrame = function() {
			this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
		}, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
			this.audio.pause(), this._isPlaying = !1;
		}, AudioElement.prototype.pause = function() {
			this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
		}, AudioElement.prototype.resume = function() {
			this._canPlay = !0;
		}, AudioElement.prototype.setRate = function(e) {
			this.audio.rate(e);
		}, AudioElement.prototype.volume = function(e) {
			this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume);
		}, AudioElement.prototype.getBaseElement = function() {
			return null;
		}, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};
		function BaseRenderer() {}
		BaseRenderer.prototype.checkLayers = function(e) {
			var t, n = this.layers.length, r;
			for (this.completeLayers = !0, t = n - 1; t >= 0; --t) this.elements[t] || (r = this.layers[t], r.ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t)), this.completeLayers = this.elements[t] ? this.completeLayers : !1;
			this.checkPendingElements();
		}, BaseRenderer.prototype.createItem = function(e) {
			switch (e.ty) {
				case 2: return this.createImage(e);
				case 0: return this.createComp(e);
				case 1: return this.createSolid(e);
				case 3: return this.createNull(e);
				case 4: return this.createShape(e);
				case 5: return this.createText(e);
				case 6: return this.createAudio(e);
				case 13: return this.createCamera(e);
				case 15: return this.createFootage(e);
				default: return this.createNull(e);
			}
		}, BaseRenderer.prototype.createCamera = function() {
			throw Error("You're using a 3d camera. Try the html renderer.");
		}, BaseRenderer.prototype.createAudio = function(e) {
			return new AudioElement(e, this.globalData, this);
		}, BaseRenderer.prototype.createFootage = function(e) {
			return new FootageElement(e, this.globalData, this);
		}, BaseRenderer.prototype.buildAllItems = function() {
			var e, t = this.layers.length;
			for (e = 0; e < t; e += 1) this.buildItem(e);
			this.checkPendingElements();
		}, BaseRenderer.prototype.includeLayers = function(e) {
			this.completeLayers = !1;
			var t, n = e.length, r, i = this.layers.length;
			for (t = 0; t < n; t += 1) for (r = 0; r < i;) {
				if (this.layers[r].id === e[t].id) {
					this.layers[r] = e[t];
					break;
				}
				r += 1;
			}
		}, BaseRenderer.prototype.setProjectInterface = function(e) {
			this.globalData.projectInterface = e;
		}, BaseRenderer.prototype.initItems = function() {
			this.globalData.progressiveLoad || this.buildAllItems();
		}, BaseRenderer.prototype.buildElementParenting = function(e, t, n) {
			for (var r = this.elements, i = this.layers, a = 0, o = i.length; a < o;) i[a].ind == t && (!r[a] || r[a] === !0 ? (this.buildItem(a), this.addPendingElement(e)) : (n.push(r[a]), r[a].setAsParent(), i[a].parent === void 0 ? e.setHierarchy(n) : this.buildElementParenting(e, i[a].parent, n))), a += 1;
		}, BaseRenderer.prototype.addPendingElement = function(e) {
			this.pendingElements.push(e);
		}, BaseRenderer.prototype.searchExtraCompositions = function(e) {
			var t, n = e.length;
			for (t = 0; t < n; t += 1) if (e[t].xt) {
				var r = this.createComp(e[t]);
				r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
			}
		}, BaseRenderer.prototype.getElementById = function(e) {
			var t, n = this.elements.length;
			for (t = 0; t < n; t += 1) if (this.elements[t].data.ind === e) return this.elements[t];
			return null;
		}, BaseRenderer.prototype.getElementByPath = function(e) {
			var t = e.shift(), n;
			if (typeof t == "number") n = this.elements[t];
			else {
				var r, i = this.elements.length;
				for (r = 0; r < i; r += 1) if (this.elements[r].data.nm === t) {
					n = this.elements[r];
					break;
				}
			}
			return e.length === 0 ? n : n.getElementByPath(e);
		}, BaseRenderer.prototype.setupGlobalData = function(e, t) {
			this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
				w: e.w,
				h: e.h
			};
		};
		var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
		function TransformElement() {}
		TransformElement.prototype = {
			initTransform: function() {
				var e = new Matrix();
				this.finalTransform = {
					mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
					_matMdf: !1,
					_localMatMdf: !1,
					_opMdf: !1,
					mat: e,
					localMat: e,
					localOpacity: 1
				}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
			},
			renderTransform: function() {
				if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
					var e, t = this.finalTransform.mat, n = 0, r = this.hierarchy.length;
					if (!this.finalTransform._matMdf) for (; n < r;) {
						if (this.hierarchy[n].finalTransform.mProp._mdf) {
							this.finalTransform._matMdf = !0;
							break;
						}
						n += 1;
					}
					if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < r; n += 1) t.multiply(this.hierarchy[n].finalTransform.mProp.v);
				}
				(!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
			},
			renderLocalTransform: function() {
				if (this.localTransforms) {
					var e = 0, t = this.localTransforms.length;
					if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
					if (this.finalTransform._localMatMdf) {
						var n = this.finalTransform.localMat;
						for (this.localTransforms[0].matrix.clone(n), e = 1; e < t; e += 1) {
							var r = this.localTransforms[e].matrix;
							n.multiply(r);
						}
						n.multiply(this.finalTransform.mat);
					}
					if (this.finalTransform._opMdf) {
						var i = this.finalTransform.localOpacity;
						for (e = 0; e < t; e += 1) i *= this.localTransforms[e].opacity * .01;
						this.finalTransform.localOpacity = i;
					}
				}
			},
			searchEffectTransforms: function() {
				if (this.renderableEffectsManager) {
					var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
					if (e.length) {
						this.localTransforms = [], this.finalTransform.localMat = new Matrix();
						var t = 0, n = e.length;
						for (t = 0; t < n; t += 1) this.localTransforms.push(e[t]);
					}
				}
			},
			globalToLocal: function(e) {
				var t = [];
				t.push(this.finalTransform);
				for (var n = !0, r = this.comp; n;) r.finalTransform ? (r.data.hasMask && t.splice(0, 0, r.finalTransform), r = r.comp) : n = !1;
				var i, a = t.length, o;
				for (i = 0; i < a; i += 1) o = t[i].mat.applyToPointArray(0, 0, 0), e = [
					e[0] - o[0],
					e[1] - o[1],
					0
				];
				return e;
			},
			mHelper: new Matrix()
		};
		function MaskElement(e, t, n) {
			this.data = e, this.element = t, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
			var r = this.globalData.defs, i, a = this.masksProperties ? this.masksProperties.length : 0;
			this.viewData = createSizedArray(a), this.solidPath = "";
			var o, s = this.masksProperties, c = 0, l = [], d, p, g = createElementID(), _, y, x, C, ee = "clipPath", te = "clip-path";
			for (i = 0; i < a; i += 1) if ((s[i].mode !== "a" && s[i].mode !== "n" || s[i].inv || s[i].o.k !== 100 || s[i].o.x) && (ee = "mask", te = "mask"), (s[i].mode === "s" || s[i].mode === "i") && c === 0 ? (_ = createNS("rect"), _.setAttribute("fill", "#ffffff"), _.setAttribute("width", this.element.comp.data.w || 0), _.setAttribute("height", this.element.comp.data.h || 0), l.push(_)) : _ = null, o = createNS("path"), s[i].mode === "n") this.viewData[i] = {
				op: PropertyFactory.getProp(this.element, s[i].o, 0, .01, this.element),
				prop: ShapePropertyFactory.getShapeProp(this.element, s[i], 3),
				elem: o,
				lastPath: ""
			}, r.appendChild(o);
			else {
				c += 1, o.setAttribute("fill", s[i].mode === "s" ? "#000000" : "#ffffff"), o.setAttribute("clip-rule", "nonzero");
				var ne;
				if (s[i].x.k === 0 ? (x = null, C = null) : (ee = "mask", te = "mask", C = PropertyFactory.getProp(this.element, s[i].x, 0, null, this.element), ne = createElementID(), y = createNS("filter"), y.setAttribute("id", ne), x = createNS("feMorphology"), x.setAttribute("operator", "erode"), x.setAttribute("in", "SourceGraphic"), x.setAttribute("radius", "0"), y.appendChild(x), r.appendChild(y), o.setAttribute("stroke", s[i].mode === "s" ? "#000000" : "#ffffff")), this.storedData[i] = {
					elem: o,
					x: C,
					expan: x,
					lastPath: "",
					lastOperator: "",
					filterId: ne,
					lastRadius: 0
				}, s[i].mode === "i") {
					p = l.length;
					var T = createNS("g");
					for (d = 0; d < p; d += 1) T.appendChild(l[d]);
					var re = createNS("mask");
					re.setAttribute("mask-type", "alpha"), re.setAttribute("id", g + "_" + c), re.appendChild(o), r.appendChild(re), T.setAttribute("mask", "url(" + getLocationHref() + "#" + g + "_" + c + ")"), l.length = 0, l.push(T);
				} else l.push(o);
				s[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
					elem: o,
					lastPath: "",
					op: PropertyFactory.getProp(this.element, s[i].o, 0, .01, this.element),
					prop: ShapePropertyFactory.getShapeProp(this.element, s[i], 3),
					invRect: _
				}, this.viewData[i].prop.k || this.drawPath(s[i], this.viewData[i].prop.v, this.viewData[i]);
			}
			for (this.maskElement = createNS(ee), a = l.length, i = 0; i < a; i += 1) this.maskElement.appendChild(l[i]);
			c > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(te, "url(" + getLocationHref() + "#" + g + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
		}
		MaskElement.prototype.getMaskProperty = function(e) {
			return this.viewData[e].prop;
		}, MaskElement.prototype.renderFrame = function(e) {
			var t = this.element.finalTransform.mat, n, r = this.masksProperties.length;
			for (n = 0; n < r; n += 1) if ((this.viewData[n].prop._mdf || e) && this.drawPath(this.masksProperties[n], this.viewData[n].prop.v, this.viewData[n]), (this.viewData[n].op._mdf || e) && this.viewData[n].elem.setAttribute("fill-opacity", this.viewData[n].op.v), this.masksProperties[n].mode !== "n" && (this.viewData[n].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[n].invRect.setAttribute("transform", t.getInverseMatrix().to2dCSS()), this.storedData[n].x && (this.storedData[n].x._mdf || e))) {
				var i = this.storedData[n].expan;
				this.storedData[n].x.v < 0 ? (this.storedData[n].lastOperator !== "erode" && (this.storedData[n].lastOperator = "erode", this.storedData[n].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[n].filterId + ")")), i.setAttribute("radius", -this.storedData[n].x.v)) : (this.storedData[n].lastOperator !== "dilate" && (this.storedData[n].lastOperator = "dilate", this.storedData[n].elem.setAttribute("filter", null)), this.storedData[n].elem.setAttribute("stroke-width", this.storedData[n].x.v * 2));
			}
		}, MaskElement.prototype.getMaskelement = function() {
			return this.maskElement;
		}, MaskElement.prototype.createLayerSolidPath = function() {
			var e = "M0,0 ";
			return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " ", e;
		}, MaskElement.prototype.drawPath = function(e, t, n) {
			var r = " M" + t.v[0][0] + "," + t.v[0][1], i, a = t._length;
			for (i = 1; i < a; i += 1) r += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
			if (t.c && a > 1 && (r += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), n.lastPath !== r) {
				var o = "";
				n.elem && (t.c && (o = e.inv ? this.solidPath + r : r), n.elem.setAttribute("d", o)), n.lastPath = r;
			}
		}, MaskElement.prototype.destroy = function() {
			this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
		};
		var filtersFactory = function() {
			var e = {};
			e.createFilter = t, e.createAlphaToLuminanceFilter = n;
			function t(e, t) {
				var n = createNS("filter");
				return n.setAttribute("id", e), t !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n;
			}
			function n() {
				var e = createNS("feColorMatrix");
				return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e;
			}
			return e;
		}(), featureSupport = function() {
			var e = {
				maskType: !0,
				svgLumaHidden: !0,
				offscreenCanvas: typeof OffscreenCanvas < "u"
			};
			return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e;
		}(), registeredEffects$1 = {}, idPrefix = "filter_result_";
		function SVGEffects(e) {
			var t, n = "SourceGraphic", r = e.data.ef ? e.data.ef.length : 0, i = createElementID(), a = filtersFactory.createFilter(i, !0), o = 0;
			this.filters = [];
			var s;
			for (t = 0; t < r; t += 1) {
				s = null;
				var c = e.data.ef[t].ty;
				if (registeredEffects$1[c]) {
					var l = registeredEffects$1[c].effect;
					s = new l(a, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[c].countsAsEffect && (o += 1);
				}
				s && this.filters.push(s);
			}
			o && (e.globalData.defs.appendChild(a), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")")), this.filters.length && e.addRenderableComponent(this);
		}
		SVGEffects.prototype.renderFrame = function(e) {
			var t, n = this.filters.length;
			for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
		}, SVGEffects.prototype.getEffects = function(e) {
			var t, n = this.filters.length, r = [];
			for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
			return r;
		};
		function registerEffect$1(e, t, n) {
			registeredEffects$1[e] = {
				effect: t,
				countsAsEffect: n
			};
		}
		function SVGBaseElement() {}
		SVGBaseElement.prototype = {
			initRendererElement: function() {
				this.layerElement = createNS("g");
			},
			createContainerElements: function() {
				this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
				var e = null;
				if (this.data.td) {
					this.matteMasks = {};
					var t = createNS("g");
					t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t);
				} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
				if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
					var n = createNS("clipPath"), r = createNS("path");
					r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
					var i = createElementID();
					if (n.setAttribute("id", i), n.appendChild(r), this.globalData.defs.appendChild(n), this.checkMasks()) {
						var a = createNS("g");
						a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
					} else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")");
				}
				this.data.bm !== 0 && this.setBlendMode();
			},
			renderElement: function() {
				this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
			},
			destroyBaseElement: function() {
				this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
			},
			getBaseElement: function() {
				return this.data.hd ? null : this.baseElement;
			},
			createRenderableComponents: function() {
				this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
			},
			getMatte: function(e) {
				if (this.matteMasks ||= {}, !this.matteMasks[e]) {
					var t = this.layerId + "_" + e, n, r, i, a;
					if (e === 1 || e === 3) {
						var o = createNS("mask");
						o.setAttribute("id", t), o.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), i = createNS("use"), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(i), this.globalData.defs.appendChild(o), !featureSupport.maskType && e === 1 && (o.setAttribute("mask-type", "luminance"), n = createElementID(), r = filtersFactory.createFilter(n), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(i), o.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")"));
					} else if (e === 2) {
						var s = createNS("mask");
						s.setAttribute("id", t), s.setAttribute("mask-type", "alpha");
						var c = createNS("g");
						s.appendChild(c), n = createElementID(), r = filtersFactory.createFilter(n);
						var l = createNS("feComponentTransfer");
						l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
						var d = createNS("feFuncA");
						d.setAttribute("type", "table"), d.setAttribute("tableValues", "1.0 0.0"), l.appendChild(d), this.globalData.defs.appendChild(r);
						var p = createNS("rect");
						p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), c.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")"), c.appendChild(p), i = createNS("use"), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), c.appendChild(i), featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), c.appendChild(p), a.appendChild(this.layerElement), c.appendChild(a)), this.globalData.defs.appendChild(s);
					}
					this.matteMasks[e] = t;
				}
				return this.matteMasks[e];
			},
			setMatte: function(e) {
				this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
			}
		};
		function HierarchyElement() {}
		HierarchyElement.prototype = {
			initHierarchy: function() {
				this.hierarchy = [], this._isParent = !1, this.checkParenting();
			},
			setHierarchy: function(e) {
				this.hierarchy = e;
			},
			setAsParent: function() {
				this._isParent = !0;
			},
			checkParenting: function() {
				this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
			}
		};
		function RenderableDOMElement() {}
		(function() {
			extendPrototype([RenderableElement, createProxyFunction({
				initElement: function(e, t, n) {
					this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
				},
				hide: function() {
					if (!this.hidden && (!this.isInRange || this.isTransparent)) {
						var e = this.baseElement || this.layerElement;
						e.style.display = "none", this.hidden = !0;
					}
				},
				show: function() {
					if (this.isInRange && !this.isTransparent) {
						if (!this.data.hd) {
							var e = this.baseElement || this.layerElement;
							e.style.display = "block";
						}
						this.hidden = !1, this._isFirstFrame = !0;
					}
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame &&= !1);
				},
				renderInnerContent: function() {},
				prepareFrame: function(e) {
					this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
				},
				destroy: function() {
					this.innerElem = null, this.destroyBaseElement();
				}
			})], RenderableDOMElement);
		})();
		function IImageElement(e, t, n) {
			this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, n), this.sourceRect = {
				top: 0,
				left: 0,
				width: this.assetData.w,
				height: this.assetData.h
			};
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			SVGBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement
		], IImageElement), IImageElement.prototype.createContent = function() {
			var e = this.globalData.getAssetsPath(this.assetData);
			this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem);
		}, IImageElement.prototype.sourceRectAtTime = function() {
			return this.sourceRect;
		};
		function ProcessedElement(e, t) {
			this.elem = e, this.pos = t;
		}
		function IShapeElement() {}
		IShapeElement.prototype = {
			addShapeToModifiers: function(e) {
				var t, n = this.shapeModifiers.length;
				for (t = 0; t < n; t += 1) this.shapeModifiers[t].addShape(e);
			},
			isShapeInAnimatedModifiers: function(e) {
				for (var t = 0, n = this.shapeModifiers.length; t < n;) if (this.shapeModifiers[t].isAnimatedWithShape(e)) return !0;
				return !1;
			},
			renderModifiers: function() {
				if (this.shapeModifiers.length) {
					var e, t = this.shapes.length;
					for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
					t = this.shapeModifiers.length;
					var n;
					for (e = t - 1; e >= 0 && (n = this.shapeModifiers[e].processShapes(this._isFirstFrame), !n); --e);
				}
			},
			searchProcessedElement: function(e) {
				for (var t = this.processedElements, n = 0, r = t.length; n < r;) {
					if (t[n].elem === e) return t[n].pos;
					n += 1;
				}
				return 0;
			},
			addProcessedElement: function(e, t) {
				for (var n = this.processedElements, r = n.length; r;) if (--r, n[r].elem === e) {
					n[r].pos = t;
					return;
				}
				n.push(new ProcessedElement(e, t));
			},
			prepareFrame: function(e) {
				this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
			}
		};
		var lineCapEnum = {
			1: "butt",
			2: "round",
			3: "square"
		}, lineJoinEnum = {
			1: "miter",
			2: "round",
			3: "bevel"
		};
		function SVGShapeData(e, t, n) {
			this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = n, this.lvl = t, this._isAnimated = !!n.k;
			for (var r = 0, i = e.length; r < i;) {
				if (e[r].mProps.dynamicProperties.length) {
					this._isAnimated = !0;
					break;
				}
				r += 1;
			}
		}
		SVGShapeData.prototype.setAsAnimated = function() {
			this._isAnimated = !0;
		};
		function SVGStyleData(e, t) {
			this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null;
		}
		SVGStyleData.prototype.reset = function() {
			this.d = "", this._mdf = !1;
		};
		function DashProperty(e, t, n, r) {
			this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
			var i, a = t.length || 0, o;
			for (i = 0; i < a; i += 1) o = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = o.k || this.k, this.dataProps[i] = {
				n: t[i].n,
				p: o
			};
			this.k || this.getValue(!0), this._isAnimated = this.k;
		}
		DashProperty.prototype.getValue = function(e) {
			if (!(this.elem.globalData.frameId === this.frameId && !e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
				var t = 0, n = this.dataProps.length;
				for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < n; t += 1) this.dataProps[t].n === "o" ? this.dashoffset[0] = this.dataProps[t].p.v : this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v;
			}
		}, extendPrototype([DynamicPropertyContainer], DashProperty);
		function SVGStrokeStyleData(e, t, n) {
			this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated;
		}
		extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
		function SVGFillStyleData(e, t, n) {
			this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = n;
		}
		extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
		function SVGNoStyleData(e, t, n) {
			this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = n;
		}
		extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
		function GradientProperty(e, t, n) {
			this.data = t, this.c = createTypedArray("uint8c", t.p * 4);
			var r = t.k.k[0].s ? t.k.k[0].s.length - t.p * 4 : t.k.k.length - t.p * 4;
			this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
		}
		GradientProperty.prototype.comparePoints = function(e, t) {
			for (var n = 0, r = this.o.length / 2, i; n < r;) {
				if (i = Math.abs(e[n * 4] - e[t * 4 + n * 2]), i > .01) return !1;
				n += 1;
			}
			return !0;
		}, GradientProperty.prototype.checkCollapsable = function() {
			if (this.o.length / 2 != this.c.length / 4) return !1;
			if (this.data.k.k[0].s) for (var e = 0, t = this.data.k.k.length; e < t;) {
				if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
				e += 1;
			}
			else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
			return !0;
		}, GradientProperty.prototype.getValue = function(e) {
			if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
				var t, n = this.data.p * 4, r, i;
				for (t = 0; t < n; t += 1) r = t % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[t] * r), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
				if (this.o.length) for (n = this.prop.v.length, t = this.data.p * 4; t < n; t += 1) r = t % 2 == 0 ? 100 : 1, i = t % 2 == 0 ? Math.round(this.prop.v[t] * 100) : this.prop.v[t], this.o[t - this.data.p * 4] !== i && (this.o[t - this.data.p * 4] = i, this._omdf = !e);
				this._mdf = !e;
			}
		}, extendPrototype([DynamicPropertyContainer], GradientProperty);
		function SVGGradientFillStyleData(e, t, n) {
			this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, n);
		}
		SVGGradientFillStyleData.prototype.initGradientData = function(e, t, n) {
			this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, t), this.setGradientOpacity(t, n), this._isAnimated = !!this._isAnimated;
		}, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
			var n = createElementID(), r = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
			r.setAttribute("id", n), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
			var i = [], a, o, s = t.g.p * 4;
			for (o = 0; o < s; o += 4) a = createNS("stop"), r.appendChild(a), i.push(a);
			e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + n + ")"), this.gf = r, this.cst = i;
		}, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
			if (this.g._hasOpacity && !this.g._collapsable) {
				var n, r, i, a = createNS("mask"), o = createNS("path");
				a.appendChild(o);
				var s = createElementID(), c = createElementID();
				a.setAttribute("id", c);
				var l = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
				l.setAttribute("id", s), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
				var d = this.stops;
				for (r = e.g.p * 4; r < i; r += 2) n = createNS("stop"), n.setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(n), d.push(n);
				o.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"), e.ty === "gs" && (o.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)), this.of = l, this.ms = a, this.ost = d, this.maskId = c, t.msElem = o;
			}
		}, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
		function SVGGradientStrokeStyleData(e, t, n) {
			this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, n), this._isAnimated = !!this._isAnimated;
		}
		extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
		function ShapeGroupData() {
			this.it = [], this.prevViewData = [], this.gr = createNS("g");
		}
		function SVGTransformData(e, t, n) {
			this.transform = {
				mProps: e,
				op: t,
				container: n
			}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
		}
		var buildShapeString = function(e, t, n, r) {
			if (t === 0) return "";
			var i = e.o, a = e.i, o = e.v, s, c = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
			for (s = 1; s < t; s += 1) c += " C" + r.applyToPointStringified(i[s - 1][0], i[s - 1][1]) + " " + r.applyToPointStringified(a[s][0], a[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
			return n && t && (c += " C" + r.applyToPointStringified(i[s - 1][0], i[s - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), c += "z"), c;
		}, SVGElementsRenderer = function() {
			var e = new Matrix(), t = new Matrix(), n = { createRenderFunction: r };
			function r(e) {
				switch (e.ty) {
					case "fl": return s;
					case "gf": return l;
					case "gs": return c;
					case "st": return d;
					case "sh":
					case "el":
					case "rc":
					case "sr": return o;
					case "tr": return i;
					case "no": return a;
					default: return null;
				}
			}
			function i(e, t, n) {
				(n || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (n || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS());
			}
			function a() {}
			function o(n, r, i) {
				var a, o, s, c, l, d, p = r.styles.length, g = r.lvl, _, y, x, C;
				for (d = 0; d < p; d += 1) {
					if (c = r.sh._mdf || i, r.styles[d].lvl < g) {
						for (y = t.reset(), x = g - r.styles[d].lvl, C = r.transformers.length - 1; !c && x > 0;) c = r.transformers[C].mProps._mdf || c, --x, --C;
						if (c) for (x = g - r.styles[d].lvl, C = r.transformers.length - 1; x > 0;) y.multiply(r.transformers[C].mProps.v), --x, --C;
					} else y = e;
					if (_ = r.sh.paths, o = _._length, c) {
						for (s = "", a = 0; a < o; a += 1) l = _.shapes[a], l && l._length && (s += buildShapeString(l, l._length, l.c, y));
						r.caches[d] = s;
					} else s = r.caches[d];
					r.styles[d].d += n.hd === !0 ? "" : s, r.styles[d]._mdf = c || r.styles[d]._mdf;
				}
			}
			function s(e, t, n) {
				var r = t.style;
				(t.c._mdf || n) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || n) && r.pElem.setAttribute("fill-opacity", t.o.v);
			}
			function c(e, t, n) {
				l(e, t, n), d(e, t, n);
			}
			function l(e, t, n) {
				var r = t.gf, i = t.g._hasOpacity, a = t.s.v, o = t.e.v;
				if (t.o._mdf || n) {
					var s = e.ty === "gf" ? "fill-opacity" : "stroke-opacity";
					t.style.pElem.setAttribute(s, t.o.v);
				}
				if (t.s._mdf || n) {
					var c = e.t === 1 ? "x1" : "cx", l = c === "x1" ? "y1" : "cy";
					r.setAttribute(c, a[0]), r.setAttribute(l, a[1]), i && !t.g._collapsable && (t.of.setAttribute(c, a[0]), t.of.setAttribute(l, a[1]));
				}
				var d, p, g, _;
				if (t.g._cmdf || n) {
					d = t.cst;
					var y = t.g.c;
					for (g = d.length, p = 0; p < g; p += 1) _ = d[p], _.setAttribute("offset", y[p * 4] + "%"), _.setAttribute("stop-color", "rgb(" + y[p * 4 + 1] + "," + y[p * 4 + 2] + "," + y[p * 4 + 3] + ")");
				}
				if (i && (t.g._omdf || n)) {
					var x = t.g.o;
					for (d = t.g._collapsable ? t.cst : t.ost, g = d.length, p = 0; p < g; p += 1) _ = d[p], t.g._collapsable || _.setAttribute("offset", x[p * 2] + "%"), _.setAttribute("stop-opacity", x[p * 2 + 1]);
				}
				if (e.t === 1) (t.e._mdf || n) && (r.setAttribute("x2", o[0]), r.setAttribute("y2", o[1]), i && !t.g._collapsable && (t.of.setAttribute("x2", o[0]), t.of.setAttribute("y2", o[1])));
				else {
					var C;
					if ((t.s._mdf || t.e._mdf || n) && (C = Math.sqrt((a[0] - o[0]) ** 2 + (a[1] - o[1]) ** 2), r.setAttribute("r", C), i && !t.g._collapsable && t.of.setAttribute("r", C)), t.s._mdf || t.e._mdf || t.h._mdf || t.a._mdf || n) {
						C ||= Math.sqrt((a[0] - o[0]) ** 2 + (a[1] - o[1]) ** 2);
						var ee = Math.atan2(o[1] - a[1], o[0] - a[0]), te = t.h.v;
						te >= 1 ? te = .99 : te <= -1 && (te = -.99);
						var ne = C * te, T = Math.cos(ee + t.a.v) * ne + a[0], re = Math.sin(ee + t.a.v) * ne + a[1];
						r.setAttribute("fx", T), r.setAttribute("fy", re), i && !t.g._collapsable && (t.of.setAttribute("fx", T), t.of.setAttribute("fy", re));
					}
				}
			}
			function d(e, t, n) {
				var r = t.style, i = t.d;
				i && (i._mdf || n) && i.dashStr && (r.pElem.setAttribute("stroke-dasharray", i.dashStr), r.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), t.c && (t.c._mdf || n) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || n) && r.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || n) && (r.pElem.setAttribute("stroke-width", t.w.v), r.msElem && r.msElem.setAttribute("stroke-width", t.w.v));
			}
			return n;
		}();
		function SVGShapeElement(e, t, n) {
			this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, n), this.prevViewData = [];
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			SVGBaseElement,
			IShapeElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement
		], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
			this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
		}, SVGShapeElement.prototype.filterUniqueShapes = function() {
			var e, t = this.shapes.length, n, r, i = this.stylesList.length, a, o = [], s = !1;
			for (r = 0; r < i; r += 1) {
				for (a = this.stylesList[r], s = !1, o.length = 0, e = 0; e < t; e += 1) n = this.shapes[e], n.styles.indexOf(a) !== -1 && (o.push(n), s = n._isAnimated || s);
				o.length > 1 && s && this.setShapesAsAnimated(o);
			}
		}, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
			var t, n = e.length;
			for (t = 0; t < n; t += 1) e[t].setAsAnimated();
		}, SVGShapeElement.prototype.createStyleElement = function(e, t) {
			var n, r = new SVGStyleData(e, t), i = r.pElem;
			return e.ty === "st" ? n = new SVGStrokeStyleData(this, e, r) : e.ty === "fl" ? n = new SVGFillStyleData(this, e, r) : e.ty === "gf" || e.ty === "gs" ? (n = new (e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, r), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + n.maskId + ")"))) : e.ty === "no" && (n = new SVGNoStyleData(this, e, r)), (e.ty === "st" || e.ty === "gs") && (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(r), this.addToAnimatedContents(e, n), n;
		}, SVGShapeElement.prototype.createGroupElement = function(e) {
			var t = new ShapeGroupData();
			return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t;
		}, SVGShapeElement.prototype.createTransformElement = function(e, t) {
			var n = TransformPropertyFactory.getTransformProperty(this, e, this), r = new SVGTransformData(n, n.o, t);
			return this.addToAnimatedContents(e, r), r;
		}, SVGShapeElement.prototype.createShapeElement = function(e, t, n) {
			var r = 4;
			e.ty === "rc" ? r = 5 : e.ty === "el" ? r = 6 : e.ty === "sr" && (r = 7);
			var i = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, r, this));
			return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i;
		}, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
			for (var n = 0, r = this.animatedContents.length; n < r;) {
				if (this.animatedContents[n].element === t) return;
				n += 1;
			}
			this.animatedContents.push({
				fn: SVGElementsRenderer.createRenderFunction(e),
				element: t,
				data: e
			});
		}, SVGShapeElement.prototype.setElementStyles = function(e) {
			var t = e.styles, n, r = this.stylesList.length;
			for (n = 0; n < r; n += 1) t.indexOf(this.stylesList[n]) === -1 && !this.stylesList[n].closed && t.push(this.stylesList[n]);
		}, SVGShapeElement.prototype.reloadShapes = function() {
			this._isFirstFrame = !0;
			var e, t = this.itemsData.length;
			for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
			for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
			this.renderModifiers();
		}, SVGShapeElement.prototype.searchShapes = function(e, t, n, r, i, a, o) {
			var s = [].concat(a), c, l = e.length - 1, d, p, g = [], _ = [], y, x, C;
			for (c = l; c >= 0; --c) {
				if (C = this.searchProcessedElement(e[c]), C ? t[c] = n[C - 1] : e[c]._render = o, e[c].ty === "fl" || e[c].ty === "st" || e[c].ty === "gf" || e[c].ty === "gs" || e[c].ty === "no") C ? t[c].style.closed = e[c].hd : t[c] = this.createStyleElement(e[c], i), e[c]._render && t[c].style.pElem.parentNode !== r && r.appendChild(t[c].style.pElem), g.push(t[c].style);
				else if (e[c].ty === "gr") {
					if (!C) t[c] = this.createGroupElement(e[c]);
					else for (p = t[c].it.length, d = 0; d < p; d += 1) t[c].prevViewData[d] = t[c].it[d];
					this.searchShapes(e[c].it, t[c].it, t[c].prevViewData, t[c].gr, i + 1, s, o), e[c]._render && t[c].gr.parentNode !== r && r.appendChild(t[c].gr);
				} else e[c].ty === "tr" ? (C || (t[c] = this.createTransformElement(e[c], r)), y = t[c].transform, s.push(y)) : e[c].ty === "sh" || e[c].ty === "rc" || e[c].ty === "el" || e[c].ty === "sr" ? (C || (t[c] = this.createShapeElement(e[c], s, i)), this.setElementStyles(t[c])) : e[c].ty === "tm" || e[c].ty === "rd" || e[c].ty === "ms" || e[c].ty === "pb" || e[c].ty === "zz" || e[c].ty === "op" ? (C ? (x = t[c], x.closed = !1) : (x = ShapeModifiers.getModifier(e[c].ty), x.init(this, e[c]), t[c] = x, this.shapeModifiers.push(x)), _.push(x)) : e[c].ty === "rp" && (C ? (x = t[c], x.closed = !0) : (x = ShapeModifiers.getModifier(e[c].ty), t[c] = x, x.init(this, e, c, t), this.shapeModifiers.push(x), o = !1), _.push(x));
				this.addProcessedElement(e[c], c + 1);
			}
			for (l = g.length, c = 0; c < l; c += 1) g[c].closed = !0;
			for (l = _.length, c = 0; c < l; c += 1) _[c].closed = !0;
		}, SVGShapeElement.prototype.renderInnerContent = function() {
			this.renderModifiers();
			var e, t = this.stylesList.length;
			for (e = 0; e < t; e += 1) this.stylesList[e].reset();
			for (this.renderShape(), e = 0; e < t; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
		}, SVGShapeElement.prototype.renderShape = function() {
			var e, t = this.animatedContents.length, n;
			for (e = 0; e < t; e += 1) n = this.animatedContents[e], (this._isFirstFrame || n.element._isAnimated) && n.data !== !0 && n.fn(n.data, n.element, this._isFirstFrame);
		}, SVGShapeElement.prototype.destroy = function() {
			this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
		};
		function LetterProps(e, t, n, r, i, a) {
			this.o = e, this.sw = t, this.sc = n, this.fc = r, this.m = i, this.p = a, this._mdf = {
				o: !0,
				sw: !!t,
				sc: !!n,
				fc: !!r,
				m: !0,
				p: !0
			};
		}
		LetterProps.prototype.update = function(e, t, n, r, i, a) {
			this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
			var o = !1;
			return this.o !== e && (this.o = e, this._mdf.o = !0, o = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, o = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, o = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, o = !0), this.m !== i && (this.m = i, this._mdf.m = !0, o = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, o = !0), o;
		};
		function TextProperty(e, t) {
			this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
				ascent: 0,
				boxWidth: this.defaultBoxWidth,
				f: "",
				fStyle: "",
				fWeight: "",
				fc: "",
				j: "",
				justifyOffset: "",
				l: [],
				lh: 0,
				lineWidths: [],
				ls: "",
				of: "",
				s: "",
				sc: "",
				sw: 0,
				t: 0,
				tr: 0,
				sz: 0,
				ps: null,
				fillColorAnim: !1,
				strokeColorAnim: !1,
				strokeWidthAnim: !1,
				yOffset: 0,
				finalSize: 0,
				finalText: [],
				finalLineHeight: 0,
				__complete: !1
			}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
		}
		TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			return e;
		}, TextProperty.prototype.setCurrentData = function(e) {
			e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
		}, TextProperty.prototype.searchProperty = function() {
			return this.searchKeyframes();
		}, TextProperty.prototype.searchKeyframes = function() {
			return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
		}, TextProperty.prototype.addEffect = function(e) {
			this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
		}, TextProperty.prototype.getValue = function(e) {
			if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !e)) {
				this.currentData.t = this.data.d.k[this.keysIndex].s.t;
				var t = this.currentData, n = this.keysIndex;
				if (this.lock) {
					this.setCurrentData(this.currentData);
					return;
				}
				this.lock = !0, this._mdf = !1;
				var r, i = this.effectsSequence.length, a = e || this.data.d.k[this.keysIndex].s;
				for (r = 0; r < i; r += 1) a = n === this.keysIndex ? this.effectsSequence[r](this.currentData, a.t) : this.effectsSequence[r](a, a.t);
				t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
			}
		}, TextProperty.prototype.getKeyframeValue = function() {
			for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, r = e.length; n <= r - 1 && !(n === r - 1 || e[n + 1].t > t);) n += 1;
			return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s;
		}, TextProperty.prototype.buildFinalText = function(e) {
			for (var t = [], n = 0, r = e.length, i, a, o = !1, s = !1, c = ""; n < r;) o = s, s = !1, i = e.charCodeAt(n), c = e.charAt(n), FontManager.isCombinedCharacter(i) ? o = !0 : i >= 55296 && i <= 56319 ? FontManager.isRegionalFlag(e, n) ? c = e.substr(n, 14) : (a = e.charCodeAt(n + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(i, a) ? (c = e.substr(n, 2), o = !0) : c = FontManager.isFlagEmoji(e.substr(n, 4)) ? e.substr(n, 4) : e.substr(n, 2))) : i > 56319 ? (a = e.charCodeAt(n + 1), FontManager.isVariationSelector(i) && (o = !0)) : FontManager.isZeroWidthJoiner(i) && (o = !0, s = !0), o ? (t[t.length - 1] += c, o = !1) : t.push(c), n += c.length;
			return t;
		}, TextProperty.prototype.completeTextData = function(e) {
			e.__complete = !0;
			var t = this.elem.globalData.fontManager, n = this.data, r = [], i, a, o, s = 0, c, l = n.m.g, d = 0, p = 0, g = 0, _ = [], y = 0, x = 0, C, ee, te = t.getFontByName(e.f), ne, T = 0, re = getFontProperties(te);
			e.fWeight = re.weight, e.fStyle = re.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), a = e.finalText.length, e.finalLineHeight = e.lh;
			var ie = e.tr / 1e3 * e.finalSize, ae;
			if (e.sz) for (var oe = !0, se = e.sz[0], ce = e.sz[1], le, ue; oe;) {
				ue = this.buildFinalText(e.t), le = 0, y = 0, a = ue.length, ie = e.tr / 1e3 * e.finalSize;
				var de = -1;
				for (i = 0; i < a; i += 1) ae = ue[i].charCodeAt(0), o = !1, ue[i] === " " ? de = i : (ae === 13 || ae === 3) && (y = 0, o = !0, le += e.finalLineHeight || e.finalSize * 1.2), t.chars ? (ne = t.getCharData(ue[i], te.fStyle, te.fFamily), T = o ? 0 : ne.w * e.finalSize / 100) : T = t.measureText(ue[i], e.f, e.finalSize), y + T > se && ue[i] !== " " ? (de === -1 ? a += 1 : i = de, le += e.finalLineHeight || e.finalSize * 1.2, ue.splice(i, +(de === i), "\r"), de = -1, y = 0) : (y += T, y += ie);
				le += te.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && ce < le ? (--e.finalSize, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = ue, a = e.finalText.length, oe = !1);
			}
			y = -ie, T = 0;
			var fe = 0, pe;
			for (i = 0; i < a; i += 1) if (o = !1, pe = e.finalText[i], ae = pe.charCodeAt(0), ae === 13 || ae === 3 ? (fe = 0, _.push(y), x = y > x ? y : x, y = -2 * ie, c = "", o = !0, g += 1) : c = pe, t.chars ? (ne = t.getCharData(pe, te.fStyle, t.getFontByName(e.f).fFamily), T = o ? 0 : ne.w * e.finalSize / 100) : T = t.measureText(c, e.f, e.finalSize), pe === " " ? fe += T + ie : (y += T + ie + fe, fe = 0), r.push({
				l: T,
				an: T,
				add: d,
				n: o,
				anIndexes: [],
				val: c,
				line: g,
				animatorJustifyOffset: 0
			}), l == 2) {
				if (d += T, c === "" || c === " " || i === a - 1) {
					for ((c === "" || c === " ") && (d -= T); p <= i;) r[p].an = d, r[p].ind = s, r[p].extra = T, p += 1;
					s += 1, d = 0;
				}
			} else if (l == 3) {
				if (d += T, c === "" || i === a - 1) {
					for (c === "" && (d -= T); p <= i;) r[p].an = d, r[p].ind = s, r[p].extra = T, p += 1;
					d = 0, s += 1;
				}
			} else r[s].ind = s, r[s].extra = 0, s += 1;
			if (e.l = r, x = y > x ? y : x, _.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
			else switch (e.boxWidth = x, e.j) {
				case 1:
					e.justifyOffset = -e.boxWidth;
					break;
				case 2:
					e.justifyOffset = -e.boxWidth / 2;
					break;
				default: e.justifyOffset = 0;
			}
			e.lineWidths = _;
			var me = n.a, he, ge;
			ee = me.length;
			var _e, ve, ye = [];
			for (C = 0; C < ee; C += 1) {
				for (he = me[C], he.a.sc && (e.strokeColorAnim = !0), he.a.sw && (e.strokeWidthAnim = !0), (he.a.fc || he.a.fh || he.a.fs || he.a.fb) && (e.fillColorAnim = !0), ve = 0, _e = he.s.b, i = 0; i < a; i += 1) ge = r[i], ge.anIndexes[C] = ve, (_e == 1 && ge.val !== "" || _e == 2 && ge.val !== "" && ge.val !== " " || _e == 3 && (ge.n || ge.val == " " || i == a - 1) || _e == 4 && (ge.n || i == a - 1)) && (he.s.rn === 1 && ye.push(ve), ve += 1);
				n.a[C].s.totalChars = ve;
				var be = -1, xe;
				if (he.s.rn === 1) for (i = 0; i < a; i += 1) ge = r[i], be != ge.anIndexes[C] && (be = ge.anIndexes[C], xe = ye.splice(Math.floor(Math.random() * ye.length), 1)[0]), ge.anIndexes[C] = xe;
			}
			e.yOffset = e.finalLineHeight || e.finalSize * 1.2, e.ls = e.ls || 0, e.ascent = te.ascent * e.finalSize / 100;
		}, TextProperty.prototype.updateDocumentData = function(e, t) {
			t = t === void 0 ? this.keysIndex : t;
			var n = this.copyData({}, this.data.d.k[t].s);
			n = this.copyData(n, e), this.data.d.k[t].s = n, this.recalculate(t), this.setCurrentData(n), this.elem.addDynamicProperty(this);
		}, TextProperty.prototype.recalculate = function(e) {
			var t = this.data.d.k[e].s;
			t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t);
		}, TextProperty.prototype.canResizeFont = function(e) {
			this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
		}, TextProperty.prototype.setMinimumFontSize = function(e) {
			this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
		};
		var TextSelectorProp = function() {
			var e = Math.max, t = Math.min, n = Math.floor;
			function r(e, t) {
				this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || { k: 0 }, 0, 0, this), "e" in t ? this.e = PropertyFactory.getProp(e, t.e, 0, 0, this) : this.e = { v: 100 }, this.o = PropertyFactory.getProp(e, t.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(e, t.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
			}
			r.prototype = {
				getMult: function(r) {
					this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
					var i = 0, a = 0, o = 1, s = 1;
					this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
					var c = BezierFactory.getBezierEasing(i, a, o, s).get, l = 0, d = this.finalS, p = this.finalE, g = this.data.sh;
					if (g === 2) l = p === d ? +(r >= p) : e(0, t(.5 / (p - d) + (r - d) / (p - d), 1)), l = c(l);
					else if (g === 3) l = p === d ? r >= p ? 0 : 1 : 1 - e(0, t(.5 / (p - d) + (r - d) / (p - d), 1)), l = c(l);
					else if (g === 4) p === d ? l = 0 : (l = e(0, t(.5 / (p - d) + (r - d) / (p - d), 1)), l < .5 ? l *= 2 : l = 1 - 2 * (l - .5)), l = c(l);
					else if (g === 5) {
						if (p === d) l = 0;
						else {
							var _ = p - d;
							r = t(e(0, r + .5 - d), p - d);
							var y = -_ / 2 + r, x = _ / 2;
							l = Math.sqrt(1 - y * y / (x * x));
						}
						l = c(l);
					} else g === 6 ? (p === d ? l = 0 : (r = t(e(0, r + .5 - d), p - d), l = (1 + Math.cos(Math.PI + Math.PI * 2 * r / (p - d))) / 2), l = c(l)) : (r >= n(d) && (l = r - d < 0 ? e(0, t(t(p, 1) - (d - r), 1)) : e(0, t(p - r, 1))), l = c(l));
					if (this.sm.v !== 100) {
						var C = this.sm.v * .01;
						C === 0 && (C = 1e-8);
						var ee = .5 - C * .5;
						l < ee ? l = 0 : (l = (l - ee) / C, l > 1 && (l = 1));
					}
					return l * this.a.v;
				},
				getValue: function(e) {
					this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && this.data.r === 2 && (this.e.v = this._currentTextLength);
					var t = this.data.r === 2 ? 1 : 100 / this.data.totalChars, n = this.o.v / t, r = this.s.v / t + n, i = this.e.v / t + n;
					if (r > i) {
						var a = r;
						r = i, i = a;
					}
					this.finalS = r, this.finalE = i;
				}
			}, extendPrototype([DynamicPropertyContainer], r);
			function i(e, t, n) {
				return new r(e, t, n);
			}
			return { getTextSelectorProp: i };
		}();
		function TextAnimatorDataProperty(e, t, n) {
			var r = { propType: !1 }, i = PropertyFactory.getProp, a = t.a;
			this.a = {
				r: a.r ? i(e, a.r, 0, degToRads, n) : r,
				rx: a.rx ? i(e, a.rx, 0, degToRads, n) : r,
				ry: a.ry ? i(e, a.ry, 0, degToRads, n) : r,
				sk: a.sk ? i(e, a.sk, 0, degToRads, n) : r,
				sa: a.sa ? i(e, a.sa, 0, degToRads, n) : r,
				s: a.s ? i(e, a.s, 1, .01, n) : r,
				a: a.a ? i(e, a.a, 1, 0, n) : r,
				o: a.o ? i(e, a.o, 0, .01, n) : r,
				p: a.p ? i(e, a.p, 1, 0, n) : r,
				sw: a.sw ? i(e, a.sw, 0, 0, n) : r,
				sc: a.sc ? i(e, a.sc, 1, 0, n) : r,
				fc: a.fc ? i(e, a.fc, 1, 0, n) : r,
				fh: a.fh ? i(e, a.fh, 0, 0, n) : r,
				fs: a.fs ? i(e, a.fs, 0, .01, n) : r,
				fb: a.fb ? i(e, a.fb, 0, .01, n) : r,
				t: a.t ? i(e, a.t, 0, 0, n) : r
			}, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, n), this.s.t = t.s.t;
		}
		function TextAnimatorProperty(e, t, n) {
			this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n);
		}
		TextAnimatorProperty.prototype.searchProperties = function() {
			var e, t = this._textData.a.length, n, r = PropertyFactory.getProp;
			for (e = 0; e < t; e += 1) n = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, n, this);
			this._textData.p && "m" in this._textData.p ? (this._pathData = {
				a: r(this._elem, this._textData.p.a, 0, 0, this),
				f: r(this._elem, this._textData.p.f, 0, 0, this),
				l: r(this._elem, this._textData.p.l, 0, 0, this),
				r: r(this._elem, this._textData.p.r, 0, 0, this),
				p: r(this._elem, this._textData.p.p, 0, 0, this),
				m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
			}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
		}, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
			if (this.lettersChangedFlag = t, !(!this._mdf && !this._isFirstFrame && !t && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
				this._isFirstFrame = !1;
				var n = this._moreOptions.alignment.v, r = this._animatorsData, i = this._textData, a = this.mHelper, o = this._renderType, s = this.renderedLetters.length, c, l, d, p, g = e.l, _, y, x, C, ee, te, ne, T, re, ie, ae, oe, se, ce, le;
				if (this._hasMaskedPath) {
					if (le = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
						var ue = le.v;
						this._pathData.r.v && (ue = ue.reverse()), _ = {
							tLength: 0,
							segments: []
						}, p = ue._length - 1;
						var de;
						for (oe = 0, d = 0; d < p; d += 1) de = bez.buildBezierData(ue.v[d], ue.v[d + 1], [ue.o[d][0] - ue.v[d][0], ue.o[d][1] - ue.v[d][1]], [ue.i[d + 1][0] - ue.v[d + 1][0], ue.i[d + 1][1] - ue.v[d + 1][1]]), _.tLength += de.segmentLength, _.segments.push(de), oe += de.segmentLength;
						d = p, le.v.c && (de = bez.buildBezierData(ue.v[d], ue.v[0], [ue.o[d][0] - ue.v[d][0], ue.o[d][1] - ue.v[d][1]], [ue.i[0][0] - ue.v[0][0], ue.i[0][1] - ue.v[0][1]]), _.tLength += de.segmentLength, _.segments.push(de), oe += de.segmentLength), this._pathData.pi = _;
					}
					if (_ = this._pathData.pi, y = this._pathData.f.v, ne = 0, te = 1, C = 0, ee = !0, ie = _.segments, y < 0 && le.v.c) for (_.tLength < Math.abs(y) && (y = -Math.abs(y) % _.tLength), ne = ie.length - 1, re = ie[ne].points, te = re.length - 1; y < 0;) y += re[te].partialLength, --te, te < 0 && (--ne, re = ie[ne].points, te = re.length - 1);
					re = ie[ne].points, T = re[te - 1], x = re[te], ae = x.partialLength;
				}
				p = g.length, c = 0, l = 0;
				var fe = e.finalSize * 1.2 * .714, pe = !0, me, he, ge, _e = r.length, ve, ye, be = -1, xe, Se, Ce, we = y, Te = ne, Ee = te, De = -1, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie = "", Le = this.defaultPropsArray, Re;
				if (e.j === 2 || e.j === 1) {
					var ze = 0, Be = 0, Ve = e.j === 2 ? -.5 : -1, He = 0, Ue = !0;
					for (d = 0; d < p; d += 1) if (g[d].n) {
						for (ze && (ze += Be); He < d;) g[He].animatorJustifyOffset = ze, He += 1;
						ze = 0, Ue = !0;
					} else {
						for (ge = 0; ge < _e; ge += 1) me = r[ge].a, me.t.propType && (Ue && e.j === 2 && (Be += me.t.v * Ve), he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), ye.length ? ze += me.t.v * ye[0] * Ve : ze += me.t.v * ye * Ve);
						Ue = !1;
					}
					for (ze && (ze += Be); He < d;) g[He].animatorJustifyOffset = ze, He += 1;
				}
				for (d = 0; d < p; d += 1) {
					if (a.reset(), Oe = 1, g[d].n) c = 0, l += e.yOffset, l += +!!pe, y = we, pe = !1, this._hasMaskedPath && (ne = Te, te = Ee, re = ie[ne].points, T = re[te - 1], x = re[te], ae = x.partialLength, C = 0), Ie = "", Fe = "", Ne = "", Re = "", Le = this.defaultPropsArray;
					else {
						if (this._hasMaskedPath) {
							if (De !== g[d].line) {
								switch (e.j) {
									case 1:
										y += oe - e.lineWidths[g[d].line];
										break;
									case 2:
										y += (oe - e.lineWidths[g[d].line]) / 2;
										break;
									default: break;
								}
								De = g[d].line;
							}
							be !== g[d].ind && (g[be] && (y += g[be].extra), y += g[d].an / 2, be = g[d].ind), y += n[0] * g[d].an * .005;
							var We = 0;
							for (ge = 0; ge < _e; ge += 1) me = r[ge].a, me.p.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), ye.length ? We += me.p.v[0] * ye[0] : We += me.p.v[0] * ye), me.a.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), ye.length ? We += me.a.v[0] * ye[0] : We += me.a.v[0] * ye);
							for (ee = !0, this._pathData.a.v && (y = g[0].an * .5 + (oe - this._pathData.f.v - g[0].an * .5 - g[g.length - 1].an * .5) * be / (p - 1), y += this._pathData.f.v); ee;) C + ae >= y + We || !re ? (se = (y + We - C) / x.partialLength, Se = T.point[0] + (x.point[0] - T.point[0]) * se, Ce = T.point[1] + (x.point[1] - T.point[1]) * se, a.translate(-n[0] * g[d].an * .005, -(n[1] * fe) * .01), ee = !1) : re && (C += x.partialLength, te += 1, te >= re.length && (te = 0, ne += 1, ie[ne] ? re = ie[ne].points : le.v.c ? (te = 0, ne = 0, re = ie[ne].points) : (C -= x.partialLength, re = null)), re && (T = x, x = re[te], ae = x.partialLength));
							xe = g[d].an / 2 - g[d].add, a.translate(-xe, 0, 0);
						} else xe = g[d].an / 2 - g[d].add, a.translate(-xe, 0, 0), a.translate(-n[0] * g[d].an * .005, -n[1] * fe * .01, 0);
						for (ge = 0; ge < _e; ge += 1) me = r[ge].a, me.t.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), (c !== 0 || e.j !== 0) && (this._hasMaskedPath ? ye.length ? y += me.t.v * ye[0] : y += me.t.v * ye : ye.length ? c += me.t.v * ye[0] : c += me.t.v * ye));
						for (e.strokeWidthAnim && (Ae = e.sw || 0), e.strokeColorAnim && (ke = e.sc ? [
							e.sc[0],
							e.sc[1],
							e.sc[2]
						] : [
							0,
							0,
							0
						]), e.fillColorAnim && e.fc && (je = [
							e.fc[0],
							e.fc[1],
							e.fc[2]
						]), ge = 0; ge < _e; ge += 1) me = r[ge].a, me.a.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), ye.length ? a.translate(-me.a.v[0] * ye[0], -me.a.v[1] * ye[1], me.a.v[2] * ye[2]) : a.translate(-me.a.v[0] * ye, -me.a.v[1] * ye, me.a.v[2] * ye));
						for (ge = 0; ge < _e; ge += 1) me = r[ge].a, me.s.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), ye.length ? a.scale(1 + (me.s.v[0] - 1) * ye[0], 1 + (me.s.v[1] - 1) * ye[1], 1) : a.scale(1 + (me.s.v[0] - 1) * ye, 1 + (me.s.v[1] - 1) * ye, 1));
						for (ge = 0; ge < _e; ge += 1) {
							if (me = r[ge].a, he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), me.sk.propType && (ye.length ? a.skewFromAxis(-me.sk.v * ye[0], me.sa.v * ye[1]) : a.skewFromAxis(-me.sk.v * ye, me.sa.v * ye)), me.r.propType && (ye.length ? a.rotateZ(-me.r.v * ye[2]) : a.rotateZ(-me.r.v * ye)), me.ry.propType && (ye.length ? a.rotateY(me.ry.v * ye[1]) : a.rotateY(me.ry.v * ye)), me.rx.propType && (ye.length ? a.rotateX(me.rx.v * ye[0]) : a.rotateX(me.rx.v * ye)), me.o.propType && (ye.length ? Oe += (me.o.v * ye[0] - Oe) * ye[0] : Oe += (me.o.v * ye - Oe) * ye), e.strokeWidthAnim && me.sw.propType && (ye.length ? Ae += me.sw.v * ye[0] : Ae += me.sw.v * ye), e.strokeColorAnim && me.sc.propType) for (Me = 0; Me < 3; Me += 1) ye.length ? ke[Me] += (me.sc.v[Me] - ke[Me]) * ye[0] : ke[Me] += (me.sc.v[Me] - ke[Me]) * ye;
							if (e.fillColorAnim && e.fc) {
								if (me.fc.propType) for (Me = 0; Me < 3; Me += 1) ye.length ? je[Me] += (me.fc.v[Me] - je[Me]) * ye[0] : je[Me] += (me.fc.v[Me] - je[Me]) * ye;
								me.fh.propType && (je = ye.length ? addHueToRGB(je, me.fh.v * ye[0]) : addHueToRGB(je, me.fh.v * ye)), me.fs.propType && (je = ye.length ? addSaturationToRGB(je, me.fs.v * ye[0]) : addSaturationToRGB(je, me.fs.v * ye)), me.fb.propType && (je = ye.length ? addBrightnessToRGB(je, me.fb.v * ye[0]) : addBrightnessToRGB(je, me.fb.v * ye));
							}
						}
						for (ge = 0; ge < _e; ge += 1) me = r[ge].a, me.p.propType && (he = r[ge].s, ye = he.getMult(g[d].anIndexes[ge], i.a[ge].s.totalChars), this._hasMaskedPath ? ye.length ? a.translate(0, me.p.v[1] * ye[0], -me.p.v[2] * ye[1]) : a.translate(0, me.p.v[1] * ye, -me.p.v[2] * ye) : ye.length ? a.translate(me.p.v[0] * ye[0], me.p.v[1] * ye[1], -me.p.v[2] * ye[2]) : a.translate(me.p.v[0] * ye, me.p.v[1] * ye, -me.p.v[2] * ye));
						if (e.strokeWidthAnim && (Ne = Ae < 0 ? 0 : Ae), e.strokeColorAnim && (Pe = "rgb(" + Math.round(ke[0] * 255) + "," + Math.round(ke[1] * 255) + "," + Math.round(ke[2] * 255) + ")"), e.fillColorAnim && e.fc && (Fe = "rgb(" + Math.round(je[0] * 255) + "," + Math.round(je[1] * 255) + "," + Math.round(je[2] * 255) + ")"), this._hasMaskedPath) {
							if (a.translate(0, -e.ls), a.translate(0, n[1] * fe * .01 + l, 0), this._pathData.p.v) {
								ce = (x.point[1] - T.point[1]) / (x.point[0] - T.point[0]);
								var Ge = Math.atan(ce) * 180 / Math.PI;
								x.point[0] < T.point[0] && (Ge += 180), a.rotate(-Ge * Math.PI / 180);
							}
							a.translate(Se, Ce, 0), y -= n[0] * g[d].an * .005, g[d + 1] && be !== g[d + 1].ind && (y += g[d].an / 2, y += e.tr * .001 * e.finalSize);
						} else {
							switch (a.translate(c, l, 0), e.ps && a.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
								case 1:
									a.translate(g[d].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[g[d].line]), 0, 0);
									break;
								case 2:
									a.translate(g[d].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[g[d].line]) / 2, 0, 0);
									break;
								default: break;
							}
							a.translate(0, -e.ls), a.translate(xe, 0, 0), a.translate(n[0] * g[d].an * .005, n[1] * fe * .01, 0), c += g[d].l + e.tr * .001 * e.finalSize;
						}
						o === "html" ? Ie = a.toCSS() : o === "svg" ? Ie = a.to2dCSS() : Le = [
							a.props[0],
							a.props[1],
							a.props[2],
							a.props[3],
							a.props[4],
							a.props[5],
							a.props[6],
							a.props[7],
							a.props[8],
							a.props[9],
							a.props[10],
							a.props[11],
							a.props[12],
							a.props[13],
							a.props[14],
							a.props[15]
						], Re = Oe;
					}
					s <= d ? (ve = new LetterProps(Re, Ne, Pe, Fe, Ie, Le), this.renderedLetters.push(ve), s += 1, this.lettersChangedFlag = !0) : (ve = this.renderedLetters[d], this.lettersChangedFlag = ve.update(Re, Ne, Pe, Fe, Ie, Le) || this.lettersChangedFlag);
				}
			}
		}, TextAnimatorProperty.prototype.getValue = function() {
			this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
		}, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
		function ITextElement() {}
		ITextElement.prototype.initElement = function(e, t, n) {
			this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, n), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
		}, ITextElement.prototype.prepareFrame = function(e) {
			this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
		}, ITextElement.prototype.createPathShape = function(e, t) {
			var n, r = t.length, i, a = "";
			for (n = 0; n < r; n += 1) t[n].ty === "sh" && (i = t[n].ks.k, a += buildShapeString(i, i.i.length, !0, e));
			return a;
		}, ITextElement.prototype.updateDocumentData = function(e, t) {
			this.textProperty.updateDocumentData(e, t);
		}, ITextElement.prototype.canResizeFont = function(e) {
			this.textProperty.canResizeFont(e);
		}, ITextElement.prototype.setMinimumFontSize = function(e) {
			this.textProperty.setMinimumFontSize(e);
		}, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, n, r, i) {
			switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
				case 1:
					t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0);
					break;
				case 2:
					t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0);
					break;
				default: break;
			}
			t.translate(r, i, 0);
		}, ITextElement.prototype.buildColor = function(e) {
			return "rgb(" + Math.round(e[0] * 255) + "," + Math.round(e[1] * 255) + "," + Math.round(e[2] * 255) + ")";
		}, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
			(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
		};
		var emptyShapeData = { shapes: [] };
		function SVGTextLottieElement(e, t, n) {
			this.textSpans = [], this.renderType = "svg", this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			SVGBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement,
			ITextElement
		], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
			this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
		}, SVGTextLottieElement.prototype.buildTextContents = function(e) {
			for (var t = 0, n = e.length, r = [], i = ""; t < n;) e[t] === "\r" || e[t] === "" ? (r.push(i), i = "") : i += e[t], t += 1;
			return r.push(i), r;
		}, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
			if (e.shapes && e.shapes.length) {
				var n = e.shapes[0];
				if (n.it) {
					var r = n.it[n.it.length - 1];
					r.s && (r.s.k[0] = t, r.s.k[1] = t);
				}
			}
			return e;
		}, SVGTextLottieElement.prototype.buildNewText = function() {
			this.addDynamicProperty(this);
			var e, t, n = this.textProperty.currentData;
			this.renderedLetters = createSizedArray(n ? n.l.length : 0), n.fc ? this.layerElement.setAttribute("fill", this.buildColor(n.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), n.sc && (this.layerElement.setAttribute("stroke", this.buildColor(n.sc)), this.layerElement.setAttribute("stroke-width", n.sw)), this.layerElement.setAttribute("font-size", n.finalSize);
			var r = this.globalData.fontManager.getFontByName(n.f);
			if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
			else {
				this.layerElement.setAttribute("font-family", r.fFamily);
				var i = n.fWeight, a = n.fStyle;
				this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i);
			}
			this.layerElement.setAttribute("aria-label", n.t);
			var o = n.l || [], s = !!this.globalData.fontManager.chars;
			t = o.length;
			var c, l = this.mHelper, d = "", p = this.data.singleShape, g = 0, _ = 0, y = !0, x = n.tr * .001 * n.finalSize;
			if (p && !s && !n.sz) {
				var C = this.textContainer, ee = "start";
				switch (n.j) {
					case 1:
						ee = "end";
						break;
					case 2:
						ee = "middle";
						break;
					default:
						ee = "start";
						break;
				}
				C.setAttribute("text-anchor", ee), C.setAttribute("letter-spacing", x);
				var te = this.buildTextContents(n.finalText);
				for (t = te.length, _ = n.ps ? n.ps[1] + n.ascent : 0, e = 0; e < t; e += 1) c = this.textSpans[e].span || createNS("tspan"), c.textContent = te[e], c.setAttribute("x", 0), c.setAttribute("y", _), c.style.display = "inherit", C.appendChild(c), this.textSpans[e] || (this.textSpans[e] = {
					span: null,
					glyph: null
				}), this.textSpans[e].span = c, _ += n.finalLineHeight;
				this.layerElement.appendChild(C);
			} else {
				var ne = this.textSpans.length, T;
				for (e = 0; e < t; e += 1) {
					if (this.textSpans[e] || (this.textSpans[e] = {
						span: null,
						childSpan: null,
						glyph: null
					}), !s || !p || e === 0) {
						if (c = ne > e ? this.textSpans[e].span : createNS(s ? "g" : "text"), ne <= e) {
							if (c.setAttribute("stroke-linecap", "butt"), c.setAttribute("stroke-linejoin", "round"), c.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = c, s) {
								var re = createNS("g");
								c.appendChild(re), this.textSpans[e].childSpan = re;
							}
							this.textSpans[e].span = c, this.layerElement.appendChild(c);
						}
						c.style.display = "inherit";
					}
					if (l.reset(), p && (o[e].n && (g = -x, _ += n.yOffset, _ += +!!y, y = !1), this.applyTextPropertiesToMatrix(n, l, o[e].line, g, _), g += o[e].l || 0, g += x), s) {
						T = this.globalData.fontManager.getCharData(n.finalText[e], r.fStyle, this.globalData.fontManager.getFontByName(n.f).fFamily);
						var ie;
						if (T.t === 1) ie = new SVGCompElement(T.data, this.globalData, this);
						else {
							var ae = emptyShapeData;
							T.data && T.data.shapes && (ae = this.buildShapeData(T.data, n.finalSize)), ie = new SVGShapeElement(ae, this.globalData, this);
						}
						if (this.textSpans[e].glyph) {
							var oe = this.textSpans[e].glyph;
							this.textSpans[e].childSpan.removeChild(oe.layerElement), oe.destroy();
						}
						this.textSpans[e].glyph = ie, ie._debug = !0, ie.prepareFrame(0), ie.renderFrame(), this.textSpans[e].childSpan.appendChild(ie.layerElement), T.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + n.finalSize / 100 + "," + n.finalSize / 100 + ")");
					} else p && c.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), c.textContent = o[e].val, c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
				}
				p && c && c.setAttribute("d", d);
			}
			for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
			this._sizeChanged = !0;
		}, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
			if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
				this._sizeChanged = !1;
				var e = this.layerElement.getBBox();
				this.bbox = {
					top: e.y,
					left: e.x,
					width: e.width,
					height: e.height
				};
			}
			return this.bbox;
		}, SVGTextLottieElement.prototype.getValue = function() {
			var e, t = this.textSpans.length, n;
			for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < t; e += 1) n = this.textSpans[e].glyph, n && (n.prepareFrame(this.comp.renderedFrame - this.data.st), n._mdf && (this._mdf = !0));
		}, SVGTextLottieElement.prototype.renderInnerContent = function() {
			if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
				this._sizeChanged = !0;
				var e, t, n = this.textAnimator.renderedLetters, r = this.textProperty.currentData.l;
				t = r.length;
				var i, a, o;
				for (e = 0; e < t; e += 1) r[e].n || (i = n[e], a = this.textSpans[e].span, o = this.textSpans[e].glyph, o && o.renderFrame(), i._mdf.m && a.setAttribute("transform", i.m), i._mdf.o && a.setAttribute("opacity", i.o), i._mdf.sw && a.setAttribute("stroke-width", i.sw), i._mdf.sc && a.setAttribute("stroke", i.sc), i._mdf.fc && a.setAttribute("fill", i.fc));
			}
		};
		function ISolidElement(e, t, n) {
			this.initElement(e, t, n);
		}
		extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
			var e = createNS("rect");
			e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e);
		};
		function NullElement(e, t, n) {
			this.initFrame(), this.initBaseData(e, t, n), this.initFrame(), this.initTransform(e, t, n), this.initHierarchy();
		}
		NullElement.prototype.prepareFrame = function(e) {
			this.prepareProperties(e, !0);
		}, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
			return null;
		}, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([
			BaseElement,
			TransformElement,
			HierarchyElement,
			FrameElement
		], NullElement);
		function SVGRendererBase() {}
		extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
			return new NullElement(e, this.globalData, this);
		}, SVGRendererBase.prototype.createShape = function(e) {
			return new SVGShapeElement(e, this.globalData, this);
		}, SVGRendererBase.prototype.createText = function(e) {
			return new SVGTextLottieElement(e, this.globalData, this);
		}, SVGRendererBase.prototype.createImage = function(e) {
			return new IImageElement(e, this.globalData, this);
		}, SVGRendererBase.prototype.createSolid = function(e) {
			return new ISolidElement(e, this.globalData, this);
		}, SVGRendererBase.prototype.configAnimation = function(e) {
			this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
			var t = this.globalData.defs;
			this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
			var n = createNS("clipPath"), r = createNS("rect");
			r.setAttribute("width", e.w), r.setAttribute("height", e.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
			var i = createElementID();
			n.setAttribute("id", i), n.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(n), this.layers = e.layers, this.elements = createSizedArray(e.layers.length);
		}, SVGRendererBase.prototype.destroy = function() {
			this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
			var e, t = this.layers ? this.layers.length : 0;
			for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
			this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
		}, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
			var t = 0, n = this.layers.length;
			for (t = 0; t < n; t += 1) if (this.layers[t].ind === e) return t;
			return -1;
		}, SVGRendererBase.prototype.buildItem = function(e) {
			var t = this.elements;
			if (!(t[e] || this.layers[e].ty === 99)) {
				t[e] = !0;
				var n = this.createItem(this.layers[e]);
				if (t[e] = n, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, e), this.layers[e].tt) {
					var r = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
					if (r === -1) return;
					if (!this.elements[r] || this.elements[r] === !0) this.buildItem(r), this.addPendingElement(n);
					else {
						var i = t[r].getMatte(this.layers[e].tt);
						n.setMatte(i);
					}
				}
			}
		}, SVGRendererBase.prototype.checkPendingElements = function() {
			for (; this.pendingElements.length;) {
				var e = this.pendingElements.pop();
				if (e.checkParenting(), e.data.tt) for (var t = 0, n = this.elements.length; t < n;) {
					if (this.elements[t] === e) {
						var r = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1, i = this.elements[r].getMatte(this.layers[t].tt);
						e.setMatte(i);
						break;
					}
					t += 1;
				}
			}
		}, SVGRendererBase.prototype.renderFrame = function(e) {
			if (!(this.renderedFrame === e || this.destroyed)) {
				e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
				var t, n = this.layers.length;
				for (this.completeLayers || this.checkLayers(e), t = n - 1; t >= 0; --t) (this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
				if (this.globalData._mdf) for (t = 0; t < n; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
			}
		}, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
			var n = e.getBaseElement();
			if (n) {
				for (var r = 0, i; r < t;) this.elements[r] && this.elements[r] !== !0 && this.elements[r].getBaseElement() && (i = this.elements[r].getBaseElement()), r += 1;
				i ? this.layerElement.insertBefore(n, i) : this.layerElement.appendChild(n);
			}
		}, SVGRendererBase.prototype.hide = function() {
			this.layerElement.style.display = "none";
		}, SVGRendererBase.prototype.show = function() {
			this.layerElement.style.display = "block";
		};
		function ICompElement() {}
		extendPrototype([
			BaseElement,
			TransformElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement
		], ICompElement), ICompElement.prototype.initElement = function(e, t, n) {
			this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !t.progressiveLoad) && this.buildAllItems(), this.hide();
		}, ICompElement.prototype.prepareFrame = function(e) {
			if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), !(!this.isInRange && !this.data.xt)) {
				if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
				else {
					var t = this.tm.v;
					t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t;
				}
				var n, r = this.elements.length;
				for (this.completeLayers || this.checkLayers(this.renderedFrame), n = r - 1; n >= 0; --n) (this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0));
			}
		}, ICompElement.prototype.renderInnerContent = function() {
			var e, t = this.layers.length;
			for (e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
		}, ICompElement.prototype.setElements = function(e) {
			this.elements = e;
		}, ICompElement.prototype.getElements = function() {
			return this.elements;
		}, ICompElement.prototype.destroyElements = function() {
			var e, t = this.layers.length;
			for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
		}, ICompElement.prototype.destroy = function() {
			this.destroyElements(), this.destroyBaseElement();
		};
		function SVGCompElement(e, t, n) {
			this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 };
		}
		extendPrototype([
			SVGRendererBase,
			ICompElement,
			SVGBaseElement
		], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
			return new SVGCompElement(e, this.globalData, this);
		};
		function SVGRenderer(e, t) {
			this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
			var n = "";
			if (t && t.title) {
				var r = createNS("title"), i = createElementID();
				r.setAttribute("id", i), r.textContent = t.title, this.svgElement.appendChild(r), n += i;
			}
			if (t && t.description) {
				var a = createNS("desc"), o = createElementID();
				a.setAttribute("id", o), a.textContent = t.description, this.svgElement.appendChild(a), n += " " + o;
			}
			n && this.svgElement.setAttribute("aria-labelledby", n);
			var s = createNS("defs");
			this.svgElement.appendChild(s);
			var c = createNS("g");
			this.svgElement.appendChild(c), this.layerElement = c, this.renderConfig = {
				preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
				imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
				contentVisibility: t && t.contentVisibility || "visible",
				progressiveLoad: t && t.progressiveLoad || !1,
				hideOnTransparent: !(t && t.hideOnTransparent === !1),
				viewBoxOnly: t && t.viewBoxOnly || !1,
				viewBoxSize: t && t.viewBoxSize || !1,
				className: t && t.className || "",
				id: t && t.id || "",
				focusable: t && t.focusable,
				filterSize: {
					width: t && t.filterSize && t.filterSize.width || "100%",
					height: t && t.filterSize && t.filterSize.height || "100%",
					x: t && t.filterSize && t.filterSize.x || "0%",
					y: t && t.filterSize && t.filterSize.y || "0%"
				},
				width: t && t.width,
				height: t && t.height,
				runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
			}, this.globalData = {
				_mdf: !1,
				frameNum: -1,
				defs: s,
				renderConfig: this.renderConfig
			}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
		}
		extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
			return new SVGCompElement(e, this.globalData, this);
		};
		function ShapeTransformManager() {
			this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
		}
		ShapeTransformManager.prototype = {
			addTransformSequence: function(e) {
				var t, n = e.length, r = "_";
				for (t = 0; t < n; t += 1) r += e[t].transform.key + "_";
				var i = this.sequences[r];
				return i || (i = {
					transforms: [].concat(e),
					finalTransform: new Matrix(),
					_mdf: !1
				}, this.sequences[r] = i, this.sequenceList.push(i)), i;
			},
			processSequence: function(e, t) {
				for (var n = 0, r = e.transforms.length, i = t; n < r && !t;) {
					if (e.transforms[n].transform.mProps._mdf) {
						i = !0;
						break;
					}
					n += 1;
				}
				if (i) for (e.finalTransform.reset(), n = r - 1; n >= 0; --n) e.finalTransform.multiply(e.transforms[n].transform.mProps.v);
				e._mdf = i;
			},
			processSequences: function(e) {
				var t, n = this.sequenceList.length;
				for (t = 0; t < n; t += 1) this.processSequence(this.sequenceList[t], e);
			},
			getNewKey: function() {
				return this.transform_key_count += 1, "_" + this.transform_key_count;
			}
		};
		var lumaLoader = function() {
			var e = "__lottie_element_luma_buffer", t = null, n = null, r = null;
			function i() {
				var t = createNS("svg"), n = createNS("filter"), r = createNS("feColorMatrix");
				return n.setAttribute("id", e), r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), n.appendChild(r), t.appendChild(n), t.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (t.style.display = "none"), t;
			}
			function a() {
				t || (r = i(), document.body.appendChild(r), t = createTag("canvas"), n = t.getContext("2d"), n.filter = "url(#" + e + ")", n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1));
			}
			function o(r) {
				return t || a(), t.width = r.width, t.height = r.height, n.filter = "url(#" + e + ")", t;
			}
			return {
				load: a,
				get: o
			};
		};
		function createCanvas(e, t) {
			if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
			var n = createTag("canvas");
			return n.width = e, n.height = t, n;
		}
		var assetLoader = function() {
			return {
				loadLumaCanvas: lumaLoader.load,
				getLumaCanvas: lumaLoader.get,
				createCanvas
			};
		}(), registeredEffects = {};
		function CVEffects(e) {
			var t, n = e.data.ef ? e.data.ef.length : 0;
			this.filters = [];
			var r;
			for (t = 0; t < n; t += 1) {
				r = null;
				var i = e.data.ef[t].ty;
				if (registeredEffects[i]) {
					var a = registeredEffects[i].effect;
					r = new a(e.effectsManager.effectElements[t], e);
				}
				r && this.filters.push(r);
			}
			this.filters.length && e.addRenderableComponent(this);
		}
		CVEffects.prototype.renderFrame = function(e) {
			var t, n = this.filters.length;
			for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
		}, CVEffects.prototype.getEffects = function(e) {
			var t, n = this.filters.length, r = [];
			for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
			return r;
		};
		function registerEffect(e, t) {
			registeredEffects[e] = { effect: t };
		}
		function CVMaskElement(e, t) {
			this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
			var n, r = this.masksProperties.length, i = !1;
			for (n = 0; n < r; n += 1) this.masksProperties[n].mode !== "n" && (i = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
			this.hasMasks = i, i && this.element.addRenderableComponent(this);
		}
		CVMaskElement.prototype.renderFrame = function() {
			if (this.hasMasks) {
				var e = this.element.finalTransform.mat, t = this.element.canvasContext, n, r = this.masksProperties.length, i, a, o;
				for (t.beginPath(), n = 0; n < r; n += 1) if (this.masksProperties[n].mode !== "n") {
					this.masksProperties[n].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), o = this.viewData[n].v, i = e.applyToPointArray(o.v[0][0], o.v[0][1], 0), t.moveTo(i[0], i[1]);
					var s, c = o._length;
					for (s = 1; s < c; s += 1) a = e.applyToTriplePoints(o.o[s - 1], o.i[s], o.v[s]), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
					a = e.applyToTriplePoints(o.o[s - 1], o.i[0], o.v[0]), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
				}
				this.element.globalData.renderer.save(!0), t.clip();
			}
		}, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
			this.element = null;
		};
		function CVBaseElement() {}
		var operationsMap = {
			1: "source-in",
			2: "source-out",
			3: "source-in",
			4: "source-out"
		};
		CVBaseElement.prototype = {
			createElements: function() {},
			initRendererElement: function() {},
			createContainerElements: function() {
				if (this.data.tt >= 1) {
					this.buffers = [];
					var e = this.globalData.canvasContext, t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
					this.buffers.push(t);
					var n = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
					this.buffers.push(n), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
				}
				this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
			},
			createContent: function() {},
			setBlendMode: function() {
				var e = this.globalData;
				if (e.blendMode !== this.data.bm) {
					e.blendMode = this.data.bm;
					var t = getBlendMode(this.data.bm);
					e.canvasContext.globalCompositeOperation = t;
				}
			},
			createRenderableComponents: function() {
				this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
			},
			hideElement: function() {
				!this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
			},
			showElement: function() {
				this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
			},
			clearCanvas: function(e) {
				e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
			},
			prepareLayer: function() {
				if (this.data.tt >= 1) {
					var e = this.buffers[0].getContext("2d");
					this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
				}
			},
			exitLayer: function() {
				if (this.data.tt >= 1) {
					var e = this.buffers[1], t = e.getContext("2d");
					if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
						var n = assetLoader.getLumaCanvas(this.canvasContext.canvas);
						n.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(n, 0, 0);
					}
					this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
				}
			},
			renderFrame: function(e) {
				if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
					this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
					var t = this.data.ty === 0;
					this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame &&= !1;
				}
			},
			destroy: function() {
				this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
			},
			mHelper: new Matrix()
		}, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
		function CVShapeData(e, t, n, r) {
			this.styledShapes = [], this.tr = [
				0,
				0,
				0,
				0,
				0,
				0
			];
			var i = 4;
			t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, i, e);
			var a, o = n.length, s;
			for (a = 0; a < o; a += 1) n[a].closed || (s = {
				transforms: r.addTransformSequence(n[a].transforms),
				trNodes: []
			}, this.styledShapes.push(s), n[a].elements.push(s));
		}
		CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
		function CVShapeElement(e, t, n) {
			this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			CVBaseElement,
			IShapeElement,
			HierarchyElement,
			FrameElement,
			RenderableElement
		], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
			opacity: 1,
			_opMdf: !1
		}, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
			this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
		}, CVShapeElement.prototype.createStyleElement = function(e, t) {
			var n = {
				data: e,
				type: e.ty,
				preTransforms: this.transformsManager.addTransformSequence(t),
				transforms: [],
				elements: [],
				closed: e.hd === !0
			}, r = {};
			return e.ty === "fl" || e.ty === "st" ? (r.c = PropertyFactory.getProp(this, e.c, 1, 255, this), r.c.k || (n.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : (e.ty === "gf" || e.ty === "gs") && (r.s = PropertyFactory.getProp(this, e.s, 1, null, this), r.e = PropertyFactory.getProp(this, e.e, 1, null, this), r.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, .01, this), r.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this), r.g = new GradientProperty(this, e.g, this)), r.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs" ? (n.lc = lineCapEnum[e.lc || 2], n.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (n.ml = e.ml), r.w = PropertyFactory.getProp(this, e.w, 0, null, this), r.w.k || (n.wi = r.w.v), e.d && (r.d = new DashProperty(this, e.d, "canvas", this), r.d.k || (n.da = r.d.dashArray, n.do = r.d.dashoffset[0]))) : n.r = e.r === 2 ? "evenodd" : "nonzero", this.stylesList.push(n), r.style = n, r;
		}, CVShapeElement.prototype.createGroupElement = function() {
			return {
				it: [],
				prevViewData: []
			};
		}, CVShapeElement.prototype.createTransformElement = function(e) {
			return { transform: {
				opacity: 1,
				_opMdf: !1,
				key: this.transformsManager.getNewKey(),
				op: PropertyFactory.getProp(this, e.o, 0, .01, this),
				mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
			} };
		}, CVShapeElement.prototype.createShapeElement = function(e) {
			var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
			return this.shapes.push(t), this.addShapeToModifiers(t), t;
		}, CVShapeElement.prototype.reloadShapes = function() {
			this._isFirstFrame = !0;
			var e, t = this.itemsData.length;
			for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
			for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
			this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
		}, CVShapeElement.prototype.addTransformToStyleList = function(e) {
			var t, n = this.stylesList.length;
			for (t = 0; t < n; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
		}, CVShapeElement.prototype.removeTransformFromStyleList = function() {
			var e, t = this.stylesList.length;
			for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
		}, CVShapeElement.prototype.closeStyles = function(e) {
			var t, n = e.length;
			for (t = 0; t < n; t += 1) e[t].closed = !0;
		}, CVShapeElement.prototype.searchShapes = function(e, t, n, r, i) {
			var a, o = e.length - 1, s, c, l = [], d = [], p, g, _, y = [].concat(i);
			for (a = o; a >= 0; --a) {
				if (p = this.searchProcessedElement(e[a]), p ? t[a] = n[p - 1] : e[a]._shouldRender = r, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") p ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], y), l.push(t[a].style);
				else if (e[a].ty === "gr") {
					if (!p) t[a] = this.createGroupElement(e[a]);
					else for (c = t[a].it.length, s = 0; s < c; s += 1) t[a].prevViewData[s] = t[a].it[s];
					this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, r, y);
				} else e[a].ty === "tr" ? (p || (_ = this.createTransformElement(e[a]), t[a] = _), y.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? p || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (p ? (g = t[a], g.closed = !1) : (g = ShapeModifiers.getModifier(e[a].ty), g.init(this, e[a]), t[a] = g, this.shapeModifiers.push(g)), d.push(g)) : e[a].ty === "rp" && (p ? (g = t[a], g.closed = !0) : (g = ShapeModifiers.getModifier(e[a].ty), t[a] = g, g.init(this, e, a, t), this.shapeModifiers.push(g), r = !1), d.push(g));
				this.addProcessedElement(e[a], a + 1);
			}
			for (this.removeTransformFromStyleList(), this.closeStyles(l), o = d.length, a = 0; a < o; a += 1) d[a].closed = !0;
		}, CVShapeElement.prototype.renderInnerContent = function() {
			this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
		}, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
			(e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0);
		}, CVShapeElement.prototype.drawLayer = function() {
			var e, t = this.stylesList.length, n, r, i, a, o, s, c = this.globalData.renderer, l = this.globalData.canvasContext, d, p;
			for (e = 0; e < t; e += 1) if (p = this.stylesList[e], d = p.type, !((d === "st" || d === "gs") && p.wi === 0 || !p.data._shouldRender || p.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
				for (c.save(), o = p.elements, d === "st" || d === "gs" ? (c.ctxStrokeStyle(d === "st" ? p.co : p.grd), c.ctxLineWidth(p.wi), c.ctxLineCap(p.lc), c.ctxLineJoin(p.lj), c.ctxMiterLimit(p.ml || 0)) : c.ctxFillStyle(d === "fl" ? p.co : p.grd), c.ctxOpacity(p.coOp), d !== "st" && d !== "gs" && l.beginPath(), c.ctxTransform(p.preTransforms.finalTransform.props), r = o.length, n = 0; n < r; n += 1) {
					for ((d === "st" || d === "gs") && (l.beginPath(), p.da && (l.setLineDash(p.da), l.lineDashOffset = p.do)), s = o[n].trNodes, a = s.length, i = 0; i < a; i += 1) s[i].t === "m" ? l.moveTo(s[i].p[0], s[i].p[1]) : s[i].t === "c" ? l.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : l.closePath();
					(d === "st" || d === "gs") && (c.ctxStroke(), p.da && l.setLineDash(this.dashResetter));
				}
				d !== "st" && d !== "gs" && this.globalData.renderer.ctxFill(p.r), c.restore();
			}
		}, CVShapeElement.prototype.renderShape = function(e, t, n, r) {
			var i, a = t.length - 1, o = e;
			for (i = a; i >= 0; --i) t[i].ty === "tr" ? (o = n[i].transform, this.renderShapeTransform(e, o)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], n[i]) : t[i].ty === "fl" ? this.renderFill(t[i], n[i], o) : t[i].ty === "st" ? this.renderStroke(t[i], n[i], o) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], n[i], o) : t[i].ty === "gr" ? this.renderShape(o, t[i].it, n[i].it) : t[i].ty;
			r && this.drawLayer();
		}, CVShapeElement.prototype.renderStyledShape = function(e, t) {
			if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
				var n = e.trNodes, r = t.paths, i, a, o, s = r._length;
				n.length = 0;
				var c = e.transforms.finalTransform;
				for (o = 0; o < s; o += 1) {
					var l = r.shapes[o];
					if (l && l.v) {
						for (a = l._length, i = 1; i < a; i += 1) i === 1 && n.push({
							t: "m",
							p: c.applyToPointArray(l.v[0][0], l.v[0][1], 0)
						}), n.push({
							t: "c",
							pts: c.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
						});
						a === 1 && n.push({
							t: "m",
							p: c.applyToPointArray(l.v[0][0], l.v[0][1], 0)
						}), l.c && a && (n.push({
							t: "c",
							pts: c.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
						}), n.push({ t: "z" }));
					}
				}
				e.trNodes = n;
			}
		}, CVShapeElement.prototype.renderPath = function(e, t) {
			if (e.hd !== !0 && e._shouldRender) {
				var n, r = t.styledShapes.length;
				for (n = 0; n < r; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh);
			}
		}, CVShapeElement.prototype.renderFill = function(e, t, n) {
			var r = t.style;
			(t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity);
		}, CVShapeElement.prototype.renderGradientFill = function(e, t, n) {
			var r = t.style, i;
			if (!r.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
				var a = this.globalData.canvasContext, o = t.s.v, s = t.e.v;
				if (e.t === 1) i = a.createLinearGradient(o[0], o[1], s[0], s[1]);
				else {
					var c = Math.sqrt((o[0] - s[0]) ** 2 + (o[1] - s[1]) ** 2), l = Math.atan2(s[1] - o[1], s[0] - o[0]), d = t.h.v;
					d >= 1 ? d = .99 : d <= -1 && (d = -.99);
					var p = c * d, g = Math.cos(l + t.a.v) * p + o[0], _ = Math.sin(l + t.a.v) * p + o[1];
					i = a.createRadialGradient(g, _, 0, o[0], o[1], c);
				}
				var y, x = e.g.p, C = t.g.c, ee = 1;
				for (y = 0; y < x; y += 1) t.g._hasOpacity && t.g._collapsable && (ee = t.g.o[y * 2 + 1]), i.addColorStop(C[y * 4] / 100, "rgba(" + C[y * 4 + 1] + "," + C[y * 4 + 2] + "," + C[y * 4 + 3] + "," + ee + ")");
				r.grd = i;
			}
			r.coOp = t.o.v * n.opacity;
		}, CVShapeElement.prototype.renderStroke = function(e, t, n) {
			var r = t.style, i = t.d;
			i && (i._mdf || this._isFirstFrame) && (r.da = i.dashArray, r.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity), (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v);
		}, CVShapeElement.prototype.destroy = function() {
			this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
		};
		function CVTextElement(e, t, n) {
			this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
				fill: "rgba(0,0,0,0)",
				stroke: "rgba(0,0,0,0)",
				sWidth: 0,
				fValue: ""
			}, this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			CVBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableElement,
			ITextElement
		], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
			var e = this.textProperty.currentData;
			this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
			var t = !1;
			e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
			var n = !1;
			e.sc && (n = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
			var r = this.globalData.fontManager.getFontByName(e.f), i, a, o = e.l, s = this.mHelper;
			this.stroke = n, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, a = e.finalText.length;
			var c, l, d, p, g, _, y, x, C, ee, te = this.data.singleShape, ne = e.tr * .001 * e.finalSize, T = 0, re = 0, ie = !0, ae = 0;
			for (i = 0; i < a; i += 1) {
				c = this.globalData.fontManager.getCharData(e.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), l = c && c.data || {}, s.reset(), te && o[i].n && (T = -ne, re += e.yOffset, re += +!!ie, ie = !1), g = l.shapes ? l.shapes[0].it : [], y = g.length, s.scale(e.finalSize / 100, e.finalSize / 100), te && this.applyTextPropertiesToMatrix(e, s, o[i].line, T, re), C = createSizedArray(y - 1);
				var oe = 0;
				for (_ = 0; _ < y; _ += 1) if (g[_].ty === "sh") {
					for (p = g[_].ks.k.i.length, x = g[_].ks.k, ee = [], d = 1; d < p; d += 1) d === 1 && ee.push(s.applyToX(x.v[0][0], x.v[0][1], 0), s.applyToY(x.v[0][0], x.v[0][1], 0)), ee.push(s.applyToX(x.o[d - 1][0], x.o[d - 1][1], 0), s.applyToY(x.o[d - 1][0], x.o[d - 1][1], 0), s.applyToX(x.i[d][0], x.i[d][1], 0), s.applyToY(x.i[d][0], x.i[d][1], 0), s.applyToX(x.v[d][0], x.v[d][1], 0), s.applyToY(x.v[d][0], x.v[d][1], 0));
					ee.push(s.applyToX(x.o[d - 1][0], x.o[d - 1][1], 0), s.applyToY(x.o[d - 1][0], x.o[d - 1][1], 0), s.applyToX(x.i[0][0], x.i[0][1], 0), s.applyToY(x.i[0][0], x.i[0][1], 0), s.applyToX(x.v[0][0], x.v[0][1], 0), s.applyToY(x.v[0][0], x.v[0][1], 0)), C[oe] = ee, oe += 1;
				}
				te && (T += o[i].l, T += ne), this.textSpans[ae] ? this.textSpans[ae].elem = C : this.textSpans[ae] = { elem: C }, ae += 1;
			}
		}, CVTextElement.prototype.renderInnerContent = function() {
			this.validateText();
			var e = this.canvasContext;
			e.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
			var t, n, r, i, a, o, s = this.textAnimator.renderedLetters, c = this.textProperty.currentData.l;
			n = c.length;
			var l, d = null, p = null, g = null, _, y, x = this.globalData.renderer;
			for (t = 0; t < n; t += 1) if (!c[t].n) {
				if (l = s[t], l && (x.save(), x.ctxTransform(l.p), x.ctxOpacity(l.o)), this.fill) {
					for (l && l.fc ? d !== l.fc && (x.ctxFillStyle(l.fc), d = l.fc) : d !== this.values.fill && (d = this.values.fill, x.ctxFillStyle(this.values.fill)), _ = this.textSpans[t].elem, i = _.length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) for (y = _[r], o = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < o; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
					this.globalData.canvasContext.closePath(), x.ctxFill();
				}
				if (this.stroke) {
					for (l && l.sw ? g !== l.sw && (g = l.sw, x.ctxLineWidth(l.sw)) : g !== this.values.sWidth && (g = this.values.sWidth, x.ctxLineWidth(this.values.sWidth)), l && l.sc ? p !== l.sc && (p = l.sc, x.ctxStrokeStyle(l.sc)) : p !== this.values.stroke && (p = this.values.stroke, x.ctxStrokeStyle(this.values.stroke)), _ = this.textSpans[t].elem, i = _.length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) for (y = _[r], o = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < o; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
					this.globalData.canvasContext.closePath(), x.ctxStroke();
				}
				l && this.globalData.renderer.restore();
			}
		};
		function CVImageElement(e, t, n) {
			this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			CVBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableElement
		], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
			if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
				var e = createTag("canvas");
				e.width = this.assetData.w, e.height = this.assetData.h;
				var t = e.getContext("2d"), n = this.img.width, r = this.img.height, i = n / r, a = this.assetData.w / this.assetData.h, o, s, c = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
				i > a && c === "xMidYMid slice" || i < a && c !== "xMidYMid slice" ? (s = r, o = s * a) : (o = n, s = o / a), t.drawImage(this.img, (n - o) / 2, (r - s) / 2, o, s, 0, 0, this.assetData.w, this.assetData.h), this.img = e;
			}
		}, CVImageElement.prototype.renderInnerContent = function() {
			this.canvasContext.drawImage(this.img, 0, 0);
		}, CVImageElement.prototype.destroy = function() {
			this.img = null;
		};
		function CVSolidElement(e, t, n) {
			this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			CVBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableElement
		], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
			this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
		};
		function CanvasRendererBase() {}
		extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
			return new CVShapeElement(e, this.globalData, this);
		}, CanvasRendererBase.prototype.createText = function(e) {
			return new CVTextElement(e, this.globalData, this);
		}, CanvasRendererBase.prototype.createImage = function(e) {
			return new CVImageElement(e, this.globalData, this);
		}, CanvasRendererBase.prototype.createSolid = function(e) {
			return new CVSolidElement(e, this.globalData, this);
		}, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
			e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
		}, CanvasRendererBase.prototype.ctxOpacity = function(e) {
			this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
		}, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
			this.canvasContext.fillStyle = e;
		}, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
			this.canvasContext.strokeStyle = e;
		}, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
			this.canvasContext.lineWidth = e;
		}, CanvasRendererBase.prototype.ctxLineCap = function(e) {
			this.canvasContext.lineCap = e;
		}, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
			this.canvasContext.lineJoin = e;
		}, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
			this.canvasContext.miterLimit = e;
		}, CanvasRendererBase.prototype.ctxFill = function(e) {
			this.canvasContext.fill(e);
		}, CanvasRendererBase.prototype.ctxFillRect = function(e, t, n, r) {
			this.canvasContext.fillRect(e, t, n, r);
		}, CanvasRendererBase.prototype.ctxStroke = function() {
			this.canvasContext.stroke();
		}, CanvasRendererBase.prototype.reset = function() {
			if (!this.renderConfig.clearCanvas) {
				this.canvasContext.restore();
				return;
			}
			this.contextData.reset();
		}, CanvasRendererBase.prototype.save = function() {
			this.canvasContext.save();
		}, CanvasRendererBase.prototype.restore = function(e) {
			if (!this.renderConfig.clearCanvas) {
				this.canvasContext.restore();
				return;
			}
			e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e);
		}, CanvasRendererBase.prototype.configAnimation = function(e) {
			if (this.animationItem.wrapper) {
				this.animationItem.container = createTag("canvas");
				var t = this.animationItem.container.style;
				t.width = "100%", t.height = "100%";
				var n = "0px 0px 0px";
				t.transformOrigin = n, t.mozTransformOrigin = n, t.webkitTransformOrigin = n, t["-webkit-transform"] = n, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
			} else this.canvasContext = this.renderConfig.context;
			this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
				w: e.w,
				h: e.h,
				sx: 0,
				sy: 0,
				tx: 0,
				ty: 0
			}, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize();
		}, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
			this.reset();
			var n, r;
			e ? (n = e, r = t, this.canvasContext.canvas.width = n, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (n = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (n = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = n * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr);
			var i, a;
			if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
				var o = this.renderConfig.preserveAspectRatio.split(" "), s = o[1] || "meet", c = o[0] || "xMidYMid", l = c.substr(0, 4), d = c.substr(4);
				i = n / r, a = this.transformCanvas.w / this.transformCanvas.h, a > i && s === "meet" || a < i && s === "slice" ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), l === "xMid" && (a < i && s === "meet" || a > i && s === "slice") ? this.transformCanvas.tx = (n - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : l === "xMax" && (a < i && s === "meet" || a > i && s === "slice") ? this.transformCanvas.tx = (n - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, d === "YMid" && (a > i && s === "meet" || a < i && s === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : d === "YMax" && (a > i && s === "meet" || a < i && s === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
			} else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
			this.transformCanvas.props = [
				this.transformCanvas.sx,
				0,
				0,
				0,
				0,
				this.transformCanvas.sy,
				0,
				0,
				0,
				0,
				1,
				0,
				this.transformCanvas.tx,
				this.transformCanvas.ty,
				0,
				1
			], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
		}, CanvasRendererBase.prototype.destroy = function() {
			this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
			var e;
			for (e = (this.layers ? this.layers.length : 0) - 1; e >= 0; --e) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
			this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
		}, CanvasRendererBase.prototype.renderFrame = function(e, t) {
			if (!(this.renderedFrame === e && this.renderConfig.clearCanvas === !0 && !t || this.destroyed || e === -1)) {
				this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
				var n, r = this.layers.length;
				for (this.completeLayers || this.checkLayers(e), n = r - 1; n >= 0; --n) (this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st);
				if (this.globalData._mdf) {
					for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = r - 1; n >= 0; --n) (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
					this.renderConfig.clearCanvas !== !0 && this.restore();
				}
			}
		}, CanvasRendererBase.prototype.buildItem = function(e) {
			var t = this.elements;
			if (!(t[e] || this.layers[e].ty === 99)) {
				var n = this.createItem(this.layers[e], this, this.globalData);
				t[e] = n, n.initExpressions();
			}
		}, CanvasRendererBase.prototype.checkPendingElements = function() {
			for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
		}, CanvasRendererBase.prototype.hide = function() {
			this.animationItem.container.style.display = "none";
		}, CanvasRendererBase.prototype.show = function() {
			this.animationItem.container.style.display = "block";
		};
		function CanvasContext() {
			this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
		}
		function CVContextData() {
			this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
			var e, t = 15;
			for (e = 0; e < t; e += 1) {
				var n = new CanvasContext();
				this.stack[e] = n;
			}
			this._length = t, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
		}
		CVContextData.prototype.duplicate = function() {
			var e = this._length * 2, t = 0;
			for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext();
			this._length = e;
		}, CVContextData.prototype.reset = function() {
			this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
		}, CVContextData.prototype.restore = function(e) {
			--this.cArrPos;
			var t = this.stack[this.cArrPos], n = t.transform, r, i = this.cTr.props;
			for (r = 0; r < 16; r += 1) i[r] = n[r];
			if (e) {
				this.nativeContext.restore();
				var a = this.stack[this.cArrPos + 1];
				this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit;
			}
			this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || t.opacity !== -1 && this.currentOpacity !== t.opacity) && (this.nativeContext.globalAlpha = t.opacity, this.currentOpacity = t.opacity), this.currentFillStyle = t.fillStyle, this.currentStrokeStyle = t.strokeStyle, this.currentLineWidth = t.lineWidth, this.currentLineCap = t.lineCap, this.currentLineJoin = t.lineJoin, this.currentMiterLimit = t.miterLimit;
		}, CVContextData.prototype.save = function(e) {
			e && this.nativeContext.save();
			var t = this.cTr.props;
			this._length <= this.cArrPos && this.duplicate();
			var n = this.stack[this.cArrPos], r;
			for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
			this.cArrPos += 1;
			var i = this.stack[this.cArrPos];
			i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit;
		}, CVContextData.prototype.setOpacity = function(e) {
			this.stack[this.cArrPos].opacity = e;
		}, CVContextData.prototype.setContext = function(e) {
			this.nativeContext = e;
		}, CVContextData.prototype.fillStyle = function(e) {
			this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e);
		}, CVContextData.prototype.strokeStyle = function(e) {
			this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e);
		}, CVContextData.prototype.lineWidth = function(e) {
			this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e);
		}, CVContextData.prototype.lineCap = function(e) {
			this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e);
		}, CVContextData.prototype.lineJoin = function(e) {
			this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e);
		}, CVContextData.prototype.miterLimit = function(e) {
			this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e);
		}, CVContextData.prototype.transform = function(e) {
			this.transformMat.cloneFromProps(e);
			var t = this.cTr;
			this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
			var n = t.props;
			this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]);
		}, CVContextData.prototype.opacity = function(e) {
			var t = this.stack[this.cArrPos].opacity;
			t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t);
		}, CVContextData.prototype.fill = function(e) {
			this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e);
		}, CVContextData.prototype.fillRect = function(e, t, n, r) {
			this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, n, r);
		}, CVContextData.prototype.stroke = function() {
			this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
		};
		function CVCompElement(e, t, n) {
			this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 };
		}
		extendPrototype([
			CanvasRendererBase,
			ICompElement,
			CVBaseElement
		], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
			var e = this.canvasContext;
			e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip();
			var t;
			for (t = this.layers.length - 1; t >= 0; --t) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
		}, CVCompElement.prototype.destroy = function() {
			var e;
			for (e = this.layers.length - 1; e >= 0; --e) this.elements[e] && this.elements[e].destroy();
			this.layers = null, this.elements = null;
		}, CVCompElement.prototype.createComp = function(e) {
			return new CVCompElement(e, this.globalData, this);
		};
		function CanvasRenderer(e, t) {
			this.animationItem = e, this.renderConfig = {
				clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
				context: t && t.context || null,
				progressiveLoad: t && t.progressiveLoad || !1,
				preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
				imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
				contentVisibility: t && t.contentVisibility || "visible",
				className: t && t.className || "",
				id: t && t.id || "",
				runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
			}, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
				frameNum: -1,
				_mdf: !1,
				renderConfig: this.renderConfig,
				currentGlobalAlpha: -1
			}, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
		}
		extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
			return new CVCompElement(e, this.globalData, this);
		};
		function HBaseElement() {}
		HBaseElement.prototype = {
			checkBlendMode: function() {},
			initRendererElement: function() {
				this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
			},
			createContainerElements: function() {
				this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
			},
			renderElement: function() {
				var e = this.transformedElement ? this.transformedElement.style : {};
				if (this.finalTransform._matMdf) {
					var t = this.finalTransform.mat.toCSS();
					e.transform = t, e.webkitTransform = t;
				}
				this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
			},
			renderFrame: function() {
				this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame &&= !1);
			},
			destroy: function() {
				this.layerElement = null, this.transformedElement = null, this.matteElement &&= null, this.maskManager &&= (this.maskManager.destroy(), null);
			},
			createRenderableComponents: function() {
				this.maskManager = new MaskElement(this.data, this, this.globalData);
			},
			addEffects: function() {},
			setMatte: function() {}
		}, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
		function HSolidElement(e, t, n) {
			this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			HBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement
		], HSolidElement), HSolidElement.prototype.createContent = function() {
			var e;
			this.data.hasMask ? (e = createNS("rect"), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (e = createTag("div"), e.style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e);
		};
		function HShapeElement(e, t, n) {
			this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, n), this.prevViewData = [], this.currentBBox = {
				x: 999999,
				y: -999999,
				h: 0,
				w: 0
			};
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			HSolidElement,
			SVGShapeElement,
			HBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableElement
		], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
			var e;
			if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
			else {
				e = createNS("svg");
				var t = this.comp.data ? this.comp.data : this.globalData.compSize;
				e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e);
			}
			this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e;
		}, HShapeElement.prototype.getTransformedPoint = function(e, t) {
			var n, r = e.length;
			for (n = 0; n < r; n += 1) t = e[n].mProps.v.applyToPointArray(t[0], t[1], 0);
			return t;
		}, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
			var n = e.sh.v, r = e.transformers, i, a = n._length, o, s, c, l;
			if (!(a <= 1)) {
				for (i = 0; i < a - 1; i += 1) o = this.getTransformedPoint(r, n.v[i]), s = this.getTransformedPoint(r, n.o[i]), c = this.getTransformedPoint(r, n.i[i + 1]), l = this.getTransformedPoint(r, n.v[i + 1]), this.checkBounds(o, s, c, l, t);
				n.c && (o = this.getTransformedPoint(r, n.v[i]), s = this.getTransformedPoint(r, n.o[i]), c = this.getTransformedPoint(r, n.i[0]), l = this.getTransformedPoint(r, n.v[0]), this.checkBounds(o, s, c, l, t));
			}
		}, HShapeElement.prototype.checkBounds = function(e, t, n, r, i) {
			this.getBoundsOfCurve(e, t, n, r);
			var a = this.shapeBoundingBox;
			i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax);
		}, HShapeElement.prototype.shapeBoundingBox = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, HShapeElement.prototype.tempBoundingBox = {
			x: 0,
			xMax: 0,
			y: 0,
			yMax: 0,
			width: 0,
			height: 0
		}, HShapeElement.prototype.getBoundsOfCurve = function(e, t, n, r) {
			for (var i = [[e[0], r[0]], [e[1], r[1]]], a, o, s, c, l, d, p, g = 0; g < 2; ++g) o = 6 * e[g] - 12 * t[g] + 6 * n[g], a = -3 * e[g] + 9 * t[g] - 9 * n[g] + 3 * r[g], s = 3 * t[g] - 3 * e[g], o |= 0, a |= 0, s |= 0, a === 0 && o === 0 || (a === 0 ? (c = -s / o, c > 0 && c < 1 && i[g].push(this.calculateF(c, e, t, n, r, g))) : (l = o * o - 4 * s * a, l >= 0 && (d = (-o + bmSqrt(l)) / (2 * a), d > 0 && d < 1 && i[g].push(this.calculateF(d, e, t, n, r, g)), p = (-o - bmSqrt(l)) / (2 * a), p > 0 && p < 1 && i[g].push(this.calculateF(p, e, t, n, r, g)))));
			this.shapeBoundingBox.left = bmMin.apply(null, i[0]), this.shapeBoundingBox.top = bmMin.apply(null, i[1]), this.shapeBoundingBox.right = bmMax.apply(null, i[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, i[1]);
		}, HShapeElement.prototype.calculateF = function(e, t, n, r, i, a) {
			return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * n[a] + 3 * (1 - e) * bmPow(e, 2) * r[a] + bmPow(e, 3) * i[a];
		}, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
			var n, r = e.length;
			for (n = 0; n < r; n += 1) e[n] && e[n].sh ? this.calculateShapeBoundingBox(e[n], t) : e[n] && e[n].it ? this.calculateBoundingBox(e[n].it, t) : e[n] && e[n].style && e[n].w && this.expandStrokeBoundingBox(e[n].w, t);
		}, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
			var n = 0;
			if (e.keyframes) {
				for (var r = 0; r < e.keyframes.length; r += 1) {
					var i = e.keyframes[r].s;
					i > n && (n = i);
				}
				n *= e.mult;
			} else n = e.v * e.mult;
			t.x -= n, t.xMax += n, t.y -= n, t.yMax += n;
		}, HShapeElement.prototype.currentBoxContains = function(e) {
			return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height;
		}, HShapeElement.prototype.renderInnerContent = function() {
			if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
				var e = this.tempBoundingBox, t = 999999;
				if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
				var n = !1;
				if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), n = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), n = !0), n || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
					this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
					var r = this.shapeCont.style, i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
					r.transform = i, r.webkitTransform = i;
				}
			}
		};
		function HTextElement(e, t, n) {
			this.textSpans = [], this.textPaths = [], this.currentBBox = {
				x: 999999,
				y: -999999,
				h: 0,
				w: 0
			}, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			HBaseElement,
			HierarchyElement,
			FrameElement,
			RenderableDOMElement,
			ITextElement
		], HTextElement), HTextElement.prototype.createContent = function() {
			if (this.isMasked = this.checkMasks(), this.isMasked) {
				this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
				var e = createNS("g");
				this.maskedElement.appendChild(e), this.innerElem = e;
			} else this.renderType = "html", this.innerElem = this.layerElement;
			this.checkParenting();
		}, HTextElement.prototype.buildNewText = function() {
			var e = this.textProperty.currentData;
			this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
			var t = this.innerElem.style, n = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
			t.fill = n, t.color = n, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
			var r = this.globalData.fontManager.getFontByName(e.f);
			if (!this.globalData.fontManager.chars) if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", r.fClass) this.innerElem.className = r.fClass;
			else {
				t.fontFamily = r.fFamily;
				var i = e.fWeight;
				t.fontStyle = e.fStyle, t.fontWeight = i;
			}
			var a, o, s = e.l;
			o = s.length;
			var c, l, d, p = this.mHelper, g, _ = "", y = 0;
			for (a = 0; a < o; a += 1) {
				if (this.globalData.fontManager.chars ? (this.textPaths[y] ? c = this.textPaths[y] : (c = createNS("path"), c.setAttribute("stroke-linecap", lineCapEnum[1]), c.setAttribute("stroke-linejoin", lineJoinEnum[2]), c.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[y] ? (l = this.textSpans[y], d = l.children[0]) : (l = createTag("div"), l.style.lineHeight = 0, d = createNS("svg"), d.appendChild(c), styleDiv(l)))) : this.isMasked ? c = this.textPaths[y] ? this.textPaths[y] : createNS("text") : this.textSpans[y] ? (l = this.textSpans[y], c = this.textPaths[y]) : (l = createTag("span"), styleDiv(l), c = createTag("span"), styleDiv(c), l.appendChild(c)), this.globalData.fontManager.chars) {
					var x = this.globalData.fontManager.getCharData(e.finalText[a], r.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), C = x ? x.data : null;
					if (p.reset(), C && C.shapes && C.shapes.length && (g = C.shapes[0].it, p.scale(e.finalSize / 100, e.finalSize / 100), _ = this.createPathShape(p, g), c.setAttribute("d", _)), this.isMasked) this.innerElem.appendChild(c);
					else {
						if (this.innerElem.appendChild(l), C && C.shapes) {
							document.body.appendChild(d);
							var ee = d.getBBox();
							d.setAttribute("width", ee.width + 2), d.setAttribute("height", ee.height + 2), d.setAttribute("viewBox", ee.x - 1 + " " + (ee.y - 1) + " " + (ee.width + 2) + " " + (ee.height + 2));
							var te = d.style, ne = "translate(" + (ee.x - 1) + "px," + (ee.y - 1) + "px)";
							te.transform = ne, te.webkitTransform = ne, s[a].yOffset = ee.y - 1;
						} else d.setAttribute("width", 1), d.setAttribute("height", 1);
						l.appendChild(d);
					}
				} else if (c.textContent = s[a].val, c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(c);
				else {
					this.innerElem.appendChild(l);
					var T = c.style, re = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
					T.transform = re, T.webkitTransform = re;
				}
				this.isMasked ? this.textSpans[y] = c : this.textSpans[y] = l, this.textSpans[y].style.display = "block", this.textPaths[y] = c, y += 1;
			}
			for (; y < this.textSpans.length;) this.textSpans[y].style.display = "none", y += 1;
		}, HTextElement.prototype.renderInnerContent = function() {
			this.validateText();
			var e;
			if (this.data.singleShape) {
				if (!this._isFirstFrame && !this.lettersChangedFlag) return;
				if (this.isMasked && this.finalTransform._matMdf) {
					this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
					var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
					e.transform = t, e.webkitTransform = t;
				}
			}
			if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
				var n, r, i = 0, a = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
				r = o.length;
				var s, c, l;
				for (n = 0; n < r; n += 1) o[n].n ? i += 1 : (c = this.textSpans[n], l = this.textPaths[n], s = a[i], i += 1, s._mdf.m && (this.isMasked ? c.setAttribute("transform", s.m) : (c.style.webkitTransform = s.m, c.style.transform = s.m)), c.style.opacity = s.o, s.sw && s._mdf.sw && l.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && l.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (l.setAttribute("fill", s.fc), l.style.color = s.fc));
				if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
					var d = this.innerElem.getBBox();
					this.currentBBox.w !== d.width && (this.currentBBox.w = d.width, this.svgElement.setAttribute("width", d.width)), this.currentBBox.h !== d.height && (this.currentBBox.h = d.height, this.svgElement.setAttribute("height", d.height));
					var p = 1;
					if (this.currentBBox.w !== d.width + p * 2 || this.currentBBox.h !== d.height + p * 2 || this.currentBBox.x !== d.x - p || this.currentBBox.y !== d.y - p) {
						this.currentBBox.w = d.width + p * 2, this.currentBBox.h = d.height + p * 2, this.currentBBox.x = d.x - p, this.currentBBox.y = d.y - p, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
						var g = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
						e.transform = g, e.webkitTransform = g;
					}
				}
			}
		};
		function HCameraElement(e, t, n) {
			this.initFrame(), this.initBaseData(e, t, n), this.initHierarchy();
			var r = PropertyFactory.getProp;
			if (this.pe = r(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = r(this, e.ks.p.x, 1, 0, this), this.py = r(this, e.ks.p.y, 1, 0, this), this.pz = r(this, e.ks.p.z, 1, 0, this)) : this.p = r(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = r(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
				var i, a = e.ks.or.k.length;
				for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null;
			}
			this.or = r(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, e.ks.rx, 0, degToRads, this), this.ry = r(this, e.ks.ry, 0, degToRads, this), this.rz = r(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = { mProp: this };
		}
		extendPrototype([
			BaseElement,
			FrameElement,
			HierarchyElement
		], HCameraElement), HCameraElement.prototype.setup = function() {
			var e, t = this.comp.threeDElements.length, n, r, i;
			for (e = 0; e < t; e += 1) if (n = this.comp.threeDElements[e], n.type === "3d") {
				r = n.perspectiveElem.style, i = n.container.style;
				var a = this.pe.v + "px", o = "0px 0px 0px", s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
				r.perspective = a, r.webkitPerspective = a, i.transformOrigin = o, i.mozTransformOrigin = o, i.webkitTransformOrigin = o, r.transform = s, r.webkitTransform = s;
			}
		}, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
			var e = this._isFirstFrame, t, n;
			if (this.hierarchy) for (n = this.hierarchy.length, t = 0; t < n; t += 1) e = this.hierarchy[t].finalTransform.mProp._mdf || e;
			if (e || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
				if (this.mat.reset(), this.hierarchy) for (n = this.hierarchy.length - 1, t = n; t >= 0; --t) {
					var r = this.hierarchy[t].finalTransform.mProp;
					this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
				}
				if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
					var i = this.p ? [
						this.p.v[0] - this.a.v[0],
						this.p.v[1] - this.a.v[1],
						this.p.v[2] - this.a.v[2]
					] : [
						this.px.v - this.a.v[0],
						this.py.v - this.a.v[1],
						this.pz.v - this.a.v[2]
					], a = Math.sqrt(i[0] ** 2 + i[1] ** 2 + i[2] ** 2), o = [
						i[0] / a,
						i[1] / a,
						i[2] / a
					], s = Math.sqrt(o[2] * o[2] + o[0] * o[0]), c = Math.atan2(o[1], s), l = Math.atan2(o[0], -o[2]);
					this.mat.rotateY(l).rotateX(-c);
				}
				this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
				var d = !this._prevMat.equals(this.mat);
				if ((d || this.pe._mdf) && this.comp.threeDElements) {
					n = this.comp.threeDElements.length;
					var p, g, _;
					for (t = 0; t < n; t += 1) if (p = this.comp.threeDElements[t], p.type === "3d") {
						if (d) {
							var y = this.mat.toCSS();
							_ = p.container.style, _.transform = y, _.webkitTransform = y;
						}
						this.pe._mdf && (g = p.perspectiveElem.style, g.perspective = this.pe.v + "px", g.webkitPerspective = this.pe.v + "px");
					}
					this.mat.clone(this._prevMat);
				}
			}
			this._isFirstFrame = !1;
		}, HCameraElement.prototype.prepareFrame = function(e) {
			this.prepareProperties(e, !0);
		}, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
			return null;
		};
		function HImageElement(e, t, n) {
			this.assetData = t.getAssetData(e.refId), this.initElement(e, t, n);
		}
		extendPrototype([
			BaseElement,
			TransformElement,
			HBaseElement,
			HSolidElement,
			HierarchyElement,
			FrameElement,
			RenderableElement
		], HImageElement), HImageElement.prototype.createContent = function() {
			var e = this.globalData.getAssetsPath(this.assetData), t = new Image();
			this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
		};
		function HybridRendererBase(e, t) {
			this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
				className: t && t.className || "",
				imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
				hideOnTransparent: !(t && t.hideOnTransparent === !1),
				filterSize: {
					width: t && t.filterSize && t.filterSize.width || "400%",
					height: t && t.filterSize && t.filterSize.height || "400%",
					x: t && t.filterSize && t.filterSize.x || "-100%",
					y: t && t.filterSize && t.filterSize.y || "-100%"
				}
			}, this.globalData = {
				_mdf: !1,
				frameNum: -1,
				renderConfig: this.renderConfig
			}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
		}
		extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
			for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
		}, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
			var n = e.getBaseElement();
			if (n) {
				var r = this.layers[t];
				if (!r.ddd || !this.supports3d) if (this.threeDElements) this.addTo3dContainer(n, t);
				else {
					for (var i = 0, a, o, s; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement && (o = this.elements[i], s = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : o.getBaseElement(), a = s || a), i += 1;
					a ? (!r.ddd || !this.supports3d) && this.layerElement.insertBefore(n, a) : (!r.ddd || !this.supports3d) && this.layerElement.appendChild(n);
				}
				else this.addTo3dContainer(n, t);
			}
		}, HybridRendererBase.prototype.createShape = function(e) {
			return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this);
		}, HybridRendererBase.prototype.createText = function(e) {
			return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this);
		}, HybridRendererBase.prototype.createCamera = function(e) {
			return this.camera = new HCameraElement(e, this.globalData, this), this.camera;
		}, HybridRendererBase.prototype.createImage = function(e) {
			return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this);
		}, HybridRendererBase.prototype.createSolid = function(e) {
			return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this);
		}, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
			for (var t = 0, n = this.threeDElements.length; t < n;) {
				if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
				t += 1;
			}
			return null;
		}, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
			var n = createTag("div"), r, i;
			styleDiv(n);
			var a = createTag("div");
			if (styleDiv(a), t === "3d") {
				r = n.style, r.width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
				var o = "50% 50%";
				r.webkitTransformOrigin = o, r.mozTransformOrigin = o, r.transformOrigin = o, i = a.style;
				var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
				i.transform = s, i.webkitTransform = s;
			}
			n.appendChild(a);
			var c = {
				container: a,
				perspectiveElem: n,
				startPos: e,
				endPos: e,
				type: t
			};
			return this.threeDElements.push(c), c;
		}, HybridRendererBase.prototype.build3dContainers = function() {
			var e, t = this.layers.length, n, r = "";
			for (e = 0; e < t; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (r !== "3d" && (r = "3d", n = this.createThreeDContainer(e, "3d")), n.endPos = Math.max(n.endPos, e)) : (r !== "2d" && (r = "2d", n = this.createThreeDContainer(e, "2d")), n.endPos = Math.max(n.endPos, e));
			for (t = this.threeDElements.length, e = t - 1; e >= 0; --e) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
		}, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
			for (var n = 0, r = this.threeDElements.length; n < r;) {
				if (t <= this.threeDElements[n].endPos) {
					for (var i = this.threeDElements[n].startPos, a; i < t;) this.elements[i] && this.elements[i].getBaseElement && (a = this.elements[i].getBaseElement()), i += 1;
					a ? this.threeDElements[n].container.insertBefore(e, a) : this.threeDElements[n].container.appendChild(e);
					break;
				}
				n += 1;
			}
		}, HybridRendererBase.prototype.configAnimation = function(e) {
			var t = createTag("div"), n = this.animationItem.wrapper, r = t.style;
			r.width = e.w + "px", r.height = e.h + "px", this.resizerElem = t, styleDiv(t), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), n.appendChild(t), r.overflow = "hidden";
			var i = createNS("svg");
			i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
			var a = createNS("defs");
			i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
		}, HybridRendererBase.prototype.destroy = function() {
			this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
			var e, t = this.layers ? this.layers.length : 0;
			for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
			this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
		}, HybridRendererBase.prototype.updateContainerSize = function() {
			var e = this.animationItem.wrapper.offsetWidth, t = this.animationItem.wrapper.offsetHeight, n = e / t, r = this.globalData.compSize.w / this.globalData.compSize.h, i, a, o, s;
			r > n ? (i = e / this.globalData.compSize.w, a = e / this.globalData.compSize.w, o = 0, s = (t - this.globalData.compSize.h * (e / this.globalData.compSize.w)) / 2) : (i = t / this.globalData.compSize.h, a = t / this.globalData.compSize.h, o = (e - this.globalData.compSize.w * (t / this.globalData.compSize.h)) / 2, s = 0);
			var c = this.resizerElem.style;
			c.webkitTransform = "matrix3d(" + i + ",0,0,0,0," + a + ",0,0,0,0,1,0," + o + "," + s + ",0,1)", c.transform = c.webkitTransform;
		}, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
			this.resizerElem.style.display = "none";
		}, HybridRendererBase.prototype.show = function() {
			this.resizerElem.style.display = "block";
		}, HybridRendererBase.prototype.initItems = function() {
			if (this.buildAllItems(), this.camera) this.camera.setup();
			else {
				var e = this.globalData.compSize.w, t = this.globalData.compSize.h, n, r = this.threeDElements.length;
				for (n = 0; n < r; n += 1) {
					var i = this.threeDElements[n].perspectiveElem.style;
					i.webkitPerspective = Math.sqrt(e ** 2 + t ** 2) + "px", i.perspective = i.webkitPerspective;
				}
			}
		}, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
			var t, n = e.length, r = createTag("div");
			for (t = 0; t < n; t += 1) if (e[t].xt) {
				var i = this.createComp(e[t], r, this.globalData.comp, null);
				i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
			}
		};
		function HCompElement(e, t, n) {
			this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 };
		}
		extendPrototype([
			HybridRendererBase,
			ICompElement,
			HBaseElement
		], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
			this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
		}, HCompElement.prototype.addTo3dContainer = function(e, t) {
			for (var n = 0, r; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
			r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e);
		}, HCompElement.prototype.createComp = function(e) {
			return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
		};
		function HybridRenderer(e, t) {
			this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
				className: t && t.className || "",
				imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
				hideOnTransparent: !(t && t.hideOnTransparent === !1),
				filterSize: {
					width: t && t.filterSize && t.filterSize.width || "400%",
					height: t && t.filterSize && t.filterSize.height || "400%",
					x: t && t.filterSize && t.filterSize.x || "-100%",
					y: t && t.filterSize && t.filterSize.y || "-100%"
				},
				runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
			}, this.globalData = {
				_mdf: !1,
				frameNum: -1,
				renderConfig: this.renderConfig
			}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
		}
		extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
			return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
		};
		var CompExpressionInterface = function() {
			return function(e) {
				function t(t) {
					for (var n = 0, r = e.layers.length; n < r;) {
						if (e.layers[n].nm === t || e.layers[n].ind === t) return e.elements[n].layerInterface;
						n += 1;
					}
					return null;
				}
				return Object.defineProperty(t, "_name", { value: e.data.nm }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t;
			};
		}();
		function _typeof$2(e) {
			"@babel/helpers - typeof";
			return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$2(e);
		}
		function seedRandom(e, t) {
			var n = this, r = 256, i = 6, a = 52, o = "random", s = t.pow(r, i), c = t.pow(2, a), l = c * 2, d = r - 1, p;
			function g(n, a, d) {
				var p = [];
				a = a === !0 ? { entropy: !0 } : a || {};
				var g = C(x(a.entropy ? [n, te(e)] : n === null ? ee() : n, 3), p), ne = new _(p), T = function() {
					for (var e = ne.g(i), t = s, n = 0; e < c;) e = (e + n) * r, t *= r, n = ne.g(1);
					for (; e >= l;) e /= 2, t /= 2, n >>>= 1;
					return (e + n) / t;
				};
				return T.int32 = function() {
					return ne.g(4) | 0;
				}, T.quick = function() {
					return ne.g(4) / 4294967296;
				}, T.double = T, C(te(ne.S), e), (a.pass || d || function(e, n, r, i) {
					return i && (i.S && y(i, ne), e.state = function() {
						return y(ne, {});
					}), r ? (t[o] = e, n) : e;
				})(T, g, "global" in a ? a.global : this == t, a.state);
			}
			t["seed" + o] = g;
			function _(e) {
				var t, n = e.length, i = this, a = 0, o = i.i = i.j = 0, s = i.S = [];
				for (n || (e = [n++]); a < r;) s[a] = a++;
				for (a = 0; a < r; a++) s[a] = s[o = d & o + e[a % n] + (t = s[a])], s[o] = t;
				i.g = function(e) {
					for (var t, n = 0, a = i.i, o = i.j, s = i.S; e--;) t = s[a = d & a + 1], n = n * r + s[d & (s[a] = s[o = d & o + t]) + (s[o] = t)];
					return i.i = a, i.j = o, n;
				};
			}
			function y(e, t) {
				return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t;
			}
			function x(e, t) {
				var n = [], r = _typeof$2(e), i;
				if (t && r == "object") for (i in e) try {
					n.push(x(e[i], t - 1));
				} catch {}
				return n.length ? n : r == "string" ? e : e + "\0";
			}
			function C(e, t) {
				for (var n = e + "", r, i = 0; i < n.length;) t[d & i] = d & (r ^= t[d & i] * 19) + n.charCodeAt(i++);
				return te(t);
			}
			function ee() {
				try {
					if (p) return te(p.randomBytes(r));
					var t = new Uint8Array(r);
					return (n.crypto || n.msCrypto).getRandomValues(t), te(t);
				} catch {
					var i = n.navigator, a = i && i.plugins;
					return [
						+/* @__PURE__ */ new Date(),
						n,
						a,
						n.screen,
						te(e)
					];
				}
			}
			function te(e) {
				return String.fromCharCode.apply(0, e);
			}
			C(t.random(), e);
		}
		function initialize$2(e) {
			seedRandom([], e);
		}
		var propTypes = { SHAPE: "shape" };
		function _typeof$1(e) {
			"@babel/helpers - typeof";
			return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof$1(e);
		}
		var ExpressionManager = function() {
			var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
			initialize$2(BMMath);
			function resetFrame() {
				_lottieGlobal = {};
			}
			function $bm_isInstanceOfArray(e) {
				return e.constructor === Array || e.constructor === Float32Array;
			}
			function isNumerable(e, t) {
				return e === "number" || t instanceof Number || e === "boolean" || e === "string";
			}
			function $bm_neg(e) {
				var t = _typeof$1(e);
				if (t === "number" || e instanceof Number || t === "boolean") return -e;
				if ($bm_isInstanceOfArray(e)) {
					var n, r = e.length, i = [];
					for (n = 0; n < r; n += 1) i[n] = -e[n];
					return i;
				}
				return e.propType ? e.v : -e;
			}
			var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
			function sum(e, t) {
				var n = _typeof$1(e), r = _typeof$1(t);
				if (isNumerable(n, e) && isNumerable(r, t) || n === "string" || r === "string") return e + t;
				if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return e = e.slice(0), e[0] += t, e;
				if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e + t[0], t;
				if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
					for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o;) (typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? s[i] = e[i] + t[i] : s[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
					return s;
				}
				return 0;
			}
			var add = sum;
			function sub(e, t) {
				var n = _typeof$1(e), r = _typeof$1(t);
				if (isNumerable(n, e) && isNumerable(r, t)) return n === "string" && (e = parseInt(e, 10)), r === "string" && (t = parseInt(t, 10)), e - t;
				if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return e = e.slice(0), e[0] -= t, e;
				if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e - t[0], t;
				if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
					for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o;) (typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? s[i] = e[i] - t[i] : s[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
					return s;
				}
				return 0;
			}
			function mul(e, t) {
				var n = _typeof$1(e), r = _typeof$1(t), i;
				if (isNumerable(n, e) && isNumerable(r, t)) return e * t;
				var a, o;
				if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) {
					for (o = e.length, i = createTypedArray("float32", o), a = 0; a < o; a += 1) i[a] = e[a] * t;
					return i;
				}
				if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) {
					for (o = t.length, i = createTypedArray("float32", o), a = 0; a < o; a += 1) i[a] = e * t[a];
					return i;
				}
				return 0;
			}
			function div(e, t) {
				var n = _typeof$1(e), r = _typeof$1(t), i;
				if (isNumerable(n, e) && isNumerable(r, t)) return e / t;
				var a, o;
				if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) {
					for (o = e.length, i = createTypedArray("float32", o), a = 0; a < o; a += 1) i[a] = e[a] / t;
					return i;
				}
				if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) {
					for (o = t.length, i = createTypedArray("float32", o), a = 0; a < o; a += 1) i[a] = e / t[a];
					return i;
				}
				return 0;
			}
			function mod(e, t) {
				return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t;
			}
			var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
			function clamp(e, t, n) {
				if (t > n) {
					var r = n;
					n = t, t = r;
				}
				return Math.min(Math.max(e, t), n);
			}
			function radiansToDegrees(e) {
				return e / degToRads;
			}
			var radians_to_degrees = radiansToDegrees;
			function degreesToRadians(e) {
				return e * degToRads;
			}
			var degrees_to_radians = radiansToDegrees, helperLengthArray = [
				0,
				0,
				0,
				0,
				0,
				0
			];
			function length(e, t) {
				if (typeof e == "number" || e instanceof Number) return t ||= 0, Math.abs(e - t);
				t ||= helperLengthArray;
				var n, r = Math.min(e.length, t.length), i = 0;
				for (n = 0; n < r; n += 1) i += Math.pow(t[n] - e[n], 2);
				return Math.sqrt(i);
			}
			function normalize(e) {
				return div(e, length(e));
			}
			function rgbToHsl(e) {
				var t = e[0], n = e[1], r = e[2], i = Math.max(t, n, r), a = Math.min(t, n, r), o, s, c = (i + a) / 2;
				if (i === a) o = 0, s = 0;
				else {
					var l = i - a;
					switch (s = c > .5 ? l / (2 - i - a) : l / (i + a), i) {
						case t:
							o = (n - r) / l + (n < r ? 6 : 0);
							break;
						case n:
							o = (r - t) / l + 2;
							break;
						case r:
							o = (t - n) / l + 4;
							break;
						default: break;
					}
					o /= 6;
				}
				return [
					o,
					s,
					c,
					e[3]
				];
			}
			function hue2rgb(e, t, n) {
				return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
			}
			function hslToRgb(e) {
				var t = e[0], n = e[1], r = e[2], i, a, o;
				if (n === 0) i = r, o = r, a = r;
				else {
					var s = r < .5 ? r * (1 + n) : r + n - r * n, c = 2 * r - s;
					i = hue2rgb(c, s, t + 1 / 3), a = hue2rgb(c, s, t), o = hue2rgb(c, s, t - 1 / 3);
				}
				return [
					i,
					a,
					o,
					e[3]
				];
			}
			function linear(e, t, n, r, i) {
				if ((r === void 0 || i === void 0) && (r = t, i = n, t = 0, n = 1), n < t) {
					var a = n;
					n = t, t = a;
				}
				if (e <= t) return r;
				if (e >= n) return i;
				var o = n === t ? 0 : (e - t) / (n - t);
				if (!r.length) return r + (i - r) * o;
				var s, c = r.length, l = createTypedArray("float32", c);
				for (s = 0; s < c; s += 1) l[s] = r[s] + (i[s] - r[s]) * o;
				return l;
			}
			function random(e, t) {
				if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
					var n, r = t.length;
					e ||= createTypedArray("float32", r);
					var i = createTypedArray("float32", r), a = BMMath.random();
					for (n = 0; n < r; n += 1) i[n] = e[n] + a * (t[n] - e[n]);
					return i;
				}
				e === void 0 && (e = 0);
				var o = BMMath.random();
				return e + o * (t - e);
			}
			function createPath(e, t, n, r) {
				var i, a = e.length, o = shapePool.newElement();
				o.setPathData(!!r, a);
				var s = [0, 0], c, l;
				for (i = 0; i < a; i += 1) c = t && t[i] ? t[i] : s, l = n && n[i] ? n[i] : s, o.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], c[0] + e[i][0], c[1] + e[i][1], i, !0);
				return o;
			}
			function initiateExpression(elem, data, property) {
				function noOp(e) {
					return e;
				}
				if (!elem.globalData.renderConfig.runExpressions) return noOp;
				var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
				thisProperty._name = elem.data.nm, thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
					return thisProperty.v;
				} }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
				var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = function(e, t) {
					var n, r, i = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", i);
					e = 5;
					var o = Math.floor(time * e);
					for (n = 0, r = 0; n < o;) {
						for (r = 0; r < i; r += 1) a[r] += -t + t * 2 * BMMath.random();
						n += 1;
					}
					var s = time * e, c = s - Math.floor(s), l = createTypedArray("float32", i);
					if (i > 1) {
						for (r = 0; r < i; r += 1) l[r] = this.pv[r] + a[r] + (-t + t * 2 * BMMath.random()) * c;
						return l;
					}
					return this.pv + a[0] + (-t + t * 2 * BMMath.random()) * c;
				}.bind(this);
				thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
				function loopInDuration(e, t) {
					return loopIn(e, t, !0);
				}
				function loopOutDuration(e, t) {
					return loopOut(e, t, !0);
				}
				this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
				var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
				function lookAt(e, t) {
					var n = [
						t[0] - e[0],
						t[1] - e[1],
						t[2] - e[2]
					], r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
					return [
						-Math.atan2(n[1], n[2]) / degToRads,
						r,
						0
					];
				}
				function easeOut(e, t, n, r, i) {
					return applyEase(easeOutBez, e, t, n, r, i);
				}
				function easeIn(e, t, n, r, i) {
					return applyEase(easeInBez, e, t, n, r, i);
				}
				function ease(e, t, n, r, i) {
					return applyEase(easeInOutBez, e, t, n, r, i);
				}
				function applyEase(e, t, n, r, i, a) {
					i === void 0 ? (i = n, a = r) : t = (t - n) / (r - n), t > 1 ? t = 1 : t < 0 && (t = 0);
					var o = e(t);
					if ($bm_isInstanceOfArray(i)) {
						var s, c = i.length, l = createTypedArray("float32", c);
						for (s = 0; s < c; s += 1) l[s] = (a[s] - i[s]) * o + i[s];
						return l;
					}
					return (a - i) * o + i;
				}
				function nearestKey(e) {
					var t, n = data.k.length, r, i;
					if (!data.k.length || typeof data.k[0] == "number") r = 0, i = 0;
					else if (r = -1, e *= elem.comp.globalData.frameRate, e < data.k[0].t) r = 1, i = data.k[0].t;
					else {
						for (t = 0; t < n - 1; t += 1) if (e === data.k[t].t) {
							r = t + 1, i = data.k[t].t;
							break;
						} else if (e > data.k[t].t && e < data.k[t + 1].t) {
							e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, i = data.k[t + 1].t) : (r = t + 1, i = data.k[t].t);
							break;
						}
						r === -1 && (r = t + 1, i = data.k[t].t);
					}
					var a = {};
					return a.index = r, a.time = i / elem.comp.globalData.frameRate, a;
				}
				function key(e) {
					var t, n, r;
					if (!data.k.length || typeof data.k[0] == "number") throw Error("The property has no keyframe at index " + e);
					--e, t = {
						time: data.k[e].t / elem.comp.globalData.frameRate,
						value: []
					};
					var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
					for (r = i.length, n = 0; n < r; n += 1) t[n] = i[n], t.value[n] = i[n];
					return t;
				}
				function framesToTime(e, t) {
					return t ||= elem.comp.globalData.frameRate, e / t;
				}
				function timeToFrames(e, t) {
					return !e && e !== 0 && (e = time), t ||= elem.comp.globalData.frameRate, e * t;
				}
				function seedRandom(e) {
					BMMath.seedrandom(randSeed + e);
				}
				function sourceRectAtTime() {
					return elem.sourceRectAtTime();
				}
				function substring(e, t) {
					return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : "";
				}
				function substr(e, t) {
					return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : "";
				}
				function posterizeTime(e) {
					time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time);
				}
				var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
				function executeExpression(e) {
					return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect ||= thisLayer(4), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
				}
				return executeExpression.__preventDeadCodeRemoval = [
					$bm_transform,
					anchorPoint,
					time,
					velocity,
					inPoint,
					outPoint,
					width,
					height,
					name,
					loop_in,
					loop_out,
					smooth,
					toComp,
					fromCompToSurface,
					toWorld,
					fromWorld,
					mask,
					position,
					rotation,
					scale,
					thisComp,
					numKeys,
					active,
					wiggle,
					loopInDuration,
					loopOutDuration,
					comp,
					lookAt,
					easeOut,
					easeIn,
					ease,
					nearestKey,
					key,
					text,
					textIndex,
					textTotal,
					selectorValue,
					framesToTime,
					timeToFrames,
					sourceRectAtTime,
					substring,
					substr,
					posterizeTime,
					index,
					globalData
				], executeExpression;
			}
			return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [
				window,
				document,
				XMLHttpRequest,
				fetch,
				frames,
				$bm_neg,
				add,
				$bm_sum,
				$bm_sub,
				$bm_mul,
				$bm_div,
				$bm_mod,
				clamp,
				radians_to_degrees,
				degreesToRadians,
				degrees_to_radians,
				normalize,
				rgbToHsl,
				hslToRgb,
				linear,
				random,
				createPath,
				_lottieGlobal
			], ob.resetFrame = resetFrame, ob;
		}(), Expressions = function() {
			var e = {};
			e.initExpressions = t, e.resetFrame = ExpressionManager.resetFrame;
			function t(e) {
				var t = 0, n = [];
				function r() {
					t += 1;
				}
				function i() {
					--t, t === 0 && o();
				}
				function a(e) {
					n.indexOf(e) === -1 && n.push(e);
				}
				function o() {
					var e, t = n.length;
					for (e = 0; e < t; e += 1) n[e].release();
					n.length = 0;
				}
				e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = r, e.renderer.globalData.popExpression = i, e.renderer.globalData.registerExpressionProperty = a;
			}
			return e;
		}(), MaskManagerInterface = function() {
			function e(e, t) {
				this._mask = e, this._data = t;
			}
			return Object.defineProperty(e.prototype, "maskPath", { get: function() {
				return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
			} }), Object.defineProperty(e.prototype, "maskOpacity", { get: function() {
				return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
			} }), function(t) {
				var n = createSizedArray(t.viewData.length), r, i = t.viewData.length;
				for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
				return function(e) {
					for (r = 0; r < i;) {
						if (t.masksProperties[r].nm === e) return n[r];
						r += 1;
					}
					return null;
				};
			};
		}(), ExpressionPropertyInterface = function() {
			var e = {
				pv: 0,
				v: 0,
				mult: 1
			}, t = {
				pv: [
					0,
					0,
					0
				],
				v: [
					0,
					0,
					0
				],
				mult: 1
			};
			function n(e, t, n) {
				Object.defineProperty(e, "velocity", { get: function() {
					return t.getVelocityAtTime(t.comp.currentFrame);
				} }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(r) {
					if (!e.numKeys) return 0;
					var i = "";
					i = "s" in t.keyframes[r - 1] ? t.keyframes[r - 1].s : "e" in t.keyframes[r - 2] ? t.keyframes[r - 2].e : t.keyframes[r - 2].s;
					var a = n === "unidimensional" ? new Number(i) : Object.assign({}, i);
					return a.time = t.keyframes[r - 1].t / t.elem.comp.globalData.frameRate, a.value = n === "unidimensional" ? i[0] : i, a;
				}, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup;
			}
			function r(t) {
				(!t || !("pv" in t)) && (t = e);
				var r = 1 / t.mult, i = t.pv * r, a = new Number(i);
				return a.value = i, n(a, t, "unidimensional"), function() {
					return t.k && t.getValue(), i = t.v * r, a.value !== i && (a = new Number(i), a.value = i, a[0] = i, n(a, t, "unidimensional")), a;
				};
			}
			function i(e) {
				(!e || !("pv" in e)) && (e = t);
				var r = 1 / e.mult, i = e.data && e.data.l || e.pv.length, a = createTypedArray("float32", i), o = createTypedArray("float32", i);
				return a.value = o, n(a, e, "multidimensional"), function() {
					e.k && e.getValue();
					for (var t = 0; t < i; t += 1) o[t] = e.v[t] * r, a[t] = o[t];
					return a;
				};
			}
			function a() {
				return e;
			}
			return function(e) {
				return e ? e.propType === "unidimensional" ? r(e) : i(e) : a;
			};
		}(), TransformExpressionInterface = function() {
			return function(e) {
				function t(e) {
					switch (e) {
						case "scale":
						case "Scale":
						case "ADBE Scale":
						case 6: return t.scale;
						case "rotation":
						case "Rotation":
						case "ADBE Rotation":
						case "ADBE Rotate Z":
						case 10: return t.rotation;
						case "ADBE Rotate X": return t.xRotation;
						case "ADBE Rotate Y": return t.yRotation;
						case "position":
						case "Position":
						case "ADBE Position":
						case 2: return t.position;
						case "ADBE Position_0": return t.xPosition;
						case "ADBE Position_1": return t.yPosition;
						case "ADBE Position_2": return t.zPosition;
						case "anchorPoint":
						case "AnchorPoint":
						case "Anchor Point":
						case "ADBE AnchorPoint":
						case 1: return t.anchorPoint;
						case "opacity":
						case "Opacity":
						case 11: return t.opacity;
						default: return null;
					}
				}
				Object.defineProperty(t, "rotation", { get: ExpressionPropertyInterface(e.r || e.rz) }), Object.defineProperty(t, "zRotation", { get: ExpressionPropertyInterface(e.rz || e.r) }), Object.defineProperty(t, "xRotation", { get: ExpressionPropertyInterface(e.rx) }), Object.defineProperty(t, "yRotation", { get: ExpressionPropertyInterface(e.ry) }), Object.defineProperty(t, "scale", { get: ExpressionPropertyInterface(e.s) });
				var n, r, i, a;
				return e.p ? a = ExpressionPropertyInterface(e.p) : (n = ExpressionPropertyInterface(e.px), r = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", { get: function() {
					return e.p ? a() : [
						n(),
						r(),
						i ? i() : 0
					];
				} }), Object.defineProperty(t, "xPosition", { get: ExpressionPropertyInterface(e.px) }), Object.defineProperty(t, "yPosition", { get: ExpressionPropertyInterface(e.py) }), Object.defineProperty(t, "zPosition", { get: ExpressionPropertyInterface(e.pz) }), Object.defineProperty(t, "anchorPoint", { get: ExpressionPropertyInterface(e.a) }), Object.defineProperty(t, "opacity", { get: ExpressionPropertyInterface(e.o) }), Object.defineProperty(t, "skew", { get: ExpressionPropertyInterface(e.sk) }), Object.defineProperty(t, "skewAxis", { get: ExpressionPropertyInterface(e.sa) }), Object.defineProperty(t, "orientation", { get: ExpressionPropertyInterface(e.or) }), t;
			};
		}(), LayerExpressionInterface = function() {
			function e(e) {
				var t = new Matrix();
				return e === void 0 ? this._elem.finalTransform.mProp.applyToMatrix(t) : this._elem.finalTransform.mProp.getValueAtTime(e).clone(t), t;
			}
			function t(e, t) {
				var n = this.getMatrix(t);
				return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.applyPoint(n, e);
			}
			function n(e, t) {
				var n = this.getMatrix(t);
				return this.applyPoint(n, e);
			}
			function r(e, t) {
				var n = this.getMatrix(t);
				return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.invertPoint(n, e);
			}
			function i(e, t) {
				var n = this.getMatrix(t);
				return this.invertPoint(n, e);
			}
			function a(e, t) {
				if (this._elem.hierarchy && this._elem.hierarchy.length) {
					var n, r = this._elem.hierarchy.length;
					for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
				}
				return e.applyToPointArray(t[0], t[1], t[2] || 0);
			}
			function o(e, t) {
				if (this._elem.hierarchy && this._elem.hierarchy.length) {
					var n, r = this._elem.hierarchy.length;
					for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
				}
				return e.inversePoint(t);
			}
			function s(e) {
				var t = new Matrix();
				if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
					var n, r = this._elem.hierarchy.length;
					for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t);
					return t.inversePoint(e);
				}
				return t.inversePoint(e);
			}
			function c() {
				return [
					1,
					1,
					1,
					1
				];
			}
			return function(l) {
				var d;
				function p(e) {
					_.mask = new MaskManagerInterface(e, l);
				}
				function g(e) {
					_.effect = e;
				}
				function _(e) {
					switch (e) {
						case "ADBE Root Vectors Group":
						case "Contents":
						case 2: return _.shapeInterface;
						case 1:
						case 6:
						case "Transform":
						case "transform":
						case "ADBE Transform Group": return d;
						case 4:
						case "ADBE Effect Parade":
						case "effects":
						case "Effects": return _.effect;
						case "ADBE Text Properties": return _.textInterface;
						default: return null;
					}
				}
				_.getMatrix = e, _.invertPoint = o, _.applyPoint = a, _.toWorld = n, _.toWorldVec = t, _.fromWorld = i, _.fromWorldVec = r, _.toComp = n, _.fromComp = s, _.sampleImage = c, _.sourceRectAtTime = l.sourceRectAtTime.bind(l), _._elem = l, d = TransformExpressionInterface(l.finalTransform.mProp);
				var y = getDescriptor(d, "anchorPoint");
				return Object.defineProperties(_, {
					hasParent: { get: function() {
						return l.hierarchy.length;
					} },
					parent: { get: function() {
						return l.hierarchy[0].layerInterface;
					} },
					rotation: getDescriptor(d, "rotation"),
					scale: getDescriptor(d, "scale"),
					position: getDescriptor(d, "position"),
					opacity: getDescriptor(d, "opacity"),
					anchorPoint: y,
					anchor_point: y,
					transform: { get: function() {
						return d;
					} },
					active: { get: function() {
						return l.isInRange;
					} }
				}), _.startTime = l.data.st, _.index = l.data.ind, _.source = l.data.refId, _.height = l.data.ty === 0 ? l.data.h : 100, _.width = l.data.ty === 0 ? l.data.w : 100, _.inPoint = l.data.ip / l.comp.globalData.frameRate, _.outPoint = l.data.op / l.comp.globalData.frameRate, _._name = l.data.nm, _.registerMaskInterface = p, _.registerEffectsInterface = g, _;
			};
		}(), propertyGroupFactory = function() {
			return function(e, t) {
				return function(n) {
					return n = n === void 0 ? 1 : n, n <= 0 ? e : t(n - 1);
				};
			};
		}(), PropertyInterface = function() {
			return function(e, t) {
				var n = { _name: e };
				function r(e) {
					return e = e === void 0 ? 1 : e, e <= 0 ? n : t(e - 1);
				}
				return r;
			};
		}(), EffectsExpressionInterface = function() {
			var e = { createEffectsInterface: t };
			function t(e, t) {
				if (e.effectsManager) {
					var r = [], i = e.data.ef, a, o = e.effectsManager.effectElements.length;
					for (a = 0; a < o; a += 1) r.push(n(i[a], e.effectsManager.effectElements[a], t, e));
					var s = e.data.ef || [], c = function(e) {
						for (a = 0, o = s.length; a < o;) {
							if (e === s[a].nm || e === s[a].mn || e === s[a].ix) return r[a];
							a += 1;
						}
						return null;
					};
					return Object.defineProperty(c, "numProperties", { get: function() {
						return s.length;
					} }), c;
				}
				return null;
			}
			function n(e, t, i, a) {
				function o(t) {
					for (var n = e.ef, r = 0, i = n.length; r < i;) {
						if (t === n[r].nm || t === n[r].mn || t === n[r].ix) return n[r].ty === 5 ? c[r] : c[r]();
						r += 1;
					}
					throw Error();
				}
				var s = propertyGroupFactory(o, i), c = [], l, d = e.ef.length;
				for (l = 0; l < d; l += 1) e.ef[l].ty === 5 ? c.push(n(e.ef[l], t.effectElements[l], t.effectElements[l].propertyGroup, a)) : c.push(r(t.effectElements[l], e.ef[l].ty, a, s));
				return e.mn === "ADBE Color Control" && Object.defineProperty(o, "color", { get: function() {
					return c[0]();
				} }), Object.defineProperties(o, {
					numProperties: { get: function() {
						return e.np;
					} },
					_name: { value: e.nm },
					propertyGroup: { value: s }
				}), o.enabled = e.en !== 0, o.active = o.enabled, o;
			}
			function r(e, t, n, r) {
				var i = ExpressionPropertyInterface(e.p);
				function a() {
					return t === 10 ? n.comp.compInterface(e.p.v) : i();
				}
				return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", r)), a;
			}
			return e;
		}(), ShapePathInterface = function() {
			return function(e, t, n) {
				var r = t.sh;
				function i(e) {
					return e === "Shape" || e === "shape" || e === "Path" || e === "path" || e === "ADBE Vector Shape" || e === 2 ? i.path : null;
				}
				var a = propertyGroupFactory(i, n);
				return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
					path: { get: function() {
						return r.k && r.getValue(), r;
					} },
					shape: { get: function() {
						return r.k && r.getValue(), r;
					} },
					_name: { value: e.nm },
					ix: { value: e.ix },
					propertyIndex: { value: e.ix },
					mn: { value: e.mn },
					propertyGroup: { value: n }
				}), i;
			};
		}(), ShapeExpressionInterface = function() {
			function e(e, t, c) {
				var y = [], x, C = e ? e.length : 0;
				for (x = 0; x < C; x += 1) e[x].ty === "gr" ? y.push(n(e[x], t[x], c)) : e[x].ty === "fl" ? y.push(r(e[x], t[x], c)) : e[x].ty === "st" ? y.push(o(e[x], t[x], c)) : e[x].ty === "tm" ? y.push(s(e[x], t[x], c)) : e[x].ty === "tr" || (e[x].ty === "el" ? y.push(l(e[x], t[x], c)) : e[x].ty === "sr" ? y.push(d(e[x], t[x], c)) : e[x].ty === "sh" ? y.push(ShapePathInterface(e[x], t[x], c)) : e[x].ty === "rc" ? y.push(p(e[x], t[x], c)) : e[x].ty === "rd" ? y.push(g(e[x], t[x], c)) : e[x].ty === "rp" ? y.push(_(e[x], t[x], c)) : e[x].ty === "gf" ? y.push(i(e[x], t[x], c)) : y.push(a(e[x], t[x], c)));
				return y;
			}
			function t(t, n, r) {
				var i, a = function(e) {
					for (var t = 0, n = i.length; t < n;) {
						if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
						t += 1;
					}
					return typeof e == "number" ? i[e - 1] : null;
				};
				return a.propertyGroup = propertyGroupFactory(a, r), i = e(t.it, n.it, a.propertyGroup), a.numProperties = i.length, a.transform = c(t.it[t.it.length - 1], n.it[n.it.length - 1], a.propertyGroup), a.propertyIndex = t.cix, a._name = t.nm, a;
			}
			function n(e, n, r) {
				var i = function(e) {
					switch (e) {
						case "ADBE Vectors Group":
						case "Contents":
						case 2: return i.content;
						default: return i.transform;
					}
				};
				i.propertyGroup = propertyGroupFactory(i, r);
				var a = t(e, n, i.propertyGroup), o = c(e.it[e.it.length - 1], n.it[n.it.length - 1], i.propertyGroup);
				return i.content = a, i.transform = o, Object.defineProperty(i, "_name", { get: function() {
					return e.nm;
				} }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i;
			}
			function r(e, t, n) {
				function r(e) {
					return e === "Color" || e === "color" ? r.color : e === "Opacity" || e === "opacity" ? r.opacity : null;
				}
				return Object.defineProperties(r, {
					color: { get: ExpressionPropertyInterface(t.c) },
					opacity: { get: ExpressionPropertyInterface(t.o) },
					_name: { value: e.nm },
					mn: { value: e.mn }
				}), t.c.setGroupProperty(PropertyInterface("Color", n)), t.o.setGroupProperty(PropertyInterface("Opacity", n)), r;
			}
			function i(e, t, n) {
				function r(e) {
					return e === "Start Point" || e === "start point" ? r.startPoint : e === "End Point" || e === "end point" ? r.endPoint : e === "Opacity" || e === "opacity" ? r.opacity : null;
				}
				return Object.defineProperties(r, {
					startPoint: { get: ExpressionPropertyInterface(t.s) },
					endPoint: { get: ExpressionPropertyInterface(t.e) },
					opacity: { get: ExpressionPropertyInterface(t.o) },
					type: { get: function() {
						return "a";
					} },
					_name: { value: e.nm },
					mn: { value: e.mn }
				}), t.s.setGroupProperty(PropertyInterface("Start Point", n)), t.e.setGroupProperty(PropertyInterface("End Point", n)), t.o.setGroupProperty(PropertyInterface("Opacity", n)), r;
			}
			function a() {
				function e() {
					return null;
				}
				return e;
			}
			function o(e, t, n) {
				var r = propertyGroupFactory(l, n), i = propertyGroupFactory(c, r);
				function a(n) {
					Object.defineProperty(c, e.d[n].nm, { get: ExpressionPropertyInterface(t.d.dataProps[n].p) });
				}
				var o, s = e.d ? e.d.length : 0, c = {};
				for (o = 0; o < s; o += 1) a(o), t.d.dataProps[o].p.setGroupProperty(i);
				function l(e) {
					return e === "Color" || e === "color" ? l.color : e === "Opacity" || e === "opacity" ? l.opacity : e === "Stroke Width" || e === "stroke width" ? l.strokeWidth : null;
				}
				return Object.defineProperties(l, {
					color: { get: ExpressionPropertyInterface(t.c) },
					opacity: { get: ExpressionPropertyInterface(t.o) },
					strokeWidth: { get: ExpressionPropertyInterface(t.w) },
					dash: { get: function() {
						return c;
					} },
					_name: { value: e.nm },
					mn: { value: e.mn }
				}), t.c.setGroupProperty(PropertyInterface("Color", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), t.w.setGroupProperty(PropertyInterface("Stroke Width", r)), l;
			}
			function s(e, t, n) {
				function r(t) {
					return t === e.e.ix || t === "End" || t === "end" ? r.end : t === e.s.ix ? r.start : t === e.o.ix ? r.offset : null;
				}
				var i = propertyGroupFactory(r, n);
				return r.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", i)), t.e.setGroupProperty(PropertyInterface("End", i)), t.o.setGroupProperty(PropertyInterface("Offset", i)), r.propertyIndex = e.ix, r.propertyGroup = n, Object.defineProperties(r, {
					start: { get: ExpressionPropertyInterface(t.s) },
					end: { get: ExpressionPropertyInterface(t.e) },
					offset: { get: ExpressionPropertyInterface(t.o) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			function c(e, t, n) {
				function r(t) {
					return e.a.ix === t || t === "Anchor Point" ? r.anchorPoint : e.o.ix === t || t === "Opacity" ? r.opacity : e.p.ix === t || t === "Position" ? r.position : e.r.ix === t || t === "Rotation" || t === "ADBE Vector Rotation" ? r.rotation : e.s.ix === t || t === "Scale" ? r.scale : e.sk && e.sk.ix === t || t === "Skew" ? r.skew : e.sa && e.sa.ix === t || t === "Skew Axis" ? r.skewAxis : null;
				}
				var i = propertyGroupFactory(r, n);
				return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(r, {
					opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) },
					position: { get: ExpressionPropertyInterface(t.transform.mProps.p) },
					anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) },
					scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) },
					rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) },
					skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) },
					skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) },
					_name: { value: e.nm }
				}), r.ty = "tr", r.mn = e.mn, r.propertyGroup = n, r;
			}
			function l(e, t, n) {
				function r(t) {
					return e.p.ix === t ? r.position : e.s.ix === t ? r.size : null;
				}
				var i = propertyGroupFactory(r, n);
				r.propertyIndex = e.ix;
				var a = t.sh.ty === "tm" ? t.sh.prop : t.sh;
				return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(r, {
					size: { get: ExpressionPropertyInterface(a.s) },
					position: { get: ExpressionPropertyInterface(a.p) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			function d(e, t, n) {
				function r(t) {
					return e.p.ix === t ? r.position : e.r.ix === t ? r.rotation : e.pt.ix === t ? r.points : e.or.ix === t || t === "ADBE Vector Star Outer Radius" ? r.outerRadius : e.os.ix === t ? r.outerRoundness : e.ir && (e.ir.ix === t || t === "ADBE Vector Star Inner Radius") ? r.innerRadius : e.is && e.is.ix === t ? r.innerRoundness : null;
				}
				var i = propertyGroupFactory(r, n), a = t.sh.ty === "tm" ? t.sh.prop : t.sh;
				return r.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(r, {
					position: { get: ExpressionPropertyInterface(a.p) },
					rotation: { get: ExpressionPropertyInterface(a.r) },
					points: { get: ExpressionPropertyInterface(a.pt) },
					outerRadius: { get: ExpressionPropertyInterface(a.or) },
					outerRoundness: { get: ExpressionPropertyInterface(a.os) },
					innerRadius: { get: ExpressionPropertyInterface(a.ir) },
					innerRoundness: { get: ExpressionPropertyInterface(a.is) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			function p(e, t, n) {
				function r(t) {
					return e.p.ix === t ? r.position : e.r.ix === t ? r.roundness : e.s.ix === t || t === "Size" || t === "ADBE Vector Rect Size" ? r.size : null;
				}
				var i = propertyGroupFactory(r, n), a = t.sh.ty === "tm" ? t.sh.prop : t.sh;
				return r.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(r, {
					position: { get: ExpressionPropertyInterface(a.p) },
					roundness: { get: ExpressionPropertyInterface(a.r) },
					size: { get: ExpressionPropertyInterface(a.s) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			function g(e, t, n) {
				function r(t) {
					return e.r.ix === t || t === "Round Corners 1" ? r.radius : null;
				}
				var i = propertyGroupFactory(r, n), a = t;
				return r.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(r, {
					radius: { get: ExpressionPropertyInterface(a.rd) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			function _(e, t, n) {
				function r(t) {
					return e.c.ix === t || t === "Copies" ? r.copies : e.o.ix === t || t === "Offset" ? r.offset : null;
				}
				var i = propertyGroupFactory(r, n), a = t;
				return r.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(r, {
					copies: { get: ExpressionPropertyInterface(a.c) },
					offset: { get: ExpressionPropertyInterface(a.o) },
					_name: { value: e.nm }
				}), r.mn = e.mn, r;
			}
			return function(t, n, r) {
				var i;
				function a(e) {
					if (typeof e == "number") return e = e === void 0 ? 1 : e, e === 0 ? r : i[e - 1];
					for (var t = 0, n = i.length; t < n;) {
						if (i[t]._name === e) return i[t];
						t += 1;
					}
					return null;
				}
				function o() {
					return r;
				}
				return a.propertyGroup = propertyGroupFactory(a, o), i = e(t, n, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a;
			};
		}(), TextExpressionInterface = function() {
			return function(e) {
				var t;
				function n(e) {
					switch (e) {
						case "ADBE Text Document": return n.sourceText;
						default: return null;
					}
				}
				return Object.defineProperty(n, "sourceText", { get: function() {
					e.textProperty.getValue();
					var n = e.textProperty.currentData.t;
					return (!t || n !== t.value) && (t = new String(n), t.value = n || new String(n), Object.defineProperty(t, "style", { get: function() {
						return { fillColor: e.textProperty.currentData.fc };
					} })), t;
				} }), n;
			};
		}();
		function _typeof(e) {
			"@babel/helpers - typeof";
			return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
				return typeof e;
			} : function(e) {
				return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			}, _typeof(e);
		}
		var FootageInterface = function() {
			var e = function(e) {
				var t = "", n = e.getFootageData();
				function r() {
					return t = "", n = e.getFootageData(), i;
				}
				function i(e) {
					if (n[e]) return t = e, n = n[e], _typeof(n) === "object" ? i : n;
					var r = e.indexOf(t);
					if (r !== -1) {
						var a = parseInt(e.substr(r + t.length), 10);
						return n = n[a], _typeof(n) === "object" ? i : n;
					}
					return "";
				}
				return r;
			}, t = function(t) {
				function n(e) {
					return e === "Outline" ? n.outlineInterface() : null;
				}
				return n._name = "Outline", n.outlineInterface = e(t), n;
			};
			return function(e) {
				function n(e) {
					return e === "Data" ? n.dataInterface : null;
				}
				return n._name = "Data", n.dataInterface = t(e), n;
			};
		}(), interfaces = {
			layer: LayerExpressionInterface,
			effects: EffectsExpressionInterface,
			comp: CompExpressionInterface,
			shape: ShapeExpressionInterface,
			text: TextExpressionInterface,
			footage: FootageInterface
		};
		function getInterface(e) {
			return interfaces[e] || null;
		}
		var expressionHelpers = function() {
			function e(e, t, n) {
				t.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(e, t, n).bind(n)));
			}
			function t(e) {
				return e *= this.elem.globalData.frameRate, e -= this.offsetTime, e !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value;
			}
			function n(e) {
				var t = -.01, n = this.getValueAtTime(e), r = this.getValueAtTime(e + t), i = 0;
				if (n.length) {
					var a;
					for (a = 0; a < n.length; a += 1) i += (r[a] - n[a]) ** 2;
					i = Math.sqrt(i) * 100;
				} else i = 0;
				return i;
			}
			function r(e) {
				if (this.vel !== void 0) return this.vel;
				var t = -.001, n = this.getValueAtTime(e), r = this.getValueAtTime(e + t), i;
				if (n.length) {
					i = createTypedArray("float32", n.length);
					var a;
					for (a = 0; a < n.length; a += 1) i[a] = (r[a] - n[a]) / t;
				} else i = (r - n) / t;
				return i;
			}
			function i() {
				return this.pv;
			}
			function a(e) {
				this.propertyGroup = e;
			}
			return {
				searchExpressions: e,
				getSpeedAtTime: n,
				getVelocityAtTime: r,
				getValueAtTime: t,
				getStaticValueAtTime: i,
				setGroupProperty: a
			};
		}();
		function addPropertyDecorator() {
			function e(e, t, n) {
				if (!this.k || !this.keyframes) return this.pv;
				e = e ? e.toLowerCase() : "";
				var r = this.comp.renderedFrame, i = this.keyframes, a = i[i.length - 1].t;
				if (r <= a) return this.pv;
				var o, s;
				n ? (o = t ? Math.abs(a - this.elem.comp.globalData.frameRate * t) : Math.max(0, a - this.elem.data.ip), s = a - o) : ((!t || t > i.length - 1) && (t = i.length - 1), s = i[i.length - 1 - t].t, o = a - s);
				var c, l, d;
				if (e === "pingpong") {
					if (Math.floor((r - s) / o) % 2 != 0) return this.getValueAtTime((o - (r - s) % o + s) / this.comp.globalData.frameRate, 0);
				} else if (e === "offset") {
					var p = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), g = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), _ = this.getValueAtTime(((r - s) % o + s) / this.comp.globalData.frameRate, 0), y = Math.floor((r - s) / o);
					if (this.pv.length) {
						for (d = Array(p.length), l = d.length, c = 0; c < l; c += 1) d[c] = (g[c] - p[c]) * y + _[c];
						return d;
					}
					return (g - p) * y + _;
				} else if (e === "continue") {
					var x = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), C = this.getValueAtTime((a - .001) / this.comp.globalData.frameRate, 0);
					if (this.pv.length) {
						for (d = Array(x.length), l = d.length, c = 0; c < l; c += 1) d[c] = x[c] + (x[c] - C[c]) * ((r - a) / this.comp.globalData.frameRate) / 5e-4;
						return d;
					}
					return x + (x - C) * ((r - a) / .001);
				}
				return this.getValueAtTime(((r - s) % o + s) / this.comp.globalData.frameRate, 0);
			}
			function t(e, t, n) {
				if (!this.k) return this.pv;
				e = e ? e.toLowerCase() : "";
				var r = this.comp.renderedFrame, i = this.keyframes, a = i[0].t;
				if (r >= a) return this.pv;
				var o, s;
				n ? (o = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - a), s = a + o) : ((!t || t > i.length - 1) && (t = i.length - 1), s = i[t].t, o = s - a);
				var c, l, d;
				if (e === "pingpong") {
					if (Math.floor((a - r) / o) % 2 == 0) return this.getValueAtTime(((a - r) % o + a) / this.comp.globalData.frameRate, 0);
				} else if (e === "offset") {
					var p = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), g = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), _ = this.getValueAtTime((o - (a - r) % o + a) / this.comp.globalData.frameRate, 0), y = Math.floor((a - r) / o) + 1;
					if (this.pv.length) {
						for (d = Array(p.length), l = d.length, c = 0; c < l; c += 1) d[c] = _[c] - (g[c] - p[c]) * y;
						return d;
					}
					return _ - (g - p) * y;
				} else if (e === "continue") {
					var x = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), C = this.getValueAtTime((a + .001) / this.comp.globalData.frameRate, 0);
					if (this.pv.length) {
						for (d = Array(x.length), l = d.length, c = 0; c < l; c += 1) d[c] = x[c] + (x[c] - C[c]) * (a - r) / .001;
						return d;
					}
					return x + (x - C) * (a - r) / .001;
				}
				return this.getValueAtTime((o - ((a - r) % o + a)) / this.comp.globalData.frameRate, 0);
			}
			function n(e, t) {
				if (!this.k || (e = (e || .4) * .5, t = Math.floor(t || 5), t <= 1)) return this.pv;
				for (var n = this.comp.renderedFrame / this.comp.globalData.frameRate, r = n - e, i = n + e, a = t > 1 ? (i - r) / (t - 1) : 1, o = 0, s = 0, c = this.pv.length ? createTypedArray("float32", this.pv.length) : 0, l; o < t;) {
					if (l = this.getValueAtTime(r + o * a), this.pv.length) for (s = 0; s < this.pv.length; s += 1) c[s] += l[s];
					else c += l;
					o += 1;
				}
				if (this.pv.length) for (s = 0; s < this.pv.length; s += 1) c[s] /= t;
				else c /= t;
				return c;
			}
			function r(e) {
				this._transformCachingAtTime ||= { v: new Matrix() };
				var t = this._transformCachingAtTime.v;
				if (t.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
					var n = this.a.getValueAtTime(e);
					t.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult);
				}
				if (this.appliedTransformations < 2) {
					var r = this.s.getValueAtTime(e);
					t.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult);
				}
				if (this.sk && this.appliedTransformations < 3) {
					var i = this.sk.getValueAtTime(e), a = this.sa.getValueAtTime(e);
					t.skewFromAxis(-i * this.sk.mult, a * this.sa.mult);
				}
				if (this.r && this.appliedTransformations < 4) {
					var o = this.r.getValueAtTime(e);
					t.rotate(-o * this.r.mult);
				} else if (!this.r && this.appliedTransformations < 4) {
					var s = this.rz.getValueAtTime(e), c = this.ry.getValueAtTime(e), l = this.rx.getValueAtTime(e), d = this.or.getValueAtTime(e);
					t.rotateZ(-s * this.rz.mult).rotateY(c * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-d[2] * this.or.mult).rotateY(d[1] * this.or.mult).rotateX(d[0] * this.or.mult);
				}
				if (this.data.p && this.data.p.s) {
					var p = this.px.getValueAtTime(e), g = this.py.getValueAtTime(e);
					if (this.data.p.z) {
						var _ = this.pz.getValueAtTime(e);
						t.translate(p * this.px.mult, g * this.py.mult, -_ * this.pz.mult);
					} else t.translate(p * this.px.mult, g * this.py.mult, 0);
				} else {
					var y = this.p.getValueAtTime(e);
					t.translate(y[0] * this.p.mult, y[1] * this.p.mult, -y[2] * this.p.mult);
				}
				return t;
			}
			function i() {
				return this.v.clone(new Matrix());
			}
			var a = TransformPropertyFactory.getTransformProperty;
			TransformPropertyFactory.getTransformProperty = function(e, t, n) {
				var o = a(e, t, n);
				return o.dynamicProperties.length ? o.getValueAtTime = r.bind(o) : o.getValueAtTime = i.bind(o), o.setGroupProperty = expressionHelpers.setGroupProperty, o;
			};
			var o = PropertyFactory.getProp;
			PropertyFactory.getProp = function(r, i, a, s, c) {
				var l = o(r, i, a, s, c);
				l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = e, l.loopIn = t, l.smooth = n, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = i.a === 1 ? i.k.length : 0, l.propertyIndex = i.ix;
				var d = 0;
				return a !== 0 && (d = createTypedArray("float32", i.a === 1 ? i.k[0].s.length : i.k.length)), l._cachingAtTime = {
					lastFrame: initialDefaultFrame,
					lastIndex: 0,
					value: d
				}, expressionHelpers.searchExpressions(r, i, l), l.k && c.addDynamicProperty(l), l;
			};
			function s(e) {
				return this._cachingAtTime ||= {
					shapeValue: shapePool.clone(this.pv),
					lastIndex: 0,
					lastTime: initialDefaultFrame
				}, e *= this.elem.globalData.frameRate, e -= this.offsetTime, e !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
			}
			var c = ShapePropertyFactory.getConstructorFunction(), l = ShapePropertyFactory.getKeyframedConstructorFunction();
			function d() {}
			d.prototype = {
				vertices: function(e, t) {
					this.k && this.getValue();
					var n = this.v;
					t !== void 0 && (n = this.getValueAtTime(t, 0));
					var r, i = n._length, a = n[e], o = n.v, s = createSizedArray(i);
					for (r = 0; r < i; r += 1) e === "i" || e === "o" ? s[r] = [a[r][0] - o[r][0], a[r][1] - o[r][1]] : s[r] = [a[r][0], a[r][1]];
					return s;
				},
				points: function(e) {
					return this.vertices("v", e);
				},
				inTangents: function(e) {
					return this.vertices("i", e);
				},
				outTangents: function(e) {
					return this.vertices("o", e);
				},
				isClosed: function() {
					return this.v.c;
				},
				pointOnPath: function(e, t) {
					var n = this.v;
					t !== void 0 && (n = this.getValueAtTime(t, 0)), this._segmentsLength ||= bez.getSegmentsLength(n);
					for (var r = this._segmentsLength, i = r.lengths, a = r.totalLength * e, o = 0, s = i.length, c = 0, l; o < s;) {
						if (c + i[o].addedLength > a) {
							var d = o, p = n.c && o === s - 1 ? 0 : o + 1, g = (a - c) / i[o].addedLength;
							l = bez.getPointInSegment(n.v[d], n.v[p], n.o[d], n.i[p], g, i[o]);
							break;
						} else c += i[o].addedLength;
						o += 1;
					}
					return l ||= n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]], l;
				},
				vectorOnPath: function(e, t, n) {
					e == 1 ? e = this.v.c : e == 0 && (e = .999);
					var r = this.pointOnPath(e, t), i = this.pointOnPath(e + .001, t), a = i[0] - r[0], o = i[1] - r[1], s = Math.sqrt(a ** 2 + o ** 2);
					return s === 0 ? [0, 0] : n === "tangent" ? [a / s, o / s] : [-o / s, a / s];
				},
				tangentOnPath: function(e, t) {
					return this.vectorOnPath(e, t, "tangent");
				},
				normalOnPath: function(e, t) {
					return this.vectorOnPath(e, t, "normal");
				},
				setGroupProperty: expressionHelpers.setGroupProperty,
				getValueAtTime: expressionHelpers.getStaticValueAtTime
			}, extendPrototype([d], c), extendPrototype([d], l), l.prototype.getValueAtTime = s, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
			var p = ShapePropertyFactory.getShapeProp;
			ShapePropertyFactory.getShapeProp = function(e, t, n, r, i) {
				var a = p(e, t, n, r, i);
				return a.propertyIndex = t.ix, a.lock = !1, n === 3 ? expressionHelpers.searchExpressions(e, t.pt, a) : n === 4 && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a;
			};
		}
		function initialize$1() {
			addPropertyDecorator();
		}
		function addDecorator() {
			function e() {
				return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
			}
			TextProperty.prototype.getExpressionValue = function(e, t) {
				var n = this.calculateExpression(t);
				if (e.t !== n) {
					var r = {};
					return this.copyData(r, e), r.t = n.toString(), r.__complete = !1, r;
				}
				return e;
			}, TextProperty.prototype.searchProperty = function() {
				var e = this.searchKeyframes(), t = this.searchExpressions();
				return this.kf = e || t, this.kf;
			}, TextProperty.prototype.searchExpressions = e;
		}
		function initialize() {
			addDecorator();
		}
		function SVGComposableEffect() {}
		SVGComposableEffect.prototype = { createMergeNode: function(e, t) {
			var n = createNS("feMerge");
			n.setAttribute("result", e);
			var r, i;
			for (i = 0; i < t.length; i += 1) r = createNS("feMergeNode"), r.setAttribute("in", t[i]), n.appendChild(r), n.appendChild(r);
			return n;
		} };
		var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
		function SVGTintFilter(e, t, n, r, i) {
			this.filterManager = t;
			var a = createNS("feColorMatrix");
			a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", r + "_tint_1"), e.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", r + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
			var o = this.createMergeNode(r, [
				i,
				r + "_tint_1",
				r + "_tint_2"
			]);
			e.appendChild(o);
		}
		extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				var t = this.filterManager.effectElements[0].p.v, n = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v / 100;
				this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", n[0] - t[0] + " 0 0 0 " + t[0] + " " + (n[1] - t[1]) + " 0 0 0 " + t[1] + " " + (n[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0");
			}
		};
		function SVGFillFilter(e, t, n, r) {
			this.filterManager = t;
			var i = createNS("feColorMatrix");
			i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", r), e.appendChild(i), this.matrixFilter = i;
		}
		SVGFillFilter.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				var t = this.filterManager.effectElements[2].p.v, n = this.filterManager.effectElements[6].p.v;
				this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + n + " 0");
			}
		};
		function SVGStrokeEffect(e, t, n) {
			this.initialized = !1, this.filterManager = t, this.elem = n, this.paths = [];
		}
		SVGStrokeEffect.prototype.initialize = function() {
			var e = this.elem.layerElement.children || this.elem.layerElement.childNodes, t, n, r, i;
			for (this.filterManager.effectElements[1].p.v === 1 ? (i = this.elem.maskManager.masksProperties.length, r = 0) : (r = this.filterManager.effectElements[0].p.v - 1, i = r + 1), n = createNS("g"), n.setAttribute("fill", "none"), n.setAttribute("stroke-linecap", "round"), n.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), n.appendChild(t), this.paths.push({
				p: t,
				m: r
			});
			if (this.filterManager.effectElements[10].p.v === 3) {
				var a = createNS("mask"), o = createElementID();
				a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(n), this.elem.globalData.defs.appendChild(a);
				var s = createNS("g");
				for (s.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")"); e[0];) s.appendChild(e[0]);
				this.elem.layerElement.appendChild(s), this.masker = a, n.setAttribute("stroke", "#fff");
			} else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
				if (this.filterManager.effectElements[10].p.v === 2) for (e = this.elem.layerElement.children || this.elem.layerElement.childNodes; e.length;) this.elem.layerElement.removeChild(e[0]);
				this.elem.layerElement.appendChild(n), this.elem.layerElement.removeAttribute("mask"), n.setAttribute("stroke", "#fff");
			}
			this.initialized = !0, this.pathMasker = n;
		}, SVGStrokeEffect.prototype.renderFrame = function(e) {
			this.initialized || this.initialize();
			var t, n = this.paths.length, r, i;
			for (t = 0; t < n; t += 1) if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
				var a;
				if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
					var o = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, s = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, c = i.getTotalLength();
					a = "0 0 0 " + c * o + " ";
					var l = c * (s - o), d = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, p = Math.floor(l / d), g;
					for (g = 0; g < p; g += 1) a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
					a += "0 " + c * 10 + " 0 0";
				} else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
				i.setAttribute("stroke-dasharray", a);
			}
			if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
				var _ = this.filterManager.effectElements[3].p.v;
				this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(_[0] * 255) + "," + bmFloor(_[1] * 255) + "," + bmFloor(_[2] * 255) + ")");
			}
		};
		function SVGTritoneFilter(e, t, n, r) {
			this.filterManager = t;
			var i = createNS("feColorMatrix");
			i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
			var a = createNS("feComponentTransfer");
			a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), this.matrixFilter = a;
			var o = createNS("feFuncR");
			o.setAttribute("type", "table"), a.appendChild(o), this.feFuncR = o;
			var s = createNS("feFuncG");
			s.setAttribute("type", "table"), a.appendChild(s), this.feFuncG = s;
			var c = createNS("feFuncB");
			c.setAttribute("type", "table"), a.appendChild(c), this.feFuncB = c, e.appendChild(a);
		}
		SVGTritoneFilter.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				var t = this.filterManager.effectElements[0].p.v, n = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v, i = r[0] + " " + n[0] + " " + t[0], a = r[1] + " " + n[1] + " " + t[1], o = r[2] + " " + n[2] + " " + t[2];
				this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o);
			}
		};
		function SVGProLevelsFilter(e, t, n, r) {
			this.filterManager = t;
			var i = this.filterManager.effectElements, a = createNS("feComponentTransfer");
			(i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
		}
		SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
			var n = createNS(e);
			return n.setAttribute("type", "table"), t.appendChild(n), n;
		}, SVGProLevelsFilter.prototype.getTableValue = function(e, t, n, r, i) {
			for (var a = 0, o = 256, s, c = Math.min(e, t), l = Math.max(e, t), d = Array.call(null, { length: o }), p, g = 0, _ = i - r, y = t - e; a <= 256;) s = a / 256, p = s <= c ? y < 0 ? i : r : s >= l ? y < 0 ? r : i : r + _ * ((s - e) / y) ** (1 / n), d[g] = p, g += 1, a += 256 / (o - 1);
			return d.join(" ");
		}, SVGProLevelsFilter.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				var t, n = this.filterManager.effectElements;
				this.feFuncRComposed && (e || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (t = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (t = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (t = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (t = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (t = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", t));
			}
		};
		function SVGDropShadowEffect(e, t, n, r, i) {
			var a = t.container.globalData.renderConfig.filterSize, o = t.data.fs || a;
			e.setAttribute("x", o.x || a.x), e.setAttribute("y", o.y || a.y), e.setAttribute("width", o.width || a.width), e.setAttribute("height", o.height || a.height), this.filterManager = t;
			var s = createNS("feGaussianBlur");
			s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", r + "_drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, e.appendChild(s);
			var c = createNS("feOffset");
			c.setAttribute("dx", "25"), c.setAttribute("dy", "0"), c.setAttribute("in", r + "_drop_shadow_1"), c.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = c, e.appendChild(c);
			var l = createNS("feFlood");
			l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = l, e.appendChild(l);
			var d = createNS("feComposite");
			d.setAttribute("in", r + "_drop_shadow_3"), d.setAttribute("in2", r + "_drop_shadow_2"), d.setAttribute("operator", "in"), d.setAttribute("result", r + "_drop_shadow_4"), e.appendChild(d);
			var p = this.createMergeNode(r, [r + "_drop_shadow_4", i]);
			e.appendChild(p);
		}
		extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
					var t = this.filterManager.effectElements[0].p.v;
					this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)));
				}
				if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
					var n = this.filterManager.effectElements[3].p.v, r = (this.filterManager.effectElements[2].p.v - 90) * degToRads, i = n * Math.cos(r), a = n * Math.sin(r);
					this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a);
				}
			}
		};
		var _svgMatteSymbols = [];
		function SVGMatte3Effect(e, t, n) {
			this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = n, n.matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement;
		}
		SVGMatte3Effect.prototype.findSymbol = function(e) {
			for (var t = 0, n = _svgMatteSymbols.length; t < n;) {
				if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
				t += 1;
			}
			return null;
		}, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
			var n = e.layerElement.parentNode;
			if (n) {
				for (var r = n.children, i = 0, a = r.length; i < a && r[i] !== e.layerElement;) i += 1;
				var o;
				i <= a - 2 && (o = r[i + 1]);
				var s = createNS("use");
				s.setAttribute("href", "#" + t), o ? n.insertBefore(s, o) : n.appendChild(s);
			}
		}, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
			if (!this.findSymbol(t)) {
				var n = createElementID(), r = createNS("mask");
				r.setAttribute("id", t.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
				var i = e.globalData.defs;
				i.appendChild(r);
				var a = createNS("symbol");
				a.setAttribute("id", n), this.replaceInParent(t, n), a.appendChild(t.layerElement), i.appendChild(a);
				var o = createNS("use");
				o.setAttribute("href", "#" + n), r.appendChild(o), t.data.hd = !1, t.show();
			}
			e.setMatte(t.layerId);
		}, SVGMatte3Effect.prototype.initialize = function() {
			for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, n = 0, r = t.length; n < r;) t[n] && t[n].data.ind === e && this.setElementAsMask(this.elem, t[n]), n += 1;
			this.initialized = !0;
		}, SVGMatte3Effect.prototype.renderFrame = function() {
			this.initialized || this.initialize();
		};
		function SVGGaussianBlurEffect(e, t, n, r) {
			e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
			var i = createNS("feGaussianBlur");
			i.setAttribute("result", r), e.appendChild(i), this.feGaussianBlur = i;
		}
		SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
			if (e || this.filterManager._mdf) {
				var t = this.filterManager.effectElements[0].p.v * .3, n = this.filterManager.effectElements[1].p.v, r = n == 3 ? 0 : t, i = n == 2 ? 0 : t;
				this.feGaussianBlur.setAttribute("stdDeviation", r + " " + i);
				var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
				this.feGaussianBlur.setAttribute("edgeMode", a);
			}
		};
		function TransformEffect() {}
		TransformEffect.prototype.init = function(e) {
			this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
		}, TransformEffect.prototype.renderFrame = function(e) {
			if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
				var t = this.effectsManager.effectElements, n = t[0].p.v, r = t[1].p.v, i = t[2].p.v === 1, a = t[3].p.v, o = i ? a : t[4].p.v, s = t[5].p.v, c = t[6].p.v, l = t[7].p.v;
				this.matrix.reset(), this.matrix.translate(-n[0], -n[1], n[2]), this.matrix.scale(o * .01, a * .01, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-s * degToRads, (c + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0);
			}
		};
		function SVGTransformEffect(e, t) {
			this.init(t);
		}
		extendPrototype([TransformEffect], SVGTransformEffect);
		function CVTransformEffect(e) {
			this.init(e);
		}
		return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
	}));
})), import_lottie = /* @__PURE__ */ __toESM(require_lottie());
function _arrayLikeToArray(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e;
}
function _defineProperty(e, t, n) {
	return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _iterableToArrayLimit(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function _nonIterableRest() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _objectSpread2(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
			_defineProperty(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function _objectWithoutProperties(e, t) {
	if (e == null) return {};
	var n, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
function _slicedToArray(e, t) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _toPrimitive(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _toPropertyKey(e) {
	var t = _toPrimitive(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _unsupportedIterableToArray(e, t) {
	if (e) {
		if (typeof e == "string") return _arrayLikeToArray(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
	}
}
var _excluded$1 = [
	"animationData",
	"loop",
	"autoplay",
	"initialSegment",
	"onComplete",
	"onLoopComplete",
	"onEnterFrame",
	"onSegmentStart",
	"onConfigReady",
	"onDataReady",
	"onDataFailed",
	"onLoadedImages",
	"onDOMLoaded",
	"onDestroy",
	"lottieRef",
	"renderer",
	"name",
	"assetsPath",
	"rendererSettings"
], useLottie = function(e, t) {
	var n = e.animationData, r = e.loop, i = e.autoplay, a = e.initialSegment, o = e.onComplete, s = e.onLoopComplete, c = e.onEnterFrame, l = e.onSegmentStart, d = e.onConfigReady, p = e.onDataReady, g = e.onDataFailed, _ = e.onLoadedImages, y = e.onDOMLoaded, x = e.onDestroy;
	e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
	var C = _objectWithoutProperties(e, _excluded$1), ee = _slicedToArray(useState(!1), 2), te = ee[0], ne = ee[1], T = useRef(), re = useRef(null), ie = function() {
		var e;
		(e = T.current) == null || e.play();
	}, ae = function() {
		var e;
		(e = T.current) == null || e.stop();
	}, oe = function() {
		var e;
		(e = T.current) == null || e.pause();
	}, se = function(e) {
		var t;
		(t = T.current) == null || t.setSpeed(e);
	}, ce = function(e, t) {
		var n;
		(n = T.current) == null || n.goToAndPlay(e, t);
	}, le = function(e, t) {
		var n;
		(n = T.current) == null || n.goToAndStop(e, t);
	}, ue = function(e) {
		var t;
		(t = T.current) == null || t.setDirection(e);
	}, de = function(e, t) {
		var n;
		(n = T.current) == null || n.playSegments(e, t);
	}, fe = function(e) {
		var t;
		(t = T.current) == null || t.setSubframe(e);
	}, pe = function(e) {
		var t;
		return T.current?.getDuration(e);
	}, me = function() {
		var e;
		(e = T.current) == null || e.destroy(), T.current = void 0;
	}, he = function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n;
		if (re.current) {
			(n = T.current) == null || n.destroy();
			var r = _objectSpread2(_objectSpread2(_objectSpread2({}, e), t), {}, { container: re.current });
			return T.current = import_lottie.default.loadAnimation(r), ne(!!T.current), function() {
				var e;
				(e = T.current) == null || e.destroy(), T.current = void 0;
			};
		}
	};
	return useEffect(function() {
		var e = he();
		return function() {
			return e?.();
		};
	}, [n, r]), useEffect(function() {
		T.current && (T.current.autoplay = !!i);
	}, [i]), useEffect(function() {
		if (T.current) {
			if (!a) {
				T.current.resetSegments(!0);
				return;
			}
			!Array.isArray(a) || !a.length || ((T.current.currentRawFrame < a[0] || T.current.currentRawFrame > a[1]) && (T.current.currentRawFrame = a[0]), T.current.setSegment(a[0], a[1]));
		}
	}, [a]), useEffect(function() {
		var e = [
			{
				name: "complete",
				handler: o
			},
			{
				name: "loopComplete",
				handler: s
			},
			{
				name: "enterFrame",
				handler: c
			},
			{
				name: "segmentStart",
				handler: l
			},
			{
				name: "config_ready",
				handler: d
			},
			{
				name: "data_ready",
				handler: p
			},
			{
				name: "data_failed",
				handler: g
			},
			{
				name: "loaded_images",
				handler: _
			},
			{
				name: "DOMLoaded",
				handler: y
			},
			{
				name: "destroy",
				handler: x
			}
		].filter(function(e) {
			return e.handler != null;
		});
		if (e.length) {
			var t = e.map(function(e) {
				var t;
				return (t = T.current) == null || t.addEventListener(e.name, e.handler), function() {
					var t;
					(t = T.current) == null || t.removeEventListener(e.name, e.handler);
				};
			});
			return function() {
				t.forEach(function(e) {
					return e();
				});
			};
		}
	}, [
		o,
		s,
		c,
		l,
		d,
		p,
		g,
		_,
		y,
		x
	]), {
		View: /* @__PURE__ */ React.createElement("div", _objectSpread2({
			style: t,
			ref: re
		}, C)),
		play: ie,
		stop: ae,
		pause: oe,
		setSpeed: se,
		goToAndStop: le,
		goToAndPlay: ce,
		setDirection: ue,
		playSegments: de,
		setSubframe: fe,
		getDuration: pe,
		destroy: me,
		animationContainerRef: re,
		animationLoaded: te,
		animationItem: T.current
	};
};
function getContainerVisibility(e) {
	var t = e.getBoundingClientRect(), n = t.top, r = t.height;
	return (window.innerHeight - n) / (window.innerHeight + r);
}
function getContainerCursorPosition(e, t, n) {
	var r = e.getBoundingClientRect(), i = r.top, a = r.left, o = r.width, s = r.height;
	return {
		x: (t - a) / o,
		y: (n - i) / s
	};
}
var useInitInteractivity = function(e) {
	var t = e.wrapperRef, n = e.animationItem, r = e.mode, i = e.actions;
	useEffect(function() {
		var e = t.current;
		if (!(!e || !n || !i.length)) {
			n.stop();
			var a = function() {
				var t = null, r = function() {
					var r = getContainerVisibility(e), a = i.find(function(e) {
						var t = e.visibility;
						return t && r >= t[0] && r <= t[1];
					});
					if (a) {
						if (a.type === "seek" && a.visibility && a.frames.length === 2) {
							var o = a.frames[0] + Math.ceil((r - a.visibility[0]) / (a.visibility[1] - a.visibility[0]) * a.frames[1]);
							n.goToAndStop(o - n.firstFrame - 1, !0);
						}
						a.type === "loop" && (t === null ? (n.playSegments(a.frames, !0), t = a.frames) : t === a.frames ? n.isPaused && (n.playSegments(a.frames, !0), t = a.frames) : (n.playSegments(a.frames, !0), t = a.frames)), a.type === "play" && n.isPaused && (n.resetSegments(!0), n.play()), a.type === "stop" && n.goToAndStop(a.frames[0] - n.firstFrame - 1, !0);
					}
				};
				return document.addEventListener("scroll", r), function() {
					document.removeEventListener("scroll", r);
				};
			}, o = function() {
				var t = function(t, r) {
					var a = t, o = r;
					if (a !== -1 && o !== -1) {
						var s = getContainerCursorPosition(e, a, o);
						a = s.x, o = s.y;
					}
					var c = i.find(function(e) {
						var t = e.position;
						return t && Array.isArray(t.x) && Array.isArray(t.y) ? a >= t.x[0] && a <= t.x[1] && o >= t.y[0] && o <= t.y[1] : t && !Number.isNaN(t.x) && !Number.isNaN(t.y) ? a === t.x && o === t.y : !1;
					});
					if (c) {
						if (c.type === "seek" && c.position && Array.isArray(c.position.x) && Array.isArray(c.position.y) && c.frames.length === 2) {
							var l = (a - c.position.x[0]) / (c.position.x[1] - c.position.x[0]), d = (o - c.position.y[0]) / (c.position.y[1] - c.position.y[0]);
							n.playSegments(c.frames, !0), n.goToAndStop(Math.ceil((l + d) / 2 * (c.frames[1] - c.frames[0])), !0);
						}
						c.type === "loop" && n.playSegments(c.frames, !0), c.type === "play" && (n.isPaused && n.resetSegments(!1), n.playSegments(c.frames)), c.type === "stop" && n.goToAndStop(c.frames[0], !0);
					}
				}, r = function(e) {
					t(e.clientX, e.clientY);
				}, a = function() {
					t(-1, -1);
				};
				return e.addEventListener("mousemove", r), e.addEventListener("mouseout", a), function() {
					e.removeEventListener("mousemove", r), e.removeEventListener("mouseout", a);
				};
			};
			switch (r) {
				case "scroll": return a();
				case "cursor": return o();
			}
		}
	}, [r, n]);
}, useLottieInteractivity = function(e) {
	var t = e.actions, n = e.mode, r = e.lottieObj, i = r.animationItem, a = r.View, o = r.animationContainerRef;
	return useInitInteractivity({
		actions: t,
		animationItem: i,
		mode: n,
		wrapperRef: o
	}), a;
}, v$2 = "4.8.0", meta$2 = {
	g: "LottieFiles AE 1.0.0",
	a: "",
	k: "",
	d: "",
	tc: ""
}, fr$2 = 60, ip$2 = 0, op$2 = 130, w$2 = 512, h$2 = 512, nm$2 = "HDFC Success", ddd$2 = 0, assets$2 = [], layers$2 = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "check",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ind: 0,
					ty: "sh",
					ix: 1,
					ks: {
						a: 0,
						k: {
							i: [
								[0, 0],
								[0, 0],
								[0, 0]
							],
							o: [
								[0, 0],
								[0, 0],
								[0, 0]
							],
							v: [
								[-82.5, 4.5],
								[-31, 55],
								[73, -52.5]
							],
							c: !1
						},
						ix: 2
					},
					nm: "Path 1",
					mn: "ADBE Vector Shape - Group",
					hd: !1
				},
				{
					ty: "tm",
					s: {
						a: 0,
						k: 0,
						ix: 1
					},
					e: {
						a: 1,
						k: [{
							i: {
								x: [.667],
								y: [1]
							},
							o: {
								x: [1],
								y: [.076]
							},
							t: 60,
							s: [0]
						}, {
							t: 85,
							s: [100]
						}],
						ix: 2
					},
					o: {
						a: 0,
						k: 0,
						ix: 3
					},
					m: 1,
					ix: 2,
					nm: "Trim Paths 1",
					mn: "ADBE Vector Filter - Trim",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 30,
						ix: 5
					},
					lc: 2,
					lj: 2,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, 0],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Shape 1",
			np: 4,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "Shape Layer 2",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [{
					i: {
						x: [
							0,
							0,
							.833
						],
						y: [
							.98,
							.98,
							-66.114
						]
					},
					o: {
						x: [
							.656,
							.656,
							.167
						],
						y: [
							.872,
							.872,
							67.114
						]
					},
					t: 20,
					s: [
						0,
						0,
						100
					]
				}, {
					t: 60,
					s: [
						150,
						150,
						100
					]
				}],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.172549019608,
							.854901960784,
							.580392156863,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "Shape Layer 1",
		sr: 1,
		ks: {
			o: {
				a: 1,
				k: [{
					i: {
						x: [.626],
						y: [.729]
					},
					o: {
						x: [.912],
						y: [.073]
					},
					t: 76,
					s: [100]
				}, {
					t: 119,
					s: [0]
				}],
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0,
								0,
								.667
							],
							y: [
								.999,
								.999,
								1
							]
						},
						o: {
							x: [
								.477,
								.477,
								.333
							],
							y: [
								.587,
								.587,
								0
							]
						},
						t: 10,
						s: [
							0,
							0,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 50,
						s: [
							150,
							150,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 76,
						s: [
							150,
							150,
							100
						]
					},
					{
						t: 123,
						s: [
							210,
							210,
							100
						]
					}
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 2,
						ix: 5
					},
					lc: 1,
					lj: 1,
					ml: 4,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.783504889993,
							.945098039216,
							.880089314779,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 5,
		ty: 4,
		nm: "BG",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ty: "rc",
					d: 1,
					s: {
						a: 0,
						k: [554, 556],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 4
					},
					nm: "Rectangle Path 1",
					mn: "ADBE Vector Shape - Rect",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [-1, 6],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Rectangle 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 240,
		op: 240,
		st: 0,
		bm: 0,
		hidden: 0
	}
], markers$2 = [], Success_default = {
	v: v$2,
	meta: meta$2,
	fr: 60,
	ip: 0,
	op: 130,
	w: 512,
	h: 512,
	nm: nm$2,
	ddd: 0,
	assets: assets$2,
	layers: layers$2,
	markers: markers$2
}, v$1 = "4.8.0", meta$1 = { g: "LottieFiles AE 1.0.0" }, fr$1 = 60, ip$1 = 0, op$1 = 130, w$1 = 512, h$1 = 512, nm$1 = "Error Red", ddd$1 = 0, assets$1 = [], layers$1 = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "Cross",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ind: 0,
					ty: "sh",
					ix: 1,
					ks: {
						a: 0,
						k: {
							i: [[0, 0], [0, 0]],
							o: [[0, 0], [0, 0]],
							v: [[-64, -64], [64, 64]],
							c: !1
						},
						ix: 2
					},
					nm: "Path 1",
					mn: "ADBE Vector Shape - Group",
					hd: !1
				},
				{
					ty: "tm",
					s: {
						a: 0,
						k: 0,
						ix: 1
					},
					e: {
						a: 1,
						k: [{
							i: {
								x: [.667],
								y: [1]
							},
							o: {
								x: [1],
								y: [.076]
							},
							t: 45,
							s: [0]
						}, {
							t: 70,
							s: [100]
						}],
						ix: 2
					},
					o: {
						a: 0,
						k: 0,
						ix: 3
					},
					m: 1,
					ix: 2,
					nm: "Trim Paths 1",
					mn: "ADBE Vector Filter - Trim",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 28,
						ix: 5
					},
					lc: 2,
					lj: 2,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, 0],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Cross Line 1",
			np: 4,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}, {
			ty: "gr",
			it: [
				{
					ind: 0,
					ty: "sh",
					ix: 1,
					ks: {
						a: 0,
						k: {
							i: [[0, 0], [0, 0]],
							o: [[0, 0], [0, 0]],
							v: [[64, -64], [-64, 64]],
							c: !1
						},
						ix: 2
					},
					nm: "Path 2",
					mn: "ADBE Vector Shape - Group",
					hd: !1
				},
				{
					ty: "tm",
					s: {
						a: 0,
						k: 0,
						ix: 1
					},
					e: {
						a: 1,
						k: [{
							i: {
								x: [.667],
								y: [1]
							},
							o: {
								x: [1],
								y: [.076]
							},
							t: 55,
							s: [0]
						}, {
							t: 80,
							s: [100]
						}],
						ix: 2
					},
					o: {
						a: 0,
						k: 0,
						ix: 3
					},
					m: 1,
					ix: 2,
					nm: "Trim Paths 2",
					mn: "ADBE Vector Filter - Trim",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 28,
						ix: 5
					},
					lc: 2,
					lj: 2,
					bm: 0,
					nm: "Stroke 2",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, 0],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Cross Line 2",
			np: 4,
			cix: 2,
			bm: 0,
			ix: 2,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "Pulse Fill",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [{
					i: {
						x: [
							0,
							0,
							.833
						],
						y: [
							.98,
							.98,
							-66.114
						]
					},
					o: {
						x: [
							.656,
							.656,
							.167
						],
						y: [
							.872,
							.872,
							67.114
						]
					},
					t: 20,
					s: [
						0,
						0,
						100
					]
				}, {
					t: 60,
					s: [
						150,
						150,
						100
					]
				}],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							1,
							.3882352941,
							.2784313725,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "Ring",
		sr: 1,
		ks: {
			o: {
				a: 1,
				k: [{
					i: {
						x: [.626],
						y: [.729]
					},
					o: {
						x: [.912],
						y: [.073]
					},
					t: 76,
					s: [100]
				}, {
					t: 119,
					s: [0]
				}],
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0,
								0,
								.667
							],
							y: [
								.999,
								.999,
								1
							]
						},
						o: {
							x: [
								.477,
								.477,
								.333
							],
							y: [
								.587,
								.587,
								0
							]
						},
						t: 10,
						s: [
							0,
							0,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 50,
						s: [
							150,
							150,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 76,
						s: [
							150,
							150,
							100
						]
					},
					{
						t: 123,
						s: [
							210,
							210,
							100
						]
					}
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 2,
						ix: 5
					},
					lc: 1,
					lj: 1,
					ml: 4,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.99,
							.92,
							.92,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "BG",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ty: "rc",
					d: 1,
					s: {
						a: 0,
						k: [554, 556],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 4
					},
					nm: "Rectangle Path 1",
					mn: "ADBE Vector Shape - Rect",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [-1, 6],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Rectangle 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	}
], markers$1 = [], Error_default = {
	v: v$1,
	meta: meta$1,
	fr: 60,
	ip: 0,
	op: 130,
	w: 512,
	h: 512,
	nm: nm$1,
	ddd: 0,
	assets: assets$1,
	layers: layers$1,
	markers: markers$1
}, v = "4.8.0", meta = { g: "LottieFiles AE 1.0.0" }, fr = 60, ip = 0, op = 130, w = 512, h = 512, nm = "Info Blue", ddd = 0, assets = [], layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "Exclamation",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ind: 0,
					ty: "sh",
					ix: 1,
					ks: {
						a: 0,
						k: {
							i: [[0, 0], [0, 0]],
							o: [[0, 0], [0, 0]],
							v: [[0, -90], [0, 15]],
							c: !1
						},
						ix: 2
					},
					nm: "Line Path",
					mn: "ADBE Vector Shape - Group",
					hd: !1
				},
				{
					ty: "tm",
					s: {
						a: 0,
						k: 0,
						ix: 1
					},
					e: {
						a: 1,
						k: [{
							i: {
								x: [.667],
								y: [1]
							},
							o: {
								x: [1],
								y: [.076]
							},
							t: 60,
							s: [0]
						}, {
							t: 85,
							s: [100]
						}],
						ix: 2
					},
					o: {
						a: 0,
						k: 0,
						ix: 3
					},
					m: 1,
					ix: 2,
					nm: "Trim Paths",
					mn: "ADBE Vector Filter - Trim",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 28,
						ix: 5
					},
					lc: 2,
					lj: 2,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, 0],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Exclamation Line",
			np: 4,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}, {
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [34, 34],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 70],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, 0],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 1,
						k: [{
							t: 70,
							s: [0, 0],
							e: [100, 100],
							i: {
								x: [.667, .667],
								y: [1, 1]
							},
							o: {
								x: [.333, .333],
								y: [0, 0]
							}
						}, {
							t: 90,
							s: [100, 100]
						}],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Exclamation Dot",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 2,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "Pulse Fill",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [{
					i: {
						x: [
							0,
							0,
							.833
						],
						y: [
							.98,
							.98,
							-66.114
						]
					},
					o: {
						x: [
							.656,
							.656,
							.167
						],
						y: [
							.872,
							.872,
							67.114
						]
					},
					t: 20,
					s: [
						0,
						0,
						100
					]
				}, {
					t: 60,
					s: [
						150,
						150,
						100
					]
				}],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.32,
							.54,
							.82,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "Ring",
		sr: 1,
		ks: {
			o: {
				a: 1,
				k: [{
					i: {
						x: [.626],
						y: [.729]
					},
					o: {
						x: [.912],
						y: [.073]
					},
					t: 76,
					s: [100]
				}, {
					t: 119,
					s: [0]
				}],
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					257.86,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0,
								0,
								.667
							],
							y: [
								.999,
								.999,
								1
							]
						},
						o: {
							x: [
								.477,
								.477,
								.333
							],
							y: [
								.587,
								.587,
								0
							]
						},
						t: 10,
						s: [
							0,
							0,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 50,
						s: [
							150,
							150,
							100
						]
					},
					{
						i: {
							x: [
								.833,
								.833,
								.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								.167,
								.167,
								.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 76,
						s: [
							150,
							150,
							100
						]
					},
					{
						t: 123,
						s: [
							210,
							210,
							100
						]
					}
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					d: 1,
					ty: "el",
					s: {
						a: 0,
						k: [236, 236],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					nm: "Ellipse Path 1",
					mn: "ADBE Vector Shape - Ellipse",
					hd: !1
				},
				{
					ty: "st",
					c: {
						a: 0,
						k: [
							1,
							1,
							1,
							1
						],
						ix: 3
					},
					o: {
						a: 0,
						k: 100,
						ix: 4
					},
					w: {
						a: 0,
						k: 2,
						ix: 5
					},
					lc: 1,
					lj: 1,
					ml: 4,
					bm: 0,
					nm: "Stroke 1",
					mn: "ADBE Vector Graphic - Stroke",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.9,
							.94,
							.98,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [0, -3],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Ellipse 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "BG",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					256,
					256,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [{
			ty: "gr",
			it: [
				{
					ty: "rc",
					d: 1,
					s: {
						a: 0,
						k: [554, 556],
						ix: 2
					},
					p: {
						a: 0,
						k: [0, 0],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 4
					},
					nm: "Rectangle Path 1",
					mn: "ADBE Vector Shape - Rect",
					hd: !1
				},
				{
					ty: "fl",
					c: {
						a: 0,
						k: [
							.898,
							.941,
							1,
							1
						],
						ix: 4
					},
					o: {
						a: 0,
						k: 100,
						ix: 5
					},
					r: 1,
					bm: 0,
					nm: "Fill 1",
					mn: "ADBE Vector Graphic - Fill",
					hd: !1
				},
				{
					ty: "tr",
					p: {
						a: 0,
						k: [-1, 6],
						ix: 2
					},
					a: {
						a: 0,
						k: [0, 0],
						ix: 1
					},
					s: {
						a: 0,
						k: [100, 100],
						ix: 3
					},
					r: {
						a: 0,
						k: 0,
						ix: 6
					},
					o: {
						a: 0,
						k: 100,
						ix: 7
					},
					sk: {
						a: 0,
						k: 0,
						ix: 4
					},
					sa: {
						a: 0,
						k: 0,
						ix: 5
					},
					nm: "Transform"
				}
			],
			nm: "Rectangle 1",
			np: 3,
			cix: 2,
			bm: 0,
			ix: 1,
			mn: "ADBE Vector Group",
			hd: !1
		}],
		ip: 0,
		op: 240,
		st: 0,
		bm: 0
	}
], markers = [], Information_default = {
	v,
	meta,
	fr: 60,
	ip: 0,
	op: 130,
	w: 512,
	h: 512,
	nm,
	ddd: 0,
	assets,
	layers,
	markers
}, animationByName = {
	successful: Success_default,
	failed: Error_default,
	information: Information_default,
	info: Information_default
}, BACKGROUND_LAYER_NAMES = new Set([
	"BG",
	"Pulse Fill",
	"Ring",
	"Shape Layer 1",
	"Shape Layer 2"
]), FOREGROUND_LAYER_NAMES = new Set([
	"check",
	"Cross",
	"Exclamation"
]), WHITE_THRESHOLD = .97, clamp = (e, t, n) => Math.min(n, Math.max(t, e)), parseChannel = (e, t) => {
	let n = e.trim();
	if (n.endsWith("%")) {
		let e = Number(n.slice(0, -1));
		return Number.isNaN(e) ? null : clamp(e / 100 * t, 0, t);
	}
	let r = Number(n);
	return Number.isNaN(r) ? null : clamp(r, 0, t);
}, parseAlpha = (e) => e ? parseChannel(e, 1) ?? 1 : 1, parseRgbColor = (e) => {
	let t = e.match(/rgba?\((.+)\)/);
	if (!t) return null;
	let n = t[1].split(/[,\s/]+/).filter(Boolean);
	if (n.length < 3) return null;
	let r = parseChannel(n[0], 255), i = parseChannel(n[1], 255), a = parseChannel(n[2], 255);
	if (r === null || i === null || a === null) return null;
	let o = parseAlpha(n[3]);
	return {
		r: r / 255,
		g: i / 255,
		b: a / 255,
		a: o
	};
}, parseHslColor = (e) => {
	let t = e.match(/hsla?\((.+)\)/);
	if (!t) return null;
	let n = t[1].split(/[,\s/]+/).filter(Boolean);
	if (n.length < 3) return null;
	let r = n[0].trim().toLowerCase(), i = Number(r.replace("deg", ""));
	if (r.endsWith("rad") && (i = Number(r.replace("rad", "")) * 180 / Math.PI), r.endsWith("turn") && (i = Number(r.replace("turn", "")) * 360), Number.isNaN(i)) return null;
	let a = parseChannel(n[1], 100), o = parseChannel(n[2], 100);
	if (a === null || o === null) return null;
	let s = a / 100, c = o / 100, l = (1 - Math.abs(2 * c - 1)) * s, d = (i % 360 + 360) % 360 / 60, p = l * (1 - Math.abs(d % 2 - 1)), g = 0, _ = 0, y = 0;
	d >= 0 && d < 1 ? (g = l, _ = p) : d >= 1 && d < 2 ? (g = p, _ = l) : d >= 2 && d < 3 ? (_ = l, y = p) : d >= 3 && d < 4 ? (_ = p, y = l) : d >= 4 && d < 5 ? (g = p, y = l) : d >= 5 && d < 6 && (g = l, y = p);
	let x = c - l / 2;
	return {
		r: clamp(g + x, 0, 1),
		g: clamp(_ + x, 0, 1),
		b: clamp(y + x, 0, 1),
		a: parseAlpha(n[3])
	};
}, parseHueAngle = (e) => {
	let t = e.trim().toLowerCase(), n = Number(t.replace("deg", ""));
	return t.endsWith("rad") && (n = Number(t.replace("rad", "")) * 180 / Math.PI), t.endsWith("turn") && (n = Number(t.replace("turn", "")) * 360), Number.isNaN(n) ? null : n;
}, parseOklabUnit = (e, t) => {
	let n = e.trim();
	if (n.endsWith("%")) {
		let e = Number(n.slice(0, -1));
		return Number.isNaN(e) ? null : e / 100;
	}
	let r = Number(n);
	return Number.isNaN(r) ? null : r;
}, linearToSrgb = (e) => {
	let t = clamp(e, 0, 1);
	return t <= .0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - .055;
}, toSrgbFromOklab = (e, t, n, r) => {
	let i = e + .3963377774 * t + .2158037573 * n, a = e - .1055613458 * t - .0638541728 * n, o = e - .0894841775 * t - 1.291485548 * n, s = i ** 3, c = a ** 3, l = o ** 3, d = 4.0767416621 * s - 3.3077115913 * c + .2309699292 * l, p = -1.2684380046 * s + 2.6097574011 * c - .3413193965 * l, g = -.0041960863 * s - .7034186147 * c + 1.707614701 * l;
	return {
		r: clamp(linearToSrgb(d), 0, 1),
		g: clamp(linearToSrgb(p), 0, 1),
		b: clamp(linearToSrgb(g), 0, 1),
		a: clamp(r, 0, 1)
	};
}, parseOklabColor = (e) => {
	let t = e.match(/oklab\((.+)\)/i);
	if (!t) return null;
	let n = t[1].split(/[,\s/]+/).filter(Boolean);
	if (n.length < 3) return null;
	let r = parseOklabUnit(n[0], !0), i = parseOklabUnit(n[1], !1), a = parseOklabUnit(n[2], !1);
	return r === null || i === null || a === null ? null : toSrgbFromOklab(r, i, a, parseAlpha(n[3]));
}, parseOklchColor = (e) => {
	let t = e.match(/oklch\((.+)\)/i);
	if (!t) return null;
	let n = t[1].split(/[,\s/]+/).filter(Boolean);
	if (n.length < 3) return null;
	let r = parseOklabUnit(n[0], !0), i = parseOklabUnit(n[1], !1), a = parseHueAngle(n[2]);
	if (r === null || i === null || a === null) return null;
	let o = a * Math.PI / 180;
	return toSrgbFromOklab(r, i * Math.cos(o), i * Math.sin(o), parseAlpha(n[3]));
}, parseSrgbColor = (e) => {
	let t = e.match(/color\(\s*srgb\s+([^)]+)\)/i);
	if (!t) return null;
	let n = t[1].split(/[,\s/]+/).filter(Boolean);
	if (n.length < 3) return null;
	let r = (e) => {
		let t = e.trim();
		if (t.endsWith("%")) {
			let e = Number(t.slice(0, -1));
			return Number.isNaN(e) ? null : clamp(e / 100, 0, 1);
		}
		let n = Number(t);
		return Number.isNaN(n) ? null : clamp(n > 1 ? n / 255 : n, 0, 1);
	}, i = r(n[0]), a = r(n[1]), o = r(n[2]);
	return i === null || a === null || o === null ? null : {
		r: i,
		g: a,
		b: o,
		a: parseAlpha(n[3])
	};
}, parseHexColor = (e) => {
	let t = e.trim().replace("#", "");
	if (![
		3,
		4,
		6,
		8
	].includes(t.length)) return null;
	let n = t.length <= 4 ? t.split("").map((e) => `${e}${e}`).join("") : t, r = Number.parseInt(n.slice(0, 2), 16), i = Number.parseInt(n.slice(2, 4), 16), a = Number.parseInt(n.slice(4, 6), 16);
	if (Number.isNaN(r) || Number.isNaN(i) || Number.isNaN(a)) return null;
	let o = n.length === 8 ? clamp(Number.parseInt(n.slice(6, 8), 16) / 255, 0, 1) : 1;
	return {
		r: r / 255,
		g: i / 255,
		b: a / 255,
		a: o
	};
}, parseColorValue = (e) => {
	let t = e.trim();
	return t.length === 0 ? null : t.startsWith("#") ? parseHexColor(t) : parseRgbColor(t) ?? parseHslColor(t) ?? parseOklchColor(t) ?? parseOklabColor(t) ?? parseSrgbColor(t);
}, resolveCssColor = (e, t) => {
	if (typeof window > "u") return null;
	let n = e.ownerDocument, r = n.defaultView;
	if (!r) return null;
	let i = t.trim();
	if (i === "currentColor") return parseColorValue(r.getComputedStyle(e).color);
	if (!i) return null;
	let a = n.createElement("span");
	a.style.position = "absolute", a.style.visibility = "hidden", a.style.pointerEvents = "none", a.style.color = i.startsWith("--") ? `var(${i})` : i, e.appendChild(a);
	let o = r.getComputedStyle(a).color;
	return e.removeChild(a), parseColorValue(o);
}, cloneAnimationData = (e) => typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e)), isColorArray = (e) => Array.isArray(e) && e.length === 4 && e.every((e) => typeof e == "number"), shouldReplaceColor = (e) => {
	let [t, n, r, i] = e;
	return i === 0 ? !1 : !(t >= WHITE_THRESHOLD && n >= WHITE_THRESHOLD && r >= WHITE_THRESHOLD);
}, replaceColor = (e, t) => [
	t.r,
	t.g,
	t.b,
	clamp(e[3] * t.a, 0, 1)
], applyColorToKeyframe = (e, t, n = !1) => {
	let r = e.s;
	isColorArray(r) && (n || shouldReplaceColor(r)) && (e.s = replaceColor(r, t));
	let i = e.e;
	isColorArray(i) && (n || shouldReplaceColor(i)) && (e.e = replaceColor(i, t));
}, applyColorToRecord = (e, t, n = !1) => {
	let r = e.k;
	if (isColorArray(r)) {
		(n || shouldReplaceColor(r)) && (e.k = replaceColor(r, t));
		return;
	}
	Array.isArray(r) && r.forEach((e) => {
		!e || typeof e != "object" || applyColorToKeyframe(e, t, n);
	});
}, applyColorToAnimation = (e, t) => {
	let n = cloneAnimationData(e), r = (e) => {
		if (!e || typeof e != "object") return;
		if (Array.isArray(e)) {
			e.forEach((e) => {
				r(e);
			});
			return;
		}
		let n = e, i = n.c;
		i && typeof i == "object" && !Array.isArray(i) && applyColorToRecord(i, t), Object.values(n).forEach((e) => {
			r(e);
		});
	};
	return r(n), n;
}, applyColorToNamedLayers = (e, t, n) => {
	let r = (e) => {
		if (!e || typeof e != "object") return;
		if (Array.isArray(e)) {
			e.forEach((e) => {
				r(e);
			});
			return;
		}
		let n = e, i = n.c;
		i && typeof i == "object" && !Array.isArray(i) && applyColorToRecord(i, t, !0), Object.values(n).forEach((e) => {
			r(e);
		});
	}, i = cloneAnimationData(e), a = i.layers;
	return Array.isArray(a) && a.forEach((e) => {
		let t = typeof e.nm == "string" ? e.nm : void 0;
		!t || !n.has(t) || r(e);
	}), i;
}, normalizeColorValue = (e) => {
	if (!e) return;
	let t = e.trim();
	if (t.length !== 0) return t.startsWith("var(") || t === "currentColor" ? t : t.startsWith("--") ? `var(${t})` : t;
};
function Icon({ name: e, loop: t, color: n, backgroundColor: r, foregroundColor: i, interactivity: a, style: o, ...s }) {
	let [c, l] = useState(null), d = useMemo(() => normalizeColorValue(n), [n]), p = useMemo(() => normalizeColorValue(r), [r]), g = useMemo(() => normalizeColorValue(i), [i]), _ = !!(p || g), y = (e && animationByName[e]) ?? Information_default, x = !_ && d && c ? resolveCssColor(c, "currentColor") : null, C = p && c ? resolveCssColor(c, p) : null, ee = g && c ? resolveCssColor(c, g) : null, te = useMemo(() => {
		if (!C && !ee) return x ? applyColorToAnimation(y, x) : y;
		let e = y;
		return C && (e = applyColorToNamedLayers(e, C, BACKGROUND_LAYER_NAMES)), ee && (e = applyColorToNamedLayers(e, ee, FOREGROUND_LAYER_NAMES)), e;
	}, [
		y,
		C,
		x,
		ee
	]), ne = useLottie({
		...s,
		animationData: te,
		loop: t ?? !1
	}, o), T = useLottieInteractivity({
		lottieObj: ne,
		actions: a?.actions ?? [],
		mode: a?.mode ?? "scroll"
	}), re = a ? T : ne.View;
	return /* @__PURE__ */ jsx("span", {
		ref: l,
		style: {
			display: "contents",
			color: _ ? void 0 : d
		},
		children: re
	});
}
//#endregion
//#region src/hooks/useNavigationActions.tsx
var useBackNavigationActions = ({ defaultRoute: e, backLabel: t, disabled: n = !1, enableHotkey: r = !0, useHistory: i = !0, requireCanGoBackForHotkey: a, replace: o = !1, showWhenNoHistory: s = !0, resetHistory: c = !1 }) => {
	let { canGoBack: l, handleBack: d } = useBackNavigation({
		defaultRoute: e,
		enableHotkey: r,
		useHistory: i,
		requireCanGoBackForHotkey: a,
		replace: o,
		resetHistory: c
	}), p = i ? l : s;
	return useNavigationItems("bottom", useMemo(() => p ? [/* @__PURE__ */ jsx(Button, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		disabled: n,
		onClick: d,
		label: t
	}, "cashier-nav-back")] : [], [
		t,
		n,
		d,
		p
	])), {
		canGoBack: l,
		handleBack: d
	};
}, STATUS_SUCCESS$1 = new Set(["successful"]), STATUS_FAILURE$1 = new Set(["failed", "cancelled"]), STATUS_PENDING = new Set(["pending", "processing"]), STATUS_INCONSISTENT = new Set(["inconsistent"]), normaliseSummaryStatus = (e) => e?.toLowerCase(), resolvePaymentSummaryTheme = (e) => {
	let t = normaliseSummaryStatus(e);
	return t ? STATUS_SUCCESS$1.has(t) ? "success" : STATUS_FAILURE$1.has(t) ? "danger" : STATUS_PENDING.has(t) ? "info" : (STATUS_INCONSISTENT.has(t), "neutral") : "neutral";
}, STATUS_SUCCESS = new Set(["successful"]), STATUS_FAILURE = new Set(["failed", "cancelled"]), SUMMARY_ANIMATION_STYLE_OPTIONS = {
	baseDelayMs: 200,
	maxAdditionalDelayMs: 360,
	distribution: "linear"
}, SUMMARY_SUGGESTED_PAYMENT_TYPE_GUTTER_CLASSNAME = "[@container_(max-width:620px)]:pl-1.5", normalizeStatus = (e) => e?.toLowerCase(), getSummaryFieldValue = (e, t) => e.find((e) => e.id === t)?.value, normalizeSummaryAmountValue = (e) => {
	if (isMoneyLike(e)) return normalizeAmountValue(String(e.value)) || null;
	if (typeof e == "string") return normalizeAmountValue(e) || null;
	if (e && typeof e == "object" && "value" in e) {
		let t = e.value;
		if (typeof t == "string" || typeof t == "number") return normalizeAmountValue(String(t)) || null;
	}
	return null;
}, getLatestSuccessfulPaymentType = (e, t) => {
	let n = null, r = -Infinity;
	for (let i of e) {
		if (t && i === t) continue;
		let e = i.lastSuccessful;
		if (!(e instanceof Date)) continue;
		let a = e.getTime();
		Number.isFinite(a) && a > r && (r = a, n = i);
	}
	return n;
}, mapPaymentStatusToIconName = (e) => {
	let t = normalizeStatus(e);
	return t ? STATUS_SUCCESS.has(t) ? "successful" : STATUS_FAILURE.has(t) ? "failed" : "information" : "information";
}, Route$1 = createFileRoute("/summary/$id")({
	validateSearch: (e) => ({ merchantId: typeof e.merchantId == "string" ? e.merchantId : "" }),
	beforeLoad: ({ context: e, params: t, search: n }) => {
		let { uiComboView: r, lockAmount: i, method: a } = e, o = resolveDefaultRoute({
			uiComboView: r,
			lockAmount: i,
			method: a
		}), s = typeof n.merchantId == "string" ? n.merchantId : "", c = getSummaryAccess();
		if (!(c && c.paymentId === t.id && c.merchantId === s)) throw redirect({
			to: o,
			replace: !0
		});
	},
	loaderDeps: ({ search: e }) => ({ merchantId: e.merchantId }),
	loader: async ({ params: e, deps: t }) => {
		let { id: n } = e, { merchantId: r } = t, { error: i, data: a } = await getPaymentSummary({
			path: { paymentId: n },
			query: { merchantId: r }
		});
		if (i) throw Error();
		return a;
	},
	component: SummaryView,
	pendingComponent: SummaryPending
});
function SummaryPending() {
	let { translateKey: e } = useI18n();
	return /* @__PURE__ */ jsx(SubContainer, {
		title: e("payment.finalizing"),
		stickyHeader: !0
	});
}
function SuggestedPaymentTypePanel({ summaryFields: e }) {
	let t = useNavigate(), { translateKey: n } = useI18n(), { setCashierState: r, selectedBonusCode: i, uiBonusesAvailable: a } = useContext(CashierContext), { paymentTypesList: o } = usePaymentTypes(), { getAvailableBonusesForPaymentType: s, getBonusCountForPaymentType: c } = useBonuses(), l = useRef(i ?? null), d = useMemo(() => {
		let t = getSummaryFieldValue(e, "paymentType");
		return typeof t == "string" ? t : null;
	}, [e]), p = useMemo(() => resolvePaymentTypeMatch(o, d), [d, o]), g = useMemo(() => normalizeSummaryAmountValue(getSummaryFieldValue(e, "amount")), [e]), _ = useMemo(() => g ? parseAmountValue(g) : null, [g]), y = useMemo(() => _ === null ? void 0 : { amount: _ }, [_]), x = useMemo(() => getLatestSuccessfulPaymentType(o, p), [p, o]), C = n("cta.try_another_payment_type"), ee = useMemo(() => {
		if (!x || !a) return null;
		let e = c(x, y), t = x.accountId ? `${x.accountId}-${x.name}` : x.name;
		return e > 0 ? /* @__PURE__ */ jsx(BonusCountBadge, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		y,
		c,
		x,
		a
	]), te = useCallback(() => {
		if (!x) return;
		let e = s(x, y), n = l.current, i = !!(n && e.find((e) => e.code === n)), a = e.length > 0 && (!i || e.length > 1);
		if (r((e) => {
			let t = {
				...e,
				selectedPaymentType: x.name,
				selectedBonusCode: i ? n : null,
				paymentFormDraft: null,
				comboViewFormDraft: null,
				resetFlowOnBack: !0
			};
			return g && (t.initialAmount = g), t;
		}), a) {
			t({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		t({
			to: "/pt/$id",
			params: { id: x.name },
			replace: !0
		});
	}, [
		g,
		y,
		s,
		t,
		r,
		x
	]), ne = useCallback((e) => {
		e.key !== "Enter" && e.key !== " " || (e.preventDefault(), te());
	}, [te]);
	if (!x) return null;
	let T = n(formatCardAccountLabel(x) ?? x.name), re = n("aria.logo");
	return /* @__PURE__ */ jsx("div", {
		className: twJoin("mb-8 mx-auto w-full max-w-2xl", SUMMARY_SUGGESTED_PAYMENT_TYPE_GUTTER_CLASSNAME),
		children: /* @__PURE__ */ jsx("div", {
			role: "button",
			tabIndex: 0,
			"data-testid": "suggested-payment-type",
			"data-name": x.name,
			onClick: te,
			onKeyDown: ne,
			className: twJoin("block w-full cursor-pointer rounded-[calc(var(--pc-radius-xl)+0.45rem)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]"),
			children: /* @__PURE__ */ jsx(InteractivePrompt, {
				className: twJoin("[&_[data-pc-appearance=solid]]:transition-[background-color]", "[&_[data-pc-appearance=solid]]:duration-[250ms]", "[&_[data-pc-appearance=solid]]:ease-out", "[&_[data-slot=interactive-prompt-tail]]:transition-colors", "[&_[data-slot=interactive-prompt-tail]]:duration-[250ms]", "[&_[data-slot=interactive-prompt-tail]]:ease-out", "hover:[&_[data-pc-appearance=solid]]:[background:var(--pc-color-surface-weaker)]", "hover:[&_[data-slot=interactive-prompt-tail]]:text-[var(--pc-color-surface-weaker)]", "active:[&_[data-pc-appearance=solid]]:[background:var(--pc-color-surface-weaker)]", "active:[&_[data-slot=interactive-prompt-tail]]:text-[var(--pc-color-surface-weaker)]"),
				title: C,
				icon: /* @__PURE__ */ jsx(PaymentTypeLogo, {
					logo: x.logo,
					alt: `${T} ${re}`,
					seed: x.name,
					className: "!h-full !w-full"
				}),
				body: /* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "w-full truncate text-base font-medium leading-snug text-[var(--pc-color-text)] @sm:text-md @md:text-lg @2xl:text-xl",
						children: T
					}), /* @__PURE__ */ jsx(PaymentTypeLimitsFeeMeta, {
						limits: x.limits,
						fee: x.fee,
						extraItems: ee ? [{
							id: "bonus",
							value: ee
						}] : void 0,
						align: "left",
						rowGap: "normal"
					})]
				})
			})
		})
	});
}
function SummaryView() {
	let e = useCashierDomHooks(), { paymentStatus: t, messages: n, fields: r } = Route$1.useLoaderData(), { uiComboView: i, lockAmount: a, method: o, uiSuggestAction: s } = useContext(CashierContext), c = useFinishPayment(), { translateKey: l } = useI18n(), d = resolveDefaultRoute({
		uiComboView: i,
		lockAmount: a,
		method: o
	}), p = l("cta.back"), g = mapPaymentStatusToIconName(t), _ = resolvePaymentSummaryTheme(t);
	useBackNavigationActions({
		defaultRoute: d,
		backLabel: p,
		useHistory: !1,
		replace: !0,
		resetHistory: !0
	}), useEffect(() => {
		c();
	}, [c]), useEffect(() => () => {
		clearSummaryAccess(), clearSummaryProgressState();
	}, []);
	let y = l(t), x = n?.map((e) => l(e)).filter(Boolean), C = t ? y : void 0, ee = x?.length ? /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-1",
		children: x.map((e, t) => /* @__PURE__ */ jsx("p", {
			className: "m-0",
			children: e
		}, `${e}-${String(t)}`))
	}) : void 0, te = r ?? [], ne = normalizeStatus(t), T = !!(ne && STATUS_FAILURE.has(ne) && s.includes(CashierSuggestAction.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL));
	return /* @__PURE__ */ jsxs(SubContainer, {
		id: e.id("route-summary"),
		className: e.className("route-summary"),
		contentClassName: twJoin(e.className("route-summary-content"), ENTRANCE_ANIMATION_SURFACE_CLASSNAME),
		stickyHeader: !0,
		header: /* @__PURE__ */ jsx(StatusHeader, {
			title: C,
			subtitle: ee,
			theme: _,
			leading: /* @__PURE__ */ jsx(Icon, {
				className: STATUS_HEADER_VISUAL_CLASS_NAME,
				name: g,
				backgroundColor: "var(--pc-color-surface)",
				foregroundColor: "var(--pc-color-text)"
			})
		}),
		children: [T && /* @__PURE__ */ jsx(SuggestedPaymentTypePanel, { summaryFields: te }), /* @__PURE__ */ jsx(PaymentSummaryDetails, {
			summaryFields: te,
			animationDirection: "forward",
			animationStyleOptions: SUMMARY_ANIMATION_STYLE_OPTIONS
		})]
	});
}
//#endregion
//#region src/routes/pt/$id.tsx
var INTERACTIVE_PROMPT_ROUTE_HEADER_GUTTER_CLASSNAME = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", INTERACTIVE_PROMPT_ROUTE_CONTENT_SPACING_CLASSNAME = "pt-2 @md:pt-3", isTopPaymentTypeNotification = (e) => e?.orientation === "top", Route = createFileRoute("/pt/$id")({ component: PaymentTypeView }), PAYMENT_TYPE_SUMMARY_ANIMATION_STYLE_OPTIONS = {
	baseDelayMs: 80,
	maxAdditionalDelayMs: 180,
	distribution: "linear"
};
function PaymentTypeView() {
	let e = useCashierDomHooks(), { id: t } = useParams({ strict: !1 }), { getPaymentType: n } = usePaymentTypes(), { translateKey: r } = useI18n(), [i, a] = useState(null), [o, s] = useState({
		isComplete: !1,
		errorMessage: null
	}), { uiComboView: c, lockAmount: l, uiInteractivePrompts: d, method: p, currency: g, selectedBonusCode: _, resetFlowOnBack: y, initialAmount: x, user: C, uiShowFees: ee, paymentFormDraft: te, comboViewFormDraft: ne, setCashierState: T } = useContext(CashierContext), { currencyFormatter: re, formatCurrencyValue: ie } = useCashierValueFormatter(), { interactivePromptContent: ae, pendingWithdrawalDrawer: oe, attachSuccessFooter: se } = usePendingWithdrawalCancellation(), ce = useMemo(() => createFeeCurrencyFormatter(re), [re]), le = !isComboViewEntryEnabled({
		uiComboView: c,
		lockAmount: l
	}), ue = le ? ae : null, de = le ? oe : null, { bonuses: fe } = useBonuses(), { handleBack: pe } = useBackNavigation({
		defaultRoute: resolveDefaultRoute({
			uiComboView: c,
			lockAmount: l,
			method: p
		}),
		useHistory: !y,
		replace: y || !c
	}), [me, he] = useState(!1), ge = !!i?.submit.loading, [_e, ve] = useState(!1);
	useNavigationItems("bottom", useMemo(() => {
		let e = i?.submit, t = !!e?.loading, n = r("cta.back"), a = r(p === CashierMethods.PAYOUT ? "cta.payout" : "cta.payin"), o = [/* @__PURE__ */ jsx(Button, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: t,
			onClick: pe,
			label: n
		}, "cashier-nav-back")];
		return e?.visible && o.push(/* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			disabled: e.disabled || t,
			loading: e.loading,
			onClick: e.onClick,
			label: a
		}, "cashier-nav-submit")), o;
	}, [
		i,
		pe,
		p,
		r
	])), useEffect(() => () => {
		a(null);
	}, [a]);
	let ye = _ ? fe.find((e) => e.code === _) ?? null : null, be = t, xe = be ? n(be) : null, { name: Se, logo: Ce, limits: we, fee: Te } = xe ?? {}, Ee = xe?.fields ?? [], De = xe?.hfFields ?? [], Oe = Se ?? be, ke = xe ? formatCardAccountLabel(xe) : null, Ae = xe?.notifications ?? [], je = Ae.filter(isTopPaymentTypeNotification), Me = Ae.filter((e) => !isTopPaymentTypeNotification(e)), Ne = je.length > 0, Pe = Me.length > 0, Fe = Ee.some((e) => e.id === "amount"), Ie = Fe ? x : "", Le = !!(be && ne && isMatchingPaymentFormDraft(ne, {
		paymentTypeName: be,
		method: p,
		amount: Ie
	})), Re = !!(be && te && isMatchingPaymentFormDraft(te, {
		paymentTypeName: be,
		method: p,
		amount: Ie
	})), ze = c || l || Le, Be = getPayoutAmountMaxBoundary(p, C, Te), Ve = getAmountLimitStatus(x, we, { maxBoundary: Be }), He = Ee.some((e) => e.id && e.id !== "amount"), Ue = !!(ze && xe && (!Fe || hasAmountValue(x) && !Ve.isOutOfRange && !Ve.isIncomplete) && (Le || De.length === 0 && !He)), We = Ue || ge && _e, Ge = useCallback((e) => {
		a(e), ve((t) => e.submit.loading && t || Ue);
	}, [
		Ue,
		a,
		ve
	]), Ke = (() => {
		if (!ze || !Fe || !hasAmountValue(x)) return [];
		let e = Ee.find((e) => e.id === "amount"), t = e?.label ?? e?.id ?? "field.amount.label";
		return [{
			id: e?.id ?? "amount",
			label: t,
			value: x
		}];
	})(), qe = We ? "confirm" : "form", Je = (() => {
		if (Le) return ne?.values;
		if (Re) return te?.values;
	})(), Ye = Ke.length > 0, Xe = Ye && !We, Ze = (e) => {
		if (!be) return;
		let t = {
			paymentTypeName: be,
			method: p,
			amount: Ie,
			values: Fe ? {
				...e.values,
				amount: Ie
			} : e.values,
			hasHostedFields: e.hasHostedFields
		};
		T((e) => arePaymentFormDraftsEqual(e.paymentFormDraft, t) ? e : {
			...e,
			paymentFormDraft: t
		});
	}, Qe = canEditPaymentFormAmount({
		renderMode: qe,
		hideAmountField: Xe,
		lockAmount: l,
		fields: Ee
	}), $e = getWithdrawalSummaryFields(p, g, C, {
		amount: x,
		fee: Te,
		includeBalanceRows: Qe,
		includeRemainingBalance: Qe || Ye
	}), et = ee ? getCalculatedFeeSummaryField(Te, parseAmountValue(x) ?? 0, {
		feeCurrencyFormatter: ce,
		formatCurrencyValue: ie
	}) : null, rt = p === CashierMethods.PAYOUT ? getCalculatedPayoutTotalSummaryField(Te, parseAmountValue(x) ?? 0, g) : null, it = p === CashierMethods.PAYIN && ee ? getCalculatedPayinTotalSummaryField(Te, parseAmountValue(x) ?? 0, g) : null, ot = p === CashierMethods.PAYOUT ? insertSummaryFieldsBeforeRemainingBalance($e, [et, rt]) : $e, ct = p === CashierMethods.PAYIN ? [et, it].filter((e) => e !== null) : [], lt = Be !== null && Ve.value !== null && Ve.value > Be ? { "withdrawable-balance": "danger" } : {}, ut = Ye ? [
		...Ke,
		...ct,
		...ot
	] : [...ot, ...ct], dt = ut.length > 0 ? ["n"] : ["n", "s"], ft = r(We ? "cta.confirm_payment" : "payment.enter_details"), pt = ye?.termsAndConditions, mt = pt ? {
		titleKey: "bonus.terms.title",
		content: /* @__PURE__ */ jsx(BonusTerms, { termsKey: pt })
	} : void 0, ht = (() => {
		let e = createPaymentDetailsPromptDescriptor({ translateKey: r });
		return {
			legacyTitle: We ? ft : e.legacyTitle,
			titleKey: We ? "cta.interactive_prompt.confirm_payment.title" : e.titleKey,
			bodyKey: We ? "cta.interactive_prompt.confirm_payment.desc" : e.bodyKey,
			icon: We ? /* @__PURE__ */ jsx(BadgeCheckIcon, {}) : e.icon
		};
	})(), gt = ht;
	o.errorMessage && (gt = {
		...ht,
		legacyTitle: o.errorMessage,
		titleKey: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ jsx(CloseIcon, {}),
		tone: "danger"
	}), !ue && le && !o.errorMessage && (gt = se(gt));
	let _t = ["border-b border-[var(--pc-color-depth-3)]", "last:border-b-0"].join(" ");
	return be ? /* @__PURE__ */ jsx(SubContainer, {
		id: e.id("route-payment-type"),
		className: e.className("route-payment-type"),
		title: d ? void 0 : ft,
		header: d ? /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3",
			children: [ue && /* @__PURE__ */ jsx(InteractivePromptHeader, {
				content: ue,
				className: INTERACTIVE_PROMPT_ROUTE_HEADER_GUTTER_CLASSNAME
			}), /* @__PURE__ */ jsx(InteractivePromptHeader, {
				content: gt,
				className: INTERACTIVE_PROMPT_ROUTE_HEADER_GUTTER_CLASSNAME
			})]
		}) : void 0,
		stickyHeader: !0,
		children: /* @__PURE__ */ jsxs("div", {
			className: twJoin(e.className("route-payment-type-content"), "flex flex-col", INTERACTIVE_PROMPT_ROUTE_CONTENT_SPACING_CLASSNAME, ENTRANCE_ANIMATION_SURFACE_CLASSNAME),
			children: [
				Ne && /* @__PURE__ */ jsx("div", {
					className: "mb-2 flex flex-col gap-2",
					children: je.map((e, t) => /* @__PURE__ */ jsx(PaymentNotificationCard, {
						notification: e,
						translateKey: r
					}, `${e.key}-${e.type}-${String(t)}`))
				}),
				/* @__PURE__ */ jsx(PaymentSummaryDetails, {
					summaryFields: ut,
					rowVariants: lt,
					flush: dt,
					className: "mb-1",
					animationStyleOptions: PAYMENT_TYPE_SUMMARY_ANIMATION_STYLE_OPTIONS,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("div", {
							className: _t,
							children: /* @__PURE__ */ jsx(PaymentTypeListItem, {
								domSlug: xe?.accountId ? `${xe.accountId}-${Oe}` : Oe,
								name: Oe,
								logo: Ce,
								limits: we,
								fee: Te,
								listStyle: CashierLayoutListType.LIST,
								showMeta: !0,
								title: ke ?? void 0,
								interactive: !1,
								embedded: !0
							})
						}), ye && /* @__PURE__ */ jsx("div", {
							className: _t,
							children: /* @__PURE__ */ jsx(PaymentTypeListItem, {
								domSlug: ye.code,
								name: ye.code,
								title: ye.title,
								description: ye.description,
								logo: ye.logo,
								listStyle: CashierLayoutListType.LIST,
								interactive: !1,
								embedded: !0,
								infoDrawer: mt
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx(PaymentForm, {
					id: t,
					onActionsChange: Ge,
					onPromptStateChange: s,
					onValuesChange: qe === "form" ? Ze : void 0,
					renderMode: qe,
					hideAmountField: Xe,
					valueOverrides: Je,
					requireDirtyBeforeSubmit: !Le && !Re
				}, t),
				Pe && /* @__PURE__ */ jsx("div", {
					className: "mt-1 mb-2 flex flex-col gap-2",
					children: Me.map((e, t) => /* @__PURE__ */ jsx(PaymentNotificationCard, {
						notification: e,
						translateKey: r
					}, `${e.key}-${e.type}-${String(t)}`))
				}),
				pt && /* @__PURE__ */ jsx(CashierDrawer, {
					isOpen: me,
					onClose: () => {
						he(!1);
					},
					title: r("bonus.terms.title"),
					children: /* @__PURE__ */ jsx("div", {
						className: "px-5 pb-5 pt-2",
						children: /* @__PURE__ */ jsx(BonusTerms, { termsKey: pt })
					})
				}),
				de
			]
		})
	}) : /* @__PURE__ */ jsx("div", { children: r("error.invalid_payment_type") });
}
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
}), QuickPaymentIndexRoute = Route$4.update({
	id: "/quick-payment/",
	path: "/quick-payment/",
	getParentRoute: () => Route$6
}), ProviderIndexRoute = Route$3.update({
	id: "/provider/",
	path: "/provider/",
	getParentRoute: () => Route$6
}), BonusIndexRoute = Route$2.update({
	id: "/bonus/",
	path: "/bonus/",
	getParentRoute: () => Route$6
}), SummaryIdRoute = Route$1.update({
	id: "/summary/$id",
	path: "/summary/$id",
	getParentRoute: () => Route$6
}), PtsMethodRoute = Route$7.update({
	id: "/pts/$method",
	path: "/pts/$method",
	getParentRoute: () => Route$6
}), rootRouteChildren = {
	IndexRoute,
	PtIdRoute: Route.update({
		id: "/pt/$id",
		path: "/pt/$id",
		getParentRoute: () => Route$6
	}),
	PtsMethodRoute,
	SummaryIdRoute,
	BonusIndexRoute,
	ProviderIndexRoute,
	QuickPaymentIndexRoute
}, routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes(), hasOwn = (e, t) => Object.prototype.hasOwnProperty.call(e, t), resolveBooleanAlias = (e, t, n, r) => hasOwn(e, t) ? !!e[t] : hasOwn(e, n) ? !!e[n] : r, COMBO_VIEW_PAYMENT_TYPES_MODES = new Set(Object.values(CashierComboViewPaymentTypesMode)), isComboViewPaymentTypesMode = (e) => typeof e == "string" && COMBO_VIEW_PAYMENT_TYPES_MODES.has(e), comboViewPaymentTypesModeToPickerFlag = (e) => e !== CashierComboViewPaymentTypesMode.NONE, resolveComboViewPaymentTypesMode = (e, t) => {
	let n = e;
	return hasOwn(n, "uiComboView__PaymentTypes") ? isComboViewPaymentTypesMode(n.uiComboView__PaymentTypes) ? n.uiComboView__PaymentTypes : t : hasOwn(n, "uiComboView__PaymentTypePicker") ? n.uiComboView__PaymentTypePicker ? CashierComboViewPaymentTypesMode.PICKER : CashierComboViewPaymentTypesMode.NONE : hasOwn(n, "uiAmountView__PaymentTypePicker") ? n.uiAmountView__PaymentTypePicker ? CashierComboViewPaymentTypesMode.PICKER : CashierComboViewPaymentTypesMode.NONE : t;
}, normaliseCashierConfig = (e) => {
	let t = resolveBooleanAlias(e, "uiComboView", "uiAmountView", defaultCashierConfig.uiComboView), n = resolveComboViewPaymentTypesMode(e, defaultCashierConfig.uiComboView__PaymentTypes), r = comboViewPaymentTypesModeToPickerFlag(n), i = resolveBooleanAlias(e, "uiComboView__PaymentForm", "uiAmountView__PaymentForm", defaultCashierConfig.uiComboView__PaymentForm);
	return {
		...defaultCashierConfig,
		...e,
		uiComboView: t,
		uiComboView__PaymentTypes: n,
		uiComboView__PaymentTypePicker: r,
		uiComboView__PaymentForm: i,
		uiAmountView: t,
		uiAmountView__PaymentTypePicker: r,
		uiAmountView__PaymentForm: i
	};
}, isFiniteNumber$1 = (e) => typeof e == "number" && Number.isFinite(e), formatBalanceValue = (e, t) => {
	let n = t(e);
	return n.length > 0 ? n : e.toString();
}, iconClassName = "h-3.5 w-3.5 shrink-0", CoinsIcon = () => /* @__PURE__ */ jsxs("svg", {
	viewBox: "0 0 20 20",
	width: "14",
	height: "14",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.4",
	className: iconClassName,
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ jsx("ellipse", {
			cx: "7.5",
			cy: "5.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ jsx("path", { d: "M3 5.5v4.2c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2V5.5" }),
		/* @__PURE__ */ jsx("ellipse", {
			cx: "12.5",
			cy: "11.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ jsx("path", { d: "M8 11.5v3.8c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2v-3.8" })
	]
});
function UserBalance({ balance: e, bonusBalance: t }) {
	let n = useCashierDomHooks(), { formatCurrencyValue: r } = useCashierValueFormatter(), { translateKey: i } = useI18n(), a = isFiniteNumber$1(e), o = isFiniteNumber$1(t), s = useMemo(() => isFiniteNumber$1(e) ? formatBalanceValue(e, r) : "", [e, r]), c = useMemo(() => isFiniteNumber$1(t) ? formatBalanceValue(t, r) : "", [t, r]), l = i("aria.user_balance"), d = i("aria.user_bonus_balance");
	if (!a && !o) return null;
	let p = a && o ? `${l}: ${s}. ${d}: ${c}` : a ? `${l}: ${s}` : `${d}: ${c}`;
	return /* @__PURE__ */ jsxs("div", {
		id: n.id("user-balance"),
		className: [
			n.className("user-balance"),
			"inline-flex shrink-0 items-center gap-3 rounded-[var(--pc-radius-full)]",
			"bg-[var(--pc-color-surface)] py-1.5 px-3",
			"text-base font-medium text-[var(--pc-color-text)]"
		].join(" "),
		"data-theme": "neutral",
		"aria-label": p,
		"data-testid": "cashier-user-balance",
		children: [a && /* @__PURE__ */ jsxs("span", {
			id: n.id("user-balance-row"),
			className: [n.className("user-balance-row"), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
			children: [/* @__PURE__ */ jsx(CoinsIcon, {}), /* @__PURE__ */ jsx("span", {
				id: n.id("user-balance-value"),
				className: n.className("user-balance-value"),
				"data-testid": "cashier-user-balance-value",
				children: s
			})]
		}), o && /* @__PURE__ */ jsxs("span", {
			id: n.id("user-bonus-balance-row"),
			className: [n.className("user-bonus-balance-row"), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
			children: [/* @__PURE__ */ jsx(PresentIcon, { className: iconClassName }), /* @__PURE__ */ jsx("span", {
				id: n.id("user-bonus-balance-value"),
				className: n.className("user-bonus-balance-value"),
				"data-testid": "cashier-user-bonus-balance",
				children: c
			})]
		})]
	});
}
//#endregion
//#region src/components/MethodSwitcher.tsx
var isFiniteNumber = (e) => typeof e == "number" && Number.isFinite(e);
function MethodSwitcher({ method: e, onSelect: t, disabled: n = !1, interactivePrompts: r = !1, showSwitcher: i = !0, showUserBalance: a = !1, user: o }) {
	let s = useCashierDomHooks(), { translateKey: c } = useI18n(), l = c("cta.choose_payment_type"), d = c("cta.payin"), p = c("cta.payout"), g = o?.balance, _ = o?.bonusBalance, y = isFiniteNumber(g), x = isFiniteNumber(_), C = y ? g : void 0, ee = x ? _ : void 0, te = a && (y || x), ne = useMemo(() => [{
		value: CashierMethods.PAYIN,
		label: /* @__PURE__ */ jsx(I18nTextSlot, { children: d })
	}, {
		value: CashierMethods.PAYOUT,
		label: /* @__PURE__ */ jsx(I18nTextSlot, { children: p })
	}], [d, p]);
	return useNavigationItems("top", useMemo(() => !i && !te ? [] : i && te ? [/* @__PURE__ */ jsxs("div", {
		id: s.id("method-switcher-top-menu"),
		className: [s.className("method-switcher-top-menu"), "flex w-full items-center justify-between gap-3 px-2.5 py-2"].join(" "),
		children: [/* @__PURE__ */ jsx("div", {
			id: s.id("method-switcher-control"),
			className: [s.className("method-switcher-control"), "min-w-0 flex-1"].join(" "),
			children: /* @__PURE__ */ jsx(Switcher, {
				options: ne,
				value: e,
				onChange: t,
				ariaLabel: l || void 0,
				disabled: n,
				size: "sm",
				className: "w-full"
			})
		}), /* @__PURE__ */ jsx("div", {
			id: s.id("method-switcher-balance"),
			className: [s.className("method-switcher-balance"), "flex shrink-0 items-center"].join(" "),
			children: /* @__PURE__ */ jsx(UserBalance, {
				balance: C,
				bonusBalance: ee
			})
		})]
	}, "cashier-top-menu")] : i ? [/* @__PURE__ */ jsx(Tabs, {
		id: s.id("method-switcher-tabs"),
		className: twJoin(s.className("method-switcher-tabs"), r && "mb-2 @md:mb-3"),
		options: ne,
		value: e,
		onChange: t,
		ariaLabel: l || void 0,
		disabled: n
	}, "cashier-method-switcher")] : te ? [/* @__PURE__ */ jsx("div", {
		id: s.id("method-switcher-balance-only"),
		className: [s.className("method-switcher-balance-only"), "flex min-h-[3.25rem] w-full items-center justify-end gap-3 px-3 py-1.5"].join(" "),
		children: /* @__PURE__ */ jsx(UserBalance, {
			balance: C,
			bonusBalance: ee
		})
	}, "cashier-user-balance")] : [], [
		n,
		s,
		r,
		e,
		t,
		C,
		ee,
		te,
		i,
		ne,
		l
	]), i || te), null;
}
//#endregion
//#region src/hooks/useCashierTheme.ts
var normalizeThemeKey = (e) => e.startsWith("--") ? e : `--${e}`, parseHexColour = (e) => {
	let t = e.trim(), n = HEX_COLOR_LONG_REGEX.exec(t);
	if (n) {
		let e = n[1];
		return {
			red: parseInt(e.slice(0, 2), 16),
			green: parseInt(e.slice(2, 4), 16),
			blue: parseInt(e.slice(4, 6), 16)
		};
	}
	let r = HEX_COLOR_SHORT_REGEX.exec(t);
	if (!r) return null;
	let [i, a, o] = r[1].split("").map((e) => parseInt(`${e}${e}`, 16));
	return {
		red: i,
		green: a,
		blue: o
	};
}, relativeLuminance = ({ red: e, green: t, blue: n }) => {
	let r = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, i = r(e), a = r(t), o = r(n);
	return .2126 * i + .7152 * a + .0722 * o;
}, contrastRatio = (e, t) => {
	let n = Math.max(e, t), r = Math.min(e, t);
	return (n + .05) / (r + .05);
}, deriveReadableTextColour = (e) => {
	let t = parseHexColour(e);
	if (!t) return null;
	let n = relativeLuminance(t);
	return contrastRatio(n, 0) >= contrastRatio(1, n) ? "#000000" : "#ffffff";
}, buildThemeVariables = (e) => {
	if (!e) return {};
	let t = {}, n = Object.entries(e);
	for (let [e, r] of n) typeof r != "string" && typeof r != "number" || (t[normalizeThemeKey(e)] = r);
	if (t["--pc-color-text"] && !t["--pc-color-neutral-text"] && (t["--pc-color-neutral-text"] = "var(--pc-color-text)"), !t["--pc-color-accent-text"]) {
		let e = t["--pc-color-secondary-text"];
		if (typeof e == "string") t["--pc-color-accent-text"] = e;
		else {
			let e = t["--pc-color-accent"] ?? t["--pc-color-secondary"];
			if (typeof e == "string") {
				let n = deriveReadableTextColour(e);
				n && (t["--pc-color-accent-text"] = n);
			}
		}
	}
	return t;
};
function useCashierTheme(e) {
	return useMemo(() => buildThemeVariables(e), [e]);
}
//#endregion
//#region src/utils/progress.ts
var CASHIER_PROGRESS_STEP_ORDER = [
	"amount",
	"paymentType",
	"bonus",
	"details",
	"provider",
	"summary"
], resolveCashierProgressCurrentStep = (e) => e.startsWith("/quick-payment") ? "amount" : e.startsWith("/pts/") ? "paymentType" : e.startsWith("/bonus") ? "bonus" : e.startsWith("/pt/") ? "details" : e.startsWith("/provider") ? "provider" : e.startsWith("/summary/") ? "summary" : null, resolveFallbackStepIndex = (e, t) => {
	if (e.length === 0 || !t) return 0;
	let n = CASHIER_PROGRESS_STEP_ORDER.indexOf(t), r = e.findIndex((e) => CASHIER_PROGRESS_STEP_ORDER.indexOf(e) > n);
	return r >= 0 ? r : e.length - 1;
}, buildCashierProgressModel = ({ pathname: e, uiComboView: t, lockAmount: n, uiComboView__PaymentTypes: r, gotoPaymentType: i, hasResolvedPaymentType: a, hasAvailableBonuses: o, hasConfiguredBonuses: s, includeProviderStep: c }) => {
	let l = resolveCashierProgressCurrentStep(e), d = [], p = isComboViewEntryEnabled({
		uiComboView: t,
		lockAmount: n
	});
	p && d.push("amount");
	let g = !!(i && a), _ = isComboViewPaymentTypesVisible(r);
	(p ? !_ && !g : !g) && d.push("paymentType"), (a ? o : s) && d.push("bonus"), d.push("details"), c && d.push("provider"), d.push("summary");
	let y = l ? d.indexOf(l) : -1, x = y >= 0 ? y : resolveFallbackStepIndex(d, l);
	return {
		steps: d,
		currentStep: d[x] ?? null,
		currentStepIndex: x,
		stepCount: d.length
	};
}, resolveSummaryPaymentId = (e) => e.startsWith("/summary/") && e.slice(9) || null, useCashierProgress = (e) => {
	let { uiComboView: t, lockAmount: n, uiComboView__PaymentTypes: r, gotoPaymentType: i, selectedPaymentType: a } = useContext(CashierContext), { bonuses: o, getBonusCountForPaymentType: s } = useBonuses(), { getPaymentType: c } = usePaymentTypes(), l = useMemo(() => resolveCashierProgressCurrentStep(e), [e]), d = useMemo(() => resolveSummaryPaymentId(e), [e]), p = l === "provider" || l === "summary" && hasSummaryProviderStep(d), g = useMemo(() => a ? c(a) : null, [c, a]), _ = !!g, y = useMemo(() => g ? s(g) > 0 : o.length > 0, [
		o.length,
		s,
		g
	]);
	return useMemo(() => buildCashierProgressModel({
		pathname: e,
		uiComboView: t,
		lockAmount: n,
		uiComboView__PaymentTypes: r,
		gotoPaymentType: i,
		hasResolvedPaymentType: _,
		hasAvailableBonuses: y,
		hasConfiguredBonuses: o.length > 0,
		includeProviderStep: p
	}), [
		o.length,
		i,
		y,
		_,
		p,
		e,
		t,
		n,
		r
	]);
};
//#endregion
//#region src/components/CashierProgressBar.tsx
function CashierProgressIndicator({ pathname: e, theme: t = null }) {
	let n = useCashierDomHooks(), r = useCashierProgress(e), i = t !== null;
	return r.stepCount <= 0 ? null : /* @__PURE__ */ jsx("div", {
		id: n.id("progress-bar"),
		"data-theme": t ?? void 0,
		className: twJoin(n.className("progress-bar"), "w-full shrink-0"),
		children: /* @__PURE__ */ jsx(LinearProgress, {
			id: n.id("progress-bar-control"),
			ariaLabel: "Payment progress",
			variant: "success",
			inheritTheme: i,
			size: "xs",
			mode: "determinate",
			showInitialFill: !1,
			stepCount: r.stepCount,
			currentStepIndex: r.currentStepIndex
		})
	});
}
function CashierProgressBar({ pathname: e, theme: t = null }) {
	let { uiProgressBar: n } = useContext(CashierContext);
	return n ? /* @__PURE__ */ jsx(CashierProgressIndicator, {
		pathname: e,
		theme: t
	}) : null;
}
//#endregion
//#region src/utils/progressBarTheme.ts
var SUMMARY_ROUTE_ID = "/summary/$id", isSummaryLoaderData = (e) => typeof e == "object" && !!e && "paymentStatus" in e, resolveCashierProgressBarTheme = ({ pathname: e, matches: t }) => {
	if (!e.startsWith("/summary/")) return null;
	let n = t.find((e) => e.routeId === SUMMARY_ROUTE_ID);
	return !n || !isSummaryLoaderData(n.loaderData) ? null : resolvePaymentSummaryTheme(n.loaderData.paymentStatus);
}, createCashierRouter = (e) => createRouter({
	routeTree,
	history: createMemoryHistory({ initialEntries: [e] }),
	defaultViewTransition: !1
}), queryClient = new QueryClient(), EMPTY_RUNTIME_OVERRIDES = {
	bonuses: void 0,
	user: void 0,
	userBalance: void 0,
	hasSelectedBonusOverride: !1,
	hasBonusesOverride: !1,
	hasUserOverride: !1,
	hasUserBalanceOverride: !1
}, applyUserBalanceOverride = (e, t, n) => {
	if (!n) return e;
	let r = {
		...e ?? {},
		...t ?? {}
	};
	return Object.keys(r).length > 0 ? r : void 0;
}, getCashierConfigKey = (e) => {
	let t = { ...e };
	return t.onInit = void 0, t.onPaymentCreated = void 0, t.onPaymentFinished = void 0, t.onPendingWithdrawalCancelled = void 0, t.onBonusToppedUp = void 0, t.onBonusSelected = void 0, t.onBonusDeselected = void 0, t.onPaymentTypeSelected = void 0, t.onPaymentTypeDeselected = void 0, t.onAccountDeleted = void 0, JSON.stringify({
		...t,
		locale: localeToString(t.locale)
	});
};
function CashierThemeScope({ children: e, portalContainer: t }) {
	let { contentNode: n } = useNavigationShell();
	return /* @__PURE__ */ jsxs(CashierThemeProvider, {
		value: { portalContainer: n },
		children: [e, /* @__PURE__ */ jsx(ToastViewport, {
			orientation: "ne",
			portalContainer: t
		})]
	});
}
function CashierThemeHost({ children: e, themeStyles: t }) {
	let { isTranslationVisible: n } = useCashierI18nStatus();
	return /* @__PURE__ */ jsx("div", {
		className: twJoin("pc-cashier__theme-host", "relative flex min-h-0 flex-col text-[var(--pc-color-text)] w-full h-full overflow-hidden"),
		style: t,
		"data-testid": "cashier-theme-host",
		"data-i18n-ready": n ? "true" : "false",
		children: e
	});
}
var Cashier = forwardRef(function(e, t) {
	let n = "config" in e ? e.config : e, r = useMemo(() => {
		let e = normaliseCashierConfig(n);
		return e.initialAmount = resolveConfiguredAmount(e.initialAmount, e.lockAmount), e.locale = resolveLocale(e.locale), e;
	}, [n]), i = getCashierConfigKey(r);
	return useEffect(() => {
		r.onInit && r.onInit(r);
	}, [r]), /* @__PURE__ */ jsx(CashierRoot, {
		cashierConfig: r,
		ref: t
	}, i);
}), CashierRoot = forwardRef(function({ cashierConfig: e }, t) {
	let [n, r] = useState(() => createCashierState(e)), [i, a] = useState(EMPTY_RUNTIME_OVERRIDES), [o, s] = useState(null), c;
	e.uiBonuses && (c = i.hasBonusesOverride ? i.bonuses : e.bonuses);
	let l = applyUserBalanceOverride(i.hasUserOverride ? i.user : e.user, i.userBalance, i.hasUserBalanceOverride), d = useMemo(() => ({
		...e,
		bonuses: c,
		user: l
	}), [
		e,
		c,
		l
	]), p = useRef(i);
	useEffect(() => {
		p.current = i;
	}, [i]);
	let { apiUrl: g } = d;
	client.setConfig({
		baseUrl: g,
		throwOnError: !0,
		parseAs: "json"
	});
	let _ = resolveInitialRoute(d), y = useMemo(() => createCashierRouter(_), [_]), [x, C] = useState(() => y.state.location.pathname), [ee, te] = useState(() => resolveCashierProgressBarTheme({
		pathname: y.state.location.pathname,
		matches: y.state.matches
	})), ne = useCallback((e) => {
		if (n.method === e) return;
		flushSync(() => {
			r((t) => ({
				...t,
				method: e,
				selectedPaymentType: d.gotoPaymentType ?? null,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null,
				hasAppliedGotoPaymentType: !1
			}));
		});
		let t = resolveInitialRoute({
			...d,
			method: e
		});
		y.navigate({
			to: t,
			replace: !0
		});
	}, [
		n.method,
		d,
		y
	]), T = useMemo(() => ({
		...d,
		...n,
		setCashierState: r
	}), [
		n,
		d,
		r
	]), re = useCashierTheme(d.uiTheme), ie = useRef(null), ae = x.startsWith("/provider"), oe = !!d.uiUserBalance, se = d.uiPaymentMethodSwitcher || oe, ce = useCallback((e) => {
		s((t) => t === e ? t : e);
	}, []);
	useEffect(() => {
		let e = y.subscribe("onResolved", () => {
			let e = y.state.location.pathname, t = resolveCashierProgressBarTheme({
				pathname: e,
				matches: y.state.matches
			});
			C((t) => t === e ? t : e), te((e) => e === t ? e : t);
		});
		return () => {
			e();
		};
	}, [y]);
	let le = useCallback(() => {
		let e = {
			...p.current,
			hasSelectedBonusOverride: !1
		};
		p.current = e, a((t) => t.hasSelectedBonusOverride ? e : t), r((e) => e.selectedBonusCode === null ? e : {
			...e,
			selectedBonusCode: null
		});
	}, [r]);
	useImperativeHandle(t, () => ({
		setBonuses: (e) => {
			let t = e !== void 0, n = {
				...p.current,
				bonuses: e,
				hasBonusesOverride: t
			};
			p.current = n, a((r) => r.hasBonusesOverride === t && r.bonuses === e ? r : n);
		},
		setUser: (e) => {
			let t = e !== void 0, n = {
				...p.current,
				user: e,
				hasUserOverride: t
			};
			p.current = n, a((r) => r.hasUserOverride === t && r.user === e ? r : n);
		},
		setUserBalance: (e) => {
			let t = e !== void 0, n = {
				...p.current,
				userBalance: e,
				hasUserBalanceOverride: t
			};
			p.current = n, a((r) => r.hasUserBalanceOverride === t && r.userBalance === e ? r : n);
		},
		setSelectedBonusCode: (t) => {
			if (t === null) {
				le();
				return;
			}
			if (!e.uiBonuses) {
				le();
				return;
			}
			let n = normalizeBonuses(p.current.hasBonusesOverride ? p.current.bonuses : e.bonuses).some((e) => e.code === t) ? t : null, i = {
				...p.current,
				hasSelectedBonusOverride: !0
			};
			p.current = i, a((e) => e.hasSelectedBonusOverride ? e : i), r((e) => (e.selectedBonusCode ?? null) === n ? e : {
				...e,
				selectedBonusCode: n
			});
		},
		clearSelectedBonus: le
	}), [
		e.bonuses,
		e.uiBonuses,
		le,
		r
	]);
	let ue = e.uiBonuses && (i.hasBonusesOverride || i.hasUserOverride || i.hasUserBalanceOverride || i.hasSelectedBonusOverride);
	return /* @__PURE__ */ jsx(CashierDomHooksProvider, {
		prefix: e.uiSelectorPrefix,
		children: /* @__PURE__ */ jsx("div", {
			ref: ce,
			className: twJoin("pc-cashier pc-cashier__root", "flex min-h-0 h-full w-full overflow-hidden [background:var(--pc-color-surface)] [container-type:size]"),
			style: re,
			"data-theme": "default",
			children: /* @__PURE__ */ jsx(PortalContainerProvider, {
				portalContainer: o,
				children: /* @__PURE__ */ jsx(CashierContext.Provider, {
					value: T,
					children: /* @__PURE__ */ jsx(QueryClientProvider, {
						client: queryClient,
						children: /* @__PURE__ */ jsx(CashierI18nProvider, { children: /* @__PURE__ */ jsx(CashierValueFormatterProvider, { children: /* @__PURE__ */ jsx(ToastProvider, { children: /* @__PURE__ */ jsx(OverridePayloadProvider, { children: /* @__PURE__ */ jsx(PaymentFormResetProvider, { children: /* @__PURE__ */ jsx(PaymentProvider, { children: /* @__PURE__ */ jsx(NavigationShellProvider, {
							themeStyles: re,
							beforeTopRail: /* @__PURE__ */ jsx(CashierProgressBar, {
								pathname: x,
								theme: ee
							}),
							children: /* @__PURE__ */ jsx(CashierThemeScope, {
								portalContainer: o,
								children: /* @__PURE__ */ jsx(CashierThemeHost, {
									themeStyles: re,
									children: /* @__PURE__ */ jsx("div", {
										className: twJoin("pc-cashier__app-shell", "flex min-h-0 flex-1"),
										children: /* @__PURE__ */ jsxs("div", {
											className: twJoin("pc-cashier__app-content", "relative flex min-h-0 flex-1 flex-col"),
											children: [se && /* @__PURE__ */ jsx(MethodSwitcher, {
												method: n.method,
												onSelect: ne,
												disabled: ae,
												interactivePrompts: d.uiInteractivePrompts,
												showSwitcher: d.uiPaymentMethodSwitcher,
												showUserBalance: oe,
												user: l
											}), /* @__PURE__ */ jsxs("div", {
												ref: ie,
												className: twJoin("pc-cashier__scroll-container", "flex min-h-0 flex-1 flex-col overflow-y-auto pc-scrollbar-hidden px-0"),
												children: [/* @__PURE__ */ jsx(RouterScrollManager, {
													router: y,
													scrollContainerRef: ie
												}), /* @__PURE__ */ jsx(InteractivePromptSessionProvider, { children: /* @__PURE__ */ jsxs(PendingWithdrawalCancellationProvider, { children: [ue && /* @__PURE__ */ jsx(RuntimeBonusSelectionBridge, {}), /* @__PURE__ */ jsx(RouterProvider, {
													router: y,
													context: {
														...d,
														...n,
														queryClient
													}
												})] }) })]
											})]
										})
									})
								})
							})
						}) }) }) }) }) }) })
					})
				})
			})
		})
	});
});
function RuntimeBonusSelectionBridge() {
	let { selectedPaymentType: e, selectedBonusCode: t } = useContext(CashierContext), { bonuses: n, getAvailableBonusesForPaymentType: r } = useBonuses(), { getPaymentType: i } = usePaymentTypes(), { clearBonusSelection: a, ensureDefaultSelection: o } = useBonusSelection(), s = useMemo(() => e ? r(i(e)) : [], [
		r,
		i,
		e
	]);
	return useEffect(() => {
		if (t) {
			if (e) {
				if (s.some((e) => e.code === t)) return;
				o(s);
				return;
			}
			n.some((e) => e.code === t) || a();
		}
	}, [
		s,
		n,
		a,
		o,
		t,
		e
	]), null;
}
function RouterScrollManager({ router: e, scrollContainerRef: t }) {
	let { contentNode: n } = useNavigationShell(), r = useRef(n), i = useRef(null);
	return useEffect(() => {
		r.current = n, i.current = t?.current ?? n ?? null;
	}, [n, t]), useEffect(() => e.subscribe("onResolved", (e) => {
		if (!e.hrefChanged || e.hashChanged && !e.pathChanged) return;
		let t = i.current;
		t && (typeof t.scrollTo == "function" ? t.scrollTo({
			top: 0,
			left: 0
		}) : (t.scrollTop = 0, t.scrollLeft = 0));
	}), [e, r]), null;
}
//#endregion
//#region ../ui/dist/index.css?inline
var dist_default = "/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-400:oklch(76.5% .177 163.223);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-900:oklch(20.8% .042 265.755);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-md:28rem;--container-xl:36rem;--container-2xl:42rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-normal:0em;--tracking-wide:.025em;--leading-tight:1.25;--leading-relaxed:1.625;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{:root{--pc-font-size-adjust:.455;--pc-font-code-size:.875rem;--hf-font-family:system-ui, sans-serif;--font-mono:ui-monospace, monospace;font-size-adjust:var(--pc-font-size-adjust);font-optical-sizing:auto;--pc-color-surface:#f5f6f5;--pc-color-text:#021715;--pc-color-primary:#e0ff7b;--pc-color-primary-text:var(--pc-color-text);--pc-color-secondary:#021715;--pc-color-secondary-text:var(--pc-color-text-inverted);--pc-color-secondary-lighter:var(--pc-color-primary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-secondary-lighter:color-mix(in srgb, var(--pc-color-primary) 14%, var(--pc-color-secondary))}}:root{--pc-color-secondary-lightest:var(--pc-color-primary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-secondary-lightest:color-mix(in srgb, var(--pc-color-primary) 25%, var(--pc-color-secondary))}}:root{--pc-color-neutral:white;--pc-color-neutral-text:var(--pc-color-text);--pc-color-success:#e0ff7b;--pc-color-success-text:oklch(from var(--pc-color-success) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-danger:oklch(80.8% .114 19.571);--pc-color-danger-text:oklch(from var(--pc-color-danger) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-warning:oklch(87.9% .169 91.605);--pc-color-warning-text:oklch(from var(--pc-color-warning) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-info:#b9cbff;--pc-color-info-text:oklch(from var(--pc-color-info) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-unknown:#c9b8ff;--pc-color-unknown-text:oklch(from var(--pc-color-unknown) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-category-0:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-0:color-mix(in oklch, var(--pc-color-unknown) 82%, var(--pc-color-neutral))}}:root{--pc-color-category-1:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-1:color-mix(in oklch, var(--pc-color-success) 90%, var(--pc-color-neutral))}}:root{--pc-color-category-2:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-2:color-mix(in oklch, var(--pc-color-info) 88%, var(--pc-color-neutral))}}:root{--pc-color-category-3:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-3:color-mix(in oklch, var(--pc-color-info) 80%, var(--pc-color-success))}}:root{--pc-color-category-4:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-4:color-mix(in oklch, var(--pc-color-warning) 92%, var(--pc-color-neutral))}}:root{--pc-color-category-5:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-5:color-mix(in oklch, var(--pc-color-danger) 72%, var(--pc-color-warning))}}:root{--pc-color-category-6:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-6:color-mix(in oklch, var(--pc-color-success) 72%, var(--pc-color-info))}}:root{--pc-color-category-7:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-7:color-mix(in oklch, var(--pc-color-info) 76%, var(--pc-color-unknown))}}:root{--pc-color-category-8:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-8:color-mix(in oklch, var(--pc-color-success) 76%, var(--pc-color-warning))}}:root{--pc-color-category-9:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-9:color-mix(in oklch, var(--pc-color-unknown) 72%, var(--pc-color-warning))}}:root{--pc-color-category-10:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-10:color-mix(in oklch, var(--pc-color-warning) 78%, var(--pc-color-success))}}:root{--pc-color-category-11:var(--pc-color-danger);--pc-color-category-12:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-12:color-mix(in oklch, var(--pc-color-warning) 52%, var(--pc-color-neutral))}}:root{--pc-color-category-13:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-13:color-mix(in oklch, var(--pc-color-info) 68%, var(--pc-color-warning))}}:root{--pc-color-category-14:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-14:color-mix(in oklch, var(--pc-color-info) 82%, var(--pc-color-neutral))}}:root{--pc-color-surface-subtle:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-surface-subtle:color-mix(in srgb, var(--pc-color-neutral) 85%, white)}}:root{--pc-color-backdrop:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-backdrop:color-mix(in srgb, var(--pc-color-secondary) 25%, transparent)}}:root{--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:root{--pc-color-text-secondary:oklch(37.2% .044 257.287);--pc-color-text-inverted:#ffffffe6;--pc-text-inverted-95:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-95:color-mix(in srgb, var(--pc-color-text-inverted) 95%, transparent)}}:root{--pc-text-inverted-90:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-90:color-mix(in srgb, var(--pc-color-text-inverted) 90%, transparent)}}:root{--pc-text-inverted-80:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-80:color-mix(in srgb, var(--pc-color-text-inverted) 80%, transparent)}}:root{--pc-text-inverted-70:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-70:color-mix(in srgb, var(--pc-color-text-inverted) 70%, transparent)}}:root{--pc-text-inverted-50:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-50:color-mix(in srgb, var(--pc-color-text-inverted) 50%, transparent)}}:root{--pc-radius-factor:1;--pc-color-transparent:transparent;--pc-color-accent:var(--pc-color-secondary);--pc-color-selection:var(--pc-color-depth-3);--pc-temp-rose-700:oklch(51.4% .222 16.935);--pc-temp-slate-400:oklch(70.4% .04 256.788);--pc-temp-slate-500:oklch(55.4% .046 257.417);--pc-temp-slate-900-60:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-temp-slate-900-60:color-mix(in srgb, var(--pc-color-secondary) 60%, transparent)}}:root{--pc-temp-input-surface:#f1f4fa;--pc-avatar-gradient-1:radial-gradient(circle at bottom, var(--pc-color-primary), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-1:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-primary) 78%, var(--pc-color-info)), color-mix(in srgb, var(--pc-color-info) 74%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-2:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-2:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 68%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-3:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-success))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-3:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 76%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-success) 66%, var(--pc-color-info)))}}:root{--pc-avatar-gradient-4:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-4:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 70%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-5:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-5:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 78%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 62%, var(--pc-color-danger)))}}:root{--pc-avatar-gradient-6:radial-gradient(circle at bottom, var(--pc-color-info), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-6:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-info) 70%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 72%, var(--pc-color-success)))}}:root{--pc-avatar-gradient-7:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-primary))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-7:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 68%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-primary) 58%, var(--pc-color-success)))}}:root{--pc-avatar-gradient-8:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-unknown))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-8:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 50%, var(--pc-color-warning)), color-mix(in srgb, var(--pc-color-unknown) 72%, var(--pc-color-primary)))}}:root{--pc-temp-amber-800:oklch(47.3% .137 46.201);--pc-temp-input-surface-focus:#e8ecf4;--pc-temp-rose-50:oklch(96.9% .015 12.422);--pc-temp-rose-200:oklch(89.2% .058 10.001)}[data-theme=neutral]{--pc-color-surface:var(--pc-color-neutral);--pc-color-text:var(--pc-color-neutral-text)}[data-theme]:not([data-theme=default]) [data-theme=neutral]{--pc-color-surface:var(--pc-color-depth-2);--pc-color-text:inherit}[data-theme=primary-tinted]{--pc-color-surface:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){[data-theme=primary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-depth-1) 90%, var(--pc-color-primary))}}[data-theme=primary-tinted]{--pc-color-text:var(--pc-color-primary)}[data-theme=secondary-tinted]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary-tinted]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary] [data-theme=secondary]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}[data-theme=primary]{--pc-color-surface:var(--pc-color-primary);--pc-color-text:var(--pc-color-primary-text)}[data-theme=secondary]{--pc-color-surface:var(--pc-color-secondary);--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=secondary]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=success]{--pc-color-surface:var(--pc-color-success);--pc-color-text:var(--pc-color-success-text)}[data-theme=danger]{--pc-color-surface:var(--pc-color-danger);--pc-color-text:var(--pc-color-danger-text)}[data-slot=credit-card-layout][data-theme=secondary] [data-theme=danger]{--pc-color-danger:inherit;--pc-color-danger-text:inherit}[data-theme=warning]{--pc-color-surface:var(--pc-color-warning);--pc-color-text:var(--pc-color-warning-text)}[data-theme=info]{--pc-color-surface:var(--pc-color-info);--pc-color-text:var(--pc-color-info-text)}[data-theme=unknown]{--pc-color-surface:var(--pc-color-unknown);--pc-color-text:var(--pc-color-unknown-text)}[data-theme=brandless-card]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, var(--pc-color-neutral))}}[data-theme=brandless-card]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=brandless-card]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #2e77bc)}}[data-theme=diners-club]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=diners-club]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0069aa)}}[data-theme=discover]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=discover]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ff6000)}}[data-theme=elo]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=elo]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #000)}}[data-theme=hiper]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hiper]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #f76e1e)}}[data-theme=hipercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hipercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #822124)}}[data-theme=jcb]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=jcb]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0b4ea2)}}[data-theme=maestro]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=maestro]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #009ddd)}}[data-theme=mastercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mastercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #eb001b)}}[data-theme=mir]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mir]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0a9f5d)}}[data-theme=unionpay]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=unionpay]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #007a9d)}}[data-theme=verve]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=verve]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ef4123)}}[data-theme=visa]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=visa]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #1a1f71)}}[data-theme][data-pc-appearance=outline]{--pc-color-text:var(--pc-color-surface)}:where(:root,[data-theme]){--pc-radius:calc(.25rem * var(--pc-radius-factor));--pc-radius-sm:var(--pc-radius);--pc-radius-md:calc(.375rem * var(--pc-radius-factor));--pc-radius-lg:calc(.5rem * var(--pc-radius-factor));--pc-radius-xl:calc(.75rem * var(--pc-radius-factor));--pc-radius-2xl:calc(1rem * var(--pc-radius-factor));--pc-radius-3xl:calc(1.5rem * var(--pc-radius-factor));--pc-radius-full:9999px;--pc-color-surface-strongest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-strongest:color-mix(in srgb, var(--pc-color-surface) 90%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-surface-weaker:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weaker:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-surface-weakest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weakest:color-mix(in srgb, var(--pc-color-surface) 85%, var(--pc-color-text) 15%)}}:where(:root,[data-theme]){--pc-color-backdrop:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-backdrop:color-mix(in srgb, color-mix(in srgb, var(--pc-color-surface) 65%, var(--pc-color-text) 35%) 70%, transparent)}}:where(:root,[data-theme]){--pc-color-depth-1:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-1:color-mix(in srgb, var(--pc-color-text) 6.5%, transparent 93.5%)}}:where(:root,[data-theme]){--pc-color-depth-2:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-2:color-mix(in srgb, var(--pc-color-depth-1) 96%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-3:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-3:color-mix(in srgb, var(--pc-color-depth-1) 93%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-4:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-4:color-mix(in srgb, var(--pc-color-depth-1) 88%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-5:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-5:color-mix(in srgb, var(--pc-color-depth-1) 50%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-text-muted:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-text-muted:color-mix(in srgb, var(--pc-color-text) 75%, transparent 25%)}}:where(:root,[data-theme]){--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weaker:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weaker:color-mix(in srgb, var(--pc-color-border) 50%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weakest:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weakest:color-mix(in srgb, var(--pc-color-border) 40%, transparent)}}.pc-theme-dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pc-color-surface:#000;--pc-color-text:var(--color-slate-200);--pc-color-secondary:var(--color-slate-300);--pc-color-secondary-text:var(--pc-color-surface);--pc-color-accent:var(--color-slate-300);--pc-color-warning:#a86e00}*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container\\/interactive-prompt{container:interactive-prompt/inline-size}.\\@container\\/preference-panel{container:preference-panel/inline-size}.\\@container{container-type:inline-size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.inset-\\[18\\%\\]{inset:18%}.-inset-x-1{inset-inline:calc(var(--spacing) * -1)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-3\\.5{top:calc(var(--spacing) * 3.5)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[-9999px\\]{top:-9999px}.top-full{top:100%}.-right-0\\.5{right:calc(var(--spacing) * -.5)}.-right-1{right:calc(var(--spacing) * -1)}.right-0{right:calc(var(--spacing) * 0)}.right-1\\.5{right:calc(var(--spacing) * 1.5)}.right-2{right:calc(var(--spacing) * 2)}.right-3{right:calc(var(--spacing) * 3)}.right-5{right:calc(var(--spacing) * 5)}.right-6{right:calc(var(--spacing) * 6)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-3{bottom:calc(var(--spacing) * 3)}.bottom-6{bottom:calc(var(--spacing) * 6)}.-left-\\[0\\.6rem\\]{left:-.6rem}.-left-\\[0\\.7rem\\]{left:-.7rem}.-left-\\[0\\.8rem\\]{left:-.8rem}.-left-\\[0\\.75rem\\]{left:-.75rem}.-left-\\[1rem\\]{left:-1rem}.left-0{left:calc(var(--spacing) * 0)}.left-0\\.5{left:calc(var(--spacing) * .5)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-\\[-9999px\\]{left:-9999px}.left-auto{left:auto}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-\\[-1\\]{z-index:-1}.z-\\[1\\]{z-index:1}.z-\\[1050\\]{z-index:1050}.z-\\[2000\\]{z-index:2000}.z-\\[2010\\]{z-index:2010}.z-\\[2200\\]{z-index:2200}.z-\\[2147483647\\]{z-index:2147483647}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.row-0{grid-row:0}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing) * 0)}.-mx-0\\.5{margin-inline:calc(var(--spacing) * -.5)}.-mx-2{margin-inline:calc(var(--spacing) * -2)}.mx-1{margin-inline:calc(var(--spacing) * 1)}.mx-auto{margin-inline:auto}.-mt-3{margin-top:calc(var(--spacing) * -3)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-auto{margin-top:auto}.-mr-3{margin-right:calc(var(--spacing) * -3)}.mr-1{margin-right:calc(var(--spacing) * 1)}.-mb-3{margin-bottom:calc(var(--spacing) * -3)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.-ml-1\\.5{margin-left:calc(var(--spacing) * -1.5)}.-ml-3{margin-left:calc(var(--spacing) * -3)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-\\[3\\.25rem\\]{margin-left:3.25rem}.ml-\\[3\\.75rem\\]{margin-left:3.75rem}.ml-\\[3rem\\]{margin-left:3rem}.ml-\\[4\\.25rem\\]{margin-left:4.25rem}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.h-0\\.5{height:calc(var(--spacing) * .5)}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-4\\.5{height:calc(var(--spacing) * 4.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-6\\.5{height:calc(var(--spacing) * 6.5)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-44{height:calc(var(--spacing) * 44)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[1\\.3125rem\\]{height:1.3125rem}.h-\\[1\\.8125rem\\]{height:1.8125rem}.h-\\[3\\.25rem\\]{height:3.25rem}.h-\\[3\\.65rem\\]{height:3.65rem}.h-\\[3\\.85rem\\]{height:3.85rem}.h-\\[4rem\\]{height:4rem}.h-\\[5rem\\]{height:5rem}.h-\\[18px\\]{height:18px}.h-\\[26px\\]{height:26px}.h-\\[34rem\\]{height:34rem}.h-\\[42\\%\\]{height:42%}.h-\\[48rem\\]{height:48rem}.h-\\[85\\%\\]{height:85%}.h-\\[calc\\(100vh-2rem\\)\\]{height:calc(100vh - 2rem)}.h-\\[calc\\(100vh-4rem\\)\\]{height:calc(100vh - 4rem)}.h-\\[min\\(80vh\\,42rem\\)\\]{height:min(80vh,42rem)}.h-\\[var\\(--pc-brand-display-mark-size\\,2rem\\)\\]{height:var(--pc-brand-display-mark-size,2rem)}.h-full{height:100%}.h-px{height:1px}.max-h-\\[calc\\(100vh-2rem\\)\\]{max-height:calc(100vh - 2rem)}.max-h-\\[calc\\(100vh-4rem\\)\\]{max-height:calc(100vh - 4rem)}.max-h-\\[min\\(56vh\\,24rem\\,100\\%\\)\\]{max-height:min(56vh,24rem,100%)}.max-h-\\[min\\(68vh\\,30rem\\,100\\%\\)\\]{max-height:min(68vh,30rem,100%)}.max-h-\\[min\\(80vh\\,36rem\\,100\\%\\)\\]{max-height:min(80vh,36rem,100%)}.max-h-\\[min\\(88vh\\,44rem\\,100\\%\\)\\]{max-height:min(88vh,44rem,100%)}.max-h-\\[min\\(92vh\\,52rem\\,100\\%\\)\\]{max-height:min(92vh,52rem,100%)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-7{min-height:calc(var(--spacing) * 7)}.min-h-32{min-height:calc(var(--spacing) * 32)}.min-h-40{min-height:calc(var(--spacing) * 40)}.min-h-48{min-height:calc(var(--spacing) * 48)}.min-h-\\[1\\.25rem\\]{min-height:1.25rem}.min-h-\\[3\\.25rem\\]{min-height:3.25rem}.min-h-\\[3rem\\]{min-height:3rem}.min-h-\\[14rem\\]{min-height:14rem}.min-h-\\[20rem\\]{min-height:20rem}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[460px\\]{min-height:460px}.min-h-\\[min\\(24vh\\,100\\%\\)\\]{min-height:min(24vh,100%)}.min-h-\\[min\\(28vh\\,100\\%\\)\\]{min-height:min(28vh,100%)}.min-h-\\[min\\(32vh\\,100\\%\\)\\]{min-height:min(32vh,100%)}.min-h-\\[min\\(36vh\\,100\\%\\)\\]{min-height:min(36vh,100%)}.min-h-\\[min\\(40vh\\,100\\%\\)\\]{min-height:min(40vh,100%)}.min-h-screen{min-height:100vh}.w-0{width:calc(var(--spacing) * 0)}.w-0\\.5{width:calc(var(--spacing) * .5)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-2\\/3{width:66.6667%}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/5{width:60%}.w-4{width:calc(var(--spacing) * 4)}.w-4\\.5{width:calc(var(--spacing) * 4.5)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-28{width:calc(var(--spacing) * 28)}.w-32{width:calc(var(--spacing) * 32)}.w-40{width:calc(var(--spacing) * 40)}.w-60{width:calc(var(--spacing) * 60)}.w-64{width:calc(var(--spacing) * 64)}.w-80{width:calc(var(--spacing) * 80)}.w-96{width:calc(var(--spacing) * 96)}.w-\\[1\\.2rem\\]{width:1.2rem}.w-\\[1\\.05rem\\]{width:1.05rem}.w-\\[1\\.7rem\\]{width:1.7rem}.w-\\[1\\.28rem\\]{width:1.28rem}.w-\\[1\\.35rem\\]{width:1.35rem}.w-\\[1\\.125rem\\]{width:1.125rem}.w-\\[1\\.3125rem\\]{width:1.3125rem}.w-\\[2\\.875rem\\]{width:2.875rem}.w-\\[3\\.75rem\\]{width:3.75rem}.w-\\[11rem\\]{width:11rem}.w-\\[18px\\]{width:18px}.w-\\[26px\\]{width:26px}.w-\\[26rem\\]{width:26rem}.w-\\[28rem\\]{width:28rem}.w-\\[36\\%\\]{width:36%}.w-\\[85\\%\\]{width:85%}.w-\\[320px\\]{width:320px}.w-\\[360px\\]{width:360px}.w-\\[420px\\]{width:420px}.w-\\[520px\\]{width:520px}.w-\\[560px\\]{width:560px}.w-\\[calc\\(100vw-1\\.5rem\\)\\]{width:calc(100vw - 1.5rem)}.w-\\[min\\(90vw\\,20rem\\)\\]{width:min(90vw,20rem)}.w-\\[min\\(90vw\\,22rem\\)\\]{width:min(90vw,22rem)}.w-\\[min\\(90vw\\,24rem\\)\\]{width:min(90vw,24rem)}.w-\\[min\\(96vw\\,40rem\\)\\]{width:min(96vw,40rem)}.w-\\[min\\(98vw\\,48rem\\)\\]{width:min(98vw,48rem)}.w-\\[min\\(100\\%\\,32rem\\)\\]{width:min(100%,32rem)}.w-\\[min\\(100\\%\\,42rem\\)\\]{width:min(100%,42rem)}.w-\\[min\\(100\\%\\,48rem\\)\\]{width:min(100%,48rem)}.w-\\[min\\(100\\%\\,960px\\)\\]{width:min(100%,960px)}.w-\\[min\\(100vw-4rem\\,72rem\\)\\]{width:min(100vw - 4rem,72rem)}.w-\\[var\\(--pc-brand-display-mark-size\\,2rem\\)\\]{width:var(--pc-brand-display-mark-size,2rem)}.w-\\[var\\(--pc-toast-progress\\)\\]{width:var(--pc-toast-progress)}.w-full{width:100%}.w-max{width:max-content}.max-w-2xl{max-width:var(--container-2xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[20rem\\]{max-width:20rem}.max-w-\\[36rem\\]{max-width:36rem}.max-w-\\[55\\%\\]{max-width:55%}.max-w-\\[60ch\\]{max-width:60ch}.max-w-\\[calc\\(100vw-1\\.5rem\\)\\]{max-width:calc(100vw - 1.5rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-\\[calc\\(100vw-16px\\)\\]{max-width:calc(100vw - 16px)}.max-w-\\[min\\(96vw\\,80rem\\)\\]{max-width:min(96vw,80rem)}.max-w-full{max-width:100%}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xl{max-width:var(--container-xl)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-4\\.5{min-width:calc(var(--spacing) * 4.5)}.min-w-\\[10ch\\]{min-width:10ch}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[14rem\\]{min-width:14rem}.min-w-\\[15rem\\]{min-width:15rem}.min-w-\\[16rem\\]{min-width:16rem}.min-w-\\[20rem\\]{min-width:20rem}.min-w-\\[22rem\\]{min-width:22rem}.min-w-\\[56rem\\]{min-width:56rem}.min-w-\\[64rem\\]{min-width:64rem}.min-w-\\[72rem\\]{min-width:72rem}.min-w-\\[90rem\\]{min-width:90rem}.min-w-\\[104rem\\]{min-width:104rem}.min-w-\\[108rem\\]{min-width:108rem}.min-w-\\[min\\(90vw\\,24rem\\)\\]{min-width:min(90vw,24rem)}.flex-1{flex:1}.flex-auto{flex:auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.\\[transform-origin\\:50\\%_92\\%\\]{transform-origin:50% 92%}.origin-center{transform-origin:50%}.-translate-x-0\\.5{--tw-translate-x:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-2{--tw-translate-x:calc(var(--spacing) * -2);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0\\.5{--tw-translate-x:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[17px\\]{--tw-translate-x:17px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[18px\\]{--tw-translate-x:18px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-0{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[min\\(22vh\\,9rem\\)\\]{--tw-translate-y:min(22vh, 9rem);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-125{--tw-scale-x:125%;--tw-scale-y:125%;--tw-scale-z:125%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-\\[0\\.985\\]{scale:.985}.-rotate-90{rotate:-90deg}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform-gpu{transform:translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[pc-linear-progress-indeterminate_1\\.4s_ease-in-out_infinite\\]{animation:1.4s ease-in-out infinite pc-linear-progress-indeterminate}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.resize-y{resize:vertical}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.appearance-auto{appearance:auto}.appearance-none{appearance:none}.\\[grid-template-columns\\:repeat\\(auto-fit\\,minmax\\(min\\(100\\%\\,12rem\\)\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[1fr_auto_1fr\\]{grid-template-columns:1fr auto 1fr}.grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\]{grid-template-columns:auto minmax(0,1fr)}.grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\]{grid-template-columns:auto minmax(0,1fr) auto}.grid-cols-\\[minmax\\(0\\,1fr\\)_fit-content\\(100\\%\\)\\]{grid-template-columns:minmax(0,1fr) fit-content(100%)}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.content-start{align-content:flex-start}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-8{gap:calc(var(--spacing) * 8)}.gap-\\[0\\.125rem\\]{gap:.125rem}.gap-\\[0\\.1875rem\\]{gap:.1875rem}.gap-\\[var\\(--pc-brand-display-gap\\,0\\.5rem\\)\\]{gap:var(--pc-brand-display-gap,.5rem)}.gap-px{gap:1px}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-1{-moz-column-gap:calc(var(--spacing) * 1);column-gap:calc(var(--spacing) * 1)}.gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.gap-y-0{row-gap:calc(var(--spacing) * 0)}.gap-y-0\\.5{row-gap:calc(var(--spacing) * .5)}.gap-y-2{row-gap:calc(var(--spacing) * 2)}.gap-y-3{row-gap:calc(var(--spacing) * 3)}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-\\[var\\(--pc-color-depth-4\\)\\]>:not(:last-child)){border-color:var(--pc-color-depth-4)}.self-center{align-self:center}.self-start{align-self:flex-start}.self-stretch{align-self:stretch}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.rounded{border-radius:.25rem}.rounded-\\[calc\\(var\\(--pc-radius\\)-1px\\)\\]{border-radius:calc(var(--pc-radius) - 1px)}.rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .2rem)}.rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.05rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .05rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .2rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.65rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .65rem)}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-\\[var\\(--pc-radius\\)\\]{border-radius:var(--pc-radius)}.rounded-\\[var\\(--pc-radius-2xl\\)\\]{border-radius:var(--pc-radius-2xl)}.rounded-\\[var\\(--pc-radius-3xl\\)\\]{border-radius:var(--pc-radius-3xl)}.rounded-\\[var\\(--pc-radius-full\\)\\]{border-radius:var(--pc-radius-full)}.rounded-\\[var\\(--pc-radius-lg\\)\\]{border-radius:var(--pc-radius-lg)}.rounded-\\[var\\(--pc-radius-md\\)\\]{border-radius:var(--pc-radius-md)}.rounded-\\[var\\(--pc-radius-sm\\)\\]{border-radius:var(--pc-radius-sm)}.rounded-\\[var\\(--pc-radius-xl\\)\\]{border-radius:var(--pc-radius-xl)}.rounded-full{border-radius:3.40282e38px}.rounded-t-\\[var\\(--pc-radius-3xl\\)\\]{border-top-left-radius:var(--pc-radius-3xl);border-top-right-radius:var(--pc-radius-3xl)}.rounded-l-\\[var\\(--pc-radius-3xl\\)\\]{border-top-left-radius:var(--pc-radius-3xl);border-bottom-left-radius:var(--pc-radius-3xl)}.rounded-l-\\[var\\(--pc-radius-full\\)\\]{border-top-left-radius:var(--pc-radius-full);border-bottom-left-radius:var(--pc-radius-full)}.rounded-r-\\[var\\(--pc-radius-3xl\\)\\]{border-top-right-radius:var(--pc-radius-3xl);border-bottom-right-radius:var(--pc-radius-3xl)}.rounded-r-\\[var\\(--pc-radius-full\\)\\]{border-top-right-radius:var(--pc-radius-full);border-bottom-right-radius:var(--pc-radius-full)}.rounded-b-\\[var\\(--pc-radius-3xl\\)\\]{border-bottom-right-radius:var(--pc-radius-3xl);border-bottom-left-radius:var(--pc-radius-3xl)}.rounded-b-\\[var\\(--pc-radius-lg\\)\\]{border-bottom-right-radius:var(--pc-radius-lg);border-bottom-left-radius:var(--pc-radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-\\[var\\(--pc-color-border\\)\\]{border-color:var(--pc-color-border)}.border-\\[var\\(--pc-color-border-weaker\\)\\]{border-color:var(--pc-color-border-weaker)}.border-\\[var\\(--pc-color-border-weakest\\)\\]{border-color:var(--pc-color-border-weakest)}.border-\\[var\\(--pc-color-depth-2\\)\\]{border-color:var(--pc-color-depth-2)}.border-\\[var\\(--pc-color-depth-3\\)\\]{border-color:var(--pc-color-depth-3)}.border-\\[var\\(--pc-color-depth-4\\)\\]{border-color:var(--pc-color-depth-4)}.border-\\[var\\(--pc-color-depth-5\\)\\]{border-color:var(--pc-color-depth-5)}.border-\\[var\\(--pc-color-surface\\)\\]{border-color:var(--pc-color-surface)}.border-\\[var\\(--pc-color-text\\)\\]{border-color:var(--pc-color-text)}.border-\\[var\\(--pc-color-transparent\\)\\]{border-color:var(--pc-color-transparent)}.border-current{border-color:currentColor}.border-t-transparent{border-top-color:#0000}.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-depth-1\\)_55\\%\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-depth-1\\)_55\\%\\,var\\(--pc-color-surface\\)\\)\\]{background-color:color-mix(in srgb,var(--pc-color-depth-1) 55%,var(--pc-color-surface))}}.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_88\\%\\,var\\(--pc-color-depth-1\\)\\)\\]{background-color:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_88\\%\\,var\\(--pc-color-depth-1\\)\\)\\]{background-color:color-mix(in srgb,var(--pc-color-surface) 88%,var(--pc-color-depth-1))}}.bg-\\[color\\:var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-\\[var\\(--pc-color-accent\\)\\]{background-color:var(--pc-color-accent)}.bg-\\[var\\(--pc-color-backdrop\\)\\]{background-color:var(--pc-color-backdrop)}.bg-\\[var\\(--pc-color-depth-1\\)\\]{background-color:var(--pc-color-depth-1)}.bg-\\[var\\(--pc-color-depth-2\\)\\]{background-color:var(--pc-color-depth-2)}.bg-\\[var\\(--pc-color-depth-5\\)\\]{background-color:var(--pc-color-depth-5)}.bg-\\[var\\(--pc-color-outline-surface\\,transparent\\)\\]{background-color:var(--pc-color-outline-surface,transparent)}.bg-\\[var\\(--pc-color-primary\\)\\]{background-color:var(--pc-color-primary)}.bg-\\[var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-\\[var\\(--pc-color-surface-weaker\\)\\]{background-color:var(--pc-color-surface-weaker)}.bg-\\[var\\(--pc-color-surface-weakest\\)\\]{background-color:var(--pc-color-surface-weakest)}.bg-\\[var\\(--pc-color-text\\)\\]{background-color:var(--pc-color-text)}.bg-black{background-color:var(--color-black)}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.bg-black\\/10{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.bg-emerald-400{background-color:var(--color-emerald-400)}.bg-inherit{background-color:inherit}.bg-slate-900{background-color:var(--color-slate-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-right{-o-object-position:right;object-position:right}.p-0{padding:calc(var(--spacing) * 0)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-3{padding:calc(var(--spacing) * 3)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-0\\.5{padding-inline:calc(var(--spacing) * .5)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-\\[3px\\]{padding-inline:3px}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-3\\.5{padding-top:calc(var(--spacing) * 3.5)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pt-5\\.5{padding-top:calc(var(--spacing) * 5.5)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pr-0{padding-right:calc(var(--spacing) * 0)}.pr-0\\.5{padding-right:calc(var(--spacing) * .5)}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-1\\.5{padding-right:calc(var(--spacing) * 1.5)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-2\\.5{padding-right:calc(var(--spacing) * 2.5)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-4{padding-right:calc(var(--spacing) * 4)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pr-12{padding-right:calc(var(--spacing) * 12)}.pr-16{padding-right:calc(var(--spacing) * 16)}.pr-24{padding-right:calc(var(--spacing) * 24)}.pr-28{padding-right:calc(var(--spacing) * 28)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-3\\.5{padding-bottom:calc(var(--spacing) * 3.5)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-8{padding-bottom:calc(var(--spacing) * 8)}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-2\\.5{padding-left:calc(var(--spacing) * 2.5)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-6{padding-left:calc(var(--spacing) * 6)}.pl-\\[0\\.9rem\\]{padding-left:.9rem}.pl-\\[0\\.45rem\\]{padding-left:.45rem}.text-center{text-align:center}.text-left{text-align:left}.align-middle{vertical-align:middle}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.6rem\\]{font-size:.6rem}.text-\\[1\\.05rem\\]{font-size:1.05rem}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[length\\:var\\(--pc-brand-display-label-size\\,1\\.5rem\\)\\]{font-size:var(--pc-brand-display-label-size,1.5rem)}.leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-6{--tw-leading:calc(var(--spacing) * 6);line-height:calc(var(--spacing) * 6)}.leading-\\[20px\\]{--tw-leading:20px;line-height:20px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.\\!font-medium{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.2em\\]{--tw-tracking:.2em;letter-spacing:.2em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-balance{text-wrap:balance}.\\[overflow-wrap\\:anywhere\\]{overflow-wrap:anywhere}.break-words{overflow-wrap:break-word}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_68\\%\\,transparent\\)\\]{color:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_68\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--pc-color-text) 68%,transparent)}}.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_70\\%\\,transparent\\)\\]{color:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_70\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--pc-color-text) 70%,transparent)}}.text-\\[var\\(--pc-color-border\\)\\]{color:var(--pc-color-border)}.text-\\[var\\(--pc-color-border-weaker\\)\\]{color:var(--pc-color-border-weaker)}.text-\\[var\\(--pc-color-danger\\)\\]{color:var(--pc-color-danger)}.text-\\[var\\(--pc-color-danger-text\\)\\]{color:var(--pc-color-danger-text)}.text-\\[var\\(--pc-color-depth-5\\)\\]{color:var(--pc-color-depth-5)}.text-\\[var\\(--pc-color-primary\\)\\]{color:var(--pc-color-primary)}.text-\\[var\\(--pc-color-primary-text\\)\\]{color:var(--pc-color-primary-text)}.text-\\[var\\(--pc-color-secondary\\)\\]{color:var(--pc-color-secondary)}.text-\\[var\\(--pc-color-surface\\)\\]{color:var(--pc-color-surface)}.text-\\[var\\(--pc-color-surface-weakest\\)\\]{color:var(--pc-color-surface-weakest)}.text-\\[var\\(--pc-color-text\\)\\]{color:var(--pc-color-text)}.text-\\[var\\(--pc-color-text-inverted\\)\\]{color:var(--pc-color-text-inverted)}.text-\\[var\\(--pc-color-text-muted\\)\\]{color:var(--pc-color-text-muted)}.text-\\[var\\(--pc-color-text-secondary\\)\\]{color:var(--pc-color-text-secondary)}.text-current{color:currentColor}.text-inherit{color:inherit}.text-neutral-500{color:var(--color-neutral-500)}.text-red-300{color:var(--color-red-300)}.text-red-600{color:var(--color-red-600)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.\\[font-variant-numeric\\:tabular-nums\\]{font-variant-numeric:tabular-nums}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.opacity-95{opacity:.95}.opacity-100{opacity:1}.mix-blend-screen{mix-blend-mode:screen}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[inset_0_0_0_0_var\\(--pc-color-transparent\\)\\]{--tw-shadow:inset 0 0 0 0 var(--tw-shadow-color,var(--pc-color-transparent));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.\\[--tw-shadow-color\\:var\\(--pc-color-backdrop\\)\\]{--tw-shadow-color:var(--pc-color-backdrop)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-0{outline-style:var(--tw-outline-style);outline-width:0}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-3{outline-style:var(--tw-outline-style);outline-width:3px}.outline-offset-2{outline-offset:2px}.outline-offset-3{outline-offset:3px}.outline-\\[var\\(--pc-color-border\\)\\]{outline-color:var(--pc-color-border)}.outline-\\[var\\(--pc-color-danger\\)\\]{outline-color:var(--pc-color-danger)}.outline-\\[var\\(--pc-color-depth-5\\)\\]{outline-color:var(--pc-color-depth-5)}.outline-\\[var\\(--pc-color-secondary\\)\\]{outline-color:var(--pc-color-secondary)}.outline-\\[var\\(--pc-color-text\\)\\]{outline-color:var(--pc-color-text)}.outline-\\[var\\(--pc-color-warning\\)\\]{outline-color:var(--pc-color-warning)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\,color\\,transform\\]{transition-property:background-color,color,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\,opacity\\]{transition-property:grid-template-rows,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[left\\,width\\]{transition-property:left,width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[opacity\\,color\\]{transition-property:opacity,color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[opacity\\,transform\\]{transition-property:opacity,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[top\\,height\\]{transition-property:top,height;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[top\\,left\\,width\\,height\\]{transition-property:top,left,width,height;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[transform\\,opacity\\]{transition-property:transform,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[translate\\,background-color\\]{transition-property:translate,background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\,transform\\]{transition-property:width,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.delay-\\[35ms\\]{transition-delay:35ms}.delay-\\[90ms\\]{transition-delay:90ms}.duration-60{--tw-duration:60ms;transition-duration:60ms}.duration-120{--tw-duration:.12s;transition-duration:.12s}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-\\[100ms\\]{--tw-duration:.1s;transition-duration:.1s}.duration-\\[120ms\\]{--tw-duration:.12s;transition-duration:.12s}.duration-\\[140ms\\]{--tw-duration:.14s;transition-duration:.14s}.duration-\\[150ms\\]{--tw-duration:.15s;transition-duration:.15s}.duration-\\[180ms\\]{--tw-duration:.18s;transition-duration:.18s}.duration-\\[220ms\\]{--tw-duration:.22s;transition-duration:.22s}.duration-\\[240ms\\]{--tw-duration:.24s;transition-duration:.24s}.duration-\\[260ms\\]{--tw-duration:.26s;transition-duration:.26s}.duration-\\[320ms\\]{--tw-duration:.32s;transition-duration:.32s}.duration-\\[360ms\\]{--tw-duration:.36s;transition-duration:.36s}.duration-\\[440ms\\]{--tw-duration:.44s;transition-duration:.44s}.duration-\\[520ms\\]{--tw-duration:.52s;transition-duration:.52s}.ease-\\[cubic-bezier\\(0\\.2\\,0\\.8\\,0\\.2\\,1\\)\\]{--tw-ease:cubic-bezier(.2,.8,.2,1);transition-timing-function:cubic-bezier(.2,.8,.2,1)}.ease-\\[cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)\\]{--tw-ease:cubic-bezier(.22,1,.36,1);transition-timing-function:cubic-bezier(.22,1,.36,1)}.ease-\\[cubic-bezier\\(0\\.38\\,0\\.62\\,0\\.2\\,1\\)\\]{--tw-ease:cubic-bezier(.38,.62,.2,1);transition-timing-function:cubic-bezier(.38,.62,.2,1)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[will-change\\:translate\\,background-color\\]{will-change:translate,background-color}.will-change-\\[opacity\\,transform\\]{will-change:opacity,transform}.will-change-\\[stroke-dashoffset\\]{will-change:stroke-dashoffset}.will-change-\\[transform\\,width\\]{will-change:transform,width}.will-change-transform{will-change:transform}.\\[contain\\:layout_paint_style\\]{contain:layout paint style}.\\[contain\\:paint\\]{contain:paint}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}.\\[--pc-autofill-surface\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_86\\%\\,\\#9ec5ff_14\\%\\)\\]{--pc-autofill-surface:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){.\\[--pc-autofill-surface\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_86\\%\\,\\#9ec5ff_14\\%\\)\\]{--pc-autofill-surface:color-mix(in srgb,var(--pc-color-surface) 86%,#9ec5ff 14%)}}.\\[--pc-section-edge-inset\\:0\\.5rem\\]{--pc-section-edge-inset:.5rem}.\\[--pc-section-edge-inset\\:0\\.25rem\\]{--pc-section-edge-inset:.25rem}.\\[--pc-section-edge-inset\\:0\\.75rem\\]{--pc-section-edge-inset:.75rem}.\\[--pc-section-edge-inset\\:0\\.375rem\\]{--pc-section-edge-inset:.375rem}.\\[--pc-section-edge-inset\\:0\\.625rem\\]{--pc-section-edge-inset:.625rem}.\\[--pc-section-edge-inset\\:0px\\]{--pc-section-edge-inset:0px}.\\[--pc-section-edge-inset\\:1\\.25rem\\]{--pc-section-edge-inset:1.25rem}.\\[--pc-section-edge-inset\\:1rem\\]{--pc-section-edge-inset:1rem}.\\[--pc-section-edge-offset\\:-0\\.5rem\\]{--pc-section-edge-offset:-.5rem}.\\[--pc-section-edge-offset\\:-0\\.25rem\\]{--pc-section-edge-offset:-.25rem}.\\[--pc-section-edge-offset\\:-0\\.75rem\\]{--pc-section-edge-offset:-.75rem}.\\[--pc-section-edge-offset\\:-0\\.375rem\\]{--pc-section-edge-offset:-.375rem}.\\[--pc-section-edge-offset\\:-0\\.625rem\\]{--pc-section-edge-offset:-.625rem}.\\[--pc-section-edge-offset\\:-1\\.25rem\\]{--pc-section-edge-offset:-1.25rem}.\\[--pc-section-edge-offset\\:-1rem\\]{--pc-section-edge-offset:-1rem}.\\[--pc-section-edge-offset\\:0px\\]{--pc-section-edge-offset:0px}.\\[backface-visibility\\:hidden\\]{backface-visibility:hidden}.\\[background\\:transparent\\]{background:0 0}.\\[background\\:var\\(--pc-color-accent\\)\\]{background:var(--pc-color-accent)}.\\[background\\:var\\(--pc-color-backdrop\\)\\]{background:var(--pc-color-backdrop)}.\\[background\\:var\\(--pc-color-depth-1\\)\\]{background:var(--pc-color-depth-1)}.\\[background\\:var\\(--pc-color-depth-2\\)\\]{background:var(--pc-color-depth-2)}.\\[background\\:var\\(--pc-color-depth-3\\)\\]{background:var(--pc-color-depth-3)}.\\[background\\:var\\(--pc-color-depth-4\\)\\]{background:var(--pc-color-depth-4)}.\\[background\\:var\\(--pc-color-neutral\\)\\]{background:var(--pc-color-neutral)}.\\[background\\:var\\(--pc-color-outline-surface\\,transparent\\)\\]{background:var(--pc-color-outline-surface,transparent)}.\\[background\\:var\\(--pc-color-primary\\)\\]{background:var(--pc-color-primary)}.\\[background\\:var\\(--pc-color-secondary\\)\\]{background:var(--pc-color-secondary)}.\\[background\\:var\\(--pc-color-surface\\)\\]{background:var(--pc-color-surface)}.\\[background\\:var\\(--pc-color-surface-weakest\\)\\]{background:var(--pc-color-surface-weakest)}.\\[background\\:var\\(--pc-color-text\\)\\]{background:var(--pc-color-text)}.\\[background\\:var\\(--pc-multiselect-chip-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-multiselect-chip-background,var(--pc-color-surface))}.\\[grid-area\\:1\\/1\\]{grid-area:1/1}.\\[scrollbar-color\\:var\\(--pc-color-depth-3\\)_transparent\\]{scrollbar-color:var(--pc-color-depth-3) transparent}.\\[scrollbar-gutter\\:stable\\]{scrollbar-gutter:stable}.\\[scrollbar-width\\:thin\\]{scrollbar-width:thin}.group-focus-within\\:rotate-180:is(:where(.group):focus-within *){rotate:180deg}@media (hover:hover){.group-hover\\:pointer-events-auto:is(:where(.group):hover *){pointer-events:auto}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:\\[background\\:var\\(--pc-color-depth-4\\)\\]:is(:where(.group):hover *){background:var(--pc-color-depth-4)}}.group-focus-visible\\:\\[background\\:var\\(--pc-color-depth-4\\)\\]:is(:where(.group):focus-visible *){background:var(--pc-color-depth-4)}.group-data-\\[stuck\\=true\\]\\:h-5:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 5)}.group-data-\\[stuck\\=true\\]\\:w-5:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 5)}.peer-focus\\:top-0\\.5:is(:where(.peer):focus~*){top:calc(var(--spacing) * .5)}.peer-focus\\:top-1:is(:where(.peer):focus~*){top:calc(var(--spacing) * 1)}.peer-focus\\:-translate-y-0:is(:where(.peer):focus~*){--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.peer-focus\\:text-base:is(:where(.peer):focus~*){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.peer-focus\\:text-sm:is(:where(.peer):focus~*){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.peer-focus\\:font-medium:is(:where(.peer):focus~*){--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.peer-focus\\:text-\\[var\\(--pc-color-text-muted\\)\\]:is(:where(.peer):focus~*){color:var(--pc-color-text-muted)}.peer-focus-visible\\:ring-2:is(:where(.peer):focus-visible~*){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.peer-focus-visible\\:ring-\\[var\\(--pc-color-depth-2\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-depth-2)}.peer-focus-visible\\:ring-\\[var\\(--pc-color-depth-3\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-depth-3)}.peer-focus-visible\\:ring-offset-2:is(:where(.peer):focus-visible~*){--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.peer-focus-visible\\:ring-offset-\\[var\\(--pc-color-surface\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-offset-color:var(--pc-color-surface)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\] ::marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\]::marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\] ::-webkit-details-marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\]::-webkit-details-marker{color:var(--pc-color-text-muted)}.placeholder\\:text-\\[var\\(--pc-color-border\\)\\]::placeholder{color:var(--pc-color-border)}.placeholder\\:text-\\[var\\(--pc-color-depth-5\\)\\]::placeholder{color:var(--pc-color-depth-5)}.before\\:pointer-events-none:before{content:var(--tw-content);pointer-events:none}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:inset-0:before{content:var(--tw-content);inset:calc(var(--spacing) * 0)}.before\\:\\[border-radius\\:inherit\\]:before{content:var(--tw-content);border-radius:inherit}.before\\:border:before{content:var(--tw-content);border-style:var(--tw-border-style);border-width:1px}.before\\:border-\\[var\\(--pc-color-surface\\)\\]:before{content:var(--tw-content);border-color:var(--pc-color-surface)}.before\\:content-\\[\\\\\\'\\\\\\'\\]:before{--tw-content:\\'\\';content:var(--tw-content)}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:inset-x-0:after{content:var(--tw-content);inset-inline:calc(var(--spacing) * 0)}.after\\:bottom-0:after{content:var(--tw-content);bottom:calc(var(--spacing) * 0)}.after\\:h-px:after{content:var(--tw-content);height:1px}.after\\:bg-\\[var\\(--pc-color-border-weakest\\)\\]:after{content:var(--tw-content);background-color:var(--pc-color-border-weakest)}.after\\:content-\\[\\\\\\'\\\\\\'\\]:after{--tw-content:\\'\\';content:var(--tw-content)}.first\\:pt-1:first-child{padding-top:calc(var(--spacing) * 1)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.last\\:pb-1:last-child{padding-bottom:calc(var(--spacing) * 1)}.focus-within\\:overflow-visible:focus-within{overflow:visible}.focus-within\\:border-\\[var\\(--pc-color-text\\)\\]:focus-within{border-color:var(--pc-color-text)}.focus-within\\:outline-2:focus-within{outline-style:var(--tw-outline-style);outline-width:2px}.focus-within\\:outline-offset-0:focus-within{outline-offset:0px}.focus-within\\:outline-\\[var\\(--pc-color-text\\)\\]:focus-within{outline-color:var(--pc-color-text)}@media (hover:hover){.hover\\:z-10:hover{z-index:10}.hover\\:border-\\[var\\(--pc-color-surface\\)\\]:hover{border-color:var(--pc-color-surface)}.hover\\:bg-\\[var\\(--pc-color-depth-1\\)\\]:hover{background-color:var(--pc-color-depth-1)}.hover\\:text-\\[var\\(--pc-color-text\\)\\]:hover{color:var(--pc-color-text)}.hover\\:shadow-\\[inset_0_0_0_2px_var\\(--pc-color-border\\)\\]:hover{--tw-shadow:inset 0 0 0 2px var(--tw-shadow-color,var(--pc-color-border));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-danger\\)_12\\%\\,transparent\\)\\]:hover{background:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-danger\\)_12\\%\\,transparent\\)\\]:hover{background:color-mix(in srgb,var(--pc-color-danger) 12%,transparent)}}.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-secondary\\)_92\\%\\,var\\(--pc-color-secondary\\)\\)\\]:hover{background:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-secondary\\)_92\\%\\,var\\(--pc-color-secondary\\)\\)\\]:hover{background:color-mix(in srgb,var(--pc-color-secondary) 92%,var(--pc-color-secondary))}}.hover\\:\\[background\\:transparent\\]:hover{background:0 0}.hover\\:\\[background\\:var\\(--pc-color-border-weakest\\)\\]:hover{background:var(--pc-color-border-weakest)}.hover\\:\\[background\\:var\\(--pc-color-depth-1\\)\\]:hover{background:var(--pc-color-depth-1)}.hover\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:hover{background:var(--pc-color-depth-2)}.hover\\:\\[background\\:var\\(--pc-color-depth-4\\)\\]:hover{background:var(--pc-color-depth-4)}.hover\\:\\[background\\:var\\(--pc-color-surface\\)\\]:hover{background:var(--pc-color-surface)}.hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover{background:var(--pc-color-surface-weaker)}.hover\\:\\[background\\:var\\(--pc-multiselect-chip-background\\,var\\(--pc-color-surface\\)\\)\\]:hover{background:var(--pc-multiselect-chip-background,var(--pc-color-surface))}.hover\\:before\\:border-\\[var\\(--pc-color-transparent\\)\\]:hover:before{content:var(--tw-content);border-color:var(--pc-color-transparent)}.hover\\:after\\:bg-\\[var\\(--pc-color-transparent\\)\\]:hover:after{content:var(--tw-content);background-color:var(--pc-color-transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus\\:\\[background\\:var\\(--pc-color-surface\\)\\]:focus{background:var(--pc-color-surface)}.focus\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:focus{background:var(--pc-color-surface-weaker)}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-\\[var\\(--pc-color-border\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-border)}.focus-visible\\:ring-\\[var\\(--pc-color-depth-2\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-depth-2)}.focus-visible\\:ring-\\[var\\(--pc-color-text\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-text)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-\\[var\\(--pc-color-surface\\)\\]:focus-visible{--tw-ring-offset-color:var(--pc-color-surface)}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-\\[var\\(--pc-color-border\\)\\]:focus-visible{outline-color:var(--pc-color-border)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.focus-visible\\:\\[background\\:transparent\\]:focus-visible{background:0 0}.focus-visible\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:focus-visible{background:var(--pc-color-depth-2)}.focus-visible\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:focus-visible{background:var(--pc-color-surface-weaker)}.active\\:text-\\[var\\(--pc-color-text\\)\\]:active{color:var(--pc-color-text)}.active\\:\\[background\\:var\\(--pc-color-depth-1\\)\\]:active{background:var(--pc-color-depth-1)}@media (hover:hover){.enabled\\:hover\\:text-\\[var\\(--pc-color-text\\)\\]:enabled:hover{color:var(--pc-color-text)}.enabled\\:hover\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:enabled:hover{background:var(--pc-color-depth-2)}.enabled\\:hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:enabled:hover{background:var(--pc-color-surface-weaker)}}.enabled\\:active\\:text-\\[var\\(--pc-color-text\\)\\]:enabled:active{color:var(--pc-color-text)}.enabled\\:active\\:\\[background\\:var\\(--pc-color-depth-3\\)\\]:enabled:active{background:var(--pc-color-depth-3)}.enabled\\:active\\:\\[background\\:var\\(--pc-color-surface-strongest\\)\\]:enabled:active{background:var(--pc-color-surface-strongest)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-\\[var\\(--pc-color-border\\)\\]:disabled{color:var(--pc-color-border)}.disabled\\:text-\\[var\\(--pc-color-text\\)\\]:disabled{color:var(--pc-color-text)}.disabled\\:text-\\[var\\(--pc-color-text-muted\\)\\]:disabled{color:var(--pc-color-text-muted)}.disabled\\:opacity-25:disabled{opacity:.25}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60:disabled{opacity:.6}.disabled\\:\\[background\\:transparent\\]:disabled{background:0 0}.disabled\\:\\[background\\:var\\(--pc-color-surface-strongest\\)\\]:disabled{background:var(--pc-color-surface-strongest)}.disabled\\:placeholder\\:text-\\[var\\(--pc-color-border\\)\\]:disabled::placeholder{color:var(--pc-color-border)}.data-\\[active\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-active=true]{color:var(--pc-color-text)}.data-\\[active\\=true\\]\\:\\[background\\:var\\(--pc-color-depth-3\\)\\][data-active=true]{background:var(--pc-color-depth-3)}.data-\\[active\\=true\\]\\:\\[background\\:var\\(--pc-color-surface-strongest\\)\\][data-active=true]{background:var(--pc-color-surface-strongest)}.data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.data-\\[disabled\\=true\\]\\:cursor-not-allowed[data-disabled=true]{cursor:not-allowed}.data-\\[focus-visible\\=true\\]\\:ring-2[data-focus-visible=true]{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.data-\\[focus-visible\\=true\\]\\:ring-\\[var\\(--pc-color-text\\)\\][data-focus-visible=true]{--tw-ring-color:var(--pc-color-text)}.data-\\[focus-visible\\=true\\]\\:outline-none[data-focus-visible=true]{--tw-outline-style:none;outline-style:none}.data-\\[loading\\=true\\]\\:pointer-events-none[data-loading=true]{pointer-events:none}.data-\\[loading\\=true\\]\\:cursor-wait[data-loading=true]{cursor:wait}.data-\\[loading\\=true\\]\\:\\[background\\:var\\(--pc-color-surface-weakest\\)\\][data-loading=true]{background:var(--pc-color-surface-weakest)}.data-\\[selected\\=true\\]\\:font-medium[data-selected=true]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.data-\\[selected\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-selected=true]{color:var(--pc-color-text)}.data-\\[selected\\=true\\]\\:\\[background\\:var\\(--pc-color-depth-1\\)\\][data-selected=true]{background:var(--pc-color-depth-1)}@media (hover:hover){.data-\\[selected\\=true\\]\\:hover\\:\\[background\\:var\\(--pc-color-depth-1\\)\\][data-selected=true]:hover{background:var(--pc-color-depth-1)}}.data-\\[selected\\=true\\]\\:active\\:\\[background\\:var\\(--pc-color-depth-1\\)\\][data-selected=true]:active{background:var(--pc-color-depth-1)}.data-\\[split-hover\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-split-hover=true]{color:var(--pc-color-text)}.data-\\[split-hover\\=true\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\][data-split-hover=true]{background:var(--pc-color-surface-weaker)}.data-\\[split-press\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-split-press=true]{color:var(--pc-color-text)}.data-\\[split-press\\=true\\]\\:\\[background\\:var\\(--pc-color-surface-strongest\\)\\][data-split-press=true]{background:var(--pc-color-surface-strongest)}.data-\\[theme\\=secondary\\]\\:\\[background\\:var\\(--pc-color-surface\\)\\][data-theme=secondary]{background:var(--pc-color-surface)}.data-\\[touch-active\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-touch-active=true]{color:var(--pc-color-text)}.data-\\[touch-active\\=true\\]\\:\\[background\\:var\\(--pc-color-depth-3\\)\\][data-touch-active=true]{background:var(--pc-color-depth-3)}.data-\\[touch-active\\=true\\]\\:\\[background\\:var\\(--pc-color-surface-strongest\\)\\][data-touch-active=true]{background:var(--pc-color-surface-strongest)}@media (prefers-reduced-motion:no-preference){.motion-safe\\:will-change-\\[background-color\\,color\\,transform\\]{will-change:background-color,color,transform}}@media (prefers-reduced-motion:reduce){.motion-reduce\\:transform-none{transform:none}.motion-reduce\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.motion-reduce\\:transition-none{transition-property:none}.motion-reduce\\:delay-0{transition-delay:0s}}@media (width>=40rem){.sm\\:right-6{right:calc(var(--spacing) * 6)}.sm\\:left-6{left:calc(var(--spacing) * 6)}.sm\\:col-auto{grid-column:auto}.sm\\:hidden{display:none}.sm\\:inline-flex{display:inline-flex}.sm\\:w-auto{width:auto}.sm\\:max-w-none{max-width:none}.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.sm\\:grid-cols-none{grid-template-columns:none}.sm\\:flex-row{flex-direction:row}.sm\\:justify-center{justify-content:center}.sm\\:gap-2{gap:calc(var(--spacing) * 2)}.sm\\:justify-self-auto{justify-self:auto}.sm\\:p-8{padding:calc(var(--spacing) * 8)}}@media (width>=48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-7{height:calc(var(--spacing) * 7)}.md\\:h-8{height:calc(var(--spacing) * 8)}.md\\:min-h-8{min-height:calc(var(--spacing) * 8)}.md\\:w-0{width:calc(var(--spacing) * 0)}.md\\:w-14{width:calc(var(--spacing) * 14)}.md\\:w-20{width:calc(var(--spacing) * 20)}.md\\:w-40{width:calc(var(--spacing) * 40)}.md\\:w-52{width:calc(var(--spacing) * 52)}.md\\:w-60{width:calc(var(--spacing) * 60)}.md\\:w-72{width:calc(var(--spacing) * 72)}.md\\:w-\\[4\\.125rem\\]{width:4.125rem}.md\\:w-\\[calc\\(10rem\\+0\\.5rem\\)\\]{width:10.5rem}.md\\:w-\\[calc\\(13rem\\+0\\.5rem\\)\\]{width:13.5rem}.md\\:w-\\[calc\\(15rem\\+0\\.5rem\\)\\]{width:15.5rem}.md\\:w-\\[calc\\(18rem\\+0\\.5rem\\)\\]{width:18.5rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-stretch{align-items:stretch}.md\\:gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.md\\:gap-y-0{row-gap:calc(var(--spacing) * 0)}.md\\:p-8{padding:calc(var(--spacing) * 8)}}@media (width>=64rem){.lg\\:sticky{position:sticky}.lg\\:top-0{top:calc(var(--spacing) * 0)}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:w-0{width:calc(var(--spacing) * 0)}.lg\\:w-14{width:calc(var(--spacing) * 14)}.lg\\:w-40{width:calc(var(--spacing) * 40)}.lg\\:w-52{width:calc(var(--spacing) * 52)}.lg\\:w-60{width:calc(var(--spacing) * 60)}.lg\\:w-72{width:calc(var(--spacing) * 72)}.lg\\:w-\\[22rem\\]{width:22rem}.lg\\:w-\\[calc\\(10rem\\+0\\.5rem\\)\\]{width:10.5rem}.lg\\:w-\\[calc\\(13rem\\+0\\.5rem\\)\\]{width:13.5rem}.lg\\:w-\\[calc\\(15rem\\+0\\.5rem\\)\\]{width:15.5rem}.lg\\:w-\\[calc\\(18rem\\+0\\.5rem\\)\\]{width:18.5rem}.lg\\:flex-1{flex:1}.lg\\:flex-shrink-0{flex-shrink:0}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:self-start{align-self:flex-start}.lg\\:p-10{padding:calc(var(--spacing) * 10)}}@media (width>=80rem){.xl\\:sticky{position:sticky}.xl\\:top-0{top:calc(var(--spacing) * 0)}.xl\\:block{display:block}.xl\\:grid{display:grid}.xl\\:hidden{display:none}.xl\\:w-\\[22rem\\]{width:22rem}.xl\\:w-\\[24rem\\]{width:24rem}.xl\\:w-\\[32rem\\]{width:32rem}.xl\\:w-\\[33vw\\]{width:33vw}.xl\\:min-w-0{min-width:calc(var(--spacing) * 0)}.xl\\:flex-1{flex:1}.xl\\:flex-shrink-0{flex-shrink:0}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(3\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(3,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(4\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(4,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(7\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(7,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(8\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(8,minmax(0,1fr))}.xl\\:grid-cols-\\[14rem_repeat\\(6\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:14rem repeat(6,minmax(0,1fr))}.xl\\:flex-row{flex-direction:row}.xl\\:items-center{align-items:center}.xl\\:items-start{align-items:flex-start}.xl\\:self-start{align-self:flex-start}}@media (width>=96rem){.\\32 xl\\:sticky{position:sticky}.\\32 xl\\:top-0{top:calc(var(--spacing) * 0)}.\\32 xl\\:block{display:block}.\\32 xl\\:hidden{display:none}.\\32 xl\\:w-\\[24rem\\]{width:24rem}.\\32 xl\\:w-\\[32rem\\]{width:32rem}.\\32 xl\\:w-\\[33vw\\]{width:33vw}.\\32 xl\\:flex-shrink-0{flex-shrink:0}.\\32 xl\\:flex-row{flex-direction:row}.\\32 xl\\:items-start{align-items:flex-start}.\\32 xl\\:self-start{align-self:flex-start}}@media (width>=110rem){.min-\\[110rem\\]\\:sticky{position:sticky}.min-\\[110rem\\]\\:top-0{top:calc(var(--spacing) * 0)}.min-\\[110rem\\]\\:block{display:block}.min-\\[110rem\\]\\:hidden{display:none}.min-\\[110rem\\]\\:w-\\[24rem\\]{width:24rem}.min-\\[110rem\\]\\:w-\\[32rem\\]{width:32rem}.min-\\[110rem\\]\\:w-\\[33vw\\]{width:33vw}.min-\\[110rem\\]\\:flex-shrink-0{flex-shrink:0}.min-\\[110rem\\]\\:flex-row{flex-direction:row}.min-\\[110rem\\]\\:items-start{align-items:flex-start}.min-\\[110rem\\]\\:self-start{align-self:flex-start}}@container interactive-prompt not (width>=32rem){.\\@max-lg\\/interactive-prompt\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}@container interactive-prompt not (width>=24rem){.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.6rem\\]{left:-.6rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.7rem\\]{left:-.7rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.9rem\\]{left:-.9rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.65rem\\]{left:-.65rem}.\\@max-sm\\/interactive-prompt\\:mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.\\@max-sm\\/interactive-prompt\\:ml-1{margin-left:calc(var(--spacing) * 1)}.\\@max-sm\\/interactive-prompt\\:ml-\\[3\\.25rem\\]{margin-left:3.25rem}.\\@max-sm\\/interactive-prompt\\:ml-\\[3\\.75rem\\]{margin-left:3.75rem}.\\@max-sm\\/interactive-prompt\\:ml-\\[3rem\\]{margin-left:3rem}.\\@max-sm\\/interactive-prompt\\:\\!h-9{height:calc(var(--spacing) * 9)!important}.\\@max-sm\\/interactive-prompt\\:\\!h-10{height:calc(var(--spacing) * 10)!important}.\\@max-sm\\/interactive-prompt\\:\\!h-12{height:calc(var(--spacing) * 12)!important}.\\@max-sm\\/interactive-prompt\\:\\!h-14{height:calc(var(--spacing) * 14)!important}.\\@max-sm\\/interactive-prompt\\:h-\\[3\\.25rem\\]{height:3.25rem}.\\@max-sm\\/interactive-prompt\\:h-\\[3\\.45rem\\]{height:3.45rem}.\\@max-sm\\/interactive-prompt\\:h-\\[3\\.65rem\\]{height:3.65rem}.\\@max-sm\\/interactive-prompt\\:h-\\[4\\.45rem\\]{height:4.45rem}.\\@max-sm\\/interactive-prompt\\:\\!w-9{width:calc(var(--spacing) * 9)!important}.\\@max-sm\\/interactive-prompt\\:\\!w-10{width:calc(var(--spacing) * 10)!important}.\\@max-sm\\/interactive-prompt\\:\\!w-12{width:calc(var(--spacing) * 12)!important}.\\@max-sm\\/interactive-prompt\\:\\!w-14{width:calc(var(--spacing) * 14)!important}.\\@max-sm\\/interactive-prompt\\:w-\\[1\\.2rem\\]{width:1.2rem}.\\@max-sm\\/interactive-prompt\\:w-\\[1\\.05rem\\]{width:1.05rem}.\\@max-sm\\/interactive-prompt\\:w-\\[1\\.5rem\\]{width:1.5rem}.\\@max-sm\\/interactive-prompt\\:w-\\[1\\.12rem\\]{width:1.12rem}.\\@max-sm\\/interactive-prompt\\:gap-0{gap:calc(var(--spacing) * 0)}.\\@max-sm\\/interactive-prompt\\:gap-0\\.5{gap:calc(var(--spacing) * .5)}.\\@max-sm\\/interactive-prompt\\:gap-1{gap:calc(var(--spacing) * 1)}.\\@max-sm\\/interactive-prompt\\:gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.\\@max-sm\\/interactive-prompt\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@max-sm\\/interactive-prompt\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@max-sm\\/interactive-prompt\\:gap-px{gap:1px}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .2rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.05rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .05rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .2rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.\\@max-sm\\/interactive-prompt\\:p-3{padding:calc(var(--spacing) * 3)}.\\@max-sm\\/interactive-prompt\\:p-3\\.5{padding:calc(var(--spacing) * 3.5)}.\\@max-sm\\/interactive-prompt\\:p-5{padding:calc(var(--spacing) * 5)}.\\@max-sm\\/interactive-prompt\\:\\!px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-1{padding-block:calc(var(--spacing) * 1)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@max-sm\\/interactive-prompt\\:pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.\\@max-sm\\/interactive-prompt\\:\\!text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.\\@max-sm\\/interactive-prompt\\:\\!text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\@max-sm\\/interactive-prompt\\:\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.\\@max-sm\\/interactive-prompt\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.\\@max-sm\\/interactive-prompt\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@max-sm\\/interactive-prompt\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\@max-sm\\/interactive-prompt\\:leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.\\@max-sm\\/interactive-prompt\\:leading-6{--tw-leading:calc(var(--spacing) * 6);line-height:calc(var(--spacing) * 6)}.\\@max-sm\\/interactive-prompt\\:tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.\\@max-sm\\/interactive-prompt\\:text-wrap{text-wrap:wrap}}@container interactive-prompt not (width>=20rem){.\\@max-xs\\/interactive-prompt\\:\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.\\@max-xs\\/interactive-prompt\\:leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}}@container (width>=24rem){.\\@sm\\:h-12{height:calc(var(--spacing) * 12)}.\\@sm\\:w-12{width:calc(var(--spacing) * 12)}.\\@sm\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@sm\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@container (width>=28rem){.\\@md\\:h-\\[45\\%\\]{height:45%}.\\@md\\:justify-around{justify-content:space-around}.\\@md\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@md\\:p-2{padding:calc(var(--spacing) * 2)}.\\@md\\:p-2\\.5{padding:calc(var(--spacing) * 2.5)}.\\@md\\:p-3\\.5{padding:calc(var(--spacing) * 3.5)}.\\@md\\:px-5{padding-inline:calc(var(--spacing) * 5)}.\\@md\\:py-4{padding-block:calc(var(--spacing) * 4)}.\\@md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:h-8:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:w-8:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 8)}}@container (width>=32rem){.\\@lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@lg\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@lg\\:gap-5{gap:calc(var(--spacing) * 5)}.\\@lg\\:p-3\\.5{padding:calc(var(--spacing) * 3.5)}.\\@lg\\:p-6{padding:calc(var(--spacing) * 6)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:static{position:static}}@container (width>=36rem){.\\@xl\\:col-span-1{grid-column:span 1/span 1}.\\@xl\\:col-span-2{grid-column:span 2/span 2}.\\@xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@xl\\:w-16{width:calc(var(--spacing) * 16)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:grid-cols-\\[minmax\\(16rem\\,0\\.95fr\\)_minmax\\(16rem\\,1\\.05fr\\)\\]{grid-template-columns:minmax(16rem,.95fr) minmax(16rem,1.05fr)}}@container (width>=36rem){.\\@xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:items-center{align-items:center}.\\@xl\\/preference-panel\\:items-start{align-items:flex-start}.\\@xl\\/preference-panel\\:gap-x-6{-moz-column-gap:calc(var(--spacing) * 6);column-gap:calc(var(--spacing) * 6)}}@container (width>=36rem){.\\@xl\\:gap-x-6{-moz-column-gap:calc(var(--spacing) * 6);column-gap:calc(var(--spacing) * 6)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:pt-5{padding-top:calc(var(--spacing) * 5)}}@container (width>=36rem){.\\@xl\\:pt-2{padding-top:calc(var(--spacing) * 2)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:pr-0{padding-right:calc(var(--spacing) * 0)}}@container (width>=36rem){.\\@xl\\:pr-2{padding-right:calc(var(--spacing) * 2)}.\\@xl\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.\\@xl\\:pl-2{padding-left:calc(var(--spacing) * 2)}}@container (width>=40rem){.\\@\\[40rem\\]\\:block{display:block}.\\@\\[40rem\\]\\:hidden{display:none}.\\@\\[40rem\\]\\:w-60{width:calc(var(--spacing) * 60)}.\\@\\[40rem\\]\\:flex-row{flex-direction:row}}@container (width>=42rem){.\\@2xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@2xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=46rem){.\\@\\[46rem\\]\\:block{display:block}.\\@\\[46rem\\]\\:hidden{display:none}.\\@\\[46rem\\]\\:w-60{width:calc(var(--spacing) * 60)}.\\@\\[46rem\\]\\:flex-row{flex-direction:row}}@container (width>=48rem){.\\@3xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@3xl\\:w-16{width:calc(var(--spacing) * 16)}}@container (width>=64rem){.\\@5xl\\:block{display:block}.\\@5xl\\:hidden{display:none}.\\@5xl\\:flex-row{flex-direction:row}}@container (width>=80rem){.\\@7xl\\:block{display:block}.\\@7xl\\:hidden{display:none}.\\@7xl\\:flex-row{flex-direction:row}}.\\[\\&_\\[data-switcher-mode\\=full\\]\\]\\:w-full [data-switcher-mode=full]{width:100%}.\\[\\&_a\\]\\:break-words a{overflow-wrap:break-word}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_button\\:not\\(\\:disabled\\)\\]\\:cursor-pointer button:not(:disabled){cursor:pointer}.\\[\\&_code\\]\\:break-words code{overflow-wrap:break-word}.\\[\\&_h1\\]\\:mt-8 h1{margin-top:calc(var(--spacing) * 8)}.\\[\\&_h1\\]\\:break-words h1{overflow-wrap:break-word}.\\[\\&_h1\\+\\*\\]\\:mt-2 h1+*{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h1\\+h1\\]\\:mt-3 h1+h1,.\\[\\&_h1\\+h2\\]\\:mt-3 h1+h2{margin-top:calc(var(--spacing) * 3)}.\\[\\&_h1\\:first-child\\]\\:mt-0 h1:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h2\\]\\:mt-7 h2{margin-top:calc(var(--spacing) * 7)}.\\[\\&_h2\\]\\:break-words h2{overflow-wrap:break-word}.\\[\\&_h2\\+\\*\\]\\:mt-2 h2+*{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h2\\+h2\\]\\:mt-3 h2+h2,.\\[\\&_h2\\+h3\\]\\:mt-3 h2+h3{margin-top:calc(var(--spacing) * 3)}.\\[\\&_h2\\:first-child\\]\\:mt-0 h2:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h3\\]\\:mt-5 h3{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h3\\]\\:break-words h3{overflow-wrap:break-word}.\\[\\&_h3\\+\\*\\]\\:mt-2 h3+*,.\\[\\&_h3\\+h3\\]\\:mt-2 h3+h3,.\\[\\&_h3\\+h4\\]\\:mt-2 h3+h4{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h3\\+p\\]\\:mt-1\\.5 h3+p{margin-top:calc(var(--spacing) * 1.5)}.\\[\\&_h3\\:first-child\\]\\:mt-0 h3:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h4\\]\\:mt-5 h4{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h4\\]\\:break-words h4{overflow-wrap:break-word}.\\[\\&_h4\\+\\*\\]\\:mt-2 h4+*,.\\[\\&_h4\\+h4\\]\\:mt-2 h4+h4,.\\[\\&_h4\\+h5\\]\\:mt-2 h4+h5{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h4\\:first-child\\]\\:mt-0 h4:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h5\\]\\:mt-4 h5{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h5\\]\\:break-words h5{overflow-wrap:break-word}.\\[\\&_h5\\+\\*\\]\\:mt-2 h5+*,.\\[\\&_h5\\+h5\\]\\:mt-2 h5+h5,.\\[\\&_h5\\+h6\\]\\:mt-2 h5+h6{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h5\\:first-child\\]\\:mt-0 h5:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h6\\]\\:mt-4 h6{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h6\\]\\:break-words h6{overflow-wrap:break-word}.\\[\\&_h6\\+\\*\\]\\:mt-2 h6+*,.\\[\\&_h6\\+h6\\]\\:mt-2 h6+h6{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h6\\:first-child\\]\\:mt-0 h6:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_img\\]\\:h-full img{height:100%}.\\[\\&_img\\]\\:w-full img{width:100%}.\\[\\&_img\\]\\:object-contain img{-o-object-fit:contain;object-fit:contain}.\\[\\&_li\\]\\:break-words li{overflow-wrap:break-word}.\\[\\&_ol\\+p\\]\\:mt-2 ol+p,.\\[\\&_ol\\+pre\\]\\:mt-2 ol+pre{margin-top:calc(var(--spacing) * 2)}.\\[\\&_p\\]\\:break-words p{overflow-wrap:break-word}.\\[\\&_p\\+ol\\]\\:mt-2 p+ol,.\\[\\&_p\\+p\\]\\:mt-2 p+p,.\\[\\&_p\\+pre\\]\\:mt-2 p+pre,.\\[\\&_p\\+table\\]\\:mt-2 p+table,.\\[\\&_p\\+ul\\]\\:mt-2 p+ul,.\\[\\&_pre\\+ol\\]\\:mt-2 pre+ol,.\\[\\&_pre\\+p\\]\\:mt-2 pre+p,.\\[\\&_pre\\+ul\\]\\:mt-2 pre+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&_svg\\]\\:block svg{display:block}.\\[\\&_svg\\]\\:h-3 svg{height:calc(var(--spacing) * 3)}.\\[\\&_svg\\]\\:h-3\\.5 svg{height:calc(var(--spacing) * 3.5)}.\\[\\&_svg\\]\\:h-4 svg{height:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:h-5 svg{height:calc(var(--spacing) * 5)}.\\[\\&_svg\\]\\:h-\\[16px\\] svg{height:16px}.\\[\\&_svg\\]\\:h-\\[17px\\] svg{height:17px}.\\[\\&_svg\\]\\:h-\\[18px\\] svg{height:18px}.\\[\\&_svg\\]\\:h-full svg{height:100%}.\\[\\&_svg\\]\\:w-3 svg{width:calc(var(--spacing) * 3)}.\\[\\&_svg\\]\\:w-3\\.5 svg{width:calc(var(--spacing) * 3.5)}.\\[\\&_svg\\]\\:w-4 svg{width:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:w-5 svg{width:calc(var(--spacing) * 5)}.\\[\\&_svg\\]\\:w-\\[16px\\] svg{width:16px}.\\[\\&_svg\\]\\:w-\\[17px\\] svg{width:17px}.\\[\\&_svg\\]\\:w-\\[18px\\] svg{width:18px}.\\[\\&_svg\\]\\:w-full svg{width:100%}.\\[\\&_table\\+p\\]\\:mt-2 table+p,.\\[\\&_ul\\+p\\]\\:mt-2 ul+p,.\\[\\&_ul\\+pre\\]\\:mt-2 ul+pre{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:-internal-autofill-previewed{background-color:var(--pc-autofill-surface)}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-previewed{caret-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-autofill-surface\\)_inset\\]:-internal-autofill-previewed{box-shadow:0 0 0 1000px var(--pc-autofill-surface) inset}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-previewed{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:-internal-autofill-selected{background-color:var(--pc-autofill-surface)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{caret-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-autofill-surface\\)_inset\\]:-internal-autofill-selected{box-shadow:0 0 0 1000px var(--pc-autofill-surface) inset}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:-webkit-autofill{background-color:var(--pc-autofill-surface)}.\\[\\&\\:-webkit-autofill\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{caret-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-autofill-surface\\)_inset\\]:-webkit-autofill{box-shadow:0 0 0 1000px var(--pc-autofill-surface) inset}.\\[\\&\\:-webkit-autofill\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:hidden::-webkit-calendar-picker-indicator{display:none}.\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:appearance-none::-webkit-calendar-picker-indicator{appearance:none}.\\[\\&\\:\\:-webkit-clear-button\\]\\:hidden::-webkit-clear-button{display:none}.\\[\\&\\:\\:-webkit-inner-spin-button\\]\\:hidden::-webkit-inner-spin-button{display:none}.\\[\\&\\:\\:-webkit-inner-spin-button\\]\\:appearance-none::-webkit-inner-spin-button{appearance:none}.\\[\\&\\:\\:-webkit-outer-spin-button\\]\\:hidden::-webkit-outer-spin-button{display:none}.\\[\\&\\:\\:-webkit-outer-spin-button\\]\\:appearance-none::-webkit-outer-spin-button{appearance:none}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-\\[6px\\]::-webkit-scrollbar{height:6px}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-\\[6px\\]::-webkit-scrollbar{width:6px}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-\\[var\\(--pc-radius-full\\)\\]::-webkit-scrollbar-thumb{border-radius:var(--pc-radius-full)}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-\\[var\\(--pc-color-depth-3\\)\\]::-webkit-scrollbar-thumb{background-color:var(--pc-color-depth-3)}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-transparent::-webkit-scrollbar-track{background-color:#0000}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:hidden::-webkit-search-cancel-button{display:none}.\\[\\&\\:\\:-webkit-search-decoration\\]\\:hidden::-webkit-search-decoration{display:none}.\\[\\&\\:\\:-webkit-search-results-button\\]\\:hidden::-webkit-search-results-button{display:none}.\\[\\&\\:\\:-webkit-search-results-decoration\\]\\:hidden::-webkit-search-results-decoration{display:none}.\\[\\&\\:has\\(input\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(input:-internal-autofill-previewed){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(input\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(input:-internal-autofill-selected){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(input\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(input:-webkit-autofill){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(select\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(select:-internal-autofill-previewed){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(select\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(select:-internal-autofill-selected){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(select\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(select:-webkit-autofill){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(textarea\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(textarea:-internal-autofill-previewed){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(textarea\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(textarea:-internal-autofill-selected){background-color:var(--pc-autofill-surface)}.\\[\\&\\:has\\(textarea\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-autofill-surface\\)\\]:has(textarea:-webkit-autofill){background-color:var(--pc-autofill-surface)}@media (width>=64rem){.\\[\\&\\>\\*\\]\\:lg\\:col-span-4>*{grid-column:span 4/span 4}}.\\[\\&\\>ol\\+p\\]\\:mt-2>ol+p,.\\[\\&\\>ol\\+pre\\]\\:mt-2>ol+pre{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>option\\]\\:bg-\\[var\\(--pc-color-surface\\)\\]>option{background-color:var(--pc-color-surface)}.\\[\\&\\>option\\]\\:text-\\[var\\(--pc-color-text\\)\\]>option{color:var(--pc-color-text)}.\\[\\&\\>p\\+ol\\]\\:mt-2>p+ol,.\\[\\&\\>p\\+p\\]\\:mt-2>p+p,.\\[\\&\\>p\\+pre\\]\\:mt-2>p+pre,.\\[\\&\\>p\\+table\\]\\:mt-2>p+table,.\\[\\&\\>p\\+ul\\]\\:mt-2>p+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>p\\:first-child\\]\\:inline>p:first-child{display:inline}.\\[\\&\\>pre\\+ol\\]\\:mt-2>pre+ol,.\\[\\&\\>pre\\+p\\]\\:mt-2>pre+p,.\\[\\&\\>pre\\+ul\\]\\:mt-2>pre+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>svg\\]\\:h-full>svg{height:100%}.\\[\\&\\>svg\\]\\:w-full>svg{width:100%}.\\[\\&\\>table\\+p\\]\\:mt-2>table+p,.\\[\\&\\>ul\\+p\\]\\:mt-2>ul+p,.\\[\\&\\>ul\\+pre\\]\\:mt-2>ul+pre{margin-top:calc(var(--spacing) * 2)}.pc-accordion-item+.\\[\\.pc-accordion-item\\+\\&\\]\\:-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}}.pc-skeleton-shimmer{isolation:isolate;position:relative;overflow:hidden}.pc-skeleton-shimmer:after{content:\"\";background:linear-gradient(90deg,#0000 0%,#fff 50%,#0000 100%);width:45%;position:absolute;top:0;bottom:0;left:-55%;transform:skew(-18deg)}@supports (color:color-mix(in lab, red, red)){.pc-skeleton-shimmer:after{background:linear-gradient(90deg, transparent 0%, color-mix(in srgb, #fff 72%, var(--pc-color-surface) 28%) 50%, transparent 100%)}}.pc-skeleton-shimmer:after{opacity:.65;animation:1.2s linear infinite pc-skeleton-shimmer}@keyframes pc-skeleton-shimmer{to{left:130%}}@keyframes pc-card-brand-logo-enter{0%{opacity:0;filter:blur(4px);transform:translate(8px,2px)scale(.96)}58%{opacity:1;filter:blur();transform:translate(-1px)scale(1.01)}to{opacity:1;filter:blur();transform:translate(0)scale(1)}}@keyframes pc-card-brand-shell-shift{0%{transform:translate(0)}to{transform:translate(0)scale(1)}}@keyframes pc-card-brand-shell-shift-replay{0%{transform:translate(0)}to{transform:translate(0)scale(1)}}@keyframes pc-card-brand-sheen-enter{0%{opacity:0;transform:translate(-46%)skew(-14deg)}34%{opacity:.34}to{opacity:0;transform:translate(46%)skew(-14deg)}}@keyframes pc-card-brand-sheen-enter-replay{0%{opacity:0;transform:translate(-46%)skew(-14deg)}34%{opacity:.34}to{opacity:0;transform:translate(46%)skew(-14deg)}}.pc-card-brand-shell-shift,.pc-card-brand-shell-shift-a{transform-origin:50% 70%;animation:.76s cubic-bezier(.22,1,.36,1) both pc-card-brand-shell-shift}.pc-card-brand-shell-shift-b{transform-origin:50% 70%;animation:.76s cubic-bezier(.22,1,.36,1) both pc-card-brand-shell-shift-replay}.pc-card-brand-logo-enter{transform-origin:100%;animation:.46s cubic-bezier(.22,1,.36,1) both pc-card-brand-logo-enter}.pc-card-brand-sheen-enter,.pc-card-brand-sheen-enter-a{animation:.92s cubic-bezier(.22,1,.36,1) both pc-card-brand-sheen-enter}.pc-card-brand-sheen-enter-b{animation:.92s cubic-bezier(.22,1,.36,1) both pc-card-brand-sheen-enter-replay}@media (prefers-reduced-motion:reduce){.pc-card-brand-shell-shift,.pc-card-brand-shell-shift-a,.pc-card-brand-shell-shift-b,.pc-card-brand-logo-enter,.pc-card-brand-sheen-enter,.pc-card-brand-sheen-enter-a,.pc-card-brand-sheen-enter-b{animation:none}}@keyframes pc-linear-progress-indeterminate{0%{transform:translate(-130%)scaleX(.85)}55%{transform:translate(30%)scaleX(1)}to{transform:translate(290%)scaleX(.7)}}@keyframes pc-split-view-sidebar-open{0%{opacity:0;transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}35%{opacity:1}to{opacity:1;transform:translate(0)}}@keyframes pc-split-view-sidebar-close{0%{opacity:1;transform:translate(0)}35%{opacity:1}to{opacity:0;transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}}@keyframes pc-split-view-content-open{0%{transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}to{transform:translate(0)}}@keyframes pc-split-view-content-close{0%{transform:translate3d(var(--pc-split-view-sidebar-offset,15.5rem), 0, 0)}to{transform:translate(0)}}[data-split-view-root][data-sidebar-motion=opening] [data-split-view-sidebar-content]{backface-visibility:hidden;will-change:transform, opacity;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-sidebar-open}[data-split-view-root][data-sidebar-motion=closing] [data-split-view-sidebar-content]{backface-visibility:hidden;will-change:transform, opacity;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-sidebar-close}[data-split-view-content][data-sidebar-motion=opening]{backface-visibility:hidden;will-change:transform;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-content-open}[data-split-view-content][data-sidebar-motion=closing]{backface-visibility:hidden;will-change:transform;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-content-close}@media (prefers-reduced-motion:reduce){[data-split-view-root][data-sidebar-motion] [data-split-view-sidebar-content],[data-split-view-content][data-sidebar-motion]{opacity:1;will-change:auto;animation:none;transform:none}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@keyframes spin{to{transform:rotate(360deg)}}", global_default = "/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--spacing:.25rem;--container-md:28rem;--container-xl:36rem;--container-2xl:42rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--tracking-tight:-.025em;--leading-tight:1.25;--leading-snug:1.375;--ease-out:cubic-bezier(0, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{:root{--pc-font-size-adjust:.455;--pc-font-code-size:.875rem;--hf-font-family:system-ui, sans-serif;--font-mono:ui-monospace, monospace;font-size-adjust:var(--pc-font-size-adjust);font-optical-sizing:auto;--pc-color-surface:#f5f6f5;--pc-color-text:#021715;--pc-color-primary:#e0ff7b;--pc-color-primary-text:var(--pc-color-text);--pc-color-secondary:#021715;--pc-color-secondary-text:var(--pc-color-text-inverted);--pc-color-secondary-lighter:var(--pc-color-primary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-secondary-lighter:color-mix(in srgb, var(--pc-color-primary) 14%, var(--pc-color-secondary))}}:root{--pc-color-secondary-lightest:var(--pc-color-primary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-secondary-lightest:color-mix(in srgb, var(--pc-color-primary) 25%, var(--pc-color-secondary))}}:root{--pc-color-neutral:white;--pc-color-neutral-text:var(--pc-color-text);--pc-color-success:#e0ff7b;--pc-color-success-text:oklch(from var(--pc-color-success) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-danger:oklch(80.8% .114 19.571);--pc-color-danger-text:oklch(from var(--pc-color-danger) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-warning:oklch(87.9% .169 91.605);--pc-color-warning-text:oklch(from var(--pc-color-warning) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-info:#b9cbff;--pc-color-info-text:oklch(from var(--pc-color-info) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-unknown:#c9b8ff;--pc-color-unknown-text:oklch(from var(--pc-color-unknown) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-category-0:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-0:color-mix(in oklch, var(--pc-color-unknown) 82%, var(--pc-color-neutral))}}:root{--pc-color-category-1:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-1:color-mix(in oklch, var(--pc-color-success) 90%, var(--pc-color-neutral))}}:root{--pc-color-category-2:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-2:color-mix(in oklch, var(--pc-color-info) 88%, var(--pc-color-neutral))}}:root{--pc-color-category-3:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-3:color-mix(in oklch, var(--pc-color-info) 80%, var(--pc-color-success))}}:root{--pc-color-category-4:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-4:color-mix(in oklch, var(--pc-color-warning) 92%, var(--pc-color-neutral))}}:root{--pc-color-category-5:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-5:color-mix(in oklch, var(--pc-color-danger) 72%, var(--pc-color-warning))}}:root{--pc-color-category-6:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-6:color-mix(in oklch, var(--pc-color-success) 72%, var(--pc-color-info))}}:root{--pc-color-category-7:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-7:color-mix(in oklch, var(--pc-color-info) 76%, var(--pc-color-unknown))}}:root{--pc-color-category-8:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-8:color-mix(in oklch, var(--pc-color-success) 76%, var(--pc-color-warning))}}:root{--pc-color-category-9:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-9:color-mix(in oklch, var(--pc-color-unknown) 72%, var(--pc-color-warning))}}:root{--pc-color-category-10:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-10:color-mix(in oklch, var(--pc-color-warning) 78%, var(--pc-color-success))}}:root{--pc-color-category-11:var(--pc-color-danger);--pc-color-category-12:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-12:color-mix(in oklch, var(--pc-color-warning) 52%, var(--pc-color-neutral))}}:root{--pc-color-category-13:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-13:color-mix(in oklch, var(--pc-color-info) 68%, var(--pc-color-warning))}}:root{--pc-color-category-14:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-category-14:color-mix(in oklch, var(--pc-color-info) 82%, var(--pc-color-neutral))}}:root{--pc-color-surface-subtle:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-surface-subtle:color-mix(in srgb, var(--pc-color-neutral) 85%, white)}}:root{--pc-color-backdrop:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-backdrop:color-mix(in srgb, var(--pc-color-secondary) 25%, transparent)}}:root{--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:root{--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:root{--pc-color-text-secondary:oklch(37.2% .044 257.287);--pc-color-text-inverted:#ffffffe6;--pc-text-inverted-95:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-95:color-mix(in srgb, var(--pc-color-text-inverted) 95%, transparent)}}:root{--pc-text-inverted-90:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-90:color-mix(in srgb, var(--pc-color-text-inverted) 90%, transparent)}}:root{--pc-text-inverted-80:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-80:color-mix(in srgb, var(--pc-color-text-inverted) 80%, transparent)}}:root{--pc-text-inverted-70:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-70:color-mix(in srgb, var(--pc-color-text-inverted) 70%, transparent)}}:root{--pc-text-inverted-50:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root{--pc-text-inverted-50:color-mix(in srgb, var(--pc-color-text-inverted) 50%, transparent)}}:root{--pc-radius-factor:1;--pc-color-transparent:transparent;--pc-color-accent:var(--pc-color-secondary);--pc-color-selection:var(--pc-color-depth-3);--pc-temp-rose-700:oklch(51.4% .222 16.935);--pc-temp-slate-400:oklch(70.4% .04 256.788);--pc-temp-slate-500:oklch(55.4% .046 257.417);--pc-temp-slate-900-60:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root{--pc-temp-slate-900-60:color-mix(in srgb, var(--pc-color-secondary) 60%, transparent)}}:root{--pc-temp-input-surface:#f1f4fa;--pc-avatar-gradient-1:radial-gradient(circle at bottom, var(--pc-color-primary), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-1:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-primary) 78%, var(--pc-color-info)), color-mix(in srgb, var(--pc-color-info) 74%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-2:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-2:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 68%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-3:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-success))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-3:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 76%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-success) 66%, var(--pc-color-info)))}}:root{--pc-avatar-gradient-4:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-4:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 70%, var(--pc-color-primary)))}}:root{--pc-avatar-gradient-5:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-5:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 78%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 62%, var(--pc-color-danger)))}}:root{--pc-avatar-gradient-6:radial-gradient(circle at bottom, var(--pc-color-info), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-6:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-info) 70%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 72%, var(--pc-color-success)))}}:root{--pc-avatar-gradient-7:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-primary))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-7:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 68%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-primary) 58%, var(--pc-color-success)))}}:root{--pc-avatar-gradient-8:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-unknown))}@supports (color:color-mix(in lab, red, red)){:root{--pc-avatar-gradient-8:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 50%, var(--pc-color-warning)), color-mix(in srgb, var(--pc-color-unknown) 72%, var(--pc-color-primary)))}}:root{--pc-temp-amber-800:oklch(47.3% .137 46.201);--pc-temp-input-surface-focus:#e8ecf4;--pc-temp-rose-50:oklch(96.9% .015 12.422);--pc-temp-rose-200:oklch(89.2% .058 10.001)}[data-theme=neutral]{--pc-color-surface:var(--pc-color-neutral);--pc-color-text:var(--pc-color-neutral-text)}[data-theme]:not([data-theme=default]) [data-theme=neutral]{--pc-color-surface:var(--pc-color-depth-2);--pc-color-text:inherit}[data-theme=primary-tinted]{--pc-color-surface:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){[data-theme=primary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-depth-1) 90%, var(--pc-color-primary))}}[data-theme=primary-tinted]{--pc-color-text:var(--pc-color-primary)}[data-theme=secondary-tinted]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary-tinted]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary] [data-theme=secondary]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}[data-theme=primary]{--pc-color-surface:var(--pc-color-primary);--pc-color-text:var(--pc-color-primary-text)}[data-theme=secondary]{--pc-color-surface:var(--pc-color-secondary);--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=secondary]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=success]{--pc-color-surface:var(--pc-color-success);--pc-color-text:var(--pc-color-success-text)}[data-theme=danger]{--pc-color-surface:var(--pc-color-danger);--pc-color-text:var(--pc-color-danger-text)}[data-slot=credit-card-layout][data-theme=secondary] [data-theme=danger]{--pc-color-danger:inherit;--pc-color-danger-text:inherit}[data-theme=warning]{--pc-color-surface:var(--pc-color-warning);--pc-color-text:var(--pc-color-warning-text)}[data-theme=info]{--pc-color-surface:var(--pc-color-info);--pc-color-text:var(--pc-color-info-text)}[data-theme=unknown]{--pc-color-surface:var(--pc-color-unknown);--pc-color-text:var(--pc-color-unknown-text)}[data-theme=brandless-card]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, var(--pc-color-neutral))}}[data-theme=brandless-card]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=brandless-card]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #2e77bc)}}[data-theme=diners-club]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=diners-club]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0069aa)}}[data-theme=discover]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=discover]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ff6000)}}[data-theme=elo]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=elo]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #000)}}[data-theme=hiper]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hiper]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #f76e1e)}}[data-theme=hipercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hipercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #822124)}}[data-theme=jcb]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=jcb]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0b4ea2)}}[data-theme=maestro]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=maestro]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #009ddd)}}[data-theme=mastercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mastercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #eb001b)}}[data-theme=mir]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mir]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0a9f5d)}}[data-theme=unionpay]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=unionpay]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #007a9d)}}[data-theme=verve]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=verve]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ef4123)}}[data-theme=visa]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=visa]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #1a1f71)}}[data-theme][data-pc-appearance=outline]{--pc-color-text:var(--pc-color-surface)}:where(:root,[data-theme]){--pc-radius:calc(.25rem * var(--pc-radius-factor));--pc-radius-sm:var(--pc-radius);--pc-radius-md:calc(.375rem * var(--pc-radius-factor));--pc-radius-lg:calc(.5rem * var(--pc-radius-factor));--pc-radius-xl:calc(.75rem * var(--pc-radius-factor));--pc-radius-2xl:calc(1rem * var(--pc-radius-factor));--pc-radius-3xl:calc(1.5rem * var(--pc-radius-factor));--pc-radius-full:9999px;--pc-color-surface-strongest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-strongest:color-mix(in srgb, var(--pc-color-surface) 90%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-surface-weaker:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weaker:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-surface-weakest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weakest:color-mix(in srgb, var(--pc-color-surface) 85%, var(--pc-color-text) 15%)}}:where(:root,[data-theme]){--pc-color-backdrop:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-backdrop:color-mix(in srgb, color-mix(in srgb, var(--pc-color-surface) 65%, var(--pc-color-text) 35%) 70%, transparent)}}:where(:root,[data-theme]){--pc-color-depth-1:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-1:color-mix(in srgb, var(--pc-color-text) 6.5%, transparent 93.5%)}}:where(:root,[data-theme]){--pc-color-depth-2:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-2:color-mix(in srgb, var(--pc-color-depth-1) 96%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-3:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-3:color-mix(in srgb, var(--pc-color-depth-1) 93%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-4:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-4:color-mix(in srgb, var(--pc-color-depth-1) 88%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-5:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-5:color-mix(in srgb, var(--pc-color-depth-1) 50%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-text-muted:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-text-muted:color-mix(in srgb, var(--pc-color-text) 75%, transparent 25%)}}:where(:root,[data-theme]){--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weaker:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weaker:color-mix(in srgb, var(--pc-color-border) 50%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weakest:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weakest:color-mix(in srgb, var(--pc-color-border) 40%, transparent)}}.pc-theme-dark{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pc-color-surface:#000;--pc-color-text:var(--color-slate-200);--pc-color-secondary:var(--color-slate-300);--pc-color-secondary-text:var(--pc-color-surface);--pc-color-accent:var(--color-slate-300);--pc-color-warning:#a86e00}*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\[container-type\\:size\\]{container-type:size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.inset-\\[20\\%\\]{inset:20%}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.top-0{top:calc(var(--spacing) * 0)}.top-2{top:calc(var(--spacing) * 2)}.top-\\[-9999px\\]{top:-9999px}.top-full{top:100%}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing) * 0)}.left-\\[-9999px\\]{left:-9999px}.-z-10{z-index:calc(10 * -1)}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-60{z-index:60}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing) * 0)}.mx-1{margin-inline:calc(var(--spacing) * 1)}.mx-auto{margin-inline:auto}.-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-4\\.5{margin-bottom:calc(var(--spacing) * 4.5)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.\\!h-full{height:100%!important}.h-0{height:calc(var(--spacing) * 0)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6\\.5{height:calc(var(--spacing) * 6.5)}.h-7{height:calc(var(--spacing) * 7)}.h-9{height:calc(var(--spacing) * 9)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-24{height:calc(var(--spacing) * 24)}.h-\\[24rem\\]{height:24rem}.h-\\[70\\%\\]{height:70%}.h-\\[82\\%\\]{height:82%}.h-\\[85\\%\\]{height:85%}.h-full{height:100%}.h-px{height:1px}.max-h-\\[min\\(31rem\\,100\\%\\)\\]{max-height:min(31rem,100%)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[3\\.25rem\\]{min-height:3.25rem}.min-h-\\[11rem\\]{min-height:11rem}.min-h-full{min-height:100%}.\\!w-full{width:100%!important}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-7{width:calc(var(--spacing) * 7)}.w-9{width:calc(var(--spacing) * 9)}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-\\[3\\.75rem\\]{width:3.75rem}.w-\\[4\\.125rem\\]{width:4.125rem}.w-\\[70\\%\\]{width:70%}.w-\\[82\\%\\]{width:82%}.w-\\[85\\%\\]{width:85%}.w-full{width:100%}.w-px{width:1px}.max-w-2xl{max-width:var(--container-2xl)}.max-w-md{max-width:var(--container-md)}.max-w-xl{max-width:var(--container-xl)}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform-gpu{transform:translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-around{justify-content:space-around}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-4\\.5{gap:calc(var(--spacing) * 4.5)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.gap-y-0\\.5{row-gap:calc(var(--spacing) * .5)}.gap-y-1\\.5{row-gap:calc(var(--spacing) * 1.5)}.gap-y-2{row-gap:calc(var(--spacing) * 2)}.self-center{align-self:center}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.\\!overflow-visible{overflow:visible!important}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overscroll-y-contain{overscroll-behavior-y:contain}.rounded{border-radius:.25rem}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.rounded-\\[var\\(--pc-radius-3xl\\)\\]{border-radius:var(--pc-radius-3xl)}.rounded-\\[var\\(--pc-radius-full\\)\\]{border-radius:var(--pc-radius-full)}.rounded-\\[var\\(--pc-radius-lg\\)\\]{border-radius:var(--pc-radius-lg)}.rounded-\\[var\\(--pc-radius-md\\)\\]{border-radius:var(--pc-radius-md)}.rounded-\\[var\\(--pc-radius-xl\\)\\]{border-radius:var(--pc-radius-xl)}.rounded-t-\\[var\\(--pc-radius-2xl\\)\\]{border-top-left-radius:var(--pc-radius-2xl);border-top-right-radius:var(--pc-radius-2xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-\\[var\\(--pc-color-border\\)\\]{border-color:var(--pc-color-border)}.border-\\[var\\(--pc-color-border-weakest\\)\\]{border-color:var(--pc-color-border-weakest)}.border-\\[var\\(--pc-color-depth-3\\)\\]{border-color:var(--pc-color-depth-3)}.border-\\[var\\(--pc-color-depth-4\\)\\]{border-color:var(--pc-color-depth-4)}.bg-\\[var\\(--pc-color-outline-surface\\,transparent\\)\\]{background-color:var(--pc-color-outline-surface,transparent)}.bg-\\[var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-transparent{background-color:#0000}.object-contain{-o-object-fit:contain;object-fit:contain}.object-right{-o-object-position:right;object-position:right}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-4\\.5{padding-top:calc(var(--spacing) * 4.5)}.pr-0{padding-right:calc(var(--spacing) * 0)}.pr-1\\.5{padding-right:calc(var(--spacing) * 1.5)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-\\[0\\.9rem\\]{padding-left:.9rem}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.break-words{overflow-wrap:break-word}.wrap-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.text-\\[var\\(--pc-color-success-text\\)\\]{color:var(--pc-color-success-text)}.text-\\[var\\(--pc-color-surface\\)\\]{color:var(--pc-color-surface)}.text-\\[var\\(--pc-color-text\\)\\]{color:var(--pc-color-text)}.text-\\[var\\(--pc-color-text-muted\\)\\]{color:var(--pc-color-text-muted)}.text-inherit{color:inherit}.italic{font-style:italic}.opacity-0{opacity:0}.opacity-55{opacity:.55}.opacity-85{opacity:.85}.opacity-100{opacity:1}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-3{outline-style:var(--tw-outline-style);outline-width:3px}.outline-offset-\\[2\\.5px\\]{outline-offset:2.5px}.outline-\\[var\\(--pc-color-secondary\\)\\]{outline-color:var(--pc-color-secondary)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.\\[filter\\:saturate\\(0\\.72\\)_grayscale\\(0\\.18\\)\\]{filter:saturate(.72)grayscale(.18)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\,opacity\\]{transition-property:grid-template-rows,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-180{--tw-duration:.18s;transition-duration:.18s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-\\[250ms\\]{--tw-duration:.25s;transition-duration:.25s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.will-change-transform{will-change:transform}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[--pc-enter-final-opacity\\:0\\.55\\]{--pc-enter-final-opacity:.55}.\\[background\\:var\\(--pc-color-surface\\)\\]{background:var(--pc-color-surface)}.\\[background\\:var\\(--pc-color-surface-weakest\\)\\]{background:var(--pc-color-surface-weakest)}.\\[background\\:var\\(--pc-color-transparent\\)\\]{background:var(--pc-color-transparent)}.\\[outline-style\\:solid\\]{outline-style:solid}@media (hover:hover){.group-hover\\:opacity-80:is(:where(.group):hover *){opacity:.8}.group-hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:is(:where(.group):hover *){background:var(--pc-color-surface-weaker)}}.group-active\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:is(:where(.group):active *){background:var(--pc-color-surface-weaker)}.group-data-\\[stuck\\=true\\]\\:mt-0:is(:where(.group)[data-stuck=true] *){margin-top:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:mb-0:is(:where(.group)[data-stuck=true] *){margin-bottom:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:h-6:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:w-6:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:w-auto:is(:where(.group)[data-stuck=true] *){width:auto}.group-data-\\[stuck\\=true\\]\\:max-w-full:is(:where(.group)[data-stuck=true] *){max-width:100%}.group-data-\\[stuck\\=true\\]\\:min-w-0:is(:where(.group)[data-stuck=true] *){min-width:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:min-w-\\[10ch\\]:is(:where(.group)[data-stuck=true] *){min-width:10ch}.group-data-\\[stuck\\=true\\]\\:flex-1:is(:where(.group)[data-stuck=true] *){flex:1}.group-data-\\[stuck\\=true\\]\\:flex-none:is(:where(.group)[data-stuck=true] *){flex:none}.group-data-\\[stuck\\=true\\]\\:shrink-0:is(:where(.group)[data-stuck=true] *){flex-shrink:0}.group-data-\\[stuck\\=true\\]\\:flex-col:is(:where(.group)[data-stuck=true] *){flex-direction:column}.group-data-\\[stuck\\=true\\]\\:flex-row:is(:where(.group)[data-stuck=true] *){flex-direction:row}.group-data-\\[stuck\\=true\\]\\:flex-wrap:is(:where(.group)[data-stuck=true] *){flex-wrap:wrap}.group-data-\\[stuck\\=true\\]\\:items-center:is(:where(.group)[data-stuck=true] *){align-items:center}.group-data-\\[stuck\\=true\\]\\:items-start:is(:where(.group)[data-stuck=true] *){align-items:flex-start}.group-data-\\[stuck\\=true\\]\\:justify-between:is(:where(.group)[data-stuck=true] *){justify-content:space-between}.group-data-\\[stuck\\=true\\]\\:gap-1:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:gap-3:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 3)}.group-data-\\[stuck\\=true\\]\\:py-0:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:py-1:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pt-2:is(:where(.group)[data-stuck=true] *){padding-top:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pb-0\\.5:is(:where(.group)[data-stuck=true] *){padding-bottom:calc(var(--spacing) * .5)}.group-data-\\[stuck\\=true\\]\\:text-center:is(:where(.group)[data-stuck=true] *){text-align:center}.group-data-\\[stuck\\=true\\]\\:text-left:is(:where(.group)[data-stuck=true] *){text-align:left}.group-data-\\[stuck\\=true\\]\\:text-base:is(:where(.group)[data-stuck=true] *){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.placeholder\\:text-\\[var\\(--pc-color-border\\)\\]::placeholder{color:var(--pc-color-border)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:border-\\[var\\(--pc-color-depth-2\\)\\]:hover{border-color:var(--pc-color-depth-2)}.hover\\:text-\\[var\\(--pc-color-text\\)\\]:hover{color:var(--pc-color-text)}.hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover{background:var(--pc-color-surface-weaker)}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-\\[var\\(--pc-color-accent\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-accent)}.focus-visible\\:ring-\\[var\\(--pc-color-text\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-text)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-transparent:focus-visible{--tw-ring-offset-color:transparent}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active{background:var(--pc-color-surface-weaker)}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-55:disabled{opacity:.55}.disabled\\:opacity-60:disabled{opacity:.6}@media (width>=48rem){.md\\:h-7{height:calc(var(--spacing) * 7)}.md\\:w-\\[4\\.125rem\\]{width:4.125rem}}@container interactive-prompt not (width>=28rem){.\\@max-md\\/interactive-prompt\\:h-12{height:calc(var(--spacing) * 12)}.\\@max-md\\/interactive-prompt\\:w-12{width:calc(var(--spacing) * 12)}}@container (width>=20rem){.\\@xs\\:gap-1{gap:calc(var(--spacing) * 1)}.\\@xs\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@xs\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@container (width>=24rem){.\\@sm\\:h-12{height:calc(var(--spacing) * 12)}.\\@sm\\:min-h-\\[11\\.75rem\\]{min-height:11.75rem}.\\@sm\\:w-12{width:calc(var(--spacing) * 12)}.\\@sm\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@sm\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@sm\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@sm\\:pr-3{padding-right:calc(var(--spacing) * 3)}.\\@sm\\:pb-2{padding-bottom:calc(var(--spacing) * 2)}.\\@sm\\:pl-\\[1\\.1rem\\]{padding-left:1.1rem}.\\@sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@sm\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@container (width>=28rem){.\\@md\\:mb-3{margin-bottom:calc(var(--spacing) * 3)}.\\@md\\:h-16{height:calc(var(--spacing) * 16)}.\\@md\\:min-h-\\[12\\.5rem\\]{min-height:12.5rem}.\\@md\\:min-h-\\[14rem\\]{min-height:14rem}.\\@md\\:w-16{width:calc(var(--spacing) * 16)}.\\@md\\:justify-around{justify-content:space-around}.\\@md\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@md\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@md\\:px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.\\@md\\:px-5{padding-inline:calc(var(--spacing) * 5)}.\\@md\\:py-4{padding-block:calc(var(--spacing) * 4)}.\\@md\\:py-5{padding-block:calc(var(--spacing) * 5)}.\\@md\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@md\\:pt-3{padding-top:calc(var(--spacing) * 3)}.\\@md\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.\\@md\\:pb-7{padding-bottom:calc(var(--spacing) * 7)}.\\@md\\:pl-\\[1\\.2rem\\]{padding-left:1.2rem}.\\@md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.\\@md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\@md\\:leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:h-8:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:w-8:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-xl:is(:where(.group)[data-stuck=true] *){font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=32rem){.\\@lg\\:min-h-\\[12\\.25rem\\]{min-height:12.25rem}.\\@lg\\:justify-start{justify-content:flex-start}.\\@lg\\:gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.\\@lg\\:gap-5{gap:calc(var(--spacing) * 5)}}@container (width>=36rem){.\\@xl\\:col-span-2{grid-column:span 2/span 2}.\\@xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@xl\\:gap-5{gap:calc(var(--spacing) * 5)}.\\@xl\\:py-5{padding-block:calc(var(--spacing) * 5)}.\\@xl\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\@xl\\:pt-4{padding-top:calc(var(--spacing) * 4)}.\\@xl\\:pr-4{padding-right:calc(var(--spacing) * 4)}.\\@xl\\:pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.\\@xl\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.\\@xl\\:pl-4{padding-left:calc(var(--spacing) * 4)}}@container (width>=42rem){.\\@2xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=48rem){.\\@3xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@3xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@3xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\@3xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:transition-\\[background-color\\] [data-pc-appearance=solid]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:duration-\\[250ms\\] [data-pc-appearance=solid]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:ease-out [data-pc-appearance=solid]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:transition-colors [data-slot=interactive-prompt-tail]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:duration-\\[250ms\\] [data-slot=interactive-prompt-tail]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:ease-out [data-slot=interactive-prompt-tail]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:hover [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:active [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}.\\[\\&_iframe\\]\\:h-full iframe{height:100%}.\\[\\&_iframe\\]\\:w-full iframe{width:100%}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-internal-autofill-selected{background-color:var(--pc-color-transparent)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{caret-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-internal-autofill-selected{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-webkit-autofill{background-color:var(--pc-color-transparent)}.\\[\\&\\:-webkit-autofill\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{caret-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-webkit-autofill{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-webkit-autofill\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\>\\*\\]\\:h-full>*{height:100%}.\\[\\&\\>\\*\\]\\:\\!max-h-none>*{max-height:none!important}.\\[\\&\\>\\*\\]\\:w-full>*{width:100%}.\\[\\&\\>\\*\\]\\:\\!max-w-none>*{max-width:none!important}@container (height<=520px){.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2\\.25{padding-top:calc(var(--spacing) * 2.25)}}@container (height<=620px){.\\[\\@container_\\(max-height\\:620px\\)\\]\\:justify-start{justify-content:flex-start}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-3{padding-top:calc(var(--spacing) * 3)}}@container (width<=500px){.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch{align-items:stretch}}@container (width<=620px){.\\[\\@container_\\(max-width\\:620px\\)\\]\\:pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}}}.pc-scrollbar-hidden{-ms-overflow-style:none;scrollbar-width:none}.pc-scrollbar-hidden::-webkit-scrollbar{display:none}@media (prefers-reduced-motion:no-preference){.pc-enter-rise{backface-visibility:hidden;animation:.32s cubic-bezier(.22,1,.36,1) both pc-enter-rise}.pc-enter-rise-item{backface-visibility:hidden;animation:.36s cubic-bezier(.16,1,.3,1) both pc-enter-rise-item}.pc-enter-drift-item{backface-visibility:hidden;animation:.32s cubic-bezier(.16,1,.3,1) both pc-enter-drift-item}.pc-enter-lift-item{backface-visibility:hidden;animation:.36s cubic-bezier(.18,1,.28,1) both pc-enter-lift-item}.pc-enter-tray-item{backface-visibility:hidden;animation:.44s cubic-bezier(.2,.88,.3,1) both pc-enter-tray-item}.pc-enter-panel{backface-visibility:hidden;animation:.38s cubic-bezier(.2,.88,.28,1) both pc-enter-panel}.pc-enter-panel-item{backface-visibility:hidden;animation:.62s cubic-bezier(.16,.92,.28,1) both pc-enter-panel-item}.pc-enter-sweep{backface-visibility:hidden;animation:.62s cubic-bezier(.2,.84,.26,1) both pc-enter-sweep}.pc-enter-sweep-item{transform-origin:top;backface-visibility:hidden;animation:1.32s cubic-bezier(.18,.8,.22,1) both pc-enter-sweep-item}}@media (prefers-reduced-motion:no-preference) and (pointer:coarse){.pc-enter-rise{animation-duration:.28s}.pc-enter-rise-item{animation-duration:.32s}.pc-enter-drift-item{animation-duration:.28s}.pc-enter-lift-item{animation-duration:.32s}.pc-enter-tray-item{animation-duration:.4s}.pc-enter-panel{animation-duration:.34s}.pc-enter-panel-item{animation-duration:.54s}.pc-enter-sweep{animation-duration:.56s}.pc-enter-sweep-item{animation-duration:1.16s}}@keyframes pc-enter-rise{0%{opacity:0;transform:translateY(.75rem)scale(.985)}to{opacity:1;transform:translate(0)scale(1)}}@keyframes pc-enter-rise-item{0%{opacity:0;transform:translateY(.5rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-drift-item{0%{opacity:0;transform:translateY(.9rem)scale(.96)}68%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.04rem)scale(1.008)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)scale(1)}}@keyframes pc-enter-lift-item{0%{opacity:0;transform:translateY(.95rem)scale(.972)}76%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.03rem)scale(1.004)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)scale(1)}}@keyframes pc-enter-tray-item{0%{opacity:0;transform:translateY(1.75rem)}68%{opacity:var(--pc-enter-final-opacity,1)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-panel{0%{opacity:0;transform:translateY(.6rem)}to{opacity:1;transform:translate(0)}}@keyframes pc-enter-panel-item{0%{opacity:0;transform:translateY(.6rem)}72%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(.05rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-sweep{0%{opacity:0;transform:translateY(-.12rem)}68%{opacity:.97;transform:translateY(-.02rem)}to{opacity:1;transform:translate(0)}}@keyframes pc-enter-sweep-item{0%{opacity:0;transform:translateY(-.34rem)}82%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.04rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", EMPTY_RUNTIME_STATE = {
	bonuses: void 0,
	user: void 0,
	userBalance: void 0,
	selectedBonusCode: null,
	hasBonusesOverride: !1,
	hasUserOverride: !1,
	hasUserBalanceOverride: !1
};
function CashierComponent({ config: e, onHandleChange: t }) {
	let n = {
		...defaultCashierConfig,
		...e ?? {}
	};
	return /* @__PURE__ */ jsx(Cashier, {
		ref: useCallback((e) => {
			t?.(e);
		}, [t]),
		config: n
	});
}
var stylesInjected = !1, injectCashierStyles = () => {
	if (stylesInjected || typeof document > "u") return;
	let e = "cashier-styles";
	if (document.getElementById(e)) {
		stylesInjected = !0;
		return;
	}
	let t = document.createElement("style");
	t.id = e, t.textContent = `${dist_default}\n${global_default}`, document.head.appendChild(t), stylesInjected = !0;
}, createCashierElement = () => {
	if (typeof window > "u" || typeof HTMLElement > "u") return;
	class e extends HTMLElement {
		root;
		configValue;
		cashierHandle = null;
		runtimeState = EMPTY_RUNTIME_STATE;
		static get observedAttributes() {
			return ["config"];
		}
		get config() {
			return this.configValue;
		}
		set config(e) {
			this.configValue = e, this.resetRuntimeState(), this.renderComponent();
		}
		setBonuses(e) {
			this.runtimeState = {
				...this.runtimeState,
				bonuses: e,
				hasBonusesOverride: e !== void 0
			}, this.cashierHandle?.setBonuses(e);
		}
		setUser(e) {
			this.runtimeState = {
				...this.runtimeState,
				user: e,
				hasUserOverride: e !== void 0
			}, this.cashierHandle?.setUser(e);
		}
		setUserBalance(e) {
			this.runtimeState = {
				...this.runtimeState,
				userBalance: e,
				hasUserBalanceOverride: e !== void 0
			}, this.cashierHandle?.setUserBalance(e);
		}
		setSelectedBonusCode(e) {
			this.runtimeState = {
				...this.runtimeState,
				selectedBonusCode: e
			}, this.cashierHandle?.setSelectedBonusCode(e);
		}
		clearSelectedBonus() {
			this.runtimeState = {
				...this.runtimeState,
				selectedBonusCode: null
			}, this.cashierHandle?.clearSelectedBonus();
		}
		parseConfigAttr(e) {
			try {
				return JSON.parse(e);
			} catch {
				return;
			}
		}
		applyHostSizing() {
			this.style.display || (this.style.display = "block"), this.style.width || (this.style.width = "100%"), this.style.height || (this.style.height = "100%");
		}
		resetRuntimeState() {
			this.runtimeState = EMPTY_RUNTIME_STATE, this.cashierHandle = null;
		}
		syncRuntimeState() {
			this.cashierHandle && (this.runtimeState.hasBonusesOverride && this.cashierHandle.setBonuses(this.runtimeState.bonuses), this.runtimeState.hasUserOverride && this.cashierHandle.setUser(this.runtimeState.user), this.runtimeState.hasUserBalanceOverride && this.cashierHandle.setUserBalance(this.runtimeState.userBalance), this.runtimeState.selectedBonusCode !== null && this.cashierHandle.setSelectedBonusCode(this.runtimeState.selectedBonusCode));
		}
		handleCashierHandleChange = (e) => {
			this.cashierHandle = e, e && this.syncRuntimeState();
		};
		connectedCallback() {
			this.applyHostSizing();
			let e = this.getAttribute("config");
			e && !this.configValue && (this.configValue = this.parseConfigAttr(e)), this.renderComponent();
		}
		attributeChangedCallback(e, t, n) {
			e === "config" && (this.configValue = n ? this.parseConfigAttr(n) : void 0, this.resetRuntimeState(), this.renderComponent());
		}
		disconnectedCallback() {
			this.root?.unmount(), this.root = void 0, this.cashierHandle = null;
		}
		renderComponent() {
			this.isConnected && (this.root ||= createRoot(this), this.root.render(/* @__PURE__ */ jsx(CashierComponent, {
				config: this.configValue,
				onHandleChange: this.handleCashierHandleChange
			})));
		}
	}
	return e;
}, CashierElement = createCashierElement(), defineCashier = (e = "pc-cashier") => typeof customElements > "u" || !CashierElement ? e : (injectCashierStyles(), customElements.get(e) || customElements.define(e, CashierElement), e);
//#endregion
export { Cashier, Cashier as default, CashierComboViewPaymentTypesMode, CashierLayoutListType, CashierMethods, CashierSuggestAction, defaultCashierConfig, defineCashier };
