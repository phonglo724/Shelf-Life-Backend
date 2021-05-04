
exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
      table.increments('id')
      table.string('name')
      table.string('image')
      table.date('dateBought')
      table.date('expirationDate')
      table.integer('quantity')
      table.string('category')
      table.string('storage')
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('products')
};
