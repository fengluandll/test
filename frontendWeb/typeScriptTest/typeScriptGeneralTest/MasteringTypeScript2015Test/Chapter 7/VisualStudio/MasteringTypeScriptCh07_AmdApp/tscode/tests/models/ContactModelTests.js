define(["require", "exports", "../../app/models/ContactModel"], function (require, exports, cm) {
    describe('/tests/models/ContactModelTests', function () {
        var contactModel;
        beforeEach(function () {
            contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });
        });
        it('should set the Name property', function () {
            expect(contactModel.Name).toBe('testName');
        });
        it('should set the Name attribute', function () {
            expect(contactModel.get('Name')).toBe('testName');
        });
        it('should set the EmailAddress property', function () {
            expect(contactModel.EmailAddress).toBe('testEmailAddress');
        });
        it('should set the Name attribute', function () {
            expect(contactModel.get('EmailAddress')).toBe('testEmailAddress');
        });
    });
});
//# sourceMappingURL=ContactModelTests.js.map