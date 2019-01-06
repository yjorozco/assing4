
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const route = require('./routes')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/edx-course-db';

mongoose.Promise = global.Promise
mongoose.connect(url)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'))
app.use(errorhandler())

app.use((req, res, next) => {
 
  next()
})

app.get('/accounts', route.accounts.getAccounts);
app.post('/accounts', route.accounts.addAccount);
app.put('/accounts/:accountId/', route.accounts.updateAccount);
app.delete('/accounts/:accountId/', route.accounts.removeAccount);



app.listen(3000)