var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var IIFilterProvider = (function () {
        function IIFilterProvider() {
            this.methodNames = ['findManufacturerNames', 'findBoardTypes'];
            this.className = 'IIFilterProvider';
        }
        return IIFilterProvider;
    })();
    exports.IIFilterProvider = IIFilterProvider;
    (function (FilterType) {
        FilterType[FilterType["Manufacturer"] = 0] = "Manufacturer";
        FilterType[FilterType["BoardType"] = 1] = "BoardType";
        FilterType[FilterType["None"] = 2] = "None";
    })(exports.FilterType || (exports.FilterType = {}));
    var FilterType = exports.FilterType;
    var FilterValue = (function (_super) {
        __extends(FilterValue, _super);
        function FilterValue() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(FilterValue.prototype, "filterValue", {
            get: function () {
                return this.get('filterValue');
            },
            set: function (value) {
                this.set('filterValue', value);
            },
            enumerable: true,
            configurable: true
        });
        return FilterValue;
    })(Backbone.Model);
    exports.FilterValue = FilterValue;
    var FilterModel = (function (_super) {
        __extends(FilterModel, _super);
        function FilterModel() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(FilterModel.prototype, "filterType", {
            get: function () {
                return this.get('filterType');
            },
            set: function (value) {
                this.set('filterType', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilterModel.prototype, "filterName", {
            get: function () {
                return this.get('filterName');
            },
            set: function (value) {
                this.set('filterName', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilterModel.prototype, "filterValues", {
            get: function () {
                return this.get('filterValues');
            },
            set: function (value) {
                this.set('filterValues', value);
            },
            enumerable: true,
            configurable: true
        });
        return FilterModel;
    })(Backbone.Model);
    exports.FilterModel = FilterModel;
    var FilterCollection = (function (_super) {
        __extends(FilterCollection, _super);
        function FilterCollection(options) {
            _super.call(this, options);
            this.model = FilterModel;
            try {
                this._filterProvider = TypeScriptTinyIoC.resolve(IIFilterProvider);
            }
            catch (err) {
                console.log(err);
            }
        }
        FilterCollection.prototype.buildFilterCollection = function () {
            // build Manufacturer filter.
            var manufFilter = new FilterModel({
                filterType: 0 /* Manufacturer */,
                filterName: "Manufacturer"
            });
            var manufArray = new Array();
            if (this._filterProvider) {
                _(this._filterProvider.findManufacturerNames()).each(function (manuf) {
                    manufArray.push(new FilterValue({ filterValue: manuf.manufacturer }));
                });
                manufFilter.filterValues = manufArray;
            }
            this.push(manufFilter);
            // build Board filter.
            var boardFilter = new FilterModel({
                filterType: 1 /* BoardType */,
                filterName: "Board Type"
            });
            var boardTypeArray = new Array();
            if (this._filterProvider) {
                _(this._filterProvider.findBoardTypes()).each(function (boardType) {
                    boardTypeArray.push(new FilterValue({ filterValue: boardType }));
                });
                boardFilter.filterValues = boardTypeArray;
            }
            this.push(boardFilter);
            // build All filter to clear filters.
            var noFilter = new FilterModel({
                filterType: 2 /* None */,
                filterName: "All"
            });
            var noTypeArray = new Array();
            noTypeArray.push(new FilterValue({ filterValue: "Show All" }));
            noFilter.filterValues = noTypeArray;
            this.push(noFilter);
        };
        return FilterCollection;
    })(Backbone.Collection);
    exports.FilterCollection = FilterCollection;
});
//# sourceMappingURL=FilterModels.js.map