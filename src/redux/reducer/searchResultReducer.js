import {ActionTypes} from '../constants/types'

const defaultState = {

    movie: [],
    tv: [],
    
}

const searchResultReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SEARCHED_MOVIE:
            return { ...state, movie: payload };
        case ActionTypes.SEARCHED_TV:
            return { ...state, tv: payload };
               
        default:
            return state;
    }
}
export default searchResultReducer;

