import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<span>This is the about section.</span>
				<Link to="/">Movies</Link>
			</div>
		);
	}

}

export default About;
