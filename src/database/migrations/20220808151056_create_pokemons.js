/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("pokemons", (table) => {
    table.increments();
    table.string("name", 50).notNullable().unique();
    table.integer("hp", 3).notNullable;
    table.integer("attack", 3).notNullable;
    table.integer("defense", 3).notNullable;
    table.integer("special_attack", 3).notNullable;
    table.integer("special_defense", 3).notNullable;
    table.integer("speed", 3).notNullable;
  }).then(() => {
    return knex("pokemons").insert([
      { name: "pikachu",hp:50, attack: 20,defense:30,special_attack:60,special_defense:80,speed:90 },
      { name: "bulbasaur",hp:80, attack: 30,defense:40,special_attack:70,special_defense:90,speed:30 },
      { name: "charmander",hp:70, attack: 80,defense:20,special_attack:80,special_defense:20,speed:70 }
    ]);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("pokemons");
}
