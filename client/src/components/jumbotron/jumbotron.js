import React from 'react';
import './jumbotron.css';

function Jumbotron({ children }) {
	return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
