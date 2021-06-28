import { ActionTypes } from "../constants/types";

const defaultState = {
    movies: [],
    NWmovies: [],
    SMmovies: [],
    Pmovies: [],
    Umovies: [],
    Ptvshow: [],
    person: [],
    personmovies: [],
    popularpeople: [],
    loading: false,
};

const movieReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.MOVIES_LOADING:
            return { ...state,
                 loading: true };
        case ActionTypes.FETCH_TOPRATED_MOVIES:
            return { ...state,
                 movies: payload };
        case ActionTypes.FETCH_NOWPLAYING_MOVIES:
            return { ...state,
                 NWmovies: payload };
        case ActionTypes.FETCH_POPULAR_MOVIES:
            return { ...state, 
                Pmovies: payload };
        case ActionTypes.FETCH_UPCOMING_MOVIES:
            return { ...state, 
                Umovies: payload };
        case ActionTypes.FETCH_SIMILAR_MOVIES:
            return { ...state, 
                SMmovies: payload };
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
        case ActionTypes.FETCH_POPULAR_TVSHOWS:
            return { ...state, 
                Ptvshow: payload };
        default:
            return state;
    }
};
export default movieReducer;