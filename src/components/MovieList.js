import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../actions/Action';
import SearchMovie from './SearchMovie';

const MovieList = () => {

	let { data } = useSelector( state => state.Movie );
	const dispatch = useDispatch();
	const [ urlData, setUrlData ] = useReducer(
		(state ,newState) => ({...state, ...newState}),
		{
			limit  : 12,
			pageNo : 1,
			query  : "all",
			search : ""
		}
	);
	
	const getMoviesList = () => {
		dispatch(getMovies(urlData.query, urlData.limit, urlData.pageNo));
		
	}
	
	useEffect( () => {
		getMoviesList();
		console.log(urlData.pageNo);
	},[urlData.pageNo]);

	const loadNext = () => {
		setUrlData( { pageNo : urlData.pageNo + 1});
	}

	const loadPrevious = () => {
		setUrlData( { pageNo : urlData.pageNo - 1});
	}


	let movieData = data.map( (val) => {
		return (
			  <div className="col-xs-6 col-md-6" key = {val.mal_id}>
			  	<h4 style = {{color:"#1e7e34"}}>{val.title}</h4>
			  	<img src = {val.image_url} className="img-responsive image" alt="Movie"  />
			  	<p style = {{marginTop: "22px"}}>
			  		{val.synopsis}
			  	</p>
			  	<br/>
			  </div>	
		)
	});

	if(data.length <= 0){
		return <h1>Loading...</h1>
	}

	return (
		<>
			<h1 className = "heading">Movies Listing</h1>
			<SearchMovie urlData = {urlData} setUrlData = {setUrlData} />
			<div className = "row">
				{movieData}
			</div>
			<div>
				<button type="button" onClick = {loadPrevious} className="btn btn-success mb-2">Previous</button>&nbsp;
				<button type="button" onClick = {loadNext} className="btn btn-success mb-2">Next</button>
			</div>
		</>
	)
}

export default  MovieList ;