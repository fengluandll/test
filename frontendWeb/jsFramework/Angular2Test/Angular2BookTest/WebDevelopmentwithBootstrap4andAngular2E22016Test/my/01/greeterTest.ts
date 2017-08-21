class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }

    greet(){
        return 'Hello, ' + this.greeting;
    }
}

let greeter = new Greeter('world');
console.log(greeter.greet());;

class EmailGreeter extends Greeter{
    private email:string;


    constructor(message: string, email: string) {
        super(message);
        this.email = email;
    }

    mailTo(){
        return `mailto:${this.email}?subject=${this.greet()}`;
    }
}

let emailGreeter = new EmailGreeter("world","yun.zhang@gmail.com");
console.log(emailGreeter.mailTo());