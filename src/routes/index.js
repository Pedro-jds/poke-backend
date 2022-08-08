
import { Router } from 'express';


import pokemonsRouter from './pokemons.routers';

const routes = Router();

routes.use('/pokemons', pokemonsRouter)

export default routes