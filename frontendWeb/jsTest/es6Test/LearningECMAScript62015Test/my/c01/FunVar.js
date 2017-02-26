var a = 12; //accessible globally
function myFunction()
{
    console.log('a: ',a); //12
    var b = 13; //accessible throughout function
    if(true) {
        var c = 14; //accessible throughout function
        console.log('b: ',b); //13
    }
    console.log(`c: ${c}`);//14
}
myFunction();