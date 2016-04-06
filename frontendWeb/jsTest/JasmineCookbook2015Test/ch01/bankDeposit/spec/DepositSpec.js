/**
 * Created by Allbts-IT on 6/04/2016.
 */
'use strict';

describe("Bank Deposit ", function () {
//Scenario 1

    it("should be considered as FD on locking amount for a fixed period", function () {
        var MyDeposit = new Deposit("FIX");
        var DepositType = MyDeposit.BankDeposit();
        expect(DepositType).toBe("FD");
        expect(DepositType).not.toBe("RD");
        expect(DepositType).not.toBe("Any value Other than 'FD' ");
    });

    //Scenario 2
    it("should be considered as RD on depositing amount on regular frequency", function () {
        var MyDeposit = new Deposit("RECURRING");
        var DepositType = MyDeposit.BankDeposit();
        expect(DepositType).toBe("RD");
        expect(DepositType).not.toBe("FD");
        expect(DepositType).not.toBe("Any value Other than 'RD' ");
    });
});