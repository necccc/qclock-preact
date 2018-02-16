import {
    SET_DIM,
    GET_DIM_REQUEST,
    GET_DIM_SUCCESS,
    GET_DIM_FAILURE
} from '../actions/dim';

const initialState = {
    isFetching: false,
    from: 21,
    to: 6,
    level: 20,
    active: false
}

function colors (state = initialState, action) {

    switch (action.type) {

        case SET_DIM:
            return Object.assign({}, state, action.dim);

        case GET_DIM_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_DIM_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt
            }, action.dim);

        case GET_DIM_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });

        default:
            return state;
    }

}

export default colors;