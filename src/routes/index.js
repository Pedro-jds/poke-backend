import { Router } from "express";

import pokemonsRouter from "./pokemons.routers";
import compararPokemonRouter from "./compararPokemons.routes";
import countWinsRouter from "./countWins.routes";

const routes = Router();

routes.use("/pokemons", pokemonsRouter);
routes.use("/comparar", compararPokemonRouter);
routes.use("/vitorias", countWinsRouter);

export default routes;
