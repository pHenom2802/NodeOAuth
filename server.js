var express = require('express');
var app = express();
var router = express.Router;

var auth = express.Router();
require('./router/auth.js')(auth);
app.use('/auth', auth);

app.get('/',function(req, res){
	res.send('Accessing /');
});
app.listen(8080);
