import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import MovieListItem from './movie-list-item';

const MovieList = ({movies: {movies}}) => (
	<div>
		<ul>
			{movies.map(movie =>
				<MovieListItem key={movie.id} title={movie.title} id={movie.id}/>
			)}
			<li>
				<Link to={'/create'}>+</Link>
			</li>
		</ul>
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
