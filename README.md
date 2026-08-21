# @paycontrollimited/cashier

PayControl Cashier package for embedding Cashier as a React component or a `pc-cashier` web component.

## Installation

```bash
npm install @paycontrollimited/cashier
# or
yarn add @paycontrollimited/cashier
```

## Root exports

Runtime exports from `@paycontrollimited/cashier`:

- `default` (`Cashier` React component)
- `Cashier` (named React component export)
- `defineCashier`
- `defaultCashierConfig`
- `CashierBonusesStyle`
- `CashierComboViewPaymentTypesMode`
- `CashierLayoutListType`
- `CashierMethods`
- `CashierSuggestAction`
- `CashierSummaryActionType`

Type exports from `@paycontrollimited/cashier`:

- `CashierHandle`
  ```ts
  {
    setBonuses: (bonuses: CashierBonus[] | undefined) => void
    setUser: (user: CashierUser | undefined) => void
    setUserBalance: (balance: CashierUserBalance | undefined) => void
    setSelectedBonusCode: (code: string | null) => void
    clearSelectedBonus: () => void
  }
  ```
- `CashierConfig`
- `CashierProps`
- `CashierBonusesStyle`
- `CashierComboViewPaymentTypesMode`
- `CashierLocale`
- `CashierCurrency`
- `CashierNumberFormatOptions`
- `CashierDateTimeFormatOptions`
- `CashierLayoutListType`
- `CashierUser`
- `CashierUserBalance`
- `CashierBonus`
- `CashierPendingWithdrawalCancelledEvent`
- `CashierBonusTopUpEvent`
- `CashierBonusConditionItem`
- `CashierBonusConditions`
- `CashierBonusPaymentTypeConditionItem`
- `CashierBonusPaymentTypeConditions`
- `CashierPaymentCreatedResponse`
- `CashierPaymentError`
- `CashierPaymentField`
- `CashierPaymentFieldNotification`
- `CashierPaymentFormData`
- `CashierPaymentProgress`
- `CashierPaymentUpdatedEvent`
- `CashierPaymentSummaryEvent`
- `CashierPaymentSummaryField`
- `CashierPaymentSummaryResponse`
- `CashierPaymentMethodChangedEvent`
- `CashierPaymentTypeReference`
- `CashierPaymentFormFieldState`
- `CashierHostedFieldsState`
- `CashierPaymentFormState`
- `CashierPaymentFormChangedEvent`
- `CashierPaymentType`
- `CashierRedirectData`
- `CashierSummaryAction`
- `CashierSummaryActions`
- `CashierSummaryActionThemeVariant`
- `CashierSummaryUrlAction`
- `CashierTheme`
- `PayControlUiTheme`
- `HostedFieldsFontDefinition`
- `HostedFieldsFontSource`

## Styles

For React integrations, import the bundled stylesheet once in your host application:

```ts
import '@paycontrollimited/cashier/styles'
```

The stylesheet includes both Cashier and shared UI styles.  
For web-component integrations, `defineCashier()` injects required styles automatically.

> **Note:** Cashier is rendered as part of your page, so your global CSS can style Cashier elements. If your app uses global selectors like `button`, `input`, `select`, or `textarea`, scope them to your app area or exclude Cashier (`#cashier-root` for React wrappers, `pc-cashier` for web-component usage).
>
> ```css
> :where(button, input, select, textarea):not(#cashier-root *):not(pc-cashier *) {
>   /* host app primitive styles */
> }
> ```
>
> Cashier fills its host container. Give the host either a real height or a
> minimum height. A `min-height` wrapper is enough for normal page layouts. If
> you use `height: 100%`, every parent up the tree must also have a real height.
>
> ```tsx
> export function Checkout() {
>   return (
>     <div id="cashier-root" style={{ minHeight: 640 }}>
>       <Cashier config={config} />
>     </div>
>   )
> }
> ```
>
> ```html
> <pc-cashier style="display:block;min-height:640px;"></pc-cashier>
> ```

## Framework examples

### React

```tsx
import Cashier, { CashierMethods, type CashierConfig } from '@paycontrollimited/cashier'
import '@paycontrollimited/cashier/styles'

const config: Partial<CashierConfig> = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: CashierMethods.PAYIN,
  apiUrl: 'https://api.paycontrol.app',
  uiInteractivePrompts: true,
  uiSuggestAction: [
    'onPaymentFailed:lastSuccessful',
    'onPendingPayout:cancel',
  ],
  summaryActions: {
    items: [{
      id: 'try-again',
      label: 'Try again',
      paymentStatuses: ['failed'],
      action: 'restart',
    }],
  },
  uiProgressBar: true,
  uiShowFees: true,
  uiBonuses: true,
  uiBonusesStyle: 'picker-payment-form',
  uiSelectorPrefix: 'merchant-checkout-a',
  extraAttributes: {
    campaign: 'spring-2026',
  },
}

export function Checkout() {
  return <Cashier config={config} />
}
```

## Payment callbacks

`onPaymentUpdated` fires for every payment status stream message and stream
error. Message events use the same normalised payment progress fields Cashier
uses internally:

```ts
const config: Partial<CashierConfig> = {
  onPaymentUpdated(event) {
    if (event.type === 'error') {
      console.warn(event.paymentId, event.error.message)
      return
    }

    console.log(event.paymentId, event.status, event.redirect, event.form)
  },
}
```

Typical payment update event:

```ts
{
  type: 'message',
  merchantId: 'merchant_abc',
  paymentId: 'pay_123',
  status: 'ongoing',
  paymentStatus: 'ongoing',
}
```

Malformed or non-normalisable stream messages still call `onPaymentUpdated`
with the payment identity:

```ts
{
  type: 'message',
  merchantId: 'merchant_abc',
  paymentId: 'pay_123',
}
```

`onPaymentFinished` keeps its existing behaviour and fires only when the
tracked payment reaches terminal `done`.

`onPaymentSummary` fires after the Summary API response loads:

```ts
const config: Partial<CashierConfig> = {
  onPaymentSummary(event) {
    console.log(event.paymentId, event.summary.paymentStatus)
  },
}
```

`CashierPaymentSummaryResponse` mirrors the Summary API response shape as a
Cashier-owned public type for package consumers.

Typical summary event:

```ts
{
  merchantId: 'merchant_abc',
  paymentId: 'pay_123',
  summary: {
    paymentStatus: 'successful',
    messages: ['payment.success'],
    fields: [
      { id: 'amount', label: 'field.amount.summary', value: '100.00' },
    ],
  },
}
```

`onPaymentMethodChanged` fires after a real user-initiated payin/payout change.
It does not fire during initialisation, config replacement, remounts, or no-op
selection. `onPaymentFormChanged` emits deduplicated active snapshots for the
selected visible native form and emits `inactive/submitted` after successful
payment creation or provider-form advancement.

```ts
const config: Partial<CashierConfig> = {
  onPaymentMethodChanged(event) {
    console.log('Payment method', event.method)
  },
  onPaymentFormChanged(event) {
    // Native field values can contain personal data. Do not log snapshots by
    // default; inspect and retain only fields your integration genuinely needs.
    console.log('Payment form status', event.status)
  },
}
```

The form observer never exposes Hosted Fields values or tokens, PAN, CSC, or
expiry. Native provider fields, including token-like values, remain observable
when they are rendered as ordinary Cashier fields. Hosts are responsible for
protecting any native personal data they choose to process. Cashier does not
log or persist observer snapshots.
Handler replacement does not remount Cashier; the latest handler is invoked
synchronously and callback failures are isolated. See the repository Cashier
callback reference for full ordering, subscription, field, and state semantics.

When a payment type fee includes `direction: 'add'` or `direction: 'deduct'`,
Cashier shows added fees without a leading sign, such as `€2.00`, and deducted
fees with a leading minus sign, such as `-1.5%`. In payin flows, when
`uiShowFees` is enabled, Cashier also shows a
calculated `Fee` summary row on the combo-view screen and in payment form / confirm
summaries. Cashier also shows a calculated `Total` row under `Fee`. Before an
amount is entered, `Total` stays at `0`. After that, it is shown when the fee
changes the entered amount.

When `uiSuggestAction` includes `onPendingPayout:cancel`, payin flows can replace the
normal interactive prompt with a pending-withdrawal cancellation prompt. Cashier
checks the latest 100 payout history items and shows the prompt only when it
finds a cancellable pending withdrawal. When combo view is enabled, the
prompt stays on the first payment screen. When combo view is disabled, it appears on
the payment details or confirm step instead. When more than one pending
withdrawal is found, Cashier keeps the prompt visible and opens a drawer so
one payout can be chosen at a time. Before sending a cancellation, Cashier
opens a confirmation drawer showing the selected amount, payment type, and
date. Closing that drawer leaves the withdrawal unchanged; a failed
cancellation stays open so the user can retry. Each withdrawal keeps its own
currency, and mixed-currency totals are listed separately rather than summed.
Host callback errors do not turn a successful cancellation into a failed user
action. Dismissing the prompt hides the current pending set for the rest of the
session unless the pending set changes. When `lockAmount` is `true`, Cashier
treats this feature as disabled.

`summaryActions` controls the action area on the payment summary. Omit it to
keep the default Back button, or use `{ items: [] }` to remove actions. Actions
can be guarded `restart` buttons, safe URL anchors, linked text, or flat text.
`paymentStatuses` filters by summary status, and omitted `layout` stacks
automatically when more than two buttons or any text action is present.

When `uiCardBrand` is `true`, card payments use the branded card shell and
card-brand footer. Set it to `false` if you want the card inputs to follow the
same plain form style as the rest of the payment form.

For shared Cashier and Hosted Fields styling, pass structured `uiTheme`
with `variables` and scoped selector-object `css`. Flat
`uiTheme` stays supported for existing integrations. Full theme and selector references:
`docs/cashier/cashier-themes.md` and `docs/cashier/cashier-dom-selectors.md`.

In payout flows, if you provide both `user.balance` and
`user.withdrawableBalance`, Cashier uses `withdrawableBalance` as the payout
amount ceiling and shows the regular amount-limit error state if the entered
amount is too high. Cashier shows `Withdrawable` and `Locked` on the combo-view
screen and on editable payout payment-form routes. Cashier also shows
`Remaining balance` on payout summary surfaces and a payout `You will receive`
row on the combo-view screen and in payout payment form / confirm summaries when the
selected payment type has a fee. When `uiShowFees` is enabled, Cashier also
shows a payout `Fee` row in those summaries. `Remaining
balance` is based on the entered payout amount, not on fee adjustments.
`You will receive` matches the entered payout amount for added fees and is
reduced by deducted fees. Before an amount is entered, `Remaining balance` matches the raw
`withdrawableBalance`. `Locked` is calculated from the difference and both
derived values are never shown below `0`.

Balances stay host-driven. Use `setUserBalance(...)` when you want to refresh
only `balance`, `withdrawableBalance`, or `bonusBalance` at runtime without
replacing the rest of `user`. Use `setUserBalance(undefined)` to clear only
that runtime balance override.

### Next.js (App Router)

Import global styles in `app/layout.tsx`:

```tsx
import '@paycontrollimited/cashier/styles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Render Cashier from a client component with `ssr: false`:
Cashier uses browser APIs, so skip server rendering for this component.

```tsx
'use client'

import dynamic from 'next/dynamic'
import {
  CashierMethods,
  type CashierConfig,
} from '@paycontrollimited/cashier'

const Cashier = dynamic(
  () => import('@paycontrollimited/cashier').then((module) => module.default),
  { ssr: false },
)

const config: Partial<CashierConfig> = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: CashierMethods.PAYIN,
  apiUrl: 'https://api.paycontrol.app',
  uiInteractivePrompts: true,
  uiProgressBar: true,
  uiShowFees: true,
}

export default function CheckoutPage() {
  return (
    <div style={{ minHeight: 640 }}>
      <Cashier config={config} />
    </div>
  )
}
```

### Vue 3

Register the custom element in your app bootstrap:

```ts
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag === 'pc-cashier'
app.mount('#app')
```

Use it in a component:

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CashierMethods, defineCashier, type CashierConfig } from '@paycontrollimited/cashier'

const cashierConfig: Partial<CashierConfig> = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: CashierMethods.PAYIN,
  apiUrl: 'https://api.paycontrol.app',
  uiInteractivePrompts: true,
  uiProgressBar: true,
  uiShowFees: true,
}

const cashierRef = ref<HTMLElement & { config?: Partial<CashierConfig> } | null>(
  null,
)

onMounted(() => {
  defineCashier()
  if (cashierRef.value) {
    cashierRef.value.config = cashierConfig
  }
})
</script>

<template>
  <pc-cashier ref="cashierRef"></pc-cashier>
</template>
```

### Angular

No separate stylesheet import is required when using `defineCashier()`.

Use the component:

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { CashierMethods, defineCashier, type CashierConfig } from '@paycontrollimited/cashier'

@Component({
  selector: 'app-checkout',
  template: '<pc-cashier #cashierEl></pc-cashier>',
})
export class CheckoutComponent implements AfterViewInit {
  @ViewChild('cashierEl', { static: true })
  cashierEl!: ElementRef<HTMLElement & { config?: Partial<CashierConfig> }>

  ngAfterViewInit() {
    const cashierConfig: Partial<CashierConfig> = {
      merchantId: '<merchant-id>',
      userId: '<user-id>',
      sessionId: '<session-id>',
      method: CashierMethods.PAYIN,
      apiUrl: 'https://api.paycontrol.app',
      uiInteractivePrompts: true,
      uiProgressBar: true,
      uiShowFees: true,
    }

    defineCashier()
    this.cashierEl.nativeElement.config = cashierConfig
  }
}
```

Allow the custom element in your module:

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

@NgModule({
  declarations: [CheckoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule {}
```

## DOM hooks

Cashier adds stable class names in the `pc-cashier__...` format and generated
IDs for key screens and controls.

- Use `uiSelectorPrefix` to control the ID prefix.
- The default prefix is `pc-cashier`.
- If you mount multiple Cashier instances on one page, set a different prefix for each instance.
- Full selector reference: `docs/cashier/cashier-dom-selectors.md`.

## Progress bar

Cashier shows a progress bar by default.

- Use `uiProgressBar` to show or hide it.
- The bar adapts to the active flow and omits steps that never appear.
- The bar starts empty and fills as the flow moves forward.
- Provider redirects and forms count as one provider step.
- Summary is always the final full state.

## Flow behaviour

Cashier includes a few built-in layout behaviours that apply without extra
configuration:

- Payment-type confirm and enter-details screens render payment type, selected
  bonus, and amount inside one shared summary card above the action area.
- Use `lockAmount` to keep the configured amount fixed inside Cashier. The
  locked amount is shown in the summary card instead of the editable
  payment-form amount field. If the locked `initialAmount` is blank or
  invalid, Cashier uses `0`. Suggested amounts are hidden while the amount is
  locked, and the combo-view entry screen is skipped even if
  `uiComboView` is enabled.
- Use `uiListStyle: 'accordion'` to show payment types as an accordion. The
  selected payment type opens its payment form inside the list and moves into
  view below any sticky header, prompt, or shadow. Bonus lists use the regular
  list style when this value is set.
- Use `uiComboView__PaymentTypes` to choose how payment types appear on the
  combo-view screen:
  - `'picker'` keeps the compact picker at the bottom of the screen.
  - `'accordion'` opens the payment form inside the selected payment type.
  - `'list'` and `'grid'` show selectable payment types under the amount and
    summary sections.
  - `'none'` hides payment types on the combo-view screen and sends users to
    the separate payment type step after they continue.
- When `uiComboView__PaymentForm` is enabled, selected payment type fields
  are shown on the first payment screen. Cashier submits directly from inline
  combo-view payment forms when no bonus or other intermediate step is pending
  and the confirm screen would not add user-visible details. Set
  `uiPaymentConfirmView` to `true` to always show the confirm-payment screen
  before submission. With combo-view `'list'` or `'grid'`, the payment types
  remain in the chosen layout and the selected form appears below them. The
  deprecated 1.2.0 aliases `uiAmountView`,
  `uiComboView__PaymentTypePicker`, `uiAmountView__PaymentTypePicker`, and
  `uiAmountView__PaymentForm` still work, but `uiComboView__PaymentTypes` takes
  priority when supplied.
- Hosted card forms keep a minimum card-like shell height even when only a
  sparse hosted-field subset is rendered, for example CSC-only verification.

## Direct payment type selection

Use `gotoPaymentType` to open a payment type when Cashier starts. Use
`uiPreselectedPaymentType` to select a payment type in selectable lists without
opening it immediately.

Both settings accept these values:

- `<accountId>`: exact saved account ID from the payment type.
- `<paymentTypeName>`: exact `name` field returned by the payment type API.
- `<type>`: first payment type with this `type`.
- `<service>`: first payment type with this `service`.
- `<type>.<method>`
- `<type>.<service>`
- `<service>.<method>`
- `<type>.<service>.<method>`
- `<type>.<method>.<service>`

Structured values can also use the old `payment_type.` prefix for backwards
compatibility. Matching is case-insensitive. If more than one payment type
matches a structured value, Cashier uses the first one returned by the API. Use
an account ID or a more specific structured value when the exact row matters.

## Interactive prompts mode

- `uiInteractivePrompts` is enabled by default.
- When enabled, supported screens show an interactive prompt instead of the standard
  headline.
- Interactive prompt titles, body copy, and actions can be translated with
  `interactive_prompt.*` keys.
- If interactive prompt copy is missing for a screen, Cashier falls back to the standard
  headline text so the header area always stays populated.

## Bonus metadata

Set `uiBonuses` to `false` to turn off the bonus flow. Cashier then behaves as
if no bonuses are configured: it skips the bonus step, hides bonus labels,
clears bonus selection, and does not send `bonusCode` with payments. Keep
`uiBonusesAvailable` for the smaller badge/count display setting.

Use `uiBonusesStyle` to choose how users select bonuses:

- `picker-payment-form` (default) hides the bonus step and shows a bonus picker inside
  the selected payment type form flow.
- `picker-payment-list` hides the bonus step and shows one global bonus picker above
  payment type list, grid, or accordion surfaces. Cashier forces selectable list
  behaviour for this mode so users can choose a payment type and bonus before Continue.
- `page` shows the separate bonus step.

Picker modes scope bonuses to the selected payment type. `picker-payment-form`
appears between amount and form in combo-view picker flows, inside accordion
panels, and in the payment details presummary. `picker-payment-list` appears
above the respective payment type list surface. When combo view uses the payment
type picker, `picker-payment-list` falls back to the selected payment type picker
because no payment type list is visible. The picker drawer uses the same
eligible, close-to, terms, top-up, and `bonusCode` behaviour as the bonus page.
In `picker-payment-list`, the drawer opens before a payment type is selected and
shows all valid configured bonuses. Payment-type-specific or otherwise
ineligible bonuses are disabled with reason copy until the user selects a
compatible payment type. Payment-type-specific reasons list compatible payment
type display names via `{paymentTypes}`. Bonuses with no payment-type restriction
can be selected immediately. Minimum-threshold reasons reuse the
`bonus.close_to_*` keys; maximum threshold and payment-type reasons use
unavailable-specific keys.
Top-up prompts show
claim progress, bonus limits, and approve or reject actions when the current
deposit is close to the full offer.

Bonuses can include optional award metadata:

- `maxBonus`
- `maxBonusPercentage`
- `awards`

Cashier keeps `maxBonus` and `maxBonusPercentage` as deprecated fallback fields
for bonus picker progress and top-up prompts. Use `awards` to render estimated
award lines on `/summary` and to define percentage-match progress for new
configs. Each award must opt in with `paymentStatuses`; legacy-only bonus
configs do not show summary award rows. Payment requests still send `bonusCode`
only.

```ts
const config: Partial<CashierConfig> = {
  bonuses: [{
    code: 'WELCOME',
    title: 'Welcome offer',
    description: '100% up to 200 EUR + 15 Free Spins',
    awards: [
      {
        id: 'deposit-match',
        type: 'currency',
        paymentStatuses: ['successful'],
        message: 'bonus.summary.money_applied',
        value: { type: 'percentage', value: 100, maxValue: 200 },
      },
      {
        id: 'free-spins',
        type: 'item',
        paymentStatuses: ['successful'],
        message: '+{value} {name}',
        name: 'bonus.item.free_spins',
        value: { type: 'fixed', value: 15 },
      },
    ],
  }],
}
```

## Imperative runtime API

`CashierHandle` is the imperative API exposed by the React Cashier component.
Use it when you need to update mounted Cashier state without replacing the full
`config` object.

It exposes:

- `setBonuses(bonuses)` to override the current bonus list.
- `setUser(user)` to override the current user data.
- `setUserBalance(userBalance)` to override only the current balance fields.
- `setSelectedBonusCode(code)` to select a bonus from the current effective
  bonus list.
- `clearSelectedBonus()` to clear the current selected bonus.

This is most useful when bonus or user data arrives after the initial render,
or when you want to respond to user actions outside Cashier.
When `uiBonuses` is `false`, runtime bonus updates are kept hidden until the
flow is enabled again.

React:

```tsx
import { useRef } from 'react'
import Cashier, {
  type CashierBonus,
  type CashierConfig,
  type CashierHandle,
  type CashierUser,
  type CashierUserBalance,
} from '@paycontrollimited/cashier'

export function Checkout({ config }: { config: Partial<CashierConfig> }) {
  const cashierRef = useRef<CashierHandle>(null)
  const runtimeUser: CashierUser = {
    payinCount: 5,
    totalPayinAmount: 950,
    withdrawableBalance: 600,
  }
  const runtimeBalance: CashierUserBalance = {
    balance: 760,
    withdrawableBalance: 600,
  }
  const runtimeBonuses: CashierBonus[] = [{
    code: 'LOYAL',
    title: 'Loyalty offer',
    description: '60% up to 120 EUR',
    maxBonus: 120,
    maxBonusPercentage: 60,
  }]

  return (
    <>
      <button
        type="button"
        onClick={() => {
          cashierRef.current?.setUser(runtimeUser)
          cashierRef.current?.setUserBalance(runtimeBalance)
          cashierRef.current?.setBonuses(runtimeBonuses)
          cashierRef.current?.setSelectedBonusCode('LOYAL')
        }}
      >
        Apply runtime offer
      </button>
      <Cashier ref={cashierRef} config={config} />
    </>
  )
}
```

The React ref only exposes the imperative runtime methods listed above. It does
not expose the full internal component state.

Web component:

```ts
import type {
  CashierBonus,
  CashierConfig,
  CashierUser,
  CashierUserBalance,
} from '@paycontrollimited/cashier'

const element = document.querySelector('pc-cashier') as (
  HTMLElement & {
    config?: Partial<CashierConfig>
    setBonuses: (bonuses: CashierBonus[] | undefined) => void
    setUser: (user: CashierUser | undefined) => void
    setUserBalance: (userBalance: CashierUserBalance | undefined) => void
    setSelectedBonusCode: (code: string | null) => void
    clearSelectedBonus: () => void
  }
) | null

const runtimeUser: CashierUser = {
  payinCount: 5,
  withdrawableBalance: 600,
}
const runtimeBalance: CashierUserBalance = {
  balance: 760,
  withdrawableBalance: 600,
}
const runtimeBonuses: CashierBonus[] = [{
  code: 'LOYAL',
  title: 'Loyalty offer',
  description: '60% up to 120 EUR',
  maxBonus: 120,
  maxBonusPercentage: 60,
}]

element?.setUser(runtimeUser)
element?.setUserBalance(runtimeBalance)
element?.setBonuses(runtimeBonuses)
element?.setSelectedBonusCode('LOYAL')
```

The `pc-cashier` web component forwards the same runtime methods as the React
ref API, so both integration styles support the same mounted-instance updates.

Runtime method behaviour:

- `setBonuses(bonuses)` overrides bonus data for the mounted instance.
- `setUser(user)` overrides user data for the mounted instance.
- `setUserBalance(userBalance)` overrides only `balance`, `withdrawableBalance`,
  and `bonusBalance` for the mounted instance.
- `setSelectedBonusCode(code)` selects a bonus code from the current effective
  bonus list.
- `clearSelectedBonus()` clears the current selection.
- Passing `undefined` to `setBonuses()`, `setUser()`, or `setUserBalance()`
  clears that runtime override and falls back to the original config value.
- Changing the main `config` still hard resets Cashier and clears runtime
  overrides.

## Web component usage (framework agnostic)

```ts
import {
  CashierComboViewPaymentTypesMode,
  CashierLayoutListType,
  defineCashier,
  CashierMethods,
  type CashierConfig,
} from '@paycontrollimited/cashier'

defineCashier()

const config: Partial<CashierConfig> = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: CashierMethods.PAYIN,
  apiUrl: 'https://api.paycontrol.app',
  debug: false,
  initialAmount: '0',
  lockAmount: false,
  currency: 'EUR',
  uiListStyle: CashierLayoutListType.GRID,
  locale: 'en-GB',
  uiPaymentMethodSwitcher: true,
  uiProgressBar: true,
  uiInteractivePrompts: true,
  uiPaymentConfirmView: false,
  uiComboView: true,
  uiComboView__PaymentTypes: CashierComboViewPaymentTypesMode.PICKER,
  uiComboView__PaymentForm: true,
  uiListSelectable: true,
  uiShowFees: true,
  uiPreselectedPaymentType: null,
  uiAccountDelete: true,
  uiBonuses: true,
  uiBonusesStyle: 'picker-payment-form',
  uiBonusesAvailable: true,
  uiSuggestAmounts: '',
  uiSuggestAction: [],
  uiSelectorPrefix: 'merchant-checkout-a',
  gotoPaymentType: null,
  extraAttributes: {
    campaign: 'spring-2026',
    channel: 'affiliate',
  },
}

const element = document.querySelector('pc-cashier') as (
  HTMLElement & { config?: Partial<CashierConfig> }
) | null

if (element) {
  element.config = config
}
```
