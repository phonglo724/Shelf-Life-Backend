
exports.up = (knex) => {
  return knex.schema.createTable('lists', (table) => {
      table.increments('id')
    //   table.integer('product_id').references('id').inTable('products')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('lists')
};
