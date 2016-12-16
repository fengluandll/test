import cm = require("../../app/models/ContactModel");

describe('/tests/models/ContactModelTests', () => {
    var contactModel: cm.ContactModel;
    beforeEach(() => {
        contactModel = new cm.ContactModel({ Name: 'testName', EmailAddress: 'testEmailAddress' });
    });
    it('should set the Name property', () => {
        expect(contactModel.Name).toBe('testName');
    });
    it('should set the Name attribute', () => {
        expect(contactModel.get('Name')).toBe('testName');
    });
    it('should set the EmailAddress property', () => {
        expect(contactModel.EmailAddress).toBe('testEmailAddress');
    });
    it('should set the Name attribute', () => {
        expect(contactModel.get('EmailAddress')).toBe('testEmailAddress');
    });
});



