var db = require('../models');
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Defining methods for the User Words Controller

module.exports = {
	find: function(req, res) {
		db.userWords.find({ _id: req.params.id }).then(function(userWords) {
			res.json(userWords);
		});
	},
	create: function(req, res) {
		db.userWords
			.create(req.body)
			.then((dbuserWords) => res.json(dbuserWords))
			.catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.userWords
			.findOneAndUpdate({ _id: req.body.userWords.listId }, req.body)
			.then((dbuserWords) => res.json(dbuserWords))
			.catch((err) => res.status(422).json(err));
		console.log(req.body);
	},
	remove: function(req, res) {
		db.userWords.remove({ _id: req.params.id }).then(function(dbuserWords) {
			res.json(dbuserWords);
		});
	}
};
