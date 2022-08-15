import { Router } from "express";

import pokemonController, {
  pokemonValidation,
} from "../app/controllers/pokemonController";

const pokemonsRouter = Router();

pokemonsRouter.get("/", async (req, res) => {
  const filter = req.query.filter;
  const page = req.query.page;
  const pokemons = await pokemonController.getPokemonsList(page, filter);

  return res.json(pokemons);
});

pokemonsRouter.get("/:id", async (req, res) => {
  const pokemon_id = req.params.id;

  const pokemon = await pokemonController.getPokemon(pokemon_id);
  return res.json(pokemon);
});

pokemonsRouter.delete("/:id", async (req, res) => {
  const pokemon_id = req.params.id;

  const pokemon = await pokemonController.deletePokemon(pokemon_id);
  return res.json(pokemon);
});

pokemonsRouter.post("/", pokemonValidation, async (req, res) => {
  const body = req.body;

  const pokemon = await pokemonController.postPokemon(body);
  return res.status(201).json(pokemon);
});

pokemonsRouter.put("/:id", pokemonValidation, async (req, res) => {
  const body = req.body;
  const pokemon_id = req.params.id;

  const pokemon = await pokemonController.putPokemon(pokemon_id, body);
  return res.json(pokemon);
});

export default pokemonsRouter;
