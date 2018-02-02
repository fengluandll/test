/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
var savingsLatest, historyLatest;

$refereshButton.on('click', (ev) => {                            // #A
    checkingBalance.then((checking) => {
        makeHttpGetRequest(`account/history/${userId}`).then((history) => {  // #C
            historyLatest = history;
            displayAccountDetails(checking, savings, history);
        });                                                          // #C
    });
});                                                              // #A

$refreshSavings.on('click', (ev) => {                           //  #B
    checkingBalance.then(checking => {
        makeHttpGetRequest(`account/savings/${userId}`).then(savings => {     //#D
            savingsLatest = savings;
            displayAccountDetails(checking, savings, history);
        });
    });
});                                                              // #B
