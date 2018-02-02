/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
class Account {
    constructor(id, name, type, balance) {
        this._id = id;     // #A
        this.name = name;
        this.type = type;
        this.balance = balance;
    }

    id() {
        return this._id;
    }

    name() {
        return this.name;
    }

    type() {
        return this.type;
    }

    balance() {
        return this.balance;
    }
}
