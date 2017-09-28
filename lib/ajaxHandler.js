var axios = require('axios');

exports.handlePostDestination = function(destination, callback) {
  axios.post('http://127.0.0.1:3000/api/destinations/'+ destination)
  .then(function(response){
    callback(response);
  });
};


exports.getRemainingFriends = function(userName, callback){
  axios.get('http://127.0.0.1:3000/api/remaining-friends/'+ userName)
  .then(function(response){
    callback(response);
  });
};

exports.getLoggedUser = function(callback) {
  axios.get('http://127.0.0.1:3000/api/session/user')
  .then(function(response){
    callback(response);
  });
}

exports.handleAddFriend = function(username, friend, callback) {
  axios.post('http://127.0.0.1:3000/api/addfriend', {username: username, friend:friend})
  .then(function(response){
    callback();
  });
}