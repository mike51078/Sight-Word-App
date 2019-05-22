const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');
const SightWords = require('./routes/api/SightWords');
const UserWords = require('./routes/api/UserWords');

const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;

// Middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Connect to DB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Successfully connected to DB'))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/SightWords', SightWords);
app.use('/api/UserWords', UserWords);

//Server Static assests if we're in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Server running on port ${port} !`));
