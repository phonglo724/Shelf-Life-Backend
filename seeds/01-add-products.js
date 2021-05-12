
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
          image: 'https://freepngimg.com/thumb/apple_fruit/24632-1-apple-fruit-transparent.png', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 4, 
          category: 'Fruit', 
          storage: 'Pantry'
        },
        {
          name: 'Strawberries', 
          image: 'https://thumbs.dreamstime.com/b/strawberry-isolated-white-png-image-transparent-background-strawberry-isolated-white-137014553.jpg', 
          dateBought: '2021-05-07', 
          expirationDate: '2021-05-13', 
          quantity: 1, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Blueberries', 
          image: 'https://p.kindpng.com/picc/s/619-6195835_hinged-blueberry-container-container-of-blueberries-png-transparent.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 1, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Milk', 
          image: 'https://dassonsexports.com/wp-content/uploads/2021/03/milk-jugs-16-1.jpg', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-17', 
          quantity: 1, 
          category: 'Beverages', 
          storage: 'Fridge'
        },
        {
          name: 'Steak', 
          image: 'https://img2.pngio.com/download-free-png-imported-steaks-beef-steak-raw-meat-png-image-raw-meat-png-650_651.jpg', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-15', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Chicken Wings', 
          image: 'https://5.imimg.com/data5/SD/XF/UX/SELLER-15358711/wings-500x500.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2022-05-10', 
          quantity: 12, 
          category: 'Meat and Seafood', 
          storage: 'Freezer'
        },
        {
          name: 'Cilantro', 
          image: 'https://img2.pngio.com/cilantro-png-png-image-culantro-png-612_225.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 1, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Garlic', 
          image: 'https://s2.best-wallpaper.net/wallpaper/1280x1024/2004/Garlic-white-background_1280x1024.jpg', 
          dateBought: '2021-04-29', 
          expirationDate: '2021-05-20', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Pantry'
        },
        {
          name: 'Sriracha', 
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
          image: 'https://www.pngarts.com/files/3/Brown-Bread-PNG-Image-With-Transparent-Background.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-14', 
          quantity: 1, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Rice', 
          image: 'https://cdn.shopify.com/s/files/1/0108/8808/5563/products/RiceBag_580x.png?v=1558318277', 
          dateBought: '2021-04-29', 
          expirationDate: '2023-04-29', 
          quantity: 1, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Sour Cream and Onion Chips', 
          image: 'https://www.meijer.com/content/dam/meijer/product/0002/84/0019/96/0002840019963_1_A1C1_0600.png', 
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
          image: 'https://www.celebes.com/wp-content/uploads/2020/06/celebes-organic-rbd-coconut-oil.png', 
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
          image: 'https://www.americanclassicicecream.com/content/images/thumbs/0003472_mochi.png', 
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
          image: 'https://www.pngarts.com/files/1/Romaine-Lettuce-Transparent-Background-PNG.png', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-15', 
          quantity: 3, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Chicken Breasts', 
          image: 'https://www.nicepng.com/png/detail/876-8763931_chicken-breast-fillet-raw-chicken-breast-png.png', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-05-12', 
          quantity: 4, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Yogurt', 
          image: 'http://www.pngplay.com/wp-content/uploads/4/Yogurt-PNG-HD-Quality.png', 
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
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwUIqn55BjSw5LtDAifwgK3KYYLoXtDyNtQ&usqp=CAU', 
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
          image: 'https://smedia.webcollage.net/rwvfp/wc/cp/1529467125369_caab14ce-614b-41b6-8ec0-8cd18cb4e557/module/eggo/_cp/products/1453903804428/tab-9312de67-241e-4138-9676-97320253116d/12ee1146-dc67-4090-b82d-e5894d1f5654.png.w1920.png', 
          dateBought: '2021-02-09', 
          expirationDate: '2022-02-09', 
          quantity: 2, 
          category: 'Other', 
          storage: 'Freezer'
        },
        {
          name: 'Broccoli', 
          image: 'https://www.pngitem.com/pimgs/m/122-1224458_broccoli-broccoli-emoji-png-transparent-png.png', 
          dateBought: '2021-05-09', 
          expirationDate: '2021-11-09', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Freezer'
        },
        {
          name: 'Thai Peppers', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfLGrAk9w6PQj8KlCUQ1qoNP9ptHkFXXnJA&usqp=CAU', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-06-10', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Freezer'
        },
        {
          name: 'Popcorn Shrimp', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAexW0Qx1im8JVhwpb3qM0kFdva_4ZSH4baA&usqp=CAU', 
          dateBought: '2021-01-15', 
          expirationDate: '2021-10-15', 
          quantity: 1, 
          category: 'Meat and Seafood', 
          storage: 'Freezer'
        },
        {
          name: 'Canned Bamboo Shoots', 
          image: 'https://www.ustrading.com/img/products/md/12096.png', 
          dateBought: '2021-02-17', 
          expirationDate: '2024-02-17', 
          quantity: 4, 
          category: 'Canned Goods', 
          storage: 'Pantry'
        },
        {
          name: 'Pho Noodles', 
          image: 'https://fsiseattle.com/wp-content/uploads/2018/03/56100.png', 
          dateBought: '2021-02-17', 
          expirationDate: '2021-08-17', 
          quantity: 4, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Green Onions', 
          image: 'https://freepngimg.com/thumb/onion/31409-3-green-onion-transparent.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Ginger', 
          image: 'https://pngimg.com/uploads/ginger/ginger_PNG16784.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-08-10', 
          quantity: 2, 
          category: 'Vegetables', 
          storage: 'Freezer'
        },
        {
          name: 'Pepper Jack Cheese', 
          image: 'https://www.sargento.com/assets/00122_SL_PpprJck_7-5oz_QrtrLft.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-06-20', 
          quantity: 2, 
          category: 'Other', 
          storage: 'Fridge'
        },
        {
          name: 'Eggs', 
          image: 'https://freepikpsd.com/wp-content/uploads/2019/10/dozen-eggs-png-4-Transparent-Images.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-06-06', 
          quantity: 2, 
          category: 'Meat and Seafood', 
          storage: 'Fridge'
        },
        {
          name: 'Ranch', 
          image: 'https://www.hiddenvalley.com/wp-content/uploads/2021/04/Original-Ranch-Bottle-4_5.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-07-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Fridge'
        },
        {
          name: 'Syrup', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbt_Jbehds29wMiYo4fi38ksUvmDBp30xKQ&usqp=CAU', 
          dateBought: '2021-02-10', 
          expirationDate: '2022-02-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Fridge'
        },
        {
          name: 'Honey', 
          image: 'https://pngimg.com/uploads/honey/honey_PNG86334.png', 
          dateBought: '2021-02-10', 
          expirationDate: '2023-02-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Cabbage', 
          image: 'http://www.pngplay.com/wp-content/uploads/2/Cabbage-Transparent-Background.png', 
          dateBought: '2021-04-10', 
          expirationDate: '2021-05-01', 
          quantity: 1, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Red Curry Paste', 
          image: 'https://www.gourmetfoodworld.com/images/Product/large/mae-ploy-red-curry-paste-1S-1844.jpg', 
          dateBought: '2021-04-10', 
          expirationDate: '2021-07-10', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Freezer'
        },
        {
          name: 'Lemon Grass', 
          image: 'https://www.pngitem.com/pimgs/m/113-1132840_transparent-lemongrass-clipart-lemon-grass-png-png-download.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-20', 
          quantity: 4, 
          category: 'Vegetables', 
          storage: 'Fridge'
        },
        {
          name: 'Salt', 
          image: 'https://pngimg.com/uploads/salt/salt_PNG98694.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2026-01-10', 
          quantity: 2, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Black Pepper', 
          image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/products/mccormick/b/2000/black-peppercorn-grinder.png?rev=082f817eed0048dcb0cc068d8a4bbabe&vd=20200628T204431Z&hash=70D13C796E21557426556835F62DB49A', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-05-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Sesame Oil', 
          image: 'https://d1e1vgxjd1htwd.cloudfront.net/-/media/us-site---homecook/products/pure-sesame-oil-15oz-(2).png?h=1128&w=354&hash=272641D47461618835977189EE7289063A27F288', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-08-10', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Pantry'
        },
        {
          name: 'Ketchup', 
          image: 'https://www.kindpng.com/picc/m/2-20402_clipart-transparent-background-free-heinz-ketchup-bottle-png.png', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-08-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Fridge'
        },
        {
          name: 'Dijon Mustard', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwa8FR1tG6lm_G2Untc7yTgeEyAG855FghQ&usqp=CAU', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-08-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Fridge'
        },
        {
          name: 'Sweet and Sour Chili Sauce', 
          image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/14873646/1678932609.jpg', 
          dateBought: '2021-02-10', 
          expirationDate: '2022-02-10', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Fridge'
        },
        {
          name: 'Peanut Butter', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGY9AGtW1WGYc49663mw1uPW3gLj-XkTDyfA&usqp=CAU', 
          dateBought: '2021-02-10', 
          expirationDate: '2021-10-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Lemons', 
          image: 'https://www.pngitem.com/pimgs/m/152-1525478_transparent-background-lemon-png-png-download.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-05-31', 
          quantity: 4, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Limes', 
          image: 'https://www.kindpng.com/picc/m/6-66134_transparent-background-lime-png-png-download.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-06-30', 
          quantity: 2, 
          category: 'Fruit', 
          storage: 'Fridge'
        },
        {
          name: 'Namya Curry Paste', 
          image: 'https://www.ustrading.com/img/products/xl/23513.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-08-10', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Fridge'
        },
        {
          name: 'Butter', 
          image: 'http://pngimg.com/uploads/butter/butter_PNG17.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-07-10', 
          quantity: 2, 
          category: 'Sauces and Oils', 
          storage: 'Fridge'
        },
        {
          name: 'Chili Garlic Oil', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhkOY7a7zV25i7-0f_qo3iLIv5heXF2F6-w&usqp=CAU', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-08-10', 
          quantity: 1, 
          category: 'Sauces and Oils', 
          storage: 'Fridge'
        },
        {
          name: 'Taco Shells', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YWZ7TIWYt5vg-xbRigf7sSXRCE-yGFBwjA&usqp=CAU', 
          dateBought: '2021-05-10', 
          expirationDate: '2021-07-10', 
          quantity: 2, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Taco Seasoning', 
          image: 'https://img2.pngio.com/mccormick-taco-seasoning-mix-hot-mccormick-taco-seasoning-mix-png-800_800.png', 
          dateBought: '2021-05-10', 
          expirationDate: '2024-05-10', 
          quantity: 20, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Laab Seasoning', 
          image: 'https://www.ustrading.com/img/products/xl/54268.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2023-01-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Pho Seasoning', 
          image: 'https://images-na.ssl-images-amazon.com/images/I/915tYtY0DGL._SL1500_.jpg', 
          dateBought: '2021-01-10', 
          expirationDate: '2022-01-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Pantry'
        },
        {
          name: 'Fish Sauce', 
          image: 'https://monasianmarket.weebly.com/uploads/1/3/0/0/130098820/s326806001195927862_p642_i2_w640.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2022-01-10', 
          quantity: 1, 
          category: 'Condiments and Spices', 
          storage: 'Fridge'
        },
        {
          name: 'Agar Dessert Mix', 
          image: 'https://www.ustrading.com/img/products/xl/54037.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2021-09-10', 
          quantity: 4, 
          category: 'Other', 
          storage: 'Pantry'
        },
        {
          name: 'Vermicelli Noodles', 
          image: 'https://i.ebayimg.com/images/g/pkQAAOSwlyBeNgLt/s-l300.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2024-01-10', 
          quantity: 4, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Bean Thread Noodles', 
          image: 'https://dunyong.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/1/6/16082-angle1-1805311310.jpg', 
          dateBought: '2021-01-10', 
          expirationDate: '2024-01-10', 
          quantity: 4, 
          category: 'Grain and Bread', 
          storage: 'Pantry'
        },
        {
          name: 'Coconut Milk', 
          image: 'https://res.cloudinary.com/hksqkdlah/image/upload/34895_sil-coconut-milk-arroy-d-coconut-milk-1.png', 
          dateBought: '2021-01-10', 
          expirationDate: '2024-01-10', 
          quantity: 4, 
          category: 'Canned Goods', 
          storage: 'Pantry'
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
