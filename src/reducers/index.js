import { combineReducers } from 'redux' ;
import movieReducer from './MovieReducers';

const rootReducers = combineReducers( {
	Movie : movieReducer,
});

export default rootReducers ;
