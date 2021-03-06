import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';

const API_KEY = process.env.REACT_APP_API_KEY


export const fetchTopRatedMovies = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchTopRatedMovies)
   //  console.log(response.data.results)
    dispatch({type: ActionTypes.FETCH_TOPRATED_MOVIES,
        payload: response.data.results})
   }

}

export const fetchNowPlayingMovies = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchNowPlayingMovies)
   //  console.log(response.data.results)
    dispatch({type: ActionTypes.FETCH_NOWPLAYING_MOVIES,
        payload: response.data.results})
   }

}
export const fetchPopularMovies = () =>{
   return async function(dispatch) {
    try {
      dispatch({
         type: ActionTypes.FETCH_IS_LOADING
       });
      const response = await axios.get(request.fetchPopularMovies)
      //  console.log(response.data.results)
       dispatch({type: ActionTypes.FETCH_POPULAR_MOVIES,
           payload: response.data.results})
      dispatch({
            type: ActionTypes.FETCH_IS_SUCCESS
          });
    } catch (error) {
       
    }
   }

}
export const fetchUpComingMovies = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchUpComingMovies)
    dispatch({type: ActionTypes.FETCH_UPCOMING_MOVIES,
        payload: response.data.results})
   }

}
export const fetchPopularTvShow = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchPopularTvShow)
    dispatch({type: ActionTypes.FETCH_POPULAR_TVSHOWS,
        payload: response.data.results})
   }

}


export const fetchSimilarMovies = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
   
    dispatch({type: ActionTypes.FETCH_SIMILAR_MOVIES,
        payload: response.data.results})
   }

}

export const fetchMovieTrailer = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
   //  console.log(response.data.results)
    dispatch({type: ActionTypes.FETCH_MOVIE_TRAILER,
        payload: response.data.results})
   }
   
}
export const fetchCast = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_CAST,
        payload: response.data.cast})
   }
   
}


export const searchedText = (text) =>{
   return{
       type: ActionTypes.SEARCHED_TEXT,
       payload: text
   }
}
export const removedSearchedText = () =>{
   return{
       type: ActionTypes.REMOVE_SEARCHED_TEXT,
       
   }
}
export const searchedMovie = (searchedmovie) =>{
    return{
      type: ActionTypes.SEARCHED_MOVIE,
      payload: searchedmovie
  }
 
 }