import db from "../../database/database";
import AppError from "../errors/AppError";
import { celebrate, Segments, Joi } from "celebrate";

class pokemonsController {
  async getPokemonsList(page, filter) {
    if (!filter) {
      filter = "";
    }
    const pokemons = await db("pokemons")
      .whereILike("name", `%${filter}%`)
      .paginate({
        perPage: 10,
        currentPage: page,
        isLengthAware: true,
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
    const pokeById = pokemon.map((pkm) => {
      const objFormat = {
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
      return objFormat;
    });

    return pokeById;
  }

  async deletePokemon(pokemon_id) {
    const delPokemon = await db("pokemons").where({ id: pokemon_id }).delete();
    if (delPokemon === 0) {
      throw new AppError({
        error: "Pokemon não cadastrado",
        statusCode: 400,
      });
    }

    return delPokemon;
  }

  async postPokemon(body) {
    const pokemon = await db("pokemons").insert({
      name: body.name,
      hp: body.attributes.hp,
      attack: body.attributes.attack,
      defense: body.attributes.defense,
      special_attack: body.attributes.special_attack,
      special_defense: body.attributes.special_defense,
      speed: body.attributes.speed,
    });

    const postStatus = {
      message: "pokemon cadastrado",
      status: 201,
      id: pokemon,
    };
    return postStatus;
  }

  async putPokemon(pokemon_id, body) {
    const pokemon = await db("pokemons")
      .update({
        name: body.name,
        hp: body.attributes.hp,
        attack: body.attributes.attack,
        defense: body.attributes.defense,
        special_attack: body.attributes.special_attack,
        special_defense: body.attributes.special_defense,
        speed: body.attributes.speed,
      })
      .where({ id: pokemon_id });
    if (pokemon === 0) {
      throw new AppError({
        error: "Pokemon não cadastrado",
        statusCode: 400,
      });
    }
    return pokemon;
  }
}

export const pokemonValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    attributes: Joi.object().keys({
      hp: Joi.number().positive().required(),
      attack: Joi.number().positive().required(),
      defense: Joi.number().positive().required(),
      special_attack: Joi.number().positive().required(),
      special_defense: Joi.number().positive().required(),
      speed: Joi.number().positive().required(),
    }),
  }),
});

export default new pokemonsController();
