import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';

var MovieForm = ({handleSubmit}) => {

	const ratingOptions = [];
	for (var i = 0; i <= 10; i++) {
		ratingOptions.push(<option key={i} value={i}>{i}</option>);
	}

	return (
		<div className="movie-form">
			<form onSubmit={handleSubmit}>
				<table>
					<tbody>
					<tr>
						<td>Title:</td>
						<td><Field name="title" component="input" type="text" placeholder="Title"/>
						</td>
					</tr>
					<tr>
						<td>Director:</td>
						<td>
							<Field name="director.firstName" component="input" type="text" placeholder="First Name"/>
							<Field name="director.lastName" component="input" type="text" placeholder="Last Name"/>
						</td>
					</tr>
					<tr>
						<td>Rating:</td>
						<td>
							<Field name="rating" component="select">
								{ratingOptions}
							</Field>
						</td>
					</tr>
					<tr>
						<td>Duration:</td>
						<td><Field name="duration" component="input" type="number" placeholder="Duration"/></td>
					</tr>
					<tr>
						<td>Year:</td>
						<td><Field name="year" component="input" type="number" placeholder="Year"/></td>
					</tr>
					<tr>
						<td>Seen:</td>
						<td>
							<Field name="seen" component="input" type="checkbox"/>
						</td>
					</tr>
					</tbody>
				</table>

				<button type="submit">Submit</button>
			</form>
		</div>
	)
};

MovieForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	movie: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		director: PropTypes.shape({
			firstName: PropTypes.string,
			lastName: PropTypes.string
		}).isRequired,
		rating: PropTypes.number,
		duration: PropTypes.number,
		year: PropTypes.number,
		seen: PropTypes.bool
	})
};

MovieForm = reduxForm({
	form: 'movie-form'
})(MovieForm);

export default MovieForm;
