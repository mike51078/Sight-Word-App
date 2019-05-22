const db = require('../models');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Defining methods for the SightWordController

module.exports = {
	findAll: function(req, res) {
		db.SightWords
			.find(req.query)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.SightWords
			.find(req.query)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		db.SightWords
			.create(req.body)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.SightWords
			.findOneAndUpdate({ _id: req.body.SightWords.listId }, req.body)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.SightWords
			.remove({ _id: req.params.id })
			.then((dbSightWords) => dbSightWords.remove())
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	}
};
