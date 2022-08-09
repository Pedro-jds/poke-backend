import db from "../../database/database";

class countWinsController {
    async putWins(player_id) {
        await db('counter_wins')
        .increment('wins')
        .where({id:player_id})
      }

      async getWins() {
        const delPokemon = await db('counter_wins')
         .select("*")
 
         return delPokemon
     }
}

export default new countWinsController();