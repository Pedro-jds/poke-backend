import { Router } from "express";

import countWinscontroller from "../app/controllers/countWinscontroller";
import compararPokemonsController, {
  cardValidation,
} from "../app/controllers/compararPokemonController";

const compararPokemonsRouter = Router();

compararPokemonsRouter.post("/", cardValidation, async (req, res) => {
  const pokemonIds = req.body;
  const pokemon = await compararPokemonsController.postComparar(pokemonIds);
  if (pokemon.winner) {
    await countWinscontroller.countWins(pokemon.winner);
  }
  return res.status(201).json(pokemon);
});

export default compararPokemonsRouter;
