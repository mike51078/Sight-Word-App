import React from 'react';

function Card({ children }) {
	return (
		<div className="card mt-4">
			<div className="card-header">
				<h3>
					<strong>{children}</strong>
				</h3>
			</div>
		</div>
	);
}

export default Card;
