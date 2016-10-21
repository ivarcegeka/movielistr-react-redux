import {validate} from './movie-form-validator';
import expect from 'expect';

describe('movie-validator: ', () => {

	it('title is required', () => {
		let movie = {
			title: ''
		};

		var errors = validate(movie);

		expect(errors.title).toEqual('Title is required.');
	});

	it('Director first name is required', () => {
		let movie = {
			director: {
				firstName: ''
			}
		};

		var errors = validate(movie);

		expect(errors.director.firstName).toEqual('First name is required.');
	});

	it('Director last name is required', () => {

		let movie = {
			director: {
				lastName: ''
			}
		};

		var errors = validate(movie);

		expect(errors.director.lastName).toEqual('Last name is required.');
	});

});