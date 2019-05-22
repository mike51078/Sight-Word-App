import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Questions from './components/questions/questions';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import Results from './components/results/results';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import TestPage from './components/TestPage/TestPage';
import TestResults from './components/TestResults/testResults';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds

	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = './login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Route exact path="/" component={Landing} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute exact path="/questions" component={Questions} />
							<PrivateRoute exact path="/results" component={Results} />
							<PrivateRoute exact path="/contact" component={Contact} />
							<PrivateRoute exact path="/about" component={About} />
							<PrivateRoute exact path="/TestPage" component={TestPage} />
							<PrivateRoute exact path="/testResults" component={TestResults} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
