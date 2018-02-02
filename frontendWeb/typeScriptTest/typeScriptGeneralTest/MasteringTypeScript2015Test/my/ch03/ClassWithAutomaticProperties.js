var ClassWithAutomaticProperties = (function () {
    function ClassWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    ClassWithAutomaticProperties.prototype.print = function () {
        console.log("id:" + this.id + " name:" + this.name);
    };
    return ClassWithAutomaticProperties;
}());
var myAutoClass = new ClassWithAutomaticProperties(1, "name");
myAutoClass.id = 2;
// myAutoClass.name = "test";
myAutoClass.print();
