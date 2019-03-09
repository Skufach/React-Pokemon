import {GET_SETS_REQUEST, GET_SETS_SUCCESS} from "../actions/SetsActions";


export function setsReducer(state = [], action) {
    switch (action.type) {
        case GET_SETS_REQUEST:
            return {...state}

        case GET_SETS_SUCCESS:
            return  action.payload.sets

        default:
            return {...state}
    }
}