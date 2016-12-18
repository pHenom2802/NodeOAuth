module.exports = function(router, passport){
	router.get('/', function(req, res){
		res.send('Auth Page');
	});

	router.get('/login', function(req, res){
		res.send('Login Page');
	});

        router.post('/login', passport.authenticate('Login', {
                successRedirect: '/',
                failureRedirect: '/auth/login'
        }));

	router.get('/signup', function(req, res){
                res.send('SignUp');
	});

        router.post('/signup', passport.authenticate('SignUp', {
                successRedirect: '/auth/login',
                failureRedirect: '/auth/signup'
        }));
};
