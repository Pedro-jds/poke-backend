import db from "../../database/database";

class compararPokemonController {
  async getPokemons(pokemon_id_1, pokemon_id_2) {
    const pokemons = await db("pokemons")
      .select(
        "hp",
        "attack",
        "defense",
        "special_attack",
        "special_defense",
        "speed"
      )
      .whereIn("id", [pokemon_id_1, pokemon_id_2]);

    const pkm1 = pokemons[0];
    const pkm2 = pokemons[1];

    let playerWinner1 = 0;
    let playerWinner2 = 0;

    const vencedor = function (pkm1, pkm2) {
      let resultado = {};
      let atributos_1 = 0;
      let atributos_2 = 0;

      for (const key in pkm1) {
        if (pkm1[key] > pkm2[key]) {
          atributos_1 += 1;
        } else if (pkm2[key] > pkm1[key]) {
          atributos_2 += 1;
        }
        resultado[key] = resultado[key] || 0;
        resultado[key] =
          pkm1[key] > pkm2[key] ? 1 : pkm1[key] === pkm2[key] ? 0 : 2;
      }
      if (atributos_1 > atributos_2) {
        playerWinner1 = 1;
        playerWinner2 = 2;

      } else if (atributos_2 > atributos_1) {
        playerWinner1 = 2;
        playerWinner2 = 1;
        
      } else if (atributos_1 === atributos_2) {
        return ;
      }

      return resultado;
    };

    console.log(pkm1);
    console.log(pkm2);

    let a = vencedor(pkm1, pkm2);
    
    if(a===undefined)
    return { message: "empate" }

    let arr = {
      winner: playerWinner1,
      loser: playerWinner2,
      details: {
        hp: a.hp,
        attack: a.attack,
        defense: a.defense,
        special_attack: a.special_attack,
        special_defense: a.special_defense,
        speed: a.speed,
      },
    };

    console.log(arr);

    return arr;
  }

  
}

export default new compararPokemonController();
