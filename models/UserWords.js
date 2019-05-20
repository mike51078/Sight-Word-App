const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Schema
const UserWordsSchema = new Schema({
	word: {
		type: String,
		required: true
	},
	section: {
		type: String,
		required: true
	}
});
module.exports = UserWords = mongoose.model('users', UserWordsSchema);