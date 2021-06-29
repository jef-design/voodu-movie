import {ActionTypes} from '../constants/types'

const defaultState = {

    trailer: [],

}

const fetchTrailerReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
            case ActionTypes.FETCH_MOVIE_TRAILER:
            return {...state, trailer: payload}
            case ActionTypes.FETCH_TV_TRAILER:
                return {...state, trailer: payload}
         default:
            return state;
    }
}
export default fetchTrailerReducer;