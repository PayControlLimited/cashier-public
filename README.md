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
- `CashierLayoutListType`
- `CashierMethods`
- `CashierSuggestAction`

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
- `CashierPaymentType`
- `CashierTheme`
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
> Cashier fills its container (`width: 100%`, `height: 100%`). Mount it inside an element with dimensions, otherwise it can render at `0x0`.
>
> ```tsx
> export function Checkout() {
>   return (
>     <div id="cashier-root" style={{ width: '100%', minHeight: 640 }}>
>       <Cashier config={config} />
>     </div>
>   )
> }
> ```
>
> ```html
> <pc-cashier style="display:block;width:100%;height:640px;"></pc-cashier>
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
  uiCancelPendingPayout: true,
  uiProgressBar: true,
  uiShowFees: true,
  uiSelectorPrefix: 'merchant-checkout-a',
  extraAttributes: {
    campaign: 'spring-2026',
  },
}

export function Checkout() {
  return <Cashier config={config} />
}
```

When a payment type fee includes `direction: 'add'` or `direction: 'deduct'`,
Cashier shows added fees without a leading sign, such as `€2.00`, and deducted
fees with a leading minus sign, such as `-1.5%`. In payin flows, when
`uiShowFees` is enabled, Cashier also shows a
calculated `Fee` summary row in the amount view and in payment form / confirm
summaries. Cashier also shows a calculated `Total` row under `Fee`. Before an
amount is entered, `Total` stays at `0`. After that, it is shown when the fee
changes the entered amount.

When `uiCancelPendingPayout` is enabled, payin flows can replace the
normal interactive prompt with a pending-withdrawal cancellation prompt. Cashier
checks the latest 100 payout history items and shows the prompt only when it
finds a cancellable pending withdrawal. When amount view is enabled, the
prompt stays on the amount step. When amount view is disabled, it appears on
the payment details or confirm step instead. When more than one pending
withdrawal is found, Cashier keeps the prompt visible and opens a drawer so
one payout can be chosen and cancelled at a time. Dismissing it hides the
current pending set for the rest of the session unless the pending set
changes. When `lockAmount` is `true`, Cashier treats this feature as
disabled.

When `uiCardBrand` is `true`, card payments use the branded card shell and
card-brand footer. Set it to `false` if you want the card inputs to follow the
same plain form style as the rest of the payment form.

In payout flows, if you provide both `user.balance` and
`user.withdrawableBalance`, Cashier uses `withdrawableBalance` as the payout
amount ceiling and shows the regular amount-limit error state if the entered
amount is too high. Cashier shows `Withdrawable` and `Locked` in the amount
view and on editable payout payment-form routes. Cashier also shows
`Remaining balance` on payout summary surfaces and a payout `You will receive`
row in the amount view and in payout payment form / confirm summaries when the
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
import type { CashierConfig } from '@paycontrollimited/cashier'

const Cashier = dynamic(
  () => import('@paycontrollimited/cashier').then((module) => module.default),
  { ssr: false },
)

const config: Partial<CashierConfig> = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: 'payin' as CashierConfig['method'],
  apiUrl: 'https://api.paycontrol.app',
  uiInteractivePrompts: true,
  uiProgressBar: true,
  uiShowFees: true,
}

export default function CheckoutPage() {
  return <Cashier config={config} />
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
  locked, and the amount step is skipped even if `uiAmountView` is enabled.
- When `uiAmountView__PaymentTypePicker` is enabled, the quick-payment payment
  type picker stays height-capped and scrolls on longer lists instead of
  growing to the full available drawer height.
- Hosted card forms keep a minimum card-like shell height even when only a
  sparse hosted-field subset is rendered, for example CSC-only verification.

## Interactive prompts mode

- `uiInteractivePrompts` is enabled by default.
- When enabled, supported screens show an interactive prompt instead of the standard
  headline.
- Interactive prompt titles, body copy, and actions can be translated with
  `interactive_prompt.*` keys.
- If interactive prompt copy is missing for a screen, Cashier falls back to the standard
  headline text so the header area always stays populated.

## Bonus metadata

Bonuses can include optional award metadata:

- `maxBonus`
- `maxBonusPercentage`

Cashier uses this metadata for interactive prompts and bonus summaries. Payment
requests still send `bonusCode` only.

```ts
const config: Partial<CashierConfig> = {
  bonuses: [{
    code: 'WELCOME',
    title: 'Welcome offer',
    description: '100% up to 200 EUR',
    maxBonus: 200,
    maxBonusPercentage: 100,
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
  defineCashier,
  CashierMethods,
  type CashierConfig,
} from '@paycontrollimited/cashier'

defineCashier()

const config: CashierConfig = {
  merchantId: '<merchant-id>',
  userId: '<user-id>',
  sessionId: '<session-id>',
  method: CashierMethods.PAYIN,
  apiUrl: 'https://api.paycontrol.app',
  debug: false,
  initialAmount: '0',
  lockAmount: false,
  currency: 'EUR',
  uiListStyle: 'grid',
  locale: 'en-GB',
  uiPaymentMethodSwitcher: true,
  uiProgressBar: true,
  uiInteractivePrompts: true,
  uiAmountView: true,
  uiAmountView__PaymentTypePicker: true,
  uiListSelectable: true,
  uiShowFees: true,
  uiPreselectedPaymentType: null,
  uiAccountDelete: true,
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
