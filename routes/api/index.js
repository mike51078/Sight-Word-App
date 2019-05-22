const path = require('path');
const router = require('express').Router();
const SightWordsRoutes = require('./SightWords');
const UserWordsRoutes = require('./UserWords');

// Book routes
router.use('/SightWords', SightWordsRoutes);

// Google Routes
router.use('/UserWords', UserWordsRoutes);

// For anything else, render the html page
router.use((req, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')));

module.exports = router;
