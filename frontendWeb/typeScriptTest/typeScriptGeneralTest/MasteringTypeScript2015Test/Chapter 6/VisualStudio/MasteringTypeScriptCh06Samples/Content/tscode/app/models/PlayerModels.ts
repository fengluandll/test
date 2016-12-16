
interface IPlayerModel {
    Id: number;
    Name: string;
    Scores: IPlayerRoundScore [];
}

class PlayerModel extends Backbone.Model {
    constructor(options?: IPlayerModel) {
        super(options);
        this.set('Scores', new PlayerRoundScoreCollection(options.Scores));
    }
}

class PlayerCollection extends Backbone.Collection<PlayerModel> {
    model = PlayerModel;
    url = "/api/PlayerData";
    constructor(options?: PlayerModel []) {
        super(options);
    }
}

interface IPlayerRoundScore {
    RoundNumber: number;
    Score: number;
}

class PlayerRoundScore extends Backbone.Model {
    constructor(options?: IPlayerRoundScore) {
        super(options);
    }
}

class PlayerRoundScoreCollection extends Backbone.Collection<PlayerRoundScore> {
    model = PlayerRoundScore;
    constructor(options?: IPlayerRoundScore[])
    constructor(options?: PlayerRoundScore[])
    constructor(options?: any) {
        super(options);
    }
}