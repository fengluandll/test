"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listing_1_1_1 = require("./listing.1.1");
describe('Test Cat getters and setters.', function () {
    it('The cat name should be Gracie', function () {
        var cat = new listing_1_1_1.Cat();
        cat.name = 'Gracie';
        expect(cat.name).toEqual('Gracie');
    });
});
