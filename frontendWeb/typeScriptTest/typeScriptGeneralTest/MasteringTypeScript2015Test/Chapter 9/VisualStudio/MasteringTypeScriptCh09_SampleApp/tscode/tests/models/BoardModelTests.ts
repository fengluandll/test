import bm = require('../../app/models/BoardModels');

describe("/tscode/tests/models/BoardModelTests",() => {
     it("should build a BoardType", () => {
         var boardType = new bm.BoardType({ board_type: "testBoardType" });
         expect(boardType.board_type).toBe("testBoardType");
     });

     describe("BoardSize tests", () => {
         var boardSize: bm.IBoardSize;
         beforeAll(() => {
             boardSize = new bm.BoardSize({ "volume": 74, "length": 227, 
                 "width": 55, "sail_min": "4.0", "sail_max": "5.2" });
         });

         it("should build a board size object",() => {
             expect(boardSize.volume).toBe(74);
         });
     });

     describe("BoardModel tests",() => {
         var board: bm.IBoardModel;
         beforeAll(() => {
             board = new bm.BoardModel({
                 "name": "Thruster Quad",
                 "board_types": [{ "board_type": "Wave" }],
                 "description": "Allround Wave Board",
                 "image": "windsurf_thrusterquad_ov.png",
                 "long_description": "Shaper Werner Gnigler and pro riders Robby Swift",
                 "sizes": [
                     { "volume": 73, "length": 228, "width": 55.5,
                          "sail_min": "4.0", "sail_max": "5.2" },
                     { "volume": 83, "length": 230, "width": 57.5,
                          "sail_min": "4.5", "sail_max": "5.6" },
                     { "volume": 93, "length": 232, "width": 60,
                          "sail_min": "5.0", "sail_max": "6.0" }
                 ]
             });
         });

         it("should find name property",() => {
             expect(board.name).toBe("Thruster Quad");
         });

         it("should find description property",() => {
             expect(board.description).toBe("Allround Wave Board");
         });

         it("should find sizes property",() => {
             expect(board.sizes.length).toBe(3);
         });

         it("should find sizes[0].volume property",() => {
             expect(board.sizes[0].volume).toBe(73);
         });

         it("should find sizes[0].sail_max property",() => {
             expect(board.sizes[0].sail_max).toBe("5.2");
         });
         it("should find board_types[0].sail_max property",() => {
             expect(board.board_types[0].board_type).toBe("Wave");
         });
     });

     describe("ManufacturerModel tests", () => {
         var manufacturer: bm.IManufacturerModel;

         beforeAll(() => {
             manufacturer = new bm.ManufacturerModel(
                 {
                 "manufacturer": "JP Australia",
                 "manufacturer_logo": "jp_australia_logo.png",
                 "logo_class": "",
                 "boards": [
                 {
                     "name": "Radical Quad",
                     "board_types": [{ "board_type": "Wave" }],

                     "description": "Radical Wave Board",
                     "image": "windsurf_radicalquad_ov.png",
                     "long_description": "There is no question that Twinsers and Quads",
                     "sizes": [
                         { "volume": 68, "length": 227, "width": 53, 
                             "sail_min": "< 5.0", "sail_max": "< 5.2" }
                     ]
                 },
                 {
                     "name": "Thruster Quad",
                     "board_types": [{ "board_type": "Wave" }],
                     "description": "Allround Wave Board",
                     "image": "windsurf_thrusterquad_ov.png",
                     "long_description": "Shaper Werner Gnigler and pro riders Robby Swift",
                     "sizes": [
                         { "volume": 73, "length": 228, "width": 55.5, 
                             "sail_min": "4.0", "sail_max": "5.2" }
                     ]
                 }]
             });
         });

         it("should find manufacturer property", () => {
             expect(manufacturer.manufacturer).toBe("JP Australia");
         });

         it("should find manufacturer_logo property",() => {
             expect(manufacturer.manufacturer_logo).toBe("jp_australia_logo.png");
         });

         it("should find boards property",() => {
             expect(manufacturer.boards.length).toBe(2);
         });

         it("should find boards[0].name property",() => {
             expect(manufacturer.boards[1].name).toBe("Thruster Quad");
         });
     });

     describe("ManufacturerCollection tests", () => {
         var manufacturers: bm.ManufacturerCollection;

         beforeAll(() => {
             manufacturers = new bm.ManufacturerCollection();
             manufacturers.fetch({ async: false });
         });

         it("should load 3 manufacturers", () => {
             expect(manufacturers.length).toBe(3);
         });

         it("should find manufacturers.at(2)",() => {
             expect(manufacturers.at(2).manufacturer).toBe("Starboard");
         });

         it("should return manufacturer names ",() => {
             var results: bm.IManufacturerName[] = manufacturers.findManufacturerNames();
             expect(results.length).toBe(3);
             expect(results[0].manufacturer).toBe("JP Australia");
         });

         it("should find board types ",() => {
             var results: string[] = manufacturers.findBoardTypes();
             expect(results.length).toBe(3);
             expect(results).toContain("Wave");
             expect(results).toContain("Freestyle");
             expect(results).toContain("Slalom");
         });

         it("should filter by manufacturer name ",() => {
             var results = manufacturers.filterByManufacturer("RRD");
             expect(results.length).toBe(1);
         });

         it("should return manufacturers filtered by board type name ",() => {
             var results = manufacturers.filterByBoardType("Slalom");
             expect(results.length).toBe(2);
         });

         it("should only return Slalom boards ",() => {
             var results = manufacturers.filterByBoardType("Slalom");
             expect(results.length).toBe(2);
             _(results).each((manufacturer) => {
                 _(manufacturer.boards).each((board) => {
                     expect(_(board.board_types).some((boardType) => {
                         return boardType.board_type == 'Slalom';
                     })).toBeTruthy(); 

                 });
             });
         });

		 it("should return manufacturers filtered by board type name ",() => {
             var results = manufacturers.filterByBoardType("Wave");
             expect(results.length).toBe(3);
         });

         it("should only return Slalom boards ",() => {
             var results = manufacturers.filterByBoardType("Slalom");
             _(results).each((manufacturer) => {
                 _(manufacturer.boards).each((board) => {
                     expect(_(board.board_types).some((boardType) => {
                         return boardType.board_type == 'Slalom';
                     })).toBeTruthy();

                 });
             });
         });

     });


 });

