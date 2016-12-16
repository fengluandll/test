import bm = require('./BoardModels');

export interface IFilterProvider {
    findManufacturerNames(): bm.IManufacturerName[];
    findBoardTypes(): string[]
}

export class IIFilterProvider implements IInterfaceChecker {
    methodNames = ['findManufacturerNames', 'findBoardTypes'];
    className = 'IIFilterProvider';
}

export enum FilterType {
    Manufacturer,
    BoardType,
	None
}

export interface IFilterValue {
	filterValue: string;
}

export interface IFilterModel {
    filterType: FilterType;
	filterName: string;
    filterValues: IFilterValue[];
} 

export class FilterValue extends Backbone.Model implements IFilterValue {
	get filterValue() {
        return this.get('filterValue');
    }
    set filterValue(value: string) {
        this.set('filterValue', value);
    }
}

export class FilterModel extends Backbone.Model implements IFilterModel {
    get filterType() {
        return this.get('filterType');
    }
    set filterType(value: FilterType) {
        this.set('filterType', value);
    }
	get filterName() {
        return this.get('filterName');
    }
    set filterName(value: string) {
        this.set('filterName', value);
    }
    get filterValues() {
        return this.get('filterValues');
    }
    set filterValues(value: IFilterValue[]) {
        this.set('filterValues', value);
    }
}

export class FilterCollection extends Backbone.Collection<FilterModel> {
    model = FilterModel;

    private _filterProvider: IFilterProvider;
    constructor(options?: any) {
        super(options);
        try {
            this._filterProvider = TypeScriptTinyIoC.resolve(IIFilterProvider);
        } catch (err) {
            console.log(err);
        }
    }

    buildFilterCollection() {
        // build Manufacturer filter.
        var manufFilter = new FilterModel({
			filterType: FilterType.Manufacturer,
			filterName: "Manufacturer"
		});
        var manufArray = new Array<FilterValue>();
        if (this._filterProvider) {
            _(this._filterProvider.findManufacturerNames()).each((manuf) => {
                manufArray.push(new FilterValue({ filterValue: manuf.manufacturer }));
            });
            manufFilter.filterValues = manufArray;
        }
        this.push(manufFilter);
        // build Board filter.
        var boardFilter = new FilterModel({
			filterType: FilterType.BoardType,
			filterName: "Board Type"
		});
		var boardTypeArray = new Array<FilterValue>();
        if (this._filterProvider) {
			_(this._filterProvider.findBoardTypes()).each((boardType) => {
				boardTypeArray.push(new FilterValue({ filterValue: boardType }));
			});
            boardFilter.filterValues = boardTypeArray;
        }
        this.push(boardFilter);
        // build All filter to clear filters.
		var noFilter = new FilterModel({
			filterType: FilterType.None,
			filterName: "All"
		});
		var noTypeArray = new Array<FilterValue>();
		noTypeArray.push(new FilterValue({ filterValue: "Show All" }));
		noFilter.filterValues = noTypeArray;
        this.push(noFilter);
    }
}

