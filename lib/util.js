var connection = require('../db/index').connection;
const bcrypt = require('bcrypt-nodejs');

exports.addNewUser = function(req, res){
  var newusername = req.body.username;
  var password = req.body.password;
};

exports.addNewDest = function(req, res){
  var newDest = req.params.newdest;
  connection.query('insert into destinations(destinationName) values('+ JSON.stringify(newDest)+')', function(err, result){
    if (err){
      res.send(err.sqlMessage);
      console.log(err.sqlMessage);
    } else {
      console.log("Successfully added");
      res.send("Successfully added");
    }
  });
};

exports.getSuggestedFriendsForUser = function(req, res){
  var loggedUser = req.params.username;
  connection.query('select id,username from users where not (username = ' + JSON.stringify(loggedUser) + ')', function(error, result){
    if (error){
      res.send(error.sqlMessage);
      console.log(error.sqlMessage);
    } else {
      res.send(result)
    }
  })
};

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.username = '';

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    exports.username = 'not logged in';
    console.log(exports.username);
    next();
  } else {
    exports.username = req.session.user;
    console.log(exports.username);
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      console.log('inside create session');
      req.session.user = newUser;
      res.redirect('index.html');
  });
};

exports.handleLogin = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('select username, password from users where username='+JSON.stringify(username), function(err, results){
    if (err) {
      console.log(err);
    } else {
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, result){
          if (err) {
            console.log(err);
          } else {
            if (result) {
              exports.createSession(req, res, username);
            } else {
              res.redirect('login.html');
            }
          }
        });
      } else {
        res.redirect('signup.html');
      }
    }
  });
};


exports.handleSignup = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var hash = bcrypt.hashSync(password);
  connection.query('insert into users (username, password) values ('+ JSON.stringify(username) +','+ JSON.stringify(hash) +')', function(err, results){
    if (err) {
      console.log(err.sqlMessage);
      res.redirect('signup.html');
    } else {
      res.redirect('/');
    }
  });
};