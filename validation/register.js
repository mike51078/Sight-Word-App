const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Convert empty fields to an empty string
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.grade = !isEmpty(data.grade) ? data.grade : '';
	data.school = !isEmpty(data.school) ? data.school : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';

	// Validate name
	if (Validator.isEmpty(data.name)) {
		errors.name = 'Name is required';
	}

	// Validate email
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email address is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	// Password checks
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password is required';
	}
	if (Validator.isEmpty(data.password2)) {
		errors.password2 = 'Please confirm password';
	}
	if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
		errors.password = 'Password must be at least 6 characters';
	}
	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = 'Passwords must match';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
