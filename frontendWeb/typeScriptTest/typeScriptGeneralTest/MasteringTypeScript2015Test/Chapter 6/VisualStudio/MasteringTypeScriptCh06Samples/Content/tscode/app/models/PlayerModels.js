var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PlayerModel = (function (_super) {
    __extends(PlayerModel, _super);
    function PlayerModel(options) {
        _super.call(this, options);
        this.set('Scores', new PlayerRoundScoreCollection(options.Scores));
    }
    return PlayerModel;
})(Backbone.Model);
var PlayerCollection = (function (_super) {
    __extends(PlayerCollection, _super);
    function PlayerCollection(options) {
        _super.call(this, options);
        this.model = PlayerModel;
        this.url = "/api/PlayerData";
    }
    return PlayerCollection;
})(Backbone.Collection);
var PlayerRoundScore = (function (_super) {
    __extends(PlayerRoundScore, _super);
    function PlayerRoundScore(options) {
        _super.call(this, options);
    }
    return PlayerRoundScore;
})(Backbone.Model);
var PlayerRoundScoreCollection = (function (_super) {
    __extends(PlayerRoundScoreCollection, _super);
    function PlayerRoundScoreCollection(options) {
        _super.call(this, options);
        this.model = PlayerRoundScore;
    }
    return PlayerRoundScoreCollection;
})(Backbone.Collection);
//# sourceMappingURL=PlayerModels.js.map