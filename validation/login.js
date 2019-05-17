const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLoginInput(data) {
	let errors = {};

	// Convert empty fields to an empty string
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	// Validate email
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Valid email is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is not valid';
	}

	// Validate password
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Valid password is required';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
