/**
 * Created by nathanr on 21/10/2014.
 */
class MyClass {
    public render(divId: string, text: string) {
        var el: HTMLElement = document.getElementById(divId);
        el.innerText = text;
    }
}

window.onload = () => {
    var myClass = new MyClass();
    myClass.render("content", "Hello World!");
}