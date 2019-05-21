const path = require('path');
const router = require('express').Router();
const SightWordsRoutes = require('./sightWords');
const UserWordsRoutes = require('./userWords');

// Sight Words routes
router.use('/sightWords', SightWordsRoutes);

// User Words Routes
router.use('/userWords', UserWordsRoutes);

// For anything else, render the html page
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
