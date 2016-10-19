import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListItem = ({id, title}) => (
	<li>
		<Link to={'/movie/' + id} >{title}</Link>
	</li>
);

MovieListItem.propTypes = {
	title: PropTypes.string.isRequired
}

export default MovieListItem;
