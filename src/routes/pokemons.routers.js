import { Router } from 'express';

import pokemonController from '../app/controllers/pokemonController';

const pokemonsrouter = Router();

pokemonsrouter.get('/', async (req,res) =>{
    const pokemons = await pokemonController.getPokemons()

    return res.json(pokemons)
})

export default pokemonsrouter