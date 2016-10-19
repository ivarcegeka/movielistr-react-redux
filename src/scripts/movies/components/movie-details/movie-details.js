import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieDetails = ({selectedMovie = {director: {}}}) => (
	<div className="movie-details">
		<Link to="/">Back to the list</Link>
		<Link to={'/edit/' + selectedMovie.id}>Edit</Link>
		<h1>{selectedMovie.title}</h1>
		<table>
			<tbody>
			<tr>
				<td>Director:</td>
				<td>{selectedMovie.director.firstName} {selectedMovie.director.lastName}</td>
			</tr>
			<tr>
				<td>Rating:</td>
				<td>{selectedMovie.rating}</td>
			</tr>
			<tr>
				<td>Duration:</td>
				<td>{selectedMovie.duration}</td>
			</tr>
			<tr>
				<td>Year:</td>
				<td>{selectedMovie.year}</td>
			</tr>
			<tr>
				<td>Seen:</td>
				<td>{selectedMovie.seen ? 'Yes' : 'No'}</td>
			</tr>
			</tbody>
		</table>
	</div>
);

MovieDetails.propTypes = {
	selectedMovie: PropTypes.shape({
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
	})
};

export default MovieDetails;