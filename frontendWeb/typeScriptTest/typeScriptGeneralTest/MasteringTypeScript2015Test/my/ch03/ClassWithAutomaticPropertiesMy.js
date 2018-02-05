var ClassWithAutomaticPropertiesMy = (function () {
    function ClassWithAutomaticPropertiesMy(id, name) {
        this.id = id;
        this.name = name;
    }
    ClassWithAutomaticPropertiesMy.prototype.print = function () {
        console.log("id:" + this.id + " name:" + this.name);
    };
    return ClassWithAutomaticPropertiesMy;
}());
var myAutoClass = new ClassWithAutomaticPropertiesMy(1, "name");
myAutoClass.id = 2;
// myAutoClass.name = "test";
myAutoClass.print();
