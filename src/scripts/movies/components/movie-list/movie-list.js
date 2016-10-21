import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import MovieListItem from './movie-list-item';

const MovieList = ({movies: {movies}}) => (
	<div className="movie-list">
		<h1>Movies</h1>
		<table className="table">
			<tbody>
			<tr>
				<th>Title</th>
				<th>Seen</th>
			</tr>
			{movies.map(movie =>
				<MovieListItem key={movie.id} title={movie.title} id={movie.id} seen={movie.seen}/>
			)}
			</tbody>
		</table>
		<Link to={'/create'}><i className="glyphicon glyphicon-plus"></i></Link>
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
};

export default MovieList;
