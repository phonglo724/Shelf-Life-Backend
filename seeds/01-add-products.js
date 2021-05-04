
exports.seed = function(knex) {
  // Deletes ALL existing entries if there are any
  return knex('products').del()
    .then(function () {
      // Inserts seed entries in array of objects
      return knex('products').insert([
        {name: 'Bananas', image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', dateBought: '2021-04-29', expirationDate: '2021-05-03', quantity: 1, category: 'Fruit', storage: 'Pantry'},
        {name: 'Bananas', image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', dateBought: '2021-04-29', expirationDate: '2021-05-03', quantity: 1, category: 'Fruit', storage: 'Pantry'},
        {name: 'Bananas', image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', dateBought: '2021-04-29', expirationDate: '2021-05-03', quantity: 1, category: 'Fruit', storage: 'Pantry'},
        {name: 'Bananas', image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', dateBought: '2021-04-29', expirationDate: '2021-05-03', quantity: 1, category: 'Fruit', storage: 'Pantry'},
        {name: 'Bananas', image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', dateBought: '2021-04-29', expirationDate: '2021-05-03', quantity: 1, category: 'Fruit', storage: 'Pantry'}
      ]);
    });
};
