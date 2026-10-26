/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { CashierSummaryActionType as e } from "./types/CashierConfig.js";
//#region src/utils/debugLogger.ts
var t = {
	log(e, ...t) {
		e && console.log(...t);
	},
	warn(e, ...t) {
		e && console.warn(...t);
	},
	error(e, ...t) {
		e && console.error(...t);
	}
}, n = {
	layout: "row",
	items: [{
		id: "restart",
		type: e.BUTTON,
		label: "cta.back",
		themeVariant: "neutral",
		action: "restart"
	}]
}, r = /* @__PURE__ */ new Set([
	"https:",
	"http:",
	"mailto:",
	"tel:"
]), i = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return t.length > 0 ? t : null;
}, a = (e, n) => {
	t.warn(e, "Cashier summaryActions ignored:", n);
}, o = (e) => {
	let t = e.trim();
	if (!t) return !1;
	try {
		let e = new URL(t, "https://cashier.local");
		return r.has(e.protocol.toLowerCase());
	} catch {
		return !1;
	}
}, s = (e, t) => {
	let n = new Set(e?.split(/\s+/).map((e) => e.trim()).filter(Boolean) ?? []);
	return t === "_blank" && (n.add("noopener"), n.add("noreferrer")), n.size > 0 ? Array.from(n).join(" ") : void 0;
}, c = (e) => o(e.href) ? {
	href: e.href,
	...e.target === void 0 ? {} : { target: e.target },
	...s(e.rel, e.target) === void 0 ? {} : { rel: s(e.rel, e.target) },
	...e.referrerPolicy === void 0 ? {} : { referrerPolicy: e.referrerPolicy },
	...e.download === void 0 ? {} : { download: e.download }
} : null, l = (e) => !!e && typeof e == "object" && "href" in e, u = (e, t) => {
	if (e.paymentStatuses === void 0) return !0;
	let n = i(t);
	return n ? e.paymentStatuses.map((e) => i(e)).includes(n) : !1;
}, d = (t, n) => {
	let r = t.type === e.TEXT ? e.TEXT : e.BUTTON;
	if (!n.preview && t.paymentStatuses?.length === 0) return a(n.debug, `action "${t.id}" has empty paymentStatuses`), null;
	if (!n.preview && !u(t, n.paymentStatus)) return null;
	if (r === e.BUTTON && t.action === void 0) return a(n.debug, `button action "${t.id}" is missing action`), null;
	let i;
	if (t.action === "restart") i = "restart";
	else if (l(t.action) && (i = c(t.action) ?? void 0, !i)) return a(n.debug, `action "${t.id}" has an unsafe URL`), null;
	return {
		id: t.id,
		type: r,
		label: t.label,
		themeVariant: t.themeVariant ?? "neutral",
		...i === void 0 ? {} : { action: i }
	};
}, f = (t) => t.layout ? t.layout : t.items.some((t) => t.type === e.TEXT) || t.items.filter((t) => t.type !== e.TEXT).length > 2 ? "stack" : "row", p = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = [];
	return e.items.forEach((e) => {
		if (n.has(e.id)) {
			a(t.debug, `duplicate action id "${e.id}"`);
			return;
		}
		n.add(e.id);
		let i = d(e, t);
		i && r.push(i);
	}), r.length === 0 ? null : {
		layout: f({
			...e,
			items: r
		}),
		items: r
	};
}, m = (e, t = {}) => p(e ?? n, t), h = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), g = (e, t) => Object.keys(e).every((e) => t.includes(e)), _ = (e) => typeof e == "string" && e.length <= 8192, v = (e) => _(e) && e.trim().length > 0 && e === e.trim() && e.length <= 256, y = (e, t) => e === void 0 || t(e), b = (e) => (t) => typeof t == "string" && e.includes(t), x = (e, t = !1) => {
	try {
		if (!h(e) || !y(e.layout, b(["row", "stack"])) || !Array.isArray(e.items) || t && (!g(e, ["layout", "items"]) || e.items.length > 256 || Object.keys(e.items).length !== e.items.length || Object.values(Object.getOwnPropertyDescriptors(e.items)).some((e) => !Object.hasOwn(e, "value")))) return !1;
		let n = /* @__PURE__ */ new Set();
		return e.items.every((e) => {
			if (!h(e) || typeof e.id != "string" || typeof e.label != "string" || !y(e.type, b(["button", "text"])) || !y(e.themeVariant, b([
				"neutral",
				"secondary",
				"primary",
				"success",
				"danger",
				"warning",
				"info"
			])) || t && (!y(e.appearance, b([
				"solid",
				"ghost",
				"outline",
				"muted"
			])) || !y(e.size, b([
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			]))) || !y(e.paymentStatuses, (e) => Array.isArray(e) && e.every((e) => typeof e == "string")) || t && (!v(e.id) || !_(e.label) || !e.label.trim() || n.has(e.id) || !g(e, [
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
			return !h(r) || typeof r.href != "string" || !y(r.target, _) || !y(r.rel, _) || !y(r.referrerPolicy, _) || !y(r.download, (e) => typeof e == "boolean" || _(e)) ? !1 : !t || g(r, [
				"href",
				"target",
				"rel",
				"referrerPolicy",
				"download"
			]) && _(r.href) && o(r.href) && y(r.referrerPolicy, b([
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
}, ee = (e) => {
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
}, te = { BTC: 8 }, ne = (e, t) => {
	let n = te[e.toUpperCase()];
	if (n !== void 0) return n;
	try {
		let n = new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits;
		return typeof n == "number" ? n : 2;
	} catch {
		return 2;
	}
}, re = (e, t, n, r, i) => {
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
}, ie = ({ currency: e, locale: t, formatOptions: n, useCurrencyScale: r = !1, defaultMaxFractionDigits: i = 2 }) => {
	let a = n?.minimumFractionDigits, o = n?.maximumFractionDigits;
	if (r) {
		let n = ne(e, t);
		a === void 0 && (a = n), o === void 0 && (o = n);
	} else o === void 0 && (o = i);
	if (te[e.toUpperCase()] === void 0) try {
		return new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currencyDisplay: "code",
			...n,
			currency: e,
			...a === void 0 ? {} : { minimumFractionDigits: a },
			maximumFractionDigits: o
		});
	} catch {}
	return re(e, t, n, a, o);
}, ae = (e, t) => {
	let n = ee(e.value);
	return n === null ? "" : ie({
		currency: e.currency,
		locale: t?.locale,
		useCurrencyScale: !0
	}).format(n);
}, oe = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e, n = typeof t.currency == "string", r = ee(t.value) !== null;
	return n && r;
}, se = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";
new RegExp(se, "u");
var ce = "^(https?://.+|/.*)$", le = "^\\d+(\\.\\d{1,2})?$", ue = "^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$", de = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/, fe = "\\s+";
new RegExp(fe, "g");
var pe = new RegExp(fe), me = /^rgba?\((.+)\)$/i, he = /[\s,/]+/, ge = /^color\(\s*([a-z0-9-]+)\s+(.+)\)$/i, _e = /^#?([a-fA-F0-9]{6})$/, ve = /^#?([a-fA-F0-9]{3})$/, ye = /^[0-9]$/, be = /^[0-9a-z]$/i, xe = /^[a-z]$/i, Se = /[?#]/u, Ce = /^https:\/\//iu, we = /^data:font\//iu, Te = /^[-+]?\d*(?:\.(\d*))?(?:e[-+]?(\d+))?$/i, Ee = /\.?0+$/, De = /\D/g, Oe = /(.{4})/g, ke = /,/g, Ae = /[^\d.]/g;
new RegExp(ce, "u"), new RegExp(se, "u");
var S = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim();
	return t.length > 0 ? t : null;
}, je = 15, Me = 34, Ne = /[^a-z0-9]/gi, Pe = /^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/, Fe = {
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
}, C = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim();
	return t.length === 0 ? "" : t.replace(Ne, "").toUpperCase();
}, Ie = (e) => {
	let t = C(e);
	return t.length === 0 ? "" : t.replace(Oe, "$1 ").trim();
}, Le = {
	formatDisplayValue: (e) => Ie(e),
	parseUserInput: (e) => C(e)
}, Re = (e) => {
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
}, ze = (e) => {
	let t = C(e);
	if (t.length === 0 || t.length < je || t.length > Me || !Pe.test(t)) return !1;
	let n = Fe[t.slice(0, 2)];
	return !n || t.length !== n ? !1 : Re(t) === 1;
}, Be = /^\d+(?:\.\d+)?$/u, Ve = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim().replace(ke, ".");
	if (t.length === 0) return "";
	let n = t.replace(Ae, "");
	if (n.length === 0) return "";
	let [r = "", ...i] = n.split("."), a = i.pop() ?? "", o = `${r}${i.join("")}`;
	return t.endsWith(".") ? `${o}.` : a.length === 0 ? o : `${o}.${a}`;
}, w = (e) => {
	let t = Ve(e);
	return t.length === 0 || t === "." ? "" : t.startsWith(".") ? `0${t}` : t.endsWith(".") ? t.slice(0, -1) : t;
}, He = (e) => w(e).length > 0, Ue = (e) => {
	let [t = "0", n = ""] = w(e).split(".");
	return {
		integer: t.replace(/^0+(?=\d)/, "") || "0",
		fraction: n.replace(/0+$/, "")
	};
}, T = (e, t) => {
	let n = Ue(e), r = Ue(t);
	if (n.integer.length !== r.integer.length) return n.integer.length > r.integer.length ? 1 : -1;
	if (n.integer !== r.integer) return n.integer > r.integer ? 1 : -1;
	let i = Math.max(n.fraction.length, r.fraction.length), a = n.fraction.padEnd(i, "0"), o = r.fraction.padEnd(i, "0");
	return a === o ? 0 : a > o ? 1 : -1;
}, We = (e) => {
	if (e == null) return null;
	let t = w(e);
	return t.length > 0 ? t : null;
}, Ge = (e) => e.length === 0 || e === "." || e.endsWith("."), Ke = (e, t) => {
	let n = Ve(e), r = Ge(n), i = r ? null : w(n), a = We(t?.min), o = We(t?.max), s = We(t?.maxBoundary), c = o === null ? s : s === null || T(o, s) <= 0 ? o : s, l = i !== null && a !== null && T(i, a) < 0, u = i !== null && c !== null && T(i, c) > 0;
	return {
		value: i,
		min: a,
		max: c,
		isBelowMin: l,
		isAboveMax: u,
		isOutOfRange: l || u,
		isIncomplete: r
	};
}, qe = (e) => {
	if (typeof e != "string" || e.trim().length === 0) return [];
	let t = /* @__PURE__ */ new Set(), n = [];
	return e.split(",").forEach((e) => {
		let r = e.trim();
		if (!Be.test(r)) return;
		let i = w(r);
		i.length !== 0 && (t.has(i) || (t.add(i), n.push(i)));
	}), n;
}, Je = /^\d{4}-\d{2}-\d{2}$/, Ye = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/, Xe = (e) => Je.test(e) || de.test(e) || Ye.test(e), Ze = (e, t = {}) => {
	if (e == null) return null;
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		if (t.strict || !Number.isFinite(e)) return null;
		let n = new Date(e);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	if (typeof e == "string") {
		let n = e.trim();
		if (!n || t.strict && !Xe(n)) return null;
		let r = new Date(n);
		return Number.isNaN(r.getTime()) ? null : r;
	}
	return null;
}, Qe = ({ locale: e, formatOptions: t }) => new Intl.DateTimeFormat(e ?? void 0, t), $e = (e, t, n) => {
	let r = Ze(e);
	if (!r) return "—";
	try {
		return Qe({
			locale: t,
			formatOptions: n
		}).format(r);
	} catch {
		return r.toISOString();
	}
}, et = new RegExp(ue, "u"), tt = new Intl.Locale("en-GB"), nt = (e, t = tt) => {
	if (e instanceof Intl.Locale) return e;
	if (typeof e == "string" && e.length > 0) {
		if (!et.test(e)) return t;
		try {
			return new Intl.Locale(e);
		} catch {}
		try {
			let [t] = Intl.getCanonicalLocales(e);
			if (t) return new Intl.Locale(t);
		} catch {}
	}
	return t;
}, rt = (e) => e instanceof Intl.Locale ? e.toString() : nt(e).toString();
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
//#region src/utils/decimalMoney.ts
var E = (e) => {
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
}, D = ({ coefficient: e, scale: t }) => {
	let n = e < 0n, r = (n ? -e : e).toString().padStart(t + 1, "0"), i = t ? `${r.slice(0, -t)}.${r.slice(-t)}`.replace(/\.?0+$/, "") : r;
	return `${n ? "-" : ""}${i}`;
}, O = (e, t) => ({
	coefficient: e.coefficient * t.coefficient,
	scale: e.scale + t.scale
}), it = (e, t) => {
	let n = Math.max(e.scale, t.scale);
	return {
		coefficient: e.coefficient * 10n ** BigInt(n - e.scale) + t.coefficient * 10n ** BigInt(n - t.scale),
		scale: n
	};
}, at = (e, t) => {
	if (e.scale <= t) return e;
	let n = 10n ** BigInt(e.scale - t), r = e.coefficient < 0n ? -1n : 1n, i = e.coefficient * r;
	return {
		coefficient: (i / n + (i % n * 2n >= n ? 1n : 0n)) * r,
		scale: t
	};
}, ot = (e) => {
	if (e.toUpperCase() === "BTC") return 8;
	try {
		return new Intl.NumberFormat("en", {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits ?? 2;
	} catch {
		return 2;
	}
}, st = (e, t, n) => D(at(O(E(e), E(t ?? 1)), ot(n))), ct = (e, t, n, r) => ie({
	currency: t,
	locale: n,
	formatOptions: {
		trailingZeroDisplay: "stripIfInteger",
		...r
	},
	useCurrencyScale: !0
}).format(e), k = (e, t) => {
	let n = it(e, {
		...t,
		coefficient: -t.coefficient
	});
	return n.coefficient === 0n ? 0 : n.coefficient < 0n ? -1 : 1;
}, lt = (e, t) => it(e, {
	...t,
	coefficient: -t.coefficient
}), ut = (e, t) => {
	let n = O(e, t);
	return {
		...n,
		scale: n.scale + 2
	};
}, dt = (e, t) => {
	let n = E(e), r = E(t);
	if (r.coefficient <= 0n) return "0";
	let i = n.coefficient * 10n ** BigInt(r.scale) * 10000n, a = r.coefficient * 10n ** BigInt(n.scale);
	return D({
		coefficient: i / a + (i % a * 2n >= a ? 1n : 0n),
		scale: 2
	});
}, ft = (e, t) => e.replace(/\{(\w+)\}/g, (e, n) => t[n] ?? e), A = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), j = (e, t) => Object.keys(e).every((e) => t.includes(e)), M = (e) => typeof e == "string" && e.length <= 512 && /^\d+(?:\.\d+)?$/.test(e), N = (e, t) => e === void 0 || t(e), pt = (e) => typeof e == "string" && e.length > 0 && e.length <= 256 && e.trim() === e, mt = (e, t = !1) => !A(e) || !j(e, [
	"referenceAmount",
	...t ? [] : ["amount"],
	"discount",
	"allocations",
	"savingsDisplay"
]) ? !1 : N(e.referenceAmount, M) && N(e.amount, M) && N(e.savingsDisplay, (e) => [
	"amount",
	"percentage",
	"both"
].includes(String(e))) && N(e.discount, (e) => A(e) && j(e, [
	"type",
	"value",
	"maxValue",
	"basis"
]) && ["fixed", "percentage"].includes(String(e.type)) && M(e.value) && N(e.maxValue, M) && (t ? e.basis === "order" : ["unit", "line"].includes(String(e.basis))) && (e.type !== "percentage" || k(E(e.value), E(100)) <= 0)) && N(e.allocations, (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && new Set(e.map((e) => A(e) ? e.id : void 0)).size === e.length && e.every((e) => A(e) && j(e, [
	"id",
	"applicationId",
	"offerId",
	"amount"
]) && pt(e.id) && pt(e.applicationId) && N(e.offerId, pt) && M(e.amount))), ht = (e, t, n, r = 1, i = !1) => {
	if (!e) return;
	let a = e.discount, o = t === void 0 ? void 0 : E(t);
	(!i && a?.basis === "unit" && o || !i && o) && (o = O(o, E(r)));
	let s = o;
	if (!i && e.amount !== void 0 && (s = E(e.amount)), !i && e.amount === void 0 && o && a) {
		let e = a.basis === "unit" && t !== void 0 ? E(t) : o, n = a.type === "fixed" ? E(a.value) : ut(e, E(a.value));
		a.maxValue !== void 0 && k(n, E(a.maxValue)) > 0 && (n = E(a.maxValue));
		let i = lt(e, n);
		i.coefficient < 0n && (i = E(0)), s = a.basis === "unit" ? O(i, E(r)) : i;
	}
	if (!s) return;
	let c = ot(n.currency), l = (e) => ({
		value: e,
		currency: n.currency,
		display: ct(e, n.currency, n.locale, n.formatOptions)
	}), u = l(D(at(s, c))), d = e.referenceAmount ?? (a && o ? D(o) : void 0), f = d === void 0 ? void 0 : l(st(d, 1, n.currency)), p = f ? lt(E(f.value), E(u.value)) : void 0, m = p && p.coefficient > 0n ? l(D(p)) : void 0, h = f && m ? dt(m.value, f.value) : void 0, g = (e) => {
		let t = E(e);
		return new Intl.NumberFormat(n.locale, {
			style: "percent",
			maximumFractionDigits: 2
		}).format(D({
			...t,
			scale: t.scale + 2
		}));
	}, _ = `offer.saving.${e.savingsDisplay ?? "amount"}`, v = m && h !== void 0 ? { value: ft(n.resolveText(_).value, {
		amount: m.display,
		percentage: g(h)
	}) } : void 0, y = a ? { value: ft(n.resolveText(a.type === "fixed" ? "offer.discount.amount" : "offer.discount.percentage").value, { value: a.type === "fixed" ? l(a.value).display : g(a.value) }) } : void 0;
	return {
		current: u,
		...f && k(E(f.value), E(u.value)) > 0 ? { reference: f } : {},
		...m ? {
			saving: m,
			savingLabel: v
		} : {},
		...y ? { advertisedLabel: y } : {},
		...e.allocations ? { allocations: structuredClone(e.allocations) } : {}
	};
}, gt = (e) => {
	let t = (e) => A(e) && j(e, [
		"value",
		"currency",
		"display"
	]) && M(e.value) && typeof e.currency == "string" && /^[A-Z]{3}$/.test(e.currency) && typeof e.display == "string" && e.display.length <= 8192, n = (e) => A(e) && j(e, ["value", "key"]) && typeof e.value == "string" && e.value.length <= 8192 && (e.key === void 0 || typeof e.key == "string");
	return A(e) && j(e, [
		"current",
		"reference",
		"saving",
		"savingLabel",
		"advertisedLabel",
		"allocations"
	]) && t(e.current) && N(e.reference, t) && N(e.saving, t) && N(e.savingLabel, n) && N(e.advertisedLabel, n) && mt({ allocations: e.allocations }) && [e.reference, e.saving].every((t) => t === void 0 || A(t) && A(e.current) && t.currency === e.current.currency);
}, _t = (e) => e.offers !== void 0 || e.checkout !== void 0, vt = (e) => typeof e == "string" && e.trim() === e && e.length > 0 && e.length <= 256, yt = /* @__PURE__ */ RegExp("^(?:min|max|closeTo)(?:Amount|PayinCount|TotalPayinAmount|DaysSinceRegistration)$"), P = (e) => typeof e == "string" && e.length <= 8192, F = (e, t) => e === void 0 || t(e), bt = (e) => A(e) && j(e, [
	"pricing",
	"expiresAt",
	"eligibilityAmount"
]) && F(e.pricing, (e) => mt(e, !0)) && F(e.expiresAt, (e) => typeof e == "string" && /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/.test(e) && Number.isFinite(Date.parse(e))) && F(e.eligibilityAmount, M), xt = (e, t) => e === void 0 || Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && new Set(e.map((e) => A(e) ? e.id : void 0)).size === e.length && e.every((e) => A(e) && j(e, [
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
]) && vt(e.id) && P(e.title) && P(e.description) && F(e.logo, P) && F(e.termsAndConditions, P) && F(e.couponCode, P) && F(e.preselected, (e) => typeof e == "boolean") && F(e.pricing, (e) => e === "unchanged" || e === "merchant") && F(e.submission, (e) => A(e) && j(e, ["bonusCode"]) && vt(e.bonusCode)) && F(e.awards, (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && e.every(t) && new Set(e.map((e) => A(e) ? e.id : void 0)).size === e.length) && F(e.conditions, (e) => A(e) && j(e, ["include", "exclude"]) && ["include", "exclude"].every((t) => F(e[t], (e) => Array.isArray(e) && e.length <= 256 && e.every((e) => A(e) && Object.entries(e).every(([e, t]) => [
	"method",
	"type",
	"service",
	"accountId"
].includes(e) ? typeof t == "string" : yt.test(e) && typeof t == "number" && Number.isFinite(t))))))), St = (e) => (Array.isArray(e) ? e : void 0)?.map(({ id: e, pricing: t, submission: n, couponCode: r, ...i }) => ({
	...i,
	code: e
})), Ct = (e) => ({
	...e,
	...e.offers === void 0 ? {} : {
		bonuses: St(e.offers),
		uiBonuses: e.uiOffers ?? !0,
		onBonusSelected: void 0,
		onBonusDeselected: void 0
	},
	...e.uiOffers === void 0 ? {} : { uiBonuses: e.uiOffers },
	...e.uiOffersStyle === void 0 ? {} : { uiBonusesStyle: e.uiOffersStyle },
	...e.uiOffersAvailable === void 0 ? {} : { uiBonusesAvailable: e.uiOffersAvailable }
}), wt = (e, t) => ({
	...e.checkout,
	initialAmount: e.initialAmount,
	currency: e.currency,
	paymentContextId: e.paymentContextId ?? "",
	selectedOfferId: e.selectedOfferId ?? null,
	elements: t.filter((e) => e.scope === "payment")
}), Tt = (e, t) => e?.find((e) => e.id === t)?.submission?.bonusCode, Et = (e) => ({
	id: e.code,
	title: e.title,
	description: e.description,
	logo: e.logo,
	awards: e.awards,
	conditions: e.conditions,
	preselected: e.preselected,
	termsAndConditions: e.termsAndConditions,
	submission: { bonusCode: e.code }
}), Dt = (e) => e.some((e) => e.pricing === "merchant" && [...e.conditions?.include ?? [], ...e.conditions?.exclude ?? []].some((e) => e.minAmount !== void 0 || e.maxAmount !== void 0 || e.closeToAmount !== void 0)), Ot = /^\d+(?:\.\d+)?$/u, kt = "aria.payment_content", At = /* @__PURE__ */ new Set([
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
]), jt = (e) => ({ value: e }), Mt = (e, t) => e.key ? {
	key: e.key,
	value: t
} : { value: t }, Nt = (e, t, n) => ({
	value: e,
	currency: t,
	display: n(e) || e
}), Pt = (e, t, n) => {
	let r = S(e);
	if (!r || !Ot.test(r)) return;
	let i = n(r);
	if (i) return {
		value: r,
		currency: t,
		display: i
	};
}, Ft = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) return;
	let t = {}, n = (n, r) => {
		let i = S(e[n]);
		i && (t[r] = i);
	};
	return n("default", "default"), n("dark", "dark"), n("compact-default", "compactDefault"), n("compact-dark", "compactDark"), Object.keys(t).length > 0 ? t : void 0;
}, It = ({ currency: e, description: t, disabled: n, formatMoney: r, id: i, label: a, maximumLabel: o, minimumLabel: s, paymentType: c, selected: l, unavailable: u }) => {
	let d = S(c.type);
	if (!d) return null;
	let f = S(c.service) ?? void 0, p = Pt(c.limits?.min, e, r), m = Pt(c.limits?.max, e, r), h = p || m ? {
		...p ? { minimum: {
			label: s,
			amount: p
		} } : {},
		...m ? { maximum: {
			label: o,
			amount: m
		} } : {}
	} : void 0, g = Ft(c.logo);
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
}, I = (e) => {
	let t;
	try {
		t = e instanceof Intl.Locale ? e : new Intl.Locale(e);
	} catch {
		t = new Intl.Locale("en-GB");
	}
	let n = t.textInfo?.direction ?? (At.has(t.language) ? "rtl" : "ltr");
	return {
		locale: t.toString(),
		direction: n
	};
}, L = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), R = (e) => typeof e == "string" && e.length <= 8192, z = (e, t) => e === void 0 || t(e), Lt = (e) => {
	if (!R(e) || !e.trim() || /[\u0000-\u001f]/.test(e)) return !1;
	try {
		return ["http:", "https:"].includes(new URL(e, "https://cashier.invalid/").protocol);
	} catch {
		return !1;
	}
}, Rt = (e) => L(e) && Object.keys(e).every((e) => [
	"id",
	"scope",
	"title",
	"description",
	"image",
	"quantity",
	"unitPrice",
	"pricing",
	"params"
].includes(e)) && R(e.id) && e.id.trim().length > 0 && e.id.trim() === e.id && e.id.length <= 256 && ["global", "payment"].includes(String(e.scope)) && R(e.title) && e.title.trim().length > 0 && z(e.description, R) && z(e.quantity, (e) => typeof e == "number" && Number.isSafeInteger(e) && e > 0) && z(e.unitPrice, (e) => R(e) && /^\d+(?:\.\d+)?$/.test(e)) && z(e.pricing, mt) && z(e.params, (e) => L(e) && Object.keys(e).length <= 256 && Object.values(e).every(R)) && z(e.image, (e) => L(e) && Object.keys(e).every((e) => ["src", "alt"].includes(e)) && Lt(e.src) && z(e.alt, R)), zt = (e) => L(e) && Object.keys(e).every((e) => ["value", "key"].includes(e)) && R(e.value) && z(e.key, R), Bt = (e, t = !1) => L(e) && Object.keys(e).every((e) => [
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
].includes(e)) && R(e.id) && e.id.trim().length > 0 && e.id.trim() === e.id && e.id.length <= 256 && e.scope === "payment" && zt(e.title) && z(e.description, zt) && z(e.quantity, (e) => typeof e == "number" && Number.isSafeInteger(e) && e > 0) && z(e.quantityDisplay, R) && z(e.image, (e) => L(e) && Object.keys(e).every((e) => ["src", "alt"].includes(e)) && Lt(e.src) && zt(e.alt)) && z(e.amount, (e) => L(e) && Object.keys(e).every((e) => [
	"value",
	"currency",
	"display"
].includes(e)) && R(e.value) && /^\d+(?:\.\d+)?$/.test(e.value) && R(e.currency) && R(e.display)) && z(e.pricing, (t) => gt(t) && L(e.amount) && t.current.value === e.amount.value && t.current.currency === e.amount.currency) && L(e.localisation) && Object.keys(e.localisation).every((e) => ["locale", "direction"].includes(e)) && R(e.localisation.locale) && ["ltr", "rtl"].includes(String(e.localisation.direction)) && I(e.localisation.locale).locale === e.localisation.locale && I(e.localisation.locale).direction === e.localisation.direction && (e.quantity === void 0 ? e.quantityDisplay === void 0 : R(e.quantityDisplay)), Vt = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), Ht = {
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
}, B = Object.keys(Ht), Ut = (e, t = !1) => {
	try {
		return Vt(e) && Object.keys(e).every((e) => B.includes(e) && (t || e !== "layout")) && B.every((t) => e[t] === void 0 || Ht[t].includes(e[t]));
	} catch {
		return !1;
	}
}, V = (e, t = !1) => Ut(e, t) ? Object.freeze(Object.fromEntries(B.filter((t) => e[t] !== void 0).map((t) => [t, e[t]]))) : Object.freeze({}), Wt = (e) => {
	try {
		return Vt(e) && Object.keys(e).every((e) => e === "summary") && (e.summary === void 0 || Vt(e.summary) && Object.keys(e.summary).every((e) => e === "actions") && (e.summary.actions === void 0 || x(e.summary.actions)));
	} catch {
		return !1;
	}
}, Gt = (e) => V(Object.fromEntries(B.filter((t) => t !== "layout" && Object.hasOwn(e, t)).map((t) => [t, e[t]]))), H = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => !B.includes(e))), Kt = (e) => JSON.stringify([
	e.source?.kind ?? "checkout",
	e.source?.kind === "bonus" ? e.source.bonusCode : "",
	e.id
]), U = [
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
}, G = (e) => typeof e == "string" && e.length <= 8192, K = (e) => G(e) && e.trim().length > 0 && e === e.trim() && e.length <= 256, Jt = (e, t = 256) => Array.isArray(e) && e.length <= t && Object.keys(e).length === e.length && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value")), Yt = (e) => Jt(e) && e.every(G), Xt = (e) => G(e) && /^\d+(?:\.\d+)?$/.test(e) && e.length <= 8192, q = (e, t) => Object.keys(e).every((e) => t.includes(e)), Zt = (e) => typeof e == "number" && Number.isFinite(e), J = (e, t) => e === void 0 || t(e), Qt = (e) => J(e, Yt), Y = (e) => Qt(e.paymentStatuses) && J(e.screens, (e) => Yt(e) && e.every((e) => U.includes(e))), $t = (e) => J(e, (e) => W(e) && Object.keys(e).length <= 256 && Object.values(e).every(G)), X = (e) => W(e) && q(e, ["value", "key"]) && G(e.value) && J(e.key, G), en = (e, t) => e === "payment" || !t && e === "global", tn = (e, t = !1, n = !1) => !W(e) || !q(e, [
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
	...!n && !t ? ["params", ...B.filter((e) => e !== "layout")] : []
]) ? !1 : K(e.id) && en(e.scope, t) && (t && !n ? X(e.text) && e.format === "markdown" : G(e.text)) && $t(e.params) && Y(e) && J(e.tone, (e) => [
	"info",
	"warning",
	"positive",
	"negative"
].includes(e)) && J(e.announcement, (e) => ["polite", "assertive"].includes(e)) && (!n || ["top", "bottom"].includes(e.placement) && J(e.actions, (e) => x(e, !0))), nn = (e, t = !1) => W(e) && q(e, [
	"id",
	"scope",
	"label",
	"screens",
	"paymentStatuses",
	"action",
	...t ? [] : ["params", ...B.filter((e) => e !== "layout")]
]) && K(e.id) && en(e.scope, t) && Y(e) && (t ? X(e.label) : K(e.label)) && $t(e.params) && e.action !== void 0 && x({ items: [{
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
	xt(e.offers, Z) || t.push({
		code: "invalid-value",
		path: "offers"
	}), J(e.checkout, bt) || t.push({
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
	}), xt(e.offers, Z) && Array.isArray(e.offers) && Dt(e.offers) && (!W(e.checkout) || e.checkout.eligibilityAmount === void 0) && t.push({
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
	}), Q(e.displayItems, "displayItems", Rt, t, (e) => JSON.stringify([e.scope, e.id])), Q(e.messages, "messages", (e) => tn(e), t, (e) => JSON.stringify([e.scope, e.id])), Q(e.actions, "actions", (e) => nn(e), t, (e) => JSON.stringify([e.scope, e.id])), J(e.paymentContextId, K) || t.push({
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
	e.schemaVersion === 4 && (J(e.orderPricing, (t) => gt(t) && t.current.currency === e.currency && typeof e.amount == "string" && typeof e.currency == "string" && k(E(t.current.value), E(st(e.amount, 1, e.currency))) === 0) || t.push({
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
	})), (e.schemaVersion === 3 || e.schemaVersion === 4) && Q(e.displayItems, "resumePaymentContext.displayItems", (t) => Bt(t, e.schemaVersion === 4) && (!t.amount || t.amount.currency === e.currency), t);
	let n = e.schemaVersion === 1, r = n ? "awards" : "items";
	return Q(e[r], `resumePaymentContext.${r}`, rn, t, (e) => Kt(e), 512), Q(e.messages, "resumePaymentContext.messages", (e) => tn(e, !0, n), t), n || Q(e.actions, "resumePaymentContext.actions", (e) => nn(e, !0), t), !n && e.elements !== void 0 && (Array.isArray(e.elements) && e.elements.reduce((e, t) => e + (W(t) && Array.isArray(t.items) ? t.items.length : 0), 0) > 512 && t.push({
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
		return xt(e, Z) ? [] : [{
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
		return e === void 0 || bt(e) ? [] : [{
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
	let r = E(e.value);
	if (e.type !== "fixed") {
		if (t === void 0) return null;
		let n = E(t);
		r = {
			coefficient: n.coefficient * r.coefficient,
			scale: n.scale + r.scale + (e.type === "percentage" ? 2 : 0)
		};
	}
	if (e.maxValue !== void 0) {
		let t = E(e.maxValue);
		k(r, t) > 0 && (r = t);
	}
	if (r.coefficient <= 0n) return null;
	if (n && e.rounding !== "none") {
		let t = 10n ** BigInt(r.scale), n = r.coefficient / t, i = r.coefficient % t;
		(e.rounding === "ceil" && i > 0n || e.rounding === "round" && i * 2n >= t) && (n += 1n), r = {
			coefficient: n,
			scale: 0
		};
	}
	return r.coefficient > 0n ? D(r) : null;
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
		if (I(t.locale).direction === "rtl") for (let e of ["value", "amount"]) u[e] && (u[e] = `\u2068${u[e]}\u2069`);
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
}, $ = (e) => !!(e && typeof e == "object" && !Array.isArray(e) && [Object.prototype, null].includes(Object.getPrototypeOf(e)) && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value"))), vn = (e) => Array.isArray(e) && e.length <= 256 && Object.keys(e).length === e.length && Object.values(Object.getOwnPropertyDescriptors(e)).every((e) => Object.hasOwn(e, "value")), yn = (e) => typeof e == "string" && e.length > 0 && e.length <= 256 && e.trim() === e, bn = (e) => vn(e) && e.every((e) => typeof e == "string" && e.length <= 8192), xn = (e) => (e.screens === void 0 || bn(e.screens) && e.screens.every((e) => U.includes(e))) && (e.paymentStatuses === void 0 || bn(e.paymentStatuses)), Sn = (e) => (e && typeof e == "object" && !Object.isFrozen(e) && (Object.values(e).forEach(Sn), Object.freeze(e)), e), Cn = (e) => JSON.stringify(e, (e, t) => $(t) ? Object.fromEntries(Object.keys(t).sort().map((e) => [e, t[e]])) : t);
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
				...B
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
				let { kind: p, ...m } = H(r), h = `${String(d.scope)}:${String(p)}:${r.id}`;
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
				let _ = {
					text: "messages",
					action: "actions",
					award: "purchaseItems"
				}[p];
				if (p === "item" ? !Rt(g) : cn({ [_]: [g] }).length > 0) return t(u);
				let v = Cn(g);
				if (i.has(h)) {
					if (i.get(h) !== v) return t(`${u}.id`, "duplicate-id");
				} else i.set(h, v), p === "item" ? l.push(g) : p === "text" ? o.push(g) : p === "action" ? s.push(g) : c.push(g);
			}
			n.push({
				id: d.id,
				scope: d.scope,
				screens: d.screens,
				paymentStatuses: d.paymentStatuses,
				...Dn(d),
				items: d.items.map((e) => ({
					...H(e),
					...V(Object.fromEntries(B.filter((t) => t !== "layout" && t !== "placement" && Object.hasOwn(e, t)).map((t) => [t, e[t]])))
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
})), Dn = (e) => V(Object.fromEntries(B.filter((t) => e?.[t] !== void 0).map((t) => [t, e?.[t]])), !0);
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
				...V(Object.fromEntries(B.filter((e) => e !== "layout" && e !== "placement" && s?.[e] !== void 0).map((e) => [e, s?.[e]])))
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
		return $(e) && Object.keys(e).every((e) => ["elements", "options"].includes(e)) && Tn(e.elements).length === 0 && (e.options === void 0 || Wt(e.options));
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
		...H(e),
		...V(Object.fromEntries(B.filter((e) => Object.hasOwn(t, e)).map((e) => [e, t[e]])), !0)
	});
	return e.map((e) => {
		let r = t.find((t) => t.id === e.id && t.scope === e.scope);
		return {
			...n(e, r ?? e),
			items: e.items.map((e) => n(e, r?.items.find((t) => t.id === e.id && t.kind === e.kind) ?? e))
		};
	});
}, Pn = Wt, Fn = Ut, In = Tn, Ln = An;
//#endregion
export { ct as $, H as A, he as At, _t as B, m as Bt, cn as C, Te as Ct, Wt as D, Ce as Dt, Kt as E, ve as Et, Mt as F, ae as Ft, M as G, Tt as H, I, oe as It, it as J, A as K, Ct as L, ee as Lt, Nt as M, Se as Mt, jt as N, pe as Nt, V as O, De as Ot, It as P, ie as Pt, D as Q, Et as R, x as Rt, ln as S, we as St, qt as T, _e as Tt, Dt as U, bt as V, t as Vt, j as W, k as X, st as Y, ot as Z, Xt as _, S as _t, jn as a, Qe as at, dn as b, le as bt, En as c, T as ct, Mn as d, w as dt, O as et, Tn as f, qe as ft, pn as g, C as gt, gn as h, ze as ht, In as i, nt as it, kt as j, Ee as jt, Gt as k, me as kt, wn as l, Ke as lt, _n as m, Le as mt, Ln as n, at as nt, Nn as o, $e as ot, hn as p, Ve as pt, ht as q, Pn as r, rt, kn as s, Ze as st, Fn as t, E as tt, On as u, He as ut, an as v, be as vt, U as w, ye as wt, un as x, ge as xt, fn as y, xe as yt, wt as z, c as zt };
