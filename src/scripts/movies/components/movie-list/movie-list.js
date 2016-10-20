import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import MovieListItem from './movie-list-item';

const MovieList = ({movies: {movies}}) => (
	<div className="movie-list">
		<h1>Movies</h1>
		<table className="table">
			<tbody>
			{movies.map(movie =>
				<MovieListItem key={movie.id} title={movie.title} id={movie.id}/>
			)}
			<tr>
				<td><Link to={'/create'}>+</Link></td>
			</tr>
			</tbody>
		</table>
	</div>
);

MovieList.propTypes = {
	movies: PropTypes.shape({
		movies: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				director: PropTypes.shape({
					firstName: PropTypes.string.isRequired,
					lastName: PropTypes.string.isRequired
				}).isRequired,
				rating: PropTypes.number,
				duration: PropTypes.number.isRequired,
				year: PropTypes.number.isRequired,
				seen: PropTypes.bool.isRequired
			}).isRequired)
			.isRequired
	}).isRequired
}
;

export default MovieList;
