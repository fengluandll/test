class ClassWithAutomaticProperties {

    constructor(public id: number, private name: string) {
    }

    print(): void {
        console.log("id:" + this.id + " name:" + this.name);
    }
}

var myAutoClass = new ClassWithAutomaticProperties(1, "name");
myAutoClass.id = 2;
// myAutoClass.name = "test";

myAutoClass.print();