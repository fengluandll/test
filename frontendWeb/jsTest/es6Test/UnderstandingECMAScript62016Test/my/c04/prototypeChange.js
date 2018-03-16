let person = {
    getGreeting() {
        return "Hello";
    }
};

let friend = {
    getGreeting() {
        return super.getGreeting() + ', hi!';
    }
};

Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());