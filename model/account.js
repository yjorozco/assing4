//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  name: String,
  balance: String
});


module.exports = mongoose.model('Account', AccountSchema );