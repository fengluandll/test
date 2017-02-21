function hello(greeter) {
    greeter.greetings('Hi bear');
}
var GreetableImpl = (function () {
    function GreetableImpl() {
    }
    GreetableImpl.prototype.greetings = function (message) {
        console.log(message);
    };
    return GreetableImpl;
}());
hello(new GreetableImpl());
