/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
Rx.Observable.combineLatest(
    accountHistory$, checkingBalance$, savingsBalance$)
    .subscribe(([history, checking, savings]) =>
        displayAccountBalances(history, checking, savings));
