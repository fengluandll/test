var StaticClass = (function () {
    function StaticClass() {
    }
    StaticClass.printTwo = function () {
        console.log("2");
    };
    return StaticClass;
}());
StaticClass.printTwo();
