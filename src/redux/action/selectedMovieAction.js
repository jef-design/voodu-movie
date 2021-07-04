import { ActionTypes} from '../constants/types';
import axios from '../../api/axios';

const API_KEY = `5cffc0e248a2072bdedd8248f5d9f423`;


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