import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar2.css';

class Navbar2 extends Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav className="z-depth-0">
					<div className="nav-wrapper white">
						<Link
							to="/"
							style={{
								fontFamily: 'monospace'
							}}
							className="col s5 brand-logo left black-text"
							id="navbar2"
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
export default Navbar2;
