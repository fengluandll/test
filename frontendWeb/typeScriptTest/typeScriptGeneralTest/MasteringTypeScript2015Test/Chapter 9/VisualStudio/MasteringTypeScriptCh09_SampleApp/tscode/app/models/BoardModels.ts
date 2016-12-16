import fm = require('./FilterModels');
import bae = require('../events/BoardAppEvents');

export interface IBoardType {
    board_type: string;
}
export interface IBoardSize {
    volume: number;
    length: number;
    width: number;
    sail_min: string;
    sail_max: string;
}

export interface IBoardModel {
    name: string;
    board_types: IBoardType[];
    description: string;
    image: string;
    long_description: string;
    sizes: IBoardSize[];
}

export interface IManufacturerModel {
    manufacturer: string;
    manufacturer_logo: string;
    logo_class: string;
    boards: IBoardModel[];
}

export class ManufacturerModel extends Backbone.Model implements IManufacturerModel {
    get manufacturer() { return this.get('manufacturer'); }
    set manufacturer(val: string) { this.set('manufacturer', val); }
    get manufacturer_logo() { return this.get('manufacturer_logo'); }
    set manufacturer_logo(val: string) { this.set('EmailAddress', val); }
    get logo_class() { return this.get('logo_class'); }
    set logo_class(val: string) { this.set('logo_class', val); }
    get boards() { return this.get('boards'); }
    set boards(val: IBoardModel[]) { this.set('boards', val); }
}

export class BoardModel extends Backbone.Model implements IBoardModel {
    get name() { return this.get('name'); }
    set name(val: string) { this.set('name', val); }
    get board_types() { return this.get('board_types'); }
    set board_types(val: IBoardType[]) { this.set('board_types', val); }
    get description() { return this.get('description'); }
    set description(val: string) { this.set('description', val); }
    get image() { return this.get('image'); }
    set image(val: string) { this.set('image', val); }
    get long_description() { return this.get('long_description'); }
    set long_description(val: string) { this.set('long_description', val); }
    get sizes() { return this.get('sizes'); }
    set sizes(val: IBoardSize[]) { this.set('sizes', val); }
}

export class BoardType extends Backbone.Model 
    implements IBoardType {
    get board_type() { return this.get('board_type'); }
    set board_type(val: string) { this.set('board_type', val); }
}

export class BoardSize extends Backbone.Model 
    implements IBoardSize {
    get volume() { return this.get('volume');}
    set volume(val: number) { this.set('volume', val); }
    get length() { return this.get('length'); }
    set length(val: number) { this.set('length', val); }
    get width() { return this.get('width'); }
    set width(val: number) { this.set('width', val); }
    get sail_min() { return this.get('sail_min'); }
    set sail_min(val: string) { this.set('sail_min', val); }
    get sail_max() { return this.get('sail_max'); }
    set sail_max(val: string) { this.set('sail_max', val); }
}

export interface IManufacturerName {
    manufacturer: string;
    manufacturer_logo: string;
}

//interface IBoardTypeName {
//    board_type: string;
//}

export interface IManufacturerCollection {
	models: ManufacturerModel[];
}

export class IIManufacturerCollection implements IInterfaceChecker {
	propertyNames = ['models'];
    className = 'IIManufacturerCollection';
}

export class ManufacturerCollection extends Backbone.Collection<ManufacturerModel>
    implements IManufacturerCollection, fm.IFilterProvider
{
	models: ManufacturerModel[];
    model = ManufacturerModel;
    url = "/tscode/boards.json";
    constructor(options?: any) {
        super(options);
        _.bindAll(this, 'findManufacturerNames');
        _.bindAll(this, 'findBoardTypes');
		_.bindAll(this, 'filterByBoardType');
		_.bindAll(this, 'filterByManufacturer');
		
    }

    public findManufacturerNames(): IManufacturerName[] {
        var items = _(this.models).map((iterator) => {
            return {
                'manufacturer': iterator.manufacturer,
                'manufacturer_logo': iterator.manufacturer_logo
            };
        });
        return items;
    }

    public findBoardTypes(): string[] {
        var boardTypes = new Array<string>();
        _(this.models).each((manufacturer) => {
            _(manufacturer.boards).each((board) => {
                _(board.board_types).each((boardType) => {
                    if (! _.contains(boardTypes, boardType.board_type)) {
                        boardTypes.push(boardType.board_type);
                    }
                });
            });
        });
        return boardTypes;
    }

    public filterByManufacturer(manufacturer_name: string) {
        return _(this.models).filter((item) => {
            return item.manufacturer === manufacturer_name;
        });
    }

    public filterByBoardType(board_type: string) {
		var manufWithBoard = new Array();
		_(this.models).each((manuf) => { 
			var hasBoardtype = false;
			var boardMatches = new Array();
			_(manuf.boards).each((board) => {
				var match = _(board.board_types).some((item) => {
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
    }

}

//export class ManufacturerCollection 
//    extends Backbone.Collection<ManufacturerModel>
//{
//    model = ManufacturerModel;
//    url = "/tscode/boards.json";
//}