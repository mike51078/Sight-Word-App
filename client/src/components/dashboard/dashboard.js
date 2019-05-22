import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import Navbar2 from '../layout/Navbar2';
import './style.css';

class Dashboard extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		return (
			<div className="main">
				<header>
					<Navbar2 />
				</header>
				<div style={{ height: '75vh' }} className="container valign-wrapper">
					<div className="row">
						<div className="col s12 center-align">
							<h4>
								<b>Welcome </b> {user.name.split(' ')[0]}
								<p className="flow-text grey-text text-darken-1">Click on a button to begin!</p>
							</h4>
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
								<Link
									to="/results"
									style={{
										width: '150px',
										borderRadius: '3px',
										letterSpacing: '1.5px'
									}}
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Results
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
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
