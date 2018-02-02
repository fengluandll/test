/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
class Transaction {
    constructor(name, type, amount, from, to = null) {
        this.name = name;   //#A
        this.type = type;
        this.from = from;
        this.to   = to;
        this.amount = amount;
    }

    name() {
        return this.name;
    }

    from() {
        return this.from;
    }

    to() {
        return this.to;
    }

    amount() {
        return this.amount;
    }

    type() {
        return this.type;
    }
}
