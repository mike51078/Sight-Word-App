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

const UserWords = mongoose.model('UserWords', UserWordsSchema);
module.exports = UserWords;
