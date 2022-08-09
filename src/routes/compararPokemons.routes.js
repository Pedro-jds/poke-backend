import { Router } from 'express';

import compararPokemonsController from '../app/controllers/compararPokemonController';
import countWinscontroller from '../app/controllers/countWinscontroller';

const compararPokemonsRouter = Router();

compararPokemonsRouter.get('/:id_1/:id_2', async (req,res) => {

    const pokemon_id_1 = req.params.id_1
    const pokemon_id_2 = req.params.id_2

    const pokemon = await compararPokemonsController.getPokemons(pokemon_id_1,pokemon_id_2)
    await countWinscontroller.putWins(pokemon.winner)
    return res.json(pokemon)
})

export default compararPokemonsRouter
