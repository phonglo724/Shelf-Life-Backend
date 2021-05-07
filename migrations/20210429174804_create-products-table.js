
exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable('products', (table) => {
        table.increments('id')
        table.string('name')
        table.string('image')
        table.date('dateBought')
        table.date('expirationDate')
        table.integer('quantity')
        table.string('category')
        table.string('storage')
    }),
    knex.schema.createTable('lists', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.foreign('product_id').references('products.id')
    })
  ])
};

exports.down = (knex) => {
  return Promise.all([
    knex.schema.dropTableIfExists('products'),
    knex.schema.dropTableIfExists('lists')
  ])
};
