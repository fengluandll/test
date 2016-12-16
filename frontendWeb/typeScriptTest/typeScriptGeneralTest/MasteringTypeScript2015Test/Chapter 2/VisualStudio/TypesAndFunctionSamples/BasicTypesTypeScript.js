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
var arrayOfNumbers = [1, 2, 3];
arrayOfNumbers = [3, 4, 5];

//arrayOfNumbers = ["one", "two", "three"]; // error
// Any
var item1 = { id: 1, name: "item 1" };
item1 = { id: 2 };

var item1 = { id: 1, name: "item 1" };
item1 = { id: 2 };

// Enums
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));

window.onload = function () {
    var myDoor = 0 /* Open */;
    console.log("My door state is " + myDoor.toString());
    var openDoor = DoorState["Closed"];
    console.log("My door state is " + openDoor.toString());
    var ajarDoor = DoorState[2];
    console.log("My door state is " + ajarDoor.toString());
    console.log(0 /* Open */ == 1 /* Closed */);
};
//# sourceMappingURL=BasicTypesTypeScript.js.map
