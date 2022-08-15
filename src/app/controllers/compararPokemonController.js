import db from "../../database/database";
import AppError from "../errors/AppError";
import { celebrate, Segments, Joi } from "celebrate";

class compararPokemonController {
  async postComparar(pokemonsIds) {
    if (pokemonsIds.playerOneCard === pokemonsIds.playerTwoCard) {
      throw new AppError({
        error: "Os pokemons escolhidos não podem ser iguais",
        statusCode: 400,
      });
    }

    let order = "asc";

    pokemonsIds.playerOneCard > pokemonsIds.playerTwoCard
      ? (order = "desc")
      : (order = "asc");

    const pokemons = await db("pokemons")
      .select(
        "hp",
        "attack",
        "defense",
        "special_attack",
        "special_defense",
        "speed"
      )
      .whereIn("id", [pokemonsIds.playerOneCard, pokemonsIds.playerTwoCard])
      .orderBy("id", order);

    if (!pokemons[0] || !pokemons[1]) {
      throw new AppError({
        error: "pokemon(s) não encontrado(s)!",
        statusCode: 400,
      });
    }

    const pkm1 = pokemons[0];
    const pkm2 = pokemons[1];

    let playerWinner1 = 0;
    let playerWinner2 = 0;

    const vencedor = function (pkm1, pkm2) {
      let result = {};
      let attributes_1 = 0;
      let attributes_2 = 0;

      for (const key in pkm1) {
        if (pkm1[key] > pkm2[key]) {
          attributes_1 += 1;
        } else if (pkm2[key] > pkm1[key]) {
          attributes_2 += 1;
        }
        result[key] =
          pkm1[key] > pkm2[key] ? 1 : pkm1[key] === pkm2[key] ? 0 : 2;
      }
      if (attributes_1 > attributes_2) {
        playerWinner1 = 1;
        playerWinner2 = 2;
      } else if (attributes_2 > attributes_1) {
        playerWinner1 = 2;
        playerWinner2 = 1;
      } else if (attributes_1 === attributes_2) {
        return;
      }

      return result;
    };

    const response = vencedor(pkm1, pkm2);

    if (!response) return { message: "empate" };

    const obj = {
      winner: playerWinner1,
      loser: playerWinner2,
      details: {
        hp: response.hp,
        attack: response.attack,
        defense: response.defense,
        special_attack: response.special_attack,
        special_defense: response.special_defense,
        speed: response.speed,
      },
    };

    return obj;
  }
}

export const cardValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    playerOneCard: Joi.number().positive().required(),
    playerTwoCard: Joi.number().positive().required(),
  }),
});

export default new compararPokemonController();
