//#region src/types/CashierConfig.ts
var e = /* @__PURE__ */ function(e) {
	return e.PAYIN = "payin", e.PAYOUT = "payout", e;
}({}), t = /* @__PURE__ */ function(e) {
	return e.ACCORDION = "accordion", e.GRID = "grid", e.LIST = "list", e;
}({}), n = /* @__PURE__ */ function(e) {
	return e.ACCORDION = "accordion", e.GRID = "grid", e.LIST = "list", e.NONE = "none", e.PICKER = "picker", e;
}({}), r = /* @__PURE__ */ function(e) {
	return e.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful", e;
}({}), i = "https://hf.pvault.net", a = {
	merchantId: "000e8400-e29b-41d4-a716-446655440000",
	userId: "kalle_kula",
	sessionId: "session_example",
	method: e.PAYIN,
	apiUrl: "/api",
	debug: !1,
	initialAmount: "9001",
	lockAmount: !1,
	currency: "EUR",
	uiListStyle: t.GRID,
	locale: "en-GB",
	uiPaymentMethodSwitcher: !0,
	uiUserBalance: !1,
	uiProgressBar: !0,
	uiInteractivePrompts: !0,
	uiCancelPendingPayout: !0,
	uiComboView: !0,
	uiComboView__PaymentTypes: n.PICKER,
	uiComboView__PaymentTypePicker: !0,
	uiComboView__PaymentForm: !0,
	uiAmountView: !0,
	uiAmountView__PaymentTypePicker: !0,
	uiAmountView__PaymentForm: !0,
	uiCardBrand: !0,
	uiListSelectable: !0,
	uiShowFees: !0,
	uiPreselectedPaymentType: null,
	uiAccountDelete: !0,
	uiBonuses: !0,
	uiBonusesAvailable: !0,
	uiSuggestAmounts: "",
	uiSuggestAction: [r.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL],
	gotoPaymentType: null,
	extraAttributes: void 0,
	user: void 0,
	bonuses: void 0,
	currencyFormatOptions: { trailingZeroDisplay: "stripIfInteger" },
	dateTimeFormatOptions: {
		dateStyle: "medium",
		timeStyle: "short"
	},
	hostedFieldsUrl: i,
	hostedFieldsFonts: void 0,
	hostedFieldsAutoFocusNextField: !0,
	uiTheme: void 0,
	uiSelectorPrefix: void 0
};
//#endregion
export { e as a, t as i, a as n, r as o, n as r, i as t };
