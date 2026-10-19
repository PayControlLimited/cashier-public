import { CashierSummaryActionType as e } from "./types/CashierConfig.js";
//#region ../format/src/money.ts
var t = (e) => {
	if (typeof e == "number") return Number.isFinite(e) ? e : null;
	if (typeof e == "bigint") {
		let t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return null;
		let n = Number(t);
		return Number.isFinite(n) ? n : null;
	}
	return null;
}, n = { BTC: 8 }, r = (e, t) => {
	let r = n[e.toUpperCase()];
	if (r !== void 0) return r;
	try {
		let n = new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits;
		return typeof n == "number" ? n : 2;
	} catch {
		return 2;
	}
}, i = (e, t, n, r, i) => {
	let { style: a, currency: o, currencyDisplay: s, ...c } = n ?? {}, l = new Intl.NumberFormat(t ?? void 0, {
		style: "decimal",
		...c,
		...r === void 0 ? {} : { minimumFractionDigits: r },
		...i === void 0 ? {} : { maximumFractionDigits: i }
	}), u = ` ${e.toUpperCase()}`;
	return {
		format: (e) => `${l.format(e)}${u}`,
		resolvedOptions: () => l.resolvedOptions(),
		currencyCodeSuffix: u
	};
}, a = ({ currency: e, locale: t, formatOptions: a, useCurrencyScale: o = !1, defaultMaxFractionDigits: s = 2 }) => {
	let c = a?.minimumFractionDigits, l = a?.maximumFractionDigits;
	if (o) {
		let n = r(e, t);
		c === void 0 && (c = n), l === void 0 && (l = n);
	} else l === void 0 && (l = s);
	if (n[e.toUpperCase()] === void 0) try {
		return new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currencyDisplay: "code",
			...a,
			currency: e,
			...c === void 0 ? {} : { minimumFractionDigits: c },
			maximumFractionDigits: l
		});
	} catch {}
	return i(e, t, a, c, l);
}, o = (e, n) => {
	let r = t(e.value);
	return r === null ? "" : a({
		currency: e.currency,
		locale: n?.locale,
		useCurrencyScale: !0
	}).format(r);
}, s = (e) => {
	if (!e || typeof e != "object") return !1;
	let n = e, r = typeof n.currency == "string", i = t(n.value) !== null;
	return r && i;
}, c = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";
new RegExp(c, "u");
var l = "^(https?://.+|/.*)$", u = "^\\d+(\\.\\d{1,2})?$", d = "^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$", f = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/, p = "\\s+";
new RegExp(p, "g");
var m = new RegExp(p), h = /^rgba?\((.+)\)$/i, g = /[\s,/]+/, ee = /^color\(\s*([a-z0-9-]+)\s+(.+)\)$/i, _ = /^#?([a-fA-F0-9]{6})$/, te = /^#?([a-fA-F0-9]{3})$/, ne = /^[0-9]$/, re = /^[0-9a-z]$/i, ie = /^[a-z]$/i, ae = /[?#]/u, oe = /^https:\/\//iu, se = /^data:font\//iu, ce = /^[-+]?\d*(?:\.(\d*))?(?:e[-+]?(\d+))?$/i, le = /\.?0+$/, ue = /\D/g, de = /(.{4})/g, fe = /,/g, pe = /[^\d.]/g;
new RegExp(l, "u"), new RegExp(c, "u");
var v = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim();
	return t.length > 0 ? t : null;
}, me = 15, he = 34, ge = /[^a-z0-9]/gi, _e = /^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/, ve = {
	AD: 24,
	AE: 23,
	AL: 28,
	AO: 25,
	AT: 20,
	AZ: 28,
	BA: 20,
	BE: 16,
	BF: 27,
	BG: 22,
	BH: 22,
	BI: 16,
	BJ: 28,
	BL: 27,
	BR: 29,
	BY: 28,
	CH: 21,
	CI: 28,
	CM: 27,
	CR: 22,
	CV: 25,
	CY: 28,
	CZ: 24,
	DE: 22,
	DK: 18,
	DO: 28,
	DZ: 24,
	EE: 20,
	EG: 29,
	ES: 24,
	FI: 18,
	FO: 18,
	FR: 27,
	GB: 22,
	GE: 22,
	GF: 27,
	GI: 23,
	GL: 18,
	GP: 27,
	GR: 27,
	GT: 28,
	HR: 21,
	HU: 28,
	IE: 22,
	IL: 23,
	IQ: 23,
	IR: 26,
	IS: 26,
	IT: 27,
	JO: 30,
	KW: 30,
	KZ: 20,
	LB: 28,
	LC: 32,
	LI: 21,
	LT: 20,
	LU: 20,
	LV: 21,
	MC: 27,
	MD: 24,
	ME: 22,
	MF: 27,
	MG: 27,
	MK: 19,
	ML: 28,
	MQ: 27,
	MR: 27,
	MT: 31,
	MU: 30,
	MZ: 25,
	NC: 27,
	NL: 18,
	NO: 15,
	PF: 27,
	PK: 24,
	PL: 28,
	PM: 27,
	PS: 29,
	PT: 25,
	QA: 29,
	RE: 27,
	RO: 24,
	RS: 22,
	SA: 24,
	SC: 31,
	SE: 24,
	SI: 19,
	SK: 24,
	SM: 27,
	SN: 28,
	ST: 25,
	SV: 28,
	TF: 27,
	TL: 23,
	TN: 24,
	TR: 26,
	UA: 29,
	VA: 22,
	VG: 24,
	WF: 27,
	XK: 20,
	YT: 27
}, y = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim();
	return t.length === 0 ? "" : t.replace(ge, "").toUpperCase();
}, ye = (e) => {
	let t = y(e);
	return t.length === 0 ? "" : t.replace(de, "$1 ").trim();
}, be = {
	formatDisplayValue: (e) => ye(e),
	parseUserInput: (e) => y(e)
}, xe = (e) => {
	let t = `${e.slice(4)}${e.slice(0, 4)}`, n = 0;
	for (let e = 0; e < t.length; e += 1) {
		let r = t.charCodeAt(e);
		if (r >= 48 && r <= 57) {
			n = (n * 10 + (r - 48)) % 97;
			continue;
		}
		let i = r - 55;
		n = (n * 100 + i) % 97;
	}
	return n;
}, Se = (e) => {
	let t = y(e);
	if (t.length === 0 || t.length < me || t.length > he || !_e.test(t)) return !1;
	let n = ve[t.slice(0, 2)];
	return !n || t.length !== n ? !1 : xe(t) === 1;
}, Ce = /^\d+(?:\.\d+)?$/u, we = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim().replace(fe, ".");
	if (t.length === 0) return "";
	let n = t.replace(pe, "");
	if (n.length === 0) return "";
	let [r = "", ...i] = n.split("."), a = i.pop() ?? "", o = `${r}${i.join("")}`;
	return t.endsWith(".") ? `${o}.` : a.length === 0 ? o : `${o}.${a}`;
}, b = (e) => {
	let t = we(e);
	return t.length === 0 || t === "." ? "" : t.startsWith(".") ? `0${t}` : t.endsWith(".") ? t.slice(0, -1) : t;
}, Te = (e) => b(e).length > 0, Ee = (e) => {
	let [t = "0", n = ""] = b(e).split(".");
	return {
		integer: t.replace(/^0+(?=\d)/, "") || "0",
		fraction: n.replace(/0+$/, "")
	};
}, x = (e, t) => {
	let n = Ee(e), r = Ee(t);
	if (n.integer.length !== r.integer.length) return n.integer.length > r.integer.length ? 1 : -1;
	if (n.integer !== r.integer) return n.integer > r.integer ? 1 : -1;
	let i = Math.max(n.fraction.length, r.fraction.length), a = n.fraction.padEnd(i, "0"), o = r.fraction.padEnd(i, "0");
	return a === o ? 0 : a > o ? 1 : -1;
}, De = (e) => {
	if (e == null) return null;
	let t = b(e);
	return t.length > 0 ? t : null;
}, Oe = (e) => e.length === 0 || e === "." || e.endsWith("."), ke = (e, t) => {
	let n = we(e), r = Oe(n), i = r ? null : b(n), a = De(t?.min), o = De(t?.max), s = De(t?.maxBoundary), c = o === null ? s : s === null || x(o, s) <= 0 ? o : s, l = i !== null && a !== null && x(i, a) < 0, u = i !== null && c !== null && x(i, c) > 0;
	return {
		value: i,
		min: a,
		max: c,
		isBelowMin: l,
		isAboveMax: u,
		isOutOfRange: l || u,
		isIncomplete: r
	};
}, Ae = (e) => {
	if (typeof e != "string" || e.trim().length === 0) return [];
	let t = /* @__PURE__ */ new Set(), n = [];
	return e.split(",").forEach((e) => {
		let r = e.trim();
		if (!Ce.test(r)) return;
		let i = b(r);
		i.length !== 0 && (t.has(i) || (t.add(i), n.push(i)));
	}), n;
}, je = /^\d{4}-\d{2}-\d{2}$/, Me = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/, Ne = (e) => je.test(e) || f.test(e) || Me.test(e), Pe = (e, t = {}) => {
	if (e == null) return null;
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		if (t.strict || !Number.isFinite(e)) return null;
		let n = new Date(e);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	if (typeof e == "string") {
		let n = e.trim();
		if (!n || t.strict && !Ne(n)) return null;
		let r = new Date(n);
		return Number.isNaN(r.getTime()) ? null : r;
	}
	return null;
}, Fe = ({ locale: e, formatOptions: t }) => new Intl.DateTimeFormat(e ?? void 0, t), Ie = (e, t, n) => {
	let r = Pe(e);
	if (!r) return "—";
	try {
		return Fe({
			locale: t,
			formatOptions: n
		}).format(r);
	} catch {
		return r.toISOString();
	}
}, Le = new RegExp(d, "u"), Re = new Intl.Locale("en-GB"), ze = (e, t = Re) => {
	if (e instanceof Intl.Locale) return e;
	if (typeof e == "string" && e.length > 0) {
		if (!Le.test(e)) return t;
		try {
			return new Intl.Locale(e);
		} catch {}
		try {
			let [t] = Intl.getCanonicalLocales(e);
			if (t) return new Intl.Locale(t);
		} catch {}
	}
	return t;
}, Be = (e) => e instanceof Intl.Locale ? e.toString() : ze(e).toString();
Object.freeze({
	id: "ID",
	paymentId: "Payment ID",
	connectionPaymentId: "Connection Payment ID",
	merchantPaymentId: "Merchant Payment ID",
	merchantPaymentReference: "Merchant Payment Reference",
	connectionId: "Connection ID",
	providerReference: "Connection Reference",
	merchantId: "Merchant ID",
	merchantIds: "Merchant IDs",
	merchantName: "Merchant Name",
	merchantReference: "Merchant Reference",
	organisationName: "Organisation Name",
	organisationEmail: "Organisation Email",
	organisationPhone: "Organisation Phone",
	organisationAddress: "Organisation Address",
	organisationDescription: "Organisation Description",
	baseCurrency: "Base Currency",
	ipTrustlist: "IP Trustlist",
	accountId: "Account ID",
	merchantCustomerId: "Merchant Customer ID",
	externalId: "External ID",
	organisationId: "Organisation ID",
	organisationRole: "Organisation Role",
	settings: "Settings",
	merchants: "Merchants",
	permissions: "Permissions",
	visible: "Visible",
	status: "Status",
	subStatus: "Substatus",
	type: "Type",
	method: "Method",
	sub: "Subject",
	oauthProvider: "OAuth Provider",
	oauthProviderId: "OAuth Provider ID",
	actions: "Actions",
	events: "Events",
	transactions: "Transactions",
	paymentType: "Payment Type",
	paymentTypes: "Payment Types",
	paymentMethod: "Payment Method",
	bonusCode: "Bonus Code",
	service: "Service",
	initiator: "Initiator",
	dateFrom: "Date From",
	dateTo: "Date To",
	updatedFrom: "Updated From",
	updatedTo: "Updated To",
	amount: "Amount",
	transactionAmount: "Transaction Amount",
	baseAmount: "Base Amount",
	transactionBaseAmount: "Transaction Base Amount",
	amountMin: "Min Amount",
	amountMax: "Max Amount",
	baseAmountMin: "Min Base Amount",
	baseAmountMax: "Max Base Amount",
	transactionAmountMin: "Min Transaction Amount",
	transactionAmountMax: "Max Transaction Amount",
	value: "Value",
	locale: "Locale",
	key: "Key",
	currency: "Currency",
	transactionCurrency: "Transaction Currency",
	sortBy: "Sort By",
	sortOrder: "Sort Order",
	createdAt: "Created At",
	updatedAt: "Updated At",
	eventId: "Event ID",
	eventType: "Event Type",
	transactionId: "Transaction ID",
	transactionType: "Transaction Type",
	connectionTransactionId: "Connection Transaction ID",
	userId: "User ID",
	email: "Email",
	name: "Name",
	description: "Description",
	content: "Content",
	logo: "Logo",
	logoUrl: "Logo URL",
	firstName: "First Name",
	lastName: "Last Name",
	displayName: "Display Name",
	identityProviderStatus: "Identity Provider Status",
	authenticatorApp: "Authenticator app",
	parentId: "Parent ID",
	provider: "Connection",
	grantedAt: "Granted At",
	grantedBy: "Granted By",
	role: "Role",
	permission: "Permission",
	keyPrefix: "Key Prefix",
	lastUsedAt: "Last Used At",
	expiresAt: "Expires At",
	plainKey: "Plain Key",
	exprRule: "Expression Rule",
	decisionType: "Decision Type",
	version: "Version",
	steps: "Steps",
	context: "Context",
	properties: "Properties",
	valid: "Valid",
	warnings: "Warnings",
	error: "Error",
	testResult: "Test Result",
	actionId: "Action ID",
	reason: "Reason",
	data: "Data",
	metadata: "Metadata",
	bic: "BIC",
	iban: "IBAN",
	bankName: "Bank Name",
	accountHolder: "Account Holder",
	accountNumber: "Account Number",
	truncatedPan: "Truncated PAN",
	token: "Token",
	holderName: "Holder Name",
	expiryDate: "Expiry Date",
	iin: "IIN",
	brand: "Brand",
	organization: "Organization",
	category: "Category",
	country: "Country",
	hash: "Hash",
	accountFields: "Account Data",
	updatedBy: "Updated By",
	lastLogin: "Last login",
	tags: "Tags"
});
//#endregion
//#region src/utils/debugLogger.ts
var Ve = {
	log(e, ...t) {
		e && console.log(...t);
	},
	warn(e, ...t) {
		e && console.warn(...t);
	},
	error(e, ...t) {
		e && console.error(...t);
	}
}, S = (e) => {
	let t = /^([+-]?)(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/i.exec(String(e));
	if (!t || String(e).length > 8192) throw Error("Invalid decimal");
	let [, n, r, i = "", a = "0"] = t, o = i.length - Number(a);
	if (!Number.isSafeInteger(o) || Math.abs(o) > 8192) throw Error("Invalid decimal scale");
	let s = BigInt(`${r}${i}`) * (n === "-" ? -1n : 1n);
	return o < 0 ? {
		coefficient: s * 10n ** BigInt(-o),
		scale: 0
	} : {
		coefficient: s,
		scale: o
	};
}, C = ({ coefficient: e, scale: t }) => {
	let n = e < 0n, r = (n ? -e : e).toString().padStart(t + 1, "0"), i = t ? `${r.slice(0, -t)}.${r.slice(-t)}`.replace(/\.?0+$/, "") : r;
	return `${n ? "-" : ""}${i}`;
}, w = (e, t) => ({
	coefficient: e.coefficient * t.coefficient,
	scale: e.scale + t.scale
}), He = (e, t) => {
	let n = Math.max(e.scale, t.scale);
	return {
		coefficient: e.coefficient * 10n ** BigInt(n - e.scale) + t.coefficient * 10n ** BigInt(n - t.scale),
		scale: n
	};
}, Ue = (e, t) => {
	if (e.scale <= t) return e;
	let n = 10n ** BigInt(e.scale - t), r = e.coefficient < 0n ? -1n : 1n, i = e.coefficient * r;
	return {
		coefficient: (i / n + (i % n * 2n >= n ? 1n : 0n)) * r,
		scale: t
	};
}, We = (e) => {
	if (e.toUpperCase() === "BTC") return 8;
	try {
		return new Intl.NumberFormat("en", {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits ?? 2;
	} catch {
		return 2;
	}
}, Ge = (e, t, n) => C(Ue(w(S(e), S(t ?? 1)), We(n))), Ke = (e, t, n, r) => a({
	currency: t,
	locale: n,
	formatOptions: {
		trailingZeroDisplay: "stripIfInteger",
		...r
	},
	useCurrencyScale: !0
}).format(e), T = (e, t) => {
	let n = He(e, {
		...t,
		coefficient: -t.coefficient
	});
	return n.coefficient === 0n ? 0 : n.coefficient < 0n ? -1 : 1;
}, qe = (e, t) => He(e, {
	...t,
	coefficient: -t.coefficient
}), Je = (e, t) => {
	let n = w(e, t);
	return {
		...n,
		scale: n.scale + 2
	};
}, Ye = (e, t) => {
	let n = S(e), r = S(t);
	if (r.coefficient <= 0n) return "0";
	let i = n.coefficient * 10n ** BigInt(r.scale) * 10000n, a = r.coefficient * 10n ** BigInt(n.scale);
	return C({
		coefficient: i / a + (i % a * 2n >= a ? 1n : 0n),
		scale: 2
	});
}, Xe = (e, t) => e.replace(/\{(\w+)\}/g, (e, n) => t[n] ?? e), E = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), D = (e, t) => Object.keys(e).every((e) => t.includes(e)), O = (e) => typeof e == "string" && e.length <= 512 && /^\d+(?:\.\d+)?$/.test(e), k = (e, t) => e === void 0 || t(e), Ze = (e) => typeof e == "string" && e.length > 0 && e.length <= 256 && e.trim() === e, Qe = (e, t = !1) => !E(e) || !D(e, [
	"referenceAmount",
	...t ? [] : ["amount"],
	"discount",
	"allocations",
	"savingsDisplay"
]) ? !1 : k(e.referenceAmount, O) && k(e.amount, O) && k(e.savingsDisplay, (e) => [
	"amount",
	"percentage",
	"both"
].includes(String(e))) && k(e.discount, (e) => E(e) && D(e, [
	"type",
	"value",
	"maxValue",
	"basis"
]) && ["fixed", "percentage"].includes(String(e.type)) && O(e.value) && k(e.maxValue, O) && (t ? e.basis === "order" : ["unit", "line"].includes(String(e.basis))) && (e.type !== "percentage" || T(S(e.value), S(100)) <= 0)) && k(e.allocations, (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && new Set(e.map((e) => E(e) ? e.id : void 0)).size === e.length && e.every((e) => E(e) && D(e, [
	"id",
	"applicationId",
	"offerId",
	"amount"
]) && Ze(e.id) && Ze(e.applicationId) && k(e.offerId, Ze) && O(e.amount))), $e = (e, t, n, r = 1, i = !1) => {
	if (!e) return;
	let a = e.discount, o = t === void 0 ? void 0 : S(t);
	(!i && a?.basis === "unit" && o || !i && o) && (o = w(o, S(r)));
	let s = o;
	if (!i && e.amount !== void 0 && (s = S(e.amount)), !i && e.amount === void 0 && o && a) {
		let e = a.basis === "unit" && t !== void 0 ? S(t) : o, n = a.type === "fixed" ? S(a.value) : Je(e, S(a.value));
		a.maxValue !== void 0 && T(n, S(a.maxValue)) > 0 && (n = S(a.maxValue));
		let i = qe(e, n);
		i.coefficient < 0n && (i = S(0)), s = a.basis === "unit" ? w(i, S(r)) : i;
	}
	if (!s) return;
	let c = We(n.currency), l = (e) => ({
		value: e,
		currency: n.currency,
		display: Ke(e, n.currency, n.locale, n.formatOptions)
	}), u = l(C(Ue(s, c))), d = e.referenceAmount ?? (a && o ? C(o) : void 0), f = d === void 0 ? void 0 : l(Ge(d, 1, n.currency)), p = f ? qe(S(f.value), S(u.value)) : void 0, m = p && p.coefficient > 0n ? l(C(p)) : void 0, h = f && m ? Ye(m.value, f.value) : void 0, g = (e) => {
		let t = S(e);
		return new Intl.NumberFormat(n.locale, {
			style: "percent",
			maximumFractionDigits: 2
		}).format(C({
			...t,
			scale: t.scale + 2
		}));
	}, ee = `offer.saving.${e.savingsDisplay ?? "amount"}`, _ = m && h !== void 0 ? { value: Xe(n.resolveText(ee).value, {
		amount: m.display,
		percentage: g(h)
	}) } : void 0, te = a ? { value: Xe(n.resolveText(a.type === "fixed" ? "offer.discount.amount" : "offer.discount.percentage").value, { value: a.type === "fixed" ? l(a.value).display : g(a.value) }) } : void 0;
	return {
		current: u,
		...f && T(S(f.value), S(u.value)) > 0 ? { reference: f } : {},
		...m ? {
			saving: m,
			savingLabel: _
		} : {},
		...te ? { advertisedLabel: te } : {},
		...e.allocations ? { allocations: structuredClone(e.allocations) } : {}
	};
}, et = (e) => {
	let t = (e) => E(e) && D(e, [
		"value",
		"currency",
		"display"
	]) && O(e.value) && typeof e.currency == "string" && /^[A-Z]{3}$/.test(e.currency) && typeof e.display == "string" && e.display.length <= 8192, n = (e) => E(e) && D(e, ["value", "key"]) && typeof e.value == "string" && e.value.length <= 8192 && (e.key === void 0 || typeof e.key == "string");
	return E(e) && D(e, [
		"current",
		"reference",
		"saving",
		"savingLabel",
		"advertisedLabel",
		"allocations"
	]) && t(e.current) && k(e.reference, t) && k(e.saving, t) && k(e.savingLabel, n) && k(e.advertisedLabel, n) && Qe({ allocations: e.allocations }) && [e.reference, e.saving].every((t) => t === void 0 || E(t) && E(e.current) && t.currency === e.current.currency);
}, tt = /^\d+(?:\.\d+)?$/u, nt = "aria.payment_content", rt = /* @__PURE__ */ new Set([
	"ar",
	"arc",
	"ckb",
	"dv",
	"fa",
	"he",
	"ks",
	"ku",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]), it = (e) => ({ value: e }), at = (e, t) => e.key ? {
	key: e.key,
	value: t
} : { value: t }, ot = (e, t, n) => ({
	value: e,
	currency: t,
	display: n(e) || e
}), st = (e, t, n) => {
	let r = v(e);
	if (!r || !tt.test(r)) return;
	let i = n(r);
	if (i) return {
		value: r,
		currency: t,
		display: i
	};
}, ct = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return;
	let t = {}, n = (n, r) => {
		let i = v(e[n]);
		i && (t[r] = i);
	};
	return n("default", "default"), n("dark", "dark"), n("compact-default", "compactDefault"), n("compact-dark", "compactDark"), Object.keys(t).length > 0 ? t : void 0;
}, lt = ({ currency: e, description: t, disabled: n, formatMoney: r, id: i, label: a, maximumLabel: o, minimumLabel: s, paymentType: c, selected: l, unavailable: u }) => {
	let d = v(c.type);
	if (!d) return null;
	let f = v(c.service) ?? void 0, p = st(c.limits?.min, e, r), m = st(c.limits?.max, e, r), h = p || m ? {
		...p ? { minimum: {
			label: s,
			amount: p
		} } : {},
		...m ? { maximum: {
			label: o,
			amount: m
		} } : {}
	} : void 0, g = ct(c.logo);
	return {
		id: i,
		identity: {
			type: d,
			...f ? { service: f } : {}
		},
		label: a,
		...t ? { description: t } : {},
		...g ? { logo: g } : {},
		...h ? { limits: h } : {},
		selected: l,
		disabled: n,
		unavailable: u
	};
}, A = (e) => {
	let t;
	try {
		t = e instanceof Intl.Locale ? e : new Intl.Locale(e);
	} catch {
		t = new Intl.Locale("en-GB");
	}
	let n = t.textInfo?.direction ?? (rt.has(t.language) ? "rtl" : "ltr");
	return {
		locale: t.toString(),
		direction: n
	};
}, j = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), M = (e) => typeof e == "string" && e.length <= 8192, N = (e, t) => e === void 0 || t(e), ut = (e) => {
	if (!M(e) || !e.trim() || /[\u0000-\u001f]/.test(e)) return !1;
	try {
		return ["http:", "https:"].includes(new URL(e, "https://cashier.invalid/").protocol);
	} catch {
		return !1;
	}
}, dt = (e) => j(e) && Object.keys(e).every((e) => [
	"id",
	"scope",
	"title",
	"description",
	"image",
	"quantity",
	"unitPrice",
	"pricing",
	"params"
].includes(e)) && M(e.id) && e.id.trim().length > 0 && e.id.trim() === e.id && e.id.length <= 256 && ["global", "payment"].includes(String(e.scope)) && M(e.title) && e.title.trim().length > 0 && N(e.description, M) && N(e.quantity, (e) => typeof e == "number" && Number.isSafeInteger(e) && e > 0) && N(e.unitPrice, (e) => M(e) && /^\d+(?:\.\d+)?$/.test(e)) && N(e.pricing, Qe) && N(e.params, (e) => j(e) && Object.keys(e).length <= 256 && Object.values(e).every(M)) && N(e.image, (e) => j(e) && Object.keys(e).every((e) => ["src", "alt"].includes(e)) && ut(e.src) && N(e.alt, M)), ft = (e) => j(e) && Object.keys(e).every((e) => ["value", "key"].includes(e)) && M(e.value) && N(e.key, M), pt = (e, t = !1) => j(e) && Object.keys(e).every((e) => [
	"id",
	"scope",
	"title",
	"description",
	"image",
	"quantity",
	"quantityDisplay",
	"amount",
	...t ? ["pricing"] : [],
	"localisation"
].includes(e)) && M(e.id) && e.id.trim().length > 0 && e.id.trim() === e.id && e.id.length <= 256 && e.scope === "payment" && ft(e.title) && N(e.description, ft) && N(e.quantity, (e) => typeof e == "number" && Number.isSafeInteger(e) && e > 0) && N(e.quantityDisplay, M) && N(e.image, (e) => j(e) && Object.keys(e).every((e) => ["src", "alt"].includes(e)) && ut(e.src) && ft(e.alt)) && N(e.amount, (e) => j(e) && Object.keys(e).every((e) => [
	"value",
	"currency",
	"display"
].includes(e)) && M(e.value) && /^\d+(?:\.\d+)?$/.test(e.value) && M(e.currency) && M(e.display)) && N(e.pricing, (t) => et(t) && j(e.amount) && t.current.value === e.amount.value && t.current.currency === e.amount.currency) && j(e.localisation) && Object.keys(e.localisation).every((e) => ["locale", "direction"].includes(e)) && M(e.localisation.locale) && ["ltr", "rtl"].includes(String(e.localisation.direction)) && A(e.localisation.locale).locale === e.localisation.locale && A(e.localisation.locale).direction === e.localisation.direction && (e.quantity === void 0 ? e.quantityDisplay === void 0 : M(e.quantityDisplay)), mt = {
	layout: "row",
	items: [{
		id: "restart",
		type: e.BUTTON,
		label: "cta.back",
		themeVariant: "neutral",
		action: "restart"
	}]
}, ht = /* @__PURE__ */ new Set([
	"https:",
	"http:",
	"mailto:",
	"tel:"
]), gt = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return t.length > 0 ? t : null;
}, P = (e, t) => {
	Ve.warn(e, "Cashier summaryActions ignored:", t);
}, _t = (e) => {
	let t = e.trim();
	if (!t) return !1;
	try {
		let e = new URL(t, "https://cashier.local");
		return ht.has(e.protocol.toLowerCase());
	} catch {
		return !1;
	}
}, vt = (e, t) => {
	let n = new Set(e?.split(/\s+/).map((e) => e.trim()).filter(Boolean) ?? []);
	return t === "_blank" && (n.add("noopener"), n.add("noreferrer")), n.size > 0 ? Array.from(n).join(" ") : void 0;
}, yt = (e) => _t(e.href) ? {
	href: e.href,
	...e.target === void 0 ? {} : { target: e.target },
	...vt(e.rel, e.target) === void 0 ? {} : { rel: vt(e.rel, e.target) },
	...e.referrerPolicy === void 0 ? {} : { referrerPolicy: e.referrerPolicy },
	...e.download === void 0 ? {} : { download: e.download }
} : null, bt = (e) => !!e && typeof e == "object" && "href" in e, xt = (e, t) => {
	if (e.paymentStatuses === void 0) return !0;
	let n = gt(t);
	return n ? e.paymentStatuses.map((e) => gt(e)).includes(n) : !1;
}, St = (t, n) => {
	let r = t.type === e.TEXT ? e.TEXT : e.BUTTON;
	if (!n.preview && t.paymentStatuses?.length === 0) return P(n.debug, `action "${t.id}" has empty paymentStatuses`), null;
	if (!n.preview && !xt(t, n.paymentStatus)) return null;
	if (r === e.BUTTON && t.action === void 0) return P(n.debug, `button action "${t.id}" is missing action`), null;
	let i;
	if (t.action === "restart") i = "restart";
	else if (bt(t.action) && (i = yt(t.action) ?? void 0, !i)) return P(n.debug, `action "${t.id}" has an unsafe URL`), null;
	return {
		id: t.id,
		type: r,
		label: t.label,
		themeVariant: t.themeVariant ?? "neutral",
		...i === void 0 ? {} : { action: i }
	};
}, Ct = (t) => t.layout ? t.layout : t.items.some((t) => t.type === e.TEXT) || t.items.filter((t) => t.type !== e.TEXT).length > 2 ? "stack" : "row", wt = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = [];
	return e.items.forEach((e) => {
		if (n.has(e.id)) {
			P(t.debug, `duplicate action id "${e.id}"`);
			return;
		}
		n.add(e.id);
		let i = St(e, t);
		i && r.push(i);
	}), r.length === 0 ? null : {
		layout: Ct({
			...e,
			items: r
		}),
		items: r
	};
}, Tt = (e, t = {}) => wt(e ?? mt, t), Et = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), Dt = (e, t) => Object.keys(e).every((e) => t.includes(e)), F = (e) => typeof e == "string" && e.length <= 8192, Ot = (e) => F(e) && e.trim().length > 0 && e === e.trim() && e.length <= 256, I = (e, t) => e === void 0 || t(e), L = (e) => (t) => typeof t == "string" && e.includes(t), R = (e, t = !1) => {
	try {
		if (!Et(e) || !I(e.layout, L(["row", "stack"])) || !Array.isArray(e.items) || t && (!Dt(e, ["layout", "items"]) || e.items.length > 256 || Object.keys(e.items).length !== e.items.length || Object.values(Object.getOwnPropertyDescriptors(e.items)).some((e) => !Object.hasOwn(e, "value")))) return !1;
		let n = /* @__PURE__ */ new Set();
		return e.items.every((e) => {
			if (!Et(e) || typeof e.id != "string" || typeof e.label != "string" || !I(e.type, L(["button", "text"])) || !I(e.themeVariant, L([
				"neutral",
				"secondary",
				"primary",
				"success",
				"danger",
				"warning",
				"info"
			])) || t && (!I(e.appearance, L([
				"solid",
				"ghost",
				"outline",
				"muted"
			])) || !I(e.size, L([
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			]))) || !I(e.paymentStatuses, (e) => Array.isArray(e) && e.every((e) => typeof e == "string")) || t && (!Ot(e.id) || !F(e.label) || !e.label.trim() || n.has(e.id) || !Dt(e, [
				"id",
				"type",
				"label",
				"themeVariant",
				"appearance",
				"size",
				"paymentStatuses",
				"action"
			]) || e.type !== "text" && e.action === void 0)) return !1;
			if (n.add(e.id), e.action === void 0 || e.action === "restart") return !0;
			let r = e.action;
			return !Et(r) || typeof r.href != "string" || !I(r.target, F) || !I(r.rel, F) || !I(r.referrerPolicy, F) || !I(r.download, (e) => typeof e == "boolean" || F(e)) ? !1 : !t || Dt(r, [
				"href",
				"target",
				"rel",
				"referrerPolicy",
				"download"
			]) && F(r.href) && _t(r.href) && I(r.referrerPolicy, L([
				"no-referrer",
				"no-referrer-when-downgrade",
				"origin",
				"origin-when-cross-origin",
				"same-origin",
				"strict-origin",
				"strict-origin-when-cross-origin",
				"unsafe-url",
				""
			]));
		});
	} catch {
		return !1;
	}
}, kt = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), At = {
	appearance: [
		"plain",
		"solid",
		"ghost",
		"outline",
		"muted"
	],
	themeVariant: [
		"neutral",
		"secondary",
		"primary",
		"success",
		"danger",
		"warning",
		"info"
	],
	size: [
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
	],
	alignment: [
		"start",
		"centre",
		"end"
	],
	placement: [
		"top",
		"bottom",
		"summary"
	],
	layout: [
		"row",
		"stack",
		"list"
	]
}, z = Object.keys(At), jt = (e, t = !1) => {
	try {
		return kt(e) && Object.keys(e).every((e) => z.includes(e) && (t || e !== "layout")) && z.every((t) => e[t] === void 0 || At[t].includes(e[t]));
	} catch {
		return !1;
	}
}, B = (e, t = !1) => jt(e, t) ? Object.freeze(Object.fromEntries(z.filter((t) => e[t] !== void 0).map((t) => [t, e[t]]))) : Object.freeze({}), Mt = (e) => {
	try {
		return kt(e) && Object.keys(e).every((e) => e === "summary") && (e.summary === void 0 || kt(e.summary) && Object.keys(e.summary).every((e) => e === "actions") && (e.summary.actions === void 0 || R(e.summary.actions)));
	} catch {
		return !1;
	}
}, Nt = (e) => B(Object.fromEntries(z.filter((t) => t !== "layout" && Object.hasOwn(e, t)).map((t) => [t, e[t]]))), V = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => !z.includes(e))), Pt = (e) => e.offers !== void 0 || e.checkout !== void 0, Ft = (e) => typeof e == "string" && e.trim() === e && e.length > 0 && e.length <= 256, It = /* @__PURE__ */ RegExp("^(?:min|max|closeTo)(?:Amount|PayinCount|TotalPayinAmount|DaysSinceRegistration)$"), H = (e) => typeof e == "string" && e.length <= 8192, U = (e, t) => e === void 0 || t(e), Lt = (e) => E(e) && D(e, [
	"pricing",
	"expiresAt",
	"eligibilityAmount"
]) && U(e.pricing, (e) => Qe(e, !0)) && U(e.expiresAt, (e) => typeof e == "string" && /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/.test(e) && Number.isFinite(Date.parse(e))) && U(e.eligibilityAmount, O), Rt = (e, t) => e === void 0 || Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && new Set(e.map((e) => E(e) ? e.id : void 0)).size === e.length && e.every((e) => E(e) && D(e, [
	"id",
	"title",
	"description",
	"logo",
	"awards",
	"preselected",
	"termsAndConditions",
	"conditions",
	"pricing",
	"submission",
	"couponCode"
]) && Ft(e.id) && H(e.title) && H(e.description) && U(e.logo, H) && U(e.termsAndConditions, H) && U(e.couponCode, H) && U(e.preselected, (e) => typeof e == "boolean") && U(e.pricing, (e) => e === "unchanged" || e === "merchant") && U(e.submission, (e) => E(e) && D(e, ["bonusCode"]) && Ft(e.bonusCode)) && U(e.awards, (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && e.every(t) && new Set(e.map((e) => E(e) ? e.id : void 0)).size === e.length) && U(e.conditions, (e) => E(e) && D(e, ["include", "exclude"]) && ["include", "exclude"].every((t) => U(e[t], (e) => Array.isArray(e) && e.length <= 256 && e.every((e) => E(e) && Object.entries(e).every(([e, t]) => [
	"method",
	"type",
	"service",
	"accountId"
].includes(e) ? typeof t == "string" : It.test(e) && typeof t == "number" && Number.isFinite(t))))))), zt = (e) => (Array.isArray(e) ? e : void 0)?.map(({ id: e, pricing: t, submission: n, couponCode: r, ...i }) => ({
	...i,
	code: e
})), Bt = (e) => ({
	...e,
	...e.offers === void 0 ? {} : {
		bonuses: zt(e.offers),
		uiBonuses: e.uiOffers ?? !0,
		onBonusSelected: void 0,
		onBonusDeselected: void 0
	},
	...e.uiOffers === void 0 ? {} : { uiBonuses: e.uiOffers },
	...e.uiOffersStyle === void 0 ? {} : { uiBonusesStyle: e.uiOffersStyle },
	...e.uiOffersAvailable === void 0 ? {} : { uiBonusesAvailable: e.uiOffersAvailable }
}), Vt = (e, t) => ({
	...e.checkout,
	initialAmount: e.initialAmount,
	currency: e.currency,
	paymentContextId: e.paymentContextId ?? "",
	selectedOfferId: e.selectedOfferId ?? null,
	elements: t.filter((e) => e.scope === "payment")
}), Ht = (e, t) => e?.find((e) => e.id === t)?.submission?.bonusCode, Ut = (e) => ({
	id: e.code,
	title: e.title,
	description: e.description,
	logo: e.logo,
	awards: e.awards,
	conditions: e.conditions,
	preselected: e.preselected,
	termsAndConditions: e.termsAndConditions,
	submission: { bonusCode: e.code }
}), Wt = (e) => e.some((e) => e.pricing === "merchant" && [...e.conditions?.include ?? [], ...e.conditions?.exclude ?? []].some((e) => e.minAmount !== void 0 || e.maxAmount !== void 0 || e.closeToAmount !== void 0)), Gt = (e) => JSON.stringify([
	e.source?.kind ?? "checkout",
	e.source?.kind === "bonus" ? e.source.bonusCode : "",
	e.id
]), Kt = [
	"combo",
	"paymentTypes",
	"bonusSelection",
	"paymentDetails",
	"paymentConfirmation",
	"providerAction",
	"summary",
	"loading",
	"empty",
	"processing",
	"unsupported",
	"error"
], qt = [
	"header",
	"methodSwitcher",
	"progress",
	"paymentTypeItem",
	"providerActionPrompt",
	"summaryDetails",
	"summaryActions"
], W = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === Object.prototype || t === null) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"));
}, G = (e) => typeof e == "string" && e.length <= 8192, K = (e) => G(e) && e.trim().length > 0 && e === e.trim() && e.length <= 256, Jt = (e, t = 256) => Array.isArray(e) && e.length <= t && Object.keys(e).length === e.length && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value")), Yt = (e) => Jt(e) && e.every(G), Xt = (e) => G(e) && /^\d+(?:\.\d+)?$/.test(e) && e.length <= 8192, q = (e, t) => Object.keys(e).every((e) => t.includes(e)), Zt = (e) => typeof e == "number" && Number.isFinite(e), J = (e, t) => e === void 0 || t(e), Qt = (e) => J(e, Yt), Y = (e) => Qt(e.paymentStatuses) && J(e.screens, (e) => Yt(e) && e.every((e) => Kt.includes(e))), $t = (e) => J(e, (e) => W(e) && Object.keys(e).length <= 256 && Object.values(e).every(G)), X = (e) => W(e) && q(e, ["value", "key"]) && G(e.value) && J(e.key, G), en = (e, t) => e === "payment" || !t && e === "global", tn = (e, t = !1, n = !1) => !W(e) || !q(e, [
	"id",
	"scope",
	"text",
	"screens",
	"paymentStatuses",
	"tone",
	"announcement",
	...n ? [
		"placement",
		"params",
		"actions"
	] : [],
	...!n && t ? ["format"] : [],
	...!n && !t ? ["params", ...z.filter((e) => e !== "layout")] : []
]) ? !1 : K(e.id) && en(e.scope, t) && (t && !n ? X(e.text) && e.format === "markdown" : G(e.text)) && $t(e.params) && Y(e) && J(e.tone, (e) => [
	"info",
	"warning",
	"positive",
	"negative"
].includes(e)) && J(e.announcement, (e) => ["polite", "assertive"].includes(e)) && (!n || ["top", "bottom"].includes(e.placement) && J(e.actions, (e) => R(e, !0))), nn = (e, t = !1) => W(e) && q(e, [
	"id",
	"scope",
	"label",
	"screens",
	"paymentStatuses",
	"action",
	...t ? [] : ["params", ...z.filter((e) => e !== "layout")]
]) && K(e.id) && en(e.scope, t) && Y(e) && (t ? X(e.label) : K(e.label)) && $t(e.params) && e.action !== void 0 && R({ items: [{
	id: e.id,
	label: "resolved",
	action: e.action
}] }, !0), Z = (e) => {
	if (!W(e) || !q(e, [
		"id",
		"type",
		"name",
		"paymentStatuses",
		"screens",
		"message",
		"value"
	]) || !W(e.value)) return !1;
	let t = e.value;
	return K(e.id) && ["item", "currency"].includes(e.type) && J(e.name, G) && Y(e) && J(e.message, G) && q(t, [
		"type",
		"value",
		"maxValue",
		"rounding"
	]) && [
		"fixed",
		"percentage",
		"multiplier"
	].includes(t.type) && Zt(t.value) && J(t.maxValue, Zt) && J(t.rounding, (e) => [
		"floor",
		"ceil",
		"round",
		"none"
	].includes(e));
}, rn = (e) => W(e) && q(e, [
	"id",
	"type",
	"name",
	"value",
	"formattedValue",
	"quantityText",
	"text",
	"paymentStatuses",
	"screens",
	"source"
]) && J(e.source, (e) => W(e) && (e.kind === "checkout" && q(e, ["kind"]) || e.kind === "bonus" && q(e, ["kind", "bonusCode"]) && K(e.bonusCode))) && K(e.id) && ["item", "currency"].includes(e.type) && Xt(e.value) && G(e.formattedValue) && J(e.quantityText, G) && G(e.text) && J(e.name, G) && Y(e), Q = (e, t, n, r, i = (e) => String(e.id), a = 256) => {
	if (e === void 0) return;
	if (!Jt(e, a)) {
		r.push({
			code: "invalid-value",
			path: t
		});
		return;
	}
	let o = /* @__PURE__ */ new Set();
	e.forEach((e, a) => {
		if (!n(e)) r.push({
			code: "invalid-value",
			path: `${t}[${String(a)}]`
		});
		else if (W(e) && G(e.id)) {
			let n = i(e);
			o.has(n) && r.push({
				code: "duplicate-id",
				path: `${t}[${String(a)}].id`
			}), o.add(n);
		}
	});
}, an = (e, t = "awards") => {
	let n = [];
	try {
		Q(e, t, Z, n);
	} catch {
		n.push({
			code: "invalid-value",
			path: t
		});
	}
	return n;
}, on = (e) => {
	let t = [];
	if (!W(e)) return [{
		code: "invalid-value",
		path: "configuration"
	}];
	Rt(e.offers, Z) || t.push({
		code: "invalid-value",
		path: "offers"
	}), J(e.checkout, Lt) || t.push({
		code: "invalid-value",
		path: "checkout"
	}), J(e.selectedOfferId, (e) => e === null || K(e)) || t.push({
		code: "invalid-value",
		path: "selectedOfferId"
	}), typeof e.selectedOfferId == "string" && (!Array.isArray(e.offers) || !e.offers.some((t) => W(t) && t.id === e.selectedOfferId)) && t.push({
		code: "invalid-value",
		path: "selectedOfferId"
	}), (e.checkout !== void 0 || Array.isArray(e.offers) && e.offers.some((e) => W(e) && e.pricing === "merchant")) && (e.lockAmount !== !0 || !K(e.paymentContextId)) && t.push({
		code: "invalid-value",
		path: "checkout"
	}), Rt(e.offers, Z) && Array.isArray(e.offers) && Wt(e.offers) && (!W(e.checkout) || e.checkout.eligibilityAmount === void 0) && t.push({
		code: "invalid-value",
		path: "checkout.eligibilityAmount"
	});
	for (let n of ["uiOffers", "uiOffersAvailable"]) J(e[n], (e) => typeof e == "boolean") || t.push({
		code: "invalid-value",
		path: n
	});
	return J(e.uiOffersStyle, (e) => typeof e == "string" && [
		"page",
		"picker-payment-form",
		"picker-payment-list"
	].includes(e)) || t.push({
		code: "invalid-value",
		path: "uiOffersStyle"
	}), Array.isArray(e.elementIssues) && t.push(...e.elementIssues), t.push(...an(e.purchaseItems, "purchaseItems")), e.awards !== void 0 && t.push({
		code: "invalid-value",
		path: "awards"
	}), Q(e.displayItems, "displayItems", dt, t, (e) => JSON.stringify([e.scope, e.id])), Q(e.messages, "messages", (e) => tn(e), t, (e) => JSON.stringify([e.scope, e.id])), Q(e.actions, "actions", (e) => nn(e), t, (e) => JSON.stringify([e.scope, e.id])), J(e.paymentContextId, K) || t.push({
		code: "invalid-value",
		path: "paymentContextId"
	}), t;
}, sn = (e) => {
	if (!W(e)) return [{
		code: "invalid-value",
		path: "resumePaymentContext"
	}];
	if (e.schemaVersion !== 1 && e.schemaVersion !== 2 && e.schemaVersion !== 3 && e.schemaVersion !== 4) return [{
		code: "unsupported-version",
		path: "resumePaymentContext.schemaVersion"
	}];
	let t = [];
	(!q(e, [
		"schemaVersion",
		"paymentId",
		"merchantId",
		"paymentContextId",
		"amount",
		"currency",
		"locale",
		...e.schemaVersion === 1 ? ["awards"] : [
			"items",
			"actions",
			"elements"
		],
		"messages",
		...[3, 4].includes(e.schemaVersion) ? ["displayItems"] : [],
		...e.schemaVersion === 4 ? ["offer", "orderPricing"] : []
	]) || !K(e.paymentId) || !K(e.merchantId) || !J(e.paymentContextId, K) || !J(e.amount, Xt) || !K(e.currency) || !G(e.locale)) && t.push({
		code: "invalid-value",
		path: "resumePaymentContext"
	});
	try {
		if (!G(e.locale) || Intl.getCanonicalLocales(e.locale).length !== 1) throw Error();
	} catch {
		t.push({
			code: "invalid-value",
			path: "resumePaymentContext.locale"
		});
	}
	e.schemaVersion === 4 && (J(e.orderPricing, (t) => et(t) && t.current.currency === e.currency && typeof e.amount == "string" && typeof e.currency == "string" && T(S(t.current.value), S(Ge(e.amount, 1, e.currency))) === 0) || t.push({
		code: "invalid-value",
		path: "resumePaymentContext.orderPricing"
	}), J(e.offer, (e) => W(e) && q(e, [
		"id",
		"title",
		"description",
		"submission",
		"couponCode"
	]) && K(e.id) && X(e.title) && X(e.description) && J(e.couponCode, G) && J(e.submission, (e) => W(e) && q(e, ["bonusCode"]) && K(e.bonusCode))) || t.push({
		code: "invalid-value",
		path: "resumePaymentContext.offer"
	})), (e.schemaVersion === 3 || e.schemaVersion === 4) && Q(e.displayItems, "resumePaymentContext.displayItems", (t) => pt(t, e.schemaVersion === 4) && (!t.amount || t.amount.currency === e.currency), t);
	let n = e.schemaVersion === 1, r = n ? "awards" : "items";
	return Q(e[r], `resumePaymentContext.${r}`, rn, t, (e) => Gt(e), 512), Q(e.messages, "resumePaymentContext.messages", (e) => tn(e, !0, n), t), n || Q(e.actions, "resumePaymentContext.actions", (e) => nn(e, !0), t), !n && e.elements !== void 0 && (Array.isArray(e.elements) && e.elements.reduce((e, t) => e + (W(t) && Array.isArray(t.items) ? t.items.length : 0), 0) > 512 && t.push({
		code: "invalid-value",
		path: "resumePaymentContext.elements"
	}), Q(e.elements, "resumePaymentContext.elements", (t) => W(t) && q(t, [
		"id",
		"scope",
		"screens",
		"paymentStatuses",
		"items"
	]) && K(t.id) && t.scope === "payment" && Y(t) && Jt(t.items) && t.items.every((t) => {
		if (!W(t) || !q(t, ["id", "kind"]) || !K(t.id)) return !1;
		let n = {
			text: "messages",
			action: "actions",
			award: "items"
		};
		if (t.kind === "item" && e.schemaVersion !== 3 && e.schemaVersion !== 4 || t.kind !== "item" && !Object.hasOwn(n, String(t.kind))) return !1;
		let r = t.kind === "item" ? "displayItems" : n[t.kind];
		return Array.isArray(e[r]) && e[r].some((e) => W(e) && e.id === t.id && (t.kind === "award" ? !W(e.source) || e.source.kind === "checkout" : e.scope === "payment"));
	}) && new Set(t.items.map((e) => W(e) ? `${String(e.kind)}:${String(e.id)}` : "")).size === t.items.length, t)), t;
}, cn = (e) => {
	try {
		let t = on(e);
		return !t.length && W(e) && (structuredClone(e.displayItems), structuredClone(e.purchaseItems), structuredClone(e.actions), structuredClone(e.messages)), t;
	} catch {
		return [{
			code: "invalid-value",
			path: "configuration"
		}];
	}
}, ln = (e) => {
	try {
		if (!W(e)) return [{
			code: "invalid-value",
			path: "configuration"
		}];
		let t = [
			"purchaseItems",
			"messages",
			"actions",
			"itemOptions",
			"actionLayout",
			"elementGroups",
			"elementIssues",
			"displayItems"
		].filter((t) => Object.hasOwn(e, t)).map((e) => ({
			code: "invalid-value",
			path: e
		}));
		return t.length ? t : cn(e);
	} catch {
		return [{
			code: "invalid-value",
			path: "configuration"
		}];
	}
}, un = (e) => {
	try {
		let t = sn(e);
		return t.length || structuredClone(e), t;
	} catch {
		return [{
			code: "invalid-value",
			path: "resumePaymentContext"
		}];
	}
}, dn = (e) => {
	try {
		return Rt(e, Z) ? [] : [{
			code: "invalid-value",
			path: "offers"
		}];
	} catch {
		return [{
			code: "invalid-value",
			path: "offers"
		}];
	}
}, fn = (e) => {
	try {
		return e === void 0 || Lt(e) ? [] : [{
			code: "invalid-value",
			path: "checkout"
		}];
	} catch {
		return [{
			code: "invalid-value",
			path: "checkout"
		}];
	}
}, pn = (e, t, n) => {
	let r = S(e.value);
	if (e.type !== "fixed") {
		if (t === void 0) return null;
		let n = S(t);
		r = {
			coefficient: n.coefficient * r.coefficient,
			scale: n.scale + r.scale + (e.type === "percentage" ? 2 : 0)
		};
	}
	if (e.maxValue !== void 0) {
		let t = S(e.maxValue);
		T(r, t) > 0 && (r = t);
	}
	if (r.coefficient <= 0n) return null;
	if (n && e.rounding !== "none") {
		let t = 10n ** BigInt(r.scale), n = r.coefficient / t, i = r.coefficient % t;
		(e.rounding === "ceil" && i > 0n || e.rounding === "round" && i * 2n >= t) && (n += 1n), r = {
			coefficient: n,
			scale: 0
		};
	}
	return r.coefficient > 0n ? C(r) : null;
}, mn = (e, t) => {
	let [n, r] = e.split("."), i = new Intl.NumberFormat(t, { useGrouping: !1 }), a = i.format(BigInt(n));
	return r ? `${a}${i.formatToParts(1.1).find((e) => e.type === "decimal")?.value ?? "."}${r.split("").map((e) => i.format(Number(e))).join("")}` : a;
}, hn = (e, t, n = !1) => e === void 0 ? n : !!(t && e.some((e) => e.trim().toLowerCase() === t.trim().toLowerCase())), gn = (e, t) => {
	let n = [];
	if (an(e).length) return n;
	for (let r of e ?? []) {
		if (!Number.isFinite(r.value.value) || r.value.maxValue !== void 0 && !Number.isFinite(r.value.maxValue)) continue;
		let e = pn(r.value, t.amount, r.type === "item");
		if (e === null) continue;
		let i = r.type === "item" ? t.resolveText(r.name ?? "") : "";
		if (r.type === "item" && !i.trim()) continue;
		let a = r.type === "item" ? (t.formatItemValue ?? mn)(e, t.locale) : t.formatAmount(e), o = r.type === "item" ? "award.quantity.item" : "{value}", s = t.resolveText(o), c = s === "award.quantity.item" ? "{value} {name}" : s, l = t.resolveText(r.message || t.defaultMessage || c), u = {
			...t.parameters,
			value: a,
			name: i,
			amount: t.amount === void 0 ? "" : t.formatAmount(t.amount)
		};
		if (A(t.locale).direction === "rtl") for (let e of ["value", "amount"]) u[e] && (u[e] = `\u2068${u[e]}\u2069`);
		n.push({
			id: r.id,
			type: r.type,
			value: e,
			formattedValue: a,
			quantityText: c.replace(/\{(value|name)\}/g, (e, t) => u[t] ?? e),
			...i ? { name: i } : {},
			text: l.replace(/\{(value|amount|name|bonusTitle|bonusCode)\}/g, (e, t) => u[t] ?? e),
			...r.screens ? { screens: [...r.screens] } : {},
			...r.paymentStatuses ? { paymentStatuses: [...r.paymentStatuses] } : {},
			...t.source ? { source: structuredClone(t.source) } : {}
		});
	}
	return n;
}, _n = (e, t, n, r = t === "preview" ? "quantity" : "message") => {
	if (r === "message") return e.text;
	if (e.quantityText !== void 0) return e.quantityText;
	let i = n === "rtl" ? `\u2068${e.formattedValue}\u2069` : e.formattedValue;
	return e.type === "currency" ? i : e.name ? `${i} ${e.name}` : e.text;
}, $ = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), vn = (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value")), yn = (e) => typeof e == "string" && e.length > 0 && e.length <= 256 && e.trim() === e, bn = (e) => vn(e) && e.every((e) => typeof e == "string" && e.length <= 8192), xn = (e) => (e.screens === void 0 || bn(e.screens) && e.screens.every((e) => Kt.includes(e))) && (e.paymentStatuses === void 0 || bn(e.paymentStatuses)), Sn = (e) => (e && typeof e == "object" && !Object.isFrozen(e) && (Object.values(e).forEach(Sn), Object.freeze(e)), e), Cn = (e) => JSON.stringify(e, (e, t) => $(t) ? Object.fromEntries(Object.keys(t).sort().map((e) => [e, t[e]])) : t);
function wn(e) {
	if (e === void 0) return {};
	let t = (e, t = "invalid-value") => ({
		elementGroups: [],
		elementIssues: [{
			code: t,
			path: e
		}]
	});
	try {
		if (!vn(e)) return t("presentation.elements");
		let n = [], r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), a = 0, o = [], s = [], c = [], l = [];
		for (let [u, d] of e.entries()) {
			let e = `presentation.elements[${String(u)}]`;
			if (!$(d) || !yn(d.id) || !["payment", "global"].includes(String(d.scope)) || !xn(d) || !vn(d.items) || Object.keys(d).some((e) => ![
				"id",
				"scope",
				"screens",
				"paymentStatuses",
				"items",
				...z
			].includes(e))) return t(e);
			if (r.has(d.id)) return t(`${e}.id`, "duplicate-id");
			r.add(d.id);
			let f = /* @__PURE__ */ new Set();
			for (let [n, r] of d.items.entries()) {
				if (++a > 512) return t("presentation.elements");
				let u = `${e}.items[${String(n)}]`;
				if (!$(r) || !yn(r.id) || ![
					"text",
					"action",
					"award",
					"item"
				].includes(String(r.kind))) return t(u);
				let { kind: p, ...m } = V(r), h = `${String(d.scope)}:${String(p)}:${r.id}`;
				if (f.has(h)) return t(`${u}.id`, "duplicate-id");
				f.add(h);
				let g = {
					...m,
					scope: d.scope
				};
				if (p === "award" && (g = $(m.award) ? {
					...m.award,
					id: r.id
				} : void 0), p === "award" && (d.scope !== "payment" || Object.keys(m).some((e) => !["id", "award"].includes(e)))) return t(u);
				let ee = {
					text: "messages",
					action: "actions",
					award: "purchaseItems"
				}[p];
				if (p === "item" ? !dt(g) : cn({ [ee]: [g] }).length > 0) return t(u);
				let _ = Cn(g);
				if (i.has(h)) {
					if (i.get(h) !== _) return t(`${u}.id`, "duplicate-id");
					continue;
				}
				i.set(h, _), p === "item" ? l.push(g) : p === "text" ? o.push(g) : p === "action" ? s.push(g) : c.push(g);
			}
			n.push({
				id: d.id,
				scope: d.scope,
				screens: d.screens,
				paymentStatuses: d.paymentStatuses,
				...Dn(d),
				items: d.items.map((e) => ({
					...V(e),
					...B(Object.fromEntries(z.filter((t) => t !== "layout" && t !== "placement" && Object.hasOwn(e, t)).map((t) => [t, e[t]])))
				}))
			});
		}
		return {
			elementGroups: structuredClone(n),
			messages: o,
			actions: s,
			purchaseItems: c,
			displayItems: l
		};
	} catch {
		return t("presentation.elements");
	}
}
var Tn = (e) => wn(e).elementIssues ?? [], En = (e) => e?.filter((e) => e.scope === "payment").map((e) => ({
	id: e.id,
	scope: "payment",
	screens: e.screens,
	paymentStatuses: e.paymentStatuses,
	items: e.items.map((e) => ({
		id: e.id,
		kind: e.kind
	}))
})), Dn = (e) => B(Object.fromEntries(z.filter((t) => e?.[t] !== void 0).map((t) => [t, e?.[t]])), !0);
function On({ groups: e, frozen: t, messages: n, actions: r, items: i, displayItems: a = [], screen: o, status: s }) {
	let c = t ?? e.filter((e) => e.scope === "payment"), l = [], u = 0;
	for (let t of e) if (t.scope === "global") l.push(t);
	else {
		let e = c.at(u++);
		e && l.push(e);
	}
	return l.push(...c.slice(u)), l.filter((e) => (e.screens === void 0 || e.screens.includes(o)) && ([
		"combo",
		"paymentTypes",
		"bonusSelection",
		"paymentDetails",
		"paymentConfirmation"
	].includes(o) || e.paymentStatuses === void 0 || hn(e.paymentStatuses, s, !0))).flatMap((t) => {
		let o = e.find((e) => e.scope === t.scope && e.id === t.id), s = Dn(o), { layout: c, placement: l, ...u } = s, d = t.items.flatMap((e) => {
			let s = o?.items.find((t) => t.kind === e.kind && t.id === e.id), c = {
				...u,
				...B(Object.fromEntries(z.filter((e) => e !== "layout" && e !== "placement" && s?.[e] !== void 0).map((e) => [e, s?.[e]])))
			};
			if (e.kind === "text") {
				let r = n.find((n) => n.scope === t.scope && n.id === e.id);
				return r ? [{
					kind: "text",
					...r,
					presentation: c
				}] : [];
			}
			if (e.kind === "action") {
				let n = r.find((n) => n.scope === t.scope && n.id === e.id);
				return n ? [{
					kind: "action",
					...n,
					presentation: c
				}] : [];
			}
			if (e.kind === "item") {
				let n = a.find((n) => n.scope === t.scope && n.id === e.id);
				return n ? [{
					kind: "item",
					...n,
					presentation: c
				}] : [];
			}
			let l = i.find((t) => t.source?.kind !== "bonus" && t.id === e.id);
			return l ? [{
				kind: "award",
				...l,
				presentation: c
			}] : [];
		});
		return d.length ? [Sn({
			id: t.id,
			scope: t.scope,
			presentation: s,
			items: d
		})] : [];
	});
}
var kn = (e) => {
	let t = wn(e);
	return Cn({
		issues: t.elementIssues,
		groups: En(t.elementGroups),
		items: t.purchaseItems,
		displayItems: t.displayItems?.filter((e) => e.scope === "payment"),
		messages: t.messages?.filter((e) => e.scope === "payment"),
		actions: t.actions?.filter((e) => e.scope === "payment")
	});
}, An = (e) => {
	try {
		return $(e) && Object.keys(e).every((e) => ["elements", "options"].includes(e)) && Tn(e.elements).length === 0 && (e.options === void 0 || Mt(e.options));
	} catch {
		return !1;
	}
}, jn = (e) => [
	...(e.messages ?? []).map((e) => ({
		id: `recovered-text:${e.id}`,
		scope: "payment",
		screens: e.screens,
		paymentStatuses: e.paymentStatuses,
		items: [{
			id: e.id,
			kind: "text"
		}]
	})),
	...(e.items ?? []).filter((e) => e.source?.kind !== "bonus").length ? [{
		id: "recovered-awards",
		scope: "payment",
		items: (e.items ?? []).filter((e) => e.source?.kind !== "bonus").map((e) => ({
			id: e.id,
			kind: "award"
		}))
	}] : [],
	...(e.actions ?? []).length ? [{
		id: "recovered-actions",
		scope: "payment",
		items: (e.actions ?? []).map((e) => ({
			id: e.id,
			kind: "action"
		}))
	}] : []
], Mn = ({ messages: e, actions: t, items: n, itemOptions: r = {}, actionLayout: i }) => Sn([
	...e.map((e) => ({
		id: `recovered-text:${e.id}`,
		scope: e.scope,
		presentation: {
			placement: "legacyPlacement" in e ? e.legacyPlacement : e.presentation?.placement,
			...e.presentation
		},
		items: [{
			...e,
			kind: "text",
			presentation: e.presentation ?? {}
		}]
	})),
	...n.length ? [{
		id: "recovered-awards",
		scope: "payment",
		presentation: r,
		items: n.map((e) => ({
			...e,
			kind: "award",
			presentation: r
		}))
	}] : [],
	...t.map((e) => ({
		id: `recovered-action:${e.id}`,
		scope: e.scope,
		presentation: {
			placement: "bottom",
			layout: i,
			...e.presentation
		},
		items: [{
			...e,
			kind: "action",
			presentation: e.presentation ?? {}
		}]
	}))
]), Nn = (e, t) => {
	let n = (e, t) => ({
		...V(e),
		...B(Object.fromEntries(z.filter((e) => Object.hasOwn(t, e)).map((e) => [e, t[e]])), !0)
	});
	return e.map((e) => {
		let r = t.find((t) => t.id === e.id && t.scope === e.scope);
		return {
			...n(e, r ?? e),
			items: e.items.map((e) => n(e, r?.items.find((t) => t.id === e.id && t.kind === e.kind) ?? e))
		};
	});
}, Pn = Mt, Fn = jt, In = Tn, Ln = An;
//#endregion
export { We as $, Pt as A, oe as At, Tt as B, t as Bt, cn as C, u as Ct, Bt as D, ne as Dt, Gt as E, ce as Et, B as F, ae as Ft, at as G, ot as H, Nt as I, m as It, O as J, A as K, V as L, a as Lt, Ht as M, h as Mt, Wt as N, g as Nt, Ut as O, _ as Ot, Mt as P, le as Pt, Ge as Q, R, o as Rt, ln as S, ie as St, qt as T, se as Tt, it as U, nt as V, lt as W, $e as X, E as Y, He as Z, Xt as _, be as _t, jn as a, Ve as at, dn as b, v as bt, En as c, Fe as ct, Mn as d, x as dt, C as et, Tn as f, ke as ft, pn as g, we as gt, gn as h, Ae as ht, In as i, Ue as it, Lt as j, ue as jt, Vt as k, te as kt, wn as l, Ie as lt, _n as m, b as mt, Ln as n, w as nt, Nn as o, Be as ot, hn as p, Te as pt, D as q, Pn as r, S as rt, kn as s, ze as st, Fn as t, Ke as tt, On as u, Pe as ut, an as v, Se as vt, Kt as w, ee as wt, un as x, re as xt, fn as y, y as yt, yt as z, s as zt };
