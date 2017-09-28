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
      console.log("Successfully added destination");
      res.send("Successfully added destination");
    }
  });
};

exports.getSuggestedFriendsForUser = function(req, res){
  var loggedUser = req.params.username;
  var queryStr = 'select users.username, users.id, friendships.friendID FROM users LEFT JOIN friendships ON \
  users.ID = friendships.userID WHERE ((username <>'+ JSON.stringify(loggedUser) + ') AND ((friendID <> id) OR (friendID IS NULL))) GROUP BY users.id, users.username ORDER BY users.username';
  connection.query(queryStr, function(error, result){
    if (error){
      res.send(error.sqlMessage);
      console.log(error.sqlMessage);
    } else {
      res.send(result)
    }
  });
};

exports.addNewFriend = function(req, res) {
  var username = req.body.username;
  var friend = req.body.friend;
  var queryStr1 = 'INSERT INTO friendships ( userid, friendid )\
    SELECT (SELECT users.ID AS userid\
    FROM users\
    WHERE (((users.username)='+JSON.stringify(username)+'))) as userid, users.ID AS friendid\
    FROM (SELECT users.ID AS userid\
    FROM users\
    WHERE (((users.username)='+JSON.stringify(username)+'))) as whatevername, users\
    WHERE (((users.username)='+JSON.stringify(friend)+'))';
  var queryStr2 = 'INSERT INTO friendships ( userid, friendid )\
    SELECT (SELECT users.ID AS userid\
    FROM users\
    WHERE (((users.username)='+JSON.stringify(friend)+'))) as userid, users.ID AS friendid\
    FROM (SELECT users.ID AS userid\
    FROM users\
    WHERE (((users.username)='+JSON.stringify(friend)+'))) as whatevername, users\
    WHERE (((users.username)='+JSON.stringify(username)+'))';
  connection.query(queryStr1, function(error, result){
    if (error){
      res.send(error.sqlMessage);
      console.log(error.sqlMessage);
    } else {
      console.log("Successfully added friend1");
      connection.query(queryStr2, function(error, result){
        if (error) {
          res.send(error.sqlMessage);
          console.log(error.sqlMessage);
        } else {
          console.log("Successfully added friend2");
          res.send("Successfully added friend");
        }
      });
    }
  });
}

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  var username = 'not logged in';
  if (!exports.isLoggedIn(req)) {
    res.render('index', {data:username})
  } else {
    username = req.session.user;
    res.render('index',  {data:username});
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.render('index', {data: newUser});
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
      exports.createSession(req, res, username);
    }
  });
};

exports.handleLogout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};