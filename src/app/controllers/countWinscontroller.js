import db from "../../database/database";

class countWinsController {
  async countWins(player_id) {
    await db("counter_wins").increment("wins").where({ id: player_id });
  }

  async getWins() {
    const playerwins = await db("counter_wins").select("*");
    const wins = {
      PlayerOne: playerwins[0].wins,
      playerTwo: playerwins[1].wins,
    };
    return wins;
  }
}

export default new countWinsController();
