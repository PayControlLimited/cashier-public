# Changelog

## Unreleased

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
