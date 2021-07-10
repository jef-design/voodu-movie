import {ActionTypes} from '../constants/types'

const defaultState = {

    movie: [],
    tv: [],
    people: []
    
}

const searchResultReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SEARCHED_MOVIE:
            return { ...state, movie: payload };
        case ActionTypes.SEARCHED_TV:
            return { ...state, tv: payload };
        case ActionTypes.SEARCHED_PEOPLE:
            return { ...state, people: payload };
               
        default:
            return state;
    }
}
export default searchResultReducer;

