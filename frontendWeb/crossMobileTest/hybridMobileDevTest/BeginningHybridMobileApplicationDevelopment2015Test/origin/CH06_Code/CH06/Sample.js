//This is comment is Javascript
//Another comment
//Yet another comment

//Below function does nothing!
function myfunction() {
    var v1 = 100;
    var v2 = new Date();
    var v3 = "some string";

    //Below is loop for no reason

    for (var i = 0; i < 100; i++) {
        document.writeln("For no reason " + i + " time(S)");

        //below is comparison for no reason

        if (i==20) {
            document.writeln("This is condition satisfied");
        }
    }

    //Call below function for no reason
    Second();

}

function Second() {
    alert('Hi, for no reason');
}