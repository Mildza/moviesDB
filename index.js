const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const passportSetup = require('./config/passport-setup.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config/database');

const auth = require('./routes/auth');
const movies = require('./routes/movies')
const user = require('./routes/user')
const admin = require('./routes/admins')

mongoose.set('useFindAndModify', false)
mongoose.connect(config.database,{ useNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
})
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
})

const app = express();
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());


app.use('/', movies)
app.use('/auth', auth)
app.use('/user', user)
app.use('/admin', admin)

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ('public/index.html')))
})

app.listen(port, () => {
    console.log('Its Starts' + ' on port: ' + port)
})