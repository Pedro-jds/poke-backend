import app from './app';

const port = process.env.PORT || 3333

app.listen(port, console.log(`app listening at http://localhost:3333/pokemons`));