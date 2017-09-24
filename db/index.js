const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var userName = "jay";
var password = "123";
var hash = bcrypt.hashSync(password);

const getAllTransactions = function(callback) {
  connection.query('insert into users (username, password) values ('+ JSON.stringify(userName) +','+ JSON.stringify(hash) +')'), function(err, results){
    if (err) {
      console.log(err);
    } else {
      //callback(results);
      console.log("done");
    }
  };
};

exports.connection = connection;


//getAllTransactions();
