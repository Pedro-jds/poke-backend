/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema
    .createTable("counter_wins", (table) => {
      table.increments();
      table.string("player", 50).notNullable;
      table.integer("wins").notNullable;
    })
    .then(() => {
      return knex("counter_wins").insert([
        { player: "playerOne", wins: 0 },
        { player: "playerTwo", wins: 0 },
      ]);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema.dropTable("counter_wins");
}
