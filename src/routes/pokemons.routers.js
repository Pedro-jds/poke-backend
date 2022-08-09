import { Router } from 'express';

import pokemonController from '../app/controllers/pokemonController';

const pokemonsRouter = Router();

pokemonsRouter.get('/', async (req,res) =>{
    const pokemons = await pokemonController.getPokemons()

    return res.json(pokemons)
})

pokemonsRouter.get('/:id', async (req, res)=>{
    const pokemon_id = req.params.id

    const pokemon = await pokemonController.getPokemon(pokemon_id)
    console.log(pokemon)
    return res.json(pokemon)
})

pokemonsRouter.delete('/:id', async (req, res)=>{
    const pokemon_id = req.params.id

    const pokemon = await pokemonController.deletePokemon(pokemon_id)
    return res.json(pokemon)
})

pokemonsRouter.post('/', async (req,res)=>{
    const body = req.body

    const name = body.name
    const hp = body.attributes.hp
    const attack = body.attributes.attack
    const defense = body.attributes.defense
    const special_attack = body.attributes.special_attack
    const special_defense = body.attributes.special_defense
    const speed = body.attributes.speed

    const pokemon = await pokemonController.postPokemon(name,hp,attack,defense,special_attack,special_defense,speed)
    
    return res.status(201).json({message:"pokemon cadastrado",status:201,id:pokemon})
})

pokemonsRouter.put('/:id', async (req,res) => {
    const body = req.body
    const pokemon_id = req.params.id

    const name = body.name
    const hp = body.attributes.hp
    const attack = body.attributes.attack
    const defense = body.attributes.defense
    const special_attack = body.attributes.special_attack
    const special_defense = body.attributes.special_defense
    const speed = body.attributes.speed

    const pokemon = await pokemonController.putPokemon(pokemon_id,name,hp,attack,defense,special_attack,special_defense,speed)
    return res.json(pokemon)
})

export default pokemonsRouter