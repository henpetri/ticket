exports.up = async function (knex) {
    return knex.schema.createTable('messages', table => {
        table.varchar('message');
        table.boolean('admin');

        table.integer('ticket_id')
            .notNullable()
            .references('id')
            .inTable('tickets')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}

exports.down = async function (knex) {
    return knex.schema.dropTable('messages');
}