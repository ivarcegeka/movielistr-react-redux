import {connect} from 'react-redux';
import MovieForm from './movie-form';
import {createMovie} from '../../movies';
import {push} from 'react-router-redux';


const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: movie => {
			dispatch(createMovie(movie))
				.then((action) => {
					dispatch(push('/movie/' + movie.id));
				});
		}
	}
}

var MovieCreateFormContainer = connect(null, mapDispatchToProps)(MovieForm);

export default MovieCreateFormContainer;


