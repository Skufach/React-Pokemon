import {GET_POKEMON_SET_REQUEST, GET_POKEMON_SET_SUCCESS} from "../actions/SetActions";

const initialState = {
    cards: [],
    isFetching: false
}

export function setReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON_SET_REQUEST:
            return {...state, isFetching: true}

        case GET_POKEMON_SET_SUCCESS:
            return  {...state, cards: action.payload, isFetching: false}

        default:
            return state
    }
}