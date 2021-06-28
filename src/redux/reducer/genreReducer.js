import { ActionTypes } from "../constants/types";

const defaultState = {
    genreList: [],
    genremovies: [],
};

const genreReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_GENRE_LIST:
            return { ...state, genreList: payload };
        case ActionTypes.FETCH_GENRE:
            return { ...state, genremovies: payload };
        default:
            return state;
    }
};
export default genreReducer;
