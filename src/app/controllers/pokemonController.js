import db from '../../database/database';

class pokemonsController {
    async getPokemons() {
        const pokemons =  await db('pokemons')
        .select('id','name','hp','attack','defense','special_attack','special_defense','speed')
        
        return pokemons
    }
}

export default new pokemonsController();