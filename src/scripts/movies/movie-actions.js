import MovieSource from './movie-source';

// Action names

export const REFRESH_MOVIES = 'REFRESH_MOVIES';
export const MOVIES_API_ERROR = 'MOVIES_API_ERROR';
export const SELECT_MOVIE = 'SELECT_MOVIE';

// Action creators

export const refreshMovies = (movies) => {
	return {
		type: REFRESH_MOVIES,
		movies
	}
};

export const handleError = (error) => {
	return {
		type: MOVIES_API_ERROR,
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
					dispatch(refreshMovies(movies))
				},
				error => handleError(error)
			);
	}
};

export const updateMovie = (movie) => {
	return dispatch => {
		return MovieSource
			.updateMovie(movie)
			.then(
				(response) => {
					dispatch(fetchMovies());
				},
				error => handleError(error)
			);
	};
};

export const deleteMovie = (id) => {
	return dispatch => {
		return MovieSource
			.deleteMovie(id)
			.then(
				response => {
					dispatch(fetchMovies());
				},
				error => handleError(error)
			);
	};
};

export const createMovie = (movie) => {
	return dispatch => {
		return MovieSource
			.createMovie(movie)
			.then(
				response => {
					dispatch(fetchMovies());
				},
				error => handleError(error)
			);
	};
};