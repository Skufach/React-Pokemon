import {GET_SETS_REQUEST, GET_SETS_SUCCESS} from "../actions/SetsActions";
import {GET_POKEMON_SET_REQUEST, GET_POKEMON_SET_SUCCESS} from "../actions/SetActions";

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

export function setReducer(state = [], action) {
    switch (action.type) {
        case GET_POKEMON_SET_REQUEST:
            return {...state}

        case GET_POKEMON_SET_SUCCESS:
            return  action.payload.cards

        default:
            return {...state}
    }
}

