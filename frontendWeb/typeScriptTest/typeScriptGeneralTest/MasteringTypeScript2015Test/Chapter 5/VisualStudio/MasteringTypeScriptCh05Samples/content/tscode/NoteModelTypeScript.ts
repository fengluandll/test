
class Note extends Backbone.Model {
    initialize() {
        alert("Note model Typescript initialize");
    }
    author() { }
    coordinates() { }
    allowedToEdit(account) {
        return true;
    }
}


class AppViewModel {
    firstName: string = "test";
    lastName: string = "testLastName";
}

