const express = require('express');
const Router = express.Router();
let SightWords = require('../../models/SightWords');

router.route('/').get(function(req, res) {
	sightWords.find(function(err, sightWords) {
		if (err) {
			console.log(err);
		} else {
			res.json(sightWords);
		}
	});
});

module.exports = Router;
