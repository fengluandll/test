interface Greetable{
    greetings(message: string): void;
}

function hello(greeter: Greetable){
    greeter.greetings('Hi bear');
}

class GreetableImpl implements Greetable{
    greetings(message: string): void {
        console.log(message);
    }
}
hello(new GreetableImpl());