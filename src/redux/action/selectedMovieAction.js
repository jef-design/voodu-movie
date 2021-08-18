import { ActionTypes} from '../constants/types';
import axios from '../../api/axios';

const API_KEY = process.env.REACT_APP_API_KEY


export const selectedMovie = (id) =>{
   return async function(dispatch) {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`)
    dispatch({type: ActionTypes.SELECTED_MOVIE,
        payload: response.data})
   }

}
export const removeSelectedMovie = () =>{
   return{
      type: ActionTypes.REMOVE_SELECTED_MOVIE,
      // payload: text
  }

}