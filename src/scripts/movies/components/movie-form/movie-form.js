import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {validate} from './movie-form-validator';


const MovieForm = ({handleSubmit, initialValues, pristine, submitting, error, touched}) => {

	const ratingOptions = [];
	for (var i = 0; i <= 10; i++) {
		ratingOptions.push(<option key={i} value={i}>{i}</option>);
	}

	const renderFieldWithTitle = ({input, label, type, meta, className}) => (
		<div className="form-group">
			<label>{label}</label>
			{renderFieldWithoutTitle({input, label, type, meta, className})}
		</div>
	);

	const renderFieldWithoutTitle = ({input, label, type, meta: {touched, error}, className}) => (
		<div>
			<input {...input}
				   placeholder={label}
				   type={type}
				   className={className + ' ' + (type != 'checkbox' ? 'form-control' : '')}/>
			{error && touched && <div className="movie-form-error-msg">{error}</div>}
		</div>
	)

	return (
		<div className="movie-form">

			<Link className="back-to-list" to={'/'}>Back to the list</Link>

			<h1>{initialValues ? 'Update movie' : 'Add movie'}</h1>

			<form onSubmit={handleSubmit}>
				<Field name="title"
					   component={renderFieldWithTitle}
					   type="text"
					   label="Title"/>

				<div className="form-group director-form-group">
					<label>Director</label>
					<div className="firstName-field-container">
						<Field name="director.firstName"
							   component={renderFieldWithoutTitle}
							   type="text"
							   label="First name"
							   className="director-first-name-input"/>
					</div>
					<Field name="director.lastName"
						   component={renderFieldWithoutTitle}
						   type="text"
						   label="Last name"/>
				</div>
				<div className="form-group director-form-group">
					<label>Director</label>
					<Field name="rating"
						   component="select"
						   className="form-control"
						   label="Rating">
						{ratingOptions}
					</Field>
				</div>
				<Field name="duration"
					   component={renderFieldWithTitle}
					   type="number"
					   label="Duration"/>
				<Field name="year"
					   component={renderFieldWithTitle}
					   type="number"
					   label="Year"/>
				<Field name="seen"
					   component={renderFieldWithTitle}
					   type="checkbox"
					   label="Seen"/>
				<button className="btn btn-default"
						type="submit"
						disabled={pristine || submitting}>
					Submit
				</button>
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

export default reduxForm({
	form: 'movie-form',
	validate
})(MovieForm);