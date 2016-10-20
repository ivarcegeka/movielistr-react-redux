import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {movies} from './movies/movie-reducer';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {hashHistory} from 'react-router';

export const movieListrApp = combineReducers({
	movies,
	form: formReducer,
	routing: routerReducer
});

const MovieStore = createStore(movieListrApp, applyMiddleware(thunk, routerMiddleware(hashHistory)))

export default MovieStore;