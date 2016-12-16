import cc = require("../../app/models/ContactCollection");
import cm = require("../../app/models/ContactModel");

describe("/tests/models/ContactCollectionTests", () => {
    it("should create a collection", () => {
        var contactCollection = new cc.ContactCollection([
            new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
            new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' })
        ]);
        expect(contactCollection.length).toBe(2);
    });

    describe("model tests", () => {
        var collection: cc.ContactCollection;
        beforeEach(() => {
            collection = new cc.ContactCollection([
                new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
                new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' }),
                new cm.ContactModel({ Name: 'testName3', EmailAddress: 'testEmail3' })
            ]); 
        });

        it("should have 3 models in the collection", () => {
            expect(collection.length).toBe(3);
        });

        it("should return a valid Backbone model", () => {
            var contactModel = collection.at(0);
            expect(contactModel.get('Name')).toBe('testName1');

        });

        it("should return a valid Backbone model with es5 properties", () => {
            //var contactModel = new cm.ContactModel(collection.at(0));
            var contactModel = collection.at(0);
            expect(contactModel.Name).toBe('testName1');
        });
    });

    describe("contact json tests", () => {
        var collection: cc.ContactCollection;
        it("should load collection from url", () => {
            collection = new cc.ContactCollection();
            collection.fetch({ async: false });
            expect(collection.length).toBe(4);
        });
    });

    describe("contact json model tests", () => {
        var collection: cc.ContactCollection;
        beforeEach(() => {
            collection = new cc.ContactCollection();
            collection.fetch({ async: false });
        });
        it("ContactModel at 0 should have attribute called Name", () => {
            var contactModel = collection.at(0);
            expect(contactModel.get('Name')).toBe('Mr Test Contact');
        });
        it("ContactModel at 0 should have property called Name", () => {
            var contactModel : cm.ContactModel = collection.at(0);
            expect(contactModel.Name).toBe('Mr Test Contact');
        });
    });

});

