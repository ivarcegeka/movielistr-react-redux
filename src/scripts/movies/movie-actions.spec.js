import * as actions from './movie-actions';
import * as types from './movie-action-types';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
const ERROR = {'message': 'Something went wrong', 'code': 'AWFUL_ERROR'};
const HOST = 'http://localhost:8091';
const BASE_PATH = '/application/movies';

describe('actions', () => {

	afterEach(() => {
		nock.cleanAll();
	});

	it('should create an action to refresh movies', () => {
		const movies = [{title: 'Lotr'}];
		const expectedAction = {
			type: types.REFRESH_MOVIES,
			movies
		}

		expect(actions.refreshMovies(movies)).toEqual(expectedAction);
	});

	it('should create an action to handle errors', () => {
		const expectedAction = {
			type: types.MOVIES_API_ERROR,
			error: ERROR
		}

		expect(actions.handleError(ERROR)).toEqual(expectedAction);
	});

	it('should fetch Movies and then call refreshMovies with the result', () => {

		nock('http://localhost:8091')
			.get('/application/movies')
			.reply(200, [MOVIE]);

		const expectedActions = [
			{type: types.REFRESH_MOVIES, movies: [MOVIE]}
		];

		const store = mockStore({movies: []});

		return store.dispatch(actions.fetchMovies())
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should fetch Movies and then call handle api error action when request fails', () => {
		nock('http://localhost:8091')
			.get('/application/movies')
			.replyWithError(ERROR);

		const store = mockStore({movies: []});

		return store.dispatch(actions.fetchMovies())
			.then(() => {
				const action = store.getActions()[0];
				expect(action.type).toEqual(types.MOVIES_API_ERROR);
				expect(action.error).toExist();
			});
	});

	it('should fetch Movies and then call refreshMovies with the result', () => {

		nock('http://localhost:8091')
			.get('/application/movies')
			.reply(200, [MOVIE]);

		const expectedActions = [
			{type: types.REFRESH_MOVIES, movies: [MOVIE]}
		];

		const store = mockStore({movies: []});

		return store.dispatch(actions.fetchMovies())
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should fetch Movies and then call api error actions when the request fails', () => {

		nock('http://localhost:8091')
			.get('/application/movies')
			.replyWithError(ERROR);

		const store = mockStore({movies: []});

		return store.dispatch(actions.fetchMovies())
			.then(() => {
				const action = store.getActions()[0];
				expect(action.type).toEqual(types.MOVIES_API_ERROR);
				expect(action.error).toExist();
			});
	});

	it('should update movie and then call fetchMovies and then call refreshMovies with the result', () => {

		nock(HOST)
			.get(BASE_PATH)
			.reply(200, [MOVIE]);

		nock(HOST)
			.put(BASE_PATH + '/' + MOVIE.id, JSON.stringify(MOVIE))
			.reply(200);

		const expectedActions = [{type: types.REFRESH_MOVIES, movies: [MOVIE]}];

		const store = mockStore({movies: []});

		return store.dispatch(actions.updateMovie(MOVIE))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should update movie and then call api error when the request fails', () => {

		nock(HOST)
			.put(BASE_PATH + '/' + MOVIE.id, JSON.stringify(MOVIE))
			.replyWithError(ERROR);

		const store = mockStore({movies: []});

		return store.dispatch(actions.updateMovie(MOVIE))
			.then(() => {
				const action = store.getActions()[0];
				expect(action.type).toEqual(types.MOVIES_API_ERROR);
				expect(action.error).toExist();
			});
	});

	it('should delete movie and then call fetchMovies and then call refreshMovies with the result', () => {

		nock(HOST)
			.get(BASE_PATH)
			.reply(200, []);

		nock(HOST)
			.delete(BASE_PATH + '/' + MOVIE.id)
			.reply(200);

		const expectedActions = [{type: types.REFRESH_MOVIES, movies: []}];

		const store = mockStore({movies: []});

		return store.dispatch(actions.deleteMovie(MOVIE.id))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should delete movie and then call fetchMovies and then call refreshMovies with the result', () => {

		nock(HOST)
			.delete(BASE_PATH + '/' + MOVIE.id)
			.replyWithError(ERROR);

		const store = mockStore({movies: []});

		return store.dispatch(actions.deleteMovie(MOVIE.id))
			.then(() => {
				const action = store.getActions()[0];
				expect(action.type).toEqual(types.MOVIES_API_ERROR);
				expect(action.error).toExist();
			});
	});

	it('should create movie and then call fetchMovies and then call refreshMovies with the result', () => {

		nock(HOST)
			.get(BASE_PATH)
			.reply(200, [MOVIE]);

		nock(HOST)
			.post(BASE_PATH, JSON.stringify(MOVIE))
			.reply(200);

		const expectedActions = [{type: types.REFRESH_MOVIES, movies: [MOVIE]}];

		const store = mockStore({movies: []});

		return store.dispatch(actions.createMovie(MOVIE))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it('should create movie and then call api error action when the request fails', () => {

		nock(HOST)
			.post(BASE_PATH, JSON.stringify(MOVIE))
			.replyWithError(ERROR);

		const store = mockStore({movies: []});

		return store.dispatch(actions.createMovie(MOVIE))
			.then(() => {
				const action = store.getActions()[0];
				expect(action.type).toEqual(types.MOVIES_API_ERROR);
				expect(action.error).toExist();
			});
	});

});