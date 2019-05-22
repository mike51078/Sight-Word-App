const router = require('express').Router();
const UserWordsController = require('../../controllers/UserWordsController');

router.route('/').get(UserWordsController.findAll).post(UserWordsController.update);

router
	.route('/:id')
	.get(UserWordsController.findById)
	.put(UserWordsController.update)
	.delete(UserWordsController.remove);

module.exports = router;
