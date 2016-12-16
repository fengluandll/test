interface IContactModel {
    Name: string;
    EmailAddress: string;
}

export class ContactModel extends Backbone.Model
    implements IContactModel {
    get Name() {
        return this.get('Name');
    }
    set Name(val: string) {
        this.set('Name', val);
    }
    get EmailAddress() {
        return this.get('EmailAddress');
    }
    set EmailAddress(val: string) {
        this.set('EmailAddress', val);
    }
}

