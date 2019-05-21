const db = require('../models');
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

// Defining methods for the SightWordController
module.exports = {
	findAll: function(req, res) {
		db.sightWords.find().sightWords(req.query).then((dbSightWords) => res.json(dbSightWords));
	}
};
