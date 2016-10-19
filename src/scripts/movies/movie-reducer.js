import {REFRESH_MOVIES, MOVIES_API_ERROR, UPDATE_MOVIE, DELETE_MOVIE, CREATE_MOVIE, SELECT_MOVIE} from './movie-actions';

export const movies = (state = {movies: []}, action) => {
	switch (action.type) {
		case REFRESH_MOVIES :
			return Object.assign({}, state, {movies: action.movies});
		case MOVIES_API_ERROR:
			return Object.assign({}, state, {error: action.error});
		default:
			return state;
	}
}