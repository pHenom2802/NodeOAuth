var express = require('express');
var app = express();
var router = express.Router;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose');
var mongoDbUrl = require('./conf/conf.js').mongoDBUrl;
mongoose.connect(mongoDbUrl);
	
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({ secret: 'someultrasecrectSecret',
			saveUninitialized: true,
			resave: true
}));
var morgan = require('morgan');
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());
require('./model/passport.js')(passport);

var auth = express.Router();
require('./router/auth.js')(auth, passport);
app.use('/auth', auth);

var isAuthenticated = function(req, res, next){
				if(req.isAuthenticated())
					return next();
				else
					res.redirect('auth/login');
			};

app.get('/profile', isAuthenticated, function(req, res){
	res.send('Your profile');
});
app.get('/',function(req, res){
	res.send('New data ',  req.session.id, req.cookies);
});
app.listen(8080);
