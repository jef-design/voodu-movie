import { ActionTypes } from "../constants/types";

const defaultState = {
    episodes: [],
};

const episodesReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
            case ActionTypes.FETCH_EPISODES:
            return { ...state, 
                episodes: payload };
        default:
            return state;
    }
};
export default episodesReducer;