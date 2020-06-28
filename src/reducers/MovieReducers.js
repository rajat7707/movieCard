import {GET_MOVIES, LOADING, GET_ERROR} from '../actions/ActionType' ;

const initialSytate = {
	data:[],
	payload : {},
	error : false,
	loading : false
}

const movieReducers = (state = initialSytate, action) => {
	

	switch (action.type){
		case GET_MOVIES :
			return {
				...state,
				data : action.data
			}

		case LOADING :
			return{
				...state,
				loading : true,
			}

		case GET_ERROR :
			return {
				...state,
				error: true
			}	
		default :
			return state;	
	}	
}

export default movieReducers ;