import {connect} from 'react-redux';
import MovieForm from './movie-form';
import {updateMovie} from '../../movies';
import {push} from 'react-router-redux';


const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: state.movies.movies.find(movie => movie.id === ownProps.params.id),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: movie => {
			dispatch(updateMovie(movie))
				.then((action) => {
					dispatch(push('/'));
				});
		}
	}
}

var MovieUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(MovieForm);

export default MovieUpdateFormContainer;


