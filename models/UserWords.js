const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Schema
const UserWordsSchema = new Schema({
	listName: {
		type: String,
		required: true
	},
	word: {
		type: String,
		required: true
	}
});

module.exports = UserWords = mongoose.model('userWords', UserWordsSchema);
