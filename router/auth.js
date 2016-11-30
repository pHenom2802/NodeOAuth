module.exports = function(router){
	router.get('/', function(req, res){
		res.send('Auth Page');
	});

	router.get('/login', function(req, res){
		res.send('Login Page');
	});
        router.post('/login', function(req, res){
                res.send('Login');
        })
	router.get('/signup', function(req, res){
		res.send('SignUp Page');
	});
        router.post('/signup', function(req, res){
                res.send('SignUp');
        });
};
