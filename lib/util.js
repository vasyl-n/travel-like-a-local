var connection = require('../db/index').connection;

exports.addNewUser = function(req, res){
  var newusername = req.body.username;
  var password = req.body.password;
}

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
}

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


}