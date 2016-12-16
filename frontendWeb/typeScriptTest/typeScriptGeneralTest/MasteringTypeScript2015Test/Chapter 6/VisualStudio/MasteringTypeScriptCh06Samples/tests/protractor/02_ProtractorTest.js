describe("team city reporter suite", function () {
    it("should find test results", function () {
        browser.driver.get('http://localhost:64227/Jasmine/Run');
        expect(browser.driver.getTitle()).toContain("Jasmine");
        var element = browser.driver.findElement({ id: "teamCityResultsDone" });
        browser.driver.wait(function () {
            return element.getText().then(function (value) {
                return value.length > 0;
            });
        }, 60000, "failed to complete in 60 s");
    });
    afterEach(function () {
        browser.driver.findElements(by.css("#teamCityReporterLog > div.logentry")).then(function (elements) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].getText().then(function (textValue) {
                    console.log(textValue);
                });
            }
        });
    });
});
//# sourceMappingURL=02_ProtractorTest.js.map