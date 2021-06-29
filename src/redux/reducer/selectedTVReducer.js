import {ActionTypes} from '../constants/types'


const selectedMovieReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_TVSHOW:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_TV:
            return {}     
        // case ActionTypes.FETCH_CAST:
        //     return {...state, casts: payload} 
         default:
            return state;
    }
}


export default selectedMovieReducer;