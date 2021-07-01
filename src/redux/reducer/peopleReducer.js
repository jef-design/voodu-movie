import { ActionTypes } from "../constants/types";

const defaultState = {

    person: [],
    personmovies: [],
    persontvshows: [],
    popularpeople: [],
    // loading: false,
};

const peopleReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_POPULAR_PEOPLE:
            return { ...state,
                 popularpeople: payload, 
                 loading: false };
        case ActionTypes.FETCH_PEOPLE:
            return { ...state,
                 person: payload };
        case ActionTypes.FETCH_PEOPLE_MOVIES:
            return { ...state, 
                personmovies: payload };
        case ActionTypes.FETCH_PEOPLE_TV:
            return { ...state, 
                persontvshows: payload };
        case ActionTypes.FETCH_POPULAR_TVSHOWS:
            return { ...state, 
                Ptvshow: payload };
        default:
            return state;
    }
};
export default peopleReducer;
