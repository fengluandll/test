var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
;
var EmailGreeter = (function (_super) {
    __extends(EmailGreeter, _super);
    function EmailGreeter(message, email) {
        var _this = _super.call(this, message) || this;
        _this.email = email;
        return _this;
    }
    EmailGreeter.prototype.mailTo = function () {
        return "mailto:" + this.email + "?subject=" + this.greet();
    };
    return EmailGreeter;
}(Greeter));
var emailGreeter = new EmailGreeter("world", "yun.zhang@gmail.com");
console.log(emailGreeter.mailTo());
