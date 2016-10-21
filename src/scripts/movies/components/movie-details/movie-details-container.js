import {connect} from 'react-redux';
import MovieDetails from './movie-details';
import {deleteMovie} from '../../movies';

const mapStateToProps = (state, ownProps) => {
	return {
		selectedMovie: state.movies.movies.find(movie => movie.id === ownProps.params.id)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteMovieFn: id => {
			dispatch(deleteMovie(id))
				.then(() => {
					dispatch(push('/'));
				});

		}
	}
}

var MovieDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

export default MovieDetailsContainer;

