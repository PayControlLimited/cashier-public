# Changelog

## Unreleased

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

### Documentation

- Documented payment field placeholders.
- Documented `uiCardBrand`.
- Documented `uiShowFees`.
- Clarified that `HF_CARD_BRAND` is an internal Hosted Fields message rather than a public Cashier callback.
- Documented the Cashier-owned hosted-fields card-shell selector and the backend-resolved saved-card logo behaviour.
- Updated the npm release flow docs to include publishing `CHANGELOG.md` in the release snapshot.

## 0.0.12

### Added

- Added `uiSelectorPrefix` so you can control Cashier element ID prefixes.
- Added stable Cashier IDs and `pc-cashier__...` classes across key screens and controls.

### Changed

- Updated cross-origin payment status streaming to non-credentialed EventSource (`withCredentials: false`).
- Updated the shared Switcher behaviour so method switchers can collapse into a compact dropdown-style control when space is limited.

### Documentation

- Added a DOM hooks section to the Cashier README with `uiSelectorPrefix` usage and multi-instance guidance.
- Added a full selector reference at `docs/cashier/cashier-dom-selectors.md`.
- Clarified that `uiPaymentMethodSwitcher` now adapts to narrow layouts with a compact dropdown-style presentation.
