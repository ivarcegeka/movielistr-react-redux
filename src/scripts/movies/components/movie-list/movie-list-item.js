import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListItem = ({id, title, seen}) => (
	<tr>
		<td>
			<Link to={'/movie/' + id}>{title}</Link>
		</td>
		<td>
			<i className={'glyphicon ' + (seen ? 'glyphicon-ok' : 'glyphicon glyphicon-remove')}></i>
		</td>
	</tr>
);

MovieListItem.propTypes = {
	title: PropTypes.string.isRequired
}

export default MovieListItem;
