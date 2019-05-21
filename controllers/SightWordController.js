const db = require('../models');

// Defining methods for the SightWordController
module.exports = {
	findAll: function(req, res) {
		db.test
			.users(req.query)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.test
			.findById(req.params.id)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},

	create: function(req, res) {
		db.test
			.create(req.body)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	},

	update: function(req, res) {
		db.test
			.findOneAndUpdate({ id: req.params.id }, req.body)
			.then((dbSightWords) => res.json(dbSightWords))
			.catch((err) => res.status(422).json(err));
	}
};
