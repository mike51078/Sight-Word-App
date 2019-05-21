import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar2 from '../layout/Navbar2';

class TestResults extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
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
							<h4>Test Results Page</h4>
							<h4>{user.name.split(' ')[0]} please select one of the options below.</h4>
							<div className="col s6">
								<Link
									to="/questions"
									style={{
										width: '150px',
										borderRadius: '3px',
										letterSpacing: '1.5px'
									}}
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Questions
								</Link>
							</div>
							<div className="col s6">
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
			</div>
		);
	}
}

TestResults.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(TestResults);
