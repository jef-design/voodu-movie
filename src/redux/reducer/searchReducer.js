import {ActionTypes} from '../constants/types'

const defaultState = {
    searchedmovie: [],
    searchedtv: [],
    text: "",
}

const searchReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SEARCHED_MOVIE:
            return { ...state, searchedmovie: payload };
        case ActionTypes.SEARCHED_TV:
            return { ...state, searchedtv: payload };
        case ActionTypes.SEARCHED_TEXT:
             return { ...state, text: payload };  
        case ActionTypes.REMOVE_SEARCHED_TEXT:
             return { ...state, text:"" };        
        default:
            return state;
    }
}
export default searchReducer;

