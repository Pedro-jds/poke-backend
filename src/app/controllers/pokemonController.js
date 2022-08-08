import db from '../../database/database';

class pokemonsController {
    async getPokemons() {
        const pokemons =  await db('pokemons')
        .select('id','name','hp','attack','defense','special_attack','special_defense','speed')  
        return pokemons
    }

    async getPokemon(pokemon_id) {
        const pokemon = await db('pokemons')
        .select('id','name','hp','attack','defense','special_attack','special_defense','speed')
        .where({id:pokemon_id});
        
        return pokemon
    }

    async deletePokemon(pokemon_id) {
       const delPokemon = await db('pokemons')
        .where({id:pokemon_id})
        .delete();

        return delPokemon
    }

    async postPokemon(name,hp,attack,defense,special_attack,special_defense,speed) {
        const pokemon = await db('pokemons')
        .insert({
            name: name,
            hp: hp,
            attack: attack,
            defense: defense,
            special_attack: special_attack,
            special_defense: special_defense,
            speed: speed
        })

        return pokemon
    }

    async putPokemon(pokemon_id,name,hp,attack,defense,special_attack,special_defense,speed) {
        const pokemon = await db('pokemons')
        .update({
            name: name,
            hp: hp,
            attack: attack,
            defense: defense,
            special_attack: special_attack,
            special_defense: special_defense,
            speed: speed
        })
        .where({id:pokemon_id})

        return pokemon
    }

}

export default new pokemonsController();