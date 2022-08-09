/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

    export function up(knex)    { return knex.schema.createTable('counter_wins', (table) =>{
        table.increments();
        table.string('player',50).notNullable
        table.integer('wins').notNullable
    }); }


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) { return knex.schema.dropTable('counter_wins'); }