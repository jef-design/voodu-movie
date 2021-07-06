import { ActionTypes } from "../constants/types";

const defaultState = {
    movies: [],
    NWmovies: [],
    SMmovies: [],
    Pmovies: [],
    Umovies: [],
    Ptvshow: [],
    // loading: false,
};

const movieReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        // case ActionTypes.FETCH_IS_LOADING:
        //     return { ...state,
        //          loading: true };
        case ActionTypes.FETCH_TOPRATED_MOVIES:
            return { ...state,
                 movies: payload,
                loading: false };
        case ActionTypes.FETCH_NOWPLAYING_MOVIES:
            return { ...state,
                 NWmovies: payload,
                 loading: false };
        case ActionTypes.FETCH_POPULAR_MOVIES:
            return { ...state, 
                Pmovies: payload,
                loading: false };
        case ActionTypes.FETCH_UPCOMING_MOVIES:
            return { ...state, 
                Umovies: payload };
        case ActionTypes.FETCH_SIMILAR_MOVIES:
            return { ...state, 
                SMmovies: payload };
         case ActionTypes.FETCH_SIMILAR_TV:
                return { ...state, 
                        SMmovies: payload };
        case ActionTypes.FETCH_POPULAR_TVSHOWS:
            return { ...state, 
                Ptvshow: payload };
        default:
            return state;
    }
};
export default movieReducer;
