describe("/Content/tscode/tests/models/PlayerModelTests", function () {
    it('should load PlayerCollection from url', function () {
        var playerCollection = new PlayerCollection();
        playerCollection.fetch({ async: false });
        expect(playerCollection.length).toBeGreaterThan(0);
    });
    describe("PlayerModel tests", function () {
        var playerModel;
        beforeEach(function () {
            var playerCollection = new PlayerCollection();
            playerCollection.fetch({ async: false });
            playerModel = playerCollection.at(0);
        });
        it("should find a PlayerModel at 0", function () {
            expect(playerModel).toBeDefined();
        });
        it("should have an Id property", function () {
            expect(playerModel.get('Id')).toBeDefined();
        });
        it("should have an Id of 1", function () {
            expect(playerModel.get('Id')).toBe(1);
        });
        it("should have an Name property set to Player1", function () {
            expect(playerModel.get('Name')).toBe("Player1");
        });
        it("should have a Scores property with more than one array item", function () {
            expect(playerModel.get('Scores').length).toEqual(3);
        });
        xit("should have a Scores array item with RoundNumber and Score", function () {
            expect(playerModel.get('Scores')[0]).toEqual({ RoundNumber: 1, Score: 3 });
        });
        it("should have a Scores property that is a collection", function () {
            var playerRoundScore = playerModel.get('Scores').at(0);
            expect(playerRoundScore).toBeDefined();
        });
    });
});
//# sourceMappingURL=PlayerModelTests.js.map