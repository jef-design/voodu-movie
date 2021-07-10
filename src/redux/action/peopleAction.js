import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';

const API_KEY = `5cffc0e248a2072bdedd8248f5d9f423`;



export const fetchPopularPeople = (page) =>{
   return async function(dispatch) {
      dispatch({
      type: ActionTypes.FETCH_IS_LOADING
      })
    const response = await axios.get(`person/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
   
    dispatch({type: ActionTypes.FETCH_POPULAR_PEOPLE,
        payload: response.data.results})
   dispatch({type: ActionTypes.FETCH_IS_SUCCESS
        })
   }

}


export const fetchPerson = (id) =>{
   return async function(dispatch) {
      dispatch({
         type: ActionTypes.FETCH_IS_LOADING
         })
    const response = await axios.get(`/person/${id}?api_key=${API_KEY}`)
   //  console.log(response.data.cast)
    dispatch({type: ActionTypes.FETCH_PEOPLE,
        payload: response.data})
        dispatch({type: ActionTypes.FETCH_IS_SUCCESS
        })
   }
   
}
export const fetchPersonMovies = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/person/${id}/movie_credits?api_key=${API_KEY}`)
    console.log(response.data.cast)
    dispatch({type: ActionTypes.FETCH_PEOPLE_MOVIES,
        payload: response.data.cast})
   }
   
}
export const fetchPersonTVShows= (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/person/${id}/tv_credits?api_key=${API_KEY}`)
    console.log(response.data.cast)
    dispatch({type: ActionTypes.FETCH_PEOPLE_TV,
        payload: response.data.cast})
   }
   
}
export const fetchPopularTvShow = () =>{
    return async function(dispatch) {
     const response = await axios.get(request.fetchPopularTvShow)
    //  console.log(response.data.results)
     dispatch({type: ActionTypes.FETCH_POPULAR_TVSHOWS,
         payload: response.data.results})
    }
 
 }