# Changelog

## Unreleased

## 1.3.1

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
