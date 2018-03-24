import {
    SET_TIMEZONE,
    GET_TIMEZONE_REQUEST,
    GET_TIMEZONE_SUCCESS,
    GET_TIMEZONE_FAILURE
} from '../actions/timezone';

const initialState = {
	value: "Europe/Budapest"
}

function timezone (state = initialState, action) {

    switch (action.type) {
        case SET_TIMEZONE:
            return Object.assign({}, state, { value: action.timezone });

        case GET_TIMEZONE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_TIMEZONE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt
            }, { value: action.timezone });

        case GET_TIMEZONE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });

        default:
            return state;
    }

}

export default timezone;