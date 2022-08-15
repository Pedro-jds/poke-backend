import { Router } from "express";

import pokemonsRouter from "./pokemons.routes";
import compararPokemonRouter from "./compararPokemons.routes";
import countWinsRouter from "./countWins.routes";

import swaggerUi from 'swagger-ui-express'
import  swaggerFile from '../../swagger-output.json'

const routes = Router();


routes.use("/pokemons", pokemonsRouter);
routes.use("/comparar", compararPokemonRouter);
routes.use("/vitorias", countWinsRouter);
routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


export default routes;
