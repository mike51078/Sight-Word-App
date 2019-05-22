import axios from 'axios';

export default {
	//Gets all sight words from DB
	getSightWords: function() {
		return axios.get('/api/SightWords/');
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
