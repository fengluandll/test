var ClassWithModifiers = (function () {
    function ClassWithModifiers(id, name) {
        this._id = id;
        this._name = name;
    }
    ClassWithModifiers.prototype.modifyId = function (id) {
        this._id = id;
        this.updateNameFromId();
    };
    ClassWithModifiers.prototype.updateNameFromId = function () {
        this._name = this._id.toString();
    };
    return ClassWithModifiers;
})();

var myClass = new ClassWithModifiers(1, "name");
myClass.modifyId(2);

//myClass._id = 2;
//myClass.updateNameFromId();
var ClassWithAutomaticProperties = (function () {
    function ClassWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    ClassWithAutomaticProperties.prototype.print = function () {
        console.log("id:" + this.id + " name:" + this.name);
    };
    return ClassWithAutomaticProperties;
})();

var myAutoClass = new ClassWithAutomaticProperties(1, "name");
myAutoClass.id = 2;

//myAutoClass.name = "test";
var SimpleClass = (function () {
    function SimpleClass() {
    }
    return SimpleClass;
})();

var mySimpleClass = new SimpleClass();
mySimpleClass.id = 1;

var SimpleClassWithAccessors = (function () {
    function SimpleClassWithAccessors() {
    }
    Object.defineProperty(SimpleClassWithAccessors.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleClassWithAccessors;
})();

var mySimpleAccClass = new SimpleClassWithAccessors();
mySimpleClass.id = 1;
console.log("id has the value of " + mySimpleClass.id);

var ClassWithFunction = (function () {
    function ClassWithFunction() {
    }
    ClassWithFunction.prototype.printOne = function () {
        console.log("1");
    };
    return ClassWithFunction;
})();

var myClassWithFunction = new ClassWithFunction();
myClassWithFunction.printOne();

var ClassWithStaticFunction = (function () {
    function ClassWithStaticFunction() {
    }
    ClassWithStaticFunction.printTwo = function () {
        console.log("2");
    };
    return ClassWithStaticFunction;
})();

ClassWithStaticFunction.printTwo();

var PersonType = (function () {
    function PersonType() {
    }
    PersonType.INFANT = "Infant";
    PersonType.CHILD = "Child";
    PersonType.ADULT = "Adult";
    return PersonType;
})();

var value = "test";
if (value === "Infant") {
    // do something with an infant.
}

if (value === PersonType.INFANT) {
    // do something with an infant.
}
//# sourceMappingURL=04_ClassModifiersSamples.js.map
