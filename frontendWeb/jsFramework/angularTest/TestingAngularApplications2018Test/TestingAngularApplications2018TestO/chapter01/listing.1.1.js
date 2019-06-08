"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = /** @class */ (function () {
    function Cat(name) {
        this._name = '';
        this._name = name;
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Cat.prototype.toString = function () {
        return "This cat's name is " + this._name + "!";
    };
    return Cat;
}());
exports.Cat = Cat;
var cat = new Cat('Nicky');
