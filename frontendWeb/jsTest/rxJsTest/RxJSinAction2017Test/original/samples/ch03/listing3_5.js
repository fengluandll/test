/**
 *  RxJS in action
 *  Chapter #3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
Rx.Observable.fromEvent(users, 'change')
    .map(event =>
    {
        return {  //#A
            name: event.target.value,
            status: event.target.checked
        }
    })
    .filter(obj => obj.status) //#B
    .do(name => `Removing ${user.name}`)
    .subscribe(addToRemoveList);
