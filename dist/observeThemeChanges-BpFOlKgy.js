/* CASHIER_CORE_CRYPTO_SELECT=0 */
//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u = {
	button: "pc-ui__button",
	card: "pc-ui__card",
	panel: "pc-ui__panel",
	toolbar: "pc-ui__toolbar",
	field: "pc-ui__field",
	progressBar: "pc-ui__progress-bar",
	modal: "pc-ui__modal",
	drawer: "pc-ui__drawer",
	icon: "pc-ui__icon",
	circularProgress: "pc-ui__circular-progress",
	interactivePrompt: "pc-ui__interactive-prompt",
	logoMark: "pc-ui__logo-mark",
	paymentTypeLogo: "pc-ui__payment-type-logo",
	bonusLogo: "pc-ui__bonus-logo",
	creditCardPanel: "pc-ui__credit-card-panel",
	choiceItem: "pc-ui__choice-item",
	selectableCard: "pc-ui__selectable-card",
	navigationItem: "pc-ui__navigation-item",
	dataGridRow: "pc-ui__data-grid-row"
}, d = [
	"default",
	"neutral",
	"secondary",
	"primary",
	"success",
	"danger",
	"warning",
	"info"
], f = /* @__PURE__ */ RegExp("^--pc-(?:color|space|size|radius|shadow|font|motion|opacity|z)-[a-z0-9]+(?:-[a-z0-9]+)*$", "u"), p = (e) => e === "--hf-font-family" || f.test(e), m = (e) => typeof e == "string" && e.trim().length > 0 || typeof e == "number", h = (e) => u[e], g = (e) => {
	let t = {};
	if (e?.variables) for (let [n, r] of Object.entries(e.variables)) p(n) && m(r) && (t[n] = r);
	return t;
}, _ = (e) => e && e !== "default" ? e : void 0, v = (e, t) => {
	let n = e.find((e) => e !== null), r = n?.ownerDocument.defaultView;
	if (!n || !r?.MutationObserver) return () => void 0;
	let i = (e) => e instanceof r.Element && (e.matches("style,link[rel=\"stylesheet\"]") || e.querySelector("style,link[rel=\"stylesheet\"]") !== null), a = new r.MutationObserver((e) => {
		e.some((e) => e.type === "attributes" || e.target.parentElement?.closest("style") || e.target instanceof r.Element && e.target.matches("style") ? !0 : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].some(i)) && (o(), t());
	}), o = () => {
		n.ownerDocument.querySelectorAll("style").forEach((e) => {
			a.observe(e, {
				childList: !0,
				characterData: !0,
				subtree: !0
			});
		});
	}, s = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = t;
		for (; e;) s.add(e), e = e.parentElement;
	}
	for (let e of s) a.observe(e, {
		attributes: !0,
		attributeFilter: [
			"class",
			"style",
			"data-theme",
			"data-pc-variant"
		],
		childList: !0
	});
	a.observe(n.ownerDocument.head, { childList: !0 }), o();
	let c = (e) => {
		e.target instanceof r.Element && e.target.matches("link[rel=\"stylesheet\"]") && t();
	};
	return n.ownerDocument.addEventListener("load", c, { capture: !0 }), r.addEventListener("resize", t), () => {
		a.disconnect(), n.ownerDocument.removeEventListener("load", c, { capture: !0 }), r.removeEventListener("resize", t);
	};
};
//#endregion
export { _ as a, s as c, g as i, l, u as n, h as o, d as r, o as s, v as t };
