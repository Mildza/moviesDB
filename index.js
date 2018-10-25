const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const config = require('./config/database')

const movies = require('./routes/movies')

mongoose.connect(config.database,{ useNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
})
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
})

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use('/', movies)

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ('public/index.html')))
})

app.listen(port, () => {
    console.log('Its Starts' + ' on port: ' + port)
})