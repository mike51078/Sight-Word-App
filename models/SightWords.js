const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Schema
const SightWordsSchema = new Schema({
	word: {
		type: String,
		required: true
	},
	section: {
		type: String,
		required: true
	}
});
module.exports = SightWords = mongoose.model('users', SightWordsSchema);
