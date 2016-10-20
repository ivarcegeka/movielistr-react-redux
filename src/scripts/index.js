// CSS
import '../assets/movielistr.scss';
// JS
import React from 'react';
import {render} from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import MovieStore from './movielistr';
import {fetchMovies} from './movies/movie-actions';


class App extends React.Component {
	render() {
		return (
			<Provider store={MovieStore}>
				<Routes />
			</Provider>
		)
	}
}

MovieStore.dispatch(fetchMovies()).then(() => {
	render(
		<App/>,
		document.getElementById("content")
	);
});
