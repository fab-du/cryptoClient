var mongoose = require('mongoose');

var db = mongoose.connection ; 


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    console.log('db connect');
});




mongoose.connect( 'mongodb://localhost/cryptoOne' )

module.exports = { Models : require('./models') } 
