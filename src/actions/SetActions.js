export const GET_POKEMON_SET_REQUEST = 'GET_POKEMON_SET_REQUEST'
export const GET_POKEMON_SET_SUCCESS = 'GET_POKEMON_SET_SUCCESS'


export function itemsIsFetching() {
    return {
        type: GET_POKEMON_SET_REQUEST,
    };
}

export function itemsFetchDataSuccess(cards) {
    return dispatch => {
        dispatch({
            type: GET_POKEMON_SET_SUCCESS,
            payload: cards.cards
        })
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsFetching(true));
        return fetch(url)
            .then((res) => res.json())
            .then(
                data => {
                    dispatch(itemsFetchDataSuccess(data))
                }

    )
    };
}
