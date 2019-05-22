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

const SightWords = mongoose.model('sightWords', SightWordsSchema);
module.exports = SightWords;
