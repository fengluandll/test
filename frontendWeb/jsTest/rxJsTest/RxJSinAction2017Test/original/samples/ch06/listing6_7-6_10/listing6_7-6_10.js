/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const userId = 'docbrown2015';


// 6.7
const checkingBalance$ =
    Rx.Observable.fromPromise(
        makeHttpCall(`/accounts/checking/balance/${userId}`)); //#A

const savingsBalance$ =
   Rx.Observable.fromPromise(
      makeHttpCall(`/accounts/savings/balance/${userId}`));  //#B

const accountHistory$ =
    Rx.Observable.fromEvent(refreshButton, 'click')  //#C
      .flatMap(e =>
         makeHttpCall(`/accounts/history/${userId}`)); //#C

// 6.8
function displayAccountDetails(...accounts) {
  for (let account of accounts) {
    console.log(`${account.name}: $${account.amount}`)
  }
}


accountHistory$.subscribe(history => {           //#A
    checkingBalance$.subscribe(checking => {       //#B
        savingsBalance$.subscribe(savings => {       //#B
            displayAccountDetails(checking, savings, history);  //#C
        });
    });
});

// 6.9
Promise.all(checkingBalance, savingsBalance, accountHistory)  //#A
    .then(([checking, savings, history]) => {                 //#B
        displayAccountDetails(checking, savings, history);
    });


// 6.10
const promises = Promise.all(checkingBalance, savingsBalance);    //#A

refereshButton.on('click', ev =>   //#B
    promises.all(([checking, savings]) =>  //#C
        makeHttpCall(`account/history/${userId}`).then(history =>   //#D
            displayAccountDetails(checking, savings, history)
        )
    )
);


