import { ActionTypes} from '../constants/types';
import request from '../../api/request';
import axios from '../../api/axios';



export const fetchGenreList = () =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchGenreList)
    dispatch({type: ActionTypes.FETCH_GENRE_LIST,
        payload: response.data.genres})
   }

}
export const fetchGenre = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(request.fetchGenre + id)
    console.log(id);
    console.log(response)
    dispatch({type: ActionTypes.FETCH_GENRE,
        payload: response.data.results})
   }

}
