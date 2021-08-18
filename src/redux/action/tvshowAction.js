import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';

const API_KEY = process.env.REACT_APP_API_KEY


export const fetchAiringToday = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchAiringToday)
   //  console.log(response.data.results)
    dispatch({type: ActionTypes.FETCH_AIRING_TODAY,
        payload: response.data.results})
   }

}
export const fetchOnTV = () =>{
    return async function(dispatch) {
     const response = await axios.get(request.fetchOnTV)
    //  console.log(response.data.results)
     dispatch({type: ActionTypes.FETCH_ON_TV,
         payload: response.data.results})
    }
 
 }
 export const fetchTopRatedTVshow = () =>{
    return async function(dispatch) {
     const response = await axios.get(request.fetchTopRatedTVshow)
    //  console.log(response.data.results)
     dispatch({type: ActionTypes.FETCH_TOPRATED_TVSHOWS,
         payload: response.data.results})
    }
 
 }

 export const selectedTVShow = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/tv/${id}?api_key=${API_KEY}`)
    dispatch({type: ActionTypes.SELECTED_TVSHOW,
        payload: response.data})
   }

}
export const removeSelectedTV = () =>{
   return{
      type: ActionTypes.REMOVE_SELECTED_TV,
      // payload: text
  }

}
export const fetchTVTrailer = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/tv/${id}/videos?api_key=${API_KEY}`)
   //  console.log(response.data.results)
    dispatch({type: ActionTypes.FETCH_TV_TRAILER,
        payload: response.data.results})
   }
   
}
export const fetchCastTV = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/tv/${id}/credits?api_key=${API_KEY}`)
   //  console.log(response.data.cast)
    dispatch({type: ActionTypes.FETCH_CAST_TV,
        payload: response.data.cast})
   }
   
}
export const fetchSimilarTV = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    
    dispatch({type: ActionTypes.FETCH_SIMILAR_TV,
        payload: response.data.results})
   }

}
export const fetchEpisodes = (seasonnumber,id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/tv/${id}/season/${seasonnumber}?api_key=${API_KEY}&language=en-US`)
  
    dispatch({type: ActionTypes.FETCH_EPISODES,
        payload: response.data.episodes})
   }

}