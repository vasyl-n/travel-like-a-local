var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var utilities = require('./lib/util.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret'));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


var staticRouter = express.Router();
staticRouter.get('/', utilities.checkUser, function(req, res){
  res.redirect('index.html');
});
staticRouter.get('/index.html', utilities.checkUser);
staticRouter.get('/login', function(req, res){
  res.redirect('login.html');
});
staticRouter.post('/login', utilities.handleLogin);

staticRouter.get('/signup', function(req, res){
  res.redirect('signup.html');
});
staticRouter.post('/signup', utilities.handleSignup);
app.use(staticRouter);
app.use(express.static(__dirname + '/public'));


var apiRouter = express.Router();
apiRouter.get('/remaining-friends/:username', utilities.getSuggestedFriendsForUser);
apiRouter.post('/users/newuser', utilities.addNewUser);
apiRouter.post('/destinations/:newdest', utilities.addNewDest);
app.use('/api', apiRouter);



app.listen(3000, function(){
  console.log("listening on 3000");
});


