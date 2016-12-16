var HelloWorldClass = (function () {
    function HelloWorldClass() {
    }
    HelloWorldClass.prototype.render = function (text, elementId) {
        var el = document.getElementById(elementId);
        el.innerText = text;
    };
    return HelloWorldClass;
})();

window.onload = function () {
    var myClass = new HelloWorldClass();
    myClass.render("Hello World", "content");
};
//# sourceMappingURL=HelloWorld.js.map
