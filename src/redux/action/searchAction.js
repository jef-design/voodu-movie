import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';

const API_KEY = `5cffc0e248a2072bdedd8248f5d9f423`;

export const searchedMovie = (query) =>{
    return async function(dispatch) {
     const response = await axios.get(request.searchedMovie+query)
    //  console.log(response.data.results)
     dispatch({type: ActionTypes.SEARCHED_MOVIE,
         payload: response.data.results})
    }
 
 }
 export const searchedTVShow = (query) =>{
    return async function(dispatch) {
     const response = await axios.get(request.searchedTVShow+query)
    //  console.log(response.data.results)
     dispatch({type: ActionTypes.SEARCHED_TV,
         payload: response.data.results})
    }
 
 }

