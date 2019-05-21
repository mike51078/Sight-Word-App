const axios = require('axios');
const db = require('../models');

// Defining methods for the dbController

module.exports = {
	q1: function(req, res) {
		db.sightWords.findAll({
			where: {
				section: '1'
			}
		});
	}
		.then((results) => res.status(200).json(results))
		.catch((err) => res.status(422).json(err))
};
