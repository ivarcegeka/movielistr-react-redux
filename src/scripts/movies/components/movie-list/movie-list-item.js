import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListItem = ({id, title}) => (
	<tr>
		<td>
			<Link to={'/movie/' + id}>{title}</Link>
		</td>
	</tr>
);

MovieListItem.propTypes = {
	title: PropTypes.string.isRequired
}

export default MovieListItem;
