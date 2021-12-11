const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {error, getAll, getByTitleOrDirector, createNew} = require('./controller/movies')

app.get('/movies', getAll)

app.get('/movies/:searchValue', getByTitleOrDirector)

app.post('/movies', bodyParser.json(), createNew)

app.all('*', error)

app.listen(1337, () => {
    console.log('Listening on http://localhost:1337/movies...')
})
