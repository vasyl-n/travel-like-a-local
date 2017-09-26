var express = require('express');
var bodyParser = require('body-parser');

var utilities = require('./lib/util.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var router = express.Router();


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


router.get('/remaining-friends/:username', utilities.getSuggestedFriendsForUser);


router.post('/users/newuser', utilities.addNewUser);
router.post('/destinations/:newdest', utilities.addNewDest);

app.use('/api', router);

app.listen(3000, function(){
  console.log("listening on 3000");
});


