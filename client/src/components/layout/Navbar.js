import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed" pad>
				<nav className="z-depth-0">
					<div className="nav-wrapper white">
						<p className="col s5 brand-logo center black-text">
							<i className="material-icons">child_care</i>
							speakEASY
						</p>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
