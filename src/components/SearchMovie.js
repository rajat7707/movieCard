import React from 'react';
import {  useDispatch } from 'react-redux';
import { getMovies } from '../actions/Action';

const SearchMovie = (props) => {

	let { urlData, setUrlData } = props ;
	const dispatch = useDispatch();

	const searchMovie =  (e) => {
		e.preventDefault();
		dispatch(getMovies(urlData.search, urlData.limit, urlData.pageNo));
		setUrlData({search : ""});
	}

	const clearSearch = () => {
		dispatch(getMovies(urlData.query, urlData.limit, urlData.pageNo));
		setUrlData({search : ""});
	}

	return(
		<form className="form-inline" onSubmit = {searchMovie}>
		  <div className="form-group mx-sm-3 mb-2">
		    <input type="text" className="form-control" value={urlData.search} onChange={(e) => setUrlData({search : e.target.value})} placeholder="Search Movie..." style = {{width: "617px", marginRight: "25px"}} />
		  </div>
		  <button type="submit" className="btn btn-primary mb-2">Search</button>&nbsp;&nbsp;
		  <button type="button" onClick = {clearSearch} className="btn btn-danger mb-2">Reset</button>
		</form>
	)
}

export default SearchMovie ;