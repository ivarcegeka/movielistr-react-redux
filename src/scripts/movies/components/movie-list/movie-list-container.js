import { connect } from 'react-redux';
import MovieList from './movie-list';

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
};

const MovieListContainer = connect(mapStateToProps)(MovieList);

export default MovieListContainer;

