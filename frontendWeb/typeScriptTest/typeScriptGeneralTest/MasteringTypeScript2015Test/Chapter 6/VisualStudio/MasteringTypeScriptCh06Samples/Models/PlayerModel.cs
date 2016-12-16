using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasteringTypeScriptCh06Samples.Models
{
    public class PlayerModel
    {
        public int Id;
        public string Name;
        public List<PlayerRoundScore> Scores;

        public PlayerModel()
        {
            Scores = new List<PlayerRoundScore>();
        }
    }

}