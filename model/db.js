var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String,
		name: String,
		email: String,
		regId: Number
	}
});

module.exports = mongoose.model('User', userSchema);
