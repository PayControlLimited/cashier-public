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
- `CashierMethods`
- `CashierSuggestAction`

Type exports from `@paycontrollimited/cashier`:

- `CashierConfig`
- `CashierProps`
- `CashierTheme`
- `HostedFieldsFontDefinition`

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
  currency: 'EUR',
  uiListStyle: 'grid',
  locale: 'en-GB',
  uiPaymentMethodSwitcher: true,
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
