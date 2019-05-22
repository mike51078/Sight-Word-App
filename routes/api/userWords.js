const router = require('express').Router();
const UserWordsController = require('../../controllers/UserWordsController');

router.route('/').post(UserWordsController.update);
router.route('/:id').get(UserWordsController.find);
router.post('/:id', UserWordsController.update);
router.delete('/:id', UserWordsController.remove);

module.exports = router;
