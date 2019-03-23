export const GET_SETS_REQUEST = 'GET_SETS_REQUEST'
export const GET_SETS_SUCCESS = 'GET_SETS_SUCCESS'


export function itemsIsFetching() {
    return {
        type: GET_SETS_REQUEST,
    };
}

export function itemsFetchDataSuccess(sets) {
    return dispatch => {
        dispatch({
            type: GET_SETS_SUCCESS,
            payload: sets.sets
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
