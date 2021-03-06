import {connect} from 'react-redux';
import MovieForm from './movie-form';
import {createMovie} from '../../movies';
import {push} from 'react-router-redux';


const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: movie => {
			return dispatch(createMovie(movie))
				.then((action) => {
					dispatch(push('/'));
				});
		}
	}
}

var MovieCreateFormContainer = connect(null, mapDispatchToProps)(MovieForm);

export default MovieCreateFormContainer;


