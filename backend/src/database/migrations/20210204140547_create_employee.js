exports.up = function(knex) {
    return knex.schema.createTable('funcionario', function(table){
        table.increments()

        table.string('nome').notNullable()
        table.string('sobrenome').notNullable()

        table.integer('cargo_id').unsigned().notNullable()

        table.foreign('cargo_id').references('id').inTable('cargo')
        
        table.date('data_nascimento').notNullable()
        table.string('salario').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('funcionario')
};