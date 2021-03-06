import {ActionTypes} from '../constants/types'


const selectedMovieReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {}     
         default:
            return state;
    }
}


export default selectedMovieReducer;