# Changelog

## Unreleased

## 1.6.0

### Added

- Added separate typography settings for input labels, amount-limit text, helper
  text and error messages. Set these CSS variables in your theme; explicit
  values are also passed to Hosted Fields:
  - Labels: `--pc-font-input-label-size`,
    `--pc-font-input-label-line-height`, `--pc-font-input-label-weight`,
    `--pc-font-input-label-letter-spacing`, `--pc-font-input-label-style`,
    `--pc-font-input-label-text-transform`.
  - Amount-limit text: `--pc-font-input-meta-size`,
    `--pc-font-input-meta-line-height`, `--pc-font-input-meta-weight`,
    `--pc-font-input-meta-letter-spacing`, `--pc-font-input-meta-style`,
    `--pc-font-input-meta-text-transform`.
  - Helper text: `--pc-font-input-helper-size`,
    `--pc-font-input-helper-line-height`, `--pc-font-input-helper-weight`,
    `--pc-font-input-helper-letter-spacing`, `--pc-font-input-helper-style`,
    `--pc-font-input-helper-text-transform`.
  - Error messages: `--pc-font-input-error-size`,
    `--pc-font-input-error-line-height`, `--pc-font-input-error-weight`,
    `--pc-font-input-error-letter-spacing`, `--pc-font-input-error-style`,
    `--pc-font-input-error-text-transform`.
- Added optional card expiry-date checks, disabled by default. Merchants can
  reject expired dates and limit how far into the future a date may be, with
  compatible Hosted Fields. When enabled, saved cards marked as having an
  invalid expiry cannot be selected but can still be deleted; users can enter
  a new card where that option is available.
- Added `resumePaymentId` so hosts can resume an existing payment after
  recreating Cashier. Available as a top-level React prop or Custom Element
  DOM property.
- Added `presentation` to customise individual parts or entire Cashier screens
  in React and Custom Element integrations. Cashier continues to handle payment
  processing and validation. Custom summary actions use
  `presentation.options.summary.actions`; existing `config.summaryActions`
  settings remain supported.
- Added validation, instructions, prefilled values and conditional fields to
  forms shown by providers during a payment. Users see input errors before
  submitting and only need to complete fields relevant to their choices.
- Added payment details that update with the user's selections, such as a
  crypto deposit address for the chosen asset and network.
- Added more specific translated field notices, such as deposit instructions
  for a selected asset, with a general message as fallback.

### Changed

- Tightened `uiSuggestAmounts` validation. Only numeric entries such as `10` or
  `10.50` are accepted; malformed entries are ignored.

### Deprecated

- Deprecated the unused `paymentStatus` and `redirect` fields on
  `CashierPaymentCreatedResponse`. `onPaymentCreated` provides the payment ID;
  use `onPaymentUpdated` or `onPaymentFinished` for status and redirect details.

### Fixed

- Fixed configured error borders disappearing when an input loses focus.
  `--pc-color-input-danger-border` now keeps the border visible while the input
  is invalid.
- Fixed payments getting stuck after connection loss or returning to a
  backgrounded page. Cashier restores status updates and keeps the current
  payment open, with a retry option if recovery fails. Completion callbacks
  and navigation are no longer repeated during recovery.
- Fixed payment dropdowns showing a selection after it was cleared, or a blank
  option instead of the configured prompt. They now show the prompt until the
  user selects a value.
- Fixed Cashiers on the same page sharing API settings and loaded data. Each
  now uses its own configured `apiUrl`, loads its own data and tracks its own
  payment independently.

## 1.5.2

### Added

- Added conditional field overrides for payment fields. A field's validation pattern, required flag, or visibility can now change based on another field's current value (for example a 4-digit CVV while the card number identifies an American Express card), driven entirely by backend field configuration. Overrides are forwarded to Hosted Fields only when the iframe reports the `fieldOverrides` capability; older Hosted Fields builds keep receiving exactly the static field configuration and card-field behaviour there is unchanged.

### Changed

- Changed pending-withdrawal cancellation so Cashier asks users to confirm the selected withdrawal before sending the cancellation request.

### Fixed

- Fixed pending-withdrawal amounts using the active Cashier currency instead of each withdrawal's currency. Mixed-currency totals now stay separate, and host callback errors no longer present a successful cancellation as failed.
- Fixed preselected or already-selected bonuses disappearing from bonus pickers when the current amount is below `minAmount` but within `closeToAmount`. The picker now keeps the bonus selected and marks only the bonus item as unavailable, while both the picker and its drawer show the eligibility hint. The picker remains operable, while `bonusCode` stays excluded from payment submission until the bonus is eligible.
- Fixed Deposit and Withdraw switching leaving the previous method frozen while the next method loaded. Cashier now immediately shows a full-screen loading state and reveals the requested method only after it is ready; failed switches expose the target error state and leave method switching available for recovery.
- Fixed Hosted Fields loading replacing the entire Cashier with a full-screen loader. Cashier keeps the surrounding payment screen visible, announces the secure-field loading state to assistive technology, and shows the grouped or separate Hosted Fields loading geometry locally once that geometry is known; the loading-to-ready geometry settlement, later validation-driven layout changes, and static non-interactive error state remain supported.
- Fixed Cashier toggle thumbs blending into card payment surfaces. Toggles inside branded and unbranded card layouts now use one lighter tint of the current card surface in both checked states, ordinary toggles retain the neutral default, and explicit consumer-provided toggle colours still take precedence.
- Fixed accordion payment forms collapsing and briefly flashing the payment-type list after submission, and stopped combo-view payment pickers replaying their entrance animation when submission locks or unlocks their controls. The selected form and picker now remain mounted and non-interactive until Cashier transitions to the provider or payment summary.
- Fixed padded payment field values being accepted in the form and then rejected on submission. A value with leading or trailing whitespace is now checked exactly as it will be submitted, so the field reports the problem immediately instead of the payment failing afterwards. A value consisting only of whitespace continues to count as missing rather than invalid.
- Fixed amount fields accepting arbitrary text while typing. Amount edits now keep digits and a single decimal separator, converting a typed comma to a decimal point; invalid edits such as pasted text are rejected without changing the entered amount. This applies to payment-form, provider-form, and quick-payment amount inputs.
- Fixed payments staying in a waiting state after the user's flow ends client-side for providers that never redirect the user back - for example when the user closes the provider window. When the payment status response includes the new optional `redirect.userFlowDoneUrl`, Cashier notifies the system on reaching the summary without a terminal status so the payment progresses; without the field, behaviour is unchanged.
- Fixed live status updates stopping for one payment when a page embeds more than one Cashier and another payment on the page finished or was reset. The remaining payment keeps receiving status updates and reaches its final state without a page reload.
- Fixed provider-script replacement and remount races so stale inline or window mounts cannot initialise, navigate, or remove the active provider widget. MiFinity mounts now use unique targets and close their widget during lifecycle cleanup.

## 1.5.1

### Added

- Added localised payment-type names derived from each pending withdrawal's payment type and method alongside its date in the pending-withdrawal cancellation drawer.
- Added `onPaymentMethodChanged` and `onPaymentFormChanged` callbacks, with exported event and state types. Hosts can observe pay-in/pay-out method changes and payment-form state without exposing Hosted Fields values or tokens.
- Added conditional payment fields. Cashier filters fields and options based on earlier selections, automatically selects a sole valid option, and clears values that no longer apply.
- Added `subStatus`, structured `displayMessages`, and the exported `CashierPaymentSummaryMessage` type. Cashier supports sub-status-specific messages with fallback to general status copy.
- Added `--pc-font-size-input` and `--pc-font-line-height-input`, defaulting to `16px` and `20px`, so Cashier input typography can be configured independently of the host page.
- Added fallback payment-type names when a service-specific translation is unavailable.
- Added Coinflow chargeback-protection device identification for card pay-ins. Merchant pages must load and initialise the nSure SDK; Cashier never loads it, and submission remains unchanged if it is unavailable.

### Changed

- Changed inline combo-view payment forms, including Hosted Fields loading states, to appear without entrance motion when a payment type is selected, matching accordion forms.
- Changed quick-payment spacing so amount, bonus, and payment form panels remain evenly separated, and balanced non-card field-edge spacing while preserving hosted card layouts.

### Deprecated

- Deprecated `CashierPaymentSummaryResponse.messages` in favour of `displayMessages`; legacy Payment API responses remain supported.

### Fixed

- Fixed select fields without a configured default showing the first option but submitting an empty value.
- Fixed explicit `uiTheme` component variables being overwritten inside nested Cashier surfaces and Hosted Fields.

## 1.5.0

### Added

- Added `fetchConfig`, disabled by default, so Cashier can apply a merchant-provided `cashierConfig` asset from the payment-types response before the payment UI appears. Client-only identity, API, session, Hosted Fields, runtime data, and callbacks remain controlled by the client config.
- Added structured `uiTheme` support through `PayControlUiTheme`, including CSS variables, scoped selector CSS, and trusted `uiThemeCssText` resolved by the host from `uiTheme.cssUrl`. Flat theme variables remain supported, and resolved theme variables and CSS are forwarded to Hosted Fields.
- Added granular CSS-variable styling hooks for shared UI surfaces used by Cashier, including inputs, toggles, checkboxes, controls, cards, panels, logos, payment forms, payment summaries, payment type pickers, bonus pickers, accordions, and suggested amount buttons.
- Added `CashierBonus.awards`, `CashierAward`, and `CashierAwardValue` for status-scoped currency and item award lines on the payment summary. Currency percentage awards also drive bonus progress and top-up prompts.
- Added `uiBonusesStyle` with `page`, `picker-payment-form`, and `picker-payment-list` options. `picker-payment-form` is the default and keeps bonus selection inside the selected payment type form. `picker-payment-list` shows one global picker above selectable payment type lists and explains unavailable bonuses.
- Added `uiFixedControls`, enabled by default, to place primary Cashier actions in the fixed bottom control rail. Disabling it keeps actions inline with an adaptive bottom-rail fallback when inline placement would be clipped.
- Added `summaryActions` with `CashierSummaryActions` type exports for the payment summary action area. Omit it to keep the default Back action, set `items: []` to remove actions, or configure guarded restart buttons, safe URL buttons and links, linked text, flat text, status filters, `uiFixedControls` placement, and automatic row/stack layout.
- Added `onPaymentUpdated` and `onPaymentSummary` callbacks, plus `CashierPaymentUpdatedEvent`, `CashierPaymentSummaryEvent`, `CashierPaymentSummaryField`, and `CashierPaymentSummaryResponse` type exports, so hosts can observe payment status stream updates and the loaded Summary API result.
- Added `onPendingPayout:cancel` to `uiSuggestAction` so pending-payout cancellation can be configured with the other interactive prompt suggestions.
- Added `uiGroupCardInputs`, enabled by default, to group Hosted Fields card number, expiry, and security code into one visual card input when the Hosted Fields iframe advertises `groupedCardInputs` support. Cashier keeps separate controls for older Hosted Fields iframes or when `uiGroupCardInputs` is `false`, with matching loading and loaded control geometry.
- Added `accordion-collapsible` as a `uiListStyle` and `uiComboView__PaymentTypes` value so selected accordion payment types can collapse and clear selection when clicked again.
- Added Hosted Fields focus handoff so focus can move from hosted card fields to the next Cashier field when `hostedFieldsAutoFocusNextField` is enabled.
- Added read-only `display` and `qrcode` payment fields so providers can show copyable values and QR payloads in payment forms.
- Added non-ISO currency display support so amount animation and fee summaries preserve currency-code suffixes such as `BTC`.
- Added Pay and Play status polling support before a user ID is available by omitting `userId` from the status stream until it resolves.

### Changed

- Changed initial loading so Cashier waits for payment types and translations before showing the payment UI, allowing remote config, currency, and locale copy to apply to the first rendered screen.
- Changed typable Cashier form controls to keep a 16px mobile focus font floor, avoiding mobile browser zoom while keeping compact Cashier spacing.
- Changed `uiSuggestAction: []` to disable pending-payout cancellation prompts when `uiCancelPendingPayout` is not explicitly set. Explicit `uiCancelPendingPayout` values remain a compatibility override.

### Deprecated

- Deprecated `CashierBonus.maxBonus` and `CashierBonus.maxBonusPercentage` in favour of `CashierBonus.awards` currency awards. Both legacy fields remain supported as fallback metadata.
- Deprecated `uiCancelPendingPayout`; use `uiSuggestAction` with `onPendingPayout:cancel` instead.

### Fixed

- Fixed the quick-payment amount area so clicking the label, amount, or empty space focuses the amount input without toggling the value.
- Fixed payment forms so externally updated, hidden, or locked amounts submit the latest effective amount instead of stale form state.
- Fixed payment submission so `bonusCode` is sent only when the selected bonus is still available for the submitted amount and payment type.
- Fixed amount limit validation for high-precision decimal values so limits above JavaScript's safe integer range are compared before numeric conversion.
- Fixed Hosted Fields initialisation reliability so card fields still configure when the Hosted Fields iframe loads or reports layout before its ready event.

## 1.4.0

### Added

- Added `uiPaymentConfirmView` setting which shows a confirmation step before payment submission even if no new significant information is added from previous steps.

### Changed

- Updated the default `merchantId` used by Cashier and Playground examples.
- Updated user journeys to skip confirmation step if no new information is added from previous steps. Set `uiPaymentConfirmView` to `true` to always force confirmation page.
- Updated accordion payment form panels to include pre-payment summaries.
- Updated UI and usability.

### Fixed

- Fixed accordion auto-scroll so manual user scrolling cancels pending automatic scroll positioning.
- Fixed amount input caret colour so it inherits theme colours.

## 1.3.2

### Added

- Added type exports for payment callbacks and payloads:
`CashierPaymentCreatedResponse`, `CashierPaymentError`, `CashierPaymentField`, `CashierPaymentFieldNotification`, `CashierPaymentFormData`, `CashierPaymentProgress`, and `CashierRedirectData`.
- Added support for payment fields with `hidden` and `defaultValue`. Hidden fields are not rendered but their default values are still submitted.

### Changed

- Updated `gotoPaymentType` and `uiPreselectedPaymentType` to accept shorter payment type, service, method, and account ID values, e.g. `accountId`, `type`, `service`, `type.method`, `type.service`, `service.method`, `type.service.method`, `type.method.service`, while keeping old `payment_type.*` values backwards compatible.
- Updated UI and usability.

### Fixed

- Fixed payment type matching and selection so saved accounts are identified by stable internal selection IDs.
- Fixed Hosted Fields iframe not rendering a transparent background when host pages use `color-scheme: dark`.
- Fixed package compatibility for browser and server-rendered apps.
- Fixed root sizing so host applications can size the widget with a `min-height` wrapper.

## 1.3.1

### Fixed

- Fixed the package output so the animated payment summary status icon no longer exposes an undeclared `lottie-web` resolver to consumer bundlers.

## 1.3.0

### Added

- Added `uiListStyle: "accordion"` for payment type lists. The selected payment type opens its form inside the list item.
- Added ability to display payment type list or forms directly in the initial view (`uiComboView`, previously `uiAmountView`) via `uiComboView__PaymentTypes` and `uiComboView__PaymentForm`.
- Added `uiComboView__PaymentTypes` settings `picker`, `accordion`, `list`, `grid`, and `none`, enabled by default as `picker`, to control how payment types appear on the intial screen.
- Added `uiBonuses`, enabled by default, to turn the full bonus flow on or off even if bonuses are configured.
- Added `CashierComboViewPaymentTypesMode` type export.
- Added `top` and `bottom` orientation support for payment type and field notifications.
- Added `trumo_payin` script-assisted provider redirect support for Trumo payins.

### Changed

- Updated UI and usability.

### Deprecated

- Deprecated `uiAmountView`, `uiAmountView__PaymentTypePicker`, and `uiAmountView__PaymentForm` names in favour of `uiComboView__*`.

## 1.2.0

### Added

- Added `uiInteractivePrompts`, enabled by default, which replaces regular headers with interactive prompts.
- Added `uiCancelPendingPayout`, enabled by default, which shows an interactive prompt for cancelling pending withdrawals in payin flows.
- Added bonus configuration options for `maxBonus` and `maxBonusPercentage` used in interactive prompts for bonus top-ups.
- Added `user.withdrawableBalance`. Withdrawable balance is treated as an amount limit and appears in payout flows.
- Added runtime methods `setBonuses`, `setUser`, `setUserBalance`, `setSelectedBonusCode`, and `clearSelectedBonus`.
- Added `onPendingWithdrawalCancelled` and `onBonusToppedUp` callbacks.
- Added `CashierHandle`, `CashierUser`, `CashierUserBalance`, `CashierBonus`, `CashierBonusConditionItem`, `CashierBonusConditions`, `CashierBonusPaymentTypeConditionItem`, `CashierBonusPaymentTypeConditions`, `CashierPaymentType`, `CashierLocale`, `CashierCurrency`, `CashierTheme`, `CashierNumberFormatOptions`, `CashierDateTimeFormatOptions`, `CashierPendingWithdrawalCancelledEvent`, and `CashierBonusTopUpEvent` type exports.
- Added user balance-related payout pre-payment summary rows `Withdrawable`, `Remaining balance` and `Locked` calculated via `user.withdrawableBalance` and `user.balance`.
- Added fee-related pre-payment summary rows `Fee` and `Total` for payin flows, and `You will receive` for payout flows, when `uiShowFees` is enabled and a payment type has fees.

### Changed

- Updated locked amount flows so `lockAmount` skips the amount step even when `uiComboView` is enabled.
- Updated `uiCardBrand={false}` flows so card Hosted Fields drop the branded shell and render like the rest of the payment form, instead of showing a brandless card.
- Updated selectable list behaviour so clicking an already selected item no longer deselects it when `uiListSelectable` is enabled.
- Updated fee display so deducted fees include a leading minus sign, making fee direction clearer.
- Updated UI and usability.

### Fixed

- Fixed i18n keys showing briefly on initialisation before i18n data is available.

## 1.1.0

### Added

- Added `uiProgressBar` which visually tracks progress across payment flows.
- Added `lockAmount` which locks the `initialAmount` set and hides `uiSuggestAmounts` visuals, for flows where amount shouldn't be user-defined.

### Changed

- Updated amount limit behaviour so over-limit amounts remain visible, show the regular error state, and keep progress blocked until the amount is valid.
- Updated credit card shell to keep a minimum card-like height when only a sparse hosted-field subset is shown, such as CSC only.
- Updated UI and usability.

## 1.0.0

### Added

- Added `placeholder` support for input fields.
- Added `uiCardBrand` so card forms can keep or disable card-brand visuals.
- Added `uiShowFees` so payment-type fee metadata can be shown or hidden independently from other payment-type meta.

### Changed

- Updated the default hosted fields URL to `https://hf.pvault.net` when no explicit `hostedFieldsUrl` is configured.
- Updated UI and usability.
  - Updated card payment presentation.
  - Refined visual layout and presentation across lists, cards, and summary.
  - Polished browser-managed field states and shared form-control behaviour used by forms.
- Updated dependencies.

## 0.0.12

### Added

- Added `uiSelectorPrefix` so you can control Cashier element ID prefixes.
- Added stable Cashier IDs and `pc-cashier__...` classes across key screens and controls.

### Changed

- Updated cross-origin payment status streaming to non-credentialed EventSource (`withCredentials: false`).
- Updated the shared Switcher behaviour so method switchers can collapse into a compact dropdown-style control when space is limited.
