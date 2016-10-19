import {connect} from 'react-redux';
import MovieDetails from './movie-details';

const mapStateToProps = (state, ownProps) => {
	return {
		selectedMovie: state.movies.movies.find(movie => movie.id === ownProps.params.id)
	};
};

var MovieDetailsContainer = connect(mapStateToProps)(MovieDetails);

export default MovieDetailsContainer;

