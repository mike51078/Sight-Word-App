const db = require('../models');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Defining methods for the User Words Controller

module.exports = {
	find: function(req, res) {
		db.UserWords.find({ _id: req.params.id }).then(function(UserWords) {
			res.json(UserWords);
		});
	},
	create: function(req, res) {
		db.UserWords
			.create(req.body)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.UserWords
			.findOneAndUpdate({ _id: req.body.UserWords.listId }, req.body)
			.then((dbUserWords) => res.json(dbUserWords))
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.UserWords.remove({ _id: req.params.id }).then(function(dbUserWords) {
			res.json(dbUserWords);
		});
	}
};
