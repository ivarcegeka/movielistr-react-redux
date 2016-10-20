import MovieSource from './movie-source';
import * as types from './movie-action-types';

// Action creators

export const refreshMovies = (movies) => {
	return {
		type: types.REFRESH_MOVIES,
		movies
	}
};

export const handleError = (error) => {
	return {
		type: types.MOVIES_API_ERROR,
		error
	}
};

// Thunks

export const fetchMovies = () => {
	return dispatch => {
		return MovieSource
			.getMovies()
			.then(
				(response) => {
					return response.json();
				},
				error => dispatch(handleError(error))
			)
			.then(
				(movies) => {
					return dispatch(refreshMovies(movies))
				},
				error => dispatch(handleError(error))
			);
	}
};

export const updateMovie = (movie) => {
	return dispatch => {
		return MovieSource
			.updateMovie(movie)
			.then(
				(response) => {
					console.log('2' + JSON.stringify(dispatch));
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};

export const deleteMovie = (id) => {
	return dispatch => {
		return MovieSource
			.deleteMovie(id)
			.then(
				response => {
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};

export const createMovie = (movie) => {
	return dispatch => {
		return MovieSource
			.createMovie(movie)
			.then(
				response => {
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};