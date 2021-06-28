import { ActionTypes } from "../constants/types";

const defaultState = {
    airingtoday: [],
    ontv: [],
    topratedTV: [],
    loading: false,
};

const tvshowReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_AIRING_TODAY:
            return { ...state,
                 airingtoday: payload };
        case ActionTypes.FETCH_ON_TV:
            return { ...state,
                 ontv: payload };
        case ActionTypes.FETCH_TOPRATED_TVSHOWS:
            return { ...state, 
                topratedTV: payload };
        default:
            return state;
    }
};
export default tvshowReducer;
