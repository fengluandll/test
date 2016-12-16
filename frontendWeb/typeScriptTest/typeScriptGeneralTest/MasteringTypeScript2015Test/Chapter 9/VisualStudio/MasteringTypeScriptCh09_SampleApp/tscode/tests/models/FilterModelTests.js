define(["require", "exports", '../../app/models/FilterModels'], function (require, exports, fm) {
    var MockFilterProvider = (function () {
        function MockFilterProvider() {
        }
        MockFilterProvider.prototype.findManufacturerNames = function () {
            return [{ manufacturer: 'testManuf1', manufacturer_logo: 'testLogo1' }, { manufacturer: 'testManuf2', manufacturer_logo: 'testLogo2' }];
        };
        MockFilterProvider.prototype.findBoardTypes = function () {
            return ['boardType1', 'boardType2', 'boardType3'];
        };
        return MockFilterProvider;
    })();
    describe('/tscode/tests/models/FilterModelTests', function () {
        beforeAll(function () {
            var mockFilterProvider = new MockFilterProvider();
            TypeScriptTinyIoC.register(mockFilterProvider, fm.IIFilterProvider);
        });
        it('should construct a FilterModel', function () {
            var filterModel = new fm.FilterModel({ filterType: 0 /* Manufacturer */, filterValues: ['man1', 'man2'] });
            expect(filterModel.filterType).toBe(0 /* Manufacturer */);
            expect(filterModel.filterValues.length).toBe(2);
        });
        it('should find FilterModel at(0)', function () {
            var filterCollection = new fm.FilterCollection([
                new fm.FilterModel({ filterType: 0 /* Manufacturer */, filterValues: ['man1', 'man2'] }),
                new fm.FilterModel({ filterType: 1 /* BoardType */, filterValues: ['board1', 'board2', 'board3'] })
            ]);
            expect(filterCollection.at(0).filterType).toBe(0 /* Manufacturer */);
        });
        it('FilterCollection should load itself', function () {
            var filterCollection = new fm.FilterCollection();
            filterCollection.buildFilterCollection();
            expect(filterCollection.length).toBe(3);
        });
        describe("FilterCollection tests", function () {
            var filterCollection;
            beforeAll(function () {
                filterCollection = new fm.FilterCollection();
                filterCollection.buildFilterCollection();
            });
            it("should have two manufacturers", function () {
                var manufFilter = filterCollection.at(0);
                expect(manufFilter.filterType).toBe(0 /* Manufacturer */);
                expect(manufFilter.filterValues[0].filterValue).toContain('testManuf1');
                expect(manufFilter.filterValues[1].filterValue).toContain('testManuf2');
                expect(manufFilter.filterValues.length).toBe(2);
            });
            it("should have two board types", function () {
                var manufFilter = filterCollection.at(1);
                expect(manufFilter.filterType).toBe(1 /* BoardType */);
                expect(manufFilter.filterValues[0].filterValue).toContain('boardType1');
                expect(manufFilter.filterValues[1].filterValue).toContain('boardType2');
                expect(manufFilter.filterValues.length).toBe(3);
            });
        });
        describe("FilterCollection error testing", function () {
            beforeAll(function () {
                TypeScriptTinyIoC.unregister(fm.IIFilterProvider);
            });
            it("should handle no provider registered ", function () {
                var filterCollection = new fm.FilterCollection();
                filterCollection.buildFilterCollection();
            });
        });
    });
});
//# sourceMappingURL=FilterModelTests.js.map