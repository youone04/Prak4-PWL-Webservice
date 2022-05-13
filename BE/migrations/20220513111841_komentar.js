exports.up = function(knex) {
    return knex.schema.raw('create extension if not exists "uuid-ossp"')
    .createTable('komentar' , (table) => {
        table.increments('id').primary();
        table.integer('project_id').notNullable();
        table.string('username').notNullable();
        table.string('komentar').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.foreign('project_id').references('id').inTable('project').onUpdate('cascade').onDelete('cascade');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('komentar')
};