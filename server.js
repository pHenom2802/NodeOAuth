var express = require('express');
var app = express();
var router = express.Router;
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({ secret: 'someultrasecrectSecret',
			saveUninitialized: true,
			resave: true
}));

var auth = express.Router();
require('./router/auth.js')(auth);
app.use('/auth', auth);

app.get('/',function(req, res){
	res.send('Acessing / ' + req.session.id);
});
app.listen(8080);
