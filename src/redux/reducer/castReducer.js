import {ActionTypes} from '../constants/types'

const defaultState = {
        casts: [],
}

const castReducer = (state = defaultState, {type, payload}) => {
    switch (type) {  
        case ActionTypes.FETCH_CAST:
            return {...state, casts: payload} 
         default:
            return state;
    }
}


export default castReducer;