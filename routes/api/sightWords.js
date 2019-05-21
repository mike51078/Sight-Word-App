const router = require('express').Router();
const SightWordController = require('../../controllers/SightWordController');

// Matches with "/api/books"
router.route('/:sightWords').get(SightWordController.findAll);

module.exports = router;
