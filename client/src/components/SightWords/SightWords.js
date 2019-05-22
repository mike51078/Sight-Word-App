import React from 'react';
import { ListItem } from '../List/List';
import { Row, Col } from '../Grid/grid';
import './style.css';

function SightWords({ words }) {
	return (
		<ListItem>
			<Row className="flex-wrap-reverse">
				<Col size="md-8">
					<h3 className="font-italic">{words}</h3>
				</Col>
			</Row>
		</ListItem>
	);
}

export default SightWords;
