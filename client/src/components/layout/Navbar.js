import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link
							to="/"
							style={{
								fontFamily: 'monospace'
							}}
							className="col s5 brand-logo left black-text"
						>
							<i className="material-icons">child_care</i>
							speakEASY
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
