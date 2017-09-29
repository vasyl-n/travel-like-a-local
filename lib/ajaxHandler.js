var axios = require('axios');
var DOMParser = require('xmldom').DOMParser;

exports.handlePostDestination = function(destination, callback) {
  axios.post('http://127.0.0.1:3000/api/destinations/'+ destination)
  .then(function(response){
    callback(response);
  });
};

exports.handleGetDestination = function(destination, callback) {
   axios.get('http://127.0.0.1:3000/api/destinations/'+ destination)
  .then(function(response){
    callback(response);
  });
}

exports.getRemainingFriends = function(userName, callback){
  axios.get('http://127.0.0.1:3000/api/remaining-friends/'+ userName)
  .then(function(response){
    callback(response);
  });
};

exports.getFriendList = function(userName, callback){
  axios.get('http://127.0.0.1:3000/api/friendlist/'+ userName)
  .then(function(response){
    callback(response);
  }).catch(function(err){
    console.log(err);
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

exports.getPlacesFromGoogleMaps = function(location, callback) {
  axios.get('http://127.0.0.1:3000/api/googlemaps/'+location)
  .then(function(response){
    console.log(response.data.json.results);
    callback(response.data.json.results);
  }).catch(function(err){
    console.log(err);
  });
}


//get suggestions for the destination that was searched for from your friends
exports.getSuggestionsForLoggedUsers = function(userName, location, callback){
  axios.get('http://127.0.0.1:3000/api/suggestions/'+ location +'/' + userName)
  .then(function(response){
    callback(response.data);
  });
};