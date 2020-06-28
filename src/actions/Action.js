import axios from 'axios';
import {GET_MOVIES} from './ActionType' ;
import URL from '../components/commonComponent/GlobalUrl';

const asyncGetMovies = (data) => {
	return {
		data : data,
		error : false,
		type : GET_MOVIES,
	}
}

export const getMovies = (query, limit, page) => {
	return async dispatch => {
		let result = await axios.get(`${URL}/anime?q=${query}&limit=${limit}&page=${page}`);
		console.log(result);
		if(result.status === 200){
			dispatch(asyncGetMovies(result.data.results));
		}
	}
}
