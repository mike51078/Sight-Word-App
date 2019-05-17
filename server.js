const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Require keys and config DB
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Successfully connected to DB'))
	.catch((err) => console.log(err));
const port = process.env.PORT || 5000;
// process.env.port is Heroku's port

app.listen(port, () => console.log(`Server running on port ${port} !`));
