var localStartegy = require('passport-local').Strategy;

var User = require('./db.js');

module.exports = function(passport){
	passport.serializeUser(function(user, done){
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done){
		User.findOne({'_id' : id}, function(err, user){
			done(err, user);
		});
	});

	passport.use('SignUp', new localStartegy({
					usernameField: 'username',
					passwordField: 'password'
				},
			function(username, password, done){
				process.nextTick(function(){	
					User.findOne({'local.username': username}, function(err, user){
						if(err)
							return done(err);
						if(user)
							return done(null, false);
						else{
							var newuser = new User;
							newuser.local.username = username;
							newuser.local.password = password;

							newuser.save(function(err){
								if(err)
									return done(err);
								return done(null, newuser);
							});

						}
					});
				});
	}));
}
