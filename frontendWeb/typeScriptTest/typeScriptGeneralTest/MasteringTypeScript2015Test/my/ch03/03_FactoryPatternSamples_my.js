var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonMy = (function () {
    function PersonMy(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    PersonMy.prototype.getDateOfBirth = function () {
        return this._dateOfBirth.toDateString();
    };
    return PersonMy;
}());
var InfantMy = (function (_super) {
    __extends(InfantMy, _super);
    function InfantMy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfantMy.prototype.getPersonCategory = function () {
        return "Infant";
    };
    InfantMy.prototype.canSignContracts = function () {
        return false;
    };
    return InfantMy;
}(PersonMy));
var ChildMy = (function (_super) {
    __extends(ChildMy, _super);
    function ChildMy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildMy.prototype.getPersonCategory = function () {
        return 'Child';
    };
    ChildMy.prototype.canSignContracts = function () {
        return false;
    };
    return ChildMy;
}(PersonMy));
var AdultMy = (function (_super) {
    __extends(AdultMy, _super);
    function AdultMy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdultMy.prototype.getPersonCategory = function () {
        return "Adult";
    };
    AdultMy.prototype.canSignContracts = function () {
        return true;
    };
    return AdultMy;
}(PersonMy));
var PersonFactoryMy = (function () {
    function PersonFactoryMy() {
    }
    PersonFactoryMy.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, dateNow.getMonth(), dateNow.getDay());
        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDay());
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new InfantMy(dateOfBirth);
        }
        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new ChildMy(dateOfBirth);
        }
        return new AdultMy(dateOfBirth);
    };
    return PersonFactoryMy;
}());
var personFactory = new PersonFactoryMy();
var personArray = new Array();
personArray.push(personFactory.getPerson(new Date(2017, 09, 29)));
personArray.push(personFactory.getPerson(new Date(2008, 09, 29)));
personArray.push(personFactory.getPerson(new Date(1950, 09, 29)));
for (var i = 0; i < personArray.length; i++) {
    console.log("A person with a birth date of :"
        + personArray[i].getDateOfBirth()
        + " is categorised as : "
        + personArray[i].getPersonCategory()
        + " and can sign : "
        + personArray[i].canSignContracts());
}
