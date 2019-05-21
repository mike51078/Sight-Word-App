const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/api/users');
const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;
// const routes = require('./routes');

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

app.listen(port, () => console.log(`Server running on port ${port} !`));
