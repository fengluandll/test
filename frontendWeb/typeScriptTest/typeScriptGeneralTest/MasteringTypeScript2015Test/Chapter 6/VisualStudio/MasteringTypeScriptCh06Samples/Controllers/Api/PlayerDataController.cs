using System;
using System.Collections.Generic;
using System.Linq;
using System.Management.Instrumentation;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.WebPages;
using MasteringTypeScriptCh06Samples.Models;

namespace MasteringTypeScriptCh06Samples.Controllers.Api
{
    public class PlayerDataController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, BuildPlayerScores());
                
        }

        public List<PlayerModel> BuildPlayerScores()
        {
            List<PlayerModel> playerModels = new List<PlayerModel>();
            PlayerModel player1 = new PlayerModel {Id = 1, Name = "Player1"};
            player1.Scores.Add(new PlayerRoundScore { RoundNumber = 1, Score = 3 });
            player1.Scores.Add(new PlayerRoundScore { RoundNumber = 2, Score = 0 });
            player1.Scores.Add(new PlayerRoundScore { RoundNumber = 3, Score = 2 });

            playerModels.Add(player1);

            PlayerModel player2 = new PlayerModel { Id = 2, Name = "Player2" };
            player2.Scores.Add(new PlayerRoundScore { RoundNumber = 1, Score = 0 });
            player2.Scores.Add(new PlayerRoundScore { RoundNumber = 2, Score = 3 });
            player2.Scores.Add(new PlayerRoundScore { RoundNumber = 3, Score = 3 });

            playerModels.Add(player2);

            PlayerModel player3 = new PlayerModel { Id = 3, Name = "Player3" };
            player3.Scores.Add(new PlayerRoundScore { RoundNumber = 1, Score = 3 });
            player3.Scores.Add(new PlayerRoundScore { RoundNumber = 2, Score = 1 });
            player3.Scores.Add(new PlayerRoundScore { RoundNumber = 3, Score = 2 });

            playerModels.Add(player3);

            return playerModels;
        }
    }
}
