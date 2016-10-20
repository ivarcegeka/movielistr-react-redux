import '../assets/movielistr.scss';

import React from 'react';
import {render} from 'react-dom';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import MainLayout from './main/main-layout';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {movies} from './movies/movie-reducer';
import MovieListContainer from './movies/components/movie-list/movie-list-container';
import MovieDetailsContainer from './movies/components/movie-details/movie-details-container';
import MovieUpdateFormContainer from './movies/components/movie-form/movie-update-form-container';
import MovieCreateFormContainer from './movies/components/movie-form/movie-create-form-container';
import {fetchMovies} from './movies/movie-actions';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

let movieListrApp = combineReducers({
	movies,
	form: formReducer,
	routing: routerReducer
});
let movieStore = createStore(movieListrApp, applyMiddleware(thunk, routerMiddleware(hashHistory)));
movieStore.dispatch(fetchMovies());

const history = syncHistoryWithStore(hashHistory, movieStore);

class App extends React.Component {
	render() {
		return (
			<Provider store={movieStore}>
				<Router history={history}>
					<Route component={MainLayout}>
						<IndexRoute component={MovieListContainer}/>
						<Route path="/" component={MovieListContainer}/>
						<Route path="/movie/:id" component={MovieDetailsContainer}/>
						<Route path="/edit/:id" component={MovieUpdateFormContainer}/>
						<Route path="/create" component={MovieCreateFormContainer}/>
					</Route>
				</Router>
			</Provider>
		)
	}
}


render(
	<App/>,
	document.getElementById("content")
);
