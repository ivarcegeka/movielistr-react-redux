import {movies} from './movie-reducer';
import * as actions from './movie-actions';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const MOVIE = {
	title: 'title',
	duration: 100,
	director: {
		firstName: 'Hank',
		lastName: 'Hill'
	},
	id: 'ikbeneenid',
	rating: 8,
	seen: true
};

const MOVIE_2 = {
	title: 'title2',
	duration: 200,
	director: {
		firstName: 'John',
		lastName: 'Redcorn'
	},
	id: 'andereid',
	rating: 6,
	seen: false
};


describe('movie-reducer', () => {

	it('refreshMovies action will return a new state with the given movies', () => {

		const moviesArg = [MOVIE];
		var action = actions.refreshMovies(moviesArg);
		const newState = movies(undefined, action);

		expect(newState.movies).toEqual(moviesArg);
	});

	it('refreshMovies action will return a new state with the given movies', () => {

		const oldState = {movies: [MOVIE]}

		deepFreeze(oldState);

		const moviesArg = [MOVIE_2];
		var action = actions.refreshMovies(moviesArg);
		const newState = movies(oldState, action);

		expect(newState.movies).toEqual(moviesArg);
	});

	it('puts error object on state when API ERROR action is called', () => {

		const error = {message: 'error message'};
		var action = actions.handleError(error);
		const newState = movies(undefined, action);

		expect(newState.movies).toEqual([]);
		expect(newState.error).toEqual(error);
	});

});