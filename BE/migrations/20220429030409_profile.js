exports.up = function(knex) {
    return knex.schema.raw('create extension if not exists "uuid-ossp"')
    .createTable('profile' , (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.text('text').notNullable();
        table.string('text_cv').notNullable();
        table.string('link_cv').notNullable();
        table.string('text_github').notNullable();
        table.string('link_github').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('profile')
};