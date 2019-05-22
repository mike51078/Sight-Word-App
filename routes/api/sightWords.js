const router = require('express').Router();
const SightWordsController = require('../../controllers/sightWordsController');

router.route('/').post(SightWordsController.update);
router.route('/:id').get(SightWordsController.find);
router.post('/:id', SightWordsController.update);
router.delete('/:id', SightWordsController.remove);

module.exports = router;
