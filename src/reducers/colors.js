import {
    SET_COLORS,
    GET_COLORS_REQUEST,
    GET_COLORS_SUCCESS,
    GET_COLORS_FAILURE
} from '../actions/colors';

const initialState = {
    isFetching: false,
    outer: [245, 100, 50],
    inner: [291, 100, 50]
}

function colors (state = initialState, action) {

    switch (action.type) {

        case SET_COLORS:
            return Object.assign({}, state, action.colors);

        case GET_COLORS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_COLORS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt
            }, action.colors);

        case GET_COLORS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });

        default:
            return state;
    }

}

export default colors;