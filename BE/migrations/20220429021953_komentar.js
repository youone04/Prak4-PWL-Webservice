exports.up = function(knex) {
    return knex.schema.raw('create extension if not exists "uuid-ossp"')
    .createTable('komentar' , (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('komentar').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('komentar')
};