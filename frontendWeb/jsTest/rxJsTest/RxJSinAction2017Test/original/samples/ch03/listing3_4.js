/**
 *  RxJS in action
 *  Chapter #3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const users = document.querySelectorAll('.remove-link'); //#A

Rx .Observable.fromEvent(users, 'change') //#B
    .map(event => event.target.value)  //#C
    .do(name => console.log(`Removing ${name}!`)) //#D
    .subscribe(addToRemoveList);
