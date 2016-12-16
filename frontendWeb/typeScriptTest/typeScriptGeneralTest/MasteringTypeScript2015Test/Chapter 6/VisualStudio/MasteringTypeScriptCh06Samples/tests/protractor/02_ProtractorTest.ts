
describe("team city reporter suite", () => {
    it("should find test results", () => {
        browser.driver.get('http://localhost:64227/Jasmine/Run');

        expect(browser.driver.getTitle()).toContain("Jasmine");

        var element = browser.driver.findElement({ id: "teamCityResultsDone" });

        browser.driver.wait(() => {
            return element.getText().then((value) => {
                return value.length > 0;
            });
        }, 60000, "failed to complete in 60 s");

    });

    afterEach(() => {
        browser.driver.findElements(
                by.css("#teamCityReporterLog > div.logentry")
            ).then((elements) => {
            for (var i = 0; i < elements.length; i++) {
                elements[i].getText().then((textValue) => {
                    console.log(textValue);
                });
            }
        });
    });
});