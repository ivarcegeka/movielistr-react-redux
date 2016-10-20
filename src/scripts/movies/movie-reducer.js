import * as types from './movie-action-types';

export const movies = (state = {movies: []}, action) => {
	switch (action.type) {
		case types.REFRESH_MOVIES :
			return Object.assign({}, state, {movies: action.movies});
		case types.MOVIES_API_ERROR:
			return Object.assign({}, state, {error: action.error});
		default:
			return state;
	}
}