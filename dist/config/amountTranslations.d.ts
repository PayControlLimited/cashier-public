export declare const amountFallbacks: {
    readonly 'error.amount_required': "Enter an amount.";
    readonly 'error.amount_invalid': "Enter a valid decimal amount.";
    readonly 'error.amount_must_be_positive': "Enter an amount greater than zero.";
    readonly 'error.amount_below_limit': "Amount is below the limit of {amount}";
    readonly 'error.amount_above_limit': "Amount is above the limit of {amount}";
    readonly 'error.insufficient_balance': "Insufficient balance.";
    readonly 'error.amount_unsupported_ranges': "Amount must be {ranges}.";
    readonly 'error.amount_no_supported_range': "No supported amount is available. Contact the merchant for help.";
    readonly 'error.amount_amountless_alternative': "Change the amount or choose a payment method that does not require one.";
    readonly 'error.amount_locked_amountless_alternative': "Choose a payment method that does not require an amount.";
    readonly 'error.amount_locked_recovery': "Return to the merchant to change the amount and try again.";
    readonly 'amount.range_up_to': "Greater than zero and at most {amount}";
    readonly 'amount.range_from': "At least {amount}";
};
export declare const amountLocaleFallbacks: Partial<Record<string, Partial<Record<keyof typeof amountFallbacks, string>>>>;
//# sourceMappingURL=amountTranslations.d.ts.map