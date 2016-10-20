import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';

var MovieForm = ({handleSubmit, initialValues}) => {

	const ratingOptions = [];
	for (var i = 0; i <= 10; i++) {
		ratingOptions.push(<option key={i} value={i}>{i}</option>);
	}

	return (
		<div className="movie-form">

			<Link className="back-to-list" to={'/'}>Back to the list</Link>

			<h1>
				{initialValues ? 'Update movie' : 'Add movie'}
			</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Title</label>
					<Field name="title" component="input" type="text" placeholder="Title" className="form-control"/>
				</div>
				<div className="form-group director-form-group">
					<label>Director</label>
					<Field name="director.firstName" component="input" type="text" placeholder="First Name"
						   className="form-control director-first-name-input"/>
					<Field name="director.lastName" component="input" type="text" placeholder="Last Name"
						   className="form-control"/>
				</div>
				<div className="form-group">
					<label>Rating</label>
					<Field name="rating" component="select" className="form-control">
						{ratingOptions}
					</Field>
				</div>
				<div className="form-group">
					<label>Duration</label>
					<Field name="duration" component="input" type="number" placeholder="Duration"
						   className="form-control"/>
				</div>
				<div className="form-group">
					<label>Year</label>
					<Field name="year" component="input" type="number" placeholder="Year" className="form-control"/>
				</div>
				<div className="form-group">
					<label>Seen</label>

					<div className="checkbox">
						<label>
							<Field name="seen" component="input" type="checkbox"/>
						</label>
					</div>
				</div>

				<button className="btn btn-default" type="submit">Submit</button>
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
