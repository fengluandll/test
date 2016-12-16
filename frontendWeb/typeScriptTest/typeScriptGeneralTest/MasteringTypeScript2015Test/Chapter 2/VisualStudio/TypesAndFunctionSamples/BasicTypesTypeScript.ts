
// Basic Types
var myString = "this is a string";
var myNumber = 1;
//myNumber = myString; // error

// Duck Typing
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "anotherName" };
//complexType = { id: 2 }; // error
//complexType = { name: "anotherName" }; // error
//complexType = { address: "address" }; // error
complexType = { name: "name", id: 2, address: "address" };	

// Arrays
var arrayOfNumbers: number[] = [1, 2, 3];
arrayOfNumbers = [3, 4, 5];
//arrayOfNumbers = ["one", "two", "three"]; // error

// Any
var item1: any = { id: 1, name: "item 1" };
item1 = { id: 2 };

var item1 = <any> { id: 1, name: "item 1" };
item1 = { id: 2 };

// Enums
enum DoorState {
    Open,
    Closed,
    Ajar
}

window.onload = () => {
    var myDoor = DoorState.Open;
    console.log("My door state is " + myDoor.toString());
    var openDoor = DoorState["Closed"];
    console.log("My door state is " + openDoor.toString());
    var ajarDoor = DoorState[2];
    console.log("My door state is " + ajarDoor.toString());
    console.log(DoorState.Open == DoorState.Closed);
};

