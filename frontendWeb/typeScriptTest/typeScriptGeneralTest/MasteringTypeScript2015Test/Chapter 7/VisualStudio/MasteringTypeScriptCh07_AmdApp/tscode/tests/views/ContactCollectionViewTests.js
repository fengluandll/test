define(["require", "exports", "../../app/models/ContactCollection", "../../app/models/ContactModel", "../../app/views/ContactCollectionView"], function (require, exports, cc, cm, ccv) {
    describe("/ts/views/ContactCollectionViewTests", function () {
        var contactCollection;
        beforeAll(function () {
            contactCollection = new cc.ContactCollection([
                new cm.ContactModel({ Name: 'testName1', EmailAddress: 'testEmail1' }),
                new cm.ContactModel({ Name: 'testName2', EmailAddress: 'testEmail2' })
            ]);
        });
        it("should create a collection property on the view", function () {
            var contactCollectionView = new ccv.ContactCollectionView({
                collection: contactCollection
            });
            expect(contactCollectionView.collection.length).toBe(2);
        });
        it("should call render on child items", function () {
            var contactCollectionView = new ccv.ContactCollectionView({
                collection: contactCollection
            });
            spyOn(contactCollectionView, 'renderChildItem');
            contactCollectionView.render();
            expect(contactCollectionView.renderChildItem).toHaveBeenCalled();
        });
        it("should generate html from child items", function () {
            var contactCollectionView = new ccv.ContactCollectionView({
                collection: contactCollection
            });
            var renderedHtml = contactCollectionView.render().$el.html();
            expect(renderedHtml).toContain("testName1");
            expect(renderedHtml).toContain("testName2");
        });
    });
});
//# sourceMappingURL=ContactCollectionViewTests.js.map