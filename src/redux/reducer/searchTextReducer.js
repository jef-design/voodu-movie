import {ActionTypes} from '../constants/types'

const defaultState = {
    text: "",
    // movie: [],
    // tv: [],
    
}

const searchTextReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SEARCHED_TEXT:
             return { ...state, text: payload };  
        case ActionTypes.REMOVE_SEARCHED_TEXT:
             return { ...state, text:"" }; 
        // case ActionTypes.SEARCHED_MOVIE:
        //     return { ...state, movie: payload };
        // case ActionTypes.SEARCHED_TV:
        //     return { ...state, tv: payload };
        default:
            return state;
    }
}
export default searchTextReducer;

