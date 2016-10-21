import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import MainLayout from './app/main-layout';
import MovieListContainer from './movies/components/movie-list/movie-list-container';
import MovieDetailsContainer from './movies/components/movie-details/movie-details-container';
import MovieUpdateFormContainer from './movies/components/movie-form/movie-update-form-container';
import MovieCreateFormContainer from './movies/components/movie-form/movie-create-form-container';
import {syncHistoryWithStore} from 'react-router-redux';
import MovieStore from './movielistr';

const history = syncHistoryWithStore(hashHistory, MovieStore);

const Routes = () => (
	<Router history={history}>
		<Route component={MainLayout}>
			<IndexRoute component={MovieListContainer}/>
			<Route path="/" component={MovieListContainer}/>
			<Route path="/movie/:id" component={MovieDetailsContainer}/>
			<Route path="/edit/:id" component={MovieUpdateFormContainer}/>
			<Route path="/create" component={MovieCreateFormContainer}/>
		</Route>
	</Router>
);

export default Routes;
