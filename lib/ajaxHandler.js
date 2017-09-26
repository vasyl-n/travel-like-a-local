var axios = require('axios');

exports.handlePostDestination = function(destination, callback) {
  axios.post('http://127.0.0.1:3000/api/destinations/'+ destination)
  .then(function(response){
    callback(response);
  });
};