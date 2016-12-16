import fm = require('../../app/models/FilterModels');
import bm = require('../../app/models/BoardModels');

class MockFilterProvider implements fm.IFilterProvider {
    findManufacturerNames(): bm.IManufacturerName[] {
        return [ { manufacturer: 'testManuf1',
				   manufacturer_logo: 'testLogo1'}, 
				 { manufacturer: 'testManuf2',
                   manufacturer_logo: 'testLogo2' }
        ];
    }
    findBoardTypes(): string[] {
        return ['boardType1', 'boardType2', 'boardType3'];
    }
}

describe('/tscode/tests/models/FilterModelTests',() => {
    beforeAll(() => {
        var mockFilterProvider = new MockFilterProvider();
        TypeScriptTinyIoC.register(mockFilterProvider, fm.IIFilterProvider);
    });

    it('should construct a FilterModel', () => {
        var filterModel = new fm.FilterModel({ filterType: fm.FilterType.Manufacturer, filterValues: ['man1', 'man2'] });
        expect(filterModel.filterType).toBe(fm.FilterType.Manufacturer);
        expect(filterModel.filterValues.length).toBe(2);
    });


    it('should find FilterModel at(0)', () => {
        var filterCollection = new fm.FilterCollection([
            new fm.FilterModel({ filterType: fm.FilterType.Manufacturer, filterValues : ['man1', 'man2'] }),
            new fm.FilterModel({ filterType: fm.FilterType.BoardType, filterValues: ['board1', 'board2', 'board3'] })
        ]);

        expect(filterCollection.at(0).filterType).toBe(fm.FilterType.Manufacturer);
    });

    it('FilterCollection should load itself', () => {
        var filterCollection = new fm.FilterCollection();
        filterCollection.buildFilterCollection();

        expect(filterCollection.length).toBe(3);
    });

    describe("FilterCollection tests",() => {
        var filterCollection: fm.FilterCollection;
        beforeAll(() => {
            filterCollection = new fm.FilterCollection();
            filterCollection.buildFilterCollection();
        });

        it("should have two manufacturers", () => {
            var manufFilter = filterCollection.at(0);
            expect(manufFilter.filterType).toBe(fm.FilterType.Manufacturer);
            expect(manufFilter.filterValues[0].filterValue).toContain('testManuf1');
            expect(manufFilter.filterValues[1].filterValue).toContain('testManuf2');
            expect(manufFilter.filterValues.length).toBe(2);
        });

        it("should have two board types",() => {
            var manufFilter = filterCollection.at(1);
            expect(manufFilter.filterType).toBe(fm.FilterType.BoardType);
            expect(manufFilter.filterValues[0].filterValue).toContain('boardType1');
            expect(manufFilter.filterValues[1].filterValue).toContain('boardType2');
            expect(manufFilter.filterValues.length).toBe(3);
        });
    });

    describe("FilterCollection error testing",() => {
        
        beforeAll(() => {
            TypeScriptTinyIoC.unregister(fm.IIFilterProvider);
        });

        it("should handle no provider registered ",() => {
            var filterCollection = new fm.FilterCollection();
            filterCollection.buildFilterCollection();
        });

        
    });
});