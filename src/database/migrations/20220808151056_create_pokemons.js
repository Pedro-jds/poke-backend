/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex)    {     return knex.schema.createTable('pokemons', (table) =>{
        table.increments();
        table.string('name', 50).notNullable().unique();
        table.integer('hp',3).notNullable
        table.integer('attack',3).notNullable
        table.integer('defense',3).notNullable
        table.integer('special_attack',3).notNullable
        table.integer('special_defense',3).notNullable
        table.integer('speed',3).notNullable
    }); }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) { return knex.schema.dropTable('pokemons'); }
