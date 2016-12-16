var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var ManufacturerModel = (function (_super) {
        __extends(ManufacturerModel, _super);
        function ManufacturerModel() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ManufacturerModel.prototype, "manufacturer", {
            get: function () {
                return this.get('manufacturer');
            },
            set: function (val) {
                this.set('manufacturer', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ManufacturerModel.prototype, "manufacturer_logo", {
            get: function () {
                return this.get('manufacturer_logo');
            },
            set: function (val) {
                this.set('EmailAddress', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ManufacturerModel.prototype, "logo_class", {
            get: function () {
                return this.get('logo_class');
            },
            set: function (val) {
                this.set('logo_class', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ManufacturerModel.prototype, "boards", {
            get: function () {
                return this.get('boards');
            },
            set: function (val) {
                this.set('boards', val);
            },
            enumerable: true,
            configurable: true
        });
        return ManufacturerModel;
    })(Backbone.Model);
    exports.ManufacturerModel = ManufacturerModel;
    var BoardModel = (function (_super) {
        __extends(BoardModel, _super);
        function BoardModel() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(BoardModel.prototype, "name", {
            get: function () {
                return this.get('name');
            },
            set: function (val) {
                this.set('name', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardModel.prototype, "board_types", {
            get: function () {
                return this.get('board_types');
            },
            set: function (val) {
                this.set('board_types', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardModel.prototype, "description", {
            get: function () {
                return this.get('description');
            },
            set: function (val) {
                this.set('description', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardModel.prototype, "image", {
            get: function () {
                return this.get('image');
            },
            set: function (val) {
                this.set('image', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardModel.prototype, "long_description", {
            get: function () {
                return this.get('long_description');
            },
            set: function (val) {
                this.set('long_description', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardModel.prototype, "sizes", {
            get: function () {
                return this.get('sizes');
            },
            set: function (val) {
                this.set('sizes', val);
            },
            enumerable: true,
            configurable: true
        });
        return BoardModel;
    })(Backbone.Model);
    exports.BoardModel = BoardModel;
    var BoardType = (function (_super) {
        __extends(BoardType, _super);
        function BoardType() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(BoardType.prototype, "board_type", {
            get: function () {
                return this.get('board_type');
            },
            set: function (val) {
                this.set('board_type', val);
            },
            enumerable: true,
            configurable: true
        });
        return BoardType;
    })(Backbone.Model);
    exports.BoardType = BoardType;
    var BoardSize = (function (_super) {
        __extends(BoardSize, _super);
        function BoardSize() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(BoardSize.prototype, "volume", {
            get: function () {
                return this.get('volume');
            },
            set: function (val) {
                this.set('volume', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardSize.prototype, "length", {
            get: function () {
                return this.get('length');
            },
            set: function (val) {
                this.set('length', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardSize.prototype, "width", {
            get: function () {
                return this.get('width');
            },
            set: function (val) {
                this.set('width', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardSize.prototype, "sail_min", {
            get: function () {
                return this.get('sail_min');
            },
            set: function (val) {
                this.set('sail_min', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoardSize.prototype, "sail_max", {
            get: function () {
                return this.get('sail_max');
            },
            set: function (val) {
                this.set('sail_max', val);
            },
            enumerable: true,
            configurable: true
        });
        return BoardSize;
    })(Backbone.Model);
    exports.BoardSize = BoardSize;
    var IIManufacturerCollection = (function () {
        function IIManufacturerCollection() {
            this.propertyNames = ['models'];
            this.className = 'IIManufacturerCollection';
        }
        return IIManufacturerCollection;
    })();
    exports.IIManufacturerCollection = IIManufacturerCollection;
    var ManufacturerCollection = (function (_super) {
        __extends(ManufacturerCollection, _super);
        function ManufacturerCollection(options) {
            _super.call(this, options);
            this.model = ManufacturerModel;
            this.url = "/tscode/boards.json";
            _.bindAll(this, 'findManufacturerNames');
            _.bindAll(this, 'findBoardTypes');
            _.bindAll(this, 'filterByBoardType');
            _.bindAll(this, 'filterByManufacturer');
        }
        ManufacturerCollection.prototype.findManufacturerNames = function () {
            var items = _(this.models).map(function (iterator) {
                return {
                    'manufacturer': iterator.manufacturer,
                    'manufacturer_logo': iterator.manufacturer_logo
                };
            });
            return items;
        };
        ManufacturerCollection.prototype.findBoardTypes = function () {
            var boardTypes = new Array();
            _(this.models).each(function (manufacturer) {
                _(manufacturer.boards).each(function (board) {
                    _(board.board_types).each(function (boardType) {
                        if (!_.contains(boardTypes, boardType.board_type)) {
                            boardTypes.push(boardType.board_type);
                        }
                    });
                });
            });
            return boardTypes;
        };
        ManufacturerCollection.prototype.filterByManufacturer = function (manufacturer_name) {
            return _(this.models).filter(function (item) {
                return item.manufacturer === manufacturer_name;
            });
        };
        ManufacturerCollection.prototype.filterByBoardType = function (board_type) {
            var manufWithBoard = new Array();
            _(this.models).each(function (manuf) {
                var hasBoardtype = false;
                var boardMatches = new Array();
                _(manuf.boards).each(function (board) {
                    var match = _(board.board_types).some(function (item) {
                        return item.board_type == board_type;
                    });
                    if (match) {
                        boardMatches.push(new BoardModel(board));
                        hasBoardtype = true;
                    }
                });
                if (hasBoardtype) {
                    var manufFiltered = new ManufacturerModel(manuf);
                    manufFiltered.set('boards', boardMatches);
                    manufWithBoard.push(manufFiltered);
                }
            });
            return manufWithBoard;
        };
        return ManufacturerCollection;
    })(Backbone.Collection);
    exports.ManufacturerCollection = ManufacturerCollection;
});
//# sourceMappingURL=BoardModels.js.map