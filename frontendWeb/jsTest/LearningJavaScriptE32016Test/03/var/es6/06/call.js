const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };
// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
}
greet(); // "Hello, I'm undefined!" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'


console.log(greet()); // "Hello, I'm undefined!" - 'this' not bound
console.log(greet.call(bruce)); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
console.log(greet.call(madeline)); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
console.log(bruce);
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer" }
update.call(madeline, 1942, 'actress');
console.log(madeline);
// madeline is now { name: "Madeline", birthYear: 1942,
// occupation: "actress" }

console.log('update');
update.apply(bruce, [1955, "actor"]);
console.log(bruce);
// bruce is now { name: "Bruce", birthYear: 1955,
// occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918,
// occupation: "writer" }

console.log(madeline);

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)