interface IPersonMy {
    getPersonCategory(): string;

    canSignContracts(): boolean;

    getDateOfBirth(): string;
}

class PersonMy {
    _dateOfBirth: Date;


    constructor(dateOfBirth: Date) {
        this._dateOfBirth = dateOfBirth;
    }

    getDateOfBirth(): string {
        return this._dateOfBirth.toDateString();
    }
}

class InfantMy extends PersonMy implements IPersonMy {

    getPersonCategory(): string {
        return "Infant";
    }

    canSignContracts(): boolean {
        return false;
    }
}

class ChildMy extends PersonMy implements IPersonMy {
    getPersonCategory(): string {
        return 'Child';
    }


    canSignContracts(): boolean {
        return false;
    }
}

class AdultMy extends PersonMy implements IPersonMy {
    getPersonCategory(): string {
        return "Adult";
    }

    canSignContracts() {
        return true;
    }
}

class PersonFactoryMy {
    getPerson(dateOfBirth: Date): IPersonMy {
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

    }
}

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

