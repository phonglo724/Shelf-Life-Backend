
exports.seed = function(knex) {
  // Deletes ALL existing entries if there are any
  return knex('products').del()
    .then(function () {
      // Inserts seed entries in array of objects
      return knex('products').insert([
        {
          name: 'Bananas', 
          image: 'http://pngimg.com/uploads/banana/banana_PNG827.png', 
          dateBought: '2021-05-05', 
          expirationDate: '2021-05-12', 
          quantity: 6, 
          category: 'Fruit', 
          storage: 'Pantry'
        },
        {
          name: 'Apples', 
          image: 'https://toppng.com/uploads/preview/apple-transparent-11546974665xegugayfqm.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 1, 
          category: 'Fruit', 
          storage: 'Pantry'
        },
        {
          name: 'Strawberries', 
          image: 'https://www.clipartmax.com/png/middle/192-1920390_home-strawberry-png-image-transparent-background-strawberry-png.png', 
          dateBought: '2021-05-07', 
          expirationDate: '2021-05-13', 
          quantity: 1, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Blueberries', 
          image: 'https://www.vhv.rs/dpng/d/430-4304002_blueberries-png-image-background-transparent-background-bowl-of.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 1, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Milk', 
          image: 'https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-17', 
          quantity: 1, 
          category: 'Beverages', 
          storage: 'Fridge'
        },
        {
          name: 'Steak', 
          image: 'https://www.vhv.rs/dpng/d/292-2920380_beefsteak-rib-eye-steak-cut-of-beef-raw.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-15', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Chicken Wings', 
          image: 'https://www.pngjoy.com/pngm/18/479277_chicken-wings-raw-chicken-wings-hd-png-download.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2022-05-10', 
          quantity: 12, 
          category: 'Meat and Seafood', 
          storage: 'Freezer'
        },
        {
          name: 'Cilantro', 
          image: 'https://mpng.subpng.com/20180330/tsw/kisspng-coriander-tamil-cuisine-herb-flavor-nutrition-parsley-5abe06c93df695.5049364415224030172538.jpg', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 1, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Garlic', 
          image: 'https://image.pngaaa.com/229/2581229-middle.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Pantry'
        },
        {
          name: 'Siracha', 
          image: 'https://www.vhv.rs/dpng/d/397-3972067_sriracha-bottle-png-hot-sauce-with-rooster-transparent.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Cornstarch', 
          image: 'https://www.argofoodservice.com/images/ProductImages/4c910dcc-5311-4ab6-a6c3-d1234bf1281f.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Bread', 
          image: 'https://img2.pngio.com/breakfast-whole-wheat-bread-whole-wheat-toast-transparent-whole-wheat-bread-png-751_520.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-14', 
          quantity: 1, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Rice', 
          image: 'https://image.pngaaa.com/559/715559-middle.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 1, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Sour Cream and Onion Chips', 
          image: 'https://toppng.com/uploads/preview/lays-sour-cream-onion-frito-lay-lays-sour-cream-onion-potato-chips-11563082148oo1sphzjmm.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 4, 
          category: 'Snacks', 
          storage: 'Pantry'
        },
        {
          name: 'Popcorn', 
          image: 'https://www.pngjoy.com/pngm/557/19461144_popcorn-pop-secret-popcorn-transparent-png.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 2, 
          category: 'Snacks', 
          storage: 'Pantry'
        },
        {
          name: 'Canned Green Beans', 
          image: 'https://www.delmonte.com/sites/default/files/products//2017-09/bluelake-frenchstylegreenbeans-lowsodium.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 4, 
          category: 'Canned Goods', 
          storage: 'Pantry'
        },
        {
          name: 'Canned Corn', 
          image: 'https://www.delmonte.com/sites/default/files/goldensweetwholekernelcorn-regular.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 4, 
          category: 'Canned Goods', 
          storage: 'Pantry'
        },
        {
          name: 'Coconut Oil', 
          image: 'https://www.vhv.rs/dpng/d/585-5858738_coconut-oil-white-background-hd-png-download.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Pantry'
        },
        {
          name: 'Oyster Sauce', 
          image: 'https://img2.pngio.com/panda-brand-oyster-sauce-oyster-flavored-sauce-lee-kum-kee-oyster-sauce-png-500_900.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 2, 
          category: 'Sauces and Oils', 
          storage: 'Fridge'
        },
        {
          name: 'Mochi Ice Cream', 
          image: 'https://image.pngaaa.com/400/2650400-middle.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-06-29', 
          quantity: 2, 
          category: 'Other', 
          storage: 'Freezer'
        },
        {
          name: 'Frozen Pizza', 
          image: 'https://www.pngkey.com/png/full/969-9690910_image-tombstone-frozen-pizza.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2022-10-29', 
          quantity: 4, 
          category: 'Other', 
          storage: 'Freezer'
        },
        {
          name: 'Romaine Lettuce', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CMxJUBClxo9pHvSErQOQS5n0LMqNBDqI1g&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-15', 
          quantity: 3, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Chicken Breasts', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MUSSmKOqc4AO4gjRm7HLiUBaU8wAimYWYw&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-12', 
          quantity: 4, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Vanilla Yogurt', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3g5QUISrI9IWk9UoLKvooKY4POv0e4hlbg&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-23', 
          quantity: 2, 
          category: 'Other', 
          storage: 'Fridge'
        },
        {
          name: 'Ground Beef', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjqIhgU1WfrfzBmZrwDyaihWZuLtZUgCksg&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-11', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Ground Chicken', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxst5gxwhB9sLIDW9NxHKz4fo6J6iTA5eCg&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-09-09', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Tator Tots', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDDu4HkMkKSnqrfRHmWkl4gEsu6oagYLvYQ&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2022-05-09', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Freezer'
        },
        {
          name: 'Spring Roll Wrappers', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPjw-qXu3YSDBTtHVnsWqVuHgrlcZjuJRMw&usqp=CAU', 
          dateBought: '2021-02-09', 
          expirationDate: '2022-02-09', 
          quantity: 4, 
          category: 'Other', 
          storage: 'Freezer'
        },
        {
          name: 'Ground Pork', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dLOXhzqDZxIWAMu-dde1qbfew63qOOHeRA&usqp=CAU', 
          dateBought: '2021-02-09', 
          expirationDate: '2021-06-09', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Freezer'
        },
        {
          name: 'Eggo Waffles', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9K-BMDiWexPx0Qf2EQEbHfk-MFaaHNdQmQ&usqp=CAU', 
          dateBought: '2021-02-09', 
          expirationDate: '2022-02-09', 
          quantity: 2, 
          category: 'Other', 
          storage: 'Freezer'
        },
        {
          name: 'Broccoli', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTke2zdvT4LjzoxGUpY-f2CaB62N4_FEpWSnw&usqp=CAU', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-11-09', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Freezer'
        },
        {
          name: 'Passion Fruit Juice', 
          image: 'https://www.seekpng.com/png/full/135-1354227_thumbnail-welchs-passion-fruit-juice.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-08-29', 
          quantity: 2, 
          category: 'Beverages', 
          storage: 'Fridge'
        }
      ]);
    });
};
