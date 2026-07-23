type CashierCallback<TPayload> = (payload: TPayload) => void | Promise<void>;
export declare const invokeCashierCallbackSafely: <TPayload>({ callback, callbackName, debug, payload, }: {
    callback: CashierCallback<TPayload> | undefined;
    callbackName: string;
    debug: boolean | undefined;
    payload: TPayload;
}) => void;
export {};
//# sourceMappingURL=callbacks.d.ts.map