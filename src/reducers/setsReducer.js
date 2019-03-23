import {GET_SETS_REQUEST, GET_SETS_SUCCESS} from "../actions/SetsActions";

const initialState = {
    sets: [],
    isFetching: false
}

export function setsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SETS_REQUEST:
            return {...state, isFetching: true}

        case GET_SETS_SUCCESS:
            return {...state, sets: action.payload, isFetching: false}

        default:
            return state
    }
}

