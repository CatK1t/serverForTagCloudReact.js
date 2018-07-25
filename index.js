const express = require('express')
const app = express()
const base = require('./base');

app.disable('etag');

const port = 3006

app.get('/', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200);
    
    response.send('hi Home')
})

app.get('/base', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200);
    response.send(base)
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

