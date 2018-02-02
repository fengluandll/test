/**
 *  RxJS in action
 *  Chapter #3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
// Example 1
Rx.Observable.from(candidates)
    .map(obj => obj.experience)
    .take(2) //#A
    .do(val => console.log(`Visiting ${val}`)) //#B
    .subscribe(); // prints "Visiting JavaScript Guru"
// "Visiting Historian"

// Example 2
Rx.Observable.from(candidates)
    .filter(candidate => {  //#C
        return candidate.experience.toLowerCase().includes('scala')
    })
    .map(candidate => candidate.name)
    .defaultIfEmpty('None exist') //#D
    .forEach(console.log);  //prints "None exist"
