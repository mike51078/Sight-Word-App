const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	Date: {
		type: String,
		default: Date.now
	}
});
module.exports = User = mongoose.model('User', UserSchema);
