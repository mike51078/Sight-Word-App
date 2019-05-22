import axios from 'axios';

export default {
	//Gets all sight words from DB
	getSightWords: function() {
		return axios.get('/api/SightWords/');
	},
	//Gets all user words from DB
	getUserWords: function(id) {
		return axios.get('/api/UserWords' + id);
	},
	// Saves user words to the database
	saveUserWords: function(UserWordsData) {
		return axios.post('/api/UserWords/', UserWordsData);
	},
	// Deletes the user words list with the given id
	deleteUserWords: function(id) {
		return axios.delete('/api/UserWords/' + id);
	}
};
