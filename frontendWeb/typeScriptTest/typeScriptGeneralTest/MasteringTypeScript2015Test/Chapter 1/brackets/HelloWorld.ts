
class HelloWorldClass {
    public render(text: string, elementId: string) {
        var el: HTMLElement = document.getElementById(elementId);
        el.innerText = text;
    }
}




window.onload = () => {
    var myClass = new HelloWorldClass();
    myClass.render("Hello World", "content");
};


var test = "test";
//test = 1;

