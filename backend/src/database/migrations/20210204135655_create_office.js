exports.up = function(knex) {
    return knex.schema.createTable('cargo', function(table){
      table.increments()
      table.string('descricao').notNullable()
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cargo')
  }