exports.up = async function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
    });
}

exports.down = async function (knex) {
    return knex.schema.dropTable('users');
}