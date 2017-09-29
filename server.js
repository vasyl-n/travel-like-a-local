var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var utilities = require('./lib/util.js');
var path = require('path');


var app = express();

app.set('views', path.join(__dirname, 'public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret'));
app.use(session({
  key: 'secret',
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
staticRouter.get('/', function(req, res){
  var username = 'not logged in';
  if (req.session.user){
    username = req.session.user;
  }
  res.render('index', {data:username});
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
staticRouter.get('/logout', function(req, res){
  req.session.destroy(function() {
    var username = 'not logged in';
    res.render('index', {data:username});
  });
});
app.use(staticRouter);
app.use(express.static(__dirname + '/public'));


var apiRouter = express.Router();
apiRouter.get('/remaining-friends/:username', utilities.getSuggestedFriendsForUser);
apiRouter.get('/friendlist/:username', utilities.getFriendListForUser);
apiRouter.get('/googlemaps/:location', utilities.getPlacesFromGoogleMapsProxy);
apiRouter.post('/users/newuser', utilities.addNewUser);
apiRouter.post('/destinations/:newdest', utilities.addNewDest);
apiRouter.post('/addfriend', utilities.addNewFriend);
app.use('/api', apiRouter);

app.listen(3000, function(){
  console.log("listening on 3000");
});


