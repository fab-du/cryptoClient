var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
var logger = require('morgan');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken')

var db = require('./server/db')
var User = db.Models.Users;

var app = express();

app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/app/favicon.ico'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/lib', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, '')));

app.use( function( req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type: Authorization');
    next();
})


app.post('/session/login', function( req, res){
    var resp = { type: false, data : null, token : null }; 
    var credentials = req.body; 
    var findCriterien = {};
    findCriterien.email = credentials.email; 

    User.findOne( findCriterien , function( err, user){
        if( !err && user ){
            jwt.verify( user.token , credentials.passphrase,  function( err, decoded ){
                if( !err && decoded.password === user.password ){
                    resp.type = true; 
                    resp.data = user; 
                }
            })
        }else{}

        res.json( resp );
    })
})

app.post('/session/logout', function( req, res){
    res.json('logout sucess');
})

app.post('/session/registrieren', function( req, res){
    var credentials = req.body; 
    User.findOne( { email : credentials.email } , function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                var userModel = new User();

                //userModel.passphrase = credentials.passphrase;
                userModel.password = credentials.passphrase;
                 userModel.email = credentials.email; 
                 userModel.firstname =  credentials.firstname; 
                 userModel.lastname =  credentials.lastname; 

                userModel.save(function(err, user) {
                    user.token = jwt.sign(user, credentials.passphrase );
                    user.save(function(err, user1) {
                        res.json({
                            type: true,
                            data: user1,
                            token: user1.token
                        });
                    });
                })
            }
        }
    });

})

app.get( '/application', function( req , res){
    console.log( 'comme here')
    res.json( 'Great application')

})


function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

/*
 *app.get('/users',  ensureAuthorized,  function( req, res){
 *    var resp = { type: false, data : null }; 
 *    console.log( req.headers )
 *    
 *    resp.type = true; 
 *    User.find( function( err , users ){
 *        resp.data = users;  
 *        res.json( resp );
 *    })
 *
 *
 *})
 */

app.get('/users',  function( req, res){
    var resp = { type: false, data : null }; 
    console.log( req.headers )
    
    resp.type = true; 
    User.find( function( err , users ){
        resp.data = users;  
        res.json( resp );
    })


})

app.get('/users/:id', function( req, res){
    res.json('user')
})

app.get('/dokuments', function( req, res){
    var resp = { type: false, data : null }; 
    
    resp.type = true; 
    resp.data =[];

   resp.data.push( { "name" : "doc1" }) 
   resp.data.push( { "name" : "doc2" }) 
    res.json( resp );

})

app.get('/dokuments/:id', function( req, res){

})


app.get('/groups', function( req, res){
    var resp = { type: false, data : null }; 
    
    resp.type = true; 
    resp.data = [ { "name" : "group1" }, { "name" : "groups1"} ];
    res.json( resp );

})

app.get('/groups/:id', function( req, res){

})



// catch 404 and forward to error handler//{{{
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//}}}

app.listen(4000)
module.exports = app;
