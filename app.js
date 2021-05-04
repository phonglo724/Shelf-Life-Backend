const express = require("express")
const app = express()
const port = process.env.PORT || 9000
const knex = require('knex')
const config = require('./knexfile')['development']
const database = knex(config)
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
});

// GET REQUEST. Using response.send will output the same as below
app.get('/', (request, response) => {
    response.send({ message: "HOMEPAGE ENDPOINT" })
})

// PRODUCTS
// GET REQUEST. Using response.json will output the same as above
app.get('/products', (request, response) => {
    database('products')
        .then(products => response.json(products))
});
// SHOW REQUEST
app.get('/products/:id', (request, response) => {
    // console.log('params', request.params)
    database('products')
        .where({ id: request.params.id })
        .then(products => response.json(products[0]))
});
// POST REQUEST
app.post('/products', (request, response) => {
    // response.json({ message: "POST REQUEST"})
    // console.log('body', request.body)
    database('products')
        .insert({ 
            name: request.body.name, 
            image: request.body.image,
            dateBought: request.body.dateBought,
            expirationDate: request.body.expirationDate,
            quantity: request.body.quantity,
            category: request.body.category,
            storage: request.body.storage
        })
        .returning(['id', 'name', 'image', 'dateBought', 'expirationDate', 'quantity', 'category', 'storage'])
        .then(products => response.json(products[0]))
});
// DELETE REQUEST
app.delete('/products/:id', (request, response) => {
    // response.json({ message: "DELETED" })
    database('products')
        .where({ id: request.params.id })
        .delete()
        .then(()=> response.send({message: `Product ${request.params.id} Deleted`}))
});
