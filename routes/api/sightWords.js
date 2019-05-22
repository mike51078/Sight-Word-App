const router = require('express').Router();
const SightWordsController = require('../../controllers/sightWordsController');

router.route('/').get(SightWordsController.findAll);

module.exports = router;
