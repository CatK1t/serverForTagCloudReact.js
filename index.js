const express = require('express')
const app = express()
const products = require('./products');

app.disable('etag');

const port = 3006

app.get('/', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200);
    response.send('hi Home')
})

app.get('/products', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200);
    response.send(products)
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

