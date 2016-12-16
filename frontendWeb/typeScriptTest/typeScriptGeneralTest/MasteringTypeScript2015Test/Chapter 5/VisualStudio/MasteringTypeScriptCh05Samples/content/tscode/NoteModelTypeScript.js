var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Note = (function (_super) {
    __extends(Note, _super);
    function Note() {
        _super.apply(this, arguments);
    }
    Note.prototype.initialize = function () {
        alert("Note model Typescript initialize");
    };
    Note.prototype.author = function () {
    };
    Note.prototype.coordinates = function () {
    };
    Note.prototype.allowedToEdit = function (account) {
        return true;
    };
    return Note;
})(Backbone.Model);
var AppViewModel = (function () {
    function AppViewModel() {
        this.firstName = "test";
        this.lastName = "testLastName";
    }
    return AppViewModel;
})();
//# sourceMappingURL=NoteModelTypeScript.js.map