define(["require", "exports", "../../app/models/ContactCollection", "../../app/models/ContactModel"], function (require, exports, cc, cm) {
    describe("/tests/models/ContactCollectionTests", function () {
        it("should create a collection", function () {
            var contactCollection = new cc.ContactCollection([
                new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
                new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' })
            ]);
            expect(contactCollection.length).toBe(2);
        });
        describe("model tests", function () {
            var collection;
            beforeEach(function () {
                collection = new cc.ContactCollection([
                    new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
                    new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' }),
                    new cm.ContactModel({ Name: 'testName3', EmailAddress: 'testEmail3' })
                ]);
            });
            it("should have 3 models in the collection", function () {
                expect(collection.length).toBe(3);
            });
            it("should return a valid Backbone model", function () {
                var contactModel = collection.at(0);
                expect(contactModel.get('Name')).toBe('testName1');
            });
            it("should return a valid Backbone model with es5 properties", function () {
                //var contactModel = new cm.ContactModel(collection.at(0));
                var contactModel = collection.at(0);
                expect(contactModel.Name).toBe('testName1');
            });
        });
        describe("contact json tests", function () {
            var collection;
            it("should load collection from url", function () {
                collection = new cc.ContactCollection();
                collection.fetch({ async: false });
                expect(collection.length).toBe(4);
            });
        });
        describe("contact json model tests", function () {
            var collection;
            beforeEach(function () {
                collection = new cc.ContactCollection();
                collection.fetch({ async: false });
            });
            it("ContactModel at 0 should have attribute called Name", function () {
                var contactModel = collection.at(0);
                expect(contactModel.get('Name')).toBe('Mr Test Contact');
            });
            it("ContactModel at 0 should have property called Name", function () {
                var contactModel = collection.at(0);
                expect(contactModel.Name).toBe('Mr Test Contact');
            });
        });
    });
});
//# sourceMappingURL=ContactCollectionTests.js.map