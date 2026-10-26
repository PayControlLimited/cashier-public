# @paycontrollimited/cashier

PayControl Cashier package for embedding Cashier as a React component or a `pc-cashier` web component.

## Installation

```bash
npm install @paycontrollimited/cashier
# or
yarn add @paycontrollimited/cashier
```

If the host uses Content Security Policy, allow the configured Return API origin
in `connect-src` so Cashier can report a missing 3DS Method callback.

## Root exports

Runtime exports from `@paycontrollimited/cashier`:

- `default` (`Cashier` React component)
- `Cashier` (named React component export)
- `defineCashier`
- `defaultCashierConfig`
- `CashierOffersStyle`
- `CashierBonusesStyle` (legacy adapter)
- `CashierComboViewPaymentTypesMode`
- `CashierLayoutListType`
- `CashierMethods`
- `CashierSuggestAction`
- `CashierSummaryActionType`

Type exports from `@paycontrollimited/cashier`:

- `CashierHandle` for runtime offer, checkout, user/balance and guarded
  navigation/recovery commands; see the imperative API below.
- `CashierEmbeddingSnapshot`, `CashierEmbeddingRecovery`,
  `CashierEmbeddingCommandResult` and `CashierEmbeddingStateChanged`
- `CashierOffer`, `CashierOfferSelectionChangedEvent`
- `CashierCheckoutSnapshot`, `CashierCheckoutUpdateRequest`,
  `CashierCheckoutUpdateResolution`, `CashierCheckoutUpdateRejection`,
  `CashierCheckoutState` and `CashierCheckoutCommandResult`
- `CashierPriceComparison`, `CashierOrderPriceComparison`, `CashierDiscount`
  and `CashierSavingAllocation`
- `CashierElement`, `CashierElementItem`, `CashierDisplayItem` and `CashierAward`
- `CashierPaymentContext` and its versioned historical shapes
- `CashierConfig`
- `CashierProps`
- `CashierOffersStyle`
- `CashierBonusesStyle` (legacy adapter)
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
- `CashierPresentation`, `CashierScreenProps` and `CashierSlotProps` for React
  screen and slot overrides
- `CashierDomPresentation` and its explicit DOM renderer/lifecycle types for
  the `pc-cashier` Custom Element
- `CashierPresentationError` and `CashierPresentationIntentReceipt`
- `CashierPresentationText`, `CashierPresentationLocalisation`,
  `CashierPresentationMoney`, `CashierPresentationPaymentType`,
  `CashierPresentationLogo`, `CashierPresentationLimit` and
  `CashierPresentationOutcome`

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

## Embedding lifecycle and guarded host actions

The optional top-level `onEmbeddingStateChanged` prop reports a readonly
`CashierEmbeddingSnapshot`. It is separate from `CashierConfig`; the Custom
Element exposes the same callback as a JavaScript property. It never reports
configuration, credentials, form values, provider payloads or raw errors.

```tsx
import { useRef } from 'react'
import Cashier, { type CashierHandle } from '@paycontrollimited/cashier'

const ref = useRef<CashierHandle>(null)
<Cashier ref={ref} config={config} onEmbeddingStateChanged={(state) => {
  // Readiness requires completed bootstrap and a committed Cashier runtime.
  setReady(state.lifecycle === 'ready')
}} />
```

`CashierHandle` retains its existing methods and adds:

- `getEmbeddingState()`: current lifecycle (`bootstrapping`, `ready`, `error` or
  `disposed`), `busy`, `canGoBack`, recovery state and optional safe error code.
- `requestBack()`: requests guarded Cashier history navigation.
- `requestClose()`: checks whether the host may close. An accepted result does
  not unmount Cashier, cancel a payment or declare a financial outcome.
- `reconcile()`: refreshes the current payment using the existing status owner.

Commands return `{ status: 'accepted' }` or `{ status: 'rejected', reason }`.
A rejected command has no effect. Retained handles reject after destruction.
The observer runs after committed updates; equivalent snapshots are suppressed,
replacement observers receive the current snapshot, and observer failures are
isolated. `onInit` retains its existing configuration callback semantics.

Recovery is `{ kind: 'unsubmitted' }`, `{ kind: 'known', paymentId }` or
`{ kind: 'unknown-creation' }`. Cashier marks creation uncertain before dispatch;
if the request fails without a payment ID, the absence of an ID does not prove
that no payment exists. With lifecycle observation enabled, Cashier prevents
another submission in that state. Preserve the instance and resolve the payment
with the merchant; neither reconciliation nor recreation automatically retries
creation. An explicit verified payment ID can use `resumePaymentId`.

Change only `sessionId` to refresh credentials within the existing API, merchant
and user scope. This preserves active provider content. Session-only recovery
still requires the documented original ownership context. `uiTheme` also updates
without recreating Cashier; other configuration changes may remount the runtime.

## Recovering an active payment

Cashier normally keeps an active payment alive across its own configuration,
runtime and route remounts. If the host must destroy and recreate the complete
Cashier component, retain the payment ID received by `onPaymentCreated` and
pass it back through the top-level `resumePaymentId` prop:

```tsx
import { useState } from 'react'
import Cashier, {
  type CashierConfig,
} from '@paycontrollimited/cashier'

export function Checkout({
  initialPaymentId,
}: {
  initialPaymentId?: string
}) {
  const [resumePaymentId, setResumePaymentId] = useState(initialPaymentId)
  const checkoutConfig: Partial<CashierConfig> = {
    ...config,
    onPaymentCreated: (result) => {
      if (result && 'paymentId' in result && result.paymentId) {
        setResumePaymentId(result.paymentId)
      }
    },
    onPaymentFinished: () => setResumePaymentId(undefined),
  }

  return (
    <Cashier
      config={checkoutConfig}
      resumePaymentId={resumePaymentId}
    />
  )
}
```

`resumePaymentId` is not part of `CashierConfig`, cannot be supplied by remote
merchant configuration, and has no HTML attribute. For a Custom Element,
assign its DOM property before connection or upgrade when possible:

```ts
cashierElement.resumePaymentId = retainedPaymentId
```

Adopting a recovered payment does not replay `onPaymentCreated`. The same
payment ID is consumed once per Cashier instance; removing the prop does not
cancel tracking, and a different ID is rejected while another non-terminal
payment is active. Clear the host-retained ID from `onPaymentFinished`.

Recovery restores the latest server-known status and supported provider actions. It
cannot restore an iframe's in-memory state, unsent provider-form values, or
Hosted Fields values. Avoid destroying an active Cashier when the provider
interaction itself must remain continuous. Cashier does not write payment IDs
to browser storage; persistence across complete host destruction remains the
host's responsibility. A 3DS Method action with timeout reporting is not
restarted after Cashier recreation; recovery observes its status only.

## Cashier UI overrides

Cashier UI overrides change approved UI while Cashier keeps payment state,
validation, API/status work, provider execution and Hosted Fields. Omit
`presentation` to keep the standard Cashier unchanged. The prop is an
independently hot-updated UI contract, not `CashierConfig`.

React integrations use the canonical `CashierPresentation` type shown below.
Custom Elements use `CashierDomPresentation` because their entries are
synchronous DOM renderers rather than React components. Both bindings expose
the same screen and slot models, actions, options and diagnostics.

```tsx
import Cashier, {
  type CashierPresentation,
} from '@paycontrollimited/cashier'

const presentation: CashierPresentation = {
  slots: {
    header: ({ model }) => (
      <header>
        {model.title && <h1>{model.title.value}</h1>}
        {model.subtitle && <p>{model.subtitle.value}</p>}
      </header>
    ),
  },
  screens: {
    processing: {
      scope: 'screen',
      component: ({ model }) => (
        <main role="status" aria-live="polite" aria-busy={model.busy}>
          <h1>{model.title.value}</h1>
          {model.message && <p>{model.message.value}</p>}
        </main>
      ),
    },
  },
}

<Cashier config={config} presentation={presentation} />
```

`<Cashier {...config} presentation={presentation} />` also works. Adding,
removing or replacing presentation does not restart an in-flight Cashier.
Adding an override to an active standard protected task waits for that task to
end. Replacing or removing an override that has mounted its `ProtectedSurface`
also waits; an override that never mounts the offered surface cannot freeze its
own removal. These rules keep form drafts and Hosted Fields mounted. Other
presentation changes apply immediately.
For a Custom Element presentation that should replace an initially protected
screen, assign the `presentation` property before the element connects (or
before `defineCashier()` upgrades it); a first assignment made after the task
starts follows the same deferral rule.
The installed package version defines the presentation contract. TypeScript
reports incompatible shapes during upgrades; invalid JavaScript shapes fall
back safely.

Available slots are:

| ID | Replaces | Cashier still owns |
| --- | --- | --- |
| `header` | Title/subtitle block | Leading and trailing controls plus header layout |
| `methodSwitcher` | Pay-in/pay-out controls | Selection state, guarded transitions and payment task continuity |
| `progress` | Progress visual | Placement and progress calculation |
| `paymentTypeItem` | Primary logo/name/description | Selection/accessibility shell, account controls and expanded content |
| `providerActionPrompt` | Provider prompt content | Provider execution, popup ownership and status handling |
| `summaryDetails` | Final payment-summary field rows | Panel chrome, outcome header, surrounding panels and actions; other form/combo summaries are unchanged |
| `summaryActions` | Summary controls | Filtering, safe URL/restart behaviour and placement |

All Cashier-owned copy is `CashierPresentationText`: render `.value`; use the
optional `.key` only to identify or replace the complete Cashier-resolved
value. Every renderer also receives `localisation.locale` and
`localisation.direction`. Cashier does not expose its translation catalogue,
candidate resolver or formatter. Money carries its exact decimal `value`,
`currency` and Cashier-formatted `display`; do not round or reformat it.
Payment methods expose semantic identity, bounded logo variants and optional
formatted limits without leaking generated Payment API types.

`methodSwitcher` exposes the Cashier-owned pay-in/pay-out region. Render its
options and call the guarded `actions.select(method)` intent; do not mirror
method state or remount `<Cashier>` on a method change. It is available with
`content`-scoped screens while `screen` scope deliberately remains shellless.

Screen/task override IDs are `combo`, `paymentTypes`, `bonusSelection`,
`paymentDetails`, `paymentConfirmation`, `providerAction`, `summary`,
`loading`, `empty`, `processing`, `unsupported`, and `error`.

Entries use `content` by default, retaining the Cashier frame and global
controls. `screen` replaces the complete visible canvas for that active task,
including method switcher and progress, while Cashier keeps workflow and
payment effects:

```tsx
const presentation: CashierPresentation = {
  screens: {
    summary: {
      component: MerchantSummary,
      scope: 'screen',
    },
  },
}
```

Use a full screen to rearrange model fields/actions. Screens that retain a
Cashier-owned form receive an opaque `ProtectedSurface`; render it once wherever
the secure task should appear. Combo overrides receive
`model.amountEntryVisible` to determine whether amount entry applies,
Cashier-localised validation as `model.amountError`, exact/formatted
`model.amount`, and applicable effective configuration suggestions as
`model.suggestedAmounts`. When amount entry does not apply, Cashier projects an
empty amount and suggestion list, and rejects `setAmount`. Nested slots are
suppressed inside a screen.

Slots restore their standard content if they fail. Screen failures show a
Cashier-owned **Try again** / **Use standard screen** rescue. Presentation
actions return guarded accepted/rejected receipts; rejected receipts include a
Cashier-localised `message`. Duplicate asynchronous
submissions remain rejected as busy until the Cashier-owned operation settles.
Accepted means Cashier accepted the intent, not that payment succeeded.
Summary renderers use canonical `model.outcome` for icons, colour and accessible
semantics instead of parsing raw Payment API status values.

Custom Elements use the `presentation` DOM property with synchronous
`mount`/`update`/`destroy` renderers. There is no `presentation` HTML attribute.

See the complete tutorial for individual slots, rearrangement, full-screen
summary, post-submit processing, protected surfaces, DOM renderers, diagnostics
and legacy summary-action migration:
[Customise Cashier with slots and screen overrides](https://github.com/PayControlLimited/PayControl/blob/master/docs/cashier/cashier-ui-overrides.md).

## Payment callbacks

`onPaymentUpdated` fires for ordinary live status-stream messages, meaningful
status changes discovered by JSON reconciliation, and one error per distinct
status-stream outage. Message events use the same normalised payment progress
fields Cashier uses internally:

```ts
const config: Partial<CashierConfig> = {
  onPaymentUpdated(event) {
    if (event.type === 'error') {
      console.warn(event.paymentId, event.error.message)
      return
    }

    console.log(event.paymentId, event.status)
  },
}
```

Payment updates can contain bearer credentials in `redirect.timeout.reportToken`.
Log selected fields such as payment ID and status; keep full events out of logs,
analytics and browser storage.

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

Unchanged safety-poll results and the first unchanged stream replay after a
reconnect or internal remount are suppressed. An outage error means status
observation is recovering; it does not mark the payment failed. Cashier keeps
the current provider action mounted while recovery is in progress. An
established, healthy stream is reconciled over JSON once per minute; startup,
foreground return and degraded-stream recovery reconcile sooner. This bounds
the merchant `ValidateSession` work performed by every JSON status request.

If a stable observation error becomes fatal, Cashier keeps payment creation
locked and shows **Try again**. Retrying re-arms observation for the same
payment; it does not create another payment or replace a mounted provider
iframe or form. Repeated status `404` responses without a successful observation
also show **Try again** after 60 seconds; this does not mark the payment as failed.

Session-only integrations must retain the creation session until the payment's
current user is known. A replacement session alone does not establish ownership;
provide credentials for the resolved user to restore status access.

`onPaymentFinished` fires exactly once per Cashier instance when the tracked
payment reaches terminal `done`, whether SSE or JSON reconciliation discovers
it. Host callback throws and rejected promises are isolated from Cashier
tracking and navigation.

A payment can still be unresolved when the user flow completes. Cashier keeps
re-reading the summary while that is the case, and calls `onPaymentUpdated`
again once the payment settles. In this one event `paymentStatus` carries the
payment's own outcome rather than the flow status, while `status` stays `done`
because the flow did complete:

```ts
{
  type: 'message',
  merchantId: 'merchant_abc',
  paymentId: 'pay_123',
  status: 'done',
  paymentStatus: 'successful',
}
```

The re-reads slow down as they go and pause while the page is in a background
tab, resuming as soon as the user returns to it. Nothing on the summary screen
changes until the status does.

`onPaymentSummary` fires after the Summary API response loads, and again if
a later re-read returns a changed summary:

```ts
const config: Partial<CashierConfig> = {
  onPaymentSummary(event) {
    console.log(event.paymentId, event.summary.paymentStatus)
  },
}
```

`CashierPaymentSummaryResponse` mirrors the Summary API response shape as a
Cashier-owned public type for package consumers.

Summary field strings display exactly as supplied, including numeric references
and date-like text. Currency formatting applies only to structured
`{ value, currency }` amounts. The same values reach standard receipts and
presentation overrides; `onPaymentSummary` receives the original API response.

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
  locked. Bonus top-up actions are hidden and restored drafts cannot change the
  locked value. Eligible partial bonus awards remain available.
- Locked amounts preserve useful combo views: multiple methods or accounts,
  disabled alternatives, editable inline details, Hosted Fields and eligible
  bonus choices. A sole usable method with no useful entry controls opens the
  existing bonus/details/confirmation step. Automatic selection creates no
  payment and does not fire `onPaymentTypeSelected`. Use `uiComboView: false`
  to require the separate flow. Entry is resolved after Restart or a method
  switch; later eligibility updates leave the customer on their current screen.
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

## Merchant return URL

Some providers open a window of their own from inside the provider page.
Cashier did not open that window, so it cannot close it either, and the payer
is left on a blank page there when they come back. Set `returnUrl` to a page of
your own and the payer is sent to it once the payment flow is finished, so you
can close that window or tell the payer to close it.

```ts
const config: Partial<CashierConfig> = {
  returnUrl: 'https://merchant.example/checkout/return',
}
```

What to expect:

- The host must be listed in `returnUrlHosts` on your merchant configuration.
  Payment creation is rejected when it is not.
- `paymentId` is appended to the URL as a query parameter. The payment status
  is not: read it from `GET /payment/status/{paymentId}`, from your
  `/payment-update` webhook, or from the `onPaymentFinished` callback in the
  Cashier that is still running in your own page.
- The payer is only sent there when nothing further is required of them. If the
  flow continues, they stay on the provider page and Cashier carries on.
- The redirect is best effort. Some connections treat the provider's own
  notification as the point the payment is finished; when it has not arrived by
  the time the payer returns, no redirect happens. The payment itself completes
  as usual.
- A provider page that Cashier renders in a frame is never redirected, so your
  page cannot be loaded inside the checkout.
- Cashier does not close the provider window of a payment it created with a
  return URL: that window is yours to end, and it stays yours even if you
  change the configuration while the payment is still running. Your return page
  can call `window.close()`, which browsers allow for a window opened by a
  script, and should otherwise tell the payer they can close it.

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
- React handle updates are retained during bootstrap and same-principal runtime
  remounts. Changing API, merchant or user clears them; when `userId` is absent,
  a session change also clears them. Explicit clears remain cleared on remount.
- Assigning the web component's `config` property clears its runtime overrides,
  including values supplied while bootstrap is pending.

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
  returnUrl: 'https://merchant.example/checkout/return',
}

const element = document.querySelector('pc-cashier') as (
  HTMLElement & { config?: Partial<CashierConfig> }
) | null

if (element) {
  element.config = config
}
```

## Merchant elements and purchase recovery

Use `presentation.elements` for ordered text, actions and awards, grouped by scope,
screens, placement and layout. Members share semantic visuals. Reuse the same scoped
member ID across screens to reuse one captured fact with different presentation;
conflicting definitions reject. No separate rules or action-layout API is needed.
See the [complete authoring example](https://github.com/PayControlLimited/PayControl/blob/master/docs/cashier/cashier-ui-overrides.md#configure-built-in-content-without-component-overrides).

Payment definitions, resolved translations, exact quantities, URLs and visibility freeze
at final Pay; global content and cosmetics remain live. Update the presentation prop/property
without remounting payment fields. Notifications announce only when explicitly requested.
Released bonuses, summary actions, slots, screens, selectors, theme tokens and callbacks
retain their adapters. Merchant additions do not implicitly replace standard payment controls.

`resumePaymentContext` beside `resumePaymentId` accepts frozen purchase facts,
display membership (v2), display items (v3), and confirmed offer/pricing facts (v4).
All four readers retain literal historical wording.
Identity or exact-money contradictions omit purchase content while retaining authoritative
payment details and current global declarations. Recovery cannot prove fulfilment.

After uncertain creation retain the instance, discover the existing payment ID on your
server, then call `reconcile({ paymentId, paymentContextId? })`. Failed candidates retain
the uncertainty lock. No browser persistence or automatic unlock is provided.

Pure element/content/recovery validators are exported through `/purchase`. Hosted Web
configure accepts JSON presentation; negotiated `setPresentation` updates it (`null` clears).
Native SDK conformance covers hosted Web embedding, not future directly rendered native Cashier.

## Shared offers and merchant-confirmed prices

Configure `offers` (`CashierOffer[]`) to use the existing bonus picker with neutral
copy. One selection can grant awards and request a merchant-owned discount.
`pricing: 'merchant'` requires `lockAmount`, `paymentContextId`, and a host
`onCheckoutUpdateRequested` handler to acknowledge changes. A displayed coupon or
offer ID is not a submission code; opt in with `submission: { bonusCode }`.
Legacy `bonuses` and UI/handle/callback names remain compatible adapters.

`initialAmount` is always authoritative. Item `pricing` supports reference/current
money, fixed/percentage display previews, explicit unit/line basis and identified
merchant saving allocations. `checkout.pricing` compares the confirmed order
amount; fees stay separate. There is no item-sum, cart, tax, shipping or payable
engine. For merchant-rounded lines, provide `pricing.amount` directly rather than
inventing unit money by division. `unitPrice` still works as shorthand.

```ts
const handle = cashierRef.current
// In onCheckoutUpdateRequested, ask the merchant server, then acknowledge once:
handle?.resolveCheckoutUpdate({
  requestId: request.requestId,
  checkout: {
    initialAmount: result.amount, currency: result.currency,
    paymentContextId: result.revision,
    selectedOfferId: request.selectedOfferId,
    elements: result.paymentElements,
    eligibilityAmount: result.eligibilityAmount,
    pricing: result.comparison,
  },
})
```

The boundary applies confirmed facts atomically without remounting the runtime,
route or Hosted Fields. Pending money remains the previous confirmed money; Pay
is disabled. Known rejection restores Pay only if the previous confirmation is
still valid. Unknown/timeout/expiry requires fresh merchant confirmation through
`refreshCheckout`; no automatic timeout retry occurs. A 30-second deadline does
not prove the previous price remains valid. Backend validation remains essential.

Zero-price acknowledgement replaces payment inputs with an explicit
`onNoPaymentRequired` handoff. It does not tokenise, create a payment or emit a
payment-success event. The merchant completes the order. At Pay, recovery v4
captures literal offer binding, wording and comparison facts; v1/v2/v3 readers
remain supported. Hosted operations require `checkoutOffers` negotiation. See the
[configuration reference](https://github.com/PayControlLimited/PayControl/blob/master/docs/cashier/cashier-configuration.md#shared-offers-comparison-prices-and-merchant-updates)
for precedence, rounding, callbacks and migration.

## Merchant checkout tutorial

Follow the [step-by-step checkout tutorial](https://github.com/PayControlLimited/PayControl/blob/master/docs/cashier/cashier-integration.md#tutorial-build-a-merchant-checkout)
to add goods and a linked support footer, connect offer selection to your order
service, handle uncertain prices and free orders, and resume the original
payment. The [typed example](https://github.com/PayControlLimited/PayControl/blob/master/frontend/fixtures/cashier-consumers/vite-react/src/merchant-checkout.ts)
is compiled against the packed package. No Payment API change is required.
