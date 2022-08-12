import db from "../../database/database";

class pokemonsController {
  async getPokemons() {
    const pokemons = await db("pokemons").select("*");
    console.log(pokemons);
    const pokemonList = pokemons.map((pkm) => {
      const formatPkmList = {
        name: pkm.name,
        attributes: {
          hp: pkm.hp,
          attack: pkm.attack,
          defense: pkm.defense,
          special_attack: pkm.special_attack,
          special_defense: pkm.special_defense,
          speed: pkm.speed,
        },
      };
      return formatPkmList;
    });

    return pokemonList;
  }

  async getPokemonsList(page, filter) {
    const pokemons = await db("pokemons")
      .andWhereILike("name", `%${filter}%`)
      .paginate({
        perPage: 10,
        currentPage: page,
      });
    const pokemonList = pokemons.data.map((pkm) => {
      const formatPkmList = {
        name: pkm.name,
        attributes: {
          hp: pkm.hp,
          attack: pkm.attack,
          defense: pkm.defense,
          special_attack: pkm.special_attack,
          special_defense: pkm.special_defense,
          speed: pkm.speed,
        },
      };
      return formatPkmList;
    });
    pokemonList.push({ paginations: pokemons.pagination });

    return pokemonList;
  }

  async getPokemon(pokemon_id) {
    const pokemon = await db("pokemons").select("*").where({ id: pokemon_id });
    const arr = pokemon.map((pkm) => {
      const arrFormat = {
        id: pkm.id,
        name: pkm.name,
        attributes: {
          hp: pkm.hp,
          attack: pkm.attack,
          defense: pkm.defense,
          special_attack: pkm.special_attack,
          special_defense: pkm.special_defense,
          speed: pkm.speed,
        },
      };
      return arrFormat;
    });

    console.log(arr);
    return arr;
  }

  async deletePokemon(pokemon_id) {
    const delPokemon = await db("pokemons").where({ id: pokemon_id }).delete();

    return delPokemon;
  }

  async postPokemon(
    name,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed
  ) {
    const pokemon = await db("pokemons").insert({
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      special_attack: special_attack,
      special_defense: special_defense,
      speed: speed,
    });

    return pokemon;
  }

  async putPokemon(
    pokemon_id,
    name,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed
  ) {
    const pokemon = await db("pokemons")
      .update({
        name: name,
        hp: hp,
        attack: attack,
        defense: defense,
        special_attack: special_attack,
        special_defense: special_defense,
        speed: speed,
      })
      .where({ id: pokemon_id });

    return pokemon;
  }
}

export default new pokemonsController();
