 describe("/Content/tscode/tests/models/PlayerModelTests", () => {
     it('should load PlayerCollection from url', () => {
         var playerCollection = new PlayerCollection();
         playerCollection.fetch({ async: false });
         expect(playerCollection.length).toBeGreaterThan(0);
     });

     describe("PlayerModel tests", () => {
         var playerModel: PlayerModel;
         beforeEach(() => {
             var playerCollection = new PlayerCollection();
             playerCollection.fetch({ async: false });
             playerModel = playerCollection.at(0);
         });

         it("should find a PlayerModel at 0", () => {
             expect(playerModel).toBeDefined();
         });
         it("should have an Id property", () => {
             expect(playerModel.get('Id')).toBeDefined();
         });
         it("should have an Id of 1", () => {
             expect(playerModel.get('Id')).toBe(1);
         });
         it("should have an Name property set to Player1", () => {
             expect(playerModel.get('Name')).toBe("Player1");
         });

         it("should have a Scores property with more than one array item", () => {
             expect(playerModel.get('Scores').length).toEqual(3);
         });
         xit("should have a Scores array item with RoundNumber and Score", () => {
             expect(playerModel.get('Scores')[0]).toEqual({ RoundNumber: 1, Score: 3 });
         });

         it("should have a Scores property that is a collection", () => {
             var playerRoundScore = playerModel.get('Scores').at(0);

             expect(playerRoundScore).toBeDefined();
         });
     });
 });