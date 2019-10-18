"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Contacts App title test', function () {
    it('Title should be correct', function () {
        var appUrl = 'https://testing-angular-applications.github.io/';
        var expectedTitle = 'Contacts App Starter';
        protractor_1.browser.get(appUrl);
        protractor_1.browser.getTitle().then(function (actualTitle) {
            expect(actualTitle).toEqual(expectedTitle);
        });
    });
});
