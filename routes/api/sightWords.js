const express = require('express');
const Router = express.Router();
let SightWords = require('../../models/SightWords');
const sightWordsController = require('../../controllers/sightWordsController');

router.route('/:id').get(sightWordsController.find);

module.exports = Router;
