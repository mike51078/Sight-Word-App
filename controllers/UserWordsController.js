const db = require('../models');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Defining methods for the User Words Controller

module.exports = {
	findAll: function(req, res) {
		db.UserWords
			.find(req.query)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.UserWords
			.find({ _id: req.params.id })
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},

	create: function(req, res) {
		db.UserWords
			.create(req.body)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},

	update: function(req, res) {
		db.UserWords
			.findOneAndUpdate({ id: req.params.id }, req.body)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},

	remove: function(req, res) {
		db.UserWords
			.remove(req.params.id)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	}
};
