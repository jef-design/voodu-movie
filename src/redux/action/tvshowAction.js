import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';

const API_KEY = `5cffc0e248a2072bdedd8248f5d9f423`;


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