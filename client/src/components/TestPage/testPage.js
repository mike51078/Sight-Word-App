import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar2 from '../layout/Navbar2';
import Jumbotron from '../jumbotron/jumbotron';
import api from '../../utils/api';

class TestPage extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	state = {
		sightWords: [],
		section: '',
		userWords: [],
		listName: []
	};

	componentDidMount() {
		this.getSightWords();
	}

	getSightWords = () => {
		api
			.getSightWords()
			.then((res) =>
				this.setState({
					sightWords: res.data
				})
			)
			.catch((err) => console.log(err));
	};

	render() {
		const { user } = this.props.auth;
		return (
			<div>
				<header>
					<Navbar2 />
				</header>
				<div style={{ height: '75vh' }} className="container valign-wrapper">
					<div className="row">
						<div className="col s12 center-align">
							<h4>TestPage Page</h4>
							<h4>{user.name.split(' ')[0]} please choose an option from below.</h4>
							<div>
								<Link
									to="/TestPage"
									style={{
										width: '250px',
										borderRadius: '3px',
										letterSpacing: '1.5px'
									}}
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Go To Test
								</Link>
							</div>
							<button
								style={{
									width: '150px',
									borderRadius: '3px',
									letterSpacing: '1.5px',
									marginTop: '5rem'
								}}
								onClick={this.onLogoutClick}
								className="btn btn-large waves-effect waves-light hoverable blue accent-3"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

TestPage.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(TestPage);
