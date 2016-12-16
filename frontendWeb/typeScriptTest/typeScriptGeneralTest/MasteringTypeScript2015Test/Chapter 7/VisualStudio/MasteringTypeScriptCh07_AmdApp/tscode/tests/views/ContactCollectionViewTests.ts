import cc = require("../../app/models/ContactCollection");
import cm = require("../../app/models/ContactModel");
import ccv = require("../../app/views/ContactCollectionView");

describe("/ts/views/ContactCollectionViewTests", () => {
    var contactCollection: cc.ContactCollection;
    beforeAll(() => {
        contactCollection = new cc.ContactCollection([
            new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
            new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' })
        ]);
    });

    it("should create a collection property on the view", () => {
        var contactCollectionView = new ccv.ContactCollectionView({
            collection: contactCollection
        });
        expect(contactCollectionView.collection.length).toBe(2);
    });

    it("should call render on child items", () => {
        var contactCollectionView = new ccv.ContactCollectionView({
            collection: contactCollection
        });
        spyOn(contactCollectionView, 'renderChildItem');
        contactCollectionView.render();

        expect(contactCollectionView.renderChildItem).toHaveBeenCalled();
    });

    it("should generate html from child items", () => {
        var contactCollectionView = new ccv.ContactCollectionView({
            collection: contactCollection
        });
        var renderedHtml = contactCollectionView.render().$el.html();
        expect(renderedHtml).toContain("testName1");
        expect(renderedHtml).toContain("testName2");

    });
});